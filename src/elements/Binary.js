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
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;
var codex = require('../transformers/EncodingUtilities');


/**
 * This constructor creates a new binary string element.
 * The allowed ways to call it include:
 * <pre><code>
 * new Binary()  // creates an empty byte string with base set to 64
 * new Binary(value)  // autodetects the base
 * new Binary(value, base)  // uses the specified base
 * </code></pre>
 * 
 * @constructor
 * @param {String} value The encoded value of the binary string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Binary} The new binary string.
 */
function Binary(value, parameters) {
    Element.call(this, types.BINARY, parameters);
    value = value || "''";  // default to empty byte string
    // decode the value
    var encoded = value.slice(1, -1);  // strip off the single quotes
    if (parameters) {
        this.base = parameters.getValueForIndex(1).toNumber();
    }
    switch (this.base) {
        case 2:
            this.value = codex.base2Decode(encoded);
            break;
        case 16:
            this.value = codex.base16Decode(encoded);
            break;
        case 32:
            this.value = codex.base32Decode(encoded);
            break;
        case 64:
            this.value = codex.base64Decode(encoded);
            break;
        case undefined:
            try {
                this.value = codex.base2Decode(encoded);
                this.base = 2;
            } catch (e) {
                try {
                    this.value = codex.base16Decode(encoded);
                    this.base = 16;
                } catch (e) {
                    try {
                        this.value = codex.base32Decode(encoded);
                        this.base = 32;
                    } catch (e) {
                        try {
                            this.value = codex.base64Decode(encoded);
                            this.base = 64;
                        } catch (e) {
                            throw new Error('BINARY: An invalid encoded value was passed into the constructor: ' + encoded);
                        }
                    }
                }
            }
            break;
        default:
            throw new Error('BINARY: An invalid base was passed into the constructor: ' + this.base);
    }
    this.setSource(this.toSource());
    return this;
}
Binary.prototype = Object.create(Element.prototype);
Binary.prototype.constructor = Binary;
exports.Binary = Binary;


/**
 * This method returns the encoded binary string using the preferred base encoding.
 * 
 * @returns {String} The encoded binary string.
 */
Binary.prototype.toSource = function() {
    var string;
    switch (this.base) {
        case 2:
            string = codex.base2Encode(this.value);
            break;
        case 16:
            string = codex.base16Encode(this.value);
            break;
        case 32:
            string = codex.base32Encode(this.value);
            break;
        case 64:
            string = codex.base64Encode(this.value);
            break;
        default:
            throw new Error('BINARY: The binary string has an unknown base: ' + this.base);
    }
    string = "'" + string + "'";  // embed in single quotes
    return string;
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


/**
 * This method returns the byte buffer for the binary string.
 * 
 * @returns {Buffer} The byte buffer.
 */
Binary.prototype.getBuffer = function() {
    return this.value;
};
