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
 * This collection class captures the state and methods associated with a range component.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new range collection using the specified first and last values.
 *
 * @param {Element} first The first element in the range.
 * @param {String} connector The connector between the first and last values (default: '..').
 * @param {Element} last The last element in the range.
 * @param {Object} parameters Optional parameters used to parameterize this collection.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Range} The new range.
 */
const Range = function(first, connector, last, parameters, debug) {
    abstractions.Collection.call(
        this,
        ['/bali/collections/Range'],
        [
            '/bali/interfaces/Sequential'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/collections/Range', '$Range', '$first', first, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Boolean',
            '/javascript/Number',
            '/bali/abstractions/Element'
        ]);
        validator.validateType('/bali/collections/Range', '$Range', '$connector', connector, [
            '/javascript/Undefined',
            '/javascript/String'
        ]);
        validator.validateType('/bali/collections/Range', '$Range', '$last', last, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Boolean',
            '/javascript/Number',
            '/bali/abstractions/Element'
        ]);
    }

    this.setFirst = function(value) {
        if (first === null) first = undefined;
        if (value !== undefined) first = this.componentize(value);
    };

    this.getFirst = function() { return first; };

    this.setLast = function(value) {
        if (last === null) last = undefined;
        if (value !== undefined) last = this.componentize(value);
    }

    this.getLast = function() { return last; };

    this.getSize = function() { return size; };

    this.getConnector = function() { return connector; };

    this.isEnumerable = function() { return first && first.isInteger && last && last.isInteger; };

    // private attributes
    this.setFirst(first);
    this.setLast(last);
    if (connector === null || connector === undefined) connector = '..';
    var size = 0;  // assume this range is innumerable

    if (this.isEnumerable()) {
        size = last.toInteger() - first.toInteger() + 1;
        if (connector.endsWith('<')) size--;
        if (connector.startsWith('<')) size--;
        if (size < 1) {
            const exception = new utilities.Exception({
                $module: '/bali/collections/Range',
                $procedure: '$Range',
                $exception: '$invalidSize',
                $range: this,
                $size: size,
                $text: 'An enumerable range must have a positive size.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
    }

    return this;
};
Range.prototype = Object.create(abstractions.Collection.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


// PUBLIC METHODS

/**
 * This method returns an array containing the items in this range. If
 * this range is not enumerable this method throws an exception.
 *
 * @returns {Array} An array containing the items in this range.
 */
Range.prototype.toArray = function() {
    if (this.isEnumerable()) {
        const iterator = this.getIterator();
        const array = [];
        while (iterator.hasNext()) {
            array.push(iterator.getNext());
        }
        return array;
    }
    const exception = new utilities.Exception({
        $module: '/bali/collections/Range',
        $procedure: '$toArray',
        $exception: '$notEnumerable',
        $range: this,
        $text: 'Only an enumerable range of integers may be represented as an array.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns an agent that can be used to iterate over the integers in
 * a range.  If this range is not enumerable this method throws an exception.
 *
 * @returns {Iterator} An iterator for this range.
 */
Range.prototype.getIterator = function() {
    if (this.isEnumerable()) {
        const iterator = new RangeIterator(this, this.debug);
        return iterator;
    }
    const exception = new utilities.Exception({
        $module: '/bali/collections/Range',
        $procedure: '$getIterator',
        $exception: '$notEnumerable',
        $range: this,
        $text: 'Only an enumerable range of integers may be iterated over.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns the index of the specified item, or zero if it is not in
 * this range.  If this range is not enumerable this method throws an exception.
 *
 * @param {Component} item The item to be indexed.
 * @returns {Number} The index of the specified item.
 */
Range.prototype.getIndex = function(item) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/collections/Range', '$getIndex', '$item', item, [
            '/javascript/Number',
            '/bali/elements/Number'
        ]);
    }
    if (this.isEnumerable()) {
        const size = this.getSize();  // will throw an exception if range is not enumerable
        const offset = this.componentize(item).toInteger();
        var index = offset - this.getFirst().toInteger();
        if (this.getConnector().startsWith('.')) {
            index++;
        }
        if (index < 0 || index > size) return 0;  // not in the range
        return index;
    }
    const exception = new utilities.Exception({
        $module: '/bali/collections/Range',
        $procedure: '$getIndex',
        $exception: '$notEnumerable',
        $range: this,
        $text: 'Only an enumerable range of integers is indexed.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * Ranges are immutable so this method throws an exception.
 *
 * @param {Component} item The item to be added.
 * @returns {Boolean} Whether or not the item was successfully added.
 */
Range.prototype.addItem = function(item) {
    const exception = new utilities.Exception({
        $module: '/bali/collections/Range',
        $procedure: '$addItem',
        $exception: '$invalidMethod',
        $range: this,
        $text: 'A range is immutable.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * Ranges are immutable so this method throws an exception.
 *
 * @param {Array|Sequential} items The items to be added to this collection.
 * @returns {Number} The number of items that were successfully added to the collection.
 */
Range.prototype.addItems = function(items) {
    const exception = new utilities.Exception({
        $module: '/bali/collections/Range',
        $procedure: '$addItems',
        $exception: '$invalidMethod',
        $range: this,
        $text: 'A range is immutable.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


// PUBLIC FUNCTIONS

/**
 * This function returns an effective range that takes into account the inclusivity of
 * the endpoints for the specified range. If the specified range is not enumerable this
 * function throws an exception.
 *
 * @param {Range} The specified range.
 * @param {Number} debug A number in the range 0..3.
 */
Range.effective = function(range, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/collections/Range', '$effective', '$range', range, [
            '/bali/collections/Range'
        ]);
    }
    if (range.isEnumerable()) {
        const connector = range.getConnector();
        if (connector === '..') return range;
        var first = range.getFirst().toInteger();
        if (connector.startsWith('<')) first++;
        var last = range.getLast().toInteger();
        if (connector.endsWith('<')) last--;
        return new Range(first, '..', last, range.getParameters(), debug);
    }
    const exception = new utilities.Exception({
        $module: '/bali/collections/Range',
        $procedure: '$effective',
        $exception: '$notEnumerable',
        $range: range,
        $text: 'Only an enumerable range of integers has an effective range.'
    });
    if (debug > 0) console.error(exception.toString());
    throw exception;
};


// PRIVATE CLASSES

const RangeIterator = function(range, debug) {
    abstractions.Iterator.call(
        this,
        ['/bali/agents/RangeIterator'],
        debug
    );

    const size = range.getSize();  // will throw an exception if range is not enumerable
    var first = range.getFirst().toInteger();
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
        return range.componentize(--slot + first);
    };

    this.getNext = function() {
        if (!this.hasNext()) return;
        return range.componentize(slot++ + first);
    };

    return this;
};
RangeIterator.prototype = Object.create(abstractions.Iterator.prototype);
RangeIterator.prototype.constructor = RangeIterator;

