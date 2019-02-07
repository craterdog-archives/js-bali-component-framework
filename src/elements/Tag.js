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
 * tag element.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTOR

/**
 * This constructor creates a new tag element using the specified value.
 * 
 * @param {Number|String} value An optional parameter defining the size of a new random
 * tag or the value it should represent.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Tag} The new tag element.
 */
function Tag(value, parameters) {
    abstractions.Element.call(this, utilities.types.TAG, parameters);
    value = value || 20;  // the default number of bytes
    var bytes, numberOfBytes, hash;
    switch (typeof value) {
        case 'number':
            numberOfBytes = value;
            bytes = utilities.random.bytes(value);
            value = utilities.codex.base32Encode(bytes);
            break;
        case 'string':
            bytes = utilities.codex.base32Decode(value);
            numberOfBytes = bytes.length;
            break;
    }
    hash = utilities.codex.bytesToInteger(bytes);  // the first four bytes work perfectly

    // since this element is immutable the attributes must be read-only
    this.getNumberOfBytes = function() { return numberOfBytes; };
    this.getValue = function() { return value; };
    this.getHash = function() { return hash; };

    return this;
}
Tag.prototype = Object.create(abstractions.Element.prototype);
Tag.prototype.constructor = Tag;
exports.Tag = Tag;


// PUBLIC METHODS

/**
 * This method returns whether or not this tag has a meaningful value. Tags always have
 * a meaningful value.
 * 
 * @returns {Boolean} Whether or not this tag has a meaningful value.
 */
Tag.prototype.toBoolean = function() {
    return true;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Tag.prototype.acceptVisitor = function(visitor) {
    visitor.visitTag(this);
};


/**
 * This method returns the raw byte string for the tag element.
 * 
 * @returns {String} The raw byte string for the tag element.
 */
Tag.prototype.getBytes = function() {
    // not called very often so save space by doing it on demand
    return utilities.codex.base32Decode(this.getValue());
};
