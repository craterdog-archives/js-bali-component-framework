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
var DocumentParser = require('./transformers/DocumentParser').DocumentParser;
var DocumentFormatter = require('./transformers/DocumentFormatter').DocumentFormatter;


// PUBLIC FUNCTIONS

/**
 * This function takes a source code string containing a Bali document
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} document The Bali document to be parsed.
 * @returns {DocumentContext} The corresponding parse tree structure.
 */
exports.parseDocument = function(document) {
    var parser = new DocumentParser();
    var tree = parser.parseDocument(document);
    return tree;
};


/**
 * This function takes a source code string containing a Bali element
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} element The Bali element to be parsed.
 * @returns {ElementContext} The corresponding parse tree structure.
 */
exports.parseElement = function(element) {
    var parser = new DocumentParser();
    var tree = parser.parseElement(element);
    return tree;
};


/**
 * This function takes a source code string containing a Bali structure
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} structure The Bali structure to be parsed.
 * @returns {StructureContext} The corresponding parse tree structure.
 */
exports.parseStructure = function(structure) {
    var parser = new DocumentParser();
    var tree = parser.parseStructure(structure);
    return tree;
};


/**
 * This function takes a source code string containing a Bali range
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} range The Bali range to be parsed.
 * @returns {RangeContext} The corresponding parse tree structure.
 */
exports.parseRange = function(range) {
    var parser = new DocumentParser();
    var tree = parser.parseRange(range);
    return tree;
};


/**
 * This function takes a source code string containing a Bali array
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} array The Bali array to be parsed.
 * @returns {ArrayContext} The corresponding parse tree structure.
 */
exports.parseArray = function(array) {
    var parser = new DocumentParser();
    var tree = parser.parseArray(array);
    return tree;
};


/**
 * This function takes a source code string containing a Bali table
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} table The Bali table to be parsed.
 * @returns {TableContext} The corresponding parse tree structure.
 */
exports.parseTable = function(table) {
    var parser = new DocumentParser();
    var tree = parser.parseTable(table);
    return tree;
};


/**
 * This function takes a source code string containing a Bali block
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} block The Bali block to be parsed.
 * @returns {BlockContext} The corresponding parse tree structure.
 */
exports.parseBlock = function(block) {
    var parser = new DocumentParser();
    var tree = parser.parseBlock(block);
    return tree;
};


/**
 * This function takes a source code string containing a Bali expression
 * and parses it into the corresponding parse tree structure.
 * 
 * @param {string} expression The Bali expression to be parsed.
 * @returns {ExpressionContext} The corresponding parse tree structure.
 */
exports.parseExpression = function(expression) {
    var parser = new DocumentParser();
    var tree = parser.parseExpression(expression);
    return tree;
};


/**
 * This function takes a Bali document and formats it as source code.
 * 
 * @param {DocumentContext} tree The Bali parse tree to be formatted.
 * @param {string} optionalPadding An optional string that will be prepended to each line.
 * @returns {string} The formatted Bali document.
 */
exports.formatDocument = function(tree, optionalPadding) {
    var padding = optionalPadding || '';
    var formatter = new DocumentFormatter();
    var document = formatter.formatDocument(tree, padding);
    return document;
};
