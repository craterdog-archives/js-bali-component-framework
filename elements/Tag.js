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

var codex = require('../utilities/EncodingUtilities');
var security = require('../utilities/SecurityUtilities');


/*
 * This element class captures the state and methods associated with a tag.
 */
function Tag(parameter) {
    var bytes;

    // default constructor generates a random tag with the default size
    if (typeof parameter === 'undefined' || parameter === null) {
        this.size = 20;
        bytes = security.generateRandomBytes(this.size);
        this.hash = codex.bytesToInteger(bytes);
        this.base32 = codex.base32Encode(bytes);
        return this;
    }

    // constructor generates a random tag with the specified size
    if (typeof parameter === 'number') {
        this.size = parameter;
        bytes = security.generateRandomBytes(this.size);
        this.hash = codex.bytesToInteger(bytes);
        this.base32 = codex.base32Encode(bytes);
        return this;
    }

    // constructor uses a base 32 string as the tag value
    if (typeof parameter === 'string') {
        this.base32 = parameter;
        bytes = codex.base32Decode(this.base32);
        this.size = bytes.length;
        this.hash = codex.bytesToInteger(bytes);
        return this;
    }

}
Tag.prototype.constructor = Tag;
exports.Tag = Tag;


Tag.prototype.toString = function() {
    return this.base32;
};


Tag.prototype.toBytes = function() {
    // not called much so do it on demand
    return codex.base32Decode(this.base32);
};


Tag.prototype.getSize = function() {
    return this.size;
};


Tag.prototype.getHash = function() {
    return this.hash;
};
