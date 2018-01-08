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
 * range element.
 */


/**
 * This constructor creates a new range element.
 * 
 * @param {number|string|object} firstValue The first value in the range.
 * @param {number|string|object} lastValue The last value in the range.
 * @returns {Range} The new range element.
 */
function Range(firstValue, lastValue) {
    if (typeof lastValue === 'undefined' || lastValue === null) {
        throw new Error('RANGE: The range constructor requires two values.');
    }
    this.firstValue = firstValue;
    this.lastValue = lastValue;
    return this;
}
Range.prototype.constructor = Range;
exports.Range = Range;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {ObjectVisitor} visitor The visitor that wants to visit this element.
 */
Range.prototype.accept = function(visitor) {
    visitor.visitRange(this);
};


/**
 * This method returns a string representation of the range element.
 * 
 * @returns {string} The string representation of the range element.
 */
Range.prototype.toString = function() {
    throw new Error('RANGE: The toString() method is only defined for elemental types.');
};
