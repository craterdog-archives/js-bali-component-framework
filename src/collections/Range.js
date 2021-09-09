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
const agents = require('../agents');
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
        const validator = new agents.Validator(this.debug);
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

    // convert the arguments to components
    if (first === null) {
        first = undefined;
    } else if (first !== undefined) {
        first = this.componentize(first, this.debug);
    }
    if (last === null) {
        last = undefined;
    } else if (last !== undefined) {
        last = this.componentize(last, this.debug);
    }
    if (connector === null || connector === undefined) {
        connector = '..';
    }

    // since this collection is immutable the values must be read-only

    this.setFirst = function(value) { first = this.componentize(value); };

    this.getFirst = function() { return first; };

    this.setLast = function(value) { last = this.componentize(value); };

    this.getLast = function() { return last; };

    this.getConnector = function() { return connector; };

    return this;
};
Range.prototype = Object.create(abstractions.Collection.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


// PUBLIC METHODS

/**
 * This method returns an array containing the items in this collection.
 *
 * @returns {Array} An array containing the items in this collection.
 */
Range.prototype.toArray = function() {
    const iterator = this.getIterator();
    const array = [];
    while (iterator.hasNext()) {
        array.push(iterator.getNext());
    }
    return array;
};


/**
 * This method returns the number of items that this collection contains.
 *
 * @returns {Number} The number of items that this collection contains.
 */
Range.prototype.getSize = function() {
    var first = this.getFirst();
    var last = this.getLast();
    if (first && first.isInteger && last && last.isInteger) {
        const connector = this.getConnector();
        first = first.toInteger();
        if (connector.startsWith('<')) first++;
        last = last.toInteger();
        if (connector.endsWith('<')) last--;
        const size = last - first + 1;
        if (size > 0) {
            return size;
        }
        const exception = new agents.Exception({
            $module: '/bali/collections/Range',
            $procedure: '$getSize',
            $exception: '$invalidSize',
            $range: this,
            $size: size,
            $text: 'A range must have a positive size.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
    const exception = new agents.Exception({
        $module: '/bali/collections/Range',
        $procedure: '$getSize',
        $exception: '$notEnumerable',
        $range: this,
        $text: 'Only an enumerable range has a size and may be iterated over.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns an object that can be used to iterate over the integers in
 * this range.  If the range does not contain integers, an exception is thrown.
 * @returns {Iterator} An iterator for this range.
 */
Range.prototype.getIterator = function() {
    if (this.getSize()) {  // will throw an exception if range is not enumerable
        const iterator = new RangeIterator(this);
        return iterator;
    }
};


/**
 * Ranges are immutable so this method throws an exception.
 *
 * @param {Component} item The item to be added.
 * @returns {Boolean} Whether or not the item was successfully added.
 */
Range.prototype.addItem = function(item) {
    const exception = new agents.Exception({
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
 * This method adds the specified sequence of items to the collection.
 *
 * @param {Array|Sequential} items The items to be added to this collection.
 * @returns {Number} The number of items that were successfully added to the collection.
 */
Range.prototype.addItems = function(items) {
    const exception = new agents.Exception({
        $module: '/bali/collections/Range',
        $procedure: '$addItems',
        $exception: '$invalidMethod',
        $range: this,
        $text: 'A range is immutable.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


// PRIVATE CLASSES

const RangeIterator = function(range) {
    agents.Iterator.call(this);

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
RangeIterator.prototype = Object.create(agents.Iterator.prototype);
RangeIterator.prototype.constructor = RangeIterator;

