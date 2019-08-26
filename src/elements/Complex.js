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

/*
 * This element class captures the state and methods associated with a
 * complex number element.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Angle = require('./Angle').Angle;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates an immutable instance of a complex number using the specified
 * real and imaginary values.  If the imaginary value is an angle then the complex number
 * is in polar form, otherwise it is in rectangular form.
 * 
 * @param {Number} real The real value of the complex number.
 * @param {Number|Angle} imaginary The imaginary value of the complex number.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Complex} The new complex number.
 */
function Complex(real, imaginary, parameters) {
    abstractions.Element.call(this, utilities.types.NUMBER, parameters);

    // normalize the values
    if (real === real) real = real || 0;  // default value if not NaN and not defined
    real = utilities.precision.lockOnExtreme(real);
    if (imaginary === imaginary) imaginary = imaginary || 0;  // default value if not NaN and not defined
    if (imaginary.getTypeId && imaginary.getTypeId() === utilities.types.ANGLE) {
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
    } else if (real === Infinity || real === -Infinity || imaginary === Infinity || imaginary === -Infinity) {
        real = Infinity;
        imaginary = Infinity;
    }
    this.getReal = function() { return real; };
    this.getImaginary = function() { return imaginary; };
    this.getMagnitude = function() {
        // need to preserve full precision on this except for the sum part
        var magnitude = Math.sqrt(utilities.precision.sum(Math.pow(real, 2), Math.pow(imaginary, 2)));
        magnitude = utilities.precision.lockOnExtreme(magnitude);
        return magnitude;
    };

    this.getPhase = function() {
        if (this.isInfinite()) return new Angle(0);
        if (this.isUndefined()) return undefined;
        const phase = Angle.arctangent(imaginary, real);
        return phase;
    };


    return this;
}
Complex.prototype = Object.create(abstractions.Element.prototype);
Complex.prototype.constructor = Complex;
exports.Complex = Complex;


// PUBLIC METHODS

/**
 * This method returns whether or not this complex number has a meaningful value. If the magnitude
 * is undefined, zero or infinity it returns <code>false</code>, otherwise it returns <code>true</code>.
 * 
 * @returns {Boolean} Whether or not this complex number has a meaningful value.
 */
Complex.prototype.toBoolean = function() {
    return !(this.isZero() || this.isUndefined());
};


/**
 * This method returns the real part of this complex number.
 * 
 * @returns {Number} The real part of this complex number.
 */
Complex.prototype.toNumber = function() {
    return this.getReal();
};


/**
 * This method returns this complex number in rectangular form.
 * 
 * @returns {String} This complex number in rectangular form.
 */
Complex.prototype.toRectangular = function() {
    const formatter = new utilities.Formatter();
    return formatter.formatLiteral(this, '$rectangular');
};


/**
 * This method returns this complex number in polar form.
 * 
 * @returns {String} This complex number in polar form.
 */
Complex.prototype.toPolar = function() {
    const formatter = new utilities.Formatter();
    return formatter.formatLiteral(this, '$polar');
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Complex.prototype.acceptVisitor = function(visitor) {
    visitor.visitNumber(this);
};


/**
 * This method determines whether this complex number is undefined.
 * 
 * @returns {boolean} Whether or not this complex number is undefined.
 */
Complex.prototype.isUndefined = function() {
    return this.getReal().toString() === 'NaN';  // must use strings since NaN !== NaN
};


/**
 * This method determines whether this complex number is zero.
 * 
 * @returns {boolean} Whether or not this complex number is zero.
 */
Complex.prototype.isZero = function() {
    return this.getReal() === 0 && this.getImaginary() === 0;
};


/**
 * This method determines whether this complex number is infinite.
 * 
 * @returns {boolean} Whether or not this complex number is infinite.
 */
Complex.prototype.isInfinite = function() {
    return this.getReal() === Infinity;
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
    const real = -complex.getReal();
    const imaginary = -complex.getImaginary();
    const result = new Complex(real, imaginary);
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
    const squared = utilities.precision.sum(utilities.precision.product(complex.getReal(), complex.getReal()), utilities.precision.product(complex.getImaginary(), complex.getImaginary()));
    const real = utilities.precision.quotient(complex.getReal(), squared);
    const imaginary = -utilities.precision.quotient(complex.getImaginary(), squared);
    const result = new Complex(real, imaginary);
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
    const real = complex.getReal();
    const imaginary = -complex.getImaginary();
    const result = new Complex(real, imaginary);
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
    const factorial = gamma(complex.getReal() + 1);
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
    const real = utilities.precision.sum(first.getReal(), second.getReal());
    const imaginary = utilities.precision.sum(first.getImaginary(), second.getImaginary());
    const result = new Complex(real, imaginary);
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
    const real = utilities.precision.product(complex.getReal(), factor);
    const imaginary = utilities.precision.product(complex.getImaginary(), factor);
    const result = new Complex(real, imaginary);
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
    const real = utilities.precision.difference(utilities.precision.product(first.getReal(), second.getReal()), utilities.precision.product(first.getImaginary(), second.getImaginary()));
    const imaginary = utilities.precision.sum(utilities.precision.product(first.getReal(), second.getImaginary()), utilities.precision.product(first.getImaginary() * second.getReal()));
    const result = new Complex(real, imaginary);
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
    const firstInteger = Math.round(first.getReal());
    const secondInteger = Math.round(second.getReal());
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


function exp(complex) {
    if (complex.isUndefined()) return new Complex(NaN);
    if (complex.isInfinite()) return new Complex(Infinity);
    if (complex.isZero()) return new Complex(1);
    const scale = utilities.precision.exponential(complex.getReal());
    const real = utilities.precision.product(scale, utilities.precision.cosine(complex.getImaginary()));
    const imaginary = utilities.precision.product(scale, utilities.precision.sine(complex.getImaginary()));
    const result = new Complex(real, imaginary);
    return result;
}


function ln(complex) {
    if (complex.isUndefined()) return new Complex(NaN);
    if (complex.isInfinite()) return new Complex(Infinity);
    if (complex.isZero()) return new Complex(Infinity);
    const real = utilities.precision.logarithm(complex.getMagnitude());
    const imaginary = complex.getPhase().getValue();
    const result = new Complex(real, imaginary);
    return result;
}


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
