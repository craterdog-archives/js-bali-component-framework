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

/*
 * This abstract class defines the invariant methods that all iterators must support.
 */
const moduleName = '/bali/abstractions/Iterator';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;


/**
 * This constructor creates a new iterator component that can be used to iterate over the items
 * in a sequence.
 *
 * The indexing of a sequence is ordinal based and allows positive indexes starting at the
 * beginning of the sequence, or negative indexes starting at the end of the sequence as follows:
 * <pre>
 *             1          2          3            N
 *         [item 1] . [item 2] . [item 3] ... [item N]
 *            -N       -(N-1)     -(N-2)         -1
 * </pre>
 *
 * The iterator sits in the slots that reside between each item in the sequence:
 * <pre>
 *         [item 1] . [item 2] . [item 3] ... [item N]
 *       ^          ^          ^                       ^
 *     slot 0     slot 1     slot 2                  slot N
 * </pre>
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
 * @param {Array} ancestry An array of type names that make up the ancestry for the iterator.
 * @param {Sequential} sequence The sequence over which the iterator will operate.
 * @returns {Iterator} The new iterator.
 */
const Iterator = function(ancestry, sequence, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        [],
        undefined,  // must be undefined to avoid infinite loop
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Iterator', '$sequence', sequence, [
            '/bali/interfaces/Sequential'
        ]);
    }

    this.getSequence = function() { return sequence; };

    this.getSlot = function() {
        const exception = new Exception({
            $module: moduleName,
            $procedure: '$getSlot',
            $exception: '$abstractMethod',
            $text: '"This abstract method must be implemented by each subclass."'
        }, undefined, this.debug);
        throw exception;
    };

    return this;
};
Iterator.prototype = Object.create(Component.prototype);
Iterator.prototype.constructor = Iterator;
exports.Iterator = Iterator;


/**
 * This method moves the iterator to the specified slot between items.
 *
 * @param {Number} slot The number of the target slot.
 */
Iterator.prototype.toSlot = function(slot) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$toStart',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method moves the iterator to the slot before the first item.
 */
Iterator.prototype.toStart = function() {
    this.toSlot(0);
};


/**
 * This method moves the iterator to the slot after the last item.
 */
Iterator.prototype.toEnd = function() {
    this.toSlot(-1);
};


/**
 * This method determines whether or not there is an item before the current
 * slot.
 *
 * @returns {Boolean} Whether or not there is an item before the current slot.
 */
Iterator.prototype.hasPrevious = function() {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$hasPrevious',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method returns the item before the current slot.
 *
 * @returns {Component} The item before the current slot.
 */
Iterator.prototype.getPrevious = function() {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$getPrevious',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method determines whether or not there is an item after the current
 * slot.
 *
 * @returns {Boolean} Whether or not there is an item after the current slot.
 */
Iterator.prototype.hasNext = function() {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$hasNext',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method returns the item after the current slot.
 *
 * @returns {Component} The item after the current slot.
 */
Iterator.prototype.getNext = function() {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$getNext',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};

