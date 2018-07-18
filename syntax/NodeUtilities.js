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
var random = require('bali-utilities/RandomUtilities');
var codex = require('bali-utilities/EncodingUtilities');
var parser = require('../transformers/LanguageParser');
var NodeTypes = require('./NodeTypes');
var TreeNode = require('./TreeNode').TreeNode;
var TerminalNode = require('./TerminalNode').TerminalNode;


exports.isDocument = function(document) {
    if (!document) return false;
    try {
        var type = document.constructor.name;
        if (type === 'String') {
            document = parser.parseDocument(document);
        }
        return document.constructor.name === 'TreeNode' && document.type === NodeTypes.DOCUMENT;
    } catch (e) {
        return false;
    }
};


exports.isReference = function(reference) {
    if (!reference) return false;
    try {
        var type = reference.constructor.name;
        if (type === 'URL') {
            reference = '<' + reference.toString().replace(/%23/, '#') + '>';
            type = reference.constructor.name;
        }
        if (type === 'String') {
            reference = parser.parseElement(reference);
        }
        return reference.constructor.name === 'TerminalNode' && reference.type === NodeTypes.REFERENCE;
    } catch (e) {
        return false;
    }
};


exports.isVersion = function(version) {
    if (!version) return false;
    try {
        var type = version.constructor.name;
        if (type === 'String') {
            version = parser.parseElement(version);
        }
        return version.constructor.name === 'TerminalNode' && version.type === NodeTypes.VERSION;
    } catch (e) {
        return false;
    }
};


/**
 * This function returns a new document parse tree containing the specified
 * component parse tree.
 * 
 * @param {TreeNode} component The parse tree node for the component.
 * @returns The new parse tree for the document.
 */
exports.document = function(component) {
    var document = new TreeNode(NodeTypes.DOCUMENT);
    document.addChild(component);
    return document;
};


/**
 * This function returns a new unique tag.
 * 
 * @returns The terminal node for the new tag.
 */
exports.tag = function() {
    var bytes = random.generateRandomBytes(20);
    var value = '#' + codex.base32Encode(bytes);
    var tag = new TerminalNode(NodeTypes.TAG, value);
    return tag;
};


/**
 * This function returns a new list structure parse tree.  The structure
 * of the resulting tree is:
 * COMPONENT
 *   STRUCTURE
 *     LIST
 * 
 * @returns The new parse tree for the list structure.
 */
exports.list = function() {
    var list = new TreeNode(NodeTypes.LIST);
    var structure = new TreeNode(NodeTypes.STRUCTURE);
    var component = new TreeNode(NodeTypes.COMPONENT);
    component.addChild(structure);
    structure.addChild(list);
    return component;
};


/**
 * This function constructs an iterator for the specified list component.
 * 
 * @param {TreeNode} tree The parse tree node containing the list.
 * @returns {Iterator} The new iterator.
 */
exports.iterator = function(tree) {
    var structure = tree.children[0];
    var list = structure.children[0];
    var iterator = new ListIterator(list);
    return iterator;
};


/**
 * This function takes a Bali parse tree list and returns the expression
 * associated with the specified index.
 * 
 * @param {TreeNode} tree The parse tree list.
 * @param {Number} index The index of the desired component.
 * @returns {TreeNode} The tree node associated with the index.
 */
exports.getValueForIndex = function(tree, index) {
    var component = tree.children[0];
    var structure = component.children[0];
    var list = structure.children[0];
    var expressions = list.children;
    if (index < expressions.length) {
        return expressions[index];
    } else {
        return undefined;
    }
};


/**
 * This function takes a Bali parse tree list and returns the expression
 * associated with the specified index.
 * 
 * @param {TreeNode} tree The parse tree list.
 * @param {Number} index The index of the component to be replaced.
 * @param {TreeNode} value The tree node value to be set at the index.
 * @returns {TreeNode} The old tree node associated with the index.
 */
exports.setValueForIndex = function(tree, index, value) {
    var component = tree.children[0];
    var structure = component.children[0];
    var list = structure.children[0];
    var expressions = list.children;
    var old = expressions[index];
    expressions[index] = value;
    return old;
};


/**
 * This function takes a Bali parse tree list and returns the expression
 * associated with the specified index.
 * 
 * @param {TreeNode} tree The parse tree list.
 * @param {TreeNode} value The tree node value to be added to the list.
 */
exports.addValue = function(tree, value) {
    var component = tree.children[0];
    var structure = component.children[0];
    var list = structure.children[0];
    var expressions = list.children;
    expressions.push(value);
};


/**
/**
 * This function returns a new catalog structure parse tree.  The structure
 * of the resulting tree is:
 * COMPONENT
 *   STRUCTURE
 *     CATALOG
 * 
 * @returns The new parse tree for the catalog structure.
 */
exports.catalog = function() {
    var catalog = new TreeNode(NodeTypes.CATALOG);
    var structure = new TreeNode(NodeTypes.STRUCTURE);
    var component = new TreeNode(NodeTypes.COMPONENT);
    component.addChild(structure);
    structure.addChild(catalog);
    return component;
};


/**
 * This function returns a new association parse tree.  The structure
 * of the resulting tree is:
 * ASSOCIATION
 *   COMPONENT
 *     SYMBOL (key)
 *   EXPRESSION (value)
 *
 * @param {String} key The symbol that is the key for the association.
 * @param {String|TreeNode} value The string or node value for the association.
 * @return {TreeNode} The new tree node for the association.
 */
exports.association = function(key, value) {
    var association = new TreeNode(NodeTypes.ASSOCIATION);

    // convert the key into an element if it is a string
    if (typeof(key) === 'string' || key instanceof String) {
        key = parser.parseElement(key);
    }

    // wrap the key and add it to the association
    var component = new TreeNode(NodeTypes.COMPONENT);
    component.addChild(key);
    association.addChild(component);

    // convert the value into an element component if it is a string
    if (typeof(value) === 'string' || value instanceof String) {
        var element = parser.parseElement(value);
        value = new TreeNode(NodeTypes.COMPONENT);
        value.addChild(element);
    }
    association.addChild(value);

    return association;
};


/**
 * This function takes a Bali parse tree and searches it for the specified
 * key in an association. If the key is found, even in a nested structure,
 * the associated value is returned. The structure of the target association
 * is:
 * ASSOCIATION
 *   COMPONENT
 *     SYMBOL (key)
 *   EXPRESSION (value)
 * 
 * @param {TreeNode} tree The parse tree to be searched.
 * @param {String} key The string form of the element type key.
 * @returns {TreeNode} The tree node associated with the key.
 */
exports.getValueForKey = function(tree, key) {
    var visitor = new SearchingVisitor(key);
    tree.accept(visitor);
    return visitor.result;
};


/**
 * This function takes a Bali parse tree for a catalog structure and sets
 * the value of a key. The structure of the catalog structure is:
 * COMPONENT
 *   STRUCTURE
 *     CATALOG
 *       ASSOCIATION
 *         COMPONENT
 *           SYMBOL (key)
 *         EXPRESSION (value)
 *       ASSOCIATION
 *         COMPONENT
 *           SYMBOL (key)
 *         EXPRESSION (value)
 *       ...
 * 
 * @param {TreeNode} tree The parse tree for the catalog structure.
 * @param {String} key The string form of the element type key.
 * @param {TreeNode} value The tree node for the value.
 */
exports.setValueForKey = function(tree, key, value) {
    var association, component, symbol;
    var structure = tree.children[0];
    var catalog = structure.children[0];

    // convert the value into an element component if it is a string
    if (typeof(value) === 'string' || value instanceof String) {
        var element = parser.parseElement(value);
        value = new TreeNode(NodeTypes.COMPONENT);
        value.addChild(element);
    }

    // check to see if the symbol already exists in the catalog
    var associations = catalog.children;
    for (var i = 0; i < associations.length; i++) {
        association = associations[i];
        component = association.children[0];
        symbol = component.children[0];
        if (symbol.value === key) {
            association.children[1] = value;
            return;
        }
    }

    // add a new association to the catalog
    association = exports.association(key, value);
    catalog.addChild(association);
};


/**
 * This function takes a Bali parse tree for a catalog structure and sets
 * the value of a key. The structure of the catalog structure is:
 * COMPONENT
 *   STRUCTURE
 *     CATALOG
 *       ASSOCIATION
 *         COMPONENT
 *           SYMBOL (key)
 *         EXPRESSION (value)
 *       ASSOCIATION
 *         COMPONENT
 *           SYMBOL (key)
 *         EXPRESSION (value)
 *       ...
 * 
 * @param {TreeNode} tree The parse tree for the catalog structure.
 * @param {String} key The string form of the element type key.
 * @returns {TreeNode} The tree node for the removed value.
 */
exports.deleteKey = function(tree, key) {
    var association, component, symbol;
    var structure = tree.children[0];
    var catalog = structure.children[0];

    // find the key in the catalog
    var associations = catalog.children;
    for (var i = 0; i < associations.length; i++) {
        association = associations[i];
        component = association.children[0];
        symbol = component.children[0];
        if (symbol.value === key) {
            associations.splice(i, 1);  // remove this association
            return;
        }
    }
};


/**
 * This function takes a Bali parse tree for a document and returns the list of seals
 * associated with it.
 * 
 * @param {TreeNode} document The parse tree for the document.
 * @returns {Array} An array of seals.
 */
exports.getSeals = function(document) {
    var seals = [];
    for (var i = 1; i < document.children.length; i++) {
        seals.push(document.children[i]);
    }
    return seals;
};


/**
 * This function takes a Bali parse tree for a document and adds a notary seal to the end
 * of it.
 * 
 * @param {TreeNode} document The parse tree for the document.
 * @param {String} reference A reference to the validation certificate for the seal.
 * @param {String} binary A base 64 encoded string containing the signature for the seal.
 */
exports.addSeal = function(document, reference, binary) {
    var seal = new TreeNode(NodeTypes.SEAL);
    var citation = new TerminalNode(NodeTypes.REFERENCE, reference);
    seal.addChild(citation);
    var signature = new TerminalNode(NodeTypes.BINARY, binary);
    seal.addChild(signature);
    document.addChild(seal);
};


/**
 * This function takes a Bali parse tree for a document and returns the body of the
 * document without the last notary seal.
 * 
 * @param {TreeNode} document The parse tree for the document.
 * @returns {TreeNode} The body of the document without the last seal.
 */
exports.getBody = function(document) {
    var body = new TreeNode(NodeTypes.DOCUMENT);
    for (var i = 0; i < document.children.length - 1; i++) {
        body.addChild(document.children[i]);
    }
    return body;
};


/**
 * This function takes a Bali parse tree for a document and retrieves the citation
 * to the notary certificate for the notary seal on the document.
 * 
 * @param {TreeNode} document The parse tree for the document.
 * @returns {Reference} A citation to the notary certificate.
 */
exports.getCitation = function(document) {
    var seal = document.children[document.children.length - 1];
    var citation = seal.children[0];
    return citation;
};


/**
 * This function takes a Bali parse tree for a document and retrieves the signature
 * part of the notary seal on the document.
 * 
 * @param {TreeNode} document The parse tree for the document.
 * @returns {Binary} The signature part of the notary seal.
 */
exports.getSignature = function(document) {
    var seal = document.children[document.children.length - 1];
    var signature = seal.children[1];
    return signature;
};


// PRIVATE CLASSES

function ListIterator(list) {
    this.expressions = list.children;
    this.index = 0;
    return this;
}
ListIterator.prototype.constructor = ListIterator;


ListIterator.prototype.hasNext = function() {
    return this.index < this.expressions.length;
};


ListIterator.prototype.getNext = function() {
    if (this.index < this.expressions.length) {
        return this.expressions[this.index++];
    } else {
        return undefined;
    }
};


function SearchingVisitor(value) {
    this.value = value;
    return this;
}
SearchingVisitor.prototype.constructor = SearchingVisitor;


// association: component ':' expression
SearchingVisitor.prototype.visitAssociation = function(tree) {
    var component = tree.children[0];
    var expression = tree.children[1];
    var object = component.children[0];
    //if (object.type !== NodeTypes.STRUCTURE &&
            //object.type !== NodeTypes.BLOCK &&
    if (object.value === this.value) {
        this.result = expression;
    } else if (expression.type === NodeTypes.COMPONENT) {
        expression.accept(this);
    }
};


// catalog:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty catalog*/
SearchingVisitor.prototype.visitCatalog = function(tree) {
    var associations = tree.children;
    for (var i = 0; i < associations.length; i++) {
        associations[i].accept(this);
    }
};


// component: object parameters?
SearchingVisitor.prototype.visitComponent = function(tree) {
    var object = tree.children[0];
    if (object.type === NodeTypes.STRUCTURE) {
        object.accept(this);
    }
};


// document: NEWLINE* component NEWLINE* EOF
SearchingVisitor.prototype.visitDocument = function(tree) {
    var component = tree.children[0];
    component.accept(this);
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
SearchingVisitor.prototype.visitList = function(tree) {
    var expressions = tree.children;
    for (var i = 1; i < expressions.length; i++) {
        var expression = expressions[i];
        if (expression.type === NodeTypes.COMPONENT) {
            expression.accept(this);
        }
    }
};


// structure: '[' collection ']'
SearchingVisitor.prototype.visitStructure = function(tree) {
    var structure = tree.children[0];
    if (structure.type !== NodeTypes.RANGE) {
        structure.accept(this);
    }
};
