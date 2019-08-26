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
const Exception = require('./Exception');


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new tree node component.
 * 
 * @param {Number} type The type of the tree node component.
 * @returns {Tree} The new tree node component.
 */
function Tree(type) {
    abstractions.Composite.call(this, type);
    if (!utilities.types.isProcedural(type)) {
        throw new Exception({
            $module: '/bali/composites/Tree',
            $procedure: '$Tree',
            $exception: '$invalidParameter',
            $parameter: utilities.types.symbolForType(type),
            $text: 'An invalid tree type was passed to the constructor.'
        });
    }

    // the array is a private attribute so methods that use it are defined in the constructor
    const array = [];

    this.toArray = function() {
        return array.slice(); // copy the array
    };

    this.getSize = function() {
        return array.length;
    };

    this.addChild = function(child) {
        child = this.convert(child);
        array.push(child);
        child.getParent = function() { return this; };
    };

    this.getChild = function(index) {
        index = this.normalizeIndex(index) - 1;  // JS uses zero based indexing
        return array[index];
    };

    this.getParent = function() { };  // will be reset by parent when added as a child

    return this;
}
Tree.prototype = Object.create(abstractions.Composite.prototype);
Tree.prototype.constructor = Tree;
exports.Tree = Tree;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this tree node.
 */
Tree.prototype.acceptVisitor = function(visitor) {
    const typeId = this.getTypeId();
    switch(typeId) {
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
            throw new Exception({
                $module: '/bali/composites/Tree',
                $procedure: '$acceptVisitor',
                $exception: '$invalidType',
                $type: utilities.types.symbolForType(type),
                $tree: this,
                $text: 'Attempted to visit an invalid tree node.'
            });
    }
};
