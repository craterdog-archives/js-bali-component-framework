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
const moduleName = '/bali/collections/Queue';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const agents = require('../agents');


/*
 * This method defines a missing stack function for the standard Array class.
 * The push(item) and pop() methods are already defined.
 */
Array.prototype.peek = function() {
    return this[this.length - 1];
};


/**
 * This constructor creates a new queue component with optional parameters that are
 * used to parameterize its type.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {Object} parameters Optional parameters used to parameterize this collection.
 * @returns {Queue} The new queue.
 */
const Queue = function(parameters, debug) {
    abstractions.Collection.call(
        this,
        [ moduleName ],
        [],
        parameters,
        debug
    );
    if (!this.getParameter('$type')) this.setParameter('$type', '/nebula/collections/Queue/v1');

    // the capacity and array are private attributes so methods that use them are
    // defined in the constructor
    var capacity = this.getParameter('$capacity') || 1024;  // default capacity
    if (capacity.isComponent) capacity = capacity.toInteger();
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
            this.validateArgument('$addItem', '$item', item, [
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
            const exception = new abstractions.Exception({
                $module: moduleName,
                $procedure: '$addItem',
                $exception: '$resourceLimit',
                $capacity: capacity,
                $text: '"The queue has reached its maximum capacity."'
            }, undefined, this.debug);
            throw exception;
        }
        item = this.componentize(item);
        array.push(item);
        return true;
    };

    this.removeItem = function() {
        if (array.length > 0) return array.splice(0, 1)[0];  // remove the first item in the array
    };

    this.emptyCollection = function() {
        array.splice(0);
        return this;
    };

    return this;
};
Queue.prototype = Object.create(abstractions.Collection.prototype);
Queue.prototype.constructor = Queue;
exports.Queue = Queue;

