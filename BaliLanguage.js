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
var parser = require('./transformers/LanguageParser');
var formatter = require('./transformers/LanguageFormatter');
var utilities = require('./syntax/NodeUtilities');


exports.parseDocument = function(source) {
    return parser.parseDocument(source);
};


exports.parseComponent = function(source) {
    return parser.parseComponent(source);
};


exports.parseParameters = function(source) {
    return parser.parseParameters(source);
};


exports.parseElement = function(source) {
    return parser.parseElement(source);
};


exports.parseStructure = function(source) {
    return parser.parseStructure(source);
};


exports.parseRange = function(source) {
    return parser.parseRange(source);
};


exports.parseList = function(source) {
    return parser.parseList(source);
};


exports.parseCatalog = function(source) {
    return parser.parseCatalog(source);
};


exports.parseProcedure = function(source) {
    return parser.parseProcedure(source);
};


exports.parseExpression = function(source) {
    return parser.parseExpression(source);
};


exports.formatParseTree = function(tree, optionalPadding) {
    return formatter.formatParseTree(tree, optionalPadding);
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


exports.deleteKey = function(tree, key) {
    return utilities.deleteKey(tree, key);
};


exports.iterator = function(tree) {
    return utilities.iterator(tree);
};


exports.valueForIndex = function(tree, index) {
    return utilities.valueForIndex(tree, index);
};

