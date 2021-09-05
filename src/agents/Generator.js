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

/**
 * This class provides cryptographically secure random value generation.
 */
const crypto = require('crypto');
const Decoder = require('./Decoder').Decoder;
const Exception = require('../trees/Exception').Exception;


// PRIVATE CONSTANTS

const MAXIMUM_INTEGER = 4294967296;  // unsigned


// PUBLIC FUNCTIONS

/**
 * This function returns a new random number generator.
 *
 * @param {Number} debug A number in the range 0..3.
 * @returns {Generator} The new generator.
 */
const Generator = function(debug) {
    this.debug = debug || 0;
    return this;
};
Generator.prototype.constructor = Generator;
exports.Generator = Generator;


/**
 * This method returns a binary string of the specified size containing
 * randomly generated bytes.
 *
 * @param {Number} numberOfBytes The number of bytes in the desired binary string.
 * @return {Buffer} A data buffer containing random bytes.
 */
Generator.prototype.generateBytes = function(numberOfBytes) {
    try {
        const buffer = crypto.randomBytes(numberOfBytes);
        return buffer;
    } catch (cause) {
        const exception = Exception({
            $module: '/bali/agents/Generator',
            $procedure: '$bytes',
            $exception: '$insufficientEntropy',
            $text: 'There was not enough system entropy to generate random bytes.'
        });
        if (debug > 0) console.error(exception.toString());
        throw exception;
    }
};


/**
 * This method returns a random integer in the range -2147483648..2147483647.
 *
 * @return {Number} The random integer.
 */
Generator.prototype.generateInteger = function() {
    const decoder = new Decoder(0, this.debug);
    const integer = decoder.bytesToInteger(this.generateBytes(4));
    return integer;
};


/**
 * This method returns a random index in the range in the range 1..length.
 *
 * @param {Number} length The length of the collection being indexed.
 * @return {Number} The random ordinal index.
 */
Generator.prototype.generateIndex = function(length) {
    const randomInteger = (this.generateInteger() + MAXIMUM_INTEGER) % MAXIMUM_INTEGER;  // in range 0..MAX
    const index = (randomInteger % length) + 1;  // in range 1..length for ordinal based indexing
    return index;
};


/**
 * This method returns a random probability in the range in the range 0..1.
 *
 * @return {Number} The random probability.
 */
Generator.prototype.generateProbability = function() {
    const randomInteger = (this.generateInteger() + MAXIMUM_INTEGER) % MAXIMUM_INTEGER;  // in range 0..MAX
    const probability = randomInteger / MAXIMUM_INTEGER;  // in range 0..1
    return probability;
};


/**
 * This method returns the result of a weighted coin toss. A probability of
 * zero will always return false and a probability of one will always return true.
 *
 * @param {Number} weight The probability that the toss will return true [0.0..1.0].
 * @return {Boolean} The result of the coin toss.
 */
Generator.prototype.flipCoin = function(weight) {
    const randomInteger = (this.generateInteger() + MAXIMUM_INTEGER) % MAXIMUM_INTEGER;  // in range 0..MAX
    const toss = randomInteger / (MAXIMUM_INTEGER - 1);  // convert to range [0.0..1.0)
    return toss < weight;  // true: [0.0..probability) and false: [probability..1.0]
};
