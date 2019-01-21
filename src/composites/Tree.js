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
const utilities = require('../utilities');
const abstractions = require('../abstractions');


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
    abstractions.Composite.call(this, type);
    switch(type) {
        case utilities.types.ARITHMETIC_EXPRESSION:
        case utilities.types.BLOCK:
        case utilities.types.BREAK_CLAUSE:
        case utilities.types.CHECKOUT_CLAUSE:
        case utilities.types.COMMIT_CLAUSE:
        case utilities.types.COMPARISON_EXPRESSION:
        case utilities.types.COMPLEMENT_EXPRESSION:
        case utilities.types.CONCATENATION_EXPRESSION:
        case utilities.types.CONTINUE_CLAUSE:
        case utilities.types.DEFAULT_EXPRESSION:
        case utilities.types.DEREFERENCE_EXPRESSION:
        case utilities.types.DISCARD_CLAUSE:
        case utilities.types.EVALUATE_CLAUSE:
        case utilities.types.EXPONENTIAL_EXPRESSION:
        case utilities.types.FACTORIAL_EXPRESSION:
        case utilities.types.FUNCTION:
        case utilities.types.FUNCTION_EXPRESSION:
        case utilities.types.HANDLE_CLAUSE:
        case utilities.types.IF_CLAUSE:
        case utilities.types.INDICES:
        case utilities.types.INVERSION_EXPRESSION:
        case utilities.types.LOGICAL_EXPRESSION:
        case utilities.types.MAGNITUDE_EXPRESSION:
        case utilities.types.MESSAGE:
        case utilities.types.MESSAGE_EXPRESSION:
        case utilities.types.PRECEDENCE_EXPRESSION:
        case utilities.types.PROCEDURE:
        case utilities.types.PUBLISH_CLAUSE:
        case utilities.types.QUEUE_CLAUSE:
        case utilities.types.RETURN_CLAUSE:
        case utilities.types.SAVE_CLAUSE:
        case utilities.types.SELECT_CLAUSE:
        case utilities.types.STATEMENT:
        case utilities.types.SUBCOMPONENT:
        case utilities.types.SUBCOMPONENT_EXPRESSION:
        case utilities.types.THROW_CLAUSE:
        case utilities.types.VARIABLE:
        case utilities.types.WAIT_CLAUSE:
        case utilities.types.WHILE_CLAUSE:
        case utilities.types.WITH_CLAUSE:
            // these are fine
            break;
        default:
            // anything else isn't
            throw new Error('BUG: An invalid tree type was passed to the constructor: ' + utilities.types.typeName(type));
    }
    this.array = [];
    this.complexity += complexity;
    return this;
}
Tree.prototype = Object.create(abstractions.Composite.prototype);
Tree.prototype.constructor = Tree;
exports.Tree = Tree;


// PUBLIC METHODS

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
 * This method returns the number of components that are children of this tree node.
 * 
 * @returns {Number} The number of components that are children of this tree node.
 */
Tree.prototype.getSize = function() {
    const size = this.array.length;
    return size;
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
        case utilities.types.ARITHMETIC_EXPRESSION:
            visitor.visitArithmeticExpression(this);
            break;
        case utilities.types.BLOCK:
            visitor.visitBlock(this);
            break;
        case utilities.types.BREAK_CLAUSE:
            visitor.visitBreakClause(this);
            break;
        case utilities.types.CHECKOUT_CLAUSE:
            visitor.visitCheckoutClause(this);
            break;
        case utilities.types.COMMIT_CLAUSE:
            visitor.visitCommitClause(this);
            break;
        case utilities.types.COMPARISON_EXPRESSION:
            visitor.visitComparisonExpression(this);
            break;
        case utilities.types.COMPLEMENT_EXPRESSION:
            visitor.visitComplementExpression(this);
            break;
        case utilities.types.CONCATENATION_EXPRESSION:
            visitor.visitConcatenationExpression(this);
            break;
        case utilities.types.CONTINUE_CLAUSE:
            visitor.visitContinueClause(this);
            break;
        case utilities.types.DEFAULT_EXPRESSION:
            visitor.visitDefaultExpression(this);
            break;
        case utilities.types.DEREFERENCE_EXPRESSION:
            visitor.visitDereferenceExpression(this);
            break;
        case utilities.types.DISCARD_CLAUSE:
            visitor.visitDiscardClause(this);
            break;
        case utilities.types.EVALUATE_CLAUSE:
            visitor.visitEvaluateClause(this);
            break;
        case utilities.types.EXPONENTIAL_EXPRESSION:
            visitor.visitExponentialExpression(this);
            break;
        case utilities.types.FACTORIAL_EXPRESSION:
            visitor.visitFactorialExpression(this);
            break;
        case utilities.types.FUNCTION:
            visitor.visitFunction(this);
            break;
        case utilities.types.FUNCTION_EXPRESSION:
            visitor.visitFunctionExpression(this);
            break;
        case utilities.types.HANDLE_CLAUSE:
            visitor.visitHandleClause(this);
            break;
        case utilities.types.IF_CLAUSE:
            visitor.visitIfClause(this);
            break;
        case utilities.types.INDICES:
            visitor.visitIndices(this);
            break;
        case utilities.types.INVERSION_EXPRESSION:
            visitor.visitInversionExpression(this);
            break;
        case utilities.types.LOGICAL_EXPRESSION:
            visitor.visitLogicalExpression(this);
            break;
        case utilities.types.MAGNITUDE_EXPRESSION:
            visitor.visitMagnitudeExpression(this);
            break;
        case utilities.types.MESSAGE:
            visitor.visitMessage(this);
            break;
        case utilities.types.MESSAGE_EXPRESSION:
            visitor.visitMessageExpression(this);
            break;
        case utilities.types.PRECEDENCE_EXPRESSION:
            visitor.visitPrecedenceExpression(this);
            break;
        case utilities.types.PROCEDURE:
            visitor.visitProcedure(this);
            break;
        case utilities.types.PUBLISH_CLAUSE:
            visitor.visitPublishClause(this);
            break;
        case utilities.types.QUEUE_CLAUSE:
            visitor.visitQueueClause(this);
            break;
        case utilities.types.RETURN_CLAUSE:
            visitor.visitReturnClause(this);
            break;
        case utilities.types.SAVE_CLAUSE:
            visitor.visitSaveClause(this);
            break;
        case utilities.types.SELECT_CLAUSE:
            visitor.visitSelectClause(this);
            break;
        case utilities.types.STATEMENT:
            visitor.visitStatement(this);
            break;
        case utilities.types.SUBCOMPONENT:
            visitor.visitSubcomponent(this);
            break;
        case utilities.types.SUBCOMPONENT_EXPRESSION:
            visitor.visitSubcomponentExpression(this);
            break;
        case utilities.types.THROW_CLAUSE:
            visitor.visitThrowClause(this);
            break;
        case utilities.types.VARIABLE:
            visitor.visitVariable(this);
            break;
        case utilities.types.WAIT_CLAUSE:
            visitor.visitWaitClause(this);
            break;
        case utilities.types.WHILE_CLAUSE:
            visitor.visitWhileClause(this);
            break;
        case utilities.types.WITH_CLAUSE:
            visitor.visitWithClause(this);
            break;
        default:
            throw new Error('BUG: A visitor found an invalid tree node type: ' + utilities.types.typeName(this.type));
    }
};
