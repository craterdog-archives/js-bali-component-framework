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


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new tag element.
 * The allowed ways to call it include:
 * <pre><code>
 * new Tag()
 * new Tag(numberOfBytes)  // e.g. new Tag(16)
 * new Tag(value)  // e.g. new Tag('#P5LG5KX4VZLW5W4A70F6HJ5PTCX1XQA8')
 * </code></pre>
 * 
 * 
 * @param {Number|String} optionalSizeOrValue An optional parameter defining
 * the size of the new tag or the value it should represent.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Tag} The new tag element.
 */
function Tag(optionalSizeOrValue, parameters) {
    abstractions.Element.call(this, utilities.types.TAG, parameters);
    var bytes;

    const type = typeof optionalSizeOrValue;
    switch (type) {
        case 'undefined':
            this.size = 20;  // default size
            bytes = utilities.random.bytes(this.size);
            this.value = utilities.codex.base32Encode(bytes);
            break;
        case 'number':
            this.size = optionalSizeOrValue;
            bytes = utilities.random.bytes(this.size);
            this.value = utilities.codex.base32Encode(bytes);
            break;
        case 'string':
            this.value = optionalSizeOrValue;
            bytes = utilities.codex.base32Decode(this.value);
            this.size = bytes.length;
            break;
        default:
            throw new Error('BUG: An invalid tag value type was passed to the constructor: ' + type);
    }
    this.hash = utilities.codex.bytesToInteger(bytes);  // the first four bytes work perfectly
    this.setSource(this.toLiteral());
    this.setToComplex();  // tags should never be inlined
    return this;
}
Tag.prototype = Object.create(abstractions.Element.prototype);
Tag.prototype.constructor = Tag;
exports.Tag = Tag;


/**
 * This constructor creates an immutable instance of a tag using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the tag.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Tag} The new tag.
 */
Tag.fromLiteral = function(literal, parameters) {
    const value = literal.slice(1);  // remove the leading '#'
    const tag = new Tag(value, parameters);
    return tag;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Boolean} asCanonical Whether or not the element should be formatted using its
 * default format.
 * @returns {String} The corresponding literal string representation.
 */
Tag.prototype.toLiteral = function(asCanonical) {
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
