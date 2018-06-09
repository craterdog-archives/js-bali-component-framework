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
 * the corresponding Bali document.
 */
var types = require('../syntax/NodeTypes');


/**
 * This function takes a Bali document and formats it as source code. Each
 * line will be prepended with the specified padding string.
 * 
 * @param {DocumentContext} baliDocument The Bali document to be formatted.
 * @param {string} padding The string that should be prepended to each line.
 * @returns {string} The formatted source code string.
 */
exports.formatDocument = function(baliDocument, padding) {
    var visitor = new TransformingVisitor(padding);
    baliDocument.accept(visitor);
    return visitor.document + '\n';  // POSIX requires all lines end with a line feed
};


// PRIVATE CLASSES

function TransformingVisitor(padding) {
    this.padding = padding === undefined ? '' : padding;
    this.document = '';
    this.depth = 0;
    return this;
}
TransformingVisitor.prototype.constructor = TransformingVisitor;
TransformingVisitor.prototype.indentation = '    ';  // indentation per level


TransformingVisitor.prototype.appendNewline = function() {
    this.document += '\n';
    this.document += this.getPadding();
};


TransformingVisitor.prototype.getPadding = function() {
    var padding = this.padding;
    for (var i = 0; i < this.depth; i++) {
        padding += TransformingVisitor.prototype.indentation;
    }
    return padding;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
TransformingVisitor.prototype.visitArithmeticExpression = function(tree) {
    tree.children[0].accept(this);
    this.document += ' ';
    this.document += tree.operator;
    this.document += ' ';
    tree.children[1].accept(this);
};


// association: component ':' expression
TransformingVisitor.prototype.visitAssociation = function(tree) {
    tree.children[0].accept(this);
    this.document += ': ';
    tree.children[1].accept(this);
};


// block: '{' procedure '}'
TransformingVisitor.prototype.visitBlock = function(tree) {
    this.document += '{';
    tree.children[0].accept(this);
    this.document += '}';
};


// breakClause: 'break' 'loop'
TransformingVisitor.prototype.visitBreakClause = function(tree) {
    this.document += 'break loop';
};


// catalog:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty catalog*/
TransformingVisitor.prototype.visitCatalog = function(tree) {
    var associations = tree.children;
    if (associations.length === 0) {
        this.document += ':';  // empty catalog
        return;
    }
    if (tree.isSimple) {
        associations[0].accept(this);
        for (var i = 1; i < associations.length; i++) {
            this.document += ', ';
            associations[i].accept(this);
        }
    } else {
        this.depth++;
        for (var j = 0; j < associations.length; j++) {
            this.appendNewline();
            associations[j].accept(this);
        }
        this.depth--;
        this.appendNewline();
    }
};


// checkoutClause: 'checkout' recipient 'from' expression
TransformingVisitor.prototype.visitCheckoutClause = function(tree) {
    this.document += 'checkout ';
    tree.children[0].accept(this);  // recipient
    this.document += ' from ';
    tree.children[1].accept(this);  // expression
};


// commitClause: 'commit' expression 'to' expression
TransformingVisitor.prototype.visitCommitClause = function(tree) {
    this.document += 'commit ';
    tree.children[0].accept(this);
    this.document += ' to ';
    tree.children[1].accept(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
TransformingVisitor.prototype.visitComparisonExpression = function(tree) {
    tree.children[0].accept(this);
    this.document += ' ';
    this.document += tree.operator;
    this.document += ' ';
    tree.children[1].accept(this);
};


// complementExpression: 'not' expression
TransformingVisitor.prototype.visitComplementExpression = function(tree) {
    this.document += 'not ';
    tree.children[0].accept(this);
};


// component: item parameters?
TransformingVisitor.prototype.visitComponent = function(tree) {
    for (var i = 0; i < tree.children.length; i++) {
        tree.children[i].accept(this);
    }
};


// continueClause: 'continue' 'loop'
TransformingVisitor.prototype.visitContinueClause = function(tree) {
    this.document += 'continue loop';
};


// defaultExpression: expression '?' expression
TransformingVisitor.prototype.visitDefaultExpression = function(tree) {
    tree.children[0].accept(this);
    this.document += ' ? ';
    tree.children[1].accept(this);
};


// dereferenceExpression: '@' expression
TransformingVisitor.prototype.visitDereferenceExpression = function(tree) {
    this.document += '@';
    tree.children[0].accept(this);
};


// discardClause: 'discard' expression
TransformingVisitor.prototype.visitDiscardClause = function(tree) {
    this.document += 'discard ';
    tree.children[0].accept(this);
};


// document: NEWLINE* component NEWLINE* EOF
TransformingVisitor.prototype.visitDocument = function(tree) {
    tree.children[0].accept(this);  // component
};


// element:
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
TransformingVisitor.prototype.visitElement = function(terminal) {
    this.document += terminal.value;
};


// evaluateClause: (recipient ':=')? expression
TransformingVisitor.prototype.visitEvaluateClause = function(tree) {
    tree.children[0].accept(this);
    if (tree.children.length > 1) {
        this.document += ' := ';
        tree.children[1].accept(this);
    }
};


// exponentialExpression: <assoc=right> expression '^' expression
TransformingVisitor.prototype.visitExponentialExpression = function(tree) {
    tree.children[0].accept(this);
    this.document += ' ^ ';
    tree.children[1].accept(this);
};


// factorialExpression: expression '!'
TransformingVisitor.prototype.visitFactorialExpression = function(tree) {
    tree.children[0].accept(this);
    this.document += '!';
};


// function: IDENTIFIER
TransformingVisitor.prototype.visitFunction = function(terminal) {
    this.document += terminal.value;
};


// functionExpression: function parameters
TransformingVisitor.prototype.visitFunctionExpression = function(tree) {
    tree.children[0].accept(this);
    tree.children[1].accept(this);
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
TransformingVisitor.prototype.visitHandleClause = function(tree) {
    this.document += ' handle ';
    tree.children[0].accept(this);
    this.document += ' matching ';
    tree.children[1].accept(this);
    this.document += ' with ';
    tree.children[2].accept(this);
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
TransformingVisitor.prototype.visitIfClause = function(tree) {
    // handle first condition
    this.document += 'if ';
    tree.children[0].accept(this);
    this.document += ' then ';
    tree.children[1].accept(this);

    // handle optional additional conditions
    for (var i = 2; i < tree.children.length; i += 2) {
        if (i === tree.children.length - 1) {
            this.document += ' else ';
            tree.children[i].accept(this);
        } else {
            this.document += ' else if ';
            tree.children[i].accept(this);
            this.document += ' then ';
            tree.children[i + 1].accept(this);
        }
    }
};


// indices: '[' list ']'
TransformingVisitor.prototype.visitIndices = function(tree) {
    this.document += '[';
    tree.children[0].accept(this);
    this.document += ']';
};


// inversionExpression: ('-' | '/' | '*') expression
TransformingVisitor.prototype.visitInversionExpression = function(tree) {
    this.document += tree.operator;
    var expression = tree.children[0];
    // must insert a space before a negative number or constant!
    if (tree.operator === '-') {
        if (expression.type === types.COMPONENT &&
                expression.children[0].type === types.NUMBER &&
                expression.children[0].value[0] === "-") {
            this.document += ' ';  // must insert a space before a negative number or constant!
        }
    }
    tree.children[0].accept(this);
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
TransformingVisitor.prototype.visitList = function(tree) {
    var expressions = tree.children;
    if (expressions.length === 0) return;
    if (tree.isSimple) {
        expressions[0].accept(this);
        for (var i = 1; i < expressions.length; i++) {
            this.document += ', ';
            expressions[i].accept(this);
        }
    } else {
        this.depth++;
        for (var j = 0; j < expressions.length; j++) {
            this.appendNewline();
            expressions[j].accept(this);
        }
        this.depth--;
        this.appendNewline();
    }
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
TransformingVisitor.prototype.visitLogicalExpression = function(tree) {
    tree.children[0].accept(this);
    this.document += ' ';
    this.document += tree.operator;
    this.document += ' ';
    tree.children[1].accept(this);
};


// magnitudeExpression: '|' expression '|'
TransformingVisitor.prototype.visitMagnitudeExpression = function(tree) {
    this.document += '|';
    tree.children[0].accept(this);
    this.document += '|';
};


// message: IDENTIFIER
TransformingVisitor.prototype.visitMessage = function(terminal) {
    this.document += terminal.value;
};


// messageExpression: expression '.' message parameters
TransformingVisitor.prototype.visitMessageExpression = function(tree) {
    tree.children[0].accept(this);
    this.document += '.';
    tree.children[1].accept(this);
    tree.children[2].accept(this);
};


// parameters: '(' composite ')'
TransformingVisitor.prototype.visitParameters = function(tree) {
    this.document += '(';
    tree.children[0].accept(this);
    this.document += ')';
};


// precedenceExpression: '(' expression ')'
TransformingVisitor.prototype.visitPrecedenceExpression = function(tree) {
    this.document += '(';
    tree.children[0].accept(this);
    this.document += ')';
};


// procedure:
//     statement (';' statement)* |
//     NEWLINE (statement NEWLINE)* |
//     /*empty procedure*/
TransformingVisitor.prototype.visitProcedure = function(tree) {
    var statements = tree.children;
    if (statements.length === 0 && tree.isSimple) return;
    if (tree.isSimple) {
        statements[0].accept(this);
        for (var i = 1; i < statements.length; i++) {
            this.document += '; ';
            statements[i].accept(this);
        }
    } else {
        this.depth++;
        for (var j = 0; j < statements.length; j++) {
            this.appendNewline();
            statements[j].accept(this);
        }
        this.depth--;
        this.appendNewline();
    }
};


// publishClause: 'publish' expression
TransformingVisitor.prototype.visitPublishClause = function(tree) {
    this.document += 'publish ';
    tree.children[0].accept(this);
};


// queueClause: 'queue' expression 'on' expression
TransformingVisitor.prototype.visitQueueClause = function(tree) {
    this.document += 'queue ';
    tree.children[0].accept(this);
    this.document += ' on ';
    tree.children[1].accept(this);
};


// range: expression '..' expression
TransformingVisitor.prototype.visitRange = function(tree) {
    tree.children[0].accept(this);
    this.document += '..';
    tree.children[1].accept(this);
};


// recipient: symbol | variable indices
TransformingVisitor.prototype.visitRecipient = function(tree) {
    var children = tree.children;
    for (var i = 0; i < children.length; i++) {
        children[i].accept(this);
    }
};


// returnClause: 'return' expression?
TransformingVisitor.prototype.visitReturnClause = function(tree) {
    this.document += 'return';
    if (tree.children.length > 0) {
        this.document += ' ';
        tree.children[0].accept(this);
    }
};


// saveClause: 'save' expression 'to' expression
TransformingVisitor.prototype.visitSaveClause = function(tree) {
    this.document += 'save ';
    tree.children[0].accept(this);
    this.document += ' to ';
    tree.children[1].accept(this);
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
TransformingVisitor.prototype.visitSelectClause = function(tree) {
    var expressions = tree.children;

    // handle the selection
    this.document += 'select ';
    expressions[0].accept(this);
    this.document += ' from';

    // handle option blocks
    for (var i = 1; i < expressions.length; i += 2) {
        if (i === expressions.length - 1) {
            this.document += ' else ';
            expressions[i].accept(this);
        } else {
            this.document += ' ';
            expressions[i].accept(this);
            this.document += ' do ';
            expressions[i + 1].accept(this);
        }
    }
};


// statement: mainClause handleClause*
TransformingVisitor.prototype.visitStatement = function(tree) {
    for (var i = 0; i < tree.children.length; i++) {
        tree.children[i].accept(this);
    }
};


// structure: '[' composite ']'
TransformingVisitor.prototype.visitStructure = function(tree) {
    this.document += '[';
    tree.children[0].accept(this);
    this.document += ']';
};


// subcomponentExpression: expression indices
TransformingVisitor.prototype.visitSubcomponentExpression = function(tree) {
    tree.children[0].accept(this);
    tree.children[1].accept(this);
};


// task: SHELL NEWLINE* procedure NEWLINE* EOF
TransformingVisitor.prototype.visitTask = function(tree) {
    this.document += tree.shell;
    tree.children[0].accept(this);
};


// throwClause: 'throw' expression
TransformingVisitor.prototype.visitThrowClause = function(tree) {
    this.document += 'throw ';
    tree.children[0].accept(this);
};


// variable: IDENTIFIER
TransformingVisitor.prototype.visitVariable = function(terminal) {
    this.document += terminal.value;
};


// waitClause: 'wait' 'for' recipient 'from' expression
TransformingVisitor.prototype.visitWaitClause = function(tree) {
    this.document += 'wait for ';
    tree.children[0].accept(this);  // recipient
    this.document += ' from ';
    tree.children[1].accept(this);  // expression
};


// whileClause: 'while' expression 'do' block
TransformingVisitor.prototype.visitWhileClause = function(tree) {
    var children = tree.children;
    this.document += 'while ';
    children[0].accept(this);
    this.document += ' do ';
    children[1].accept(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
TransformingVisitor.prototype.visitWithClause = function(tree) {
    var children = tree.children;
    var count = children.length;
    this.document += 'with ';
    if (count > 2) {
        this.document += 'each ';
        children[0].accept(this);
        this.document += ' in ';
    }
    children[count - 2].accept(this);
    this.document += ' do ';
    children[count - 1].accept(this);
};
