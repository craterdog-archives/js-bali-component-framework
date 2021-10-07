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
const moduleName = '/bali/collections/Range';
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new range collection using the specified first and last values.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {Element} first The first element in the range.
 * @param {String} connector The connector between the first and last values (default: '..').
 * @param {Element} last The last element in the range.
 * @param {Object} parameters Optional parameters used to parameterize this collection.
 * @returns {Range} The new range.
 */
const Range = function(first, connector, last, parameters, debug) {
    abstractions.Collection.call(
        this,
        [ moduleName ],
        [
            '/bali/interfaces/Sequential'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Range', '$first', first, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Boolean',
            '/javascript/Number',
            '/bali/abstractions/Component'
        ]);
        this.validateArgument('$Range', '$connector', connector, [
            '/javascript/Undefined',
            '/javascript/String'
        ]);
        this.validateArgument('$Range', '$last', last, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Boolean',
            '/javascript/Number',
            '/bali/abstractions/Component'
        ]);
    }

    this.setFirst = function(value) {
        if (this.debug > 1) {
            this.validateArgument('$setFirst', '$value', value, [
                '/javascript/Undefined',
                '/javascript/String',
                '/javascript/Boolean',
                '/javascript/Number',
                '/bali/abstractions/Component'
            ]);
        }
        if (first === null) first = undefined;
        if (value !== undefined) first = this.componentize(value);
    };

    this.getFirst = function() { return first; };

    this.setLast = function(value) {
        if (this.debug > 1) {
            this.validateArgument('$setLast', '$value', value, [
                '/javascript/Undefined',
                '/javascript/String',
                '/javascript/Boolean',
                '/javascript/Number',
                '/bali/abstractions/Component'
            ]);
        }
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
            const exception = new abstractions.Exception({
                $module: moduleName,
                $procedure: '$Range',
                $exception: '$invalidSize',
                $range: this,
                $size: size,
                $text: '"An enumerable range must have a positive size."'
            }, undefined, this.debug);
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
    const exception = new abstractions.Exception({
        $module: moduleName,
        $procedure: '$toArray',
        $exception: '$notEnumerable',
        $range: this,
        $text: '"Only an enumerable range of integers may be represented as an array."'
    }, undefined, this.debug);
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
    const exception = new abstractions.Exception({
        $module: moduleName,
        $procedure: '$getIterator',
        $exception: '$notEnumerable',
        $range: this,
        $text: '"Only an enumerable range of integers may be iterated over."'
    }, undefined, this.debug);
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
        this.validateArgument('$getIndex', '$item', item, [
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
    const exception = new abstractions.Exception({
        $module: moduleName,
        $procedure: '$getIndex',
        $exception: '$notEnumerable',
        $range: this,
        $text: '"Only an enumerable range of integers is indexed."'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method retrieves the item that is associated with the specified index
 * from this collection.
 *
 * @param {Number} index The index of the desired item.
 * @returns {Component} The item at the position in this collection.
 */
Range.prototype.getItem = function(index) {
    if (this.debug > 1) {
        this.validateArgument('$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    const iterator = this.getIterator();
    iterator.toSlot(index);
    return iterator.getPrevious();
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
        abstractions.Component.validateArgument(moduleName, '$effective', '$range', range, [
            moduleName,
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
    const exception = new abstractions.Exception({
        $module: moduleName,
        $procedure: '$effective',
        $exception: '$notEnumerable',
        $range: range,
        $text: '"Only an enumerable range of integers has an effective range."'
    }, undefined, this.debug);
    throw exception;
};


// PRIVATE CLASSES

const RangeIterator = function(range, debug) {
    abstractions.Iterator.call(
        this,
        ['/bali/collections/RangeIterator'],
        range,
        debug
    );
    const size = range.getSize();  // will throw an exception if range is not enumerable
    var first = range.getFirst().toInteger();
    var slot = 0;  // the slot before the first integer

    this.getSlot = function() {
        return slot;
    };

    this.toStart = function() {
        slot = 0;  // the slot before the first integer
    };

    this.toSlot = function(newSlot) {
        if (this.debug > 1) {
            this.validateArgument('$toSlot', '$newSlot', newSlot, [
                '/javascript/Number'
            ]);
        }
        if (newSlot > size) newSlot = size;
        if (newSlot < -size) newSlot = -size;
        if (newSlot < 0) newSlot = newSlot + size + 1;
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

