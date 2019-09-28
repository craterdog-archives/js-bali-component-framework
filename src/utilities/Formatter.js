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
 * @param {Number} debug A number in the range [0..3].
 * @returns {Formatter} The new component formatter.
 */
const Formatter = function(indentation, debug) {
    debug = debug || 0;
    if (debug > 1) {
        const validator = new Validator(debug);
        validator.validateType('/bali/utilities/Formatter', '$formatComponent', '$indentation', indentation, [
            '/javascript/Undefined',
            '/javascript/Number'
        ]);
    }

    // the indentation is a private attribute so methods that use it are defined in the constructor
    indentation = indentation || 0;

    this.formatComponent = function(component) {
        if (debug > 1) {
            const validator = new Validator(debug);
            validator.validateType('/bali/utilities/Formatter', '$formatComponent', '$component', component, [
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

    return this;
};
FormattingVisitor.prototype = Object.create(Visitor.prototype);
FormattingVisitor.prototype.constructor = FormattingVisitor;


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
                $module: '/bali/utilities/Formatter',
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
};


// arguments: '(' list ')'
FormattingVisitor.prototype.visitArguments = function(tree) {
    this.inline++;
    this.result += '(';
    const list = tree.getItem(1);
    this.visitSequence(list);  // it is a sequence not a collection
    this.result += ')';
    this.inline--;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
FormattingVisitor.prototype.visitArithmeticExpression = function(tree) {
    this.inline++;
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' ';
    this.result += tree.operator;
    this.result += ' ';
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// association: component ':' expression
FormattingVisitor.prototype.visitAssociation = function(association) {
    association.getKey().acceptVisitor(this);
    this.result += ': ';
    association.getValue().acceptVisitor(this);
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
                $module: '/bali/utilities/Formatter',
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
};


// block: '{' statements '}'
FormattingVisitor.prototype.visitBlock = function(tree) {
    this.result += '{';
    this.allowInline = false;
    const statements = tree.getItem(1);
    statements.acceptVisitor(this);
    this.result += '}';
};


// breakClause: 'break' 'loop'
FormattingVisitor.prototype.visitBreakClause = function(tree) {
    this.result += 'break loop';
};


// checkoutClause: 'checkout' recipient 'from' expression
FormattingVisitor.prototype.visitCheckoutClause = function(tree) {
    this.result += 'checkout ';
    const component = tree.getItem(1);
    component.acceptVisitor(this);
    this.result += ' from ';
    const reference = tree.getItem(2);
    reference.acceptVisitor(this);
};


// collection: '[' sequence ']'
FormattingVisitor.prototype.visitCollection = function(collection) {
    this.result += '[';
    this.visitSequence(collection);  // first format the sequence of items
    this.result += ']';
    const parameters = collection.getParameters();
    this.visitParameters(parameters);  // then format any parameterization
};


// commitClause: 'commit' expression 'to' expression
FormattingVisitor.prototype.visitCommitClause = function(tree) {
    this.result += 'commit ';
    const component = tree.getItem(1);
    component.acceptVisitor(this);
    this.result += ' to ';
    const reference = tree.getItem(2);
    reference.acceptVisitor(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
FormattingVisitor.prototype.visitComparisonExpression = function(tree) {
    this.inline++;
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' ' + tree.operator + ' ';
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// complementExpression: 'not' expression
FormattingVisitor.prototype.visitComplementExpression = function(tree) {
    this.inline++;
    this.result += 'not ';
    const operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.inline--;
};


// concatenationExpression: expression '&' expression
FormattingVisitor.prototype.visitConcatenationExpression = function(tree) {
    this.inline++;
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' & ';
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// continueClause: 'continue' 'loop'
FormattingVisitor.prototype.visitContinueClause = function(tree) {
    this.result += 'continue loop';
};


// defaultExpression: expression '?' expression
FormattingVisitor.prototype.visitDefaultExpression = function(tree) {
    this.inline++;
    const value = tree.getItem(1);
    value.acceptVisitor(this);
    this.result += ' ? ';
    const defaultValue = tree.getItem(2);
    defaultValue.acceptVisitor(this);
    this.inline--;
};


// dereferenceExpression: '@' expression
FormattingVisitor.prototype.visitDereferenceExpression = function(tree) {
    this.inline++;
    this.result += '@';
    const reference = tree.getItem(1);
    reference.acceptVisitor(this);
    this.inline--;
};


// discardClause: 'discard' expression
FormattingVisitor.prototype.visitDiscardClause = function(tree) {
    this.result += 'discard ';
    const draft = tree.getItem(1);
    draft.acceptVisitor(this);
};


// duration: DURATION
FormattingVisitor.prototype.visitDuration = function(duration) {
    const value = duration.getValue().toISOString();
    this.result += '~' + value;
    const parameters = duration.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// evaluateClause: (recipient ':=')? expression
FormattingVisitor.prototype.visitEvaluateClause = function(tree) {
    const size = tree.getSize();
    if (size > 1) {
        const recipient = tree.getItem(1);
        recipient.acceptVisitor(this);
        this.result += ' := ';
    }
    const expression = tree.getItem(size);
    expression.acceptVisitor(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
FormattingVisitor.prototype.visitExponentialExpression = function(tree) {
    this.inline++;
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' ^ ';
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// factorialExpression: expression '!'
FormattingVisitor.prototype.visitFactorialExpression = function(tree) {
    this.inline++;
    const operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.result += '!';
    this.inline--;
};


// function: IDENTIFIER
FormattingVisitor.prototype.visitFunction = function(tree) {
    this.result += tree.identifier;
};


// functionExpression: function arguments
FormattingVisitor.prototype.visitFunctionExpression = function(tree) {
    this.inline++;
    const functionName = tree.getItem(1);
    functionName.acceptVisitor(this);
    const args = tree.getItem(2);
    args.acceptVisitor(this);
    this.inline--;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
FormattingVisitor.prototype.visitHandleClause = function(tree) {
    this.result += ' handle ';
    const exception = tree.getItem(1);
    exception.acceptVisitor(this);
    this.result += ' matching ';
    const pattern = tree.getItem(2);
    pattern.acceptVisitor(this);
    this.result += ' with ';
    const block = tree.getItem(3);
    block.acceptVisitor(this);
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
FormattingVisitor.prototype.visitIfClause = function(tree) {
    // handle first condition
    this.result += 'if ';
    var condition = tree.getItem(1);
    condition.acceptVisitor(this);
    this.result += ' then ';
    var block = tree.getItem(2);
    block.acceptVisitor(this);

    // handle optional additional conditions
    const size = tree.getSize();
    for (var i = 3; i <= size; i += 2) {
        if (i === size) {
            this.result += ' else ';
            block = tree.getItem(i);
            block.acceptVisitor(this);
        } else {
            this.result += ' else if ';
            condition = tree.getItem(i);
            condition.acceptVisitor(this);
            this.result += ' then ';
            block = tree.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// inversionExpression: ('-' | '*') expression
FormattingVisitor.prototype.visitInversionExpression = function(tree) {
    this.inline++;
    this.result += tree.operator;
    const operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.inline--;
};


// indices: '[' keys ']'
FormattingVisitor.prototype.visitIndices = function(tree) {
    this.inline++;
    this.result += '[';
    const keys = tree.getItem(1);
    this.visitSequence(keys);  // the keys are a sequence not a collection
    this.result += ']';
    this.inline--;
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
FormattingVisitor.prototype.visitLogicalExpression = function(tree) {
    this.inline++;
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.result += ' ' + tree.operator + ' ';
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
    this.inline--;
};


// magnitudeExpression: '|' expression '|'
FormattingVisitor.prototype.visitMagnitudeExpression = function(tree) {
    this.inline++;
    this.result += '|';
    const operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.result += '|';
    this.inline--;
};


// message: IDENTIFIER
FormattingVisitor.prototype.visitMessage = function(tree) {
    this.result += tree.identifier;
};


// messageExpression: expression '.' message arguments
FormattingVisitor.prototype.visitMessageExpression = function(tree) {
    this.inline++;
    const target = tree.getItem(1);
    target.acceptVisitor(this);
    this.result += '.';
    const messageName = tree.getItem(2);
    messageName.acceptVisitor(this);
    const args = tree.getItem(3);
    args.acceptVisitor(this);
    this.inline--;
};


// moment: MOMENT
FormattingVisitor.prototype.visitMoment = function(moment) {
    const value = moment.getValue().format(moment.getFormat());
    this.result += '<' + value + '>';
    const parameters = moment.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// name: NAME
FormattingVisitor.prototype.visitName = function(name) {
    const value = name.getValue();
    this.result += '/' + value.join('/');  // concatentat the parts of the name
    const parameters = name.getParameters();
    this.visitParameters(parameters);  // format any parameterization
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
        this.result += 'undefined';
    } else if (number.isInfinite()) {
        this.result += 'infinity';
    } else if (number.isZero()) {
        this.result += '0';
    } else if ((format !== '$polar' || number.getReal() > 0) && number.getImaginary() === 0) {
        // we know the real part isn't zero
        this.result += formatReal(number.getReal());
    } else if (format !== '$polar' && number.getReal() === 0) {
        // we know the imaginary part isn't zero
        this.result += formatImaginary(number.getImaginary());
    } else {
        // must be a complex number
        this.result += '(';
        switch (format) {
            case '$rectangular':
                this.result += formatReal(number.getReal());
                this.result += ', ';
                this.result += formatImaginary(number.getImaginary());
                break;
            case '$polar':
                this.result += formatReal(number.getMagnitude());
                this.result += ' e^~';
                this.result += formatImaginary(number.getPhase().getValue());
                break;
            default:
        }
        this.result += ')';
    }
    const parameters = number.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// parameters: '(' object ')'
FormattingVisitor.prototype.visitParameters = function(parameters) {
    if (parameters) {
        const keys = Object.keys(parameters);
        // inline if only one parameter
        if (keys.length < 2) this.inline++;
        this.result += '(';
        this.depth++;
        var count = 0;
        keys.forEach(function(key) {
            if (this.inline) {
                if (count++) this.result += ', ';  // only after the first item has been formatted
            } else {
                this.result += this.getNewline();
            }
            this.result += key + ': ';
            const value = parameters[key];
            value.acceptVisitor(this);
        }, this);
        this.depth--;
        if (!this.inline) this.result += this.getNewline();
        this.result += ')';
        if (keys.length < 2) this.inline--;
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
};


// percent: PERCENT
FormattingVisitor.prototype.visitPercent = function(percent) {
    const value = percent.getValue();
    this.result += formatReal(value) + '%';
    const parameters = percent.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// precedenceExpression: '(' expression ')'
FormattingVisitor.prototype.visitPrecedenceExpression = function(tree) {
    this.inline++;
    this.result += '(';
    const expression = tree.getItem(1);
    expression.acceptVisitor(this);
    this.result += ')';
    this.inline--;
};


// probability: 'false' | FRACTION | 'true'
FormattingVisitor.prototype.visitProbability = function(probability) {
    const value = probability.getValue();
    switch (value) {
        case 0:
            this.result += 'false';
            break;
        case 1:
            this.result += 'true';
            break;
        default:
            // must remove the leading '0' for probabilities
            this.result += value.toString().substring(1);
    }
    const parameters = probability.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// procedure: '{' statements '}'
FormattingVisitor.prototype.visitProcedure = function(procedure) {
    this.result += '{';
    this.allowInline = true;
    const statements = procedure.getStatements();
    statements.acceptVisitor(this);
    this.result += '}';
    const parameters = procedure.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// publishClause: 'publish' expression
FormattingVisitor.prototype.visitPublishClause = function(tree) {
    this.result += 'publish ';
    const event = tree.getItem(1);
    event.acceptVisitor(this);
};


// queueClause: 'queue' expression 'on' expression
FormattingVisitor.prototype.visitQueueClause = function(tree) {
    this.result += 'queue ';
    const message = tree.getItem(1);
    message.acceptVisitor(this);
    this.result += ' on ';
    const queue = tree.getItem(2);
    queue.acceptVisitor(this);
};


// reference: RESOURCE
FormattingVisitor.prototype.visitReference = function(reference) {
    const value = reference.getValue().toString();
    this.result += '<' + value.replace(/\$tag:%23/, '$tag:#') + '>';
    const parameters = reference.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// reserved: RESERVED
FormattingVisitor.prototype.visitReserved = function(reserved) {
    const value = reserved.getValue();
    this.result += '$$' + value;
    const parameters = reserved.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// returnClause: 'return' expression?
FormattingVisitor.prototype.visitReturnClause = function(tree) {
    this.result += 'return';
    if (tree.getSize() > 0) {
        this.result += ' ';
        const result = tree.getItem(1);
        result.acceptVisitor(this);
    }
};


// saveClause: 'save' expression 'to' expression
FormattingVisitor.prototype.visitSaveClause = function(tree) {
    this.result += 'save ';
    const draft = tree.getItem(1);
    draft.acceptVisitor(this);
    this.result += ' to ';
    const reference = tree.getItem(2);
    reference.acceptVisitor(this);
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
FormattingVisitor.prototype.visitSelectClause = function(tree) {
    // handle the selection
    this.result += 'select ';
    const value = tree.getItem(1);
    value.acceptVisitor(this);
    this.result += ' from';

    // handle option blocks
    var block;
    const size = tree.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            this.result += ' else ';
            block = tree.getItem(i);
            block.acceptVisitor(this);
        } else {
            this.result += ' ';
            const option = tree.getItem(i);
            option.acceptVisitor(this);
            this.result += ' do ';
            block = tree.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// sequence: range | list | catalog
FormattingVisitor.prototype.visitSequence = function(sequence) {
    // note: a range must be handled differently
    if (sequence.isType('/bali/collections/Range')) {
        sequence.getFirstItem().acceptVisitor(this);
        this.result += '..';
        sequence.getLastItem().acceptVisitor(this);
    } else if (sequence.isEmpty()) {
        if (sequence.isType('/bali/collections/Catalog')) {
            this.result += ':';  // empty catalog
        }
    } else {
        this.depth++;
        var count = 0;
        const iterator = sequence.getIterator();
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
};


// statement: mainClause handleClause*
FormattingVisitor.prototype.visitStatement = function(tree) {
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        const child = iterator.getNext();
        child.acceptVisitor(this);
    }
};


// statements:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     {empty procedure}
FormattingVisitor.prototype.visitStatements = function(tree) {
    this.depth++;
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        this.result += this.getNewline();
        const statement = iterator.getNext();
        statement.acceptVisitor(this);
    }
    this.depth--;
    this.result += this.getNewline();
};


// subcomponent: variable indices
FormattingVisitor.prototype.visitSubcomponent = function(tree) {
    const variable = tree.getItem(1);
    variable.acceptVisitor(this);
    const indices = tree.getItem(2);
    indices.acceptVisitor(this);
};


// subcomponentExpression: expression indices
FormattingVisitor.prototype.visitSubcomponentExpression = function(tree) {
    this.inline++;
    const component = tree.getItem(1);
    component.acceptVisitor(this);
    const indices = tree.getItem(2);
    indices.acceptVisitor(this);
    this.inline--;
};


// symbol: SYMBOL
FormattingVisitor.prototype.visitSymbol = function(symbol) {
    const value = symbol.getValue();
    this.result += '$' + value;
    const parameters = symbol.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// tag: TAG
FormattingVisitor.prototype.visitTag = function(tag) {
    const value = tag.getValue();
    this.result += '#' + value;
    const parameters = tag.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// text: TEXT | TEXT_BLOCK
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
};


// throwClause: 'throw' expression
FormattingVisitor.prototype.visitThrowClause = function(tree) {
    this.result += 'throw ';
    const exception = tree.getItem(1);
    exception.acceptVisitor(this);
};


// variable: IDENTIFIER
FormattingVisitor.prototype.visitVariable = function(tree) {
    this.result += tree.identifier;
};


// version: VERSION
FormattingVisitor.prototype.visitVersion = function(version) {
    const value = version.getValue();
    this.result += 'v' + value.join('.');  // concatentat the version levels
    const parameters = version.getParameters();
    this.visitParameters(parameters);  // format any parameterization
};


// waitClause: 'wait' 'for' recipient 'from' expression
FormattingVisitor.prototype.visitWaitClause = function(tree) {
    this.result += 'wait for ';
    const message = tree.getItem(1);
    message.acceptVisitor(this);
    this.result += ' from ';
    const queue = tree.getItem(2);
    queue.acceptVisitor(this);
};


// whileClause: 'while' expression 'do' block
FormattingVisitor.prototype.visitWhileClause = function(tree) {
    this.result += 'while ';
    const condition = tree.getItem(1);
    condition.acceptVisitor(this);
    this.result += ' do ';
    const block = tree.getItem(2);
    block.acceptVisitor(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
FormattingVisitor.prototype.visitWithClause = function(tree) {
    this.result += 'with ';
    const size = tree.getSize();
    if (size > 2) {
        this.result += 'each ';
        const item = tree.getItem(1);
        item.acceptVisitor(this);
        this.result += ' in ';
    }
    const collection = tree.getItem(size - 1);
    collection.acceptVisitor(this);
    this.result += ' do ';
    const block = tree.getItem(size);
    block.acceptVisitor(this);
};


const formatReal = function(value) {
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
};


const formatImaginary = function(value) {
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
};
