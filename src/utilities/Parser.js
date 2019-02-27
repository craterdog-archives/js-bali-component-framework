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
/* global NaN, Infinity */

/**
 * This module provides a class that parses a document containing
 * Bali Document Notation™ and produce the corresponding parse tree structure.
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
const antlr = require('antlr4');
const ErrorStrategy = require('antlr4/error/ErrorStrategy');
const grammar = require('../grammar');
const utilities = require('../utilities/');
const abstractions = require('../abstractions/');
const elements = require('../elements');
const composites = require('../composites');
const collections = require('../collections');

// This private constant sets the POSIX end of line character
const EOL = '\n';


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

    // the debug flag is a private attribute so methods that use it are defined in the constructor
    debug = debug || false;

    this.parseComponent = function(document) {
        const parser = initializeParser(document, debug);
        const antlrTree = parser.component();
        const component = convertParseTree(antlrTree);
        return component;
    };

    this.parseDocument = function(document, parameters) {
        const parser = initializeParser(document, debug);
        const antlrTree = parser.document();
        const component = convertParseTree(antlrTree, parameters);
        return component;
    };

    return this;
}
Parser.prototype.constructor = Parser;
exports.Parser = Parser;


// PRIVATE FUNCTIONS

function initializeParser(document, debug) {
    const chars = new antlr.InputStream(document);
    const lexer = new grammar.DocumentLexer(chars);
    const listener = new CustomErrorListener(debug);
    lexer.removeErrorListeners();
    lexer.addErrorListener(listener);
    const tokens = new antlr.CommonTokenStream(lexer);
    const parser = new grammar.DocumentParser(tokens);
    parser.buildParseTrees = true;
    parser.removeErrorListeners();
    parser.addErrorListener(listener);
    parser._errHandler = new CustomErrorStrategy();
    return parser;
}

function convertParseTree(antlrTree, parameters) {
    const visitor = new ParsingVisitor(parameters);
    antlrTree.accept(visitor);
    const baliTree = visitor.result;
    return baliTree;
}

Math.PHI = (Math.sqrt(5) + 1) / 2;

function literalToNumber(literal) {
    switch (literal) {
        case '-e':
            return -Math.E;
        case 'e':
            return Math.E;
        case '-pi':
            return -Math.PI;
        case 'pi':
            return Math.PI;
        case '-phi':
            return -Math.PHI;
        case 'phi':
            return Math.PHI;
        default:
            return Number(literal);
    }
}


// PRIVATE CLASSES

/*
 * NOTE: This visitor implements the raw ANTLR4 visitor pattern, NOT the
 * component visitor pattern. It is used to convert the raw ANTLR4 parse
 * tree into a clean parse tree.
 */

function ParsingVisitor(parameters) {
    grammar.DocumentVisitor.call(this);
    this.depth = 0;
    this.parameters = parameters;
    return this;
}
ParsingVisitor.prototype = Object.create(grammar.DocumentVisitor.prototype);
ParsingVisitor.prototype.constructor = ParsingVisitor;


ParsingVisitor.prototype.getParameters = function() {
    const parameters = this.parameters;
    this.parameters = undefined;  // must unset it so other values don't see it
    return parameters;
};


ParsingVisitor.prototype.getIndentation = function() {
    var indentation = '';
    for (var i = 0; i < this.depth; i++) {
        indentation += '    ';
    }
    return indentation;
};


// angle: ANGLE
ParsingVisitor.prototype.visitAngle = function(ctx) {
    const parameters = this.getParameters();
    const value = literalToNumber(ctx.getText().slice(1));  // remove the leading '~'
    const angle = new elements.Angle(value, parameters);
    this.result = angle;
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
ParsingVisitor.prototype.visitArithmeticExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.ARITHMETIC_EXPRESSION);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// association: component ':' expression
ParsingVisitor.prototype.visitAssociation = function(ctx) {
    ctx.component().accept(this);
    const key = this.result;
    ctx.expression().accept(this);
    const value = this.result;
    const association = new composites.Association(key, value);
    this.result = association;
};


// binary: BINARY
ParsingVisitor.prototype.visitBinary = function(ctx) {
    const parameters = this.getParameters();
    var value = ctx.getText().slice(1, -1);  // remove the "'" delimiters
    value = value.replace(/\s/g, '');  // strip out any whitespace
    var encoding = '$base32';  // default value
    if (parameters) {
        encoding = parameters.getParameter('$encoding');
        if (encoding) encoding = encoding.toString();
    }
    switch (encoding) {
        case '$base2':
            value = utilities.codex.base2Decode(value);
            break;
        case '$base16':
            value = utilities.codex.base16Decode(value);
            break;
        case '$base32':
            value = utilities.codex.base32Decode(value);
            break;
        case '$base64':
            value = utilities.codex.base64Decode(value);
            break;
        default:
            throw new utilities.Exception({
                $module: '$ParsingVisitor',
                $procedure: '$visitBinary',
                $exception: '$invalidFormat',
                $format: encoding,
                $message: '"An invalid encoding format was used for a binary string."'
            });
    }
    const binary = new elements.Binary(value, parameters);
    this.result = binary;
};


// block: '{' procedure '}'
ParsingVisitor.prototype.visitBlock = function(ctx) {
    ctx.procedure().accept(this);
    const procedure = this.result;
    const tree = new composites.Tree(utilities.types.BLOCK);
    tree.addChild(procedure);
    this.result = tree;
};


// breakClause: 'break' 'loop'
ParsingVisitor.prototype.visitBreakClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.BREAK_CLAUSE);
    this.result = tree;
};


// catalog:
//     association (',' association)* |
//     EOL (association EOL)* |
//     ':' /*empty catalog*/
ParsingVisitor.prototype.visitCatalog = function(ctx) {
    const parameters = this.getParameters();
    const component = new collections.Catalog(parameters);
    if (ctx.constructor.name !== 'EmptyCatalogContext') {
        this.depth++;
        const associations = ctx.association();
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
    const tree = new composites.Tree(utilities.types.CHECKOUT_CLAUSE);
    ctx.recipient().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// commitClause: 'commit' expression 'to' expression
ParsingVisitor.prototype.visitCommitClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.COMMIT_CLAUSE);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
ParsingVisitor.prototype.visitComparisonExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.COMPARISON_EXPRESSION);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// complementExpression: 'not' expression
ParsingVisitor.prototype.visitComplementExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.COMPLEMENT_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// component: value parameters?
// NOTE: the parameters really belong to the value and are maintained by the value objects.
//       There is no component object per se, this method is really only necessary to
//       process the parameters if they do exist and save them off for the value to find
//       during its processing. The value object often needs to know what the parameters
//       are during its initialization.
ParsingVisitor.prototype.visitComponent = function(ctx) {
    const parameters = ctx.parameters();
    if (parameters) {
        // this is a parameterized component so parse the parameters first
        parameters.accept(this);
        this.parameters = this.result;  // save off the parameters for the value object
    }
    const value = ctx.value();
    value.accept(this);  // the value clears this.parameters if it is set
};


// concatenationExpression: expression '&' expression
ParsingVisitor.prototype.visitConcatenationExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.CONCATENATION_EXPRESSION);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// continueClause: 'continue' 'loop'
ParsingVisitor.prototype.visitContinueClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.CONTINUE_CLAUSE);
    this.result = tree;
};


// defaultExpression: expression '?' expression
ParsingVisitor.prototype.visitDefaultExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.DEFAULT_EXPRESSION);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// dereferenceExpression: '@' expression
ParsingVisitor.prototype.visitDereferenceExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.DEREFERENCE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// discardClause: 'discard' expression
ParsingVisitor.prototype.visitDiscardClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.DISCARD_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// document: EOL* component EOL* EOF
ParsingVisitor.prototype.visitDocument = function(ctx) {
    ctx.component().accept(this);
};


// duration: DURATION
ParsingVisitor.prototype.visitDuration = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().slice(1);  // remove the leading '~'
    const duration = new elements.Duration(value, parameters);
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
    const tree = new composites.Tree(utilities.types.EVALUATE_CLAUSE);
    const recipient = ctx.recipient();
    if (recipient) {
        recipient.accept(this);
        tree.addChild(this.result);
    }
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// exponentialExpression: <assoc=right> expression '^' expression
ParsingVisitor.prototype.visitExponentialExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.EXPONENTIAL_EXPRESSION);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// factorialExpression: expression '!'
ParsingVisitor.prototype.visitFactorialExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.FACTORIAL_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// functionExpression: function parameters
ParsingVisitor.prototype.visitFunctionExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.FUNCTION_EXPRESSION);
    ctx.funxtion().accept(this);
    tree.addChild(this.result);
    ctx.parameters().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// funxtion: IDENTIFIER
ParsingVisitor.prototype.visitFunxtion = function(ctx) {
    const identifier = ctx.getText();
    const funxtion = new composites.Tree(utilities.types.FUNCTION);
    funxtion.identifier = identifier;
    this.result = funxtion;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
ParsingVisitor.prototype.visitHandleClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.HANDLE_CLAUSE);
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
    const tree = new composites.Tree(utilities.types.IF_CLAUSE);
    const expressions = ctx.expression();
    const blocks = ctx.block();
    const hasElseBlock = blocks.length > expressions.length;
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
    this.result = literalToNumber(ctx.getText().slice(0, -1).trim());  // remove the trailing 'i'
};


// indices: '[' list ']'
ParsingVisitor.prototype.visitIndices = function(ctx) {
    const tree = new composites.Tree(utilities.types.INDICES);
    ctx.list().accept(this);
    tree.addChild(this.result);
    this.result = tree;
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


// inversionExpression: op=('-' | '/' | '*') expression
ParsingVisitor.prototype.visitInversionExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.INVERSION_EXPRESSION);
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
    var collection;
    var type = utilities.types.LIST;
    const parameters = this.getParameters();
    if (parameters) {
        type = utilities.types.typeForSymbol(parameters.getParameter('$type'));
    }
    switch (type) {
        case utilities.types.QUEUE:
            collection = new collections.Queue(parameters);
            break;
        case utilities.types.SET:
            collection = new collections.Set(parameters);
            break;
        case utilities.types.STACK:
            collection = new collections.Stack(parameters);
            break;
        case utilities.types.LIST:
        default:
            collection = new collections.List(parameters);
    }
    if (ctx.constructor.name !== 'EmptyListContext') {
        const expressions = ctx.expression();
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
    const tree = new composites.Tree(utilities.types.LOGICAL_EXPRESSION);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// magnitudeExpression: '|' expression '|'
ParsingVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.MAGNITUDE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// message: IDENTIFIER
ParsingVisitor.prototype.visitMessage = function(ctx) {
    const identifier = ctx.getText();
    const message = new composites.Tree(utilities.types.MESSAGE);
    message.identifier = identifier;
    this.result = message;
};


// messageExpression: expression '.' message parameters
ParsingVisitor.prototype.visitMessageExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.MESSAGE_EXPRESSION);
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
    const parameters = this.getParameters();
    const value = ctx.getText().slice(1, -1);  // remove the '<' and '>' delimiters
    const moment = new elements.Moment(value, parameters);
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


// number:
//    'undefined' |
//    'infinity' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')'
ParsingVisitor.prototype.visitNumber = function(ctx) {
    const parameters = this.getParameters();
    var real = ctx.real();
    if (real) {
        real.accept(this);
        real = this.result;
    }
    var imaginary = ctx.imaginary();
    if (imaginary) {
        imaginary.accept(this);
        imaginary = this.result;
    }
    const angle = ctx.angle();
    if (angle) {
        angle.accept(this);
        imaginary = this.result;
    }
    const literal = ctx.getText();
    switch (literal) {
        case 'undefined':
            real = NaN;
            break;
        case 'infinity':
            real = Infinity;
            break;
    }
    this.result = new elements.Number(real, imaginary, parameters);
};


// parameters: '(' collection ')'
ParsingVisitor.prototype.visitParameters = function(ctx) {
    ctx.collection().accept(this);
    const collection = this.result;
    const parameters = new composites.Parameters(collection);
    this.result = parameters;
};


// pattern: 'none' | REGEX | 'any'
ParsingVisitor.prototype.visitPattern = function(ctx) {
    const parameters = this.getParameters();
    var value = ctx.getText();
    switch (value) {
        case 'none':
            value = new RegExp('^none$');  // only match none itself
            break;
        case 'any':
            value = new RegExp('.*');  // match anything
            break;
        default:
            value = value.slice(1, -2);  // remove the trailing '?' and '"' delimiters
            value = new RegExp(value);
    }
    const pattern = new elements.Pattern(value, parameters);
    this.result = pattern;
};


// percent: PERCENT
ParsingVisitor.prototype.visitPercent = function(ctx) {
    const parameters = this.getParameters();
    const value = literalToNumber(ctx.getText().slice(0, -1));  // remove the trailing '%'
    const percent = new elements.Percent(value, parameters);
    this.result = percent;
};


// precedenceExpression: '(' expression ')'
ParsingVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.PRECEDENCE_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// probability: 'false' | FRACTION | 'true'
ParsingVisitor.prototype.visitProbability = function(ctx) {
    const parameters = this.getParameters();
    var value = ctx.getText();
    switch (value) {
        case 'false':
            value = 0;
            break;
        case 'true':
            value = 1;
            break;
        default:
            value = Number(value);
    }
    const probability = new elements.Probability(value, parameters);
    this.result = probability;
};


// procedure:
//     statement (';' statement)*   |
//     EOL (statement EOL)* |
//     /*empty statements*/
ParsingVisitor.prototype.visitProcedure = function(ctx) {
    const tree = new composites.Tree(utilities.types.PROCEDURE);
    const type = ctx.constructor.name;
    if (type !== 'EmptyProcedureContext') {
        const statements = ctx.statement();
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
    const tree = new composites.Tree(utilities.types.PUBLISH_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// queueClause: 'queue' expression 'on' expression
ParsingVisitor.prototype.visitQueueClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.QUEUE_CLAUSE);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// range: expression '..' expression
ParsingVisitor.prototype.visitRange = function(ctx) {
    const parameters = this.getParameters();
    const expressions = ctx.expression();
    expressions[0].accept(this);
    const first = this.result;
    expressions[1].accept(this);
    const last = this.result;
    const range = new composites.Range(first, last, parameters);
    this.result = range;
};


// real: REAL
ParsingVisitor.prototype.visitReal = function(ctx) {
    this.result = literalToNumber(ctx.getText());
};


// reference: RESOURCE
ParsingVisitor.prototype.visitReference = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().slice(1, -1);  // remove the '<' and '>' delimiters
    const reference = new elements.Reference(value, parameters);
    this.result = reference;
};


// reserved: RESERVED
ParsingVisitor.prototype.visitReserved = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().slice(2);  // remove the leading '$$'
    const reserved = new elements.Reserved(value, parameters);
    this.result = reserved;
};


// returnClause: 'return' expression?
ParsingVisitor.prototype.visitReturnClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.RETURN_CLAUSE);
    const expression = ctx.expression();
    if (expression) {
        expression.accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// saveClause: 'save' expression 'to' expression
ParsingVisitor.prototype.visitSaveClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.SAVE_CLAUSE);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
ParsingVisitor.prototype.visitSelectClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.SELECT_CLAUSE);
    var expressions = ctx.expression();
    const selector = expressions[0];
    expressions = expressions.slice(1);  // remove the first expression
    const blocks = ctx.block();
    const hasElseBlock = blocks.length > expressions.length;
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
    const parameters = this.getParameters();
    ctx.procedure().accept(this);
    const procedure = this.result;
    const source = new composites.Source(procedure, parameters);
    this.result = source;
};


// statement: mainClause handleClause*
ParsingVisitor.prototype.visitStatement = function(ctx) {
    const tree = new composites.Tree(utilities.types.STATEMENT);
    ctx.mainClause().accept(this);
    tree.addChild(this.result);
    const handleClauses = ctx.handleClause();
    handleClauses.forEach(function(clause) {
        clause.accept(this);
        tree.addChild(this.result);
    }, this);
    this.result = tree;
};


// structure: '[' collection ']'
ParsingVisitor.prototype.visitStructure = function(ctx) {
    ctx.collection().accept(this);
};


// subcomponent: variable indices
ParsingVisitor.prototype.visitSubcomponent = function(ctx) {
    const tree = new composites.Tree(utilities.types.SUBCOMPONENT);
    ctx.variable().accept(this);
    tree.addChild(this.result);
    ctx.indices().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// subcomponentExpression: expression indices
ParsingVisitor.prototype.visitSubcomponentExpression = function(ctx) {
    const tree = new composites.Tree(utilities.types.SUBCOMPONENT_EXPRESSION);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.indices().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// symbol: SYMBOL
ParsingVisitor.prototype.visitSymbol = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().slice(1);  // remove the leading '$'
    const symbol = new elements.Symbol(value, parameters);
    this.result = symbol;
};


// tag: TAG
ParsingVisitor.prototype.visitTag = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().slice(1);  // remove the leading '#'
    const tag = new elements.Tag(value, parameters);
    this.result = tag;
};


// text: TEXT | BLOCK_TEXT
ParsingVisitor.prototype.visitText = function(ctx) {
    const parameters = this.getParameters();
    var value = ctx.getText().slice(1, -1);  // remove the '"' delimiters
    this.depth++;
    var indentation = this.getIndentation();
    var regex = new RegExp('\\n' + indentation, 'g');
    value = value.replace(regex, EOL);  // remove the indentation before each text line
    this.depth--;
    indentation = this.getIndentation();
    var regex = new RegExp('\\n' + indentation, 'g');
    value = value.replace(regex, EOL);  // remove the indentation from last quote line
    const text = new elements.Text(value, parameters);
    this.result = text;
};


// throwClause: 'throw' expression
ParsingVisitor.prototype.visitThrowClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.THROW_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// variable: IDENTIFIER
ParsingVisitor.prototype.visitVariable = function(ctx) {
    const identifier = ctx.getText();
    const variable = new composites.Tree(utilities.types.VARIABLE);
    variable.identifier = identifier;
    this.result = variable;
};


// version: VERSION
ParsingVisitor.prototype.visitVersion = function(ctx) {
    const parameters = this.getParameters();
    const levels = ctx.getText().slice(1).split('.');  // pull out the version level strings
    const value = [];
    levels.forEach(function(level) {
        value.push(Number(level));
    });
    const version = new elements.Version(value, parameters);
    this.result = version;
};


// waitClause: 'wait' 'for' recipient 'from' expression
ParsingVisitor.prototype.visitWaitClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.WAIT_CLAUSE);
    ctx.recipient().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// whileClause: 'while' expression 'do' block
ParsingVisitor.prototype.visitWhileClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.WHILE_CLAUSE);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
ParsingVisitor.prototype.visitWithClause = function(ctx) {
    const tree = new composites.Tree(utilities.types.WITH_CLAUSE);
    const symbol = ctx.symbol();
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
    throw new utilities.Exception({
        $module: '$Parser',
        $procedure: '$parseDocument',
        $exception: '$syntaxError',
        $message: '"' + e.message + '"'
    });
};


CustomErrorStrategy.prototype.recoverInline = function(recognizer) {
    const exception = new antlr.error.InputMismatchException(recognizer);
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
    // create the error message
    const token = offendingToken ? recognizer.getTokenErrorDisplay(offendingToken) : '';
    const input = token ? offendingToken.getInputStream() : recognizer._input;
    const lines = input.toString().split(EOL);
    const character = lines[lineNumber - 1][columnNumber];
    if (!token) {
        message = "An unexpected character was encountered: '" + character + "'";
    } else {
        message = 'An invalid token was encountered: ' + token;
    }
    message = addContext(recognizer, message);

    // log the error message if in debug mode
    if (this.debug) {
        console.error(message);
    }

    // stop the processing
    throw new utilities.Exception({
        $module: '$Parser',
        $procedure: '$parseDocument',
        $exception: '$syntaxError',
        $message: '"' + message + '"'
    });
};


CustomErrorListener.prototype.reportAmbiguity = function(recognizer, dfa, startIndex, stopIndex, exact, alternatives, configs) {
    if (this.debug) {
        const rule = getRule(recognizer, dfa);
        alternatives = [];
        configs.items.forEach(function(item) {
            alternatives.push(item.alt);
        });
        alternatives = "{" + alternatives.join(", ") + "}";
        var message = 'The parser encountered ambiguous input for rule: ' + rule + ', alternatives: ' + alternatives;
        message = addContext(recognizer, message);
        console.error(message);
    }
};


CustomErrorListener.prototype.reportContextSensitivity = function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    if (this.debug) {
        const rule = getRule(recognizer, dfa);
        var message = 'The parser encountered a context sensitive rule: ' + rule;
        message = addContext(recognizer, message);
        console.error(message);
    }
};


// PRIVATE FUNCTIONS

function getRule(recognizer, dfa) {
    const description = dfa.decision.toString();
    const ruleIndex = dfa.atnStartState.ruleIndex;

    const ruleNames = recognizer.ruleNames;
    if (ruleIndex < 0 || ruleIndex >= ruleNames.length) {
        return description;
    }
    const ruleName = ruleNames[ruleIndex] || '<unknown>';
    return description + " (" + ruleName + ")";
}


function addContext(recognizer, message) {
    // truncate the main message as needed
    message = EOL + '    ' + message.slice(0, 160) + EOL;

    // add the lines before and after the invalid line and highlight the invalid token
    const offendingToken = recognizer._precedenceStack ? recognizer.getCurrentToken() : undefined;
    const token = offendingToken ? recognizer.getTokenErrorDisplay(offendingToken) : '';
    const input = token ? offendingToken.getInputStream() : recognizer._input;
    const lines = input.toString().split(EOL);
    const lineNumber = token ? offendingToken.line : recognizer._tokenStartLine;
    const columnNumber = token ? offendingToken.column : recognizer._tokenStartColumn;
    if (lineNumber > 1) {
        message += '    [' + (lineNumber - 1) + ']: ' + lines[lineNumber - 2] + EOL;
    }
    message += '    [' + lineNumber + ']: ' + lines[lineNumber - 1] + EOL;
    var line = '    [' + lineNumber + ']: ';
    for (var i = 0; i < columnNumber; i++) {
        line += ' ';
    }
    var start = token ? offendingToken.start : columnNumber;
    const stop = token ? offendingToken.stop : columnNumber;
    while (start++ <= stop) {
        line += '^';
    }
    message += line + EOL;
    if (lineNumber < lines.length) {
        message += '    [' + (lineNumber + 1) + ']: ' + lines[lineNumber] + EOL;
    }
    return message;
}
