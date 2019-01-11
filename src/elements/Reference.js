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
 * This element class captures the state and methods associated with a
 * reference element.
 */
const URL = require('url').URL;
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new reference element.
 * 
 * @param {String} value The value of the reference.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reference} The new reference element.
 */
function Reference(value, parameters) {
    abstractions.Element.call(this, utilities.types.REFERENCE, parameters);
    if (!value) throw new Error('BUG: An invalid reference value was passed to the constructor: ' + value);
    this.value = new URL(value);
    this.setSource(this.toLiteral());
    this.setToComplex();  // references should never be inlined
    return this;
}
Reference.prototype = Object.create(abstractions.Element.prototype);
Reference.prototype.constructor = Reference;
exports.Reference = Reference;


/**
 * This constructor creates an immutable instance of a reference using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the reference.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reference} The new reference.
 */
Reference.fromLiteral = function(literal, parameters) {
    const value = literal.slice(1, -1);  // remove the '<' and '>' delimiters
    const reference = new Reference(value, parameters);
    return reference;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Boolean} asCanonical Whether or not the element should be formatted using its
 * default format.
 * @returns {String} The corresponding literal string representation.
 */
Reference.prototype.toLiteral = function(asCanonical) {
    const value = this.value.toString();
    const literal = '<' + value + '>';  // add the '<' and '>' delimiters
    return literal;
};

