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


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new visitor component.
 * 
 * @constructor
 * @returns {Visitor} The new visitor.
 */
function Visitor() {
    this.depth = 0;
    return this;
}
Visitor.prototype.constructor = Visitor;
exports.Visitor = Visitor;


// PUBLIC METHODS

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
Visitor.prototype.visitBlock = function(tree) {
    tree.getChild(1).acceptVisitor(this);
};


// breakClause: 'break' 'loop'
Visitor.prototype.visitBreakClause = function(tree) {
};


// catalog:
//     association (',' association)* |
//     EOL (association EOL)* |
//     ':' {empty catalog}
Visitor.prototype.visitCatalog = function(catalog) {
    // delegate to collection
    this.visitCollection(catalog);
    if (catalog.isParameterized()) {
        catalog.parameters.acceptVisitor(this);
    }
};


// checkoutClause: 'checkout' recipient 'from' expression
Visitor.prototype.visitCheckoutClause = function(tree) {
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// collection: range | list | catalog
Visitor.prototype.visitCollection = function(collection) {
    const iterator = collection.getIterator();
    this.depth++;
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        item.acceptVisitor(this);
    };
    this.depth--;
};


// commitClause: 'commit' expression 'to' expression
Visitor.prototype.visitCommitClause = function(tree) {
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
Visitor.prototype.visitComparisonExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    const operator = tree.operator;
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// complementExpression: 'not' expression
Visitor.prototype.visitComplementExpression = function(tree) {
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
};


// concatenationExpression: expression '&' expression
Visitor.prototype.visitConcatenationExpression = function(tree) {
    var operand = tree.getChild(1);
    operand.acceptVisitor(this);
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// continueClause: 'continue' 'loop'
Visitor.prototype.visitContinueClause = function(tree) {
};


// defaultExpression: expression '?' expression
Visitor.prototype.visitDefaultExpression = function(tree) {
    const value = tree.getChild(1);
    value.acceptVisitor(this);
    const defaultValue = tree.getChild(2);
    defaultValue.acceptVisitor(this);
};


// dereferenceExpression: '@' expression
Visitor.prototype.visitDereferenceExpression = function(tree) {
    const reference = tree.getChild(1);
    reference.acceptVisitor(this);
};


// discardClause: 'discard' expression
Visitor.prototype.visitDiscardClause = function(tree) {
    const draft = tree.getChild(1);
    draft.acceptVisitor(this);
};


// element:
//     angle |
//     binary |
//     duration |
//     moment |
//     number |
//     pattern |
//     percent |
//     probability |
//     reference |
//     reserved |
//     symbol |
//     tag |
//     text |
//     version
Visitor.prototype.visitElement = function(element) {
    if (element.isParameterized()) {
        element.parameters.acceptVisitor(this);
    }
};


// evaluateClause: (recipient ':=')? expression
Visitor.prototype.visitEvaluateClause = function(tree) {
    const size = tree.getSize();
    if (size > 1) {
        const recipient = tree.getChild(1);
        recipient.acceptVisitor(this);
    }
    const expression = tree.getChild(size);
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
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
};


// function: IDENTIFIER
Visitor.prototype.visitFunction = function(tree) {
};


// functionExpression: function parameters
Visitor.prototype.visitFunctionExpression = function(tree) {
    const functionName = tree.getChild(1);
    functionName.acceptVisitor(this);
    const parameters = tree.getChild(2);
    parameters.acceptVisitor(this);
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
Visitor.prototype.visitHandleClause = function(tree) {
    const exception = tree.getChild(1);
    exception.acceptVisitor(this);
    const pattern = tree.getChild(2);
    pattern.acceptVisitor(this);
    const block = tree.getChild(3);
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
    const size = tree.getSize();
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
    const list = tree.getChild(1);
    list.acceptVisitor(this);
};


// inversionExpression: ('-' | '/' | '*') expression
Visitor.prototype.visitInversionExpression = function(tree) {
    const operator = tree.operator;
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
};


// list:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty list}
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
    const operator = tree.operator;
    operand = tree.getChild(2);
    operand.acceptVisitor(this);
};


// magnitudeExpression: '|' expression '|'
Visitor.prototype.visitMagnitudeExpression = function(tree) {
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
};


// message: IDENTIFIER
Visitor.prototype.visitMessage = function(tree) {
};


// messageExpression: expression '.' message parameters
Visitor.prototype.visitMessageExpression = function(tree) {
    const target = tree.getChild(1);
    target.acceptVisitor(this);
    const messageName = tree.getChild(2);
    messageName.acceptVisitor(this);
    const parameters = tree.getChild(3);
    parameters.acceptVisitor(this);
};


// parameters: '(' collection ')'
Visitor.prototype.visitParameters = function(parameters) {
    const iterator = parameters.getIterator();
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
    const expression = tree.getChild(1);
    expression.acceptVisitor(this);
};


// procedure:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     {empty procedure}
Visitor.prototype.visitProcedure = function(tree) {
    const iterator = tree.getIterator();
    this.depth++;
    while (iterator.hasNext()) {
        const statement = iterator.getNext();
        statement.acceptVisitor(this);
    }
    this.depth--;
};


// publishClause: 'publish' expression
Visitor.prototype.visitPublishClause = function(tree) {
    const event = tree.getChild(1);
    event.acceptVisitor(this);
};


// queue:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty queue}
Visitor.prototype.visitQueue = function(queue) {
    // delegate to collection
    this.visitCollection(queue);
    if (queue.isParameterized()) {
        queue.parameters.acceptVisitor(this);
    }
};


// queueClause: 'queue' expression 'on' expression
Visitor.prototype.visitQueueClause = function(tree) {
    const message = tree.getChild(1);
    message.acceptVisitor(this);
    const queue = tree.getChild(2);
    queue.acceptVisitor(this);
};


// range: expression '..' expression
Visitor.prototype.visitRange = function(range) {
    range.getFirst().acceptVisitor(this);
    range.getLast().acceptVisitor(this);
    if (range.isParameterized()) {
        range.parameters.acceptVisitor(this);
    }
};


// returnClause: 'return' expression?
Visitor.prototype.visitReturnClause = function(tree) {
    if (tree.getSize() > 0) {
        const result = tree.getChild(1);
        result.acceptVisitor(this);
    }
};


// saveClause: 'save' expression 'to' expression
Visitor.prototype.visitSaveClause = function(tree) {
    const draft = tree.getChild(1);
    draft.acceptVisitor(this);
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
Visitor.prototype.visitSelectClause = function(tree) {
    // handle the selection
    const value = tree.getChild(1);
    value.acceptVisitor(this);

    // handle option blocks
    var block;
    const size = tree.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            // handle the last 'else' block
            block = tree.getChild(i);
            block.acceptVisitor(this);
        } else {
            // handle the 'do' option block
            const option = tree.getChild(i);
            option.acceptVisitor(this);
            block = tree.getChild(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// set:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty set}
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


// stack:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty stack}
Visitor.prototype.visitStack = function(stack) {
    // delegate to collection
    this.visitCollection(stack);
    if (stack.isParameterized()) {
        stack.parameters.acceptVisitor(this);
    }
};


// statement: mainClause handleClause*
Visitor.prototype.visitStatement = function(tree) {
    const iterator = tree.getIterator();
    this.depth++;
    while (iterator.hasNext()) {
        const child = iterator.getNext();
        child.acceptVisitor(this);
    }
    this.depth--;
};


// subcomponent: variable indices
Visitor.prototype.visitSubcomponent = function(tree) {
    const variable = tree.getChild(1);
    variable.acceptVisitor(this);
    const indices = tree.getChild(2);
    indices.acceptVisitor(this);
};


// subcomponentExpression: expression indices
Visitor.prototype.visitSubcomponentExpression = function(tree) {
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    const indices = tree.getChild(2);
    indices.acceptVisitor(this);
};


// throwClause: 'throw' expression
Visitor.prototype.visitThrowClause = function(tree) {
    const exception = tree.getChild(1);
    exception.acceptVisitor(this);
};


// variable: IDENTIFIER
Visitor.prototype.visitVariable = function(tree) {
};


// waitClause: 'wait' 'for' recipient 'from' expression
Visitor.prototype.visitWaitClause = function(tree) {
    const message = tree.getChild(1);
    message.acceptVisitor(this);
    const queue = tree.getChild(2);
    queue.acceptVisitor(this);
};


// whileClause: 'while' expression 'do' block
Visitor.prototype.visitWhileClause = function(tree) {
    const condition = tree.getChild(1);
    condition.acceptVisitor(this);
    const block = tree.getChild(2);
    block.acceptVisitor(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
Visitor.prototype.visitWithClause = function(tree) {
    const size = tree.getSize();
    if (size > 2) {
        // handle symbol
        const item = tree.getChild(1);
        item.acceptVisitor(this);
    }
    const collection = tree.getChild(size - 1);
    collection.acceptVisitor(this);
    const block = tree.getChild(size);
    block.acceptVisitor(this);
};
