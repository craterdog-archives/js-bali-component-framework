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
 * This class defines a formatting visitor that "walks" a parse tree
 * produced by the BaliLanguageParser and generates a canonical version of
 * the corresponding Bali source document. An optional padding may be
 * specified that is prepended to each line of the Bali document.
 */
var types = require('../nodes/NodeTypes');


/**
 * This constructor creates a new formatter with the specified padding.
 * 
 * @constructor
 * @returns {DocumentFormatter} The new formatter.
 */
function DocumentFormatter() {
    return this;
}
DocumentFormatter.prototype.constructor = DocumentFormatter;
exports.DocumentFormatter = DocumentFormatter;


/**
 * This function takes a Bali document and formats it as source code. Each
 * line will be prepended with the specified padding string.
 * 
 * @param {DocumentContext} baliDocument The Bali document to be formatted.
 * @param {string} padding The string that should be prepended to each line.
 * @returns {string} The formatted source code string.
 */
DocumentFormatter.prototype.formatDocument = function(baliDocument, padding) {
    var visitor = new TransformingVisitor(padding);
    baliDocument.accept(visitor);
    return visitor.document;
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


// array:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty array*/
TransformingVisitor.prototype.visitArray = function(tree) {
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


// association: element ':' expression
TransformingVisitor.prototype.visitAssociation = function(tree) {
    tree.children[0].accept(this);
    this.document += ': ';
    tree.children[1].accept(this);
};


// block: '{' procedure '}' parameters?
TransformingVisitor.prototype.visitBlock = function(tree) {
    this.document += '{';
    tree.children[0].accept(this);
    this.document += '}';
    if (tree.children.length > 1) {
        tree.children[1].accept(this);
    }
};


// breakClause: 'break' ('from' label)?
TransformingVisitor.prototype.visitBreakClause = function(tree) {
    this.document += 'break';
    if (tree.children.length > 0) {
        this.document += ' from ';
        tree.children[0].accept(this);
    }
};


// checkoutClause: 'checkout' symbol 'from' expression
TransformingVisitor.prototype.visitCheckoutClause = function(tree) {
    this.document += 'checkout ';
    tree.children[0].accept(this);
    this.document += ' from ';
    tree.children[1].accept(this);
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


// continueClause: 'continue' ('to' label)?
TransformingVisitor.prototype.visitContinueClause = function(tree) {
    this.document += 'continue';
    if (tree.children.length > 0) {
        this.document += ' to ';
        tree.children[0].accept(this);
    }
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
    tree.children[0].accept(this);
};


// element: (
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
//) parameters?
TransformingVisitor.prototype.visitElement = function(terminal) {
    this.document += terminal.value;
    if (terminal.parameters) {
        terminal.parameters.accept(this);
    }
};


// evaluateClause: ((symbol | variable indices) ':=')? expression
TransformingVisitor.prototype.visitEvaluateClause = function(tree) {
    var children = tree.children;
    switch (children.length) {
        case 3:
            children[0].accept(this);  // variable
            children[1].accept(this);  // indices
            this.document += ' := ';
            children[2].accept(this);  // expression
            break;
        case 2:
            children[0].accept(this);  // symbol
            this.document += ' := ';
            children[1].accept(this);  // expression
            break;
        case 1:
            children[0].accept(this);  // expression
            break;
        default:
            throw new Error('FORMATTER: An invalid evaluate clause has too many children: ' + children.length);
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


// finishClause: 'finish' 'with' block
TransformingVisitor.prototype.visitFinishClause = function(tree) {
    this.document += ' finish with ';
    tree.children[0].accept(this);
};


// functionExpression: name parameters
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


// indices: '[' array ']'
TransformingVisitor.prototype.visitIndices = function(tree) {
    this.document += '[';
    tree.children[0].accept(this);
    this.document += ']';
};


// inversionExpression: ('-' | '/' | '*') expression
TransformingVisitor.prototype.visitInversionExpression = function(tree) {
    this.document += tree.operator;
    var expression = tree.children[0];
    if (tree.operator === '-') {
        if (expression.type === types.NUMBER && expression.value[0] === "-") {
            this.document += ' ';  // must insert a space before a negative value!
        }
    }
    tree.children[0].accept(this);
};


// label: IDENTIFIER
TransformingVisitor.prototype.visitLabel = function(terminal) {
    this.document += terminal.value;
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


// messageExpression: expression '.' name parameters
TransformingVisitor.prototype.visitMessageExpression = function(tree) {
    tree.children[0].accept(this);
    this.document += '.';
    tree.children[1].accept(this);
    tree.children[2].accept(this);
};


// name: IDENTIFIER
TransformingVisitor.prototype.visitName = function(terminal) {
    this.document += terminal.value;
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


// returnClause: 'return' result?
TransformingVisitor.prototype.visitReturnClause = function(tree) {
    this.document += 'return';
    if (tree.children.length > 0) {
        this.document += ' ';
        tree.children[0].accept(this);
    }
};


// saveClause: 'save' draft 'to' location
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


// statement: (
//     evaluateClause |
//     checkoutClause |
//     saveClause |
//     discardClause |
//     commitClause |
//     publishClause |
//     queueClause |
//     waitClause |
//     ifClause |
//     selectClause |
//     whileClause |
//     withClause |
//     continueClause |
//     breakClause |
//     returnClause |
//     throwClause
// ) handleClause* finishClause?
TransformingVisitor.prototype.visitStatement = function(tree) {
    for (var i = 0; i < tree.children.length; i++) {
        tree.children[i].accept(this);
    }
};


// structure: '[' composite ']' parameters?
TransformingVisitor.prototype.visitStructure = function(tree) {
    this.document += '[';
    tree.children[0].accept(this);
    this.document += ']';
    if (tree.children.length > 1) {
        tree.children[1].accept(this);
    }
};


// subcomponentExpression: expression indices
TransformingVisitor.prototype.visitSubcomponentExpression = function(tree) {
    tree.children[0].accept(this);
    tree.children[1].accept(this);
};


// table:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty table*/
TransformingVisitor.prototype.visitTable = function(tree) {
    var associations = tree.children;
    if (associations.length === 0) {
        this.document += ':';  // empty table
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


// waitClause: 'wait' 'for' symbol 'from' expression
TransformingVisitor.prototype.visitWaitClause = function(tree) {
    this.document += 'wait for ';
    tree.children[0].accept(this);
    this.document += ' from ';
    tree.children[1].accept(this);
};


// whileClause: (label ':')? 'while' expression 'do' block
TransformingVisitor.prototype.visitWhileClause = function(tree) {
    var children = tree.children;
    if (children[0].type === types.LABEL) {
        children[0].accept(this);
        this.document += ': ';
        children = children.slice(1);  // remove the first child
    }
    this.document += 'while ';
    children[0].accept(this);
    this.document += ' do ';
    children[1].accept(this);
};


// withClause: (label ':')? 'with' ('each' symbol 'in')? expression 'do' block
TransformingVisitor.prototype.visitWithClause = function(tree) {
    var children = tree.children;
    if (children[0].type === types.LABEL) {
        children[0].accept(this);
        this.document += ': ';
        children = children.slice(1);  // remove the first child
    }
    this.document += 'with ';
    if (children[0].type === types.SYMBOL) {
        this.document += 'each ';
        children[0].accept(this);
        this.document += ' in ';
        children = children.slice(1);  // remove the first child
    }
    children[0].accept(this);
    this.document += ' do ';
    children[1].accept(this);
};
