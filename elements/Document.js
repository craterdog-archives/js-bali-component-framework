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
 * This element class captures the state and methods associated with a document. A
 * document is a literal value plus optional parameters.
 */


/**
 * This constructor creates a new document based on the specified literal and optional
 * parameters.
 * 
 * @param {object} literal The literal value of the document.
 * @param {object} parameters The optional parameters associated with the document.
 * @returns {Document} The new document.
 */
function Document(literal, parameters) {
    if (!literal) {
        throw new Error('DOCUMENT: The literal value for a document must be defined.');
    }
    this.literal = literal;
    this.parameters = parameters;
    return this;
}
Document.prototype.constructor = Document;
exports.Document = Document;


Document.prototype.toString = function() {
    throw new Error('DOCUMENT: The toString() method is only defined for elemental types.');
};
