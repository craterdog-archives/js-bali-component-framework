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
var antlr = require('antlr4');
var grammar = require('../grammar');
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;
var Angle = require('./Angle').Angle;


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

    // analyze the value
    var type = value.constructor.name;
    switch (type) {
        case 'Number':
            switch (value) {
                case NaN:
                    this.real = NaN;
                    this.imaginary = NaN;
                    break;
                case Infinity:
                case -Infinity:
                    this.real = Infinity;
                    this.imaginary = Infinity;
                    break;
                default:
                    this.real = value;
                    this.imaginary = 0;
            }
            break;
        case 'String':
            var chars = new antlr.InputStream(value);
            var lexer = new grammar.DocumentLexer(chars);
            var tokens = new antlr.CommonTokenStream(lexer);
            var parser = new grammar.DocumentParser(tokens);
            parser.buildParseTrees = true;
            var tree = parser.number();
            var nodeType = tree.constructor.name;
            switch (nodeType) {
                case 'UndefinedNumberContext':
                    this.real = NaN;
                    this.imaginary = NaN;
                    break;
                case 'InfiniteNumberContext':
                    this.real = Infinity;
                    this.imaginary = Infinity;
                    break;
                case 'RealNumberContext':
                    this.real = nodeToNumber(tree.real());
                    this.imaginary = 0;
                    break;
                case 'ImaginaryNumberContext':
                    this.real = 0;
                    this.imaginary = nodeToNumber(tree.imaginary());
                    break;
                case 'ComplexNumberContext':
                    var real = tree.real();
                    var imaginary = tree.imaginary();
                    var delimiter = tree.del.text;
                    if (delimiter === ',') {
                        this.real = nodeToNumber(real);
                        this.imaginary = nodeToNumber(imaginary);
                    } else {
                        this.format = 'polar';
                        var magnitude = nodeToNumber(real);
                        var angle = new Angle(nodeToNumber(imaginary));
                        if (magnitude < 0) {
                            magnitude = -magnitude;
                            angle = Angle.reciprocal(angle);
                        }
                        this.real = lockOnPole(magnitude * Angle.cosine(angle));
                        this.imaginary = lockOnPole(magnitude * Angle.sine(angle));
                    }
                    break;
                default:
                    throw new Error('COMPLEX: An invalid string was passed to the constructor : ' + value);
            }
            break;
        case 'Object':
            this.real = value.real;
            this.imaginary = value.imaginary;
            break;

        default:
            throw new Error('COMPLEX: An invalid type was passed to the constructor : ' + type);
    }

    // return constants if possible
    if (this.isUndefined() && Complex.UNDEFINED) return Complex.UNDEFINED;
    if (this.isInfinite() && Complex.INFINITY) return Complex.INFINITY;
    if (this.isZero() && Complex.ZERO) return Complex.ZERO;

    // cache the canonically formatted version
    var source;
    if (this.format === 'rectangular') {
        source = this.toRectangular();
    } else {
        source = this.toPolar();
    }
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
    if (typeof this !== typeof that) {
        return this.constructor.name.localeCompare(that.constructor.name);
    }

    // the types are the same, check the real parts
    if (this.real < that.real) return -1;
    if (this.real > that.real) return 1;

    // the real parts are equal, check the imaginary parts
    if (this.imaginary < that.imaginary) return -1;
    if (this.imaginary > that.imaginary) return 1;

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
    if (this.isUndefined()) return 'undefined';
    if (this.isInfinite()) return 'infinity';
    if (this.isZero()) return '0';
    if (this.imaginary === 0 && this.real > 0) return Element.numberToSource(this.real);
    var source = '(';
    source += Element.numberToSource(Complex.magnitude(this));
    source += ' e^~';
    source += imaginaryToSource(Complex.angle(this).value);
    source += ')';
    return source;
};


/**
 * This method returns the real part of this complex number.
 * 
 * @returns {number}
 */
Complex.prototype.toNumber = function() {
    return this.real;
};


// PUBLIC CONSTANTS

Complex.UNDEFINED = new Complex('undefined');
Complex.INFINITY = new Complex('infinity');
Complex.ZERO = new Complex(0);
Complex.E = Math.E;
Complex.PI = Math.PI;
Complex.PHI = (Math.sqrt(5) + 1) / 2;


// PUBLIC FUNCTIONS

/**
 * This function returns the real part of a complex number.
 * 
 * @param {Complex} complex The complex number.
 * @returns {number} The real part of the complex number.
 */
Complex.real = function(complex) {
    return complex.real;
};


/**
 * This function returns the imaginary part of a complex number.
 * 
 * @param {Complex} complex The complex number.
 * @returns {number} The imaginary part of the complex number.
 */
Complex.imaginary = function(complex) {
    return complex.imaginary;
};


/**
 * This function returns the magnitude of a complex number.
 * 
 * @param {Complex} complex The complex number.
 * @returns {number} The magnitude of the complex number.
 */
Complex.magnitude = function(complex) {
    var magnitude = Math.sqrt(Math.pow(complex.real, 2) + Math.pow(complex.imaginary, 2));
    return magnitude;
};


/**
 * This function returns the angle of a complex number.
 * 
 * @param {Complex} complex The complex number.
 * @returns {Angle} The angle of the complex number or undefined if the complex number is
 * infinite or undefined.
 */
Complex.angle = function(complex) {
    var angle;
    if (!complex.isInfinite() && !complex.isUndefined()) {
        angle = Angle.arctangent(complex.imaginary, complex.real);
    }
    return angle;
};


Complex.inverse = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return Complex.ZERO;
    var real = -complex.real;
    var imaginary = -complex.imaginary;
    var result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.reciprocal = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.ZERO;
    if (complex.isZero()) return Complex.INFINITY;
    var squared = complex.real * complex.real + complex.imaginary * complex.imaginary;
    var real = complex.real / squared;
    var imaginary = -complex.imaginary / squared;
    var result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.conjugate = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return Complex.ZERO;
    var real = complex.real;
    var imaginary = -complex.imaginary;
    var result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.exponential = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return new Complex(1);
    var scale = Math.exp(complex.real);
    var real = scale * (Math.cos(complex.imaginary));
    var imaginary = scale * (Math.sin(complex.imaginary));
    var result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.logarithm = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return Complex.INFINITY;
    var real = Math.log(Complex.magnitude(complex));
    var imaginary = Complex.angle(complex).value;
    var result = new Complex({real: real, imaginary: imaginary});
    result.format = complex.format;
    return result;
};


Complex.factorial = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return new Complex(1);
    // just implement real factorials for now...
    var factorial = gamma(complex.real + 1);
    var result = new Complex(String(factorial));
    result.format = complex.format;
    return result;
};


Complex.sum = function(first, second) {
    if (first.isUndefined() || second.isUndefined()) return Complex.UNDEFINED;
    if (first.isInfinite() || second.isInfinite()) return Complex.INFINITY;
    if (first.isEqualTo(Complex.inverse(second))) return Complex.ZERO;
    var real = first.real + second.real;
    var imaginary = first.imaginary + second.imaginary;
    var result = new Complex({real: real, imaginary: imaginary});
    result.format = first.format;
    return result;
};


Complex.difference = function(first, second) {
    return Complex.sum(first, Complex.inverse(second));
};


Complex.product = function(first, second) {
    if (first.isUndefined() || second.isUndefined()) return Complex.UNDEFINED;
    if (first.isZero() && second.isInfinite()) return Complex.UNDEFINED;
    if (first.isInfinite() && second.isZero()) return Complex.UNDEFINED;
    if (first.isInfinite() || second.isInfinite()) return Complex.INFINITY;
    if (first.isZero() || second.isZero()) return Complex.ZERO;
    var real = first.real * second.real - first.imaginary * second.imaginary;
    var imaginary = first.real * second.imaginary + first.imaginary * second.real;
    var result = new Complex({real: real, imaginary: imaginary});
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
    var firstInteger = Math.round(first.real);
    var secondInteger = Math.round(second.real);
    return new Complex(firstInteger % secondInteger);
};


Complex.power = function(base, exponent) {
    if (base.isUndefined() || exponent.isUndefined()) return Complex.UNDEFINED;
    if (exponent.isZero()) return new Complex(1);
    if (base.isZero()) return Complex.ZERO;
    if (base.isInfinite() || exponent.isInfinite()) return Complex.INFINITY;
    return Complex.exponential(Complex.product(exponent, Complex.logarithm(base)));
};


// PRIVATE FUNCTIONS

function lockOnPole(number) {
    if (number > 0 && number <= 6.123233995736766e-16) return 0;
    if (number < 0 && number >= -6.123233995736766e-16) return 0;
    if (number > 0 && number >= 16331239353195370) return Infinity;
    if (number < 0 && number <= -16331239353195370) return Infinity;
    return number;
}

function gamma(number) {
    var p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
        771.32342877765313, -176.61502916214059, 12.507343278686905,
        -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
    ];
 
    var g = 7;
    if (number < 0.5) {
        return Math.PI / (Math.sin(Math.PI * number) * gamma(1 - number));
    }
 
    number -= 1;
    var a = p[0];
    var t = number + g + 0.5;
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


// NOTE: the following functions take parse tree nodes and covert them into
// Javascript numbers.

function nodeToNumber(realNode) {
    var number;
    var string = realNode.getText();
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
    return number;
}
