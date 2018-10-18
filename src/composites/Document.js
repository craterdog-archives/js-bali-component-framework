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
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var Reference = require('../elements/Reference').Reference;
var parser = require('../utilities/DocumentParser');


// PUBLIC FUNCTIONS

/**
 * This constructor returns a new Bali document.
 * 
 * @param {Reference} previousCitation An optional citation to the previous version of the
 * @param {Component} documentContent The content of the document.
 * document.
 * @returns {Document} The new Bali document.
 */
function Document(previousCitation, documentContent) {
    Composite.call(this, types.DOCUMENT);
    if (previousCitation && previousCitation.constructor.name === 'String') {
        previousCitation = new Reference(previousCitation);
    }
    this.previousCitation = previousCitation;
    this.documentContent = documentContent;
    this.notarySeals = [];
    this.setComplex();  // documents won't fit inline
    return this;
}
Document.prototype = Object.create(Composite.prototype);
Document.prototype.constructor = Document;
exports.Document = Document;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this document.
 */
Document.prototype.accept = function(visitor) {
    visitor.visitDocument(this);
};


/**
 * This method returns an array containing the attributes of this document.
 * 
 * @returns {Array} An array containing the attributes of this document.
 */
Document.prototype.toArray = function() {
    var array = [];
    if (this.previousCitation) array.push(this.previousCitation);
    array.push(this.documentContent);
    this.notarySeals.forEach(function(seal) {
        array.push(seal);
    }, this);
    return array;
};


/**
 * This function returns a (deep) copy of the document.
 * 
 * @returns {Document} A deep copy of the document.
 */
Document.prototype.copy = function() {
    var source = this.toSource();
    var copy = parser.parseDocument(source);
    return copy;
};


/**
 * This function returns a draft copy of the document. The previous version citation
 * and seals from the original document have been removed from the draft copy.
 * 
 * @param {String} previousCitation A citation to the document.
 * @returns {Document} A draft copy of the document.
 */
Document.prototype.draft = function(previousCitation) {
    var source = this.documentContent.toSource();
    var draft = parser.parseDocument(source);
    draft.setPreviousCitation(previousCitation);
    return draft;
};


/**
 * This function returns a copy of the document without its last notary seal.
 * 
 * @returns {Document} A copy of the document without the last seal.
 */
Document.prototype.unsealed = function() {
    var copy = this.copy();
    copy.notarySeals.pop();  // remove the last notary seal
    return copy;
};


/**
 * This method sets the citation to the previous version of the document.
 * 
 * @param {String|Reference} citation The citation to the previous version of the document.
 */
Document.prototype.setPreviousCitation = function(citation) {
    if (citation.constructor.name === 'String') {
        citation = new Reference(citation);
    }
    this.previousCitation = citation;
};


/**
 * This method returns the last notary seal on the document.
 * 
 * @returns {Tree} The last notary seal.
 */
Document.prototype.getLastSeal = function() {
    var seal = this.notarySeals.peek();
    return seal;
};


/**
 * This method appends a notary seal to the end of the document.
 * 
 * @param {Seal} seal The new notary seal to be appended to the document.
 */
Document.prototype.addNotarySeal = function(seal) {
    this.notarySeals.push(seal);
};


/**
 * This function retrieves from a document the string value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The string value associated with the key.
 */
Document.prototype.getString = function(key) {
    return this.documentContent.getString(key);
};


/**
 * This function retrieves from a document the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
Document.prototype.getValue = function(key) {
    return this.documentContent.getValue(key);
};


/**
 * This function sets in a document a value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @param {String|Component} value The value to be associated with the key.
 * @returns {Component} The old value associated with the key.
 */
Document.prototype.setValue = function(key, value) {
    var oldValue = this.documentContent.setValue(key, value);
    return oldValue;
};


/**
 * This function removes from a document the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
Document.prototype.removeValue = function(key) {
    var oldValue = this.documentContent.removeValue(key);
    return oldValue;
};
