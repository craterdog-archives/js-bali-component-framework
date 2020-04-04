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
 * @param {Number} debug A number in the range [0..3].
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

// angle: ANGLE
Visitor.prototype.visitAngle = function(angle) {
    const parameters = angle.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// arguments:
//     expression (',' expression)* |
//     /* no arguments */
Visitor.prototype.visitArguments = function(tree) {
    this.depth++;
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        item.acceptVisitor(this);
    }
    this.depth--;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
Visitor.prototype.visitArithmeticExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    var operator = tree.operator;
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
};


// association: element ':' component
Visitor.prototype.visitAssociation = function(association) {
    association.getKey().acceptVisitor(this);
    association.getValue().acceptVisitor(this);
};


// binary: BINARY
Visitor.prototype.visitBinary = function(binary) {
    const parameters = binary.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// block: '{' statements '}'
Visitor.prototype.visitBlock = function(tree) {
    const statements = tree.getItem(1);
    statements.acceptVisitor(this);
};


// breakClause: 'break' 'loop'
Visitor.prototype.visitBreakClause = function(tree) {
};


// checkoutClause: 'checkout' recipient 'from' expression
Visitor.prototype.visitCheckoutClause = function(tree) {
    const component = tree.getItem(1);
    component.acceptVisitor(this);
    const reference = tree.getItem(2);
    reference.acceptVisitor(this);
};


// collection: range | list | catalog
Visitor.prototype.visitCollection = function(collection) {
    // note: range is handled differently
    if (collection.isType('/bali/collections/Range')) {
        collection.getFirstItem().acceptVisitor(this);
        collection.getLastItem().acceptVisitor(this);
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


// commitClause: 'commit' expression 'to' expression
Visitor.prototype.visitCommitClause = function(tree) {
    const component = tree.getItem(1);
    component.acceptVisitor(this);
    const reference = tree.getItem(2);
    reference.acceptVisitor(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
Visitor.prototype.visitComparisonExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    const operator = tree.operator;
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
};


// complementExpression: 'not' expression
Visitor.prototype.visitComplementExpression = function(tree) {
    const operand = tree.getItem(1);
    operand.acceptVisitor(this);
};


// concatenationExpression: expression '&' expression
Visitor.prototype.visitConcatenationExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
};


// continueClause: 'continue' 'loop'
Visitor.prototype.visitContinueClause = function(tree) {
};


// defaultExpression: expression '?' expression
Visitor.prototype.visitDefaultExpression = function(tree) {
    const value = tree.getItem(1);
    value.acceptVisitor(this);
    const defaultValue = tree.getItem(2);
    defaultValue.acceptVisitor(this);
};


// dereferenceExpression: '@' expression
Visitor.prototype.visitDereferenceExpression = function(tree) {
    const reference = tree.getItem(1);
    reference.acceptVisitor(this);
};


// discardClause: 'discard' expression
Visitor.prototype.visitDiscardClause = function(tree) {
    const draft = tree.getItem(1);
    draft.acceptVisitor(this);
};


// duration: DURATION
Visitor.prototype.visitDuration = function(duration) {
    const parameters = duration.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// evaluateClause: (recipient ':=')? expression
Visitor.prototype.visitEvaluateClause = function(tree) {
    const size = tree.getSize();
    if (size > 1) {
        const recipient = tree.getItem(1);
        recipient.acceptVisitor(this);
    }
    const expression = tree.getItem(size);
    expression.acceptVisitor(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
Visitor.prototype.visitExponentialExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
};


// factorialExpression: expression '!'
Visitor.prototype.visitFactorialExpression = function(tree) {
    const operand = tree.getItem(1);
    operand.acceptVisitor(this);
};


// function: IDENTIFIER
Visitor.prototype.visitFunction = function(tree) {
};


// functionExpression: function '(' arguments ')'
Visitor.prototype.visitFunctionExpression = function(tree) {
    const functionName = tree.getItem(1);
    functionName.acceptVisitor(this);
    const args = tree.getItem(2);
    args.acceptVisitor(this);
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
Visitor.prototype.visitHandleClause = function(tree) {
    const exception = tree.getItem(1);
    exception.acceptVisitor(this);
    const pattern = tree.getItem(2);
    pattern.acceptVisitor(this);
    const block = tree.getItem(3);
    block.acceptVisitor(this);
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
Visitor.prototype.visitIfClause = function(tree) {
    // handle 'if then' block
    var condition = tree.getItem(1);
    condition.acceptVisitor(this);
    var block = tree.getItem(2);
    block.acceptVisitor(this);

    // handle optional additional conditions
    const size = tree.getSize();
    for (var i = 3; i <= size; i += 2) {
        if (i === size) {
            // handle last 'else' block
            block = tree.getItem(i);
            block.acceptVisitor(this);
        } else {
            // handle 'else if then' block
            condition = tree.getItem(i);
            condition.acceptVisitor(this);
            block = tree.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// indices: expression (',' expression)*
Visitor.prototype.visitIndices = function(tree) {
    this.depth++;
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        item.acceptVisitor(this);
    }
    this.depth--;
};


// inversionExpression: ('-' | '*') expression
Visitor.prototype.visitInversionExpression = function(tree) {
    const operator = tree.operator;
    const operand = tree.getItem(1);
    operand.acceptVisitor(this);
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
Visitor.prototype.visitLogicalExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    const operator = tree.operator;
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
};


// magnitudeExpression: '|' expression '|'
Visitor.prototype.visitMagnitudeExpression = function(tree) {
    const operand = tree.getItem(1);
    operand.acceptVisitor(this);
};


// message: IDENTIFIER
Visitor.prototype.visitMessage = function(tree) {
};


// messageExpression: expression ('.' | '<-') message '(' arguments ')'
Visitor.prototype.visitMessageExpression = function(tree) {
    const target = tree.getItem(1);
    target.acceptVisitor(this);
    const operator = tree.operator;
    const messageName = tree.getItem(2);
    messageName.acceptVisitor(this);
    const args = tree.getItem(3);
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
    if (parameters) {
        const keys = Object.keys(parameters);
        keys.forEach(function(key) {
            // process key and value
            const value = parameters[key];
            value.acceptVisitor(this);
        }, this);
    }
};


// pattern: 'none' | REGEX | 'any'
Visitor.prototype.visitPattern = function(pattern) {
    const parameters = pattern.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// percent: PERCENT
Visitor.prototype.visitPercent = function(percent) {
    const parameters = percent.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// precedenceExpression: '(' expression ')'
Visitor.prototype.visitPrecedenceExpression = function(tree) {
    const expression = tree.getItem(1);
    expression.acceptVisitor(this);
};


// probability: 'false' | FRACTION | 'true'
Visitor.prototype.visitProbability = function(probability) {
    const parameters = probability.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// procedure: '{' statements '}'
Visitor.prototype.visitProcedure = function(procedure) {
    const parameters = procedure.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    const statements = procedure.getStatements();
    statements.acceptVisitor(this);  // then process the statements in the procedure
};


// publishClause: 'publish' expression
Visitor.prototype.visitPublishClause = function(tree) {
    const event = tree.getItem(1);
    event.acceptVisitor(this);
};


// queueClause: 'queue' expression 'on' expression
Visitor.prototype.visitQueueClause = function(tree) {
    const message = tree.getItem(1);
    message.acceptVisitor(this);
    const queue = tree.getItem(2);
    queue.acceptVisitor(this);
};


// reference: RESOURCE
Visitor.prototype.visitReference = function(reference) {
    const parameters = reference.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// reserved: RESERVED
Visitor.prototype.visitReserved = function(reserved) {
    const parameters = reserved.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// returnClause: 'return' expression?
Visitor.prototype.visitReturnClause = function(tree) {
    if (tree.getSize() > 0) {
        const result = tree.getItem(1);
        result.acceptVisitor(this);
    }
};


// saveClause: 'save' expression 'to' expression
Visitor.prototype.visitSaveClause = function(tree) {
    const draft = tree.getItem(1);
    draft.acceptVisitor(this);
    const reference = tree.getItem(2);
    reference.acceptVisitor(this);
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
Visitor.prototype.visitSelectClause = function(tree) {
    // handle the selection
    const value = tree.getItem(1);
    value.acceptVisitor(this);

    // handle option blocks
    var block;
    const size = tree.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            // handle the last 'else' block
            block = tree.getItem(i);
            block.acceptVisitor(this);
        } else {
            // handle the 'do' option block
            const option = tree.getItem(i);
            option.acceptVisitor(this);
            block = tree.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// statement: mainClause handleClause*
Visitor.prototype.visitStatement = function(tree) {
    this.depth++;
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        const child = iterator.getNext();
        child.acceptVisitor(this);
    }
    this.depth--;
};


// statements:
//     statement (';' statement)* |
//     EOL (statement EOL)* |
//     {empty procedure}
Visitor.prototype.visitStatements = function(tree) {
    this.depth++;
    const iterator = tree.getIterator();
    while (iterator.hasNext()) {
        const statement = iterator.getNext();
        statement.acceptVisitor(this);
    }
    this.depth--;
};


// subcomponent: variable '[' indices ']'
Visitor.prototype.visitSubcomponent = function(tree) {
    const variable = tree.getItem(1);
    variable.acceptVisitor(this);
    const indices = tree.getItem(2);
    indices.acceptVisitor(this);
};


// subcomponentExpression: expression '[' indices ']'
Visitor.prototype.visitSubcomponentExpression = function(tree) {
    const expression = tree.getItem(1);
    expression.acceptVisitor(this);
    const indices = tree.getItem(2);
    indices.acceptVisitor(this);
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


// text: TEXT | TEXT_BLOCK
Visitor.prototype.visitText = function(text) {
    const parameters = text.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// throwClause: 'throw' expression
Visitor.prototype.visitThrowClause = function(tree) {
    const exception = tree.getItem(1);
    exception.acceptVisitor(this);
};


// variable: IDENTIFIER
Visitor.prototype.visitVariable = function(tree) {
};


// version: VERSION
Visitor.prototype.visitVersion = function(version) {
    const parameters = version.getParameters();
    this.visitParameters(parameters);  // process any parameters first
    // then process the component itself
};


// waitClause: 'wait' 'for' recipient 'from' expression
Visitor.prototype.visitWaitClause = function(tree) {
    const message = tree.getItem(1);
    message.acceptVisitor(this);
    const queue = tree.getItem(2);
    queue.acceptVisitor(this);
};


// whileClause: 'while' expression 'do' block
Visitor.prototype.visitWhileClause = function(tree) {
    const condition = tree.getItem(1);
    condition.acceptVisitor(this);
    const block = tree.getItem(2);
    block.acceptVisitor(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
Visitor.prototype.visitWithClause = function(tree) {
    const size = tree.getSize();
    if (size > 2) {
        // handle symbol
        const item = tree.getItem(1);
        item.acceptVisitor(this);
    }
    const collection = tree.getItem(size - 1);
    collection.acceptVisitor(this);
    const block = tree.getItem(size);
    block.acceptVisitor(this);
};
