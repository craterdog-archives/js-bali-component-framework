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
var antlr = require('antlr4');
var grammar = require('../grammar');
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;
var Angle = require('./Angle').Angle;
/* global NaN, Infinity */


/**
 * This constructor creates an immutable instance of a complex number element.
 * The allowed ways to call it include:
 * <pre><code>
 * new Complex()  // defaults to zero
 * new Complex('(3, 4i)')  // rectangular form
 * new Complex('(12.3e-45 e^~3.1415926i)')  // polar form
 * </code></pre>
 * 
 * @constructor
 * @param {Number|String} value The numeric or string value of the complex number.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Complex} The new complex element.
 */
function Complex(value, parameters) {
    Element.call(this, types.NUMBER, parameters);
    if (value === undefined || value === null) value = 0;  // default value
    this.format = 'rectangular';  // rectangular coordinates by default
    var real;
    var imaginary;
    var type = value.constructor.name;
    switch (type) {
        case 'Number':
            switch (value) {
                case NaN:
                    this.real = NaN;
                    this.imaginary = NaN;
                    this.magnitude = NaN;
                    this.angle = new Angle(0);
                    break;
                case Infinity:
                case -Infinity:
                    this.real = Infinity;
                    this.imaginary = Infinity;
                    this.magnitude = Infinity;
                    this.angle = new Angle(0);
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
                    this.magnitude = NaN;
                    this.angle = new Angle(0);
                    break;
                case 'InfiniteNumberContext':
                    this.real = Infinity;
                    this.imaginary = Infinity;
                    this.magnitude = Infinity;
                    this.angle = new Angle(0);
                    break;
                case 'RealNumberContext':
                    real = tree.real();
                    this.real = nodeToNumber(real);
                    this.imaginary = 0;
                    break;
                case 'ImaginaryNumberContext':
                    imaginary = tree.imaginary();
                    this.real = 0;
                    this.imaginary = nodeToNumber(imaginary);
                    break;
                case 'ComplexNumberContext':
                    real = tree.real();
                    imaginary = tree.imaginary();
                    var delimiter = tree.del.text;
                    if (delimiter === ',') {
                        this.real = nodeToNumber(real);
                        this.imaginary = nodeToNumber(imaginary);
                    } else {
                        this.format = 'polar';
                        this.magnitude = nodeToNumber(real);
                        this.angle = new Angle(nodeToNumber(imaginary));
                        if (this.magnitude < 0) {
                            this.magnitude = -this.magnitude;
                            this.angle = Angle.inverse(this.angle);
                        }
                    }
                    break;
                default:
                    throw new Error('COMPLEX: An invalid string was passed to the constructor : ' + value);
            }
            break;
        default:
            throw new Error('COMPLEX: An invalid type was passed to the constructor : ' + type);
    }
    if (this.isUndefined() && typeof Complex.UNDEFINED !== 'undefined') return Complex.UNDEFINED;
    if (this.isInfinite() && typeof Complex.INFINITY !== 'undefined') return Complex.INFINITY;
    if (this.isZero() && typeof Complex.ZERO !== 'undefined') return Complex.ZERO;
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
 * This method determines whether the complex number is undefined.
 * 
 * @returns {boolean}
 */
Complex.prototype.isUndefined = function() {
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
        var angle = Angle.arctangent(this.imaginary, this.real).toNumber();
        angle = lockOnPole(angle);
        this.angle = new Angle(angle);
    }
    return this.angle;
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
    if (typeof this !== typeof that) {
        return this.constructor.name.localeCompare(that.constructor.name);
    }
    var thisReal = this.getRealPart();
    var thatReal = that.getRealPart();
    if (thisReal < thatReal) return -1;
    if (thisReal > thatReal) return 1;
    // the real parts are equal, check the imaginary parts
    var thisImaginary = this.getImaginaryPart();
    var thatImaginary = that.getImaginaryPart();
    if (thisImaginary < thatImaginary) return -1;
    if (thisImaginary > thatImaginary) return 1;
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
    var realPart = this.getRealPart();
    var imaginaryPart = this.getImaginaryPart();
    if (imaginaryPart === 0) return Element.numberToSource(realPart);  // real part can be zero
    if (realPart === 0) return imaginaryToSource(imaginaryPart);  // imaginary part cannot be zero
    var source = '(';
    source += Element.numberToSource(this.getRealPart());
    source += ', ';
    source += imaginaryToSource(this.getImaginaryPart());
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
    if (this.getAngle() === Angle.ZERO) return Element.numberToSource(this.getRealPart());
    var source = '(';
    source += Element.numberToSource(this.getMagnitude());
    source += ' e^~';
    source += imaginaryToSource(this.getAngle().value);
    source += ')';
    return source;
};


/**
 * This method returns the real part of the complex number.
 * 
 * @returns {number}
 */
Complex.prototype.toNumber = function() {
    return this.getRealPart();
};


// PUBLIC CONSTANTS

Complex.UNDEFINED = new Complex('undefined');
Complex.ZERO = new Complex('0');
Complex.INFINITY = new Complex('infinity');


// PUBLIC FUNCTIONS

Complex.negative = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return Complex.ZERO;
    var magnitude = complex.getMagnitude();
    var angle = complex.getAngle();
    var source = '(';
    source += Element.numberToSource(magnitude);
    source += 'e^~';
    source += imaginaryToSource(-angle.toNumber());
    source += ')';
    return new Complex(source);
};


Complex.inverse = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.ZERO;
    if (complex.isZero()) return Complex.INFINITY;
    var magnitude = complex.getMagnitude();
    var angle = complex.getAngle();
    var source = '(';
    source += Element.numberToSource(1/magnitude);
    source += 'e^~';
    source += imaginaryToSource(angle.toNumber());
    source += ')';
    return new Complex(source);
};


Complex.conjugate = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return Complex.ZERO;
    var realPart = complex.getRealPart();
    var imaginaryPart = complex.getImaginaryPart();
    var source = '(';
    source += Element.numberToSource(realPart);
    source += ', ';
    source += imaginaryToSource(-imaginaryPart);
    source += ')';
    return new Complex(source);
};


Complex.magnitude = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return Complex.ZERO;
    return new Complex(complex.getMagnitude());
};


Complex.factorial = function(complex) {
    if (complex.isUndefined()) return Complex.UNDEFINED;
    if (complex.isInfinite()) return Complex.INFINITY;
    if (complex.isZero()) return new Complex(1);
    // just implement real factorials for now...
    var realPart = complex.getRealPart();
    var factorial = gamma(realPart + 1);
    return new Complex(String(factorial));
};


Complex.sum = function(firstComplex, secondComplex) {
    if (firstComplex.isUndefined() || secondComplex.isUndefined()) return Complex.UNDEFINED;
    if (firstComplex.isInfinite() || secondComplex.isInfinite()) return Complex.INFINITY;
    if (firstComplex.isEqualTo(Complex.negative(secondComplex))) return Complex.ZERO;
    var realPart = firstComplex.getRealPart() + secondComplex.getRealPart();
    var imaginaryPart = firstComplex.getImaginaryPart() + secondComplex.getImaginaryPart();
    if (imaginaryPart === 0) return new Complex(Element.numberToSource(realPart));
    if (realPart === 0) return new Complex(imaginaryToSource(imaginaryPart));
    var source = '(';
    source += Element.numberToSource(realPart);
    source += ', ';
    source += imaginaryToSource(imaginaryPart);
    source += ')';
    return new Complex(source);
};


Complex.difference = function(firstComplex, secondComplex) {
    if (firstComplex.isUndefined() || secondComplex.isUndefined()) return Complex.UNDEFINED;
    if (firstComplex.isInfinite() || secondComplex.isInfinite()) return Complex.INFINITY;
    if (firstComplex.isEqualTo(secondComplex)) return Complex.ZERO;
    var realPart = firstComplex.getRealPart() - secondComplex.getRealPart();
    var imaginaryPart = firstComplex.getImaginaryPart() - secondComplex.getImaginaryPart();
    if (imaginaryPart === 0) return new Complex(Element.numberToSource(realPart));
    if (realPart === 0) return new Complex(imaginaryToSource(imaginaryPart));
    var source = '(';
    source += Element.numberToSource(realPart);
    source += ', ';
    source += imaginaryToSource(imaginaryPart);
    source += ')';
    return new Complex(source);
};


Complex.product = function(firstComplex, secondComplex) {
    if (firstComplex.isUndefined() || secondComplex.isUndefined()) return Complex.UNDEFINED;
    if (firstComplex.isZero() && secondComplex.isInfinite()) return Complex.UNDEFINED;
    if (firstComplex.isInfinite() && secondComplex.isZero()) return Complex.UNDEFINED;
    if (firstComplex.isInfinite() || secondComplex.isInfinite()) return Complex.INFINITY;
    if (firstComplex.isZero() || secondComplex.isZero()) return Complex.ZERO;
    var magnitude = firstComplex.getMagnitude() * secondComplex.getMagnitude();
    var angle = Angle.sum(firstComplex.getAngle(), secondComplex.getAngle());
    if (angle === Angle.ZERO) return new Complex(Element.numberToSource(magnitude));
    if (magnitude === 0) return new Complex(imaginaryToSource(angle.toNumber()));
    var source = '(';
    source += Element.numberToSource(magnitude);
    source += 'e^~';
    source += imaginaryToSource(angle.toNumber());
    source += ')';
    return new Complex(source);
};


Complex.quotient = function(firstComplex, secondComplex) {
    if (firstComplex.isUndefined() || secondComplex.isUndefined()) return Complex.UNDEFINED;
    if (firstComplex.isInfinite() && secondComplex.isInfinite()) return Complex.UNDEFINED;
    if (firstComplex.isZero() && secondComplex.isZero()) return Complex.UNDEFINED;
    if (secondComplex.isInfinite()) return Complex.ZERO;
    if (secondComplex.isZero()) return Complex.INFINITY;
    var magnitude = firstComplex.getMagnitude() / secondComplex.getMagnitude();
    var angle = Angle.difference(firstComplex.getAngle(), secondComplex.getAngle());
    if (angle === Angle.ZERO) return new Complex(Element.numberToSource(magnitude));
    if (magnitude === 0) return new Complex(imaginaryToSource(angle.toNumber()));
    var source = '(';
    source += Element.numberToSource(magnitude);
    source += 'e^~';
    source += imaginaryToSource(angle.toNumber());
    source += ')';
    return new Complex(source);
};


Complex.remainder = function(firstComplex, secondComplex) {
    if (firstComplex.isUndefined() || secondComplex.isUndefined()) return Complex.UNDEFINED;
    if (firstComplex.isInfinite() && secondComplex.isInfinite()) return Complex.UNDEFINED;
    if (firstComplex.isZero() && secondComplex.isZero()) return Complex.UNDEFINED;
    if (secondComplex.isInfinite()) return Complex.ZERO;
    if (secondComplex.isZero()) return Complex.INFINITY;
    // just implement for integer values
    var firstInteger = Math.round(firstComplex.getRealPart());
    var secondInteger = Math.round(secondComplex.getRealPart());
    return new Complex(firstInteger % secondInteger);
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
        number = 2.718281828459045;
    } else if (string.startsWith('pi')) {
        number = 3.141592653589793;
    } else if (string.startsWith('phi')) {
        number = 1.618033988749895;
    } else if (string.endsWith('i')) {
        number = Number(string.slice(0, -1));  // strip off tailing 'i' (the space doesn't matter)
    } else {
        number = Number(string);
    }
    return number;
}
