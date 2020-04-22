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
const Exception = require('../structures/Exception').Exception;
const Element = require('./Element').Element;


// PUBLIC FUNCTIONS

/**
 * This function creates a new sequence component with the specified ancestry and interfaces
 * candidate with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize this sequence.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Sequence} The new sequence.
 */
const Sequence = function(ancestry, interfaces, parameters, debug) {
    Element.call(
        this,
        ancestry.concat('/bali/types/Sequence'),
        interfaces.concat('/bali/interfaces/Sequential'),
        parameters,
        debug
    );
    return this;
};
Sequence.prototype = Object.create(Element.prototype);
Sequence.prototype.constructor = Sequence;
exports.Sequence = Sequence;


// PUBLIC METHODS

/**
 * This method returns whether or not this sequence has a meaningful value. If the sequence
 * is empty it returns <code>false</code>, otherwise it returns <code>true</code>.
 *
 * @returns {Boolean} Whether or not this sequence has a meaningful value.
 */
Sequence.prototype.toBoolean = function() {
    return this.getSize() > 0;
};


/**
 * This method returns whether or not this sequence component has any subcomponents.
 *
 * @returns {Boolean} Whether or not this sequence component has any subcomponents.
 */
Sequence.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This abstract method returns the number of subcomponents that this sequence component has.
 * It must be implemented by a subclass.
 *
 * @returns {Number} The number of subcomponents that this sequence component has.
 */
Sequence.prototype.getSize = function() {
    const exception = new Exception({
        $module: '/bali/types/Sequence',
        $procedure: '$getSize',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns an object that can be used to iterate over the subcomponents in
 * this sequence component.
 * @returns {Iterator} An iterator for this sequence component.
 */
Sequence.prototype.getIterator = function() {
    const exception = new Exception({
        $module: '/bali/types/Sequence',
        $procedure: '$getIterator',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns the index of the specified item in this sequence.
 * NOTE: It is tempting when dealing with a sequence that uses an array
 * as an underlying data structure to use the Array.indexOf() method to
 * provide a faster implementation of this method. However, the indexOf()
 * method uses strict equality checks which for items that are objects
 * returns false even when all attributes on each item are the same. Therefore
 * it is better not to override this method in that case.
 *
 * @param {Object} item The item to be looked up.
 * @returns {Number} The index of the item in this sequence.
 */
Sequence.prototype.getIndex = function(item) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/types/Sequence', '$getIndex', '$item', item, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/types/Component'
        ]);
    }
    var index = 0;
    const iterator = this.getIterator();
    while (iterator.hasNext()) {
        const candidate = iterator.getNext();
        index++;
        if (candidate.isEqualTo(item)) return index;
    }
    return 0;  // not found
};


/**
 * This abstract method retrieves the item that is associated with the specified index
 * from this sequence. It must be implemented by a subclass.
 *
 * @param {Number} index The index of the desired item.
 * @returns {Component} The item at the position in this sequence.
 */
Sequence.prototype.getItem = function(index) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/types/Sequence', '$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    const iterator = this.getIterator();
    iterator.toSlot(index);
    return iterator.getPrevious();
};


/**
 * This method returns a new sequence containing the items in the specified range.
 *
 * @param {Range} range A range depicting the first and last items to be retrieved.
 * @returns {Sequence} The new sequence containing the requested items.
 */
Sequence.prototype.getItems = function(range) {
    const exception = new Exception({
        $module: '/bali/types/Sequence',
        $procedure: '$getItems',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method converts negative subcomponent indexes into their corresponding positive
 * indexes and then checks to make sure the index is in the range [1..size]. NOTE: if the
 * sequence component is empty then the resulting index will be zero.
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
Sequence.prototype.normalizedIndex = function(index) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/types/Sequence', '$normalizedIndex', '$index', index, [
            '/javascript/Number'
        ]);
    }
    const size = this.getSize();
    if (index > size || index < -size) {
        const exception = new Exception({
            $module: '/bali/types/Sequence',
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
