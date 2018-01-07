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
 * This class defines a transforming visitor that "walks" a parse tree
 * produced by the BaliLanguageParser and generates the corresponding
 * JavaScript object.
 */
var grammar = require('../grammar');
var elements = require('../elements');


/**
 * This constructor creates a new parse tree to object transformer.
 * 
 * @constructor
 * @returns {ParseTreeToObject} The new parse tree to object transformer.
 */
function ParseTreeToObject() {
    return this;
}
ParseTreeToObject.prototype.constructor = ParseTreeToObject;
exports.ParseTreeToObject = ParseTreeToObject;


/**
 * This function takes a Bali parse tree and transforms it into its corresponding
 * JavaScript object.
 * 
 * @param {ParserRuleContext} parseTree The Bali parse tree to be transformed.
 * @returns {object} The corresponding JavaScript object.
 */
ParseTreeToObject.prototype.generateJavaScriptObject = function(parseTree) {
    var visitor = new TransformingVisitor();
    parseTree.accept(visitor);
    return visitor.result;
};


// PRIVATE CLASSES

function TransformingVisitor() {
    grammar.BaliLanguageVisitor.call(this);
    return this;
}
TransformingVisitor.prototype = Object.create(grammar.BaliLanguageVisitor.prototype);
TransformingVisitor.prototype.constructor = TransformingVisitor;


// HACK: this method is missing from the generated visitor!
// It is needed when a rule has multiple NAMED options and is itself one
// of multiple options.
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
TransformingVisitor.prototype.visitAny = function(ctx) {
    ctx.accept(this);
};


// anyAny: 'any'
TransformingVisitor.prototype.visitAnyAny = function(ctx) {
    this.result = elements.Any.ANY;
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
TransformingVisitor.prototype.visitArithmeticExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// treat all arrays the same
TransformingVisitor.prototype.visitArray = function(ctx) {
    var value = [];
    var type = ctx.constructor.name;
    if (type !== 'EmptyArrayContext') {
        var values = ctx.value();
        for (var i = 0; i < values.length; i++) {
            this.visitValue(values[i]);
            value.push(this.result);
        }
    }
    var composite = new elements.Composite(value, type);
    this.result = composite;
};


// assignee: symbol | component
TransformingVisitor.prototype.visitAssignee = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// association: key ':' value
TransformingVisitor.prototype.visitAssociation = function(ctx) {
    this.visitKey(ctx.key());
    var key = this.result;
    this.visitValue(ctx.value());
    var value = this.result;
    var association = { key: key, value: value };
    this.result = association;
};


// binary: BINARY
TransformingVisitor.prototype.visitBinary = function(ctx) {
    this.result = new elements.Binary(ctx.BINARY().getText());
};


// block: '{' statements '}'
TransformingVisitor.prototype.visitBlock = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// blockText: TEXT_BLOCK
TransformingVisitor.prototype.visitBlockText = function(ctx) {
    this.result = new elements.Text(ctx.TEXT_BLOCK().getText());
};


// breakFrom: 'break' ('from' label)?
TransformingVisitor.prototype.visitBreakFrom = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// checkoutDocument: 'checkout' symbol 'from' location
TransformingVisitor.prototype.visitCheckoutDocument = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// commitDraft: 'commit' draft 'to' location
TransformingVisitor.prototype.visitCommitDraft = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
TransformingVisitor.prototype.visitComparisonExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// complementExpression: 'not' expression
TransformingVisitor.prototype.visitComplementExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// complexNumber: '(' real del=(',' | 'e^') imaginary ')'
TransformingVisitor.prototype.visitComplexNumber = function(ctx) {
    var string = '(';
    this.visitReal(ctx.real());
    string += this.result;
    string += ctx.del.text;
    this.visitImaginary(ctx.imaginary());
    string += this.result;
    string += ')';
    this.result = new elements.Complex(string);
};


// component: variable indices
TransformingVisitor.prototype.visitComponent = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// componentExpression: expression indices
TransformingVisitor.prototype.visitComponentExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// composite: range | array | table
TransformingVisitor.prototype.visitComposite = function(ctx) {
    // delegate to concrete type
    this.visitChildren(ctx);
};


// condition: expression
TransformingVisitor.prototype.visitCondition = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// constantReal: sign='-'? con=('e' | 'pi' | 'phi')
TransformingVisitor.prototype.visitConstantReal = function(ctx) {
    var string = '';
    if (ctx.sign) {
        string += '-';
    }
    string += ctx.con.text;
    this.result = string;
};


// continueTo: 'continue' ('to' label)?
TransformingVisitor.prototype.visitContinueTo = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// defaultExpression: expression '?' expression
TransformingVisitor.prototype.visitDefaultExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// dereferenceExpression: '@' expression
TransformingVisitor.prototype.visitDereferenceExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// discardDraft: 'discard' location
TransformingVisitor.prototype.visitDiscardDraft = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// document: literal parameters?
TransformingVisitor.prototype.visitDocument = function(ctx) {
    this.visitLiteral(ctx.literal());
    var literal = this.result;
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
        literal.parameters = this.result;
    }
    this.result = literal;
};


// documentExpression: document
TransformingVisitor.prototype.visitDocumentExpression = function(ctx) {
    this.visitDocument(ctx.document());
};


// draft: expression
TransformingVisitor.prototype.visitDraft = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// element: any | tag | symbol | moment | reference | version | text | binary |
//  probability | percent | number
TransformingVisitor.prototype.visitElement = function(ctx) {
    // delegate to concrete type
    this.visitChildren(ctx);
};


// emptyArray: /*empty array*/
TransformingVisitor.prototype.visitEmptyArray = function(ctx) {
    // delegate to abstract type
    this.visitArray(ctx);
};


// emptyStatements: /*empty statements*/
TransformingVisitor.prototype.visitEmptyStatements = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// emptyTable: ':' /*empty table*/
TransformingVisitor.prototype.visitEmptyTable = function(ctx) {
    console.log('visitEmptyTable');
    // delegate to abstract type
    this.visitTable(ctx);
};


// evaluateExpression: (assignee ':=')? expression
TransformingVisitor.prototype.visitEvaluateExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// event: expression
TransformingVisitor.prototype.visitEvent = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// xception: expression
TransformingVisitor.prototype.visitXception = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// exceptionClause: 'catch' symbol 'matching' template 'with' block
TransformingVisitor.prototype.visitExceptionClause = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// exponentialExpression: <assoc=right> expression '^' expression
TransformingVisitor.prototype.visitExponentialExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// HACK: this method is missing from the generated visitor!
// It is needed when a rule has multiple NAMED options and is itself one
// of multiple options.
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
TransformingVisitor.prototype.visitExpression = function(ctx) {
    ctx.accept(this);
};


// factorialExpression: expression '!'
TransformingVisitor.prototype.visitFactorialExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// falseProbability: 'false'
TransformingVisitor.prototype.visitFalseProbability = function(ctx) {
    this.result = elements.Probability.FALSE;
};


// finalClause: 'finish' 'with' block
TransformingVisitor.prototype.visitFinalClause = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// fractionalProbability: FRACTION
TransformingVisitor.prototype.visitFractionalProbability = function(ctx) {
    this.result = new elements.Probability(ctx.FRACTION().getText());
};


// functionExpression: IDENTIFIER parameters
TransformingVisitor.prototype.visitFunctionExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// ifThen: 'if' condition 'then' block ('else' 'if' condition 'then' block)* ('else' block)?
TransformingVisitor.prototype.visitIfThen = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// imaginary: (real | sign='-')? 'i'
TransformingVisitor.prototype.visitImaginary = function(ctx) {
    var string = '';
    var real = ctx.real();
    var sign = ctx.sign;
    if (real) {
        this.visitReal(real);
        string += this.result;
        if (real.con) {
            string += ' ';
        }
    } else if (sign) {
        string += '-';
    }
    string += 'i';
    this.result = string;
};


// imaginaryNumber: imaginary
TransformingVisitor.prototype.visitImaginaryNumber = function(ctx) {
    var string = '(0, ';
    this.visitImaginary(ctx.imaginary());
    string += this.result;
    string += ')';
    this.result = new elements.Complex(string);
};


// indices: '[' array ']'
TransformingVisitor.prototype.visitIndices = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// infiniteNumber: 'infinity'
TransformingVisitor.prototype.visitInfiniteNumber = function(ctx) {
    this.result = elements.Complex.INFINITY;
};


// inlineArray: value (',' value)*
TransformingVisitor.prototype.visitInlineArray = function(ctx) {
    // delegate to abstract type
    this.visitArray(ctx);
};


// inlineStatements: statement (';' statement)*
TransformingVisitor.prototype.visitInlineStatements = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// inlineTable: association (',' association)*
TransformingVisitor.prototype.visitInlineTable = function(ctx) {
    // delegate to abstract type
    this.visitTable(ctx);
};


// inlineText: TEXT
TransformingVisitor.prototype.visitInlineText = function(ctx) {
    this.result = new elements.Text(ctx.TEXT().getText());
};


// inversionExpression: op=('-' | '/' | '*') expression
TransformingVisitor.prototype.visitInversionExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// key: element parameters?
TransformingVisitor.prototype.visitKey = function(ctx) {
    this.visitElement(ctx.element());
    var element = this.result;
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
        element.parameters = this.result;
    }
    this.result = element;
};


// label: IDENTIFIER
TransformingVisitor.prototype.visitLabel = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// literal: element | structure | block
TransformingVisitor.prototype.visitLiteral = function(ctx) {
    // delegate to concrete type
    this.visitChildren(ctx);
};


// location: expression
TransformingVisitor.prototype.visitLocation = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
TransformingVisitor.prototype.visitLogicalExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// magnitudeExpression: '|' expression '|'
TransformingVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
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
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// message: expression
TransformingVisitor.prototype.visitMessage = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// messageExpression: expression '.' IDENTIFIER parameters
TransformingVisitor.prototype.visitMessageExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// moment: MOMENT
TransformingVisitor.prototype.visitMoment = function(ctx) {
    this.result = new elements.Moment(ctx.MOMENT().getText());
};


// newlineArray: NEWLINE (value NEWLINE)*
TransformingVisitor.prototype.visitNewlineArray = function(ctx) {
    // delegate to abstract type
    this.visitArray(ctx);
};


// newlineStatements: NEWLINE (statement NEWLINE)*
TransformingVisitor.prototype.visitNewlineStatements = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// newlineTable: NEWLINE (association NEWLINE)*
TransformingVisitor.prototype.visitNewlineTable = function(ctx) {
    // delegate to abstract type
    this.visitTable(ctx);
};


// noneAny: 'none'
TransformingVisitor.prototype.visitNoneAny = function(ctx) {
    this.result = elements.Any.NONE;
};


// HACK: this method is missing from the generated visitor!
// It is needed when a rule has multiple NAMED options and is itself one
// of multiple options.
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
TransformingVisitor.prototype.visitNumber = function(ctx) {
    // delegate to concrete type
    ctx.accept(this);
};


// option: expression
TransformingVisitor.prototype.visitOption = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// parameters: '(' composite ')'
TransformingVisitor.prototype.visitParameters = function(ctx) {
    // delegate to child
    this.visitComposite(ctx.composite());
};


// percent: real '%'
TransformingVisitor.prototype.visitPercent = function(ctx) {
    this.visitReal(ctx.real());
    var string = this.result;
    string += '%';
    this.result = new elements.Percent(string);
};


// precedenceExpression: '(' expression ')'
TransformingVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// publishEvent: 'publish' event
TransformingVisitor.prototype.visitPublishEvent = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// queue: expression
TransformingVisitor.prototype.visitQueue = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// queueMessage: 'queue' message 'on' queue
TransformingVisitor.prototype.visitQueueMessage = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// range: value '..' value
TransformingVisitor.prototype.visitRange = function(ctx) {
    this.visitValue(ctx.value(0));
    var firstValue = this.result;
    this.visitValue(ctx.value(1));
    var lastValue = this.result;
    this.result = new elements.Range(firstValue, lastValue);
};


// HACK: this method is missing from the generated visitor!
// It is needed when a rule has multiple NAMED options and is itself one
// of multiple options.
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
TransformingVisitor.prototype.visitReal = function(ctx) {
    // delegate to concrete type
    ctx.accept(this);
};


// realNumber: real
TransformingVisitor.prototype.visitRealNumber = function(ctx) {
    this.visitReal(ctx.real());
    this.result = new elements.Complex(this.result);
};


// reference: RESOURCE
TransformingVisitor.prototype.visitReference = function(ctx) {
    this.result = new elements.Reference(ctx.RESOURCE().getText());
};


// result: expression
TransformingVisitor.prototype.visitResult = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// returnResult: 'return' result?
TransformingVisitor.prototype.visitReturnResult = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// saveDraft: 'save' draft 'to' location
TransformingVisitor.prototype.visitSaveDraft = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// script: SHELL statements EOF
TransformingVisitor.prototype.visitScript = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// selectFrom: 'select' selection 'from' (option 'do' block)+ ('else' block)?
TransformingVisitor.prototype.visitSelectFrom = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// selection: expression
TransformingVisitor.prototype.visitSelection = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// sequence: expression
TransformingVisitor.prototype.visitSequence = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// statement: mainClause exceptionClause* finalClause?
TransformingVisitor.prototype.visitStatement = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// structure: '[' composite ']'
TransformingVisitor.prototype.visitStructure = function(ctx) {
    // delegate to child
    this.visitComposite(ctx.composite());
};


// symbol: SYMBOL
TransformingVisitor.prototype.visitSymbol = function(ctx) {
    this.result = new elements.Symbol(ctx.SYMBOL().getText());
};


// treat all tables the same
TransformingVisitor.prototype.visitTable = function(ctx) {
    var value = [];
    var type = ctx.constructor.name;
    console.log('visitTable: ' + type);
    if (type !== 'EmptyTableContext') {
        var associations = ctx.association();
        for (var i = 0; i < associations.length; i++) {
            this.visitAssociation(associations[i]);
            value.push(this.result);
        }
    }
    var composite = new elements.Composite(value, type);
    this.result = composite;
};


// tag: TAG
TransformingVisitor.prototype.visitTag = function(ctx) {
    this.result = new elements.Tag(ctx.TAG().getText());
};


// template: expression
TransformingVisitor.prototype.visitTemplate = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// HACK: this method is missing from the generated visitor!
// It is needed when a rule has multiple NAMED options and is itself one
// of multiple options.
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
TransformingVisitor.prototype.visitText = function(ctx) {
    // delegate to concrete type
    ctx.accept(this);
};


// throwException: 'throw' xception
TransformingVisitor.prototype.visitThrowException = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// trueProbability: 'true'
TransformingVisitor.prototype.visitTrueProbability = function(ctx) {
    this.result = elements.Probability.TRUE;
};


// undefinedNumber: 'undefined'
TransformingVisitor.prototype.visitUndefinedNumber = function(ctx) {
    this.result = elements.Complex.UNDEFINED;
};


// value: expression
TransformingVisitor.prototype.visitValue = function(ctx) {
    // delegate to child
    this.visitExpression(ctx.expression());
};


// variable: IDENTIFIER
TransformingVisitor.prototype.visitVariable = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// variableExpression: variable
TransformingVisitor.prototype.visitVariableExpression = function(ctx) {
    throw new Error('TRANSFORMER: Bali expressions cannot be transformed into JavaScript objects.');
};


// variableReal: FLOAT
TransformingVisitor.prototype.visitVariableReal = function(ctx) {
    this.result = ctx.FLOAT().getText();
};


// version: VERSION
TransformingVisitor.prototype.visitVersion = function(ctx) {
    this.result = new elements.Version(ctx.VERSION().getText());
};


// waitForMessage: 'wait' 'for' symbol 'from' queue
TransformingVisitor.prototype.visitWaitForMessage = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// whileLoop: (label ':')? 'while' condition 'do' block
TransformingVisitor.prototype.visitWhileLoop = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};


// withLoop: (label ':')? 'with' ('each' symbol 'in')? sequence 'do' block
TransformingVisitor.prototype.visitWithLoop = function(ctx) {
    throw new Error('TRANSFORMER: Bali statements cannot be transformed into JavaScript objects.');
};
