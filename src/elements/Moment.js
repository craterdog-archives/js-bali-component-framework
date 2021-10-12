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
const moment = require('moment');
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
    'Y-MM-DDTHH:mm:60',  // HACK:JavaScript doesn't handle leap seconds
    'Y-MM-DDTHH:mm:ss.SSS',
    'Y-MM-DDTHH:mm:60.SSS'  // HACK:JavaScript doesn't handle leap seconds
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
    value = value || undefined;
    var timestamp, format;
    if (!value) {
        format = FORMATS[7];
        timestamp = moment.utc();  // the current moment
    } else {
        switch (typeof value) {
            case 'number':
                format = FORMATS[7];
                timestamp = moment.utc(value);  // in milliseconds since EPOC
                break;
            case 'string':
                FORMATS.find(function(candidate) {
                    timestamp = moment.utc(value, candidate, true);  // true means strict mode
                    if (timestamp.isValid()) {
                        format = candidate;
                        return true;
                    }
                    return false;
                });
        }
    }
    value = timestamp.valueOf();  // set canonical value

    // since this element is immutable the attributes must be read-only
    this.getValue = function() { return value; };
    this.getFormat = function() { return format; };
    this.getTimestamp = function() { return timestamp; };
    this.getMillisecond = function() { return timestamp.millisecond(); };
    this.getSecond = function() { return timestamp.second(); };
    this.getMinute = function() { return timestamp.minute(); };
    this.getHour = function() { return timestamp.hour(); };
    this.getDay = function() { return timestamp.date(); };
    this.getMonth = function() { return timestamp.month() + 1; };
    this.getYear = function() { return timestamp.year(); };

    return this;
};
Moment.prototype = Object.create(abstractions.Element.prototype);
Moment.prototype.constructor = Moment;
exports.Moment = Moment;


// PUBLIC METHODS

/**
 * This method returns whether or not this moment has a meaningful value. A moment always has
 * a meaningful value.
 *
 * @returns {Boolean} Whether or not this moment has a meaningful value.
 */
Moment.prototype.isSignificant = function() {
    return this.getValue() !== 0;
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
    const duration = moment.duration(second.getTimestamp().diff(first.getTimestamp()));
    return new Duration(duration.toISOString(), undefined, debug);
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
    const earlier = moment.getTimestamp().clone().subtract(duration.getTime());  // must clone first!
    return new Moment(earlier.format(FORMATS[7]), moment.getParameters(), debug);
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
    const later = moment.getTimestamp().clone().add(duration.getTime());  // must clone first!
    return new Moment(later.format(FORMATS[7]), moment.getParameters(), debug);
};
