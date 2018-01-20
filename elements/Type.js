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
 * any element.
 */


/**
 * This constructor creates a new any element.
 * 
 * @constructor
 * @param {string} value The value of the any element.
 * @returns {Type} The new any element.
 */
function Type(value) {
    if (!value) value = 'none';  // default value
    switch (value) {
        case 'none':
        case 'any':
            break;
        default:
            throw new Error('TYPE: An invalid value was passed into the constructor: ' + value);
    }
    if (typeof Type.NONE !== 'undefined' && value === 'none') return Type.NONE;
    if (typeof Type.ANY !== 'undefined' && value === 'any') return Type.ANY;
    this.value = value;
    return this;
}
Type.prototype.constructor = Type;
exports.Type = Type;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {ObjectVisitor} visitor The visitor that wants to visit this element.
 */
Type.prototype.accept = function(visitor) {
    visitor.visitType(this);
};


/**
 * This method returns the string value of the any type.
 * 
 * @returns {string} The string value of the any type.
 */
Type.prototype.toString = function() {
    return this.value;
};


// common constants
Type.NONE = new Type('none');
Type.ANY = new Type('any');
