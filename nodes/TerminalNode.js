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

var types = require('./NodeTypes');


/*
 * This class captures the state and methods associated with a terminal node.
 */


/**
 * This constructor creates a new terminal node.
 * 
 * @param {number} type The type of the terminal node.
 * @param {string} value The string representation of the terminal node.
 * @returns {TerminalNode} The new terminal node.
 */
function TerminalNode(type, value) {
    if (!type || typeof type !== 'number') {
        throw new Error('TREE: The type of the terminal node passed to the constructor must be a number.');
    }
    if (!value || typeof value !== 'string') {
        throw new Error('TREE: The value of the terminal node passed to the constructor must be a string.');
    }
    this.type = type;
    this.isSimple = true;  // default for terminal nodes
    this.value = value;
    return this;
}
TerminalNode.prototype.constructor = TerminalNode;
exports.TerminalNode = TerminalNode;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this terminal node.
 */
TerminalNode.prototype.accept = function(visitor) {
    switch(this.type) {
        case types.ANY:
        case types.BINARY:
        case types.NUMBER:
        case types.PERCENT:
        case types.PROBABILITY:
        case types.REFERENCE:
        case types.SYMBOL:
        case types.TAG:
        case types.TEXT:
        case types.TIME:
        case types.VERSION:
            visitor.visitElement(this);
            break;
        case types.LABEL:
            visitor.visitLabel(this);
            break;
        case types.NAME:
            visitor.visitName(this);
            break;
        case types.VARIABLE:
            visitor.visitVariable(this);
            break;
        default:

    }
};


/**
 * This method returns a string representation of this node.
 * 
 * @returns {string} The string representation of this node.
 */
TerminalNode.prototype.toString = function() {
    return this.value;
};
