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


// document: literal parameters?
FormatterVisitor.prototype.visitDocument = function(ctx) {
    this.visitLiteral(ctx.literal());
    var parameters = ctx.parameters();
    if (parameters) {
        this.visitParameters(parameters);
    }
};


// literal: element | structure | block
FormatterVisitor.prototype.visitLiteral = function(ctx) {
    this.visitChildren(ctx);
};


// structure: '[' composite ']'
FormatterVisitor.prototype.visitStructure = function(ctx) {
    this.source += '[';
    this.visitComposite(ctx.composite());
    this.source += ']';
};


// composite: range | array | table
FormatterVisitor.prototype.visitComposite = function(ctx) {
    this.visitChildren(ctx);
};


// range: expression '..' expression
FormatterVisitor.prototype.visitRange = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.source += '..';
    this.visitExpression(ctx.expression(1));
};


// HACK: this method is missing from the generated visitor!
// SEE: https://stackoverflow.com/questions/36758475/antlr4-javascript-target-issue-with-visitor-and-labeled-alternative
FormatterVisitor.prototype.visitArray = function(ctx) {
    ctx.accept(this);
};


// inlineArray: expression (',' expression)*
FormatterVisitor.prototype.visitInlineArray = function(ctx) {
    var expressions = ctx.expression();  // retrieve all the expressions
    this.visitExpression(expressions[0]);
    for (var i = 1; i < expressions.length; i++) {
        this.source += ', ';
        this.visitExpression(expressions[i]);
    }
};


// newlineArray: NEWLINE (expression NEWLINE)*
FormatterVisitor.prototype.visitNewlineArray = function(ctx) {
    var expressions = ctx.expression();  // retrieve all the expressions
    this.depth++;
    for (var i = 0; i < expressions.length; i++) {
        this.appendNewline();
        this.visitExpression(expressions[i]);
    }
    this.depth--;
    this.appendNewline();
};


// emptyArray: /*empty array*/
FormatterVisitor.prototype.visitEmptyArray = function(ctx) {
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitTable = function(ctx) {
    ctx.accept(this);
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


// emptyTable: ':' /*empty table*/
FormatterVisitor.prototype.visitEmptyTable = function(ctx) {
    this.source += ':';
};


// association: key ':' expression
FormatterVisitor.prototype.visitAssociation = function(ctx) {
    this.visitKey(ctx.key());
    this.source += ': ';
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


// parameters: '(' composite ')';
FormatterVisitor.prototype.visitParameters = function(ctx) {
    this.source += '(';
    this.visitComposite(ctx.composite());
    this.source += ')';
};


// script: SHELL statements EOF
FormatterVisitor.prototype.visitScript = function(ctx) {
    this.source += ctx.SHELL().getText();
    this.visitStatements(ctx.statements());
    this.source += ctx.EOF().getText();
};


// block: '{' statements '}'
FormatterVisitor.prototype.visitBlock = function(ctx) {
    this.source += '{';
    this.visitStatements(ctx.statements());
    this.source += '}';
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitStatements = function(ctx) {
    ctx.accept(this);
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


// emptyStatements: /*empty statements*/
FormatterVisitor.prototype.visitEmptyStatements = function(ctx) {
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


// mainClause: evaluateExpression | queueMessage | publishEvent | waitForEvent |
// continueTo | breakFrom | returnResult | throwException | ifThen | selectFrom |
// whileLoop | withLoop
FormatterVisitor.prototype.visitMainClause = function(ctx) {
    this.visitChildren(ctx);
};


// exceptionClause: 'catch' symbol 'matching' xception 'with' block
FormatterVisitor.prototype.visitExceptionClause = function(ctx) {
    this.source += ' catch ';
    this.visitSymbol(ctx.symbol());
    this.source += ' matching ';
    this.visitXception(ctx.xception());
    this.source += ' with ';
    this.visitBlock(ctx.block());
};



// finalClause: 'finish' 'with' block
FormatterVisitor.prototype.visitFinalClause = function(ctx) {
    this.source += ' finish with ';
    this.visitBlock(ctx.block());
};


// evaluateExpression: (assignee op=(':=' | '?=' | '+=' | '-=' | '*=' | '/=' |
// '//=' | '^=' | 'a=' | 's=' | 'o=' | 'x='))? expression
FormatterVisitor.prototype.visitEvaluateExpression = function(ctx) {
    var assignee = ctx.assignee();
    if (assignee) {
        this.visitAssignee(assignee);
        this.source += ' ';
        this.source += ctx.op.text;
        this.source += ' ';
    }
    this.visitExpression(ctx.expression());
};


// assignee: target | component
FormatterVisitor.prototype.visitAssignee = function(ctx) {
    this.visitChildren(ctx);
};


// target: symbol
FormatterVisitor.prototype.visitTarget = function(ctx) {
    this.visitSymbol(ctx.symbol());
};


// component: variable indices
FormatterVisitor.prototype.visitComponent = function(ctx) {
    this.visitVariable(ctx.variable());
    this.visitIndices(ctx.indices());
};


// queueMessage: 'queue' message 'for' recipient
FormatterVisitor.prototype.visitQueueMessage = function(ctx) {
    this.source += 'queue ';
    this.visitMessage(ctx.message());
    this.source += ' for ';
    this.visitRecipient(ctx.recipient());
};


// recipient: expression
FormatterVisitor.prototype.visitRecipient = function(ctx) {
    this.visitExpression(ctx.expression());
};


// publishEvent: 'publish' event
FormatterVisitor.prototype.visitPublishEvent = function(ctx) {
    this.source += 'publish ';
    this.visitEvent(ctx.event());
};


// waitForEvent: 'wait' 'for' symbol 'matching' event
FormatterVisitor.prototype.visitWaitForEvent = function(ctx) {
    this.source += 'wait for ';
    this.visitSymbol(ctx.symbol());
    this.source += ' matching ';
    this.visitEvent(ctx.event());
};


// event: expression
FormatterVisitor.prototype.visitEvent = function(ctx) {
    this.visitExpression(ctx.expression());
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


// breakFrom: 'break' ('from' label)?
FormatterVisitor.prototype.visitBreakFrom = function(ctx) {
    this.source += 'break';
    var label = ctx.label();
    if (label) {
        this.source += ' from ';
        this.visitLabel(label);
    }
};


// label: name
FormatterVisitor.prototype.visitLabel = function(ctx) {
    this.source += ctx.IDENTIFIER().getText();
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


// result: expression
FormatterVisitor.prototype.visitResult = function(ctx) {
    this.visitExpression(ctx.expression());
};


// throwException: 'throw' xception
FormatterVisitor.prototype.visitThrowException = function(ctx) {
    this.source += 'throw ';
    this.visitXception(ctx.xception());
};


// xception: expression
FormatterVisitor.prototype.visitXception = function(ctx) {
    this.visitExpression(ctx.expression());
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


// condition: expression
FormatterVisitor.prototype.visitCondition = function(ctx) {
    this.visitExpression(ctx.expression());
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


// option: expression
FormatterVisitor.prototype.visitOption = function(ctx) {
    this.visitExpression(ctx.expression());
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


// sequence: expression
FormatterVisitor.prototype.visitSequence = function(ctx) {
    this.visitExpression(ctx.expression());
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitExpression = function(ctx) {
    ctx.accept(this);
};


// documentExpression: document
FormatterVisitor.prototype.visitDocumentExpression = function(ctx) {
    this.visitDocument(ctx.document());
};


// variableExpression: variable
FormatterVisitor.prototype.visitVariableExpression = function(ctx) {
    this.visitVariable(ctx.variable());
};


// funxionExpression: funxion
FormatterVisitor.prototype.visitFunxionExpression = function(ctx) {
    this.visitFunxion(ctx.funxion());
};


// precedenceExpression: '(' expression ')'
FormatterVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    this.source += '(';
    this.visitExpression(ctx.expression());
    this.source += ')';
};


// dereferenceExpression: '@' expression
FormatterVisitor.prototype.visitDereferenceExpression = function(ctx) {
    this.source += '@';
    this.visitExpression(ctx.expression());
};


// componentExpression: expression indices
FormatterVisitor.prototype.visitComponentExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.visitIndices(ctx.indices());
};


// messageExpression: expression '.' message
FormatterVisitor.prototype.visitMessageExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.source += '.';
    this.visitMessage(ctx.message());
};


// factorialExpression: expression '!'
FormatterVisitor.prototype.visitFactorialExpression = function(ctx) {
    this.visitExpression(ctx.expression());
    this.source += '!';
};


// exponentialExpression: <assoc=right> expression '^' expression
FormatterVisitor.prototype.visitExponentialExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.source += ' ^ ';
    this.visitExpression(ctx.expression(1));
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


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
FormatterVisitor.prototype.visitArithmeticExpression = function(ctx) {
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


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
FormatterVisitor.prototype.visitLogicalExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.source += ' ';
    this.source += ctx.op.text;
    this.source += ' ';
    this.visitExpression(ctx.expression(1));
};


// defaultExpression: expression '?' expression
FormatterVisitor.prototype.visitDefaultExpression = function(ctx) {
    this.visitExpression(ctx.expression(0));
    this.source += ' ? ';
    this.visitExpression(ctx.expression(1));
};


// variable: name
FormatterVisitor.prototype.visitVariable = function(ctx) {
    this.source += ctx.IDENTIFIER().getText();
};


// funxion: name parameters
FormatterVisitor.prototype.visitFunxion = function(ctx) {
    this.source += ctx.IDENTIFIER().getText();
    this.visitParameters(ctx.parameters());
};


// message: name parameters
FormatterVisitor.prototype.visitMessage = function(ctx) {
    this.source += ctx.IDENTIFIER().getText();
    this.visitParameters(ctx.parameters());
};


// indices: structure
FormatterVisitor.prototype.visitIndices = function(ctx) {
    this.visitStructure(ctx.structure());
};


// element: any | tag | symbol | moment | reference | version | text | binary |
//  probability | percent | number
FormatterVisitor.prototype.visitElement = function(ctx) {
    this.visitChildren(ctx);
};


// noneAny: 'none'
FormatterVisitor.prototype.visitNoneAny = function(ctx) {
    this.source += 'none';
};


// anyAny: 'any'
FormatterVisitor.prototype.visitAnyAny = function(ctx) {
    this.source += 'any';
};


// tag: TAG
FormatterVisitor.prototype.visitTag = function(ctx) {
    this.source += ctx.TAG().getText();
};


// symbol: SYMBOL
FormatterVisitor.prototype.visitSymbol = function(ctx) {
    this.source += ctx.SYMBOL().getText();
};


// moment: MOMENT
FormatterVisitor.prototype.visitMoment = function(ctx) {
    this.source += ctx.MOMENT().getText();
};


// reference: RESOURCE
FormatterVisitor.prototype.visitReference = function(ctx) {
    this.source += ctx.RESOURCE().getText();
};


// version: VERSION
FormatterVisitor.prototype.visitVersion = function(ctx) {
    this.source += ctx.VERSION().getText();
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitText = function(ctx) {
    ctx.accept(this);
};


// inlineText: TEXT
FormatterVisitor.prototype.visitInlineText = function(ctx) {
    this.source += ctx.TEXT().getText();
};


// blockText: TEXT_BLOCK
FormatterVisitor.prototype.visitBlockText = function(ctx) {
    this.source += ctx.TEXT_BLOCK().getText();
};


// binary: BINARY
FormatterVisitor.prototype.visitBinary = function(ctx) {
    this.source += ctx.BINARY().getText();
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitProbability = function(ctx) {
    ctx.accept(this);
};


// trueProbability: 'true'
FormatterVisitor.prototype.visitTrueProbability = function(ctx) {
    this.source += 'true';
};


// falseProbability: 'false'
FormatterVisitor.prototype.visitFalseProbability = function(ctx) {
    this.source += 'false';
};


// fractionalProbability: FRACTION
FormatterVisitor.prototype.visitFractionalProbability = function(ctx) {
    this.source += ctx.FRACTION().getText();
};


// percent: real '%'
FormatterVisitor.prototype.visitPercent = function(ctx) {
    this.visitReal(ctx.real());
    this.source += '%';
};


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitReal = function(ctx) {
    ctx.accept(this);
};


// constantReal: sign='-'? con=('e' | 'pi' | 'phi')
FormatterVisitor.prototype.visitConstantReal = function(ctx) {
    if (ctx.sign) {
        this.source += '-';
    }
    this.source += ctx.con.text;
};


// variableReal: FLOAT
FormatterVisitor.prototype.visitVariableReal = function(ctx) {
    this.source += ctx.FLOAT().getText();
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


// HACK: this method is missing from the generated visitor!
FormatterVisitor.prototype.visitNumber = function(ctx) {
    ctx.accept(this);
};


// undefinedNumber: 'undefined'
FormatterVisitor.prototype.visitUndefinedNumber = function(ctx) {
    this.source += 'undefined';
};


// infiniteNumber: 'infinity'
FormatterVisitor.prototype.visitInfiniteNumber = function(ctx) {
    this.source += 'infinity';
};


// realNumber: real
FormatterVisitor.prototype.visitRealNumber = function(ctx) {
    this.visitReal(ctx.real());
};


// imaginaryNumber: imaginary
FormatterVisitor.prototype.visitImaginaryNumber = function(ctx) {
    this.visitImaginary(ctx.imaginary());
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

