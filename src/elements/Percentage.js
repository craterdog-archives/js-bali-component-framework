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
 * percentage element.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new percentage element using the specified value.
 *
 * @param {Number} value The value of the percentage.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Percentage} The new percentage element.
 */
const Percentage = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        ['/bali/elements/Percentage'],
        [
            '/bali/libraries/Scalable',
            '/bali/interfaces/Continuous'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Percentage', '$Percentage', '$value', value, [
            '/javascript/Undefined',
            '/javascript/Number'
        ]);
    }
    value = value || 0;  // default value
    this.calculator = new utilities.Calculator(this.debug);

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
};
Percentage.prototype = Object.create(abstractions.Element.prototype);
Percentage.prototype.constructor = Percentage;
exports.Percentage = Percentage;


// PUBLIC METHODS

/**
 * This method returns whether or not this percentage has a meaningful value. If the value is zero
 * it returns <code>false</code>, otherwise it returns <code>true</code>.
 *
 * @returns {Boolean} Whether or not this percentage has a meaningful value.
 */
Percentage.prototype.toBoolean = function() {
    return this.getValue() !== 0;
};


/**
 * This method returns the real number value of the percentage element, e.g. 25% => 0.25
 *
 * @returns {number} The real number value of the percentage element.
 */
Percentage.prototype.toReal = function() {
    return this.calculator.quotient(this.getValue(), 100);
};


// SCALABLE LIBRARY FUNCTIONS

/**
 * This function returns the inverse of a percentage.
 *
 * @param {Percentage} percentage The percentage to be inverted.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Percentage} The inverse of the percentage.
 */
Percentage.inverse = function(percentage, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Percentage', '$inverse', '$percentage', percentage, [
            '/bali/elements/Percentage'
        ]);
    }
    return new Percentage(-percentage.getValue(), percentage.getParameters(), debug);
};


/**
 * This function returns the sum of two percentages.
 *
 * @param {Percentage} first The first percentage to be summed.
 * @param {Percentage} second The second percentage to be summed.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Percentage} The normalized sum of the two percentages.
 */
Percentage.sum = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Percentage', '$sum', '$first', first, [
            '/bali/elements/Percentage'
        ]);
        validator.validateType('/bali/elements/Percentage', '$sum', '$second', second, [
            '/bali/elements/Percentage'
        ]);
    }
    const calculator = new utilities.Calculator(this.debug);
    return new Percentage(calculator.sum(first.getValue(), second.getValue()), first.getParameters(), debug);
};


/**
 * This function returns the difference of two percentages.
 *
 * @param {Percentage} first The percentage to be subtracted from.
 * @param {Percentage} second The percentage to subtract from the first percentage.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Percentage} The normalized difference of the two percentages.
 */
Percentage.difference = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Percentage', '$difference', '$first', first, [
            '/bali/elements/Percentage'
        ]);
        validator.validateType('/bali/elements/Percentage', '$difference', '$second', second, [
            '/bali/elements/Percentage'
        ]);
    }
    const calculator = new utilities.Calculator(this.debug);
    return new Percentage(calculator.difference(first.getValue(), second.getValue()), first.getParameters(), debug);
};


/**
 * This function returns the specified percentage scaled to the specified factor.
 *
 * @param {Percentage} percentage The percentage to be scaled.
 * @param {Number} factor The scale factor.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Percentage} The normalized scaled percentage.
 */
Percentage.scaled = function(percentage, factor, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Percentage', '$scaled', '$percentage', percentage, [
            '/bali/elements/Percentage'
        ]);
        validator.validateType('/bali/elements/Percentage', '$scaled', '$factor', factor, [
            '/javascript/Number'
        ]);
    }
    const calculator = new utilities.Calculator(this.debug);
    return new Percentage(calculator.product(percentage.getValue(), factor), percentage.getParameters(), debug);
};
