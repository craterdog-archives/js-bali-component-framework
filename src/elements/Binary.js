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
const utilities = require('../utilities');
const abstractions = require('../abstractions');


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
    abstractions.Element.call(this, utilities.types.BINARY, parameters);

    // analyze the value
    if (value === undefined || value === null) value = Buffer.alloc(0);  // default value
    this.value = value;

    this.setSource(this.toLiteral(parameters));
    return this;
}
Binary.prototype = Object.create(abstractions.Element.prototype);
Binary.prototype.constructor = Binary;
exports.Binary = Binary;


/**
 * This constructor creates an immutable instance of a random binary string using the base defined
 * in the specified parameters, or base 32 if no parameters are provided.
 * 
 * @constructor
 * @param {Number} numberOfBytes The number of random bytes to be created.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Binary} A new binary string containing the specified number of random bytes.
 */
Binary.fromRandom = function(numberOfBytes, parameters) {
    const buffer = utilities.random.bytes(numberOfBytes);
    return new Binary(buffer, parameters);
};


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
        base = parameters.getValue('$base').toNumber();
    }
    switch (base) {
        case 2:
            value = utilities.codex.base2Decode(value);
            break;
        case 16:
            value = utilities.codex.base16Decode(value);
            break;
        case 32:
            value = utilities.codex.base32Decode(value);
            break;
        case 64:
            value = utilities.codex.base64Decode(value);
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
 * @param {Parameters} parameters Any parameters that are needed for formatting.
 * @returns {String} The corresponding literal string representation.
 */
Binary.prototype.toLiteral = function(parameters) {
    var literal;
    var base = 32;  // default value
    if (parameters) {
        base = parameters.getValue('$base').toNumber();
    }
    switch (base) {
        case 2:
            literal = utilities.codex.base2Encode(this.value);
            break;
        case 16:
            literal = utilities.codex.base16Encode(this.value);
            break;
        case 32:
            literal = utilities.codex.base32Encode(this.value);
            break;
        case 64:
            literal = utilities.codex.base64Encode(this.value);
            break;
        default:
            throw new Error('BUG: An invalid binary base value was specified in the parameters: ' + base);
    }
    literal = "'" + literal + "'";
    return literal;
};


/**
 * This method returns whether or not this binary string has a meaningful value. If the binary
 * string is empty it returns <code>false</code>, otherwise it returns <code>true</code>.
 * 
 * @returns {Boolean} Whether or not this binary string has a meaningful value.
 */
Binary.prototype.toBoolean = function() {
    return !this.isEmpty();
};


/**
 * This method returns a formatted base 2 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {String} indentation The indentation string to be prefixed to each line. 
 * @returns {String} The encoded binary string.
 */
Binary.prototype.toBase2 = function(indentation) {
    return "'" + utilities.codex.base2Encode(this.value, indentation) + "'";
};


/**
 * This method returns a formatted base 16 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {String} indentation The indentation string to be prefixed to each line. 
 * @returns {String} The encoded binary string.
 */
Binary.prototype.toBase16 = function(indentation) {
    return "'" + utilities.codex.base16Encode(this.value, indentation) + "'";
};


/**
 * This method returns a formatted base 32 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {String} indentation The indentation string to be prefixed to each line. 
 * @returns {String} The encoded binary string.
 */
Binary.prototype.toBase32 = function(indentation) {
    return "'" + utilities.codex.base32Encode(this.value, indentation) + "'";
};


/**
 * This method returns a formatted base 64 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {String} indentation The indentation string to be prefixed to each line. 
 * @returns {String} The encoded binary string.
 */
Binary.prototype.toBase64 = function(indentation) {
    return "'" + utilities.codex.base64Encode(this.value, indentation) + "'";
};


/**
 * This method compares this binary string to another for ordering.
 * 
 * @param {Object} that The other binary string to be compared with. 
 * @returns {Number} 1 if greater, 0 if equal, and -1 if less.
 */
Binary.prototype.comparedTo = function(that) {
    if (!that) return 1;  // anything is greater than nothing

    // check the types
    const thisType = this.constructor.name;
    const thatType = that.constructor.name;
    if (thisType !== thatType) {
        return this.toString().localeCompare(that.toString());
    }

    // the types are the same, check the values
    return Buffer.compare(this.value, that.value);
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


// PUBLIC FUNCTIONS

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
    return new Binary(buffer, binary.parameters);
};


/**
 * This function returns a new binary string that is the logical AND of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} first The first binary string.
 * @param {Binary} second The second binary string.
 * @returns {Binary} The resulting binary string.
 */
Binary.and = function(first, second) {
    var length = Math.max(first.value.length, second.value.length);
    const buffer = Buffer.alloc(length);
    length = Math.min(first.value.length, second.value.length);
    for (var index = 0; index < length; index++) {
        buffer[index] = first.value[index] & second.value[index];
    }
    return new Binary(buffer, first.parameters);
};


/**
 * This function returns a new binary string that is the logical SANS of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} first The first binary string.
 * @param {Binary} second The second binary string.
 * @returns {Binary} The resulting binary string.
 */
Binary.sans = function(first, second) {
    var length = Math.max(first.value.length, second.value.length);
    const buffer = Buffer.alloc(length);
    length = Math.min(first.value.length, second.value.length);
    for (var index = 0; index < length; index++) {
        buffer[index] = first.value[index] & ~second.value[index];
    }
    return new Binary(buffer, first.parameters);
};


/**
 * This function returns a new binary string that is the logical OR of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} first The first binary string.
 * @param {Binary} second The second binary string.
 * @returns {Binary} The resulting binary string.
 */
Binary.or = function(first, second) {
    var length = Math.max(first.value.length, second.value.length);
    const buffer = Buffer.alloc(length);
    length = Math.min(first.value.length, second.value.length);
    for (var index = 0; index < length; index++) {
        buffer[index] = first.value[index] | second.value[index];
    }
    return new Binary(buffer, first.parameters);
};


/**
 * This function returns a new binary string that is the logical XOR of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} first The first binary string.
 * @param {Binary} second The second binary string.
 * @returns {Binary} The resulting binary string.
 */
Binary.xor = function(first, second) {
    var length = Math.max(first.value.length, second.value.length);
    const buffer = Buffer.alloc(length);
    length = Math.min(first.value.length, second.value.length);
    for (var index = 0; index < length; index++) {
        buffer[index] = first.value[index] ^ second.value[index];
    }
    return new Binary(buffer, first.parameters);
};


/**
 * This function returns a new binary string that contains the bytes from the second binary
 * concatenated onto the end of the first binary string.
 *
 * @param {List} first The first binary string to be operated on.
 * @param {List} second The second binary string to be operated on.
 * @returns {List} The resulting binary string.
 */
Binary.concatenation = function(first, second) {
    const buffer1 = first.value;
    const buffer2 = second.value;
    const buffer = Buffer.alloc(buffer1.length + buffer2.length);
    buffer1.copy(buffer);
    buffer2.copy(buffer, buffer1.length);
    return new Binary(buffer, first.parameters);
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
