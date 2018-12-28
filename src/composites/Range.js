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
 * This collection class defines a range of items.
 */
/**
 * This collection class implements a data structure that defines a range of items. The
 * structure is static once the first and last items in the range have been defined.
 */
const types = require('../abstractions/Types');
const Composite = require('../abstractions/Composite').Composite;
/* global NaN, Infinity */


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new range of items with optional parameters that are used
 * to parameterize its type.
 * 
 * @param {Component} firstItem The first item in the range.
 * @param {Component} lastItem The last item in the range.
 * @param {Parameters} parameters Optional parameters used to parameterize this range. 
 * @returns {Range} The new range.
 */
function Range(firstItem, lastItem, parameters) {
    Composite.call(this, types.RANGE, parameters);
    this.firstItem = Composite.asComponent(firstItem);
    this.lastItem = Composite.asComponent(lastItem);
    this.complexity += 2;  // account for the '[' ']' delimiters
    this.complexity += this.firstItem.complexity + this.lastItem.complexity + 2;  // account for the '..' separator
    return this;
}
Range.prototype = Object.create(Composite.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


/**
 * This function creates a new range with the specified first and last item values.
 * The range may be parameterized by specifying optional parameters that are used to
 * parameterize its type.
 * 
 * @param {Component} firstItem The first item in the range.
 * @param {Component} lastItem The last item in the range.
 * @param {Parameters} parameters Optional parameters that parameterize the type of the range.
 * @returns {Range} The new range.
 */
Range.fromEndPoints = function(firstItem, lastItem, parameters) {
    var range = new Range(firstItem, lastItem, parameters);
    return range;
};


/**
 * This function creates a new range from the specified first item to the last item value.
 * The range may be parameterized by specifying optional parameters that are used to
 * parameterize its type.
 * 
 * @param {Component} firstItem The first item in the range.
 * @param {Parameters} parameters Optional parameters that parameterize the type of the range.
 * @returns {Range} The new range.
 */
Range.fromFirstItem = function(firstItem, parameters) {
    var range = new Range(firstItem, 1024, parameters);  // setting a safe upper limit for now.
    return range;
};


/**
 * This function creates a new range from the first item to the specified last item value.
 * The range may be parameterized by specifying optional parameters that are used to
 * parameterize its type.
 * 
 * @param {Component} lastItem The last item in the range.
 * @param {Parameters} parameters Optional parameters that parameterize the type of the range.
 * @returns {Range} The new range.
 */
Range.fromLastItem = function(lastItem, parameters) {
    var range = new Range(1, lastItem, parameters);
    return range;
};


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this range.
 */
Range.prototype.acceptVisitor = function(visitor) {
    visitor.visitRange(this);
};


/**
 * This method returns the number of numbers that are in this range.
 * 
 * @returns {Component} The number of numbers that fall in this range.
 */
Range.prototype.getSize = function() {
    var size = this.lastItem.toNumber() - this.firstItem.toNumber() + 1;
    return size;
};


/**
 * This method returns an object that can be used to iterate over the items in
 * this collection.
 * @returns {Iterator} An iterator for this collection.
 */
Range.prototype.getIterator = function() {
    var iterator = new RangeIterator(this);
    return iterator;
};


/**
 * This method returns an array containing the items in this range.
 * 
 * @returns {Array} An array containing the items in this range.
 */
Range.prototype.toArray = function() {
    var array = [];
    var index = this.firstItem.toNumber();
    var last = this.lastItem.toNumber();
    if (last === Infinity) {
        throw new Error('BUG: Unable to generate an array from an infinite range.');
    }
    while (index <= last) array.push(Composite.asComponent(index++));
    return array;
};


/**
 * This method determines whether or not the specified item is in this range.
 *
 * @param {Component} item The item to check.
 * @returns {Boolean} Whether or not the item is in this range.
 */
Range.prototype.isInRange = function(item) {
    item = Composite.asComponent(item);
    var index = item.toNumber();
    return index >= this.firstItem.toNumber() && index <= this.lastItem.toNumber();
};


// PRIVATE CLASSES

function RangeIterator(range) {
    this.slot = 0;  // the slot before the first number
    this.size = range.getSize();  // static so we can cache it here
    this.range = range;
    return this;
}
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
    if (!this.hasPrevious()) throw new Error('BUG: Unable to retrieve the previous entity from an iterator that is at the beginning of a range.');
    this.slot--;
    var number = this.range.firstItem.toNumber() + this.slot;
    number = Composite.asComponent(number);
    return number;
};


RangeIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('BUG: Unable to retrieve the next entity from an iterator that is at the end of a range.');
    var number = this.range.firstItem.toNumber() + this.slot;
    number = Composite.asComponent(number);
    this.slot++;
    return number;
};
