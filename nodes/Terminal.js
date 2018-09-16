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

var types = require('./Types');


/*
 * This class captures the state and methods associated with a terminal node.
 */


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
 * @param {String} padding Optional padding spaces to be prepended to
 * each line of the output string.
 * @returns {String} The Bali string representation of this terminal node.
 */
Terminal.prototype.toSource = function(padding) {
    var source = this.value;
    if (padding && (source.startsWith('"\n') || source.startsWith("'\n"))) {
        source = source.replace(/\n/g, '\n' + padding);
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

