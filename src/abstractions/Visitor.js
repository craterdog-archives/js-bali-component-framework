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
 * This abstract class defines the invariant methods that all visitors must support.
 */
const moduleName = '/bali/abstractions/Visitor';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;


/**
 * This constructor creates a new visitor component that can be used to visit components.
 *
 * It provides implementations of each method that by default just traverse the
 * parse tree. Subclasses should override most of the methods.
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
 * @param {Array} ancestry An array of type names that make up the ancestry for the visitor.
 * @returns {Visitor} The new visitor.
 */
const Visitor = function(ancestry, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        [],
        undefined,  // must be undefined to avoid infinite loop
        debug
    );
    this.depth = 0;
    return this;
};
Visitor.prototype = Object.create(Component.prototype);
Visitor.prototype.constructor = Visitor;
exports.Visitor = Visitor;


// PUBLIC METHODS

// acceptClause: 'accept' expression
Visitor.prototype.visitAcceptClause = function(node) {
    const message = node.getItem(1);
    message.acceptVisitor(this);
};


// angle: ANGLE
Visitor.prototype.visitAngle = function(angle) {
    this.visitElement(angle);
};


// arguments:
//     expression (',' expression)* |
//     /* no expressions */
Visitor.prototype.visitArguments = function(node) {
    this.depth++;
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        item.acceptVisitor(this);
    }
    this.depth--;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
Visitor.prototype.visitArithmeticExpression = function(node) {
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    var operator = node.operator;
    operand = node.getItem(2);
    operand.acceptVisitor(this);
};


// association: element ':' expression
Visitor.prototype.visitAssociation = function(association) {
    association.getKey().acceptVisitor(this);
    association.getValue().acceptVisitor(this);
};


// attribute: variable '[' indices ']'
Visitor.prototype.visitAttribute = function(node) {
    const variable = node.getItem(1);
    variable.acceptVisitor(this);
    const indices = node.getItem(2);
    indices.acceptVisitor(this);
};


// attributeExpression: expression '[' indices ']'
Visitor.prototype.visitAttributeExpression = function(node) {
    const expression = node.getItem(1);
    expression.acceptVisitor(this);
    const indices = node.getItem(2);
    indices.acceptVisitor(this);
};


// binary: BINARY
Visitor.prototype.visitBinary = function(binary) {
    this.visitElement(angle);
};


// boolean: 'false' | 'true'
Visitor.prototype.visitBoolean = function(boolean) {
    this.visitElement(angle);
};


// block: '{' code '}'
Visitor.prototype.visitBlock = function(node) {
    const code = node.getItem(1);
    code.acceptVisitor(this);
};


// breakClause: 'break' 'loop'
Visitor.prototype.visitBreakClause = function(node) {
};


Visitor.prototype.visitCanonicalComparator = function(comparator) {
};


// catalog:
//     association (',' association)* |
//     EOL (association EOL)* |
//     ':' /* no associations */
Visitor.prototype.visitCatalog = function(catalog) {
    this.visitCollection(catalog);
};


// checkoutClause: 'checkout' ('level' expression 'of')? recipient 'from' expression
Visitor.prototype.visitCheckoutClause = function(node) {
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        item.acceptVisitor(this);
    }
};


// code:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     /* no statements */
Visitor.prototype.visitCode = function(node) {
    this.depth++;
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        const statement = iterator.getNext();
        statement.acceptVisitor(this);
    }
    this.depth--;
};


// collection: range | list | catalog
Visitor.prototype.visitCollection = function(collection) {
    if (collection.getType() === '/bali/collections/Range') {
        const first = collection.getFirst();
        if (first !== undefined) {
            first.acceptVisitor(this);
        }
        const connector = collection.getConnector();
        const last = collection.getLast();
        if (last !== undefined) {
            last.acceptVisitor(this);
        }
    } else if (collection.getSize() > 0) {
        this.depth++;
        const iterator = collection.getIterator();
        while (iterator.hasNext()) {
            const item = iterator.getNext();
            item.acceptVisitor(this);
        }
        this.depth--;
    }
};


Visitor.prototype.visitCollectionIterator = function(iterator) {
    this.visitIterator(iterator);
};


// comment: NOTE | COMMENT
Visitor.prototype.visitComment = function(node) {
}


// comparisonExpression: expression ('<' | '=' | '>' | 'IS' | 'MATCHES') expression
Visitor.prototype.visitComparisonExpression = function(node) {
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    const operator = node.operator;
    operand = node.getItem(2);
    operand.acceptVisitor(this);
};


// complementExpression: 'NOT' expression
Visitor.prototype.visitComplementExpression = function(node) {
    const operand = node.getItem(1);
    operand.acceptVisitor(this);
};


// component: value parameters? note?
Visitor.prototype.visitComponent = function(component) {
    const type = component.getType().split('/');
    if (type[1] === 'bali') {
        switch (type[2]) {
            case 'abstractions':
            case 'agents':
            case 'collections':
            case 'elements':
            case 'strings':
            case 'trees':
                const functionName = 'visit' + type[3];
                if (this[functionName]) {
                    // dispatch to the actual type handler
                    this[functionName](component);
                    return;
                }
        }
    }
    // dispatch to the typed catalog handler
    this.visitCatalog(component);
};


// chainExpression: expression '&' expression
Visitor.prototype.visitChainExpression = function(node) {
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    operand = node.getItem(2);
    operand.acceptVisitor(this);
};


// continueClause: 'continue' 'loop'
Visitor.prototype.visitContinueClause = function(node) {
};


// defaultExpression: expression '?' expression
Visitor.prototype.visitDefaultExpression = function(node) {
    const value = node.getItem(1);
    value.acceptVisitor(this);
    const defaultValue = node.getItem(2);
    defaultValue.acceptVisitor(this);
};


// dereferenceExpression: '@' expression
Visitor.prototype.visitDereferenceExpression = function(node) {
    const reference = node.getItem(1);
    reference.acceptVisitor(this);
};


// discardClause: 'discard' expression
Visitor.prototype.visitDiscardClause = function(node) {
    const document = node.getItem(1);
    document.acceptVisitor(this);
};


// duration: DURATION
Visitor.prototype.visitDuration = function(duration) {
    this.visitElement(angle);
};


// element:
//    angle |
//    binary |
//    boolean |
//    duration |
//    moment |
//    name |
//    number |
//    pattern |
//    percentage |
//    probability |
//    resource |
//    symbol |
//    tag |
//    text |
//    version
Visitor.prototype.visitElement = function(element) {
    const parameters = element.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// evaluateClause: (recipient (':=' | '+=' | '-=' | '*='))? expression
Visitor.prototype.visitEvaluateClause = function(node) {
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        item.acceptVisitor(this);
    }
    const operator = node.operator;
};


Visitor.prototype.visitException = function(exception) {
    const attributes = exception.getAttributes();
    attributes.acceptVisitor(this);
    // Note: any cause has already been integrated into the trace attribute
    const parameters = exception.getParameters();
    parameters.acceptVisitor(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
Visitor.prototype.visitExponentialExpression = function(node) {
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    operand = node.getItem(2);
    operand.acceptVisitor(this);
};


// factorialExpression: expression '!'
Visitor.prototype.visitFactorialExpression = function(node) {
    const operand = node.getItem(1);
    operand.acceptVisitor(this);
};


// function: IDENTIFIER
Visitor.prototype.visitFunction = function(node) {
};


// functionExpression: function '(' arguments ')'
Visitor.prototype.visitFunctionExpression = function(node) {
    const functionName = node.getItem(1);
    functionName.acceptVisitor(this);
    const args = node.getItem(2);
    args.acceptVisitor(this);
};


// handleClause: 'handle' symbol (('with' block) | ('matching' expression 'with' block)+);
Visitor.prototype.visitHandleClause = function(node) {
    const iterator = node.getIterator();

    // handle 'symbol'
    var symbol = iterator.getNext();
    symbol.acceptVisitor(this);

    if (node.getSize() === 2) {
        // handle default ('matching any') with block
        const block = iterator.getNext();
        block.acceptVisitor(this);
    } else {
        // handle matching pattern with blocks
        while (iterator.hasNext()) {
            const pattern = iterator.getNext();
            pattern.acceptVisitor(this);
            const block = iterator.getNext();
            block.acceptVisitor(this);
        }
    }
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
Visitor.prototype.visitIfClause = function(node) {
    // handle 'if then' block
    var condition = node.getItem(1);
    condition.acceptVisitor(this);
    var block = node.getItem(2);
    block.acceptVisitor(this);

    // handle optional additional conditions
    const size = node.getSize();
    for (var i = 3; i <= size; i += 2) {
        if (i === size) {
            // handle last 'else' block
            block = node.getItem(i);
            block.acceptVisitor(this);
        } else {
            // handle 'else if then' block
            condition = node.getItem(i);
            condition.acceptVisitor(this);
            block = node.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// indices: expression (',' expression)*
Visitor.prototype.visitIndices = function(node) {
    this.depth++;
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        item.acceptVisitor(this);
    }
    this.depth--;
};


// inversionExpression: ('-' | '/' | '*') expression
Visitor.prototype.visitInversionExpression = function(node) {
    const operator = node.operator;
    const operand = node.getItem(1);
    operand.acceptVisitor(this);
};


Visitor.prototype.visitIterator = function(iterator) {
    const sequence = iterator.getSequence();
    sequence.acceptVisitor(this);
    const slot = iterator.getSlot();
};


// list:
//     expression (',' expression)* |
//     EOL (expression EOL)* |
//     /* no items */
Visitor.prototype.visitList = function(list) {
    this.visitCollection(list);
};


// logicalExpression: expression ('AND' | 'SANS' | 'XOR' | 'OR') expression
Visitor.prototype.visitLogicalExpression = function(node) {
    var operand = node.getItem(1);
    operand.acceptVisitor(this);
    const operator = node.operator;
    operand = node.getItem(2);
    operand.acceptVisitor(this);
};


// magnitudeExpression: '|' expression '|'
Visitor.prototype.visitMagnitudeExpression = function(node) {
    const operand = node.getItem(1);
    operand.acceptVisitor(this);
};


Visitor.prototype.visitMergeSorter = function(sorter) {
};


// message: IDENTIFIER
Visitor.prototype.visitMessage = function(node) {
};


// messageExpression: expression ('.' | '<-') message '(' arguments ')'
Visitor.prototype.visitMessageExpression = function(node) {
    const target = node.getItem(1);
    target.acceptVisitor(this);
    const operator = node.operator;
    const messageName = node.getItem(2);
    messageName.acceptVisitor(this);
    const args = node.getItem(3);
    args.acceptVisitor(this);
};


// moment: MOMENT
Visitor.prototype.visitMoment = function(moment) {
    this.visitElement(angle);
};


// name: NAME
Visitor.prototype.visitName = function(name) {
    this.visitElement(angle);
};


Visitor.prototype.visitNodeIterator = function(iterator) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$visitNodeIterator',
        $exception: '$notSupported',
        $text: '"This method is not supported for node iterators."'
    }, undefined, this.debug);
    throw exception;
};


// number:
//    'undefined' |
//    'infinity' |
//    '∞' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')'
Visitor.prototype.visitNumber = function(number) {
    this.visitElement(angle);
};


// parameters: '(' catalog ')'
Visitor.prototype.visitParameters = function(parameters) {
    if (parameters && parameters.getSize() > 0) {
        this.depth++;
        const iterator = parameters.getIterator();
        while (iterator.hasNext()) {
            const association = iterator.getNext();
            association.acceptVisitor(this);
        }
        this.depth--;
    }
};


// pattern: 'none' | REGEX | 'any'
Visitor.prototype.visitPattern = function(pattern) {
    this.visitElement(angle);
};


// percentage: PERCENTAGE
Visitor.prototype.visitPercentage = function(percentage) {
    this.visitElement(angle);
};


// postClause: 'post' expression 'on' expression
Visitor.prototype.visitPostClause = function(node) {
    const message = node.getItem(1);
    message.acceptVisitor(this);
    const queue = node.getItem(2);
    queue.acceptVisitor(this);
};


// precedenceExpression: '(' expression ')'
Visitor.prototype.visitPrecedenceExpression = function(node) {
    const expression = node.getItem(1);
    expression.acceptVisitor(this);
};


// probability: FRACTION | '1.'
Visitor.prototype.visitProbability = function(probability) {
    this.visitElement(angle);
};


// procedure: '{' code '}'
Visitor.prototype.visitProcedure = function(procedure) {
    const parameters = procedure.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    const code = procedure.getCode();
    code.acceptVisitor(this);  // then process the code in the procedure
};


// publishClause: 'publish' expression
Visitor.prototype.visitPublishClause = function(node) {
    const event = node.getItem(1);
    event.acceptVisitor(this);
};


Visitor.prototype.visitQueue = function(queue) {
    this.visitCollection(queue);
};


// range: expression? connector=('<..<' | '<..' | '..<' | '..') expression?;
Visitor.prototype.visitRange = function(range) {
    this.visitCollection(range);
};


Visitor.prototype.visitRangeIterator = function(iterator) {
    this.visitIterator(iterator);
};


// resource: RESOURCE
Visitor.prototype.visitResource = function(resource) {
    this.visitElement(angle);
};


// rejectClause: 'reject' expression
Visitor.prototype.visitRejectClause = function(node) {
    const message = node.getItem(1);
    message.acceptVisitor(this);
};


// retrieveClause: 'retrieve' recipient 'from' expression
Visitor.prototype.visitRetrieveClause = function(node) {
    const message = node.getItem(1);
    message.acceptVisitor(this);
    const queue = node.getItem(2);
    queue.acceptVisitor(this);
};


// returnClause: 'return' expression?
Visitor.prototype.visitReturnClause = function(node) {
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
    }
};


// saveClause: 'save' expression ('as' recipient)?
Visitor.prototype.visitSaveClause = function(node) {
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
    }
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
Visitor.prototype.visitSelectClause = function(node) {
    // handle the selection
    const value = node.getItem(1);
    value.acceptVisitor(this);

    // handle option blocks
    var block;
    const size = node.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            // handle the last 'else' block
            block = node.getItem(i);
            block.acceptVisitor(this);
        } else {
            // handle the 'do' option block
            const option = node.getItem(i);
            option.acceptVisitor(this);
            block = node.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


Visitor.prototype.visitSet = function(set) {
    this.visitCollection(set);
};


// signClause: 'sign' expression 'as' expression
Visitor.prototype.visitSignClause = function(node) {
    const component = node.getItem(1);
    component.acceptVisitor(this);
    const name = node.getItem(2);
    name.acceptVisitor(this);
};


Visitor.prototype.visitStack = function(stack) {
    this.visitCollection(stack);
};


// statement: comment | mainClause handleClause?
Visitor.prototype.visitStatement = function(node) {
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
    }
};


Visitor.prototype.visitStringIterator = function(iterator) {
    this.visitIterator(iterator);
};


// symbol: SYMBOL
Visitor.prototype.visitSymbol = function(symbol) {
    this.visitElement(angle);
};


// tag: TAG
Visitor.prototype.visitTag = function(tag) {
    this.visitElement(angle);
};


// text: TEXT | NARRATIVE
Visitor.prototype.visitText = function(text) {
    this.visitElement(angle);
};


// throwClause: 'throw' expression
Visitor.prototype.visitThrowClause = function(node) {
    const exception = node.getItem(1);
    exception.acceptVisitor(this);
};


// variable: IDENTIFIER
Visitor.prototype.visitVariable = function(node) {
};


// version: VERSION
Visitor.prototype.visitVersion = function(version) {
    this.visitElement(angle);
};


// whileClause: 'while' expression 'do' block
Visitor.prototype.visitWhileClause = function(node) {
    const condition = node.getItem(1);
    condition.acceptVisitor(this);
    const block = node.getItem(2);
    block.acceptVisitor(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
Visitor.prototype.visitWithClause = function(node) {
    const size = node.getSize();
    if (size > 2) {
        // handle symbol
        const item = node.getItem(1);
        item.acceptVisitor(this);
    }
    const collection = node.getItem(size - 1);
    collection.acceptVisitor(this);
    const block = node.getItem(size);
    block.acceptVisitor(this);
};
