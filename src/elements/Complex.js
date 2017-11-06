/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var Angle = require('../elements/Angle').Angle;


/**
 * This constructor creates an immutable instance of a complex number.  The
 * allowed ways to call it include:
 * <pre><code>
 * new Complex(realPart, imaginaryPart)
 * new Complex(magnitude, angle)
 * new Complex('(3, 4i)')  // rectangular form
 * new Complex('(12.3e-45 e^3.1415926i)')  // polar form
 * </code></pre>
 * 
 * @constructor
 * @param {number or string} numberOrString
 * @param {number or Angle} optionalNumberOrAngle
 * @returns {Complex}
 */
function Complex(numberOrString, optionalNumberOrAngle) {
    this.format = 'rectangular';  // by default

    // Complex(real): constructor generates a complex number with only a real part
    if (typeof numberOrString === 'number' && (typeof optionalNumberOrAngle === 'undefined' || optionalNumberOrAngle === null)) {
        var number = numberOrString;
        if (isNaN(number)) {
            this.real = NaN;
            this.imaginary = NaN;
            this.magnitude = NaN;
            this.angle = new Angle(0);
        } else if (isZero(number)) {  // handles -0 too
            this.real = 0;
            this.imaginary = 0;
            this.magnitude = 0;
            this.angle = new Angle(0);
        } else if (isInfinite(number)) {
            this.real = Infinity;
            this.imaginary = Infinity;
            this.magnitude = Infinity;
            this.angle = new Angle(0);
        } else {
            this.real = number;
            this.imaginary = 0;
        }
        return this;
    }

    // Complex(string): constructor generates a complex number from a string
    if (typeof numberOrString === 'string' && (typeof optionalNumberOrAngle === 'undefined' || optionalNumberOrAngle === null)) {
        var string = numberOrString;
        var complex = parse(string);
        if (complex.real) {
            this.real = complex.real;
            this.imaginary = complex.imaginary;
        } else {
            this.format = 'polar';
            this.magnitude = complex.magnitude;
            this.angle = complex.angle;
        }
        return this;
    }

    // Complex(real, imaginary): constructor generates a complex number with a real part and imaginary part
    if (typeof numberOrString === 'number' && typeof optionalNumberOrAngle === 'number') {
        // normalize the values
        var real = numberOrString;
        var imaginary = optionalNumberOrAngle;

        // handle special cases
        if (isNaN(real) || isNaN(imaginary)) return Complex.NAN;
        if (isZero(real) && isZero(imaginary)) return Complex.ZERO;
        if (isInfinite(real) || isInfinite(imaginary)) return Complex.INFINITY;

        this.real = real;
        this.imaginary = imaginary;

        return this;
    }

    // Complex(magnitude, angle): constructor generates a complex number with a magnitude and angle
    if (typeof numberOrString === 'number' && typeof optionalNumberOrAngle === 'object' && optionalNumberOrAngle.constructor.name === 'Angle') {
        this.format = 'polar';
        var magnitude = numberOrString;
        var angle = optionalNumberOrAngle;

        // handle special cases
        if (isNaN(magnitude)) return Complex.NAN;
        if (isZero(magnitude)) return Complex.ZERO;
        if (isInfinite(magnitude)) return Complex.INFINITY;

        // normalize to a positive magnitude if necessary
        if (magnitude < 0) {
            this.magnitude = -magnitude;
            this.angle = Angle.inverse(angle);
        } else {
            this.magnitude = magnitude;
            this.angle = angle;
        }

        return this;
    }

    throw 'Unsupported constructor called: new Complex(' + numberOrString + ', ' + optionalNumberOrAngle + ')';
}
Complex.prototype.constructor = Complex;
exports.Complex = Complex;


/**
 * This method determines whether the complex number is not a number.
 * 
 * @returns {boolean}
 */
Complex.prototype.isNaN = function() {
    return this.getMagnitude().toString() === 'NaN';  // must use strings since NaN !== NaN
};


/**
 * This method determines whether the complex number is zero.
 * 
 * @returns {boolean}
 */
Complex.prototype.isZero = function() {
    return this.getMagnitude() === 0;
};


/**
 * This method determines whether the complex number is infinite.
 * 
 * @returns {boolean}
 */
Complex.prototype.isInfinite = function() {
    return this.getMagnitude() === Infinity;
};


/**
 * This method returns the real part of the complex number.
 * 
 * @returns {number}
 */
Complex.prototype.getRealPart = function() {
    if (typeof this.real === 'undefined') {
        this.real = lockOnPole(this.magnitude * Angle.cosine(this.angle));
    }
    return this.real;
};


/**
 * This method returns the imaginary part of the complex number.
 * 
 * @returns {number}
 */
Complex.prototype.getImaginaryPart = function() {
    if (typeof this.imaginary === 'undefined') {
        this.imaginary = lockOnPole(this.magnitude * Angle.sine(this.angle));
    }
    return this.imaginary;
};


/**
 * This method returns the magnitude of the complex number.
 * 
 * @returns {number}
 */
Complex.prototype.getMagnitude = function() {
    if (typeof this.magnitude === 'undefined') {
        this.magnitude = Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
    }
    return this.magnitude;
};


/**
 * This method returns the angel of the complex number.
 * 
 * @returns {Angle}
 */
Complex.prototype.getAngle = function() {
    if (typeof this.angle === 'undefined') {
        this.angle = new Angle(lockOnPole(Angle.arctangent(this.imaginary, this.real).toNumber()));
    }
    return this.angle;
};


/**
 * This method returns a string version of the complex number.
 * 
 * @returns {string}
 */
Complex.prototype.toString = function() {
    if (this.format === 'rectangular') {
        return this.toRectangular();
    } else {
        return this.toPolar();
    }
};


/**
 * This method returns a string version of the complex number in retangular form.
 * 
 * @returns {string}
 */
Complex.prototype.toRectangular = function() {
    if (this.isNaN()) return 'NaN';
    if (this.isZero()) return '0';
    if (this.isInfinite()) return 'Infinity';
    var string = '(';
    var real = this.getRealPart();
    var imaginary = this.getImaginaryPart();
    string += real;
    string += ', ';
    if (imaginary === -1) {
        string += '-';  // use -i instead of -1i
    } else if (imaginary !== 1) {
        string += imaginary;
    }
    string += 'i)';
    return string;
};


/**
 * This method returns a string version of the complex number in polar form.
 * 
 * @returns {string}
 */
Complex.prototype.toPolar = function() {
    if (this.isNaN()) return 'NaN';
    if (this.isZero()) return '0';
    if (this.isInfinite()) return 'Infinity';
    var string = '(';
    var magnitude = this.getMagnitude();
    var angle = this.getAngle().toNumber();
    string += magnitude;
    string += ' e^';
    if (angle === -1) {
        string += '-';  // use -i instead of -1i
    } else if (angle !== 1) {
        string += angle;
    }
    string += 'i)';
    return string;
};


/**
 * This method returns the real part of the complex number.
 * 
 * @returns {number}
 */
Complex.prototype.toNumber = function() {
    return this.getRealPart();
};


Complex.NAN = new Complex(NaN);
Complex.ZERO = new Complex(0);
Complex.INFINITY = new Complex(Infinity);


function lockOnPole(number) {
    if (number > 0 && number <= 6.123233995736766e-16) return 0;
    if (number < 0 && number >= -6.123233995736766e-16) return 0;
    if (number > 0 && number >= 16331239353195370) return Infinity;
    if (number < 0 && number <= -16331239353195370) return Infinity;
    return number;
}


function isZero(number) {
    return number === 0;  // handles -0 too since -0 === 0
}


function isInfinite(number) {
    return !(isFinite(number) || isNaN(number));
}


function parse(string) {
    var real = null;
    var imaginary = null;
    var complex = {};
    var isPolar = false;
    var isNegative = false;
    var tokens = string.match(/\d+\.?\d*e[-]?\d+|\d+\.?\d*|\.\d+|./g);
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        switch(token) {
            case '(':
            case ' ':
            case ')':
                // ignore
                break;
            case ',':
                isPolar = false;
                break;
            case 'e':
            case '^':
                isPolar = true;
                break;
            case 'i':
                if (imaginary === null) {
                    imaginary = 1;
                    if (isNegative) {
                        imaginary = -imaginary;
                        isNegative = false;
                    }
                }
                if (isPolar) {
                    complex.magnitude = real;
                    complex.angle = new Angle(imaginary);
                    if (real < 0) {
                        // normalize the magnitude to be positive
                        complex.magnitude = -complex.magnitude;
                        complex.angle = Angle.inverse(complex.angle);
                    }
                    break;
                } else {
                    complex.real = real;
                    complex.imaginary = imaginary;
                    break;
                }
                break;
            case '-':
                isNegative = !isNegative;
                break;
            default: // the token is a number
                if (real === null) {
                    real = Number(token);
                    if (isNegative) {
                        real = -real;
                        isNegative = false;
                    }
                    break;
                }
                imaginary = Number(token);
                if (isNegative) {
                    imaginary = -imaginary;
                    isNegative = false;
                }
                break;
        }
    }
    return complex;
}