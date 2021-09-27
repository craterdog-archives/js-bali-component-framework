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
 * This abstract class defines the invariant methods that all strings must support.
 */
const moduleName = '/bali/abstractions/String';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;
const Element = require('./Element').Element;
const Iterator = require('./Iterator').Iterator;


/**
 * This constructor creates a new string with the specified ancestry and interfaces
 * candidate with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize this string.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Stryng} The new string.
 */
const Stryng = function(ancestry, interfaces, parameters, debug) {
    Element.call(
        this,
        ancestry.concat(moduleName),
        interfaces.concat('/bali/interfaces/Sequential'),
        parameters,
        debug
    );
    return this;
};
Stryng.prototype = Object.create(Element.prototype);
Stryng.prototype.constructor = Stryng;
exports.String = Stryng;


// PUBLIC METHODS

/**
 * This method returns whether or not this string has a meaningful value. If the string
 * is empty it returns <code>false</code>, otherwise it returns <code>true</code>.
 *
 * @returns {Boolean} Whether or not this string has a meaningful value.
 */
Stryng.prototype.toBoolean = function() {
    return this.getSize() > 0;
};


/**
 * This method returns whether or not this string contains any items.
 *
 * @returns {Boolean} Whether or not this string contains any items.
 */
Stryng.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This method returns the number of items that this string has.
 * It must be implemented by a subclass.
 *
 * @returns {Number} The number of items that this string has.
 */
Stryng.prototype.getSize = function() {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$getSize',
        $exception: '$abstractMethod',
        $text: 'This abstract method must be implemented by each subclass.'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method returns an agent that can be used to iterate over the items in
 * a string element.  It must be implemented by a subclass.
 * @returns {Iterator} An iterator for this string element.
 */
Stryng.prototype.getIterator = function() {
    const iterator = new StringIterator(this, this.debug);
    return iterator;
};


/**
 * This method retrieves from this string the item that is associated with the
 * specified index.  It must be implemented by a subclass.
 *
 * @param {Number} index The index of the desired item.
 * @returns {Object} The item at the position in this string.
 */
Stryng.prototype.getItem = function(index) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$getItem',
        $exception: '$abstractMethod',
        $text: 'This abstract method must be implemented by each subclass.'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method returns a new string containing the items in the specified range.  It
 * must be implemented by a subclass.
 *
 * @param {Range} range A range depicting the indices of the first and last items to be retrieved.
 * @returns {Stryng} A new string containing the requested items.
 */
Stryng.prototype.getItems = function(range) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$getItems',
        $exception: '$abstractMethod',
        $text: 'This abstract method must be implemented by each subclass.'
    }, undefined, this.debug);
    throw exception;
};


// PRIVATE CLASSES

const StringIterator = function(element, debug) {
    Iterator.call(
        this,
        ['/bali/abstractions/StringIterator'],
        element,
        debug
    );
    const string = element.getValue();
    const size = string.length;  // static so we can cache it here
    var slot = 0;

    this.getSlot = function() {
        return slot;
    };

    this.toStart = function() {
        slot = 0;  // the slot before the first number
    };

    this.toSlot = function(newSlot) {
        if (this.debug > 1) {
            this.validateArgument('$toSlot', '$newSlot', newSlot, [
                '/javascript/Number'
            ]);
        }
        if (newSlot > size) newSlot = size;
        if (newSlot < -size) newSlot = -size;
        if (newSlot < 0) newSlot = newSlot + size + 1;
        slot = newSlot;
    };

    this.toEnd = function() {
        slot = size;  // the slot after the last number
    };

    this.hasPrevious = function() {
        return slot > 0;
    };

    this.hasNext = function() {
        return slot < size;
    };

    this.getPrevious = function() {
        if (!this.hasPrevious()) return;
        return string[--slot];
    };

    this.getNext = function() {
        if (!this.hasNext()) return;
        return string[slot++];
    };

    return this;
};
StringIterator.prototype = Object.create(Iterator.prototype);
StringIterator.prototype.constructor = StringIterator;
