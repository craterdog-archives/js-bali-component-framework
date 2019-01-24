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
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Angle = require('./Angle').Angle;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates an immutable instance of a complex number using the specified
 * real and imaginary values.  If the imaginary value is an angle then the complex number
 * is in polar form, otherwise it is in rectangular form.
 * 
 * @constructor
 * @param {Number} real The real value of the complex number.
 * @param {Number|Angle} imaginary The imaginary value of the complex number.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Complex} The new complex number.
 */
function Complex(real, imaginary, parameters) {
    abstractions.Element.call(this, utilities.types.NUMBER, parameters);

    // normalize the values
    if (real === undefined || real === null || real === -0) {
        real = 0;
    }
    real = utilities.precision.lockOnExtreme(real);
    if (imaginary === undefined || imaginary === null || imaginary === -0) {
        imaginary = 0;
    }
    if (imaginary.type === utilities.types.ANGLE) {
        // convert polar to rectangular
        var magnitude = real;
        var phase = imaginary;
        if (magnitude < 0) {
            // normalize the magnitude
            magnitude = -magnitude;
            phase = Angle.inverse(phase);
        }
        real = magnitude * Angle.cosine(phase);
        imaginary = magnitude * Angle.sine(phase);
    }
    imaginary = utilities.precision.lockOnExtreme(imaginary);
    if (real.toString() === 'NaN' || imaginary.toString() === 'NaN') {
        real = NaN;
        imaginary = NaN;
    }
    if (real === Infinity || real === -Infinity || imaginary === Infinity || imaginary === -Infinity) {
        real = Infinity;
        imaginary = Infinity;
    }
    this.real = real;
    this.imaginary = imaginary;

    this.setSource(this.toLiteral(parameters));
    return this;
}
Complex.prototype = Object.create(abstractions.Element.prototype);
Complex.prototype.constructor = Complex;
exports.Complex = Complex;


/**
 * This constructor creates an immutable instance of a complex number using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the complex number.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Complex} The new complex number.
 */
Complex.fromLiteral = function(literal, parameters) {
    const chars = new antlr.InputStream(literal);
    const lexer = new grammar.DocumentLexer(chars);
    const tokens = new antlr.CommonTokenStream(lexer);
    const parser = new grammar.DocumentParser(tokens);
    parser.buildParseTrees = true;
    const ctx = parser.number();
    var real, imaginary;
    if (ctx.children.length === 1) {
        switch (ctx.getText()) {
            case 'undefined':
                real = NaN;
                imaginary = NaN;
                break;
            case 'infinity':
                real = Infinity;
                imaginary = Infinity;
                break;
            default:
                if (ctx.real()) {
                    real = parseReal(ctx.real().getText());
                    imaginary = 0;
                } else {
                    real = 0;
                    imaginary = parseImaginary(ctx.imaginary().getText());
                }
        }
    } else {
        real = parseReal(ctx.real().getText());
        if (ctx.imaginary()) {
            imaginary = parseImaginary(ctx.imaginary().getText());
        } else {
            imaginary = Angle.fromLiteral(ctx.angle().getText());
        }
        if (real === Infinity || imaginary === Infinity) {
            real = Infinity;
            imaginary = Infinity;
        }
    }
    return new Complex(real, imaginary, parameters);
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Parameters} parameters Any parameters that are needed for formatting.
 * @returns {String} The corresponding literal string representation.
 */
Complex.prototype.toLiteral = function(parameters) {
    if (parameters) {
        const format = parameters.getValue('$format');
        if (format && format.toString() === '$polar') {
            return this.toPolar();
        }
    }
    return this.toRectangular();
};


/**
 * This method returns whether or not this complex number has a meaningful value. If the magnitude
 * is undefined, zero or infinity it returns <code>false</code>, otherwise it returns <code>true</code>.
 * 
 * @returns {Boolean} Whether or not this complex number has a meaningful value.
 */
Complex.prototype.toBoolean = function() {
    return !(this.isZero() || this.isUndefined() || this.isInfinite());
};


/**
 * This method returns the real part of this complex number.
 * 
 * @returns {Number} The real part of this complex number.
 */
Complex.prototype.toNumber = function() {
    return this.real;
};


/**
 * This method returns the Bali Document Notation™ for this complex number
 * in retangular form.
 * 
 * @returns {String} The literal string.
 */
Complex.prototype.toRectangular = function() {
    if (this.isUndefined()) return 'undefined';
    if (this.isInfinite()) return 'infinity';
    if (this.isZero()) return '0';
    if (this.imaginary === 0) return formatReal(this.real);  // real part isn't zero
    if (this.real === 0) return formatImaginary(this.imaginary);  // imaginary part isn't zero
    var literal = '(';
    literal += formatReal(this.real);
    literal += ', ';
    literal += formatImaginary(this.imaginary);
    literal += ')';
    return literal;
};


/**
 * This method returns the Bali Document Notation™ for this complex number
 * in polar form.
 * 
 * @returns {String} The literal string.
 */
Complex.prototype.toPolar = function() {
    if (this.isUndefined()) return 'undefined';
    if (this.isInfinite()) return 'infinity';
    if (this.isZero()) return '0';
    if (this.imaginary === 0 && this.real > 0) return formatReal(this.real);
    var literal = '(';
    literal += formatReal(this.getMagnitude());
    literal += ' e^~';
    literal += formatImaginary(this.getPhase().value);
    literal += ')';
    return literal;
};


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
    var magnitude = Math.sqrt(utilities.precision.sum(Math.pow(this.real, 2), Math.pow(this.imaginary, 2)));
    magnitude = utilities.precision.lockOnExtreme(magnitude);
    return magnitude;
};


/**
 * This function returns the phase (imaginary angle) of a complex number.
 * 
 * @returns {Angle} The phase of the complex number or undefined if the complex number is
 * infinite or undefined.
 */
Complex.prototype.getPhase = function() {
    if (this.isInfinite()) return new Angle(0);
    if (this.isUndefined()) return undefined;
    const phase = Angle.arctangent(this.imaginary, this.real);
    return phase;
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
        return this.toString().localeCompare(that.toString());
    }

    // the types are the same, check the magnitudes
    const thisMagnitude = this.getMagnitude();
    const thatMagnitude = that.getMagnitude();
    if (Math.fround(thisMagnitude) < Math.fround(thatMagnitude)) return -1;
    if (Math.fround(thisMagnitude) > Math.fround(thatMagnitude)) return 1;

    // the magnitudes are equal, check the phases
    const thisPhase = this.getPhase();
    const thatPhase = that.getPhase();
    if (thisPhase) return thisPhase.comparedTo(thatPhase);

    return 0;  // both must be undefined
};


// PUBLIC FUNCTIONS

/**
 * This function returns the arithmetic inverse of the specified complex number.
 * <pre>
 *     inverse(z): (-z.real, -z.imaginary i)
 * </pre>
 * 
 * @param {Complex} complex The complex number to be inverted.
 * @returns {Complex} The resulting complex number.
 */
Complex.inverse = function(complex) {
    if (complex.isUndefined()) return new Complex(NaN);
    if (complex.isInfinite()) return new Complex(Infinity);
    if (complex.isZero()) return new Complex(0);
    const real = -complex.real;
    const imaginary = -complex.imaginary;
    const result = new Complex(real, imaginary, complex.parameters);
    return result;
};


/**
 * This function returns the multiplicative inverse of the specified complex number.
 * <pre>
 *     reciprocal(z): (z.real, -z.imaginary i)/z.magnitude^2
 *                    or
 *     reciprocal(z): (1/z.magnitude e^~-z.phase i)
 * </pre>
 * 
 * @param {Complex} complex The complex number to be inverted.
 * @returns {Complex} The resulting complex number.
 */
Complex.reciprocal = function(complex) {
    if (complex.isUndefined()) return new Complex(NaN);
    if (complex.isInfinite()) return new Complex(0);
    if (complex.isZero()) return new Complex(Infinity);
    const squared = utilities.precision.sum(utilities.precision.product(complex.real, complex.real), utilities.precision.product(complex.imaginary, complex.imaginary));
    const real = utilities.precision.quotient(complex.real, squared);
    const imaginary = -utilities.precision.quotient(complex.imaginary, squared);
    const result = new Complex(real, imaginary, complex.parameters);
    return result;
};


/**
 * This function returns the complex conjugate of the specified complex number.
 * <pre>
 *     conjugate(z): (z.real, -z.imaginary i)
 * </pre>
 * 
 * @param {Complex} complex The complex number to be conjugated.
 * @returns {Complex} The resulting complex number.
 */
Complex.conjugate = function(complex) {
    if (complex.isUndefined()) return new Complex(NaN);
    if (complex.isInfinite()) return new Complex(Infinity);
    if (complex.isZero()) return new Complex(0);
    const real = complex.real;
    const imaginary = -complex.imaginary;
    const result = new Complex(real, imaginary, complex.parameters);
    return result;
};


/**
 * This function returns the complex factorial of the specified complex number.
 * 
 * @param {Complex} complex The complex number.
 * @returns {Complex} The resulting complex number.
 */
Complex.factorial = function(complex) {
    if (complex.isUndefined()) return new Complex(NaN);
    if (complex.isInfinite()) return new Complex(Infinity);
    if (complex.isZero()) return new Complex(1);
    // just implement real factorials for now...
    // TODO: what should a complex factorial be?
    const factorial = gamma(complex.real + 1);
    const result = new Complex(factorial);
    return result;
};


/**
 * This function returns the sum of two complex numbers.
 * <pre>
 *     sum(x, y): (x.real + y.real, (x.imaginary + y.imaginary) i)
 * </pre>
 * 
 * @param {Complex} first The first complex number to be added.
 * @param {Complex} second The second complex number to be added.
 * @returns {Complex} The resulting complex number.
 */
Complex.sum = function(first, second) {
    if (first.isUndefined() || second.isUndefined()) return new Complex(NaN);
    if (first.isInfinite() || second.isInfinite()) return new Complex(Infinity);
    if (first.isEqualTo(Complex.inverse(second))) return new Complex(0);
    const real = utilities.precision.sum(first.real, second.real);
    const imaginary = utilities.precision.sum(first.imaginary, second.imaginary);
    const result = new Complex(real, imaginary, first.parameters);
    return result;
};


/**
 * This function returns the difference of two complex numbers.
 * <pre>
 *     difference(x, y): (x.real - y.real, (x.imaginary - y.imaginary) i)
 * </pre>
 * 
 * @param {Complex} first The first complex number to be subtracted from.
 * @param {Complex} second The second complex number to be subtracted.
 * @returns {Complex} The resulting complex number.
 */
Complex.difference = function(first, second) {
    return Complex.sum(first, Complex.inverse(second));
};


/**
 * This function returns a scaled version of a complex number.
 * <pre>
 *     scaled(z, factor): (factor * z.real, factor * z.imaginary i)
 *                              or
 *     scaled(z, factor): (factor * z.magnitude, z.phase i)
 * </pre>
 * 
 * @param {Complex} complex The complex number to be scaled.
 * @param {Complex} factor The scale factor.
 * @returns {Complex} The resulting complex number.
 */
Complex.scaled = function(complex, factor) {
    if (complex.isUndefined() || Number.isNaN(factor)) return new Complex(NaN);
    if (complex.isZero() && !Number.isFinite(factor)) return new Complex(NaN);
    if (complex.isInfinite() && factor === 0) return new Complex(NaN);
    if (complex.isInfinite() || !Number.isFinite(factor)) return new Complex(Infinity);
    if (complex.isZero() || factor === 0) return new Complex(0);
    const real = utilities.precision.product(complex.real, factor);
    const imaginary = utilities.precision.product(complex.imaginary, factor);
    const result = new Complex(real, imaginary, complex.parameters);
    return result;
};


/**
 * This function returns the product of two complex numbers.
 * <pre>
 *     product(x, y): (x.magnitude * y.magnitude e^~(x.phase + y.phase) i)
 * </pre>
 * 
 * @param {Complex} first The first complex number to be multiplied.
 * @param {Complex} second The second complex number to be multiplied.
 * @returns {Complex} The resulting complex number.
 */
Complex.product = function(first, second) {
    if (first.isUndefined() || second.isUndefined()) return new Complex(NaN);
    if (first.isZero() && second.isInfinite()) return new Complex(NaN);
    if (first.isInfinite() && second.isZero()) return new Complex(NaN);
    if (first.isInfinite() || second.isInfinite()) return new Complex(Infinity);
    if (first.isZero() || second.isZero()) return new Complex(0);
    const real = utilities.precision.difference(utilities.precision.product(first.real, second.real), utilities.precision.product(first.imaginary, second.imaginary));
    const imaginary = utilities.precision.sum(utilities.precision.product(first.real, second.imaginary), utilities.precision.product(first.imaginary * second.real));
    const result = new Complex(real, imaginary, first.parameters);
    return result;
};


/**
 * This function returns the quotient of two complex numbers.
 * <pre>
 *     quotient(x, y): (x.magnitude / y.magnitude e^~(x.phase - y.phase) i)
 * </pre>
 * 
 * @param {Complex} first The first complex number to be divided.
 * @param {Complex} second The second complex number to be divided by.
 * @returns {Complex} The resulting complex number.
 */
Complex.quotient = function(first, second) {
    return Complex.product(first, Complex.reciprocal(second));
};


/**
 * This function returns the remainder of the quotient of two real numbers.
 * 
 * @param {Complex} first The first real number to be divided.
 * @param {Complex} second The second real number to be divided by.
 * @returns {Complex} The resulting real number.
 */
Complex.remainder = function(first, second) {
    if (first.isUndefined() || second.isUndefined()) return new Complex(NaN);
    if (first.isInfinite() && second.isInfinite()) return new Complex(NaN);
    if (first.isZero() && second.isZero()) return new Complex(NaN);
    if (second.isInfinite()) return new Complex(0);
    if (second.isZero()) return new Complex(Infinity);
    // just implement for integer values
    // TODO: what does remainder mean for complex numbers?
    const firstInteger = Math.round(first.real);
    const secondInteger = Math.round(second.real);
    return new Complex(utilities.precision.remainder(firstInteger, secondInteger));
};


/**
 * This function returns the complex exponential of the specified complex number.
 * <pre>
 *     exponential(base, exponent): exp(exponent * ln(base))
 * </pre>
 * 
 * @param {Complex} base The complex base.
 * @param {Complex} exponent The complex exponent.
 * @returns {Complex} The resulting complex number.
 */
Complex.exponential = function(base, exponent) {
    if (base.isUndefined() || exponent.isUndefined()) return new Complex(NaN);
    if (base.isZero() && (exponent.isZero() || exponent.isInfinite())) return new Complex(NaN);
    if (base.isInfinite() && exponent.isZero()) return new Complex(NaN);
    if (exponent.isInfinite()) return new Complex(Infinity);
    if (exponent.isZero()) return new Complex(1);
    const result = exp(Complex.product(exponent, ln(base)));
    return result;
};


/**
 * This function returns the complex logarithm with the specified base of the
 * specified complex number.
 * <pre>
 *     logarithm(base, value): ln(value)/ln(base)
 * </pre>
 * 
 * @param {Complex} base The base of the resulting exponent.
 * @param {Complex} value The complex number.
 * @returns {Complex} The resulting complex number.
 */
Complex.logarithm = function(base, value) {
    if (base.isUndefined() || value.isUndefined()) return new Complex(NaN);
    if (base.isZero() && (value.isZero() || value.isInfinite())) return new Complex(NaN);
    if (base.isInfinite() && (value.isZero() || value.isInfinite())) return new Complex(NaN);
    if (value.isInfinite()) return new Complex(Infinity);
    if (value.isZero()) return new Complex(Infinity);
    const result = Complex.quotient(ln(value), ln(base));
    return result;
};


// PRIVATE FUNCTIONS

/**
 * This function parses the literal string for an imaginary number and returns the numeric value
 * of the imaginary number.
 *
 * @param {String} literal The literal string for the imaginary number.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {Number} The numeric value of the imaginary number.
 */
function parseImaginary(literal, parameters) {
    literal = literal.slice(0, -1).trim();  // remove the trailing 'i'
    const value = abstractions.Element.literalToNumber(literal);
    return value;
}


/**
 * This function formats an imaginary number as a literal string.
 * 
 * @param {Number} value The imaginary number.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The literal string for the imaginary number.
 */
function formatImaginary(value, parameters) {
    var literal = abstractions.Element.numberToLiteral(value);
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


/**
 * This function parses the literal string for a real number and returns the numeric value
 * of the real number.
 *
 * @param {String} literal The literal string for the real number.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {Number} The numeric value of the real number.
 */
function parseReal(literal, parameters) {
    const value = abstractions.Element.literalToNumber(literal);
    return value;
}


/**
 * This function formats a real number as a literal string.
 * 
 * @param {Number} value The real number.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The literal string for the real number.
 */
function formatReal(value, parameters) {
    var literal = abstractions.Element.numberToLiteral(value);
    return literal;
}


// TODO: should the math in the gamma function use the precision module?
function gamma(number) {
    const p = [0.99999999999980993, 676.5203681218851, -1259.1392167224028,
        771.32342877765313, -176.61502916214059, 12.507343278686905,
        -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7
    ];
 
    const g = 7;
    if (number < 0.5) {
        return utilities.precision.PI / (Math.sin(utilities.precision.PI * number) * gamma(1 - number));
    }
 
    number -= 1;
    var a = p[0];
    const t = number + g + 0.5;
    for (var i = 1; i < p.length; i++) {
        a += p[i] / (number + i);
    }
 
    return Math.sqrt(2 * utilities.precision.PI) * Math.pow(t, number + 0.5) * Math.exp(-t) * a;
}


function exp(complex) {
    if (complex.isUndefined()) return new Complex(NaN);
    if (complex.isInfinite()) return new Complex(Infinity);
    if (complex.isZero()) return new Complex(1);
    const scale = utilities.precision.exponential(complex.real);
    const real = utilities.precision.product(scale, utilities.precision.cosine(complex.imaginary));
    const imaginary = utilities.precision.product(scale, utilities.precision.sine(complex.imaginary));
    const result = new Complex(real, imaginary, complex.parameters);
    return result;
}


function ln(complex) {
    if (complex.isUndefined()) return new Complex(NaN);
    if (complex.isInfinite()) return new Complex(Infinity);
    if (complex.isZero()) return new Complex(Infinity);
    const real = utilities.precision.logarithm(complex.getMagnitude());
    const imaginary = complex.getPhase().value;
    const result = new Complex(real, imaginary, complex.parameters);
    return result;
}
