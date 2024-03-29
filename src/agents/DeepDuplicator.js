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

/*
 * This class implements the methods for a deep duplicator agent. It performs a
 * deep copy of a component. Since elements are immutable, they are not copied,
 * only referenced.
 */
const moduleName = '/bali/agents/DeepDuplicator';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const CanonicalComparator = require('./CanonicalComparator').CanonicalComparator;
const MergeSorter = require('./MergeSorter').MergeSorter;


/**
 * This constructor creates a new duplicator agent that can be used to create a deep copy
 * of any component.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @returns {Duplicator} The new deep duplicator agent.
 */
const DeepDuplicator = function(debug) {
    abstractions.Duplicator.call(
        this,
        [ moduleName ],
        debug
    );
    return this;
};
DeepDuplicator.prototype = Object.create(abstractions.Duplicator.prototype);
DeepDuplicator.prototype.constructor = DeepDuplicator;
exports.DeepDuplicator = DeepDuplicator;


// PUBLIC METHODS

/**
 * This method returns a deep copy of the specified component. Since elements are immutable
 * they are not copied.
 *
 * @param {Component} The component to be duplicated.
 * @returns {Component} The duplicate component.
 */
DeepDuplicator.prototype.duplicateComponent = function(component) {
    if (this.debug > 1) {
        this.validateArgument('$duplicateComponent', '$component', component, [
            '/bali/abstractions/Component'
        ]);
    }
    const visitor = new DuplicatingVisitor(this.debug);
    component.acceptVisitor(visitor);
    return visitor.result;
};


// PRIVATE CLASSES

const DuplicatingVisitor = function(debug) {
    abstractions.Visitor.call(
        this,
        ['/bali/agents/DuplicatingVisitor'],
        debug
    );
    return this;
};
DuplicatingVisitor.prototype = Object.create(abstractions.Visitor.prototype);
DuplicatingVisitor.prototype.constructor = DuplicatingVisitor;


// acceptClause: 'accept' expression
DuplicatingVisitor.prototype.visitAcceptClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const message = node.getItem(1);
    message.acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// angle: ANGLE
DuplicatingVisitor.prototype.visitAngle = function(angle) {
    this.result = angle;
};


// arguments:
//     expression (',' expression)* |
//     /* no expressions */
DuplicatingVisitor.prototype.visitArguments = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        item.acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
DuplicatingVisitor.prototype.visitArithmeticExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    copy.operator = node.operator;
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// association: element ':' expression
DuplicatingVisitor.prototype.visitAssociation = function(association) {
    association.getKey().acceptVisitor(this);
    const key = this.result;
    association.getValue().acceptVisitor(this);
    const value = this.result;
    this.result = new association.constructor(key, value, association.debug);
};


// attribute: variable '[' indices ']'
DuplicatingVisitor.prototype.visitAttribute = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// attributeExpression: expression '[' indices ']'
DuplicatingVisitor.prototype.visitAttributeExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// binary: BINARY
DuplicatingVisitor.prototype.visitBinary = function(binary) {
    this.result = binary;
};


// block: '{' procedure '}'
DuplicatingVisitor.prototype.visitBlock = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// boolean: 'false' | 'true'
DuplicatingVisitor.prototype.visitBoolean = function(boolean) {
    this.result = boolean;
};


// breakClause: 'break' 'loop'
DuplicatingVisitor.prototype.visitBreakClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    this.result = copy;
};


DuplicatingVisitor.prototype.visitCanonicalComparator = function(comparator) {
    const copy = new CanonicalComparator(comparator.debug);
    this.result = copy;
};


// checkoutClause: 'checkout' recipient ('at level' expression)? 'from' expression;
DuplicatingVisitor.prototype.visitCheckoutClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        item.acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// code:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     /* no statements */
DuplicatingVisitor.prototype.visitCode = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// collection: range | list | catalog
DuplicatingVisitor.prototype.visitCollection = function(collection) {
    this.visitParameters(collection.getParameters());
    const parameters = this.result;
    if (collection.getType() === '/bali/collections/Range') {
        this.result = new collection.constructor(collection.getFirst(), collection.getConnector(), collection.getLast(), parameters, collection.debug);
    } else {
        const copy = new collection.constructor(parameters, collection.debug);
        const iterator = collection.getIterator();
        while (iterator.hasNext()) {
            var item = iterator.getNext();
            item.acceptVisitor(this);
            copy.addItem(this.result);
        }
        this.result = copy;
    }
    this.result.note = collection.note;
};


// comment: NOTE | COMMENT
DuplicatingVisitor.prototype.visitComment = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    copy.text = node.text;
    this.result = copy;
};


// comparisonExpression: expression ('<' | '=' | '>' | 'IS' | 'MATCHES') expression
DuplicatingVisitor.prototype.visitComparisonExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    copy.operator = node.operator;
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// complementExpression: 'NOT' expression
DuplicatingVisitor.prototype.visitComplementExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// chainExpression: expression '&' expression
DuplicatingVisitor.prototype.visitChainExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// continueClause: 'continue' 'loop'
DuplicatingVisitor.prototype.visitContinueClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    this.result = copy;
};


// defaultExpression: expression '?' expression
DuplicatingVisitor.prototype.visitDefaultExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// dereferenceExpression: '@' expression
DuplicatingVisitor.prototype.visitDereferenceExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// discardClause: 'discard' expression
DuplicatingVisitor.prototype.visitDiscardClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// duration: DURATION
DuplicatingVisitor.prototype.visitDuration = function(duration) {
    this.result = duration;
};


// evaluateClause: (recipient (':=' | '+=' | '-=' | '*='))? expression
DuplicatingVisitor.prototype.visitEvaluateClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    copy.operator = node.operator;
    this.result = copy;
};


DuplicatingVisitor.prototype.visitException = function(exception) {
    const attributes = exception.getAttributes();
    attributes.acceptVisitor(this);
    const copy = new abstractions.Exception(this.result);
    // Note: any cause has already been integrated into the trace attribute
    const parameters = exception.getParameters();
    parameters.acceptVisitor(this);
    copy.setParameters(this.result);
    copy.note = exception.note;
    this.result = copy;
};


// exponentialExpression: <assoc=right> expression '^' expression
DuplicatingVisitor.prototype.visitExponentialExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// factorialExpression: expression '!'
DuplicatingVisitor.prototype.visitFactorialExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// function: IDENTIFIER
DuplicatingVisitor.prototype.visitFunction = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    copy.identifier = node.identifier;
    this.result = copy;
};


// functionExpression: function '(' arguments ')'
DuplicatingVisitor.prototype.visitFunctionExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// handleClause: 'handle' symbol (('with' block) | ('matching' expression 'with' block)+);
DuplicatingVisitor.prototype.visitHandleClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
DuplicatingVisitor.prototype.visitIfClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// indices: expression (',' expression)*
DuplicatingVisitor.prototype.visitIndices = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        item.acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// inversionExpression: ('-' | '/' | '*') expression
DuplicatingVisitor.prototype.visitInversionExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    copy.operator = node.operator;
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


DuplicatingVisitor.prototype.visitIterator = function(iterator) {
    const slot = iterator.getSlot();
    const sequence = iterator.getSequence();
    sequence.acceptVisitor(this);
    const copy = this.result.getIterator();
    copy.toSlot(slot);
    this.result = copy;
};


// logicalExpression: expression ('AND' | 'SANS' | 'XOR' | 'OR') expression
DuplicatingVisitor.prototype.visitLogicalExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    copy.operator = node.operator;
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// magnitudeExpression: '|' expression '|'
DuplicatingVisitor.prototype.visitMagnitudeExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


DuplicatingVisitor.prototype.visitMergeSorter = function(sorter) {
    const copy = new MergeSorter(sorter.debug);
    this.result = copy;
};


// message: IDENTIFIER
DuplicatingVisitor.prototype.visitMessage = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    copy.identifier = node.identifier;
    this.result = copy;
};


// messageExpression: expression ('.' | '<-') message '(' arguments ')'
DuplicatingVisitor.prototype.visitMessageExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    copy.operator = node.operator;
    this.result = copy;
};


// moment: MOMENT
DuplicatingVisitor.prototype.visitMoment = function(moment) {
    this.result = moment;
};


// name: NAME
DuplicatingVisitor.prototype.visitName = function(name) {
    this.result = name;
};


// number:
//    'undefined' |
//    'infinity' |
//    '∞' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')'
DuplicatingVisitor.prototype.visitNumber = function(number) {
    this.result = number;
};


// parameters: '(' catalog ')'
DuplicatingVisitor.prototype.visitParameters = function(parameters) {
    if (parameters) {
        const copy = new parameters.constructor(undefined, parameters.debug);
        const iterator = parameters.getIterator();
        while (iterator.hasNext()) {
            var association = iterator.getNext();
            association.acceptVisitor(this);
            copy.addItem(this.result);
        }
        this.result = copy;
    } else {
        this.result = undefined;  // must remove the previous value
    }
};


// pattern: 'none' | REGEX | 'any'
DuplicatingVisitor.prototype.visitPattern = function(pattern) {
    this.result = pattern;
};


// percentage: PERCENTAGE
DuplicatingVisitor.prototype.visitPercentage = function(percentage) {
    this.result = percentage;
};


// postClause: 'post' expression 'to' expression
DuplicatingVisitor.prototype.visitPostClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// precedenceExpression: '(' expression ')'
DuplicatingVisitor.prototype.visitPrecedenceExpression = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// probability: FRACTION | '1.'
DuplicatingVisitor.prototype.visitProbability = function(probability) {
    this.result = probability;
};


// procedure: '{' code '}'
DuplicatingVisitor.prototype.visitProcedure = function(procedure) {
    procedure.getCode().acceptVisitor(this);
    const code = this.result;
    this.visitParameters(procedure.getParameters());
    const parameters = this.result;
    const copy = new procedure.constructor(code, parameters, procedure.debug);
    this.result = copy;
    this.result.note = procedure.note;
};


// publishClause: 'publish' expression
DuplicatingVisitor.prototype.visitPublishClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// resource: RESOURCE
DuplicatingVisitor.prototype.visitResource = function(resource) {
    this.result = resource;
};


// rejectClause: 'reject' expression
DuplicatingVisitor.prototype.visitRejectClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const message = node.getItem(1);
    message.acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// retrieveClause: 'retrieve' recipient 'from' expression
DuplicatingVisitor.prototype.visitRetrieveClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// returnClause: 'return' expression?
DuplicatingVisitor.prototype.visitReturnClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// saveClause: 'save' expression ('as' recipient)?
DuplicatingVisitor.prototype.visitSaveClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
DuplicatingVisitor.prototype.visitSelectClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// notarizeClause: 'notarize' expression 'as' expression
DuplicatingVisitor.prototype.visitNotarizeClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// statement: comment | mainClause handleClause?
DuplicatingVisitor.prototype.visitStatement = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// symbol: SYMBOL
DuplicatingVisitor.prototype.visitSymbol = function(symbol) {
    this.result = symbol;
};


// tag: TAG
DuplicatingVisitor.prototype.visitTag = function(tag) {
    this.result = tag;
};


// text: QUOTE | NARRATIVE
DuplicatingVisitor.prototype.visitText = function(text) {
    this.result = text;
};


// throwClause: 'throw' expression
DuplicatingVisitor.prototype.visitThrowClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// variable: IDENTIFIER
DuplicatingVisitor.prototype.visitVariable = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    copy.identifier = node.identifier;
    this.result = copy;
};


// version: VERSION
DuplicatingVisitor.prototype.visitVersion = function(version) {
    this.result = version;
};


// whileClause: 'while' expression 'do' block
DuplicatingVisitor.prototype.visitWhileClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
DuplicatingVisitor.prototype.visitWithClause = function(node) {
    const copy = new node.constructor(node.getType(), node.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};
