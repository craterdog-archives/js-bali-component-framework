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
 * This class implements a formatter object that uses a visitor to format, in
 * a canonical way, components as strings containing Bali Document Notation™.
 */
const Decoder = require('./Decoder').Decoder;
const Validator = require('./Validator').Validator;
const Visitor = require('../abstractions/Visitor').Visitor;
const Exception = require('../composites/Exception').Exception;


// This private constant sets the POSIX end of line character
const EOL = '\n';

/**
 * This constant defines the number of characters allowed in Bali Document Notation™
 * for a component before the source code can no longer be inline (on a single line).
 */
const MAXIMUM_LENGTH = 25;


// PUBLIC FUNCTIONS

/**
 * This function creates a new formatter object that can be used to format components.
 *
 * @param {Number} indentation The number of levels of indentation that should be inserted
 * to each formatted line at the top level. The default is zero.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Formatter} The new component formatter.
 */
const Formatter = function(indentation, debug) {
    debug = debug || 0;
    if (debug > 1) {
        const validator = new Validator(debug);
        validator.validateType('/bali/agents/Formatter', '$formatComponent', '$indentation', indentation, [
            '/javascript/Undefined',
            '/javascript/Number'
        ]);
    }

    // the indentation is a private attribute so methods that use it are defined in the constructor
    indentation = indentation || 0;

    this.formatComponent = function(component) {
        if (debug > 1) {
            const validator = new Validator(debug);
            validator.validateType('/bali/agents/Formatter', '$formatComponent', '$component', component, [
                '/bali/abstractions/Component'
            ]);
        }
        const visitor = new FormattingVisitor(indentation, debug);
        component.acceptVisitor(visitor);
        return visitor.result;
    };

    return this;
};
Formatter.prototype.constructor = Formatter;
exports.Formatter = Formatter;


// PRIVATE CLASSES

const FormattingVisitor = function(indentation, debug) {
    Visitor.call(this, debug);
    this.indentation = indentation || 0;
    this.debug = debug || 0;
    this.depth = 0;
    this.inline = 0;
    this.result = '';

    this.getNewline = function() {
        var separator = EOL;
        const levels = this.depth + indentation;
        for (var i = 0; i < levels; i++) {
            separator += '    ';
        }
        return separator;
    };

    this.getFormat = function(element, key, defaultValue) {
        var format;
        if (element.isParameterized()) {
            format = element.getParameter(key);
            if (format) format = format.toString();
        }
        format = format || defaultValue;
        return format;
    };

    this.formatNote = function(component) {
        const note = component.note;
        if (note) this.result += '  ' + note;
    };

    return this;
};
FormattingVisitor.prototype = Object.create(Visitor.prototype);
FormattingVisitor.prototype.constructor = FormattingVisitor;


// acceptClause: 'accept' expression
FormattingVisitor.prototype.visitAcceptClause = function(node) {
    this.result += 'accept ';
    const message = node.getItem(1);
    message.acceptVisitor(this);
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
            const exception = new Exception({
                $module: '/bali/agents/Formatter',
                $procedure: '$visitAngle',
                $exception: '$invalidFormat',
                $format: format,
                $type: angle.getType(),
                $value: angle.getValue(),
                $text: 'An invalid angle format was specified.'
            });
            throw exception;
    }
    this.result += '~' + formatReal(value);
    const parameters = angle.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(angle);
};


// arguments:
//     expression (',' expression)* |
//     /* no expressions */
FormattingVisitor.prototype.visitArguments = function(node) {
    this.inline++;
    if (!node.isEmpty()) {
        this.depth++;
        var count = 0;
        const iterator = node.getIterator();
        while (iterator.hasNext()) {
            if (this.inline) {
                if (count++) this.result += ', ';  // only after the first item has been formatted
            } else {
                this.result += this.getNewline();
            }
            const item = iterator.getNext();
            item.acceptVisitor(this);
        }
        this.depth--;
        if (!this.inline) this.result += this.getNewline();
    }
    this.inline--;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
FormattingVisitor.prototype.visitArithmeticExpression = function(node) {
    this.inline++;
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' ';
    this.result += node.operator;
    this.result += ' ';
    operand = node.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// association: element ':' expression
FormattingVisitor.prototype.visitAssociation = function(association) {
    association.getKey().acceptVisitor(this);
    this.result += ': ';
    association.getValue().acceptVisitor(this);
};


// attribute: variable '[' indices ']'
FormattingVisitor.prototype.visitAttribute = function(node) {
    const variable = node.getItem(1);
    variable.acceptVisitor(this);
    this.result += '[';
    const indices = node.getItem(2);
    indices.acceptVisitor(this);
    this.result += ']';
};


// attributeExpression: expression '[' indices ']'
FormattingVisitor.prototype.visitAttributeExpression = function(node) {
    this.inline++;
    const expression = node.getItem(1);
    expression.acceptVisitor(this);
    this.result += '[';
    const indices = node.getItem(2);
    indices.acceptVisitor(this);
    this.result += ']';
    this.inline--;
};


// binary: BINARY
FormattingVisitor.prototype.visitBinary = function(binary) {
    var value = binary.getValue();
    const format = this.getFormat(binary, '$encoding', '$base32');
    const decoder = new Decoder(0, this.debug);
    switch (format) {
        case '$base2':
            value = decoder.base2Encode(value);
            break;
        case '$base16':
            value = decoder.base16Encode(value);
            break;
        case '$base32':
            value = decoder.base32Encode(value);
            break;
        case '$base64':
            value = decoder.base64Encode(value);
            break;
        default:
            const exception = new Exception({
                $module: '/bali/agents/Formatter',
                $procedure: '$visitBinary',
                $exception: '$invalidFormat',
                $format: format,
                $text: 'An invalid binary string format was specified.'
            });
            throw exception;
    }
    this.depth++;
    const separator = this.getNewline();
    const regex = new RegExp('\\n', 'g');
    value = value.replace(regex, separator);  // indent each line
    value = "'" + value + "'";
    value = value.replace(/    '/, "'");  // unindent last line
    this.depth--;
    this.result += value;
    const parameters = binary.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(binary);
};


// block: '{' code '}'
FormattingVisitor.prototype.visitBlock = function(node) {
    this.result += '{';
    const code = node.getItem(1);
    code.acceptVisitor(this);
    this.result += '}';
};


// boolean: 'false' | 'true'
FormattingVisitor.prototype.visitBoolean = function(boolean) {
    const value = boolean.getValue();
    this.result += value.toString();  // javascript toString()
    const parameters = boolean.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(boolean);
};


// breakClause: 'break' 'loop'
FormattingVisitor.prototype.visitBreakClause = function(node) {
    this.result += 'break loop';
};


// checkoutClause: 'checkout' ('level' expression 'of')? recipient 'from' expression
FormattingVisitor.prototype.visitCheckoutClause = function(node) {
    this.result += 'checkout ';
    var index = 1;
    if (node.getSize() === 3) {
        this.result += 'level ';
        const level = node.getItem(index++);
        level.acceptVisitor(this);
        this.result += ' of ';
    }
    const recipient = node.getItem(index++);
    recipient.acceptVisitor(this);
    this.result += ' from ';
    const name = node.getItem(index);
    name.acceptVisitor(this);
};


// code:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     /* no statements */
FormattingVisitor.prototype.visitCode = function(node) {
    this.depth++;
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        this.result += this.getNewline();
        const statement = iterator.getNext();
        statement.acceptVisitor(this);
    }
    this.depth--;
    this.result += this.getNewline();
};


// collection: range | list | catalog
FormattingVisitor.prototype.visitCollection = function(collection) {
    this.result += '[';
    if (collection.getType() === '/bali/collections/Range') {
        const first = collection.getFirst();
        if (first !== undefined) {
            first.acceptVisitor(this);
        }
        this.result += collection.getConnector();
        const last = collection.getLast();
        if (last !== undefined) {
            last.acceptVisitor(this);
        }
    } else if (collection.isEmpty()) {
        this.result += collection.isType('/bali/collections/Catalog') ? ':' : ' ';
    } else {
        this.depth++;
        var count = 0;
        const iterator = collection.getIterator();
        while (iterator.hasNext()) {
            if (this.inline) {
                if (count++) this.result += ', ';  // only after the first item has been formatted
            } else {
                this.result += this.getNewline();
            }
            const item = iterator.getNext();
            item.acceptVisitor(this);
        }
        this.depth--;
        if (!this.inline) this.result += this.getNewline();
    }
    this.result += ']';
    const parameters = collection.getParameters();
    this.visitParameters(parameters);  // then format any parameterization
    this.formatNote(collection);
};


// comment: NOTE | COMMENT
FormattingVisitor.prototype.visitComment = function(node) {
    this.result += node.text;
}


// comparisonExpression: expression ('<' | '=' | '>' | 'IS' | 'MATCHES') expression
FormattingVisitor.prototype.visitComparisonExpression = function(node) {
    this.inline++;
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' ' + node.operator + ' ';
    operand = node.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// complementExpression: 'NOT' expression
FormattingVisitor.prototype.visitComplementExpression = function(node) {
    this.inline++;
    this.result += 'NOT ';
    const operand = node.getItem(1);
    operand.acceptVisitor(this);
    this.inline--;
};


// concatenationExpression: expression '&' expression
FormattingVisitor.prototype.visitConcatenationExpression = function(node) {
    this.inline++;
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' & ';
    operand = node.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// continueClause: 'continue' 'loop'
FormattingVisitor.prototype.visitContinueClause = function(node) {
    this.result += 'continue loop';
};


// defaultExpression: expression '?' expression
FormattingVisitor.prototype.visitDefaultExpression = function(node) {
    this.inline++;
    const value = node.getItem(1);
    value.acceptVisitor(this);
    this.result += ' ? ';
    const defaultValue = node.getItem(2);
    defaultValue.acceptVisitor(this);
    this.inline--;
};


// dereferenceExpression: '@' expression
FormattingVisitor.prototype.visitDereferenceExpression = function(node) {
    this.inline++;
    this.result += '@';
    const reference = node.getItem(1);
    reference.acceptVisitor(this);
    this.inline--;
};


// discardClause: 'discard' expression
FormattingVisitor.prototype.visitDiscardClause = function(node) {
    this.result += 'discard ';
    const document = node.getItem(1);
    document.acceptVisitor(this);
};


// duration: DURATION
FormattingVisitor.prototype.visitDuration = function(duration) {
    const value = duration.getTime().toISOString();
    this.result += '~' + value;
    const parameters = duration.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(duration);
};


// evaluateClause: (recipient (':=' | '+=' | '-=' | '*='))? expression
FormattingVisitor.prototype.visitEvaluateClause = function(node) {
    const size = node.getSize();
    if (size > 1) {
        const recipient = node.getItem(1);
        recipient.acceptVisitor(this);
        this.result += ' ';
        this.result += node.operator;
        this.result += ' ';
    }
    const expression = node.getItem(size);
    expression.acceptVisitor(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
FormattingVisitor.prototype.visitExponentialExpression = function(node) {
    this.inline++;
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' ^ ';
    operand = node.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// factorialExpression: expression '!'
FormattingVisitor.prototype.visitFactorialExpression = function(node) {
    this.inline++;
    const operand = node.getItem(1);
    operand.acceptVisitor(this);
    this.result += '!';
    this.inline--;
};


// function: IDENTIFIER
FormattingVisitor.prototype.visitFunction = function(node) {
    this.result += node.identifier;
};


// functionExpression: function '(' arguments ')'
FormattingVisitor.prototype.visitFunctionExpression = function(node) {
    this.inline++;
    const functionName = node.getItem(1);
    functionName.acceptVisitor(this);
    this.result += '(';
    const args = node.getItem(2);
    args.acceptVisitor(this);
    this.result += ')';
    this.inline--;
};


// handleClause: 'handle' symbol (('with' block) | ('matching' expression 'with' block)+);
FormattingVisitor.prototype.visitHandleClause = function(node) {
    const iterator = node.getIterator();

    // handle symbol
    this.result += ' handle ';
    var symbol = iterator.getNext();
    symbol.acceptVisitor(this);

    if (node.getSize() === 2) {
        // handle default ('matching any') with block
        this.result += ' with ';
        const block = iterator.getNext();
        block.acceptVisitor(this);
    } else {
        // handle matching pattern with blocks
        while (iterator.hasNext()) {
            this.result += ' matching ';
            const pattern = iterator.getNext();
            pattern.acceptVisitor(this);
            this.result += ' with ';
            const block = iterator.getNext();
            block.acceptVisitor(this);
        }
    }
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
FormattingVisitor.prototype.visitIfClause = function(node) {
    // handle first condition
    this.result += 'if ';
    var condition = node.getItem(1);
    condition.acceptVisitor(this);
    this.result += ' then ';
    var block = node.getItem(2);
    block.acceptVisitor(this);

    // handle optional additional conditions
    const size = node.getSize();
    for (var i = 3; i <= size; i += 2) {
        if (i === size) {
            this.result += ' else ';
            block = node.getItem(i);
            block.acceptVisitor(this);
        } else {
            this.result += ' else if ';
            condition = node.getItem(i);
            condition.acceptVisitor(this);
            this.result += ' then ';
            block = node.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// indices: expression (',' expression)*
FormattingVisitor.prototype.visitIndices = function(node) {
    this.inline++;
    this.depth++;
    var count = 0;
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        if (this.inline) {
            if (count++) this.result += ', ';  // only after the first item has been formatted
        } else {
            this.result += this.getNewline();
        }
        const item = iterator.getNext();
        item.acceptVisitor(this);
    }
    this.depth--;
    if (!this.inline) this.result += this.getNewline();
    this.inline--;
};


// inversionExpression: ('-' | '/' | '*') expression
FormattingVisitor.prototype.visitInversionExpression = function(node) {
    this.inline++;
    this.result += node.operator;
    const operand = node.getItem(1);
    operand.acceptVisitor(this);
    this.inline--;
};


// logicalExpression: expression ('AND' | 'SANS' | 'XOR' | 'OR') expression
FormattingVisitor.prototype.visitLogicalExpression = function(node) {
    this.inline++;
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' ' + node.operator + ' ';
    operand = node.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// magnitudeExpression: '|' expression '|'
FormattingVisitor.prototype.visitMagnitudeExpression = function(node) {
    this.inline++;
    this.result += '|';
    const operand = node.getItem(1);
    operand.acceptVisitor(this);
    this.result += '|';
    this.inline--;
};


// message: IDENTIFIER
FormattingVisitor.prototype.visitMessage = function(node) {
    this.result += node.identifier;
};


// messageExpression: expression ('.' | '<-') message '(' arguments ')'
FormattingVisitor.prototype.visitMessageExpression = function(node) {
    this.inline++;
    const target = node.getItem(1);
    target.acceptVisitor(this);
    this.result += node.operator;
    const messageName = node.getItem(2);
    messageName.acceptVisitor(this);
    this.result += '(';
    const args = node.getItem(3);
    args.acceptVisitor(this);
    this.result += ')';
    this.inline--;
};


// moment: MOMENT
FormattingVisitor.prototype.visitMoment = function(moment) {
    const value = moment.getTimestamp().format(moment.getFormat());
    this.result += '<' + value + '>';
    const parameters = moment.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(moment);
};


// name: NAME
FormattingVisitor.prototype.visitName = function(name) {
    const value = name.getValue();
    this.result += '/' + value.join('/');  // concatentat the parts of the name
    const parameters = name.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(name);
};


// number:
//    'undefined' |
//    'infinity' |
//    '∞' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')'
FormattingVisitor.prototype.visitNumber = function(number) {
    const isPolar = number.isPolar;
    if (number.isUndefined()) {
        this.result += 'undefined';
    } else if (number.isInfinite()) {
        this.result += '∞';
    } else if (number.isZero()) {
        this.result += '0';
    } else if (number.getReal() !== 0 && number.getImaginary() === 0) {
        // it is a pure real number
        this.result += formatReal(number.getReal());
    } else if (number.getReal() === 0 && number.getImaginary() !== 0) {
        // it is a pure imaginary number
        this.result += formatImaginary(number.getImaginary());
    } else {
        // must be a complex number
        this.result += '(';
        if (isPolar) {
            this.result += formatReal(number.getMagnitude());
            this.result += ' e^~';
            this.result += formatImaginary(number.getPhase().getValue());
        } else {
            this.result += formatReal(number.getReal());
            this.result += ', ';
            this.result += formatImaginary(number.getImaginary());
        }
        this.result += ')';
    }
    const parameters = number.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(number);
};


// parameters: '(' catalog ')'
FormattingVisitor.prototype.visitParameters = function(parameters) {
    if (parameters) {
        const keys = parameters.getKeys();
        // inline if only one parameter
        if (keys.getSize() < 2) this.inline++;
        this.result += '(';
        this.depth++;
        var count = 0;
        const iterator = keys.getIterator();
        while (iterator.hasNext()) {
            const key = iterator.getNext();
            if (this.inline) {
                if (count++) this.result += ', ';  // only after the first item has been formatted
            } else {
                this.result += this.getNewline();
            }
            this.result += key + ': ';
            const value = parameters.getAttribute(key);
            value.acceptVisitor(this);
        }
        this.depth--;
        if (!this.inline) this.result += this.getNewline();
        this.result += ')';
        if (keys.getSize() < 2) this.inline--;
    }
};


// pattern: 'none' | REGEX | 'any'
FormattingVisitor.prototype.visitPattern = function(pattern) {
    const value = pattern.getValue().source;
    switch (value) {
        case '^none$':
            this.result += 'none';
            break;
        case '.*':
            this.result += 'any';
            break;
        default:
            this.result += '"' + value + '"?';
    }
    const parameters = pattern.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(pattern);
};


// percentage: PERCENTAGE
FormattingVisitor.prototype.visitPercentage = function(percentage) {
    const value = percentage.getValue();
    this.result += formatReal(value) + '%';
    const parameters = percentage.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(percentage);
};


// postClause: 'post' expression 'to' expression
FormattingVisitor.prototype.visitPostClause = function(node) {
    this.result += 'post ';
    const message = node.getItem(1);
    message.acceptVisitor(this);
    this.result += ' to ';
    const queue = node.getItem(2);
    queue.acceptVisitor(this);
};


// precedenceExpression: '(' expression ')'
FormattingVisitor.prototype.visitPrecedenceExpression = function(node) {
    this.inline++;
    this.result += '(';
    const expression = node.getItem(1);
    expression.acceptVisitor(this);
    this.result += ')';
    this.inline--;
};


// probability: FRACTION | '1.'
FormattingVisitor.prototype.visitProbability = function(probability) {
    const value = probability.getValue();
    switch (value) {
        case 0:
            this.result += '.0';
            break;
        case 1:
            this.result += '1.';
            break;
        default:
            // must remove the leading '0' for probabilities
            this.result += value.toString().substring(1);
    }
    const parameters = probability.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(probability);
};


// procedure: '{' code '}'
FormattingVisitor.prototype.visitProcedure = function(procedure) {
    this.result += '{';
    const code = procedure.getCode();
    code.acceptVisitor(this);
    this.result += '}';
    const parameters = procedure.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(procedure);
};


// publishClause: 'publish' expression
FormattingVisitor.prototype.visitPublishClause = function(node) {
    this.result += 'publish ';
    const event = node.getItem(1);
    event.acceptVisitor(this);
};


// resource: RESOURCE
FormattingVisitor.prototype.visitResource = function(resource) {
    const value = resource.getValue().toString();
    this.result += '<' + value + '>';
    const parameters = resource.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(resource);
};


// rejectClause: 'reject' expression
FormattingVisitor.prototype.visitRejectClause = function(node) {
    this.result += 'reject ';
    const message = node.getItem(1);
    message.acceptVisitor(this);
};


// retrieveClause: 'retrieve' recipient 'from' expression
FormattingVisitor.prototype.visitRetrieveClause = function(node) {
    this.result += 'retrieve ';
    const message = node.getItem(1);
    message.acceptVisitor(this);
    this.result += ' from ';
    const queue = node.getItem(2);
    queue.acceptVisitor(this);
};


// returnClause: 'return' expression?
FormattingVisitor.prototype.visitReturnClause = function(node) {
    this.result += 'return';
    if (node.getSize() > 0) {
        this.result += ' ';
        const result = node.getItem(1);
        result.acceptVisitor(this);
    }
};


// saveClause: 'save' expression ('as' recipient)?
FormattingVisitor.prototype.visitSaveClause = function(node) {
    this.result += 'save ';
    const document = node.getItem(1);
    document.acceptVisitor(this);
    if (node.getSize() > 1) {
        this.result += ' as ';
        const recipient = node.getItem(2);
        recipient.acceptVisitor(this);
    }
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
FormattingVisitor.prototype.visitSelectClause = function(node) {
    // handle the selection
    this.result += 'select ';
    const value = node.getItem(1);
    value.acceptVisitor(this);
    this.result += ' from';

    // handle option blocks
    var block;
    const size = node.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            this.result += ' else ';
            block = node.getItem(i);
            block.acceptVisitor(this);
        } else {
            this.result += ' ';
            const option = node.getItem(i);
            option.acceptVisitor(this);
            this.result += ' do ';
            block = node.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// signClause: 'sign' expression 'as' expression
FormattingVisitor.prototype.visitSignClause = function(node) {
    this.result += 'sign ';
    const component = node.getItem(1);
    component.acceptVisitor(this);
    this.result += ' as ';
    const name = node.getItem(2);
    name.acceptVisitor(this);
};


// symbol: SYMBOL
FormattingVisitor.prototype.visitSymbol = function(symbol) {
    const value = symbol.getValue();
    this.result += '$' + value;
    const parameters = symbol.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(symbol);
};


// tag: TAG
FormattingVisitor.prototype.visitTag = function(tag) {
    const value = tag.getValue();
    this.result += '#' + value;
    const parameters = tag.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(tag);
};


// text: TEXT | NARRATIVE
FormattingVisitor.prototype.visitText = function(text) {
    var value = text.getValue();
    this.depth++;
    const separator = this.getNewline();
    var regex = new RegExp('\\n', 'g');
    value = value.replace(regex, separator);  // indent each line
    var regex = new RegExp('    $');
    value = value.replace(regex, '');  // unindent last line
    this.result += '"' + value + '"';
    this.depth--;
    const parameters = text.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(text);
};


// throwClause: 'throw' expression
FormattingVisitor.prototype.visitThrowClause = function(node) {
    this.result += 'throw ';
    const exception = node.getItem(1);
    exception.acceptVisitor(this);
};


// variable: IDENTIFIER
FormattingVisitor.prototype.visitVariable = function(node) {
    this.result += node.identifier;
};


// version: VERSION
FormattingVisitor.prototype.visitVersion = function(version) {
    const value = version.getValue();
    this.result += 'v' + value.join('.');  // concatentat the version levels
    const parameters = version.getParameters();
    this.visitParameters(parameters);  // format any parameterization
    this.formatNote(version);
};


// whileClause: 'while' expression 'do' block
FormattingVisitor.prototype.visitWhileClause = function(node) {
    this.result += 'while ';
    const condition = node.getItem(1);
    condition.acceptVisitor(this);
    this.result += ' do ';
    const block = node.getItem(2);
    block.acceptVisitor(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
FormattingVisitor.prototype.visitWithClause = function(node) {
    this.result += 'with ';
    const size = node.getSize();
    if (size > 2) {
        this.result += 'each ';
        const item = node.getItem(1);
        item.acceptVisitor(this);
        this.result += ' in ';
    }
    const collection = node.getItem(size - 1);
    collection.acceptVisitor(this);
    this.result += ' do ';
    const block = node.getItem(size);
    block.acceptVisitor(this);
};


const formatReal = function(value) {
    var string = Number(value.toPrecision(14)).toString();
    switch (string) {
        case '2.718281828459':
            return 'e';
        case '-2.718281828459':
            return '-e';
        case '3.1415926535898':
            return 'π';
        case '-3.1415926535898':
            return '-π';
        case '1.6180339887499':
            return 'φ';
        case '-1.6180339887499':
            return '-φ';
        case '6.2831853071796':
            return 'τ';
        case '-6.2831853071796':
            return '-τ';
        case 'Infinity':
        case '-Infinity':
            return '∞';
        case '0':
        case '-0':
            return '0';
        case 'NaN':
            return 'undefined';
        default:
            return value.toString().replace(/e\+?/g, 'E');  // convert to canonical exponent format
    }
};


const formatImaginary = function(value) {
    var literal = formatReal(value);
    switch (literal) {
        case 'undefined':
        case '∞':
            return literal;
        case 'e':
        case '-e':
        case 'π':
        case '-π':
        case 'φ':
        case '-φ':
        case 'τ':
        case '-τ':
            return literal + ' i';
        default:
            return literal + 'i';
    }
};