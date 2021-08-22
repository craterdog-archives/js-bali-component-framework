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
 * This abstract class defines the invariant methods that all sequences must inherit.
 */
const utilities = require('../utilities');
const Exception = require('../compositions/Exception').Exception;
const Element = require('./Element').Element;
const Iterator = require('./Iterator').Iterator;


// PUBLIC FUNCTIONS

/**
 * This function creates a new sequence with the specified ancestry and interfaces
 * candidate with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize this sequence.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Stryng} The new sequence.
 */
const Stryng = function(ancestry, interfaces, parameters, debug) {
    Element.call(
        this,
        ancestry.concat('/bali/abstractions/String'),
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
 * This method returns whether or not this sequence has a meaningful value. If the sequence
 * is empty it returns <code>false</code>, otherwise it returns <code>true</code>.
 *
 * @returns {Boolean} Whether or not this sequence has a meaningful value.
 */
Stryng.prototype.toBoolean = function() {
    return this.getSize() > 0;
};


/**
 * This method returns whether or not this sequence contains any items.
 *
 * @returns {Boolean} Whether or not this sequence contains any items.
 */
Stryng.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This abstract method returns the number of items that this sequence has.
 * It must be implemented by a subclass.
 *
 * @returns {Number} The number of items that this sequence has.
 */
Stryng.prototype.getSize = function() {
    const exception = new Exception({
        $module: '/bali/abstractions/String',
        $procedure: '$getSize',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns an object that can be used to iterate over the items in
 * this sequence.  It must be implemented by a subclass.
 * @returns {Iterator} An iterator for this sequence.
 */
Stryng.prototype.getIterator = function() {
    const iterator = new StringIterator(this.getValue(), this.getParameters(), this.debug);
    return iterator;
};


/**
 * This method returns the index of the specified item in this sequence.
 * NOTE: It is tempting when dealing with a sequence that uses an array
 * as an underlying data composition to use the Array.indexOf() method to
 * provide a faster implementation of this method. However, the indexOf()
 * method uses strict equality checks which for items that are objects
 * returns false even when all attributes on each item are the same. Therefore
 * it is better not to override this method in that case.
 *
 * @param {Object} item The item to be looked up.
 * @returns {Number} The index of the item in this sequence.
 */
Stryng.prototype.getIndex = function(item) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/abstractions/String', '$getIndex', '$item', item, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ]);
    }
    const comparator = new utilities.Comparator(undefined, this.debug);
    var index = 0;
    const iterator = this.getIterator();
    while (iterator.hasNext()) {
        const candidate = iterator.getNext();  // the candidate may be a javascript primitive type
        index++;
        if (comparator.compareComponents(candidate, item) === 0) return index;
    }
    return 0;  // not found
};


/**
 * This abstract method retrieves from this sequence the item that is associated with the
 * specified index.  It must be implemented by a subclass.
 *
 * @param {Number} index The index of the desired item.
 * @returns {Object} The item at the position in this sequence.
 */
Stryng.prototype.getItem = function(index) {
    const exception = new Exception({
        $module: '/bali/abstractions/String',
        $procedure: '$getItem',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns a new sequence containing the items in the specified range.  It
 * must be implemented by a subclass.
 *
 * @param {Range} range A range depicting the indices of the first and last items to be retrieved.
 * @returns {Stryng} A new sequence containing the requested items.
 */
Stryng.prototype.getItems = function(range) {
    const exception = new Exception({
        $module: '/bali/abstractions/String',
        $procedure: '$getItems',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method converts negative item indexes into their corresponding positive
 * indexes and then checks to make sure the index is in the range 1..size. NOTE: if the
 * sequence is empty then the resulting index will be zero.
 *
 * The mapping between indexes is as follows:
 * <pre>
 * Negative Indexes:   -N      -N + 1     -N + 2     -N + 3   ...   -1
 * Positive Indexes:    1         2          3          4     ...    N
 * </pre>
 *
 * @param {Number} index The index to be normalized [-N..N].
 * @returns {Number} The normalized [1..N] index.
 */
Stryng.prototype.normalizedIndex = function(index) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/abstractions/String', '$normalizedIndex', '$index', index, [
            '/javascript/Number'
        ]);
    }
    const size = this.getSize();
    if (index > size || index < -size) {
        const exception = new Exception({
            $module: '/bali/abstractions/String',
            $procedure: '$normalizedIndex',
            $exception: '$invalidIndex',
            $index: index,
            $range: '' + -size + '..' + size,
            $text: 'The index is out of range.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
    if (index < 0) index = index + size + 1;
    return index;
};


// PRIVATE CLASSES

const StringIterator = function(string, parameters, debug) {
    Iterator.call(
        this,
        ['/bali/elements/StringIterator'],
        parameters,
        debug
    );
    var slot = 0;  // the slot before the first number
    const size = string.length;  // static so we can cache it here

    this.toStart = function() {
        slot = 0;  // the slot before the first number
    };

    this.toSlot = function(newSlot) {
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
