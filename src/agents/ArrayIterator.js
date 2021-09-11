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
 * This class implements the methods for an array based iterator.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


/**
 * This constructor creates a new iterator agent that can be used to iterate over the items
 * in a sequence.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the iterator.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Collection} The new array iterator agent.
 */
const ArrayIterator = function(array, debug) {
    abstractions.Iterator.call(
        this,
        ['/bali/agents/ArrayIterator'],
        debug
    );

    // private attributes
    array = array.slice();  // immutable copy of array
    const size = array.length;
    var slot = 0;  // the slot before the first item

    this.toSlot = function(newSlot) {
        if (newSlot > size) newSlot = size;
        if (newSlot < -size) newSlot = -size;
        if (newSlot < 0) newSlot = newSlot + size + 1;
        slot = newSlot;
    };

    this.hasPrevious = function() {
        return slot > 0;
    };

    this.hasNext = function() {
        return slot < array.length;
    };

    this.getPrevious = function() {
        if (!this.hasPrevious()) return;
        return array[--slot];
    };

    this.getNext = function() {
        if (!this.hasNext()) return;
        return array[slot++];
    };

    return this;
};
ArrayIterator.prototype = Object.create(abstractions.Iterator.prototype);
ArrayIterator.prototype.constructor = ArrayIterator;
exports.ArrayIterator = ArrayIterator;

