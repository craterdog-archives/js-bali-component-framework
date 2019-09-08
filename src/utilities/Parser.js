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
const URL = require('url').URL;
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
 * @param {Boolean} debug Whether of not the parser should be run in debug mode, the
 * default is false. Debug mode is only useful for debugging the language grammar and
 * need not be used otherwise.
 * @returns {Parser} The new string parser.
 */
function Parser(debug) {

    // the debug flag is a private attribute so methods that use it are defined in the constructor
    debug = debug || false;

    this.parseDocument = function(document) {
        const parser = initializeParser(document, debug);
        const antlrTree = parser.document();
        const component = convertParseTree(antlrTree, debug);
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

function convertParseTree(antlrTree, debug) {
    const visitor = new ParsingVisitor(debug);
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

function ParsingVisitor(debug) {
    grammar.DocumentVisitor.call(this);
    this.debug = debug;
    this.depth = 0;
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
    var units = '$radians';  // default value
    if (parameters) {
        units = parameters.getValue('$units');
        if (units) units = units.toString();
    }
    switch (units) {
        case '$radians':
        case '$degrees':
            break;
        default:
            const exception = new composites.Exception({
                $module: '/bali/utilities/Parser',
                $procedure: '$visitAngle',
                $exception: '$invalidUnits',
                $units: units,
                $text: 'An invalid unit was specified for an angle.'
            });
            //if (this.debug) console.error(exception.toString());
            console.error(exception.toString());
            throw exception;
    }
    const value = literalToNumber(ctx.getText().slice(1));  // remove the leading '~'
    const angle = new elements.Angle(value, parameters);
    this.result = angle;
};


// arguments: '(' list ')'
ParsingVisitor.prototype.visitArguments = function(ctx) {
    const tree = new composites.Tree('$Arguments');
    ctx.list().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
ParsingVisitor.prototype.visitArithmeticExpression = function(ctx) {
    const tree = new composites.Tree('$ArithmeticExpression');
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
        encoding = parameters.getValue('$encoding');
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
            const exception = new composites.Exception({
                $module: '/bali/utilities/Parser',
                $procedure: '$visitBinary',
                $exception: '$invalidFormat',
                $encoding: encoding,
                $text: 'An invalid encoding format was used for a binary string.'
            });
            if (this.debug) console.error(exception.toString());
            throw exception;
    }
    const binary = new elements.Binary(value, parameters);
    this.result = binary;
};


// block: '{' statements '}'
ParsingVisitor.prototype.visitBlock = function(ctx) {
    ctx.statements().accept(this);
    const statements = this.result;
    const tree = new composites.Tree('$Block');
    tree.addChild(statements);
    this.result = tree;
};


// breakClause: 'break' 'loop'
ParsingVisitor.prototype.visitBreakClause = function(ctx) {
    const tree = new composites.Tree('$BreakClause');
    this.result = tree;
};


// catalog:
//     association (',' association)* |
//     EOL (association EOL)* |
//     ':' /*empty catalog*/
ParsingVisitor.prototype.visitCatalog = function(ctx) {
    const parameters = this.getParameters();
    const component = new collections.Catalog(parameters);
    if (ctx.association) {
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
    const tree = new composites.Tree('$CheckoutClause');
    ctx.recipient().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// collection: '[' sequence ']'
ParsingVisitor.prototype.visitCollection = function(ctx) {
    ctx.sequence().accept(this);
};


// commitClause: 'commit' expression 'to' expression
ParsingVisitor.prototype.visitCommitClause = function(ctx) {
    const tree = new composites.Tree('$CommitClause');
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'is' | 'matches') expression
ParsingVisitor.prototype.visitComparisonExpression = function(ctx) {
    const tree = new composites.Tree('$ComparisonExpression');
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
    const tree = new composites.Tree('$ComplementExpression');
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
    value.accept(this);
};


// concatenationExpression: expression '&' expression
ParsingVisitor.prototype.visitConcatenationExpression = function(ctx) {
    const tree = new composites.Tree('$ConcatenationExpression');
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// continueClause: 'continue' 'loop'
ParsingVisitor.prototype.visitContinueClause = function(ctx) {
    const tree = new composites.Tree('$ContinueClause');
    this.result = tree;
};


// defaultExpression: expression '?' expression
ParsingVisitor.prototype.visitDefaultExpression = function(ctx) {
    const tree = new composites.Tree('$DefaultExpression');
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// dereferenceExpression: '@' expression
ParsingVisitor.prototype.visitDereferenceExpression = function(ctx) {
    const tree = new composites.Tree('$DereferenceExpression');
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// discardClause: 'discard' expression
ParsingVisitor.prototype.visitDiscardClause = function(ctx) {
    const tree = new composites.Tree('$DiscardClause');
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


// evaluateClause: (recipient ':=')? expression
ParsingVisitor.prototype.visitEvaluateClause = function(ctx) {
    const tree = new composites.Tree('$EvaluateClause');
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
    const tree = new composites.Tree('$ExponentialExpression');
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// factorialExpression: expression '!'
ParsingVisitor.prototype.visitFactorialExpression = function(ctx) {
    const tree = new composites.Tree('$FactorialExpression');
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// functionExpression: function arguments
ParsingVisitor.prototype.visitFunctionExpression = function(ctx) {
    const tree = new composites.Tree('$FunctionExpression');
    ctx.funxion().accept(this);
    tree.addChild(this.result);
    ctx.arguments().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// funxion: IDENTIFIER
ParsingVisitor.prototype.visitFunxion = function(ctx) {
    const identifier = ctx.getText();
    const funxion = new composites.Tree('$Function');
    funxion.identifier = identifier;
    this.result = funxion;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
ParsingVisitor.prototype.visitHandleClause = function(ctx) {
    const tree = new composites.Tree('$HandleClause');
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
    const tree = new composites.Tree('$IfClause');
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


// indices: '[' keys ']'
ParsingVisitor.prototype.visitIndices = function(ctx) {
    const tree = new composites.Tree('$Indices');
    ctx.keys().accept(this);
    const keys = this.result;
    if (keys.isType('$List') && keys.isEmpty()) {
        const exception = new composites.Exception({
            $module: '/bali/utilities/Parser',
            $procedure: '$visitIndices',
            $exception: '$emptyList',
            $text: 'An index list must contain at least one key.'
        });
        if (this.debug) console.error(exception.toString());
        throw exception;
    }
    tree.addChild(this.result);
    this.result = tree;
};


// inversionExpression: op=('-' | '*') expression
ParsingVisitor.prototype.visitInversionExpression = function(ctx) {
    const tree = new composites.Tree('$InversionExpression');
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
    var type = 'List';
    const parameters = this.getParameters();
    var name;
    if (parameters) {
        name = parameters.getValue('$type');
        if (name && name.isComponent && name.isType('$Name')) {
            type = name.getValue()[2];  // /bali/<metatype>/<type>/v1
        } else {
            type = '$Invalid';
        }
    }
    var collection;
    switch (type) {
        case 'List':
            collection = new collections.List(parameters);
            break;
        case 'Queue':
            collection = new collections.Queue(parameters);
            break;
        case 'Set':
            collection = new collections.Set(parameters);
            break;
        case 'Stack':
            collection = new collections.Stack(parameters);
            break;
        default:
            const exception = new composites.Exception({
                $module: '/bali/utilities/Parser',
                $procedure: '$visitList',
                $exception: '$invalidType',
                $type: name,
                $text: 'An invalid collection type was specified in the parameters.'
            });
            if (this.debug) console.error(exception.toString());
            throw exception;
    }
    if (ctx.expression) {
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
    const tree = new composites.Tree('$LogicalExpression');
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
    const tree = new composites.Tree('$MagnitudeExpression');
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// message: IDENTIFIER
ParsingVisitor.prototype.visitMessage = function(ctx) {
    const identifier = ctx.getText();
    const message = new composites.Tree('$Message');
    message.identifier = identifier;
    this.result = message;
};


// messageExpression: expression '.' message arguments
ParsingVisitor.prototype.visitMessageExpression = function(ctx) {
    const tree = new composites.Tree('$MessageExpression');
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.message().accept(this);
    tree.addChild(this.result);
    ctx.arguments().accept(this);
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


// name: NAME
ParsingVisitor.prototype.visitName = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().split('/').slice(1);  // extract the parts of the name
    const name = new elements.Name(value, parameters);
    this.result = name;
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


// parameters: '(' catalog ')'
ParsingVisitor.prototype.visitParameters = function(ctx) {
    ctx.catalog().accept(this);
    const catalog = this.result;
    if (catalog.isEmpty()) {
        const exception = new composites.Exception({
            $module: '/bali/utilities/Parser',
            $procedure: '$visitParameters',
            $exception: '$emptyCatalog',
            $text: 'A parameter catalog must contain at least one association.'
        });
        if (this.debug) console.error(exception.toString());
        throw exception;
    }
    const parameters = new composites.Parameters(catalog);
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
    const tree = new composites.Tree('$PrecedenceExpression');
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


// publishClause: 'publish' expression
ParsingVisitor.prototype.visitPublishClause = function(ctx) {
    const tree = new composites.Tree('$PublishClause');
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// queueClause: 'queue' expression 'on' expression
ParsingVisitor.prototype.visitQueueClause = function(ctx) {
    const tree = new composites.Tree('$QueueClause');
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
    const range = new collections.Range(first, last, parameters);
    this.result = range;
};


// real: REAL
ParsingVisitor.prototype.visitReal = function(ctx) {
    this.result = literalToNumber(ctx.getText());
};


// reference: RESOURCE
ParsingVisitor.prototype.visitReference = function(ctx) {
    const parameters = this.getParameters();
    const value = new URL(ctx.getText().slice(1, -1));  // remove the '<' and '>' delimiters
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
    const tree = new composites.Tree('$ReturnClause');
    const expression = ctx.expression();
    if (expression) {
        expression.accept(this);
        tree.addChild(this.result);
    }
    this.result = tree;
};


// saveClause: 'save' expression 'to' expression
ParsingVisitor.prototype.visitSaveClause = function(ctx) {
    const tree = new composites.Tree('$SaveClause');
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addChild(this.result);
    expressions[1].accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
ParsingVisitor.prototype.visitSelectClause = function(ctx) {
    const tree = new composites.Tree('$SelectClause');
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


// procedure: '{' statements '}'
ParsingVisitor.prototype.visitProcedure = function(ctx) {
    const parameters = this.getParameters();
    ctx.statements().accept(this);
    const statements = this.result;
    const procedure = new composites.Procedure(statements, parameters);
    this.result = procedure;
};


// statement: mainClause handleClause*
ParsingVisitor.prototype.visitStatement = function(ctx) {
    const tree = new composites.Tree('$Statement');
    ctx.mainClause().accept(this);
    tree.addChild(this.result);
    const handleClauses = ctx.handleClause();
    handleClauses.forEach(function(clause) {
        clause.accept(this);
        tree.addChild(this.result);
    }, this);
    this.result = tree;
};


// statements:
//     statement (';' statement)*   |
//     EOL (statement EOL)* |
//     /*empty statements*/
ParsingVisitor.prototype.visitStatements = function(ctx) {
    const tree = new composites.Tree('$Statements');
    if (ctx.statement) {
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


// subcomponent: variable indices
ParsingVisitor.prototype.visitSubcomponent = function(ctx) {
    const tree = new composites.Tree('$Subcomponent');
    ctx.variable().accept(this);
    tree.addChild(this.result);
    ctx.indices().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// subcomponentExpression: expression indices
ParsingVisitor.prototype.visitSubcomponentExpression = function(ctx) {
    const tree = new composites.Tree('$SubcomponentExpression');
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
    const tree = new composites.Tree('$ThrowClause');
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// variable: IDENTIFIER
ParsingVisitor.prototype.visitVariable = function(ctx) {
    const identifier = ctx.getText();
    const variable = new composites.Tree('$Variable');
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
    const tree = new composites.Tree('$WaitClause');
    ctx.recipient().accept(this);
    tree.addChild(this.result);
    ctx.expression().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// whileClause: 'while' expression 'do' block
ParsingVisitor.prototype.visitWhileClause = function(ctx) {
    const tree = new composites.Tree('$WhileClause');
    ctx.expression().accept(this);
    tree.addChild(this.result);
    ctx.block().accept(this);
    tree.addChild(this.result);
    this.result = tree;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
ParsingVisitor.prototype.visitWithClause = function(ctx) {
    const tree = new composites.Tree('$WithClause');
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


CustomErrorStrategy.prototype.recover = function(recognizer, exception) {
    var context = recognizer._ctx;
    while (context !== null) {
        context.exception = exception;
        context = context.parentCtx;
    }
    throw new composites.Exception({
        $module: '/bali/utilities/Parser',
        $procedure: '$parseDocument',
        $exception: '$syntaxError',
        $text: exception.toString()
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

    // capture the exception
    const exception = new composites.Exception({
        $module: '/bali/utilities/Parser',
        $procedure: '$parseDocument',
        $exception: '$syntaxError',
        $text: new elements.Text(EOL + message + EOL)  // must be converted to text explicitly to avoid infinite loop!
    });

    // log the exception if in debug mode
    if (this.debug) {
        console.error(exception.toString());
    }

    // stop the processing
    throw exception;
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
