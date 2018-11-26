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
 * This library provides functions that parse a Bali Document Notation™
 * and produce the corresponding parse tree structure.
 * 
 * NOTE: The implementation of this parser uses a raw parser that was
 * generated using ANTLR v4. The raw parse tree structure that comes
 * out of ANTLR is frankly not very well designed and hard to understand.
 * So, we walk the raw parse tree with a visitor object generating a nice
 * clean parse tree that is constructed exclusively of component
 * types (e.g. elements, collections, and trees). This means that some of
 * the code in the visitor class in this module is a bit harder to
 * understand but the result is that the rest of the javascript code that
 * makes up all of the modules for the Bali Nebula™ is simpler, clean and
 * easy to read. You're welcome ;-)
 */
var antlr = require('antlr4');
var ErrorStrategy = require('antlr4/error/ErrorStrategy');
var grammar = require('../grammar');
var types = require('../abstractions/Types');
var Component = require('../abstractions/Component').Component;
var elements = require('../elements');
var composites = require('../composites');
var collections = require('../collections');
var codex = require('../utilities/Codex');


// PUBLIC FUNCTIONS

/**
 * This class implements a parser that parses strings containing Bali Document Notation™ and
 * generates the corresponding component structures.
 * 
 * @constructor
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false. Debug mode is only useful for debugging the language grammar and
 * need not be used otherwise.
 * @returns {Parser} The new string parser.
 */
function Parser(debug) {
    this.debug = debug || false;
    return this;
}
Parser.prototype.constructor = Parser;
exports.Parser = Parser;


/**
 * This method parses a string containing Bali Document Notation™ and returns the corresponding
 * component.
 * 
 * @param {String} document The Bali Document Notation™ source string.
 * @returns {Component} The resulting component.
 */
Parser.prototype.parseDocument = function(document) {
    var parser = initializeParser(document, this.debug);
    var antlrTree = parser.component();
    var component = convertParseTree(antlrTree);
    return component;
};


// PRIVATE FUNCTIONS

function initializeParser(document, debug) {
    var chars = new antlr.InputStream(document);
    var lexer = new grammar.DocumentLexer(chars);
    var listener = new CustomErrorListener(debug);
    lexer.removeErrorListeners();
    lexer.addErrorListener(listener);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.DocumentParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser._errHandler = new CustomErrorStrategy();
    return parser;
}


function convertParseTree(antlrTree) {
    var visitor = new ParsingVisitor();
    antlrTree.accept(visitor);
    var baliTree = visitor.result;
    return baliTree;
}


// PRIVATE CLASSES

/*
 * NOTE: This visitor implements the raw ANTLR4 visitor pattern, NOT the
 * component visitor pattern. It is used to convert the raw ANTLR4 parse
 * tree into a clean parse tree.
 */

function ParsingVisitor() {
    grammar.DocumentVisitor.call(this);
    this.depth = 0;
    return this;
}
ParsingVisitor.prototype = Object.create(grammar.DocumentVisitor.prototype);
ParsingVisitor.prototype.constructor = ParsingVisitor;


ParsingVisitor.prototype.getIndentation = function() {
    var indentation = '';
    for (var i = 0; i < this.depth; i++) {
        indentation += '    ';
    }
    return indentation;
};


// angle: '~' real
ParsingVisitor.prototype.visitAngle = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
    var angle = new elements.Angle(value, parameters);
    this.result = angle;
};


// anyTemplate: 'any'
ParsingVisitor.prototype.visitAnyTemplate = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
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
    tree.complexity += tree.operator.length;  // operators have different lengths
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
    procedure.setToComplex();  // force the procedure in a block NOT to be formatted inline
    var tree = new composites.Tree(types.BLOCK, 2);
    tree.addChild(procedure);
    this.result = tree;
};


// breakClause: 'break' 'loop'
ParsingVisitor.prototype.visitBreakClause = function(ctx) {
    var tree = new composites.Tree(types.BREAK_CLAUSE, 10);
    this.result = tree;
};


// catalog:
//     association (',' association)* |
//     EOL (association EOL)* |
//     ':' /*empty catalog*/
ParsingVisitor.prototype.visitCatalog = function(ctx) {
    var parameters = this.parameters;
    var type = types.CATALOG;
    if (parameters) {
        type = parameters.getValue('$type');
        if (!type) type = parameters.getParameter(1).value;
        type = types.typeBySymbol(type);
    }
    var component = new collections.Catalog(parameters);
    if (ctx.constructor.name !== 'EmptyCatalogContext') {
        this.depth++;
        var associations = ctx.association();
        associations.forEach(function(association) {
            association.accept(this);
            component.addItem(this.result);
        }, this);
        this.depth--;
    }
    this.result = component;
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
    tree.complexity += tree.operator.length;  // operators have different lengths
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
    var value = ctx.getText();
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


// duration: DURATION
ParsingVisitor.prototype.visitDuration = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
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
        tree.complexity += 4;  // for the ' := ' after the recipient
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
    var value = ctx.getText();
    var probability = new elements.Probability(value, parameters);
    this.result = probability;
};


// fractionalProbability: FRACTION
ParsingVisitor.prototype.visitFractionalProbability = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
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
    var value = ctx.getText();
    var identifier = new elements.Identifier(types.FUNCTION, value);
    this.result = identifier;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
ParsingVisitor.prototype.visitHandleClause = function(ctx) {
    var tree = new composites.Tree(types.HANDLE_CLAUSE, Component.IS_COMPLEX);
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
    var tree = new composites.Tree(types.IF_CLAUSE, Component.IS_COMPLEX);
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


// imaginary: IMAGINARY
ParsingVisitor.prototype.visitImaginary = function(ctx) {
    this.result = ctx.getText();
};


// imaginaryNumber: imaginary
ParsingVisitor.prototype.visitImaginaryNumber = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
    var number = new elements.Complex(value, parameters);
    this.result = number;
};


// indices: '[' list ']'
ParsingVisitor.prototype.visitIndices = function(ctx) {
    var tree = new composites.Tree(types.INDICES, 0);
    ctx.list().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// infiniteNumber: 'infinity'
ParsingVisitor.prototype.visitInfiniteNumber = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
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
    var value = ctx.getText();
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
//     EOL (expression EOL)* |
//     /*empty list*/
ParsingVisitor.prototype.visitList = function(ctx) {
    var parameters = this.parameters;
    var collection;
    var type = types.LIST;
    if (parameters) {
        type = parameters.getValue('$type');
        if (!type) type = parameters.getParameter(1).value;
        type = types.typeBySymbol(type);
    }
    switch (type) {
        case types.QUEUE:
            collection = new collections.Queue(parameters);
            break;
        case types.SET:
            collection = new collections.Set(parameters);
            break;
        case types.STACK:
            collection = new collections.Stack(parameters);
            break;
        case types.LIST:
        default:
            collection = new collections.List(parameters);
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
    tree.complexity += tree.operator.length;  // operators have different lengths
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
    var value = ctx.getText();
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
    var value = ctx.getText();
    var moment = new elements.Moment(value, parameters);
    this.result = moment;
};


// newlineCatalog: EOL (association EOL)*
ParsingVisitor.prototype.visitNewlineCatalog = function(ctx) {
    // delegate to abstract type
    this.visitCatalog(ctx);
};


// newlineList: EOL (expression EOL)*
ParsingVisitor.prototype.visitNewlineList = function(ctx) {
    // delegate to abstract type
    this.visitList(ctx);
};


// newlineProcedure: EOL (statement EOL)*
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
    var value = ctx.getText();
    var template = new elements.Template(value, parameters);
    this.result = template;
};


// parameters: '(' collection ')'
ParsingVisitor.prototype.visitParameters = function(ctx) {
    var parameters = new composites.Parameters();
    ctx.collection().accept(this);
    var collection = this.result;
    var type = collection.type;
    var iterator = collection.getIterator();
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
    var value = ctx.getText();
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
//     EOL (statement EOL)* |
//     /*empty statements*/
ParsingVisitor.prototype.visitProcedure = function(ctx) {
    var tree = new composites.Tree(types.PROCEDURE, 0);
    var type = ctx.constructor.name;
    if (type !== 'EmptyProcedureContext') {
        var statements = ctx.statement();
        this.depth++;
        statements.forEach(function(statement) {
            statement.accept(this);
            tree.addChild(this.result);
            if (tree.getSize() > 1) tree.complexity += 2;  // account for the '; ' separator
        }, this);
        this.depth--;
    }
    this.result = tree;
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


// real: '0' | REAL
ParsingVisitor.prototype.visitReal = function(ctx) {
    var string = ctx.getText();
    this.result = string;
};


// realNumber: real
ParsingVisitor.prototype.visitRealNumber = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
    var number = new elements.Complex(value, parameters);
    this.result = number;
};


// reference: RESOURCE
ParsingVisitor.prototype.visitReference = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
    var reference = new elements.Reference(value, parameters);
    this.result = reference;
};


// returnClause: 'return' expression?
ParsingVisitor.prototype.visitReturnClause = function(ctx) {
    var tree = new composites.Tree(types.RETURN_CLAUSE, 6);
    var expression = ctx.expression();
    if (expression) {
        tree.complexity += 1;  // for the ' ' before the expression
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


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
ParsingVisitor.prototype.visitSelectClause = function(ctx) {
    var tree = new composites.Tree(types.SELECT_CLAUSE, Component.IS_COMPLEX);
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


// source: '{' procedure '}'
ParsingVisitor.prototype.visitSource = function(ctx) {
    var parameters = this.parameters;
    ctx.procedure().accept(this);
    var procedure = this.result;
    var source = new composites.Source(procedure, parameters);
    this.result = source;
};


// statement: mainClause handleClause*
ParsingVisitor.prototype.visitStatement = function(ctx) {
    var tree = new composites.Tree(types.STATEMENT, 0);
    ctx.mainClause().accept(this);
    tree.addChild(this.result);
    var handleClauses = ctx.handleClause();
    handleClauses.forEach(function(clause) {
        tree.complexity += 1;  // for the ' ' before each clause
        clause.accept(this);
        tree.addChild(this.result);
    }, this);
    this.result = tree;
};


// structure: '[' collection ']'
ParsingVisitor.prototype.visitStructure = function(ctx) {
    ctx.collection().accept(this);
    var collection = this.result;
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
    var value = ctx.getText();
    var symbol = new elements.Symbol(value, parameters);
    this.result = symbol;
};


// tag: TAG
ParsingVisitor.prototype.visitTag = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
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
    var value = ctx.getText();
    var probability = new elements.Probability(value, parameters);
    this.result = probability;
};


// undefinedNumber: 'undefined'
ParsingVisitor.prototype.visitUndefinedNumber = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
    var number = new elements.Complex(value, parameters);
    this.result = number;
};


// variable: IDENTIFIER
ParsingVisitor.prototype.visitVariable = function(ctx) {
    var value = ctx.getText();
    var identifier = new elements.Identifier(types.VARIABLE, value);
    this.result = identifier;
};


// version: VERSION
ParsingVisitor.prototype.visitVersion = function(ctx) {
    var parameters = this.parameters;
    var value = ctx.getText();
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
    var tree = new composites.Tree(types.WHILE_CLAUSE, Component.IS_COMPLEX);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
ParsingVisitor.prototype.visitWithClause = function(ctx) {
    var tree = new composites.Tree(types.WITH_CLAUSE, Component.IS_COMPLEX);
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


// CUSTOM ERROR HANDLING

// override the recover method in the lexer to fail fast
grammar.DocumentLexer.prototype.recover = function(e) {
    throw e;
};


function CustomErrorStrategy() {
    ErrorStrategy.DefaultErrorStrategy.call(this);
    return this;
}
CustomErrorStrategy.prototype = Object.create(ErrorStrategy.DefaultErrorStrategy.prototype);
CustomErrorStrategy.prototype.constructor = CustomErrorStrategy;


CustomErrorStrategy.prototype.reportError = function(recognizer, e) {
    recognizer.notifyErrorListeners(e.message, recognizer.getCurrentToken(), e);
};


CustomErrorStrategy.prototype.recover = function(recognizer, e) {
    var context = recognizer._ctx;
    while (context !== null) {
        context.exception = e;
        context = context.parentCtx;
    }
    throw new Error(e.message);
};


CustomErrorStrategy.prototype.recoverInline = function(recognizer) {
    var exception = new antlr.error.InputMismatchException(recognizer);
    this.reportError(recognizer, exception);
    this.recover(recognizer, exception);
};


CustomErrorStrategy.prototype.sync = function(recognizer) {
    // ignore for efficiency
};


function CustomErrorListener(debug) {
    antlr.error.ErrorListener.call(this);
    this.exactOnly = false;  // 'true' results in uninteresting ambiguities so leave 'false'
    this.debug = debug;
    return this;
}
CustomErrorListener.prototype = Object.create(antlr.error.ErrorListener.prototype);
CustomErrorListener.prototype.constructor = CustomErrorListener;


CustomErrorListener.prototype.syntaxError = function(recognizer, offendingToken, lineNumber, columnNumber, message, e) {
    // log a message
    var token = offendingToken ? recognizer.getTokenErrorDisplay(offendingToken) : '';
    var input = token ? offendingToken.getInputStream() : recognizer._input;
    var lines = input.toString().split('\n');
    var character = lines[lineNumber - 1][columnNumber];
    if (!token) {
        message = "LEXER: An unexpected character was encountered: '" + character + "'";
    } else {
        message = 'PARSER: An invalid token was encountered: ' + token;
    }
    logMessage(recognizer, message);

    // stop processing
    var error = new Error(message);
    throw error;
};


CustomErrorListener.prototype.reportAmbiguity = function(recognizer, dfa, startIndex, stopIndex, exact, alternatives, configs) {
    if (this.debug) {
        var rule = getRule(recognizer, dfa);
        alternatives = [];
        configs.items.forEach(function(item) {
            alternatives.push(item.alt);
        });
        alternatives = "{" + alternatives.join(", ") + "}";
        var message = 'PARSER: Ambiguous input was encountered for rule: ' + rule + ', alternatives: ' + alternatives;
        logMessage(recognizer, message);
    }
};


CustomErrorListener.prototype.reportContextSensitivity = function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    if (this.debug) {
        var rule = getRule(recognizer, dfa);
        var message = 'PARSER Encountered a context sensitive rule: ' + rule;
        logMessage(recognizer, message);
    }
};


function getRule(recognizer, dfa) {
    var description = dfa.decision.toString();
    var ruleIndex = dfa.atnStartState.ruleIndex;

    var ruleNames = recognizer.ruleNames;
    if (ruleIndex < 0 || ruleIndex >= ruleNames.length) {
        return description;
    }
    var ruleName = ruleNames[ruleIndex] || '<unknown>';
    return description + " (" + ruleName + ")";
}


function logMessage(recognizer, message) {
    // log the error message
    console.error(message.slice(0, 160));

    // log the lines before and after the invalid line and highlight the invalid token
    var offendingToken = recognizer._precedenceStack ? recognizer.getCurrentToken() : undefined;
    var token = offendingToken ? recognizer.getTokenErrorDisplay(offendingToken) : '';
    var input = token ? offendingToken.getInputStream() : recognizer._input;
    var lines = input.toString().split('\n');
    var lineNumber = token ? offendingToken.line : recognizer._tokenStartLine;
    var columnNumber = token ? offendingToken.column : recognizer._tokenStartColumn;
    if (lineNumber > 1) {
        console.error(lines[lineNumber - 2]);
    }
    console.error(lines[lineNumber - 1]);
    var line = '';
    for (var i = 0; i < columnNumber; i++) {
        line += ' ';
    }
    var start = token ? offendingToken.start : columnNumber;
    var stop = token ? offendingToken.stop : columnNumber;
    while (start++ <= stop) {
        line += '^';
    }
    console.error(line);
    if (lineNumber < lines.length) console.error(lines[lineNumber]);
}
