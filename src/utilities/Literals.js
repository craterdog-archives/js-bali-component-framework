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
 * This library provides functions that parse and format literal values of elements.
 */
const precision = require('./Precision');
const codex = require('./Codex');


// PUBLIC FUNCTIONS

/**
 * This function parses the source string for an angle and returns the numeric value
 * of the angle.
 *
 * @param {String} source The source string for the angle.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {Number} The numeric value of the angle in radians.
 */
exports.parseAngle = function(source, parameters) {
    source = source.slice(1);  // remove the leading '~'
    var value = sourceToNumber(source);
    if (parameters) {
        const units = parameters.getValue(1);
        if (units.toString() === '$degrees') {
            // convert degrees to radians
            value = precision.quotient(precision.product(value, precision.PI), 180);
        }
    }
    return value;
};


/**
 * This function formats the numeric value of an angle as a source string.
 * 
 * @param {Number} value The numeric value of an angle.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the angle.
 */
exports.formatAngle = function(value, parameters) {
    if (parameters) {
        const units = parameters.getValue(1);
        if (units.toString() === '$degrees') {
            // convert radians to degrees
            value = precision.quotient(precision.product(value, 180), precision.PI);
        }
    }
    const source = '~' + numberToSource(value);  // add the leading '~'
    return source;
};


/**
 * This function parses the source string for a binary string and returns a byte buffer
 * containing the binary string.
 *
 * @param {String} source The source string for the binary string.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {Buffer} The byte buffer containing the binary string.
 */
exports.parseBinary = function(source, parameters) {
    var string = source.slice(1, -1);  // strip off the "'" delimiters
    string = string.replace(/\s/g, '');  // strip out all whitespace
    var base = 32;  // default value
    if (parameters) {
        base = parameters.getValue(1).toNumber();
    }
    switch (base) {
        case 2:
            return codex.base2Decode(string);
        case 16:
            return codex.base16Decode(string);
        case 32:
            return codex.base32Decode(string);
        case 64:
            return codex.base64Decode(string);
        default:
            throw new Error('BUG: An invalid base for the binary string was passed to the constructor: ' + base);
    }
};


/**
 * This function formats the byte buffer of a binary string as a source string.
 * 
 * @param {Buffer} value The byte buffer of a binary string.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the binary string.
 */
exports.formatBinary = function(value, parameters) {
    var source;
    var base = 32;  // default value
    if (parameters) {
        base = parameters.getValue(1).toNumber();
    }
    switch (base) {
        case 2:
            source = codex.base2Encode(value);
            break;
        case 16:
            source = codex.base16Encode(value);
            break;
        case 32:
            source = codex.base32Encode(value);
            break;
        case 64:
            source = codex.base64Encode(value);
            break;
        default:
            throw new Error('BUG: An invalid binary base value was specified in the parameters: ' + base);
    }
    source = "'" + source + "'";
    return source;
};


/**
 * This function parses the source string for a time duration and returns the ISO representation
 * of the time duration.
 *
 * @param {String} source The source string for the time duration.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {String} The ISO representation of the time duration.
 */
exports.parseDuration = function(source, parameters) {
    const value = source.slice(1);  // remove the leading '~'
    return value;
};


/**
 * This function formats the ISO representation of a time duration as a source string.
 * 
 * @param {String} value The ISO representation of a time duration.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the time duration.
 */
exports.formatDuration = function(value, parameters) {
    const source = '~' + value;  // add the leading '~'
    return source;
};


/**
 * This function parses the source string for an imaginary number and returns the numeric value
 * of the imaginary number.
 *
 * @param {String} source The source string for the imaginary number.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {Number} The numeric value of the imaginary number.
 */
exports.parseImaginary = function(source, parameters) {
    source = source.slice(0, -1).trim();  // remove the trailing 'i'
    const value = sourceToNumber(source);
    return value;
};


/**
 * This function formats an imaginary number as a source string.
 * 
 * @param {Number} value The imaginary number.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the imaginary number.
 */
exports.formatImaginary = function(value, parameters) {
    var source = numberToSource(value);
    switch (source) {
        case 'undefined':
        case 'infinity':
            return source;
        case 'e':
        case 'pi':
        case 'phi':
            return source + ' i';
        default:
            return source + 'i';
    }
};


/**
 * This function parses the source string for a moment in time and returns the ISO representation
 * of the moment in time.
 *
 * @param {String} source The source string for the moment in time.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {String} The ISO representation of the moment in time.
 */
exports.parseMoment = function(source, parameters) {
    const value = source.slice(1, -1);  // remove the '<' and '>' delimiters
    // TODO: adjust for timezone offset based on location specified in parameters
    return value;
};


/**
 * This function formats the ISO representation of a moment in time as a source string.
 * 
 * @param {String} value The ISO representation of a moment in time.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the moment in time.
 */
exports.formatMoment = function(value, parameters) {
    const source = '<' + value + '>';  // add the '<' and '>' delimiters
    return source;
};


/**
 * This function parses the source string for a text pattern and returns the JS string for it.
 *
 * @param {String} source The source string for the pattern.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {String} The JS string for the pattern.
 */
exports.parsePattern = function(source, parameters) {
    const value = source;  // no changes needed
    return value;
};


/**
 * This function formats the JS string for a text pattern as a source string.
 * 
 * @param {String} value The JS string for a text pattern.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the text pattern.
 */
exports.formatPattern = function(value, parameters) {
    const source = value;  // no changes needed
    return source;
};


/**
 * This function parses the source string for a percent and returns the numeric value
 * of the percent.
 *
 * @param {String} source The source string for the percent.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {Number} The numeric value of the percent.
 */
exports.parsePercent = function(source, parameters) {
    source = source.slice(0, -1);  // remove the trailing '%'
    const value = sourceToNumber(source);
    return value;
};


/**
 * This function formats a percent as a source string.
 * 
 * @param {Number} value The value of the percent.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the percent.
 */
exports.formatPercent = function(value, parameters) {
    var source = numberToSource(value);
    source += '%';  // append the %
    return source;
};


/**
 * This function parses the source string for a probability and returns the numeric value
 * of the probability.
 *
 * @param {String} source The source string for the probability.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {Number} The numeric value of the probability.
 */
exports.parseProbability = function(source, parameters) {
    switch (source) {
        case 'false':
            return 0;
        case 'true':
            return 1;
        default:
            return Number('0' + source);  // add the leading '0'
    }
};


/**
 * This function formats a probability as a source string.
 * 
 * @param {Number} value The value of the probability.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the probability.
 */
exports.formatProbability = function(value, parameters) {
    switch (value) {
        case 0:
            return 'false';
        case 1:
            return 'true';
        default:
            return value.toString().substring(1);  // remove the leading '0'
    }
};


/**
 * This function parses the source string for a real number and returns the numeric value
 * of the real number.
 *
 * @param {String} source The source string for the real number.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {Number} The numeric value of the real number.
 */
exports.parseReal = function(source, parameters) {
    const value = sourceToNumber(source);
    return value;
};


/**
 * This function formats a real number as a source string.
 * 
 * @param {Number} value The real number.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the real number.
 */
exports.formatReal = function(value, parameters) {
    var source = numberToSource(value);
    return source;
};


/**
 * This function parses the source string for a reference and returns the URL string for the
 * reference.
 *
 * @param {String} source The source string for the reference.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {String} The URL string for the reference.
 */
exports.parseReference = function(source, parameters) {
    const value = source.slice(1, -1);  // remove the '<' and '>' delimiters
    return value;
};


/**
 * This function formats the URL string for a reference as a source string.
 * 
 * @param {String} value The value of the URL string.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the reference.
 */
exports.formatReference = function(value, parameters) {
    const source = '<' + value + '>';  // add the '<' and '>' delimiters
    return source;
};


/**
 * This function parses the source string for a reserved symbol and returns the identifier
 * for it.
 *
 * @param {String} source The source string for the reserved symbol.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {String} The identifier for the reserved symbol.
 */
exports.parseReserved = function(source, parameters) {
    const value = source.slice(2);  // remove the leading '$$'
    return value;
};


/**
 * This function formats the identifier for a reserved symbol as a source string.
 * 
 * @param {String} value The identifier for a reserved symbol.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the reserved symbol.
 */
exports.formatReserved = function(value, parameters) {
    const source = '$$' + value;  // add the leading '$$'
    return source;
};


/**
 * This function parses the source string for a symbol and returns the identifier for it.
 *
 * @param {String} source The source string for the symbol.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {String} The identifier for the symbol.
 */
exports.parseSymbol = function(source, parameters) {
    const value = source.slice(1);  // remove the leading '$'
    return value;
};


/**
 * This function formats the identifier for a symbol as a source string.
 * 
 * @param {String} value The identifier for a symbol.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the symbol.
 */
exports.formatSymbol = function(value, parameters) {
    const source = '$' + value;  // add the leading '$'
    return source;
};


/**
 * This function parses the source string for a tag and returns the identifier for it.
 *
 * @param {String} source The source string for the tag.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {String} The identifier for the tag.
 */
exports.parseTag = function(source, parameters) {
    const value = source.slice(1);  // remove the leading '#'
    return value;
};


/**
 * This function formats the identifier for a tag as a source string.
 * 
 * @param {String} value The identifier for a tag.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the tag.
 */
exports.formatTag = function(value, parameters) {
    const source = '#' + value;  // add the leading '#'
    return source;
};


/**
 * This function parses the source string for a text string and returns the JS string for it.
 *
 * @param {String} source The source string for the text string.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {String} The JS string for the text string.
 */
exports.parseText = function(source, parameters) {
    const value = source.slice(1, -1);  // remove the '"' delimitors
    return value;
};


/**
 * This function formats the JS string for a text string as a source string.
 * 
 * @param {String} value The JS string for a text string.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the text string.
 */
exports.formatText = function(value, parameters) {
    const source = '"' + value + '"';  // add the '"' delimitors
    return source;
};


/**
 * This function parses the source string for a version string and returns an array
 * containing the version numbers for each level.
 *
 * @param {String} source The source string for the version string.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @return {Array} An array containing the version numbers for each level.
 */
exports.parseVersion = function(source, parameters) {
    const levels = source.slice(1).split('.');  // pull out the version level strings
    const value = [];
    levels.forEach(function(level) {
        value.push(Number(level));
    });
    return value;
};


/**
 * This function formats the JS string for a version string as a source string.
 * 
 * @param {Array} value An array containing the version numbers for each level.
 * @param {Parameters} parameters An optional set of parameters used to parameterize the type.
 * @returns {String} The source string for the version string.
 */
exports.formatVersion = function(value, parameters) {
    const source = 'v' + value.join('.');
    return source;
};


// PRIVATE FUNCTIONS

/**
 * This function returns the JS number for a Bali Document Notation™ numeric string.
 * 
 * @param {String} source The source string for the number.
 * @returns {Number} The JS number.
 */
function sourceToNumber(source) {
    switch (source) {
        case 'e':
            return precision.E;
        case 'pi':
            return precision.PI;
        case 'phi':
            return precision.PHI;
        default:
            return Number(source);
    }
}


/**
 * This function returns the Bali Document Notation™ representation of a JS number.
 * 
 * @param {Number} number The JS number.
 * @returns {String} The source string for that number.
 */
function numberToSource(number) {
    var string = Number(number.toPrecision(14)).toString();
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
            return number.toString().replace(/e\+?/g, 'E');  // convert to canonical exponent format
    }
}

