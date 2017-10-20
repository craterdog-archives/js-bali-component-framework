/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var antlr = require('antlr4');
var grammar = require('../grammar/BaliLanguageParser');


function TextHandler() {
    return this;
}
TextHandler.prototype.constructor = TextHandler;
exports.TextHandler = TextHandler;


TextHandler.prototype.toJavaScript = function(tree) {
    var token;
    if (tree instanceof grammar.BlockTextContext) {
        token = tree.TEXT_BLOCK();
    } else {
        token = tree.TEXT();
    }
    var string = token.getText();
    string = string.substring(1, -1);  // remove the double quote delimiters
    return string;
};


TextHandler.prototype.toBali = function(object) {
    string = '"' + string + '"';  // add the double quote delimiters
    var chars = new antlr.InputStream(string);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.text();
    return tree;
};
