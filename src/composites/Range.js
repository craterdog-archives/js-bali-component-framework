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
const elements = require('../elements');


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
    var firstIndex;
    var lastIndex;
    var collection;
    if (parameters) {
        collection = parameters.getValue('$collection');
        if (collection) {
            // determine the indices of the items in the collection
            firstIndex = collection.getIndex(first);
            lastIndex = collection.getIndex(last);
        }
    } else {
        // the first and last items are indices into the integers
        firstIndex = (typeof first === 'number') ? first : first.toNumber();
        lastIndex = (typeof last === 'number') ? last : last.toNumber();
    }
    this.getFirstIndex = function() { return firstIndex; };
    this.getLastIndex = function() { return lastIndex; };
    this.getCollection = function() { return collection; };
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
    if (this.getLastIndex() === Infinity) {
        throw new Error('BUG: Unable to generate an array from an infinite range.');
    }
    const array = [];
    var index = this.getFirstIndex();
    while (index <= this.getLastIndex()) {
        if (this.getCollection()) {
            array.push(this.getCollection().getItem(index++));  // retrieve the next item
        } else {
            array.push(new elements.Number(index++));  // the index is the next item
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
    const size = this.getLastIndex() - this.getFirstIndex() + 1;
    return size;
};


/**
 * This method returns the first item in this range.
 * 
 * @returns {Component} The first item in this range.
 */
Range.prototype.getFirst = function() {
    var item;
    if (this.getCollection()) {
        item = this.getCollection().getItem(this.getFirstIndex());  // retrieve the item
    } else {
        item = new elements.Number(this.getFirstIndex());  // the index is the item
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
    if (this.getCollection()) {
        item = this.getCollection().getItem(this.getFirstIndex() + index - 1);
    } else {
        item = new elements.Number(this.getFirstIndex() + index - 1);
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
    if (this.getCollection()) {
        item = this.getCollection().getItem(this.getLastIndex());  // retrieve the item
    } else {
        item = new elements.Number(this.getLastIndex());  // the index is the item
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
    if (this.getCollection()) {
        index = this.getCollection().getIndex(item);
    } else {
        if (typeof item !== 'number') {
            throw new Error('BUG: The item must be a number: ' + item);
        }
        index = item;
    }
    return index >= this.getFirstIndex() && index <= this.getLastIndex();
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
    const index = this.range.getFirstIndex() + this.slot;
    var item;
    if (this.range.getCollection()) {
        item = this.range.getCollection().getItem(index);  // retrieve the item
    } else {
        item = new elements.Number(index);  // the index is the item
    }
    return item;
};


RangeIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('BUG: Unable to retrieve the next entity from an iterator that is at the end of a range.');
    const index = this.range.getFirstIndex() + this.slot;
    var item;
    if (this.range.getCollection()) {
        item = this.range.getCollection().getItem(index);  // retrieve the item
    } else {
        item = new elements.Number(index);  // the index is the item
    }
    this.slot++;
    return item;
};
