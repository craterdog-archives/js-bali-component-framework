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
 * This element class captures the state and methods associated with a range element.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Exception = require('../structures/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new range element using the specified first and last values.
 *
 * @param {Array} value An array containing the first and last values in the range.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Range} The new range.
 */
const Range = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        ['/bali/elements/Range'],
        [ ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Range', '$Range', '$value', value, [
            '/javascript/Array'
        ]);
    }

    // since this element is immutable the values must be read-only
    const first = value[0];
    const last = value[1];
    this.getFirst = function() { return (first === undefined) ? -Infinity : first; };
    this.getLast = function() { return (last === undefined) ? Infinity : last; };

    return this;
};
Range.prototype = Object.create(abstractions.Element.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


// PUBLIC METHODS

/**
 * This method returns the raw value of the range as an array containing the first and last
 * indices.
 *
 * @returns {Array} An array containing the first and last indices of the range.
 */
Range.prototype.getValue = function() {
    return [this.getFirst(), this.getLast()];
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Range.prototype.acceptVisitor = function(visitor) {
    visitor.visitRange(this);
};


/**
 * This method returns an object that can be used to iterate over the integers in
 * this range.  If the range does not contain integers, an exception is thrown.
 * @returns {Iterator} An iterator for this range.
 */
Range.prototype.getIterator = function() {
    if (!Number.isInteger(this.getFirst()) || !Number.isInteger(this.getLast())) {
        const exception = new Exception({
            $module: '/bali/elements/Range',
            $procedure: '$getIterator',
            $exception: '$nonInteger',
            $text: 'A non-integer range cannot be iterated over.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
    const iterator = new RangeIterator(this, this.getParameters(), this.debug);
    return iterator;
};


// PRIVATE CLASSES

const RangeIterator = function(range, parameters, debug) {
    abstractions.Iterator.call(
        this,
        ['/bali/elements/RangeIterator'],
        [],
        parameters,
        debug
    );

    // the range, size, collection, and current slot index are private attributes
    // so methods that use them are defined in the constructor
    const first = range.getFirst();
    const last = range.getLast();
    const size = last - first + 1;  // static so we can cache it here
    var slot = 0;  // the slot before the first integer

    this.toStart = function() {
        slot = 0;  // the slot before the first integer
    };

    this.toSlot = function(newSlot) {
        slot = newSlot;
    };

    this.toEnd = function() {
        slot = size;  // the slot after the last integer
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
RangeIterator.prototype = Object.create(abstractions.Iterator.prototype);
RangeIterator.prototype.constructor = RangeIterator;
