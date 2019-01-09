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
 * This collection class implements a tree data structure. Each node in the tree may
 * contain zero or more children. A node with no children is an elemental component.
 * Tree nodes may also be any other type of component including catalogs, lists, sets,
 * stacks, and ranges. Collectively, all of the components including the tree nodes
 * are used to build up the parse trees that result from parsing strings containing
 * Bali Document Notation™.
 */
const types = require('../abstractions/Types');
const Composite = require('../abstractions/Composite').Composite;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new tree node component.
 * 
 * @param {Number} type The type of the tree node component.
 * @param {Number} complexity The initial complexity (character length) of the tree node
 * source code.
 * @returns {Tree} The new tree node component.
 */
function Tree(type, complexity) {
    Composite.call(this, type);
    switch(type) {
        case types.ARITHMETIC_EXPRESSION:
        case types.BLOCK:
        case types.BREAK_CLAUSE:
        case types.CHECKOUT_CLAUSE:
        case types.COMMIT_CLAUSE:
        case types.COMPARISON_EXPRESSION:
        case types.COMPLEMENT_EXPRESSION:
        case types.CONCATENATION_EXPRESSION:
        case types.CONTINUE_CLAUSE:
        case types.DEFAULT_EXPRESSION:
        case types.DEREFERENCE_EXPRESSION:
        case types.DISCARD_CLAUSE:
        case types.EVALUATE_CLAUSE:
        case types.EXPONENTIAL_EXPRESSION:
        case types.FACTORIAL_EXPRESSION:
        case types.FUNCTION:
        case types.FUNCTION_EXPRESSION:
        case types.HANDLE_CLAUSE:
        case types.IF_CLAUSE:
        case types.INDICES:
        case types.INVERSION_EXPRESSION:
        case types.LOGICAL_EXPRESSION:
        case types.MAGNITUDE_EXPRESSION:
        case types.MESSAGE:
        case types.MESSAGE_EXPRESSION:
        case types.PRECEDENCE_EXPRESSION:
        case types.PROCEDURE:
        case types.PUBLISH_CLAUSE:
        case types.QUEUE_CLAUSE:
        case types.RETURN_CLAUSE:
        case types.SAVE_CLAUSE:
        case types.SELECT_CLAUSE:
        case types.STATEMENT:
        case types.SUBCOMPONENT:
        case types.SUBCOMPONENT_EXPRESSION:
        case types.THROW_CLAUSE:
        case types.VARIABLE:
        case types.WAIT_CLAUSE:
        case types.WHILE_CLAUSE:
        case types.WITH_CLAUSE:
            // these are fine
            break;
        default:
            // anything else isn't
            throw new Error('BUG: An invalid tree type was passed to the constructor: ' + types.typeName(type));
    }
    this.array = [];
    this.complexity += complexity;
    return this;
}
Tree.prototype = Object.create(Composite.prototype);
Tree.prototype.constructor = Tree;
exports.Tree = Tree;


// PUBLIC METHODS

/**
 * This method returns the number of components that are children of this tree node.
 * 
 * @returns {Number} The number of components that are children of this tree node.
 */
Tree.prototype.getSize = function() {
    const size = this.array.length;
    return size;
};


/**
 * This method returns an array containing the components that are children of this
 * tree node.
 * 
 * @returns {Array} An array containing the components that are children of this tree node.
 */
Tree.prototype.toArray = function() {
    const array = this.array.slice();  // copy the array
    return array;
};


/**
 * This method adds a new child component to this tree node.
 * 
 * @param {Component} child The new child component.
 */
Tree.prototype.addChild = function(child) {
    this.array.push(child);
    this.complexity += child.complexity;
    child.parent = this;
};


/**
 * This method retrieves the child node that is associated with the specified index.
 * 
 * @param {Number} index The index of the desired child node.
 * @returns {Component} The child node at the position in this tree.
 */
Tree.prototype.getChild = function(index) {
    index = this.normalizeIndex(index);
    index--;  // convert to JS zero based indexing
    const item = this.array[index];
    return item;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this tree node.
 */
Tree.prototype.acceptVisitor = function(visitor) {
    switch(this.type) {
        case types.ARITHMETIC_EXPRESSION:
            visitor.visitArithmeticExpression(this);
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
        case types.COMMIT_CLAUSE:
            visitor.visitCommitClause(this);
            break;
        case types.COMPARISON_EXPRESSION:
            visitor.visitComparisonExpression(this);
            break;
        case types.COMPLEMENT_EXPRESSION:
            visitor.visitComplementExpression(this);
            break;
        case types.CONCATENATION_EXPRESSION:
            visitor.visitConcatenationExpression(this);
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
        case types.FUNCTION:
            visitor.visitFunction(this);
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
        case types.LOGICAL_EXPRESSION:
            visitor.visitLogicalExpression(this);
            break;
        case types.MAGNITUDE_EXPRESSION:
            visitor.visitMagnitudeExpression(this);
            break;
        case types.MESSAGE:
            visitor.visitMessage(this);
            break;
        case types.MESSAGE_EXPRESSION:
            visitor.visitMessageExpression(this);
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
        case types.VARIABLE:
            visitor.visitVariable(this);
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
            throw new Error('BUG: A visitor found an invalid tree node type: ' + types.typeName(this.type));
    }
};
