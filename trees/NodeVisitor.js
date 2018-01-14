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
 * This abstract visitor class defines the methods that should be implemented by
 * parse tree visitor classes.
 */


/**
 * This constructor creates a new element visitor.
 * 
 * @returns {NodeVisitor} The new element visitor.
 */
function NodeVisitor() {
    return this;
}
NodeVisitor.prototype.constructor = NodeVisitor;
exports.NodeVisitor = NodeVisitor;


// any: 'none' | 'any'
NodeVisitor.prototype.visitAny = function(terminal) {
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
NodeVisitor.prototype.visitArithmeticExpression = function(tree) {
};


// array:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty array*/
NodeVisitor.prototype.visitArray = function(tree) {
};


// association: key ':' expression
NodeVisitor.prototype.visitAssociation = function(tree) {
};


// binary: BINARY
NodeVisitor.prototype.visitBinary = function(terminal) {
};


// block: '{' method '}'
NodeVisitor.prototype.visitBlock = function(tree) {
};


// breakClause: 'break' ('from' label)?
NodeVisitor.prototype.visitBreakClause = function(tree) {
};


// checkoutClause: 'checkout' symbol 'from' expression
NodeVisitor.prototype.visitCheckoutClause = function(tree) {
};


// commitClause: 'commit' expression 'to' expression
NodeVisitor.prototype.visitCommitClause = function(tree) {
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
NodeVisitor.prototype.visitComparisonExpression = function(tree) {
};


// complementExpression: 'not' expression
NodeVisitor.prototype.visitComplementExpression = function(tree) {
};


// component: variable indices
NodeVisitor.prototype.visitComponent = function(tree) {
};


// componentExpression: expression indices
NodeVisitor.prototype.visitComponentExpression = function(tree) {
};


// continueClause: 'continue' ('to' label)?
NodeVisitor.prototype.visitContinueClause = function(tree) {
};


// defaultExpression: expression '?' expression
NodeVisitor.prototype.visitDefaultExpression = function(tree) {
};


// dereferenceExpression: '@' expression
NodeVisitor.prototype.visitDereferenceExpression = function(tree) {
};


// discardClause: 'discard' expression
NodeVisitor.prototype.visitDiscardClause = function(tree) {
};


// evaluateClause: (assignee ':=')? expression
NodeVisitor.prototype.visitEvaluateClause = function(tree) {
};


// exponentialExpression: <assoc=right> expression '^' expression
NodeVisitor.prototype.visitExponentialExpression = function(tree) {
};


// factorialExpression: expression '!'
NodeVisitor.prototype.visitFactorialExpression = function(tree) {
};


// finishClause: 'finish' 'with' block
NodeVisitor.prototype.visitFinishClause = function(tree) {
};


// functionExpression: invocation
NodeVisitor.prototype.visitFunctionExpression = function(tree) {
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
NodeVisitor.prototype.visitHandleClause = function(tree) {
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
NodeVisitor.prototype.visitIfClause = function(tree) {
};


// indices: '[' array ']'
NodeVisitor.prototype.visitIndices = function(tree) {
};


// inversionExpression: ('-' | '/' | '*') expression
NodeVisitor.prototype.visitInversionExpression = function(tree) {
};


// invocation: IDENTIFIER parameters
NodeVisitor.prototype.visitInvocation = function(tree) {
};


// label: IDENTIFIER
NodeVisitor.prototype.visitLabel = function(terminal) {
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
NodeVisitor.prototype.visitLogicalExpression = function(tree) {
};


// magnitudeExpression: '|' expression '|'
NodeVisitor.prototype.visitMagnitudeExpression = function(tree) {
};


// messageExpression: expression '.' invocation
NodeVisitor.prototype.visitMessageExpression = function(tree) {
};


// method:
//     statement (';' statement)* |
//     NEWLINE (statement NEWLINE)* |
//     /*empty method*/
NodeVisitor.prototype.visitMethod = function(tree) {
};


// number:
//     'undefined' |
//     'infinity' |
//     real |
//     imaginary |
//     '(' real (',' | 'e^') imaginary ')'
NodeVisitor.prototype.visitNumber = function(terminal) {
};


// parameters: '(' composite ')'
NodeVisitor.prototype.visitParameters = function(tree) {
};


// percent: real '%'
NodeVisitor.prototype.visitPercent = function(terminal) {
};


// precedenceExpression: '(' expression ')'
NodeVisitor.prototype.visitPrecedenceExpression = function(tree) {
};


// probability: 'true' | 'false' | FRACTION
NodeVisitor.prototype.visitProbability = function(terminal) {
};


// publishClause: 'publish' expression
NodeVisitor.prototype.visitPublishClause = function(tree) {
};


// queueClause: 'queue' expression 'on' expression
NodeVisitor.prototype.visitQueueClause = function(tree) {
};


// range: expression '..' expression
NodeVisitor.prototype.visitRange = function(tree) {
};


// reference: RESOURCE
NodeVisitor.prototype.visitReference = function(terminal) {
};


// returnClause: 'return' expression?
NodeVisitor.prototype.visitReturnClause = function(tree) {
};


// saveClause: 'save' expression 'to' expression
NodeVisitor.prototype.visitSaveClause = function(tree) {
};


// script: SHELL method EOF
NodeVisitor.prototype.visitScript = function(tree) {
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
NodeVisitor.prototype.visitSelectClause = function(tree) {
};


// statement: attemptClause handleClause* finishClause?
NodeVisitor.prototype.visitStatement = function(tree) {
};


// structure: '[' composite ']'
NodeVisitor.prototype.visitStructure = function(tree) {
};


// symbol: SYMBOL
NodeVisitor.prototype.visitSymbol = function(terminal) {
};


// table:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty table*/
NodeVisitor.prototype.visitTable = function(tree) {
};


// tag: TAG
NodeVisitor.prototype.visitTag = function(terminal) {
};


// text: TEXT | TEXT_BLOCK
NodeVisitor.prototype.visitText = function(terminal) {
};


// throwClause: 'throw' expression
NodeVisitor.prototype.visitThrowClause = function(tree) {
};


// time: MOMENT | DURATION
NodeVisitor.prototype.visitTime = function(terminal) {
};


// variable: IDENTIFIER
NodeVisitor.prototype.visitVariable = function(terminal) {
};


// version: VERSION
NodeVisitor.prototype.visitVersion = function(terminal) {
};


// waitClause: 'wait' 'for' symbol 'from' expression
NodeVisitor.prototype.visitWaitClause = function(tree) {
};


// whileClause: (label ':')? 'while' expression 'do' block
NodeVisitor.prototype.visitWhileClause = function(tree) {
};


// withClause: (label ':')? 'with' ('each' symbol 'in')? expression 'do' block
NodeVisitor.prototype.visitWithClause = function(tree) {
};
