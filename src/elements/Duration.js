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


// PUBLIC CONSTRUCTOR

/**
 * This constructor creates a new duration element using the specified value.
 * 
 * @param {String|Number} value The source string the duration.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Duration} The new duration element.
 */
function Duration(value, parameters) {
    abstractions.Element.call(this, utilities.types.DURATION, parameters);
    value = value || 0;  // the default value
    this.value = moment.duration(value);
    this.setSource(utilities.formatter.formatLiteral(this));
    return this;
}
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
    return this.toNumber() !== 0;
};


/**
 * This method returns the number of milliseconds of the duration.
 * 
 * @returns {number} The number of milliseconds of the duration.
 */
Duration.prototype.toNumber = function() {
    return this.value.asMilliseconds();
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Duration.prototype.acceptVisitor = function(visitor) {
    visitor.visitDuration(this);
};


// PUBLIC FUNCTIONS

/**
 * This function returns the inverse of a duration. If the specified duration is
 * positive, its inverse is negative and vice versa.
 * 
 * @param {Duration} duration The duration to be inverted.
 * @returns {Duration} The inverse of the specified duration.
 */
Duration.inverse = function(duration) {
    return new Duration(moment.duration().subtract(duration.value));
};


/**
 * This function returns the sum of two durations.
 * 
 * @param {Duration} firstDuration The first duration to be summed.
 * @param {Duration} secondDuration The second duration to be summed.
 * @returns {Duration} The normalized sum of the two durations.
 */
Duration.sum = function(firstDuration, secondDuration) {
    return new Duration(firstDuration.value.clone().add(secondDuration.value).toISOString());
};


/**
 * This function returns the difference of two durations.
 * 
 * @param {Duration} firstDuration The duration to be subtracted from.
 * @param {Duration} secondDuration The duration to subtract from the first duration.
 * @returns {Duration} The normalized difference of the two durations.
 */
Duration.difference = function(firstDuration, secondDuration) {
    return new Duration(firstDuration.value.clone().subtract(secondDuration.value).toISOString());
};


/**
 * This function returns the specified duration scaled to the specified factor.
 * 
 * @param {Duration} duration The duration to be scaled.
 * @param {Number} factor The scale factor.
 * @returns {Duration} The normalized scaled duration.
 */
Duration.scaled = function(duration, factor) {
    return new Duration(moment.duration(Math.round(duration.value.asMilliseconds() * factor)).toISOString());
};

