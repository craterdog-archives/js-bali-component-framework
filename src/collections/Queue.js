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

/*
 * This function defines a missing stack function for the standard Array class.
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
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @param {Number} debug A number in the range [0..3].
 * @returns {Queue} The new queue.
 */
function Queue(parameters, debug) {
    parameters = parameters || new composites.Parameters({
        $type: '/bali/collections/Queue/v1'
    }, debug);
    abstractions.Collection.call(this, '$Queue', parameters, debug);

    // the capacity and array are private attributes so methods that use it are
    // defined in the constructor
    var capacity = 1024;  // default capacity
    if (parameters) {
        const value = parameters.getValue('$capacity');
        if (value) capacity = value.toNumber();
    }
    const array = [];

    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.getSize = function() {
        return array.length;
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
                '/bali/abstractions/Component'
            ]);
        }
        if (array.length === capacity) {
            const exception = new composites.Exception({
                $module: '/bali/collections/Queue',
                $procedure: '$addItem',
                $exception: '$resourceLimit',
                $capacity: capacity,
                $text: 'The queue has reached its maximum capacity.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
        item = this.convert(item, this.debug);
        array.push(item);
        return true;
        return false;
    };

    this.addItems = function(items) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Queue', '$addItems', '$items', items, [
                '/javascript/Undefined',
                '/javascript/Array',
                '/bali/interfaces/Sequential'
            ]);
        }
        var count = 0;
        items = items || undefined;  // normalize nulls to undefined
        if (items) {
            if (Array.isArray(items)) {
                items.forEach(function(item) {
                    item = this.convert(item, this.debug);
                    if (item.isType('$Association')) {
                        item = item.getValue();
                    }
                    this.addItem(item);
                    count++;
                }, this);
            } else if (items.isSequential()) {
                const iterator = items.getIterator();
                while (iterator.hasNext()) {
                    var item = iterator.getNext();
                    item = this.convert(item, this.debug);
                    if (item.isType('$Association')) {
                        item = item.getValue();
                    }
                    this.addItem(item);
                    count++;
                }
            } else if (typeof items === 'object') {
                const keys = Object.keys(items);
                keys.forEach(function(key) {
                    this.addItem(items[key]);
                    count++;
                }, this);
            }
        }
        return count;
    },

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
