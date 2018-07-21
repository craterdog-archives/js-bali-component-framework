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


exports.isDocument = function(document) {
    return utilities.isDocument(document);
};


exports.isReference = function(reference) {
    return utilities.isReference(reference);
};


exports.isVersion = function(version) {
    return utilities.isVersion(version);
};


exports.document = function(tree) {
    return utilities.document(tree);
};


exports.tag = function() {
    return utilities.tag();
};


exports.list = function(tree) {
    return utilities.list(tree);
};


exports.iterator = function(tree) {
    return utilities.iterator(tree);
};


exports.getValueForIndex = function(tree, index) {
    return utilities.getValueForIndex(tree, index);
};


exports.setValueForIndex = function(tree, index, value) {
    return utilities.getValueForIndex(tree, index, value);
};


exports.addValue = function(tree, value) {
    return utilities.addValue(tree, value);
};


exports.catalog = function(tree) {
    return utilities.catalog(tree);
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


exports.removeSeal = function(document) {
    return utilities.removeSeal(document);
};


exports.getSeal = function(document) {
    return utilities.getSeal(document);
};


exports.getSeals = function(document) {
    return utilities.getSeals(document);
};


exports.getCitation = function(seal) {
    return utilities.getCitation(seal);
};


exports.getSignature = function(seal) {
    return utilities.getSignature(seal);
};

exports.addSeal = function(document, reference, binary) {
    return utilities.addSeal(document, reference, binary);
};

