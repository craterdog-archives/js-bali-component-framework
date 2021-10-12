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
// TODO: Migrate away from obsolete moment library to native platform support:
//       https://dockyard.com/blog/2020/02/14/you-probably-don-t-need-moment-js-anymore
const moment = require('moment');
const utilities = require('../utilities');
const abstractions = require('../abstractions');


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
 * @param {String|Number} value The source string the duration.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Duration} The new duration element.
 */
const Duration = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        [ moduleName ],
        [
            '/bali/libraries/Scalable'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Duration', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Number'
        ]);
    }
    // TODO: Need to handle negative duration values!
    value = value || 0;  // default value
    const time = moment.duration(value);
    value = time.asMilliseconds();  // set canonical value

    // since this element is immutable the value must be read-only
    this.getTime = function() { return time; };
    this.getMilliseconds = function() { return time.milliseconds(); };
    this.getSeconds = function() { return time.seconds(); };
    this.getMinutes = function() { return time.minutes(); };
    this.getHours = function() { return time.hours(); };
    this.getDays = function() { return time.days(); };
    this.getWeeks = function() { return time.weeks(); };
    this.getMonths = function() { return time.months(); };
    this.getYears = function() { return time.years(); };

    this.getValue = function() { return value; };

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
Duration.prototype.toBoolean = function() {
    return this.getValue() !== 0;
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
    return new Duration(moment.duration().subtract(duration.getTime()).toISOString(), duration.getParameters(), debug);
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
    return new Duration(first.getTime().clone().add(second.getTime()).toISOString(), first.getParameters(), debug);
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
    return new Duration(first.getTime().clone().subtract(second.getTime()).toISOString(), first.getParameters(), debug);
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
    return new Duration(moment.duration(Math.round(duration.getValue() * factor)).toISOString(), duration.getParameters(), debug);
};

