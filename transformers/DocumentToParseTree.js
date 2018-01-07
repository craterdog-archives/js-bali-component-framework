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
 * @returns {DocumentToParseTree} The new parser.
 */
function DocumentToParseTree() {
    return this;
}
DocumentToParseTree.prototype.constructor = DocumentToParseTree;
exports.DocumentToParseTree = DocumentToParseTree;


/**
 * This method takes a source code string containing a Bali document
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {DocumentContext} The corresponding parse tree structure.
 */
DocumentToParseTree.prototype.parseDocument = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var document = parser.document();
    return document;
};


/**
 * This method takes a source code string containing a Bali element
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {ElementContext} The corresponding parse tree structure.
 */
DocumentToParseTree.prototype.parseElement = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var element = parser.element();
    return element;
};


/**
 * This method takes a source code string containing a Bali structure
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {StructureContext} The corresponding parse tree structure.
 */
DocumentToParseTree.prototype.parseStructure = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var structure = parser.structure();
    return structure;
};


/**
 * This method takes a source code string containing a Bali range
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {RangeContext} The corresponding parse tree structure.
 */
DocumentToParseTree.prototype.parseRange = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var range = parser.range();
    return range;
};


/**
 * This method takes a source code string containing a Bali array
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {ArrayContext} The corresponding parse tree structure.
 */
DocumentToParseTree.prototype.parseArray = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var array = parser.array();
    return array;
};


/**
 * This method takes a source code string containing a Bali table
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {TableContext} The corresponding parse tree structure.
 */
DocumentToParseTree.prototype.parseTable = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var table = parser.table();
    return table;
};


/**
 * This method takes a source code string containing a Bali block
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {BlockContext} The corresponding parse tree structure.
 */
DocumentToParseTree.prototype.parseBlock = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var block = parser.block();
    return block;
};


/**
 * This method takes a source code string containing a Bali key
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {KeyContext} The corresponding parse tree structure.
 */
DocumentToParseTree.prototype.parseKey = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var key = parser.key();
    return key;
};


/**
 * This method takes a source code string containing a Bali expression
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} source The source code string.
 * @returns {ExpressionContext} The corresponding parse tree structure.
 */
DocumentToParseTree.prototype.parseExpression = function(source) {
    var chars = new antlr.InputStream(source);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var expression = parser.expression();
    return expression;
};
