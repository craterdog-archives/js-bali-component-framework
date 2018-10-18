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
var Collection = require('../abstractions/Collection').Collection;


/**
 * This constructor creates a new tree node.
 * 
 * @param {Number} type The type of the tree node.
 * @param {Number} length The initial character length of the tree node.
 * @returns {Tree} The new tree node.
 */
function Tree(type, length) {
    Collection.call(this, type);
    this.children = [];
    this.length += length;
    return this;
}
Tree.prototype = Object.create(Collection.prototype);
Tree.prototype.constructor = Tree;
exports.Tree = Tree;


// PUBLIC METHODS


/**
 * This method returns the number of nodes that are children of this tree.
 * 
 * @returns {Number} The number of nodes that are children of this tree.
 */
Tree.prototype.getSize = function() {
    var size = this.children.length;
    return size;
};


/**
 * This method returns an array containing the nodes that are children of this tree.
 * 
 * @returns {Array} An array containing the nodes that are children of this tree.
 */
Tree.prototype.toArray = function() {
    var array = this.children.slice();  // copy the array
    return array;
};


/**
 * This method adds a new child node to this tree.
 * 
 * @param {Component} child The new child node.
 */
Tree.prototype.addChild = function(child) {
    this.children.push(child);
    this.length += child.length;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this tree.
 */
Tree.prototype.accept = function(visitor) {
    switch(this.type) {
        case types.ARITHMETIC_EXPRESSION:
            visitor.visitArithmeticExpression(this);
            break;
        case types.BREAK_CLAUSE:
            visitor.visitBreakClause(this);
            break;
        case types.CHECKOUT_CLAUSE:
            visitor.visitCheckoutClause(this);
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
        case types.INVERSION_EXPRESSION:
            visitor.visitInversionExpression(this);
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
        case types.PRECEDENCE_EXPRESSION:
            visitor.visitPrecedenceExpression(this);
            break;
        case types.PUBLISH_CLAUSE:
            visitor.visitPublishClause(this);
            break;
        case types.QUEUE_CLAUSE:
            visitor.visitQueueClause(this);
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
        case types.SUBCOMPONENT:
            visitor.visitSubcomponent(this);
            break;
        case types.SUBCOMPONENT_EXPRESSION:
            visitor.visitSubcomponentExpression(this);
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
            throw new Error('SYNTAX: An invalid tree node type was found: ' + types.typeName(type));
    }
};
