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

/**
 * This library provides functions that parse a Bali document and
 * produce the corresponding parse tree structure.
 */
var antlr = require('antlr4');
var ErrorStrategy = require('antlr4/error/ErrorStrategy');
var grammar = require('../grammar');
var BaliDocument = require('../BaliDocument');
var Tree = require('../nodes/Tree').Tree;
var Terminal = require('../nodes/Terminal').Terminal;
var types = require('../nodes/Types');


/**
 * This function parses a Bali source string and returns the corresponding
 * document.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting document.
 */
exports.parseDocument = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.document();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * component.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting component.
 */
exports.parseComponent = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.component();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * parameters.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting parameters.
 */
exports.parseParameters = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.parameters();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * element.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting element.
 */
exports.parseElement = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.element();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * structure.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting structure.
 */
exports.parseStructure = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.structure();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * range.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting range.
 */
exports.parseRange = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.range();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * list.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting list.
 */
exports.parseList = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.list();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * catalog.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting catalog.
 */
exports.parseCatalog = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.catalog();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * procedure.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting procedure.
 */
exports.parseProcedure = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.procedure();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * expression.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {BaliDocument} The resulting expression.
 */
exports.parseExpression = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.expression();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


// PRIVATE FUNCTIONS

function initializeParser(source, debug) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliDocumentLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliDocumentParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(new BaliErrorListener(debug));
    parser._errHandler = new BaliErrorStrategy(debug);
    if (debug) {
        parser.verbose = true;
        //parser._interp.predictionMode = antlr.atn.PredictionMode.LL_EXACT_AMBIG_DETECTION;
    }
    return parser;
}


// override the recover method in the lexer to fail fast
grammar.BaliDocumentLexer.prototype.recover = function(e) {
    throw new antlr.error.ParseCancellationException(e);
};


function convertParseTree(antlrTree) {
    var visitor = new ParsingVisitor();
    antlrTree.accept(visitor);
    var baliTree = visitor.result;
    return baliTree;
}


function calculateSimplicity(tree) {
    // assume the node is complex by default
    var isSimple = false;

    // nodes with no children are simple
    if (!tree.children) return tree.isSimple;
    var size = tree.children.length;

    // nodes with five or more children are complex
    if (size > 5) return false;

    // nodes with a single terminal child have the same simplicity as the child (transitivity)
    if (size === 1) {
        //return child instanceof Terminal && child.isSimple;
        var child = tree.children[0];
        return (child instanceof Terminal || child.type === types.ASSOCIATION || child.children.length === 1) && child.isSimple;
    }

    // if any of the children are complex the node is complex
    tree.children.find(function(node) {
        isSimple = node.isSimple;
        return !isSimple;
    });

    return isSimple;
}

// PRIVATE CLASSES

function ParsingVisitor() {
    grammar.BaliDocumentVisitor.call(this);
    this.depth = 0;
    return this;
}
ParsingVisitor.prototype = Object.create(grammar.BaliDocumentVisitor.prototype);
ParsingVisitor.prototype.constructor = ParsingVisitor;
ParsingVisitor.indentation = '    ';  // indentation per level


ParsingVisitor.prototype.getPadding = function() {
    var padding = '';
    for (var i = 0; i < this.depth; i++) {
        padding += ParsingVisitor.indentation;
    }
    return padding;
};


// angle: '~' real
ParsingVisitor.prototype.visitAngle = function(ctx) {
    ctx.real().accept(this);
    var value = '~' + this.result;
    var terminal = new Terminal(types.ANGLE, value);
    this.result = terminal;
};


// anyTemplate: 'any'
ParsingVisitor.prototype.visitAnyTemplate = function(ctx) {
    var value = 'any';
    this.result = new Terminal(types.TEMPLATE, value);
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
ParsingVisitor.prototype.visitArithmeticExpression = function(ctx) {
    var tree = new Tree(types.ARITHMETIC_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// association: component ':' expression
ParsingVisitor.prototype.visitAssociation = function(ctx) {
    var tree = new Tree(types.ASSOCIATION);
    ctx.component().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// binary: BINARY
ParsingVisitor.prototype.visitBinary = function(ctx) {
    var value = ctx.BINARY().getText();
    var padding = this.getPadding();
    var regex = new RegExp('\\n' + padding, 'g');
    value = value.replace(regex, '\n');
    var terminal = new Terminal(types.BINARY, value);
    //if (value.length > 82) terminal.isSimple = false;  // binaries are formatted in 80 character blocks
    terminal.isSimple = false;  // binaries tend to be long
    this.result = terminal;
};


// block: '{' procedure '}'
ParsingVisitor.prototype.visitBlock = function(ctx) {
    var tree = new Tree(types.BLOCK);
    ctx.procedure().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// breakClause: 'break' 'loop'
ParsingVisitor.prototype.visitBreakClause = function(ctx) {
    var tree = new Tree(types.BREAK_CLAUSE);
    tree.isSimple = true;
    this.result = tree;
};


// catalog:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty catalog*/
ParsingVisitor.prototype.visitCatalog = function(ctx) {
    var tree = new Tree(types.CATALOG);
    var type = ctx.constructor.name;
    if (type !== 'EmptyCatalogContext') {
        var associations = ctx.association();
        this.depth++;
        associations.forEach(function(association) {
            association.accept(this);
            tree.addChild(this.result);
        }, this);
        this.depth--;
    }
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// checkoutClause: 'checkout' recipient 'from' expression
ParsingVisitor.prototype.visitCheckoutClause = function(ctx) {
    var tree = new Tree(types.CHECKOUT_CLAUSE);
    ctx.recipient().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// code: '{' procedure '}'
ParsingVisitor.prototype.visitCode = function(ctx) {
    var tree = new Tree(types.CODE);
    ctx.procedure().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// commitClause: 'commit' expression 'to' expression
ParsingVisitor.prototype.visitCommitClause = function(ctx) {
    var tree = new Tree(types.COMMIT_CLAUSE);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
ParsingVisitor.prototype.visitComparisonExpression = function(ctx) {
    var tree = new Tree(types.COMPARISON_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// complementExpression: 'not' expression
ParsingVisitor.prototype.visitComplementExpression = function(ctx) {
    var tree = new Tree(types.COMPLEMENT_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// complexNumber: '(' real del=(',' | 'e^') imaginary ')'
ParsingVisitor.prototype.visitComplexNumber = function(ctx) {
    var delimiter = ctx.del.text;
    var value = '(';
    ctx.real().accept(this);
    value += this.result;
    value += delimiter === ',' ? ', ' : ' e^';
    ctx.imaginary().accept(this);
    value += this.result;
    value += ')';
    var terminal = new Terminal(types.NUMBER, value);
    this.result = terminal;
};


// component: object parameters?
ParsingVisitor.prototype.visitComponent = function(ctx) {
    var tree = new Tree(types.COMPONENT);
    ctx.children.forEach(function(child) {
        child.accept(this);
        tree.addChild(this.result);
    }, this);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// constantReal: sign='-'? CONSTANT
ParsingVisitor.prototype.visitConstantReal = function(ctx) {
    var string = '';
    if (ctx.sign) {
        string += '-';
    }
    string += ctx.CONSTANT().getText();
    this.result = string;
};


// continueClause: 'continue' 'loop'
ParsingVisitor.prototype.visitContinueClause = function(ctx) {
    var tree = new Tree(types.CONTINUE_CLAUSE);
    tree.isSimple = true;
    this.result = tree;
};


// defaultExpression: expression '?' expression
ParsingVisitor.prototype.visitDefaultExpression = function(ctx) {
    var tree = new Tree(types.DEFAULT_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// dereferenceExpression: '@' expression
ParsingVisitor.prototype.visitDereferenceExpression = function(ctx) {
    var tree = new Tree(types.DEREFERENCE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// discardClause: 'discard' expression
ParsingVisitor.prototype.visitDiscardClause = function(ctx) {
    var tree = new Tree(types.DISCARD_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF
ParsingVisitor.prototype.visitDocument = function(ctx) {
    var previousReference;
    var reference = ctx.reference();
    if (reference) {
        reference.accept(this);
        previousReference = this.result;
    }

    ctx.content().accept(this);
    var documentContent = this.result;

    var document = BaliDocument.fromSource();
    document.documentContent = documentContent;
    document.previousReference = previousReference;

    var seals = ctx.seal();
    seals.forEach(function(seal) {
        seal.reference().accept(this);
        var certificateReference = this.result;
        seal.binary().accept(this);
        var digitalSignature = this.result;
        document.addSeal(certificateReference, digitalSignature);
    }, this);
    this.result = document;
};


// duration: DURATION
ParsingVisitor.prototype.visitDuration = function(ctx) {
    var value = ctx.DURATION().getText();
    var terminal = new Terminal(types.DURATION, value);
    this.result = terminal;
};


// emptyCatalog: ':' /*empty catalog*/
ParsingVisitor.prototype.visitEmptyCatalog = function(ctx) {
    // delegate to abstract type
    this.visitCatalog(ctx);
};

// emptyList: /*empty list*/
ParsingVisitor.prototype.visitEmptyList = function(ctx) {
    // delegate to abstract type
    this.visitList(ctx);
};


// emptyProcedure: /*empty procedure*/
ParsingVisitor.prototype.visitEmptyProcedure = function(ctx) {
    // delegate to abstract type
    this.visitProcedure(ctx);
};



// evaluateClause: (recipient ':=')? expression
ParsingVisitor.prototype.visitEvaluateClause = function(ctx) {
    var tree = new Tree(types.EVALUATE_CLAUSE);
    var recipient = ctx.recipient();
    if (recipient) {
        ctx.recipient().accept(this);
        tree.addChild(this.result);
    }
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// exponentialExpression: <assoc=right> expression '^' expression
ParsingVisitor.prototype.visitExponentialExpression = function(ctx) {
    var tree = new Tree(types.EXPONENTIAL_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// factorialExpression: expression '!'
ParsingVisitor.prototype.visitFactorialExpression = function(ctx) {
    var tree = new Tree(types.FACTORIAL_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// falseProbability: 'false'
ParsingVisitor.prototype.visitFalseProbability = function(ctx) {
    var value = 'false';
    var terminal = new Terminal(types.PROBABILITY, value);
    this.result = terminal;
};


// fractionalProbability: FRACTION
ParsingVisitor.prototype.visitFractionalProbability = function(ctx) {
    var value = ctx.FRACTION().getText();
    var terminal = new Terminal(types.PROBABILITY, value);
    this.result = terminal;
};


// functionExpression: function parameters
ParsingVisitor.prototype.visitFunctionExpression = function(ctx) {
    var tree = new Tree(types.FUNCTION_EXPRESSION);
    ctx.funxtion().accept(this);
    tree.addChild(this.result);
    ctx.parameters().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// funxtion: IDENTIFIER
ParsingVisitor.prototype.visitFunxtion = function(ctx) {
    var value = ctx.IDENTIFIER().getText();
    var terminal = new Terminal(types.FUNCTION, value);
    this.result = terminal;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
ParsingVisitor.prototype.visitHandleClause = function(ctx) {
    var tree = new Tree(types.HANDLE_CLAUSE);
    ctx.symbol().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
ParsingVisitor.prototype.visitIfClause = function(ctx) {
    var tree = new Tree(types.IF_CLAUSE);
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
ParsingVisitor.prototype.visitImaginary = function(ctx) {
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
ParsingVisitor.prototype.visitImaginaryNumber = function(ctx) {
    ctx.imaginary().accept(this);
    var value = this.result;
    var terminal = new Terminal(types.NUMBER, value);
    this.result = terminal;
};


// indices: '[' list ']'
ParsingVisitor.prototype.visitIndices = function(ctx) {
    var tree = new Tree(types.INDICES);
    ctx.list().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// infiniteNumber: 'infinity'
ParsingVisitor.prototype.visitInfiniteNumber = function(ctx) {
    var value = 'infinity';
    var terminal = new Terminal(types.NUMBER, value);
    this.result = terminal;
};


// inlineCatalog: association (',' association)*
ParsingVisitor.prototype.visitInlineCatalog = function(ctx) {
    // delegate to abstract type
    this.visitCatalog(ctx);
};


// inlineList: expression (',' expression)*
ParsingVisitor.prototype.visitInlineList = function(ctx) {
    // delegate to abstract type
    this.visitList(ctx);
};


// inlineProcedure: statement (';' statement)*
ParsingVisitor.prototype.visitInlineProcedure = function(ctx) {
    // delegate to abstract type
    this.visitProcedure(ctx);
};


// inlineText: TEXT
ParsingVisitor.prototype.visitInlineText = function(ctx) {
    var value = ctx.TEXT().getText();
    var terminal = new Terminal(types.TEXT, value);
    this.result = terminal;
};


// inversionExpression: op=('-' | '/' | '*') expression
ParsingVisitor.prototype.visitInversionExpression = function(ctx) {
    var tree = new Tree(types.INVERSION_EXPRESSION);
    tree.operator = ctx.op.text;
    ctx.expression().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
ParsingVisitor.prototype.visitList = function(ctx) {
    var tree = new Tree(types.LIST);
    var type = ctx.constructor.name;
    if (type !== 'EmptyListContext') {
        var expressions = ctx.expression();
        this.depth++;
        expressions.forEach(function(expression) {
            expression.accept(this);
            tree.addChild(this.result);
        }, this);
        this.depth--;
    }
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
ParsingVisitor.prototype.visitLogicalExpression = function(ctx) {
    var tree = new Tree(types.LOGICAL_EXPRESSION);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// magnitudeExpression: '|' expression '|'
ParsingVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    var tree = new Tree(types.MAGNITUDE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// message: IDENTIFIER
ParsingVisitor.prototype.visitMessage = function(ctx) {
    var value = ctx.IDENTIFIER().getText();
    var terminal = new Terminal(types.MESSAGE, value);
    this.result = terminal;
};


// messageExpression: expression '.' message parameters
ParsingVisitor.prototype.visitMessageExpression = function(ctx) {
    var tree = new Tree(types.MESSAGE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.message().accept(this);
    tree.addChild(this.result);
    ctx.parameters().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// moment: MOMENT
ParsingVisitor.prototype.visitMoment = function(ctx) {
    var value = ctx.MOMENT().getText();
    var terminal = new Terminal(types.MOMENT, value);
    terminal.isSimple = false;  // moments tend to be long
    this.result = terminal;
};


// newlineCatalog: NEWLINE (association NEWLINE)*
ParsingVisitor.prototype.visitNewlineCatalog = function(ctx) {
    // delegate to abstract type
    this.visitCatalog(ctx);
};


// newlineList: NEWLINE (expression NEWLINE)*
ParsingVisitor.prototype.visitNewlineList = function(ctx) {
    // delegate to abstract type
    this.visitList(ctx);
};


// newlineProcedure: NEWLINE (statement NEWLINE)*
ParsingVisitor.prototype.visitNewlineProcedure = function(ctx) {
    // delegate to abstract type
    this.visitProcedure(ctx);
};


// newlineText: TEXT_BLOCK
ParsingVisitor.prototype.visitNewlineText = function(ctx) {
    var value = ctx.TEXT_BLOCK().getText();
    var padding = this.getPadding();
    var regex = new RegExp('\\n' + padding, 'g');
    value = value.replace(regex, '\n');
    var terminal = new Terminal(types.TEXT, value);
    terminal.isSimple = false;
    this.result = terminal;
};


// noneTemplate: 'none'
ParsingVisitor.prototype.visitNoneTemplate = function(ctx) {
    var value = 'none';
    this.result = new Terminal(types.TEMPLATE, value);
};


// parameters: '(' collection ')'
ParsingVisitor.prototype.visitParameters = function(ctx) {
    var tree = new Tree(types.PARAMETERS);
    ctx.collection().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// percent: real '%'
ParsingVisitor.prototype.visitPercent = function(ctx) {
    ctx.real().accept(this);
    var value = this.result + '%';
    var terminal = new Terminal(types.PERCENT, value);
    this.result = terminal;
};


// precedenceExpression: '(' expression ')'
ParsingVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    var tree = new Tree(types.PRECEDENCE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// procedure:
//     statement (';' statement)*   |
//     NEWLINE (statement NEWLINE)* |
//     /*empty statements*/
ParsingVisitor.prototype.visitProcedure = function(ctx) {
    var tree = new Tree(types.PROCEDURE);
    var type = ctx.constructor.name;
    if (type !== 'EmptyProcedureContext') {
        var statements = ctx.statement();
        this.depth++;
        statements.forEach(function(statement) {
            statement.accept(this);
            tree.addChild(this.result);
        }, this);
        this.depth--;
    }
    this.result = tree;
};


// publishClause: 'publish' expression
ParsingVisitor.prototype.visitPublishClause = function(ctx) {
    var tree = new Tree(types.PUBLISH_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// queueClause: 'queue' expression 'on' expression
ParsingVisitor.prototype.visitQueueClause = function(ctx) {
    var tree = new Tree(types.QUEUE_CLAUSE);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// range: expression '..' expression
ParsingVisitor.prototype.visitRange = function(ctx) {
    var tree = new Tree(types.RANGE);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// realNumber: real
ParsingVisitor.prototype.visitRealNumber = function(ctx) {
    ctx.real().accept(this);
    var value = this.result;
    var terminal = new Terminal(types.NUMBER, value);
    this.result = terminal;
};


// reference: RESOURCE
ParsingVisitor.prototype.visitReference = function(ctx) {
    var value = ctx.RESOURCE().getText();
    var terminal = new Terminal(types.REFERENCE, value);
    terminal.isSimple = false;  // references tend to be long
    this.result = terminal;
};


// regexTemplate: REGEX
ParsingVisitor.prototype.visitRegexTemplate = function(ctx) {
    var value = ctx.REGEX().getText();
    var terminal = new Terminal(types.TEMPLATE, value);
    this.result = terminal;
};


// returnClause: 'return' expression?
ParsingVisitor.prototype.visitReturnClause = function(ctx) {
    var tree = new Tree(types.RETURN_CLAUSE);
    var expression = ctx.expression();
    if (expression) {
        expression.accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// saveClause: 'save' expression 'to' expression
ParsingVisitor.prototype.visitSaveClause = function(ctx) {
    var tree = new Tree(types.SAVE_CLAUSE);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
ParsingVisitor.prototype.visitSelectClause = function(ctx) {
    var tree = new Tree(types.SELECT_CLAUSE);
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


// statement: mainClause handleClause*
ParsingVisitor.prototype.visitStatement = function(ctx) {
    var tree = new Tree(types.STATEMENT);
    ctx.mainClause().accept(this);
    tree.addChild(this.result);
    var handleClauses = ctx.handleClause();
    handleClauses.forEach(function(clause) {
        clause.accept(this);
        tree.addChild(this.result);
    }, this);
    this.result = tree;
};


// structure: '[' collection ']'
ParsingVisitor.prototype.visitStructure = function(ctx) {
    var tree = new Tree(types.STRUCTURE);
    ctx.collection().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// subcomponent: variable indices
ParsingVisitor.prototype.visitSubcomponent = function(ctx) {
    var tree = new Tree(types.SUBCOMPONENT);
    ctx.variable().accept(this);
    tree.addChild(this.result);
    ctx.indices().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// subcomponentExpression: expression indices
ParsingVisitor.prototype.visitSubcomponentExpression = function(ctx) {
    var tree = new Tree(types.SUBCOMPONENT_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.indices().accept(this);
    tree.addChild(this.result);
    tree.isSimple = calculateSimplicity(tree);
    this.result = tree;
};


// symbol: SYMBOL
ParsingVisitor.prototype.visitSymbol = function(ctx) {
    var value = ctx.SYMBOL().getText();
    var terminal = new Terminal(types.SYMBOL, value);
    this.result = terminal;
};


// tag: TAG
ParsingVisitor.prototype.visitTag = function(ctx) {
    var value = ctx.TAG().getText();
    var terminal = new Terminal(types.TAG, value);
    terminal.isSimple = false;  // tags tend to be long
    this.result = terminal;
};


// throwClause: 'throw' expression
ParsingVisitor.prototype.visitThrowClause = function(ctx) {
    var tree = new Tree(types.THROW_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// trueProbability: 'true'
ParsingVisitor.prototype.visitTrueProbability = function(ctx) {
    var value = 'true';
    var terminal = new Terminal(types.PROBABILITY, value);
    this.result = terminal;
};


// undefinedNumber: 'undefined'
ParsingVisitor.prototype.visitUndefinedNumber = function(ctx) {
    var value = 'undefined';
    var terminal = new Terminal(types.NUMBER, value);
    this.result = terminal;
};


// variable: IDENTIFIER
ParsingVisitor.prototype.visitVariable = function(ctx) {
    var value = ctx.IDENTIFIER().getText();
    var terminal = new Terminal(types.VARIABLE, value);
    this.result = terminal;
};


// variableReal: FLOAT
ParsingVisitor.prototype.visitVariableReal = function(ctx) {
    this.result = ctx.FLOAT().getText();
};


// version: VERSION
ParsingVisitor.prototype.visitVersion = function(ctx) {
    var value = ctx.VERSION().getText();
    var terminal = new Terminal(types.VERSION, value);
    this.result = terminal;
};


// waitClause: 'wait' 'for' recipient 'from' expression
ParsingVisitor.prototype.visitWaitClause = function(ctx) {
    var tree = new Tree(types.WAIT_CLAUSE);
    ctx.recipient().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// whileClause: 'while' expression 'do' block
ParsingVisitor.prototype.visitWhileClause = function(ctx) {
    var tree = new Tree(types.WHILE_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
ParsingVisitor.prototype.visitWithClause = function(ctx) {
    var tree = new Tree(types.WITH_CLAUSE);
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


function BaliErrorStrategy() {
    ErrorStrategy.DefaultErrorStrategy.call(this);
    return this;
}
BaliErrorStrategy.prototype = Object.create(ErrorStrategy.DefaultErrorStrategy.prototype);
BaliErrorStrategy.prototype.constructor = BaliErrorStrategy;


BaliErrorStrategy.prototype.recover = function(recognizer, e) {
    var context = recognizer._ctx;
    while (context !== null) {
        context.exception = e;
        context = context.parentCtx;
    }
    throw new antlr.error.ParseCancellationException(e);
};


BaliErrorStrategy.prototype.recoverInline = function(recognizer) {
    this.recover(recognizer, new antlr.error.InputMismatchException(recognizer));
};


BaliErrorStrategy.prototype.sync = function(recognizer) {
    // ignore
};


BaliErrorStrategy.prototype.reportNoViableAlternative = function(recognizer, e) {
    if (recognizer.verbose) {
        var tokens = recognizer.getTokenStream();
        var input;
        if(tokens !== null) {
            if (e.startToken.type===antlr.Token.EOF) {
                input = "<EOF>";
            } else {
                input = tokens.getText(new antlr.Interval(e.startToken.tokenIndex, e.offendingToken.tokenIndex));
            }
        } else {
            input = "<unknown>";
        }
        var message = "INVALID INPUT: input=" + this.escapeWSAndQuote(input);
        recognizer.notifyErrorListeners(message, e.offendingToken, e);
    }
};


BaliErrorStrategy.prototype.reportInputMismatch = function(recognizer, e) {
    if (recognizer.verbose) {
        var message = "MISMATCHED TOKEN: token=" + this.getTokenErrorDisplay(e.offendingToken) +
              " expecting=" + e.getExpectedTokens().toString(recognizer.literalNames, recognizer.symbolicNames);
        recognizer.notifyErrorListeners(message, e.offendingToken, e);
    }
};


BaliErrorStrategy.prototype.reportFailedPredicate = function(recognizer, e) {
    if (recognizer.verbose) {
        var ruleName = recognizer.ruleNames[recognizer._ctx.ruleIndex];
        var message = "PREDICATE FAILED: rule=" + ruleName + " " + e.message;
        recognizer.notifyErrorListeners(message, e.offendingToken, e);
    }
};


BaliErrorStrategy.prototype.reportUnwantedToken = function(recognizer) {
    if (recognizer.verbose) {
        if (this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        var t = recognizer.getCurrentToken();
        var tokenName = this.getTokenErrorDisplay(t);
        var expecting = this.getExpectedTokens(recognizer);
        var message = "EXTRA TOKEN: token=" + tokenName + " expecting " +
            expecting.toString(recognizer.literalNames, recognizer.symbolicNames);
        recognizer.notifyErrorListeners(message, t, null);
    }
};


BaliErrorStrategy.prototype.reportMissingToken = function(recognizer) {
    if (recognizer.verbose) {
        if ( this.inErrorRecoveryMode(recognizer)) {
            return;
        }
        this.beginErrorCondition(recognizer);
        var t = recognizer.getCurrentToken();
        var expecting = this.getExpectedTokens(recognizer);
        var message = "MISSING TOKEN: token=" + expecting.toString(recognizer.literalNames, recognizer.symbolicNames) +
              " at " + this.getTokenErrorDisplay(t);
        recognizer.notifyErrorListeners(message, t, null);
    }
};


function BaliErrorListener() {
    antlr.error.ErrorListener.call(this);
    // whether all ambiguities or only exact ambiguities are reported.
    this.exactOnly = false;
    return this;
}
BaliErrorListener.prototype = Object.create(antlr.error.ErrorListener.prototype);
BaliErrorListener.prototype.constructor = BaliErrorListener;


BaliErrorListener.prototype.syntaxError = function(recognizer, offendingToken, lineNumber, columnNumber, message, e) {
    // log the error message
    console.log(message.slice(0, 160));
    // log the lines before and after the invalid line and highlight the invalid token
    var lines = offendingToken.getInputStream().toString().split('\n');
    if (lineNumber > 1) console.log(lines[lineNumber - 2]);
    console.log(lines[lineNumber - 1]);
    var line = '';
    for (var i = 0; i < columnNumber; i++) {
        line += ' ';
    }
    var start = offendingToken.start;
    var stop = offendingToken.stop;
    while (start++ <= stop) {
        line += '^';
    }
    console.log(line);
    if (lineNumber < lines.length) console.log(lines[lineNumber]);
    // log the error stack
    if (e) console.log(e.stack);
};


BaliErrorListener.prototype.reportAmbiguity = function(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    if (recognizer.verbose) {
        var message = 'AMBIGUITY: rule=' + this.getDecisionDescription(recognizer, dfa) +
                ': alternatives=' + this.getConflictingAlts(ambigAlts, configs);
        recognizer.notifyErrorListeners(message);
    }
};


BaliErrorListener.prototype.reportAttemptingFullContext = function(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
};


BaliErrorListener.prototype.reportContextSensitivity = function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    if (recognizer.verbose) {
        var message = 'CONTEXT SENSITIVE: rule=' + this.getDecisionDescription(recognizer, dfa) + ', input="' +
                recognizer.getTokenStream().getText(new antlr.Interval(startIndex, stopIndex)) + '"';
        recognizer.notifyErrorListeners(message);
    }
};


BaliErrorListener.prototype.getDecisionDescription = function(recognizer, dfa) {
    var decision = dfa.decision;
    var ruleIndex = dfa.atnStartState.ruleIndex;

    var ruleNames = recognizer.ruleNames;
    if (ruleIndex < 0 || ruleIndex >= ruleNames.length) {
        return "" + decision;
    }
    var ruleName = ruleNames[ruleIndex] || null;
    if (ruleName === null || ruleName.length === 0) {
        return "" + decision;
    }
    return "" + decision + " (" + ruleName + ")";
};


BaliErrorListener.prototype.getConflictingAlts = function(reportedAlts, configs) {
    if (reportedAlts !== null) {
        return reportedAlts;
    }
    var result = new antlr.Utils.BitSet();
    for (var i = 0; i < configs.items.length; i++) {
        result.add(configs.items[i].alt);
    }
    return "{" + result.values().join(", ") + "}";
};


BaliErrorListener.prototype.enterEveryRule = function(context) {
};


BaliErrorListener.prototype.visitTerminal = function(node) {
};


BaliErrorListener.prototype.visitErrorNode = function(node) {
};


BaliErrorListener.prototype.exitEveryRule = function(context) {
};
