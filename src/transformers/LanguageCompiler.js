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
    this.clauseCounters = [];
    this.clauseLabels = [];
    this.loopLabels = [];
    this.selectorFlags = [];
    this.temporaryVariableCounter = 1;
    return this;
}
CompilerVisitor.prototype = Object.create(grammar.BaliLanguageVisitor.prototype);
CompilerVisitor.prototype.constructor = CompilerVisitor;


CompilerVisitor.prototype.getResult = function(ctx) {
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
    // compile the concrete literal type
    this.visitChildren(ctx);
    // the element or structure remains on the execution stack
    // TODO: what happens if it is a block? bytcode remains on the execution stack?
};


// structure: '[' composite ']'
CompilerVisitor.prototype.visitStructure = function(ctx) {
    // compile the composite
    this.visitComposite(ctx.composite());
    // the composite remains on the execution stack
};


// composite: range | array | table
CompilerVisitor.prototype.visitComposite = function(ctx) {
    // compile the concrete composite type
    this.visitChildren(ctx);
    // the range, array, or table remains on the execution stack
};


// range: expression '..' expression
CompilerVisitor.prototype.visitRange = function(ctx) {
    // compile the starting range expression
    this.visitExpression(ctx.expression(0));
    // compile the ending range expression
    this.visitExpression(ctx.expression(1));
    // replace the two range values on the execution stack with a new range component
    this.builder.insertInvokeInstruction('$range', 2);
    // the range component remains on the execution stack
};


// array:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty array*/
CompilerVisitor.prototype.visitArray = function(ctx) {
    // retrieve all the expressions
    var expressions = ctx.expression();
    // record how many expressions there are in this array
    var size = expressions.length;
    // place the size of the array on the execution stack
    this.builder.insertLoadInstruction('LITERAL', size);
    // replace the size value on the execution stack with a new array of that size
    this.builder.insertInvokeInstruction('$array', 1);
    // evaluate each expression
    for (var i = 0; i < expressions.length; i++) {
        // place the result of the next expression on the execution stack
        this.visitExpression(expressions[i]);
        // add the result as the next item in the array on the execution stack
        this.builder.insertInvokeInstruction('$addItem', 2);
    }
    // the array remains on the execution stack
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
    this.builder.insertInvokeInstruction('$table', 1);
    // evaluate each association
    for (var i = 0; i < associations.length; i++) {
        // place the key and value of the next association on the execution stack
        this.visitAssociation(associations[i]);
        // add the key-value pair as the next association in the table on the execution stack
        this.builder.insertInvokeInstruction('$setValue', 3);
        // the key and value have been removed from the execution stack
    }
    // the table remains on the execution stack
};


// association: key ':' expression
CompilerVisitor.prototype.visitAssociation = function(ctx) {
    // place the key component on the execution stack
    this.visitKey(ctx.key());
    // place the result of the value expression on the execution stack
    this.visitExpression(ctx.expression());
    // the key and value remain on the execution stack
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


// parameters: '(' composite ')';
CompilerVisitor.prototype.visitParameters = function(ctx) {
    this.visitComposite(ctx.composite());
};


// script: SHELL statements EOF
CompilerVisitor.prototype.visitScript = function(ctx) {
    this.visitStatements(ctx.statements());
};


// block: '{' statements '}'
CompilerVisitor.prototype.visitBlock = function(ctx) {
    // BLOCK INITIALIZATION
    this.builder.pushBlockContext();

    // COMPILE THE STATEMENTS
    this.visitStatements(ctx.statements());

    // BLOCK INITIALIZATION
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
        this.builder.incrementStatementCounter();
    }
};


// statement: mainClause exceptionClause* finalClause?
CompilerVisitor.prototype.visitStatement = function(ctx) {
    var exceptionClauses = ctx.exceptionClause();
    if (exceptionClauses.length === 0) exceptionClauses = null;
    var finalClause = ctx.finalClause();

    // COMPILE THE MAIN CLAUSE
    this.visitMainClause(ctx.mainClause());
    // the main clause completed successfully
    if (finalClause) {
        // tell the VM to jump to the final clause block
        this.builder.insertJumpInstruction('BLOCK', 'FinalClause');
    }
    // the VM will jump back here after the final clause is done if one exists

    // COMPILE THE EXCEPTION CLAUSES
    if (exceptionClauses) {
        // no exceptions occurred and final clause, if one exists, is done so jump to the end
        this.builder.insertJumpInstruction('INSTRUCTION', 'Done');
        // when exceptions are thrown they will jump to here
        this.builder.insertLabel('ExceptionClauses');
        // each clause checks for a match and handles it if it matches
        for (var i = 0; i < exceptionClauses.length; i++) {
            // the VM checks to see if the exception matches the template and handles it if so
            this.visitExceptionClause(exceptionClauses[i]);
            // no match, check the next one
        }
        // an exception was thrown and no matching exception handler was found
        if (finalClause) {
            // tell the VM to jump to the final clause block
            this.builder.insertJumpInstruction('BLOCK', 'FinalClause');
        }
        // the VM will jump back here after the final clause is done if one exists
        // return from the method with the unhandled exception on top of the execution stack
        this.builder.insertReturnInstruction('METHOD');
    }

    // COMPILE THE FINAL CLAUSE
    if (finalClause) {
        // no exceptions occurred and the final clause, is done so jump to the end
        this.builder.insertJumpInstruction('INSTRUCTION', 'Done');
        // jumps to final clause end up here
        this.visitFinalClause(finalClause);
        // the VM jumped back to the next instruction after where the final clause was called
    }

    if (exceptionClauses || finalClause) {
        this.builder.insertLabel('Done');
    }
};


// mainClause: evaluateExpression | queueMessage | publishEvent | waitForEvent |
// continueTo | breakFrom | returnResult | throwException | ifThen | selectFrom |
// whileLoop | withLoop
CompilerVisitor.prototype.visitMainClause = function(ctx) {
    // compile the concrete clause type
    this.visitChildren(ctx);
};


// exceptionClause: 'catch' symbol 'matching' xception 'with' block
CompilerVisitor.prototype.visitExceptionClause = function(ctx) {
    var clauseNumber = this.builder.nextClauseNumber();
    this.builder.insertLabel('ExceptionClause' + clauseNumber);
    // retrieve the name of the symbol
    var symbol = ctx.symbol().SYMBOL().getText();
    // store the exception that is on top of the execution stack in the variable
    this.builder.insertStoreInstruction('VARIABLE', symbol);
    // place exception template on the execution stack
    this.visitXception(ctx.xception());
    // compare template with actual exception
    this.builder.insertInvokeInstruction('$matches', 2);
    // the result of the comparison replaces the two operands on the execution stack
    this.builder.insertBranchInstruction('NOT TRUE', 'ExceptionClauseNoMatch' + clauseNumber);
    // the VM executes the exception handler block
    this.visitBlock(ctx.block());
    // successfully handled the exception return VM to next statement after exception was thrown
    this.builder.insertReturnInstruction('HANDLER');
    // the handler did not match, try the next one
    this.builder.insertLabel('ExceptionClauseNoMatch' + clauseNumber);
    // load the exception from the variable back on top of the execution stack
    this.builder.insertLoadInstruction('VARIABLE', symbol);
};


// finalClause: 'finish' 'with' block
CompilerVisitor.prototype.visitFinalClause = function(ctx) {
    // jumps to final clause end up here
    this.builder.insertLabel('FinalClause');
    // the VM executes the final clause
    this.visitBlock(ctx.block());
    // tell the VM to return to the address on top of the jump stack
    this.builder.insertReturnInstruction('BLOCK');
};


// evaluateExpression: (assignee op=(':=' | '?=' | '+=' | '-=' | '*=' | '/=' |
// '//=' | '^=' | 'a=' | 's=' | 'o=' | 'x='))? expression
CompilerVisitor.prototype.visitEvaluateExpression = function(ctx) {
    this.builder.insertLabel('EvaluateExpression');

    // COMPILE THE ASSIGNEE
    var assignee = ctx.assignee();
    var target = assignee ? assignee.target() : null;
    var symbol = target ? target.symbol().SYMBOL().getText() : '$ignored';
    var component = assignee ? assignee.component() : null;
    var operator = assignee ? ctx.op.text : ':=';

    if (assignee && ctx.op.text !== ':=') {
        if (component) {
            // load the current value of the component onto the top of the execution stack
            // TODO: HOW???
        } else {
            // load the current value of the target variable onto the top of the execution stack
            this.builder.insertLoadInstruction('VARIABLE', symbol);
        }
    }

    // COMPILE THE EXPRESSION
    this.visitExpression(ctx.expression());
    // the value of the expression remains on the execution stack

    // COMPILE THE ASSIGNMENT
    switch (operator) {
        case ':=':
            // no operation, do nothing
            break;
        case '?=':
            // if the current value of the variable is 'none' replace it with the expression
            this.builder.insertInvokeInstruction('$default', 2);
            // the resulting value is now on top of the execution stack
            break;
        case '+=':
            // add the expression to the current value of the variable
            this.builder.insertInvokeInstruction('$sum', 2);
            // the sum of the values is now on top of the execution stack
            break;
        case '-=':
            // subtract the expression from the current value of the variable
            this.builder.insertInvokeInstruction('$difference', 2);
            // the difference between the values is now on top of the execution stack
            break;
        case '*=':
            // multiply the expression by the current value of the variable
            this.builder.insertInvokeInstruction('$product', 2);
            // the product of the values is now on top of the execution stack
            break;
        case '/=':
            // divide the value of the variable by the expression
            this.builder.insertInvokeInstruction('$quotient', 2);
            // the quotient of the values is now on top of the execution stack
            break;
        case '//=':
            // divide the value of the variable by the expression and leave the remainder
            this.builder.insertInvokeInstruction('$remainder', 2);
            // the remainder of the values is now on top of the execution stack
            break;
        case '^=':
            // raise the value of the variable to the power of the expression
            this.builder.insertInvokeInstruction('$exponential');
            // the exponential of the values is now on top of the execution stack
            break;
        case 'a=':
            // determine the logical AND of the expression to the current value of the variable
            this.builder.insertInvokeInstruction('$and', 2);
            // the logical AND of the values is now on top of the execution stack
            break;
        case 's=':
            // determine the logical SANS of the current value of the variable and the expression
            this.builder.insertInvokeInstruction('$sans', 2);
            // the logical SANS of the values is now on top of the execution stack
            break;
        case 'o=':
            // determine the logical OR of the expression to the current value of the variable
            this.builder.insertInvokeInstruction('$or', 2);
            // the logical OR of the values is now on top of the execution stack
            break;
        case 'x=':
            // determine the logical XOR of the expression to the current value of the variable
            this.builder.insertInvokeInstruction('$xor', 2);
            // the logical XOR of the values is now on top of the execution stack
            break;
        default:
            throw new Error('COMPILER: Invalid operator passed to an EvaluateExpression clause: ' + operator);
    }

    if (component) {
        // store the result that is on top of the execution stack in the component
        // TODO: HOW???
    } else {
        // store the result that is on top of the execution stack in the variable
        this.builder.insertStoreInstruction('VARIABLE', symbol);
    }
};


// assignee: target | component
CompilerVisitor.prototype.visitAssignee = function(ctx) {
    this.visitChildren(ctx);
};


// target: symbol
CompilerVisitor.prototype.visitTarget = function(ctx) {
    this.visitSymbol(ctx.symbol());
};


// component: variable indices
CompilerVisitor.prototype.visitComponent = function(ctx) {
    this.visitVariable(ctx.variable());
    this.visitIndices(ctx.indices());
};


// queueMessage: 'queue' message 'for' recipient
CompilerVisitor.prototype.visitQueueMessage = function(ctx) {
    this.visitMessage(ctx.message());
    this.visitRecipient(ctx.recipient());
};


// recipient: expression
CompilerVisitor.prototype.visitRecipient = function(ctx) {
    this.visitExpression(ctx.expression());
};


// publishEvent: 'publish' event
CompilerVisitor.prototype.visitPublishEvent = function(ctx) {
    this.visitEvent(ctx.event());
};


// waitForEvent: 'wait' 'for' symbol 'matching' event
CompilerVisitor.prototype.visitWaitForEvent = function(ctx) {
    this.visitSymbol(ctx.symbol());
    this.visitEvent(ctx.event());
};


// event: expression
CompilerVisitor.prototype.visitEvent = function(ctx) {
    this.visitExpression(ctx.expression());
};


// continueTo: 'continue' ('to' label)?
CompilerVisitor.prototype.visitContinueTo = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
    }
};


// breakFrom: 'break' ('from' label)?
CompilerVisitor.prototype.visitBreakFrom = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
    }
};


// label: name
CompilerVisitor.prototype.visitLabel = function(ctx) {
    // insert a custom label
    var label = ctx.IDENTIFIER().getText();
    this.builder.insertLabel('Custom' + label.charAt(0).toUpperCase() + label.slice(1));
};


// returnResult: 'return' result?
CompilerVisitor.prototype.visitReturnResult = function(ctx) {
    var result = ctx.result();
    if (result) {
        this.visitResult(result);
    }
};


// result: expression
CompilerVisitor.prototype.visitResult = function(ctx) {
    this.visitExpression(ctx.expression());
};


// throwException: 'throw' xception
CompilerVisitor.prototype.visitThrowException = function(ctx) {
    this.visitXception(ctx.xception());
};


// xception: expression
CompilerVisitor.prototype.visitXception = function(ctx) {
    this.visitExpression(ctx.expression());
};


// ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?
CompilerVisitor.prototype.visitIfThen = function(ctx) {
    var conditions = ctx.condition();
    var blocks = ctx.block();
    var hasElseBlock = blocks.length > conditions.length;

    // check each condition
    for (var i = 0; i < conditions.length; i++) {
        var clauseNumber = i + 1;
        this.builder.insertLabel('IfCondition' + clauseNumber);
        // place the condition value on top of the execution stack
        this.visitCondition(conditions[i]);
        // the result of the condition expression is now on top of the execution stack
        var nextLabel;
        if (i === conditions.length - 1) {
            // we are on the last condition
            if (hasElseBlock) {
                nextLabel = 'ElseBlock';
            } else {
                nextLabel = 'EndIf';
            }
        } else {
            nextLabel = 'IfCondition' + (clauseNumber + 1);
        }
        // if the condition is not true, the VM branches to the next condition or the end
        this.builder.insertBranchInstruction('NOT TRUE', nextLabel);
        // if the condition is true, then the VM enters the block
        this.visitBlock(blocks[i]);
        // all done
        if (hasElseBlock || i < conditions.length - 1) {
            // not the last block so the VM jumps to the end of the statement
            this.builder.insertJumpInstruction('INSTRUCTION', 'EndIf');
        }
    }

    // compile the optional final else block
    if (hasElseBlock) {
        this.builder.insertLabel('ElseBlock');
        this.visitBlock(blocks[blocks.length - 1]);
    }

    this.builder.insertLabel('EndIf');
};


// condition: expression
CompilerVisitor.prototype.visitCondition = function(ctx) {
    this.visitExpression(ctx.expression());
};


// selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?
CompilerVisitor.prototype.visitSelectFrom = function(ctx) {
    var options = ctx.option();
    var blocks = ctx.block();
    var hasElseBlock = blocks.length > options.length;

    // place the selection value on the top of the execution stack
    this.visitSelection(ctx.selection());
    // store off the selection value so that it can be used multiple times
    var selection = '$selection' + this.temporaryVariableCounter++;
    this.builder.insertStoreInstruction('VARIABLE', selection);

    // check each option
    for (var i = 0; i < options.length; i++) {
        var clauseNumber = i + 1;
        this.builder.insertLabel('SelectOption' + clauseNumber);
        // load the selection value onto the execution stack
        this.builder.insertLoadInstruction('VARIABLE', selection);
        // place the option value on top of the execution stack
        this.visitOption(options[i]);
        // the VM checks to see if the selection and option match
        this.builder.insertInvokeInstruction('$matches', 2);
        var nextLabel;
        if (i === options.length - 1) {
            // we are on the last options
            if (hasElseBlock) {
                nextLabel = 'ElseBlock';
            } else {
                nextLabel = 'EndSelect';
            }
        } else {
            nextLabel = 'SelectOption' + (clauseNumber + 1);
        }
        // if the option does not match, the VM branches to the next option or the end
        this.builder.insertBranchInstruction('NOT TRUE', nextLabel);
        // if the option matches, then the VM enters the block
        this.visitBlock(blocks[i]);
        // all done
        if (hasElseBlock || i < options.length - 1) {
            // not the last block so the VM jumps to the end of the statement
            this.builder.insertJumpInstruction('INSTRUCTION', 'EndSelect');
        }
    }

    // the VM executes the optional final else block
    if (hasElseBlock) {
        this.builder.insertLabel('ElseBlock');
        this.visitBlock(blocks[blocks.length - 1]);
    }

    this.builder.insertLabel('EndSelect');
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
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
    }
    this.builder.insertLabel('WhileCondition');
    // the VM places the result of the boolean condition on top of the execution stack
    this.visitCondition(ctx.condition());
    // if the condition is not true, the VM branches to the end
    this.builder.insertBranchInstruction('NOT TRUE', 'EndWhile');
    // if the condition is true, then the VM enters the block
    this.visitBlock(ctx.block());
    // all done, the VM jumps to the end of the statement
    this.builder.insertJumpInstruction('INSTRUCTION', 'WhileCondition');
    this.builder.insertLabel('EndWhile');
};


// withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block
CompilerVisitor.prototype.visitWithLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
    }
    // the VM evaluates the sequence expression and places the result on top of the execution stack
    this.visitSequence(ctx.sequence());
    // The VM replaces the sequence with a new iterator for the sequence on the execution stack
    this.builder.insertCallInstruction('$createIterator');
    // The VM stores the iterater into a temporary variable
    var iterator = '$iterator' + this.temporaryVariableCounter++;
    this.builder.insertStoreInstruction('VARIABLE', iterator);
    // retrieve the name of the symbol or make a temporary variable
    var item = ctx.symbol();
    if (item) {
        item = item.SYMBOL().getText();
    } else {
        item = '$item' + this.temporaryVariableCounter++;
    }
    this.builder.insertLabel('WithItem');
    // the VM loads the iterator onto the top of the execution stack
    this.builder.insertLoadInstruction('VARIABLE', iterator);
    // the VM replaces the iterator with a boolean telling if there is another item to be retrieved
    this.builder.insertCallInstruction('$hasNext');
    // if the condition is not true, the VM branches to the end
    this.builder.insertBranchInstruction('NOT TRUE', 'EndWith');
    // the VM loads the iterator onto the top of the execution stack
    this.builder.insertLoadInstruction('VARIABLE', iterator);
    // the VM replaces the iterator with the next item in the sequence
    this.builder.insertCallInstruction('$getNext');
    // store the item that is on top of the execution stack in the variable
    this.builder.insertStoreInstruction('VARIABLE', item);
    // the VM executes the block using the item if needed
    this.visitBlock(ctx.block());
    // all done, the VM jumps to the end of the statement
    this.builder.insertJumpInstruction('INSTRUCTION', 'WithItem');
    this.builder.insertLabel('EndWith');
};


// sequence: expression
CompilerVisitor.prototype.visitSequence = function(ctx) {
    this.visitExpression(ctx.expression());
};


// HACK: this method is missing from the generated visitor!
CompilerVisitor.prototype.visitExpression = function(ctx) {
    ctx.accept(this);
};


// documentExpression: document
CompilerVisitor.prototype.visitDocumentExpression = function(ctx) {
    this.visitDocument(ctx.document());
};


// variableExpression: variable
CompilerVisitor.prototype.visitVariableExpression = function(ctx) {
    this.visitVariable(ctx.variable());
};


// funxionExpression: funxion
CompilerVisitor.prototype.visitFunxionExpression = function(ctx) {
    this.visitFunxion(ctx.funxion());
};


// precedenceExpression: '(' expression ')'
CompilerVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    this.visitExpression(ctx.expression());
};


// dereferenceExpression: '@' expression
CompilerVisitor.prototype.visitDereferenceExpression = function(ctx) {
    this.visitExpression(ctx.expression());
};


// componentExpression: expression indices
CompilerVisitor.prototype.visitComponentExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.visitIndices(ctx.indices());
};


// messageExpression: expression '.' message
CompilerVisitor.prototype.visitMessageExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.visitMessage(ctx.message());
};


// factorialExpression: expression '!'
CompilerVisitor.prototype.visitFactorialExpression = function(ctx) {
    this.visitExpression(ctx.expression());
};


// exponentialExpression: <assoc=right> expression '^' expression
CompilerVisitor.prototype.visitExponentialExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.visitExpression(ctx.expression(1));
};


// inversionExpression: op=('-' | '/' | '*') expression
CompilerVisitor.prototype.visitInversionExpression = function(ctx) {
    var operation = ctx.op.text;
    var expression = ctx.expression();
    if (operation === '-') {
        if (expression.getText()[0] === "-") {
            //this.asmcode += ' ';  // must insert a space before a negative value!
        }
    }
    this.visitExpression(ctx.expression());
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
CompilerVisitor.prototype.visitArithmeticExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.visitExpression(ctx.expression(1));
};


// magnitudeExpression: '|' expression '|'
CompilerVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    this.visitExpression(ctx.expression());
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
CompilerVisitor.prototype.visitComparisonExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.visitExpression(ctx.expression(1));
};


// complementExpression: 'not' expression
CompilerVisitor.prototype.visitComplementExpression = function(ctx) {
    this.visitExpression(ctx.expression());
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
CompilerVisitor.prototype.visitLogicalExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.visitExpression(ctx.expression(1));
};


// defaultExpression: expression '?' expression
CompilerVisitor.prototype.visitDefaultExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.visitExpression(ctx.expression(1));
};


// variable: name
CompilerVisitor.prototype.visitVariable = function(ctx) {
    // load the variable onto the top of the execution stack
    var variable = '$' + ctx.IDENTIFIER().getText();
    this.builder.insertLoadInstruction('VARIABLE', variable);
};


// funxion: name parameters
CompilerVisitor.prototype.visitFunxion = function(ctx) {
    this.visitParameters(ctx.parameters());
};


// message: name parameters
CompilerVisitor.prototype.visitMessage = function(ctx) {
    this.visitParameters(ctx.parameters());
};


// indices: structure
CompilerVisitor.prototype.visitIndices = function(ctx) {
    this.visitStructure(ctx.structure());
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


function InstructionBuilder() {
    this.asmcode = '';
    this.blocks = [];  // stack of block contexts
    this.nextLabel = null;
    return this;
}
InstructionBuilder.prototype.constructor = InstructionBuilder;


InstructionBuilder.prototype.generateLabel = function(label) {
    return this.getPrefix() + label;
};


InstructionBuilder.prototype.getPrefix = function() {
    var prefix = '';  // initial value
    if (this.blocks.length > 0) {
        var block = this.blocks.peek();
        prefix = block.prefix + block.statementCounter + '.';
    }
    return prefix;
};


InstructionBuilder.prototype.nextClauseNumber = function() {
    var block = this.blocks.peek();
    var counter = block.clauseCounter++;
    return counter;
};


InstructionBuilder.prototype.pushBlockContext = function() {
    var statementCounter = 1;
    if (this.blocks.length > 0) statementCounter = this.blocks.peek().clauseCounter;
    var block = {
        prefix: this.getPrefix(),
        statementCounter: statementCounter,
        clauseCounter: 1
    };
    this.blocks.push(block);
};


InstructionBuilder.prototype.popBlockContext = function() {
    this.blocks.pop();
    if (this.blocks.length > 0) this.blocks.peek().clauseCounter++;
};


InstructionBuilder.prototype.incrementStatementCounter = function() {
    this.blocks.peek().statementCounter++;
};


InstructionBuilder.prototype.incrementClauseCounter = function() {
    this.blocks.peek().clauseCounter++;
};


InstructionBuilder.prototype.insertLabel = function(label) {
    // check for existing label
    if (this.nextLabel) {
        this.insertSkipInstruction();
    }

    // set the new label
    this.nextLabel = this.generateLabel(label);
};


InstructionBuilder.prototype.insertInstruction = function(instruction) {
    if (this.nextLabel) {
        this.asmcode += '\n' + this.nextLabel + ':\n';
        this.nextLabel = null;
    }
    this.asmcode += instruction + '\n';
};


InstructionBuilder.prototype.insertSkipInstruction = function() {
    var instruction = 'SKIP INSTRUCTION';
    this.insertInstruction(instruction);
};


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


InstructionBuilder.prototype.insertBranchInstruction = function(condition, label) {
    var instruction;
    switch (condition) {
        case 'NOT NONE':
        case 'NOT TRUE':
        case 'NOT MORE THAN ZERO':
        case 'NOT EQUAL TO ZERO':
            instruction = 'BRANCH TO ' + this.generateLabel(label) + ' ON ' + condition;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a BRANCH instruction with an invalid condition: ' + condition);
    }
    this.insertInstruction(instruction);
};


InstructionBuilder.prototype.insertJumpInstruction = function(context, label) {
    var instruction;
    switch (context) {
        case 'BLOCK':
        case 'HANDLER':
        case 'STATEMENT':
        case 'INSTRUCTION':
            instruction = 'JUMP TO ' + context + ' ' + this.generateLabel(label);
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a JUMP instruction with an invalid context: ' + context);
    }
    this.insertInstruction(instruction);
};


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


InstructionBuilder.prototype.finalize = function() {
    // check for existing label
    if (this.nextLabel) {
        this.insertSkipInstruction();
    }
};
