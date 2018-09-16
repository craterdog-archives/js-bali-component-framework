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
 * This class captures the state and methods associated with a parse tree node.
 */
var types = require('./Types');
var Terminal = require('./Terminal').Terminal;
var parser = require('../transformers/DocumentParser');
var formatter = require('../transformers/DocumentFormatter');
var scanner = require('../transformers/DocumentScanner');


/**
 * This constructor creates a new tree node.
 * 
 * @param {Number} type The type of the tree node.
 * @param {Number} size The initial size of the tree node.
 * @returns {Tree} The new tree node.
 */
function Tree(type, size) {
    this.type = type;
    this.size = size;
    this.children = [];
    return this;
}
Tree.prototype.constructor = Tree;
exports.Tree = Tree;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this tree node.
 */
Tree.prototype.accept = function(visitor) {
    switch(this.type) {
        case types.ARITHMETIC_EXPRESSION:
            visitor.visitArithmeticExpression(this);
            break;
        case types.ASSOCIATION:
            visitor.visitAssociation(this);
            break;
        case types.BLOCK:
            visitor.visitBlock(this);
            break;
        case types.BREAK_CLAUSE:
            visitor.visitBreakClause(this);
            break;
        case types.CHECKOUT_CLAUSE:
            visitor.visitCheckoutClause(this);
            break;
        case types.CODE:
            visitor.visitCode(this);
            break;
        case types.COMMIT_CLAUSE:
            visitor.visitCommitClause(this);
            break;
        case types.COMPARISON_EXPRESSION:
            visitor.visitComparisonExpression(this);
            break;
        case types.COMPLEMENT_EXPRESSION:
            visitor.visitComplementExpression(this);
            break;
        case types.COMPONENT:
            visitor.visitComponent(this);
            break;
        case types.CONTINUE_CLAUSE:
            visitor.visitContinueClause(this);
            break;
        case types.DEFAULT_EXPRESSION:
            visitor.visitDefaultExpression(this);
            break;
        case types.DEREFERENCE_EXPRESSION:
            visitor.visitDereferenceExpression(this);
            break;
        case types.DISCARD_CLAUSE:
            visitor.visitDiscardClause(this);
            break;
        case types.EVALUATE_CLAUSE:
            visitor.visitEvaluateClause(this);
            break;
        case types.EXPONENTIAL_EXPRESSION:
            visitor.visitExponentialExpression(this);
            break;
        case types.FACTORIAL_EXPRESSION:
            visitor.visitFactorialExpression(this);
            break;
        case types.FUNCTION_EXPRESSION:
            visitor.visitFunctionExpression(this);
            break;
        case types.HANDLE_CLAUSE:
            visitor.visitHandleClause(this);
            break;
        case types.IF_CLAUSE:
            visitor.visitIfClause(this);
            break;
        case types.INDICES:
            visitor.visitIndices(this);
            break;
        case types.INVERSION_EXPRESSION:
            visitor.visitInversionExpression(this);
            break;
        case types.LIST:
            visitor.visitList(this);
            break;
        case types.LOGICAL_EXPRESSION:
            visitor.visitLogicalExpression(this);
            break;
        case types.MAGNITUDE_EXPRESSION:
            visitor.visitMagnitudeExpression(this);
            break;
        case types.MESSAGE_EXPRESSION:
            visitor.visitMessageExpression(this);
            break;
        case types.PARAMETERS:
            visitor.visitParameters(this);
            break;
        case types.PRECEDENCE_EXPRESSION:
            visitor.visitPrecedenceExpression(this);
            break;
        case types.PROCEDURE:
            visitor.visitProcedure(this);
            break;
        case types.PUBLISH_CLAUSE:
            visitor.visitPublishClause(this);
            break;
        case types.QUEUE_CLAUSE:
            visitor.visitQueueClause(this);
            break;
        case types.RANGE:
            visitor.visitRange(this);
            break;
        case types.RETURN_CLAUSE:
            visitor.visitReturnClause(this);
            break;
        case types.SAVE_CLAUSE:
            visitor.visitSaveClause(this);
            break;
        case types.SELECT_CLAUSE:
            visitor.visitSelectClause(this);
            break;
        case types.STATEMENT:
            visitor.visitStatement(this);
            break;
        case types.STRUCTURE:
            visitor.visitStructure(this);
            break;
        case types.SUBCOMPONENT:
            visitor.visitSubcomponent(this);
            break;
        case types.SUBCOMPONENT_EXPRESSION:
            visitor.visitSubcomponentExpression(this);
            break;
        case types.CATALOG:
            visitor.visitCatalog(this);
            break;
        case types.THROW_CLAUSE:
            visitor.visitThrowClause(this);
            break;
        case types.WAIT_CLAUSE:
            visitor.visitWaitClause(this);
            break;
        case types.WHILE_CLAUSE:
            visitor.visitWhileClause(this);
            break;
        case types.WITH_CLAUSE:
            visitor.visitWithClause(this);
            break;
        default:
            throw new Error('SYNTAX: An invalid tree node type was found: ' + types.NODE_TYPES[this.type]);
    }
};


/**
 * This method adds a child node to this tree node.
 * 
 * @param {Tree|Terminal} node The node to be added as the next child of this tree node.
 */
Tree.prototype.addChild = function(node) {
    this.children.push(node);
    this.size += node.size;
};


/**
 * This method returns a Bali string representation of this tree node.
 * 
 * @param {String} padding Optional padding spaces to be prepended to
 * each line of the output string.
 * @returns {String} The Bali string representation of this tree node.
 */
Tree.prototype.toSource = function(padding) {
    padding = padding ? padding : '';
    var string = formatter.formatTree(this, padding);
    return string;
};


/**
 * This method returns a string representation of this tree node.
 * 
 * @returns {String} The string representation of this tree node.
 */
Tree.prototype.toString = function() {
    var string = formatter.formatTree(this);
    return string;
};


// ELEMENTS

/**
 * This function drills down a tree node to find it's terminal node and returns that element.
 * 
 * @returns {Terminal} The terminal node containing the element value.
 */
Tree.prototype.element = function() {
    var node = this;
    while (node.constructor.name === 'Tree') {
        node = node.children[0];
    }
    return node;
};


// LISTS

/**
 * This function constructs an iterator for the specified list or catalog. If a catalog
 * is specified, the iterator returns the associations in the catalog.
 * 
 * @returns {ListIterator} The new iterator.
 */
Tree.prototype.iterator = function() {
    var iterator;
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            iterator = new ListIterator(collection);
        }
    }
    return iterator;
};


/**
 * This function retrieves from a list the item associated with the
 * specified index.
 * 
 * @param {Number} index The ordinal based index of the desired item.
 * @returns {Component} The item associated with the index.
 */
Tree.prototype.getItem = function(index) {
    var item;
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            if (collection.type === types.LIST) {
                item = collection.children[index];
            }
        }
    }
    return item;
};


/**
 * This function sets in a list the item associated with the specified index.
 * 
 * @param {Number} index The ordinal based index of the item.
 * @param {Component} item The item to be associated with the index.
 * @returns {Component} The old item associated with the index.
 */
Tree.prototype.setItem = function(index, item) {
    var old;
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            if (collection.type === types.LIST) {
                old = collection.children[index];
                collection.size -= old.size;
                collection.children[index] = item;
                collection.size += item.size;
            }
        }
    }
    return old;
};


/**
 * This function adds a new item to a list.
 * 
 * @param {Component} item The item to be added to the list.
 */
Tree.prototype.addItem = function(item) {
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            if (collection.type === types.LIST) {
                collection.addChild(item);
            }
        }
    }
};


/**
 * This function removes an existing item from a list.
 * 
 * @param {Number} index The index of the item to be removed from the list.
 * @returns {Component} The old item associated with the index.
 */
Tree.prototype.removeItem = function(index) {
    var old;
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            if (collection.type === types.LIST) {
                old = collection.children[index];
                collection.children.splice(index, 1);
                collection.size -= old.size;
            }
        }
    }
    return old;
};


// CATALOGS

/**
 * This function retrieves from a tree node the string value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The string value associated with the key.
 */
Tree.prototype.getString = function(key) {
    if (key.constructor.name === 'String') {
        key = parser.parseComponent(key);
    }
    var result = scanner.scanTree(this, key);
    if (result) {
        return result.toSource();
    } else {
        return undefined;
    }
};


/**
 * This function retrieves from a tree node the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
Tree.prototype.getValue = function(key) {
    if (key.constructor.name === 'String') {
        key = parser.parseComponent(key);
    }
    var result = scanner.scanTree(this, key);
    return result;
};


/**
 * This function sets in a tree node a value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @param {Component} value The value to be associated with the key.
 * @returns {Component} The old value associated with the key.
 */
Tree.prototype.setValue = function(key, value) {
    // NOTE: we must convert the these to a string first to make sure they end up as
    // components and not as terminals.  Also, we cannot call toSource() since they maybe
    // strings.
    key = parser.parseComponent(key.toString());
    value = parser.parseExpression(value.toString());
    var result = scanner.scanTree(this, key, value);
    var previousValue = result;
    if (!previousValue) {
        // insert as a new association in the top level catalog
        if (this.type === types.COMPONENT &&
                this.children[0].type === types.STRUCTURE &&
                this.children[0].children[0].type === types.CATALOG) {
            var catalog = this.children[0].children[0];
            var association = new Tree(types.ASSOCIATION, 2);
            association.addChild(key);
            association.addChild(value);
            catalog.addChild(association);
            this.children[0].size += association.size;
            this.size += association.size;
        }
    }
    return previousValue;
};


/**
 * This function removes from a tree node the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
Tree.prototype.deleteKey = function(key) {
    if (key.constructor.name === 'String') {
        key = parser.parseComponent(key);
    }
    var result = scanner.scanTree(this, key, null, true);
    return result;
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
