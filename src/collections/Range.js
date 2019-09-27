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
 * This collection class implements a data structure that defines a range of items. The
 * structure is static once the first and last items in the range have been defined.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const elements = require('../elements');
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new range of items with optional parameters that are used
 * to parameterize its type.
 *
 * @param {Number|Component} first The first item in the range.
 * @param {Number|Component} last The last item in the range.
 * @param {Object} parameters Optional parameters used to parameterize this range.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Range} The new range.
 */
const Range = function(first, last, parameters, debug) {
    abstractions.Collection.call(
        this,
        ['/bali/collections/Range'],
        [],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/collections/Range', '$Range', '$first', first, [
            '/javascript/Number',
            '/javascript/String',
            '/bali/abstractions/Component'
        ]);
        validator.validateType('/bali/collections/Range', '$Range', '$last', last, [
            '/javascript/Number',
            '/javascript/String',
            '/bali/abstractions/Component'
        ]);
    }
    first = this.componentize(first, this.debug);
    last = this.componentize(last, this.debug);

    // the range is immutable so the collection is private and the indices must be read-only
    var firstIndex;
    var lastIndex;
    var collection;
    // parameters are immutable so we don't need to copy the collection
    collection = this.getParameter('$collection');
    if (collection) {
        // determine the indices of the items in the collection
        firstIndex = collection.getIndex(first);
        lastIndex = collection.getIndex(last);
    } else {
        // the first and last items are indices into the range of integers
        firstIndex = (first.isComponent && first.supportsInterface('/bali/interfaces/Numerical')) ? first.toNumber() : first;
        lastIndex = (last.isComponent && last.supportsInterface('/bali/interfaces/Numerical')) ? last.toNumber() : last;
    }

    // to protect the attributes the methods are defined in the constructor
    this.getFirstIndex = function() { return firstIndex; };

    this.getLastIndex = function() { return lastIndex; };

    this.toArray = function() {
        if (lastIndex === Infinity) {
            const exception = new Exception({
                $module: '/bali/collections/Range',
                $procedure: '$toArray',
                $exception: '$infiniteArray',
                $range: this,
                $text: 'Attempted to generate an array from an infinite range.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
        const array = [];
        var index = firstIndex;
        while (index <= lastIndex) {
            if (collection) {
                array.push(collection.getItem(index++));  // retrieve the next item
            } else {
                array.push(new elements.Number(index++, undefined, undefined, this.debug));  // the index is the next item
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
            item = new elements.Number(firstIndex, undefined, undefined, this.debug);  // the index is the item
        } else {
            item = firstIndex;
        }
        return item;
    };

    this.getItem = function(index) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Range', '$getItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        var item;
        if (collection) {
            item = collection.getItem(firstIndex + index - 1);
        } else if (typeof firstIndex === 'number') {
            item = new elements.Number(firstIndex + index - 1, undefined, undefined, this.debug);
        }
        return item;
    };

    this.getLast = function() {
        var item;
        if (collection) {
            item = collection.getItem(lastIndex);  // retrieve the item
        } else if (typeof lastIndex === 'number') {
            item = new elements.Number(lastIndex, undefined, undefined, this.debug);  // the index is the item
        } else {
            item = lastIndex;
        }
        return item;
    };

    this.isInRange = function(item) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Range', '$isInRange', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        var index;
        if (collection) {
            index = collection.getIndex(item);
        } else {
            if (typeof item !== 'number') {
                const exception = new Exception({
                    $module: '/bali/collections/Range',
                    $procedure: '$isInRange',
                    $exception: '$invalidParameter',
                    $range: this,
                    $parameter: item,
                    $text: 'An invalid parameter type was passed.'
                });
                if (this.debug > 0) console.error(exception.toString());
                throw exception;
            }
            index = item;
        }
        return index >= firstIndex && index <= lastIndex;
    };

    return this;
};
Range.prototype = Object.create(abstractions.Collection.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


// PRIVATE CLASSES

const RangeIterator = function(range, collection) {

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
        if (!this.hasPrevious()) return;
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
        if (!this.hasNext()) return;
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
};
RangeIterator.prototype.constructor = RangeIterator;
