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
var Symbol = require('../elements/Symbol').Symbol;


function SymbolHandler() {
    return this;
}
SymbolHandler.prototype.constructor = SymbolHandler;
exports.SymbolHandler = SymbolHandler;


SymbolHandler.prototype.toJavaScript = function(baliTree) {
    var token = baliTree.SYMBOL();
    var symbol = token.getText();
    return new Symbol(symbol);
};


SymbolHandler.prototype.toBali = function(jsSymbol) {
    var symbol = jsSymbol.toString();
    var baliTree = language.parseElement(symbol);
    return baliTree.symbol();
};
