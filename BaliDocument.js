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
 * This class captures the state and methods associated with a Bali document.
 */
var parser = require('./transformers/DocumentParser');
var formatter = require('./transformers/DocumentFormatter');


/**
 * This function parses a Bali source string and returns the corresponding
 * document.
 * 
 * @param {String} source The Bali source string.
 * @returns {BaliDocument} The resulting document.
 */
exports.fromSource = function(source) {
    var document;
    if (source) {
        document = parser.parseDocument(source);
    } else {
        document = new BaliDocument();
    }
    return document;
};


/**
 * This function returns whether or not the specified object is a
 * document.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a document.
 */
exports.isDocument = function(object) {
    if (!object) return false;
    try {
        if (object.constructor.name === 'String') {
            object = parser.parseDocument(object);
        }
        return object.constructor.name === 'BaliDocument';
    } catch (e) {
        return false;
    }
};


/**
 * This constructor returns a new Bali document.
 * 
 * @returns {BaliDocument} The new Bali document.
 */
function BaliDocument() {
    this.notarySeals = [];
    return this;
}
BaliDocument.prototype.constructor = BaliDocument;


/**
 * This function returns a (deep) copy of the document.
 * 
 * @returns {BaliDocument} A deep copy of the document.
 */
BaliDocument.prototype.copy = function() {
    var source = this.toString();
    var copy = parser.parseDocument(source);
    return copy;
};


/**
 * This function returns a draft copy of the document. The previous version reference
 * and seals from the original document have been removed from the draft copy.
 * 
 * @param {String} previousReference A reference to the document.
 * @returns {BaliDocument} A draft copy of the document.
 */
BaliDocument.prototype.draft = function(previousReference) {
    if (previousReference.constructor.name === 'String') {
        previousReference = parser.parseElement(previousReference);
    }
    var source = this.toString();
    var draft = parser.parseDocument(source);
    draft.previousReference = previousReference;
    draft.notarySeals = [];
    return draft;
};


/**
 * This function returns a copy of the document without its last notary seal.
 * 
 * @returns {BaliDocument} A copy of the document without the last seal.
 */
BaliDocument.prototype.unsealed = function() {
    var copy = this.copy();
    copy.notarySeals.pop();
    return copy;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this document.
 */
BaliDocument.prototype.accept = function(visitor) {
    visitor.visitDocument(this);
};


/**
 * This method returns a Bali string representation of this document.
 * 
 * @param {String} padding Optional padding spaces to be prepended to
 * each line of the output string.
 * @returns {String} The Bali string representation of this document.
 */
BaliDocument.prototype.toBali = function(padding) {
    var string = formatter.formatTree(this, padding);
    return string;
};


/**
 * This method returns a string representation of this document.
 * 
 * @returns {String} The string representation of this document.
 */
BaliDocument.prototype.toString = function() {
    var string = formatter.formatTree(this);
    return string;
};


// ELEMENTS

/**
 * This function drills down a tree node to find it's terminal node and returns that element.
 * 
 * @returns {Terminal} The terminal node containing the element value.
 */
BaliDocument.prototype.element = function() {
    return this.documentContent.element();
};


// LISTS

/**
 * This function constructs an iterator for the specified list or catalog. If a catalog
 * is specified, the iterator returns the associations in the catalog.
 * 
 * @returns {ListIterator} The new iterator.
 */
BaliDocument.prototype.iterator = function() {
    return this.documentContent.iterator();
};


/**
 * This function retrieves from a list the item associated with the
 * specified index.
 * 
 * @param {Number} index The ordinal based index of the desired item.
 * @returns {Component} The item associated with the index.
 */
BaliDocument.prototype.getItem = function(index) {
    return this.documentContent.getItem(index);
};


/**
 * This function sets in a list the item associated with the specified index.
 * 
 * @param {Number} index The ordinal based index of the item.
 * @param {Component} item The item to be associated with the index.
 * @returns {Component} The old item associated with the index.
 */
BaliDocument.prototype.setItem = function(index, item) {
    return this.documentContent.setItem(index, item);
};


/**
 * This function adds a new item to a list.
 * 
 * @param {Component} item The item to be added to the list.
 */
BaliDocument.prototype.addItem = function(item) {
    return this.documentContent.addItem(item);
};


/**
 * This function removes an existing item from a list.
 * 
 * @param {Number} index The index of the item to be removed from the list.
 * @returns {Component} The old item associated with the index.
 */
BaliDocument.prototype.removeItem = function(index) {
    return this.documentContent.removeItem(index);
};


// CATALOGS

/**
 * This function retrieves from a document the string value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The string value associated with the key.
 */
BaliDocument.prototype.getString = function(key) {
    return this.documentContent.getString(key);
};


/**
 * This function retrieves from a document the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
BaliDocument.prototype.getValue = function(key) {
    return this.documentContent.getValue(key);
};


/**
 * This function sets in a document a value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @param {Component} value The value to be associated with the key.
 * @returns {Component} The old value associated with the key.
 */
BaliDocument.prototype.setValue = function(key, value) {
    return this.documentContent.setValue(key, value);
};


/**
 * This function removes from a document the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
BaliDocument.prototype.deleteKey = function(key) {
    return this.documentContent.deleteKey(key);
};


// NOTARY SEALS

/**
 * This function returns the last notary seal attached to the document.
 * 
 * @returns {Seal} The last notary seal attached to the document.
 */
BaliDocument.prototype.getLastSeal = function() {
    var seal = this.notarySeals[this.notarySeals.length - 1];
    return seal;
};


/**
 * This function returns the list of notary seals attached to the document.
 * 
 * @returns {Array} An array containing the notary seals.
 */
BaliDocument.prototype.getSeals = function() {
    var notarySeals = this.notarySeals.slice(0);  // copy the array
    return notarySeals;
};


/**
 * This function attaches a new notary seal to the document.
 * 
 * @param {String} previousReference A reference to the validation certificate for the seal.
 * @param {String} digitalSignature A base 64 encoded string containing the signature for the seal.
 */
BaliDocument.prototype.addSeal = function(previousReference, digitalSignature) {
    if (previousReference.constructor.name === 'String') {
        previousReference = parser.parseElement(previousReference);
    }
    if (digitalSignature.constructor.name === 'String') {
        digitalSignature = parser.parseElement(digitalSignature);
    }
    var seal = {
        certificateReference: previousReference,
        digitalSignature: digitalSignature
    };
    this.notarySeals.push(seal);
};
