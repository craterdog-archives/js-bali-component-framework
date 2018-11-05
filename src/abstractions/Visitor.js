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
 * This abstract class defines the methods that all visitor components must support. It
 * provides implementations of each method that by default just traverse the parse tree.
 * Subclasses should override most of the methods.
 */
var types = require('../abstractions/Types');
var Component = require('../abstractions/Component').Component;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new visitor component.
 * 
 * @returns {Visitor} The new visitor.
 */
function Visitor() {
    Component.call(this, types.VISITOR);
    this.depth = 0;
    return this;
}
Visitor.prototype = Object.create(Component.prototype);
Visitor.prototype.constructor = Visitor;
exports.Visitor = Visitor;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this visitor (say what?!?!?).
 */
Visitor.prototype.acceptVisitor = function(visitor) {
    visitor.visitVisitor(this);
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
Visitor.prototype.visitArithmeticExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    var operator = tree.operator;
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// association: component ':' expression
Visitor.prototype.visitAssociation = function(association) {
    association.key.acceptVisitor(this);
    association.value.acceptVisitor(this);
};


// block: '{' procedure '}'
Visitor.prototype.visitBlock = function(block) {
    block.procedure.acceptVisitor(this);
};


// breakClause: 'break' 'loop'
Visitor.prototype.visitBreakClause = function(tree) {
};


// catalog:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty catalog*/
Visitor.prototype.visitCatalog = function(catalog) {
    // delegate to collection
    this.visitCollection(catalog);
    if (catalog.isParameterized()) {
        catalog.parameters.acceptVisitor(this);
    }
};


// checkoutClause: 'checkout' recipient 'from' expression
Visitor.prototype.visitCheckoutClause = function(tree) {
    var component = tree.getChild(1);
    component.acceptVisitor(this);
    var reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// collection: range | list | catalog
Visitor.prototype.visitCollection = function(collection) {
    var iterator = collection.getIterator();
    this.depth++;
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        item.acceptVisitor(this);
    };
    this.depth--;
};


// commitClause: 'commit' expression 'to' expression
Visitor.prototype.visitCommitClause = function(tree) {
    var component = tree.getChild(1);
    component.acceptVisitor(this);
    var reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
Visitor.prototype.visitComparisonExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    var operator = tree.operator;
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// complementExpression: 'not' expression
Visitor.prototype.visitComplementExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
};


// continueClause: 'continue' 'loop'
Visitor.prototype.visitContinueClause = function(tree) {
};


// defaultExpression: expression '?' expression
Visitor.prototype.visitDefaultExpression = function(tree) {
    var value = tree.getChild(1);
    value.acceptVisitor(this);
    var defaultValue = tree.getChild(2);
    defaultValue.acceptVisitor(this);
};


// dereferenceExpression: '@' expression
Visitor.prototype.visitDereferenceExpression = function(tree) {
    var reference = tree.getChild(1);
    reference.acceptVisitor(this);
};


// discardClause: 'discard' expression
Visitor.prototype.visitDiscardClause = function(tree) {
    var draft = tree.getChild(1);
    draft.acceptVisitor(this);
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
Visitor.prototype.visitElement = function(element) {
    if (element.isParameterized()) {
        element.parameters.acceptVisitor(this);
    }
};


// evaluateClause: (recipient ':=')? expression
Visitor.prototype.visitEvaluateClause = function(tree) {
    var size = tree.getSize();
    if (size > 1) {
        var recipient = tree.getChild(1);
        recipient.acceptVisitor(this);
    }
    var expression = tree.getChild(size);
    expression.acceptVisitor(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
Visitor.prototype.visitExponentialExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// factorialExpression: expression '!'
Visitor.prototype.visitFactorialExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
};


// function: IDENTIFIER
Visitor.prototype.visitFunction = function(funxtion) {
};


// functionExpression: function parameters
Visitor.prototype.visitFunctionExpression = function(tree) {
    var functionName = tree.getChild(1);
    functionName.acceptVisitor(this);
    var parameters = tree.getChild(2);
    parameters.acceptVisitor(this);
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
Visitor.prototype.visitHandleClause = function(tree) {
    var exception = tree.getChild(1);
    exception.acceptVisitor(this);
    var template = tree.getChild(2);
    template.acceptVisitor(this);
    var block = tree.getChild(3);
    block.acceptVisitor(this);
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
Visitor.prototype.visitIfClause = function(tree) {
    // handle 'if then' block
    var condition = tree.getChild(1);
    condition.acceptVisitor(this);
    var block = tree.getChild(2);
    block.acceptVisitor(this);

    // handle optional additional conditions
    var size = tree.getSize();
    for (var i = 3; i <= size; i += 2) {
        if (i === size) {
            // handle last 'else' block
            block = tree.getChild(i);
            block.acceptVisitor(this);
        } else {
            // handle 'else if then' block
            condition = tree.getChild(i);
            condition.acceptVisitor(this);
            block = tree.getChild(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// indices: '[' list ']'
Visitor.prototype.visitIndices = function(tree) {
    var list = tree.getChild(1);
    list.acceptVisitor(this);
};


// inversionExpression: ('-' | '/' | '*') expression
Visitor.prototype.visitInversionExpression = function(tree) {
    var operator = tree.operator;
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
};


Visitor.prototype.visitIterator = function(iterator) {
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
Visitor.prototype.visitList = function(list) {
    // delegate to collection
    this.visitCollection(list);
    if (list.isParameterized()) {
        list.parameters.acceptVisitor(this);
    }
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
Visitor.prototype.visitLogicalExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    var operator = tree.operator;
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// magnitudeExpression: '|' expression '|'
Visitor.prototype.visitMagnitudeExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
};


// message: IDENTIFIER
Visitor.prototype.visitMessage = function(message) {
};


// messageExpression: expression '.' message parameters
Visitor.prototype.visitMessageExpression = function(tree) {
    var target = tree.getChild(1);
    target.acceptVisitor(this);
    var messageName = tree.getChild(2);
    messageName.acceptVisitor(this);
    var parameters = tree.getChild(3);
    parameters.acceptVisitor(this);
};


// parameters: '(' collection ')'
Visitor.prototype.visitParameters = function(parameters) {
    var iterator = parameters.getIterator();
    this.depth++;
    while (iterator.hasNext()) {
        var parameter = iterator.getNext();
        if (parameters.isList) {
            // for list format we only want the value of the association
            parameter = parameter.value;
        }
        parameter.acceptVisitor(this);
    };
    this.depth--;
};


// precedenceExpression: '(' expression ')'
Visitor.prototype.visitPrecedenceExpression = function(tree) {
    var expression = tree.getChild(1);
    expression.acceptVisitor(this);
};


// procedure:
//     statement (';' statement)* |
//     NEWLINE (statement NEWLINE)* |
//     /*empty procedure*/
Visitor.prototype.visitProcedure = function(procedure) {
    var iterator = procedure.getIterator();
    this.depth++;
    while (iterator.hasNext()) {
        var statement = iterator.getNext();
        statement.acceptVisitor(this);
    }
    this.depth--;
};


// publishClause: 'publish' expression
Visitor.prototype.visitPublishClause = function(tree) {
    var event = tree.getChild(1);
    event.acceptVisitor(this);
};


// queueClause: 'queue' expression 'on' expression
Visitor.prototype.visitQueueClause = function(tree) {
    var message = tree.getChild(1);
    message.acceptVisitor(this);
    var queue = tree.getChild(2);
    queue.acceptVisitor(this);
};


// range: expression '..' expression
Visitor.prototype.visitRange = function(range) {
    range.firstItem.acceptVisitor(this);
    range.lastItem.acceptVisitor(this);
    if (range.isParameterized()) {
        range.parameters.acceptVisitor(this);
    }
};


// returnClause: 'return' expression?
Visitor.prototype.visitReturnClause = function(tree) {
    if (tree.getSize() > 0) {
        var result = tree.getChild(1);
        result.acceptVisitor(this);
    }
};


// saveClause: 'save' expression 'to' expression
Visitor.prototype.visitSaveClause = function(tree) {
    var draft = tree.getChild(1);
    draft.acceptVisitor(this);
    var reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
Visitor.prototype.visitSelectClause = function(tree) {
    // handle the selection
    var value = tree.getChild(1);
    value.acceptVisitor(this);

    // handle option blocks
    var block;
    var size = tree.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            // handle the last 'else' block
            block = tree.getChild(i);
            block.acceptVisitor(this);
        } else {
            // handle the 'do' option block
            var option = tree.getChild(i);
            option.acceptVisitor(this);
            block = tree.getChild(i + 1);
            block.acceptVisitor(this);
        }
    }
};


Visitor.prototype.visitSet = function(set) {
    // delegate to collection
    this.visitCollection(set);
    if (set.isParameterized()) {
        set.parameters.acceptVisitor(this);
    }
};


// source: '{' procedure '}'
Visitor.prototype.visitSource = function(source) {
    source.procedure.acceptVisitor(this);
    if (source.isParameterized()) {
        source.parameters.acceptVisitor(this);
    }
};


Visitor.prototype.visitStack = function(stack) {
    // delegate to collection
    this.visitCollection(stack);
    if (stack.isParameterized()) {
        stack.parameters.acceptVisitor(this);
    }
};


// statement: mainClause handleClause*
Visitor.prototype.visitStatement = function(tree) {
    var iterator = tree.getIterator();
    this.depth++;
    while (iterator.hasNext()) {
        var child = iterator.getNext();
        child.acceptVisitor(this);
    }
    this.depth--;
};


// subcomponent: variable indices
Visitor.prototype.visitSubcomponent = function(tree) {
    var variable = tree.getChild(1);
    variable.acceptVisitor(this);
    var indices = tree.getChild(2);
    indices.acceptVisitor(this);
};


// subcomponentExpression: expression indices
Visitor.prototype.visitSubcomponentExpression = function(tree) {
    var component = tree.getChild(1);
    component.acceptVisitor(this);
    var indices = tree.getChild(2);
    indices.acceptVisitor(this);
};


// throwClause: 'throw' expression
Visitor.prototype.visitThrowClause = function(tree) {
    var exception = tree.getChild(1);
    exception.acceptVisitor(this);
};


// variable: IDENTIFIER
Visitor.prototype.visitVariable = function(variable) {
};


Visitor.prototype.visitVisitor = function(visitor) {
};


// waitClause: 'wait' 'for' recipient 'from' expression
Visitor.prototype.visitWaitClause = function(tree) {
    var message = tree.getChild(1);
    message.acceptVisitor(this);
    var queue = tree.getChild(2);
    queue.acceptVisitor(this);
};


// whileClause: 'while' expression 'do' block
Visitor.prototype.visitWhileClause = function(tree) {
    var condition = tree.getChild(1);
    condition.acceptVisitor(this);
    var block = tree.getChild(2);
    block.acceptVisitor(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
Visitor.prototype.visitWithClause = function(tree) {
    var size = tree.getSize();
    if (size > 2) {
        // handle symbol
        var item = tree.getChild(1);
        item.acceptVisitor(this);
    }
    var collection = tree.getChild(size - 1);
    collection.acceptVisitor(this);
    var block = tree.getChild(size);
    block.acceptVisitor(this);
};
