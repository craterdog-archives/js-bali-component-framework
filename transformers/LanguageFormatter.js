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
 * @returns {LanguageFormatter} The new formatter.
 */
function LanguageFormatter() {
    return this;
}
LanguageFormatter.prototype.constructor = LanguageFormatter;
exports.LanguageFormatter = LanguageFormatter;


/**
 * This function takes a Bali document and formats it as source code. Each
 * line will be prepended with the specified padding string.
 * 
 * @param {DocumentContext} baliDocument The Bali document to be formatted.
 * @param {string} padding The string that should be prepended to each line.
 * @returns {string} The formatted source code string.
 */
LanguageFormatter.prototype.formatDocument = function(baliDocument, padding) {
    var visitor = new FormatterVisitor(padding);
    baliDocument.accept(visitor);
    return visitor.source;
};


// PRIVATE CLASSES

function FormatterVisitor(padding) {
    grammar.BaliLanguageVisitor.call(this);
    this.padding = padding === undefined ? '' : padding;
    this.source = '';
    this.depth = 0;
    return this;
}
FormatterVisitor.prototype = Object.create(grammar.BaliLanguageVisitor.prototype);
FormatterVisitor.prototype.constructor = FormatterVisitor;
FormatterVisitor.prototype.indentation = '    ';  // indentation per level


FormatterVisitor.prototype.appendNewline = function() {
    this.source += '\n';
    this.source += this.getPadding();
};


FormatterVisitor.prototype.getPadding = function() {
    var padding = this.padding;
    for (var i = 0; i < this.depth; i++) {
        padding += FormatterVisitor.prototype.indentation;
    }
    return padding;
};


// HACK: this method is missing from the generated visitor!
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
FormatterVisitor.prototype.visitAny = function(ctx) {
    ctx.accept(this);
};


// anyAny: 'any'
FormatterVisitor.prototype.visitAnyAny = function(ctx) {
    this.source += 'any';
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
FormatterVisitor.prototype.visitArithmeticExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.source += ' ';
    this.source += ctx.op.text;
    this.source += ' ';
    this.visitExpression(ctx.expression(1));
};


// HACK: this method is missing from the generated visitor!
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
FormatterVisitor.prototype.visitArray = function(ctx) {
    ctx.accept(this);
};


// assignee: symbol | component
FormatterVisitor.prototype.visitAssignee = function(ctx) {
    this.visitChildren(ctx);
};


// association: key ':' value
FormatterVisitor.prototype.visitAssociation = function(ctx) {
    this.visitKey(ctx.key());
    this.source += ': ';
    this.visitValue(ctx.value());
};


// binary: BINARY
FormatterVisitor.prototype.visitBinary = function(ctx) {
    this.source += ctx.BINARY().getText();
};


// block: '{' statements '}'
FormatterVisitor.prototype.visitBlock = function(ctx) {
    this.source += '{';
    this.visitStatements(ctx.statements());
    this.source += '}';
};


// blockText: TEXT_BLOCK
FormatterVisitor.prototype.visitBlockText = function(ctx) {
    this.source += ctx.TEXT_BLOCK().getText();
};


// breakFrom: 'break' ('from' label)?
FormatterVisitor.prototype.visitBreakFrom = function(ctx) {
    this.source += 'break';
    var label = ctx.label();
    if (label) {
        this.source += ' from ';
        this.visitLabel(label);
    }
};


// checkoutDocument: 'checkout' symbol 'from' location
FormatterVisitor.prototype.visitCheckoutDocument = function(ctx) {
    this.source += 'checkout ';
    this.visitSymbol(ctx.symbol());
    this.source += ' from ';
    this.visitLocation(ctx.location());
};


// commitDraft: 'commit' draft 'to' location
FormatterVisitor.prototype.visitCommitDraft = function(ctx) {
    this.source += 'commit ';
    this.visitDraft(ctx.draft());
    this.source += ' to ';
    this.visitLocation(ctx.location());
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
FormatterVisitor.prototype.visitComparisonExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.source += ' ';
    this.source += ctx.op.text;
    this.source += ' ';
    this.visitExpression(ctx.expression(1));
};


// complementExpression: 'not' expression
FormatterVisitor.prototype.visitComplementExpression = function(ctx) {
    this.source += 'not ';
    this.visitExpression(ctx.expression());
};


// complexNumber: '(' real del=(',' | 'e^') imaginary ')'
FormatterVisitor.prototype.visitComplexNumber = function(ctx) {
    this.source += '(';
    this.visitReal(ctx.real());
    var delimiter = ctx.del.text;
    this.source += delimiter;
    if (delimiter === ',') {
        this.source += " ";
    }
    this.visitImaginary(ctx.imaginary());
    this.source += ')';
};


// component: variable indices
FormatterVisitor.prototype.visitComponent = function(ctx) {
    this.visitVariable(ctx.variable());
    this.visitIndices(ctx.indices());
};


// componentExpression: expression indices
FormatterVisitor.prototype.visitComponentExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.visitIndices(ctx.indices());
};


// composite: range | array | table
FormatterVisitor.prototype.visitComposite = function(ctx) {
    this.visitChildren(ctx);
};


// condition: expression
FormatterVisitor.prototype.visitCondition = function(ctx) {
    this.visitExpression(ctx.expression());
};


// constantReal: sign='-'? con=('e' | 'pi' | 'phi')
FormatterVisitor.prototype.visitConstantReal = function(ctx) {
    if (ctx.sign) {
        this.source += '-';
    }
    this.source += ctx.con.text;
};


// continueTo: 'continue' ('to' label)?
FormatterVisitor.prototype.visitContinueTo = function(ctx) {
    this.source += 'continue';
    var label = ctx.label();
    if (label) {
        this.source += ' to ';
        this.visitLabel(label);
    }
};


// defaultExpression: expression '?' expression
FormatterVisitor.prototype.visitDefaultExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.source += ' ? ';
    this.visitExpression(ctx.expression(1));
};


// dereferenceExpression: '@' expression
FormatterVisitor.prototype.visitDereferenceExpression = function(ctx) {
    this.source += '@';
    this.visitExpression(ctx.expression());
};


// discardDraft: 'discard' location
FormatterVisitor.prototype.visitDiscardDraft = function(ctx) {
    this.source += 'discard ';
    this.visitLocation(ctx.location());
};


// document: literal parameters?
FormatterVisitor.prototype.visitDocument = function(ctx) {
    this.visitLiteral(ctx.literal());
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
    }
};


// documentExpression: document
FormatterVisitor.prototype.visitDocumentExpression = function(ctx) {
    this.visitDocument(ctx.document());
};


// draft: expression
FormatterVisitor.prototype.visitDraft = function(ctx) {
    this.visitExpression(ctx.expression());
};


// element: any | tag | symbol | moment | reference | version | text | binary |
//  probability | percent | number
FormatterVisitor.prototype.visitElement = function(ctx) {
    this.visitChildren(ctx);
};


// emptyArray: /*empty array*/
FormatterVisitor.prototype.visitEmptyArray = function(ctx) {
};


// emptyStatements: /*empty statements*/
FormatterVisitor.prototype.visitEmptyStatements = function(ctx) {
};


// emptyTable: ':' /*empty table*/
FormatterVisitor.prototype.visitEmptyTable = function(ctx) {
    this.source += ':';
};


// evaluateExpression: (assignee ':=')? expression
FormatterVisitor.prototype.visitEvaluateExpression = function(ctx) {
    var assignee = ctx.assignee();
    if (assignee) {
        this.visitAssignee(assignee);
        this.source += ' := ';
    }
    this.visitExpression(ctx.expression());
};


// event: expression
FormatterVisitor.prototype.visitEvent = function(ctx) {
    this.visitExpression(ctx.expression());
};


// xception: expression
FormatterVisitor.prototype.visitXception = function(ctx) {
    this.visitExpression(ctx.expression());
};


// exceptionClause: 'catch' symbol 'matching' template 'with' block
FormatterVisitor.prototype.visitExceptionClause = function(ctx) {
    this.source += ' catch ';
    this.visitSymbol(ctx.symbol());
    this.source += ' matching ';
    this.visitXception(ctx.template());
    this.source += ' with ';
    this.visitBlock(ctx.block());
};


// exponentialExpression: <assoc=right> expression '^' expression
FormatterVisitor.prototype.visitExponentialExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.source += ' ^ ';
    this.visitExpression(ctx.expression(1));
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitExpression = function(ctx) {
    ctx.accept(this);
};


// factorialExpression: expression '!'
FormatterVisitor.prototype.visitFactorialExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.source += '!';
};


// falseProbability: 'false'
FormatterVisitor.prototype.visitFalseProbability = function(ctx) {
    this.source += 'false';
};


// finalClause: 'finish' 'with' block
FormatterVisitor.prototype.visitFinalClause = function(ctx) {
    this.source += ' finish with ';
    this.visitBlock(ctx.block());
};


// fractionalProbability: FRACTION
FormatterVisitor.prototype.visitFractionalProbability = function(ctx) {
    this.source += ctx.FRACTION().getText();
};


// functionExpression: IDENTIFIER parameters
FormatterVisitor.prototype.visitFunctionExpression = function(ctx) {
    this.source += ctx.IDENTIFIER().getText();
    this.visitParameters(ctx.parameters());
};


// ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?
FormatterVisitor.prototype.visitIfThen = function(ctx) {
    var conditions = ctx.condition();
    var blocks = ctx.block();

    // handle first condition
    this.source += 'if ';
    this.visitCondition(conditions[0]);
    this.source += ' then ';
    this.visitBlock(blocks[0]);

    // handle optional additional conditions
    for (var i = 1; i < conditions.length; i++) {
        this.source += ' else if ';
        this.visitCondition(conditions[i]);
        this.source += ' then ';
        this.visitBlock(blocks[i]);
    }

    // handle the optional final else block
    if (blocks.length > conditions.length) {
        this.source += ' else ';
        this.visitBlock(blocks[blocks.length - 1]);
    }
};


// imaginary: (real | sign='-')? 'i'
FormatterVisitor.prototype.visitImaginary = function(ctx) {
    var real = ctx.real();
    var sign = ctx.sign;
    if (real) {
        this.visitReal(real);
        if (real.con) {
            this.source += ' ';
        }
    } else if (sign) {
        this.source += '-';
    }
    this.source += 'i';
};


// imaginaryNumber: imaginary
FormatterVisitor.prototype.visitImaginaryNumber = function(ctx) {
    this.visitImaginary(ctx.imaginary());
};


// indices: '[' array ']'
FormatterVisitor.prototype.visitIndices = function(ctx) {
    this.source += '[';
    this.visitArray(ctx.array());
    this.source += ']';
};


// infiniteNumber: 'infinity'
FormatterVisitor.prototype.visitInfiniteNumber = function(ctx) {
    this.source += 'infinity';
};


// inlineArray: value (',' value)*
FormatterVisitor.prototype.visitInlineArray = function(ctx) {
    var values = ctx.value();  // retrieve all the values
    this.visitValue(values[0]);
    for (var i = 1; i < values.length; i++) {
        this.source += ', ';
        this.visitValue(values[i]);
    }
};


// inlineStatements: statement (';' statement)*
FormatterVisitor.prototype.visitInlineStatements = function(ctx) {
    var statements = ctx.statement();  // retrieve all the statements
    this.visitStatement(statements[0]);
    for (var i = 1; i < statements.length; i++) {
        this.source += '; ';
        this.visitStatement(statements[i]);
    }
};


// inlineTable: association (',' association)*
FormatterVisitor.prototype.visitInlineTable = function(ctx) {
    var associations = ctx.association();  // retrieve all the associations
    this.visitAssociation(associations[0]);
    for (var i = 1; i < associations.length; i++) {
        this.source += ', ';
        this.visitAssociation(associations[i]);
    }
};


// inlineText: TEXT
FormatterVisitor.prototype.visitInlineText = function(ctx) {
    this.source += ctx.TEXT().getText();
};


// inversionExpression: op=('-' | '/' | '*') expression
FormatterVisitor.prototype.visitInversionExpression = function(ctx) {
    var operation = ctx.op.text;
    var expression = ctx.expression();
    this.source += operation;
    if (operation === '-') {
        if (expression.getText()[0] === "-") {
            this.source += ' ';  // must insert a space before a negative value!
        }
    }
    this.visitExpression(ctx.expression());
};


// key: element parameters?
FormatterVisitor.prototype.visitKey = function(ctx) {
    this.visitElement(ctx.element());
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
    }
};


// label: IDENTIFIER
FormatterVisitor.prototype.visitLabel = function(ctx) {
    this.source += ctx.IDENTIFIER().getText();
};


// literal: element | structure | block
FormatterVisitor.prototype.visitLiteral = function(ctx) {
    this.visitChildren(ctx);
};


// location: expression
FormatterVisitor.prototype.visitLocation = function(ctx) {
    this.visitExpression(ctx.expression());
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
FormatterVisitor.prototype.visitLogicalExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.source += ' ';
    this.source += ctx.op.text;
    this.source += ' ';
    this.visitExpression(ctx.expression(1));
};


// magnitudeExpression: '|' expression '|'
FormatterVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    this.source += '|';
    this.visitExpression(ctx.expression());
    this.source += '|';
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
FormatterVisitor.prototype.visitMainClause = function(ctx) {
    this.visitChildren(ctx);
};


// message: expression
FormatterVisitor.prototype.visitMessage = function(ctx) {
    this.visitExpression(ctx.expression());
};


// messageExpression: expression '.' IDENTIFIER parameters
FormatterVisitor.prototype.visitMessageExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.source += '.';
    this.source += ctx.IDENTIFIER().getText();
    this.visitParameters(ctx.parameters());
};


// moment: MOMENT
FormatterVisitor.prototype.visitMoment = function(ctx) {
    this.source += ctx.MOMENT().getText();
};


// newlineArray: NEWLINE (value NEWLINE)*
FormatterVisitor.prototype.visitNewlineArray = function(ctx) {
    var values = ctx.value();  // retrieve all the values
    this.depth++;
    for (var i = 0; i < values.length; i++) {
        this.appendNewline();
        this.visitValue(values[i]);
    }
    this.depth--;
    this.appendNewline();
};


// newlineStatements: NEWLINE (statement NEWLINE)*
FormatterVisitor.prototype.visitNewlineStatements = function(ctx) {
    var statements = ctx.statement();  // retrieve all the statements
    this.depth++;
    for (var i = 0; i < statements.length; i++) {
        this.appendNewline();
        this.visitStatement(statements[i]);
    }
    this.depth--;
    this.appendNewline();
};


// newlineTable: NEWLINE (association NEWLINE)*
FormatterVisitor.prototype.visitNewlineTable = function(ctx) {
    var associations = ctx.association();  // retrieve all the associations
    this.depth++;
    for (var i = 0; i < associations.length; i++) {
        this.appendNewline();
        this.visitAssociation(associations[i]);
    }
    this.depth--;
    this.appendNewline();
};


// noneAny: 'none'
FormatterVisitor.prototype.visitNoneAny = function(ctx) {
    this.source += 'none';
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitNumber = function(ctx) {
    ctx.accept(this);
};


// option: expression
FormatterVisitor.prototype.visitOption = function(ctx) {
    this.visitExpression(ctx.expression());
};


// parameters: '(' composite ')'
FormatterVisitor.prototype.visitParameters = function(ctx) {
    this.source += '(';
    this.visitComposite(ctx.composite());
    this.source += ')';
};


// percent: real '%'
FormatterVisitor.prototype.visitPercent = function(ctx) {
    this.visitReal(ctx.real());
    this.source += '%';
};


// precedenceExpression: '(' expression ')'
FormatterVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    this.source += '(';
    this.visitExpression(ctx.expression());
    this.source += ')';
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitProbability = function(ctx) {
    ctx.accept(this);
};


// publishEvent: 'publish' event
FormatterVisitor.prototype.visitPublishEvent = function(ctx) {
    this.source += 'publish ';
    this.visitEvent(ctx.event());
};


// queue: expression
FormatterVisitor.prototype.visitQueue = function(ctx) {
    this.visitExpression(ctx.expression());
};


// queueMessage: 'queue' message 'on' queue
FormatterVisitor.prototype.visitQueueMessage = function(ctx) {
    this.source += 'queue ';
    this.visitMessage(ctx.message());
    this.source += ' on ';
    this.visitQueue(ctx.queue());
};


// range: value '..' value
FormatterVisitor.prototype.visitRange = function(ctx) {
    this.visitValue(ctx.value(0));
    this.source += '..';
    this.visitValue(ctx.value(1));
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitReal = function(ctx) {
    ctx.accept(this);
};


// realNumber: real
FormatterVisitor.prototype.visitRealNumber = function(ctx) {
    this.visitReal(ctx.real());
};


// reference: RESOURCE
FormatterVisitor.prototype.visitReference = function(ctx) {
    this.source += ctx.RESOURCE().getText();
};


// result: expression
FormatterVisitor.prototype.visitResult = function(ctx) {
    this.visitExpression(ctx.expression());
};


// returnResult: 'return' result?
FormatterVisitor.prototype.visitReturnResult = function(ctx) {
    this.source += 'return';
    var result = ctx.result();
    if (result) {
        this.source += ' ';
        this.visitResult(result);
    }
};


// saveDraft: 'save' draft 'to' location
FormatterVisitor.prototype.visitSaveDraft = function(ctx) {
    this.source += 'save ';
    this.visitDraft(ctx.draft());
    this.source += ' to ';
    this.visitLocation(ctx.location());
};


// script: SHELL statements EOF
FormatterVisitor.prototype.visitScript = function(ctx) {
    this.source += ctx.SHELL().getText();
    this.visitStatements(ctx.statements());
    this.source += ctx.EOF().getText();
};


// selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?
FormatterVisitor.prototype.visitSelectFrom = function(ctx) {
    var options = ctx.option();
    var blocks = ctx.block();

    // handle the selection
    this.source += 'select ';
    this.visitSelection(ctx.selection());
    this.source += ' from';

    // handle option blocks
    for (var i = 0; i < options.length; i++) {
        this.source += ' ';
        this.visitOption(options[i]);
        this.source += ' do ';
        this.visitBlock(blocks[i]);
    }

    // handle the optional final else block
    if (blocks.length > options.length) {
        this.source += ' else ';
        this.visitBlock(blocks[blocks.length - 1]);
    }
};


// selection: expression
FormatterVisitor.prototype.visitSelection = function(ctx) {
    this.visitExpression(ctx.expression());
};


// sequence: expression
FormatterVisitor.prototype.visitSequence = function(ctx) {
    this.visitExpression(ctx.expression());
};


// statement: mainClause exceptionClause* finalClause?
FormatterVisitor.prototype.visitStatement = function(ctx) {
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


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitStatements = function(ctx) {
    ctx.accept(this);
};


// structure: '[' composite ']'
FormatterVisitor.prototype.visitStructure = function(ctx) {
    this.source += '[';
    this.visitComposite(ctx.composite());
    this.source += ']';
};


// symbol: SYMBOL
FormatterVisitor.prototype.visitSymbol = function(ctx) {
    this.source += ctx.SYMBOL().getText();
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitTable = function(ctx) {
    ctx.accept(this);
};


// tag: TAG
FormatterVisitor.prototype.visitTag = function(ctx) {
    this.source += ctx.TAG().getText();
};


// template: expression
FormatterVisitor.prototype.visitTemplate = function(ctx) {
    this.visitExpression(ctx.expression());
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitText = function(ctx) {
    ctx.accept(this);
};


// throwException: 'throw' xception
FormatterVisitor.prototype.visitThrowException = function(ctx) {
    this.source += 'throw ';
    this.visitXception(ctx.xception());
};


// trueProbability: 'true'
FormatterVisitor.prototype.visitTrueProbability = function(ctx) {
    this.source += 'true';
};


// undefinedNumber: 'undefined'
FormatterVisitor.prototype.visitUndefinedNumber = function(ctx) {
    this.source += 'undefined';
};


// value: expression
FormatterVisitor.prototype.visitValue = function(ctx) {
    this.visitExpression(ctx.expression());
};


// variable: IDENTIFIER
FormatterVisitor.prototype.visitVariable = function(ctx) {
    this.source += ctx.IDENTIFIER().getText();
};


// variableExpression: variable
FormatterVisitor.prototype.visitVariableExpression = function(ctx) {
    this.visitVariable(ctx.variable());
};


// variableReal: FLOAT
FormatterVisitor.prototype.visitVariableReal = function(ctx) {
    this.source += ctx.FLOAT().getText();
};


// version: VERSION
FormatterVisitor.prototype.visitVersion = function(ctx) {
    this.source += ctx.VERSION().getText();
};


// waitForMessage: 'wait' 'for' symbol 'from' queue
FormatterVisitor.prototype.visitWaitForMessage = function(ctx) {
    this.source += 'wait for ';
    this.visitSymbol(ctx.symbol());
    this.source += ' from ';
    this.visitQueue(ctx.queue());
};


// whileLoop: (label ':')? 'while' condition 'do' block
FormatterVisitor.prototype.visitWhileLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
        this.source += ': ';
    }
    this.source += 'while ';
    this.visitCondition(ctx.condition());
    this.source += ' do ';
    this.visitBlock(ctx.block());
};


// withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block
FormatterVisitor.prototype.visitWithLoop = function(ctx) {
    var label = ctx.label();
    if (label) {
        this.visitLabel(label);
        this.source += ': ';
    }
    this.source += 'with ';
    var symbol = ctx.symbol();
    if (symbol) {
        this.source += 'each ';
        this.visitSymbol(symbol);
        this.source += ' in ';
    }
    this.visitSequence(ctx.sequence());
    this.source += ' do ';
    this.visitBlock(ctx.block());
};
