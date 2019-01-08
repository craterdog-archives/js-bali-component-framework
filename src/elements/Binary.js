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
 * binary string element.
 */
const random = require('../utilities/Random');
const codex = require('../utilities/Codex');
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates an immutable instance of a binary string using the base defined
 * in the specified parameters, or base 32 if no parameters are provided.
 * 
 * @constructor
 * @param {Buffer} value The byte buffer the containing the bytes for the binary string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Binary} The new binary string.
 */
function Binary(value, parameters) {
    Element.call(this, types.BINARY, parameters);

    // analyze the value
    if (value === undefined || value === null) value = Buffer.alloc(0);  // default value
    this.value = value;

    this.setSource(this.toLiteral());
    return this;
}
Binary.prototype = Object.create(Element.prototype);
Binary.prototype.constructor = Binary;
exports.Binary = Binary;


/**
 * This constructor creates an immutable instance of a binary string using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the binary string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Binary} The new binary string.
 */
Binary.fromLiteral = function(literal, parameters) {
    var value = literal.slice(1, -1);  // strip off the "'" delimiters
    var base = 32;  // default value
    if (parameters) {
        base = parameters.getValue(1).toNumber();
    }
    switch (base) {
        case 2:
            value = codex.base2Decode(value);
            break;
        case 16:
            value = codex.base16Decode(value);
            break;
        case 32:
            value = codex.base32Decode(value);
            break;
        case 64:
            value = codex.base64Decode(value);
            break;
        default:
            throw new Error('BUG: An invalid base for the binary string was passed to the constructor: ' + base);
    }
    const binary = new Binary(value, parameters);
    return binary;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Boolean} asCanonical Whether or not the element should be formatted using its
 * default format.
 * @returns {String} The corresponding literal string representation.
 */
Binary.prototype.toLiteral = function(asCanonical) {
    var literal;
    var base = 32;  // default value
    if (!asCanonical && this.parameters) {
        base = this.parameters.getValue(1).toNumber();
    }
    switch (base) {
        case 2:
            literal = codex.base2Encode(this.value);
            break;
        case 16:
            literal = codex.base16Encode(this.value);
            break;
        case 32:
            literal = codex.base32Encode(this.value);
            break;
        case 64:
            literal = codex.base64Encode(this.value);
            break;
        default:
            throw new Error('BUG: An invalid binary base value was specified in the parameters: ' + base);
    }
    literal = "'" + literal + "'";
    return literal;
};


/**
 * This method returns whether or not this binary string has any bytes.
 * 
 * @returns {Boolean} Whether or not this binary string has any bytes.
 */
Binary.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This method returns the number of bytes that this binary string has.
 * 
 * @returns {Number} The number of bytes that this binary string has.
 */
Binary.prototype.getSize = function() {
    return this.value.length;
};


/**
 * This method returns an object that can be used to iterate over the bytes in
 * this binary string.
 * @returns {Iterator} An iterator for this binary string.
 */
Binary.prototype.getIterator = function() {
    const iterator = new BufferIterator(this.value);
    return iterator;
};


/**
 * This method returns a formatted base 2 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {String} indentation The indentation string to be prefixed to each line. 
 * @returns {String} The encoded binary string.
 */
Binary.prototype.toBase2 = function(indentation) {
    return "'" + codex.base2Encode(this.value, indentation) + "'";
};


/**
 * This method returns a formatted base 16 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {String} indentation The indentation string to be prefixed to each line. 
 * @returns {String} The encoded binary string.
 */
Binary.prototype.toBase16 = function(indentation) {
    return "'" + codex.base16Encode(this.value, indentation) + "'";
};


/**
 * This method returns a formatted base 32 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {String} indentation The indentation string to be prefixed to each line. 
 * @returns {String} The encoded binary string.
 */
Binary.prototype.toBase32 = function(indentation) {
    return "'" + codex.base32Encode(this.value, indentation) + "'";
};


/**
 * This method returns a formatted base 64 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {String} indentation The indentation string to be prefixed to each line. 
 * @returns {String} The encoded binary string.
 */
Binary.prototype.toBase64 = function(indentation) {
    return "'" + codex.base64Encode(this.value, indentation) + "'";
};


// PUBLIC FUNCTIONS

/**
 * This function returns a new binary string containing the specified number of random bytes.
 * 
 * @param {Number} numberOfBytes The number of random bytes to be created.
 * @returns {Binary} A new binary string containing the specified number of random bytes.
 */
Binary.random = function(numberOfBytes) {
    const buffer = random.bytes(numberOfBytes);
    return new Binary(buffer);
};


/**
 * This function returns a new binary string that is the logical NOT of the bits
 * of the specified binary string.
 *
 * @param {Binary} binary The binary.
 * @returns {Binary} The resulting binary.
 */
Binary.not = function(binary) {
    const length = binary.value.length;
    const buffer = Buffer.alloc(length);
    binary.value.forEach(function(byte, index) {
        buffer[index] = ~byte;
    });
    return new Binary(buffer);
};


/**
 * This function returns a new binary string that is the logical AND of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} binary1 The first binary string.
 * @param {Binary} binary2 The second binary string.
 * @returns {Binary} The resulting binary string.
 */
Binary.and = function(binary1, binary2) {
    var length = Math.max(binary1.value.length, binary2.value.length);
    const buffer = Buffer.alloc(length);
    length = Math.min(binary1.value.length, binary2.value.length);
    for (var index = 0; index < length; index++) {
        buffer[index] = binary1.value[index] & binary2.value[index];
    }
    return new Binary(buffer);
};


/**
 * This function returns a new binary string that is the logical SANS of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} binary1 The first binary string.
 * @param {Binary} binary2 The second binary string.
 * @returns {Binary} The resulting binary string.
 */
Binary.sans = function(binary1, binary2) {
    var length = Math.max(binary1.value.length, binary2.value.length);
    const buffer = Buffer.alloc(length);
    length = Math.min(binary1.value.length, binary2.value.length);
    for (var index = 0; index < length; index++) {
        buffer[index] = binary1.value[index] & ~binary2.value[index];
    }
    return new Binary(buffer);
};


/**
 * This function returns a new binary string that is the logical OR of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} binary1 The first binary string.
 * @param {Binary} binary2 The second binary string.
 * @returns {Binary} The resulting binary string.
 */
Binary.or = function(binary1, binary2) {
    var length = Math.max(binary1.value.length, binary2.value.length);
    const buffer = Buffer.alloc(length);
    length = Math.min(binary1.value.length, binary2.value.length);
    for (var index = 0; index < length; index++) {
        buffer[index] = binary1.value[index] | binary2.value[index];
    }
    return new Binary(buffer);
};


/**
 * This function returns a new binary string that is the logical XOR of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} binary1 The first binary string.
 * @param {Binary} binary2 The second binary string.
 * @returns {Binary} The resulting binary string.
 */
Binary.xor = function(binary1, binary2) {
    var length = Math.max(binary1.value.length, binary2.value.length);
    const buffer = Buffer.alloc(length);
    length = Math.min(binary1.value.length, binary2.value.length);
    for (var index = 0; index < length; index++) {
        buffer[index] = binary1.value[index] ^ binary2.value[index];
    }
    return new Binary(buffer);
};


/**
 * This function returns a new binary string that contains the bytes from the second binary
 * concatenated onto the end of the first binary string.
 *
 * @param {List} binary1 The first binary string to be operated on.
 * @param {List} binary2 The second binary string to be operated on.
 * @returns {List} The resulting binary string.
 */
Binary.concatenation = function(binary1, binary2) {
    const buffer1 = binary1.value;
    const buffer2 = binary2.value;
    const buffer = Buffer.alloc(buffer1.length + buffer2.length);
    buffer1.copy(buffer);
    buffer2.copy(buffer, buffer1.length);
    return new Binary(buffer, binary1.parameters);
};


// PRIVATE CLASSES

function BufferIterator(buffer) {
    this.slot = 0;  // the slot before the first number
    this.size = buffer.length;  // static so we can cache it here
    this.buffer = buffer;
    return this;
}
BufferIterator.prototype.constructor = BufferIterator;


BufferIterator.prototype.toStart = function() {
    this.slot = 0;  // the slot before the first number
};


BufferIterator.prototype.toSlot = function(slot) {
    this.slot = slot;
};


BufferIterator.prototype.toEnd = function() {
    this.slot = this.size;  // the slot after the last number
};


BufferIterator.prototype.hasPrevious = function() {
    return this.slot > 0;
};


BufferIterator.prototype.hasNext = function() {
    return this.slot < this.size;
};


BufferIterator.prototype.getPrevious = function() {
    if (!this.hasPrevious()) throw new Error('BUG: Unable to retrieve the previous byte from an iterator that is at the beginning of a binary string.');
    return this.buffer[--this.slot];
};


BufferIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('BUG: Unable to retrieve the next byte from an iterator that is at the end of a binary string.');
    return this.buffer[this.slot++];
};
