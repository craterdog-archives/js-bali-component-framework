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
 * This class implements an HTML formatter object that uses a visitor to format, in
 * a canonical way, components as HTML documents.
 */
const Formatter = require('./Formatter').Formatter;
const Decoder = require('./Decoder').Decoder;
const Validator = require('./Validator').Validator;
const Visitor = require('../abstractions/Visitor').Visitor;
const Exception = require('../composites/Exception').Exception;


// This private constant sets the POSIX end of line character
const EOL = '\n';


/*
 * This method defines a missing stack function for the standard Array class.
 * The push(item) and pop() methods are already defined.
 */
Array.prototype.peek = function() {
    return this[this.length - 1];
};


// PUBLIC FUNCTIONS

/**
 * This function creates a new formatter object that can be used to format components.
 *
 * @param {String} style A reference to the CSS style sheet that should be used for the look
 * and feel of the generated web page.
 * @param {Number} debug A number in the range [0..3].
 * @returns {HTML} The new component formatter.
 */
const HTML = function(style, debug) {
    debug = debug || 0;
    if (debug > 1) {
        const validator = new Validator(debug);
        validator.validateType('/bali/utilities/HTML', '$formatComponent', '$style', style, [
            '/javascript/String'
        ]);
    }

    // the style is a private attribute so methods that use it are defined in the constructor

    this.formatComponent = function(component) {
        if (debug > 1) {
            const validator = new Validator(debug);
            validator.validateType('/bali/utilities/HTML', '$formatComponent', '$component', component, [
                '/bali/abstractions/Component'
            ]);
        }
        const visitor = new FormattingVisitor(style, debug);
        component.acceptVisitor(visitor);
        return visitor.getResult();
    };

    return this;
};
HTML.prototype.constructor = HTML;
exports.HTML = HTML;


// PRIVATE CONSTANTS

const header =
'<!DOCTYPE html>\n' +
'<html>\n' +
'    <head>\n' +
'        <link rel="stylesheet" href="${style}">\n' +
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
'            <img class="logo" src="https://bali-nebula.net/web/images/PoweredByLogo.png" alt="Powered By">\n' +
'            <div class="company">Powered by Crater Dog Technologies™</div>\n' +
'        </div>\n' +
'    </body>\n' +
'</html>\n';


// PRIVATE CLASSES

const FormattingVisitor = function(style, debug) {
    Visitor.call(this, debug);
    this.debug = debug || 0;
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
FormattingVisitor.prototype = Object.create(Visitor.prototype);
FormattingVisitor.prototype.constructor = FormattingVisitor;


// angle: ANGLE
FormattingVisitor.prototype.visitAngle = function(angle) {
    this.result += '<div class="element angle">';
    this.result += formatReal(angle.getValue());
    this.result += formatParameters(angle.getParameters());
    this.result += '</div>';
};


// association: element ':' component
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
    association.getValue().acceptVisitor(this);
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
        format = parameters['$encoding'];
        if (format) format = format.toString();
    }
    const decoder = new Decoder(0, this.debug);
    switch (format) {
        case '$base2':
            value = decoder.base2Encode(value);
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


// collection: range | list | catalog
FormattingVisitor.prototype.visitCollection = function(collection) {
    // check for an explicit type, otherwise use the implicit type
    var iterator;
    var type = collection.getParameter('$type');
    if (type) {
        const names = type.getValue().slice(0, -1);  // remove the version number
        type = '/' + names.join('/');
    } else {
        type = collection.getType();
    }
    const name = type.slice(type.lastIndexOf('/') + 1);  // extract the type name
    switch (type) {
        case '/bali/collections/Range':
            this.result += '<div class="range">';
            this.depth++;
            this.result += this.getNewline();
            collection.getFirstItem().acceptVisitor(this);
            this.result += '..';
            collection.getLastItem().acceptVisitor(this);
            this.depth--;
            this.result += this.getNewline();
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
                iterator.getNext().acceptVisitor(this);
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
    this.result += duration.getValue().toISOString();
    this.result += formatParameters(duration.getParameters());
    this.result += '</div>';
};


// moment: MOMENT
FormattingVisitor.prototype.visitMoment = function(moment) {
    this.result += '<div class="element moment">';
    this.result += moment.getValue().format(moment.getFormat());
    this.result += formatParameters(moment.getParameters());
    this.result += '</div>';
};


// name: NAME
FormattingVisitor.prototype.visitName = function(name) {
    this.result += '<div class="element name">';
    this.result += '/' + name.getValue().join('/');
    this.result += formatParameters(name.getParameters());
    this.result += '</div>';
};


// number:
//    'undefined' |
//    'infinity' |
//    '∞' |
//    REAL |
//    IMAGINARY |
//    '(' REAL (',' IMAGINARY | 'e^' ANGLE 'i') ')'
FormattingVisitor.prototype.visitNumber = function(number) {
    var parameters = number.getParameters();
    var format;
    if (parameters) {
        format = parameters['$format'];
        if (format) format = format.toString();
    }
    var formatted = '';
    if (number.isUndefined()) {
        formatted += 'undefined';
    } else if (number.isInfinite()) {
        formatted += '∞';
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
            this.depth++;
            const keys = Object.keys(parameters);

            // find the widest key
            var width = 0;
            keys.forEach(function(key) {
                const length = key.length;
                if (width < length) width = length;
            }, this);
            this.width.push(width);  // save off the widest one

            // iterate through the parameters
            keys.forEach(function(key) {
                const value = parameters[key];
                key = value.componentize(key);
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
            }, this);
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


// percent: PERCENT
FormattingVisitor.prototype.visitPercent = function(percent) {
    this.result += '<div class="element percent">';
    const value = percent.getValue();
    this.result += formatReal(value) + '%';
    this.result += formatParameters(percent.getParameters());
    this.result += '</div>';
};


// probability: 'false' | FRACTION | 'true'
FormattingVisitor.prototype.visitProbability = function(probability) {
    this.result += '<div class="element probability">';
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
    this.result += formatParameters(probability.getParameters());
    this.result += '</div>';
};


// procedure: '{' statements '}'
FormattingVisitor.prototype.visitProcedure = function(procedure) {
    this.result += '<pre class="element procedure">';
    this.result += '{';
    this.result += procedure.getStatements().toString();
    this.result += '}';
    this.result += formatParameters(procedure.getParameters());
    this.result += '</pre>';
};


// reference: RESOURCE
FormattingVisitor.prototype.visitReference = function(reference) {
    this.result += '<a class="element reference" href="' + reference.getValue() + '">';
    this.result += reference.getValue().toString().replace(/^https?:\/\/|^mailto:/g, '');
    const query = formatParameters(reference.getParameters()).replace(/ \(/, '').replace(/\)/, '').replace(/: /g, '=').replace(/, /g, '&');
    if (query) this.result += '?' + query;
    this.result += '</a>';
};


// reserved: RESERVED
FormattingVisitor.prototype.visitReserved = function(reserved) {
    this.result += '<div class="element reserved">';
    this.result += reserved.getValue();
    this.result += formatParameters(reserved.getParameters());
    this.result += '</div>';
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
    this.result += tag.getValue();
    this.result += formatParameters(tag.getParameters());
    this.result += '</pre>';
};


// text: TEXT | TEXT_BLOCK
FormattingVisitor.prototype.visitText = function(text) {
    this.result += '<div class="element text">';
    this.result += '"' + text.getValue() + '"';
    this.result += formatParameters(text.getParameters());
    this.result += '</div>';
};


// version: VERSION
FormattingVisitor.prototype.visitVersion = function(version) {
    this.result += '<div class="element version">';
    this.result += version.getValue().join('.');
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
        case 'π':
        case 'φ':
        case 'τ':
            return literal + ' i';
        default:
            return literal + 'i';
    }
};


const formatParameters = function(parameters) {
    var formatted = '';
    if (parameters) {
        const keys = Object.keys(parameters);
        formatted += ' (';
        var count = 0;
        keys.forEach(function(key) {
            if (count++) formatted += ', ';  // only after the first parameter has been formatted
            formatted += key.slice(1) + ': ';  // strip off the leading '$'
            formatted += parameters[key].toString().replace(/\$/g, '');  // strip of any leading '$'s
        }, this);
        formatted += ')';
    }
    return formatted;
};
