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
 * entity on an empty stack is considered a bug in the calling code and a runtime exception
 * is thrown.  The implementation dynamically scales up and down the size of the underlying
 * data structures as the number items changes over time.
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;


/*
 * This function defines a missing stack function for the standard Array class.
 * The push(item) and pop() methods are already defined.
 */
Array.prototype.peek = function() {
    return this[this.length - 1];
};


exports.fromScratch = function(parameters) {
    var stack = new Stack(parameters);
    return stack;
};


exports.fromCollection = function(collection, parameters) {
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
        case 'Set':
        case 'Stack':
            iterator = collection.iterator();
            while (iterator.hasNext()) {
                stack.pushItem(iterator.getNext());
            }
            break;
        default:
            throw new Error('STACK: A stack cannot be initialized using a collection of type: ' + type);
    }
    return stack;
};


/**
 * The constructor creates a new empty stack.
 * 
 * @param {Collection} parameters Optional parameters used to parameterize this component. 
 * @returns {Stack} The new stack.
 */
function Stack(parameters) {
    Composite.call(this, types.STACK, parameters);
    this.capacity = 1024;
    this.array = [];
    this.length += 2;  // account for the '{' '}' delimiters
    return this;
}
Stack.prototype = Object.create(Composite.prototype);
Stack.prototype.constructor = Stack;


// PUBLIC METHODS

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
 * This method returns an array containing the items on this stack.
 * 
 * @returns {Array} An array containing the items on this stack.
 */
Stack.prototype.toArray = function() {
    return this.array.slice();  // copy the array
};


/**
 * This method removes all items from this stack.
 */
Stack.prototype.removeAll = function() {
    var size = this.getSize();
    if (size > 1) this.length -= (size - 1) * 2;  // account for all the ', ' separators
    this.array.splice(0);
};


/**
 * This method pushes a new item onto the top of this stack.
 *
 * @param {Object} item The new item to be added.
 */
Stack.prototype.pushItem = function(item) {
    item = Composite.asComponent(item);
    if (this.array.length < this.capacity) {
        this.array.push(item);
        this.length += item.length;
    if (this.getSize() > 1) this.length += 2;  // account for the ', ' separator
    } else {
        throw new Error('STACK: Attempted to push an item onto a full stack.');
    }
};


/**
 * This method pops the top item off of this stack.  If this stack is empty
 * an exception is thrown.
 *
 * @returns {Object} The top item from this stack.
 */
Stack.prototype.popItem = function() {
    var item;
    var size = this.array.length;
    if (size > 0) {
        item = this.array.pop();
        this.length -= item.length;
        if (this.getSize() > 0) this.length -= 2;  // account for the ', ' separator
    } else {
        throw new Error('STACK: Attempted to pop the top item of an empty stack.');
    }
    return item;
};


/**
 * This method returns a reference to the top item on this stack without
 * removing it from this stack.  If this stack is empty an exception is thrown.
 *
 * @returns {Object} The top item on this stack.
 */
Stack.prototype.getTop = function() {
    var item = null;
    var size = this.array.length;
    if (size > 0) {
        item = this.array.peek();
    } else {
        throw new Error('STACK: Attempted to access the top item of an empty stack.');
    }
    return item;
};
