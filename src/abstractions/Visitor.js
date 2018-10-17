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
 * This library provides functions that format a parse tree produced
 * by the DocumentParser and generates a canonical version of
 * the corresponding source string.
 */
var types = require('../abstractions/Types');
var Component = require('../abstractions/Component').Component;
var formatter = require('../utilities/DocumentFormatter');


/**
 * The constructor for the Visitor class.
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
 * This method provides the canonical way to export a Bali component as Bali source code.
 * 
 * @param {String} indentation A blank string that will be prepended to each indented line in
 * the source code.
 * @returns {String} The Bali source code for the component.
 */
Visitor.prototype.toSource = function(indentation) {
    var source = formatter.formatTree(this, indentation);
    return source;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this visitor.
 */
Visitor.prototype.accept = function(visitor) {
    visitor.visitVisitor(this);
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
Visitor.prototype.visitArithmeticExpression = function(tree) {
    var operand = tree.children[0];
    operand.accept(this);
    var operator = tree.operator;
    operand = tree.children[1];
    operand.accept(this);
};


// association: component ':' expression
Visitor.prototype.visitAssociation = function(association) {
    association.key.accept(this);
    association.value.accept(this);
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
    var document = tree.children[0];
    document.accept(this);
    var reference = tree.children[1];
    reference.accept(this);
};


// source: '{' procedure '}'
Visitor.prototype.visitSource = function(source) {
    // delegate to element
    this.visitElement(source);
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
    var document = tree.children[0];
    document.accept(this);
    var reference = tree.children[1];
    reference.accept(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
Visitor.prototype.visitComparisonExpression = function(tree) {
    var operand = tree.children[0];
    operand.accept(this);
    var operator = tree.operator;
    operand = tree.children[1];
    operand.accept(this);
};


// complementExpression: 'not' expression
Visitor.prototype.visitComplementExpression = function(tree) {
    var operand = tree.children[0];
    operand.accept(this);
};


// continueClause: 'continue' 'loop'
Visitor.prototype.visitContinueClause = function(tree) {
};


// defaultExpression: expression '?' expression
Visitor.prototype.visitDefaultExpression = function(tree) {
    var value = tree.children[0];
    value.accept(this);
    var defaultValue = tree.children[1];
    defaultValue.accept(this);
};


// dereferenceExpression: '@' expression
Visitor.prototype.visitDereferenceExpression = function(tree) {
    var reference = tree.children[0];
    reference.accept(this);
};


// discardClause: 'discard' expression
Visitor.prototype.visitDiscardClause = function(tree) {
    var draft = tree.children[0];
    draft.accept(this);
};


// document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF
Visitor.prototype.visitDocument = function(document) {
    if (document.previousCitation) {
        document.previousCitation.accept(this);
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
        var recipient = tree.children[0];
        recipient.accept(this);
    }
    var expression = tree.children[size - 1];
    expression.accept(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
Visitor.prototype.visitExponentialExpression = function(tree) {
    var operand = tree.children[0];
    operand.accept(this);
    operand = tree.children[1];
    operand.accept(this);
};


// factorialExpression: expression '!'
Visitor.prototype.visitFactorialExpression = function(tree) {
    var operand = tree.children[0];
    operand.accept(this);
};


// function: IDENTIFIER
Visitor.prototype.visitFunction = function(identifier) {
};


// functionExpression: function parameters
Visitor.prototype.visitFunctionExpression = function(tree) {
    var functionName = tree.children[0];
    functionName.accept(this);
    var parameters = tree.children[1];
    parameters.accept(this);
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
Visitor.prototype.visitHandleClause = function(tree) {
    var exception = tree.children[0];
    exception.accept(this);
    var template = tree.children[1];
    template.accept(this);
    var block = tree.children[2];
    block.accept(this);
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
Visitor.prototype.visitIfClause = function(tree) {
    // handle 'if then' block
    var condition = tree.children[0];
    condition.accept(this);
    var block = tree.children[1];
    block.accept(this);

    // handle optional additional conditions
    var size = tree.getSize();
    for (var i = 2; i < size; i += 2) {
        if (i === size - 1) {
            // handle last 'else' block
            block = tree.children[i];
            block.accept(this);
        } else {
            // handle 'else if then' block
            condition = tree.children[i];
            condition.accept(this);
            block = tree.children[i + 1];
            block.accept(this);
        }
    }
};


// inversionExpression: ('-' | '/' | '*') expression
Visitor.prototype.visitInversionExpression = function(tree) {
    var operator = tree.operator;
    var operand = tree.children[0];
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
    var operand = tree.children[0];
    operand.accept(this);
    var operator = tree.operator;
    operand = tree.children[1];
    operand.accept(this);
};


// magnitudeExpression: '|' expression '|'
Visitor.prototype.visitMagnitudeExpression = function(tree) {
    var operand = tree.children[0];
    operand.accept(this);
};


// message: IDENTIFIER
Visitor.prototype.visitMessage = function(identifier) {
};


// messageExpression: expression '.' message parameters
Visitor.prototype.visitMessageExpression = function(tree) {
    var target = tree.children[0];
    target.accept(this);
    var messageName = tree.children[1];
    messageName.accept(this);
    var parameters = tree.children[2];
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
    var expression = tree.children[0];
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
    var event = tree.children[0];
    event.accept(this);
};


// queueClause: 'queue' expression 'on' expression
Visitor.prototype.visitQueueClause = function(tree) {
    var message = tree.children[0];
    message.accept(this);
    var queue = tree.children[1];
    queue.accept(this);
};


// range: expression '..' expression
Visitor.prototype.visitRange = function(range) {
    range.first.accept(this);
    range.last.accept(this);
};


// returnClause: 'return' expression?
Visitor.prototype.visitReturnClause = function(tree) {
    if (tree.getSize() > 0) {
        var result = tree.children[0];
        result.accept(this);
    }
};


// saveClause: 'save' expression 'to' expression
Visitor.prototype.visitSaveClause = function(tree) {
    var draft = tree.children[0];
    draft.accept(this);
    var reference = tree.children[1];
    reference.accept(this);
};


// seal: reference binary
Visitor.prototype.visitSeal = function(seal) {
    seal.certificateCitation.accept(this);
    seal.digitalSignature.accept(this);
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
Visitor.prototype.visitSelectClause = function(tree) {
    // handle the selection
    var value = tree.children[0];
    value.accept(this);

    // handle option blocks
    var block;
    var size = tree.getSize();
    for (var i = 1; i < size; i += 2) {
        if (i === size - 1) {
            // handle the last 'else' block
            block = tree.children[i];
            block.accept(this);
        } else {
            // handle the 'do' option block
            var option = tree.children[i];
            option.accept(this);
            block = tree.children[i + 1];
            block.accept(this);
        }
    }
};


Visitor.prototype.visitSet = function(set) {
    // delegate to collection
    this.visitCollection(set);
};


Visitor.prototype.visitStack = function(stack) {
    // delegate to collection
    this.visitCollection(stack);
};


// statement: mainClause handleClause*
Visitor.prototype.visitStatement = function(tree) {
    tree.children.forEach(function(child) {
        child.accept(this);
    }, this);
};


// subcomponent: variable indices
Visitor.prototype.visitSubcomponent = function(tree) {
    var variable = tree.children[0];
    variable.accept(this);
    var indices = tree.children[1];
    indices.accept(this);
};


// subcomponentExpression: expression indices
Visitor.prototype.visitSubcomponentExpression = function(tree) {
    var component = tree.children[0];
    component.accept(this);
    var indices = tree.children[1];
    indices.accept(this);
};


// throwClause: 'throw' expression
Visitor.prototype.visitThrowClause = function(tree) {
    var exception = tree.children[0];
    exception.accept(this);
};


// variable: IDENTIFIER
Visitor.prototype.visitVariable = function(identifier) {
};


Visitor.prototype.visitVisitor = function(visitor) {
};


// waitClause: 'wait' 'for' recipient 'from' expression
Visitor.prototype.visitWaitClause = function(tree) {
    var message = tree.children[0];
    message.accept(this);
    var queue = tree.children[1];
    queue.accept(this);
};


// whileClause: 'while' expression 'do' block
Visitor.prototype.visitWhileClause = function(tree) {
    var condition = tree.children[0];
    condition.accept(this);
    var block = tree.children[1];
    block.accept(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
Visitor.prototype.visitWithClause = function(tree) {
    var size = tree.getSize();
    if (size > 2) {
        // handle symbol
        var item = tree.children[0];
        item.accept(this);
    }
    var collection = tree.children[size - 2];
    collection.accept(this);
    var block = tree.children[size - 1];
    block.accept(this);
};
