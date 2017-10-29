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

var language = require('../BaliLanguage');
var codex = require('../utilities/EncodingUtilities');
var Binary = require('../elements/Binary').Binary;


function BinaryHandler() {
    return this;
}
BinaryHandler.prototype.constructor = BinaryHandler;
exports.BinaryHandler = BinaryHandler;


BinaryHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliBinary = baliElement.binary();
    var binary = baliBinary.BINARY().getText();
    var base64 = binary.substring(1, binary.length - 1);  // remove the single quote delimiters
    var jsString = codex.base64Decode(base64);
    return new Binary(jsString);
};


BinaryHandler.prototype.toBali = function(jsBinary) {
    var base64 = codex.base64Encode(jsBinary.toString());
    var binary = "'" + base64 + "'";  // add the single quote delimiters
    var baliDocument = language.parseDocument(binary);
    return baliDocument;
};
