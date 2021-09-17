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
const collections = require('../collections');


// PUBLIC FUNCTIONS

/**
 * This function creates an immutable instance of a binary string using the specified
 * value.
 *
 * @param {Buffer} value An optional buffer containing the bytes for the binary string.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Binary} The new binary string.
 */
const Binary = function(value, parameters, debug) {
    abstractions.String.call(
        this,
        ['/bali/elements/Binary'],
        [
            '/bali/libraries/Logical',
            '/bali/libraries/Chainable'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Binary', '$value', value, [
            '/javascript/Undefined',
            '/nodejs/Buffer'
        ]);
    }

    // analyze the value
    value = value || Buffer.alloc(0);  // the default value is an empty buffer

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
};
Binary.prototype = Object.create(abstractions.String.prototype);
Binary.prototype.constructor = Binary;
exports.Binary = Binary;


// PUBLIC METHODS

/**
 * This method returns the number of bytes that this binary string has.
 *
 * @returns {Number} The number of bytes that this binary string has.
 */
Binary.prototype.getSize = function() {
    return this.getValue().length;
};


/**
 * This method returns the byte at the specified index from this binary string.
 *
 * @param {Number} index The index of the byte to be retrieved from this binary string.
 * @returns {Number} The byte value (0..255) at the specified index.
 */
Binary.prototype.getItem = function(index) {
    if (this.debug > 1) {
        this.validateArgument('$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    index = abstractions.Component.normalizedIndex(this, index) - 1;  // zero-based indexing for JS
    return this.getValue()[index];
};


/**
 * This method returns a new binary string containing the bytes in the specified range.
 *
 * @param {Range} range A range depicting the indices of the first and last bytes to be retrieved.
 * @returns {Binary} A new binary string containing the requested bytes.
 */
Binary.prototype.getItems = function(range) {
    if (this.debug > 1) {
        this.validateArgument('$getItems', '$range', range, [
            '/javascript/String',
            '/bali/collections/Range'
        ]);
    }
    range = collections.Range.effective(this.componentize(range), this.debug);
    var first = range.getFirst();
    if (first === undefined) {
        first = 1;  // first byte
    } else {
        first = first.toInteger();
    }
    var last = range.getLast();
    if (last === undefined) {
        last = -1;  // last byte
    } else {
        last = last.toInteger();
    }
    first = abstractions.Component.normalizedIndex(this, first) - 1;  // zero-based indexing for JS
    last = abstractions.Component.normalizedIndex(this, last);  // slice() is exclusive of last index
    const buffer = this.getValue().slice(first, last);
    return new Binary(buffer, this.getParameters(), this.debug);
};


// LOGICAL LIBRARY FUNCTIONS

/**
 * This function returns a new binary string that is the logical NOT of the bits
 * of the specified binary string.
 *
 * @param {Binary} binary The binary value.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Binary} The resulting binary.
 */
Binary.not = function(binary, debug) {
    if (debug > 1) {
        binary.validateArgument('$not', '$binary', binary, [
            '/bali/elements/Binary'
        ]);
    }
    const length = binary.getValue().length;
    const buffer = Buffer.alloc(length);
    binary.getValue().forEach(function(byte, index) {
        buffer[index] = ~byte;
    });
    return new Binary(buffer, binary.getParameters(), debug);
};


/**
 * This function returns a new binary string that is the logical AND of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} first The first binary string.
 * @param {Binary} second The second binary string.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Binary} The resulting binary string.
 */
Binary.and = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$and', '$first', first, [
            '/bali/elements/Binary'
        ]);
        first.validateArgument('$and', '$second', second, [
            '/bali/elements/Binary'
        ]);
    }
    var length = Math.max(first.getValue().length, second.getValue().length);
    const buffer = Buffer.alloc(length);
    length = Math.min(first.getValue().length, second.getValue().length);
    for (var index = 0; index < length; index++) {
        buffer[index] = first.getValue()[index] & second.getValue()[index];
    }
    return new Binary(buffer, first.getParameters(), debug);
};


/**
 * This function returns a new binary string that is the logical SANS of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} first The first binary string.
 * @param {Binary} second The second binary string.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Binary} The resulting binary string.
 */
Binary.sans = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$sans', '$first', first, [
            '/bali/elements/Binary'
        ]);
        first.validateArgument('$sans', '$second', second, [
            '/bali/elements/Binary'
        ]);
    }
    var length = Math.max(first.getValue().length, second.getValue().length);
    const buffer = Buffer.alloc(length);
    length = Math.min(first.getValue().length, second.getValue().length);
    for (var index = 0; index < length; index++) {
        buffer[index] = first.getValue()[index] & ~second.getValue()[index];
    }
    return new Binary(buffer, first.getParameters(), debug);
};


/**
 * This function returns a new binary string that is the logical OR of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} first The first binary string.
 * @param {Binary} second The second binary string.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Binary} The resulting binary string.
 */
Binary.or = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$or', '$first', first, [
            '/bali/elements/Binary'
        ]);
        first.validateArgument('$or', '$second', second, [
            '/bali/elements/Binary'
        ]);
    }
    var length = Math.max(first.getValue().length, second.getValue().length);
    const buffer = Buffer.alloc(length);
    length = Math.min(first.getValue().length, second.getValue().length);
    for (var index = 0; index < length; index++) {
        buffer[index] = first.getValue()[index] | second.getValue()[index];
    }
    return new Binary(buffer, first.getParameters(), debug);
};


/**
 * This function returns a new binary string that is the logical XOR of the bits
 * of the two specified binary strings.
 *
 * @param {Binary} first The first binary string.
 * @param {Binary} second The second binary string.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Binary} The resulting binary string.
 */
Binary.xor = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$xor', '$first', first, [
            '/bali/elements/Binary'
        ]);
        first.validateArgument('$xor', '$second', second, [
            '/bali/elements/Binary'
        ]);
    }
    var length = Math.max(first.getValue().length, second.getValue().length);
    const buffer = Buffer.alloc(length);
    length = Math.min(first.getValue().length, second.getValue().length);
    for (var index = 0; index < length; index++) {
        buffer[index] = first.getValue()[index] ^ second.getValue()[index];
    }
    return new Binary(buffer, first.getParameters(), debug);
};


// CHAINABLE LIBRARY FUNCTIONS

/**
 * This function returns a new binary string that contains the bytes from the second binary
 * concatenated onto the end of the first binary string.
 *
 * @param {List} first The first binary string to be operated on.
 * @param {List} second The second binary string to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {List} The resulting binary string.
 */
Binary.chain = function(first, second, debug) {
    if (debug > 1) {
        first.validateArgument('$chain', '$first', first, [
            '/bali/elements/Binary'
        ]);
        first.validateArgument('$chain', '$second', second, [
            '/bali/elements/Binary'
        ]);
    }
    const buffer1 = first.getValue();
    const buffer2 = second.getValue();
    const buffer = Buffer.alloc(buffer1.length + buffer2.length);
    buffer1.copy(buffer);
    buffer2.copy(buffer, buffer1.length);
    return new Binary(buffer, first.getParameters(), debug);
};

