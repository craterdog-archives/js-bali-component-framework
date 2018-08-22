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
var types = require('./NodeTypes');
var formatter = require('../transformers/DocumentFormatter');


/**
 * This constructor creates a new document.
 * 
 * @param {Number} type The type of the document.
 * @param {TreeNode} body The parse tree node for the body of the document.
 * @param {TerminalNode} previousReference The parse tree node for the reference
 * to the previous version of the document.
 * @returns {Document} The new parse document.
 */
function Document(type, body, previousReference) {
    this.type = type;
    this.isSimple = false;
    this.body = body;
    this.previousReference = previousReference;
    this.seals = [];
    return this;
}
Document.prototype.constructor = Document;
exports.Document = Document;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this document.
 */
Document.prototype.accept = function(visitor) {
    switch(this.type) {
        case types.DOCUMENT:
            visitor.visitDocument(this);
            break;
        default:
            throw new Error('SYNTAX: An invalid document type was found: ' + this.type);
    }
};


/**
 * This method adds a notary seal to the list of seals for this document.
 * 
 * @param {TreeNode} seal The parse tree node defining the seal to be added to the document.
 */
Document.prototype.addSeal = function(seal) {
    this.seals.push(seal);
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
