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
const Visitor = require('../abstractions/Visitor').Visitor;


// This private constant sets the POSIX end of line character
const EOL = '\n';


// PUBLIC FUNCTIONS

/**
 * This function creates a new duplicator object.
 *
 * @param {Number} debug A number in the range [0..3].
 * @returns {Duplicator} The new component duplicator.
 */
const Duplicator = function(debug) {
    debug = debug || 0;

    this.duplicateComponent = function(component, parameters) {
        if (debug > 1) {
            const validator = new Validator(debug);
            validator.validateType('/bali/utilities/Duplicator', '$duplicateComponent', '$component', component, [
                '/bali/abstractions/Component'
            ]);
            validator.validateType('/bali/abstractions/Component', '$Component', '$parameters', parameters, [
                '/javascript/Undefined',
                '/javascript/Object',
                '/bali/collections/Catalog'
            ]);
        }
        const visitor = new DuplicatingVisitor(parameters, debug);
        component.acceptVisitor(visitor);
        return visitor.result;
    };

    return this;
};
Duplicator.prototype.constructor = Duplicator;
exports.Duplicator = Duplicator;


// PRIVATE CLASSES

const DuplicatingVisitor = function(parameters, debug) {
    Visitor.call(this, debug);
    this.depth = 0;
    this.parameters = parameters;
    return this;
};
DuplicatingVisitor.prototype = Object.create(Visitor.prototype);
DuplicatingVisitor.prototype.constructor = DuplicatingVisitor;


DuplicatingVisitor.prototype.getParameters = function() {
    const parameters = this.parameters;
    this.parameters = undefined;  // must unset it so other values don't see it
    return parameters;
};


// angle: ANGLE
DuplicatingVisitor.prototype.visitAngle = function(angle) {
    this.visitComponent(angle);
    const parameters = this.getParameters();
    this.result = new angle.constructor(angle.getValue(), parameters, this.debug);
};


// arguments: '(' list ')'
DuplicatingVisitor.prototype.visitArguments = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const list = tree.getChild(1);
    list.acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
DuplicatingVisitor.prototype.visitArithmeticExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
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
    this.result = new association.constructor(key, value, this.debug);
};


// binary: BINARY
DuplicatingVisitor.prototype.visitBinary = function(binary) {
    this.visitComponent(binary);
    const parameters = this.getParameters();
    this.result = new binary.constructor(binary.getValue(), parameters, this.debug);
};


// block: '{' procedure '}'
DuplicatingVisitor.prototype.visitBlock = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// breakClause: 'break' 'loop'
DuplicatingVisitor.prototype.visitBreakClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    this.result = copy;
};


// checkoutClause: 'checkout' recipient 'from' expression
DuplicatingVisitor.prototype.visitCheckoutClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// collection: '[' sequence ']'
DuplicatingVisitor.prototype.visitCollection = function(sequence) {
    this.visitComponent(sequence);
    const parameters = this.getParameters();
    var copy;
    if (sequence.isType('/bali/collections/Range')) {
        sequence.getFirst().acceptVisitor(this);
        const first = this.result;
        sequence.getLast().acceptVisitor(this);
        const last = this.result;
        copy = new sequence.constructor(first, last, parameters, this.debug);
    } else {
        copy = new sequence.constructor(parameters, this.debug);
        const iterator = sequence.getIterator();
        while (iterator.hasNext()) {
            var item = iterator.getNext();
            item.acceptVisitor(this);
            copy.addItem(this.result);
        }
    }
    this.result = copy;
};


// commitClause: 'commit' expression 'to' expression
DuplicatingVisitor.prototype.visitCommitClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
DuplicatingVisitor.prototype.visitComparisonExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    copy.operator = tree.operator;
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// complementExpression: 'not' expression
DuplicatingVisitor.prototype.visitComplementExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// component: value parameters?
DuplicatingVisitor.prototype.visitComponent = function(component) {
    if (this.parameters === undefined) {
        // no parameters were passed in
        if (component.isParameterized()) {
            component.getParameters().acceptVisitor(this);
            this.parameters = this.result;  // save off the parameters for the value object
        }
    }
};


// concatenationExpression: expression '&' expression
DuplicatingVisitor.prototype.visitConcatenationExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// continueClause: 'continue' 'loop'
DuplicatingVisitor.prototype.visitContinueClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    this.result = copy;
};


// defaultExpression: expression '?' expression
DuplicatingVisitor.prototype.visitDefaultExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// dereferenceExpression: '@' expression
DuplicatingVisitor.prototype.visitDereferenceExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// discardClause: 'discard' expression
DuplicatingVisitor.prototype.visitDiscardClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// duration: DURATION
DuplicatingVisitor.prototype.visitDuration = function(duration) {
    this.visitComponent(duration);
    const parameters = this.getParameters();
    this.result = new duration.constructor(duration.getValue().toISOString(), parameters, this.debug);
};


// evaluateClause: (recipient ':=')? expression
DuplicatingVisitor.prototype.visitEvaluateClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// exponentialExpression: <assoc=right> expression '^' expression
DuplicatingVisitor.prototype.visitExponentialExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// factorialExpression: expression '!'
DuplicatingVisitor.prototype.visitFactorialExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// function: IDENTIFIER
DuplicatingVisitor.prototype.visitFunction = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    copy.identifier = tree.identifier;
    this.result = copy;
};


// functionExpression: function arguments
DuplicatingVisitor.prototype.visitFunctionExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
DuplicatingVisitor.prototype.visitHandleClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
DuplicatingVisitor.prototype.visitIfClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// inversionExpression: ('-' | '*') expression
DuplicatingVisitor.prototype.visitInversionExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    copy.operator = tree.operator;
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// indices: '[' keys ']'
DuplicatingVisitor.prototype.visitIndices = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const keys = tree.getChild(1);
    keys.acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
DuplicatingVisitor.prototype.visitLogicalExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    copy.operator = tree.operator;
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// magnitudeExpression: '|' expression '|'
DuplicatingVisitor.prototype.visitMagnitudeExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// message: IDENTIFIER
DuplicatingVisitor.prototype.visitMessage = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    copy.identifier = tree.identifier;
    this.result = copy;
};


// messageExpression: expression '.' message arguments
DuplicatingVisitor.prototype.visitMessageExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// moment: MOMENT
DuplicatingVisitor.prototype.visitMoment = function(moment) {
    this.visitComponent(moment);
    const parameters = this.getParameters();
    const value = moment.getValue().format(moment.getFormat());
    this.result = new moment.constructor(value, parameters, this.debug);
};


// name: NAME
DuplicatingVisitor.prototype.visitName = function(name) {
    this.visitComponent(name);
    const parameters = this.getParameters();
    this.result = new name.constructor(name.getValue(), parameters, this.debug);
};


// number:
//    'undefined' |
//    'infinity' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')'
DuplicatingVisitor.prototype.visitNumber = function(number) {
    this.visitComponent(number);
    const parameters = this.getParameters();
    this.result = new number.constructor(number.getReal(), number.getImaginary(), parameters, this.debug);
};


// parameters: '(' catalog ')'
DuplicatingVisitor.prototype.visitParameters = function(parameters) {
    // a parameters object does not give direct access to its catalog so iterate of the keys
    const object = {};
    const keys = parameters.getKeys();
    const iterator = keys.getIterator();
    while (iterator.hasNext()) {
        const key = iterator.getNext();
        const value = parameters.getValue(key);
        value.acceptVisitor(this);
        object[key.toString()] = this.result;
    }
    this.result = new parameters.constructor(object, this.debug);
};


// pattern: 'none' | REGEX | 'any'
DuplicatingVisitor.prototype.visitPattern = function(pattern) {
    this.visitComponent(pattern);
    const parameters = this.getParameters();
    this.result = new pattern.constructor(pattern.getValue(), parameters, this.debug);
};


// percent: PERCENT
DuplicatingVisitor.prototype.visitPercent = function(percent) {
    this.visitComponent(percent);
    const parameters = this.getParameters();
    this.result = new percent.constructor(percent.getValue(), parameters, this.debug);
};


// precedenceExpression: '(' expression ')'
DuplicatingVisitor.prototype.visitPrecedenceExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// probability: 'false' | FRACTION | 'true'
DuplicatingVisitor.prototype.visitProbability = function(probability) {
    this.visitComponent(probability);
    const parameters = this.getParameters();
    this.result = new probability.constructor(probability.getValue(), parameters, this.debug);
};


// procedure: '{' statements '}'
DuplicatingVisitor.prototype.visitProcedure = function(procedure) {
    this.visitComponent(procedure);
    const parameters = this.getParameters();
    procedure.getStatements().acceptVisitor(this);
    const statements = this.result;
    const copy = new procedure.constructor(statements, parameters, this.debug);
    this.result = copy;
};


// publishClause: 'publish' expression
DuplicatingVisitor.prototype.visitPublishClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// queueClause: 'queue' expression 'on' expression
DuplicatingVisitor.prototype.visitQueueClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// reference: RESOURCE
DuplicatingVisitor.prototype.visitReference = function(reference) {
    this.visitComponent(reference);
    const parameters = this.getParameters();
    this.result = new reference.constructor(reference.getValue(), parameters, this.debug);
};


// reserved: RESERVED
DuplicatingVisitor.prototype.visitReserved = function(reserved) {
    this.visitComponent(reserved);
    const parameters = this.getParameters();
    this.result = new reserved.constructor(reserved.getValue(), parameters, this.debug);
};


// returnClause: 'return' expression?
DuplicatingVisitor.prototype.visitReturnClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    if (tree.getSize() > 0) {
        tree.getChild(1).acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// saveClause: 'save' expression 'to' expression
DuplicatingVisitor.prototype.visitSaveClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
DuplicatingVisitor.prototype.visitSelectClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// statement: mainClause handleClause*
DuplicatingVisitor.prototype.visitStatement = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// statements:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     {empty procedure}
DuplicatingVisitor.prototype.visitStatements = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};


// subcomponent: variable indices
DuplicatingVisitor.prototype.visitSubcomponent = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// subcomponentExpression: expression indices
DuplicatingVisitor.prototype.visitSubcomponentExpression = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// symbol: SYMBOL
DuplicatingVisitor.prototype.visitSymbol = function(symbol) {
    this.visitComponent(symbol);
    const parameters = this.getParameters();
    this.result = new symbol.constructor(symbol.getValue(), parameters, this.debug);
};


// tag: TAG
DuplicatingVisitor.prototype.visitTag = function(tag) {
    this.visitComponent(tag);
    const parameters = this.getParameters();
    this.result = new tag.constructor(tag.getValue(), parameters, this.debug);
};


// text: TEXT | TEXT_BLOCK
DuplicatingVisitor.prototype.visitText = function(text) {
    this.visitComponent(text);
    const parameters = this.getParameters();
    this.result = new text.constructor(text.getValue(), parameters, this.debug);
};


// throwClause: 'throw' expression
DuplicatingVisitor.prototype.visitThrowClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// variable: IDENTIFIER
DuplicatingVisitor.prototype.visitVariable = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    copy.identifier = tree.identifier;
    this.result = copy;
};


// version: VERSION
DuplicatingVisitor.prototype.visitVersion = function(version) {
    this.visitComponent(version);
    const parameters = this.getParameters();
    this.result = new version.constructor(version.getValue(), parameters, this.debug);
};


// waitClause: 'wait' 'for' recipient 'from' expression
DuplicatingVisitor.prototype.visitWaitClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// whileClause: 'while' expression 'do' block
DuplicatingVisitor.prototype.visitWhileClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    tree.getChild(1).acceptVisitor(this);
    copy.addChild(this.result);
    tree.getChild(2).acceptVisitor(this);
    copy.addChild(this.result);
    this.result = copy;
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
DuplicatingVisitor.prototype.visitWithClause = function(tree) {
    const copy = new tree.constructor(tree.getType(), this.debug);
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
        copy.addChild(this.result);
    }
    this.result = copy;
};
