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
var types = require('./nodes/Types');
var parser = require('./transformers/DocumentParser');


/**
 * This function parses a Bali source string and returns the corresponding
 * document.
 * 
 * @param {String} source The Bali source string.
 * @returns {BaliDocument} The resulting document.
 */
function fromSource(source) {
    var document = new BaliDocument(parser.parseDocument(source));
    return document;
}
exports.fromSource = fromSource;


/**
 * This function returns whether or not the specified object is a
 * document.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a document.
 */
function isDocument(object) {
    if (!object || object.constructor.name !== 'BaliDocument') return false;
    if (!types.isType(object.tree, types.DOCUMENT)) return false;
    if (!types.isType(object.getPreviousReference(), types.REFERENCE)) return false;
    if (!types.isType(object.getDocumentContent(), types.COMPONENT) &&
        !types.isType(object.getDocumentContent(), types.PROCEDURE)) return false;
    if (!object.getNotarySeals() || object.getNotarySeals().constructor.name !== 'Array') return false;
    return true;
}
exports.isDocument = isDocument;


/**
 * This constructor returns a new Bali document.
 * 
 * @param {Tree} tree The parse tree for the document.
 * @returns {BaliDocument} The new Bali document.
 */
function BaliDocument(tree) {
    this.tree = tree;
    return this;
}
BaliDocument.prototype.constructor = BaliDocument;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this document.
 */
BaliDocument.prototype.accept = function(visitor) {
    visitor.visitDocument(this.tree);
};


/**
 * This method returns a string representation of this document.
 * 
 * @returns {String} The string representation of this document.
 */
BaliDocument.prototype.toString = function() {
    var string = this.tree.toSource();
    return string;
};


/**
 * This method returns a Bali string representation of this document.
 * 
 * @param {String} indentation Optional indentation spaces to be prepended to
 * each line of the output string.
 * @returns {String} The Bali string representation of this document.
 */
BaliDocument.prototype.toSource = function(indentation) {
    var string = this.tree.toSource(indentation);
    return string;
};


/**
 * This function returns a (deep) copy of the document.
 * 
 * @returns {BaliDocument} A deep copy of the document.
 */
BaliDocument.prototype.copy = function() {
    var source = this.toSource();
    var copy = fromSource(source);
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
    var source = this.toSource();
    var draft = fromSource(source);
    draft.setPreviousReference(previousReference);
    draft.clearNotarySeals();
    return draft;
};


/**
 * This function returns a copy of the document without its last notary seal.
 * 
 * @returns {BaliDocument} A copy of the document without the last seal.
 */
BaliDocument.prototype.unsealed = function() {
    var copy = this.copy();
    copy.tree.children.pop();
    return copy;
};


/**
 * This method returns a reference to the previous version of the document if one exists.
 * 
 * @returns {Terminal} The reference to the previous version of the document.
 */
BaliDocument.prototype.getPreviousReference = function() {
    if (this.tree.children.length > 1 && this.tree.children[1].type !== types.SEAL) {
        return this.tree.children[0];
    }
};


/**
 * This method sets the reference to the previous version of the document.
 * 
 * @param {String|Terminal} reference The reference to the previous version of the document.
 */
BaliDocument.prototype.setPreviousReference = function(reference) {
    if (reference.constructor.name === 'String') {
        reference = parser.parseElement(reference);
    }
    if (this.tree.children.length > 1 && this.tree.children[1].type !== types.SEAL) {
        this.tree.children[0] = reference;  // replace the existing previous reference
    } else {
        this.tree.children.splice(0, 0, reference);  // insert the reference at the beginning
    }
};


/**
 * This method returns the document content.
 * 
 * @returns {Tree} The component or procedure that makes up the document content.
 */
BaliDocument.prototype.getDocumentContent = function() {
    if (this.tree.children.length > 1 && this.tree.children[1].type !== types.SEAL) {
        return this.tree.children[1];
    } else {
        return this.tree.children[0];
    }
};


/**
 * This method sets the document content.
 * 
 * @param {String|Tree} content The component or procedure that makes up the document content.
 */
BaliDocument.prototype.setDocumentContent = function(content) {
    if (content.constructor.name === 'String') {
        content = parser.parseComponent(content);
    }
    if (this.tree.children.length > 1 && this.tree.children[1].type !== types.SEAL) {
        this.tree.children[1] = content;
    } else {
        this.tree.children[0] = content;
    }
};


/**
 * This method returns the notary seal on the document at the specified index.
 * 
 * @param {Number} index The zero based index of the desired notary seal.
 * @returns {Tree} The requested notary seal.
 */
BaliDocument.prototype.getNotarySeal = function(index) {
    var first = this.tree.children.findIndex(function(child) {
        return child.type === types.SEAL;
    });
    return this.tree.children[first + index];  // JS zero based indexing
};


/**
 * This method returns the last notary seal on the document.
 * 
 * @returns {Tree} The last notary seal.
 */
BaliDocument.prototype.getLastSeal = function() {
    var size = this.tree.children.length;
    return this.tree.children[size - 1];
};


/**
 * This method appends a notary seal to the end of the document.
 * 
 * @param {String|Tree} seal The notary seal to be appended to the document.
 */
BaliDocument.prototype.addNotarySeal = function(seal) {
    if (seal.constructor.name === 'String') {
        seal = parser.parseSeal(seal);
    }
    this.tree.children.push(seal);
};


/**
 * This method returns an array containing the notary seals for the document.
 * 
 * @returns {Array} An array containing the notary seals for the document.
 */
BaliDocument.prototype.getNotarySeals = function() {
    var seals = [];
    this.tree.children.forEach(function(child) {
        if (child.type === types.SEAL) {
            seals.push(child);
        }
    });
    return seals;
};


/**
 * This method removes all notary seals from the document.
 */
BaliDocument.prototype.clearNotarySeals = function() {
    var index = this.tree.children.findIndex(function(child) {
        return child.type === types.SEAL;
    });
    this.tree.children.splice(index);  // remove the chilfren that are seals
};


/**
 * This function retrieves from a document the string value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The string value associated with the key.
 */
BaliDocument.prototype.getString = function(key) {
    if (key.constructor.name === 'String') {
        key = parser.parseComponent(key);
    }
    return this.getDocumentContent().getString(key);
};


/**
 * This function retrieves from a document the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
BaliDocument.prototype.getValue = function(key) {
    if (key.constructor.name === 'String') {
        key = parser.parseComponent(key);
    }
    return this.getDocumentContent().getValue(key);
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
    // NOTE: we must convert the these to a string first to make sure they end up as
    // components and not as terminals.  Also, we cannot call toSource() since they maybe
    // strings.
    key = parser.parseComponent(key.toString());
    value = parser.parseExpression(value.toString());
    return this.getDocumentContent().setValue(key, value);
};


/**
 * This function removes from a document the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
BaliDocument.prototype.deleteKey = function(key) {
    if (key.constructor.name === 'String') {
        key = parser.parseComponent(key);
    }
    return this.getDocumentContent().deleteKey(key);
};
