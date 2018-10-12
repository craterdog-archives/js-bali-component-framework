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
var types = require('../abstractions/Types');


exports.formatTree = function(tree, indentation) {
    var visitor = new FormattingVisitor(indentation);
    tree.accept(visitor);
    return visitor.source;
};


// PRIVATE CLASSES

var INDENTATION = '    ';

function FormattingVisitor(indentation) {
    this.indentation = indentation ? indentation : '';
    this.source = '';
    this.depth = 0;
    return this;
}
FormattingVisitor.prototype.constructor = FormattingVisitor;


FormattingVisitor.prototype.appendNewline = function() {
    this.source += '\n';
    this.source += this.getIndentation();
};


FormattingVisitor.prototype.getIndentation = function() {
    var indentation = this.indentation;
    for (var i = 0; i < this.depth; i++) {
        indentation += INDENTATION;
    }
    return indentation;
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
FormattingVisitor.prototype.visitAssociation = function(association) {
    association.key.accept(this);
    this.source += ': ';
    association.value.accept(this);
};


// breakClause: 'break' 'loop'
FormattingVisitor.prototype.visitBreakClause = function(tree) {
    this.source += 'break loop';
};


// catalog:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty catalog*/
FormattingVisitor.prototype.visitCatalog = function(catalog) {
    // delegate to collection
    this.visitCollection(catalog);
};


// checkoutClause: 'checkout' recipient 'from' expression
FormattingVisitor.prototype.visitCheckoutClause = function(tree) {
    this.source += 'checkout ';
    tree.children[0].accept(this);  // recipient
    this.source += ' from ';
    tree.children[1].accept(this);  // expression
};


// code: '{' procedure '}'
FormattingVisitor.prototype.visitCode = function(code) {
    // delegate to element
    this.visitElement(code);
};


// collection: range | list | catalog
FormattingVisitor.prototype.visitCollection = function(collection) {
    if (collection.inBrackets) {
        this.source += '[';
    }
    if (!collection.isEmpty()) {
        var iterator = collection.iterator();
        var item;
        if (collection.getSize() < types.TOO_BIG) {
            // inline the items
            item = iterator.getNext();
            item.accept(this);
            while (iterator.hasNext()) {
                this.source += ', ';
                item = iterator.getNext();
                item.accept(this);
            };
        } else {
            // each item is on a separate line
            this.depth++;
            while (iterator.hasNext()) {
                this.appendNewline();
                item = iterator.getNext();
                item.accept(this);
            };
            this.depth--;
            this.appendNewline();
        }
    } else if (collection.type === types.CATALOG) {
        this.source += ':';  // empty catalog
    }
    if (collection.inBrackets) {
        this.source += ']';
    }
    if (collection.isParameterized()) {
        collection.parameters.accept(this);
    }
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
FormattingVisitor.prototype.visitDocument = function(document) {
    if (document.previousCitation) {
        document.previousCitation.accept(this);
        this.source += '\n';
    }
    document.documentContent.accept(this);
    this.source += '\n';
    document.notarySeals.forEach(function(seal) {
        seal.accept(this);
        this.source += '\n';
    }, this);
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
FormattingVisitor.prototype.visitElement = function(element) {
    var indentation = this.getIndentation();
    var regex = new RegExp('\\n', 'g');
    var source = element.source.replace(regex, '\n' + indentation);
    this.source += source;
    if (element.isParameterized()) {
        element.parameters.accept(this);
    }
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
FormattingVisitor.prototype.visitFunction = function(identifier) {
    this.source += identifier.source;
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


FormattingVisitor.prototype.visitIterator = function(iterator) {
    this.source += '[';
    this.depth++;
    var count = 0;
    iterator.array.forEach(function(item) {
        this.appendNewline();
        if (iterator.slot === count++) {
            this.source += '    <= iterator';
            this.appendNewline();
        }
        item.accept(this);
    }, this);
    if (iterator.slot === count) {
        this.source += '    <= iterator';
        this.appendNewline();
    }
    this.depth--;
    this.appendNewline();
    this.source += ']';
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
FormattingVisitor.prototype.visitList = function(list) {
    // delegate to collection
    this.visitCollection(list);
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
FormattingVisitor.prototype.visitMessage = function(identifier) {
    this.source += identifier.source;
};


// messageExpression: expression '.' message parameters
FormattingVisitor.prototype.visitMessageExpression = function(tree) {
    tree.children[0].accept(this);
    this.source += '.';
    tree.children[1].accept(this);
    tree.children[2].accept(this);
};


// parameters: '(' collection ')'
FormattingVisitor.prototype.visitParameters = function(parameters) {
    this.source += '(';
    if (!parameters.isEmpty()) {
        var iterator = parameters.iterator();
        var parameter;
        if (parameters.getSize() < types.TOO_BIG) {
            // inline the parameters
            parameter = iterator.getNext();
            if (parameters.isList) parameter = parameter.value;
            parameter.accept(this);
            while (iterator.hasNext()) {
                this.source += ', ';
                parameter = iterator.getNext();
                if (parameters.isList) parameter = parameter.value;
                parameter.accept(this);
            };
        } else {
            // each parameter is on a separate line
            this.depth++;
            while (iterator.hasNext()) {
                this.appendNewline();
                parameter = iterator.getNext();
                if (parameters.isList) parameter = parameter.value;
                parameter.accept(this);
            };
            this.depth--;
            this.appendNewline();
        }
    } else if (!parameters.isList) {
        this.source += ':';  // empty catalog
    }
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
FormattingVisitor.prototype.visitProcedure = function(procedure) {
    if (procedure.inBrackets) {
        this.source += '{';
    }
    if (!procedure.isEmpty()) {
        var iterator = procedure.iterator();
        var statement;
        if (procedure.size < types.TOO_BIG) {
            // inline the statements
            statement = iterator.getNext();
            statement.accept(this);
            while (iterator.hasNext()) {
                this.source += '; ';
                statement = iterator.getNext();
                statement.accept(this);
            }
        } else {
            // each statement is on a separate line
            this.depth++;
            while (iterator.hasNext()) {
                this.appendNewline();
                statement = iterator.getNext();
                statement.accept(this);
            }
            this.depth--;
            this.appendNewline();
        }
    }
    if (procedure.inBrackets) {
        this.source += '}';
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
FormattingVisitor.prototype.visitRange = function(range) {
    if (range.inBrackets) {
        this.source += '[';
    }
    range.firstValue.accept(this);
    this.source += '..';
    range.lastValue.accept(this);
    if (range.inBrackets) {
        this.source += ']';
    }
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
FormattingVisitor.prototype.visitSeal = function(seal) {
    seal.certificateCitation.accept(this);
    this.source += ' ';
    seal.digitalSignature.accept(this);
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


FormattingVisitor.prototype.visitSet = function(set) {
    // delegate to collection
    this.visitCollection(set);
};


FormattingVisitor.prototype.visitStack = function(stack) {
    // delegate to collection
    this.visitCollection(stack);
};


// statement: mainClause handleClause*
FormattingVisitor.prototype.visitStatement = function(tree) {
    tree.children.forEach(function(child) {
        child.accept(this);
    }, this);
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
FormattingVisitor.prototype.visitVariable = function(identifier) {
    this.source += identifier.source;
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
