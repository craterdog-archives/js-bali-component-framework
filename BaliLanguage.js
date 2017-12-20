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

/**
 * This function takes a source code string containing a Bali document
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {DocumentContext} The corresponding parse tree structure.
 */
exports.parseDocument = function(source) {
    var parser = new Parser();
    var document = parser.parseDocument(source);
    return document;
};


/**
 * This function takes a source code string containing a Bali element
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {ElementContext} The corresponding parse tree structure.
 */
exports.parseElement = function(source) {
    var parser = new Parser();
    var element = parser.parseDocument(source);
    return element;
};


/**
 * This function takes a source code string containing a Bali structure
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {StructureContext} The corresponding parse tree structure.
 */
exports.parseStructure = function(source) {
    var parser = new Parser();
    var structure = parser.parseDocument(source);
    return structure;
};


/**
 * This function takes a source code string containing a Bali range
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {RangeContext} The corresponding parse tree structure.
 */
exports.parseRange = function(source) {
    var parser = new Parser();
    var range = parser.parseDocument(source);
    return range;
};


/**
 * This function takes a source code string containing a Bali array
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {ArrayContext} The corresponding parse tree structure.
 */
exports.parseArray = function(source) {
    var parser = new Parser();
    var array = parser.parseDocument(source);
    return array;
};


/**
 * This function takes a source code string containing a Bali table
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {TableContext} The corresponding parse tree structure.
 */
exports.parseTable = function(source) {
    var parser = new Parser();
    var table = parser.parseDocument(source);
    return table;
};


/**
 * This function takes a source code string containing a Bali block
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {BlockContext} The corresponding parse tree structure.
 */
exports.parseBlock = function(source) {
    var parser = new Parser();
    var block = parser.parseDocument(source);
    return block;
};


/**
 * This function takes a source code string containing a Bali expression
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {ExpressionContext} The corresponding parse tree structure.
 */
exports.parseExpression = function(source) {
    var parser = new Parser();
    var expression = parser.parseDocument(source);
    return expression;
};


/**
 * This function takes a Bali document and formats it as source code.
 * 
 * @param {DocumentContext} baliDocument The Bali document to be formatted.
 * @returns {string} The formatted source code string.
 */
exports.formatDocument = function(baliDocument) {
    var formatter = new Formatter();
    var source = formatter.formatDocument(baliDocument, '');
    return source;
};


/**
 * This function takes a Bali document and formats it as source code. Each
 * line will be prepended with the specified padding string.
 * 
 * @param {DocumentContext} baliDocument The Bali document to be formatted.
 * @param {string} padding The string that should be prepended to each line.
 * @returns {string} The formatted source code string.
 */
exports.formatDocumentWithPadding = function(baliDocument, padding) {
    var formatter = new Formatter();
    var source = formatter.formatDocument(baliDocument, padding);
    return source;
};


/**
 * This function transforms a Bali document into its corresponding JavaScript
 * object.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {DocumentContext} baliDocument The Bali document to be transformed.
 * @returns {object} The corresponding JavaScript object.
 */
exports.documentToJavaScript = function(type, baliDocument) {
    var mapper = new Mapper();
    var jsObject = mapper.documentToJavaScript(type, baliDocument);
    return jsObject;
};


/**
 * This function transforms a JavaScript object into its corresponding Bali
 * document.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {object} jsObject The JavaScript object to be transformed.
 * @returns {DocumentContext} The corresponding Bali document.
 */
exports.javaScriptToDocument = function(type, jsObject) {
    var mapper = new Mapper();
    var baliDocument = mapper.javaScriptToDocument(type, jsObject);
    return baliDocument;
};


/**
 * This function transforms a Bali expression into its corresponding JavaScript
 * object.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {ExpressionContext} baliExpression The Bali expression to be transformed.
 * @returns {object} The corresponding JavaScript object.
 */
exports.expressionToJavaScript = function(type, baliExpression) {
    var mapper = new Mapper();
    var jsObject = mapper.expressionToJavaScript(type, baliExpression);
    return jsObject;
};


/**
 * This function transforms a JavaScript object into its corresponding Bali
 * expression.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {object} jsObject The JavaScript object to be transformed.
 * @returns {ExpressionContext} The corresponding Bali expression.
 */
exports.javaScriptToExpression = function(type, jsObject) {
    var mapper = new Mapper();
    var baliExpression = mapper.javaScriptToExpression(type, jsObject);
    return baliExpression;
};


/**
 * This function transforms a Bali association key into its corresponding JavaScript
 * object.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {KeyContext} baliKey The Bali association key to be transformed.
 * @returns {object} The corresponding JavaScript object.
 */
exports.keyToJavaScript = function(type, baliKey) {
    var mapper = new Mapper();
    var jsObject = mapper.keyToJavaScript(type, baliKey);
    return jsObject;
};


/**
 * This function transforms a JavaScript object into its corresponding Bali
 * association key.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {object} jsObject The JavaScript object to be transformed.
 * @returns {KeyContext} The corresponding Bali association key.
 */
exports.javaScriptToKey = function(type, jsObject) {
    var mapper = new Mapper();
    var baliKey = mapper.javaScriptToKey(type, jsObject);
    return baliKey;
};
