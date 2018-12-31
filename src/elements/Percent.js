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
const precision = require('../utilities/Precision');
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new percent element.
 * 
 * @param {Number|String} value The value of the percent.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Percent} The new percent element.
 */
function Percent(value, parameters) {
    Element.call(this, types.PERCENT, parameters);
    if (value === undefined || value === null) value = 0;  // default value
    var type = value.constructor.name;
    switch (type) {
        case 'Number':
            // nothing to convert
            break;
        case 'String':
            // convert to a number
            value = Number(value.replace(/%/g, ''));  // strip off the %
            break;
        default:
            throw new Error('BUG: An invalid percentage value type was passed into the constructor: ' + type);
    }
    this.value = value;
    var source = value.toString() + '%';  // append the %
    source = source.replace(/e\+?/g, 'E');  // convert to the canonical exponent format
    this.setSource(source);
    return this;
}
Percent.prototype = Object.create(Element.prototype);
Percent.prototype.constructor = Percent;
exports.Percent = Percent;


/**
 * This method returns the numeric value of the percent element, e.g. 25% => 0.25
 * 
 * @returns {number} The numeric value of the percent element.
 */
Percent.prototype.toNumber = function() {
    return precision.quotient(this.value, 100);
};



// PUBLIC FUNCTIONS

/**
 * This function returns the inverse of a percent.
 * 
 * @param {Percent} percent The percent to be inverted.
 * @throws {Error} The percent cannot be negative.
 */
Percent.inverse = function(percent) {
    return new Percent(-percent.value);
};


/**
 * This function returns the sum of two percents.
 * 
 * @param {Percent} firstPercent The first percent to be summed.
 * @param {Percent} secondPercent The second percent to be summed.
 * @returns {Percent} The normalized sum of the two percents.
 */
Percent.sum = function(firstPercent, secondPercent) {
    return new Percent(precision.sum(firstPercent.value, secondPercent.value));
};


/**
 * This function returns the difference of two percents.
 * 
 * @param {Percent} firstPercent The percent to be subtracted from.
 * @param {Percent} secondPercent The percent to subtract from the first percent.
 * @returns {Percent} The normalized difference of the two percents.
 */
Percent.difference = function(firstPercent, secondPercent) {
    return new Percent(precision.difference(firstPercent.value, secondPercent.value));
};


/**
 * This function returns the specified percent scaled to the specified factor.
 * 
 * @param {Percent} percent The percent to be scaled.
 * @param {Number} factor The scale factor.
 * @returns {Percent} The normalized scaled percent.
 */
Percent.scaled = function(percent, factor) {
    return new Percent(precision.product(percent.value, factor));
};

