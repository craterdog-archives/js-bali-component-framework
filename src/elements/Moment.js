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
        const isoString = value;
        format = detectFormat(isoString);
        value = parseIsoString(isoString);
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
Moment.prototype.toISO = function() {
    var isoString = this.getFormat();
    isoString = isoString.replace('Y', '' + this.getYear());
    isoString = isoString.replace('MM', ('0' + this.getMonth()).slice(-2));
    isoString = isoString.replace('DD', ('0' + this.getDay()).slice(-2));
    isoString = isoString.replace('HH', ('0' + this.getHour()).slice(-2));
    isoString = isoString.replace('mm', ('0' + this.getMinute()).slice(-2));
    isoString = isoString.replace('ss', ('0' + this.getSecond()).slice(-2));
    isoString = isoString.replace('SSS', ('00' + this.getMillisecond()).slice(-3));
    return isoString;
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

const detectFormat = function(isoString) {
    const values = isoString.match(pattern).slice(1);
    var format = FORMATS[values.indexOf(undefined) - 1];
    return format || FORMATS[6];
};


const parseIsoString = function(isoString) {
    const values = isoString.match(pattern).slice(1);
    var utcString = '';
    utcString += values[0];
    if (values[1] !== undefined) utcString += '-' + values[1];
    if (values[2] !== undefined) utcString += '-' + values[2];
    utcString += 'T';
    utcString += (values[3] || '00') + ':';
    utcString += (values[4] || '00') + ':';
    utcString += (values[5] || '00') + '.';
    utcString += (values[6] || '000') + 'Z';
    return Date.parse(utcString);
};

