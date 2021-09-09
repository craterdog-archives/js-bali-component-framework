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
 * This class implements a duplicator that can be used to perform a deep copy of a
 * component.  Since elements are immutable, they are not copied, only referenced.
 */
const Validator = require('./Validator').Validator;
const Visitor = require('./Visitor').Visitor;


// PUBLIC FUNCTIONS

/**
 * This function creates a new duplicator object.
 *
 * @param {Number} debug A number in the range 0..3.
 * @returns {Duplicator} The new component duplicator.
 */
const Duplicator = function(debug) {
    debug = debug || 0;

    this.duplicateComponent = function(component, levels) {
        if (debug > 1) {
            const validator = new Validator(debug);
            validator.validateType('/bali/agents/Duplicator', '$duplicateComponent', '$component', component, [
                '/bali/abstractions/Component'
            ]);
        }
        levels = levels || Number.MAX_SAFE_INTEGER;  // default is all levels
        const visitor = new DuplicatingVisitor(levels, debug);
        component.acceptVisitor(visitor);
        return visitor.result;
    };

    return this;
};
Duplicator.prototype.constructor = Duplicator;
exports.Duplicator = Duplicator;


// PRIVATE CLASSES

const DuplicatingVisitor = function(levels, debug) {
    Visitor.call(this, levels, debug);
    return this;
};
DuplicatingVisitor.prototype = Object.create(Visitor.prototype);
DuplicatingVisitor.prototype.constructor = DuplicatingVisitor;


// acceptClause: 'accept' expression
DuplicatingVisitor.prototype.visitAcceptClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const message = node.getItem(1);
    message.acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// angle: ANGLE
DuplicatingVisitor.prototype.visitAngle = function(angle) {
    this.visitParameters(angle.getParameters());
    const parameters = this.result;
    this.result = new angle.constructor(angle.getValue(), parameters, this.debug);
    this.result.note = angle.note;
};


// arguments:
//     expression (',' expression)* |
//     /* no expressions */
DuplicatingVisitor.prototype.visitArguments = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
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
    const copy = new node.constructor(node.getType(), this.debug);
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
    this.result = new association.constructor(key, value, this.debug);
};


// attribute: variable '[' indices ']'
DuplicatingVisitor.prototype.visitAttribute = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// attributeExpression: expression '[' indices ']'
DuplicatingVisitor.prototype.visitAttributeExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// binary: BINARY
DuplicatingVisitor.prototype.visitBinary = function(binary) {
    this.visitParameters(binary.getParameters());
    const parameters = this.result;
    this.result = new binary.constructor(binary.getValue(), parameters, this.debug);
    this.result.note = binary.note;
};


// block: '{' procedure '}'
DuplicatingVisitor.prototype.visitBlock = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// boolean: 'false' | 'true'
DuplicatingVisitor.prototype.visitBoolean = function(boolean) {
    this.visitParameters(boolean.getParameters());
    const parameters = this.result;
    this.result = new boolean.constructor(boolean.getValue(), parameters, this.debug);
    this.result.note = boolean.note;
};


// breakClause: 'break' 'loop'
DuplicatingVisitor.prototype.visitBreakClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    this.result = copy;
};


// checkoutClause: 'checkout' ('level' expression 'of')? recipient 'from' expression
DuplicatingVisitor.prototype.visitCheckoutClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
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
    const copy = new node.constructor(node.getType(), this.debug);
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
        this.result = new collection.constructor(collection.getFirst(), collection.getConnector(), collection.getLast(), parameters, this.debug);
    } else {
        const copy = new collection.constructor(parameters, this.debug);
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
    const copy = new node.constructor(node.getType(), this.debug);
    copy.text = node.text;
    this.result = copy;
};


// comparisonExpression: expression ('<' | '=' | '>' | 'IS' | 'MATCHES') expression
DuplicatingVisitor.prototype.visitComparisonExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    copy.operator = node.operator;
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// complementExpression: 'NOT' expression
DuplicatingVisitor.prototype.visitComplementExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// chainExpression: expression '&' expression
DuplicatingVisitor.prototype.visitChainExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// continueClause: 'continue' 'loop'
DuplicatingVisitor.prototype.visitContinueClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    this.result = copy;
};


// defaultExpression: expression '?' expression
DuplicatingVisitor.prototype.visitDefaultExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// dereferenceExpression: '@' expression
DuplicatingVisitor.prototype.visitDereferenceExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// discardClause: 'discard' expression
DuplicatingVisitor.prototype.visitDiscardClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// duration: DURATION
DuplicatingVisitor.prototype.visitDuration = function(duration) {
    this.visitParameters(duration.getParameters());
    const parameters = this.result;
    this.result = new duration.constructor(duration.getTime().toISOString(), parameters, this.debug);
    this.result.note = duration.note;
};


// evaluateClause: (recipient (':=' | '+=' | '-=' | '*='))? expression
DuplicatingVisitor.prototype.visitEvaluateClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    copy.operator = node.operator;
    this.result = copy;
};


// exponentialExpression: <assoc=right> expression '^' expression
DuplicatingVisitor.prototype.visitExponentialExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// factorialExpression: expression '!'
DuplicatingVisitor.prototype.visitFactorialExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// function: IDENTIFIER
DuplicatingVisitor.prototype.visitFunction = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    copy.identifier = node.identifier;
    this.result = copy;
};


// functionExpression: function '(' arguments ')'
DuplicatingVisitor.prototype.visitFunctionExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// handleClause: 'handle' symbol (('with' block) | ('matching' expression 'with' block)+);
DuplicatingVisitor.prototype.visitHandleClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
DuplicatingVisitor.prototype.visitIfClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// indices: expression (',' expression)*
DuplicatingVisitor.prototype.visitIndices = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
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
    const copy = new node.constructor(node.getType(), this.debug);
    copy.operator = node.operator;
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// logicalExpression: expression ('AND' | 'SANS' | 'XOR' | 'OR') expression
DuplicatingVisitor.prototype.visitLogicalExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    copy.operator = node.operator;
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// magnitudeExpression: '|' expression '|'
DuplicatingVisitor.prototype.visitMagnitudeExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// message: IDENTIFIER
DuplicatingVisitor.prototype.visitMessage = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    copy.identifier = node.identifier;
    this.result = copy;
};


// messageExpression: expression ('.' | '<-') message '(' arguments ')'
DuplicatingVisitor.prototype.visitMessageExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
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
    const value = moment.getTimestamp().format(moment.getFormat());
    this.visitParameters(moment.getParameters());
    const parameters = this.result;
    this.result = new moment.constructor(value, parameters, this.debug);
    this.result.note = moment.note;
};


// name: NAME
DuplicatingVisitor.prototype.visitName = function(name) {
    this.visitParameters(name.getParameters());
    const parameters = this.result;
    this.result = new name.constructor(name.getValue(), parameters, this.debug);
    this.result.note = name.note;
};


// number:
//    'undefined' |
//    'infinity' |
//    '∞' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')'
DuplicatingVisitor.prototype.visitNumber = function(number) {
    this.visitParameters(number.getParameters());
    const parameters = this.result;
    this.result = new number.constructor(number.getValue(), parameters, this.debug);
    this.result.note = number.note;
};


// parameters: '(' catalog ')'
DuplicatingVisitor.prototype.visitParameters = function(parameters) {
    if (parameters) {
        const copy = new parameters.constructor(undefined, this.debug);
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
    this.visitParameters(pattern.getParameters());
    const parameters = this.result;
    this.result = new pattern.constructor(pattern.getValue(), parameters, this.debug);
    this.result.note = pattern.note;
};


// percentage: PERCENTAGE
DuplicatingVisitor.prototype.visitPercentage = function(percentage) {
    this.visitParameters(percentage.getParameters());
    const parameters = this.result;
    this.result = new percentage.constructor(percentage.getValue(), parameters, this.debug);
    this.result.note = percentage.note;
};


// postClause: 'post' expression 'to' expression
DuplicatingVisitor.prototype.visitPostClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// precedenceExpression: '(' expression ')'
DuplicatingVisitor.prototype.visitPrecedenceExpression = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// probability: FRACTION | '1.'
DuplicatingVisitor.prototype.visitProbability = function(probability) {
    this.visitParameters(probability.getParameters());
    const parameters = this.result;
    this.result = new probability.constructor(probability.getValue(), parameters, this.debug);
    this.result.note = probability.note;
};


// procedure: '{' code '}'
DuplicatingVisitor.prototype.visitProcedure = function(procedure) {
    procedure.getCode().acceptVisitor(this);
    const code = this.result;
    this.visitParameters(procedure.getParameters());
    const parameters = this.result;
    const copy = new procedure.constructor(code, parameters, this.debug);
    this.result = copy;
    this.result.note = procedure.note;
};


// publishClause: 'publish' expression
DuplicatingVisitor.prototype.visitPublishClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// resource: RESOURCE
DuplicatingVisitor.prototype.visitResource = function(resource) {
    this.visitParameters(resource.getParameters());
    const parameters = this.result;
    this.result = new resource.constructor(resource.getValue(), parameters, this.debug);
    this.result.note = resource.note;
};


// rejectClause: 'reject' expression
DuplicatingVisitor.prototype.visitRejectClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const message = node.getItem(1);
    message.acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// retrieveClause: 'retrieve' recipient 'from' expression
DuplicatingVisitor.prototype.visitRetrieveClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// returnClause: 'return' expression?
DuplicatingVisitor.prototype.visitReturnClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// saveClause: 'save' expression ('as' recipient)?
DuplicatingVisitor.prototype.visitSaveClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
DuplicatingVisitor.prototype.visitSelectClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// signClause: 'sign' expression 'as' expression
DuplicatingVisitor.prototype.visitSignClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// statement: comment | mainClause handleClause?
DuplicatingVisitor.prototype.visitStatement = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};


// symbol: SYMBOL
DuplicatingVisitor.prototype.visitSymbol = function(symbol) {
    this.visitParameters(symbol.getParameters());
    const parameters = this.result;
    this.result = new symbol.constructor(symbol.getValue(), parameters, this.debug);
    this.result.note = symbol.note;
};


// tag: TAG
DuplicatingVisitor.prototype.visitTag = function(tag) {
    this.visitParameters(tag.getParameters());
    const parameters = this.result;
    this.result = new tag.constructor(tag.getValue(), parameters, this.debug);
    this.result.note = tag.note;
};


// text: TEXT | NARRATIVE
DuplicatingVisitor.prototype.visitText = function(text) {
    this.visitParameters(text.getParameters());
    const parameters = this.result;
    this.result = new text.constructor(text.getValue(), parameters, this.debug);
    this.result.note = text.note;
};


// throwClause: 'throw' expression
DuplicatingVisitor.prototype.visitThrowClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// variable: IDENTIFIER
DuplicatingVisitor.prototype.visitVariable = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    copy.identifier = node.identifier;
    this.result = copy;
};


// version: VERSION
DuplicatingVisitor.prototype.visitVersion = function(version) {
    this.visitParameters(version.getParameters());
    const parameters = this.result;
    this.result = new version.constructor(version.getValue(), parameters, this.debug);
    this.result.note = version.note;
};


// whileClause: 'while' expression 'do' block
DuplicatingVisitor.prototype.visitWhileClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    node.getItem(1).acceptVisitor(this);
    copy.addItem(this.result);
    node.getItem(2).acceptVisitor(this);
    copy.addItem(this.result);
    this.result = copy;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
DuplicatingVisitor.prototype.visitWithClause = function(node) {
    const copy = new node.constructor(node.getType(), this.debug);
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addItem(this.result);
    }
    this.result = copy;
};
