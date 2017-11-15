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
 * This module provides useful functions for parsing and manipulating documents
 * that are written using the Bali Document Language™. For more information
 * about the Bali language refer to the Reference Guide at:
 * <https://github.com/craterdog-bali/bali-reference-guide/wiki>.
 */
var Parser = require('./transformers/LanguageParser').LanguageParser;
var Formatter = require('./transformers/LanguageFormatter').LanguageFormatter;
var Mapper = require('./transformers/LanguageMapper').LanguageMapper;


// PUBLIC FUNCTIONS

exports.parseDocument = function(source) {
    var parser = new Parser();
    var document = parser.parseDocument(source);
    return document;
};


exports.parseElement = function(source) {
    var parser = new Parser();
    var element = parser.parseDocument(source);
    return element;
};


exports.parseStructure = function(source) {
    var parser = new Parser();
    var structure = parser.parseDocument(source);
    return structure;
};


exports.parseRange = function(source) {
    var parser = new Parser();
    var range = parser.parseDocument(source);
    return range;
};


exports.parseCollection = function(source) {
    var parser = new Parser();
    var collection = parser.parseDocument(source);
    return collection;
};


exports.parseTable = function(source) {
    var parser = new Parser();
    var table = parser.parseDocument(source);
    return table;
};


exports.parseBlock = function(source) {
    var parser = new Parser();
    var block = parser.parseDocument(source);
    return block;
};


exports.parseExpression = function(source) {
    var parser = new Parser();
    var expression = parser.parseDocument(source);
    return expression;
};


exports.formatDocument = function(baliDocument) {
    var formatter = new Formatter();
    var source = formatter.formatDocument(baliDocument, '');
    return source;
};


exports.formatPaddedDocument = function(baliDocument, padding) {
    var formatter = new Formatter();
    var source = formatter.formatDocument(baliDocument, padding);
    return source;
};


exports.documentToJavaScript = function(type, baliTree) {
    var mapper = new Mapper();
    var jsObject = mapper.documentToJavaScript(type, baliTree);
    return jsObject;
};


exports.javaScriptToDocument = function(type, jsObject) {
    var mapper = new Mapper();
    var baliDocument = mapper.javaScriptToDocument(type, jsObject);
    return baliDocument;
};


exports.expressionToJavaScript = function(type, baliTree) {
    var mapper = new Mapper();
    var jsObject = mapper.expressionToJavaScript(type, baliTree);
    return jsObject;
};


exports.javaScriptToExpression = function(type, jsObject) {
    var mapper = new Mapper();
    var baliExpression = mapper.javaScriptToExpression(type, jsObject);
    return baliExpression;
};


exports.keyToJavaScript = function(type, baliTree) {
    var mapper = new Mapper();
    var jsObject = mapper.keyToJavaScript(type, baliTree);
    return jsObject;
};


exports.javaScriptToKey = function(type, jsObject) {
    var mapper = new Mapper();
    var baliKey = mapper.javaScriptToKey(type, jsObject);
    return baliKey;
};
