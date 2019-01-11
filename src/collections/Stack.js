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
    var capacity = 1024;  // default capacity
    if (parameters) {
        capacity = parameters.getValue(1).toNumber();
    }
    this.capacity = capacity;
    this.array = [];
    this.complexity += 2;  // account for the '[' ']' delimiters
    return this;
}
Stack.prototype = Object.create(abstractions.Collection.prototype);
Stack.prototype.constructor = Stack;
exports.Stack = Stack;


/**
 * This function creates a new stack using the specified sequential object to seed the
 * initial items on the stack. The stack may be parameterized by specifying optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Array|Object|Collection} sequential The sequential object containing the initial
 * items to be used to seed the new stack.
 * @param {Parameters} parameters Optional parameters used to parameterize this stack. 
 * @returns {Stack} The new stack.
 */
Stack.fromSequential = function(sequential, parameters) {
    const stack = new Stack(parameters);
    var iterator;
    if (typeof sequential !== 'object') {
        const type = sequential.constructor.name;
        throw new Error('BUG: A stack cannot be initialized using an object of type: ' + type);
    }
    switch (sequential.type) {
        case utilities.types.CATALOG:
            iterator = sequential.getIterator();
            while (iterator.hasNext()) {
                const association = iterator.getNext();
                stack.addItem(association.value);
            }
            break;
        case utilities.types.LIST:
        case utilities.types.QUEUE:
        case utilities.types.SET:
            iterator = sequential.getIterator();
            while (iterator.hasNext()) {
                stack.addItem(iterator.getNext());
            }
            break;
        case utilities.types.STACK:
            iterator = sequential.getIterator();
            // a stack's iterator starts at the top, and we need to start at the bottom
            iterator.toEnd();
            while (iterator.hasPrevious()) {
                stack.addItem(iterator.getPrevious());
            }
            break;
        default:
            if (Array.isArray(sequential)) {
                sequential.forEach(function(item) {
                    stack.addItem(item);
                });
            } else {
                const keys = Object.keys(sequential);
                keys.forEach(function(key) {
                    stack.addItem(sequential[key]);
                });
            }
    }
    return stack;
};


// PUBLIC METHODS

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
 * This method returns an array containing the items on this stack.
 * 
 * @returns {Array} An array containing the items on this stack.
 */
Stack.prototype.toArray = function() {
    return this.array.slice();  // copy the array
};


/**
 * This method adds a new item onto the top of this stack.
 *
 * @param {Component} item The new item to be added.
 * @returns {Boolean} Whether or not the item was successfully added.
 * @throws {Exception} Attempted to add an item to a full stack.
 */
Stack.prototype.addItem = function(item) {
    item = abstractions.Composite.asComponent(item);
    if (this.array.length < this.capacity) {
        this.array.push(item);
        this.complexity += item.complexity;
        if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
        return true;
    } else {
        const exception = Catalog.fromSequential({
            $exception: '$resourceLimit',
            $type: '$Stack',
            $procedure: '$addItem',
            $capacity: this.capacity,
            $message: '"The stack has reached its maximum capacity."'
        });
        throw new utilities.Exception(exception);
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
        this.complexity -= item.complexity;
        if (this.getSize() > 0) this.complexity -= 2;  // account for the ', ' separator
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
Stack.prototype.removeAll = function() {
    const size = this.getSize();
    if (size > 1) this.complexity -= (size - 1) * 2;  // account for all the ', ' separators
    this.array.splice(0);
};
