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
 * This element class captures the state and methods associated with a
 * percent element.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTOR

/**
 * This constructor creates a new percent element using the specified value.
 * 
 * @param {Number} value The value of the percent.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Percent} The new percent element.
 */
function Percent(value, parameters) {
    abstractions.Element.call(this, utilities.types.PERCENT, parameters);
    value = value || 0;  // default value

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
}
Percent.prototype = Object.create(abstractions.Element.prototype);
Percent.prototype.constructor = Percent;
exports.Percent = Percent;


// PUBLIC METHODS

/**
 * This method returns whether or not this percent has a meaningful value. If the value is zero
 * it returns <code>false</code>, otherwise it returns <code>true</code>.
 * 
 * @returns {Boolean} Whether or not this percent has a meaningful value.
 */
Percent.prototype.toBoolean = function() {
    return this.getValue() !== 0;
};


/**
 * This method returns the numeric value of the percent element, e.g. 25% => 0.25
 * 
 * @returns {number} The numeric value of the percent element.
 */
Percent.prototype.toNumber = function() {
    return utilities.precision.quotient(this.getValue(), 100);
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Percent.prototype.acceptVisitor = function(visitor) {
    visitor.visitPercent(this);
};


// PUBLIC FUNCTIONS

/**
 * This function returns the inverse of a percent.
 * 
 * @param {Percent} percent The percent to be inverted.
 * @throws {Error} The percent cannot be negative.
 */
Percent.inverse = function(percent) {
    return new Percent(-percent.getValue());
};


/**
 * This function returns the sum of two percents.
 * 
 * @param {Percent} firstPercent The first percent to be summed.
 * @param {Percent} secondPercent The second percent to be summed.
 * @returns {Percent} The normalized sum of the two percents.
 */
Percent.sum = function(firstPercent, secondPercent) {
    return new Percent(utilities.precision.sum(firstPercent.getValue(), secondPercent.getValue()));
};


/**
 * This function returns the difference of two percents.
 * 
 * @param {Percent} firstPercent The percent to be subtracted from.
 * @param {Percent} secondPercent The percent to subtract from the first percent.
 * @returns {Percent} The normalized difference of the two percents.
 */
Percent.difference = function(firstPercent, secondPercent) {
    return new Percent(utilities.precision.difference(firstPercent.getValue(), secondPercent.getValue()));
};


/**
 * This function returns the specified percent scaled to the specified factor.
 * 
 * @param {Percent} percent The percent to be scaled.
 * @param {Number} factor The scale factor.
 * @returns {Percent} The normalized scaled percent.
 */
Percent.scaled = function(percent, factor) {
    return new Percent(utilities.precision.product(percent.getValue(), factor));
};

