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

/**
 * This library provides functions that perform arithmetic operations that preserve
 * only the significant digits of the results.
 */


// PUBLIC CONSTANTS

exports.E = Math.E;
exports.PI = Math.PI;
exports.PHI = (Math.sqrt(5) + 1) / 2;


// PUBLIC FUNCTIONS

/**
 * This function returns the sum of a list of numbers. The number of significant digits in the decimal
 * of the result is equal to the number of significant digits in the decimal of the operand with
 * the least number of digits in its decimal. For example:
 * <pre>
 *    12.345   (3 significant decimal digits)
 * + 543.21    (2 significant decimal digits)
 * ---------
 *   555.56    (2 significant decimal digits)
 * </pre>
 *
 * @return {Number} The resulting sum of the two numbers.
 */
exports.sum = function() {
    var result = 0;
    var minDigits = decimalDigits.apply(this, arguments);
    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i];
        result += value;
    }
    result = normalizeDecimal(result, minDigits);
    return result;
};


/**
 * This function returns the difference of two numbers. The number of significant digits in the decimal
 * of the result is equal to the number of significant digits in the decimal of the operand with
 * the least number of digits in its decimal. For example:
 * <pre>
 *   123.45    (2 significant decimal digits)
 * -  54.321   (3 significant decimal digits)
 * ---------
 *    69.13    (2 significant decimal digits)
 * </pre>
 *
 * @param {Number} first The number to be subtracted from.
 * @param {Number} second The number to be subtracted from the first number.
 * @return {Number} The resulting difference of the two numbers.
 */
exports.difference = function(first, second) {
    var result = first - second;
    var minDigits = decimalDigits(first, second);
    result = normalizeDecimal(result, minDigits);
    return result;
};


/**
 * This function returns the product of a list of numbers. The number of significant digits in the
 * result is equal to the number of significant digits in the operand with the least number
 * of significant digits. For example:
 * <pre>
 *    123.45   (5 significant digits)
 * x    67.8   (3 significant digits)
 * ---------
 *   8.37e+3   (3 significant digits)
 * </pre>
 *
 * @return {Number} The resulting product of the two numbers.
 */
exports.product = function() {
    var result = 1;
    var minDigits = valueDigits.apply(this, arguments);
    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i];
        result *= value;
    }
    result = normalizeValue(result, minDigits);
    return result;
};


/**
 * This function returns the quotient of two numbers. The number of significant digits in the
 * result is equal to the number of significant digits in the operand with the least number
 * of significant digits. For example:
 * <pre>
 *    123.45   (5 significant digits)
 * ÷    67.8   (3 significant digits)
 * ---------
 *      1.82   (3 significant digits)
 * </pre>
 *
 * @param {Number} first The number to be divided into.
 * @param {Number} second The number to be divided by.
 * @return {Number} The resulting quotient of the two numbers.
 */
exports.quotient = function(first, second) {
    var result = lockOnPole(first / second);
    var minDigits = valueDigits(first, second);
    result = normalizeValue(result, minDigits);
    return result;
};


exports.exponential = function(exponent) {
    var result = lockOnPole(Math.exp(exponent));
    var minDigits = valueDigits(exponent);
    var error = exponent;
    result = normalizeValue(result, minDigits, error);
    return result;
};


exports.logarithm = function(value) {
    var result = lockOnPole(Math.log(value));
    var minDigits = valueDigits(value);
    var error = 1 / Math.log(value);
    result = normalizeValue(result, minDigits, error);
    return result;
};


exports.sine = function(angle) {
    var result = lockOnPole(Math.sin(angle));
    var minDigits = valueDigits(angle);
    var error = lockOnPole(angle / Math.tan(angle));
    result = normalizeValue(result, minDigits, error);
    return result;
};


exports.cosine = function(angle) {
    var result = lockOnPole(Math.cos(angle));
    var minDigits = valueDigits(angle);
    var error = lockOnPole(angle * Math.tan(angle));
    result = normalizeValue(result, minDigits, error);
    return result;
};


exports.tangent = function(angle) {
    var result = lockOnPole(Math.tan(angle));
    if (result < -9007199254740991 || result > 9007199254740991) return Infinity;
    var minDigits = valueDigits(angle);
    var error = lockOnPole(angle * (result + 1 / result));
    result = normalizeValue(result, minDigits, error);
    return result;
};


exports.arcsine = function(ratio) {
    var angle = lockOnAngle(Math.asin(ratio));
    var minDigits = valueDigits(ratio);
    var error = ratio / (Math.sqrt(1 - ratio * ratio) * angle);
    angle = normalizeValue(angle, minDigits, error);
    return angle;
};


exports.arccosine = function(ratio) {
    var angle = lockOnAngle(Math.acos(ratio));
    var minDigits = valueDigits(ratio);
    var error = ratio / (Math.sqrt(1 - ratio * ratio) * angle);
    angle = normalizeValue(angle, minDigits, error);
    return angle;
};


exports.arctangent = function(opposite, adjacent) {
    var ratio = opposite / adjacent;
    var angle = lockOnAngle(Math.atan2(opposite, adjacent));
    var minDigits = valueDigits(ratio);
    var error = ratio / (Math.sqrt(1 + ratio * ratio) * angle);
    angle = normalizeValue(angle, minDigits, error);
    return angle;
};


// PRIVATE FUNCTIONS

/*
 * These functions calculate the significant digits of numbers and perform normalizations
 * on them based on the number of significant digits. The rules for performing these
 * calculations are documented here: https://en.wikipedia.org/wiki/Significance_arithmetic
 */

/*
 * This value captures the number of significant digits in the largest integer
 */
var MAXIMUM_PRECISION = Number.MAX_SAFE_INTEGER.toString().length;

function parse(number) {
    var pattern = /([0-9]+)\.([0-9]*[1-9])(e[+-][1-9][0-9]*)?/;
    var matches = number.toString().match(pattern);
    var coefficient = matches[1];
    var decimal = matches[2];
    var exponent = matches[3] ? Number(matches[3].slice(1)) : 0;
    return {
        coefficient: coefficient,
        decimal: decimal,
        exponent: exponent
    };
}


/*
 * This function calculates the significant digits of a number and an optional condition number
 * that was derived from the transcendental operation performed on the number.
 */
function valueDigits() {
    var significantDigits = MAXIMUM_PRECISION;
    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i];
        if (Number.isFinite(value) && !Number.isInteger(value)) {
            var parsed = parse(value);
            var digits = parsed.coefficient.length + parsed.decimal.length;
            significantDigits = Math.min(significantDigits, digits);
        }
    }
    return significantDigits;
}


function decimalDigits() {
    var significantDigits = MAXIMUM_PRECISION;
    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i];
        if (Number.isFinite(value) && !Number.isInteger(value)) {
            var parsed = parse(value);
            var digits = parsed.decimal.length - parsed.exponent;
            significantDigits = Math.min(significantDigits, digits);
        } else {
            significantDigits = 0;
        }
    }
    return significantDigits;
}


function normalizeValue(number, significantDigits, error) {
    if (error < -9007199254740991 || error > 9007199254740991) error = Infinity;
    var errorDigits;
    if (isFinite(error) && error !== 0) {
        errorDigits= Math.round(Math.abs(Math.log10(Math.abs(error))));
        significantDigits -= errorDigits;
    }
    return Number(number.toPrecision(significantDigits));
}


function normalizeDecimal(number, significantDigits) {
    return Number(number.toFixed(significantDigits));
}


function lockOnPole(number) {
    if (number > -6.123233995736766e-16 && number < 6.123233995736766e-16) return 0;
    if (number > 0.9999999999999996 && number < 1.0000000000000004) return 1;
    if (number > -1.0000000000000004 && number < -0.9999999999999996) return -1;
    if (number === -Infinity) return Infinity;
    return number;
}


function lockOnAngle(angle) {
    if (angle > 3.141592653589791 && angle < 3.141592653589795) angle = exports.PI;
    if (angle < -3.141592653589791 && angle > -3.141592653589795) angle = exports.PI;
    return angle;
}