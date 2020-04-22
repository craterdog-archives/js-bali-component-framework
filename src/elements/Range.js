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
 * number range element.
 */
const utilities = require('../utilities');
const types = require('../types');


// PUBLIC FUNCTIONS

/**
 * This function creates a new number range element using the specified value.
 *
 * @param {Number} first The first value in the number range.
 * @param {Number} last The last value in the number range.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Range} The new number range.
 */
const Range = function(first, last, parameters, debug) {
    types.Sequence.call(
        this,
        ['/bali/elements/Range'],
        [ ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Range', '$Range', '$first', first, [
            '/javascript/Undefined',
            '/javascript/Number'
        ]);
        validator.validateType('/bali/elements/Range', '$Range', '$last', last, [
            '/javascript/Undefined',
            '/javascript/Number'
        ]);
    }

    // since this element is immutable the values must be read-only
    this.getFirst = function() { return first; };
    this.getLast = function() { return last; };

    return this;
};
Range.prototype = Object.create(types.Sequence.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Range.prototype.acceptVisitor = function(visitor) {
    visitor.visitRange(this);
};


/**
 * This method returns the number of characters that this number range has.
 *
 * @returns {Number} The number of characters that this number range has.
 */
Range.prototype.getSize = function() {
    var first = this.getFirst();
    var last = this.getLast();
    if (first === undefined || last === undefined) return Infinity;
    return Math.abs(last - first + 1);
};


/**
 * This method returns an object that can be used to iterate over the characters in
 * this number range.
 * @returns {Iterator} An iterator for this number range.
 */
Range.prototype.getIterator = function() {
    const iterator = new RangeIterator(this, this.getParameters(), this.debug);
    return iterator;
};


/**
 * This method returns the number at the specified index from this number range.
 *
 * @param {Number} index The index of the number to be retrieved from this number range.
 * @returns {String} The number at the specified index.
 */
Range.prototype.getItem = function(index) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Name', '$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    return this.getFirst() + this.normalizedIndex(index) - 1;
};


/**
 * This method returns a new number range containing the numbers in the specified range.
 *
 * @param {Range} range A range depicting the first and last numbers to be retrieved.
 * @returns {Range} A new number range containing the requested numbers.
 */
Range.prototype.getItems = function(range) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Range', '$getItems', '$range', range, [
            '/bali/elements/Range'
        ]);
    }
    const first = this.getFirst() + this.normalizedIndex(range.getFirst()) - 1;
    const last = this.getFirst() + this.normalizedIndex(range.getLast()) - 1;
    return new Range(first, last, this.getParameters(), this.debug);
};


// PRIVATE CLASSES

const RangeIterator = function(range, parameters, debug) {
    types.Iterator.call(
        this,
        ['/bali/elements/RangeIterator'],
        [],
        parameters,
        debug
    );

    // the range, size, collection, and current slot index are private attributes
    // so methods that use them are defined in the constructor
    var first = range.getFirst();
    const size = range.getSize();  // static so we can cache it here
    var slot = 0;  // the slot before the first number
    if (size === Infinity) {
        const exception = new Exception({
            $module: '/bali/elements/IteratorRange',
            $procedure: '$RangeIterator',
            $exception: '$infiniteSize',
            $text: 'A range iterator cannot iterate over an infinite range of numbers.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    this.toStart = function() {
        slot = 0;  // the slot before the first number
    };

    this.toSlot = function(newSlot) {
        slot = newSlot;
    };

    this.toEnd = function() {
        slot = size;  // the slot after the last number
    };

    this.hasPrevious = function() {
        return slot > 0;
    };

    this.hasNext = function() {
        return slot < size;
    };

    this.getPrevious = function() {
        if (!this.hasPrevious()) return;
        return --slot + first;
    };

    this.getNext = function() {
        if (!this.hasNext()) return;
        return slot++ + first;
    };

    return this;
};
RangeIterator.prototype = Object.create(types.Iterator.prototype);
RangeIterator.prototype.constructor = RangeIterator;
