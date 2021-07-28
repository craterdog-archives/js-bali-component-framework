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
 * @param {Element} first The first element in the range.
 * @param {Element} last The last element in the range.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Range} The new range.
 */
const Range = function(first, last, parameters, debug) {
    abstractions.Structure.call(
        this,
        ['/bali/structures/Range'],
        [
            '/bali/interfaces/Literal',
            '/bali/interfaces/Sequential'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/structures/Range', '$Range', '$first', first, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Boolean',
            '/javascript/Number',
            '/bali/abstractions/Element'
        ]);
        validator.validateType('/bali/structures/Range', '$Range', '$last', last, [
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

    // since this element is immutable the values must be read-only
    this.getFirst = function() { return first; };

    this.getLast = function() { return last; };

    this.getAttribute = function(key) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/structures/Range', '$getAttribute', '$key', key, [
                '/javascript/String',
                '/bali/elements/Symbol'
            ]);
        }
        const symbol = key.toString();
        if (symbol === '$first') return this.getFirst();
        if (symbol === '$last') return this.getLast();
    };

    this.setAttribute = function(key, value) {
        const exception = new Exception({
            $module: '/bali/structures/Range',
            $procedure: '$setAttribute',
            $exception: '$immutable',
            $text: 'Ranges are immutable.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    };

    return this;
};
Range.prototype = Object.create(abstractions.Structure.prototype);
Range.prototype.constructor = Range;
exports.Range = Range;


// PUBLIC METHODS

/**
 * This method determines whether or not this structure is meaningful.
 *
 * @returns {Boolean} Whether or not this component is meaningful.
 */
Range.prototype.toBoolean = function() {
    return this.getFirst() !== undefined && this.getLast() !== undefined;
};


/**
 * This method returns the literal string value for this range.  The literal does not
 * include any parameterization of the range.
 *
 * @returns {String} The literal string value for this range.
 */
Range.prototype.toLiteral = function() {
    const copy = new this.constructor(this.getFirst(), this.getLast(), undefined, this.debug);
    return copy.toString();
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
    if (this.getFirst().isInteger && this.getLast().isInteger) {
        const iterator = new RangeIterator(this, this.getParameters(), this.debug);
        return iterator;
    }
    const exception = new Exception({
        $module: '/bali/structures/Range',
        $procedure: '$getIterator',
        $exception: '$nonInteger',
        $text: 'Only a finite integer range may be iterated over.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


// PRIVATE CLASSES

const RangeIterator = function(range, parameters, debug) {
    abstractions.Iterator.call(
        this,
        ['/bali/structures/RangeIterator'],
        [],
        parameters,
        debug
    );

    // the first index in the range, size of the range, and the current slot pointer
    // are private attributes so methods that use them are defined in the constructor
    const first = range.getFirst().toNumber();
    const last = range.getLast().toNumber();
    const size = last - first + 1;  // ranges are static so we can cache the size
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

