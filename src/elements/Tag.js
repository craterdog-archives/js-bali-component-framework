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
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new tag element using the specified value.
 * 
 * @param {Number|String} value An optional parameter defining the size of a new random
 * tag or the value it should represent.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @param {Number} debug A number in the range [0..3].
 * @returns {Tag} The new tag element.
 */
function Tag(value, parameters, debug) {
    abstractions.Element.call(this, '$Tag', parameters, debug);
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Tag', '$Tag', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Number'
        ]);
    }

    value = value || 20;  // the default number of bytes
    var bytes, numberOfBytes, hash;
    const codex = new utilities.Codex(0, debug);
    const generator = new utilities.Generator(debug);
    switch (typeof value) {
        case 'number':
            numberOfBytes = value;
            bytes = generator.generateBytes(value);
            value = codex.base32Encode(bytes);
            break;
        case 'string':
            bytes = codex.base32Decode(value);
            numberOfBytes = bytes.length;
            break;
    }
    hash = codex.bytesToInteger(bytes);  // the first four bytes work perfectly

    // since this element is immutable the attributes must be read-only
    this.getSize = function() { return numberOfBytes; };
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
 * @returns {Buffer} A buffer containing the bytes for this tag element.
 */
Tag.prototype.getBytes = function() {
    // not called very often so save space by doing it on demand
    const codex = new utilities.Codex();
    return codex.base32Decode(this.getValue());
};
