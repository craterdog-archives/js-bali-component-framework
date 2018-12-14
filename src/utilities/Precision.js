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
exports.MAXIMUM_PRECISION = Number.MAX_SAFE_INTEGER.toString().length - 1;


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
    if (number > -2.4492935982947068e-16 && number < 2.4492935982947068e-16) return 0;
    if (number > 0.9999999999999996 && number < 1.0000000000000004) return 1;
    if (number > -1.0000000000000004 && number < -0.9999999999999996) return -1;
    if (number < -5443746451065119 || number > 5443746451065119) return Infinity;
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
 * This function calculates the smallest number of significant digits for a list of values
 * that are passed as arguments to this function. All integers including zero have the
 * maximum number of significant digits.
 * 
 * @params {Numbers} arguments The values to be evaluated.
 * @returns {Number} The number of significant digits for the list of values.
 */
exports.valueDigits = function() {
    var significantDigits = exports.MAXIMUM_PRECISION;
    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i];
        if (Number.isFinite(value) && !Number.isInteger(value)) {
            var parsed = parse(value);
            var digits = parsed.coefficient.length + parsed.decimal.length;
            significantDigits = Math.min(significantDigits, digits);
        }
    }
    return significantDigits;
};


/**
 * This function normalizes a raw numeric value to the specified number of significant
 * digits minus the error digits associated with the specified error factor. The number
 * of error digits is equal to the base 10 logarithm of the error factor.
 * 
 * @param {Number} value The raw value to be normalized.
 * @param {Number} significantDigits The number of significant digits for the value.
 * @param {Number} error The error factor to use to adjust the significant digits.
 * @returns {Number} The normalized value.
 */
exports.normalizeValue = function(value, significantDigits, error) {
    var errorDigits;
    if (isFinite(error) && error !== 0) {
        errorDigits= Math.round(Math.abs(Math.log10(Math.abs(error))));
        significantDigits -= errorDigits;
    }
    return Number(value.toPrecision(significantDigits));
};


/**
 * This function calculates the smallest number of significant digits to the right of the
 * decimal place for a list of values that are passed as arguments to this function.  All
 * integers (with the exception of zero) have zero significant digits to the right of the
 * decimal.
 * 
 * @params {Numbers} arguments The values to be evaluated.
 * @returns {Number} The number of significant digits to the right of the decimal for the
 * list of values.
 */
exports.decimalDigits = function() {
    var significantDigits = exports.MAXIMUM_PRECISION;
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
};


/**
 * This function normalizes a raw numeric value to the specified number of significant
 * digits to the right of the decimal place.
 * 
 * @param {Number} value The raw value to be normalized.
 * @param {Number} significantDigits The number of significant digits to the right of the
 * decimal for the value.
 * @returns {Number} The normalized value.
 */
exports.normalizeDecimal = function(value, significantDigits) {
    return Number(value.toFixed(significantDigits));
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
 * @params {Numbers} arguments The values to be added.
 * @return {Number} The resulting sum of the numbers.
 */
exports.sum = function() {
    var result = 0;
    var digits = exports.decimalDigits.apply(this, arguments);
    for (var i = 0; i < arguments.length; i++) {
        var value = exports.lockOnExtreme(arguments[i]);
        result = exports.lockOnExtreme(result + value);
    }
    result = exports.normalizeDecimal(result, digits);
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
 * @param {Number} minuend The number to be subtracted from.
 * @param {Number} subtrahend The number to be subtracted from the first number.
 * @return {Number} The resulting difference of the two numbers.
 */
exports.difference = function(minuend, subtrahend) {
    minuend = exports.lockOnExtreme(minuend);
    subtrahend = exports.lockOnExtreme(subtrahend);
    var result = exports.lockOnExtreme(minuend - subtrahend);
    var digits = exports.decimalDigits(minuend, subtrahend);
    result = exports.normalizeDecimal(result, digits);
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
 * @params {Numbers} arguments The values to be multiplied.
 * @return {Number} The resulting product of the numbers.
 */
exports.product = function() {
    var result = 1;
    var digits = exports.valueDigits.apply(this, arguments);
    for (var i = 0; i < arguments.length; i++) {
        var value = exports.lockOnExtreme(arguments[i]);
        result = exports.lockOnExtreme(result * value);
    }
    result = exports.normalizeValue(result, digits);
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
 * @param {Number} dividend The number to be divided into.
 * @param {Number} divisor The number to be divided by.
 * @return {Number} The resulting quotient of the two numbers.
 */
exports.quotient = function(dividend, divisor) {
    dividend = exports.lockOnExtreme(dividend);
    divisor = exports.lockOnExtreme(divisor);
    var result = exports.lockOnExtreme(dividend / divisor);
    var digits = exports.valueDigits(dividend, divisor);
    result = exports.normalizeValue(result, digits);
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
 * @param {Number} dividend The number to be divided into.
 * @param {Number} divisor The number to be divided by.
 * @return {Number} The resulting remainder of the quotient of the two numbers.
 */
exports.remainder = function(dividend, divisor) {
    dividend = exports.lockOnExtreme(dividend);
    divisor = exports.lockOnExtreme(divisor);
    var result = exports.lockOnExtreme(dividend % divisor);
    var digits = exports.valueDigits(dividend, divisor);
    result = exports.normalizeValue(result, digits);
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
    base = exports.lockOnExtreme(base);
    exponent = exports.lockOnExtreme(exponent);
    // check for cases where Math.pow(0, 0) and Math.pow(Infinity, 0) are wrong!
    if ((base === 0 || base === Infinity) && exponent === 0) return NaN;
    var result = exports.lockOnExtreme(Math.pow(base, exponent));
    var digits = exports.valueDigits(exponent, base);
    var error = exponent * Math.log(base);
    result = exports.normalizeValue(result, digits, error);
    return result;
};


/**
 * This function returns the value of the logarithm with a base number of an exponential value.
 * The number of significant digits in the result is equal to the number of significant digits
 * in the operand with the least number of significant digits minus the order of magnitude
 * of the error for the function which is calculated as follows:
 * <pre>
 *                      |         1         |
 *   error digits: log  | ----------------- |
 *                    10| log (exponential) |
 *                      |    e              |
 * </pre>
 * 
 * @param {Number} base The base value.
 * @param {Number} exponential The value that is equal to base^exponent.
 * @returns {Number} The value of the base logarith of the exponential.
 */
exports.logarithm = function(base, exponential) {
    base = exports.lockOnExtreme(base);
    exponential = exports.lockOnExtreme(exponential);
    var result = exports.lockOnExtreme(Math.log(exponential)/Math.log(base));
    var digits = exports.valueDigits(exponential, base);
    var error = exports.lockOnExtreme(1 / Math.log(exponential));
    result = exports.normalizeValue(result, digits, error);
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
    var digits = exports.valueDigits(angle);
    var error = exports.lockOnExtreme(angle / exports.lockOnPole(Math.tan(angle)));
    result = exports.normalizeValue(result, digits, error);
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
    var digits = exports.valueDigits(angle);
    var error = exports.lockOnExtreme(angle * exports.lockOnPole(Math.tan(angle)));
    result = exports.normalizeValue(result, digits, error);
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
    var digits = exports.valueDigits(angle);
    var error = exports.lockOnExtreme(angle * (result + 1 / result));
    result = exports.normalizeValue(result, digits, error);
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
    var digits = exports.valueDigits(ratio);
    var error = exports.lockOnExtreme(ratio / (Math.sqrt(1 - ratio * ratio) * angle));
    angle = exports.normalizeValue(angle, digits, error);
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
    var digits = exports.valueDigits(ratio);
    var error = exports.lockOnExtreme(ratio / (Math.sqrt(1 - ratio * ratio) * angle));
    angle = exports.normalizeValue(angle, digits, error);
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
    var ratio = exports.quotient(opposite, adjacent);
    var angle = exports.lockOnAngle(Math.atan2(opposite, adjacent));
    var digits = exports.valueDigits(ratio);
    var error = exports.lockOnExtreme(ratio / (Math.sqrt(1 + ratio * ratio) * angle));
    angle = exports.normalizeValue(angle, digits, error);
    return angle;
};


// PRIVATE FUNCTIONS

/*
 * This function parses a floating point number into its three parts.
 */
function parse(number) {
    var pattern = /([0-9]+)\.([0-9]*[1-9])(e[+-][1-9][0-9]*)?/;
    var matches = number.toString().match(pattern);
    var coefficient = matches[1];
    var decimal = matches[2];
    var exponent = matches[3] ? Number(matches[3].slice(1)) : 0;
    if (coefficient === '0') coefficient = '';  // leading zero does not count
    return {
        coefficient: coefficient,
        decimal: decimal,
        exponent: exponent
    };
}