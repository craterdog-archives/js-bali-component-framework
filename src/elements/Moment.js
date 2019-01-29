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


// PUBLIC CONSTRUCTOR

/**
 * This constructor creates a new moment in time using the specified value and parameters.
 * 
 * @param {String|Number} value The source string value of the moment in time.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Moment} The new moment in time.
 */
function Moment(value, parameters) {
    abstractions.Element.call(this, utilities.types.MOMENT, parameters);
    if (value === undefined || value === null) {
        this.format = FORMATS[7];
        this.value = moment();  // the current moment
    } else {
        switch (typeof value) {
            case 'number':
                this.format = FORMATS[7];
                this.value = moment(value);  // in milliseconds since EPOC
                break;
            case 'string':
                FORMATS.find(function(format) {
                    const attempt = moment(value, format, true);  // true means strict mode
                    if (attempt.isValid()) {
                        this.format = format;
                        this.value = attempt;
                        return true;
                    } 
                    return false;
                }, this);
        }
        if (!this.value) throw new Error('BUG: An invalid moment value was passed to the constructor: ' + value);
    }
    this.setSource(this.value.format(this.format));
    return this;
}
Moment.prototype = Object.create(abstractions.Element.prototype);
Moment.prototype.constructor = Moment;
exports.Moment = Moment;


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Parameters} parameters Any parameters that are needed for formatting.
 * @returns {String} The corresponding literal string representation.
 */
Moment.prototype.toLiteral = function(parameters) {
    const value = this.value.format(this.format);
    const literal = '<' + value + '>';  // add the '<' and '>' delimiters
    return literal;
};


/**
 * This method returns whether or not this moment has a meaningful value. A moment always has
 * a meaningful value.
 * 
 * @returns {Boolean} Whether or not this moment has a meaningful value.
 */
Moment.prototype.toBoolean = function() {
    return true;
};


/**
 * This method returns the number of milliseconds for the moment.
 * 
 * @returns {number} The number of milliseconds for the moment.
 */
Moment.prototype.toNumber = function() {
    return this.value.valueOf();
};


// PUBLIC FUNCTIONS

/**
 * This function returns the duration between two moments in time.
 * 
 * @param {Moment} first The first moment in time.
 * @param {Moment} second The second moment in time.
 * @returns {Duration} The duration between the two moments in time.
 */
Moment.duration = function(first, second) {
    const duration = moment.duration(second.value.diff(first.value));
    return new Duration(duration.toISOString());
};


/**
 * This function returns a moment in time that is earlier than the specified moment
 * by the specified duration of time.
 * 
 * @param {Moment} moment The initial moment in time.
 * @param {Duration} duration The duration of time to be subtracted.
 * @returns {Moment} The resulting moment in time.
 */
Moment.earlier = function(moment, duration) {
    const earlier = moment.value.clone().subtract(duration.value);  // must clone first!
    return new Moment(earlier.format(FORMATS[7]));
};


/**
 * This function returns a moment in time that is later than the specified moment
 * by the specified duration of time.
 * 
 * @param {Moment} moment The initial moment in time.
 * @param {Duration} duration The duration of time to be added.
 * @returns {Moment} The resulting moment in time.
 */
Moment.later = function(moment, duration) {
    const later = moment.value.clone().add(duration.value);  // must clone first!
    return new Moment(later.format(FORMATS[7]));
};
