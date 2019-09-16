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
 * This utility class implements an iterator for arrays.  The indexing
 * is ordinal based and allows positive indexes starting at the beginning
 * of the list or negative indexes starting at the end of the list as
 * follows:
 * <pre>
 *             1          2          3            N
 *         [item 1] . [item 2] . [item 3] ... [item N]
 *            -N       -(N-1)     -(N-2)         -1
 * </pre>
 * 
 * The iterator sits in slots that reside between each item:
 * <pre>
 *         [item 1] . [item 2] . [item 3] ... [item N]
 *       ^          ^          ^                       ^  
 *     slot 0     slot 1     slot 2                  slot N
 * </pre>
 */
const Validator = require('./Validator').Validator;


// PUBLIC FUNCTIONS

/**
 * This function creates a new array iterator that allows the items in the array
 * to be iterated over in either direction.
 * 
 * @param {Array} array The array to be iterated over.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Iterator} The new array iterator.
 */
const Iterator = function(array, debug) {
    debug = debug || 0;
    if (debug > 1) {
        const validator = new Validator(debug);
        validator.validateType('/bali/utilities/Iterator', '$iterator', '$array', array, [
            '/javascript/Array'
        ]);
    }

    // the array and current slot index are private attributes so methods that use them
    // are defined in the constructor
    var currentSlot = 0;  // the slot before the first item

    this.toStart = function() {
        currentSlot = 0;  // the slot before the first item
    };

    this.toSlot = function(slot) {
        const size = array.length;
        if (slot > size) slot = size;
        if (slot < -size) slot = -size;
        if (slot < 0) slot = slot + size + 1;
        currentSlot = slot;
    };

    this.toEnd = function() {
        currentSlot = array.length;  // the slot after the last item
    };

    this.hasPrevious = function() {
        return currentSlot > 0;
    };

    this.hasNext = function() {
        return currentSlot < array.length;
    };

    this.getPrevious = function() {
        if (!this.hasPrevious()) return;
        return array[--currentSlot];
    };

    this.getNext = function() {
        if (!this.hasNext()) return;
        return array[currentSlot++];
    };

    return this;
};
Iterator.prototype.constructor = Iterator;
exports.Iterator = Iterator;
