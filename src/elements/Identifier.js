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
 * This element class captures the state and methods associated with an
 * identifier element.
 */
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates a new identifier node.
 * 
 * @param {number} type The type of the identifier.
 * @param {String} value The string representation of the identifier.
 * @returns {Identifier} The new identifier.
 */
function Identifier(type, value) {
    Element.call(this, type);
    if (!value) {
        throw new Error('IDENTIFIER: An identifier cannot be null.');
    }
    if (!/^[a-zA-Z][0-9a-zA-Z]*$/g.test(value)) {
        throw new Error("IDENTIFIER: An identifier must begin with a character and only consist of alpha-numeric characters: " + this.value);
    }
    this.setSource(value);
    return this;
}
Identifier.prototype = Object.create(Element.prototype);
Identifier.prototype.constructor = Identifier;
exports.Identifier = Identifier;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this identifier node.
 */
Identifier.prototype.acceptVisitor = function(visitor) {
    switch(this.type) {
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
            throw new Error('SYNTAX: An invalid identifier node type was found: ' + types.typeName(type));
    }
};
