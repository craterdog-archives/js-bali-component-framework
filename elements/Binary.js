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
var codex = require('../utilities/EncodingUtilities');


/**
 * This constructor creates a new binary string element.
 * 
 * @constructor
 * @param {string} valueOrEncoded The raw byte string or encoded value of the binary string.
 * @param {number|string} optionalBase The optional base encoding of the binary string or
 * 'autodetect' if unknown. The default base encoding is 64. 
 * @returns {Binary} The new binary string.
 */
function Binary(valueOrEncoded, optionalBase) {
    valueOrEncoded = valueOrEncoded || '';  // default to empty byte string
    if (optionalBase) {
        // decode the value
        var encoded = valueOrEncoded.slice(1, -1);  // strip off the single quotes
        switch (optionalBase) {
            case 2:
                this.value = codex.base2Decode(encoded);
                this.base = 2;
                break;
            case 16:
                this.value = codex.base16Decode(encoded);
                this.base = 16;
                break;
            case 32:
                this.value = codex.base32Decode(encoded);
                this.base = 32;
                break;
            case 64:
                this.value = codex.base64Decode(encoded);
                this.base = 64;
                break;
            case 'autodetect':
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
                throw new Error('BINARY: An invalid base was passed into the constructor: ' + optionalBase);
        }
    } else {
        this.value = valueOrEncoded;  // the value is not encoded
        this.base = 64;  // default encoding
    }
    return this;
}
Binary.prototype.constructor = Binary;
exports.Binary = Binary;


/**
 * This method returns the encoded binary string using the preferred base encoding.
 * 
 * @returns {string} The encoded binary string.
 */
Binary.prototype.toString = function() {
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
 * @param {string} indentation The indentation string to be prefixed to each line. 
 * @returns {string} The encoded binary string.
 */
Binary.prototype.toBase2 = function(indentation) {
    return "'" + codex.base2Encode(this.value, indentation) + "'";
};


/**
 * This method returns a formatted base 16 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {string} indentation The indentation string to be prefixed to each line. 
 * @returns {string} The encoded binary string.
 */
Binary.prototype.toBase16 = function(indentation) {
    return "'" + codex.base16Encode(this.value, indentation) + "'";
};


/**
 * This method returns a formatted base 32 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {string} indentation The indentation string to be prefixed to each line. 
 * @returns {string} The encoded binary string.
 */
Binary.prototype.toBase32 = function(indentation) {
    return "'" + codex.base32Encode(this.value, indentation) + "'";
};


/**
 * This method returns a formatted base 64 encoding of the binary string
 * with an optional indentation prefix.
 * 
 * @param {string} indentation The indentation string to be prefixed to each line. 
 * @returns {string} The encoded binary string.
 */
Binary.prototype.toBase64 = function(indentation) {
    return "'" + codex.base64Encode(this.value, indentation) + "'";
};
