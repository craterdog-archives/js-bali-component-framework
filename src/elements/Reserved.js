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
 * reserved identifier.
 */
const utilities = require('../utilities');
const types = require('../types');
const Exception = require('../structures/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new reserved identifier using the specified value.
 *
 * @param {String} value The value of the reserved identifier.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Reserved} The new reserved identifier.
 */
const Reserved = function(value, parameters, debug) {
    types.Element.call(
        this,
        ['/bali/elements/Reserved'],
        ['/bali/interfaces/Sequential'],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Reserved', '$Reserved', '$value', value, [
            '/javascript/String'
        ]);
    }

    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*(-[0-9]+)?$/g.test(value)) {
        const exception = new Exception({
            $module: '/bali/elements/Reserved',
            $procedure: '$Reserved',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid reserved symbol value was passed to the constructor.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
};
Reserved.prototype = Object.create(types.Element.prototype);
Reserved.prototype.constructor = Reserved;
exports.Reserved = Reserved;


// PUBLIC METHODS

/**
 * This method returns whether or not this reserved symbol has a meaningful value. Reserved
 * symbols always have a meaningful value.
 *
 * @returns {Boolean} Whether or not this reserved symbol has a meaningful value.
 */
Reserved.prototype.toBoolean = function() {
    return true;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Reserved.prototype.acceptVisitor = function(visitor) {
    visitor.visitReserved(this);
};


/**
 * This method returns whether or not this reserved symbol is empty.
 *
 * @returns {Boolean} Whether or not this reserved symbol is empty.
 */
Reserved.prototype.isEmpty = function() {
    return false;  // a reserved symbol may never be empty
};


/**
 * This method returns the number of characters in this reserved symbol.
 *
 * @returns {Number} The number of characters in this reserved symbol.
 */
Reserved.prototype.getSize = function() {
    return this.getValue().length;
};


/**
 * This method returns an object that can be used to iterate over the characters in
 * this reserved symbol.
 * @returns {Iterator} An iterator for this reserved symbol.
 */
Reserved.prototype.getIterator = function() {
    const iterator = new ReservedIterator(this.getValue(), this.getParameters(), this.debug);
    return iterator;
};


// PRIVATE CLASSES

const ReservedIterator = function(symbol, parameters, debug) {
    types.Iterator.call(
        this,
        ['/bali/elements/ReservedIterator'],
        [],
        parameters,
        debug
    );
    var slot = 0;  // the slot before the first character
    const size = symbol.length;  // static so we can cache it here

    this.toStart = function() {
        slot = 0;  // the slot before the first character
    };

    this.toSlot = function(newSlot) {
        slot = newSlot;
    };

    this.toEnd = function() {
        slot = size;  // the slot after the last character
    };

    this.hasPrevious = function() {
        return slot > 0;
    };

    this.hasNext = function() {
        return slot < size;
    };

    this.getPrevious = function() {
        if (!this.hasPrevious()) return;
        return symbol[--slot];
    };

    this.getNext = function() {
        if (!this.hasNext()) return;
        return symbol[slot++];
    };

    return this;
};
ReservedIterator.prototype = Object.create(types.Iterator.prototype);
ReservedIterator.prototype.constructor = ReservedIterator;
