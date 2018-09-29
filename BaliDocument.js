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
 * This class captures the state and methods associated with a Bali document.
 */
var types = require('./Types');
var parser = require('./transformers/DocumentParser');
var formatter = require('./transformers/DocumentFormatter');


/**
 * This function parses a Bali source string and returns the corresponding
 * document.
 * 
 * @param {String} source The Bali source string.
 * @returns {Document} The resulting document.
 */
function fromSource(source) {
    var document = new Document(parser.parseDocument(source));
    return document;
}
exports.fromSource = fromSource;


/**
 * This function returns whether or not the specified object is a
 * document.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a document.
 */
function isDocument(object) {
    if (!object || object.constructor.name !== 'Document') return false;
    if (!types.isType(object.tree, types.DOCUMENT)) return false;
    if (!types.isType(object.getPreviousReference(), types.REFERENCE)) return false;
    if (!types.isType(object.getDocumentContent(), types.COMPONENT) &&
        !types.isType(object.getDocumentContent(), types.PROCEDURE)) return false;
    if (!object.getNotarySeals() || object.getNotarySeals().constructor.name !== 'Array') return false;
    return true;
}
exports.isDocument = isDocument;


/**
 * This constructor returns a new Bali document.
 * 
 * @param {Tree} tree The parse tree for the document.
 * @returns {Document} The new Bali document.
 */
function Document(tree) {
    this.tree = tree;
    return this;
}
Document.prototype.constructor = Document;
exports.Document = Document;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this document.
 */
Document.prototype.accept = function(visitor) {
    visitor.visitDocument(this.tree);
};


/**
 * This method returns a string representation of this document.
 * 
 * @returns {String} The string representation of this document.
 */
Document.prototype.toString = function() {
    var string = this.tree.toSource();
    return string;
};


/**
 * This method returns a Bali string representation of this document.
 * 
 * @param {String} indentation Optional indentation spaces to be prepended to
 * each line of the output string.
 * @returns {String} The Bali string representation of this document.
 */
Document.prototype.toSource = function(indentation) {
    var string = this.tree.toSource(indentation);
    return string;
};


/**
 * This function returns a (deep) copy of the document.
 * 
 * @returns {Document} A deep copy of the document.
 */
Document.prototype.copy = function() {
    var source = this.toSource();
    var copy = fromSource(source);
    return copy;
};


/**
 * This function returns a draft copy of the document. The previous version reference
 * and seals from the original document have been removed from the draft copy.
 * 
 * @param {String} previousReference A reference to the document.
 * @returns {Document} A draft copy of the document.
 */
Document.prototype.draft = function(previousReference) {
    var source = this.toSource();
    var draft = fromSource(source);
    draft.setPreviousReference(previousReference);
    draft.clearNotarySeals();
    return draft;
};


/**
 * This function returns a copy of the document without its last notary seal.
 * 
 * @returns {Document} A copy of the document without the last seal.
 */
Document.prototype.unsealed = function() {
    var copy = this.copy();
    copy.tree.children.pop();
    return copy;
};


/**
 * This method returns a reference to the previous version of the document if one exists.
 * 
 * @returns {Terminal} The reference to the previous version of the document.
 */
Document.prototype.getPreviousReference = function() {
    if (this.tree.children.length > 1 && this.tree.children[1].type !== types.SEAL) {
        return this.tree.children[0];
    }
};


/**
 * This method sets the reference to the previous version of the document.
 * 
 * @param {String|Terminal} reference The reference to the previous version of the document.
 */
Document.prototype.setPreviousReference = function(reference) {
    if (reference.constructor.name === 'String') {
        reference = new Terminal(types.REFERENCE, reference);
    }
    if (this.tree.children.length > 1 && this.tree.children[1].type !== types.SEAL) {
        this.tree.children[0] = reference;  // replace the existing previous reference
    } else {
        this.tree.children.splice(0, 0, reference);  // insert the reference at the beginning
    }
};


/**
 * This method returns the document content.
 * 
 * @returns {Tree} The component or procedure that makes up the document content.
 */
Document.prototype.getDocumentContent = function() {
    if (this.tree.children.length > 1 && this.tree.children[1].type !== types.SEAL) {
        return this.tree.children[1];
    } else {
        return this.tree.children[0];
    }
};


/**
 * This method sets the document content.
 * 
 * @param {Tree} content The component or procedure that makes up the document content.
 */
Document.prototype.setDocumentContent = function(content) {
    if (this.tree.children.length > 1 && this.tree.children[1].type !== types.SEAL) {
        this.tree.children[1] = content;
    } else {
        this.tree.children[0] = content;
    }
};


/**
 * This method returns the notary seal on the document at the specified index.
 * 
 * @param {Number} index The zero based index of the desired notary seal.
 * @returns {Tree} The requested notary seal.
 */
Document.prototype.getNotarySeal = function(index) {
    var first = this.tree.children.findIndex(function(child) {
        return child.type === types.SEAL;
    });
    return this.tree.children[first + index];  // JS zero based indexing
};


/**
 * This method returns the last notary seal on the document.
 * 
 * @returns {Tree} The last notary seal.
 */
Document.prototype.getLastSeal = function() {
    var size = this.tree.children.length;
    var seal = this.tree.children[size - 1];
    if (seal.type === types.SEAL) return seal;
};


/**
 * This method appends a notary seal to the end of the document.
 * 
 * @param {String|Terminal} certificateReference A reference to the certificate that can be used
 * to validate the digital signature.
 * @param {String|Terminal} digitalSignature The Base 32 encoded binary data for the digital
 * signature of the notary seal.
 */
Document.prototype.addNotarySeal = function(certificateReference, digitalSignature) {
    if (certificateReference.constructor.name === 'String') {
        certificateReference = new Terminal(types.REFERENCE, certificateReference);
    }
    if (digitalSignature.constructor.name === 'String') {
        digitalSignature = new Terminal(types.BINARY, digitalSignature);
    }
    var seal = new Tree(types.SEAL);
    seal.addChild(certificateReference);
    seal.addChild(digitalSignature);
    this.tree.children.push(seal);
};


/**
 * This method returns an array containing the notary seals for the document.
 * 
 * @returns {Array} An array containing the notary seals for the document.
 */
Document.prototype.getNotarySeals = function() {
    var seals = [];
    this.tree.children.forEach(function(child) {
        if (child.type === types.SEAL) {
            seals.push(child);
        }
    });
    return seals;
};


/**
 * This method removes all notary seals from the document.
 */
Document.prototype.clearNotarySeals = function() {
    var index = this.tree.children.findIndex(function(child) {
        return child.type === types.SEAL;
    });
    this.tree.children.splice(index);  // remove the chilfren that are seals
};


/**
 * This function retrieves from a document the string value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The string value associated with the key.
 */
Document.prototype.getString = function(key) {
    return this.getDocumentContent().getString(key);
};


/**
 * This function retrieves from a document the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
Document.prototype.getValue = function(key) {
    return this.getDocumentContent().getValue(key);
};


/**
 * This function sets in a document a value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @param {Component} value The value to be associated with the key.
 * @returns {Component} The old value associated with the key.
 */
Document.prototype.setValue = function(key, value) {
    return this.getDocumentContent().setValue(key, value);
};


/**
 * This function removes from a document the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
Document.prototype.deleteKey = function(key) {
    return this.getDocumentContent().deleteKey(key);
};


/**
 * This constructor creates a new terminal node.
 * 
 * @param {number} type The type of the terminal node.
 * @param {String} value The string representation of the terminal node.
 * @returns {Terminal} The new terminal node.
 */
function Terminal(type, value) {
    this.type = type;
    this.size = value.length;
    this.value = value;
    return this;
}
Terminal.prototype.constructor = Terminal;
exports.Terminal = Terminal;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this terminal node.
 */
Terminal.prototype.accept = function(visitor) {
    switch(this.type) {
        case types.ANGLE:
        case types.BINARY:
        case types.DURATION:
        case types.MOMENT:
        case types.NUMBER:
        case types.PERCENT:
        case types.PROBABILITY:
        case types.REFERENCE:
        case types.SYMBOL:
        case types.TAG:
        case types.TEMPLATE:
        case types.TEXT:
        case types.VERSION:
            visitor.visitElement(this);
            break;
        case types.FUNCTION:
            visitor.visitFunction(this);
            break;
        case types.MESSAGE:
            visitor.visitMessage(this);
            break;
        case types.VARIABLE:
            visitor.visitVariable(this);
            break;
        default:
            throw new Error('SYNTAX: An invalid terminal node type was found: ' + types.NODE_TYPES[this.type]);
    }
};


/**
 * This method returns a Bali string representation of this terminal node.
 * 
 * @param {String} indentation Optional indentation spaces to be prepended to
 * each line of the output string.
 * @returns {String} The Bali string representation of this terminal node.
 */
Terminal.prototype.toSource = function(indentation) {
    var source = this.value;
    if (indentation && (source.startsWith('"\n') || source.startsWith("'\n"))) {
        source = source.replace(/\n/g, '\n' + indentation);
    }
    return source;
};


/**
 * This method returns a string representation of this terminal node.
 * 
 * @returns {String} The string representation of this terminal node.
 */
Terminal.prototype.toString = function() {
    return this.value;
};


/**
 * This constructor creates a new tree node.
 * 
 * @param {Number} type The type of the tree node.
 * @param {Number} size The initial size of the tree node.
 * @returns {Tree} The new tree node.
 */
function Tree(type, size) {
    this.type = type;
    this.size = size;
    this.children = [];
    return this;
}
Tree.prototype.constructor = Tree;
exports.Tree = Tree;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this tree node.
 */
Tree.prototype.accept = function(visitor) {
    switch(this.type) {
        case types.ARITHMETIC_EXPRESSION:
            visitor.visitArithmeticExpression(this);
            break;
        case types.ASSOCIATION:
            visitor.visitAssociation(this);
            break;
        case types.BLOCK:
            visitor.visitBlock(this);
            break;
        case types.BREAK_CLAUSE:
            visitor.visitBreakClause(this);
            break;
        case types.CATALOG:
            visitor.visitCatalog(this);
            break;
        case types.CHECKOUT_CLAUSE:
            visitor.visitCheckoutClause(this);
            break;
        case types.CODE:
            visitor.visitCode(this);
            break;
        case types.COMMIT_CLAUSE:
            visitor.visitCommitClause(this);
            break;
        case types.COMPARISON_EXPRESSION:
            visitor.visitComparisonExpression(this);
            break;
        case types.COMPLEMENT_EXPRESSION:
            visitor.visitComplementExpression(this);
            break;
        case types.COMPONENT:
            visitor.visitComponent(this);
            break;
        case types.CONTINUE_CLAUSE:
            visitor.visitContinueClause(this);
            break;
        case types.DEFAULT_EXPRESSION:
            visitor.visitDefaultExpression(this);
            break;
        case types.DEREFERENCE_EXPRESSION:
            visitor.visitDereferenceExpression(this);
            break;
        case types.DISCARD_CLAUSE:
            visitor.visitDiscardClause(this);
            break;
        case types.DOCUMENT:
            visitor.visitDocument(this);
            break;
        case types.EVALUATE_CLAUSE:
            visitor.visitEvaluateClause(this);
            break;
        case types.EXPONENTIAL_EXPRESSION:
            visitor.visitExponentialExpression(this);
            break;
        case types.FACTORIAL_EXPRESSION:
            visitor.visitFactorialExpression(this);
            break;
        case types.FUNCTION_EXPRESSION:
            visitor.visitFunctionExpression(this);
            break;
        case types.HANDLE_CLAUSE:
            visitor.visitHandleClause(this);
            break;
        case types.IF_CLAUSE:
            visitor.visitIfClause(this);
            break;
        case types.INDICES:
            visitor.visitIndices(this);
            break;
        case types.INVERSION_EXPRESSION:
            visitor.visitInversionExpression(this);
            break;
        case types.LIST:
            visitor.visitList(this);
            break;
        case types.LOGICAL_EXPRESSION:
            visitor.visitLogicalExpression(this);
            break;
        case types.MAGNITUDE_EXPRESSION:
            visitor.visitMagnitudeExpression(this);
            break;
        case types.MESSAGE_EXPRESSION:
            visitor.visitMessageExpression(this);
            break;
        case types.PARAMETERS:
            visitor.visitParameters(this);
            break;
        case types.PRECEDENCE_EXPRESSION:
            visitor.visitPrecedenceExpression(this);
            break;
        case types.PROCEDURE:
            visitor.visitProcedure(this);
            break;
        case types.PUBLISH_CLAUSE:
            visitor.visitPublishClause(this);
            break;
        case types.QUEUE_CLAUSE:
            visitor.visitQueueClause(this);
            break;
        case types.RANGE:
            visitor.visitRange(this);
            break;
        case types.RETURN_CLAUSE:
            visitor.visitReturnClause(this);
            break;
        case types.SAVE_CLAUSE:
            visitor.visitSaveClause(this);
            break;
        case types.SEAL:
            visitor.visitSeal(this);
            break;
        case types.SELECT_CLAUSE:
            visitor.visitSelectClause(this);
            break;
        case types.STATEMENT:
            visitor.visitStatement(this);
            break;
        case types.STRUCTURE:
            visitor.visitStructure(this);
            break;
        case types.SUBCOMPONENT:
            visitor.visitSubcomponent(this);
            break;
        case types.SUBCOMPONENT_EXPRESSION:
            visitor.visitSubcomponentExpression(this);
            break;
        case types.THROW_CLAUSE:
            visitor.visitThrowClause(this);
            break;
        case types.WAIT_CLAUSE:
            visitor.visitWaitClause(this);
            break;
        case types.WHILE_CLAUSE:
            visitor.visitWhileClause(this);
            break;
        case types.WITH_CLAUSE:
            visitor.visitWithClause(this);
            break;
        default:
            throw new Error('SYNTAX: An invalid tree node type was found: ' + types.NODE_TYPES[this.type]);
    }
};


/**
 * This method adds a child node to this tree node.
 * 
 * @param {Tree|Terminal} node The node to be added as the next child of this tree node.
 */
Tree.prototype.addChild = function(node) {
    this.children.push(node);
    this.size += node.size;
};


/**
 * This method returns a Bali string representation of this tree node.
 * 
 * @param {String} indentation Optional indentation spaces to be prepended to
 * each line of the output string.
 * @returns {String} The Bali string representation of this tree node.
 */
Tree.prototype.toSource = function(indentation) {
    indentation = indentation ? indentation : '';
    var string = formatter.formatTree(this, indentation);
    return string;
};


/**
 * This method returns a string representation of this tree node.
 * 
 * @returns {String} The string representation of this tree node.
 */
Tree.prototype.toString = function() {
    var string = this.toSource();
    return string;
};


// ELEMENTS

/**
 * This function drills down a tree node to find it's terminal node and returns that element.
 * 
 * @returns {Terminal} The terminal node containing the element value.
 */
Tree.prototype.element = function() {
    var node = this;
    while (node.constructor.name === 'Tree') {
        node = node.children[0];
    }
    return node;
};


// LISTS

/**
 * This function constructs an iterator for the specified list or catalog. If a catalog
 * is specified, the iterator returns the associations in the catalog.
 * 
 * @returns {ListIterator} The new iterator.
 */
Tree.prototype.iterator = function() {
    var iterator;
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            iterator = new ListIterator(collection);
        }
    }
    return iterator;
};


/**
 * This function retrieves from a list the item associated with the
 * specified index.
 * 
 * @param {Number} index The ordinal based index of the desired item.
 * @returns {Component} The item associated with the index.
 */
Tree.prototype.getItem = function(index) {
    var item;
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            if (collection.type === types.LIST) {
                item = collection.children[index];
            }
        }
    }
    return item;
};


/**
 * This function sets in a list the item associated with the specified index.
 * 
 * @param {Number} index The ordinal based index of the item.
 * @param {Component} item The item to be associated with the index.
 * @returns {Component} The old item associated with the index.
 */
Tree.prototype.setItem = function(index, item) {
    var old;
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            if (collection.type === types.LIST) {
                old = collection.children[index];
                collection.size -= old.size;
                collection.children[index] = item;
                collection.size += item.size;
            }
        }
    }
    return old;
};


/**
 * This function adds a new item to a list.
 * 
 * @param {Component} item The item to be added to the list.
 */
Tree.prototype.addItem = function(item) {
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            if (collection.type === types.LIST) {
                collection.addChild(item);
            }
        }
    }
};


/**
 * This function removes an existing item from a list.
 * 
 * @param {Number} index The index of the item to be removed from the list.
 * @returns {Component} The old item associated with the index.
 */
Tree.prototype.removeItem = function(index) {
    var old;
    if (this.type === types.COMPONENT) {
        var state = this.children[0];
        if (state.type === types.STRUCTURE) {
            var collection = state.children[0];
            if (collection.type === types.LIST) {
                old = collection.children[index];
                collection.children.splice(index, 1);
                collection.size -= old.size;
            }
        }
    }
    return old;
};


// CATALOGS

/**
 * This function retrieves from a tree node the string value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The string value associated with the key.
 */
Tree.prototype.getString = function(key) {
    var result = scanTree(this, key);
    if (result) {
        return result.toSource();
    } else {
        return undefined;
    }
};


/**
 * This function retrieves from a tree node the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
Tree.prototype.getValue = function(key) {
    var result = scanTree(this, key);
    return result;
};


/**
 * This function sets in a tree node a value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @param {String|Component} value The value to be associated with the key.
 * @returns {Component} The old value associated with the key.
 */
Tree.prototype.setValue = function(key, value) {
    value = parser.parseExpression(value.toString());
    var result = scanTree(this, key, value);
    var previousValue = result;
    if (!previousValue) {
        // insert as a new association in the top level catalog
        if (this.type === types.COMPONENT &&
                this.children[0].type === types.STRUCTURE &&
                this.children[0].children[0].type === types.CATALOG) {
            var catalog = this.children[0].children[0];
            var association = new Tree(types.ASSOCIATION, 2);
            key = parser.parseComponent(key.toString());
            association.addChild(key);
            association.addChild(value);
            catalog.addChild(association);
            this.children[0].size += association.size;
            this.size += association.size;
        }
    }
    return previousValue;
};


/**
 * This function removes from a tree node the value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The value associated with the key.
 */
Tree.prototype.deleteKey = function(key) {
    var result = scanTree(this, key, null, true);
    return result;
};


// PRIVATE CLASSES

function ListIterator(list) {
    this.expressions = list.children;
    this.index = 0;
    return this;
}
ListIterator.prototype.constructor = ListIterator;


ListIterator.prototype.hasNext = function() {
    return this.index < this.expressions.length;
};


ListIterator.prototype.getNext = function() {
    if (this.index < this.expressions.length) {
        return this.expressions[this.index++];
    } else {
        return undefined;
    }
};


function scanTree(tree, key, value, remove) {
    var visitor = new ScanningVisitor(key, value, remove);
    tree.accept(visitor);
    return visitor.result;
}


function ScanningVisitor(key, value, remove) {
    this.key = key;
    this.value = value;
    this.remove = remove;
    return this;
}
ScanningVisitor.prototype.constructor = ScanningVisitor;


// association: component ':' expression
ScanningVisitor.prototype.visitAssociation = function(association) {
    var component = association.children[0];
    var expression = association.children[1];
    var state = component.children[0];
    if (state.type !== types.STRUCTURE && state.type !== types.CODE && state.toSource() === this.key) {
        this.result = expression;
        if (this.value) {
            association.size -= state.size;
            association.children[1] = this.value;
            association.size += this.value.size;
        }
    } else if (expression.type === types.COMPONENT) {
        expression.accept(this);
    }
};


// catalog:
//     association (',' association)* |
//     NEWLINE (association NEWLINE)* |
//     ':' /*empty catalog*/
ScanningVisitor.prototype.visitCatalog = function(catalog) {
    var associations = catalog.children;
    var index = associations.findIndex(function(association) {
        association.accept(this);
        return this.result;
    }, this);
    if (index > -1) {
        if (this.remove) {
            catalog.size -= associations[index].size;
            associations.splice(index, 1);
        }
    }
};


// code: '{' procedure '}'
ScanningVisitor.prototype.visitCode = function(code) {
    // ignore
};


// component: state parameters?
ScanningVisitor.prototype.visitComponent = function(component) {
    var state = component.children[0];
    if (state.type === types.STRUCTURE) {
        state.accept(this);
    }
};


// document: NEWLINE* (reference NEWLINE)? content (NEWLINE seal)* NEWLINE* EOF
ScanningVisitor.prototype.visitDocument = function(document) {
    document.children.forEach(function(child) {
        child.accept(this);
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
ScanningVisitor.prototype.visitElement = function(element) {
    // ignore
};


// list:
//     expression (',' expression)* |
//     NEWLINE (expression NEWLINE)* |
//     /*empty list*/
ScanningVisitor.prototype.visitList = function(list) {
    var expressions = list.children;
    expressions.find(function(expression) {
        if (expression.type === types.COMPONENT) {
            expression.accept(this);
        }
        return this.result;
    }, this);
};


// procedure:
//     statement (';' statement)* |
//     NEWLINE (statement NEWLINE)* |
//     /*empty procedure*/
ScanningVisitor.prototype.visitProcedure = function(procedure) {
    // ignore
};


// seal: reference binary
ScanningVisitor.prototype.visitSeal = function(seal) {
    // ignore
};


// structure: '[' collection ']'
ScanningVisitor.prototype.visitStructure = function(structure) {
    var collection = structure.children[0];
    if (collection.type !== types.RANGE) {
        collection.accept(this);
    }
};
