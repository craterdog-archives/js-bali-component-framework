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


// PUBLIC FUNCTIONS

/**
 * This function creates a new percent element using the specified value.
 *
 * @param {Number} value The value of the percent.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Percent} The new percent element.
 */
const Percent = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        ['/bali/elements/Percent'],
        [
            '/bali/interfaces/Scalable',
            '/bali/interfaces/Numerical'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Percent', '$Percent', '$value', value, [
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
    return this.calculator.quotient(this.getValue(), 100);
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
 * @param {Number} debug A number in the range [0..3].
 * @returns {Percent} The inverse of the percent.
 */
Percent.inverse = function(percent, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Percent', '$inverse', '$percent', percent, [
            '/bali/elements/Percent'
        ]);
    }
    return new Percent(-percent.getValue(), percent.getParameters(), debug);
};


/**
 * This function returns the sum of two percents.
 *
 * @param {Percent} first The first percent to be summed.
 * @param {Percent} second The second percent to be summed.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Percent} The normalized sum of the two percents.
 */
Percent.sum = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Percent', '$sum', '$first', first, [
            '/bali/elements/Percent'
        ]);
        validator.validateType('/bali/elements/Percent', '$sum', '$second', second, [
            '/bali/elements/Percent'
        ]);
    }
    const calculator = new utilities.Calculator(this.debug);
    return new Percent(calculator.sum(first.getValue(), second.getValue()), first.getParameters(), debug);
};


/**
 * This function returns the difference of two percents.
 *
 * @param {Percent} first The percent to be subtracted from.
 * @param {Percent} second The percent to subtract from the first percent.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Percent} The normalized difference of the two percents.
 */
Percent.difference = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Percent', '$difference', '$first', first, [
            '/bali/elements/Percent'
        ]);
        validator.validateType('/bali/elements/Percent', '$difference', '$second', second, [
            '/bali/elements/Percent'
        ]);
    }
    const calculator = new utilities.Calculator(this.debug);
    return new Percent(calculator.difference(first.getValue(), second.getValue()), first.getParameters(), debug);
};


/**
 * This function returns the specified percent scaled to the specified factor.
 *
 * @param {Percent} percent The percent to be scaled.
 * @param {Number} factor The scale factor.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Percent} The normalized scaled percent.
 */
Percent.scaled = function(percent, factor, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Percent', '$scaled', '$percent', percent, [
            '/bali/elements/Percent'
        ]);
        validator.validateType('/bali/elements/Percent', '$scaled', '$factor', factor, [
            '/javascript/Number'
        ]);
    }
    const calculator = new utilities.Calculator(this.debug);
    return new Percent(calculator.product(percent.getValue(), factor), percent.getParameters(), debug);
};
