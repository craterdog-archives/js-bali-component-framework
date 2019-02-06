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
 * This collection class implements a stack (LIFO) data structure.  Attempting to access an
 * empty stack is considered a bug in the calling code and a runtime exception is thrown.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const composites = require('../composites');
const Catalog = require('./Catalog').Catalog;


/*
 * This function defines a missing stack function for the standard Array class.
 * The push(item) and pop() methods are already defined.
 */
Array.prototype.peek = function() {
    return this[this.length - 1];
};


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new stack component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Stack} The new stack.
 */
function Stack(parameters) {
    abstractions.Collection.call(this, utilities.types.STACK, parameters);
    this.capacity = 1024;  // default capacity
    if (parameters) {
        const value = parameters.getValue('$capacity', 2);
        if (value) {
            this.capacity = value.toNumber();
        }
    }
    this.array = [];
    return this;
}
Stack.prototype = Object.create(abstractions.Collection.prototype);
Stack.prototype.constructor = Stack;
exports.Stack = Stack;


// PUBLIC METHODS

/**
 * This method returns an array containing the items on this stack.
 * 
 * @returns {Array} An array containing the items on this stack.
 */
Stack.prototype.toArray = function() {
    return this.array.slice();  // copy the array
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this stack.
 */
Stack.prototype.acceptVisitor = function(visitor) {
    visitor.visitStack(this);
};


/**
 * This method returns the number of items that are currently on this stack.
 * 
 * @returns {Number} The number of items on this stack.
 */
Stack.prototype.getSize = function() {
    const size = this.array.length;
    return size;
};


/**
 * This method returns an object that can be used to iterate over the items on this
 * stack.
 * 
 * NOTE: This iterator iterates over the items on the stack starting at the top.
 * 
 * @returns {Iterator} An iterator for this stack.
 */
Stack.prototype.getIterator = function() {
    const iterator = new utilities.Iterator(this.array.slice().reverse());
    return iterator;
};


/**
 * This method adds a new item onto the top of this stack.
 *
 * @param {Component} item The new item to be added.
 * @returns {Boolean} Whether or not the item was successfully added.
 * @throws {Exception} Attempted to add an item to a full stack.
 */
Stack.prototype.addItem = function(item) {
    if (this.convert) item = this.convert(item);
    if (this.array.length < this.capacity) {
        this.array.push(item);
        return true;
    } else {
        const attributes = {
            $exception: '$resourceLimit',
            $type: '$Stack',
            $procedure: '$addItem',
            $capacity: this.capacity,
            $message: '"The stack has reached its maximum capacity."'
        };
        throw new utilities.Exception(attributes);
    }
};


/**
 * This method removes the top item from this stack.  If this stack is empty
 * an exception is thrown.
 *
 * @returns {Component} The top item from this stack.
 */
Stack.prototype.removeItem = function() {
    var item;
    const size = this.array.length;
    if (size > 0) {
        item = this.array.pop();
    } else {
        throw new Error('BUG: Attempted to pop an item off of an empty stack.');
    }
    return item;
};


/**
 * This method returns a reference to the top item on this stack without
 * removing it from this stack.  If this stack is empty an exception is thrown.
 *
 * @returns {Component} The top item on this stack.
 */
Stack.prototype.getTop = function() {
    var item = null;
    const size = this.array.length;
    if (size > 0) {
        item = this.array.peek();
    } else {
        throw new Error('BUG: Attempted to access the top item of an empty stack.');
    }
    return item;
};


/**
 * This method removes all items from this stack.
 */
Stack.prototype.clear = function() {
    const size = this.getSize();
    this.array.splice(0);
};
