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
var parser = require('../transformers/DocumentParser');
var formatter = require('../transformers/DocumentFormatter');


/**
 * This constructor creates a new document.
 * 
 * @param {Tree} documentContent The parse tree node for the content of the document.
 * @param {Terminal} previousReference The parse tree node for the reference
 * to the previous version of the document if one exists.
 * @returns {Document} The new parse document.
 */
function Document(documentContent, previousReference) {
    if (documentContent.constructor.name === 'String') {
        documentContent = parser.parseComponent(documentContent);
    }
    if (previousReference && previousReference.constructor.name === 'String') {
        previousReference = parser.parseElement(previousReference);
    }
    this.documentContent = documentContent;
    this.previousReference = previousReference;
    this.notarySeals = [];
    return this;
}
Document.prototype.constructor = Document;
exports.Document = Document;


Document.prototype.getSeal = function() {
    var seal = this.notarySeals[this.notarySeals.length - 1];
    return seal;
};


Document.prototype.getSeals = function() {
    var notarySeals = this.notarySeals.slice(0);  // copy the array
    return notarySeals;
};


Document.prototype.addSeal = function(previousReference, digitalSignature) {
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


Document.prototype.copy = function() {
    var source = this.toString();
    var copy = parser.parseDocument(source);
    return copy;
};


Document.prototype.draft = function(previousReference) {
    if (previousReference.constructor.name === 'String') {
        previousReference = parser.parseElement(previousReference);
    }
    var source = this.toString();
    var draft = parser.parseDocument(source);
    draft.previousReference = previousReference;
    draft.notarySeals = [];
    return draft;
};


Document.unsealed = function() {
    var copy = this.copy();
    copy.notarySeals.pop();
    return copy;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this document.
 */
Document.prototype.accept = function(visitor) {
    visitor.visitDocument(this);
};


/**
 * This method returns a string representation of this document.
 * 
 * @returns {String} The string representation of this document.
 */
Document.prototype.toString = function() {
    var string = formatter.formatParseTree(this);
    return string;
};
