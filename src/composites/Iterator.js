/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

/**
 * This composite class implements an iterator for arrays.  The indexing
 * is ordinal based and allows positive indexes starting at the beginning
 * of the list or negative indexes starting at the end of the list as
 * follows:
 * <pre>
 *             1          2          3            N
 *         [item 1] . [item 2] . [item 3] ... [item N]
 *            -N        -(N-1)     -(N-2)        -1
 * </pre>
 * 
 * The iterator sits in slots that reside between each item:
 * <pre>
 *         [item 1] . [item 2] . [item 3] ... [item N]
 *       ^          ^          ^                       ^  
 *     slot 0     slot 1     slot 2                  slot N
 * </pre>
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var Complex = require('../elements/Complex').Complex;


/**
 * The constructor for the Iterator class.
 * 
 * @param {Array} array The array to be iterated over.
 * @returns {Iterator} The new array iterator.
 */
function Iterator(array) {
    Composite.call(this, types.ITERATOR);
    this.slot = 0;  // the slot before the first item
    this.array = array;
    this.setComplex();  // iterators won't fit inline
    return this;
}
Iterator.prototype = Object.create(Composite.prototype);
Iterator.prototype.constructor = Iterator;
exports.Iterator = Iterator;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this iterator.
 */
Iterator.prototype.accept = function(visitor) {
    visitor.visitIterator(this);
};


/**
 * This method returns an array containing the attributes of this iterator.
 * 
 * @returns {Array} An array containing the attributes of this iterator.
 */
Iterator.prototype.toArray = function() {
    var array = [];
    array.push(new Complex(this.slot.toString()));
    this.array.forEach(function(item) {
        array.push(item);
    }, this);
    return array;
};


/**
 * This method moves the iterator to the slot before the first item.
 */
Iterator.prototype.toStart = function() {
    this.slot = 0;  // the slot before the first item
};


/**
 * This method moves the iterator to the specified slot.
 * 
 * @param {Number} slot The slot before the next desired item. 
 */
Iterator.prototype.toSlot = function(slot) {
    var size = this.array.length;
    if (slot > size) slot = size;
    if (slot < -size) slot = -size;
    if (slot < 0) slot = slot + size + 1;
    this.slot = slot;
};


/**
 * This method moves the iterator to the slot after the last item.
 */
Iterator.prototype.toEnd = function() {
    this.slot = this.array.length;  // the slot after the last item
};


/**
 * This method determines whether or not the iterator has an item before the current slot.
 * 
 * @returns {Boolean} Whether or not the iterator has an item before the current slot.
 */
Iterator.prototype.hasPrevious = function() {
    return this.slot > 0;
};


/**
 * This method determines whether or not the iterator has an item after the current slot.
 * 
 * @returns {Boolean} Whether or not the iterator has an item after the current slot.
 */
Iterator.prototype.hasNext = function() {
    return this.slot < this.array.length;
};


/**
 * This method returns the item before the current slot and moves the iterator to the
 * previous slot.
 * 
 * @returns {Component} The item before the current slot.
 */
Iterator.prototype.getPrevious = function() {
    if (!this.hasPrevious()) throw new Error('ITERATOR: The iterator is at the beginning of the array.');
    var item = this.array[--this.slot];
    return item;
};


/**
 * This method returns the item after the current slot and moves the iterator to the
 * next slot.
 * 
 * @returns {Component} The item after the current slot.
 */
Iterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('ITERATOR: The iterator is at the end of the array.');
    var item = this.array[this.slot++];
    return item;
};
