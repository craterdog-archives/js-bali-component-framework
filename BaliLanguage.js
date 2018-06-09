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
var parser = require('./transformers/DocumentParser');
var formatter = require('./transformers/DocumentFormatter');
var utilities = require('./syntax/NodeUtilities');


exports.parseDocument = function(document) {
    return parser.parseDocument(document);
};


exports.parseElement = function(element) {
    return parser.parseElement(element);
};


exports.parseStructure = function(structure) {
    return parser.parseStructure(structure);
};


exports.parseRange = function(range) {
    return parser.parseRange(range);
};


exports.parseList = function(list) {
    return parser.parseList(list);
};


exports.parseCatalog = function(catalog) {
    return parser.parseCatalog(catalog);
};


exports.parseBlock = function(block) {
    return parser.parseBlock(block);
};


exports.parseExpression = function(expression) {
    return parser.parseExpression(expression);
};


exports.formatDocument = function(tree, optionalPadding) {
    return formatter.formatDocument(tree, optionalPadding);
};


exports.association = function(key, value) {
    return utilities.association(key, value);
};


exports.getValueForKey = function(tree, key) {
    return utilities.getValueForKey(tree, key);
};


exports.setValueForKey = function(tree, key, value) {
    return utilities.setValueForKey(tree, key, value);
};


exports.iterator = function(tree) {
    return utilities.iterator(tree);
};


exports.valueForIndex = function(tree, index) {
    return utilities.valueForIndex(tree, index);
};

