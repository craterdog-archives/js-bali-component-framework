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
 * This library provides functions that do various byte level manipulations and
 * conversions.
 */


// This private constant sets the line width for formatting encoded byte strings.
const LINE_WIDTH = 60;

// This private constant sets the POSIX end of line character
const EOL = '\n';


// PUBLIC FUNCTIONS

/*
 * This private string acts as a lookup table for mapping one bit values to base 2
 * characters.
 */
const base2LookupTable = "01";

/**
 * This function encodes the bytes in a data buffer into a base 2 string.
 *
 * @param {Buffer} buffer A data buffer containing the integer.
 * @param {String} indentation The string to be prepended to each line of the result.
 * @return {String} The base 2 encoded string.
 */
exports.base2Encode = function(buffer, indentation) {
    // validate the parameters
    indentation = indentation ? indentation : '';

    // encode each byte
    var string = '';
    buffer.forEach(function(byte) {
        // encode each bit
        for (var b = 7; b >= 0; b--) {
            const mask = 1 << b;
            const bit = (byte & mask) >>> b;
            string += base2LookupTable[bit];
        }
    });

    // break the string into formatted lines
    const base2 = formatLines(string, indentation);
    return base2;
};


/**
 * This function decodes a base 2 encoded string into a data buffer containing the
 * decoded bytes.
 *
 * @param {String} base2 The base 2 encoded string.
 * @return {Buffer} A data buffer containing the decoded bytes.
 */
exports.base2Decode = function(base2) {
    // validate the base 2 encoded string
    base2 = base2.replace(/\s/g, '');  // strip out whitespace
    const length = base2.length;
    if (length % 8 !== 0) {
        throw new utilities.Exception({
            $module: '/bali/utilities/Codex',
            $procedure: '$base2Decode',
            $exception: '$invalidParameter',
            $parameter: base2,
            $text: '"The number of characters in the base 2 binary string was not divisible by 8."'
        });
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
                throw new utilities.Exception({
                    $module: '/bali/utilities/Codex',
                    $procedure: '$base2Decode',
                    $exception: '$invalidParameter',
                    $parameter: base2,
                    $text: '"The binary string was not encoded using base 2."'
                });
            }
            byte |= (bit << b);
        }

        // append byte to binary string
        buffer[index / 8 - 1] = byte;

    }

    return buffer;
};


/*
 * This private string acts as a lookup table for mapping four bit values to base 16
 * characters. Only uppercase letters are allowed.
 */
const base16LookupTable = "0123456789ABCDEF";


/**
 * This function encodes the bytes in a data buffer into a base 16 string.
 *
 * @param {Buffer} buffer A data buffer containing the bytes to be encoded.
 * @param {String} indentation The string to be prepended to each line of the result.
 * @return {String} The base 16 encoded string.
 */
exports.base16Encode = function(buffer, indentation) {
    // validate the parameters
    indentation = indentation ? indentation : '';

    // encode the bytes
    var string = '';
    buffer.forEach(function(byte) {
        const highOrderNybble = (byte & 0xF0) >>> 4;
        string += base16LookupTable[highOrderNybble];
        const lowOrderNybble = byte & 0x0F;
        string += base16LookupTable[lowOrderNybble];
    });

    // break the string into formatted lines
    const base16 = formatLines(string, indentation);
    return base16;
};


/**
 * This function decodes a base 16 encoded string into a data buffer containing the
 * decoded bytes.
 *
 * @param {String} base16 The base 16 encoded string.
 * @return {Buffer} A data buffer containing the decoded bytes.
 */
exports.base16Decode = function(base16) {
    // validate the base 16 encoded string
    base16 = base16.replace(/\s/g, '');  // strip out whitespace
    base16 = base16.toUpperCase();
    const length = base16.length;
    if (length % 2 !== 0) {
        throw new utilities.Exception({
            $module: '/bali/utilities/Codex',
            $procedure: '$base16Decode',
            $exception: '$invalidParameter',
            $parameter: base16,
            $text: '"The number of characters in the base 16 binary string was not divisible by 2."'
        });
    }

    // decode each base 16 character
    const buffer = Buffer.alloc(length / 2);
    var index = 0;
    while (index < length - 1) {

        // decode the character for the high order nybble
        var character = base16[index++];
        const highOrderNybble = base16LookupTable.indexOf(character);
        if (highOrderNybble < 0) {
            throw new utilities.Exception({
                $module: '/bali/utilities/Codex',
                $procedure: '$base16Decode',
                $exception: '$invalidParameter',
                $parameter: base16,
                $text: '"The binary string was not encoded using base 16."'
            });
        }

        // decode the character for the low order nybble
        character = base16[index++];
        const lowOrderNybble = base16LookupTable.indexOf(character);
        if (lowOrderNybble < 0) {
            throw new utilities.Exception({
                $module: '/bali/utilities/Codex',
                $procedure: '$base16Decode',
                $exception: '$invalidParameter',
                $parameter: base16,
                $text: '"The binary string was not encoded using base 16."'
            });
        }

        // combine the nybbles to form the byte
        const charCode = (highOrderNybble << 4) | lowOrderNybble;
        buffer[index / 2 - 1] = charCode;

    }

    return buffer;
};


/*
 * This private string acts as a lookup table for mapping five bit values to base 32
 * characters. It eliminate 4 vowels ("E", "I", "O", "U") to reduce any confusion with
 * 0 and O, 1 and I; and reduce the likelihood of *actual* (potentially offensive)
 * words from being included in a base 32 string. Only uppercase letters are allowed.
 */
const base32LookupTable = "0123456789ABCDFGHJKLMNPQRSTVWXYZ";


/**
 * This function encodes the bytes in a data buffer into a base 32 string.
 *
 * @param {Buffer} buffer A data buffer containing the bytes to be encoded.
 * @param {String} indentation The string to be prepended to each line of the result.
 * @return {String} The base 32 encoded string.
 */
exports.base32Encode = function(buffer, indentation) {
    // validate the parameters
    indentation = indentation ? indentation : '';

    // encode each byte
    var string = '';
    const length = buffer.length;
    for (var i = 0; i < length; i++) {
        const previousByte = buffer[i - 1];  // ignored when i is zero
        const currentByte = buffer[i];

        // encode next one or two 5 bit chunks
        string = base32EncodeNextChucks(previousByte, currentByte, i, string);
    }

    // encode the last chunk
    const lastByte = buffer[length - 1];
    string = base32EncodeLastChunk(lastByte, length - 1, string);

    // break the string into formatted lines
    const base32 = formatLines(string, indentation);
    return base32;
};


/**
 * This function decodes a base 32 encoded string into a data buffer containing the
 * decoded bytes.
 *
 * @param {String} base32 The base 32 encoded string.
 * @return {Buffer} A data buffer containing the decoded bytes.
 */
exports.base32Decode = function(base32) {
    // validate the base 32 encoded string
    base32 = base32.replace(/\s/g, '');  // strip out whitespace
    base32 = base32.toUpperCase();
    const length = base32.length;

    var character;
    var chunk;

    // decode each base 32 character
    const buffer = Buffer.alloc(Math.floor(length * 5 / 8));
    var index = 0;
    while (index < length - 1) {
        character = base32[index];
        chunk = base32LookupTable.indexOf(character);
        if (chunk < 0) {
            throw new utilities.Exception({
                $module: '/bali/utilities/Codex',
                $procedure: '$base32Decode',
                $exception: '$invalidParameter',
                $parameter: base32,
                $text: '"The binary string was not encoded using base 32."'
            });
        }
        base32DecodeNextCharacter(chunk, index++, buffer, 0);
    }
    if (index < length) {
        character = base32[index];
        chunk = base32LookupTable.indexOf(character);
        if (chunk < 0) {
            throw new utilities.Exception({
                $module: '/bali/utilities/Codex',
                $procedure: '$base32Decode',
                $exception: '$invalidParameter',
                $parameter: base32,
                $text: '"The binary string was not encoded using base 32."'
            });
        }
        base32DecodeLastCharacter(chunk, index, buffer, 0);
    }
    return buffer;
};


/**
 * This function encodes the bytes in a data buffer into a base 64 string.
 *
 * @param {Buffer} buffer A data buffer containing the bytes to be encoded.
 * @param {String} indentation The string to be prepended to each line of the result.
 * @return {String} The base 64 encoded string.
 */
exports.base64Encode = function(buffer, indentation) {
    // validate the parameters
    indentation = indentation ? indentation : '';

    // format as indented 80 character blocks
    const string = buffer.toString('base64');

    // break the string into formatted lines
    const base64 = formatLines(string, indentation);
    return base64;
};


/**
 * This function decodes a base 64 encoded string into a data buffer containing the
 * decoded bytes.
 *
 * @param {String} base64 The base 64 encoded string.
 * @return {Buffer} A data buffer containing the decoded bytes.
 */
exports.base64Decode = function(base64) {
    return Buffer.from(base64, 'base64');
};


/**
 * This function converts a short into a data buffer containing its corresponding bytes
 * in 'big endian' order.
 *
 * @param {Number} short The short to be converted.
 * @return {Buffer} A data buffer containing the corresponding bytes.
 */
exports.shortToBytes = function(short) {
    const buffer = Buffer.alloc(2);
    for (var i = 0; i < 2; i++) {
        const byte = short >> (i * 8) & 0xFF;
        buffer[1 - i] = byte;
    }
    return buffer;
};


/**
 * This function converts the bytes in a data buffer in 'big endian' order to its
 * corresponding short value.
 *
 * @param {Buffer} buffer A data buffer containing the bytes for the short.
 * @return {Number} The corresponding short value.
 */
exports.bytesToShort = function(buffer) {
    var short = 0;
    for (var i = 0; i < 2; i++) {
        const byte = buffer[1 - i];
        short |= byte << (i * 8);
    }
    return short;
};


/**
 * This function converts an integer into a data buffer containing its corresponding bytes
 * in 'big endian' order.
 *
 * @param {Number} integer The integer to be converted.
 * @return {Buffer} A data buffer containing the corresponding bytes.
 */
exports.integerToBytes = function(integer) {
    const buffer = Buffer.alloc(4);
    for (var i = 0; i < 4; i++) {
        const byte = integer >> (i * 8) & 0xFF;
        buffer[3 - i] = byte;
    }
    return buffer;
};


/**
 * This function converts the bytes in a data buffer in 'big endian' order to its
 * corresponding integer value.
 *
 * @param {Buffer} buffer The buffer containing the bytes for the integer.
 * @return {Number} The corresponding integer value.
 */
exports.bytesToInteger = function(buffer) {
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
function base32EncodeNextChucks(previous, current, byteIndex, base32) {
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
}


/*
 * Same as normal, but pad with 0's in "next" byte
 * case:      0        1        2        3        4
 * byte:  xxxxx111|00xxxxx3|00004444|0xxxxx66|000xxxxx|...
 * mask:   F8  07  C0 3E  01 F0  0F 80  7C 03  E0  1F
 */
function base32EncodeLastChunk(last, byteIndex, base32) {
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
}


/*
 * offset:    0        1        2        3        4        0
 * byte:  00000111|11222223|33334444|45555566|66677777|...
 * mask:   F8  07  C0 3E  01 F0  0F 80  7C 03  E0  1F   F8  07
 */
function base32DecodeNextCharacter(chunk, characterIndex, buffer, index) {
    const byteIndex = Math.floor(index + (characterIndex * 5) / 8);
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
}


/*
 * Same as normal, but pad with 0's in "next" byte
 * case:      0        1        2        3        4
 * byte:  xxxxx111|00xxxxx3|00004444|0xxxxx66|00077777|...
 * mask:   F8  07  C0 3E  01 F0  0F 80  7C 03  E0  1F
 */
function base32DecodeLastCharacter(chunk, characterIndex, buffer, index) {
    const byteIndex = Math.floor(index + (characterIndex * 5) / 8);
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
}


/**
 * This function returns a formatted version of a string with LINE_WIDTH characters per line.
 * 
 * @param {String} string The string to be formatted.
 * @param {String} indentation The string to be prepended to each line of the result.
 * @returns {String} The formatted string.
 */
function formatLines(string, indentation) {
    indentation = indentation ? indentation : '';
    var formatted = '';
    const length = string.length;
    if (length > LINE_WIDTH) {
        for (var index = 0; index < length; index += LINE_WIDTH) {
            formatted += EOL + indentation;
            formatted += string.substring(index, index + LINE_WIDTH);
        }
        formatted += EOL;
    } else {
        formatted += string;
    }
    return formatted;
};
