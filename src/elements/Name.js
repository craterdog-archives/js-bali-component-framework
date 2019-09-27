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
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new name element using the specified value.
 *
 * @param {Array} value An array containing the parts of the name string.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Symbol} The new name string element.
 */
const Name = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        ['/bali/elements/Name'],
        [
            '/bali/interfaces/Sequential',
            '/bali/interfaces/Chainable'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Name', '$Name', '$value', value, [
            '/javascript/Array'
        ]);
    }

    if (!Array.isArray(value) || value.length === 0) {
        const exception = new Exception({
            $module: '/bali/elements/Name',
            $procedure: '$Name',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid name value was passed to the constructor.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value.slice(); };  // return a copy

    return this;
};
Name.prototype = Object.create(abstractions.Element.prototype);
Name.prototype.constructor = Name;
exports.Name = Name;


// PUBLIC METHODS

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
 * @param {Number} debug A number in the range [0..3].
 * @returns {Name} The resulting name string.
 */
Name.concatenation = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Name', '$concatenation', '$first', first, [
            '/bali/elements/Name'
        ]);
        validator.validateType('/bali/elements/Name', '$concatenation', '$second', second, [
            '/bali/elements/Name'
        ]);
    }
    const parts1 = first.getValue();
    const parts2 = second.getValue();
    const parts = parts1.concat(parts2);
    return new Name(parts, first.getParameters(), debug);
};


// PRIVATE CLASSES

const NameIterator = function(parts) {
    this.slot = 0;  // the slot before the first part
    this.size = parts.length;  // static so we can cache it here
    this.parts = parts;
    return this;
};
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
