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

/*
 * This class implements the methods for an HTML based formatter agent.
 */
const moduleName = '/bali/agents/HTMLFormatter';
const utilities = require('../utilities');
const abstractions = require('../abstractions');


/*
 * This method defines a missing stack function for the standard Array class.
 * The push(item) and pop() methods are already defined.
 */
Array.prototype.peek = function() {
    return this[this.length - 1];
};


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new formatter agent that can be used to generate a canonical HTML
 * documents from any component.
 *
 * @param {String} style A reference to the CSS style sheet that should be used for the look
 * and feel of the generated web page.
 * @param {Number} debug A number in the range 0..3.
 * @returns {HTML} The new HTML formatter agent.
 */
const HTMLFormatter = function(style, debug) {
    abstractions.Formatter.call(
        this,
        [ moduleName ],
        debug
    );
    if (debug > 1) {
        this.validateArgument('$HTMLFormatter', '$style', style, [
            '/javascript/String'
        ]);
    }

    this.asSource = function(component) {
        if (debug > 1) {
            this.validateArgument('$asSource', '$component', component, [
                '/bali/abstractions/Component'
            ]);
        }
        const visitor = new FormattingVisitor(style, this.debug);
        component.acceptVisitor(visitor);
        return visitor.getResult();
    };

    return this;
};
HTMLFormatter.prototype = Object.create(abstractions.Formatter.prototype);
HTMLFormatter.prototype.constructor = HTMLFormatter;
exports.HTMLFormatter = HTMLFormatter;


// PRIVATE CONSTANTS

const EOL = '\n'; // the POSIX end of line character

const header =
'<!DOCTYPE html>\n' +
'<html>\n' +
'    <head>\n' +
'        <meta charset="UTF-8">' +
'        <link rel="stylesheet" href="${style}">\n' +
'        <link rel="apple-touch-icon" sizes="57x57" href="https://bali-nebula.net/static/icons/apple-icon-57x57.png">' +
'        <link rel="apple-touch-icon" sizes="60x60" href="https://bali-nebula.net/static/icons/apple-icon-60x60.png">' +
'        <link rel="apple-touch-icon" sizes="72x72" href="https://bali-nebula.net/static/icons/apple-icon-72x72.png">' +
'        <link rel="apple-touch-icon" sizes="76x76" href="https://bali-nebula.net/static/icons/apple-icon-76x76.png">' +
'        <link rel="apple-touch-icon" sizes="114x114" href="https://bali-nebula.net/static/icons/apple-icon-114x114.png">' +
'        <link rel="apple-touch-icon" sizes="120x120" href="https://bali-nebula.net/static/icons/apple-icon-120x120.png">' +
'        <link rel="apple-touch-icon" sizes="144x144" href="https://bali-nebula.net/static/icons/apple-icon-144x144.png">' +
'        <link rel="apple-touch-icon" sizes="152x152" href="https://bali-nebula.net/static/icons/apple-icon-152x152.png">' +
'        <link rel="apple-touch-icon" sizes="180x180" href="https://bali-nebula.net/static/icons/apple-icon-180x180.png">' +
'        <link rel="icon" type="image/png" sizes="192x192"  href="https://bali-nebula.net/static/icons/android-icon-192x192.png">' +
'        <link rel="icon" type="image/png" sizes="32x32" href="https://bali-nebula.net/static/icons/favicon-32x32.png">' +
'        <link rel="icon" type="image/png" sizes="96x96" href="https://bali-nebula.net/static/icons/favicon-96x96.png">' +
'        <link rel="icon" type="image/png" sizes="16x16" href="https://bali-nebula.net/static/icons/favicon-16x16.png">' +
'        <link rel="manifest" href="https://bali-nebula.net/static/icons/manifest.json">' +
'        <meta name="msapplication-TileColor" content="#ffffff">' +
'        <meta name="msapplication-TileImage" content="https://bali-nebula.net/static/icons/ms-icon-144x144.png">' +
'        <meta name="theme-color" content="#ffffff">' +
'    </head>\n' +
'    <body>\n' +
'        <div class="document">\n' +
'            <div class="value">\n' +
'                ';

const footer =
'\n' +
'            </div>\n' +
'        </div>\n' +
'        <div class="poweredBy">\n' +
'            <img class="logo" src="https://bali-nebula.net/static/images/CraterDogIcon.png">\n' +
'            <div class="company">Powered by Crater Dog Technologies™</div>\n' +
'        </div>\n' +
'    </body>\n' +
'</html>';


// PRIVATE CLASSES

const FormattingVisitor = function(style, debug) {
    abstractions.Visitor.call(
        this,
        ['/bali/agents/FormattingVisitor'],
        debug
    );
    this.result = header.replace(/\${style}/, style);
    this.depth = 4;  // the header and footer take up four levels
    this.width = [];  // stack of key widths for nested catalogs

    this.getNewline = function() {
        var separator = EOL;
        for (var i = 0; i < this.depth; i++) {
            separator += '    ';
        }
        return separator;
    };

    this.getResult = function() {
        this.result += footer;
        return this.result;
    };

    return this;
};
FormattingVisitor.prototype = Object.create(abstractions.Visitor.prototype);
FormattingVisitor.prototype.constructor = FormattingVisitor;


// angle: ANGLE
FormattingVisitor.prototype.visitAngle = function(angle) {
    this.result += '<div class="element angle">';
    this.result += '~' + formatReal(angle.getValue());
    this.result += formatParameters(angle.getParameters());
    this.result += '</div>';
};


// association: element ':' expression
FormattingVisitor.prototype.visitAssociation = function(association) {
    this.result += '<div class="association">';
    this.depth++;
    this.result += this.getNewline();
    this.result += '<div class="key" style="width:' + this.width.peek() + 'ch">';
    this.depth++;
    this.result += this.getNewline();
    association.getKey().acceptVisitor(this);
    this.depth--;
    this.result += this.getNewline();
    this.result += '</div>';
    this.result += this.getNewline();
    this.result += '<div class="colon">:</div>';
    this.result += this.getNewline();
    this.result += '<div class="value">';
    this.depth++;
    this.result += this.getNewline();
    const value = association.getValue();
    if (value.isType('/bali/trees/Node')) {
        this.visitExpression(value);  // must handle expressions differently
    } else {
        value.acceptVisitor(this);
    }
    this.depth--;
    this.result += this.getNewline();
    this.result += '</div>';
    this.depth--;
    this.result += this.getNewline();
    this.result += '</div>';
};


// binary: BINARY
FormattingVisitor.prototype.visitBinary = function(binary) {
    var value = binary.getValue();
    var parameters = binary.getParameters();
    var format;
    if (parameters) {
        format = parameters.getAttribute('$encoding');
        if (format) format = format.toString();
    }
    const decoder = new utilities.Decoder(0, this.debug);
    switch (format) {
        case '$base02':
            value = decoder.base02Encode(value);
            break;
        case '$base16':
            value = decoder.base16Encode(value);
            break;
        case '$base64':
            value = decoder.base64Encode(value);
            break;
        case '$base32':
        default:
            value = decoder.base32Encode(value);
    }
    this.result += '<pre class="element binary">';
    this.result += value;
    this.result += formatParameters(parameters);
    this.result += '</pre>';
};


// boolean: 'false' | 'true'
FormattingVisitor.prototype.visitBoolean = function(boolean) {
    this.result += '<div class="element boolean">';
    const value = boolean.getValue();
    this.result += value.toString();  // javascript toString()
    this.result += formatParameters(boolean.getParameters());
    this.result += '</div>';
};


FormattingVisitor.prototype.visitCanonicalComparator = function(comparator) {
    this.result += '[:]($type: ' + comparator.getType() + '/v1)';  // HACK!!
};


// collection: range | list | catalog
FormattingVisitor.prototype.visitCollection = function(collection) {
    // check for an explicit type, otherwise use the implicit type
    var iterator;
    const type = collection.getType();
    const name = type.slice(type.lastIndexOf('/') + 1);  // extract the type name
    switch (type) {
        case '/bali/collections/Range':
            this.result += '<div class="range">';
            const first = collection.getFirst();
            if (first !== undefined) {
                first.acceptVisitor(this);
            }
            this.result += collection.getConnector().replace(/</g, '&lt;');
            const last = collection.getLast();
            if (last !== undefined) {
                last.acceptVisitor(this);
            }
            this.result += '</div>';
            break;
        case '/bali/collections/List':
        case '/bali/collections/Queue':
        case '/bali/collections/Set':
        case '/bali/collections/Stack':
            this.result += '<div class="list">';
            this.depth++;
            this.result += this.getNewline();
            this.result += '<div class="type">' + name + '</div>';
            iterator = collection.getIterator();
            while (iterator.hasNext()) {
                this.result += this.getNewline();
                this.result += '<div class="item">';
                this.depth++;
                this.result += this.getNewline();
                iterator.getNext().acceptVisitor(this);
                this.depth--;
                this.result += this.getNewline();
                this.result += '</div>';
            }
            this.depth--;
            this.result += this.getNewline();
            this.result += '</div>';
            break;
        default:
            this.result += '<div class="catalog">';
            this.depth++;
            this.result += this.getNewline();
            this.result += '<div class="type">' + name + '</div>';
            // find the widest key
            const keys = collection.getKeys();
            var width = 0;
            iterator = keys.getIterator();
            while (iterator.hasNext()) {
                const key = iterator.getNext();
                const length = key.toString().length;
                if (width < length) width = length;
            }
            this.width.push(width + 1);  // save off the widest one
            // iterate through the associations
            iterator = collection.getIterator();
            while (iterator.hasNext()) {
                this.result += this.getNewline();
                const value = iterator.getNext();
                if (value.isType('/bali/trees/Node')) {
                    this.visitExpression(value);  // must handle expressions differently
                } else {
                    value.acceptVisitor(this);
                }
            }
            this.width.pop();  // we are done with it
            this.depth--;
            this.result += this.getNewline();
            this.result += '</div>';
    }
    const parameters = collection.getParameters();
    this.visitParameters(parameters);  // then format any parameterization
};


// duration: DURATION
FormattingVisitor.prototype.visitDuration = function(duration) {
    this.result += '<div class="element duration">';
    this.result += duration.getTime().toISOString().slice(1).replace(/T/, '');
    this.result += formatParameters(duration.getParameters());
    this.result += '</div>';
};


FormattingVisitor.prototype.visitException = function(exception) {
    const attributes = exception.getAttributes();
    attributes.acceptVisitor(this);
    // Note: any cause has already been integrated into the trace attribute
    const parameters = exception.getParameters();
    this.visitParameters(parameters);  // then format any parameterization
};


FormattingVisitor.prototype.visitExpression = function(expression) {
    this.result += '<pre class="element code">';
    this.result += expression.toString();
    this.result += '</pre>';
};


FormattingVisitor.prototype.visitIterator = function(iterator) {
    this.result += '[';
    this.depth++;
    this.result += this.getNewline();
    this.result += '$slot: ';
    const slot = iterator.getSlot();
    this.result += slot;
    this.result += this.getNewline();
    this.result += '$sequence: ';
    const sequence = iterator.getSequence();
    sequence.acceptVisitor(this);
    this.depth--;
    this.result += this.getNewline();
    this.result += ']($type: ' + iterator.getType() + '/v1)';  // HACK!!
};


FormattingVisitor.prototype.visitMergeSorter = function(sorter) {
    this.result += '[';
    this.depth++;
    this.result += this.getNewline();
    this.result += '$comparator: ';
    const comparator = sorter.getComparator();
    comparator.acceptVisitor(this);
    this.depth--;
    this.result += this.getNewline();
    this.result += ']($type: ' + sorter.getType() + '/v1)';  // HACK!!
};


// moment: MOMENT
FormattingVisitor.prototype.visitMoment = function(moment) {
    this.result += '<div class="element moment">';
    this.result += moment.getTimestamp().format(moment.getFormat()).replace(/T/, ' ');
    this.result += formatParameters(moment.getParameters());
    this.result += '</div>';
};


// name: NAME
FormattingVisitor.prototype.visitName = function(name) {
    const path = '/' + name.getValue().join('/');  // can't use toString() because it appends parameters
    this.result += '<div class="element name">';
    this.result += '<a href="https://bali-nebula.net/repository/names' + path + '">';
    this.result += path;
    this.result += '</a>';
    this.result += formatParameters(name.getParameters());
    this.result += '</div>';
};


// number:
//    'undefined' |
//    'infinity' |
//    '∞' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')'
FormattingVisitor.prototype.visitNumber = function(number) {
    var parameters = number.getParameters();
    var isPolar = number.isPolar;
    var formatted = '';
    if (number.isUndefined()) {
        formatted += 'undefined';
    } else if (number.isInfinite()) {
        formatted += '∞';
    } else if (number.isZero()) {
        formatted += '0';
    } else if (number.getReal() !== 0 && number.getImaginary() === 0) {
        // it is a pure real number
        formatted += formatReal(number.getReal());
    } else if (number.getReal() === 0 && number.getImaginary() !== 0) {
        // it is a pure imaginary number
        formatted += formatImaginary(number.getImaginary());
    } else {
        // must be a complex number
        formatted += '(';
        if (isPolar) {
            formatted += formatReal(number.getMagnitude());
            formatted += ' e^~';
            formatted += formatImaginary(number.getPhase().getValue());
        } else {
            formatted += formatReal(number.getReal());
            formatted += ', ';
            formatted += formatImaginary(number.getImaginary());
        }
        formatted += ')';
    }
    this.result += '<div class="element number">';
    this.result += formatted;
    this.result += formatParameters(parameters);
    this.result += '</div>';
};


// parameters: '(' catalog ')'
FormattingVisitor.prototype.visitParameters = function(parameters) {
    if (parameters) {

        // begin the div element
        this.result += '<div class="parameters">';
        this.result += this.getNewline();
        this.result += '<div class="type">Parameters</div>';
        this.depth++;
        const keys = parameters.getKeys();
        const iterator = keys.getIterator();

        // find the widest key
        var width = 0;
        while (iterator.hasNext()) {
            const key = iterator.getNext();
            const length = key.toString().length;
            if (width < length) width = length;
        }
        this.width.push(width);  // save off the widest one

        // iterate through the parameters
        iterator.toStart();
        while (iterator.hasNext()) {
            const key = iterator.getNext();
            const value = parameters.getAttribute(key);
            this.result += '<div class="association">';
            this.depth++;
            this.result += this.getNewline();
            this.result += '<div class="key" style="width:' + this.width.peek() + 'ch">';
            this.depth++;
            this.result += this.getNewline();
            key.acceptVisitor(this);
            this.depth--;
            this.result += '</div>';
            this.result += this.getNewline();
            this.result += '<div class="colon">:</div>';
            this.result += this.getNewline();
            this.result += '<div class="value">';
            this.depth++;
            this.result += this.getNewline();
            value.acceptVisitor(this);
            this.depth--;
            this.result += this.getNewline();
            this.result += '</div>';
            this.depth--;
            this.result += this.getNewline();
            this.result += '</div>';
        }
        this.width.pop();  // we are done with it

        // terminate the div element
        this.depth--;
        this.result += this.getNewline();
        this.result += '</div>';
    }
};


// pattern: 'none' | REGEX | 'any'
FormattingVisitor.prototype.visitPattern = function(pattern) {
    this.result += '<div class="element pattern">';
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
    this.result += formatParameters(pattern.getParameters());
    this.result += '</div>';
};


// percentage: PERCENTAGE
FormattingVisitor.prototype.visitPercentage = function(percentage) {
    this.result += '<div class="element percentage">';
    const value = percentage.getValue();
    this.result += formatReal(value) + '%';
    this.result += formatParameters(percentage.getParameters());
    this.result += '</div>';
};


// probability: FRACTION | '1.'
FormattingVisitor.prototype.visitProbability = function(probability) {
    this.result += '<div class="element probability">';
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
    this.result += formatParameters(probability.getParameters());
    this.result += '</div>';
};


// procedure: '{' code '}'
FormattingVisitor.prototype.visitProcedure = function(procedure) {
    this.result += '<pre class="element code">';
    this.result += '{';
    this.result += procedure.getCode().toString();
    this.result += '}';
    this.result += formatParameters(procedure.getParameters());
    this.result += '</pre>';
};


// resource: RESOURCE
FormattingVisitor.prototype.visitResource = function(resource) {
    this.result += '<a class="element resource" href="' + resource.getValue() + '">';
    this.result += resource.getValue().toString().replace(/^https?:\/\/|^mailto:/g, '');
    const query = formatParameters(resource.getParameters()).replace(/ \(/, '').replace(/\)/, '').replace(/: /g, '=').replace(/, /g, '&');
    if (query) this.result += '?' + query;
    this.result += '</a>';
};


// symbol: SYMBOL
FormattingVisitor.prototype.visitSymbol = function(symbol) {
    this.result += '<div class="element symbol">';
    this.result += symbol.getValue();
    this.result += formatParameters(symbol.getParameters());
    this.result += '</div>';
};


// tag: TAG
FormattingVisitor.prototype.visitTag = function(tag) {
    this.result += '<pre class="element tag">';
    this.result += '#' + tag.getValue();
    this.result += formatParameters(tag.getParameters());
    this.result += '</pre>';
};


// text: TEXT | NARRATIVE
FormattingVisitor.prototype.visitText = function(text) {
    var value = text.getValue();
    const regex = new RegExp('\\n', 'g');
    value = value.replace(regex, '\n    ');  // indent each line
    value = '"' + value + '"';
    value = value.replace(/    "/, '"');  // unindent last line
    this.result += '<pre class="element text">';
    this.result += EOL;
    this.result += value;
    this.result += formatParameters(text.getParameters());
    this.result += '</pre>';
};


// variable: IDENTIFIER
FormattingVisitor.prototype.visitVariable = function(node) {
    this.result += node.identifier;
};


// version: VERSION
FormattingVisitor.prototype.visitVersion = function(version) {
    this.result += '<div class="element version">';
    this.result += 'v' + version.getValue().join('.');
    this.result += formatParameters(version.getParameters());
    this.result += '</div>';
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


const formatParameters = function(parameters) {
    var formatted = '';
    if (parameters) {
        const keys = parameters.getKeys();
        const iterator = keys.getIterator();
        formatted += ' (';
        var count = 0;
        while (iterator.hasNext()) {
            const key = iterator.getNext();
            if (count++) formatted += ', ';  // only after the first parameter has been formatted
            formatted += key.getValue() + ': ';  // strip off the leading '$'
            formatted += parameters.getAttribute(key).toString().replace(/\$/g, '');  // strip of any leading '$'s
        }
        formatted += ')';
    }
    return formatted;
};
