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

/**
 * This library provides functions that scan a parse tree produced
 * by the DocumentParser and perform actions on the tree nodes.
 */
var types = require('../nodes/Types');


exports.scanTree = function(tree, key, value, remove) {
    var visitor = new ScanningVisitor(key, value, remove);
    tree.accept(visitor);
    return visitor.result;
};


// PRIVATE CLASSES

function ScanningVisitor(key, value, remove) {
    this.key = key;
    this.value = value;
    this.remove = remove;
    return this;
}
ScanningVisitor.prototype.constructor = ScanningVisitor;


// association: component ':' expression
ScanningVisitor.prototype.visitAssociation = function(association) {
    var component = association.children[0];
    var expression = association.children[1];
    var object = component.children[0];
    if (object.type !== types.STRUCTURE && object.type !== types.CODE && object.toBali() === this.key.toBali()) {
        this.result = expression;
        if (this.value) {
            association.children[1] = this.value;
        }
    } else if (expression.type === types.COMPONENT) {
        expression.accept(this);
    }
};


// catalog:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty catalog*/
ScanningVisitor.prototype.visitCatalog = function(catalog) {
    var associations = catalog.children;
    for (var i = 0; i < associations.length; i++) {
        var association = associations[i];
        association.accept(this);
        if (this.result) {
            if (this.remove) {
                associations.splice(i, 1);
            }
            break;
        }
    }
};


// code: '{' procedure '}'
ScanningVisitor.prototype.visitCode = function(code) {
    // ignore
};


// component: object parameters?
ScanningVisitor.prototype.visitComponent = function(component) {
    var object = component.children[0];
    if (object.type === types.STRUCTURE) {
        object.accept(this);
    }
};


// document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF
ScanningVisitor.prototype.visitDocument = function(document) {
    var documentContent = document.documentContent;
    documentContent.accept(this);
};


// element:
//     angle |
//     binary |
//     duration |
//     moment |
//     number |
//     percent |
//     probability |
//     reference |
//     symbol |
//     tag |
//     template |
//     text |
//     version
ScanningVisitor.prototype.visitElement = function(element) {
    // ignore
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
ScanningVisitor.prototype.visitList = function(list) {
    var expressions = list.children;
    for (var i = 0; i < expressions.length; i++) {
        var expression = expressions[i];
        if (expression.type === types.COMPONENT) {
            expression.accept(this);
        }
        if (this.result) break;
    }
};


// procedure:
//     statement (';' statement)* |
//     NEWLINE (statement NEWLINE)* |
//     /*empty procedure*/
ScanningVisitor.prototype.visitProcedure = function(procedure) {
    // ignore
};


// structure: '[' collection ']'
ScanningVisitor.prototype.visitStructure = function(structure) {
    var collection = structure.children[0];
    if (collection.type !== types.RANGE) {
        collection.accept(this);
    }
};
