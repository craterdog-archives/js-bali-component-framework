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

/**
 * This collection class defines a range of numbers.
 */
/**
 * This collection class implements a data structure that defines a range of numbers. The
 * structure is static once the first and last numbers in the range have been defined.
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var Collection = require('../abstractions/Collection').Collection;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new range of numbers with optional parameters that are used
 * to parameterize its type.
 * 
 * @param {Number} first The first number in the range.
 * @param {Number} last The last number in the range.
 * @param {Parameters} parameters Optional parameters used to parameterize this range. 
 * @returns {Range} The new range.
 */
function Range(first, last, parameters) {
    Collection.call(this, types.RANGE, parameters);
    this.first = Composite.asComponent(first);
    this.last = Composite.asComponent(last);
    this.complexity += 2;  // account for the '[' ']' delimiters
    this.complexity += this.first.complexity + this.last.complexity + 2;  // account for the '..' separator
    return this;
}
Range.prototype = Object.create(Collection.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


/**
 * This function creates a new range with the specified first and last integer values.
 * The range may be parameterized by specifying optional parameters that are used to
 * parameterize its type.
 * 
 * @param {Number} first The first integer in the range.
 * @param {Number} last The last integer in the range.
 * @param {Parameters} parameters Optional parameters that parameterize the type of the range.
 * @returns {Range} The new range.
 */
Range.fromEndPoints = function(first, last, parameters) {
    var range = new Range(first, last, parameters);
    return range;
};


/**
 * This function creates a new range from 1 to the specified last integer value.
 * The range may be parameterized by specifying optional parameters that are used to
 * parameterize its type.
 * 
 * @param {Number} last The last integer in the range.
 * @param {Parameters} parameters Optional parameters that parameterize the type of the range.
 * @returns {Range} The new range.
 */
Range.fromLastPoint = function(last, parameters) {
    var range = new Range(1, last, parameters);
    return range;
};


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this range.
 */
Range.prototype.accept = function(visitor) {
    visitor.visitRange(this);
};


/**
 * This method returns the number of numbers that are in this range.
 * 
 * @returns {Number} The number of numbers that fall in this range.
 */
Range.prototype.getSize = function() {
    var size = this.last.toNumber() - this.first.toNumber() + 1;
    return size;
};


/**
 * This method returns an array containing the integers in this range.
 * 
 * @returns {Array} An array containing the integers in this range.
 */
Range.prototype.toArray = function() {
    var array = [];
    var index = this.first.toNumber();
    var last = this.last.toNumber();
    while (index <= last) array.push(index++);
    return array;
};


/**
 * This method creates an iterator that can be used to iterate over this range.
 * 
 * @returns {Iterator} An iterator that can be used to iterator over this range.
 */
Range.prototype.iterator = function() {
    var iterator = new RangeIterator(this);
    return iterator;
};


// PRIVATE CLASSES

/*
 * A range does not have a backing array to iterate over. This iterator class simulates
 * the same behavior by generating values on the fly as the range is tranversed.
 */

function RangeIterator(range) {
    Composite.call(this, types.ITERATOR);
    this.slot = 0;  // the slot before the first number
    this.size = range.getSize();  // static so we can cache it here
    this.range = range;
    return this;
}
RangeIterator.prototype = Object.create(Composite.prototype);
RangeIterator.prototype.constructor = RangeIterator;


RangeIterator.prototype.toStart = function() {
    this.slot = 0;  // the slot before the first number
};


RangeIterator.prototype.toSlot = function(slot) {
    this.slot = slot;
};


RangeIterator.prototype.toEnd = function() {
    this.slot = this.size;  // the slot after the last number
};


RangeIterator.prototype.hasPrevious = function() {
    return this.slot > 0;
};


RangeIterator.prototype.hasNext = function() {
    return this.slot < this.size;
};


RangeIterator.prototype.getPrevious = function() {
    if (!this.hasPrevious()) throw new Error('ITERATOR: The iterator is at the beginning of the range.');
    this.slot--;
    var number = this.range.first.toNumber() + this.slot;
    return number;
};


RangeIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('ITERATOR: The iterator is at the end of the range.');
    var number = this.range.first.toNumber() + this.slot;
    this.slot++;
    return number;
};
