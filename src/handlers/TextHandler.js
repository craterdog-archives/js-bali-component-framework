/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var language = require('../BaliLanguage');


function TextHandler() {
    return this;
}
TextHandler.prototype.constructor = TextHandler;
exports.TextHandler = TextHandler;


TextHandler.prototype.toJavaScript = function(baliTree) {
    var text;
    if (baliTree.constructor.name === 'BlockTextContext') {
        text = baliTree.TEXT_BLOCK().getText();
    } else {
        text = baliTree.TEXT().getText();
        text = text.replace(/\\"/g, '"');  // remove escapes from double quotes
    }
    var jsString = text.substring(1, text.length - 1);  // remove the double quote delimiters
    return jsString;
};


TextHandler.prototype.toBali = function(jsString) {
    if (jsString.length > 0 && jsString[0] !== '\n') {
        jsString = jsString.replace(/"/g, '\\"');  // escape any double quotes
    }
    text = '"' + jsString + '"';  // add the double quote delimiters
    var baliTree = language.parseElement(text);
    return baliTree.text();
};
