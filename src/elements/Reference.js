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


// PUBLIC CONSTRUCTOR

/**
 * This constructor creates a new reference element using the specified value.
 * 
 * @param {String|URL} value The value of the reference.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reference} The new reference element.
 */
function Reference(value, parameters) {
    abstractions.Element.call(this, utilities.types.REFERENCE, parameters);
    if (!value) throw new Error('BUG: An invalid reference value was passed to the constructor: ' + value);
    if (typeof value === 'string') value = new URL(value);
    this.value = value;
    this.setSource(this.toLiteral(parameters));
    this.setToComplex();  // references should never be inlined
    return this;
}
Reference.prototype = Object.create(abstractions.Element.prototype);
Reference.prototype.constructor = Reference;
exports.Reference = Reference;


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Parameters} parameters Any parameters that are needed for formatting.
 * @returns {String} The corresponding literal string representation.
 */
Reference.prototype.toLiteral = function(parameters) {
    const value = this.value.toString();
    const literal = '<' + value + '>';  // add the '<' and '>' delimiters
    return literal;
};


/**
 * This method returns whether or not this reference has a meaningful value. A reference always
 * has a meaningful value.
 * 
 * @returns {Boolean} Whether or not this reference has a meaningful value.
 */
Reference.prototype.toBoolean = function() {
    return true;
};

