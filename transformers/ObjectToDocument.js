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
var objects = require('../objects');


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
 * This function takes a JavaScript object and formats it as a Bali document. Each
 * line will be prepended with the specified padding string.
 * 
 * @param {DocumentContext} object The JavaScript object to be formatted.
 * @param {string} padding The string that should be prepended to each line.
 * @returns {string} The formatted document.
 */
ObjectToDocument.prototype.generateDocument = function(object, padding) {
    var visitor = new TransformingVisitor(padding);
    object.accept(visitor);
    return visitor.document;
};


// PRIVATE CLASSES

function TransformingVisitor(padding) {
    objects.ObjectVisitor.call(this);
    this.padding = padding === undefined ? '' : padding;
    this.document = '';
    this.depth = 0;
    return this;
}
TransformingVisitor.prototype = Object.create(objects.ObjectVisitor.prototype);
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


TransformingVisitor.prototype.addParameters = function(element) {
    if (element.parameters) {
        this.document += '(';
        this.visitComposite(element.parameters);
        this.document += ')';
    }
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitAngle = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitAny = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitBinary = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitComplex = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitComposite = function(element) {
    var i;
    var array;
    var table;
    var associations;
    var type = element.type;
    switch (type) {
        case 'RangeContext':
            var range = element.value;
            range.accept(this);
            break;
        case 'InlineArrayContext':
            array = element.value;
            array[0].accept(this);
            for (i = 1; i < array.length; i++) {
                this.document += ', ';
                array[i].accept(this);
            }
            break;
        case 'NewlineArrayContext':
            array = element.value;
            this.depth++;
            for (i = 0; i < array.length; i++) {
                this.appendNewline();
                array[i].accept(this);
            }
            this.depth--;
            this.appendNewline();
            break;
        case 'EmptyArrayContext':
            // nothing to do
            break;
        case 'InlineTableContext':
            table = element.value;
            associations = table.association();
            associations[0].accept(this);
            for (i = 1; i < associations.length; i++) {
                this.document += ', ';
                associations[i].accept(this);
            }
            break;
        case 'NewlineTableContext':
            table = element.value;
            associations = table.association();
            this.depth++;
            for (i = 0; i < associations.length; i++) {
                this.appendNewline();
                associations[i].accept(this);
            }
            this.depth--;
            this.appendNewline();
            break;
        case 'EmptyTableContext':
            this.document += ':';
            break;
        default:
            throw new Error('TRANSFORMER: An invalid composite type was found: ' + type);
    }
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitMoment = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitPercent = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitProbability = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitRange = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitReference = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitSymbol = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitTag = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitText = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
TransformingVisitor.prototype.visitVersion = function(element) {
    this.document += element.toString();
    this.addParameters(element);
};
