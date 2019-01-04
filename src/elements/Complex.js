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

/*
 * This element class captures the state and methods associated with a
 * complex number element.
 */
const antlr = require('antlr4');
const grammar = require('../grammar');
const precision = require('../utilities/Precision');
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;
const Angle = require('./Angle').Angle;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates an immutable instance of a complex number element.
 * The allowed ways to call it include:
 * <pre><code>
 * new Complex()  // defaults to zero
 * new Complex(3)  // real number
 * new Complex('4i')  // imaginary number
 * new Complex('(3, 4i)')  // rectangular complex form
 * new Complex('(12.3E-45 e^~pi i)')  // polar complex form
 * new Complex({real: 3, imaginary: 4})  // object form
 * </code></pre>
 * 
 * @constructor
 * @param {Number|String|Object} value The numeric or string value of the complex number.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Complex} The new complex element.
 */
function Complex(value, parameters) {
    Element.call(this, types.NUMBER, parameters);
    if (value === undefined || value === null) value = 0;  // default value
    this.format = 'rectangular';  // rectangular coordinates by default
    var source;

    // analyze the value
    const type = value.constructor.name;
    switch (type) {
        case 'Number':
            switch (value) {
                case NaN:
                    this.real = NaN;
                    this.imaginary = NaN;
                    source = 'undefined';
                    break;
                case Infinity:
                case -Infinity:
                    this.real = Infinity;
                    this.imaginary = Infinity;
                    source = 'infinity';
                    break;
                case 0:
                case -0:
                    this.real = 0;
                    this.imaginary = 0;
                    source = '0';
                    break;
                default:
                    this.real = value;
                    this.imaginary = 0;
                    source = Element.numberToSource(this.real);
            }
            break;
        case 'String':
            const chars = new antlr.InputStream(value);
            const lexer = new grammar.DocumentLexer(chars);
            const tokens = new antlr.CommonTokenStream(lexer);
            const parser = new grammar.DocumentParser(tokens);
            parser.buildParseTrees = true;
            const tree = parser.number();
            const nodeType = tree.constructor.name;
            switch (nodeType) {
                case 'UndefinedNumberContext':
                    this.real = NaN;
                    this.imaginary = NaN;
                    source = 'undefined';
                    break;
                case 'InfiniteNumberContext':
                    this.real = Infinity;
                    this.imaginary = Infinity;
                    source = 'infinity';
                    break;
                case 'RealNumberContext':
                    this.real = nodeToNumber(tree.real());
                    this.imaginary = 0;
                    source = Element.numberToSource(this.real);
                    break;
                case 'ImaginaryNumberContext':
                    this.real = 0;
                    this.imaginary = nodeToNumber(tree.imaginary());
                    source = imaginaryToSource(this.imaginary);
                    break;
                case 'ComplexNumberContext':
                    const real = nodeToNumber(tree.real());
                    const imaginary = nodeToNumber(tree.imaginary());
                    if (real === Infinity || imaginary === Infinity) {
                        this.real = Infinity;
                        this.imaginary = Infinity;
                        source = 'infinity';
                        break;
                    }
                    const delimiter = tree.del.text;
                    if (delimiter === ',') {
                        this.real = real;
                        this.imaginary = imaginary;
                        source = '(';
                        source += Element.numberToSource(this.real);
                        source += ', ';
                        source += imaginaryToSource(this.imaginary);
                        source += ')';
                    } else {
                        this.format = 'polar';
                        var magnitude = real;
                        var phase = new Angle(imaginary);
                        if (magnitude < 0) {
                            magnitude = -magnitude;
                            phase = Angle.inverse(phase);
                        }
                        this.real = magnitude * Angle.cosine(phase);
                        this.imaginary = magnitude * Angle.sine(phase);
                        source = '(';
                        source += Element.numberToSource(magnitude);
                        source += ' e^~';
                        source += imaginaryToSource(phase.value);
                        source += ')';
                    }
                    break;
                default:
                    throw new Error('BUG: An invalid complex number value was passed to the constructor: ' + value);
            }
            break;
        case 'Object':
            this.real = value.real;
            this.imaginary = value.imaginary;
            source = '(';
            source += Element.numberToSource(this.real);
            source += ', ';
            source += imaginaryToSource(this.imaginary);
            source += ')';
            break;

        default:
            throw new Error('BUG: An invalid complex number value type was passed to the constructor: ' + type);
    }

    // return constants if possible
    if (this.isUndefined() && Complex.UNDEFINED) return Complex.UNDEFINED;
    if (this.isInfinite() && Complex.INFINITY) return Complex.INFINITY;
    if (this.isZero() && Complex.ZERO) return Complex.ZERO;

    // cache the canonically formatted version
    this.setSource(source);

    return this;
}
Complex.prototype = Object.create(Element.prototype);
Complex.prototype.constructor = Complex;
exports.Complex = Complex;


// PUBLIC METHODS

/**
 * This method determines whether this complex number is undefined.
 * 
 * @returns {boolean} Whether or not this complex number is undefined.
 */
Complex.prototype.isUndefined = function() {
    return this.real.toString() === 'NaN';  // must use strings since NaN !== NaN
};


/**
 * This method determines whether this complex number is zero.
 * 
 * @returns {boolean} Whether or not this complex number is zero.
 */
Complex.prototype.isZero = function() {
    return this.real === 0 && this.imaginary === 0;
};


/**
 * This method determines whether this complex number is infinite.
 * 
 * @returns {boolean} Whether or not this complex number is infinite.
 */
Complex.prototype.isInfinite = function() {
    return this.real === Infinity;
};


/**
 * This function returns the real part of a complex number.
 * 
 * @returns {number} The real part of the complex number.
 */
Complex.prototype.getReal = function() {
    return this.real;
};


/**
 * This function returns the imaginary part of a complex number.
 * 
 * @returns {number} The imaginary part of the complex number.
 */
Complex.prototype.getImaginary = function() {
    return this.imaginary;
};


/**
 * This function returns the magnitude of a complex number.
 * 
 * @returns {number} The magnitude of the complex number.
 */
Complex.prototype.getMagnitude = function() {
    // need to preserve full precision on this except for the sum part
    var magnitude = Math.sqrt(precision.sum(Math.pow(this.real, 2), Math.pow(this.imaginary, 2)));
    magnitude = precision.lockOnExtreme(magnitude);
    return magnitude;
};


/**
 * This function returns the phase (imaginary angle) of a complex number.
 * 
 * @returns {Angle} The phase of the complex number or undefined if the complex number is
 * infinite or undefined.
 */
Complex.prototype.getPhase = function() {
    var phase;
    if (!this.isInfinite() && !this.isUndefined()) {
        phase = Angle.arctangent(this.imaginary, this.real);
    }
    return phase;
};


/**
 * This method returns a literal string representation of the component.
 * 
 * @returns {String} The corresponding literal string representation.
 */
Complex.prototype.toLiteral = function() {
    if (this.parameters) {
        const format = this.parameters.getValue(1);
        if (format.toString() === '$polar') {
            return this.toPolar();
        }
    }
    return (this.format === 'polar') ? this.toPolar() : this.toRectangular();
};


/**
 * This method determines whether or not this complex number is equal to another complex number.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean} Whether or not this component is equal to another component.
 */
Complex.prototype.isEqualTo = function(that) {
    return this.comparedTo(that) === 0;
};


/**
 * This method compares this complex number to another for ordering.
 * 
 * @param {Object} that The other complex number to be compared with. 
 * @returns {Number} 1 if greater, 0 if equal, and -1 if less.
 */
Complex.prototype.comparedTo = function(that) {
    if (!that) return 1;  // anything is greater than nothing

    // check the types
    const thisType = this.constructor.name;
    const thatType = that.constructor.name;
    if (thisType !== thatType) {
        return thisType.localeCompare(thatType);
    }

    // the types are the same, check the real parts
    if (Math.fround(this.real) < Math.fround(that.real)) return -1;
    if (Math.fround(this.real) > Math.fround(that.real)) return 1;

    // the real parts are equal, check the imaginary parts
    if (Math.fround(this.imaginary) < Math.fround(that.imaginary)) return -1;
    if (Math.fround(this.imaginary) > Math.fround(that.imaginary)) return 1;

    // they are also equal
    return 0;
};


/**
 * This method returns the Bali Document Notation™ for this complex number
 * in retangular form.
 * 
 * @returns {String} The source string.
 */
Complex.prototype.toRectangular = function() {
    if (this.format === 'rectangular') return this.source;
    if (this.isUndefined()) return 'undefined';
    if (this.isInfinite()) return 'infinity';
    if (this.isZero()) return '0';
    if (this.imaginary === 0) return Element.numberToSource(this.real);  // real part isn't zero
    if (this.real === 0) return imaginaryToSource(this.imaginary);  // imaginary part isn't zero
    var source = '(';
    source += Element.numberToSource(this.real);
    source += ', ';
    source += imaginaryToSource(this.imaginary);
    source += ')';
    return source;
};


/**
 * This method returns the Bali Document Notation™ for this complex number
 * in polar form.
 * 
 * @returns {String} The source string.
 */
Complex.prototype.toPolar = function() {
    if (this.format === 'polar') return this.source;
    if (this.isUndefined()) return 'undefined';
    if (this.isInfinite()) return 'infinity';
    if (this.isZero()) return '0';
    if (this.imaginary === 0 && this.real > 0) return Element.numberToSource(this.real);
    var source = '(';
    source += Element.numberToSource(this.getMagnitude());
    source += ' e^~';
    source += imaginaryToSource(this.getPhase().value);
    source += ')';
    return source;
};


/**
 * This method returns the real part of this complex number.
 * 
 * @returns {Number} The real part of this complex number.
 */
Complex.prototype.toNumber = function() {
    return this.real;
};


// PUBLIC CONSTANTS

Complex.UNDEFINED = new Complex('undefined');
Complex.INFINITY = new Complex('infinity');
Complex.ZERO = new Complex(0);
Complex.E = precision.E;
Complex.PI = precision.PI;
Complex.PHI = precision.PHI;


// PUBLIC FUNCTIONS

Complex.inverse = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return Complex.ZERO;
    const real = -complex.real;
    const imaginary = -complex.imaginary;
    const result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.reciprocal = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.ZERO;
    if (complex.isZero()) return Complex.INFINITY;
    const squared = precision.sum(precision.product(complex.real, complex.real), precision.product(complex.imaginary, complex.imaginary));
    const real = precision.quotient(complex.real, squared);
    const imaginary = -precision.quotient(complex.imaginary, squared);
    const result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.conjugate = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return Complex.ZERO;
    const real = complex.real;
    const imaginary = -complex.imaginary;
    const result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.exponential = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return new Complex(1);
    const scale = precision.exponential(precision.E, complex.real);
    const real = precision.product(scale, (precision.cosine(complex.imaginary)));
    const imaginary = precision.product(scale, (precision.sine(complex.imaginary)));
    const result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.logarithm = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return Complex.INFINITY;
    const real = precision.logarithm(precision.E, Complex.magnitude(complex));
    const imaginary = Complex.phase(complex).value;
    const result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.factorial = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return new Complex(1);
    // just implement real factorials for now...
    const factorial = gamma(complex.real + 1);
    const result = new Complex(String(factorial));
    result.format = complex.format;
    return result;
};


Complex.sum = function(first, second) {
    if (first.isUndefined() || second.isUndefined()) return Complex.UNDEFINED;
    if (first.isInfinite() || second.isInfinite()) return Complex.INFINITY;
    if (first.isEqualTo(Complex.inverse(second))) return Complex.ZERO;
    const real = precision.sum(first.real, second.real);
    const imaginary = precision.sum(first.imaginary, second.imaginary);
    const result = new Complex({real: real, imaginary: imaginary});
    result.format = first.format;
    return result;
};


Complex.difference = function(first, second) {
    return Complex.sum(first, Complex.inverse(second));
};


Complex.scaled = function(complex, factor) {
    if (complex.isUndefined() || Number.isNaN(factor)) return Complex.UNDEFINED;
    if (complex.isZero() && !Number.isFinite(factor)) return Complex.UNDEFINED;
    if (complex.isInfinite() && factor === 0) return Complex.UNDEFINED;
    if (complex.isInfinite() || !Number.isFinite(factor)) return Complex.INFINITY;
    if (complex.isZero() || factor === 0) return Complex.ZERO;
    const real = precision.product(complex.real, factor);
    const imaginary = precision.product(complex.imaginary, factor);
    const result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.product = function(first, second) {
    if (first.isUndefined() || second.isUndefined()) return Complex.UNDEFINED;
    if (first.isZero() && second.isInfinite()) return Complex.UNDEFINED;
    if (first.isInfinite() && second.isZero()) return Complex.UNDEFINED;
    if (first.isInfinite() || second.isInfinite()) return Complex.INFINITY;
    if (first.isZero() || second.isZero()) return Complex.ZERO;
    const real = precision.difference(precision.product(first.real, second.real), precision.product(first.imaginary, second.imaginary));
    const imaginary = precision.sum(precision.product(first.real, second.imaginary), precision.product(first.imaginary * second.real));
    const result = new Complex({real: real, imaginary: imaginary});
    result.format = first.format;
    return result;
};


Complex.quotient = function(first, second) {
    return Complex.product(first, Complex.reciprocal(second));
};


Complex.remainder = function(first, second) {
    if (first.isUndefined() || second.isUndefined()) return Complex.UNDEFINED;
    if (first.isInfinite() && second.isInfinite()) return Complex.UNDEFINED;
    if (first.isZero() && second.isZero()) return Complex.UNDEFINED;
    if (second.isInfinite()) return Complex.ZERO;
    if (second.isZero()) return Complex.INFINITY;
    // just implement for integer values
    // TODO: what does remainder mean for complex numbers?
    const firstInteger = Math.round(first.real);
    const secondInteger = Math.round(second.real);
    return new Complex(precision.remainder(firstInteger, secondInteger));
};


// PRIVATE FUNCTIONS

// TODO: should the math in the gamma function use the precision module?
function gamma(number) {
    const p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
        771.32342877765313, -176.61502916214059, 12.507343278686905,
        -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
    ];
 
    const g = 7;
    if (number < 0.5) {
        return Math.PI / (Math.sin(Math.PI * number) * gamma(1 - number));
    }
 
    number -= 1;
    var a = p[0];
    const t = number + g + 0.5;
    for (var i = 1; i < p.length; i++) {
        a += p[i] / (number + i);
    }
 
    return Math.sqrt(2 * Math.PI) * Math.pow(t, number + 0.5) * Math.exp(-t) * a;
}


function imaginaryToSource(imaginary) {
    var source = Element.numberToSource(imaginary);
    switch (source) {
        case 'undefined':
        case 'infinity':
            break;
        case 'e':
        case 'pi':
        case 'phi':
            source += ' i';
            break;
        default:
            source += 'i';
    }
    return source;
}


/*
 * This function takes a parse tree node and coverts it into a Javascript number.
 */
function nodeToNumber(realNode) {
    var number;
    const string = realNode.getText();
    if (string.startsWith('e')) {
        number = Complex.E;
    } else if (string.startsWith('pi')) {
        number = Complex.PI;
    } else if (string.startsWith('phi')) {
        number = Complex.PHI;
    } else if (string.endsWith('i')) {
        number = Number(string.slice(0, -1));  // strip off tailing 'i' (the space doesn't matter)
    } else {
        number = Number(string);
    }
    return precision.lockOnExtreme(number);
}
