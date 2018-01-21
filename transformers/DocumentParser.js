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
 * This class defines a parser that reads in Bali Document Language™
 * source code and generates the corresponding parse tree.
 */
var antlr = require('antlr4');
var grammar = require('../grammar');
var nodes = require('../nodes');
var types = require('../nodes/NodeTypes');


/**
 * This constructor creates a new parser with the specified padding.
 * 
 * @constructor
 * @returns {DocumentParser} The new parser.
 */
function DocumentParser() {
    return this;
}
DocumentParser.prototype.constructor = DocumentParser;
exports.DocumentParser = DocumentParser;


/**
 * This method takes a source code string containing a Bali document
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {DocumentContext} The corresponding parse tree structure.
 */
DocumentParser.prototype.parseDocument = function(source) {
    var parser = initializeParser(source);
    var antlrTree = parser.document();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This method takes a source code string containing a Bali element
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {ElementContext} The corresponding parse tree structure.
 */
DocumentParser.prototype.parseElement = function(source) {
    var parser = initializeParser(source);
    var antlrTree = parser.element();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This method takes a source code string containing a Bali structure
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {StructureContext} The corresponding parse tree structure.
 */
DocumentParser.prototype.parseStructure = function(source) {
    var parser = initializeParser(source);
    var antlrTree = parser.structure();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This method takes a source code string containing a Bali range
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {RangeContext} The corresponding parse tree structure.
 */
DocumentParser.prototype.parseRange = function(source) {
    var parser = initializeParser(source);
    var antlrTree = parser.range();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This method takes a source code string containing a Bali array
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {ArrayContext} The corresponding parse tree structure.
 */
DocumentParser.prototype.parseArray = function(source) {
    var parser = initializeParser(source);
    var antlrTree = parser.array();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This method takes a source code string containing a Bali table
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {TableContext} The corresponding parse tree structure.
 */
DocumentParser.prototype.parseTable = function(source) {
    var parser = initializeParser(source);
    var antlrTree = parser.table();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This method takes a source code string containing a Bali block
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {BlockContext} The corresponding parse tree structure.
 */
DocumentParser.prototype.parseBlock = function(source) {
    var parser = initializeParser(source);
    var antlrTree = parser.block();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This method takes a source code string containing a Bali expression
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {ExpressionContext} The corresponding parse tree structure.
 */
DocumentParser.prototype.parseExpression = function(source) {
    var parser = initializeParser(source);
    var antlrTree = parser.expression();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


// PRIVATE FUNCTIONS

function initializeParser(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    return parser;
}


function convertParseTree(antlrTree) {
    var visitor = new TransformingVisitor();
    antlrTree.accept(visitor);
    var baliTree = visitor.result;
    return baliTree;
}


// PRIVATE CLASSES

function TransformingVisitor() {
    grammar.BaliLanguageVisitor.call(this);
    return this;
}
TransformingVisitor.prototype = Object.create(grammar.BaliLanguageVisitor.prototype);
TransformingVisitor.prototype.constructor = TransformingVisitor;


// anyType: 'any'
TransformingVisitor.prototype.visitAnyType = function(ctx) {
    var value = 'any';
    this.result = new nodes.TerminalNode(types.TYPE, value);
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
TransformingVisitor.prototype.visitArithmeticExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.ARITHMETIC_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// array: expression*
TransformingVisitor.prototype.visitArray = function(ctx) {
    var tree = new nodes.TreeNode(types.ARRAY);
    var type = ctx.constructor.name;
    if (type !== 'EmptyArrayContext') {
        var expressions = ctx.expression();
        for (var i = 0; i < expressions.length; i++) {
            expressions[i].accept(this);
            tree.addChild(this.result);
        }
    }
    if (type !== 'NewlineArrayContext') tree.isSimple = true;
    this.result = tree;
};


// association: element parameters? ':' expression
TransformingVisitor.prototype.visitAssociation = function(ctx) {
    var tree = new nodes.TreeNode(types.ASSOCIATION);
    ctx.element().accept(this);
    var element = this.result;
    var parameters = ctx.parameters();
    if (parameters) {
        parameters.accept(this);
        element.parameters = this.result;
    }
    tree.addChild(element);
    ctx.expression().accept(this);
    var expression = this.result;
    tree.addChild(expression);
    this.result = tree;
};


// binary: BINARY
TransformingVisitor.prototype.visitBinary = function(ctx) {
    var value = ctx.BINARY().getText();
    var terminal = new nodes.TerminalNode(types.BINARY, value);
    if (value.length > 82) terminal.isSimple = false;  // binaries are formatted in 80 character blocks
    this.result = terminal;
};


// block: '{' procedure '}'
TransformingVisitor.prototype.visitBlock = function(ctx) {
    var tree = new nodes.TreeNode(types.BLOCK);
    ctx.procedure().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// breakClause: 'break' ('from' label)?
TransformingVisitor.prototype.visitBreakClause = function(ctx) {
    var tree = new nodes.TreeNode(types.BREAK_CLAUSE);
    var label = ctx.label();
    if (label) {
        label.accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// checkoutClause: 'checkout' symbol 'from' expression
TransformingVisitor.prototype.visitCheckoutClause = function(ctx) {
    var tree = new nodes.TreeNode(types.CHECKOUT_CLAUSE);
    ctx.symbol().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// commitClause: 'commit' expression 'to' expression
TransformingVisitor.prototype.visitCommitClause = function(ctx) {
    var tree = new nodes.TreeNode(types.COMMIT_CLAUSE);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
TransformingVisitor.prototype.visitComparisonExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.COMPARISON_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// complementExpression: 'not' expression
TransformingVisitor.prototype.visitComplementExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.COMPLEMENT_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// complexNumber: '(' real del=(',' | 'e^') imaginary ')'
TransformingVisitor.prototype.visitComplexNumber = function(ctx) {
    var delimiter = ctx.del.text;
    if (delimiter === ',') delimiter += ' ';
    var value = '(';
    ctx.real().accept(this);
    var real = this.result;
    value += real;
    value += delimiter;
    ctx.imaginary().accept(this);
    var imaginary = this.result;
    value += imaginary;
    value += ')';
    var terminal = new nodes.TerminalNode(types.NUMBER, value);
    terminal.real = real;
    terminal.delimiter = delimiter;
    terminal.imaginary = imaginary;
    this.result = terminal;
};


// component: variable indices
TransformingVisitor.prototype.visitComponent = function(ctx) {
    var tree = new nodes.TreeNode(types.COMPONENT);
    ctx.variable().accept(this);
    tree.addChild(this.result);
    ctx.indices().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// componentExpression: expression indices
TransformingVisitor.prototype.visitComponentExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.COMPONENT_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.indices().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// constantReal: sign='-'? CONSTANT
TransformingVisitor.prototype.visitConstantReal = function(ctx) {
    var string = '';
    if (ctx.sign) {
        string += '-';
    }
    string += ctx.CONSTANT().getText();
    this.result = string;
};


// continueClause: 'continue' ('to' label)?
TransformingVisitor.prototype.visitContinueClause = function(ctx) {
    var tree = new nodes.TreeNode(types.CONTINUE_CLAUSE);
    var label = ctx.label();
    if (label) {
        label.accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// defaultExpression: expression '?' expression
TransformingVisitor.prototype.visitDefaultExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.DEFAULT_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// dereferenceExpression: '@' expression
TransformingVisitor.prototype.visitDereferenceExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.DEREFERENCE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// discardClause: 'discard' expression
TransformingVisitor.prototype.visitDiscardClause = function(ctx) {
    var tree = new nodes.TreeNode(types.DISCARD_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// document: (element | structure | block) parameters?
TransformingVisitor.prototype.visitDocument = function(ctx) {
    // skip this level and add optional parameters directly to the child
    ctx.children[0].accept(this);
    var document = this.result;
    var parameters = ctx.parameters();
    if (parameters) {
        parameters.accept(this);
        document.parameters = this.result;
    }
    this.result = document;
};


// documentExpression: document
TransformingVisitor.prototype.visitDocumentExpression = function(ctx) {
    // delegate to the child
    ctx.document().accept(this);
};


// duration: DURATION
TransformingVisitor.prototype.visitDuration = function(ctx) {
    var value = ctx.DURATION().getText();
    var terminal = new nodes.TerminalNode(types.DURATION, value);
    this.result = terminal;
};


// emptyArray: /*empty array*/
TransformingVisitor.prototype.visitEmptyArray = function(ctx) {
    // delegate to abstract type
    this.visitArray(ctx);
};


// emptyProcedure: /*empty procedure*/
TransformingVisitor.prototype.visitEmptyProcedure = function(ctx) {
    // delegate to abstract type
    this.visitProcedure(ctx);
};


// emptyTable: ':' /*empty table*/
TransformingVisitor.prototype.visitEmptyTable = function(ctx) {
    // delegate to abstract type
    this.visitTable(ctx);
};


// evaluateClause: ((symbol | component) ':=')? expression
TransformingVisitor.prototype.visitEvaluateClause = function(ctx) {
    var tree = new nodes.TreeNode(types.EVALUATE_CLAUSE);
    if (ctx.children.length > 1) {
        ctx.children[0].accept(this);
        tree.addChild(this.result);
    }
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// exponentialExpression: <assoc=right> expression '^' expression
TransformingVisitor.prototype.visitExponentialExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.EXPONENTIAL_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// factorialExpression: expression '!'
TransformingVisitor.prototype.visitFactorialExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.FACTORIAL_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// falseProbability: 'false'
TransformingVisitor.prototype.visitFalseProbability = function(ctx) {
    var value = 'false';
    var terminal = new nodes.TerminalNode(types.PROBABILITY, value);
    this.result = terminal;
};


// finishClause: 'finish' 'with' block
TransformingVisitor.prototype.visitFinishClause = function(ctx) {
    var tree = new nodes.TreeNode(types.FINISH_CLAUSE);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// fractionalProbability: FRACTION
TransformingVisitor.prototype.visitFractionalProbability = function(ctx) {
    var value = ctx.FRACTION().getText();
    this.result = new nodes.TerminalNode(types.PROBABILITY, value);
};


// functionExpression: invocation
TransformingVisitor.prototype.visitFunctionExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.FUNCTION_EXPRESSION);
    ctx.invocation().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
TransformingVisitor.prototype.visitHandleClause = function(ctx) {
    var tree = new nodes.TreeNode(types.HANDLE_CLAUSE);
    ctx.symbol().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
TransformingVisitor.prototype.visitIfClause = function(ctx) {
    var tree = new nodes.TreeNode(types.IF_CLAUSE);
    var expressions = ctx.expression();
    var blocks = ctx.block();
    var hasElseBlock = blocks.length > expressions.length;
    for (var i = 0; i < expressions.length; i++) {
        expressions[i].accept(this);
        tree.addChild(this.result);
        blocks[i].accept(this);
        tree.addChild(this.result);
    }
    if (hasElseBlock) {
        blocks[blocks.length - 1].accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// imaginary: (real | sign='-')? 'i'
TransformingVisitor.prototype.visitImaginary = function(ctx) {
    var string = '';
    var real = ctx.real();
    var sign = ctx.sign;
    if (real) {
        real.accept(this);
        string += this.result;
        if (real.constructor.name === 'ConstantRealContext') {
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
    ctx.imaginary().accept(this);
    var value = this.result;
    var terminal = new nodes.TerminalNode(types.NUMBER, value);
    this.result = terminal;
};


// indices: '[' array ']'
TransformingVisitor.prototype.visitIndices = function(ctx) {
    var tree = new nodes.TreeNode(types.INDICES);
    ctx.array().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// infiniteNumber: 'infinity'
TransformingVisitor.prototype.visitInfiniteNumber = function(ctx) {
    var value = 'infinity';
    var terminal = new nodes.TerminalNode(types.NUMBER, value);
    this.result = terminal;
};


// inlineArray: expression (',' expression)*
TransformingVisitor.prototype.visitInlineArray = function(ctx) {
    // delegate to abstract type
    this.visitArray(ctx);
};


// inlineProcedure: statement (';' statement)*
TransformingVisitor.prototype.visitInlineProcedure = function(ctx) {
    // delegate to abstract type
    this.visitProcedure(ctx);
};


// inlineTable: association (',' association)*
TransformingVisitor.prototype.visitInlineTable = function(ctx) {
    // delegate to abstract type
    this.visitTable(ctx);
};


// inlineText: TEXT
TransformingVisitor.prototype.visitInlineText = function(ctx) {
    var value = ctx.TEXT().getText();
    var terminal = new nodes.TerminalNode(types.TEXT, value);
    this.result = terminal;
};


// inversionExpression: op=('-' | '/' | '*') expression
TransformingVisitor.prototype.visitInversionExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.INVERSION_EXPRESSION);
    tree.operator = ctx.op.text;
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// invocation: name parameters
TransformingVisitor.prototype.visitInvocation = function(ctx) {
    var tree = new nodes.TreeNode(types.INVOCATION);
    ctx.name().accept(this);
    tree.addChild(this.result);
    ctx.parameters().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// label: IDENTIFIER
TransformingVisitor.prototype.visitLabel = function(ctx) {
    var value = ctx.IDENTIFIER().getText();
    var terminal = new nodes.TerminalNode(types.LABEL, value);
    this.result = terminal;
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
TransformingVisitor.prototype.visitLogicalExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.LOGICAL_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// magnitudeExpression: '|' expression '|'
TransformingVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.MAGNITUDE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// messageExpression: expression '.' invocation
TransformingVisitor.prototype.visitMessageExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.MESSAGE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.invocation().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// moment: MOMENT
TransformingVisitor.prototype.visitMoment = function(ctx) {
    var value = ctx.MOMENT().getText();
    var terminal = new nodes.TerminalNode(types.MOMENT, value);
    this.result = terminal;
};


// name: IDENTIFIER
TransformingVisitor.prototype.visitName = function(ctx) {
    var value = ctx.IDENTIFIER().getText();
    var terminal = new nodes.TerminalNode(types.NAME, value);
    this.result = terminal;
};


// newlineArray: NEWLINE (expression NEWLINE)*
TransformingVisitor.prototype.visitNewlineArray = function(ctx) {
    // delegate to abstract type
    this.visitArray(ctx);
};


// newlineProcedure: NEWLINE (statement NEWLINE)*
TransformingVisitor.prototype.visitNewlineProcedure = function(ctx) {
    // delegate to abstract type
    this.visitProcedure(ctx);
};


// newlineTable: NEWLINE (association NEWLINE)*
TransformingVisitor.prototype.visitNewlineTable = function(ctx) {
    // delegate to abstract type
    this.visitTable(ctx);
};


// newlineText: TEXT_BLOCK
TransformingVisitor.prototype.visitNewlineText = function(ctx) {
    var value = ctx.TEXT_BLOCK().getText();
    var terminal = new nodes.TerminalNode(types.TEXT, value);
    terminal.isSimple = false;
    this.result = terminal;
};


// noneType: 'none'
TransformingVisitor.prototype.visitNoneType = function(ctx) {
    var value = 'none';
    this.result = new nodes.TerminalNode(types.TYPE, value);
};


// parameters: '(' (range | array | table) ')'
TransformingVisitor.prototype.visitParameters = function(ctx) {
    var tree = new nodes.TreeNode(types.PARAMETERS);
    ctx.children[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// percent: real '%'
TransformingVisitor.prototype.visitPercent = function(ctx) {
    ctx.real().accept(this);
    var value = this.result + '%';
    var terminal = new nodes.TerminalNode(types.PERCENT, value);
    this.result = terminal;
};


// precedenceExpression: '(' expression ')'
TransformingVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    var tree = new nodes.TreeNode(types.PRECEDENCE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// procedure: statement*
TransformingVisitor.prototype.visitProcedure = function(ctx) {
    var tree = new nodes.TreeNode(types.PROCEDURE);
    var type = ctx.constructor.name;
    if (type !== 'EmptyProcedureContext') {
        var statements = ctx.statement();
        for (var i = 0; i < statements.length; i++) {
            statements[i].accept(this);
            tree.addChild(this.result);
        }
    }
    if (type !== 'NewlineProcedureContext') tree.isSimple = true;
    this.result = tree;
};


// publishClause: 'publish' expression
TransformingVisitor.prototype.visitPublishClause = function(ctx) {
    var tree = new nodes.TreeNode(types.PUBLISH_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// queueClause: 'queue' expression 'on' expression
TransformingVisitor.prototype.visitQueueClause = function(ctx) {
    var tree = new nodes.TreeNode(types.QUEUE_CLAUSE);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// range: expression '..' expression
TransformingVisitor.prototype.visitRange = function(ctx) {
    var tree = new nodes.TreeNode(types.RANGE);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// realNumber: real
TransformingVisitor.prototype.visitRealNumber = function(ctx) {
    ctx.real().accept(this);
    var value = this.result;
    var terminal = new nodes.TerminalNode(types.NUMBER, value);
    this.result = terminal;
};


// reference: RESOURCE
TransformingVisitor.prototype.visitReference = function(ctx) {
    var value = ctx.RESOURCE().getText();
    var terminal = new nodes.TerminalNode(types.REFERENCE, value);
    this.result = terminal;
};


// returnClause: 'return' expression?
TransformingVisitor.prototype.visitReturnClause = function(ctx) {
    var tree = new nodes.TreeNode(types.RETURN_CLAUSE);
    var expression = ctx.expression();
    if (expression) {
        expression.accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// saveClause: 'save' expression 'to' expression
TransformingVisitor.prototype.visitSaveClause = function(ctx) {
    var tree = new nodes.TreeNode(types.SAVE_CLAUSE);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
TransformingVisitor.prototype.visitSelectClause = function(ctx) {
    var tree = new nodes.TreeNode(types.SELECT_CLAUSE);
    var expressions = ctx.expression();
    var selector = expressions[0];
    expressions = expressions.slice(1);  // remove the first expression
    var blocks = ctx.block();
    var hasElseBlock = blocks.length > expressions.length;
    selector.accept(this);
    tree.addChild(this.result);
    for (var i = 0; i < expressions.length; i++) {
        expressions[i].accept(this);
        tree.addChild(this.result);
        blocks[i].accept(this);
        tree.addChild(this.result);
    }
    if (hasElseBlock) {
        blocks[blocks.length - 1].accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// statement: (
//     evaluateClause |
//     checkoutClause |
//     saveClause |
//     discardClause |
//     commitClause |
//     publishClause |
//     queueClause |
//     waitClause |
//     ifClause |
//     selectClause |
//     whileClause |
//     withClause |
//     continueClause |
//     breakClause |
//     returnClause |
//     throwClause
//) handleClause* finishClause?
TransformingVisitor.prototype.visitStatement = function(ctx) {
    var tree = new nodes.TreeNode(types.STATEMENT);
    var handleClauses = ctx.handleClause();
    var finishClause = ctx.finishClause();
    ctx.children[0].accept(this);
    tree.addChild(this.result);
    for (var i = 0; i < handleClauses.length; i++) {
        handleClauses[i].accept(this);
        tree.addChild(this.result);
    }
    if (finishClause) {
        finishClause.accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// structure: '[' (range | array | table) ']'
TransformingVisitor.prototype.visitStructure = function(ctx) {
    var tree = new nodes.TreeNode(types.STRUCTURE);
    ctx.children[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// symbol: SYMBOL
TransformingVisitor.prototype.visitSymbol = function(ctx) {
    var value = ctx.SYMBOL().getText();
    var terminal = new nodes.TerminalNode(types.SYMBOL, value);
    this.result = terminal;
};


// table: association*
TransformingVisitor.prototype.visitTable = function(ctx) {
    var tree = new nodes.TreeNode(types.TABLE);
    var type = ctx.constructor.name;
    if (type !== 'EmptyTableContext') {
        var associations = ctx.association();
        for (var i = 0; i < associations.length; i++) {
            associations[i].accept(this);
            tree.addChild(this.result);
        }
    }
    if (type !== 'NewlineTableContext') tree.isSimple = true;
    this.result = tree;
};


// tag: TAG
TransformingVisitor.prototype.visitTag = function(ctx) {
    var value = ctx.TAG().getText();
    var terminal = new nodes.TerminalNode(types.TAG, value);
    this.result = terminal;
};


// task: SHELL procedure EOF
TransformingVisitor.prototype.visitTask = function(ctx) {
    var tree = new nodes.TreeNode(types.SCRIPT);
    tree.shell = ctx.SHELL().getText();
    ctx.procedure().accept(this);
    tree.addChild(this.result);
    tree.EOF = ctx.EOF().getText();
    this.result = tree;
};


// throwClause: 'throw' expression
TransformingVisitor.prototype.visitThrowClause = function(ctx) {
    var tree = new nodes.TreeNode(types.THROW_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// trueProbability: 'true'
TransformingVisitor.prototype.visitTrueProbability = function(ctx) {
    var value = 'true';
    var terminal = new nodes.TerminalNode(types.PROBABILITY, value);
    this.result = terminal;
};


// undefinedNumber: 'undefined'
TransformingVisitor.prototype.visitUndefinedNumber = function(ctx) {
    var value = 'undefined';
    var terminal = new nodes.TerminalNode(types.NUMBER, value);
    this.result = terminal;
};


// variable: IDENTIFIER
TransformingVisitor.prototype.visitVariable = function(ctx) {
    var value = ctx.IDENTIFIER().getText();
    var terminal = new nodes.TerminalNode(types.VARIABLE, value);
    this.result = terminal;
};


// variableExpression: variable
TransformingVisitor.prototype.visitVariableExpression = function(ctx) {
    // delegate to the child
    ctx.variable().accept(this);
};


// variableReal: FLOAT
TransformingVisitor.prototype.visitVariableReal = function(ctx) {
    this.result = ctx.FLOAT().getText();
};


// version: VERSION
TransformingVisitor.prototype.visitVersion = function(ctx) {
    var value = ctx.VERSION().getText();
    var terminal = new nodes.TerminalNode(types.VERSION, value);
    this.result = terminal;
};


// waitClause: 'wait' 'for' symbol 'from' expression
TransformingVisitor.prototype.visitWaitClause = function(ctx) {
    var tree = new nodes.TreeNode(types.WAIT_CLAUSE);
    ctx.symbol().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// whileClause: (label ':')? 'while' expression 'do' block
TransformingVisitor.prototype.visitWhileClause = function(ctx) {
    var tree = new nodes.TreeNode(types.WHILE_CLAUSE);
    var label = ctx.label();
    if (label) {
        label.accept(this);
        tree.addChild(this.result);
    }
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// withClause: (label ':')? 'with' ('each' symbol 'in')? expression 'do' block
TransformingVisitor.prototype.visitWithClause = function(ctx) {
    var tree = new nodes.TreeNode(types.WITH_CLAUSE);
    var label = ctx.label();
    if (label) {
        label.accept(this);
        tree.addChild(this.result);
    }
    var symbol = ctx.symbol();
    if (symbol) {
        symbol.accept(this);
        tree.addChild(this.result);
    }
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};
