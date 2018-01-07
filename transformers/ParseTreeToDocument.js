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
 * This class defines a formatting visitor that "walks" a parse tree
 * produced by the BaliLanguageParser and generates a canonical version of
 * the corresponding Bali source document. An optional padding may be
 * specified that is prepended to each line of the Bali document.
 */
var grammar = require('../grammar');


/**
 * This constructor creates a new formatter with the specified padding.
 * 
 * @constructor
 * @returns {ParseTreeToDocument} The new formatter.
 */
function ParseTreeToDocument() {
    return this;
}
ParseTreeToDocument.prototype.constructor = ParseTreeToDocument;
exports.ParseTreeToDocument = ParseTreeToDocument;


/**
 * This function takes a Bali document and formats it as source code. Each
 * line will be prepended with the specified padding string.
 * 
 * @param {DocumentContext} baliDocument The Bali document to be formatted.
 * @param {string} padding The string that should be prepended to each line.
 * @returns {string} The formatted source code string.
 */
ParseTreeToDocument.prototype.formatDocument = function(baliDocument, padding) {
    var visitor = new TransformingVisitor(padding);
    baliDocument.accept(visitor);
    return visitor.document;
};


// PRIVATE CLASSES

function TransformingVisitor(padding) {
    grammar.BaliLanguageVisitor.call(this);
    this.padding = padding === undefined ? '' : padding;
    this.document = '';
    this.depth = 0;
    return this;
}
TransformingVisitor.prototype = Object.create(grammar.BaliLanguageVisitor.prototype);
TransformingVisitor.prototype.constructor = TransformingVisitor;
TransformingVisitor.prototype.indentation = '    ';  // indentation per level


TransformingVisitor.prototype.appendNewline = function() {
    this.document += '\n';
    this.document += this.getPadding();
};


TransformingVisitor.prototype.getPadding = function() {
    var padding = this.padding;
    for (var i = 0; i < this.depth; i++) {
        padding += TransformingVisitor.prototype.indentation;
    }
    return padding;
};


// anyAny: 'any'
TransformingVisitor.prototype.visitAnyAny = function(ctx) {
    this.document += 'any';
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
TransformingVisitor.prototype.visitArithmeticExpression = function(ctx) {
    ctx.expression(0).accept(this);
    this.document += ' ';
    this.document += ctx.op.text;
    this.document += ' ';
    ctx.expression(1).accept(this);
};


// assignee: symbol | component
TransformingVisitor.prototype.visitAssignee = function(ctx) {
    this.visitChildren(ctx);
};


// association: key ':' value
TransformingVisitor.prototype.visitAssociation = function(ctx) {
    ctx.key().accept(this);
    this.document += ': ';
    ctx.value().accept(this);
};


// binary: BINARY
TransformingVisitor.prototype.visitBinary = function(ctx) {
    this.document += ctx.BINARY().getText();
};


// block: '{' statements '}'
TransformingVisitor.prototype.visitBlock = function(ctx) {
    this.document += '{';
    ctx.statements().accept(this);
    this.document += '}';
};


// blockText: TEXT_BLOCK
TransformingVisitor.prototype.visitBlockText = function(ctx) {
    this.document += ctx.TEXT_BLOCK().getText();
};


// breakFrom: 'break' ('from' label)?
TransformingVisitor.prototype.visitBreakFrom = function(ctx) {
    this.document += 'break';
    var label = ctx.label();
    if (label) {
        this.document += ' from ';
        label.accept(this);
    }
};


// checkoutDocument: 'checkout' symbol 'from' location
TransformingVisitor.prototype.visitCheckoutDocument = function(ctx) {
    this.document += 'checkout ';
    ctx.symbol().accept(this);
    this.document += ' from ';
    ctx.location().accept(this);
};


// commitDraft: 'commit' draft 'to' location
TransformingVisitor.prototype.visitCommitDraft = function(ctx) {
    this.document += 'commit ';
    ctx.draft().accept(this);
    this.document += ' to ';
    ctx.location().accept(this);
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
TransformingVisitor.prototype.visitComparisonExpression = function(ctx) {
    ctx.expression(0).accept(this);
    this.document += ' ';
    this.document += ctx.op.text;
    this.document += ' ';
    ctx.expression(1).accept(this);
};


// complementExpression: 'not' expression
TransformingVisitor.prototype.visitComplementExpression = function(ctx) {
    this.document += 'not ';
    ctx.expression().accept(this);
};


// complexNumber: '(' real del=(',' | 'e^') imaginary ')'
TransformingVisitor.prototype.visitComplexNumber = function(ctx) {
    this.document += '(';
    ctx.real().accept(this);
    var delimiter = ctx.del.text;
    this.document += delimiter;
    if (delimiter === ',') {
        this.document += " ";
    }
    ctx.imaginary().accept(this);
    this.document += ')';
};


// component: variable indices
TransformingVisitor.prototype.visitComponent = function(ctx) {
    ctx.variable().accept(this);
    ctx.indices().accept(this);
};


// componentExpression: expression indices
TransformingVisitor.prototype.visitComponentExpression = function(ctx) {
    ctx.expression().accept(this);
    ctx.indices().accept(this);
};


// composite: range | array | table
TransformingVisitor.prototype.visitComposite = function(ctx) {
    this.visitChildren(ctx);
};


// condition: expression
TransformingVisitor.prototype.visitCondition = function(ctx) {
    ctx.expression().accept(this);
};


// constantReal: sign='-'? con=('e' | 'pi' | 'phi')
TransformingVisitor.prototype.visitConstantReal = function(ctx) {
    if (ctx.sign) {
        this.document += '-';
    }
    this.document += ctx.con.text;
};


// continueTo: 'continue' ('to' label)?
TransformingVisitor.prototype.visitContinueTo = function(ctx) {
    this.document += 'continue';
    var label = ctx.label();
    if (label) {
        this.document += ' to ';
        label.accept(this);
    }
};


// defaultExpression: expression '?' expression
TransformingVisitor.prototype.visitDefaultExpression = function(ctx) {
    ctx.expression(0).accept(this);
    this.document += ' ? ';
    ctx.expression(1).accept(this);
};


// dereferenceExpression: '@' expression
TransformingVisitor.prototype.visitDereferenceExpression = function(ctx) {
    this.document += '@';
    ctx.expression().accept(this);
};


// discardDraft: 'discard' location
TransformingVisitor.prototype.visitDiscardDraft = function(ctx) {
    this.document += 'discard ';
    ctx.location().accept(this);
};


// document: literal parameters?
TransformingVisitor.prototype.visitDocument = function(ctx) {
    ctx.literal().accept(this);
    var parameters = ctx.parameters();
    if (parameters) {
        parameters.accept(this);
    }
};


// documentExpression: document
TransformingVisitor.prototype.visitDocumentExpression = function(ctx) {
    ctx.document().accept(this);
};


// draft: expression
TransformingVisitor.prototype.visitDraft = function(ctx) {
    ctx.expression().accept(this);
};


// element: any | tag | symbol | moment | reference | version | text | binary |
//  probability | percent | number
TransformingVisitor.prototype.visitElement = function(ctx) {
    this.visitChildren(ctx);
};


// emptyArray: /*empty array*/
TransformingVisitor.prototype.visitEmptyArray = function(ctx) {
};


// emptyStatements: /*empty statements*/
TransformingVisitor.prototype.visitEmptyStatements = function(ctx) {
};


// emptyTable: ':' /*empty table*/
TransformingVisitor.prototype.visitEmptyTable = function(ctx) {
    this.document += ':';
};


// evaluateExpression: (assignee ':=')? expression
TransformingVisitor.prototype.visitEvaluateExpression = function(ctx) {
    var assignee = ctx.assignee();
    if (assignee) {
        assignee.accept(this);
        this.document += ' := ';
    }
    ctx.expression().accept(this);
};


// event: expression
TransformingVisitor.prototype.visitEvent = function(ctx) {
    ctx.expression().accept(this);
};


// xception: expression
TransformingVisitor.prototype.visitXception = function(ctx) {
    ctx.expression().accept(this);
};


// exceptionClause: 'catch' symbol 'matching' template 'with' block
TransformingVisitor.prototype.visitExceptionClause = function(ctx) {
    this.document += ' catch ';
    ctx.symbol().accept(this);
    this.document += ' matching ';
    ctx.template().accept(this);
    this.document += ' with ';
    ctx.block().accept(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
TransformingVisitor.prototype.visitExponentialExpression = function(ctx) {
    ctx.expression(0).accept(this);
    this.document += ' ^ ';
    ctx.expression(1).accept(this);
};


// factorialExpression: expression '!'
TransformingVisitor.prototype.visitFactorialExpression = function(ctx) {
    ctx.expression().accept(this);
    this.document += '!';
};


// falseProbability: 'false'
TransformingVisitor.prototype.visitFalseProbability = function(ctx) {
    this.document += 'false';
};


// finalClause: 'finish' 'with' block
TransformingVisitor.prototype.visitFinalClause = function(ctx) {
    this.document += ' finish with ';
    ctx.block().accept(this);
};


// fractionalProbability: FRACTION
TransformingVisitor.prototype.visitFractionalProbability = function(ctx) {
    this.document += ctx.FRACTION().getText();
};


// functionExpression: IDENTIFIER parameters
TransformingVisitor.prototype.visitFunctionExpression = function(ctx) {
    this.document += ctx.IDENTIFIER().getText();
    ctx.parameters().accept(this);
};


// ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?
TransformingVisitor.prototype.visitIfThen = function(ctx) {
    var conditions = ctx.condition();
    var blocks = ctx.block();

    // handle first condition
    this.document += 'if ';
    conditions[0].accept(this);
    this.document += ' then ';
    blocks[0].accept(this);

    // handle optional additional conditions
    for (var i = 1; i < conditions.length; i++) {
        this.document += ' else if ';
        conditions[i].accept(this);
        this.document += ' then ';
        blocks[i].accept(this);
    }

    // handle the optional final else block
    if (blocks.length > conditions.length) {
        this.document += ' else ';
        blocks[blocks.length - 1].accept(this);
    }
};


// imaginary: (real | sign='-')? 'i'
TransformingVisitor.prototype.visitImaginary = function(ctx) {
    var real = ctx.real();
    var sign = ctx.sign;
    if (real) {
        ctx.real().accept(this);
        if (real.con) {
            this.document += ' ';
        }
    } else if (sign) {
        this.document += '-';
    }
    this.document += 'i';
};


// imaginaryNumber: imaginary
TransformingVisitor.prototype.visitImaginaryNumber = function(ctx) {
    ctx.imaginary().accept(this);
};


// indices: '[' array ']'
TransformingVisitor.prototype.visitIndices = function(ctx) {
    this.document += '[';
    ctx.array().accept(this);
    this.document += ']';
};


// infiniteNumber: 'infinity'
TransformingVisitor.prototype.visitInfiniteNumber = function(ctx) {
    this.document += 'infinity';
};


// inlineArray: value (',' value)*
TransformingVisitor.prototype.visitInlineArray = function(ctx) {
    var values = ctx.value();  // retrieve all the values
    values[0].accept(this);
    for (var i = 1; i < values.length; i++) {
        this.document += ', ';
        values[i].accept(this);
    }
};


// inlineStatements: statement (';' statement)*
TransformingVisitor.prototype.visitInlineStatements = function(ctx) {
    var statements = ctx.statement();  // retrieve all the statements
    statements[0].accept(this);
    for (var i = 1; i < statements.length; i++) {
        this.document += '; ';
        statements[i].accept(this);
    }
};


// inlineTable: association (',' association)*
TransformingVisitor.prototype.visitInlineTable = function(ctx) {
    var associations = ctx.association();  // retrieve all the associations
    associations[0].accept(this);
    for (var i = 1; i < associations.length; i++) {
        this.document += ', ';
        associations[i].accept(this);
    }
};


// inlineText: TEXT
TransformingVisitor.prototype.visitInlineText = function(ctx) {
    this.document += ctx.TEXT().getText();
};


// inversionExpression: op=('-' | '/' | '*') expression
TransformingVisitor.prototype.visitInversionExpression = function(ctx) {
    var operation = ctx.op.text;
    var expression = ctx.expression();
    this.document += operation;
    if (operation === '-') {
        if (expression.getText()[0] === "-") {
            this.document += ' ';  // must insert a space before a negative value!
        }
    }
    ctx.expression().accept(this);
};


// key: element parameters?
TransformingVisitor.prototype.visitKey = function(ctx) {
    ctx.element().accept(this);
    var parameters = ctx.parameters();
    if (parameters) {
        parameters.accept(this);
    }
};


// label: IDENTIFIER
TransformingVisitor.prototype.visitLabel = function(ctx) {
    this.document += ctx.IDENTIFIER().getText();
};


// literal: element | structure | block
TransformingVisitor.prototype.visitLiteral = function(ctx) {
    this.visitChildren(ctx);
};


// location: expression
TransformingVisitor.prototype.visitLocation = function(ctx) {
    ctx.expression().accept(this);
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
TransformingVisitor.prototype.visitLogicalExpression = function(ctx) {
    ctx.expression(0).accept(this);
    this.document += ' ';
    this.document += ctx.op.text;
    this.document += ' ';
    ctx.expression(1).accept(this);
};


// magnitudeExpression: '|' expression '|'
TransformingVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    this.document += '|';
    ctx.expression().accept(this);
    this.document += '|';
};


// mainClause:
//     evaluateExpression |
//     checkoutDocument |
//     saveDraft |
//     discardDraft |
//     commitDocument |
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
TransformingVisitor.prototype.visitMainClause = function(ctx) {
    this.visitChildren(ctx);
};


// message: expression
TransformingVisitor.prototype.visitMessage = function(ctx) {
    ctx.expression().accept(this);
};


// messageExpression: expression '.' IDENTIFIER parameters
TransformingVisitor.prototype.visitMessageExpression = function(ctx) {
    ctx.expression().accept(this);
    this.document += '.';
    this.document += ctx.IDENTIFIER().getText();
    ctx.parameters().accept(this);
};


// moment: MOMENT
TransformingVisitor.prototype.visitMoment = function(ctx) {
    this.document += ctx.MOMENT().getText();
};


// newlineArray: NEWLINE (value NEWLINE)*
TransformingVisitor.prototype.visitNewlineArray = function(ctx) {
    var values = ctx.value();  // retrieve all the values
    this.depth++;
    for (var i = 0; i < values.length; i++) {
        this.appendNewline();
        values[i].accept(this);
    }
    this.depth--;
    this.appendNewline();
};


// newlineStatements: NEWLINE (statement NEWLINE)*
TransformingVisitor.prototype.visitNewlineStatements = function(ctx) {
    var statements = ctx.statement();  // retrieve all the statements
    this.depth++;
    for (var i = 0; i < statements.length; i++) {
        this.appendNewline();
        statements[i].accept(this);
    }
    this.depth--;
    this.appendNewline();
};


// newlineTable: NEWLINE (association NEWLINE)*
TransformingVisitor.prototype.visitNewlineTable = function(ctx) {
    var associations = ctx.association();  // retrieve all the associations
    this.depth++;
    for (var i = 0; i < associations.length; i++) {
        this.appendNewline();
        associations[i].accept(this);
    }
    this.depth--;
    this.appendNewline();
};


// noneAny: 'none'
TransformingVisitor.prototype.visitNoneAny = function(ctx) {
    this.document += 'none';
};


// option: expression
TransformingVisitor.prototype.visitOption = function(ctx) {
    ctx.expression().accept(this);
};


// parameters: '(' composite ')'
TransformingVisitor.prototype.visitParameters = function(ctx) {
    this.document += '(';
    ctx.composite().accept(this);
    this.document += ')';
};


// percent: real '%'
TransformingVisitor.prototype.visitPercent = function(ctx) {
    ctx.real().accept(this);
    this.document += '%';
};


// precedenceExpression: '(' expression ')'
TransformingVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    this.document += '(';
    ctx.expression().accept(this);
    this.document += ')';
};


// publishEvent: 'publish' event
TransformingVisitor.prototype.visitPublishEvent = function(ctx) {
    this.document += 'publish ';
    ctx.event().accept(this);
};


// queue: expression
TransformingVisitor.prototype.visitQueue = function(ctx) {
    ctx.expression().accept(this);
};


// queueMessage: 'queue' message 'on' queue
TransformingVisitor.prototype.visitQueueMessage = function(ctx) {
    this.document += 'queue ';
    ctx.message().accept(this);
    this.document += ' on ';
    ctx.queue().accept(this);
};


// range: value '..' value
TransformingVisitor.prototype.visitRange = function(ctx) {
    ctx.value(0).accept(this);
    this.document += '..';
    ctx.value(1).accept(this);
};


// realNumber: real
TransformingVisitor.prototype.visitRealNumber = function(ctx) {
    ctx.real().accept(this);
};


// reference: RESOURCE
TransformingVisitor.prototype.visitReference = function(ctx) {
    this.document += ctx.RESOURCE().getText();
};


// result: expression
TransformingVisitor.prototype.visitResult = function(ctx) {
    ctx.expression().accept(this);
};


// returnResult: 'return' result?
TransformingVisitor.prototype.visitReturnResult = function(ctx) {
    this.document += 'return';
    var result = ctx.result();
    if (result) {
        this.document += ' ';
        result.accept(this);
    }
};


// saveDraft: 'save' draft 'to' location
TransformingVisitor.prototype.visitSaveDraft = function(ctx) {
    this.document += 'save ';
    ctx.draft().accept(this);
    this.document += ' to ';
    ctx.location().accept(this);
};


// script: SHELL statements EOF
TransformingVisitor.prototype.visitScript = function(ctx) {
    this.document += ctx.SHELL().getText();
    ctx.statements().accept(this);
    this.document += ctx.EOF().getText();
};


// selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?
TransformingVisitor.prototype.visitSelectFrom = function(ctx) {
    var options = ctx.option();
    var blocks = ctx.block();

    // handle the selection
    this.document += 'select ';
    ctx.selection().accept(this);
    this.document += ' from';

    // handle option blocks
    for (var i = 0; i < options.length; i++) {
        this.document += ' ';
        options[i].accept(this);
        this.document += ' do ';
        blocks[i].accept(this);
    }

    // handle the optional final else block
    if (blocks.length > options.length) {
        this.document += ' else ';
        blocks[blocks.length - 1].accept(this);
    }
};


// selection: expression
TransformingVisitor.prototype.visitSelection = function(ctx) {
    ctx.expression().accept(this);
};


// sequence: expression
TransformingVisitor.prototype.visitSequence = function(ctx) {
    ctx.expression().accept(this);
};


// statement: mainClause exceptionClause* finalClause?
TransformingVisitor.prototype.visitStatement = function(ctx) {
    ctx.mainClause().accept(this);
    var exceptionClauses = ctx.exceptionClause();
    for (var i = 0; i < exceptionClauses.length; i++) {
        exceptionClauses[i].accept(this);
    }
    var finalClause = ctx.finalClause();
    if (finalClause) {
        finalClause.accept(this);
    }
};


// structure: '[' composite ']'
TransformingVisitor.prototype.visitStructure = function(ctx) {
    this.document += '[';
    ctx.composite().accept(this);
    this.document += ']';
};


// symbol: SYMBOL
TransformingVisitor.prototype.visitSymbol = function(ctx) {
    this.document += ctx.SYMBOL().getText();
};


// tag: TAG
TransformingVisitor.prototype.visitTag = function(ctx) {
    this.document += ctx.TAG().getText();
};


// template: expression
TransformingVisitor.prototype.visitTemplate = function(ctx) {
    ctx.expression().accept(this);
};


// throwException: 'throw' xception
TransformingVisitor.prototype.visitThrowException = function(ctx) {
    this.document += 'throw ';
    ctx.xception().accept(this);
};


// trueProbability: 'true'
TransformingVisitor.prototype.visitTrueProbability = function(ctx) {
    this.document += 'true';
};


// undefinedNumber: 'undefined'
TransformingVisitor.prototype.visitUndefinedNumber = function(ctx) {
    this.document += 'undefined';
};


// value: expression
TransformingVisitor.prototype.visitValue = function(ctx) {
    ctx.expression().accept(this);
};


// variable: IDENTIFIER
TransformingVisitor.prototype.visitVariable = function(ctx) {
    this.document += ctx.IDENTIFIER().getText();
};


// variableExpression: variable
TransformingVisitor.prototype.visitVariableExpression = function(ctx) {
    ctx.variable().accept(this);
};


// variableReal: FLOAT
TransformingVisitor.prototype.visitVariableReal = function(ctx) {
    this.document += ctx.FLOAT().getText();
};


// version: VERSION
TransformingVisitor.prototype.visitVersion = function(ctx) {
    this.document += ctx.VERSION().getText();
};


// waitForMessage: 'wait' 'for' symbol 'from' queue
TransformingVisitor.prototype.visitWaitForMessage = function(ctx) {
    this.document += 'wait for ';
    ctx.symbol().accept(this);
    this.document += ' from ';
    ctx.queue().accept(this);
};


// whileLoop: (label ':')? 'while' condition 'do' block
TransformingVisitor.prototype.visitWhileLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        label.accept(this);
        this.document += ': ';
    }
    this.document += 'while ';
    ctx.condition().accept(this);
    this.document += ' do ';
    ctx.block().accept(this);
};


// withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block
TransformingVisitor.prototype.visitWithLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        label.accept(this);
        this.document += ': ';
    }
    this.document += 'with ';
    var symbol = ctx.symbol();
    if (symbol) {
        this.document += 'each ';
        symbol.accept(this);
        this.document += ' in ';
    }
    ctx.sequence().accept(this);
    this.document += ' do ';
    ctx.block().accept(this);
};
