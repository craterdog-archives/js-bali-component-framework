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
 * This class defines a formatting visitor that "walks" a parse tree
 * produced by the BaliLanguageParser and generates a canonical version of
 * the corresponding Bali source document. An optional padding may be
 * specified that is prepended to each line of the Bali document.
 */
var elements = require('../elements');


/**
 * This constructor creates a new formatter with the specified padding.
 * 
 * @constructor
 * @returns {ObjectToDocument} The new formatter.
 */
function ObjectToDocument() {
    return this;
}
ObjectToDocument.prototype.constructor = ObjectToDocument;
exports.ObjectToDocument = ObjectToDocument;


/**
 * This function takes a Bali document and formats it as source code. Each
 * line will be prepended with the specified padding string.
 * 
 * @param {DocumentContext} baliDocument The Bali document to be formatted.
 * @param {string} padding The string that should be prepended to each line.
 * @returns {string} The formatted source code string.
 */
ObjectToDocument.prototype.generateDocument = function(object, padding) {
    var visitor = new TransformingVisitor(padding);
    object.accept(visitor);
    return visitor.document;
};


// PRIVATE CLASSES

function TransformingVisitor(padding) {
    elements.ElementVisitor.call(this);
    this.padding = padding === undefined ? '' : padding;
    this.document = '';
    this.depth = 0;
    return this;
}
TransformingVisitor.prototype = Object.create(elements.ElementVisitor.prototype);
TransformingVisitor.prototype.constructor = TransformingVisitor;
TransformingVisitor.prototype.indentation = '    ';  // indentation per level


TransformingVisitor.prototype.appendNewline = function() {
    this.document += '\n';
    this.document += this.getPadding();
};


TransformingVisitor.prototype.getPadding = function() {
    var padding = this.padding;
    for (var i = 0; i < this.depth; i++) {
        padding += TransformingVisitor.prototype.indentation;
    }
    return padding;
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitAngle = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitAny = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitBinary = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitComplex = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitComposite = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitMoment = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitPercent = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitProbability = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitRange = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitReference = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitSymbol = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitTag = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitText = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitVersion = function(element) {
};
