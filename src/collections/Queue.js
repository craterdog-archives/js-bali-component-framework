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
 * This collection class implements a queue (FIFO) data structure.  Attempting to retrieve
 * an item from an empty queue is considered a bug in the calling code and a runtime exception
 * is thrown.
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
 * This constructor creates a new queue component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Queue} The new queue.
 */
function Queue(parameters) {
    parameters = parameters || new composites.Parameters(new Catalog());
    if (!parameters.getParameter('$Type')) parameters.setParameter('$Type', '/bali/types/Queue/v1');
    abstractions.Collection.call(this, utilities.types.QUEUE, parameters);

    // the capacity and array are private attributes so methods that use it are
    // defined in the constructor
    var capacity = 1024;  // default capacity
    if (parameters) {
        const value = parameters.getParameter('$capacity', 2);
        if (value) capacity = value.toNumber();
    }
    const array = [];

    this.acceptVisitor = function(visitor) {
        visitor.visitQueue(this);
    };

    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.getSize = function() {
        return array.length;
    };

    this.addItem = function(item) {
        if (array.length < capacity) {
            item = this.convert(item);
            array.push(item);
            return true;
        }
        throw new utilities.Exception({
            $module: '$Queue',
            $function: '$addItem',
            $exception: '$resourceLimit',
            $capacity: capacity,
            $text: '"The queue has reached its maximum capacity."'
        });
    };

    this.removeItem = function() {
        if (array.length > 0) return array.splice(0, 1)[0];  // remove the first item in the array
    };

    this.getHead = function() {
        return array[0];
    };

    this.deleteAll = function() {
        array.splice(0);
    };

    return this;
}
Queue.prototype = Object.create(abstractions.Collection.prototype);
Queue.prototype.constructor = Queue;
exports.Queue = Queue;
