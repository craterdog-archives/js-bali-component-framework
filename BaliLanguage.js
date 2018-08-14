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


/**
 * This function parses a Bali source string and returns the corresponding
 * document.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting document.
 */
exports.parseDocument = function(source) {
    return parser.parseDocument(source);
};


/**
 * This function parses a Bali source string and returns the corresponding
 * component.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting component.
 */
exports.parseComponent = function(source) {
    return parser.parseComponent(source);
};


/**
 * This function parses a Bali source string and returns the corresponding
 * parameters.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting parameters.
 */
exports.parseParameters = function(source) {
    return parser.parseParameters(source);
};


/**
 * This function parses a Bali source string and returns the corresponding
 * element.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting element.
 */
exports.parseElement = function(source) {
    return parser.parseElement(source);
};


/**
 * This function parses a Bali source string and returns the corresponding
 * structure.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting structure.
 */
exports.parseStructure = function(source) {
    return parser.parseStructure(source);
};


/**
 * This function parses a Bali source string and returns the corresponding
 * range.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting range.
 */
exports.parseRange = function(source) {
    return parser.parseRange(source);
};


/**
 * This function parses a Bali source string and returns the corresponding
 * list.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting list.
 */
exports.parseList = function(source) {
    return parser.parseList(source);
};


/**
 * This function parses a Bali source string and returns the corresponding
 * catalog.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting catalog.
 */
exports.parseCatalog = function(source) {
    return parser.parseCatalog(source);
};


/**
 * This function parses a Bali source string and returns the corresponding
 * procedure.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting procedure.
 */
exports.parseProcedure = function(source) {
    return parser.parseProcedure(source);
};


/**
 * This function parses a Bali source string and returns the corresponding
 * expression.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting expression.
 */
exports.parseExpression = function(source) {
    return parser.parseExpression(source);
};


/**
 * This function formats the specified parse tree object as Bali source string.
 * 
 * @param {Object} tree The parse tree to be formatted.
 * @param {String} optionalPadding An optional string that is used
 * to prefix each line of the resulting string.
 * @returns {String} The resulting source string.
 */
exports.formatParseTree = function(tree, optionalPadding) {
    return formatter.formatParseTree(tree, optionalPadding);
};


/**
 * This function returns whether or not the specified object is a
 * document.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a document.
 */
exports.isDocument = function(object) {
    return utilities.isDocument(object);
};


/**
 * This function returns a (deep) copy of the specified document.
 * 
 * @param {Document} document The document.
 * @returns {Document} A deep copy of the document.
 */
exports.copyDocument = function(document) {
    return utilities.copyDocument(document);
};


/**
 * This function returns a draft copy of the specified document. The previous version
 * citation and seals from the original document have been removed from the draft copy.
 * 
 * @param {Document} document The document.
 * @returns {Document} A draft copy of the document.
 */
exports.draftDocument = function(document) {
    return utilities.draftDocument(document);
};


/**
 * This function returns a string version of the citation to the previous
 * version of the document if one exists.
 * 
 * @param {Document} document The document.
 * @returns {String} A string version of the citation to the previous version of the document.
 */
exports.getPreviousCitation = function(document) {
    return utilities.getPreviousCitation(document);
};


/**
 * This function sets the citation to the previous version of the
 * document to the specified value.
 * 
 * @param {Document} document The document.
 * @param {Citation} previousCitation A citation to the previous version of the document.
 */
exports.setPreviousCitation = function(document, previousCitation) {
    return utilities.setPreviousCitation(document, previousCitation);
};


/**
 * This function returns the body of the document.
 * 
 * @param {Document} document The document.
 * @returns {TreeNode} The body of the document.
 */
exports.getBody = function(document) {
    return utilities.getBody(document);
};


/**
 * This function sets the body of the document to the specified value.
 * 
 * @param {Document} document The document.
 * @param {TreeNode} body The new body of the document.
 */
exports.setBody = function(document, body) {
    return utilities.setBody(document, body);
};


/**
 * This function returns the last notary seal attached to a document.
 * 
 * @param {Document} document The document.
 * @returns {Seal} The last notary seal attached to the document.
 */
exports.getSeal = function(document) {
    return utilities.getSeal(document);
};


/**
 * This function returns the list of notary seals attached to a document.
 * 
 * @param {Document} document The document.
 * @returns {Array} An array of notary seals.
 */
exports.getSeals = function(document) {
    return utilities.getSeals(document);
};


/**
 * This function attaches a new notary seal to a document.
 * 
 * @param {Document} document The document.
 * @param {String} reference A reference to the validation certificate for the seal.
 * @param {String} binary A base 64 encoded string containing the signature for the seal.
 */
exports.addSeal = function(document, reference, binary) {
    return utilities.addSeal(document, reference, binary);
};


/**
 * This function returns a copy of a document without its last notary seal.
 * 
 * @param {Document} document The document.
 * @returns {Document} A copy of the document without the last seal.
 */
exports.removeSeal = function(document) {
    return utilities.removeSeal(document);
};


/**
 * This function retrieves a string version of the citation referring to a
 * notary certificate for a notary seal.
 * 
 * @param {Seal} seal The notary seal.
 * @returns {String} A string version of the citation to the notary certificate
 * that created the notary seal.
 */
exports.getCitation = function(seal) {
    return utilities.getCitation(seal);
};


/**
 * This function retrieves a string version of the digital signature of the document
 * that was notarized.
 * 
 * @param {Seal} seal The notary seal.
 * @returns {String} A string version of the base 32 encoded binary for the digital signature.
 */
exports.getSignature = function(seal) {
    return utilities.getSignature(seal);
};


/**
 * This function constructs an iterator for the specified list.
 * 
 * @param {List} list The list.
 * @returns {Iterator} The new iterator.
 */
exports.iterator = function(list) {
    return utilities.iterator(list);
};


/**
 * This function retrieves from a list the value associated with the
 * specified index.
 * 
 * @param {List} list The list.
 * @param {Number} index The ordinal based index of the desired value.
 * @returns {Component} The value associated with the index.
 */
exports.getValueForIndex = function(list, index) {
    return utilities.getValueForIndex(list, index);
};


/**
 * This function sets in a list the value associated with the specified index.
 * 
 * @param {List} list The list.
 * @param {Number} index The ordinal based index of the value.
 * @param {Component} value The value to be associated with the index.
 * @returns {Component} The old value associated with the index.
 */
exports.setValueForIndex = function(list, index, value) {
    return utilities.getValueForIndex(list, index, value);
};


/**
 * This function adds a new value to a list.
 * 
 * @param {List} list The list.
 * @param {Component} value The value to be added to the list.
 */
exports.addValue = function(list, value) {
    return utilities.addValue(list, value);
};


/**
 * This function retrieves from a catalog the string value associated with the
 * specified key.
 * 
 * @param {Catalog} catalog The catalog.
 * @param {String} key The string form of the key.
 * @returns {Component} The string value associated with the key.
 */
exports.getStringForKey = function(catalog, key) {
    return utilities.getStringForKey(catalog, key);
};


/**
 * This function retrieves from a catalog the value associated with the
 * specified key.
 * 
 * @param {Catalog} catalog The catalog.
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
exports.getValueForKey = function(catalog, key) {
    return utilities.getValueForKey(catalog, key);
};


/**
 * This function sets in a catalog a value associated with the
 * specified key.
 * 
 * @param {Catalog} catalog The catalog.
 * @param {String} key The string form of the key.
 * @param {Component} value The value to be associated with the key.
 * @returns {Component} The old value associated with the key.
 */
exports.setValueForKey = function(catalog, key, value) {
    return utilities.setValueForKey(catalog, key, value);
};


/**
 * This function removes from a catalog the value associated with the
 * specified key.
 * 
 * @param {Catalog} catalog The catalog.
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
exports.deleteKey = function(catalog, key) {
    return utilities.deleteKey(catalog, key);
};


/**
 * This function returns whether or not the specified object is a
 * reference.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a reference.
 */
exports.isReference = function(object) {
    return utilities.isReference(object);
};


/**
 * This function returns whether or not the specified object is a
 * version string.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a version string.
 */
exports.isVersion = function(object) {
    return utilities.isVersion(object);
};


/**
 * This function returns whether or not the specified object is a
 * tag.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a tag.
 */
exports.isTag = function(object) {
    return utilities.isTag(object);
};


/**
 * This function creates a new unique random tag.
 * 
 * @returns {Tag} The new tag.
 */
exports.tag = function() {
    return utilities.tag();
};