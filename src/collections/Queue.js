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
 * This collection class implements a queue (FIFO) data composite.  Attempting to retrieve
 * an item from an empty queue is considered a bug in the calling code and a runtime exception
 * is thrown.
 */
const agents = require('../agents');
const abstractions = require('../abstractions');


/*
 * This method defines a missing stack function for the standard Array class.
 * The push(item) and pop() methods are already defined.
 */
Array.prototype.peek = function() {
    return this[this.length - 1];
};


// PUBLIC FUNCTIONS

/**
 * This function creates a new queue component with optional parameters that are
 * used to parameterize its type.
 *
 * @param {Object} parameters Optional parameters used to parameterize this collection.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Queue} The new queue.
 */
const Queue = function(parameters, debug) {
    parameters = parameters || {$type: '/bali/collections/Queue/v1'};
    abstractions.Collection.call(
        this,
        ['/bali/collections/Queue'],
        [],
        parameters,
        debug
    );

    // the capacity and array are private attributes so methods that use them are
    // defined in the constructor
    var capacity = this.getParameter('$capacity') || 1024;  // default capacity
    if (capacity.isComponent) capacity = capacity.toInteger();
    const array = [];

    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.headItem = function() {
        if (array.length > 0) {
            return array[0];
        }
    };

    this.addItem = function(item) {
        if (this.debug > 1) {
            const validator = new agents.Validator(this.debug);
            validator.validateType('/bali/collections/Queue', '$addItem', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        if (array.length === capacity) {
            const exception = new agents.Exception({
                $module: '/bali/collections/Queue',
                $procedure: '$addItem',
                $exception: '$resourceLimit',
                $capacity: capacity,
                $text: 'The queue has reached its maximum capacity.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
        item = this.componentize(item, this.debug);
        array.push(item);
        return true;
    };

    this.removeItem = function() {
        if (array.length > 0) return array.splice(0, 1)[0];  // remove the first item in the array
    };

    this.removeAll = function() {
        array.splice(0);
    };

    return this;
};
Queue.prototype = Object.create(abstractions.Collection.prototype);
Queue.prototype.constructor = Queue;
exports.Queue = Queue;
