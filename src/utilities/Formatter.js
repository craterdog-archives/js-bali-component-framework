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
 * This library provides functions that format a parse tree structure produced
 * by the <code>Parser</code> class and generates a canonical version of
 * the corresponding Bali Document Notation™ source code string.
 */
const types = require('./Types');
const codex = require('./Codex');
const Visitor = require('./Visitor').Visitor;


// This private constant sets the POSIX end of line character
const EOL = '\n';


// PUBLIC CONSTRUCTORS

/**
 * This class implements a formatter that uses a visitor to format component structures
 * as strings containing Bali Document Notation™ in a canonical way. If an optional
 * indentation string is specified, then each line of the generated source code will be
 * indented using that string.
 * 
 * @constructor
 * @param {String} indentation A blank string that will be prepended to each indented line in
 * the source code. The default is the empty string.
 * @returns {Formatter} The new component formatter.
 */
function Formatter(indentation) {
    this.indentation = indentation || '';
    return this;
}
Formatter.prototype.constructor = Formatter;
exports.Formatter = Formatter;


// PUBLIC METHODS

/**
 * This method generates the canonical literal string for the specified element.
 * 
 * @param {Element} element The element.
 * @param {String} format An optional format to be used.
 * @returns {String} The literal string for the element.
 */
Formatter.prototype.formatLiteral = function(element, format) {
    if (!types.isLiteral(element.type)) {
        throw new Error('BUG: Attempted to format a non-element as a literal: ' + element);
    }
    const visitor = new FormattingVisitor(this.indentation, format);
    element.acceptVisitor(visitor);
    return visitor.source;
};


/**
 * This method generates the canonical source string document for the specified parse tree
 * component.
 * 
 * @param {Component} component The parse tree representing a component.
 * @returns {String} The source code document for the parse tree component.
 */
Formatter.prototype.formatComponent = function(component) {
    const visitor = new FormattingVisitor(this.indentation);
    component.acceptVisitor(visitor);
    return visitor.source;
};


// PRIVATE CLASSES

function FormattingVisitor(indentation, format) {
    Visitor.call(this);
    this.indentation = indentation;
    this.format = format;
    this.source = '';
    this.depth = 0;
    return this;
}
FormattingVisitor.prototype = Object.create(Visitor.prototype);
FormattingVisitor.prototype.constructor = FormattingVisitor;


FormattingVisitor.prototype.appendNewline = function() {
    this.source += EOL;
    this.source += this.getIndentation();
};


FormattingVisitor.prototype.getIndentation = function() {
    var indentation = this.indentation;
    for (var i = 0; i < this.depth; i++) {
        indentation += '    ';
    }
    return indentation;
};


FormattingVisitor.prototype.getFormat = function(element, key, defaultValue) {
    var format = this.format;
    const parameters = element.parameters;
    if (!format && parameters) {
        format = parameters.getValue(key, 1);
        if (format) format = format.toString();
    }
    format = format || defaultValue;
    return format;
};


// angle: ANGLE
FormattingVisitor.prototype.visitAngle = function(angle) {
    var value;
    const format = this.getFormat(angle, '$units', '$radians');
    switch (format) {
        case '$radians':
            value = angle.getRadians();
            break;
        case '$degrees':
            value = angle.getDegrees();
            break;
        default:
            throw new Error('BUG: An invalid angle format was specified: ' + format);
    }
    this.source += '~' + formatReal(value);
    if (!this.format && angle.parameters) {
        angle.parameters.acceptVisitor(this);
    }
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
FormattingVisitor.prototype.visitArithmeticExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    this.source += ' ';
    this.source += tree.operator;
    this.source += ' ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// association: component ':' expression
FormattingVisitor.prototype.visitAssociation = function(association) {
    association.key.acceptVisitor(this);
    this.source += ': ';
    association.value.acceptVisitor(this);
};


// binary: BINARY
FormattingVisitor.prototype.visitBinary = function(binary) {
    var value = binary.value;
    const format = this.getFormat(binary, '$encoding', '$base32');
    switch (format) {
        case '$base2':
            value = codex.base2Encode(value);
            break;
        case '$base16':
            value = codex.base16Encode(value);
            break;
        case '$base32':
            value = codex.base32Encode(value);
            break;
        case '$base64':
            value = codex.base64Encode(value);
            break;
        default:
            throw new Error('BUG: An invalid binary encoding format was specified: ' + format);
    }
    const indentation = this.getIndentation();
    const regex = new RegExp('\\n', 'g');
    value = value.replace(regex, EOL + indentation);  // prepend to each line the indentation
    this.source += "'" + value + "'";
    if (!this.format && binary.parameters) {
        binary.parameters.acceptVisitor(this);
    }
};


// block: '{' procedure '}'
FormattingVisitor.prototype.visitBlock = function(tree) {
    this.source += '{';
    tree.getChild(1).acceptVisitor(this);
    this.source += '}';
};


// breakClause: 'break' 'loop'
FormattingVisitor.prototype.visitBreakClause = function(tree) {
    this.source += 'break loop';
};


// catalog:
//     association (',' association)* |
//     EOL (association EOL)* |
//     ':' {empty catalog}
FormattingVisitor.prototype.visitCatalog = function(catalog) {
    this.source += '[';
    // delegate to collection
    this.visitCollection(catalog);
    this.source += ']';
    if (catalog.isParameterized()) {
        catalog.parameters.acceptVisitor(this);
    }
};


// checkoutClause: 'checkout' recipient 'from' expression
FormattingVisitor.prototype.visitCheckoutClause = function(tree) {
    this.source += 'checkout ';
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    this.source += ' from ';
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// collection: range | list | catalog
FormattingVisitor.prototype.visitCollection = function(collection) {
    if (!collection.isEmpty()) {
        const iterator = collection.getIterator();
        var item;
        // don't include the length of the parameters in the length of the combined items
        var complexity = collection.complexity;
        if (collection.parameters) complexity -= collection.parameters.complexity;
        if (types.isSimple(complexity)) {
            // inline the items
            item = iterator.getNext();
            item.acceptVisitor(this);
            while (iterator.hasNext()) {
                this.source += ', ';
                item = iterator.getNext();
                item.acceptVisitor(this);
            };
        } else {
            // each item is on a separate line
            this.depth++;
            while (iterator.hasNext()) {
                this.appendNewline();
                item = iterator.getNext();
                item.acceptVisitor(this);
            };
            this.depth--;
            this.appendNewline();
        }
    } else if (collection.type === types.CATALOG) {
        this.source += ':';  // empty catalog
    }
};


// commitClause: 'commit' expression 'to' expression
FormattingVisitor.prototype.visitCommitClause = function(tree) {
    this.source += 'commit ';
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    this.source += ' to ';
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
FormattingVisitor.prototype.visitComparisonExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    this.source += ' ';
    this.source += tree.operator;
    this.source += ' ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// complementExpression: 'not' expression
FormattingVisitor.prototype.visitComplementExpression = function(tree) {
    this.source += 'not ';
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
};


// concatenationExpression: expression '&' expression
FormattingVisitor.prototype.visitConcatenationExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    this.source += ' & ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// continueClause: 'continue' 'loop'
FormattingVisitor.prototype.visitContinueClause = function(tree) {
    this.source += 'continue loop';
};


// defaultExpression: expression '?' expression
FormattingVisitor.prototype.visitDefaultExpression = function(tree) {
    const value = tree.getChild(1);
    value.acceptVisitor(this);
    this.source += ' ? ';
    const defaultValue = tree.getChild(2);
    defaultValue.acceptVisitor(this);
};


// dereferenceExpression: '@' expression
FormattingVisitor.prototype.visitDereferenceExpression = function(tree) {
    this.source += '@';
    const reference = tree.getChild(1);
    reference.acceptVisitor(this);
};


// discardClause: 'discard' expression
FormattingVisitor.prototype.visitDiscardClause = function(tree) {
    this.source += 'discard ';
    const draft = tree.getChild(1);
    draft.acceptVisitor(this);
};


// duration: DURATION
FormattingVisitor.prototype.visitDuration = function(duration) {
    const value = duration.value.toISOString();
    this.source += '~' + value;
    if (!this.format && duration.parameters) {
        duration.parameters.acceptVisitor(this);
    }
};


// evaluateClause: (recipient ':=')? expression
FormattingVisitor.prototype.visitEvaluateClause = function(tree) {
    const size = tree.getSize();
    if (size > 1) {
        const recipient = tree.getChild(1);
        recipient.acceptVisitor(this);
        this.source += ' := ';
    }
    const expression = tree.getChild(size);
    expression.acceptVisitor(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
FormattingVisitor.prototype.visitExponentialExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    this.source += ' ^ ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// factorialExpression: expression '!'
FormattingVisitor.prototype.visitFactorialExpression = function(tree) {
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
    this.source += '!';
};


// function: IDENTIFIER
FormattingVisitor.prototype.visitFunction = function(tree) {
    this.source += tree.identifier;
};


// functionExpression: function parameters
FormattingVisitor.prototype.visitFunctionExpression = function(tree) {
    const functionName = tree.getChild(1);
    functionName.acceptVisitor(this);
    const parameters = tree.getChild(2);
    parameters.acceptVisitor(this);
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
FormattingVisitor.prototype.visitHandleClause = function(tree) {
    this.source += ' handle ';
    const exception = tree.getChild(1);
    exception.acceptVisitor(this);
    this.source += ' matching ';
    const pattern = tree.getChild(2);
    pattern.acceptVisitor(this);
    this.source += ' with ';
    const block = tree.getChild(3);
    block.acceptVisitor(this);
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
FormattingVisitor.prototype.visitIfClause = function(tree) {
    // handle first condition
    this.source += 'if ';
    var condition = tree.getChild(1);
    condition.acceptVisitor(this);
    this.source += ' then ';
    var block = tree.getChild(2);
    block.acceptVisitor(this);

    // handle optional additional conditions
    const size = tree.getSize();
    for (var i = 3; i <= size; i += 2) {
        if (i === size) {
            this.source += ' else ';
            block = tree.getChild(i);
            block.acceptVisitor(this);
        } else {
            this.source += ' else if ';
            condition = tree.getChild(i);
            condition.acceptVisitor(this);
            this.source += ' then ';
            block = tree.getChild(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// inversionExpression: ('-' | '/' | '*') expression
FormattingVisitor.prototype.visitInversionExpression = function(tree) {
    this.source += tree.operator;
    const operand = tree.getChild(1);
    // should insert a space before a negative number or another inversion
    var left = operand;
    while (true) {
        if (left.type === types.INVERSION_EXPRESSION || left.type === types.NUMBER && left.source.startsWith('-')) {
            this.source += ' ';
        }
        // check for a leaf node (i.e. an element or an identifier node
        if (!left.array || left.array.length === 0) break;
        left = left.getChild(1);
    }
    operand.acceptVisitor(this);
};


// indices: '[' list ']'
FormattingVisitor.prototype.visitIndices = function(tree) {
    const list = tree.getChild(1);
    list.acceptVisitor(this);
};


// list:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty list}
FormattingVisitor.prototype.visitList = function(list) {
    this.source += '[';
    // delegate to collection
    this.visitCollection(list);
    this.source += ']';
    if (list.isParameterized()) {
        list.parameters.acceptVisitor(this);
    }
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
FormattingVisitor.prototype.visitLogicalExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    this.source += ' ';
    this.source += tree.operator;
    this.source += ' ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// magnitudeExpression: '|' expression '|'
FormattingVisitor.prototype.visitMagnitudeExpression = function(tree) {
    this.source += '|';
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
    this.source += '|';
};


// message: IDENTIFIER
FormattingVisitor.prototype.visitMessage = function(tree) {
    this.source += tree.identifier;
};


// messageExpression: expression '.' message parameters
FormattingVisitor.prototype.visitMessageExpression = function(tree) {
    const target = tree.getChild(1);
    target.acceptVisitor(this);
    this.source += '.';
    const messageName = tree.getChild(2);
    messageName.acceptVisitor(this);
    const parameters = tree.getChild(3);
    parameters.acceptVisitor(this);
};


// moment: MOMENT
FormattingVisitor.prototype.visitMoment = function(moment) {
    const value = moment.value.format(moment.format);
    this.source += '<' + value + '>';
    if (!this.format && moment.parameters) {
        moment.parameters.acceptVisitor(this);
    }
};


// number:
//    'undefined' |
//    'infinity' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')' 
FormattingVisitor.prototype.visitNumber = function(number) {
    const format = this.getFormat(number, '$format', '$rectangular');
    if (number.isUndefined()) {
        this.source += 'undefined';
    } else if (number.isInfinite()) {
        console.log('sourceInf: ' + number.source);
        this.source += 'infinity';
    } else if (number.isZero()) {
        this.source += '0';
    } else if ((format !== '$polar' || number.real > 0) && number.imaginary === 0) {
        // we know the real part isn't zero
        console.log('source0: ' + number.source);
        this.source += formatReal(number.getReal());
    } else if (format !== '$polar' && number.real === 0) {
        // we know the imaginary part isn't zero
        console.log('source1: ' + number.source);
        this.source += formatImaginary(number.getImaginary());
    } else {
        console.log('source2: ' + number.source);
        // must be a complex number
        this.source += '(';
        switch (format) {
            case '$rectangular':
                this.source += formatReal(number.getReal());
                this.source += ', ';
                this.source += formatImaginary(number.getImaginary());
                break;
            case '$polar':
                this.source += formatReal(number.getMagnitude());
                this.source += ' e^~';
                this.source += formatImaginary(number.getPhase().value);
                break;
            default:
        }
        this.source += ')';
    }
    if (!this.format && number.parameters) {
        number.parameters.acceptVisitor(this);
    }
};


// parameters: '(' collection ')'
FormattingVisitor.prototype.visitParameters = function(parameters) {
    this.source += '(';
    // delegate to collection
    this.visitCollection(parameters.collection);
    this.source += ')';
};


// pattern: 'none' | REGEX | 'any'
FormattingVisitor.prototype.visitPattern = function(pattern) {
    const value = pattern.value.source;
    switch (value) {
        case '\u0000':
            this.source += 'none';
            break;
        case '.*':
            this.source += 'any';
            break;
        default:
            this.source += '"' + value + '"?';
    }
    if (!this.format && pattern.parameters) {
        pattern.parameters.acceptVisitor(this);
    }
};


// percent: PERCENT
FormattingVisitor.prototype.visitPercent = function(percent) {
    const value = percent.value;
    this.source += formatReal(value) + '%';
    if (!this.format && percent.parameters) {
        percent.parameters.acceptVisitor(this);
    }
};


// precedenceExpression: '(' expression ')'
FormattingVisitor.prototype.visitPrecedenceExpression = function(tree) {
    this.source += '(';
    const expression = tree.getChild(1);
    expression.acceptVisitor(this);
    this.source += ')';
};


// probability: 'false' | FRACTION | 'true'
FormattingVisitor.prototype.visitProbability = function(probability) {
    const value = probability.value;
    switch (value) {
        case 0:
            this.source += 'false';
            break;
        case 1:
            this.source += 'true';
            break;
        default:
            // must remove the leading '0' for probabilities
            this.source += value.toString().substring(1);
    }
    if (!this.format && probability.parameters) {
        probability.parameters.acceptVisitor(this);
    }
};


// procedure:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     {empty procedure}
FormattingVisitor.prototype.visitProcedure = function(tree) {
    if (!tree.isEmpty()) {
        const iterator = tree.getIterator();
        var statement;
        if (types.isSimple(tree.complexity)) {
            // inline the statements
            statement = iterator.getNext();
            statement.acceptVisitor(this);
            while (iterator.hasNext()) {
                this.source += '; ';
                statement = iterator.getNext();
                statement.acceptVisitor(this);
            }
        } else {
            // each statement is on a separate line
            this.depth++;
            while (iterator.hasNext()) {
                this.appendNewline();
                statement = iterator.getNext();
                statement.acceptVisitor(this);
            }
            this.depth--;
            this.appendNewline();
        }
    } else if (!types.isSimple(tree.complexity)) {
        this.appendNewline();
    }
};


// publishClause: 'publish' expression
FormattingVisitor.prototype.visitPublishClause = function(tree) {
    this.source += 'publish ';
    const event = tree.getChild(1);
    event.acceptVisitor(this);
};


// queue:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty queue}
FormattingVisitor.prototype.visitQueue = function(queue) {
    this.source += '[';
    // delegate to collection
    this.visitCollection(queue);
    this.source += ']';
    if (queue.isParameterized()) {
        queue.parameters.acceptVisitor(this);
    }
};


// queueClause: 'queue' expression 'on' expression
FormattingVisitor.prototype.visitQueueClause = function(tree) {
    this.source += 'queue ';
    const message = tree.getChild(1);
    message.acceptVisitor(this);
    this.source += ' on ';
    const queue = tree.getChild(2);
    queue.acceptVisitor(this);
};


// range: expression '..' expression
FormattingVisitor.prototype.visitRange = function(range) {
    this.source += '[';
    range.getFirst().acceptVisitor(this);
    this.source += '..';
    range.getLast().acceptVisitor(this);
    this.source += ']';
    if (range.isParameterized()) {
        range.parameters.acceptVisitor(this);
    }
};


// reference: RESOURCE
FormattingVisitor.prototype.visitReference = function(reference) {
    const value = reference.value.toString();
    this.source += '<' + value + '>';
    if (!this.format && reference.parameters) {
        reference.parameters.acceptVisitor(this);
    }
};


// reserved: RESERVED
FormattingVisitor.prototype.visitReserved = function(reserved) {
    const value = reserved.value;
    this.source += '$$' + value;
    if (!this.format && reserved.parameters) {
        reserved.parameters.acceptVisitor(this);
    }
};


// returnClause: 'return' expression?
FormattingVisitor.prototype.visitReturnClause = function(tree) {
    this.source += 'return';
    if (!tree.isEmpty()) {
        this.source += ' ';
        const result = tree.getChild(1);
        result.acceptVisitor(this);
    }
};


// saveClause: 'save' expression 'to' expression
FormattingVisitor.prototype.visitSaveClause = function(tree) {
    this.source += 'save ';
    const draft = tree.getChild(1);
    draft.acceptVisitor(this);
    this.source += ' to ';
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
FormattingVisitor.prototype.visitSelectClause = function(tree) {
    // handle the selection
    this.source += 'select ';
    const value = tree.getChild(1);
    value.acceptVisitor(this);
    this.source += ' from';

    // handle option blocks
    var block;
    const size = tree.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            this.source += ' else ';
            block = tree.getChild(i);
            block.acceptVisitor(this);
        } else {
            this.source += ' ';
            const option = tree.getChild(i);
            option.acceptVisitor(this);
            this.source += ' do ';
            block = tree.getChild(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// set:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty set}
FormattingVisitor.prototype.visitSet = function(set) {
    this.source += '[';
    // delegate to collection
    this.visitCollection(set);
    this.source += ']';
    if (set.isParameterized()) {
        set.parameters.acceptVisitor(this);
    }
};


// source: '{' procedure '}'
FormattingVisitor.prototype.visitSource = function(source) {
    this.source += '{';
    source.procedure.acceptVisitor(this);
    this.source += '}';
    if (source.isParameterized()) {
        source.parameters.acceptVisitor(this);
    }
};


// stack:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty stack}
FormattingVisitor.prototype.visitStack = function(stack) {
    this.source += '[';
    // delegate to collection
    this.visitCollection(stack);
    this.source += ']';
    if (stack.isParameterized()) {
        stack.parameters.acceptVisitor(this);
    }
};


// statement: mainClause handleClause*
FormattingVisitor.prototype.visitStatement = function(tree) {
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        const child = iterator.getNext();
        child.acceptVisitor(this);
    }
};


// subcomponent: variable indices
FormattingVisitor.prototype.visitSubcomponent = function(tree) {
    const variable = tree.getChild(1);
    variable.acceptVisitor(this);
    const indices = tree.getChild(2);
    indices.acceptVisitor(this);
};


// subcomponentExpression: expression indices
FormattingVisitor.prototype.visitSubcomponentExpression = function(tree) {
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    const indices = tree.getChild(2);
    indices.acceptVisitor(this);
};


// symbol: SYMBOL
FormattingVisitor.prototype.visitSymbol = function(symbol) {
    const value = symbol.value;
    this.source += '$' + value;
    if (!this.format && symbol.parameters) {
        symbol.parameters.acceptVisitor(this);
    }
};


// tag: TAG
FormattingVisitor.prototype.visitTag = function(tag) {
    const value = tag.value;
    this.source += '#' + value;
    if (!this.format && tag.parameters) {
        tag.parameters.acceptVisitor(this);
    }
};


// text: TEXT | TEXT_BLOCK
Visitor.prototype.visitText = function(text) {
    var value = text.value;
    const indentation = this.getIndentation();
    const regex = new RegExp('\\n', 'g');
    value = value.replace(regex, EOL + indentation);  // prepend to each line the indentation
    this.source += '"' + value + '"';
    if (!this.format && text.parameters) {
        text.parameters.acceptVisitor(this);
    }
};


// throwClause: 'throw' expression
FormattingVisitor.prototype.visitThrowClause = function(tree) {
    this.source += 'throw ';
    const exception = tree.getChild(1);
    exception.acceptVisitor(this);
};


// variable: IDENTIFIER
FormattingVisitor.prototype.visitVariable = function(tree) {
    this.source += tree.identifier;
};


// version: VERSION
FormattingVisitor.prototype.visitVersion = function(version) {
    const value = version.value;
    this.source += 'v' + value.join('.');  // concatentat the version levels
    if (!this.format && version.parameters) {
        version.parameters.acceptVisitor(this);
    }
};


// waitClause: 'wait' 'for' recipient 'from' expression
FormattingVisitor.prototype.visitWaitClause = function(tree) {
    this.source += 'wait for ';
    const message = tree.getChild(1);
    message.acceptVisitor(this);
    this.source += ' from ';
    const queue = tree.getChild(2);
    queue.acceptVisitor(this);
};


// whileClause: 'while' expression 'do' block
FormattingVisitor.prototype.visitWhileClause = function(tree) {
    this.source += 'while ';
    const condition = tree.getChild(1);
    condition.acceptVisitor(this);
    this.source += ' do ';
    const block = tree.getChild(2);
    block.acceptVisitor(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
FormattingVisitor.prototype.visitWithClause = function(tree) {
    const size = tree.getSize();
    this.source += 'with ';
    if (size > 2) {
        this.source += 'each ';
        const item = tree.getChild(1);
        item.acceptVisitor(this);
        this.source += ' in ';
    }
    const collection = tree.getChild(size - 1);
    collection.acceptVisitor(this);
    this.source += ' do ';
    const block = tree.getChild(size);
    block.acceptVisitor(this);
};


function formatReal(value) {
    var string = Number(value.toPrecision(14)).toString();
    switch (string) {
        case '-2.718281828459':
            return '-e';
        case '2.718281828459':
            return 'e';
        case '-3.1415926535898':
            return '-pi';
        case '3.1415926535898':
            return 'pi';
        case '-1.6180339887499':
            return '-phi';
        case '1.6180339887499':
            return 'phi';
        case 'Infinity':
        case '-Infinity':
            return 'infinity';
        case '-0':
            return '0';
        case 'NaN':
            return 'undefined';
        default:
            return value.toString().replace(/e\+?/g, 'E');  // convert to canonical exponent format
    }
}


function formatImaginary(value) {
    var literal = formatReal(value);
    switch (literal) {
        case 'undefined':
        case 'infinity':
            return literal;
        case 'e':
        case 'pi':
        case 'phi':
            return literal + ' i';
        default:
            return literal + 'i';
    }
}
