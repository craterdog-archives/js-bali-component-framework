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
 * This composite class implements an iterator for arrays.  The indexing
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


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new array iterator that allows the items in the array
 * to be iterated over in either direction.
 * 
 * @constructor
 * @param {Array} array The array to be iterated over.
 * @returns {Iterator} The new array iterator.
 */
function Iterator(array) {

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
}
Iterator.prototype.constructor = Iterator;
exports.Iterator = Iterator;
