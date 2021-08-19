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


// PUBLIC FUNCTIONS

/**
 * This function creates a new visitor component.
 *
 * @param {Number} debug A number in the range 0..3.
 * @returns {Visitor} The new visitor.
 */
const Visitor = function(debug) {
    this.debug = debug || 0;
    this.depth = 0;
    return this;
};
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
    const parameters = angle.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
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


// association: element ':' component
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
    const parameters = binary.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// block: '{' code '}'
Visitor.prototype.visitBlock = function(node) {
    const code = node.getItem(1);
    code.acceptVisitor(this);
};


// breakClause: 'break' 'loop'
Visitor.prototype.visitBreakClause = function(node) {
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


// collection: list | catalog
Visitor.prototype.visitCollection = function(collection) {
    if (collection.getSize() > 0) {
        this.depth++;
        const iterator = collection.getIterator();
        while (iterator.hasNext()) {
            const item = iterator.getNext();
            item.acceptVisitor(this);
        }
        this.depth--;
    }
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


// concatenationExpression: expression '&' expression
Visitor.prototype.visitConcatenationExpression = function(node) {
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
    const parameters = duration.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// evaluateClause: (recipient ':=')? expression
Visitor.prototype.visitEvaluateClause = function(node) {
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        item.acceptVisitor(this);
    }
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
    const parameters = moment.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// name: NAME
Visitor.prototype.visitName = function(name) {
    const parameters = name.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// number:
//    'undefined' |
//    'infinity' |
//    '∞' |
//    REAL |
//    IMAGINARY |
//    '(' REAL (',' IMAGINARY | 'e^' ANGLE 'i') ')'
Visitor.prototype.visitNumber = function(number) {
    const parameters = number.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
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
    const parameters = pattern.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// percentage: PERCENTAGE
Visitor.prototype.visitPercentage = function(percentage) {
    const parameters = percentage.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
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


// probability: 'false' | FRACTION | 'true'
Visitor.prototype.visitProbability = function(probability) {
    const parameters = probability.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
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


// range: element? '..' element?
Visitor.prototype.visitRange = function(range) {
    const parameters = range.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    const first = range.getFirst();
    if (first !== undefined) {
        first.acceptVisitor(this);
    }
    const last = range.getLast();
    if (last !== undefined) {
        last.acceptVisitor(this);
    }
};


// resource: RESOURCE
Visitor.prototype.visitResource = function(resource) {
    const parameters = resource.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
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


// signClause: 'sign' expression 'as' expression
Visitor.prototype.visitSignClause = function(node) {
    const component = node.getItem(1);
    component.acceptVisitor(this);
    const reference = node.getItem(2);
    reference.acceptVisitor(this);
};


// statement: comment | mainClause handleClause?
Visitor.prototype.visitStatement = function(node) {
    const iterator = node.getIterator();
    while (iterator.hasNext()) {
        iterator.getNext().acceptVisitor(this);
    }
};


// symbol: SYMBOL
Visitor.prototype.visitSymbol = function(symbol) {
    const parameters = symbol.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// tag: TAG
Visitor.prototype.visitTag = function(tag) {
    const parameters = tag.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// text: TEXT | NARRATIVE
Visitor.prototype.visitText = function(text) {
    const parameters = text.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
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
    const parameters = version.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
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
