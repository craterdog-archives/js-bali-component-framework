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
 * This element class captures the state and methods associated with a moment
 * in time.
 */
const moduleName = '/bali/elements/Moment';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Duration = require('./Duration').Duration;


const FORMATS = [
    'Y',
    'Y-MM',
    'Y-MM-DD',
    'Y-MM-DDTHH',
    'Y-MM-DDTHH:mm',
    'Y-MM-DDTHH:mm:ss',
    'Y-MM-DDTHH:mm:ss.SSS'
];


// PUBLIC FUNCTIONS

/**
 * This function creates a new moment in time using the specified value and parameters.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {String|Number} value The optional source string value or millisecond value of
 * the moment in time.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Moment} The new moment in time.
 */
const Moment = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        [ moduleName ],
        [ ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Moment', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Number'
        ]);
    }
    var format = FORMATS[6];
    if (value === null || value === undefined) {  // can't check for zero since that is a valid date
        value = Date.now();  // current time in milliseconds since EPOC
    } else if (typeof value === 'string') {
        format = detectFormat(value, this.debug);
        value = extractUTCValue(value, this.debug);
    }

    // since this element is immutable the attributes must be read-only
    this.getValue = function() {
        return value;
    };

    this.getFormat = function() {
        return format;
    };

    this.getMillisecond = function() {
        return new Date(value).getUTCMilliseconds();
    };

    this.getSecond = function() {
        return new Date(value).getUTCSeconds();
    };

    this.getMinute = function() {
        return new Date(value).getUTCMinutes();
    };

    this.getHour = function() {
        return new Date(value).getUTCHours();
    };

    this.getDay = function() {
        return new Date(value).getUTCDate();
    };

    this.getMonth = function() {
        return new Date(value).getUTCMonth() + 1;
    };

    this.getYear = function() {
        return new Date(value).getUTCFullYear();
    };

    return this;
};
Moment.prototype = Object.create(abstractions.Element.prototype);
Moment.prototype.constructor = Moment;
exports.Moment = Moment;


// PUBLIC METHODS

/**
 * This method returns an ISO 8601 formatted string for this moment.
 *
 * @returns {String} The ISO 8601 formatted string.
 */
Moment.prototype.toISOString = function() {
    var string = this.getFormat();
    string = string.replace('Y', '' + this.getYear());
    string = string.replace('MM', ('0' + this.getMonth()).slice(-2));
    string = string.replace('DD', ('0' + this.getDay()).slice(-2));
    string = string.replace('HH', ('0' + this.getHour()).slice(-2));
    string = string.replace('mm', ('0' + this.getMinute()).slice(-2));
    string = string.replace('ss', ('0' + this.getSecond()).slice(-2));
    string = string.replace('SSS', ('00' + this.getMillisecond()).slice(-3));
    return string;
};


// PUBLIC FUNCTIONS

/**
 * This function returns the duration between two moments in time.
 *
 * @param {Moment} first The first moment in time.
 * @param {Moment} second The second moment in time.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Duration} The duration between the two moments in time.
 */
Moment.duration = function(first, second, debug) {
    debug = debug || 0;  // default value
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$duration', '$first', first, [
            '/bali/elements/Moment'
        ]);
        abstractions.Component.validateArgument(moduleName, '$duration', '$second', second, [
            '/bali/elements/Moment'
        ]);
    }
    return new Duration(first.getValue() - second.getValue(), undefined, debug);
};


/**
 * This function returns a moment in time that is earlier than the specified moment
 * by the specified duration of time.
 *
 * @param {Moment} moment The initial moment in time.
 * @param {Duration} duration The duration of time to be subtracted.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Moment} The resulting moment in time.
 */
Moment.earlier = function(moment, duration, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$earlier', '$moment', moment, [
            '/bali/elements/Moment'
        ]);
        abstractions.Component.validateArgument(moduleName, '$earlier', '$duration', duration, [
            '/bali/elements/Duration'
        ]);
    }
    const earlier = moment.getValue() - duration.getValue();
    return new Moment(earlier, moment.getParameters(), debug);
};


/**
 * This function returns a moment in time that is later than the specified moment
 * by the specified duration of time.
 *
 * @param {Moment} moment The initial moment in time.
 * @param {Duration} duration The duration of time to be added.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Moment} The resulting moment in time.
 */
Moment.later = function(moment, duration, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$later', '$moment', moment, [
            '/bali/elements/Moment'
        ]);
        abstractions.Component.validateArgument(moduleName, '$later', '$duration', duration, [
            '/bali/elements/Duration'
        ]);
    }
    const later = moment.getValue() + duration.getValue();
    return new Moment(later, moment.getParameters(), debug);
};


// PRIVATE FUNCTIONS

const two = '(\\d\\d)';
const three = '(\\d\\d\\d)';
const four = '(\\d\\d\\d\\d)';
const moment = `${four}(?:-${two})?(?:-${two})?(?:T${two})?(?::${two})?(?::${two})?(?:[\\.,]${three})?`;
const pattern = new RegExp(moment);

const parseISOString = function(string, debug) {
    const fields = string.match(pattern).slice(1);  // remove the first matching group which is the entire string
    var index = fields.indexOf(undefined);  // index of the first undefined field
    if (index === 0) {
        const exception = new abstractions.Exception({
            $module: moduleName,
            $procedure: '$parseISOString',
            $exception: '$invalidFormat',
            $string: string,
            $text: '"The string is not in a valid ISO 8601 timestamp format."'
        }, undefined, debug);
        throw exception;
    }
    if (index < 0) index = 7;  // all fields are defined
    return fields.slice(0, index);  // remove any undefined fields
};


const detectFormat = function(string, debug) {
    const fields = parseISOString(string, debug);
    return FORMATS[fields.length - 1];
};


const extractUTCValue = function(string, debug) {
    const fields = parseISOString(string, debug);
    var utcString = '';
    utcString += fields[0];
    utcString += '-' + (fields[1] || '01');
    utcString += '-' + (fields[2] || '01');
    utcString += 'T';
    utcString += (fields[3] || '00') + ':';
    utcString += (fields[4] || '00') + ':';
    utcString += (fields[5] || '00') + '.';
    utcString += (fields[6] || '000');
    utcString += 'Z';  // must have UTC symbol or it will treat it is local
    return Date.parse(utcString);
};

