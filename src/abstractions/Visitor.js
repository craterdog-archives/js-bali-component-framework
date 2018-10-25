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
var Composite = require('../abstractions/Composite').Composite;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new visitor component.
 * 
 * @returns {Visitor} The new visitor.
 */
function Visitor() {
    Composite.call(this, types.VISITOR);
    this.depth = 0;
    return this;
}
Visitor.prototype = Object.create(Composite.prototype);
Visitor.prototype.constructor = Visitor;
exports.Visitor = Visitor;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this visitor (say what?!?!?).
 */
Visitor.prototype.accept = function(visitor) {
    visitor.visitVisitor(this);
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
Visitor.prototype.visitArithmeticExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.accept(this);
    var operator = tree.operator;
    operand = tree.getItem(2);
    operand.accept(this);
};


// association: component ':' expression
Visitor.prototype.visitAssociation = function(association) {
    association.key.accept(this);
    association.value.accept(this);
};


// block: '{' procedure '}'
Visitor.prototype.visitBlock = function(block) {
    block.procedure.accept(this);
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
};


// checkoutClause: 'checkout' recipient 'from' expression
Visitor.prototype.visitCheckoutClause = function(tree) {
    var document = tree.getItem(1);
    document.accept(this);
    var reference = tree.getItem(2);
    reference.accept(this);
};


// collection: range | list | catalog
Visitor.prototype.visitCollection = function(collection) {
    var iterator = collection.iterator();
    this.depth++;
    while (iterator.hasNext()) {
        this.appendNewline();
        var item = iterator.getNext();
        item.accept(this);
    };
    this.depth--;
    if (collection.isParameterized()) {
        collection.parameters.accept(this);
    }
};


// commitClause: 'commit' expression 'to' expression
Visitor.prototype.visitCommitClause = function(tree) {
    var document = tree.getItem(1);
    document.accept(this);
    var reference = tree.getItem(2);
    reference.accept(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
Visitor.prototype.visitComparisonExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.accept(this);
    var operator = tree.operator;
    operand = tree.getItem(2);
    operand.accept(this);
};


// complementExpression: 'not' expression
Visitor.prototype.visitComplementExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.accept(this);
};


// continueClause: 'continue' 'loop'
Visitor.prototype.visitContinueClause = function(tree) {
};


// defaultExpression: expression '?' expression
Visitor.prototype.visitDefaultExpression = function(tree) {
    var value = tree.getItem(1);
    value.accept(this);
    var defaultValue = tree.getItem(2);
    defaultValue.accept(this);
};


// dereferenceExpression: '@' expression
Visitor.prototype.visitDereferenceExpression = function(tree) {
    var reference = tree.getItem(1);
    reference.accept(this);
};


// discardClause: 'discard' expression
Visitor.prototype.visitDiscardClause = function(tree) {
    var draft = tree.getItem(1);
    draft.accept(this);
};


// document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF
Visitor.prototype.visitDocument = function(document) {
    if (document.previousReference) {
        document.previousReference.accept(this);
    }
    document.documentContent.accept(this);
    document.notarySeals.forEach(function(seal) {
        seal.accept(this);
    }, this);
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
        element.parameters.accept(this);
    }
};


// evaluateClause: (recipient ':=')? expression
Visitor.prototype.visitEvaluateClause = function(tree) {
    var size = tree.getSize();
    if (size > 1) {
        var recipient = tree.getItem(1);
        recipient.accept(this);
    }
    var expression = tree.getItem(size);
    expression.accept(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
Visitor.prototype.visitExponentialExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.accept(this);
    operand = tree.getItem(2);
    operand.accept(this);
};


// factorialExpression: expression '!'
Visitor.prototype.visitFactorialExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.accept(this);
};


// function: IDENTIFIER
Visitor.prototype.visitFunction = function(funxtion) {
};


// functionExpression: function parameters
Visitor.prototype.visitFunctionExpression = function(tree) {
    var functionName = tree.getItem(1);
    functionName.accept(this);
    var parameters = tree.getItem(2);
    parameters.accept(this);
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
Visitor.prototype.visitHandleClause = function(tree) {
    var exception = tree.getItem(1);
    exception.accept(this);
    var template = tree.getItem(2);
    template.accept(this);
    var block = tree.getItem(3);
    block.accept(this);
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
Visitor.prototype.visitIfClause = function(tree) {
    // handle 'if then' block
    var condition = tree.getItem(1);
    condition.accept(this);
    var block = tree.getItem(2);
    block.accept(this);

    // handle optional additional conditions
    var size = tree.getSize();
    for (var i = 3; i <= size; i += 2) {
        if (i === size) {
            // handle last 'else' block
            block = tree.getItem(i);
            block.accept(this);
        } else {
            // handle 'else if then' block
            condition = tree.getItem(i);
            condition.accept(this);
            block = tree.getItem(i + 1);
            block.accept(this);
        }
    }
};


// inversionExpression: ('-' | '/' | '*') expression
Visitor.prototype.visitInversionExpression = function(tree) {
    var operator = tree.operator;
    var operand = tree.getItem(1);
    operand.accept(this);
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
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
Visitor.prototype.visitLogicalExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.accept(this);
    var operator = tree.operator;
    operand = tree.getItem(2);
    operand.accept(this);
};


// magnitudeExpression: '|' expression '|'
Visitor.prototype.visitMagnitudeExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.accept(this);
};


// message: IDENTIFIER
Visitor.prototype.visitMessage = function(message) {
};


// messageExpression: expression '.' message parameters
Visitor.prototype.visitMessageExpression = function(tree) {
    var target = tree.getItem(1);
    target.accept(this);
    var messageName = tree.getItem(2);
    messageName.accept(this);
    var parameters = tree.getItem(3);
    parameters.accept(this);
};


// parameters: '(' collection ')'
Visitor.prototype.visitParameters = function(parameters) {
    var iterator = parameters.iterator();
    this.depth++;
    while (iterator.hasNext()) {
        var parameter = iterator.getNext();
        if (parameters.isList) parameter = parameter.value;
        parameter.accept(this);
    };
    this.depth--;
};


// precedenceExpression: '(' expression ')'
Visitor.prototype.visitPrecedenceExpression = function(tree) {
    var expression = tree.getItem(1);
    expression.accept(this);
};


// procedure:
//     statement (';' statement)* |
//     NEWLINE (statement NEWLINE)* |
//     /*empty procedure*/
Visitor.prototype.visitProcedure = function(procedure) {
    var iterator = procedure.iterator();
    this.depth++;
    while (iterator.hasNext()) {
        this.appendNewline();
        var statement = iterator.getNext();
        statement.accept(this);
    }
    this.depth--;
    this.appendNewline();
};


// publishClause: 'publish' expression
Visitor.prototype.visitPublishClause = function(tree) {
    var event = tree.getItem(1);
    event.accept(this);
};


// queueClause: 'queue' expression 'on' expression
Visitor.prototype.visitQueueClause = function(tree) {
    var message = tree.getItem(1);
    message.accept(this);
    var queue = tree.getItem(2);
    queue.accept(this);
};


// range: expression '..' expression
Visitor.prototype.visitRange = function(range) {
    range.firstItem.accept(this);
    range.lastItem.accept(this);
    if (range.isParameterized()) {
        range.parameters.accept(this);
    }
};


// returnClause: 'return' expression?
Visitor.prototype.visitReturnClause = function(tree) {
    if (tree.getSize() > 0) {
        var result = tree.getItem(1);
        result.accept(this);
    }
};


// saveClause: 'save' expression 'to' expression
Visitor.prototype.visitSaveClause = function(tree) {
    var draft = tree.getItem(1);
    draft.accept(this);
    var reference = tree.getItem(2);
    reference.accept(this);
};


// seal: reference binary
Visitor.prototype.visitSeal = function(seal) {
    seal.certificateReference.accept(this);
    seal.digitalSignature.accept(this);
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
Visitor.prototype.visitSelectClause = function(tree) {
    // handle the selection
    var value = tree.getItem(1);
    value.accept(this);

    // handle option blocks
    var block;
    var size = tree.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            // handle the last 'else' block
            block = tree.getItem(i);
            block.accept(this);
        } else {
            // handle the 'do' option block
            var option = tree.getItem(i);
            option.accept(this);
            block = tree.getItem(i + 1);
            block.accept(this);
        }
    }
};


Visitor.prototype.visitSet = function(set) {
    // delegate to collection
    this.visitCollection(set);
};


// source: '{' procedure '}'
Visitor.prototype.visitSource = function(source) {
    source.procedure.accept(this);
    if (source.isParameterized()) {
        source.parameters.accept(this);
    }
};


Visitor.prototype.visitStack = function(stack) {
    // delegate to collection
    this.visitCollection(stack);
};


// statement: mainClause handleClause*
Visitor.prototype.visitStatement = function(tree) {
    var iterator = tree.iterator();
    while (iterator.hasNext()) {
        var child = iterator.getNext();
        child.accept(this);
    }
};


// subcomponent: variable indices
Visitor.prototype.visitSubcomponent = function(tree) {
    var variable = tree.getItem(1);
    variable.accept(this);
    var indices = tree.getItem(2);
    indices.accept(this);
};


// subcomponentExpression: expression indices
Visitor.prototype.visitSubcomponentExpression = function(tree) {
    var component = tree.getItem(1);
    component.accept(this);
    var indices = tree.getItem(2);
    indices.accept(this);
};


// throwClause: 'throw' expression
Visitor.prototype.visitThrowClause = function(tree) {
    var exception = tree.getItem(1);
    exception.accept(this);
};


// variable: IDENTIFIER
Visitor.prototype.visitVariable = function(variable) {
};


Visitor.prototype.visitVisitor = function(visitor) {
};


// waitClause: 'wait' 'for' recipient 'from' expression
Visitor.prototype.visitWaitClause = function(tree) {
    var message = tree.getItem(1);
    message.accept(this);
    var queue = tree.getItem(2);
    queue.accept(this);
};


// whileClause: 'while' expression 'do' block
Visitor.prototype.visitWhileClause = function(tree) {
    var condition = tree.getItem(1);
    condition.accept(this);
    var block = tree.getItem(2);
    block.accept(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
Visitor.prototype.visitWithClause = function(tree) {
    var size = tree.getSize();
    if (size > 2) {
        // handle symbol
        var item = tree.getItem(1);
        item.accept(this);
    }
    var collection = tree.getItem(size - 1);
    collection.accept(this);
    var block = tree.getItem(size);
    block.accept(this);
};
