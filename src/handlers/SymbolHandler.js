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


SymbolHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliSymbol = baliElement.symbol();
    var symbol = baliSymbol.SYMBOL().getText();
    return new Symbol(symbol);
};


SymbolHandler.prototype.toBali = function(jsSymbol) {
    var symbol = jsSymbol.toString();
    var baliDocument = language.parseDocument(symbol);
    return baliDocument;
};
