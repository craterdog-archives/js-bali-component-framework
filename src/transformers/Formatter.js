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

var grammar = require('../grammar');


/*
 * This class defines a formatting visitor that "walks" a parse tree
 * produced by the BaliLanguageParser and generates a canonical version of
 * the corresponding Bali source document. An optional padding may be
 * specified that is prepended to each line of the Bali document.
 */
function Formatter(padding) {
    grammar.BaliLanguageVisitor.call(this);
    this.padding = padding === undefined ? '' : padding;
    this.buffer = '';
    this.depth = 0;
    return this;
}
Formatter.prototype = Object.create(grammar.BaliLanguageVisitor.prototype);
Formatter.prototype.constructor = Formatter;
Formatter.prototype.indentation = '    ';  // indentation per level
exports.Formatter = Formatter;


// Private Helper Methods

Formatter.prototype.appendNewline = function() {
    this.buffer += '\n';
    this.buffer += this.getPadding();
};

Formatter.prototype.getPadding = function() {
    var padding = this.padding;
    for (var i = 0; i < this.depth; i++) {
        padding += Formatter.prototype.indentation;
    }
    return padding;
};


// Visitor Methods (One for Each Rule)

// document: literal parameters?
Formatter.prototype.visitDocument = function(ctx) {
    this.visitLiteral(ctx.literal());
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
    }
};


// literal: element | structure | block
Formatter.prototype.visitLiteral = function(ctx) {
    this.visitChildren(ctx);
};


// structure: '[' composite ']'
Formatter.prototype.visitStructure = function(ctx) {
    this.buffer += '[';
    this.visitComposite(ctx.composite());
    this.buffer += ']';
};


// composite: range | collection | table
Formatter.prototype.visitComposite = function(ctx) {
    this.visitChildren(ctx);
};


// range: expression '..' expression
Formatter.prototype.visitRange = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += '..';
    this.visitExpression(ctx.expression(1));
};


// HACK: this method is missing from the generated visitor!
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
Formatter.prototype.visitCollection = function(ctx) {
    ctx.accept(this);
};


// inlineCollection: expression (',' expression)*
Formatter.prototype.visitInlineCollection = function(ctx) {
    var expressions = ctx.expression();  // retrieve all the expressions
    this.visitExpression(expressions[0]);
    for (var i = 1; i < expressions.length; i++) {
        this.buffer += ', ';
        this.visitExpression(expressions[i]);
    }
};


// newlineCollection: NEWLINE (expression NEWLINE)*
Formatter.prototype.visitNewlineCollection = function(ctx) {
    var expressions = ctx.expression();  // retrieve all the expressions
    this.depth++;
    for (var i = 0; i < expressions.length; i++) {
        this.appendNewline();
        this.visitExpression(expressions[i]);
    }
    this.depth--;
    this.appendNewline();
};


// emptyCollection: /*empty collection*/
Formatter.prototype.visitEmptyCollection = function(ctx) {
};


// HACK: this method is missing from the generated visitor!
Formatter.prototype.visitTable = function(ctx) {
    ctx.accept(this);
};


// inlineTable: association (',' association)*
Formatter.prototype.visitInlineTable = function(ctx) {
    var associations = ctx.association();  // retrieve all the associations
    this.visitAssociation(associations[0]);
    for (var i = 1; i < associations.length; i++) {
        this.buffer += ', ';
        this.visitAssociation(associations[i]);
    }
};


// newlineTable: NEWLINE (association NEWLINE)*
Formatter.prototype.visitNewlineTable = function(ctx) {
    var associations = ctx.association();  // retrieve all the associations
    this.depth++;
    for (var i = 0; i < associations.length; i++) {
        this.appendNewline();
        this.visitAssociation(associations[i]);
    }
    this.depth--;
    this.appendNewline();
};


// emptyTable: ':' /*empty table*/
Formatter.prototype.visitEmptyTable = function(ctx) {
    this.buffer += ':';
};


// association: key ':' expression
Formatter.prototype.visitAssociation = function(ctx) {
    this.visitKey(ctx.key());
    this.buffer += ': ';
    this.visitExpression(ctx.expression());
};


// key: element parameters?
Formatter.prototype.visitKey = function(ctx) {
    this.visitElement(ctx.element());
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
    }
};


// parameters: '(' composite ')';
Formatter.prototype.visitParameters = function(ctx) {
    this.buffer += '(';
    this.visitComposite(ctx.composite());
    this.buffer += ')';
};


// script: SHELL statements EOF
Formatter.prototype.visitScript = function(ctx) {
    this.buffer += ctx.SHELL().getText();
    this.visitStatements(ctx.statements());
    this.buffer += ctx.EOF().getText();
};


// block: '{' statements '}'
Formatter.prototype.visitBlock = function(ctx) {
    this.buffer += '{';
    this.visitStatements(ctx.statements());
    this.buffer += '}';
};


// HACK: this method is missing from the generated visitor!
Formatter.prototype.visitStatements = function(ctx) {
    ctx.accept(this);
};


// inlineStatements: statement (';' statement)*
Formatter.prototype.visitInlineStatements = function(ctx) {
    var statements = ctx.statement();  // retrieve all the statements
    this.visitStatement(statements[0]);
    for (var i = 1; i < statements.length; i++) {
        this.buffer += '; ';
        this.visitStatement(statements[i]);
    }
};


// newlineStatements: NEWLINE (statement NEWLINE)*
Formatter.prototype.visitNewlineStatements = function(ctx) {
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
Formatter.prototype.visitEmptyStatements = function(ctx) {
};


// statement: mainClause exceptionClause* finalClause?
Formatter.prototype.visitStatement = function(ctx) {
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
Formatter.prototype.visitMainClause = function(ctx) {
    this.visitChildren(ctx);
};


// exceptionClause: 'catch' symbol 'matching' xception 'with' block
Formatter.prototype.visitExceptionClause = function(ctx) {
    this.buffer += ' catch ';
    this.visitSymbol(ctx.symbol());
    this.buffer += ' matching ';
    this.visitException(ctx.xception());
    this.buffer += ' with ';
    this.visitBlock(ctx.block());
};



// finalClause: 'finish' 'with' block
Formatter.prototype.visitFinalClause = function(ctx) {
    this.buffer += ' finish with ';
    this.visitBlock(ctx.block());
};


// evaluateExpression: (assignee op=(':=' | '?=' | '+=' | '-=' | '*=' | '/=' |
// '//=' | '^=' | 'a=' | 's=' | 'o=' | 'x='))? expression
Formatter.prototype.visitEvaluateExpression = function(ctx) {
    var assignee = ctx.assignee();
    if (assignee) {
        this.visitAssignee(assignee);
        this.buffer += ' ';
        this.buffer += ctx.op.text;
        this.buffer += ' ';
    }
    this.visitExpression(ctx.expression());
};


// assignee: target | component
Formatter.prototype.visitAssignee = function(ctx) {
    this.visitChildren(ctx);
};


// target: symbol
Formatter.prototype.visitTarget = function(ctx) {
    this.visitSymbol(ctx.symbol());
};


// component: variable indices
Formatter.prototype.visitComponent = function(ctx) {
    this.visitVariable(ctx.variable());
    this.visitIndices(ctx.indices());
};


// queueMessage: 'queue' message 'for' recipient
Formatter.prototype.visitQueueMessage = function(ctx) {
    this.buffer += 'queue ';
    this.visitMessage(ctx.message());
    this.buffer += ' for ';
    this.visitRecipient(ctx.recipient());
};


// recipient: expression
Formatter.prototype.visitRecipient = function(ctx) {
    this.visitExpression(ctx.expression());
};


// publishEvent: 'publish' event
Formatter.prototype.visitPublishEvent = function(ctx) {
    this.buffer += 'publish ';
    this.visitEvent(ctx.event());
};


// waitForEvent: 'wait' 'for' symbol 'matching' event
Formatter.prototype.visitWaitForEvent = function(ctx) {
    this.buffer += 'wait for ';
    this.visitSymbol(ctx.symbol());
    this.buffer += ' matching ';
    this.visitEvent(ctx.event());
};


// event: expression
Formatter.prototype.visitEvent = function(ctx) {
    this.visitExpression(ctx.expression());
};


// continueTo: 'continue' ('to' label)?
Formatter.prototype.visitContinueTo = function(ctx) {
    this.buffer += 'continue';
    var label = ctx.label();
    if (label) {
        this.buffer += ' to ';
        this.visitLabel(label);
    }
};


// breakFrom: 'break' ('from' label)?
Formatter.prototype.visitBreakFrom = function(ctx) {
    this.buffer += 'break';
    var label = ctx.label();
    if (label) {
        this.buffer += ' from ';
        this.visitLabel(label);
    }
};


// label: name
Formatter.prototype.visitLabel = function(ctx) {
    this.buffer += ctx.IDENTIFIER().getText();
};


// returnResult: 'return' result?
Formatter.prototype.visitReturnResult = function(ctx) {
    this.buffer += 'return';
    var result = ctx.result();
    if (result) {
        this.buffer += ' ';
        this.visitResult(result);
    }
};


// result: expression
Formatter.prototype.visitResult = function(ctx) {
    this.visitExpression(ctx.expression());
};


// throwException: 'throw' xception
Formatter.prototype.visitThrowException = function(ctx) {
    this.buffer += 'throw ';
    this.visitException(ctx.xception());
};


// xception: expression
Formatter.prototype.visitException = function(ctx) {
    this.visitExpression(ctx.expression());
};


// ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?
Formatter.prototype.visitIfThen = function(ctx) {
    var conditions = ctx.condition();
    var blocks = ctx.block();

    // handle first condition
    this.buffer += 'if ';
    this.visitCondition(conditions[0]);
    this.buffer += ' then ';
    this.visitBlock(blocks[0]);

    // handle optional additional conditions
    for (var i = 1; i < conditions.length; i++) {
        this.buffer += ' else if ';
        this.visitCondition(conditions[i]);
        this.buffer += ' then ';
        this.visitBlock(blocks[i]);
    }

    // handle the optional final else block
    if (blocks.length > conditions.length) {
        this.buffer += ' else ';
        this.visitBlock(blocks[blocks.length - 1]);
    }
};


// condition: expression
Formatter.prototype.visitCondition = function(ctx) {
    this.visitExpression(ctx.expression());
};


// selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?
Formatter.prototype.visitSelectFrom = function(ctx) {
    var options = ctx.option();
    var blocks = ctx.block();

    // handle the selection
    this.buffer += 'select ';
    this.visitSelection(ctx.selection());
    this.buffer += ' from';

    // handle option blocks
    for (var i = 0; i < options.length; i++) {
        this.buffer += ' ';
        this.visitOption(options[i]);
        this.buffer += ' do ';
        this.visitBlock(blocks[i]);
    }

    // handle the optional final else block
    if (blocks.length > options.length) {
        this.buffer += ' else ';
        this.visitBlock(blocks[blocks.length - 1]);
    }
};


// selection: expression
Formatter.prototype.visitSelection = function(ctx) {
    this.visitExpression(ctx.expression());
};


// option: expression
Formatter.prototype.visitOption = function(ctx) {
    this.visitExpression(ctx.expression());
};


// whileLoop: (label ':')? 'while' condition 'do' block
Formatter.prototype.visitWhileLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
        this.buffer += ': ';
    }
    this.buffer += 'while ';
    this.visitCondition(ctx.condition());
    this.buffer += ' do ';
    this.visitBlock(ctx.block());
};


// withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block
Formatter.prototype.visitWithLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
        this.buffer += ': ';
    }
    this.buffer += 'with ';
    var symbol = ctx.symbol();
    if (symbol) {
        this.buffer += 'each ';
        this.visitSymbol(symbol);
        this.buffer += ' in ';
    }
    this.visitSequence(ctx.sequence());
    this.buffer += ' do ';
    this.visitBlock(ctx.block());
};


// sequence: expression
Formatter.prototype.visitSequence = function(ctx) {
    this.visitExpression(ctx.expression());
};


// HACK: this method is missing from the generated visitor!
Formatter.prototype.visitExpression = function(ctx) {
    ctx.accept(this);
};


// documentExpression: document
Formatter.prototype.visitDocumentExpression = function(ctx) {
    this.visitDocument(ctx.document());
};


// variableExpression: variable
Formatter.prototype.visitVariableExpression = function(ctx) {
    this.visitVariable(ctx.variable());
};


// funxionExpression: funxion
Formatter.prototype.visitFunxionExpression = function(ctx) {
    this.visitFunxion(ctx.funxion());
};


// precedenceExpression: '(' expression ')'
Formatter.prototype.visitPrecedenceExpression = function(ctx) {
    this.buffer += '(';
    this.visitExpression(ctx.expression());
    this.buffer += ')';
};


// dereferenceExpression: '@' expression
Formatter.prototype.visitDereferenceExpression = function(ctx) {
    this.buffer += '@';
    this.visitExpression(ctx.expression());
};


// componentExpression: expression indices
Formatter.prototype.visitComponentExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.visitIndices(ctx.indices());
};


// messageExpression: expression '.' message
Formatter.prototype.visitMessageExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.buffer += '.';
    this.visitMessage(ctx.message());
};


// factorialExpression: expression '!'
Formatter.prototype.visitFactorialExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.buffer += '!';
};


// exponentialExpression: <assoc=right> expression '^' expression
Formatter.prototype.visitExponentialExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ^ ';
    this.visitExpression(ctx.expression(1));
};


// inversionExpression: op=('-' | '/' | '*') expression
Formatter.prototype.visitInversionExpression = function(ctx) {
    var operation = ctx.op.text;
    var expression = ctx.expression();
    this.buffer += operation;
    if (operation === '-') {
        if (expression.getText()[0] === "-") {
            this.buffer += ' ';  // must insert a space before a negative value!
        }
    }
    this.visitExpression(ctx.expression());
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
Formatter.prototype.visitArithmeticExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ';
    this.buffer += ctx.op.text;
    this.buffer += ' ';
    this.visitExpression(ctx.expression(1));
};


// magnitudeExpression: '|' expression '|'
Formatter.prototype.visitMagnitudeExpression = function(ctx) {
    this.buffer += '|';
    this.visitExpression(ctx.expression());
    this.buffer += '|';
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
Formatter.prototype.visitComparisonExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ';
    this.buffer += ctx.op.text;
    this.buffer += ' ';
    this.visitExpression(ctx.expression(1));
};


// complementExpression: 'not' expression
Formatter.prototype.visitComplementExpression = function(ctx) {
    this.buffer += 'not ';
    this.visitExpression(ctx.expression());
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
Formatter.prototype.visitLogicalExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ';
    this.buffer += ctx.op.text;
    this.buffer += ' ';
    this.visitExpression(ctx.expression(1));
};


// defaultExpression: expression '?' expression
Formatter.prototype.visitDefaultExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.buffer += ' ? ';
    this.visitExpression(ctx.expression(1));
};


// variable: name
Formatter.prototype.visitVariable = function(ctx) {
    this.buffer += ctx.IDENTIFIER().getText();
};


// funxion: name parameters
Formatter.prototype.visitFunxion = function(ctx) {
    this.buffer += ctx.IDENTIFIER().getText();
    this.visitParameters(ctx.parameters());
};


// message: name parameters
Formatter.prototype.visitMessage = function(ctx) {
    this.buffer += ctx.IDENTIFIER().getText();
    this.visitParameters(ctx.parameters());
};


// indices: structure
Formatter.prototype.visitIndices = function(ctx) {
    this.visitStructure(ctx.structure());
};


// element: any | tag | symbol | time | reference | version | text | binary |
//  probability | percent | number
Formatter.prototype.visitElement = function(ctx) {
    this.visitChildren(ctx);
};


// noneAny: 'none'
Formatter.prototype.visitNoneAny = function(ctx) {
    this.buffer += 'none';
};


// anyAny: 'any'
Formatter.prototype.visitAnyAny = function(ctx) {
    this.buffer += 'any';
};


// tag: TAG
Formatter.prototype.visitTag = function(ctx) {
    this.buffer += ctx.TAG().getText();
};


// symbol: SYMBOL
Formatter.prototype.visitSymbol = function(ctx) {
    this.buffer += ctx.SYMBOL().getText();
};


// time: TIME
Formatter.prototype.visitTime = function(ctx) {
    this.buffer += ctx.TIME().getText();
};


// reference: RESOURCE
Formatter.prototype.visitReference = function(ctx) {
    this.buffer += ctx.RESOURCE().getText();
};


// version: VERSION
Formatter.prototype.visitVersion = function(ctx) {
    this.buffer += ctx.VERSION().getText();
};


// HACK: this method is missing from the generated visitor!
Formatter.prototype.visitText = function(ctx) {
    ctx.accept(this);
};


// inlineText: TEXT
Formatter.prototype.visitInlineText = function(ctx) {
    this.buffer += ctx.TEXT().getText();
};


// blockText: TEXT_BLOCK
Formatter.prototype.visitBlockText = function(ctx) {
    this.buffer += ctx.TEXT_BLOCK().getText();
};


// binary: BINARY
Formatter.prototype.visitBinary = function(ctx) {
    this.buffer += ctx.BINARY().getText();
};


// HACK: this method is missing from the generated visitor!
Formatter.prototype.visitProbability = function(ctx) {
    ctx.accept(this);
};


// trueProbability: 'true'
Formatter.prototype.visitTrueProbability = function(ctx) {
    this.buffer += 'true';
};


// falseProbability: 'false'
Formatter.prototype.visitFalseProbability = function(ctx) {
    this.buffer += 'false';
};


// fractionalProbability: FRACTION
Formatter.prototype.visitFractionalProbability = function(ctx) {
    this.buffer += ctx.FRACTION().getText();
};


// percent: real '%'
Formatter.prototype.visitPercent = function(ctx) {
    this.visitReal(ctx.real());
    this.buffer += '%';
};


// HACK: this method is missing from the generated visitor!
Formatter.prototype.visitReal = function(ctx) {
    ctx.accept(this);
};


// constantReal: sign='-'? con=('e' | 'pi' | 'phi')
Formatter.prototype.visitConstantReal = function(ctx) {
    if (ctx.sign) {
        this.buffer += '-';
    }
    this.buffer += ctx.con.text;
};


// variableReal: FLOAT
Formatter.prototype.visitVariableReal = function(ctx) {
    this.buffer += ctx.FLOAT().getText();
};


// imaginary: (real | sign='-')? 'i'
Formatter.prototype.visitImaginary = function(ctx) {
    var real = ctx.real();
    var sign = ctx.sign;
    if (real) {
        this.visitReal(real);
        if (real.con) {
            this.buffer += ' ';
        }
    } else if (sign) {
        this.buffer += '-';
    }
    this.buffer += 'i';
};


// HACK: this method is missing from the generated visitor!
Formatter.prototype.visitNumber = function(ctx) {
    ctx.accept(this);
};


// undefinedNumber: 'undefined'
Formatter.prototype.visitUndefinedNumber = function(ctx) {
    this.buffer += 'undefined';
};


// infiniteNumber: 'infinity'
Formatter.prototype.visitInfiniteNumber = function(ctx) {
    this.buffer += 'infinity';
};


// realNumber: real
Formatter.prototype.visitRealNumber = function(ctx) {
    this.visitReal(ctx.real());
};


// imaginaryNumber: imaginary
Formatter.prototype.visitImaginaryNumber = function(ctx) {
    this.visitImaginary(ctx.imaginary());
};


// complexNumber: '(' real del=(',' | 'e^') imaginary ')'
Formatter.prototype.visitComplexNumber = function(ctx) {
    this.buffer += '(';
    this.visitReal(ctx.real());
    var delimiter = ctx.del.text;
    this.buffer += delimiter;
    if (delimiter === ',') {
        this.buffer += " ";
    }
    this.visitImaginary(ctx.imaginary());
    this.buffer += ')';
};

