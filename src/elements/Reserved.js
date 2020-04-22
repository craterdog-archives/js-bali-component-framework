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
 * reserved identifier.
 */
const utilities = require('../utilities');
const types = require('../types');
const Exception = require('../structures/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new reserved identifier using the specified value.
 *
 * @param {String} value The value of the reserved identifier.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Reserved} The new reserved identifier.
 */
const Reserved = function(value, parameters, debug) {
    types.Sequence.call(
        this,
        ['/bali/elements/Reserved'],
        [ ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Reserved', '$Reserved', '$value', value, [
            '/javascript/String'
        ]);
    }

    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*(-[0-9]+)?$/g.test(value)) {
        const exception = new Exception({
            $module: '/bali/elements/Reserved',
            $procedure: '$Reserved',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid reserved symbol value was passed to the constructor.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
};
Reserved.prototype = Object.create(types.Sequence.prototype);
Reserved.prototype.constructor = Reserved;
exports.Reserved = Reserved;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Reserved.prototype.acceptVisitor = function(visitor) {
    visitor.visitReserved(this);
};


/**
 * This method returns the number of characters in this reserved symbol.
 *
 * @returns {Number} The number of characters in this reserved symbol.
 */
Reserved.prototype.getSize = function() {
    return this.getValue().length;
};


/**
 * This method returns an object that can be used to iterate over the characters in
 * this reserved symbol.
 * @returns {Iterator} An iterator for this reserved symbol.
 */
Reserved.prototype.getIterator = function() {
    const iterator = new ReservedIterator(this.getValue(), this.getParameters(), this.debug);
    return iterator;
};


/**
 * This method returns the character at the specified index from this reserved symbol.
 *
 * @param {Number} index The index of the character to be retrieved from this reserved symbol.
 * @returns {String} The character at the specified index.
 */
Reserved.prototype.getItem = function(index) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Reserved', '$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    index = this.normalizedIndex(index) - 1;  // zero-based indexing for JS
    return this.getValue()[index];
};


/**
 * This method returns a new reserved symbol containing the characters in the specified range.
 *
 * @param {Range} range A range depicting the first and last characters to be retrieved.
 * @returns {Reserved} A new reserved symbol containing the requested characters.
 */
Reserved.prototype.getItems = function(range) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Reserved', '$getItems', '$range', range, [
            '/bali/elements/Range'
        ]);
    }
    const first = this.normalizedIndex(range.getFirst()) - 1;  // zero-based indexing for JS
    const last = this.normalizedIndex(range.getLast());  // slice() is exclusive of last index
    const string = this.getValue().slice(first, last);
    return new Reserved(string, this.getParameters(), this.debug);
};


// PRIVATE CLASSES

const ReservedIterator = function(symbol, parameters, debug) {
    types.Iterator.call(
        this,
        ['/bali/elements/ReservedIterator'],
        [],
        parameters,
        debug
    );
    var slot = 0;  // the slot before the first character
    const size = symbol.length;  // static so we can cache it here

    this.toStart = function() {
        slot = 0;  // the slot before the first character
    };

    this.toSlot = function(newSlot) {
        slot = newSlot;
    };

    this.toEnd = function() {
        slot = size;  // the slot after the last character
    };

    this.hasPrevious = function() {
        return slot > 0;
    };

    this.hasNext = function() {
        return slot < size;
    };

    this.getPrevious = function() {
        if (!this.hasPrevious()) return;
        return symbol[--slot];
    };

    this.getNext = function() {
        if (!this.hasNext()) return;
        return symbol[slot++];
    };

    return this;
};
ReservedIterator.prototype = Object.create(types.Iterator.prototype);
ReservedIterator.prototype.constructor = ReservedIterator;
