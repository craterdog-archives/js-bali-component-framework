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

    // the range is immutable so the collection is private and the indices must be read-only
    var firstIndex;
    var lastIndex;
    var collection;
    if (parameters) {
        // parameters are immutable so we don't need to copy the collection
        collection = parameters.getParameter('$collection');
        if (collection) {
            // determine the indices of the items in the collection
            firstIndex = collection.getIndex(first);
            lastIndex = collection.getIndex(last);
        }
    } else {
        // the first and last items are indices into the integers
        firstIndex = (first.getTypeId && first.getTypeId() === utilities.types.NUMBER) ? first.toNumber() : first;
        lastIndex = (last.getTypeId && last.getTypeId() === utilities.types.NUMBER) ? last.toNumber() : last;
    }

    // to protect the attributes the methods are defined in the constructor
    this.getFirstIndex = function() { return firstIndex; };
    this.getLastIndex = function() { return lastIndex; };

    this.acceptVisitor = function(visitor) {
        visitor.visitRange(this);
    };

    this.toArray = function() {
        if (lastIndex === Infinity) {
            throw new Error('Unable to generate an array from an infinite range.');
        }
        const array = [];
        var index = firstIndex;
        while (index <= lastIndex) {
            if (collection) {
                array.push(collection.getItem(index++));  // retrieve the next item
            } else {
                array.push(new elements.Number(index++));  // the index is the next item
            }
        }
        return array;
    };

    this.getIterator = function() {
        return new RangeIterator(this, collection);
    };

    this.getSize = function() {
        return lastIndex - firstIndex + 1;
    };
    
    this.getFirst = function() {
        var item;
        if (collection) {
            item = collection.getItem(firstIndex);  // retrieve the item
        } else if (typeof firstIndex === 'number') {
            item = new elements.Number(firstIndex);  // the index is the item
        } else {
            item = firstIndex;
        }
        return item;
    };
    
    this.getItem = function(index) {
        var item;
        if (collection) {
            item = collection.getItem(firstIndex + index - 1);
        } else if (typeof firstIndex === 'number') {
            item = new elements.Number(firstIndex + index - 1);
        }
        return item;
    };
    
    this.getLast = function() {
        var item;
        if (collection) {
            item = collection.getItem(lastIndex);  // retrieve the item
        } else if (typeof lastIndex === 'number') {
            item = new elements.Number(lastIndex);  // the index is the item
        } else {
            item = lastIndex;
        }
        return item;
    };
    
    this.isInRange = function(item) {
        var index;
        if (collection) {
            index = collection.getIndex(item);
        } else {
            if (typeof item !== 'number') {
                throw new Error('The item must be a number: ' + item);
            }
            index = item;
        }
        return index >= firstIndex && index <= lastIndex;
    };

    return this;
}
Range.prototype = Object.create(abstractions.Composite.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


// PRIVATE CLASSES

function RangeIterator(range, collection) {

    // the range, size, collection, and current slot index are private attributes
    // so methods that use them are defined in the constructor
    var currentSlot = 0;  // the slot before the first number
    const size = range.getSize();  // static so we can cache it here

    this.toStart = function() {
        currentSlot = 0;  // the slot before the first number
    };
    
    this.toSlot = function(slot) {
        currentSlot = slot;
    };
    
    this.toEnd = function() {
        currentSlot = size;  // the slot after the last number
    };
    
    this.hasPrevious = function() {
        return currentSlot > 0;
    };
    
    this.hasNext = function() {
        return currentSlot < size;
    };
    
    this.getPrevious = function() {
        if (!this.hasPrevious()) throw new Error('Unable to retrieve the previous entity from an iterator that is at the beginning of a range.');
        currentSlot--;
        const index = range.getFirstIndex() + currentSlot;
        var item;
        if (collection) {
            item = collection.getItem(index);  // retrieve the item
        } else {
            item = new elements.Number(index);  // the index is the item
        }
        return item;
    };
    
    this.getNext = function() {
        if (!this.hasNext()) throw new Error('Unable to retrieve the next entity from an iterator that is at the end of a range.');
        const index = range.getFirstIndex() + currentSlot;
        var item;
        if (collection) {
            item = collection.getItem(index);  // retrieve the item
        } else {
            item = new elements.Number(index);  // the index is the item
        }
        currentSlot++;
        return item;
    };
    
    return this;
}
RangeIterator.prototype.constructor = RangeIterator;
