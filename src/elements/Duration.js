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
 * @param {String} value The ISO compliant value of the duration.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Duration} The new duration element.
 */
function Duration(value, parameters) {
    Element.call(this, types.DURATION, parameters);
    if (value === undefined || value === null) value = 'P0D';  // default value
    this.value = duration(value);
    this.setSource(this.toLiteral());
    return this;
}
Duration.prototype = Object.create(Element.prototype);
Duration.prototype.constructor = Duration;
exports.Duration = Duration;


/**
 * This constructor creates an immutable instance of a time duration using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the time duration.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Duration} The new time duration.
 */
Duration.from = function(literal, parameters) {
    const value = literal.slice(1);  // remove the leading '~'
    const duration = new Duration(value, parameters);
    return duration;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Boolean} asCanonical Whether or not the element should be formatted using its
 * default format.
 * @returns {String} The corresponding literal string representation.
 */
Duration.prototype.toLiteral = function(asCanonical) {
    const value = this.value.toISOString();
    const literal = '~' + value;  // add the leading '~'
    return literal;
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
    return new Duration(firstDuration.value.add(secondDuration.value).toISOString());
};


/**
 * This function returns the difference of two durations.
 * 
 * @param {Duration} firstDuration The duration to be subtracted from.
 * @param {Duration} secondDuration The duration to subtract from the first duration.
 * @returns {Duration} The normalized difference of the two durations.
 */
Duration.difference = function(firstDuration, secondDuration) {
    return new Duration(firstDuration.value.subtract(secondDuration.value).toISOString());
};


/**
 * This function returns the specified duration scaled to the specified factor.
 * 
 * @param {Duration} baseDuration The duration to be scaled.
 * @param {Number} factor The scale factor.
 * @returns {Duration} The normalized scaled duration.
 */
Duration.scaled = function(baseDuration, factor) {
    return new Duration(duration(Math.round(baseDuration.value.asMilliseconds() * factor)).toISOString());
};

