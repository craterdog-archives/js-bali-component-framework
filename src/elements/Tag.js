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
 * @param {Number|String} value An optional parameter defining the size of the new tag
 * or the value it should represent.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Tag} The new tag element.
 */
function Tag(value, parameters) {
    abstractions.Element.call(this, utilities.types.TAG, parameters);
    value = value || 20;  // the default number of bytes
    var bytes;
    switch (typeof value) {
        case 'number':
            bytes = utilities.random.bytes(value);
            this.value = utilities.codex.base32Encode(bytes);
            this.size = value;
            break;
        case 'string':
            bytes = utilities.codex.base32Decode(value);
            this.value = value;
            this.size = bytes.length;
            break;
    }
    this.hash = utilities.codex.bytesToInteger(bytes);  // the first four bytes work perfectly
    this.setSource(this.toLiteral(parameters));
    this.setToComplex();  // tags should never be inlined
    return this;
}
Tag.prototype = Object.create(abstractions.Element.prototype);
Tag.prototype.constructor = Tag;
exports.Tag = Tag;


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Parameters} parameters Any parameters that are needed for formatting.
 * @returns {String} The corresponding literal string representation.
 */
Tag.prototype.toLiteral = function(parameters) {
    const literal = '#' + this.value;  // add the leading '#'
    return literal;
};


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
 * This method returns the raw byte string for the tag element.
 * 
 * @returns {String} The raw byte string for the tag element.
 */
Tag.prototype.getBytes = function() {
    // not called very often so do it on demand
    return utilities.codex.base32Decode(this.value.substring(1));
};


/**
 * This method returns number of bytes in the tag element.
 * 
 * @returns {Number} The number of bytes in the tag element.
 */
Tag.prototype.getNumberOfBytes = function() {
    return this.size;
};


/**
 * This method returns the hash value for the tag element.
 * 
 * @returns {Number} The the hash value for the tag element.
 */
Tag.prototype.getHash = function() {
    return this.hash;
};
