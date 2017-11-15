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

/*
 * This class defines a parser that reads in Bali Document Language™
 * source code and generates the corresponding parse tree.
 */
var antlr = require('antlr4');
var grammar = require('../grammar');


/**
 * This constructor creates a new parser with the specified padding.
 * 
 * @constructor
 * @returns {LanguageParser} The new parser.
 */
function LanguageParser() {
    return this;
}
LanguageParser.prototype.constructor = LanguageParser;
exports.LanguageParser = LanguageParser;


LanguageParser.prototype.parseDocument = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var document = parser.document();
    return document;
};


LanguageParser.prototype.parseElement = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var element = parser.element();
    return element;
};


LanguageParser.prototype.parseStructure = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var structure = parser.structure();
    return structure;
};


LanguageParser.prototype.parseRange = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var range = parser.range();
    return range;
};


LanguageParser.prototype.parseCollection = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var collection = parser.collection();
    return collection;
};


LanguageParser.prototype.parseTable = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var table = parser.table();
    return table;
};


LanguageParser.prototype.parseBlock = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var block = parser.block();
    return block;
};


LanguageParser.prototype.parseExpression = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var expression = parser.expression();
    return expression;
};
