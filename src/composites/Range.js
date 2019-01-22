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
/* global NaN, Infinity */

/**
 * This collection class defines a range of items.
 */
/**
 * This collection class implements a data structure that defines a range of items. The
 * structure is static once the first and last items in the range have been defined.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const converter = require('../utilities/Converter');


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new range of items with optional parameters that are used
 * to parameterize its type.
 * 
 * @param {Number|Component} first The first item in the range.
 * @param {Number|Component} last The last item in the range.
 * @param {Parameters} parameters Optional parameters used to parameterize this range. 
 * @returns {Range} The new range.
 */
function Range(first, last, parameters) {
    abstractions.Composite.call(this, utilities.types.RANGE, parameters);
    if (parameters) {
        this.collection = parameters.getValue('$collection');
        this.first = this.collection.getIndex(first);
        this.last = this.collection.getIndex(last);
    } else {
        if (first.type === utilities.types.NUMBER) first = first.toNumber();
        if (last.type === utilities.types.NUMBER) last = last.toNumber();
        this.first = first;
        this.last = last;
    }
    this.complexity += 4;  // account for the '[' '..' ']' delimiters
    this.complexity += first.toString().length;
    this.complexity += last.toString().length;
    return this;
}
Range.prototype = Object.create(abstractions.Composite.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


// PUBLIC METHODS

/**
 * This method returns an array containing the items in this range.
 * 
 * @returns {Array} An array containing the items in this range.
 */
Range.prototype.toArray = function() {
    if (this.last === Infinity) {
        throw new Error('BUG: Unable to generate an array from an infinite range.');
    }
    const array = [];
    var index = this.first;
    while (index <= this.last) {
        if (this.collection) {
            array.push(this.collection.getItem(index++));  // retrieve the next item
        } else {
            array.push(converter.asElement(index++));  // the index is the next item
        }
    }
    return array;
};


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
    const size = this.last - this.first + 1;
    return size;
};


/**
 * This method returns the first item in this range.
 * 
 * @returns {Component} The first item in this range.
 */
Range.prototype.getFirst = function() {
    var item;
    if (this.collection) {
        item = this.collection.getItem(this.first);  // retrieve the item
    } else {
        item = converter.asElement(this.first);  // the index is the item
    }
    return item;
};


/**
 * This method returns the specified item in this range.
 * 
 * @param {Number} index The index of the desired item. 
 * @returns {Component} The specified item in this range.
 */
Range.prototype.getItem = function(index) {
    var item;
    if (this.collection) {
        item = this.collection.getItem(this.first + index - 1);
    } else {
        item = converter.asElement(this.first + index - 1);
    }
    return item;
};


/**
 * This method returns the last item in this range.
 * 
 * @returns {Component} The last item in this range.
 */
Range.prototype.getLast = function() {
    var item;
    if (this.collection) {
        item = this.collection.getItem(this.last);  // retrieve the item
    } else {
        item = converter.asElement(this.last);  // the index is the item
    }
    return item;
};


/**
 * This method returns an object that can be used to iterate over the items in
 * this collection.
 * @returns {Iterator} An iterator for this collection.
 */
Range.prototype.getIterator = function() {
    const iterator = new RangeIterator(this);
    return iterator;
};


/**
 * This method determines whether or not the specified item is in this range.
 *
 * @param {Component} item The item to check.
 * @returns {Boolean} Whether or not the item is in this range.
 */
Range.prototype.isInRange = function(item) {
    var index;
    if (this.collection) {
        index = this.collection.getIndex(item);
    } else {
        if (typeof item !== 'number') {
            throw new Error('BUG: The item must be a number: ' + item);
        }
        index = item;
    }
    return index >= this.first && index <= this.last;
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
    const index = this.range.first + this.slot;
    var item;
    if (this.range.collection) {
        item = this.range.collection.getItem(index);  // retrieve the item
    } else {
        item = converter.asElement(index);  // the index is the item
    }
    return item;
};


RangeIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('BUG: Unable to retrieve the next entity from an iterator that is at the end of a range.');
    const index = this.range.first + this.slot;
    var item;
    if (this.range.collection) {
        item = this.range.collection.getItem(index);  // retrieve the item
    } else {
        item = converter.asElement(index);  // the index is the item
    }
    this.slot++;
    return item;
};
