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
const agents = require('../agents');
const Angle = require('./Angle').Angle;


// PUBLIC FUNCTIONS

/**
 * This function creates an immutable instance of a complex number using the specified
 * real and imaginary values.  If the imaginary value is an angle then the complex number
 * is in polar form, otherwise it is in rectangular form.
 *
 * @param {Array} value The real and imaginary values of the complex number.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The new complex number.
 */
const Complex = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        ['/bali/elements/Number'],
        [
            '/bali/libraries/Scalable',
            '/bali/libraries/Numerical',
            '/bali/interfaces/Discrete',
            '/bali/interfaces/Continuous'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Number', '$value', value, [
            '/javascript/Undefined',
            '/javascript/Array'
        ]);
    }

    // normalize the values
    var real = value[0];  // real part or magnitude
    var imaginary = value[1];  // imaginary part or phase (angle)
    var magnitude, phase;
    this.calculator = new utilities.Calculator(this.debug);
    if (real === real) real = real || 0;  // default value if not NaN and not defined or null
    real = this.calculator.lockOnExtreme(real);
    if (imaginary === imaginary) imaginary = imaginary || 0;  // default value if not NaN and not defined or null
    if (imaginary.isComponent && imaginary.isType('/bali/elements/Angle')) {
        // convert polar to rectangular
        magnitude = real;
        phase = imaginary;
        if (magnitude < 0) {
            // normalize the magnitude
            magnitude = -magnitude;
            phase = Angle.inverse(phase);
        }
        real = magnitude * Angle.cosine(phase);
        imaginary = magnitude * Angle.sine(phase);
        if (real && imaginary) {
            // it is a true complex number in polar form
            this.isPolar = true;
        }
    }
    imaginary = this.calculator.lockOnExtreme(imaginary);
    if (real.toString() === 'NaN' || imaginary.toString() === 'NaN') {
        real = NaN;
        imaginary = NaN;
    } else if (real === Infinity || real === -Infinity || imaginary === Infinity || imaginary === -Infinity) {
        real = Infinity;
        imaginary = Infinity;
    }

    this.isInteger = Number.isInteger(real) && imaginary === 0;

    this.getReal = function() { return real; };

    this.getImaginary = function() { return imaginary; };

    this.getMagnitude = function() {
        if (magnitude === undefined) {
            // need to preserve full precision on this except for the sum part
            magnitude = Math.sqrt(this.calculator.sum(Math.pow(real, 2), Math.pow(imaginary, 2)));
            magnitude = this.calculator.lockOnExtreme(magnitude);
        }
        return magnitude;
    };

    this.getPhase = function() {
        if (this.isInfinite()) return new Angle(0);
        if (this.isUndefined()) return undefined;
        if (phase === undefined) {
            phase = Angle.arctangent(imaginary, real);
        }
        return phase;
    };

    this.getValue = function() {
        if (this.isPolar) {
            return [this.getMagnitude(), this.getPhase()];
        }
        return [this.getReal(), this.getImaginary()];
    };

    return this;
};
Complex.prototype = Object.create(abstractions.Element.prototype);
Complex.prototype.constructor = Complex;
exports.Number = Complex;


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
 * This method returns the real part of this complex number rounded to an integer.
 *
 * @returns {Number} The real part of this complex number rounded to an integer.
 */
Complex.prototype.toInteger = function() {
    return Math.round(this.getReal());
};


/**
 * This method returns the real part of this complex number.
 *
 * @returns {Number} The real part of this complex number.
 */
Complex.prototype.toReal = function() {
    return this.getReal();
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


// SCALABLE LIBRARY FUNCTIONS

/**
 * This function returns the arithmetic inverse of the specified complex number.
 * <pre>
 *     inverse(z): (-z.real, -z.imaginary i)
 * </pre>
 *
 * @param {Complex} number The complex number to be inverted.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.inverse = function(number, debug) {
    if (debug > 1) {
        number.validateArgument('$inverse', '$number', number, [
            '/bali/elements/Number'
        ]);
    }

    // handle the special cases
    if (number.isUndefined()) return new Complex([NaN, undefined], number.getParameters(), debug);
    if (number.isInfinite()) return new Complex([Infinity, undefined], number.getParameters(), debug);
    if (number.isZero()) return new Complex([0, undefined], number.getParameters(), debug);

    const real = -number.getReal();
    const imaginary = -number.getImaginary();
    const result = new Complex([real, imaginary], number.getParameters(), debug);
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
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.sum = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$sum', '$first', first, [
            '/bali/elements/Number'
        ]);
        first.validateArgument('$sum', '$second', second, [
            '/bali/elements/Number'
        ]);
    }

    // handle the special cases
    const comparator = new agents.CanonicalComparator(this.debug);
    if (first.isUndefined() || second.isUndefined()) return new Complex([NaN, undefined], first.getParameters(), debug);
    if (first.isInfinite() || second.isInfinite()) return new Complex([Infinity, undefined], first.getParameters(), debug);
    if (comparator.areEqual(first, Complex.inverse(second))) return new Complex([0, undefined], first.getParameters(), debug);

    const calculator = new utilities.Calculator(debug);
    const real = calculator.sum(first.getReal(), second.getReal());
    const imaginary = calculator.sum(first.getImaginary(), second.getImaginary());
    const result = new Complex([real, imaginary], first.getParameters(), debug);
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
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.difference = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$difference', '$first', first, [
            '/bali/elements/Number'
        ]);
        first.validateArgument('$difference', '$second', second, [
            '/bali/elements/Number'
        ]);
    }
    return Complex.sum(first, Complex.inverse(second, debug), debug);
};


/**
 * This function returns a scaled version of a complex number.
 * <pre>
 *     scaled(z, factor): (factor * z.real, factor * z.imaginary i)
 *                              or
 *     scaled(z, factor): (factor * z.magnitude, z.phase i)
 * </pre>
 *
 * @param {Complex} number The complex number to be scaled.
 * @param {Number} factor The numeric scale factor.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.scaled = function(number, factor, debug) {
    if (debug > 1) {
        number.validateArgument('$scaled', '$number', number, [
            '/bali/elements/Number'
        ]);
        number.validateArgument('$scaled', '$factor', factor, [
            '/javascript/Number'
        ]);
    }

    // handle the special cases
    if (number.isUndefined() || Number.isNaN(factor)) return new Complex([NaN, undefined], number.getParameters(), debug);
    if (number.isZero() && !Number.isFinite(factor)) return new Complex([NaN, undefined], number.getParameters(), debug);
    if (number.isInfinite() && factor === 0) return new Complex([NaN, undefined], number.getParameters(), debug);
    if (number.isInfinite() || !Number.isFinite(factor)) return new Complex([Infinity, undefined], number.getParameters(), debug);
    if (number.isZero() || factor === 0) return new Complex([0, undefined], number.getParameters(), debug);

    const calculator = new utilities.Calculator(debug);
    const real = calculator.product(number.getReal(), factor);
    const imaginary = calculator.product(number.getImaginary(), factor);
    const result = new Complex([real, imaginary], number.getParameters(), debug);
    return result;
};


// NUMERICAL LIBRARY FUNCTIONS

/**
 * This function returns the multiplicative inverse of the specified complex number.
 * <pre>
 *     reciprocal(z): (z.real, -z.imaginary i)/z.magnitude^2
 *                    or
 *     reciprocal(z): (1/z.magnitude e^~-z.phase i)
 * </pre>
 *
 * @param {Complex} number The complex number to be inverted.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.reciprocal = function(number, debug) {
    if (debug > 1) {
        number.validateArgument('$reciprocal', '$number', number, [
            '/bali/elements/Number'
        ]);
    }

    // handle the special cases
    if (number.isUndefined()) return new Complex([NaN, undefined], number.getParameters(), debug);
    if (number.isInfinite()) return new Complex([0, undefined], number.getParameters(), debug);
    if (number.isZero()) return new Complex([Infinity, undefined], number.getParameters(), debug);

    const calculator = new utilities.Calculator(debug);
    const squared = calculator.sum(calculator.product(number.getReal(), number.getReal()), calculator.product(number.getImaginary(), number.getImaginary()));
    const real = calculator.quotient(number.getReal(), squared);
    const imaginary = -calculator.quotient(number.getImaginary(), squared);
    const result = new Complex([real, imaginary], number.getParameters(), debug);
    return result;
};


/**
 * This function returns the complex conjugate of the specified complex number.
 * <pre>
 *     conjugate(z): (z.real, -z.imaginary i)
 * </pre>
 *
 * @param {Complex} number The complex number to be conjugated.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.conjugate = function(number, debug) {
    if (debug > 1) {
        number.validateArgument('$conjugate', '$number', number, [
            '/bali/elements/Number'
        ]);
    }

    // handle the special cases
    if (number.isUndefined()) return new Complex([NaN, undefined], number.getParameters(), debug);
    if (number.isInfinite()) return new Complex([Infinity, undefined], number.getParameters(), debug);
    if (number.isZero()) return new Complex([0, undefined], number.getParameters(), debug);

    const real = number.getReal();
    const imaginary = -number.getImaginary();
    const result = new Complex([real, imaginary], number.getParameters(), debug);
    return result;
};


/**
 * This function returns the complex factorial of the specified complex number.
 *
 * @param {Complex} number The complex number.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.factorial = function(number, debug) {
    if (debug > 1) {
        number.validateArgument('$factorial', '$number', number, [
            '/bali/elements/Number'
        ]);
    }

    // handle the special cases
    if (number.isUndefined()) return new Complex([NaN, undefined], number.getParameters(), debug);
    if (number.isInfinite()) return new Complex([Infinity, undefined], number.getParameters(), debug);
    if (number.isZero()) return new Complex([1, undefined], number.getParameters(), debug);

    // just implement real factorials for now...
    // TODO: what should a complex factorial be?
    const factorial = gamma(number.getReal() + 1);
    const result = new Complex([factorial, undefined], number.getParameters(), debug);
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
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.product = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$product', '$first', first, [
            '/bali/elements/Number'
        ]);
        first.validateArgument('$product', '$second', second, [
            '/bali/elements/Number'
        ]);
    }

    // handle the special cases
    if (first.isUndefined() || second.isUndefined()) return new Complex([NaN, undefined], first.getParameters(), debug);
    if (first.isZero() && second.isInfinite()) return new Complex([NaN, undefined], first.getParameters(), debug);
    if (first.isInfinite() && second.isZero()) return new Complex([NaN, undefined], first.getParameters(), debug);
    if (first.isInfinite() || second.isInfinite()) return new Complex([Infinity, undefined], first.getParameters(), debug);
    if (first.isZero() || second.isZero()) return new Complex([0, undefined], first.getParameters(), debug);

    const calculator = new utilities.Calculator(debug);
    const real = calculator.difference(calculator.product(first.getReal(), second.getReal()), calculator.product(first.getImaginary(), second.getImaginary()));
    const imaginary = calculator.sum(calculator.product(first.getReal(), second.getImaginary()), calculator.product(first.getImaginary() * second.getReal()));
    const result = new Complex([real, imaginary], first.getParameters(), debug);
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
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.quotient = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$quotient', '$first', first, [
            '/bali/elements/Number'
        ]);
        first.validateArgument('$quotient', '$second', second, [
            '/bali/elements/Number'
        ]);
    }
    return Complex.product(first, Complex.reciprocal(second, debug), debug);
};


/**
 * This function returns the remainder of the quotient of two real numbers.
 *
 * @param {Complex} first The first real number to be divided.
 * @param {Complex} second The second real number to be divided by.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting real number.
 */
Complex.remainder = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$remainder', '$first', first, [
            '/bali/elements/Number'
        ]);
        first.validateArgument('$remainder', '$second', second, [
            '/bali/elements/Number'
        ]);
    }

    // handle the special cases
    if (first.isUndefined() || second.isUndefined()) return new Complex([NaN, undefined], first.getParameters(), debug);
    if (first.isInfinite() && second.isInfinite()) return new Complex([NaN, undefined], first.getParameters(), debug);
    if (first.isZero() && second.isZero()) return new Complex([NaN, undefined], first.getParameters(), debug);
    if (second.isInfinite()) return new Complex([0, undefined], first.getParameters(), debug);
    if (second.isZero()) return new Complex([Infinity, undefined], first.getParameters(), debug);

    // just implement for integer values
    // TODO: what does remainder mean for complex numbers?
    const firstInteger = Math.round(first.getReal());
    const secondInteger = Math.round(second.getReal());
    const calculator = new utilities.Calculator(debug);
    return new Complex([calculator.remainder(firstInteger, secondInteger), undefined], first.getParameters(), debug);
};


/**
 * This function returns the complex exponential of the specified complex number.
 * <pre>
 *     exponential(base, exponent): exp(exponent * ln(base))
 * </pre>
 *
 * @param {Complex} base The complex base.
 * @param {Complex} exponent The complex exponent.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.exponential = function(base, exponent, debug) {
    if (debug > 1) {
        base.validateArgument('$exponential', '$base', base, [
            '/bali/elements/Number'
        ]);
        base.validateArgument('$exponential', '$exponent', exponent, [
            '/bali/elements/Number'
        ]);
    }

    // handle the special cases
    if (base.isUndefined() || exponent.isUndefined()) return new Complex([NaN, undefined], base.getParameters(), debug);
    if (base.isZero() && (exponent.isZero() || exponent.isInfinite())) return new Complex([NaN, undefined], base.getParameters(), debug);
    if (base.isInfinite() && exponent.isZero()) return new Complex([NaN, undefined], base.getParameters(), debug);
    if (exponent.isInfinite()) return new Complex([Infinity, undefined], base.getParameters(), debug);
    if (exponent.isZero()) return new Complex([1, undefined], base.getParameters(), debug);

    const result = exp(Complex.product(exponent, ln(base, debug), debug), debug);
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
 * @param {Number} debug A number in the range 0..3.
 * @returns {Complex} The resulting complex number.
 */
Complex.logarithm = function(base, value, debug) {
    if (debug > 1) {
        base.validateArgument('$logarithm', '$base', base, [
            '/bali/elements/Number'
        ]);
        base.validateArgument('$logarithm', '$value', value, [
            '/bali/elements/Number'
        ]);
    }

    // handle the special cases
    if (base.isUndefined() || value.isUndefined()) return new Complex([NaN, undefined], base.getParameters(), debug);
    if (base.isZero() && (value.isZero() || value.isInfinite())) return new Complex([NaN, undefined], base.getParameters(), debug);
    if (base.isInfinite() && (value.isZero() || value.isInfinite())) return new Complex([NaN, undefined], base.getParameters(), debug);
    if (value.isInfinite()) return new Complex([Infinity, undefined], base.getParameters(), debug);
    if (value.isZero()) return new Complex([Infinity, undefined], base.getParameters(), debug);

    const result = Complex.quotient(ln(value, debug), ln(base, debug), debug);
    return result;
};


// PRIVATE FUNCTIONS

// TODO: should the math in the gamma function use the precision module?
const gamma = function(number) {
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
};


const exp = function(number, debug) {
    if (number.isUndefined()) return new Complex([NaN, undefined], number.getParameters(), debug);
    if (number.isInfinite()) return new Complex([Infinity, undefined], number.getParameters(), debug);
    if (number.isZero()) return new Complex([1, undefined], number.getParameters(), debug);
    const calculator = new utilities.Calculator(debug);
    const scale = calculator.exponential(number.getReal());
    const real = calculator.product(scale, calculator.cosine(number.getImaginary()));
    const imaginary = calculator.product(scale, calculator.sine(number.getImaginary()));
    const result = new Complex([real, imaginary], number.getParameters(), debug);
    return result;
};


const ln = function(number, debug) {
    if (number.isUndefined()) return new Complex([NaN, undefined], number.getParameters(), debug);
    if (number.isInfinite()) return new Complex([Infinity, undefined], number.getParameters(), debug);
    if (number.isZero()) return new Complex([Infinity, undefined], number.getParameters(), debug);
    const calculator = new utilities.Calculator(debug);
    const real = calculator.logarithm(number.getMagnitude());
    const imaginary = number.getPhase().getValue();
    const result = new Complex([real, imaginary], number.getParameters(), debug);
    return result;
};
