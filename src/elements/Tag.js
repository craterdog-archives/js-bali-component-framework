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
const moduleName = '/bali/elements/Tag';
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new tag element using the specified value.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {Number|String} value An optional parameter defining the size of a new random
 * tag or the value it should represent.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Tag} The new tag element.
 */
const Tag = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        [ moduleName ],
        [],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Tag', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Number'
        ]);
    }

    value = value || 20;  // the default number of bytes
    var bytes, numberOfBytes, hash;
    const decoder = new utilities.Decoder(0, this.debug);
    const generator = new utilities.Generator(this.debug);
    switch (typeof value) {
        case 'number':
            numberOfBytes = value;
            bytes = generator.generateBytes(value);
            value = decoder.base32Encode(bytes);
            break;
        case 'string':
            bytes = decoder.base32Decode(value);
            numberOfBytes = bytes.length;
            break;
    }
    hash = decoder.bytesToInteger(bytes);  // the first four bytes work perfectly

    // since this element is immutable the attributes must be read-only
    this.getValue = function() { return value; };
    this.getSize = function() { return numberOfBytes; };
    this.getHash = function() { return hash; };

    return this;
};
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
Tag.prototype.isSignificant = function() {
    return true;
};


/**
 * This method returns the raw byte string for the tag element.
 *
 * @returns {Buffer} A buffer containing the bytes for this tag element.
 */
Tag.prototype.getBytes = function() {
    // not called very often so save space by doing it on demand
    const decoder = new utilities.Decoder(0, this.debug);
    return decoder.base32Decode(this.getValue());
};
