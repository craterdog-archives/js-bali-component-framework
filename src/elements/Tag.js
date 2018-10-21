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
var types = require('../abstractions/Types');
var codex = require('../utilities/Codex');
var Element = require('../abstractions/Element').Element;


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
    Element.call(this, types.TAG, parameters);
    var bytes;

    var type = typeof optionalSizeOrValue;
    switch (type) {
        case 'undefined':
            this.size = 20;  // default size
            bytes = codex.randomBytes(this.size);
            this.value = '#' + codex.base32Encode(bytes);
            break;
        case 'number':
            this.size = optionalSizeOrValue;
            bytes = codex.randomBytes(this.size);
            this.value = '#' + codex.base32Encode(bytes);
            break;
        case 'string':
            this.value = optionalSizeOrValue;
            bytes = codex.base32Decode(this.value.substring(1));
            this.size = bytes.length;
            break;
        default:
            throw new Error('TAG: An invalid type was passed to the constructor: ' + type);
    }
    this.hash = codex.bytesToInteger(bytes);  // the first four bytes work perfectly
    this.setSource(this.value);
    this.setToComplex();  // tags should never be inlined
    return this;
}
Tag.prototype = Object.create(Element.prototype);
Tag.prototype.constructor = Tag;
exports.Tag = Tag;


/**
 * This method compares two tags for ordering.
 * 
 * @param {Tag} that The other tag to be compared with. 
 * @returns {Number} 1 if greater, 0 if equal, and -1 if less.
 */
Tag.prototype.comparedTo = function(that) {
    var thisBytes = this.value.getBytes();
    var thatBytes = that.value.getBytes();
    return thisBytes.localeCompare(thatBytes);
};


/**
 * This method returns the raw byte string for the tag element.
 * 
 * @returns {String} The raw byte string for the tag element.
 */
Tag.prototype.getBytes = function() {
    // not called very often so do it on demand
    return codex.base32Decode(this.value.substring(1));
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
