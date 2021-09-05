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
 * This utility class implements an iterator for arrays.  The indexing
 * is ordinal based and allows positive indexes starting at the beginning
 * of the list or negative indexes starting at the end of the list as
 * follows:
 * <pre>
 *             1          2          3            N
 *         [item 1] . [item 2] . [item 3] ... [item N]
 *            -N       -(N-1)     -(N-2)         -1
 * </pre>
 *
 * The iterator sits in slots that reside between each item:
 * <pre>
 *         [item 1] . [item 2] . [item 3] ... [item N]
 *       ^          ^          ^                       ^
 *     slot 0     slot 1     slot 2                  slot N
 * </pre>
 */
const agents = require('../agents');
const Component = require('./Component').Component;
//const Exception = require('../trees/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new array iterator that allows the items in the array
 * to be iterated over in either direction.
 * This function creates a new iterator component with the specified ancestry and interfaces
 * with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Iterator} The new iterator.
 */
const Iterator = function(ancestry, parameters, debug) {
    Component.call(
        this,
        ancestry.concat('/bali/abstractions/Iterator'),
        [],
        parameters,
        debug
    );
    return this;
};
Iterator.prototype = Object.create(Component.prototype);
Iterator.prototype.constructor = Iterator;
exports.Iterator = Iterator;

Iterator.prototype.toStart = function() {
    const exception = new agents.Exception({
        $module: '/bali/abstractions/Iterator',
        $procedure: '$toStart',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};

Iterator.prototype.toSlot = function(slot) {
    const exception = new agents.Exception({
        $module: '/bali/abstractions/Iterator',
        $procedure: '$toStart',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};

Iterator.prototype.toEnd = function() {
    const exception = new agents.Exception({
        $module: '/bali/abstractions/Iterator',
        $procedure: '$toStart',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};

Iterator.prototype.hasPrevious = function() {
    const exception = new agents.Exception({
        $module: '/bali/abstractions/Iterator',
        $procedure: '$toStart',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};

Iterator.prototype.hasNext = function() {
    const exception = new agents.Exception({
        $module: '/bali/abstractions/Iterator',
        $procedure: '$toStart',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};

Iterator.prototype.getPrevious = function() {
    const exception = new agents.Exception({
        $module: '/bali/abstractions/Iterator',
        $procedure: '$toStart',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};

Iterator.prototype.getNext = function() {
    const exception = new agents.Exception({
        $module: '/bali/abstractions/Iterator',
        $procedure: '$toStart',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};
