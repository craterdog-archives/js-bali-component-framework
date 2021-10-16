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
 * This element class captures the state and methods associated with a time
 * duration element.
 */
const moduleName = '/bali/elements/Duration';
const utilities = require('../utilities');
const abstractions = require('../abstractions');

// locked to the earth's daily revolutions
const millisecondsPerSecond = 1000;
const millisecondsPerMinute = millisecondsPerSecond * 60;
const millisecondsPerHour = millisecondsPerMinute * 60;
const millisecondsPerDay = millisecondsPerHour * 24;
const millisecondsPerWeek = millisecondsPerDay * 7;

// locked to the earth's orbit around the sun
const millisecondsPerYear = 31556952000;
const millisecondsPerMonth = millisecondsPerYear / 12;  // average but exact

// tying the two together is where things get messy
const daysPerMonth = millisecondsPerMonth / millisecondsPerDay;    // ~30.436875 days/month
const weeksPerMonth = millisecondsPerMonth / millisecondsPerWeek;  // ~4.348125 weeks/month


// PUBLIC FUNCTIONS

/**
 * This function creates a new duration element using the specified value.
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
 * @param {String|Number} value The ISO 8601 duration string, or the total number of milliseconds in the duration.
 * The default is zero milliseconds.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Duration} The new duration element.
 */
const Duration = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        [ moduleName ],
        [
            '/bali/libraries/Scalable',
            '/bali/interfaces/Polarized'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Duration', '$value', value, [
            '/javascript/Undefined',
            '/javascript/Number',
            '/javascript/String'
        ]);
    }

    // since this element is immutable the value must be read-only
    value = value || 0;  // default value
    if (typeof value === 'string') value = isoToMilliseconds(value);
    const sign = (value < 0) ? -1 : 1;
    value = sign * value;  // remove the sign

    this.getSign = function() {
        return sign;
    };

    this.getMilliseconds = function() {
        var milliseconds = value % millisecondsPerYear;  // milliseconds in partial year
        milliseconds = milliseconds % millisecondsPerMonth;  // milliseconds in partial month
        milliseconds = milliseconds % millisecondsPerDay;  // milliseconds in partial day
        milliseconds = milliseconds % millisecondsPerHour;  // milliseconds in partial hour
        milliseconds = milliseconds % millisecondsPerMinute;  // milliseconds in partial minute
        milliseconds = milliseconds % millisecondsPerSecond;  // milliseconds in partial second
        return milliseconds;
    };

    this.getSeconds = function() {
        var milliseconds = value % millisecondsPerYear;  // milliseconds in partial year
        milliseconds = milliseconds % millisecondsPerMonth;  // milliseconds in partial month
        milliseconds = milliseconds % millisecondsPerDay;  // milliseconds in partial day
        milliseconds = milliseconds % millisecondsPerHour;  // milliseconds in partial hour
        milliseconds = milliseconds % millisecondsPerMinute;  // milliseconds in partial minute
        return Math.floor(milliseconds / millisecondsPerSecond);
    };

    this.getMinutes = function() {
        var milliseconds = value % millisecondsPerYear;  // milliseconds in partial year
        milliseconds = milliseconds % millisecondsPerMonth;  // milliseconds in partial month
        milliseconds = milliseconds % millisecondsPerDay;  // milliseconds in partial day
        milliseconds = milliseconds % millisecondsPerHour;  // milliseconds in partial hour
        return Math.floor(milliseconds / millisecondsPerMinute);
    };

    this.getHours = function() {
        var milliseconds = value % millisecondsPerYear;  // milliseconds in partial year
        milliseconds = milliseconds % millisecondsPerMonth;  // milliseconds in partial month
        milliseconds = milliseconds % millisecondsPerDay;  // milliseconds in partial day
        return Math.floor(milliseconds / millisecondsPerHour);
    };

    this.getDays = function() {
        var milliseconds = value % millisecondsPerYear;  // milliseconds in partial year
        milliseconds = milliseconds % millisecondsPerMonth;  // milliseconds in partial month
        return Math.floor(milliseconds / millisecondsPerDay);
    };

    this.getWeeks = function() {
        return value / millisecondsPerWeek;  // total number of weeks including fraction
    };

    this.getMonths = function() {
        var milliseconds = value % millisecondsPerYear;  // milliseconds in partial year
        return Math.floor(milliseconds / millisecondsPerMonth);
    };

    this.getYears = function() {
        return Math.floor(value / millisecondsPerYear);
    };

    this.getValue = function() { return sign * value; };

    return this;
};
Duration.prototype = Object.create(abstractions.Element.prototype);
Duration.prototype.constructor = Duration;
exports.Duration = Duration;


// PUBLIC METHODS

/**
 * This method returns whether or not this duration has a meaningful value. If the value is zero
 * it returns <code>false</code>, otherwise it returns <code>true</code>.
 *
 * @returns {Boolean} Whether or not this duration has a meaningful value.
 */
Duration.prototype.isSignificant = function() {
    return this.getValue() !== 0;
};


/**
 * This method determines whether or not this duration has a negative value.
 *
 * @returns {Boolean} Whether or not this duration is negative.
 */
Duration.prototype. isNegative = function() {
    return this.getValue() < 0;
};


/**
 * This method returns an ISO 8601 formatted string for this duration.
 *
 * @returns {String} The ISO 8601 formatted string.
 */
Duration.prototype.toISO = function() {
    var isoString = this.isNegative() ? '-' : '';
    const years = this.getYears();
    const months = this.getMonths();
    const days = this.getDays();
    const hours = this.getHours();
    const minutes = this.getMinutes();
    const seconds = this.getSeconds();
    const milliseconds = this.getMilliseconds();
    isoString += 'P';
    if (years) isoString += years + 'Y';
    if (months) isoString += months + 'M';
    if (days) isoString += days + 'D';
    if (hours || minutes || seconds || milliseconds) isoString += 'T';
    if (hours) isoString += hours + 'H';
    if (minutes) isoString += minutes + 'M';
    if (seconds) isoString += seconds;
    if (!seconds && milliseconds) isoString += '0';
    if (milliseconds) isoString += '.' + milliseconds;
    if (seconds || milliseconds) isoString += 'S';
    if (!years && !months && !days && !hours && !minutes && !seconds && !milliseconds) isoString += '0D';
    return isoString;
};


// SCALABLE LIBRARY FUNCTIONS

/**
 * This function returns the inverse of a duration. If the specified duration is
 * positive, its inverse is negative and vice versa.
 *
 * @param {Duration} duration The duration to be inverted.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Duration} The inverse of the specified duration.
 */
Duration.inverse = function(duration, debug) {
    debug = debug || 0;  // default value
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$inverse', '$duration', duration, [
            '/bali/elements/Duration'
        ]);
    }
    return new Duration(-1 * duration.getValue(), duration.getParameters(), debug);
};


/**
 * This function returns the sum of two durations.
 *
 * @param {Duration} first The first duration to be summed.
 * @param {Duration} second The second duration to be summed.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Duration} The normalized sum of the two durations.
 */
Duration.sum = function(first, second, debug) {
    debug = debug || 0;  // default value
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$sum', '$first', first, [
            '/bali/elements/Duration'
        ]);
        abstractions.Component.validateArgument(moduleName, '$sum', '$second', second, [
            '/bali/elements/Duration'
        ]);
    }
    return new Duration(first.getValue() + second.getValue(), first.getParameters(), debug);
};


/**
 * This function returns the difference of two durations.
 *
 * @param {Duration} first The duration to be subtracted from.
 * @param {Duration} second The duration to subtract from the first duration.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Duration} The normalized difference of the two durations.
 */
Duration.difference = function(first, second, debug) {
    debug = debug || 0;  // default value
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$difference', '$first', first, [
            '/bali/elements/Duration'
        ]);
        abstractions.Component.validateArgument(moduleName, '$difference', '$second', second, [
            '/bali/elements/Duration'
        ]);
    }
    return new Duration(first.getValue() - second.getValue(), first.getParameters(), debug);
};


/**
 * This function returns the specified duration scaled to the specified factor.
 *
 * @param {Duration} duration The duration to be scaled.
 * @param {Number} factor The scale factor.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Duration} The normalized scaled duration.
 */
Duration.scaled = function(duration, factor, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$scaled', '$duration', duration, [
            '/bali/elements/Duration'
        ]);
        abstractions.Component.validateArgument(moduleName, '$scaled', '$factor', factor, [
            '/javascript/Number'
        ]);
    }
    return new Duration(duration.getValue() * factor, duration.getParameters(), debug);
};


// PRIVATE FUNCTIONS

const isoToMilliseconds = function(isoString) {
    // use template literals to make things more readable             pseudo expressions
    const span = '\\d+(?:[\\.,]\\d+)?';                        // digit+([.|,]digit+)?
    const week = `(${span}W)`;                                 // weeksW
    const date = `(${span}Y)?(${span}M)?(${span}D)?`;          // (yearsY)?(monthsM)?(daysD)?
    const time = `(T)(${span}H)?(${span}M)?(${span}S)?`;       // T(hoursH)?(minutesM)?(secondsS)?
    const duration = `(-)?P(?:${week}|${date}(?:${time})?)`;   // (-)?P(week | date(time)?)
    const pattern = new RegExp(duration);
    const values = isoString.match(pattern);
    var milliseconds = 0;
    var sign = 1;
    var isTime = false;
    values.slice(1).forEach(function(value) {
        if (value) switch (value.slice(-1)) {
            case '-':
                sign = -1;
                break;
            case 'Y':
                milliseconds += parseFloat(value.slice(0, -1)) * millisecondsPerYear;
                break;
            case 'M':
                if (isTime) {
                    milliseconds += parseFloat(value.slice(0, -1)) * millisecondsPerMinute;
                } else {
                    milliseconds += parseFloat(value.slice(0, -1)) * millisecondsPerMonth;
                }
                break;
            case 'W':
                milliseconds += parseFloat(value.slice(0, -1)) * millisecondsPerWeek;
                break;
            case 'D':
                milliseconds += parseFloat(value.slice(0, -1)) * millisecondsPerDay;
                break;
            case 'T':
                isTime = true;
                break;
            case 'H':
                milliseconds += parseFloat(value.slice(0, -1)) * millisecondsPerHour;
                break;
            case 'S':
                milliseconds += parseFloat(value.slice(0, -1)) * millisecondsPerSecond;
                break;
        }
    });
    return sign * milliseconds;
};

