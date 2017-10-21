/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************
 * @type BaliLanguage <https://github.com/craterdog-bali/js-bali-language>
 ************************************************************************/
var antlr = require('antlr4');
var grammar = require('./grammar');
var transformers = require('./transformers');


/*
 * This module provides useful functions for parsing and manipulating documents
 * that are written using the Bali Document Language™. For more information
 * about the Bali language refer to the Reference Guide at:
 * <https://github.com/craterdog-bali/bali-reference-guide/wiki>.
 */


// PUBLIC FUNCTIONS

exports.parseDocument = function(document) {
    var chars = new antlr.InputStream(document);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var baliTree = parser.document();
    return baliTree;
};


exports.parseElement = function(element) {
    var chars = new antlr.InputStream(element);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var baliTree = parser.element();
    return baliTree;
};


exports.parseStructure = function(structure) {
    var chars = new antlr.InputStream(structure);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var baliTree = parser.structure();
    return baliTree;
};


exports.parseRange = function(range) {
    var chars = new antlr.InputStream(range);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var baliTree = parser.range();
    return baliTree;
};


exports.parseCollection = function(collection) {
    var chars = new antlr.InputStream(collection);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var baliTree = parser.collection();
    return baliTree;
};


exports.parseTable = function(table) {
    var chars = new antlr.InputStream(table);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var baliTree = parser.table();
    return baliTree;
};


exports.parseBlock = function(block) {
    var chars = new antlr.InputStream(block);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var baliTree = parser.block();
    return baliTree;
};


exports.parseExpression = function(expression) {
    var chars = new antlr.InputStream(expression);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var baliTree = parser.expression();
    return baliTree;
};


exports.formatDocument = function(baliTree) {
    return exports.formatPaddedDocument(baliTree, '');
};


exports.formatPaddedDocument = function(baliTree, padding) {
    var visitor = new transformers.FormattingVisitor(padding);
    baliTree.accept(visitor);
    return visitor.buffer + '\n';  // POSIX requires all lines end with a line feed
};


exports.convertToJavaScript = function(type, baliTree) {
    var transformer = new transformers.ObjectTransformer();
    var jsObject = transformer.toJavaScript(type, baliTree);
    return jsObject;
};


exports.convertToBali = function(type, jsObject) {
    var transformer = new transformers.ObjectTransformer();
    var baliTree = transformer.toBali(type, jsObject);
    return baliTree;
};
