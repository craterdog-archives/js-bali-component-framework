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
 * This library provides functions that perform arithmetic and trigonometric operations
 * that preserve only the significant digits of the results. It uses the algorithms for
 * calculating the significant digits defined here:
 * https://en.wikipedia.org/wiki/Significance_arithmetic
 * 
 * It also corrects the Math library with respect to indeterminate forms:
 * <pre>
 *    0/0, ∞/∞, 0*∞, 1^∞, ∞-∞, 0^0, and ∞^0
 * </pre>
 * 
 * See the following link for derivations:
 * https://en.wikipedia.org/wiki/Indeterminate_form
 */


// PUBLIC CONSTANTS

exports.E = Math.E;
exports.PI = Math.PI;
exports.PHI = (Math.sqrt(5) + 1) / 2;


// PUBLIC FUNCTIONS

/**
 * This function checks to see if the specified number is close enough to zero or infinity to
 * cause it to lock onto one of those values. This helps with the hysteresis that occurs when
 * doing round trip conversions using arithmetic functions.
 * 
 * @param {Number} number The number to be checked.
 * @returns {Number} The potentially converted number.
 */
exports.lockOnExtreme = function(number) {
    var extreme = Math.fround(number);
    if (extreme === -0 || extreme === 0) return 0;
    if (extreme === -Infinity || extreme === Infinity) return Infinity;
    return number;
};


/**
 * This function checks to see if the specified number is close enough to one of the six poles
 * on a Riemann sphere to cause it to lock onto one of those values. This helps with the
 * hysteresis that occurs when doing round trip conversions with complex numbers.
 * 
 * @param {Number} number The number to be checked.
 * @returns {Number} The potentially converted number.
 */
exports.lockOnPole = function(number) {
    if (number === -0) return 0;
    if (number > -1.2246467991473536e-16 && number < 1.2246467991473536e-16) return 0;
    if (number > 0.9999999999999996 && number < 1.0000000000000004) return 1;
    if (number > -1.0000000000000004 && number < -0.9999999999999996) return -1;
    if (number < -16331239353195366 || number > 16331239353195366) return Infinity;
    if (number === -Infinity) return Infinity;
    return number;
};


/**
 * This function checks to see if the specified angle is close enough to pi or -pi to
 * cause it to lock onto one of those values. This helps with the hysteresis that occurs when
 * doing round trip conversions using trigonometric functions.
 * 
 * @param {Number} angle The angle to be checked.
 * @returns {Number} The potentially converted angle.
 */
exports.lockOnAngle = function(angle) {
    if (angle > 3.141592653589791 && angle < 3.141592653589795) angle = exports.PI;
    if (angle < -3.141592653589791 && angle > -3.141592653589795) angle = exports.PI;
    return angle;
};


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
        var value = exports.lockOnExtreme(arguments[i]);
        result = exports.lockOnExtreme(result + value);
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
    var first = exports.lockOnExtreme(first);
    var second = exports.lockOnExtreme(second);
    var result = exports.lockOnExtreme(first - second);
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
        var value = exports.lockOnExtreme(arguments[i]);
        result = exports.lockOnExtreme(result * value);
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
    var first = exports.lockOnExtreme(first);
    var second = exports.lockOnExtreme(second);
    var result = exports.lockOnExtreme(first / second);
    var minDigits = valueDigits(first, second);
    result = normalizeValue(result, minDigits);
    return result;
};


/**
 * This function returns the remainder that is left from the quotient of two numbers. The
 * number of significant digits in the result is equal to the number of significant digits
 * in the operand with the least number of significant digits. For example:
 * <pre>
 *    123.45   (5 significant digits)
 * %    67.8   (3 significant digits)
 * ---------
 *      55.6   (3 significant digits)
 * </pre>
 *
 * @param {Number} first The number to be divided into.
 * @param {Number} second The number to be divided by.
 * @return {Number} The resulting remainder of the quotient of the two numbers.
 */
exports.remainder = function(first, second) {
    var first = exports.lockOnExtreme(first);
    var second = exports.lockOnExtreme(second);
    var result = exports.lockOnExtreme(first % second);
    var minDigits = valueDigits(first, second);
    result = normalizeValue(result, minDigits);
    return result;
};


/**
 * This function returns the value of a base number raised to an exponential power. The
 * number of significant digits in the result is equal to the number of significant digits
 * in the operand with the least number of significant digits minus the order of magnitude
 * of the error for the function which is calculated as follows:
 * <pre>
 *                      |                       |
 *   error digits: log  | exponent * log (base) |
 *                    10|               e       |
 * </pre>
 * 
 * @param {Number} base The base value.
 * @param {Number} exponent The exponent value.
 * @returns {Number} The value of the base raised to the exponent.
 */
exports.exponential = function(base, exponent) {
    var base = exports.lockOnExtreme(base);
    var exponent = exports.lockOnExtreme(exponent);
    // check for cases where Math.pow(0, 0) and Math.pow(Infinity, 0) are wrong!
    if ((base === 0 || base === Infinity) && exponent === 0) return NaN;
    var result = exports.lockOnExtreme(Math.pow(base, exponent));
    var minDigits = valueDigits(exponent, base);
    var error = exponent * Math.log(base);
    result = normalizeValue(result, minDigits, error);
    return result;
};


/**
 * This function returns the value of the logarithm with a base number of an exponential value.
 * The number of significant digits in the result is equal to the number of significant digits
 * in the operand with the least number of significant digits minus the order of magnitude
 * of the error for the function which is calculated as follows:
 * <pre>
 *                      |      1      |
 *   error digits: log  | ----------- |
 *                    10| log (value) |
 *                      |    e        |
 * </pre>
 * 
 * @param {Number} base The base value.
 * @param {Number} value The value that is equal to base^exponent.
 * @returns {Number} The value of the base raised to the exponent.
 */
exports.logarithm = function(base, value) {
    var base = exports.lockOnExtreme(base);
    var value = exports.lockOnExtreme(value);
    var result = exports.lockOnExtreme(Math.log(value)/Math.log(base));
    var minDigits = valueDigits(value, base);
    var error = exports.lockOnExtreme(1 / Math.log(value));
    result = normalizeValue(result, minDigits, error);
    return result;
};


/**
 * This function returns the ratio of the length of the side opposite of an angle to the length
 * of the hypotenuse of a right triangle. The number of significant digits in the result is
 * equal to the number of significant digits in the operand minus the order of magnitude of the
 * error for the function which is calculated as follows:
 * <pre>
 *                      |     angle      |
 *   error digits: log  | -------------- |
 *                    10| tangent(angle) |
 * </pre>
 * 
 * @param {Number} angle The angle within the right triangle.
 * @returns {Number} The ratio of the opposite to the hypotenuse.
 */
exports.sine = function(angle) {
    var result = exports.lockOnPole(Math.sin(angle));
    var minDigits = valueDigits(angle);
    var error = exports.lockOnExtreme(angle / exports.lockOnPole(Math.tan(angle)));
    result = normalizeValue(result, minDigits, error);
    return result;
};


/**
 * This function returns the ratio of the length of the side adjacent to an angle to the length
 * of the hypotenuse of a right triangle. The number of significant digits in the result is
 * equal to the number of significant digits in the operand minus the order of magnitude of the
 * error for the function which is calculated as follows:
 * <pre>
 *                      |                        |
 *   error digits: log  | angle * tangent(angle) | 
 *                    10|                        |
 * </pre>
 * 
 * @param {Number} angle The angle within the right triangle.
 * @returns {Number} The ratio of the adjacent to the hypotenuse.
 */
exports.cosine = function(angle) {
    var result = exports.lockOnPole(Math.cos(angle));
    var minDigits = valueDigits(angle);
    var error = exports.lockOnExtreme(angle * exports.lockOnPole(Math.tan(angle)));
    result = normalizeValue(result, minDigits, error);
    return result;
};


/**
 * This function returns the ratio of the length of the side opposite of an angle to the length
 * of the side adjacent to the angle of a right triangle. The number of significant digits in
 * the result is equal to the number of significant digits in the operand minus the order of
 * magnitude of the error for the function which is calculated as follows:
 * <pre>
 *                      |          /                       1        \ |
 *   error digits: log  | angle * | tangent(angle) + -------------- | |
 *                    10|          \                 tangent(angle) / |
 * </pre>
 * 
 * @param {Number} angle The angle within the right triangle.
 * @returns {Number} The ratio of the opposite to the adjacent.
 */
exports.tangent = function(angle) {
    var result = exports.lockOnPole(Math.tan(angle));
    var minDigits = valueDigits(angle);
    var error = exports.lockOnExtreme(angle * (result + 1 / result));
    result = normalizeValue(result, minDigits, error);
    return result;
};


/**
 * This function returns the angle defined by the ratio of the length of the side opposite of
 * the angle to the length of the hypotenuse of a right triangle. The number of significant
 * digits in the result is equal to the number of significant digits in the operand minus the
 * order of magnitude of the error for the function which is calculated as follows:
 * <pre>
 *                      |               ratio               |
 *   error digits: log  | --------------------------------- |
 *                    10|                            2  1/2 |
 *                      | arcsine(ratio) * (1 - ratio  )    |
 * </pre>
 * 
 * @param {Number} ratio The ratio of the opposite to the hypotenuse within the right triangle.
 * @returns {Number} The corresponding angle.
 */
exports.arcsine = function(ratio) {
    var angle = exports.lockOnAngle(Math.asin(ratio));
    var minDigits = valueDigits(ratio);
    var error = exports.lockOnExtreme(ratio / (Math.sqrt(1 - ratio * ratio) * angle));
    angle = normalizeValue(angle, minDigits, error);
    return angle;
};


/**
 * This function returns the angle defined by the ratio of the length of the side adjacent to
 * the angle to the length of the hypotenuse of a right triangle. The number of significant
 * digits in the result is equal to the number of significant digits in the operand minus the
 * order of magnitude of the error for the function which is calculated as follows:
 * <pre>
 *                      |                ratio                |
 *   error digits: log  | ----------------------------------- |
 *                    10|                              2  1/2 |
 *                      | arccosine(ratio) * (1 - ratio  )    |
 * </pre>
 * 
 * @param {Number} ratio The ratio of the adjacent to the hypotenuse within the right triangle.
 * @returns {Number} The corresponding angle.
 */
exports.arccosine = function(ratio) {
    var angle = exports.lockOnAngle(Math.acos(ratio));
    var minDigits = valueDigits(ratio);
    var error = exports.lockOnExtreme(ratio / (Math.sqrt(1 - ratio * ratio) * angle));
    angle = normalizeValue(angle, minDigits, error);
    return angle;
};


/**
 * This function returns the angle defined by the ratio of the length of the side opposite of
 * the angle to the length of the side adjacent to the angle in a right triangle. The number
 * of significant digits in the result is equal to the number of significant digits in the
 * operand with the least number of significant digits minus the order of magnitude of the
 * error for the function which is calculated as follows:
 * <pre>
 *                      |                ratio                 |
 *   error digits: log  | ------------------------------------ |
 *                    10|                               2  1/2 |
 *                      | arctangent(ratio) * (1 + ratio  )    |
 * </pre>
 * 
 * @param {Number} opposite The length of the side opposite the angle in the right triangle.
 * @param {Number} adjacent The length of the side adjacent to the angle in the right triangle.
 * @returns {Number} The corresponding angle.
 */
exports.arctangent = function(opposite, adjacent) {
    var ratio = exports.lockOnExtreme(opposite / adjacent);
    var angle = exports.lockOnAngle(Math.atan2(opposite, adjacent));
    var minDigits = valueDigits(ratio);
    var error = exports.lockOnExtreme(ratio / (Math.sqrt(1 + ratio * ratio) * angle));
    angle = normalizeValue(angle, minDigits, error);
    return angle;
};


// PRIVATE FUNCTIONS

/*
 * This value captures the number of significant digits in the largest integer
 */
var MAXIMUM_PRECISION = Number.MAX_SAFE_INTEGER.toString().length;


/*
 * This function parses a floating point number into its three parts.
 */
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
 * This function calculates the smallest number of significant digits for a list of numbers
 * that are passed as arguments to this function. All integers including zero have the
 * maximum number of significant digits.
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


/*
 * This function normalizes a raw numeric value to the specified number of significant
 * digits minus the error digits associated with the specified error factor. The number
 * of error digits is equal to the base 10 logarithm of the error factor.
 */
function normalizeValue(number, significantDigits, error) {
    var errorDigits;
    if (isFinite(error) && error !== 0) {
        errorDigits= Math.round(Math.abs(Math.log10(Math.abs(error))));
        significantDigits -= errorDigits;
    }
    if (significantDigits < 1 || significantDigits > 21) {
        console.log('significant digits: ' + significantDigits);
    }
    return Number(number.toPrecision(significantDigits));
}


/*
 * This function calculates the smallest number of significant digits to the right of the
 * decimal place for a list of numbers that are passed as arguments to this function.  All
 * integers (with the exception of zero) have zero significant digits to the right of the
 * decimal.
 */
function decimalDigits() {
    var significantDigits = MAXIMUM_PRECISION;
    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i];
        if (Number.isFinite(value) && !Number.isInteger(value)) {
            var parsed = parse(value);
            var digits = parsed.decimal.length - parsed.exponent;
            significantDigits = Math.min(significantDigits, digits);
        } else {
            if (value !== 0) significantDigits = 0;
        }
    }
    return significantDigits;
}


/*
 * This function normalizes a raw numeric value to the specified number of significant
 * digits to the right of the decimal place.
 */
function normalizeDecimal(number, significantDigits) {
    return Number(number.toFixed(significantDigits));
}
