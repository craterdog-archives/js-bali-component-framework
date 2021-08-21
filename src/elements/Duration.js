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
const moment = require('moment');
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new duration element using the specified value.
 *
 * @param {String|Number} value The source string the duration.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Duration} The new duration element.
 */
const Duration = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        ['/bali/elements/Duration'],
        [
            '/bali/libraries/Scalable'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Duration', '$Duration', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Number'
        ]);
    }
    value = value || 0;  // default value
    const time = moment.duration(value);
    value = time.asMilliseconds();  // set canonical value

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };
    this.getTime = function() { return time; };
    this.getMilliseconds = function() { return time.milliseconds(); };
    this.getSeconds = function() { return time.seconds(); };
    this.getMinutes = function() { return time.minutes(); };
    this.getHours = function() { return time.hours(); };
    this.getDays = function() { return time.days(); };
    this.getWeeks = function() { return time.weeks(); };
    this.getMonths = function() { return time.months(); };
    this.getYears = function() { return time.years(); };

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


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Duration.prototype.acceptVisitor = function(visitor) {
    visitor.visitDuration(this);
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
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Duration', '$inverse', '$duration', duration, [
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
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Duration', '$sum', '$first', first, [
            '/bali/elements/Duration'
        ]);
        validator.validateType('/bali/elements/Duration', '$sum', '$second', second, [
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
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Duration', '$difference', '$first', first, [
            '/bali/elements/Duration'
        ]);
        validator.validateType('/bali/elements/Duration', '$difference', '$second', second, [
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
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Duration', '$scaled', '$duration', duration, [
            '/bali/elements/Duration'
        ]);
        validator.validateType('/bali/elements/Duration', '$scaled', '$factor', factor, [
            '/javascript/Number'
        ]);
    }
    return new Duration(moment.duration(Math.round(duration.getValue() * factor)).toISOString(), duration.getParameters(), debug);
};
