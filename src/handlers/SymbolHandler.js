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
var Symbol = require('../elements/Symbol').Symbol;


function SymbolHandler() {
    return this;
}
SymbolHandler.prototype.constructor = SymbolHandler;
exports.SymbolHandler = SymbolHandler;


SymbolHandler.prototype.toJavaScript = function(tree) {
    var token = tree.SYMBOL();
    var string = token.getText();
    return new Symbol(string);
};


SymbolHandler.prototype.toBali = function(object) {
    var tree;
    var symbol = object.toString();
    var chars = new antlr.InputStream(symbol);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    tree = parser.symbol();
    return tree;
};
