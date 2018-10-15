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
 * produce the corresponding parse tree structure. It uses a parser that
 * is generated using ANTLR v4. The raw parse tree structure that comes
 * out of ANTLR is frankly not very well designed and hard to understand.
 * So, we walk the raw parse tree with a visitor object regenerating a
 * nice clean parse tree that is constructed exclusively of Bali primitive
 * type components (e.g. elements, collections, and generic trees). This
 * means that some of the code in this the visitor class in this module is
 * a bit harder to understand but the result is nice clean javascript objects.
 */
var antlr = require('antlr4');
var ErrorStrategy = require('antlr4/error/ErrorStrategy');
var grammar = require('../../grammar');
var types = require('../abstractions/Types');
var elements = require('../elements');
var composites = require('../composites');
var codex = require('./Codex');


/**
 * This function parses a Bali source string and returns the corresponding
 * catalog.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {Tree} The resulting catalog.
 */
exports.parseCatalog = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.catalog();
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
 * @returns {Tree} The resulting component.
 */
exports.parseComponent = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.component();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * document.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {Tree} The resulting document.
 */
exports.parseDocument = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.document();
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
 * @returns {Element} The resulting element.
 */
exports.parseElement = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.element();
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
 * @returns {Tree} The resulting expression.
 */
exports.parseExpression = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.expression();
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
 * @returns {Tree} The resulting list.
 */
exports.parseList = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.list();
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
 * @returns {Tree} The resulting parameters.
 */
exports.parseParameters = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.parameters();
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
 * @returns {Tree} The resulting procedure.
 */
exports.parseProcedure = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.procedure();
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
 * @returns {Tree} The resulting range.
 */
exports.parseRange = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.range();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


/**
 * This function parses a Bali source string and returns the corresponding
 * notary seal.
 * 
 * @param {String} source The Bali source string.
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false.
 * @returns {Tree} The resulting notary seal.
 */
exports.parseSeal = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.seal();
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
 * @returns {Tree} The resulting structure.
 */
exports.parseStructure = function(source, debug) {
    var parser = initializeParser(source, debug);
    var antlrTree = parser.structure();
    var baliTree = convertParseTree(antlrTree);
    return baliTree;
};


// PRIVATE FUNCTIONS

function initializeParser(source, debug) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliDocumentLexer(chars);
    var listener = new BaliErrorListener(debug);
    lexer.removeErrorListeners();
    lexer.addErrorListener(listener);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliDocumentParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser._errHandler = new BaliErrorStrategy(debug);
    return parser;
}


// override the recover method in the lexer to fail fast
grammar.BaliDocumentLexer.prototype.recover = function(e) {
    var error = new Error('LEXER: Invalid input was detected, aborted scanning the input: ' + e.input);
    throw error;
};


function convertParseTree(antlrTree) {
    var visitor = new ParsingVisitor();
    antlrTree.accept(visitor);
    var baliTree = visitor.result;
    return baliTree;
}


// PRIVATE CLASSES

var INDENTATION = '    ';

function ParsingVisitor() {
    grammar.BaliDocumentVisitor.call(this);
    this.depth = 0;
    return this;
}
ParsingVisitor.prototype = Object.create(grammar.BaliDocumentVisitor.prototype);
ParsingVisitor.prototype.constructor = ParsingVisitor;


ParsingVisitor.prototype.getIndentation = function() {
    var indentation = '';
    for (var i = 0; i < this.depth; i++) {
        indentation += INDENTATION;
    }
    return indentation;
};


// angle: '~' real
ParsingVisitor.prototype.visitAngle = function(ctx) {
    var parameters = this.parameters;
    ctx.real().accept(this);
    var value = '~' + this.result;
    var angle = new elements.Angle(value, parameters);
    this.result = angle;
};


// anyTemplate: 'any'
ParsingVisitor.prototype.visitAnyTemplate = function(ctx) {
    var parameters = this.parameters;
    var value = 'any';
    var template = new elements.Template(value, parameters);
    this.result = template;
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
ParsingVisitor.prototype.visitArithmeticExpression = function(ctx) {
    var tree = new composites.Tree(types.ARITHMETIC_EXPRESSION, 2);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    tree.length += tree.operator.length;  // operators have different lengths
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// association: component ':' expression
ParsingVisitor.prototype.visitAssociation = function(ctx) {
    ctx.component().accept(this);
    var key = this.result;
    ctx.expression().accept(this);
    var value = this.result;
    var association = new composites.Association(key, value);
    this.result = association;
};


// binary: BINARY
ParsingVisitor.prototype.visitBinary = function(ctx) {
    var parameters = this.parameters;
    var string = ctx.BINARY().getText();
    string = string.slice(1, -1);  // strip off the "'" delimiters
    string = string.replace(/\s/g, '');  // strip out all whitespace

    // break the string into canonical formatted lines of characters
    var value = "'" + codex.formatLines(string) + "'";

    var binary = new elements.Binary(value, parameters);
    this.result = binary;
};


// block: '{' procedure '}'
ParsingVisitor.prototype.visitBlock = function(ctx) {
    ctx.procedure().accept(this);
    var procedure = this.result;
    procedure.inBrackets = true;
    procedure.length = types.TOO_BIG;  // force the procedure in a block NOT to be formatted inline
    this.result = procedure;
};


// breakClause: 'break' 'loop'
ParsingVisitor.prototype.visitBreakClause = function(ctx) {
    var tree = new composites.Tree(types.BREAK_CLAUSE, 10);
    this.result = tree;
};


// catalog:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty catalog*/
ParsingVisitor.prototype.visitCatalog = function(ctx) {
    var parameters = this.parameters;
    var catalog = new composites.Catalog(parameters);
    var type = ctx.constructor.name;
    if (type !== 'EmptyCatalogContext') {
        var associations = ctx.association();
        this.depth++;
        associations.forEach(function(association) {
            association.accept(this);
            catalog.addItem(this.result);
        }, this);
        this.depth--;
    }
    this.result = catalog;
};


// checkoutClause: 'checkout' recipient 'from' expression
ParsingVisitor.prototype.visitCheckoutClause = function(ctx) {
    var tree = new composites.Tree(types.CHECKOUT_CLAUSE, 15);
    ctx.recipient().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// source: '{' procedure '}'
ParsingVisitor.prototype.visitSource = function(ctx) {
    var parameters = this.parameters;
    ctx.procedure().accept(this);
    var procedure = this.result;
    procedure.inBrackets = true;
    var source = procedure.toSource();
    source = new elements.Source(source, parameters);
    this.result = source;
};


// commitClause: 'commit' expression 'to' expression
ParsingVisitor.prototype.visitCommitClause = function(ctx) {
    var tree = new composites.Tree(types.COMMIT_CLAUSE, 11);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
ParsingVisitor.prototype.visitComparisonExpression = function(ctx) {
    var tree = new composites.Tree(types.COMPARISON_EXPRESSION, 2);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    tree.length += tree.operator.length;  // operators have different lengths
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// complementExpression: 'not' expression
ParsingVisitor.prototype.visitComplementExpression = function(ctx) {
    var tree = new composites.Tree(types.COMPLEMENT_EXPRESSION, 4);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// complexNumber: '(' real del=(',' | 'e^~') imaginary ')'
ParsingVisitor.prototype.visitComplexNumber = function(ctx) {
    var parameters = this.parameters;
    var delimiter = ctx.del.text;
    var value = '(';
    ctx.real().accept(this);
    value += this.result;
    value += delimiter === ',' ? ', ' : ' e^~';
    ctx.imaginary().accept(this);
    value += this.result;
    value += ')';
    var number = new elements.Complex(value, parameters);
    this.result = number;
};


// component: value parameters?
// NOTE: the parameters really belong to the value and are maintained by the value objects.
//       There is no component object per se, this method is really only necessary to
//       process the parameters if they do exist and save them off for the value to find
//       during its processing. The value object often needs to know what the parameters
//       are during its initialization.
ParsingVisitor.prototype.visitComponent = function(ctx) {
    var parameters = ctx.parameters();
    this.parameters = undefined;  // must clear it first to avoid it propagating for recursive parameters
    if (parameters) {
        // this is a parameterized component so parse the parameters first
        parameters.accept(this);
        this.parameters = this.result;  // save off the parameters for the value object
    }
    var value = ctx.value();
    value.accept(this);
    this.parameters = undefined;  // must clear it afterwards so non-components don't see it
};


// continueClause: 'continue' 'loop'
ParsingVisitor.prototype.visitContinueClause = function(ctx) {
    var tree = new composites.Tree(types.CONTINUE_CLAUSE, 13);
    this.result = tree;
};


// defaultExpression: expression '?' expression
ParsingVisitor.prototype.visitDefaultExpression = function(ctx) {
    var tree = new composites.Tree(types.DEFAULT_EXPRESSION, 3);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// dereferenceExpression: '@' expression
ParsingVisitor.prototype.visitDereferenceExpression = function(ctx) {
    var tree = new composites.Tree(types.DEREFERENCE_EXPRESSION, 1);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// discardClause: 'discard' expression
ParsingVisitor.prototype.visitDiscardClause = function(ctx) {
    var tree = new composites.Tree(types.DISCARD_CLAUSE, 8);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF
ParsingVisitor.prototype.visitDocument = function(ctx) {
    var reference = ctx.reference();
    if (reference) {
        reference.accept(this);
        reference = this.result;
    }
    var content = ctx.content();
    content.accept(this);
    content = this.result;
    var document = new composites.Document(reference, content);
    var seals = ctx.seal();
    seals.forEach(function(seal) {
        seal.accept(this);
        document.addNotarySeal(this.result);
    }, this);
    this.result = document;
};


// duration: DURATION
ParsingVisitor.prototype.visitDuration = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.DURATION().getText();
    var duration = new elements.Duration(value, parameters);
    this.result = duration;
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
    var tree = new composites.Tree(types.EVALUATE_CLAUSE, 0);
    var recipient = ctx.recipient();
    if (recipient) {
        recipient.accept(this);
        tree.addChild(this.result);
        tree.length += 4;  // for the ' := ' after the recipient
    }
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// exponentialExpression: <assoc=right> expression '^' expression
ParsingVisitor.prototype.visitExponentialExpression = function(ctx) {
    var tree = new composites.Tree(types.EXPONENTIAL_EXPRESSION, 3);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// factorialExpression: expression '!'
ParsingVisitor.prototype.visitFactorialExpression = function(ctx) {
    var tree = new composites.Tree(types.FACTORIAL_EXPRESSION, 1);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// falseProbability: 'false'
ParsingVisitor.prototype.visitFalseProbability = function(ctx) {
    var parameters = this.parameters;
    var value = 'false';
    var probability = new elements.Probability(value, parameters);
    this.result = probability;
};


// fractionalProbability: FRACTION
ParsingVisitor.prototype.visitFractionalProbability = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.FRACTION().getText();
    var probability = new elements.Probability(value, parameters);
    this.result = probability;
};


// functionExpression: function parameters
ParsingVisitor.prototype.visitFunctionExpression = function(ctx) {
    var tree = new composites.Tree(types.FUNCTION_EXPRESSION, 0);
    ctx.funxtion().accept(this);
    tree.addChild(this.result);
    ctx.parameters().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// funxtion: IDENTIFIER
ParsingVisitor.prototype.visitFunxtion = function(ctx) {
    var value = ctx.IDENTIFIER().getText();
    var identifier = new elements.Identifier(types.FUNCTION, value);
    this.result = identifier;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
ParsingVisitor.prototype.visitHandleClause = function(ctx) {
    var tree = new composites.Tree(types.HANDLE_CLAUSE, types.TOO_BIG);
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
    var tree = new composites.Tree(types.IF_CLAUSE, types.TOO_BIG);
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
        if (real.CONSTANT()) {
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
    var parameters = this.parameters;
    ctx.imaginary().accept(this);
    var value = this.result;
    var number = new elements.Complex(value, parameters);
    this.result = number;
};


// indices: '[' list ']'
ParsingVisitor.prototype.visitIndices = function(ctx) {
    ctx.list().accept(this);
    var indices = this.result;
    indices.inBrackets = true;
};


// infiniteNumber: 'infinity'
ParsingVisitor.prototype.visitInfiniteNumber = function(ctx) {
    var parameters = this.parameters;
    var value = 'infinity';
    var number = new elements.Complex(value, parameters);
    this.result = number;
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
    var parameters = this.parameters;
    var value = ctx.TEXT().getText();
    var text = new elements.Text(value, parameters);
    this.result = text;
};


// inversionExpression: op=('-' | '/' | '*') expression
ParsingVisitor.prototype.visitInversionExpression = function(ctx) {
    var tree = new composites.Tree(types.INVERSION_EXPRESSION, 1);
    tree.operator = ctx.op.text;
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
ParsingVisitor.prototype.visitList = function(ctx) {
    var parameters = this.parameters;
    var collection;
    var type = types.LIST;
    if (parameters) {
        type = parameters.getValueForKey('$type');
        if (!type) parameters.getValueForIndex(1);
        type = types.typeBySymbol(type);
    }
    switch (type) {
        case types.SET:
            collection = new composites.Set(parameters);
            break;
        case types.STACK:
            collection = new composites.Stack(parameters);
            break;
        case types.LIST:
        default:
            collection = new composites.List(parameters);
    }
    if (ctx.constructor.name !== 'EmptyListContext') {
        var expressions = ctx.expression();
        this.depth++;
        expressions.forEach(function(expression) {
            expression.accept(this);
            collection.addItem(this.result);
        }, this);
        this.depth--;
    }
    this.result = collection;
};


// logicalExpression: expression op=('and' | 'sans' | 'xor' | 'or') expression
ParsingVisitor.prototype.visitLogicalExpression = function(ctx) {
    var tree = new composites.Tree(types.LOGICAL_EXPRESSION, 2);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    tree.length += tree.operator.length;  // operators have different lengths
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// magnitudeExpression: '|' expression '|'
ParsingVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    var tree = new composites.Tree(types.MAGNITUDE_EXPRESSION, 2);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// message: IDENTIFIER
ParsingVisitor.prototype.visitMessage = function(ctx) {
    var value = ctx.IDENTIFIER().getText();
    var identifier = new elements.Identifier(types.MESSAGE, value);
    this.result = identifier;
};


// messageExpression: expression '.' message parameters
ParsingVisitor.prototype.visitMessageExpression = function(ctx) {
    var tree = new composites.Tree(types.MESSAGE_EXPRESSION, 1);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.message().accept(this);
    tree.addChild(this.result);
    ctx.parameters().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// moment: MOMENT
ParsingVisitor.prototype.visitMoment = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.MOMENT().getText();
    var moment = new elements.Moment(value, parameters);
    this.result = moment;
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
    var parameters = this.parameters;
    var value = ctx.TEXT_BLOCK().getText();
    var indentation = this.getIndentation();
    var regex = new RegExp('\\n' + indentation, 'g');
    value = value.replace(regex, '\n');
    var text = new elements.Text(value, parameters);
    this.result = text;
};


// noneTemplate: 'none'
ParsingVisitor.prototype.visitNoneTemplate = function(ctx) {
    var parameters = this.parameters;
    var value = 'none';
    var template = new elements.Template(value, parameters);
    this.result = template;
};


// parameters: '(' collection ')'
ParsingVisitor.prototype.visitParameters = function(ctx) {
    var parameters = new composites.Parameters();
    ctx.collection().accept(this);
    var collection = this.result;
    var iterator = collection.iterator();
    var type = collection.type;
    var key;
    var value;
    switch (type) {
        case types.LIST:
            parameters.isList = true;
            key = 1;
            while (iterator.hasNext()) {
                value = iterator.getNext();
                parameters.addParameter(key++, value);
            }
            break;
        case types.CATALOG:
            while (iterator.hasNext()) {
                var association = iterator.getNext();
                key = association.key;
                value = association.value;
                parameters.addParameter(key, value);
            }
            break;
        default:
            throw new Error('PARSER: The collection type for the parameters is invalid: ' + types.typeName(type));
    }
    this.result = parameters;
};


// percent: real '%'
ParsingVisitor.prototype.visitPercent = function(ctx) {
    var parameters = this.parameters;
    ctx.real().accept(this);
    var value = this.result + '%';
    var percent = new elements.Percent(value, parameters);
    this.result = percent;
};


// precedenceExpression: '(' expression ')'
ParsingVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    var tree = new composites.Tree(types.PRECEDENCE_EXPRESSION, 2);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// procedure:
//     statement (';' statement)*   |
//     NEWLINE (statement NEWLINE)* |
//     /*empty statements*/
ParsingVisitor.prototype.visitProcedure = function(ctx) {
    var parameters = this.parameters;
    var procedure = new composites.Procedure(parameters);
    var type = ctx.constructor.name;
    if (type !== 'EmptyProcedureContext') {
        var statements = ctx.statement();
        this.depth++;
        statements.forEach(function(statement) {
            statement.accept(this);
            procedure.addStatement(this.result);
        }, this);
        this.depth--;
    }
    this.result = procedure;
};


// publishClause: 'publish' expression
ParsingVisitor.prototype.visitPublishClause = function(ctx) {
    var tree = new composites.Tree(types.PUBLISH_CLAUSE, 8);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// queueClause: 'queue' expression 'on' expression
ParsingVisitor.prototype.visitQueueClause = function(ctx) {
    var tree = new composites.Tree(types.QUEUE_CLAUSE, 10);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// range: expression '..' expression
ParsingVisitor.prototype.visitRange = function(ctx) {
    var parameters = this.parameters;
    var expressions = ctx.expression();
    expressions[0].accept(this);
    var first= this.result;
    expressions[1].accept(this);
    var last= this.result;
    var range = new composites.Range(first, last, parameters);
    this.result = range;
};


// real: '0' | CONSTANT | sign='-'? constant=('e' | 'pi' | 'phi')
ParsingVisitor.prototype.visitReal = function(ctx) {
    var string = '';
    if (ctx.sign) {
        string += '-';
    }
    if (ctx.FLOAT()) {
        string += ctx.FLOAT().getText();
    } else if (ctx.CONSTANT()) {
        string += ctx.CONSTANT().getText();
    } else {
        string += '0';
    }
    this.result = string;
};


// realNumber: real
ParsingVisitor.prototype.visitRealNumber = function(ctx) {
    var parameters = this.parameters;
    ctx.real().accept(this);
    var value = this.result;
    var number = new elements.Complex(value, parameters);
    this.result = number;
};


// reference: RESOURCE
ParsingVisitor.prototype.visitReference = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.RESOURCE().getText();
    var reference = new elements.Reference(value, parameters);
    this.result = reference;
};


// returnClause: 'return' expression?
ParsingVisitor.prototype.visitReturnClause = function(ctx) {
    var tree = new composites.Tree(types.RETURN_CLAUSE, 6);
    var expression = ctx.expression();
    if (expression) {
        tree.length += 1;  // for the ' ' before the expression
        expression.accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// saveClause: 'save' expression 'to' expression
ParsingVisitor.prototype.visitSaveClause = function(ctx) {
    var tree = new composites.Tree(types.SAVE_CLAUSE, 9);
    var expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// seal: reference binary
ParsingVisitor.prototype.visitSeal = function(ctx) {
    var certificateCitation = ctx.reference();
    certificateCitation.accept(this);
    certificateCitation = this.result;
    var digitalSignature = ctx.binary();
    digitalSignature.accept(this);
    digitalSignature = this.result;
    var notarySeal = new composites.Seal(certificateCitation, digitalSignature);
    this.result = notarySeal;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
ParsingVisitor.prototype.visitSelectClause = function(ctx) {
    var tree = new composites.Tree(types.SELECT_CLAUSE, types.TOO_BIG);
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
    var tree = new composites.Tree(types.STATEMENT, 0);
    ctx.mainClause().accept(this);
    tree.addChild(this.result);
    var handleClauses = ctx.handleClause();
    handleClauses.forEach(function(clause) {
        tree.length += 1;  // for the ' ' before each clause
        clause.accept(this);
        tree.addChild(this.result);
    }, this);
    this.result = tree;
};


// structure: '[' collection ']'
ParsingVisitor.prototype.visitStructure = function(ctx) {
    ctx.collection().accept(this);
    var collection = this.result;
    collection.inBrackets = true;
};


// subcomponent: variable indices
ParsingVisitor.prototype.visitSubcomponent = function(ctx) {
    var tree = new composites.Tree(types.SUBCOMPONENT, 0);
    ctx.variable().accept(this);
    tree.addChild(this.result);
    ctx.indices().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// subcomponentExpression: expression indices
ParsingVisitor.prototype.visitSubcomponentExpression = function(ctx) {
    var tree = new composites.Tree(types.SUBCOMPONENT_EXPRESSION, 0);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.indices().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// symbol: SYMBOL
ParsingVisitor.prototype.visitSymbol = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.SYMBOL().getText();
    var symbol = new elements.Symbol(value, parameters);
    this.result = symbol;
};


// tag: TAG
ParsingVisitor.prototype.visitTag = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.TAG().getText();
    var tag = new elements.Tag(value, parameters);
    this.result = tag;
};


// throwClause: 'throw' expression
ParsingVisitor.prototype.visitThrowClause = function(ctx) {
    var tree = new composites.Tree(types.THROW_CLAUSE, 6);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// trueProbability: 'true'
ParsingVisitor.prototype.visitTrueProbability = function(ctx) {
    var parameters = this.parameters;
    var value = 'true';
    var probability = new elements.Probability(value, parameters);
    this.result = probability;
};


// undefinedNumber: 'undefined'
ParsingVisitor.prototype.visitUndefinedNumber = function(ctx) {
    var parameters = this.parameters;
    var value = 'undefined';
    var number = new elements.Complex(value, parameters);
    this.result = number;
};


// variable: IDENTIFIER
ParsingVisitor.prototype.visitVariable = function(ctx) {
    var value = ctx.IDENTIFIER().getText();
    var identifier = new elements.Identifier(types.VARIABLE, value);
    this.result = identifier;
};


// version: VERSION
ParsingVisitor.prototype.visitVersion = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.VERSION().getText();
    var version = new elements.Version(value, parameters);
    this.result = version;
};


// waitClause: 'wait' 'for' recipient 'from' expression
ParsingVisitor.prototype.visitWaitClause = function(ctx) {
    var tree = new composites.Tree(types.WAIT_CLAUSE, 15);
    ctx.recipient().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// whileClause: 'while' expression 'do' block
ParsingVisitor.prototype.visitWhileClause = function(ctx) {
    var tree = new composites.Tree(types.WHILE_CLAUSE, types.TOO_BIG);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
ParsingVisitor.prototype.visitWithClause = function(ctx) {
    var tree = new composites.Tree(types.WITH_CLAUSE, types.TOO_BIG);
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


function BaliErrorStrategy(debug) {
    ErrorStrategy.DefaultErrorStrategy.call(this);
    this.debug = debug;
    return this;
}
BaliErrorStrategy.prototype = Object.create(ErrorStrategy.DefaultErrorStrategy.prototype);
BaliErrorStrategy.prototype.constructor = BaliErrorStrategy;


BaliErrorStrategy.prototype.reportError = function(recognizer, e) {
   // if we've already reported an error and have not matched a token
   // yet successfully, don't report any errors.
    if(this.debug && !this.inErrorRecoveryMode(recognizer)) {
        this.beginErrorCondition(recognizer);
        if ( e instanceof antlr.error.NoViableAltException ) {
            this.reportNoViableAlternative(recognizer, e);
        } else if ( e instanceof antlr.error.InputMismatchException ) {
            this.reportInputMismatch(recognizer, e);
        } else if ( e instanceof antlr.error.FailedPredicateException ) {
            this.reportFailedPredicate(recognizer, e);
        } else {
            console.log('PARSER: An unknown error occured: ' + e.constructor.name);
            console.log(e.stack);
            recognizer.notifyErrorListeners(e.getMessage(), recognizer.getCurrentToken(), e);
        }
    }
};


BaliErrorStrategy.prototype.recover = function(recognizer, e) {
    var context = recognizer._ctx;
    while (context !== null) {
        context.exception = e;
        context = context.parentCtx;
    }
    var token = this.getTokenErrorDisplay(e.offendingToken);
    var error = new Error('PARSER: An invalid token was encountered: ' + token);
    throw error;
};


BaliErrorStrategy.prototype.recoverInline = function(recognizer) {
    this.recover(recognizer, new antlr.error.InputMismatchException(recognizer));
};


BaliErrorStrategy.prototype.sync = function(recognizer) {
    // ignore
};


BaliErrorStrategy.prototype.reportNoViableAlternative = function(recognizer, e) {
    var tokens = recognizer.getTokenStream();
    var token;
    if(tokens !== null) {
        if (e.startToken.type===antlr.Token.EOF) {
            token = "<EOF>";
        } else {
            token = tokens.tokens[e.offendingToken.tokenIndex];
        }
    } else {
        token = "<unknown>";
    }
    var message = 'PARSER: An invalid token was encountered: ' + this.getTokenErrorDisplay(token);
    recognizer.notifyErrorListeners(message, e.offendingToken, e);
};


BaliErrorStrategy.prototype.reportInputMismatch = function(recognizer, e) {
    var message = 'PARSER: A mismatched token was encountered: "' + this.getTokenErrorDisplay(e.offendingToken) +
          '", expected: ' + e.getExpectedTokens().toString(recognizer.literalNames, recognizer.symbolicNames);
    recognizer.notifyErrorListeners(message, e.offendingToken, e);
};


BaliErrorStrategy.prototype.reportFailedPredicate = function(recognizer, e) {
    var ruleName = recognizer.ruleNames[recognizer._ctx.ruleIndex];
    var message = 'PARSER: A predicate match failed for rule(' + ruleName + '): ' + e.message;
    recognizer.notifyErrorListeners(message, e.offendingToken, e);
};


BaliErrorStrategy.prototype.reportUnwantedToken = function(recognizer) {
    if (this.inErrorRecoveryMode(recognizer)) {
        return;
    }
    this.beginErrorCondition(recognizer);
    var token = recognizer.getCurrentToken();
    var expecting = this.getExpectedTokens(recognizer);
    var message = 'PARSER: An extra token was encountered: "' + this.getTokenErrorDisplay(token) + "' expecting " +
        expecting.toString(recognizer.literalNames, recognizer.symbolicNames);
    recognizer.notifyErrorListeners(message, token, null);
};


BaliErrorStrategy.prototype.reportMissingToken = function(recognizer) {
    if ( this.inErrorRecoveryMode(recognizer)) {
        return;
    }
    this.beginErrorCondition(recognizer);
    var token = recognizer.getCurrentToken();
    var expecting = this.getExpectedTokens(recognizer);
    var message = 'PARSER: A token is missing, expected: ' + expecting.toString(recognizer.literalNames, recognizer.symbolicNames) +
          ' at "' + this.getTokenErrorDisplay(token) + '"';
    recognizer.notifyErrorListeners(message, token, null);
};


function BaliErrorListener(debug) {
    antlr.error.ErrorListener.call(this);
    this.exactOnly = true;  // 'true' results in uninteresting ambiguities so leave 'false'
    this.debug = debug;
    return this;
}
BaliErrorListener.prototype = Object.create(antlr.error.ErrorListener.prototype);
BaliErrorListener.prototype.constructor = BaliErrorListener;


BaliErrorListener.prototype.syntaxError = function(recognizer, offendingToken, lineNumber, columnNumber, message, e) {
    if (this.debug) {
        // handle lexer vs parser differences
        var input = offendingToken ? offendingToken.getInputStream() : recognizer._input;
        var lines = input.toString().split('\n');
        message = offendingToken ? message : 'LEXER: An unexpected character was encountered: "' + lines[lineNumber - 1][columnNumber] + '"';

        // log the error message
        console.log(message.slice(0, 160));

        // log the lines before and after the invalid line and highlight the invalid token
        if (lineNumber > 1) console.log(lines[lineNumber - 2]);
        console.log(lines[lineNumber - 1]);
        var line = '';
        for (var i = 0; i < columnNumber; i++) {
            line += ' ';
        }
        var start = offendingToken ? offendingToken.start : columnNumber;
        var stop = offendingToken ? offendingToken.stop : columnNumber;
        while (start++ <= stop) {
            line += '^';
        }
        console.log(line);
        if (lineNumber < lines.length) console.log(lines[lineNumber]);

        // log the error stack
        if (e) console.log(e.stack);
    }
};


BaliErrorListener.prototype.reportAmbiguity = function(recognizer, dfa, startIndex, stopIndex, exact, ambigAlts, configs) {
    var message = 'PARSER: Ambiguous input was encountered for rule: ' + this.getDecisionDescription(recognizer, dfa) +
        ', possible alternatives: ' + this.getConflictingAlts(ambigAlts, configs);
    recognizer.notifyErrorListeners(message, recognizer._input.LT(-1));
};


BaliErrorListener.prototype.reportAttemptingFullContext = function(recognizer, dfa, startIndex, stopIndex, conflictingAlts, configs) {
};


BaliErrorListener.prototype.reportContextSensitivity = function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    var message = 'PARSER Encountered a context sensitive rule: ' + this.getDecisionDescription(recognizer, dfa);
    recognizer.notifyErrorListeners(message, recognizer.getCurrentToken());
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
