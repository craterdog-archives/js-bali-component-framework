/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://openformatted.org/licenses/MIT)          *
 ************************************************************************/
'use strict';

/**
 * This library provides functions that format a parse tree structure produced
 * by the <code>Parser</code> class and generates a canonical version of
 * the corresponding Bali Document Notation™ formatted code string.
 */
const types = require('./Types');
const codex = require('./Codex');
const Visitor = require('./Visitor').Visitor;


// This private constant sets the POSIX end of line character
const EOL = '\n';

/**
 * This constant defines the number of characters allowed in Bali Document Notation™
 * for a component before the source code can no longer be inline (on a single line).
 */
const MAXIMUM_LENGTH = 25;


// PUBLIC CONSTRUCTORS

/**
 * This class implements a formatter that uses a visitor to format component structures
 * as strings containing Bali Document Notation™ in a canonical way. If an optional
 * indentation string is specified, then each line of the generated formatted code will be
 * indented using that string.
 * 
 * @constructor
 * @param {String} indentation A blank string that will be prepended to each indented line in
 * the formatted code. The default is the empty string.
 * @returns {Formatter} The new component formatter.
 */
function Formatter(indentation) {

    // the indentation is a private attribute so methods that use it are defined in the constructor
    indentation = indentation || '';

    this.formatLiteral = function(literal, format) {
        if (!types.isLiteral(literal.getTypeId())) {
            throw new utilities.Exception({
                $module: '$Formatter',
                $function: '$formatLiteral',
                $exception: '$invalidParameter',
                $parameter: literal,
                $message: '"Attempted to format a non-literal component."'
            });
        }
        const visitor = new FormattingVisitor(indentation, false, format);
        literal.acceptVisitor(visitor);
        return visitor.result;
    };

    this.formatComponent = function(component) {
        const visitor = new FormattingVisitor(indentation, true);
        component.acceptVisitor(visitor);
        return visitor.result;
    };

    return this;
}
Formatter.prototype.constructor = Formatter;
exports.Formatter = Formatter;


// PRIVATE CLASSES

function FormattingVisitor(indentation, allowParameters, format) {
    Visitor.call(this);
    this.indentation = indentation;
    this.allowParameters = allowParameters;
    this.format = format;
    this.depth = 0;
    return this;
}
FormattingVisitor.prototype = Object.create(Visitor.prototype);
FormattingVisitor.prototype.constructor = FormattingVisitor;


FormattingVisitor.prototype.getIndentation = function() {
    var indentation = this.indentation;
    for (var i = 0; i < this.depth; i++) {
        indentation += '    ';
    }
    return indentation;
};


FormattingVisitor.prototype.getFormat = function(element, key, defaultValue) {
    // a specified format takes precedence
    var format = this.format;
    if (format) return format;
    // then any format parameters that parameterize the element
    if (this.allowParameters && element.isParameterized()) {
        format = element.getParameters().getParameter(key, 1);
        if (format) format = format.toString();
    }
    // and finally the default format
    format = format || defaultValue;
    return format;
};


// angle: ANGLE
FormattingVisitor.prototype.visitAngle = function(angle) {
    var formatted = '';
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
            throw new utilities.Exception({
                $module: '$FormattingVisitor',
                $function: '$visitAngle',
                $exception: '$invalidFormat',
                $format: format,
                $message: '"An invalid angle format was found."'
            });
    }
    formatted += '~' + formatReal(value);
    if (this.allowParameters && angle.isParameterized()) {
        angle.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
FormattingVisitor.prototype.visitArithmeticExpression = function(tree) {
    var formatted = '';
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    formatted += this.result;
    formatted += ' ';
    formatted += tree.operator;
    formatted += ' ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// association: component ':' expression
FormattingVisitor.prototype.visitAssociation = function(association) {
    var formatted = '';
    association.getKey().acceptVisitor(this);
    formatted += this.result;
    formatted += ': ';
    association.getValue().acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// binary: BINARY
FormattingVisitor.prototype.visitBinary = function(binary) {
    var formatted = '';
    var value = binary.getValue();
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
            throw new utilities.Exception({
                $module: '$FormattingVisitor',
                $function: '$visitBinary',
                $exception: '$invalidFormat',
                $format: format,
                $message: '"An invalid binary string format was found."'
            });
    }
    const indentation = this.getIndentation();
    const regex = new RegExp('\\n', 'g');
    value = value.replace(regex, EOL + indentation);  // prepend to each line the indentation
    formatted += "'" + value + "'";
    if (this.allowParameters && binary.isParameterized()) {
        binary.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// block: '{' procedure '}'
FormattingVisitor.prototype.visitBlock = function(tree) {
    var formatted = '{';
    this.allowInline = false;
    tree.getChild(1).acceptVisitor(this);
    formatted += this.result;
    formatted += '}';
    this.result = formatted;
};


// breakClause: 'break' 'loop'
FormattingVisitor.prototype.visitBreakClause = function(tree) {
    this.result = 'break loop';
};


// catalog:
//     association (',' association)* |
//     EOL (association EOL)* |
//     ':' {empty catalog}
FormattingVisitor.prototype.visitCatalog = function(catalog) {
    var formatted = '[';
    // delegate to collection
    this.visitCollection(catalog);
    formatted += this.result;
    formatted += ']';
    if (catalog.isParameterized()) {
        catalog.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// checkoutClause: 'checkout' recipient 'from' expression
FormattingVisitor.prototype.visitCheckoutClause = function(tree) {
    var formatted = 'checkout ';
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    formatted += this.result;
    formatted += ' from ';
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// collection: range | list | catalog
FormattingVisitor.prototype.visitCollection = function(collection) {
    var formatted = '';
    if (collection.getTypeId() === types.RANGE) {
        collection.getFirst().acceptVisitor(this);
        formatted += this.result;
        formatted += '..';
        collection.getLast().acceptVisitor(this);
        formatted += this.result;
    } else if (!collection.isEmpty()) {
        var length = 0;
        const items = [];

        // format each item separately first summing the total length
        const iterator = collection.getIterator();
        this.depth++;
        while (iterator.hasNext()) {
            var item = iterator.getNext();
            item.acceptVisitor(this);
            items.push(this.result);
            length += 2 + this.result.length;
        };
        length -= 2;  // remove the space for the extra separator
        this.depth--;

        // concatentate the formatted items
        if (length <= MAXIMUM_LENGTH) {
            // inline the items
            formatted += items[0];
            items.slice(1).forEach(function(item) {
                formatted += ', ' + item;
            }, this);
        } else {
            // each item is on a separate line
            this.depth++;
            items.forEach(function(item) {
                formatted += EOL + this.getIndentation() + item;
            }, this);
            this.depth--;
            formatted += EOL + this.getIndentation();
        }
    } else if (collection.getTypeId() === types.CATALOG) {
        formatted += ':';  // empty catalog
    }
    this.result = formatted;
};


// commitClause: 'commit' expression 'to' expression
FormattingVisitor.prototype.visitCommitClause = function(tree) {
    var formatted = 'commit ';
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    formatted += this.result;
    formatted += ' to ';
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
FormattingVisitor.prototype.visitComparisonExpression = function(tree) {
    var formatted = '';
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    formatted += this.result;
    formatted += ' ' + tree.operator + ' ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// complementExpression: 'not' expression
FormattingVisitor.prototype.visitComplementExpression = function(tree) {
    var formatted = 'not ';
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// concatenationExpression: expression '&' expression
FormattingVisitor.prototype.visitConcatenationExpression = function(tree) {
    var formatted = '';
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    formatted += this.result;
    formatted += ' & ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// continueClause: 'continue' 'loop'
FormattingVisitor.prototype.visitContinueClause = function(tree) {
    this.result = 'continue loop';
};


// defaultExpression: expression '?' expression
FormattingVisitor.prototype.visitDefaultExpression = function(tree) {
    var formatted = '';
    const value = tree.getChild(1);
    value.acceptVisitor(this);
    formatted += this.result;
    formatted += ' ? ';
    const defaultValue = tree.getChild(2);
    defaultValue.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// dereferenceExpression: '@' expression
FormattingVisitor.prototype.visitDereferenceExpression = function(tree) {
    var formatted = '@';
    const reference = tree.getChild(1);
    reference.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// discardClause: 'discard' expression
FormattingVisitor.prototype.visitDiscardClause = function(tree) {
    var formatted = 'discard ';
    const draft = tree.getChild(1);
    draft.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// duration: DURATION
FormattingVisitor.prototype.visitDuration = function(duration) {
    var formatted = '';
    const value = duration.getValue().toISOString();
    formatted += '~' + value;
    if (this.allowParameters && duration.isParameterized()) {
        duration.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// evaluateClause: (recipient ':=')? expression
FormattingVisitor.prototype.visitEvaluateClause = function(tree) {
    var formatted = '';
    const size = tree.getSize();
    if (size > 1) {
        const recipient = tree.getChild(1);
        recipient.acceptVisitor(this);
        formatted += this.result;
        formatted += ' := ';
    }
    const expression = tree.getChild(size);
    expression.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// exponentialExpression: <assoc=right> expression '^' expression
FormattingVisitor.prototype.visitExponentialExpression = function(tree) {
    var formatted = '';
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    formatted += this.result;
    formatted += ' ^ ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// factorialExpression: expression '!'
FormattingVisitor.prototype.visitFactorialExpression = function(tree) {
    var formatted = '';
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
    formatted += this.result;
    formatted += '!';
    this.result = formatted;
};


// function: IDENTIFIER
FormattingVisitor.prototype.visitFunction = function(tree) {
    this.result = tree.identifier;
};


// functionExpression: function parameters
FormattingVisitor.prototype.visitFunctionExpression = function(tree) {
    var formatted = '';
    const functionName = tree.getChild(1);
    functionName.acceptVisitor(this);
    formatted += this.result;
    const parameters = tree.getChild(2);
    parameters.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
FormattingVisitor.prototype.visitHandleClause = function(tree) {
    var formatted = ' handle ';
    const exception = tree.getChild(1);
    exception.acceptVisitor(this);
    formatted += this.result;
    formatted += ' matching ';
    const pattern = tree.getChild(2);
    pattern.acceptVisitor(this);
    formatted += this.result;
    formatted += ' with ';
    const block = tree.getChild(3);
    block.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
FormattingVisitor.prototype.visitIfClause = function(tree) {
    // handle first condition
    var formatted = 'if ';
    var condition = tree.getChild(1);
    condition.acceptVisitor(this);
    formatted += this.result;
    formatted += ' then ';
    var block = tree.getChild(2);
    block.acceptVisitor(this);
    formatted += this.result;

    // handle optional additional conditions
    const size = tree.getSize();
    for (var i = 3; i <= size; i += 2) {
        if (i === size) {
            formatted += ' else ';
            block = tree.getChild(i);
            block.acceptVisitor(this);
            formatted += this.result;
        } else {
            formatted += ' else if ';
            condition = tree.getChild(i);
            condition.acceptVisitor(this);
            formatted += this.result;
            formatted += ' then ';
            block = tree.getChild(i + 1);
            block.acceptVisitor(this);
            formatted += this.result;
        }
    }
    this.result = formatted;
};


// inversionExpression: ('-' | '/' | '*') expression
FormattingVisitor.prototype.visitInversionExpression = function(tree) {
    var formatted = tree.operator;
    const operand = tree.getChild(1);
    // should insert a space before a negative number or another inversion
    var left = operand;
    while (true) {
        if (left.getTypeId() === types.INVERSION_EXPRESSION || left.getTypeId() === types.NUMBER && left.getReal().toString().startsWith('-')) {
            formatted += ' ';
        }
        // check for a leaf node (i.e. an element or an identifier node
        if (!left.array || left.array.length === 0) break;
        left = left.getChild(1);
    }
    operand.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
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
    var formatted = '[';
    // delegate to collection
    this.visitCollection(list);
    formatted += this.result;
    formatted += ']';
    if (list.isParameterized()) {
        list.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
FormattingVisitor.prototype.visitLogicalExpression = function(tree) {
    var formatted = '';
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    formatted += this.result;
    formatted += ' ' + tree.operator + ' ';
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// magnitudeExpression: '|' expression '|'
FormattingVisitor.prototype.visitMagnitudeExpression = function(tree) {
    var formatted = '|';
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
    formatted += this.result;
    formatted += '|';
    this.result = formatted;
};


// message: IDENTIFIER
FormattingVisitor.prototype.visitMessage = function(tree) {
    this.result = tree.identifier;
};


// messageExpression: expression '.' message parameters
FormattingVisitor.prototype.visitMessageExpression = function(tree) {
    var formatted = '';
    const target = tree.getChild(1);
    target.acceptVisitor(this);
    formatted += this.result;
    formatted += '.';
    const messageName = tree.getChild(2);
    messageName.acceptVisitor(this);
    formatted += this.result;
    const parameters = tree.getChild(3);
    parameters.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// moment: MOMENT
FormattingVisitor.prototype.visitMoment = function(moment) {
    var formatted = '';
    const value = moment.getValue().format(moment.getFormat());
    formatted += '<' + value + '>';
    if (this.allowParameters && moment.isParameterized()) {
        moment.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// number:
//    'undefined' |
//    'infinity' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')' 
FormattingVisitor.prototype.visitNumber = function(number) {
    var formatted = '';
    const format = this.getFormat(number, '$format', '$rectangular');
    if (number.isUndefined()) {
        formatted += 'undefined';
    } else if (number.isInfinite()) {
        formatted += 'infinity';
    } else if (number.isZero()) {
        formatted += '0';
    } else if ((format !== '$polar' || number.getReal() > 0) && number.getImaginary() === 0) {
        // we know the real part isn't zero
        formatted += formatReal(number.getReal());
    } else if (format !== '$polar' && number.getReal() === 0) {
        // we know the imaginary part isn't zero
        formatted += formatImaginary(number.getImaginary());
    } else {
        // must be a complex number
        formatted += '(';
        switch (format) {
            case '$rectangular':
                formatted += formatReal(number.getReal());
                formatted += ', ';
                formatted += formatImaginary(number.getImaginary());
                break;
            case '$polar':
                formatted += formatReal(number.getMagnitude());
                formatted += ' e^~';
                formatted += formatImaginary(number.getPhase().getValue());
                break;
            default:
        }
        formatted += ')';
    }
    if (this.allowParameters && number.isParameterized()) {
        number.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// parameters: '(' collection ')'
FormattingVisitor.prototype.visitParameters = function(parameters) {
    var formatted = '(';
    // delegate to collection
    this.visitCollection(parameters.getCollection());
    formatted += this.result;
    formatted += ')';
    this.result = formatted;
};


// pattern: 'none' | REGEX | 'any'
FormattingVisitor.prototype.visitPattern = function(pattern) {
    var formatted = '';
    const value = pattern.getValue().source;
    switch (value) {
        case '^none$':
            formatted += 'none';
            break;
        case '.*':
            formatted += 'any';
            break;
        default:
            formatted += '"' + value + '"?';
    }
    if (this.allowParameters && pattern.isParameterized()) {
        pattern.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// percent: PERCENT
FormattingVisitor.prototype.visitPercent = function(percent) {
    var formatted = '';
    const value = percent.getValue();
    formatted += formatReal(value) + '%';
    if (this.allowParameters && percent.isParameterized()) {
        percent.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// precedenceExpression: '(' expression ')'
FormattingVisitor.prototype.visitPrecedenceExpression = function(tree) {
    var formatted = '(';
    const expression = tree.getChild(1);
    expression.acceptVisitor(this);
    formatted += this.result;
    formatted += ')';
    this.result = formatted;
};


// probability: 'false' | FRACTION | 'true'
FormattingVisitor.prototype.visitProbability = function(probability) {
    var formatted = '';
    const value = probability.getValue();
    switch (value) {
        case 0:
            formatted += 'false';
            break;
        case 1:
            formatted += 'true';
            break;
        default:
            // must remove the leading '0' for probabilities
            formatted += value.toString().substring(1);
    }
    if (this.allowParameters && probability.isParameterized()) {
        probability.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// procedure:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     {empty procedure}
FormattingVisitor.prototype.visitProcedure = function(tree) {
    var formatted = '';
    var length = 0;
    const statements = [];

    // format each item separately first summing the total length
    const iterator = tree.getIterator();
    this.depth++;
    while (iterator.hasNext()) {
        var statement = iterator.getNext();
        statement.acceptVisitor(this);
        statements.push(this.result);
        length += 2 + this.result.length;
    };
    length -= 2;  // remove the space for the extra separator
    this.depth--;

    // concatentate the formatted items
    if (this.allowInline && length <= MAXIMUM_LENGTH) {
        // inline the statements
        if (statements.length > 0) formatted += statements[0];
        statements.slice(1).forEach(function(statement) {
            formatted += '; ' + statement;
        }, this);
    } else {
        // each statement is on a separate line
        this.depth++;
        statements.forEach(function(statement) {
            formatted += EOL + this.getIndentation() + statement;
        }, this);
        this.depth--;
        formatted += EOL + this.getIndentation();
    }
    this.result = formatted;
};


// publishClause: 'publish' expression
FormattingVisitor.prototype.visitPublishClause = function(tree) {
    var formatted = 'publish ';
    const event = tree.getChild(1);
    event.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// queue:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty queue}
FormattingVisitor.prototype.visitQueue = function(queue) {
    var formatted = '[';
    // delegate to collection
    this.visitCollection(queue);
    formatted += this.result;
    formatted += ']';
    if (queue.isParameterized()) {
        queue.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// queueClause: 'queue' expression 'on' expression
FormattingVisitor.prototype.visitQueueClause = function(tree) {
    var formatted = 'queue ';
    const message = tree.getChild(1);
    message.acceptVisitor(this);
    formatted += this.result;
    formatted += ' on ';
    const queue = tree.getChild(2);
    queue.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// range: expression '..' expression
FormattingVisitor.prototype.visitRange = function(range) {
    var formatted = '[';
    range.getFirst().acceptVisitor(this);
    formatted += this.result;
    formatted += '..';
    range.getLast().acceptVisitor(this);
    formatted += this.result;
    formatted += ']';
    if (range.isParameterized()) {
        range.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// reference: RESOURCE
FormattingVisitor.prototype.visitReference = function(reference) {
    var formatted = '';
    const value = reference.getValue().toString();
    formatted += '<' + value + '>';
    if (this.allowParameters && reference.isParameterized()) {
        reference.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// reserved: RESERVED
FormattingVisitor.prototype.visitReserved = function(reserved) {
    var formatted = '';
    const value = reserved.getValue();
    formatted += '$$' + value;
    if (this.allowParameters && reserved.isParameterized()) {
        reserved.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// returnClause: 'return' expression?
FormattingVisitor.prototype.visitReturnClause = function(tree) {
    var formatted = 'return';
    if (!tree.isEmpty()) {
        formatted += ' ';
        const result = tree.getChild(1);
        result.acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// saveClause: 'save' expression 'to' expression
FormattingVisitor.prototype.visitSaveClause = function(tree) {
    var formatted = 'save ';
    const draft = tree.getChild(1);
    draft.acceptVisitor(this);
    formatted += this.result;
    formatted += ' to ';
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
FormattingVisitor.prototype.visitSelectClause = function(tree) {
    // handle the selection
    var formatted = 'select ';
    const value = tree.getChild(1);
    value.acceptVisitor(this);
    formatted += this.result;
    formatted += ' from';

    // handle option blocks
    var block;
    const size = tree.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            formatted += ' else ';
            block = tree.getChild(i);
            block.acceptVisitor(this);
            formatted += this.result;
        } else {
            formatted += ' ';
            const option = tree.getChild(i);
            option.acceptVisitor(this);
            formatted += this.result;
            formatted += ' do ';
            block = tree.getChild(i + 1);
            block.acceptVisitor(this);
            formatted += this.result;
        }
    }
    this.result = formatted;
};


// set:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty set}
FormattingVisitor.prototype.visitSet = function(set) {
    var formatted = '[';
    // delegate to collection
    this.visitCollection(set);
    formatted += this.result;
    formatted += ']';
    if (set.isParameterized()) {
        set.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// formatted: '{' procedure '}'
FormattingVisitor.prototype.visitSource = function(source) {
    var formatted = '{';
    this.allowInline = true;
    source.getProcedure().acceptVisitor(this);
    formatted += this.result;
    formatted += '}';
    if (source.isParameterized()) {
        source.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// stack:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty stack}
FormattingVisitor.prototype.visitStack = function(stack) {
    var formatted = '[';
    // delegate to collection
    this.visitCollection(stack);
    formatted += this.result;
    formatted += ']';
    if (stack.isParameterized()) {
        stack.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// statement: mainClause handleClause*
FormattingVisitor.prototype.visitStatement = function(tree) {
    var formatted = '';
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        const child = iterator.getNext();
        child.acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// subcomponent: variable indices
FormattingVisitor.prototype.visitSubcomponent = function(tree) {
    var formatted = '';
    const variable = tree.getChild(1);
    variable.acceptVisitor(this);
    formatted += this.result;
    const indices = tree.getChild(2);
    indices.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// subcomponentExpression: expression indices
FormattingVisitor.prototype.visitSubcomponentExpression = function(tree) {
    var formatted = '';
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    formatted += this.result;
    const indices = tree.getChild(2);
    indices.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// symbol: SYMBOL
FormattingVisitor.prototype.visitSymbol = function(symbol) {
    var formatted = '';
    const value = symbol.getValue();
    formatted += '$' + value;
    if (this.allowParameters && symbol.isParameterized()) {
        symbol.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// tag: TAG
FormattingVisitor.prototype.visitTag = function(tag) {
    var formatted = '';
    const value = tag.getValue();
    formatted += '#' + value;
    if (this.allowParameters && tag.isParameterized()) {
        tag.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// text: TEXT | TEXT_BLOCK
FormattingVisitor.prototype.visitText = function(text) {
    var formatted = '';
    var value = text.getValue();
    const indentation = this.getIndentation();
    const regex = new RegExp('\\n', 'g');
    value = value.replace(regex, EOL + indentation);  // prepend to each line the indentation
    formatted += '"' + value + '"';
    if (this.allowParameters && text.isParameterized()) {
        text.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// throwClause: 'throw' expression
FormattingVisitor.prototype.visitThrowClause = function(tree) {
    var formatted = 'throw ';
    const exception = tree.getChild(1);
    exception.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// variable: IDENTIFIER
FormattingVisitor.prototype.visitVariable = function(tree) {
    this.result = tree.identifier;
};


// version: VERSION
FormattingVisitor.prototype.visitVersion = function(version) {
    var formatted = '';
    const value = version.getValue();
    formatted += 'v' + value.join('.');  // concatentat the version levels
    if (this.allowParameters && version.isParameterized()) {
        version.getParameters().acceptVisitor(this);
        formatted += this.result;
    }
    this.result = formatted;
};


// waitClause: 'wait' 'for' recipient 'from' expression
FormattingVisitor.prototype.visitWaitClause = function(tree) {
    var formatted = 'wait for ';
    const message = tree.getChild(1);
    message.acceptVisitor(this);
    formatted += this.result;
    formatted += ' from ';
    const queue = tree.getChild(2);
    queue.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// whileClause: 'while' expression 'do' block
FormattingVisitor.prototype.visitWhileClause = function(tree) {
    var formatted = 'while ';
    const condition = tree.getChild(1);
    condition.acceptVisitor(this);
    formatted += this.result;
    formatted += ' do ';
    const block = tree.getChild(2);
    block.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
FormattingVisitor.prototype.visitWithClause = function(tree) {
    var formatted = 'with ';
    const size = tree.getSize();
    if (size > 2) {
        formatted += 'each ';
        const item = tree.getChild(1);
        item.acceptVisitor(this);
        formatted += this.result;
        formatted += ' in ';
    }
    const collection = tree.getChild(size - 1);
    collection.acceptVisitor(this);
    formatted += this.result;
    formatted += ' do ';
    const block = tree.getChild(size);
    block.acceptVisitor(this);
    formatted += this.result;
    this.result = formatted;
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
