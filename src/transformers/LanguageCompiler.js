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
    return visitor.asmcode + '\n';  // POSIX requires all lines end with a line feed
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


// document: literal parameters?
CompilerVisitor.prototype.visitDocument = function(ctx) {
    // place the literal component on the stack
    this.visitLiteral(ctx.literal());
    // place the parameters on the stack
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
        // TODO: what do we do with these if they exist?
        // If they remain on the stack how do we know they are there?
    }
    // the literal component remains on the stack
};


// literal: element | structure | block
CompilerVisitor.prototype.visitLiteral = function(ctx) {
    this.visitChildren(ctx);
    // the element or structure remains on the stack
    // TODO: what happens if it is a block? bytcode remains on the stack?
};


// structure: '[' composite ']'
CompilerVisitor.prototype.visitStructure = function(ctx) {
    this.visitComposite(ctx.composite());
    // the composite remains on the stack
};


// composite: range | collection | table
CompilerVisitor.prototype.visitComposite = function(ctx) {
    this.visitChildren(ctx);
    // the range, collection, or table remains on the stack
};


// range: expression '..' expression
CompilerVisitor.prototype.visitRange = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.visitExpression(ctx.expression(1));
    // replace the two range values on the stack with a new range component
    this.builder.insertInvokeInstruction('range', 2);
    // the range component remains on the stack
};


// HACK: this method is missing from the generated visitor!
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
CompilerVisitor.prototype.visitCollection = function(ctx) {
    ctx.accept(this);
    // the collection remains on the stack
};


// inlineCollection: expression (',' expression)*
CompilerVisitor.prototype.visitInlineCollection = function(ctx) {
    // retrieve all the expressions
    var expressions = ctx.expression();
    // record how many expressions there are in this collection
    var size = expressions.length;
    // place the size of the collection on the stack
    this.builder.insertLoadInstruction('LITERAL', size);
    // replace the size value on the stack with a new dynamic array of that size
    this.builder.insertInvokeInstruction('dynamicArray', 1);
    // evaluate each expression
    for (var i = 0; i < expressions.length; i++) {
        // place the result of the next expression on the stack
        this.visitExpression(expressions[i]);
        // add the result as the next item in the dynamic array on the stack
        this.builder.insertSendInstruction('addItem', 1);
    }
    // the dynamic array remains on the stack
};


// newlineCollection: NEWLINE (expression NEWLINE)*
CompilerVisitor.prototype.visitNewlineCollection = function(ctx) {
    // retrieve all the expressions
    var expressions = ctx.expression();
    // record how many expressions there are in this collection
    var size = expressions.length;
    // place the size of the collection on the stack
    this.builder.insertLoadInstruction('LITERAL', size);
    // replace the size value on the stack with a new dynamic array of that size
    this.builder.insertInvokeInstruction('dynamicArray', 1);
    // evaluate each expression
    for (var i = 0; i < expressions.length; i++) {
        // place the result of the next expression on the stack
        this.visitExpression(expressions[i]);
        // add the result as the next item in the dynamic array on the stack
        this.builder.insertSendInstruction('addItem', 1);
        // the expression result has been removed from the stack
    }
    // the dynamic array remains on the stack
};


// emptyCollection: /*empty collection*/
CompilerVisitor.prototype.visitEmptyCollection = function(ctx) {
    // place the size of the collection on the stack
    this.builder.insertLoadInstruction('LITERAL', 0);
    // replace the size value on the stack with a new dynamic array of that size
    this.builder.insertInvokeInstruction('dynamicArray', 1);
    // the dynamic array remains on the stack
};


// HACK: this method is missing from the generated visitor!
CompilerVisitor.prototype.visitTable = function(ctx) {
    ctx.accept(this);
    // the table remains on the stack
};


// inlineTable: association (',' association)*
CompilerVisitor.prototype.visitInlineTable = function(ctx) {
    // retrieve all the associations
    var associations = ctx.association();
    // record how many associations there are in this table
    var size = associations.length;
    // place the size of the table on the stack
    this.builder.insertLoadInstruction('LITERAL', size);
    // replace the size value on the stack with a new hash table of that size
    this.builder.insertInvokeInstruction('hashTable', 1);
    // evaluate each association
    for (var i = 0; i < associations.length; i++) {
        // place the key and value of the next association on the stack
        this.visitAssociation(associations[i]);
        // add the key-value pair as the next association in the hash table on the stack
        this.builder.insertSendInstruction('setValue', 2);
        // the key and value have been removed from the stack
    }
    // the hash table remains on the stack
};


// newlineTable: NEWLINE (association NEWLINE)*
CompilerVisitor.prototype.visitNewlineTable = function(ctx) {
    // retrieve all the associations
    var associations = ctx.association();
    // record how many associations there are in this table
    var size = associations.length;
    // place the size of the table on the stack
    this.builder.insertLoadInstruction('LITERAL', size);
    // replace the size value on the stack with a new hash table of that size
    this.builder.insertInvokeInstruction('hashTable', 1);
    // evaluate each association
    for (var i = 0; i < associations.length; i++) {
        // place the key and value of the next association on the stack
        this.visitAssociation(associations[i]);
        // add the key-value pair as the next association in the hash table on the stack
        this.builder.insertSendInstruction('setValue', 2);
        // the key and value have been removed from the stack
    }
    // the hash table remains on the stack
};


// emptyTable: ':' /*empty table*/
CompilerVisitor.prototype.visitEmptyTable = function(ctx) {
    // place the size of the table on the stack
    this.builder.insertLoadInstruction('LITERAL', 0);
    // replace the size value on the stack with a new hash table of that size
    this.builder.insertInvokeInstruction('hashTable', 1);
    // the hash table remains on the stack
};


// association: key ':' expression
CompilerVisitor.prototype.visitAssociation = function(ctx) {
    // place the key component on the stack
    this.visitKey(ctx.key());
    // place the result of the value expression on the stack
    this.visitExpression(ctx.expression());
    // the key and value remain on the stack
};


// key: element parameters?
CompilerVisitor.prototype.visitKey = function(ctx) {
    // place the element component on the stack
    this.visitElement(ctx.element());
    // place the parameters on the stack
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
        // TODO: what do we do with these if they exist?
        // If they remain on the stack how do we know they are there?
    }
    // the element component remains on the stack
};


// parameters: '(' composite ')';
CompilerVisitor.prototype.visitParameters = function(ctx) {
    this.visitComposite(ctx.composite());
    // the composite remains on the stack
};


// script: SHELL statements EOF
CompilerVisitor.prototype.visitScript = function(ctx) {
    this.visitStatements(ctx.statements());
};


// block: '{' statements '}'
CompilerVisitor.prototype.visitBlock = function(ctx) {
    this.visitStatements(ctx.statements());
    // TODO: what remains on the stack? bytecode?
};


// HACK: this method is missing from the generated visitor!
CompilerVisitor.prototype.visitStatements = function(ctx) {
    ctx.accept(this);
};


// inlineStatements: statement (';' statement)*
CompilerVisitor.prototype.visitInlineStatements = function(ctx) {
    var statements = ctx.statement();  // retrieve all the statements
    this.visitStatement(statements[0]);
    for (var i = 1; i < statements.length; i++) {
        this.visitStatement(statements[i]);
    }
};


// newlineStatements: NEWLINE (statement NEWLINE)*
CompilerVisitor.prototype.visitNewlineStatements = function(ctx) {
    var statements = ctx.statement();  // retrieve all the statements
    this.depth++;
    for (var i = 0; i < statements.length; i++) {
        this.appendNewline();
        this.visitStatement(statements[i]);
    }
    this.depth--;
    this.appendNewline();
};


// emptyStatements: /*empty statements*/
CompilerVisitor.prototype.visitEmptyStatements = function(ctx) {
};


// statement: mainClause exceptionClause* finalClause?
CompilerVisitor.prototype.visitStatement = function(ctx) {
    this.visitMainClause(ctx.mainClause());
    var exceptionClauses = ctx.exceptionClause();
    for (var i = 0; i < exceptionClauses.length; i++) {
        this.visitExceptionClause(exceptionClauses[i]);
    }
    var finalClause = ctx.finalClause();
    if (finalClause) {
        this.visitFinalClause(finalClause);
    }
};


// mainClause: evaluateExpression | queueMessage | publishEvent | waitForEvent |
// continueTo | breakFrom | returnResult | throwException | ifThen | selectFrom |
// whileLoop | withLoop
CompilerVisitor.prototype.visitMainClause = function(ctx) {
    this.visitChildren(ctx);
};


// exceptionClause: 'catch' symbol 'matching' xception 'with' block
CompilerVisitor.prototype.visitExceptionClause = function(ctx) {
    this.visitSymbol(ctx.symbol());
    this.visitException(ctx.xception());
    this.visitBlock(ctx.block());
};



// finalClause: 'finish' 'with' block
CompilerVisitor.prototype.visitFinalClause = function(ctx) {
    this.visitBlock(ctx.block());
};


// evaluateExpression: (assignee op=(':=' | '?=' | '+=' | '-=' | '*=' | '/=' |
// '//=' | '^=' | 'a=' | 's=' | 'o=' | 'x='))? expression
CompilerVisitor.prototype.visitEvaluateExpression = function(ctx) {
    var assignee = ctx.assignee();
    if (assignee) {
        this.visitAssignee(assignee);
    }
    this.visitExpression(ctx.expression());
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
    var label = ctx.IDENTIFIER().getText();
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
    this.visitException(ctx.xception());
};


// xception: expression
CompilerVisitor.prototype.visitException = function(ctx) {
    this.visitExpression(ctx.expression());
};


// ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?
CompilerVisitor.prototype.visitIfThen = function(ctx) {
    var conditions = ctx.condition();
    var blocks = ctx.block();

    // handle first condition
    this.visitCondition(conditions[0]);
    this.visitBlock(blocks[0]);

    // handle optional additional conditions
    for (var i = 1; i < conditions.length; i++) {
        this.visitCondition(conditions[i]);
        this.visitBlock(blocks[i]);
    }

    // handle the optional final else block
    if (blocks.length > conditions.length) {
        this.visitBlock(blocks[blocks.length - 1]);
    }
};


// condition: expression
CompilerVisitor.prototype.visitCondition = function(ctx) {
    this.visitExpression(ctx.expression());
};


// selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?
CompilerVisitor.prototype.visitSelectFrom = function(ctx) {
    var options = ctx.option();
    var blocks = ctx.block();

    // handle the selection
    this.visitSelection(ctx.selection());

    // handle option blocks
    for (var i = 0; i < options.length; i++) {
        this.visitOption(options[i]);
        this.visitBlock(blocks[i]);
    }

    // handle the optional final else block
    if (blocks.length > options.length) {
        this.visitBlock(blocks[blocks.length - 1]);
    }
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
    this.visitCondition(ctx.condition());
    this.visitBlock(ctx.block());
};


// withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block
CompilerVisitor.prototype.visitWithLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
    }
    var symbol = ctx.symbol();
    if (symbol) {
        this.visitSymbol(symbol);
    }
    this.visitSequence(ctx.sequence());
    this.visitBlock(ctx.block());
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
    this.visitChildren(ctx);
};


// noneAny: 'none'
CompilerVisitor.prototype.visitNoneAny = function(ctx) {
};


// anyAny: 'any'
CompilerVisitor.prototype.visitAnyAny = function(ctx) {
};


// tag: TAG
CompilerVisitor.prototype.visitTag = function(ctx) {
};


// symbol: SYMBOL
CompilerVisitor.prototype.visitSymbol = function(ctx) {
};


// moment: MOMENT
CompilerVisitor.prototype.visitMoment = function(ctx) {
};


// reference: RESOURCE
CompilerVisitor.prototype.visitReference = function(ctx) {
};


// version: VERSION
CompilerVisitor.prototype.visitVersion = function(ctx) {
};


// HACK: this method is missing from the generated visitor!
CompilerVisitor.prototype.visitText = function(ctx) {
    ctx.accept(this);
};


// inlineText: TEXT
CompilerVisitor.prototype.visitInlineText = function(ctx) {
};


// blockText: TEXT_BLOCK
CompilerVisitor.prototype.visitBlockText = function(ctx) {
};


// binary: BINARY
CompilerVisitor.prototype.visitBinary = function(ctx) {
};


// HACK: this method is missing from the generated visitor!
CompilerVisitor.prototype.visitProbability = function(ctx) {
    ctx.accept(this);
};


// trueProbability: 'true'
CompilerVisitor.prototype.visitTrueProbability = function(ctx) {
};


// falseProbability: 'false'
CompilerVisitor.prototype.visitFalseProbability = function(ctx) {
};


// fractionalProbability: FRACTION
CompilerVisitor.prototype.visitFractionalProbability = function(ctx) {
};


// percent: real '%'
CompilerVisitor.prototype.visitPercent = function(ctx) {
    this.visitReal(ctx.real());
};


// HACK: this method is missing from the generated visitor!
CompilerVisitor.prototype.visitReal = function(ctx) {
    ctx.accept(this);
};


// constantReal: sign='-'? con=('e' | 'pi' | 'phi')
CompilerVisitor.prototype.visitConstantReal = function(ctx) {
    if (ctx.sign) {
        //this.asmcode += '-';
    }
};


// variableReal: FLOAT
CompilerVisitor.prototype.visitVariableReal = function(ctx) {
};


// imaginary: (real | sign='-')? 'i'
CompilerVisitor.prototype.visitImaginary = function(ctx) {
    var real = ctx.real();
    var sign = ctx.sign;
    if (real) {
        this.visitReal(real);
        if (real.con) {
            //this.asmcode += ' ';
        }
    } else if (sign) {
        //this.asmcode += '-';
    }
    //this.asmcode += 'i';
};


// HACK: this method is missing from the generated visitor!
CompilerVisitor.prototype.visitNumber = function(ctx) {
    ctx.accept(this);
};


// undefinedNumber: 'undefined'
CompilerVisitor.prototype.visitUndefinedNumber = function(ctx) {
};


// infiniteNumber: 'infinity'
CompilerVisitor.prototype.visitInfiniteNumber = function(ctx) {
};


// realNumber: real
CompilerVisitor.prototype.visitRealNumber = function(ctx) {
    this.visitReal(ctx.real());
};


// imaginaryNumber: imaginary
CompilerVisitor.prototype.visitImaginaryNumber = function(ctx) {
    this.visitImaginary(ctx.imaginary());
};


// complexNumber: '(' real del=(',' | 'e^') imaginary ')'
CompilerVisitor.prototype.visitComplexNumber = function(ctx) {
    this.visitReal(ctx.real());
    this.visitImaginary(ctx.imaginary());
};


// PRIVATE BUILDER CLASS

function InstructionBuilder() {
    this.asmcode = '';
    this.statementCounters = [];  // stack of counters
    this.labelPrefixes = [1];  // stack of prefix strings
    this.nextLabel = null;
    return this;
}
InstructionBuilder.prototype.constructor = InstructionBuilder;


InstructionBuilder.prototype.insertLabel = function(label) {
    // check for existing label
    if (this.nextLabel) {
        this.insertSkipInstruction();
    }

    // set the new label
    this.nextLabel = this.getLabelPrefix() + label;
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


InstructionBuilder.prototype.insertCopyInstruction = function(count) {
    var instruction;
    switch (count) {
        case 0:
            throw new Error('COMPILER: Attempted to insert a COPY instruction with a count of zero.');
        case 1:
            instruction = 'COPY COMPONENT';
            break;
        default:
            instruction = 'COPY COMPONENT ' + count + ' TIMES';
    }
    this.insertInstruction(instruction);
};


InstructionBuilder.prototype.insertRemoveInstruction = function(count) {
    var instruction;
    switch (count) {
        case 0:
            throw new Error('COMPILER: Attempted to insert a REMOVE instruction with zero components.');
        case 1:
            instruction = 'REMOVE COMPONENT';
            break;
        default:
            instruction = 'REMOVE ' + count + ' COMPONENTS';
    }
    this.insertInstruction(instruction);
};


InstructionBuilder.prototype.insertReverseInstruction = function(count) {
    var instruction;
    switch (count) {
        case 0:
            throw new Error('COMPILER: Attempted to insert a REVERSE instruction with zero components.');
        case 1:
            instruction = 'REVERSE COMPONENTS';
            break;
        default:
            instruction = 'REVERSE ' + count + ' COMPONENTS';
    }
    this.insertInstruction(instruction);
};
    

InstructionBuilder.prototype.insertLoadInstruction = function(type, value) {
    var instruction;
    switch (type) {
        case 'CONTEXT':
        case 'TARGET':
        case 'ITEM':
            instruction += 'LOAD ' + type;
            break;
        case 'ATTRIBUTE':
        case 'VARIABLE':
        case 'PARAMETER':
        case 'ARGUMENT':
        case 'LITERAL':
            instruction += 'LOAD ' + type + ' ' + value;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a LOAD instruction with an invalid type: ' + type);
    }
    this.insertInstruction(instruction);
};
    

InstructionBuilder.prototype.insertStoreInstruction = function(type, value) {
    var instruction;
    switch (type) {
        case 'CONTEXT':
        case 'TARGET':
        case 'ITEM':
            instruction += 'STORE ' + type;
            break;
        case 'ATTRIBUTE':
        case 'VARIABLE':
            instruction += 'LOAD ' + type + ' ' + value;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a STORE instruction with an invalid type: ' + type);
    }
    this.insertInstruction(instruction);
};
    

InstructionBuilder.prototype.insertInvokeInstruction = function(symbol, count) {
    var instruction;
    switch (count) {
        case 0:
            instruction = 'INVOKE ' + symbol;
            break;
        case 1:
            instruction = 'INVOKE ' + symbol + ' WITH ARGUMENT';
            break;
        default:
            instruction = 'INVOKE ' + symbol + ' WITH ' + count + ' ARGUMENTS';
    }
    this.insertInstruction(instruction);
};
    

InstructionBuilder.prototype.insertSendInstruction = function(symbol, count) {
    var instruction;
    switch (count) {
        case 0:
            instruction = 'SEND ' + symbol;
            break;
        case 1:
            instruction = 'SEND ' + symbol + ' WITH ARGUMENT';
            break;
        default:
            instruction = 'SEND ' + symbol + ' WITH ' + count + ' ARGUMENTS';
    }
    this.insertInstruction(instruction);
};
    

InstructionBuilder.prototype.insertQueueInstruction = function(symbol, count) {
    var instruction;
    switch (count) {
        case 0:
            instruction = 'QUEUE ' + symbol;
            break;
        case 1:
            instruction = 'QUEUE ' + symbol + ' WITH ARGUMENT';
            break;
        default:
            instruction = 'QUEUE ' + symbol + ' WITH ' + count + ' ARGUMENTS';
    }
    this.insertInstruction(instruction);
};
    

InstructionBuilder.prototype.insertPublishInstruction = function(count) {
    var instruction;
    switch (count) {
        case 0:
            throw new Error('COMPILER: Attempted to insert a PUBLISH instruction with zero events.');
        case 1:
            instruction = 'PUBLISH EVENT';
            break;
        default:
            instruction = 'PUBLISH ' + count + ' EVENTS';
    }
    this.insertInstruction(instruction);
};
    

InstructionBuilder.prototype.insertWaitInstruction = function(count) {
    var instruction;
    switch (count) {
        case 0:
            throw new Error('COMPILER: Attempted to insert a WAIT instruction with zero events.');
        case 1:
            instruction = 'WAIT FOR EVENT';
            break;
        default:
            instruction = 'WAIT FOR ' + count + ' EVENTS';
    }
    this.insertInstruction(instruction);
};
    

InstructionBuilder.prototype.insertPushInstruction = function(context, label) {
    var instruction;
    switch (context) {
        case 'BLOCK':
            instruction = 'PUSH ' + context + 'CONTEXT';
            break;
        case 'INSTRUCTION':
        case 'HANDLER':
            instruction = 'PUSH ' + context + 'CONTEXT ' + label;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a PUSH instruction with an invalid context: ' + context);
    }
};
    

InstructionBuilder.prototype.insertPopInstruction = function(context) {
    var instruction;
    switch (context) {
        case 'BLOCK':
        case 'INSTRUCTION':
        case 'HANDLER':
            instruction = 'POP ' + context + 'CONTEXT ';
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a POP instruction with an invalid context: ' + context);
    }
};
    

InstructionBuilder.prototype.insertJumpInstruction = function(context, label) {
    var instruction;
    switch (context) {
        case 'INSTRUCTION':
        case 'HANDLER':
            instruction = 'JUMP TO ' + context + label;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a JUMP instruction with an invalid context: ' + context);
    }
};
    

InstructionBuilder.prototype.insertBranchInstruction = function(condition, label) {
    var instruction;
    switch (condition) {
        case 'TRUE':
        case 'NOT TRUE':
        case 'LESS THAN ZERO':
        case 'NOT LESS THAN ZERO':
        case 'MORE THAN ZERO':
        case 'NOT MORE THAN ZERO':
        case 'EQUAL TO ZERO':
        case 'NOT EQUAL TO ZERO':
            instruction = 'BRANCH TO ' + label + ' ON ' + condition;
            break;
        default:
            throw new Error('COMPILER: Attempted to insert a BRANCH instruction with an invalid condition: ' + condition);
    }
};
    

InstructionBuilder.prototype.insertReturnInstruction = function(count) {
    var instruction;
    switch (count) {
        case 0:
            instruction = 'RETURN';
            break;
        case 1:
            instruction = 'RETURN RESULT';
            break;
        default:
            instruction = 'RETURN ' + count + ' RESULTS';
    }
    this.insertInstruction(instruction);
};
    

InstructionBuilder.prototype.insertHandleInstruction = function() {
    var instruction = 'HANDLE EXCEPTION';
    this.insertInstruction(instruction);
};


InstructionBuilder.prototype.pushStatementCounter = function() {
    this.statementCounters.push(1);  // first instruction number is always one
};


InstructionBuilder.prototype.incrementStatementCounter = function() {
    var current = this.statementCounters.pop();
    this.statementCounters.push(current + 1);
};



InstructionBuilder.prototype.popStatementCounter = function() {
    this.statementCounters.pop();
};


InstructionBuilder.prototype.pushLabelPrefix = function() {
    var prefix = '';
    for (var i = 0; i < this.statementCounters.length; i++) {
        prefix += this.statementCounters[i] + '.';
    }
    this.labelPrefixes.push(prefix);
};


InstructionBuilder.prototype.popLabelPrefix = function() {
    this.labelPrefixes.pop();
};


InstructionBuilder.prototype.getLabelPrefix = function() {
    // there is no: "this.labelPrefixes.peek()", oh well...
    return this.labelPrefixes[this.labelPrefixes.length - 1];
};
