/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var grammar = require('../grammar/BaliLanguageParser');
var language = require('../BaliLanguage');


function TextHandler() {
    return this;
}
TextHandler.prototype.constructor = TextHandler;
exports.TextHandler = TextHandler;


TextHandler.prototype.toJavaScript = function(baliTree) {
    var token;
    if (baliTree instanceof grammar.BlockTextContext) {
        token = baliTree.TEXT_BLOCK();
    } else {
        token = baliTree.TEXT();
    }
    var text = token.getText();
    text = text.substring(1, -1);  // remove the double quote delimiters
    var jsString = text.replace(/\\"/g, '"');  // remove escapes from double quotes
    return jsString;
};


TextHandler.prototype.toBali = function(jsString) {
    var text = jsString.replace(/"/g, '\\"');  // escape any double quotes
    text = '"' + text + '"';  // add the double quote delimiters
    var baliTree = language.parseElement(text);
    return baliTree.text();
};
