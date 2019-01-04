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
const duration = require('moment').duration;
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new duration element.
 * 
 * @param {String} value The value of the duration.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Duration} The new duration element.
 */
function Duration(value, parameters) {
    Element.call(this, types.DURATION, parameters);
    if (value === undefined || value === null) value = '~P0D';  // default value
    this.value = duration(value.slice(1));  // remove leading '~'
    this.setSource('~' + this.value.toISOString());  // make it canonical
    return this;
}
Duration.prototype = Object.create(Element.prototype);
Duration.prototype.constructor = Duration;
exports.Duration = Duration;


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @returns {String} The corresponding literal string representation.
 */
Duration.prototype.toLiteral = function() {
    const string = '~' + this.value.toISOString();
    return string;
};


/**
 * This method returns the number of milliseconds of the duration.
 * 
 * @returns {number} The number of milliseconds of the duration.
 */
Duration.prototype.toNumber = function() {
    return this.value.asMilliseconds();
};


// PUBLIC FUNCTIONS

/**
 * This function throws an exception since a duration cannot be negative.
 * 
 * @param {Duration} duration The duration to be inverted.
 * @throws {Error} The duration cannot be negative.
 */
Duration.inverse = function(duration) {
    throw new Error('BUG: Durations cannot be negative.');
};


/**
 * This function returns the sum of two durations.
 * 
 * @param {Duration} firstDuration The first duration to be summed.
 * @param {Duration} secondDuration The second duration to be summed.
 * @returns {Duration} The normalized sum of the two durations.
 */
Duration.sum = function(firstDuration, secondDuration) {
    return new Duration('~' + firstDuration.value.add(secondDuration.value).toISOString());
};


/**
 * This function returns the difference of two durations.
 * 
 * @param {Duration} firstDuration The duration to be subtracted from.
 * @param {Duration} secondDuration The duration to subtract from the first duration.
 * @returns {Duration} The normalized difference of the two durations.
 */
Duration.difference = function(firstDuration, secondDuration) {
    return new Duration('~' + firstDuration.value.subtract(secondDuration.value).toISOString());
};


/**
 * This function returns the specified duration scaled to the specified factor.
 * 
 * @param {Duration} baseDuration The duration to be scaled.
 * @param {Number} factor The scale factor.
 * @returns {Duration} The normalized scaled duration.
 */
Duration.scaled = function(baseDuration, factor) {
    return new Duration('~' + duration(Math.round(baseDuration.value.asMilliseconds() * factor)).toISOString());
};

