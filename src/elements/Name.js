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
 * This element class captures the state and methods associated with a
 * name string element.
 */
const abstractions = require('../abstractions');
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new name element using the specified value.
 * 
 * @param {Array} value An array containing the parts of the name string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new name string element.
 */
function Name(value, parameters) {
    abstractions.Element.call(this, '$Name', parameters);

    this.validateType('/bali/elements/Name', '$Name', '$value', value, [
        '/javascript/Array'
    ]);
    this.validateType('/bali/elements/Name', '$Name', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);

    if (!Array.isArray(value) || value.length === 0) {
        throw new Exception({
            $module: '/bali/elements/Name',
            $procedure: '$Name',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid name value was passed to the constructor.'
        });
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value.slice(0); };  // return a copy

    return this;
}
Name.prototype = Object.create(abstractions.Element.prototype);
Name.prototype.constructor = Name;
exports.Name = Name;


// PUBLIC METHODS

/**
 * This function determines whether or not this component supports iteration:
 * <pre>
 *  * iterator
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports iteration.
 */
Name.prototype.isSequential = function() {
    return true;
};


/**
 * This function determines whether or not this component supports concatenation operations:
 * <pre>
 *  * concatenation
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports concatenation operations.
 */
Name.prototype.isChainable = function() {
    return true;
};


/**
 * This method returns whether or not this name string has a meaningful value. Name
 * strings always have a meaningful value.
 * 
 * @returns {Boolean} Whether or not this name string has a meaningful value.
 */
Name.prototype.toBoolean = function() {
    return true;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Name.prototype.acceptVisitor = function(visitor) {
    visitor.visitName(this);
};


/**
 * This method returns whether or not this name string has any parts.
 * 
 * @returns {Boolean} Whether or not this name string has any parts.
 */
Name.prototype.isEmpty = function() {
    return false;  // a name string requires at least one part
};


/**
 * This method returns the number of parts that this name string has.
 * 
 * @returns {Number} The number of parts that this name string has.
 */
Name.prototype.getSize = function() {
    return this.getValue().length;
};


/**
 * This method returns an object that can be used to iterate over the parts in
 * this name string.
 * @returns {Iterator} An iterator for this name string.
 */
Name.prototype.getIterator = function() {
    const iterator = new NameIterator(this.getValue());
    return iterator;
};


// PUBLIC FUNCTIONS

/**
 * This function returns a new name string that contains the bytes from the second name
 * concatenated onto the end of the first name string.
 *
 * @param {Name} first The first name string to be operated on.
 * @param {Name} second The second name string to be operated on.
 * @returns {Name} The resulting name string.
 */
Name.concatenation = function(first, second) {
    abstractions.Element.validate('/bali/elements/Name', '$concatenation', '$first', first, [
        '/bali/elements/Name'
    ]);
    abstractions.Element.validate('/bali/elements/Name', '$concatenation', '$second', second, [
        '/bali/elements/Name'
    ]);
    const parts1 = first.getValue();
    const parts2 = second.getValue();
    const parts = parts1.concat(parts2);
    return new Name(parts);
};


// PRIVATE CLASSES

function NameIterator(parts) {
    this.slot = 0;  // the slot before the first part
    this.size = parts.length;  // static so we can cache it here
    this.parts = parts;
    return this;
}
NameIterator.prototype.constructor = NameIterator;


NameIterator.prototype.toStart = function() {
    this.slot = 0;  // the slot before the first part
};


NameIterator.prototype.toSlot = function(slot) {
    this.slot = slot;
};


NameIterator.prototype.toEnd = function() {
    this.slot = this.size;  // the slot after the last part
};


NameIterator.prototype.hasPrevious = function() {
    return this.slot > 0;
};


NameIterator.prototype.hasNext = function() {
    return this.slot < this.size;
};


NameIterator.prototype.getPrevious = function() {
    if (!this.hasPrevious()) return;
    return this.parts[--this.slot];
};


NameIterator.prototype.getNext = function() {
    if (!this.hasNext()) return;
    return this.parts[this.slot++];
};
