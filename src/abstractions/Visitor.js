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
 * @returns {Visitor} The new visitor.
 */
function Visitor() {
    this.depth = 0;
    return this;
}
Visitor.prototype.constructor = Visitor;
exports.Visitor = Visitor;


// PUBLIC METHODS

// angle: ANGLE
Visitor.prototype.visitAngle = function(angle) {
    this.visitComponent(angle);  // process any parameters first
    // then process the component itself
};


// arguments: '(' list ')'
Visitor.prototype.visitArguments = function(tree) {
    const list = tree.getChild(1);
    this.visitSequence(list);  // it is a sequence not a collection
};


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
    association.getKey().acceptVisitor(this);
    association.getValue().acceptVisitor(this);
};


// binary: BINARY
Visitor.prototype.visitBinary = function(binary) {
    this.visitComponent(binary);  // process any parameters first
    // then process the component itself
};


// block: '{' statements '}'
Visitor.prototype.visitBlock = function(tree) {
    const statements = tree.getChild(1);
    statements.acceptVisitor(this);
};


// breakClause: 'break' 'loop'
Visitor.prototype.visitBreakClause = function(tree) {
};


// checkoutClause: 'checkout' recipient 'from' expression
Visitor.prototype.visitCheckoutClause = function(tree) {
    const component = tree.getChild(1);
    component.acceptVisitor(this);
    const reference = tree.getChild(2);
    reference.acceptVisitor(this);
};


// collection: '[' sequence ']'
Visitor.prototype.visitCollection = function(sequence) {
    this.visitComponent(sequence);  // process any parameters first
    this.visitSequence(sequence);  // then process the items in the sequence
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


// component: value parameters?
Visitor.prototype.visitComponent = function(component) {
    // process any parameters first since the value may depend on them
    const parameters = component.getParameters();
    if (parameters) {
        parameters.acceptVisitor(this);
    }
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


// duration: DURATION
Visitor.prototype.visitDuration = function(duration) {
    this.visitComponent(duration);  // process any parameters first
    // then process the component itself
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


// indices: '[' keys ']'
Visitor.prototype.visitIndices = function(tree) {
    const keys = tree.getChild(1);
    this.visitSequence(keys);  // must explicitly call it
};


// inversionExpression: ('-' | '*') expression
Visitor.prototype.visitInversionExpression = function(tree) {
    const operator = tree.operator;
    const operand = tree.getChild(1);
    operand.acceptVisitor(this);
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


// moment: MOMENT
Visitor.prototype.visitMoment = function(moment) {
    this.visitComponent(moment);  // process any parameters first
    // then process the component itself
};


// name: NAME
Visitor.prototype.visitName = function(name) {
    this.visitComponent(name);  // process any parameters first
    // then process the component itself
};


// number:
//    'undefined' |
//    'infinity' |
//    real |
//    imaginary |
//    '(' real (',' imaginary | 'e^' angle 'i') ')' 
Visitor.prototype.visitNumber = function(number) {
    this.visitComponent(number);  // process any parameters first
    // then process the component itself
};


// parameters: '(' catalog ')'
Visitor.prototype.visitParameters = function(parameters) {
    this.depth++;
    const keys = parameters.getKeys();
    const iterator = keys.getIterator();
    while (iterator.hasNext()) {
        const key = iterator.getNext();
        const value = parameters.getValue(key);
        key.acceptVisitor(this);
        value.acceptVisitor(this);
    }
    this.depth--;
};


// pattern: 'none' | REGEX | 'any'
Visitor.prototype.visitPattern = function(pattern) {
    this.visitComponent(pattern);  // process any parameters first
    // then process the component itself
};


// percent: PERCENT
Visitor.prototype.visitPercent = function(percent) {
    this.visitComponent(percent);  // process any parameters first
    // then process the component itself
};


// precedenceExpression: '(' expression ')'
Visitor.prototype.visitPrecedenceExpression = function(tree) {
    const expression = tree.getChild(1);
    expression.acceptVisitor(this);
};


// probability: 'false' | FRACTION | 'true'
Visitor.prototype.visitProbability = function(probability) {
    this.visitComponent(probability);  // process any parameters first
    // then process the component itself
};


// procedure: '{' statements '}'
Visitor.prototype.visitProcedure = function(procedure) {
    this.visitComponent(procedure);  // process any parameters first
    const statements = procedure.getStatements();
    statements.acceptVisitor(this);  // then process the statements in the procedure
};


// publishClause: 'publish' expression
Visitor.prototype.visitPublishClause = function(tree) {
    const event = tree.getChild(1);
    event.acceptVisitor(this);
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
};


// reference: RESOURCE
Visitor.prototype.visitReference = function(reference) {
    this.visitComponent(reference);  // process any parameters first
    // then process the component itself
};


// reserved: RESERVED
Visitor.prototype.visitReserved = function(reserved) {
    this.visitComponent(reserved);  // process any parameters first
    // then process the component itself
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


// sequence: range | list | catalog
Visitor.prototype.visitSequence = function(sequence) {
    // note: range is handled differently
    if (sequence.isType('$Range')) {
        this.visitRange(sequence);  // must be called explicitly
    } else if (sequence.getSize() > 0) {
        this.depth++;
        const iterator = sequence.getIterator();
        while (iterator.hasNext()) {
            const item = iterator.getNext();
            item.acceptVisitor(this);
        }
        this.depth--;
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


// symbol: SYMBOL
Visitor.prototype.visitSymbol = function(symbol) {
    this.visitComponent(symbol);  // process any parameters first
    // then process the component itself
};


// tag: TAG
Visitor.prototype.visitTag = function(tag) {
    this.visitComponent(tag);  // process any parameters first
    // then process the component itself
};


// text: TEXT | TEXT_BLOCK
Visitor.prototype.visitText = function(text) {
    this.visitComponent(text);  // process any parameters first
    // then process the component itself
};


// throwClause: 'throw' expression
Visitor.prototype.visitThrowClause = function(tree) {
    const exception = tree.getChild(1);
    exception.acceptVisitor(this);
};


// variable: IDENTIFIER
Visitor.prototype.visitVariable = function(tree) {
};


// version: VERSION
Visitor.prototype.visitVersion = function(version) {
    this.visitComponent(version);  // process any parameters first
    // then process the component itself
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
