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
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


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
            value *= 100.0;  // convert to percent
            break;
        case 'String':
            value = Number(value.replace(/%/g, ''));  // strip off the %
            break;
        default:
            throw new Error('PERCENT: An invalid value type was passed into the constructor: ' + type);
    }
    this.value = value / 100.0;  // convert to numeric value
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
Percent.prototype.toNumber = function () {
    return this.value;
};
