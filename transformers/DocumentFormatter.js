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
 * the corresponding source string.
 */
var types = require('../nodes/Types');


exports.formatTree = function(tree, padding) {
    var visitor = new FormattingVisitor(padding);
    tree.accept(visitor);
    return visitor.source;
};


// PRIVATE CLASSES

function FormattingVisitor(padding) {
    this.padding = padding === undefined ? '' : padding;
    this.source = '';
    this.depth = 0;
    return this;
}
FormattingVisitor.prototype.constructor = FormattingVisitor;
FormattingVisitor.prototype.indentation = '    ';  // indentation per level


FormattingVisitor.prototype.appendNewline = function() {
    this.source += '\n';
    this.source += this.getPadding();
};


FormattingVisitor.prototype.getPadding = function() {
    var padding = this.padding;
    for (var i = 0; i < this.depth; i++) {
        padding += FormattingVisitor.prototype.indentation;
    }
    return padding;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
FormattingVisitor.prototype.visitArithmeticExpression = function(tree) {
    tree.children[0].accept(this);
    this.source += ' ';
    this.source += tree.operator;
    this.source += ' ';
    tree.children[1].accept(this);
};


// association: component ':' expression
FormattingVisitor.prototype.visitAssociation = function(tree) {
    tree.children[0].accept(this);
    this.source += ': ';
    tree.children[1].accept(this);
};


// block: '{' procedure '}'
FormattingVisitor.prototype.visitBlock = function(tree) {
    this.source += '{';
    tree.children[0].accept(this);
    this.source += '}';
};


// breakClause: 'break' 'loop'
FormattingVisitor.prototype.visitBreakClause = function(tree) {
    this.source += 'break loop';
};


// catalog:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty catalog*/
FormattingVisitor.prototype.visitCatalog = function(tree) {
    var associations = tree.children;
    if (associations.length === 0) {
        this.source += ':';  // empty catalog
        return;
    }
    if (tree.isSimple) {
        associations[0].accept(this);
        for (var i = 1; i < associations.length; i++) {
            this.source += ', ';
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
FormattingVisitor.prototype.visitCheckoutClause = function(tree) {
    this.source += 'checkout ';
    tree.children[0].accept(this);  // recipient
    this.source += ' from ';
    tree.children[1].accept(this);  // expression
};


// code: '{' procedure '}'
FormattingVisitor.prototype.visitCode = function(tree) {
    this.source += '{';
    tree.children[0].accept(this);
    this.source += '}';
};


// commitClause: 'commit' expression 'to' expression
FormattingVisitor.prototype.visitCommitClause = function(tree) {
    this.source += 'commit ';
    tree.children[0].accept(this);
    this.source += ' to ';
    tree.children[1].accept(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
FormattingVisitor.prototype.visitComparisonExpression = function(tree) {
    tree.children[0].accept(this);
    this.source += ' ';
    this.source += tree.operator;
    this.source += ' ';
    tree.children[1].accept(this);
};


// complementExpression: 'not' expression
FormattingVisitor.prototype.visitComplementExpression = function(tree) {
    this.source += 'not ';
    tree.children[0].accept(this);
};


// component: object parameters?
FormattingVisitor.prototype.visitComponent = function(tree) {
    for (var i = 0; i < tree.children.length; i++) {
        tree.children[i].accept(this);
    }
};


// continueClause: 'continue' 'loop'
FormattingVisitor.prototype.visitContinueClause = function(tree) {
    this.source += 'continue loop';
};


// defaultExpression: expression '?' expression
FormattingVisitor.prototype.visitDefaultExpression = function(tree) {
    tree.children[0].accept(this);
    this.source += ' ? ';
    tree.children[1].accept(this);
};


// dereferenceExpression: '@' expression
FormattingVisitor.prototype.visitDereferenceExpression = function(tree) {
    this.source += '@';
    tree.children[0].accept(this);
};


// discardClause: 'discard' expression
FormattingVisitor.prototype.visitDiscardClause = function(tree) {
    this.source += 'discard ';
    tree.children[0].accept(this);
};


// document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF
FormattingVisitor.prototype.visitDocument = function(tree) {
    if (tree.previousReference) {
        tree.previousReference.accept(this);
        this.source += '\n';
    }
    tree.documentContent.accept(this);
    this.source += '\n';
    for (var i = 0; i < tree.notarySeals.length; i++) {
        var seal = tree.notarySeals[i];
        seal.accept(this);
    }
};


// element:
//     angle |
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
FormattingVisitor.prototype.visitElement = function(terminal) {
    this.source += terminal.value;
};


// evaluateClause: (recipient ':=')? expression
FormattingVisitor.prototype.visitEvaluateClause = function(tree) {
    tree.children[0].accept(this);
    if (tree.children.length > 1) {
        this.source += ' := ';
        tree.children[1].accept(this);
    }
};


// exponentialExpression: <assoc=right> expression '^' expression
FormattingVisitor.prototype.visitExponentialExpression = function(tree) {
    tree.children[0].accept(this);
    this.source += ' ^ ';
    tree.children[1].accept(this);
};


// factorialExpression: expression '!'
FormattingVisitor.prototype.visitFactorialExpression = function(tree) {
    tree.children[0].accept(this);
    this.source += '!';
};


// function: IDENTIFIER
FormattingVisitor.prototype.visitFunction = function(terminal) {
    this.source += terminal.value;
};


// functionExpression: function parameters
FormattingVisitor.prototype.visitFunctionExpression = function(tree) {
    tree.children[0].accept(this);
    tree.children[1].accept(this);
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
FormattingVisitor.prototype.visitHandleClause = function(tree) {
    this.source += ' handle ';
    tree.children[0].accept(this);
    this.source += ' matching ';
    tree.children[1].accept(this);
    this.source += ' with ';
    tree.children[2].accept(this);
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
FormattingVisitor.prototype.visitIfClause = function(tree) {
    // handle first condition
    this.source += 'if ';
    tree.children[0].accept(this);
    this.source += ' then ';
    tree.children[1].accept(this);

    // handle optional additional conditions
    for (var i = 2; i < tree.children.length; i += 2) {
        if (i === tree.children.length - 1) {
            this.source += ' else ';
            tree.children[i].accept(this);
        } else {
            this.source += ' else if ';
            tree.children[i].accept(this);
            this.source += ' then ';
            tree.children[i + 1].accept(this);
        }
    }
};


// indices: '[' list ']'
FormattingVisitor.prototype.visitIndices = function(tree) {
    this.source += '[';
    tree.children[0].accept(this);
    this.source += ']';
};


// inversionExpression: ('-' | '/' | '*') expression
FormattingVisitor.prototype.visitInversionExpression = function(tree) {
    this.source += tree.operator;
    var expression = tree.children[0];
    // must insert a space before a negative number or constant!
    if (tree.operator === '-') {
        if (expression.type === types.COMPONENT &&
                expression.children[0].type === types.NUMBER &&
                expression.children[0].value[0] === "-") {
            this.source += ' ';  // must insert a space before a negative number or constant!
        }
    }
    tree.children[0].accept(this);
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
FormattingVisitor.prototype.visitList = function(tree) {
    var expressions = tree.children;
    if (expressions.length === 0) return;
    if (tree.isSimple) {
        expressions[0].accept(this);
        for (var i = 1; i < expressions.length; i++) {
            this.source += ', ';
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
FormattingVisitor.prototype.visitLogicalExpression = function(tree) {
    tree.children[0].accept(this);
    this.source += ' ';
    this.source += tree.operator;
    this.source += ' ';
    tree.children[1].accept(this);
};


// magnitudeExpression: '|' expression '|'
FormattingVisitor.prototype.visitMagnitudeExpression = function(tree) {
    this.source += '|';
    tree.children[0].accept(this);
    this.source += '|';
};


// message: IDENTIFIER
FormattingVisitor.prototype.visitMessage = function(terminal) {
    this.source += terminal.value;
};


// messageExpression: expression '.' message parameters
FormattingVisitor.prototype.visitMessageExpression = function(tree) {
    tree.children[0].accept(this);
    this.source += '.';
    tree.children[1].accept(this);
    tree.children[2].accept(this);
};


// parameters: '(' collection ')'
FormattingVisitor.prototype.visitParameters = function(tree) {
    this.source += '(';
    tree.children[0].accept(this);
    this.source += ')';
};


// precedenceExpression: '(' expression ')'
FormattingVisitor.prototype.visitPrecedenceExpression = function(tree) {
    this.source += '(';
    tree.children[0].accept(this);
    this.source += ')';
};


// procedure:
//     statement (';' statement)* |
//     NEWLINE (statement NEWLINE)* |
//     /*empty procedure*/
FormattingVisitor.prototype.visitProcedure = function(tree) {
    var statements = tree.children;
    if (statements.length === 0 && tree.isSimple) return;
    if (tree.isSimple) {
        statements[0].accept(this);
        for (var i = 1; i < statements.length; i++) {
            this.source += '; ';
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
FormattingVisitor.prototype.visitPublishClause = function(tree) {
    this.source += 'publish ';
    tree.children[0].accept(this);
};


// queueClause: 'queue' expression 'on' expression
FormattingVisitor.prototype.visitQueueClause = function(tree) {
    this.source += 'queue ';
    tree.children[0].accept(this);
    this.source += ' on ';
    tree.children[1].accept(this);
};


// range: expression '..' expression
FormattingVisitor.prototype.visitRange = function(tree) {
    tree.children[0].accept(this);
    this.source += '..';
    tree.children[1].accept(this);
};


// returnClause: 'return' expression?
FormattingVisitor.prototype.visitReturnClause = function(tree) {
    this.source += 'return';
    if (tree.children.length > 0) {
        this.source += ' ';
        tree.children[0].accept(this);
    }
};


// saveClause: 'save' expression 'to' expression
FormattingVisitor.prototype.visitSaveClause = function(tree) {
    this.source += 'save ';
    tree.children[0].accept(this);
    this.source += ' to ';
    tree.children[1].accept(this);
};


// seal: reference binary
FormattingVisitor.prototype.visitSeal = function(tree) {
    tree.certificateReference.accept(this);
    this.source += ' ';
    tree.digitalSignature.accept(this);
    this.source += '\n';
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
FormattingVisitor.prototype.visitSelectClause = function(tree) {
    var expressions = tree.children;

    // handle the selection
    this.source += 'select ';
    expressions[0].accept(this);
    this.source += ' from';

    // handle option blocks
    for (var i = 1; i < expressions.length; i += 2) {
        if (i === expressions.length - 1) {
            this.source += ' else ';
            expressions[i].accept(this);
        } else {
            this.source += ' ';
            expressions[i].accept(this);
            this.source += ' do ';
            expressions[i + 1].accept(this);
        }
    }
};


// statement: mainClause handleClause*
FormattingVisitor.prototype.visitStatement = function(tree) {
    for (var i = 0; i < tree.children.length; i++) {
        tree.children[i].accept(this);
    }
};


// structure: '[' collection ']'
FormattingVisitor.prototype.visitStructure = function(tree) {
    this.source += '[';
    tree.children[0].accept(this);
    this.source += ']';
};


// subcomponent: variable indices
FormattingVisitor.prototype.visitSubcomponent = function(tree) {
    tree.children[0].accept(this);
    tree.children[1].accept(this);
};


// subcomponentExpression: expression indices
FormattingVisitor.prototype.visitSubcomponentExpression = function(tree) {
    tree.children[0].accept(this);
    tree.children[1].accept(this);
};


// throwClause: 'throw' expression
FormattingVisitor.prototype.visitThrowClause = function(tree) {
    this.source += 'throw ';
    tree.children[0].accept(this);
};


// variable: IDENTIFIER
FormattingVisitor.prototype.visitVariable = function(terminal) {
    this.source += terminal.value;
};


// waitClause: 'wait' 'for' recipient 'from' expression
FormattingVisitor.prototype.visitWaitClause = function(tree) {
    this.source += 'wait for ';
    tree.children[0].accept(this);  // recipient
    this.source += ' from ';
    tree.children[1].accept(this);  // expression
};


// whileClause: 'while' expression 'do' block
FormattingVisitor.prototype.visitWhileClause = function(tree) {
    var children = tree.children;
    this.source += 'while ';
    children[0].accept(this);
    this.source += ' do ';
    children[1].accept(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
FormattingVisitor.prototype.visitWithClause = function(tree) {
    var children = tree.children;
    var count = children.length;
    this.source += 'with ';
    if (count > 2) {
        this.source += 'each ';
        children[0].accept(this);
        this.source += ' in ';
    }
    children[count - 2].accept(this);
    this.source += ' do ';
    children[count - 1].accept(this);
};
