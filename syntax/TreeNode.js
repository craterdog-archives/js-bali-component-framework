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
var types = require('./NodeTypes');
var DocumentFormatter = require('../transformers/DocumentFormatter').DocumentFormatter;


/**
 * This constructor creates a new tree node.
 * 
 * @param {number} type The type of the tree node.
 * @returns {TreeNode} The new tree node.
 */
function TreeNode(type) {
    if (!type || typeof type !== 'number') {
        throw new Error('TREE: The type of the tree node passed to the constructor must be a number.');
    }
    this.type = type;
    this.isSimple = false;  // default for tree nodes
    this.children = [];
    return this;
}
TreeNode.prototype.constructor = TreeNode;
exports.TreeNode = TreeNode;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this tree node.
 */
TreeNode.prototype.accept = function(visitor) {
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
        case types.DOCUMENT:
            visitor.visitDocument(this);
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
        case types.FINISH_CLAUSE:
            visitor.visitFinishClause(this);
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
        case types.SUBCOMPONENT_EXPRESSION:
            visitor.visitSubcomponentExpression(this);
            break;
        case types.CATALOG:
            visitor.visitCatalog(this);
            break;
        case types.TASK:
            visitor.visitTask(this);
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
            throw new Error('TREE: An invalid tree node type was passed: ' + this.type);
    }
};


/**
 * This method adds a child node to this tree node.
 * 
 * @param {TreeNode|TerminalNode} node The node to be added as the next child of this tree node.
 */
TreeNode.prototype.addChild = function(node) {
    if (!node || (node.constructor.name !== 'TreeNode' && node.constructor.name !== 'TerminalNode')) {
        throw new Error("TREE: The child node must be of type 'TreeNode' or 'TerminalNode'.");
    }
    this.children.push(node);
};


/**
 * This method returns a string representation of this node.
 * 
 * @returns {string} The string representation of this node.
 */
TreeNode.prototype.toString = function() {
    var formatter = new DocumentFormatter();
    var string = formatter.formatDocument(this);
    return string;
};
