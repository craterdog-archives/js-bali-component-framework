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
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var Iterator = require('../utilities/Iterator').Iterator;

/*
 * This function defines a missing stack function for the standard Array class.
 * The push(item) and pop() methods are already defined.
 */
Array.prototype.peek = function() {
    return this[this.length - 1];
};


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new stack component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Stack} The new stack.
 */
function Stack(parameters) {
    Composite.call(this, types.STACK, parameters);
    this.capacity = 1024;
    this.array = [];
    this.complexity += 2;  // account for the '[' ']' delimiters
    return this;
}
Stack.prototype = Object.create(Composite.prototype);
Stack.prototype.constructor = Stack;
exports.Stack = Stack;


/**
 * This function creates a new stack using the specified collection to seed the
 * initial items on the stack. The stack may be parameterized by specifying optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Array|Object|Collection} collection The collection containing the initial
 * items to be used to seed the new stack.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Stack} The new stack.
 */
Stack.fromCollection = function(collection, parameters) {
    var stack = new Stack(parameters);
    var iterator;
    var type = collection.constructor.name;
    switch (type) {
        case 'Array':
            collection.forEach(function(item) {
                stack.pushItem(item);
            });
            break;
        case 'List':
            iterator = collection.getIterator();
            while (iterator.hasNext()) {
                stack.pushItem(iterator.getNext());
            }
            break;
        case 'Stack':
            iterator = collection.getIterator();
            // a stack's iterator starts at the top, we need to start at the bottom
            iterator.toEnd();
            while (iterator.hasPrevious()) {
                stack.pushItem(iterator.getPrevious());
            }
            break;
        default:
            throw new Error('STACK: A stack cannot be initialized using a collection of type: ' + type);
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
    var size = this.array.length;
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
    var iterator = new Iterator(this.array.slice().reverse());
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
 * This method pushes a new item onto the top of this stack.
 *
 * @param {Component} item The new item to be added.
 */
Stack.prototype.pushItem = function(item) {
    item = Composite.asComponent(item);
    if (this.array.length < this.capacity) {
        this.array.push(item);
        this.complexity += item.complexity;
    if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
    } else {
        throw new Error('STACK: Attempted to push an item onto a full stack.');
    }
};


/**
 * This method pops the top item off of this stack.  If this stack is empty
 * an exception is thrown.
 *
 * @returns {Component} The top item from this stack.
 */
Stack.prototype.popItem = function() {
    var item;
    var size = this.array.length;
    if (size > 0) {
        item = this.array.pop();
        this.complexity -= item.complexity;
        if (this.getSize() > 0) this.complexity -= 2;  // account for the ', ' separator
    } else {
        throw new Error('STACK: Attempted to pop the top item of an empty stack.');
    }
    return item;
};


/**
 * This method returns a reference to the top item on this stack without
 * removing it from this stack.  If this stack is empty an exception is thrown.
 *
 * @returns {Component} The top item on this stack.
 */
Stack.prototype.topItem = function() {
    var item = null;
    var size = this.array.length;
    if (size > 0) {
        item = this.array.peek();
    } else {
        throw new Error('STACK: Attempted to access the top item of an empty stack.');
    }
    return item;
};


/**
 * This method removes all items from this stack.
 */
Stack.prototype.removeAll = function() {
    var size = this.getSize();
    if (size > 1) this.complexity -= (size - 1) * 2;  // account for all the ', ' separators
    this.array.splice(0);
};
