/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
'use strict';

/*
 * This class defines a compiling visitor that "walks" a parse tree
 * produced by the BaliLanguageParser and generates the assembly code
 * that can be used to generate the bytecode for the Bali Virtual Machine™.
 */
var grammar = require('../grammar');
var Formatter = require('./LanguageFormatter').LanguageFormatter;


/**
 * This constructor creates a new compiler.
 * 
 * @constructor
 * @returns {LanguageCompiler} The new compiler.
 */
function LanguageCompiler() {
    return this;
}
LanguageCompiler.prototype.constructor = LanguageCompiler;
exports.LanguageCompiler = LanguageCompiler;


/**
 * This function takes a Bali block and compiles it into machine language.
 * 
 * @param {BlockContext} baliBlock The Bali block to be compiled.
 * @param {object} symbolTables The symbol tables for variables, labels, etc.
 * @returns {string} The assembly instruction code.
 */
LanguageCompiler.prototype.compileBlock = function(baliBlock, symbolTables) {
    var visitor = new CompilerVisitor(symbolTables);
    baliBlock.accept(visitor);
    return visitor.getResult() + '\n';  // POSIX requires all lines end with a line feed
};


// PRIVATE VISITOR CLASS

function CompilerVisitor(symbolTables) {
    grammar.BaliLanguageVisitor.call(this);
    if (symbolTables) {
        this.symbolTables = symbolTables;
    } else {
        this.symbolTables = {};
    }
    if (!this.symbolTables.attributes) this.symbolTables.attributes = [];
    if (!this.symbolTables.variables) this.symbolTables.variables = [];
    if (!this.symbolTables.parameters) this.symbolTables.parameters = [];
    if (!this.symbolTables.arguments) this.symbolTables.arguments = [];
    if (!this.symbolTables.literals) this.symbolTables.literals = [];
    if (!this.symbolTables.functions) this.symbolTables.functions = [];
    if (!this.symbolTables.messages) this.symbolTables.messages = [];
    this.builder = new InstructionBuilder();
    this.temporaryVariableCount = 1;
    return this;
}
CompilerVisitor.prototype = Object.create(grammar.BaliLanguageVisitor.prototype);
CompilerVisitor.prototype.constructor = CompilerVisitor;


/*
 * This method returns the resulting assembly source code after the compiler
 * is done walking the parse tree.
 * 
 * @returns {nm$_LanguageCompiler.CompilerVisitor.builder.asmcode}
 */
CompilerVisitor.prototype.getResult = function() {
    this.builder.finalize();
    return this.builder.asmcode;
};


// document: literal parameters?
CompilerVisitor.prototype.visitDocument = function(ctx) {
    // place the literal component on the execution stack
    this.visitLiteral(ctx.literal());
    // place the parameters on the execution stack
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
        // TODO: what do we do with these if they exist?
        // If they remain on the execution stack how do we know they are there?
    }
    // the literal component remains on the execution stack
};


// literal: element | structure | block
CompilerVisitor.prototype.visitLiteral = function(ctx) {
    this.visitChildren(ctx);
};


// parameters: '(' composite ')'
CompilerVisitor.prototype.visitParameters = function(ctx) {
    // place the parameters on the execution stack
    this.visitComposite(ctx.composite());
};


// structure: '[' composite ']'
CompilerVisitor.prototype.visitStructure = function(ctx) {
    this.visitComposite(ctx.composite());
};


// composite: range | array | table
CompilerVisitor.prototype.visitComposite = function(ctx) {
    this.visitChildren(ctx);
};


// range: value '..' value
CompilerVisitor.prototype.visitRange = function(ctx) {
    // place the result of the starting range value on the execution stack
    this.visitValue(ctx.value(0));
    // place the result of the ending range value on the execution stack
    this.visitValue(ctx.value(1));
    // replace the two range values on the execution stack with a new range component
    this.builder.insertInvokeInstruction('range', 2);
};


// array:
//     value (',' value)* |
//     NEWLINE (value NEWLINE)* |
//     /*empty array*/
CompilerVisitor.prototype.visitArray = function(ctx) {
    // retrieve all the values
    var values = ctx.value();
    // record how many values there are in this array
    var size = values.length;
    // place the size of the array on the execution stack
    this.builder.insertLoadInstruction('LITERAL', size);
    // replace the size value on the execution stack with a new array of that size
    this.builder.insertInvokeInstruction('array', 1);
    // evaluate each value
    for (var i = 0; i < values.length; i++) {
        // place the result of the next value on the execution stack
        this.visitValue(values[i]);
        // add the result as the next item in the array on the execution stack
        this.builder.insertInvokeInstruction('addItem', 2);
    }
    // the array remains on the execution stack
};
CompilerVisitor.prototype.visitInlineArray = function(ctx) {
    this.visitArray(ctx);
};
CompilerVisitor.prototype.visitNewlineArray = function(ctx) {
    this.visitArray(ctx);
};


// table:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty table*/
CompilerVisitor.prototype.visitTable = function(ctx) {
    // retrieve all the associations
    var associations = ctx.association();
    // record how many associations there are in this table
    var size = associations.length;
    // place the size of the table on the execution stack
    this.builder.insertLoadInstruction('LITERAL', size);
    // replace the size value on the execution stack with a new table of that size
    this.builder.insertInvokeInstruction('table', 1);
    // evaluate each association
    for (var i = 0; i < associations.length; i++) {
        // place the key and value of the next association on the execution stack
        this.visitAssociation(associations[i]);
        // add the key-value pair as the next association in the table on the execution stack
        this.builder.insertInvokeInstruction('setValue', 3);
        // the key and value have been removed from the execution stack
    }
    // the table remains on the execution stack
};
CompilerVisitor.prototype.visitInlineTable = function(ctx) {
    this.visitTable(ctx);
};
CompilerVisitor.prototype.visitNewlineTable = function(ctx) {
    this.visitTable(ctx);
};
CompilerVisitor.prototype.visitEmptyTable = function(ctx) {
    this.visitTable(ctx);
};


// association: key ':' value
CompilerVisitor.prototype.visitAssociation = function(ctx) {
    // place the key component on the execution stack
    this.visitKey(ctx.key());
    // place the result of the value value on the execution stack
    this.visitValue(ctx.value());
};


// key: element parameters?
CompilerVisitor.prototype.visitKey = function(ctx) {
    // place the element component on the execution stack
    this.visitElement(ctx.element());
    // place the parameters on the execution stack
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
        // TODO: what do we do with these if they exist?
        // If they remain on the execution stack how do we know they are there?
    }
    // the element component remains on the execution stack
};


// value: expression
CompilerVisitor.prototype.visitValue = function(ctx) {
    this.visitExpression(ctx.expression());
};


// script: SHELL statements EOF
CompilerVisitor.prototype.visitScript = function(ctx) {
    throw new Error('COMPILER: A script cannot be compiled, it must be interpreted.');
    //this.visitStatements(ctx.statements());
};


// block: '{' statements '}'
CompilerVisitor.prototype.visitBlock = function(ctx) {
    // create a new block context in the instruction builder
    this.builder.pushBlockContext();
    // compile the statements
    this.visitStatements(ctx.statements());
    // throw away the current block context in the instruction builder
    this.builder.popBlockContext();
};


// statements:
//     statement (';' statement)* |
//     NEWLINE (statement NEWLINE)* |
//     /*empty statements*/
CompilerVisitor.prototype.visitStatements = function(ctx) {
    var statements = ctx.statement();
    for (var i = 0; i < statements.length; i++) {
        this.visitStatement(statements[i]);
        this.builder.incrementStatementCount();
    }
};


// statement: mainClause exceptionClause* finalClause?
CompilerVisitor.prototype.visitStatement = function(ctx) {
    var exceptionClauses = ctx.exceptionClause();
    var finalClause = ctx.finalClause();
    var statementPrefix = this.builder.getStatementPrefix();

    // COMPILE THE MAIN CLAUSE
    this.visitMainClause(ctx.mainClause());
    // the main clause completed successfully
    var finalLabel = statementPrefix + (this.builder.getClauseNumber() + exceptionClauses.length) + '.FinalClause';
    if (finalClause) {
        // tell the VM to jump to the final clause block
        this.builder.insertJumpInstruction('BLOCK', finalLabel);
    }
    // the VM will jump back here after the final clause is done if one exists

    // COMPILE THE EXCEPTION CLAUSES
    if (exceptionClauses.length > 0) {
        // no exceptions occurred and final clause, if one exists, is done so jump to the end
        this.builder.insertJumpInstruction('INSTRUCTION', statementPrefix + 'Done');
        // when exceptions are thrown they will jump to here
        this.builder.insertLabel(statementPrefix + 'ExceptionClauses');
        // each clause checks for a match and handles it if it matches
        for (var i = 0; i < exceptionClauses.length; i++) {
            // the VM checks to see if the exception matches the template and handles it if so
            this.visitExceptionClause(exceptionClauses[i]);
            // no match, check the next one
        }
        // an exception was thrown and no matching exception handler was found
        if (finalClause) {
            // tell the VM to jump to the final clause block
            this.builder.insertJumpInstruction('BLOCK', finalLabel);
        }
        // the VM will jump back here after the final clause is done if one exists
        // return from the method with the unhandled exception on top of the execution stack
        this.builder.insertReturnInstruction('EXCEPTION');
    }

    // COMPILE THE FINAL CLAUSE
    if (finalClause) {
        // no exceptions occurred and the final clause, is done so jump to the end
        this.builder.insertJumpInstruction('INSTRUCTION', statementPrefix + 'Done');
        // jumps to final clause end up here
        this.visitFinalClause(finalClause);
        // the VM jumped back to the next instruction after where the final clause was called
    }

    if (exceptionClauses.length > 0 || finalClause) {
        this.builder.insertLabel(statementPrefix + 'Done');
    }
};


// mainClause:
//     evaluateExpression |
//     publishEvent |
//     queueMessage |
//     waitForMessage |
//     ifThen |
//     selectFrom |
//     whileLoop |
//     withLoop |
//     continueTo |
//     breakFrom |
//     returnResult |
//     throwException
CompilerVisitor.prototype.visitMainClause = function(ctx) {
    this.visitChildren(ctx);
};


// exceptionClause: 'catch' symbol 'matching' xception 'with' block
CompilerVisitor.prototype.visitExceptionClause = function(ctx) {
    var clausePrefix = this.builder.getClausePrefix();
    this.builder.insertLabel(clausePrefix + 'ExceptionClause');
    // retrieve the name of the symbol
    var symbol = ctx.symbol().SYMBOL().getText();
    // store the exception that is on top of the execution stack in the variable
    this.builder.insertStoreInstruction('VARIABLE', symbol);
    // place exception template on the execution stack
    this.visitXception(ctx.xception());
    // compare template with actual exception
    this.builder.insertInvokeInstruction('matches', 2);
    // the result of the comparison replaces the two operands on the execution stack
    var label = this.builder.getClausePrefix() + 'ExceptionClauseNoMatch';
    this.builder.insertBranchInstruction('NOT TRUE', label);
    // the VM executes the exception handler block
    this.visitBlock(ctx.block());
    // successfully handled the exception return VM to next statement after exception was thrown
    this.builder.insertReturnInstruction('HANDLER');
    // the handler did not match, try the next one
    this.builder.insertLabel(clausePrefix + 'ExceptionClauseNoMatch');
    // load the exception from the variable back on top of the execution stack
    this.builder.insertLoadInstruction('VARIABLE', symbol);
};


// finalClause: 'finish' 'with' block
CompilerVisitor.prototype.visitFinalClause = function(ctx) {
    // jumps to final clause end up here
    var clausePrefix = this.builder.getClausePrefix();

    this.builder.insertLabel(clausePrefix + 'FinalClause');
    // the VM executes the final clause
    this.visitBlock(ctx.block());
    // tell the VM to return to the address on top of the jump stack
    this.builder.insertReturnInstruction('BLOCK');
};


// evaluateExpression: (assignee op=(':=' | '?=' | '+=' | '-=' | '*=' | '/=' |
// '//=' | '^=' | 'a=' | 's=' | 'o=' | 'x='))? expression
CompilerVisitor.prototype.visitEvaluateExpression = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'EvaluateExpression');
    var assignee = ctx.assignee();
    var symbol = assignee ? assignee.symbol() : null;
    symbol = symbol ? symbol.SYMBOL().getText() : '$result';
    var component = assignee ? assignee.component() : null;
    var operator = assignee ? ctx.op.text : ':=';
    var parent = '$component' + this.temporaryVariableCount++;
    var index = '$index' + this.temporaryVariableCount++;

    if (component) {
        // load the parent of the component and index of the child onto the execution stack
        this.visitComponent(component);
        // save of the parent and index in temporary variables
        this.builder.insertStoreInstruction('VARIABLE', index);
        this.builder.insertStoreInstruction('VARIABLE', parent);
        // load the parent and index back onto the execution stack for after the operation
        this.builder.insertLoadInstruction('VARIABLE', parent);
        this.builder.insertLoadInstruction('VARIABLE', index);
        if (operator !== ':=') {
            // load a second copy of the parent and index back onto the execution stack
            this.builder.insertLoadInstruction('VARIABLE', parent);
            this.builder.insertLoadInstruction('VARIABLE', index);
            // load the value of the child onto the execution stack
            this.builder.insertInvokeInstruction('getValue', 2);
            // one copy of the parent and index have been replaced by the value of the child
        }
    } else if (operator !== ':=') {
        // load the current value of the target variable onto the top of the execution stack
        this.builder.insertLoadInstruction('VARIABLE', symbol);
    }

    // load the value of the expression onto the top of the execution stack
    this.visitExpression(ctx.expression());

    // replace the value on the top of the execution stack with the result of the operation
    switch (operator) {
        case ':=':
            // no operation, do nothing
            break;
        case '?=':
            // if the current value of the variable is 'none' replace it with the expression
            this.builder.insertInvokeInstruction('default', 2);
            // the resulting value is now on top of the execution stack
            break;
        case '+=':
            // add the expression to the current value of the variable
            this.builder.insertInvokeInstruction('sum', 2);
            // the sum of the values is now on top of the execution stack
            break;
        case '-=':
            // subtract the expression from the current value of the variable
            this.builder.insertInvokeInstruction('difference', 2);
            // the difference between the values is now on top of the execution stack
            break;
        case '*=':
            // multiply the expression by the current value of the variable
            this.builder.insertInvokeInstruction('product', 2);
            // the product of the values is now on top of the execution stack
            break;
        case '/=':
            // divide the value of the variable by the expression
            this.builder.insertInvokeInstruction('quotient', 2);
            // the quotient of the values is now on top of the execution stack
            break;
        case '//=':
            // divide the value of the variable by the expression and leave the remainder
            this.builder.insertInvokeInstruction('remainder', 2);
            // the remainder of the values is now on top of the execution stack
            break;
        case '^=':
            // raise the value of the variable to the power of the expression
            this.builder.insertInvokeInstruction('exponential');
            // the exponential of the values is now on top of the execution stack
            break;
        case 'a=':
            // determine the logical AND of the expression to the current value of the variable
            this.builder.insertInvokeInstruction('and', 2);
            // the logical AND of the values is now on top of the execution stack
            break;
        case 's=':
            // determine the logical SANS of the current value of the variable and the expression
            this.builder.insertInvokeInstruction('sans', 2);
            // the logical SANS of the values is now on top of the execution stack
            break;
        case 'o=':
            // determine the logical OR of the expression to the current value of the variable
            this.builder.insertInvokeInstruction('or', 2);
            // the logical OR of the values is now on top of the execution stack
            break;
        case 'x=':
            // determine the logical XOR of the expression to the current value of the variable
            this.builder.insertInvokeInstruction('xor', 2);
            // the logical XOR of the values is now on top of the execution stack
            break;
        default:
            throw new Error('COMPILER: Invalid operator passed to an EvaluateExpression clause: ' + operator);
    }

    if (component) {
        // store the result that is on top of the execution stack in the component
        this.builder.insertInvokeInstruction('setValue', 3);
    } else {
        // store the result that is on top of the execution stack in the variable
        this.builder.insertStoreInstruction('VARIABLE', symbol);
    }
};


// assignee: symbol | component
CompilerVisitor.prototype.visitAssignee = function(ctx) {
    // never called...
    this.visitChildren(ctx);
};


// component: variable indices
CompilerVisitor.prototype.visitComponent = function(ctx) {
    // place the value of the variable on the execution stack
    this.visitVariable(ctx.variable());
    // place the parent component and index of the last child component onto the execution stack
    this.visitIndices(ctx.indices());
};


// variable: IDENTIFIER
CompilerVisitor.prototype.visitVariable = function(ctx) {
    // load the value of the variable onto the top of the execution stack
    var variable = '$' + ctx.IDENTIFIER().getText();
    this.builder.insertLoadInstruction('VARIABLE', variable);
};


// indices: '[' array ']'
CompilerVisitor.prototype.visitIndices = function(ctx) {
    var indices = ctx.array().value();
    for (var i = 0; i <indices.length; i++) {
        var index = indices[i];
        // load the value of the index expression onto the top of the execution stack
        this.visitValue(index);
        if (i === indices.length - 1) break;  // leave the parent and final index on the stack
        // load the child component for that index onto the top of the execution stack
        this.builder.insertInvokeInstruction('getValue', 2);
    }
    // the parent component and index of the last child component are on top of the execution stack
};


// publishEvent: 'publish' event
CompilerVisitor.prototype.visitPublishEvent = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'PublishEvent');
    // place the value of the event onto the top of the execution stack
    this.visitEvent(ctx.event());
    // place the event on the event queue
    this.builder.insertInvokeInstruction('queueEvent', 1);
};


// event: expression
CompilerVisitor.prototype.visitEvent = function(ctx) {
    this.visitExpression(ctx.expression());
};


// queueMessage: 'queue' message 'on' queue
CompilerVisitor.prototype.visitQueueMessage = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'QueueMessage');
    // place the message and parameters onto the top of the execution stack
    this.visitMessage(ctx.message());
    // replace the message and parameters with a message component
    this.builder.insertInvokeInstruction('message', 2);
    // place the value of the queue onto the top of the execution stack
    this.visitQueue(ctx.queue());
    // place the message on the message queue
    this.builder.insertInvokeInstruction('addItem', 2);
};


// waitForMessage: 'wait' 'for' symbol 'from' queue
CompilerVisitor.prototype.visitWaitForMessage = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'WaitForMessage');
    var symbol = ctx.symbol().SYMBOL().getText();
    // place the value of the queue onto the top of the execution stack
    this.visitQueue(ctx.queue());
    // retrieve a message from the message queue and place it on top of the execution stack
    this.builder.insertInvokeInstruction('removeItem', 1);  // blocks until a message is available
    this.builder.insertStoreInstruction('VARIABLE', symbol);
};


// queue: expression
CompilerVisitor.prototype.visitQueue = function(ctx) {
    this.visitExpression(ctx.expression());
};


// ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?
CompilerVisitor.prototype.visitIfThen = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'IfThen');
    var conditions = ctx.condition();
    var blocks = ctx.block();
    var hasElseClause = blocks.length > conditions.length;
    var elseLabel = statementPrefix + (conditions.length + 1) + '.ElseClause';
    var endLabel = statementPrefix + 'EndIf';

    // check each condition
    for (var i = 0; i < conditions.length; i++) {
        var clausePrefix = this.builder.getClausePrefix();
        this.builder.insertLabel(clausePrefix + 'IfCondition');
        // place the condition value on top of the execution stack
        this.visitCondition(conditions[i]);
        // the result of the condition expression is now on top of the execution stack
        var nextLabel;
        if (i === conditions.length - 1) {
            // we are on the last condition
            if (hasElseClause) {
                nextLabel = elseLabel;
            } else {
                nextLabel = endLabel;
            }
        } else {
            nextLabel = statementPrefix + (this.builder.getClauseNumber() + 1) + 'IfCondition';
        }
        // if the condition is not true, the VM branches to the next condition or the end
        this.builder.insertBranchInstruction('NOT TRUE', nextLabel);
        // if the condition is true, then the VM enters the block
        this.visitBlock(blocks[i]);
        // all done
        if (hasElseClause || i < conditions.length - 1) {
            // not the last block so the VM jumps to the end of the statement
            this.builder.insertJumpInstruction('INSTRUCTION', endLabel);
        }
    }

    // compile the optional final else block
    if (hasElseClause) {
        this.builder.insertLabel(elseLabel);
        this.visitBlock(blocks[blocks.length - 1]);
    }

    this.builder.insertLabel(endLabel);
};


// condition: expression
CompilerVisitor.prototype.visitCondition = function(ctx) {
    this.visitExpression(ctx.expression());
};


// selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?
CompilerVisitor.prototype.visitSelectFrom = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'SelectFrom');
    var options = ctx.option();
    var blocks = ctx.block();
    var hasElseClause = blocks.length > options.length;
    var elseLabel = statementPrefix + (options.length + 1) + '.ElseClause';
    var endLabel = statementPrefix + 'EndSelect';

    // place the selection value on the top of the execution stack
    this.visitSelection(ctx.selection());
    // store off the selection value so that it can be used multiple times
    var selection = '$selection' + this.temporaryVariableCount++;
    this.builder.insertStoreInstruction('VARIABLE', selection);

    // check each option
    for (var i = 0; i < options.length; i++) {
        var clausePrefix = this.builder.getClausePrefix();
        this.builder.insertLabel(clausePrefix + 'SelectOption');
        // load the selection value onto the execution stack
        this.builder.insertLoadInstruction('VARIABLE', selection);
        // place the option value on top of the execution stack
        this.visitOption(options[i]);
        // the VM checks to see if the selection and option match
        this.builder.insertInvokeInstruction('matches', 2);
        var nextLabel;
        if (i === options.length - 1) {
            // we are on the last options
            if (hasElseClause) {
                nextLabel = elseLabel;
            } else {
                nextLabel = endLabel;
            }
        } else {
            nextLabel = statementPrefix + (this.builder.getClauseNumber() + 1) + 'SelectOption';
        }
        // if the option does not match, the VM branches to the next option or the end
        this.builder.insertBranchInstruction('NOT TRUE', nextLabel);
        // if the option matches, then the VM enters the block
        this.visitBlock(blocks[i]);
        // all done
        if (hasElseClause || i < options.length - 1) {
            // not the last block so the VM jumps to the end of the statement
            this.builder.insertJumpInstruction('INSTRUCTION', endLabel);
        }
    }

    // the VM executes the optional final else block
    if (hasElseClause) {
        this.builder.insertLabel(elseLabel);
        this.visitBlock(blocks[blocks.length - 1]);
    }

    this.builder.insertLabel(endLabel);
};


// selection: expression
CompilerVisitor.prototype.visitSelection = function(ctx) {
    this.visitExpression(ctx.expression());
};


// option: expression
CompilerVisitor.prototype.visitOption = function(ctx) {
    this.visitExpression(ctx.expression());
};


// whileLoop: (label ':')? 'while' condition 'do' block
CompilerVisitor.prototype.visitWhileLoop = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    var loopLabel = ctx.label();
    if (loopLabel) {
        loopLabel = loopLabel.IDENTIFIER().getText();
        loopLabel = loopLabel.charAt(0).toUpperCase() + loopLabel.slice(1);
    } else {
        loopLabel = 'WhileLoop';
    }
    this.builder.insertLabel(statementPrefix + loopLabel);
    this.builder.blocks.peek().loopLabel = loopLabel;
    // the VM places the result of the boolean condition on top of the execution stack
    this.visitCondition(ctx.condition());
    // if the condition is not true, the VM branches to the end
    this.builder.insertBranchInstruction('NOT TRUE', statementPrefix + 'EndWhile');
    // if the condition is true, then the VM enters the block
    this.visitBlock(ctx.block());
    // all done, the VM jumps to the end of the statement
    this.builder.insertJumpInstruction('INSTRUCTION', loopLabel);
    this.builder.insertLabel(statementPrefix + 'EndWhile');
};


// withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block
CompilerVisitor.prototype.visitWithLoop = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'WithLoop');
    // the VM evaluates the sequence expression and places the result on top of the execution stack
    this.visitSequence(ctx.sequence());
    // The VM replaces the sequence with a new iterator for the sequence on the execution stack
    this.builder.insertCallInstruction('$createIterator');
    // The VM stores the iterater into a temporary variable
    var iterator = '$iterator' + this.temporaryVariableCount++;
    this.builder.insertStoreInstruction('VARIABLE', iterator);
    // retrieve the name of the symbol or make a temporary variable
    var item = ctx.symbol();
    if (item) {
        item = item.SYMBOL().getText();
    } else {
        item = '$item' + this.temporaryVariableCount++;
    }

    // label the start of the loop
    var loopLabel = ctx.label();
    if (loopLabel) {
        loopLabel = loopLabel.IDENTIFIER().getText();
        loopLabel = loopLabel.charAt(0).toUpperCase() + loopLabel.slice(1);
    } else {
        loopLabel = 'WithItem';
    }
    this.builder.insertLabel(statementPrefix + loopLabel);
    this.builder.blocks.peek().loopLabel = loopLabel;
    // the VM loads the iterator onto the top of the execution stack
    this.builder.insertLoadInstruction('VARIABLE', iterator);
    // the VM replaces the iterator with a boolean telling if there is another item to be retrieved
    this.builder.insertCallInstruction('$hasNext');
    // if the condition is not true, the VM branches to the end
    this.builder.insertBranchInstruction('NOT TRUE', statementPrefix + 'EndWith');
    // the VM loads the iterator onto the top of the execution stack
    this.builder.insertLoadInstruction('VARIABLE', iterator);
    // the VM replaces the iterator with the next item in the sequence
    this.builder.insertCallInstruction('$getNext');
    // store the item that is on top of the execution stack in the variable
    this.builder.insertStoreInstruction('VARIABLE', item);
    // the VM executes the block using the item if needed
    this.visitBlock(ctx.block());
    // the VM jumps to the top of the loop
    this.builder.insertJumpInstruction('INSTRUCTION', statementPrefix + loopLabel);
    // when all done, the VM jumps here
    this.builder.insertLabel('EndWith');
};


// sequence: expression
CompilerVisitor.prototype.visitSequence = function(ctx) {
    this.visitExpression(ctx.expression());
};


// continueTo: 'continue' ('to' label)?
CompilerVisitor.prototype.visitContinueTo = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'ContinueTo');
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
    } else {
        this.builder.insertJumpInstruction('INSTRUCTION', this.builder.blocks.peek().loopLabel);
    }
};


// breakFrom: 'break' ('from' label)?
CompilerVisitor.prototype.visitBreakFrom = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'BreakFrom');
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
    } else {
        this.builder.insertReturnInstruction('BLOCK');
    }
};


// label: IDENTIFIER
CompilerVisitor.prototype.visitLabel = function(ctx) {
    // TODO: walk the block stack looking for the label
    //var label = ctx.IDENTIFIER().getText();
};


// returnResult: 'return' result?
CompilerVisitor.prototype.visitReturnResult = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'ReturnResult');
    var result = ctx.result();
    if (result) {
        // place the result on the top of the execution stack
        this.visitResult(result);
    }
    this.builder.insertReturnInstruction('METHOD');
};


// result: expression
CompilerVisitor.prototype.visitResult = function(ctx) {
    // place the value of the result on top of the execution stack
    this.visitExpression(ctx.expression());
};


// throwException: 'throw' xception
CompilerVisitor.prototype.visitThrowException = function(ctx) {
    var statementPrefix = this.builder.getStatementPrefix();
    this.builder.insertLabel(statementPrefix + 'ThrowException');
    // place the exception on the top of the execution stack
    this.visitXception(ctx.xception());
    this.builder.insertJumpInstruction('HANDLER', 'ExceptionClauses');
};


// xception: expression
CompilerVisitor.prototype.visitXception = function(ctx) {
    // place the value of the exception on top of the execution stack
    this.visitExpression(ctx.expression());
};


// HACK: this method is missing from the generated visitor!
CompilerVisitor.prototype.visitExpression = function(ctx) {
    ctx.accept(this);
};


// documentExpression: document
CompilerVisitor.prototype.visitDocumentExpression = function(ctx) {
    // place the document on top of the execution stack
    this.visitDocument(ctx.document());
};


// variableExpression: variable
CompilerVisitor.prototype.visitVariableExpression = function(ctx) {
    // place the value of the variable on top of the execution stack
    this.visitVariable(ctx.variable());
};


// funxionExpression: funxion
CompilerVisitor.prototype.visitFunxionExpression = function(ctx) {
    // place the result of the function invocation on top of the execution stack
    this.visitFunxion(ctx.funxion());
};


// precedenceExpression: '(' expression ')'
CompilerVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    // place the result of the expression on top of the execution stack
    this.visitExpression(ctx.expression());
};


// dereferenceExpression: '@' expression
CompilerVisitor.prototype.visitDereferenceExpression = function(ctx) {
    // place the result of the expression on top of the execution stack
    this.visitExpression(ctx.expression());
    // dereference the top value on the execution stack
    this.builder.insertInvokeInstruction('dereference', 1);
};


// componentExpression: expression indices
CompilerVisitor.prototype.visitComponentExpression = function(ctx) {
    // place the result of the expression on top of the execution stack
    this.visitExpression(ctx.expression());
    // load the parent of the component and index of the child onto the execution stack
    this.visitIndices(ctx.indices());
    // retrieve the value of the child at the given index of the parent component
    this.builder.insertInvokeInstruction('getValue', 2);
    // the parent and index have been replaced by the value of the child
};


// messageExpression: expression '.' message
CompilerVisitor.prototype.visitMessageExpression = function(ctx) {
    // place the value of the expression on top of the execution stack
    this.visitExpression(ctx.expression());
    // place the result of the sent message on top of the execution stack
    this.visitMessage(ctx.message());
};


// factorialExpression: expression '!'
CompilerVisitor.prototype.visitFactorialExpression = function(ctx) {
    // place the result of the expression on top of the execution stack
    this.visitExpression(ctx.expression());
    // take the factorial of the top value on the execution stack
    this.builder.insertInvokeInstruction('factorial', 1);
};


// exponentialExpression: <assoc=right> expression '^' expression
CompilerVisitor.prototype.visitExponentialExpression = function(ctx) {
    // place the result of the base expression on top of the execution stack
    this.visitExpression(ctx.expression(0));
    // place the result of the exponent expression on top of the execution stack
    this.visitExpression(ctx.expression(1));
    // raise the base to the exponent and place the result on top of the execution stack
    this.builder.insertInvokeInstruction('exponential', 2);
};


// inversionExpression: op=('-' | '/' | '*') expression
CompilerVisitor.prototype.visitInversionExpression = function(ctx) {
    // place the result of the expression on top of the execution stack
    this.visitExpression(ctx.expression());
    // perform the unary operation
    var operation = ctx.op.text;
    switch (operation) {
        case '-':
            // take the additive inverse of the value on top of the execution stack
            this.builder.insertInvokeInstruction('negative', 1);
            break;
        case '/':
            // take the multiplicative inverse of the value on top of the execution stack
            this.builder.insertInvokeInstruction('inverse', 1);
            break;
        case '*':
            // take the complex conjugate of the value on top of the execution stack
            this.builder.insertInvokeInstruction('conjugate', 1);
            break;
        default:
            throw new Error('COMPILER: Invalid unary operator found: "' + operation + '"');
    }
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
CompilerVisitor.prototype.visitArithmeticExpression = function(ctx) {
    // place the result of the first operand expression on top of the execution stack
    this.visitExpression(ctx.expression(0));
    // place the result of the second operand expression on top of the execution stack
    this.visitExpression(ctx.expression(1));
    // perform the binary operation
    var operation = ctx.op.text;
    switch (operation) {
        case '*':
            // find the product of the two values on top of the execution stack
            this.builder.insertInvokeInstruction('product', 2);
            break;
        case '/':
            // find the quotient of the two values on top of the execution stack
            this.builder.insertInvokeInstruction('quotient', 2);
            break;
        case '//':
            // find the remainder of the two values on top of the execution stack
            this.builder.insertInvokeInstruction('remainder', 2);
            break;
        case '+':
            // find the sum of the two values on top of the execution stack
            this.builder.insertInvokeInstruction('sum', 2);
            break;
        case '-':
            // find the difference of the two values on top of the execution stack
            this.builder.insertInvokeInstruction('difference', 2);
            break;
        default:
            throw new Error('COMPILER: Invalid binary operator found: "' + operation + '"');
    }
};


// magnitudeExpression: '|' expression '|'
CompilerVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    // place the result of the expression on top of the execution stack
    this.visitExpression(ctx.expression());
    // find the magnitude of the top value on the execution stack
    this.builder.insertInvokeInstruction('magnitude', 1);
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
CompilerVisitor.prototype.visitComparisonExpression = function(ctx) {
    // place the result of the first operand expression on top of the execution stack
    this.visitExpression(ctx.expression(0));
    // place the result of the second operand expression on top of the execution stack
    this.visitExpression(ctx.expression(1));
    // perform the comparison operation
    var operation = ctx.op.text;
    switch (operation) {
        case '<':
            // determine whether or not the first value is less than the second value
            this.builder.insertInvokeInstruction('less', 2);
            break;
        case '=':
            // determine whether or not the first value is equal to the second value
            this.builder.insertInvokeInstruction('equal', 2);
            break;
        case '>':
            // determine whether or not the first value is more than the second value
            this.builder.insertInvokeInstruction('more', 2);
            break;
        case 'is':
            // determine whether or not the first value is the same value as the second value
            this.builder.insertInvokeInstruction('is', 2);
            break;
        case 'matches':
            // determine whether or not the first value matches the second value
            this.builder.insertInvokeInstruction('matches', 2);
            break;
        default:
            throw new Error('COMPILER: Invalid comparison operator found: "' + operation + '"');
    }
};


// complementExpression: 'not' expression
CompilerVisitor.prototype.visitComplementExpression = function(ctx) {
    // place the result of the expression on top of the execution stack
    this.visitExpression(ctx.expression());
    // find the logical complement of the top value on the execution stack
    this.builder.insertInvokeInstruction('complement', 1);
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
CompilerVisitor.prototype.visitLogicalExpression = function(ctx) {
    // place the result of the first operand expression on top of the execution stack
    this.visitExpression(ctx.expression(0));
    // place the result of the second operand expression on top of the execution stack
    this.visitExpression(ctx.expression(1));
    // perform the logical operation
    var operation = ctx.op.text;
    switch (operation) {
        case 'and':
            // find the logical AND of the two values on top of the execution stack
            this.builder.insertInvokeInstruction('and', 2);
            break;
        case 'sans':
            // find the logical SANS of the two values on top of the execution stack
            this.builder.insertInvokeInstruction('sans', 2);
            break;
        case 'xor':
            // find the logical XOR of the two values on top of the execution stack
            this.builder.insertInvokeInstruction('xor', 2);
            break;
        case 'or':
            // find the logical OR of the two values on top of the execution stack
            this.builder.insertInvokeInstruction('or', 2);
            break;
        default:
            throw new Error('COMPILER: Invalid logical operator found: "' + operation + '"');
    }
};


// defaultExpression: expression '?' expression
CompilerVisitor.prototype.visitDefaultExpression = function(ctx) {
    // place the result of the first operand expression on top of the execution stack
    this.visitExpression(ctx.expression(0));
    // place the result of the second operand expression on top of the execution stack
    this.visitExpression(ctx.expression(1));
    // find the actual value of the top value on the execution stack
    this.builder.insertInvokeInstruction('default', 2);
};


// funxion: IDENTIFIER parameters
CompilerVisitor.prototype.visitFunxion = function(ctx) {
    var name = ctx.IDENTIFIER().getText();
    // load the parameters structure onto the top of the execution stack
    this.visitParameters(ctx.parameters());
    // call the method associated with the function
    this.builder.insertCallInstruction(name, 1);
    // the result of the method call remains on the execution stack
};


// message: IDENTIFIER parameters
CompilerVisitor.prototype.visitMessage = function(ctx) {
    var name = ctx.IDENTIFIER().getText();
    // load the parameters structure onto the top of the execution stack
    this.visitParameters(ctx.parameters());
    // call the method associated with the message
    this.builder.insertCallInstruction(name, 2);  // the target component is the first parameter
    // the result of the method call remains on the execution stack
};


// element: any | tag | symbol | moment | reference | version | text | binary |
//  probability | percent | number
CompilerVisitor.prototype.visitElement = function(ctx) {
    var formatter = new Formatter();
    var literal = formatter.formatDocument(ctx);
    this.builder.insertLoadInstruction('LITERAL', literal);
};


// PRIVATE BUILDER CLASS

// define the missing stack function for Array
Array.prototype.peek = function() {
    return this[this.length - 1];
};


/*
 * This helper class is used to construct the Bali assembly source code. It
 * maintains a stack of block context objects that track the current statement
 * number and clause number within each block as well as the label prefixes for
 * each level.  A prefix is a dot separated sequence of positive numbers defining
 * alternately the statement number and clause number.  For example, a prefix of
 * '2.3.4.' would correspond to the fourth statement in the third clause of the
 * second statement in the main block.
 */
function InstructionBuilder() {
    this.asmcode = '';
    this.blocks = [];  // stack of block contexts
    this.nextLabel = null;
    return this;
}
InstructionBuilder.prototype.constructor = InstructionBuilder;


/*
 * This method pushes a new block context onto the block stack and initializes
 * it based on the parent block context if one exists.
 */
InstructionBuilder.prototype.pushBlockContext = function() {
    if (this.blocks.length > 0) {
        var block = this.blocks.peek();
        this.blocks.push({
            clauseCount: 1,
            statementCount: 1,
            prefix: block.prefix + block.statementCount + '.' + block.clauseCount + '.'
        });
        block.clauseCount++;
    } else {
        this.blocks.push({
            clauseCount: 1,
            statementCount: 1,
            prefix: ''
        });
    }
};


/*
 * This method pops off the current block context when the compiler is done processing
 * that block.
 */
InstructionBuilder.prototype.popBlockContext = function() {
    this.blocks.pop();
};


/*
 * This method returns the number of the current clause within its block context. For
 * example a 'then' clause within an 'if then else' statement would be the first clause
 * and the 'else' clause would be the second clause. Exception clauses and final clauses
 * are also included in the numbering.
 */
InstructionBuilder.prototype.getClauseNumber = function() {
    var block = this.blocks.peek();
    var number = block.clauseCount;
    return number;
};


/*
 * This method returns the number of the current statement within its block context. The
 * statements are numbered sequentially starting with the number 1.
 */
InstructionBuilder.prototype.getStatementNumber = function() {
    var block = this.blocks.peek();
    var number = block.statementCount;
    return number;
};


/*
 * This method increments by one the statement counter within the current block context.
 */
InstructionBuilder.prototype.incrementStatementCount = function() {
    var block = this.blocks.peek();
    block.statementCount++;
};


/*
 * This method returns the label prefix for the current instruction within the current
 * block context.
 */
InstructionBuilder.prototype.getStatementPrefix = function() {
    var block = this.blocks.peek();
    var prefix = block.prefix + this.getStatementNumber() + '.';
    return prefix;
};


/*
 * This method returns the label prefix for the current clause within the current
 * block context.
 */
InstructionBuilder.prototype.getClausePrefix = function() {
    var prefix = this.getStatementPrefix() + this.getClauseNumber() + '.';
    return prefix;
};


/*
 * This method sets the label to be used for the next instruction. If a label has
 * already been set, then the existing label is used to label a new 'skip'
 * instruction that is inserted.
 */
InstructionBuilder.prototype.insertLabel = function(label) {
    // check for existing label
    if (this.nextLabel) {
        this.insertSkipInstruction();
    }

    // set the new label
    this.nextLabel = label;
};


/*
 * This method inserts into the assembly source code the specified instruction. If
 * a label is pending it is prepended to the instruction.
 */
InstructionBuilder.prototype.insertInstruction = function(instruction) {
    if (this.nextLabel) {
        this.asmcode += '\n' + this.nextLabel + ':\n';
        this.nextLabel = null;
    }
    this.asmcode += instruction + '\n';
};


/*
 * This method inserts a 'skip' instruction into the assembly source code.
 */
InstructionBuilder.prototype.insertSkipInstruction = function() {
    var instruction = 'SKIP INSTRUCTION';
    this.insertInstruction(instruction);
};


/*
 * This method inserts a 'remove' instruction into the assembly source code.
 */
InstructionBuilder.prototype.insertRemoveInstruction = function(numberOfComponents) {
    var instruction;
    switch (numberOfComponents) {
        case 0:
            throw new Error('COMPILER: Attempted to insert a REMOVE instruction with zero components.');
        case 1:
            instruction = 'REMOVE COMPONENT';
            break;
        default:
            instruction = 'REMOVE ' + numberOfComponents + ' COMPONENTS';
    }
    this.insertInstruction(instruction);
};


/*
 * This method inserts a 'load' instruction into the assembly source code.
 */
InstructionBuilder.prototype.insertLoadInstruction = function(type, value) {
    var instruction;
    switch (type) {
        case 'PARAMETER':
        case 'ARGUMENT':
        case 'VARIABLE':
            instruction = 'LOAD ' + type + ' ' + value;
            break;
        case 'LITERAL':
            instruction = 'LOAD ' + type + ' `' + value + '`';
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a LOAD instruction with an invalid type: ' + type);
    }
    this.insertInstruction(instruction);
};


/*
 * This method inserts a 'store' instruction into the assembly source code.
 */
InstructionBuilder.prototype.insertStoreInstruction = function(type, value) {
    var instruction;
    switch (type) {
        case 'VARIABLE':
            instruction = 'STORE ' + type + ' ' + value;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a STORE instruction with an invalid type: ' + type);
    }
    this.insertInstruction(instruction);
};


/*
 * This method inserts a 'invoke' instruction into the assembly source code.
 */
InstructionBuilder.prototype.insertInvokeInstruction = function(intrinsic, numberOfArguments) {
    var instruction;
    switch (numberOfArguments) {
        case 0:
            instruction = 'INVOKE INTRINSIC ' + intrinsic;
            break;
        case 1:
            instruction = 'INVOKE INTRINSIC ' + intrinsic + ' WITH ARGUMENT';
            break;
        default:
            instruction = 'INVOKE INTRINSIC ' + intrinsic + ' WITH ' + numberOfArguments + ' ARGUMENTS';
    }
    this.insertInstruction(instruction);
};


/*
 * This method inserts a 'branch' instruction into the assembly source code.
 */
InstructionBuilder.prototype.insertBranchInstruction = function(condition, label) {
    var instruction;
    switch (condition) {
        case 'NOT NONE':
        case 'NOT TRUE':
        case 'NOT MORE THAN ZERO':
        case 'NOT EQUAL TO ZERO':
            instruction = 'BRANCH TO ' + label + ' ON ' + condition;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a BRANCH instruction with an invalid condition: ' + condition);
    }
    this.insertInstruction(instruction);
};


/*
 * This method inserts a 'jump' instruction into the assembly source code.
 */
InstructionBuilder.prototype.insertJumpInstruction = function(context, label) {
    var instruction;
    switch (context) {
        case 'BLOCK':
        case 'HANDLER':
        case 'STATEMENT':
        case 'INSTRUCTION':
            instruction = 'JUMP TO ' + context + ' ' + label;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a JUMP instruction with an invalid context: ' + context);
    }
    this.insertInstruction(instruction);
};


/*
 * This method inserts a 'call' instruction into the assembly source code.
 */
InstructionBuilder.prototype.insertCallInstruction = function(method, numberOfArguments) {
    var instruction;
    switch (numberOfArguments) {
        case 0:
            instruction = 'CALL METHOD ' + method;
            break;
        case 1:
            instruction = 'CALL METHOD ' + method + ' WITH ARGUMENT';
            break;
        default:
            instruction = 'CALL METHOD ' + method + ' WITH ' + numberOfArguments + ' ARGUMENTS';
    }
    this.insertInstruction(instruction);
};


/*
 * This method inserts a 'return' instruction into the assembly source code.
 */
InstructionBuilder.prototype.insertReturnInstruction = function(context) {
    var instruction;
    switch (context) {
        case 'METHOD':
        case 'BLOCK':
        case 'HANDLER':
        case 'EXCEPTION':
            instruction = 'RETURN FROM ' + context;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a RETURN instruction with an invalid context: ' + context);
    }
    this.insertInstruction(instruction);
};


/*
 * This method finalizes the builder by adding a 'skip' instruction with any
 * outstanding label that has not yet been prepended to an instruction.
 */
InstructionBuilder.prototype.finalize = function() {
    // check for existing label
    if (this.nextLabel) {
        this.insertSkipInstruction();
    }
};
