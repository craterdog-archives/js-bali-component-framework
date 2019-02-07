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

    // the capacity and array are private attributes so methods that use it are
    // defined in the constructor
    var capacity = 1024;  // default capacity
    if (parameters) {
        const value = parameters.getValue('$capacity', 2);
        if (value) capacity = value.toNumber();
    }
    const array = [];

    this.acceptVisitor = function(visitor) {
        visitor.visitStack(this);
    };

    this.toArray = function() {
        return array.slice();  // copy the array
    };
    
    this.getSize = function() {
        return array.length;
    };
    
    this.getIterator = function() {
        return new utilities.Iterator(array.slice().reverse());
    };
    
    this.addItem = function(item) {
        if (array.length < capacity) {
            item = this.convert(item);
            array.push(item);
            return true;
        }
        throw new utilities.Exception({
            $exception: '$resourceLimit',
            $type: '$Stack',
            $procedure: '$addItem',
            $capacity: capacity,
            $message: '"The stack has reached its maximum capacity."'
        });
    };
    
    this.removeItem = function() {
        if (array.length > 0) {
            return array.pop();
        }
        throw new Error('BUG: Attempted to pop an item off of an empty stack.');
    };
    
    this.getTop = function() {
        if (array.length > 0) {
            return array.peek();
        }
        throw new Error('BUG: Attempted to access the top item of an empty stack.');
    };
    
    this.clear = function() {
        array.splice(0);
    };
    
    return this;
}
Stack.prototype = Object.create(abstractions.Collection.prototype);
Stack.prototype.constructor = Stack;
exports.Stack = Stack;
