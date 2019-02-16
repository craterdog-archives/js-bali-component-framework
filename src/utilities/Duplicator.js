/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://openformatted.org/licenses/MIT)          *
 ************************************************************************/
'use strict';

/**
 * This library provides functions that duplicate a parse tree structure produced
 * by the <code>Parser</code> class.
 */
const Visitor = require('./Visitor').Visitor;


// This private constant sets the POSIX end of line character
const EOL = '\n';


// PUBLIC CONSTRUCTORS

/**
 * This class implements a duplicator that uses a visitor to create a deep copy of a
 * component. Since elements are immutable, they are not copied, only referenced.
 * 
 * @constructor
 * @returns {Duplicator} The new component duplicator.
 */
function Duplicator() {

    this.duplicateComponent = function(component) {
        const visitor = new DuplicatingVisitor();
        component.acceptVisitor(visitor);
        return visitor.result;
    };

    return this;
}
Duplicator.prototype.constructor = Duplicator;
exports.Duplicator = Duplicator;


// PRIVATE CLASSES

function DuplicatingVisitor() {
    Visitor.call(this);
    this.depth = 0;
    return this;
}
DuplicatingVisitor.prototype = Object.create(Visitor.prototype);
DuplicatingVisitor.prototype.constructor = DuplicatingVisitor;


// angle: ANGLE
DuplicatingVisitor.prototype.visitAngle = function(angle) {
    var parameters;
    if (angle.isParameterized()) {
        angle.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new angle.constructor(angle.getValue(), parameters);
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
DuplicatingVisitor.prototype.visitArithmeticExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    copy.operator = tree.operator;
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// association: component ':' expression
DuplicatingVisitor.prototype.visitAssociation = function(association) {
    association.getKey().acceptVisitor(this);
    const key = this.result;
    association.getValue().acceptVisitor(this);
    const value = this.result;
    this.result = new association.constructor(key, value);
};


// binary: BINARY
DuplicatingVisitor.prototype.visitBinary = function(binary) {
    var parameters;
    if (binary.isParameterized()) {
        binary.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new binary.constructor(binary.getValue(), parameters);
};


// block: '{' procedure '}'
DuplicatingVisitor.prototype.visitBlock = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// breakClause: 'break' 'loop'
DuplicatingVisitor.prototype.visitBreakClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    this.result = copy;
};


// catalog:
//     association (',' association)* |
//     EOL (association EOL)* |
//     ':' {empty catalog}
DuplicatingVisitor.prototype.visitCatalog = function(catalog) {
    var parameters;
    if (catalog.isParameterized()) {
        catalog.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    const copy = new catalog.constructor(parameters);
    const iterator = catalog.getIterator();
    while (iterator.hasNext()) {
        var association = iterator.getNext();
        association.acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// checkoutClause: 'checkout' recipient 'from' expression
DuplicatingVisitor.prototype.visitCheckoutClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// commitClause: 'commit' expression 'to' expression
DuplicatingVisitor.prototype.visitCommitClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
DuplicatingVisitor.prototype.visitComparisonExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    copy.operator = tree.operator;
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// complementExpression: 'not' expression
DuplicatingVisitor.prototype.visitComplementExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// concatenationExpression: expression '&' expression
DuplicatingVisitor.prototype.visitConcatenationExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// continueClause: 'continue' 'loop'
DuplicatingVisitor.prototype.visitContinueClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    this.result = copy;
};


// defaultExpression: expression '?' expression
DuplicatingVisitor.prototype.visitDefaultExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// dereferenceExpression: '@' expression
DuplicatingVisitor.prototype.visitDereferenceExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// discardClause: 'discard' expression
DuplicatingVisitor.prototype.visitDiscardClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// duration: DURATION
DuplicatingVisitor.prototype.visitDuration = function(duration) {
    var parameters;
    if (duration.isParameterized()) {
        duration.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new duration.constructor(duration.getValue(), parameters);
};


// evaluateClause: (recipient ':=')? expression
DuplicatingVisitor.prototype.visitEvaluateClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// exponentialExpression: <assoc=right> expression '^' expression
DuplicatingVisitor.prototype.visitExponentialExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// factorialExpression: expression '!'
DuplicatingVisitor.prototype.visitFactorialExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// function: IDENTIFIER
DuplicatingVisitor.prototype.visitFunction = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    copy.identifier = tree.identifier;
    this.result = copy;
};


// functionExpression: function parameters
DuplicatingVisitor.prototype.visitFunctionExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
DuplicatingVisitor.prototype.visitHandleClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
DuplicatingVisitor.prototype.visitIfClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// inversionExpression: ('-' | '/' | '*') expression
DuplicatingVisitor.prototype.visitInversionExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    copy.operator = tree.operator;
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// indices: '[' list ']'
DuplicatingVisitor.prototype.visitIndices = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// list:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty list}
DuplicatingVisitor.prototype.visitList = function(list) {
    var parameters;
    if (list.isParameterized()) {
        list.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    const copy = new list.constructor(parameters);
    const iterator = list.getIterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        item.acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
DuplicatingVisitor.prototype.visitLogicalExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    copy.operator = tree.operator;
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// magnitudeExpression: '|' expression '|'
DuplicatingVisitor.prototype.visitMagnitudeExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// message: IDENTIFIER
DuplicatingVisitor.prototype.visitMessage = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    copy.identifier = tree.identifier;
    this.result = copy;
};


// messageExpression: expression '.' message parameters
DuplicatingVisitor.prototype.visitMessageExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// moment: MOMENT
DuplicatingVisitor.prototype.visitMoment = function(moment) {
    var parameters;
    if (moment.isParameterized()) {
        moment.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    const value = moment.getValue().format(moment.getFormat());
    this.result = new moment.constructor(value, parameters);
};


// number:
//    'undefined' |
//    'infinity' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')' 
DuplicatingVisitor.prototype.visitNumber = function(number) {
    var parameters;
    if (number.isParameterized()) {
        number.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new number.constructor(number.getReal(), number.getImaginary(), parameters);
};


// parameters: '(' collection ')'
DuplicatingVisitor.prototype.visitParameters = function(parameters) {
    parameters.getCollection().acceptVisitor(this);
    const copy = new parameters.constructor(this.result);
    this.result = copy;
};


// pattern: 'none' | REGEX | 'any'
DuplicatingVisitor.prototype.visitPattern = function(pattern) {
    var parameters;
    if (pattern.isParameterized()) {
        pattern.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new pattern.constructor(pattern.getValue(), parameters);
};


// percent: PERCENT
DuplicatingVisitor.prototype.visitPercent = function(percent) {
    var parameters;
    if (percent.isParameterized()) {
        percent.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new percent.constructor(percent.getValue(), parameters);
};


// precedenceExpression: '(' expression ')'
DuplicatingVisitor.prototype.visitPrecedenceExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// probability: 'false' | FRACTION | 'true'
DuplicatingVisitor.prototype.visitProbability = function(probability) {
    var parameters;
    if (probability.isParameterized()) {
        probability.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new probability.constructor(probability.getValue(), parameters);
};


// procedure:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     {empty procedure}
DuplicatingVisitor.prototype.visitProcedure = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// publishClause: 'publish' expression
DuplicatingVisitor.prototype.visitPublishClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// queue:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty queue}
DuplicatingVisitor.prototype.visitQueue = function(queue) {
    var parameters;
    if (queue.isParameterized()) {
        queue.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    const copy = new queue.constructor(parameters);
    const iterator = queue.getIterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        item.acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// queueClause: 'queue' expression 'on' expression
DuplicatingVisitor.prototype.visitQueueClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// range: expression '..' expression
DuplicatingVisitor.prototype.visitRange = function(range) {
    range.getFirst().acceptVisitor(this);
    const first = this.result;
    range.getLast().acceptVisitor(this);
    const last = this.result;
    var parameters;
    if (range.isParameterized()) {
        range.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    const copy = new range.constructor(first, last, parameters);
    this.result = copy;
};


// reference: RESOURCE
DuplicatingVisitor.prototype.visitReference = function(reference) {
    var parameters;
    if (reference.isParameterized()) {
        reference.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new reference.constructor(reference.getValue(), parameters);
};


// reserved: RESERVED
DuplicatingVisitor.prototype.visitReserved = function(reserved) {
    var parameters;
    if (reserved.isParameterized()) {
        reserved.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new reserved.constructor(reserved.getValue(), parameters);
};


// returnClause: 'return' expression?
DuplicatingVisitor.prototype.visitReturnClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    if (!tree.isEmpty()) {
        tree.getChild(1).acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// saveClause: 'save' expression 'to' expression
DuplicatingVisitor.prototype.visitSaveClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
DuplicatingVisitor.prototype.visitSelectClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// set:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty set}
DuplicatingVisitor.prototype.visitSet = function(set) {
    var parameters;
    if (set.isParameterized()) {
        set.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    const copy = new set.constructor(parameters, set.getComparator());
    const iterator = set.getIterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        item.acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// formatted: '{' procedure '}'
DuplicatingVisitor.prototype.visitSource = function(source) {
    source.getProcedure().acceptVisitor(this);
    const procedure = this.result;
    var parameters;
    if (source.isParameterized()) {
        source.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    const copy = new source.constructor(procedure, parameters);
    this.result = copy;
};


// stack:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     {empty stack}
DuplicatingVisitor.prototype.visitStack = function(stack) {
    var parameters;
    if (stack.isParameterized()) {
        stack.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    const copy = new stack.constructor(parameters);
    const iterator = stack.getIterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        item.acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// statement: mainClause handleClause*
DuplicatingVisitor.prototype.visitStatement = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// subcomponent: variable indices
DuplicatingVisitor.prototype.visitSubcomponent = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// subcomponentExpression: expression indices
DuplicatingVisitor.prototype.visitSubcomponentExpression = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// symbol: SYMBOL
DuplicatingVisitor.prototype.visitSymbol = function(symbol) {
    var parameters;
    if (symbol.isParameterized()) {
        symbol.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new symbol.constructor(symbol.getValue(), parameters);
};


// tag: TAG
DuplicatingVisitor.prototype.visitTag = function(tag) {
    var parameters;
    if (tag.isParameterized()) {
        tag.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new tag.constructor(tag.getValue(), parameters);
};


// text: TEXT | TEXT_BLOCK
DuplicatingVisitor.prototype.visitText = function(text) {
    var parameters;
    if (text.isParameterized()) {
        text.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new text.constructor(text.getValue(), parameters);
};


// throwClause: 'throw' expression
DuplicatingVisitor.prototype.visitThrowClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// variable: IDENTIFIER
DuplicatingVisitor.prototype.visitVariable = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    copy.identifier = tree.identifier;
    this.result = copy;
};


// version: VERSION
DuplicatingVisitor.prototype.visitVersion = function(version) {
    var parameters;
    if (version.isParameterized()) {
        version.getParameters().acceptVisitor(this);
        parameters = this.result;
    }
    this.result = new version.constructor(version.getValue(), parameters);
};


// waitClause: 'wait' 'for' recipient 'from' expression
DuplicatingVisitor.prototype.visitWaitClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// whileClause: 'while' expression 'do' block
DuplicatingVisitor.prototype.visitWhileClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
DuplicatingVisitor.prototype.visitWithClause = function(tree) {
    const copy = new tree.constructor(tree.getTypeId());
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};
