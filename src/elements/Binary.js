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


/*
 * This element class captures the state and methods associated with a binary string.
 */
function Binary(string) {
    this.string = string || '';
    return this;
}
Binary.prototype.constructor = Binary;
exports.Binary = Binary;


Binary.prototype.toString = function() {
    return this.string;
};


Binary.prototype.toBase2 = function(indentation) {
    return codex.base2Encode(this.string, indentation);
};


Binary.prototype.toBase16 = function(indentation) {
    return codex.base16Encode(this.string, indentation);
};


Binary.prototype.toBase32 = function(indentation) {
    return codex.base32Encode(this.string, indentation);
};


Binary.prototype.toBase64 = function(indentation) {
    return codex.base64Encode(this.string, indentation);
};
