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
const types = require('../types');
const structures = require('../structures');

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
 * @param {Number} debug A number in the range [0..3].
 * @returns {Queue} The new queue.
 */
const Queue = function(parameters, debug) {
    parameters = parameters || {$type: '/bali/collections/Queue/v1'};
    types.Collection.call(
        this,
        ['/bali/collections/Queue'],
        [],
        parameters,
        debug
    );

    // the capacity and array are private attributes so methods that use them are
    // defined in the constructor
    var capacity = this.getParameter('$capacity') || 1024;  // default capacity
    if (capacity.isComponent) capacity = capacity.toNumber();
    const array = [];

    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.getSize = function() {
        return array.length;
    };

    this.headItem = function() {
        if (array.length > 0) {
            return array[0];
        }
    };

    this.addItem = function(item) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Queue', '$addItem', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/types/Component'
            ]);
        }
        if (array.length === capacity) {
            const exception = new structures.Exception({
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
Queue.prototype = Object.create(types.Collection.prototype);
Queue.prototype.constructor = Queue;
exports.Queue = Queue;
