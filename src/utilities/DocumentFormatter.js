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
 * This library provides functions that format a parse tree structure produced
 * by the <code>DocumentParser</code> class and generates a canonical version of
 * the corresponding Bali source code string.
 */
var types = require('../abstractions/Types');


// PUBLIC FUNCTIONS

/**
 * This function generates the canonical Bali source code for the specified parse tree
 * component. If an optional indentation string is specified, then each line of the
 * generated source code will be indented using that string.
 * 
 * @param {Component} component The Bali parse tree representing a component.
 * @param {String} indentation A blank string that will be prepended to each indented line in
 * the source code.
 * @returns {String} The Bali source code for the parse tree component.
 */
exports.formatComponent = function(component, indentation) {
    var visitor = new FormattingVisitor(indentation);
    component.acceptVisitor(visitor);
    return visitor.source;
};


// PRIVATE CLASSES

/* NOTE: This visitor cannot inherit from the Visitor class or it would introduce a circular
 * dependency since the Visitor class inherits from the Component class which uses the
 * FormattingVisitor class.
 */

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
        indentation += '    ';
    }
    return indentation;
};


// arithmeticExpression: expression ('*' | '/' | '//' | '+' | '-') expression
FormattingVisitor.prototype.visitArithmeticExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.source += ' ';
    this.source += tree.operator;
    this.source += ' ';
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
};


// association: component ':' expression
FormattingVisitor.prototype.visitAssociation = function(association) {
    association.key.acceptVisitor(this);
    this.source += ': ';
    association.value.acceptVisitor(this);
};


// block: '{' procedure '}'
FormattingVisitor.prototype.visitBlock = function(block) {
    this.source += '{';
    block.procedure.acceptVisitor(this);
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
FormattingVisitor.prototype.visitCatalog = function(catalog) {
    this.source += '[';
    // delegate to collection
    this.visitCollection(catalog);
    this.source += ']';
    if (catalog.isParameterized()) {
        catalog.parameters.acceptVisitor(this);
    }
};


// checkoutClause: 'checkout' recipient 'from' expression
FormattingVisitor.prototype.visitCheckoutClause = function(tree) {
    this.source += 'checkout ';
    var document = tree.getItem(1);
    document.acceptVisitor(this);
    this.source += ' from ';
    var reference = tree.getItem(2);
    reference.acceptVisitor(this);
};


// collection: range | list | catalog
FormattingVisitor.prototype.visitCollection = function(collection) {
    if (!collection.isEmpty()) {
        var iterator = collection.iterator();
        var item;
        // don't include the length of the parameters in the length of the combined items
        var complexity = collection.complexity;
        if (collection.parameters) complexity -= collection.parameters.complexity;
        if (types.isSimple(complexity)) {
            // inline the items
            item = iterator.getNext();
            item.acceptVisitor(this);
            while (iterator.hasNext()) {
                this.source += ', ';
                item = iterator.getNext();
                item.acceptVisitor(this);
            };
        } else {
            // each item is on a separate line
            this.depth++;
            while (iterator.hasNext()) {
                this.appendNewline();
                item = iterator.getNext();
                item.acceptVisitor(this);
            };
            this.depth--;
            this.appendNewline();
        }
    } else if (collection.type === types.CATALOG) {
        this.source += ':';  // empty catalog
    }
};


// commitClause: 'commit' expression 'to' expression
FormattingVisitor.prototype.visitCommitClause = function(tree) {
    this.source += 'commit ';
    var document = tree.getItem(1);
    document.acceptVisitor(this);
    this.source += ' to ';
    var reference = tree.getItem(2);
    reference.acceptVisitor(this);
};


// comparisonExpression: expression ('<' | '=' | '>' | 'is' | 'matches') expression
FormattingVisitor.prototype.visitComparisonExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.source += ' ';
    this.source += tree.operator;
    this.source += ' ';
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
};


// complementExpression: 'not' expression
FormattingVisitor.prototype.visitComplementExpression = function(tree) {
    this.source += 'not ';
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
};


// continueClause: 'continue' 'loop'
FormattingVisitor.prototype.visitContinueClause = function(tree) {
    this.source += 'continue loop';
};


// defaultExpression: expression '?' expression
FormattingVisitor.prototype.visitDefaultExpression = function(tree) {
    var value = tree.getItem(1);
    value.acceptVisitor(this);
    this.source += ' ? ';
    var defaultValue = tree.getItem(2);
    defaultValue.acceptVisitor(this);
};


// dereferenceExpression: '@' expression
FormattingVisitor.prototype.visitDereferenceExpression = function(tree) {
    this.source += '@';
    var reference = tree.getItem(1);
    reference.acceptVisitor(this);
};


// discardClause: 'discard' expression
FormattingVisitor.prototype.visitDiscardClause = function(tree) {
    this.source += 'discard ';
    var draft = tree.getItem(1);
    draft.acceptVisitor(this);
};


// document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF
FormattingVisitor.prototype.visitDocument = function(document) {
    if (document.previousReference) {
        document.previousReference.acceptVisitor(this);
        this.source += '\n';
    }
    document.documentContent.acceptVisitor(this);
    this.source += '\n';
    document.notarySeals.forEach(function(seal) {
        seal.acceptVisitor(this);
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
        element.parameters.acceptVisitor(this);
    }
};


// evaluateClause: (recipient ':=')? expression
FormattingVisitor.prototype.visitEvaluateClause = function(tree) {
    var size = tree.getSize();
    if (size > 1) {
        var recipient = tree.getItem(1);
        recipient.acceptVisitor(this);
        this.source += ' := ';
    }
    var expression = tree.getItem(size);
    expression.acceptVisitor(this);
};


// exponentialExpression: <assoc=right> expression '^' expression
FormattingVisitor.prototype.visitExponentialExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.source += ' ^ ';
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
};


// factorialExpression: expression '!'
FormattingVisitor.prototype.visitFactorialExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.source += '!';
};


// function: IDENTIFIER
FormattingVisitor.prototype.visitFunction = function(identifier) {
    this.source += identifier.source;
};


// functionExpression: function parameters
FormattingVisitor.prototype.visitFunctionExpression = function(tree) {
    var functionName = tree.getItem(1);
    functionName.acceptVisitor(this);
    var parameters = tree.getItem(2);
    parameters.acceptVisitor(this);
};


// handleClause: 'handle' symbol 'matching' expression 'with' block
FormattingVisitor.prototype.visitHandleClause = function(tree) {
    this.source += ' handle ';
    var exception = tree.getItem(1);
    exception.acceptVisitor(this);
    this.source += ' matching ';
    var template = tree.getItem(2);
    template.acceptVisitor(this);
    this.source += ' with ';
    var block = tree.getItem(3);
    block.acceptVisitor(this);
};


// ifClause: 'if' expression 'then' block ('else' 'if' expression 'then' block)* ('else' block)?
FormattingVisitor.prototype.visitIfClause = function(tree) {
    // handle first condition
    this.source += 'if ';
    var condition = tree.getItem(1);
    condition.acceptVisitor(this);
    this.source += ' then ';
    var block = tree.getItem(2);
    block.acceptVisitor(this);

    // handle optional additional conditions
    var size = tree.getSize();
    for (var i = 3; i <= size; i += 2) {
        if (i === size) {
            this.source += ' else ';
            block = tree.getItem(i);
            block.acceptVisitor(this);
        } else {
            this.source += ' else if ';
            condition = tree.getItem(i);
            condition.acceptVisitor(this);
            this.source += ' then ';
            block = tree.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// inversionExpression: ('-' | '/' | '*') expression
FormattingVisitor.prototype.visitInversionExpression = function(tree) {
    this.source += tree.operator;
    var operand = tree.getItem(1);
    // should insert a space before a negative number or another inversion
    var left = operand;
    while (true) {
        if (left.type === types.INVERSION_EXPRESSION || left.type === types.NUMBER && left.source.startsWith('-')) {
            this.source += ' ';
        }
        if (!left.array) break;
        left = left.getItem(1);
    }
    operand.acceptVisitor(this);
};


// indices: '[' list ']'
FormattingVisitor.prototype.visitIndices = function(tree) {
    var list = tree.getItem(1);
    list.acceptVisitor(this);
};


FormattingVisitor.prototype.visitIterator = function(iterator) {
    this.source += '[';
    this.depth++;
    this.appendNewline();
    this.source += '$slot: ' + iterator.slot;
    this.appendNewline();
    this.source += '$array: [';
    this.depth++;
    iterator.array.forEach(function(item) {
        this.appendNewline();
        item.acceptVisitor(this);
    }, this);
    this.depth--;
    this.appendNewline();
    this.source += ']';
    this.depth--;
    this.appendNewline();
    this.source += ']';
    this.source += '($type: $Iterator)';
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
FormattingVisitor.prototype.visitList = function(list) {
    this.source += '[';
    // delegate to collection
    this.visitCollection(list);
    this.source += ']';
    if (list.isParameterized()) {
        list.parameters.acceptVisitor(this);
    }
};


// logicalExpression: expression ('and' | 'sans' | 'xor' | 'or') expression
FormattingVisitor.prototype.visitLogicalExpression = function(tree) {
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.source += ' ';
    this.source += tree.operator;
    this.source += ' ';
    operand = tree.getItem(2);
    operand.acceptVisitor(this);
};


// magnitudeExpression: '|' expression '|'
FormattingVisitor.prototype.visitMagnitudeExpression = function(tree) {
    this.source += '|';
    var operand = tree.getItem(1);
    operand.acceptVisitor(this);
    this.source += '|';
};


// message: IDENTIFIER
FormattingVisitor.prototype.visitMessage = function(identifier) {
    this.source += identifier.source;
};


// messageExpression: expression '.' message parameters
FormattingVisitor.prototype.visitMessageExpression = function(tree) {
    var target = tree.getItem(1);
    target.acceptVisitor(this);
    this.source += '.';
    var messageName = tree.getItem(2);
    messageName.acceptVisitor(this);
    var parameters = tree.getItem(3);
    parameters.acceptVisitor(this);
};


// parameters: '(' collection ')'
FormattingVisitor.prototype.visitParameters = function(parameters) {
    this.source += '(';
    if (!parameters.isEmpty()) {
        var iterator = parameters.iterator();
        var parameter;
        if (parameters.isSimple()) {
            // inline the parameters
            parameter = iterator.getNext();
            if (parameters.isList) parameter = parameter.value;
            parameter.acceptVisitor(this);
            while (iterator.hasNext()) {
                this.source += ', ';
                parameter = iterator.getNext();
                if (parameters.isList) parameter = parameter.value;
                parameter.acceptVisitor(this);
            };
        } else {
            // each parameter is on a separate line
            this.depth++;
            while (iterator.hasNext()) {
                this.appendNewline();
                parameter = iterator.getNext();
                if (parameters.isList) parameter = parameter.value;
                parameter.acceptVisitor(this);
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
    var expression = tree.getItem(1);
    expression.acceptVisitor(this);
    this.source += ')';
};


// procedure:
//     statement (';' statement)* |
//     NEWLINE (statement NEWLINE)* |
//     /*empty procedure*/
FormattingVisitor.prototype.visitProcedure = function(procedure) {
    if (!procedure.isEmpty()) {
        var iterator = procedure.iterator();
        var statement;
        if (procedure.isSimple()) {
            // inline the statements
            statement = iterator.getNext();
            statement.acceptVisitor(this);
            while (iterator.hasNext()) {
                this.source += '; ';
                statement = iterator.getNext();
                statement.acceptVisitor(this);
            }
        } else {
            // each statement is on a separate line
            this.depth++;
            while (iterator.hasNext()) {
                this.appendNewline();
                statement = iterator.getNext();
                statement.acceptVisitor(this);
            }
            this.depth--;
            this.appendNewline();
        }
    } else if (!procedure.isSimple()) {
        this.appendNewline();
    }
};


// publishClause: 'publish' expression
FormattingVisitor.prototype.visitPublishClause = function(tree) {
    this.source += 'publish ';
    var event = tree.getItem(1);
    event.acceptVisitor(this);
};


// queueClause: 'queue' expression 'on' expression
FormattingVisitor.prototype.visitQueueClause = function(tree) {
    this.source += 'queue ';
    var message = tree.getItem(1);
    message.acceptVisitor(this);
    this.source += ' on ';
    var queue = tree.getItem(2);
    queue.acceptVisitor(this);
};


// range: expression '..' expression
FormattingVisitor.prototype.visitRange = function(range) {
    this.source += '[';
    range.firstItem.acceptVisitor(this);
    this.source += '..';
    range.lastItem.acceptVisitor(this);
    this.source += ']';
    if (range.isParameterized()) {
        range.parameters.acceptVisitor(this);
    }
};


// returnClause: 'return' expression?
FormattingVisitor.prototype.visitReturnClause = function(tree) {
    this.source += 'return';
    if (!tree.isEmpty()) {
        this.source += ' ';
        var result = tree.getItem(1);
        result.acceptVisitor(this);
    }
};


// saveClause: 'save' expression 'to' expression
FormattingVisitor.prototype.visitSaveClause = function(tree) {
    this.source += 'save ';
    var draft = tree.getItem(1);
    draft.acceptVisitor(this);
    this.source += ' to ';
    var reference = tree.getItem(2);
    reference.acceptVisitor(this);
};


// seal: reference binary
FormattingVisitor.prototype.visitSeal = function(seal) {
    seal.certificateReference.acceptVisitor(this);
    this.source += ' ';
    seal.digitalSignature.acceptVisitor(this);
};


// selectClause: 'select' expression 'from' (expression 'do' block)+ ('else' block)?
FormattingVisitor.prototype.visitSelectClause = function(tree) {
    // handle the selection
    this.source += 'select ';
    var value = tree.getItem(1);
    value.acceptVisitor(this);
    this.source += ' from';

    // handle option blocks
    var block;
    var size = tree.getSize();
    for (var i = 2; i <= size; i += 2) {
        if (i === size) {
            this.source += ' else ';
            block = tree.getItem(i);
            block.acceptVisitor(this);
        } else {
            this.source += ' ';
            var option = tree.getItem(i);
            option.acceptVisitor(this);
            this.source += ' do ';
            block = tree.getItem(i + 1);
            block.acceptVisitor(this);
        }
    }
};


// set:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
FormattingVisitor.prototype.visitSet = function(set) {
    this.source += '[';
    // delegate to collection
    this.visitCollection(set);
    this.source += ']';
    if (set.isParameterized()) {
        set.parameters.acceptVisitor(this);
    }
};


// source: '{' procedure '}'
FormattingVisitor.prototype.visitSource = function(source) {
    this.source += '{';
    source.procedure.acceptVisitor(this);
    this.source += '}';
};


// stack:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
FormattingVisitor.prototype.visitStack = function(stack) {
    this.source += '[';
    // delegate to collection
    this.visitCollection(stack);
    this.source += ']';
    if (stack.isParameterized()) {
        stack.parameters.acceptVisitor(this);
    }
};


// statement: mainClause handleClause*
FormattingVisitor.prototype.visitStatement = function(tree) {
    var iterator = tree.iterator();
    while (iterator.hasNext()) {
        var child = iterator.getNext();
        child.acceptVisitor(this);
    }
};


// subcomponent: variable indices
FormattingVisitor.prototype.visitSubcomponent = function(tree) {
    var variable = tree.getItem(1);
    variable.acceptVisitor(this);
    var indices = tree.getItem(2);
    indices.acceptVisitor(this);
};


// subcomponentExpression: expression indices
FormattingVisitor.prototype.visitSubcomponentExpression = function(tree) {
    var component = tree.getItem(1);
    component.acceptVisitor(this);
    var indices = tree.getItem(2);
    indices.acceptVisitor(this);
};


// throwClause: 'throw' expression
FormattingVisitor.prototype.visitThrowClause = function(tree) {
    this.source += 'throw ';
    var exception = tree.getItem(1);
    exception.acceptVisitor(this);
};


// variable: IDENTIFIER
FormattingVisitor.prototype.visitVariable = function(identifier) {
    this.source += identifier.source;
};


// waitClause: 'wait' 'for' recipient 'from' expression
FormattingVisitor.prototype.visitWaitClause = function(tree) {
    this.source += 'wait for ';
    var message = tree.getItem(1);
    message.acceptVisitor(this);
    this.source += ' from ';
    var queue = tree.getItem(2);
    queue.acceptVisitor(this);
};


// whileClause: 'while' expression 'do' block
FormattingVisitor.prototype.visitWhileClause = function(tree) {
    this.source += 'while ';
    var condition = tree.getItem(1);
    condition.acceptVisitor(this);
    this.source += ' do ';
    var block = tree.getItem(2);
    block.acceptVisitor(this);
};


// withClause: 'with' ('each' symbol 'in')? expression 'do' block
FormattingVisitor.prototype.visitWithClause = function(tree) {
    var size = tree.getSize();
    this.source += 'with ';
    if (size > 2) {
        this.source += 'each ';
        var item = tree.getItem(1);
        item.acceptVisitor(this);
        this.source += ' in ';
    }
    var collection = tree.getItem(size - 1);
    collection.acceptVisitor(this);
    this.source += ' do ';
    var block = tree.getItem(size);
    block.acceptVisitor(this);
};
