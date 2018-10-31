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
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var Collection = require('../abstractions/Collection').Collection;
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
    Collection.call(this, types.RANGE, parameters);
    this.firstItem = Composite.asComponent(firstItem);
    this.lastItem = Composite.asComponent(lastItem);
    this.complexity += 2;  // account for the '[' ']' delimiters
    this.complexity += this.firstItem.complexity + this.lastItem.complexity + 2;  // account for the '..' separator
    return this;
}
Range.prototype = Object.create(Collection.prototype);
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
 * This method returns an object that can be used to iterate over the items in
 * this collection.
 * @returns {Iterator} An iterator for this collection.
 */
Range.prototype.iterator = function() {
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
        throw new Error('RANGE: Unable to generate an array from an infinite range.');
    }
    while (index <= last) array.push(Composite.asComponent(index++));
    return array;
};


/**
 * This method creates an copy of this range including any parameters that were
 * used to parameterize its type.
 * 
 * @returns {Range} The resulting range.
 */
Range.prototype.emptyCopy = function() {
    var copy = new Range(this.firstItem, this.lastItem, this.parameters);
    return copy;
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
 * This method retrieves the item that is associated with the specified index
 * within this range.
 *
 * @param {Component} index The index of the desired item.
 * @returns {Component} The item at that index within the range.
 */
Range.prototype.getItem = function(index) {
    index = this.normalizedIndex(index);
    var item = Composite.asComponent(this.firstItem.toNumber() + index);
    return item;
};


/**
 * This method returns a new range of items starting with the item at the
 * first index and including the item at the last index.
 * <pre>
 *  this: ['d'..'k']
 *      ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
 *  this.getItems(2..4):
 *           ['e', 'f', 'g']
 * </pre>
 * 
 * If either index references an item that is outside the bounds of this range,
 * the index is reset to one of the current bounds of this range.
 * <pre>
 *  this: ['d'..'k']
 *      ['d', 'e', 'f', 'g', 'h', 'i', 'j', 'k']
 *  this.getItems(2..13):  =>  this.getItems(2..8)
 *           ['e', 'f', 'g', 'h', 'i', 'j', 'k']
 * </pre>
 * 
 * @param {type} firstIndex The index of the first item to be included.
 * @param {type} lastIndex The index of the last item to be included.
 * @returns {OrderedCollection} The new range containing the requested items.
 */
Range.prototype.getItems = function(firstIndex, lastIndex) {
    var firstNumber = this.firstItem.toNumber();
    var lastNumber = this.lastItem.toNumber();
    firstIndex = this.normalizedIndex(firstIndex);
    firstIndex += firstNumber - 1;
    if (firstIndex > lastNumber) firstIndex = lastNumber;
    lastIndex = this.normalizedIndex(lastIndex);
    lastIndex += firstNumber - 1;
    if (lastIndex > lastNumber) lastIndex = lastNumber;
    var range = Range.fromEndPoints(firstIndex, lastIndex);
    return range;
};


/**
 * This method determines whether or not the specified item is in this range.
 *
 * @param {Component} item The item to check.
 * @returns {Boolean} Whether or not the item is in this range.
 */
Range.prototype.inRange = function(item) {
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
    if (!this.hasPrevious()) throw new Error('ITERATOR: The iterator is at the beginning of the range.');
    this.slot--;
    var number = this.range.firstItem.toNumber() + this.slot;
    number = Composite.asComponent(number);
    return number;
};


RangeIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('ITERATOR: The iterator is at the end of the range.');
    var number = this.range.firstItem.toNumber() + this.slot;
    number = Composite.asComponent(number);
    this.slot++;
    return number;
};
