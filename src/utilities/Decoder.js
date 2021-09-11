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
 * This class implements byte encoding and decoding methods for the following formats:
 * <pre>
 *   * short
 *   * integer
 *   * base 2
 *   * base 16
 *   * base 32
 *   * base 64
 * </pre>
 */
const Exception = require('./Exception').Exception;
const Validator = require('./Validator').Validator;


// This private constant sets the line width for formatting encoded byte strings.
const LINE_WIDTH = 60;

// This private constant sets the POSIX end of line character
const EOL = '\n';

// The symbol lookup tables
const base2LookupTable = '01';
const base16LookupTable = '0123456789ABCDEF';
const base32LookupTable = '0123456789ABCDFGHJKLMNPQRSTVWXYZ';  // missing 'E', 'I', 'O', and 'U'


// PUBLIC FUNCTIONS

/**
 * This function returns a decoder object that can perform byte encoding and decoding.
 *
 * @param {Number} indentation The number of levels of indentation that should be prepended
 * to each formatted line. The default is zero.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Decoder} The new decoder.
 */
const Decoder = function(indentation, debug) {
    this.debug = debug || 0;
    if (this.debug > 1) {
        const validator = new Validator(this.debug);
        validator.validateType('/bali/agents/Decoder', '$Decoder', '$indentation', indentation, [
            '/javascript/Undefined',
            '/javascript/Number'
        ]);
    }
    this.indentation = indentation || 0;
    return this;
};
Decoder.prototype.constructor = Decoder;
exports.Decoder = Decoder;


/**
 * This method encodes the bytes in a data buffer into a base 2 string.
 *
 * @param {Buffer} buffer A data buffer containing the integer.
 * @return {String} The base 2 encoded string.
 */
Decoder.prototype.base2Encode = function(buffer) {
    // encode each byte
    var string = '';
    buffer.forEach(function(byte) {
        // encode each bit
        for (var b = 7; b >= 0; b--) {
            const mask = 1 << b;
            const bit = (byte & mask) >>> b;
            string += base2LookupTable[bit];
        }
    }, this);

    // break the string into formatted lines
    const base2 = formatLines(string, this.indentation);
    return base2;
};


/**
 * This method decodes a base 2 encoded string into a data buffer containing the
 * decoded bytes.
 *
 * @param {String} base2 The base 2 encoded string.
 * @return {Buffer} A data buffer containing the decoded bytes.
 */
Decoder.prototype.base2Decode = function(base2) {
    // validate the base 2 encoded string
    base2 = base2.replace(/\s/g, '');  // strip out whitespace
    const length = base2.length;
    if (length % 8 !== 0) {
        const exception = new utilities.Exception({
            $module: '/bali/agents/Decoder',
            $procedure: '$base2Decode',
            $exception: '$invalidParameter',
            $parameter: base2,
            $text: 'The number of characters in the base 2 binary string was not divisible by 8.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // decode each base 2 character
    const buffer = Buffer.alloc(length / 8);
    var index = 0;
    while (index < length - 7) {

        // decode one byte
        var byte = 0;
        for (var b = 7; b >= 0; b--) {
            const character = base2[index++];
            const bit = base2LookupTable.indexOf(character);
            if (bit < 0) {
                const exception = new utilities.Exception({
                    $module: '/bali/agents/Decoder',
                    $procedure: '$base2Decode',
                    $exception: '$invalidParameter',
                    $parameter: base2,
                    $text: 'The binary string was not encoded using base 2.'
                });
                if (this.debug > 0) console.error(exception.toString());
                throw exception;
            }
            byte |= (bit << b);
        }

        // append byte to binary string
        buffer[index / 8 - 1] = byte;

    }

    return buffer;
};


/**
 * This method encodes the bytes in a data buffer into a base 16 string.
 *
 * @param {Buffer} buffer A data buffer containing the bytes to be encoded.
 * @return {String} The base 16 encoded string.
 */
Decoder.prototype.base16Encode = function(buffer) {
    // encode the bytes
    var string = '';
    buffer.forEach(function(byte) {
        const highOrderNybble = (byte & 0xF0) >>> 4;
        string += base16LookupTable[highOrderNybble];
        const lowOrderNybble = byte & 0x0F;
        string += base16LookupTable[lowOrderNybble];
    }, this);

    // break the string into formatted lines
    const base16 = formatLines(string, this.indentation);
    return base16;
};


/**
 * This method decodes a base 16 encoded string into a data buffer containing the
 * decoded bytes.
 *
 * @param {String} base16 The base 16 encoded string.
 * @return {Buffer} A data buffer containing the decoded bytes.
 */
Decoder.prototype.base16Decode = function(base16) {
    // validate the base 16 encoded string
    base16 = base16.replace(/\s/g, '');  // strip out whitespace
    base16 = base16.toUpperCase();
    const length = base16.length;
    if (length % 2 !== 0) {
        const exception = new utilities.Exception({
            $module: '/bali/agents/Decoder',
            $procedure: '$base16Decode',
            $exception: '$invalidParameter',
            $parameter: base16,
            $text: 'The number of characters in the base 16 binary string was not divisible by 2.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // decode each base 16 character
    const buffer = Buffer.alloc(length / 2);
    var index = 0;
    while (index < length - 1) {

        // decode the character for the high order nybble
        var character = base16[index++];
        const highOrderNybble = base16LookupTable.indexOf(character);
        if (highOrderNybble < 0) {
            const exception = new utilities.Exception({
                $module: '/bali/agents/Decoder',
                $procedure: '$base16Decode',
                $exception: '$invalidParameter',
                $parameter: base16,
                $text: 'The binary string was not encoded using base 16.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }

        // decode the character for the low order nybble
        character = base16[index++];
        const lowOrderNybble = base16LookupTable.indexOf(character);
        if (lowOrderNybble < 0) {
            const exception = new utilities.Exception({
                $module: '/bali/agents/Decoder',
                $procedure: '$base16Decode',
                $exception: '$invalidParameter',
                $parameter: base16,
                $text: 'The binary string was not encoded using base 16.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }

        // combine the nybbles to form the byte
        const charCode = (highOrderNybble << 4) | lowOrderNybble;
        buffer[index / 2 - 1] = charCode;

    }

    return buffer;
};


/**
 * This method encodes the bytes in a data buffer into a base 32 string.
 *
 * @param {Buffer} buffer A data buffer containing the bytes to be encoded.
 * @return {String} The base 32 encoded string.
 */
Decoder.prototype.base32Encode = function(buffer) {
    // encode each byte
    var string = '';
    const length = buffer.length;
    for (var i = 0; i < length; i++) {
        const previousByte = buffer[i - 1];  // ignored when i is zero
        const currentByte = buffer[i];

        // encode next one or two 5 bit chunks
        string = base32EncodeBytes(previousByte, currentByte, i, string);
    }

    // encode the last 5 bit chunk
    const lastByte = buffer[length - 1];
    string = base32EncodeLast(lastByte, length - 1, string);

    // break the string into formatted lines
    const base32 = formatLines(string, this.indentation);
    return base32;
};


/**
 * This method decodes a base 32 encoded string into a data buffer containing the
 * decoded bytes.
 *
 * @param {String} base32 The base 32 encoded string.
 * @return {Buffer} A data buffer containing the decoded bytes.
 */
Decoder.prototype.base32Decode = function(base32) {
    // validate the base 32 encoded string
    base32 = base32.replace(/\s/g, '');  // strip out whitespace
    base32 = base32.toUpperCase();
    const length = base32.length;

    var character;
    var chunk;

    // decode each base 32 character
    const buffer = Buffer.alloc(Math.floor(length * 5 / 8));
    for (var i = 0; i < length; i++) {
        character = base32[i];
        chunk = base32LookupTable.indexOf(character);
        if (chunk < 0) {
            const exception = new utilities.Exception({
                $module: '/bali/agents/Decoder',
                $procedure: '$base32Decode',
                $exception: '$invalidParameter',
                $parameter: base32,
                $text: 'The binary string was not encoded using base 32.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
        if (i < length - 1) {
            base32DecodeBytes(chunk, i, buffer);
        } else {
            base32DecodeLast(chunk, i, buffer);
        }
    }
    return buffer;
};


/**
 * This method encodes the bytes in a data buffer into a base 64 string.
 *
 * @param {Buffer} buffer A data buffer containing the bytes to be encoded.
 * @return {String} The base 64 encoded string.
 */
Decoder.prototype.base64Encode = function(buffer) {
    // format as indented 80 character blocks
    const string = buffer.toString('base64');

    // break the string into formatted lines
    const base64 = formatLines(string, this.indentation);
    return base64;
};


/**
 * This method decodes a base 64 encoded string into a data buffer containing the
 * decoded bytes.
 *
 * @param {String} base64 The base 64 encoded string.
 * @return {Buffer} A data buffer containing the decoded bytes.
 */
Decoder.prototype.base64Decode = function(base64) {
    return Buffer.from(base64, 'base64');
};


/**
 * This method converts a short into a data buffer containing its corresponding bytes
 * in 'big endian' order.
 *
 * @param {Number} short The short to be converted.
 * @return {Buffer} A data buffer containing the corresponding bytes.
 */
Decoder.prototype.shortToBytes = function(short) {
    const buffer = Buffer.alloc(2);
    for (var i = 0; i < 2; i++) {
        const byte = short >> (i * 8) & 0xFF;
        buffer[1 - i] = byte;
    }
    return buffer;
};


/**
 * This method converts the bytes in a data buffer in 'big endian' order to its
 * corresponding short value.
 *
 * @param {Buffer} buffer A data buffer containing the bytes for the short.
 * @return {Number} The corresponding short value.
 */
Decoder.prototype.bytesToShort = function(buffer) {
    var short = 0;
    for (var i = 0; i < 2; i++) {
        const byte = buffer[1 - i];
        short |= byte << (i * 8);
    }
    return short;
};


/**
 * This method converts an integer into a data buffer containing its corresponding bytes
 * in 'big endian' order.
 *
 * @param {Number} integer The integer to be converted.
 * @return {Buffer} A data buffer containing the corresponding bytes.
 */
Decoder.prototype.integerToBytes = function(integer) {
    const buffer = Buffer.alloc(4);
    for (var i = 0; i < 4; i++) {
        const byte = integer >> (i * 8) & 0xFF;
        buffer[3 - i] = byte;
    }
    return buffer;
};


/**
 * This method converts the bytes in a data buffer in 'big endian' order to its
 * corresponding integer value.
 *
 * @param {Buffer} buffer The buffer containing the bytes for the integer.
 * @return {Number} The corresponding integer value.
 */
Decoder.prototype.bytesToInteger = function(buffer) {
    var integer = 0;
    for (var i = 0; i < 4; i++) {
        const byte = buffer[3 - i];
        integer |= byte << (i * 8);
    }
    return integer;
};


// PRIVATE FUNCTIONS

/*
 * offset:    0        1        2        3        4        0
 * byte:  00000111|11222223|33334444|45555566|66677777|...
 * mask:   F8  07  C0 3E  01 F0  0F 80  7C 03  E0  1F   F8  07
 */
const base32EncodeBytes = function(previous, current, byteIndex, base32) {
    var chunk;
    const offset = byteIndex % 5;
    switch (offset) {
        case 0:
            chunk = (current & 0xF8) >>> 3;
            base32 += base32LookupTable[chunk];
            break;
        case 1:
            chunk = ((previous & 0x07) << 2) | ((current & 0xC0) >>> 6);
            base32 += base32LookupTable[chunk];
            chunk = (current & 0x3E) >>> 1;
            base32 += base32LookupTable[chunk];
            break;
        case 2:
            chunk = ((previous & 0x01) << 4) | ((current & 0xF0) >>> 4);
            base32 += base32LookupTable[chunk];
            break;
        case 3:
            chunk = ((previous & 0x0F) << 1) | ((current & 0x80) >>> 7);
            base32 += base32LookupTable[chunk];
            chunk = (current & 0x7C) >>> 2;
            base32 += base32LookupTable[chunk];
            break;
        case 4:
            chunk = ((previous & 0x03) << 3) | ((current & 0xE0) >>> 5);
            base32 += base32LookupTable[chunk];
            chunk = current & 0x1F;
            base32 += base32LookupTable[chunk];
            break;
    }
    return base32;
};


/*
 * Same as normal, but pad with 0's in "next" byte
 * case:      0        1        2        3        4
 * byte:  xxxxx111|00xxxxx3|00004444|0xxxxx66|000xxxxx|...
 * mask:   F8  07  C0 3E  01 F0  0F 80  7C 03  E0  1F
 */
const base32EncodeLast = function(last, byteIndex, base32) {
    var chunk;
    const offset = byteIndex % 5;
    switch (offset) {
        case 0:
            chunk = (last & 0x07) << 2;
            base32 += base32LookupTable[chunk];
            break;
        case 1:
            chunk = (last & 0x01) << 4;
            base32 += base32LookupTable[chunk];
            break;
        case 2:
            chunk = (last & 0x0F) << 1;
            base32 += base32LookupTable[chunk];
            break;
        case 3:
            chunk = (last & 0x03) << 3;
            base32 += base32LookupTable[chunk];
            break;
        case 4:
            // nothing to do, was handled by previous call
            break;
    }
    return base32;
};


/*
 * offset:    0        1        2        3        4        0
 * byte:  00000111|11222223|33334444|45555566|66677777|...
 * mask:   F8  07  C0 3E  01 F0  0F 80  7C 03  E0  1F   F8  07
 */
const base32DecodeBytes = function(chunk, characterIndex, buffer) {
    const byteIndex = Math.floor(characterIndex * 5 / 8);
    const offset = characterIndex % 8;
    switch (offset) {
        case 0:
            buffer[byteIndex] |= chunk << 3;
            break;
        case 1:
            buffer[byteIndex] |= chunk >>> 2;
            buffer[byteIndex + 1] |= chunk << 6;
            break;
        case 2:
            buffer[byteIndex] |= chunk << 1;
            break;
        case 3:
            buffer[byteIndex] |= chunk >>> 4;
            buffer[byteIndex + 1] |= chunk << 4;
            break;
        case 4:
            buffer[byteIndex] |= chunk >>> 1;
            buffer[byteIndex + 1] |= chunk << 7;
            break;
        case 5:
            buffer[byteIndex] |= chunk << 2;
            break;
        case 6:
            buffer[byteIndex] |= chunk >>> 3;
            buffer[byteIndex + 1] |= chunk << 5;
            break;
        case 7:
            buffer[byteIndex] |= chunk;
            break;
    }
};


/*
 * Same as normal, but pad with 0's in "next" byte
 * case:      0        1        2        3        4
 * byte:  xxxxx111|00xxxxx3|00004444|0xxxxx66|00077777|...
 * mask:   F8  07  C0 3E  01 F0  0F 80  7C 03  E0  1F
 */
const base32DecodeLast = function(chunk, characterIndex, buffer) {
    const byteIndex = Math.floor(characterIndex * 5 / 8);
    const offset = characterIndex % 8;
    switch (offset) {
        case 1:
            buffer[byteIndex] |= chunk >>> 2;
            break;
        case 3:
            buffer[byteIndex] |= chunk >>> 4;
            break;
        case 4:
            buffer[byteIndex] |= chunk >>> 1;
            break;
        case 6:
            buffer[byteIndex] |= chunk >>> 3;
            break;
        case 7:
            buffer[byteIndex] |= chunk;
            break;
    }
};


/**
 * This function returns a formatted version of a string with LINE_WIDTH characters per line.
 *
 * @param {String} string The string to be formatted.
 * @param {Number} indentation The number of levels of indentation to be prepended to each line of the result.
 * @returns {String} The formatted string.
 */
const formatLines = function(string, indentation) {
    var prefix = '';
    for (var i = 0; i < indentation; i++) prefix += '    ';
    var formatted = '';
    const length = string.length;
    if (length > LINE_WIDTH) {
        for (var index = 0; index < length; index += LINE_WIDTH) {
            formatted += EOL + prefix;
            formatted += string.substring(index, index + LINE_WIDTH);
        }
        formatted += EOL;
    } else {
        formatted += string;
    }
    return formatted;
};

