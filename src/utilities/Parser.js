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
 * This class implements a parser that parses strings containing Bali Document
 * Notation™ and generates the corresponding components.
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
const structures = require('../structures');
const collections = require('../collections');

// This private constant sets the POSIX end of line character
const EOL = '\n';


// PUBLIC FUNCTIONS

/**
 * This function creates a new parser object.
 *
 * @param {Number} debug A number in the range 0..3.
 * @returns {Parser} The new string parser.
 */
const Parser = function(debug) {

    // the debug flag is a private attribute so methods that use it are defined in the constructor
    debug = debug || 0;

    this.parseSource = function(string) {
        if (debug > 1) {
            const validator = new utilities.Validator(debug);
            validator.validateType('/bali/utilities/Parser', '$parseBDN', '$string', string, [
                '/javascript/String'
            ]);
        }
        const parser = initializeParser(string, debug);
        const antlrTree = parser.source();
        const component = convertParseTree(antlrTree, debug);
        return component;
    };

    this.parseDocument = function(string) {
        if (debug > 1) {
            const validator = new utilities.Validator(debug);
            validator.validateType('/bali/utilities/Parser', '$parseBDN', '$string', string, [
                '/javascript/String'
            ]);
        }
        const parser = initializeParser(string, debug);
        const antlrTree = parser.document();
        const document = convertParseTree(antlrTree, debug);
        return document;
    };

    return this;
};
Parser.prototype.constructor = Parser;
exports.Parser = Parser;


// PRIVATE FUNCTIONS

const initializeParser = function(document, debug) {
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
    parser._errHandler = new CustomErrorStrategy(debug);
    return parser;
};

const convertParseTree = function(antlrTree, debug) {
    const visitor = new ParsingVisitor(debug);
    antlrTree.accept(visitor);
    const baliTree = visitor.result;
    return baliTree;
};

Math.PHI = (Math.sqrt(5) + 1) / 2;
Math.TAU = Math.PI * 2;

const literalToNumber = function(literal) {
    switch (literal) {
        case '-e':
            return -Math.E;
        case 'e':
            return Math.E;
        case '-pi':
        case '-π':
            return -Math.PI;
        case 'pi':
        case 'π':
            return Math.PI;
        case '-phi':
        case '-φ':
            return -Math.PHI;
        case 'phi':
        case 'φ':
            return Math.PHI;
        case '-tau':
        case '-τ':
            return -Math.TAU;
        case 'tau':
        case 'τ':
            return Math.TAU;
        default:
            return Number(literal);
    }
};


// PRIVATE CLASSES

/*
 * NOTE: This visitor implements the raw ANTLR4 visitor pattern, NOT the
 * component visitor pattern. It is used to convert the raw ANTLR4 parse
 * tree into a clean parse tree.
 */

const ParsingVisitor = function(debug) {
    grammar.DocumentVisitor.call(this);
    this.depth = 0;
    this.parameters = undefined;
    this.debug = debug || 0;
    return this;
};
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


// acceptClause: 'accept' expression
ParsingVisitor.prototype.visitAcceptClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/AcceptClause', this.debug);
    const message = ctx.expression();
    message.accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// angle: ANGLE
ParsingVisitor.prototype.visitAngle = function(ctx) {
    const parameters = this.getParameters();
    var units = '$radians';  // default value
    if (parameters) {
        units = parameters.getAttribute('$units');
        if (units) units = units.toString();
    }
    switch (units) {
        case '$radians':
        case '$degrees':
            break;
        default:
            const exception = new structures.Exception({
                $module: '/bali/utilities/Parser',
                $procedure: '$visitAngle',
                $exception: '$invalidUnits',
                $units: units,
                $text: 'An invalid unit was specified for an angle.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
    }
    const value = literalToNumber(ctx.getText().slice(1));  // remove the leading '~'
    const angle = new elements.Angle(value, parameters, this.debug);
    this.result = angle;
};


// arguments:
//     expression (',' expression)* |
//     /* no expressions */
ParsingVisitor.prototype.visitArguments = function(ctx) {
    const tree = new collections.Tree('/bali/structures/Arguments', this.debug);
    const expressions = ctx.expression();
    this.depth++;
    expressions.forEach(function(expression) {
        expression.accept(this);
        tree.addItem(this.result);
    }, this);
    this.depth--;
    this.result = tree;
};


// arithmeticExpression: expression op=('*' | '/' | '//' | '+' | '-') expression
ParsingVisitor.prototype.visitArithmeticExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/ArithmeticExpression', this.debug);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addItem(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// association: element ':' component
ParsingVisitor.prototype.visitAssociation = function(ctx) {
    ctx.element().accept(this);
    const key = this.result;
    ctx.component().accept(this);
    const value = this.result;
    const association = new structures.Association(key, value, this.debug);
    this.result = association;
};


// attribute: variable '[' indices ']'
ParsingVisitor.prototype.visitAttribute = function(ctx) {
    const tree = new collections.Tree('/bali/structures/Attribute', this.debug);
    ctx.variable().accept(this);
    tree.addItem(this.result);
    ctx.indices().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// attributeExpression: expression '[' indices ']'
ParsingVisitor.prototype.visitAttributeExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/AttributeExpression', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    ctx.indices().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// binary: BINARY
ParsingVisitor.prototype.visitBinary = function(ctx) {
    const parameters = this.getParameters();
    var value = ctx.getText().slice(1, -1);  // remove the "'" delimiters
    value = value.replace(/\s/g, '');  // strip out any whitespace
    var encoding = '$base32';  // default value
    if (parameters) {
        encoding = parameters.getAttribute('$encoding');
        if (encoding) encoding = encoding.toString();
    }
    const decoder = new utilities.Decoder(0, this.debug);
    switch (encoding) {
        case '$base2':
            value = decoder.base2Decode(value);
            break;
        case '$base16':
            value = decoder.base16Decode(value);
            break;
        case '$base32':
            value = decoder.base32Decode(value);
            break;
        case '$base64':
            value = decoder.base64Decode(value);
            break;
        default:
            const exception = new structures.Exception({
                $module: '/bali/utilities/Parser',
                $procedure: '$visitBinary',
                $exception: '$invalidFormat',
                $encoding: encoding,
                $text: 'An invalid encoding format was used for a binary string.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
    }
    const binary = new elements.Binary(value, parameters, this.debug);
    this.result = binary;
};


// block: '{' code '}'
ParsingVisitor.prototype.visitBlock = function(ctx) {
    ctx.code().accept(this);
    const code = this.result;
    const tree = new collections.Tree('/bali/structures/Block', this.debug);
    tree.addItem(code);
    this.result = tree;
};


// breakClause: 'break' 'loop'
ParsingVisitor.prototype.visitBreakClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/BreakClause', this.debug);
    this.result = tree;
};


// catalog:
//     association (',' association)* |
//     EOL (association EOL)* |
//     ':' /* no associations */
ParsingVisitor.prototype.visitCatalog = function(ctx) {
    const parameters = this.getParameters();
    const component = new collections.Catalog(parameters, this.debug);
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


// checkoutClause: 'checkout' ('level' expression 'of')? recipient 'from' expression
ParsingVisitor.prototype.visitCheckoutClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/CheckoutClause', this.debug);
    const expressions = ctx.expression();
    var index = 0;
    if (expressions.length ===2) {
        expressions[index++].accept(this);
        tree.addItem(this.result);
    }
    ctx.recipient().accept(this);
    tree.addItem(this.result);
    expressions[index].accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// code:
//     statement (';' statement)*   |
//     EOL (statement EOL)* |
//     /* no statements */
ParsingVisitor.prototype.visitCode = function(ctx) {
    const tree = new collections.Tree('/bali/structures/Code', this.debug);
    if (ctx.statement) {
        const code = ctx.statement();
        this.depth++;
        code.forEach(function(statement) {
            statement.accept(this);
            tree.addItem(this.result);
        }, this);
        this.depth--;
    }
    this.result = tree;
};


// comment: NOTE | COMMENT
ParsingVisitor.prototype.visitComment = function(ctx) {
    const text = ctx.getText();
    const comment = new collections.Tree('/bali/structures/Comment', this.debug);
    comment.text = text;
    this.result = comment;
};


// commitClause: 'commit' expression 'to' expression
ParsingVisitor.prototype.visitCommitClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/CommitClause', this.debug);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addItem(this.result);
    expressions[1].accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// comparisonExpression: expression op=('<' | '=' | '>' | 'IS' | 'MATCHES') expression
ParsingVisitor.prototype.visitComparisonExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/ComparisonExpression', this.debug);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addItem(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// complementExpression: 'NOT' expression
ParsingVisitor.prototype.visitComplementExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/ComplementExpression', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// component: value parameters? note?
// NOTE: the parameters really belong to the value and are maintained by the value objects.
//       There is no component object per se, this method is really only necessary to
//       process the parameters if they do exist and save them off for the value to find
//       during its processing. The value object often needs to know what the parameters
//       are during its initialization.
//       Also, the parameters object is an object rather than a catalog to avoid circular
//       dependencies in the component class.
ParsingVisitor.prototype.visitComponent = function(ctx) {
    const parameters = ctx.parameters();
    if (parameters) {
        // this is a parameterized component so parse the parameters first
        parameters.accept(this);
        this.parameters = this.result;  // save off the parameters for the value object
    }
    const value = ctx.value();
    value.accept(this);
    const note = ctx.note();
    if (note) this.result.note = note.getText();
};


// concatenationExpression: expression '&' expression
ParsingVisitor.prototype.visitConcatenationExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/ConcatenationExpression', this.debug);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addItem(this.result);
    expressions[1].accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// continueClause: 'continue' 'loop'
ParsingVisitor.prototype.visitContinueClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/ContinueClause', this.debug);
    this.result = tree;
};


// defaultExpression: expression '?' expression
ParsingVisitor.prototype.visitDefaultExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/DefaultExpression', this.debug);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addItem(this.result);
    expressions[1].accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// dereferenceExpression: '@' expression
ParsingVisitor.prototype.visitDereferenceExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/DereferenceExpression', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// discardClause: 'discard' expression
ParsingVisitor.prototype.visitDiscardClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/DiscardClause', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// document: component EOF
ParsingVisitor.prototype.visitDocument = function(ctx) {
    ctx.component().accept(this);
};


// duration: DURATION
ParsingVisitor.prototype.visitDuration = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().slice(1);  // remove the leading '~'
    const duration = new elements.Duration(value, parameters, this.debug);
    this.result = duration;
};


// evaluateClause: (recipient ':=')? expression
ParsingVisitor.prototype.visitEvaluateClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/EvaluateClause', this.debug);
    const recipient = ctx.recipient();
    if (recipient) {
        recipient.accept(this);
        tree.addItem(this.result);
    }
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// exponentialExpression: <assoc=right> expression '^' expression
ParsingVisitor.prototype.visitExponentialExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/ExponentialExpression', this.debug);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addItem(this.result);
    expressions[1].accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// factorialExpression: expression '!'
ParsingVisitor.prototype.visitFactorialExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/FactorialExpression', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// funcxion: IDENTIFIER
ParsingVisitor.prototype.visitFuncxion = function(ctx) {
    const identifier = ctx.getText();
    const funcxion = new collections.Tree('/bali/structures/Function', this.debug);
    funcxion.identifier = identifier;
    this.result = funcxion;
};


// functionExpression: function '(' arguments ')'
ParsingVisitor.prototype.visitFunctionExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/FunctionExpression', this.debug);
    ctx.funcxion().accept(this);
    tree.addItem(this.result);
    ctx.arguments().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// handleClause: 'handle' symbol (('with' block) | ('matching' expression 'with' block)+);
ParsingVisitor.prototype.visitHandleClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/HandleClause', this.debug);
    ctx.symbol().accept(this);
    tree.addItem(this.result);
    const blocks = ctx.block();
    const expressions = ctx.expression();
    if (expressions && expressions.length) {
        for (var i = 0; i < expressions.length; i++) {
            expressions[i].accept(this);
            tree.addItem(this.result);
            blocks[i].accept(this);
            tree.addItem(this.result);
        }
    } else {
        blocks[0].accept(this);
        tree.addItem(this.result);
    }
    this.result = tree;
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
ParsingVisitor.prototype.visitIfClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/IfClause', this.debug);
    const expressions = ctx.expression();
    const blocks = ctx.block();
    const hasElseBlock = blocks.length > expressions.length;
    for (var i = 0; i < expressions.length; i++) {
        expressions[i].accept(this);
        tree.addItem(this.result);
        blocks[i].accept(this);
        tree.addItem(this.result);
    }
    if (hasElseBlock) {
        blocks[blocks.length - 1].accept(this);
        tree.addItem(this.result);
    }
    this.result = tree;
};


// indices: expression (',' expression)*
ParsingVisitor.prototype.visitIndices = function(ctx) {
    const tree = new collections.Tree('/bali/structures/Indices', this.debug);
    const expressions = ctx.expression();
    this.depth++;
    expressions.forEach(function(expression) {
        expression.accept(this);
        tree.addItem(this.result);
    }, this);
    this.depth--;
    this.result = tree;
};


// inversionExpression: op=('-' | '/' | '*') expression
ParsingVisitor.prototype.visitInversionExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/InversionExpression', this.debug);
    tree.operator = ctx.op.text;
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// list:
//     component (',' component)* |
//     EOL (component EOL)* |
//     /* no items */
ParsingVisitor.prototype.visitList = function(ctx) {
    var type = 'List';
    const parameters = this.getParameters();
    var name;
    if (parameters) {
        name = parameters.getAttribute('$type');
        if (name && name.isComponent && name.isType('/bali/elements/Name')) {
            type = name.getValue()[2];  // /bali/collections/<type>/<version>
        } else {
            type = 'Invalid';
        }
    }
    var collection;
    switch (type) {
        case 'List':
            collection = new collections.List(parameters, this.debug);
            break;
        case 'Queue':
            collection = new collections.Queue(parameters, this.debug);
            break;
        case 'Set':
            collection = new collections.Set(parameters, this.debug);
            break;
        case 'Stack':
            collection = new collections.Stack(parameters, this.debug);
            break;
        default:
            const exception = new structures.Exception({
                $module: '/bali/utilities/Parser',
                $procedure: '$visitList',
                $exception: '$invalidType',
                $type: type,
                $text: 'An invalid collection type was specified in the parameters.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
    }
    if (ctx.component) {
        const components = ctx.component();
        this.depth++;
        components.forEach(function(component) {
            component.accept(this);
            collection.addItem(this.result);
        }, this);
        this.depth--;
    }
    this.result = collection;
};


// logicalExpression: expression op=('AND' | 'SANS' | 'XOR' | 'OR') expression
ParsingVisitor.prototype.visitLogicalExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/LogicalExpression', this.debug);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addItem(this.result);
    tree.operator = ctx.op.text;
    expressions[1].accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// magnitudeExpression: '|' expression '|'
ParsingVisitor.prototype.visitMagnitudeExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/MagnitudeExpression', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// message: IDENTIFIER
ParsingVisitor.prototype.visitMessage = function(ctx) {
    const identifier = ctx.getText();
    const message = new collections.Tree('/bali/structures/Message', this.debug);
    message.identifier = identifier;
    this.result = message;
};


// messageExpression: expression op=('.' | '<-') message '(' arguments ')'
ParsingVisitor.prototype.visitMessageExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/MessageExpression', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    tree.operator = ctx.op.text;
    ctx.message().accept(this);
    tree.addItem(this.result);
    ctx.arguments().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// moment: MOMENT
ParsingVisitor.prototype.visitMoment = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().slice(1, -1);  // remove the '<' and '>' delimiters
    const moment = new elements.Moment(value, parameters, this.debug);
    this.result = moment;
};


// name: NAME
ParsingVisitor.prototype.visitName = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().split('/').slice(1);  // extract the parts of the name
    const name = new elements.Name(value, parameters, this.debug);
    this.result = name;
};


// number:
//    'undefined' |
//    'infinity' |
//    '∞' |
//    REAL |
//    IMAGINARY |
//    '(' REAL (',' IMAGINARY | 'e^' ANGLE 'i') ')'
ParsingVisitor.prototype.visitNumber = function(ctx) {
    const parameters = this.getParameters();
    var real = ctx.REAL();
    if (real) {
        real = literalToNumber(real.getText());
    }
    var imaginary = ctx.IMAGINARY();
    if (imaginary) {
        imaginary = literalToNumber(imaginary.getText().slice(0, -1).trim());  // remove the trailing 'i'
    }
    var angle = ctx.ANGLE();
    if (angle) {
        angle = literalToNumber(angle.getText().slice(1));  // remove the leading '~'
        imaginary = new elements.Angle(angle, parameters, this.debug);
    }
    const literal = ctx.getText();
    switch (literal) {
        case 'undefined':
            real = NaN;
            break;
        case 'infinity':
        case '∞':
            real = Infinity;
            break;
    }
    this.result = new elements.Number([real, imaginary], parameters, this.debug);
};


// parameters: '(' catalog ')'
ParsingVisitor.prototype.visitParameters = function(ctx) {
    // process the catalog
    ctx.catalog().accept(this);

    // there must be at least one parameter
    if (this.result.isEmpty()) {
        const exception = new structures.Exception({
            $module: '/bali/utilities/Parser',
            $procedure: '$visitParameters',
            $exception: '$noParameters',
            $text: 'A parameter list must contain at least one association.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
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
    const pattern = new elements.Pattern(value, parameters, this.debug);
    this.result = pattern;
};


// percent: PERCENT
ParsingVisitor.prototype.visitPercent = function(ctx) {
    const parameters = this.getParameters();
    const value = literalToNumber(ctx.getText().slice(0, -1));  // remove the trailing '%'
    const percent = new elements.Percent(value, parameters, this.debug);
    this.result = percent;
};


// postClause: 'post' expression 'to' expression
ParsingVisitor.prototype.visitPostClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/PostClause', this.debug);
    const expressions = ctx.expression();
    expressions[0].accept(this);
    tree.addItem(this.result);
    expressions[1].accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// precedenceExpression: '(' expression ')'
ParsingVisitor.prototype.visitPrecedenceExpression = function(ctx) {
    const tree = new collections.Tree('/bali/structures/PrecedenceExpression', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
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
    const probability = new elements.Probability(value, parameters, this.debug);
    this.result = probability;
};


// procedure: '{' code '}'
ParsingVisitor.prototype.visitProcedure = function(ctx) {
    const parameters = this.getParameters();
    ctx.code().accept(this);
    const code = this.result;
    const procedure = new structures.Procedure(code, parameters, this.debug);
    this.result = procedure;
};


// publishClause: 'publish' expression
ParsingVisitor.prototype.visitPublishClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/PublishClause', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// range: element? '..' element?
ParsingVisitor.prototype.visitRange = function(ctx) {
    var first, last;
    const parameters = this.getParameters();
    const children = ctx.children;
    switch (children.length) {
        case 1:
            break;
        case 2:
            if (children[0].getText() === '..') {
                children[1].accept(this);
                last = this.result;
            } else {
                children[0].accept(this);
                first = this.result;
            }
            break;
        case 3:
            children[0].accept(this);
            first = this.result;
            children[2].accept(this);
            last = this.result;
            break;
    }
    const range = new structures.Range(first, last, parameters, this.debug);
    this.result = range;
};


// reference: RESOURCE
ParsingVisitor.prototype.visitReference = function(ctx) {
    const parameters = this.getParameters();
    const value = new URL(ctx.getText().slice(1, -1));  // remove the '<' and '>' delimiters
    const reference = new elements.Reference(value, parameters, this.debug);
    this.result = reference;
};


// rejectClause: 'reject' expression
ParsingVisitor.prototype.visitRejectClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/RejectClause', this.debug);
    const message = ctx.expression();
    message.accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// retrieveClause: 'retrieve' recipient 'from' expression
ParsingVisitor.prototype.visitRetrieveClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/RetrieveClause', this.debug);
    ctx.recipient().accept(this);
    tree.addItem(this.result);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// returnClause: 'return' expression?
ParsingVisitor.prototype.visitReturnClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/ReturnClause', this.debug);
    const expression = ctx.expression();
    if (expression) {
        expression.accept(this);
        tree.addItem(this.result);
    }
    this.result = tree;
};


// saveClause: 'save' expression ('as' recipient)?
ParsingVisitor.prototype.visitSaveClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/SaveClause', this.debug);
    const document = ctx.expression();
    document.accept(this);
    tree.addItem(this.result);
    const recipient = ctx.recipient();
    if (recipient) {
        recipient.accept(this);
        tree.addItem(this.result);
    }
    this.result = tree;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
ParsingVisitor.prototype.visitSelectClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/SelectClause', this.debug);
    var expressions = ctx.expression();
    const selector = expressions[0];
    expressions = expressions.slice(1);  // remove the first expression
    const blocks = ctx.block();
    const hasElseBlock = blocks.length > expressions.length;
    selector.accept(this);
    tree.addItem(this.result);
    for (var i = 0; i < expressions.length; i++) {
        expressions[i].accept(this);
        tree.addItem(this.result);
        blocks[i].accept(this);
        tree.addItem(this.result);
    }
    if (hasElseBlock) {
        blocks[blocks.length - 1].accept(this);
        tree.addItem(this.result);
    }
    this.result = tree;
};


// statement: comment | mainClause handleClause?
ParsingVisitor.prototype.visitStatement = function(ctx) {
    const tree = new collections.Tree('/bali/structures/Statement', this.debug);
    const comment = ctx.comment();
    if (comment) {
        comment.accept(this);
        tree.addItem(this.result);
    } else {
        ctx.mainClause().accept(this);
        tree.addItem(this.result);
        const handleClause = ctx.handleClause();
        if (handleClause) {
            handleClause.accept(this);
            tree.addItem(this.result);
        }
    }
    this.result = tree;
};


// symbol: SYMBOL
ParsingVisitor.prototype.visitSymbol = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().slice(1);  // remove the leading '$'
    const symbol = new elements.Symbol(value, parameters, this.debug);
    this.result = symbol;
};


// tag: TAG
ParsingVisitor.prototype.visitTag = function(ctx) {
    const parameters = this.getParameters();
    const value = ctx.getText().slice(1);  // remove the leading '#'
    const tag = new elements.Tag(value, parameters, this.debug);
    this.result = tag;
};


// text: TEXT | NARRATIVE
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
    const text = new elements.Text(value, parameters, this.debug);
    this.result = text;
};


// throwClause: 'throw' expression
ParsingVisitor.prototype.visitThrowClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/ThrowClause', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// variable: IDENTIFIER
ParsingVisitor.prototype.visitVariable = function(ctx) {
    const identifier = ctx.getText();
    const variable = new collections.Tree('/bali/structures/Variable', this.debug);
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
    }, this);
    const version = new elements.Version(value, parameters, this.debug);
    this.result = version;
};


// whileClause: 'while' expression 'do' block
ParsingVisitor.prototype.visitWhileClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/WhileClause', this.debug);
    ctx.expression().accept(this);
    tree.addItem(this.result);
    ctx.block().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
ParsingVisitor.prototype.visitWithClause = function(ctx) {
    const tree = new collections.Tree('/bali/structures/WithClause', this.debug);
    const symbol = ctx.symbol();
    if (symbol) {
        symbol.accept(this);
        tree.addItem(this.result);
    }
    ctx.expression().accept(this);
    tree.addItem(this.result);
    ctx.block().accept(this);
    tree.addItem(this.result);
    this.result = tree;
};


// CUSTOM ERROR HANDLING

// override the recover method in the lexer to fail fast
grammar.DocumentLexer.prototype.recover = function(e) {
    throw e;
};


const CustomErrorStrategy = function(debug) {
    ErrorStrategy.DefaultErrorStrategy.call(this);
    this.debug = debug || 0;
    return this;
};
CustomErrorStrategy.prototype = Object.create(ErrorStrategy.DefaultErrorStrategy.prototype);
CustomErrorStrategy.prototype.constructor = CustomErrorStrategy;


CustomErrorStrategy.prototype.reportError = function(recognizer, e) {
    recognizer.notifyErrorListeners(e.message, recognizer.getCurrentToken(), e);
};


CustomErrorStrategy.prototype.recover = function(recognizer, cause) {
    var context = recognizer._ctx;
    while (context !== null) {
        context.exception = cause;
        context = context.parentCtx;
    }
    const exception = new structures.Exception({
        $module: '/bali/utilities/Parser',
        $procedure: '$parseBDN',
        $exception: '$syntaxError',
        $text: cause.toString()
    }, cause);
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


CustomErrorStrategy.prototype.recoverInline = function(recognizer) {
    const exception = new antlr.error.InputMismatchException(recognizer);
    this.reportError(recognizer, exception);
    this.recover(recognizer, exception);
};


CustomErrorStrategy.prototype.sync = function(recognizer) {
    // ignore for efficiency
};


const CustomErrorListener = function(debug) {
    antlr.error.ErrorListener.call(this);
    this.debug = debug || 0;
    this.exactOnly = false;  // 'true' results in uninteresting ambiguities so leave 'false'
    return this;
};
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
    const exception = new structures.Exception({
        $module: '/bali/utilities/Parser',
        $procedure: '$parseBDN',
        $exception: '$syntaxError',
        $text: new elements.Text(message, undefined, this.debug)  // must be converted to text explicitly to avoid infinite loop!
    });

    // stop the processing
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


CustomErrorListener.prototype.reportAmbiguity = function(recognizer, dfa, startIndex, stopIndex, exact, alternatives, configs) {
    if (this.debug > 0) {
        const rule = getRule(recognizer, dfa);
        alternatives = [];
        configs.items.forEach(function(item) {
            alternatives.push(item.alt);
        }, this);
        alternatives = "{" + alternatives.join(", ") + "}";
        var message = 'The parser encountered ambiguous input for rule: ' + rule + ', alternatives: ' + alternatives;
        message = addContext(recognizer, message);
        console.error(message);
    }
};


CustomErrorListener.prototype.reportContextSensitivity = function(recognizer, dfa, startIndex, stopIndex, prediction, configs) {
    if (this.debug > 0) {
        const rule = getRule(recognizer, dfa);
        var message = 'The parser encountered a context sensitive rule: ' + rule;
        message = addContext(recognizer, message);
        console.error(message);
    }
};


// PRIVATE FUNCTIONS

const getRule = function(recognizer, dfa) {
    const description = dfa.decision.toString();
    const ruleIndex = dfa.atnStartState.ruleIndex;

    const ruleNames = recognizer.ruleNames;
    if (ruleIndex < 0 || ruleIndex >= ruleNames.length) {
        return description;
    }
    const ruleName = ruleNames[ruleIndex] || '<unknown>';
    return description + " (" + ruleName + ")";
};


const addContext = function(recognizer, message) {
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
    var line = '         ';
    for (var i = 0; i < lineNumber.toString.length + columnNumber; i++) {
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
};
