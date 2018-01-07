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
 * @returns {Any} The new any element.
 */
function Any(value) {
    if (!value) value = 'none';  // default value
    switch (value) {
        case 'none':
        case 'any':
            break;
        default:
            throw new Error('ANY: An invalid value was passed into the constructor: ' + value);
    }
    if (typeof Any.NONE !== 'undefined' && value === 'none') return Any.NONE;
    if (typeof Any.ANY !== 'undefined' && value === 'any') return Any.ANY;
    this.value = value;
    return this;
}
Any.prototype.constructor = Any;
exports.Any = Any;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {ElementVisitor} visitor The visitor that wants to visit this element.
 */
Any.prototype.accept = function(visitor) {
    visitor.visitAny(this);
};


/**
 * This method returns the string value of the any type.
 * 
 * @returns {string} The string value of the any type.
 */
Any.prototype.toString = function() {
    return this.value;
};


// common constants
Any.NONE = new Any('none');
Any.ANY = new Any('any');
