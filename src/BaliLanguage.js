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

var antlr = require('antlr4');
var grammar = require('./grammar');
var Formatter = require('./transformers/Formatter').Formatter;
var transform = require('./transformers/Transformation');


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
    var visitor = new Formatter(padding);
    baliTree.accept(visitor);
    return visitor.buffer + '\n';  // POSIX requires all lines end with a line feed
};


exports.documentToJavaScript = function(type, baliTree) {
    var jsObject = transform.documentToJavaScript(type, baliTree);
    return jsObject;
};


exports.javaScriptToDocument = function(type, jsObject) {
    var baliDocument = transform.javaScriptToDocument(type, jsObject);
    return baliDocument;
};


exports.expressionToJavaScript = function(type, baliTree) {
    var jsObject = transform.expressionToJavaScript(type, baliTree);
    return jsObject;
};


exports.javaScriptToExpression = function(type, jsObject) {
    var baliExpression = transform.javaScriptToExpression(type, jsObject);
    return baliExpression;
};


exports.keyToJavaScript = function(type, baliTree) {
    var jsObject = transform.keyToJavaScript(type, baliTree);
    return jsObject;
};


exports.javaScriptToKey = function(type, jsObject) {
    var baliKey = transform.javaScriptToKey(type, jsObject);
    return baliKey;
};
