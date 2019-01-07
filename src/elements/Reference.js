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
const literals = require('../utilities/Literals');
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new reference element.
 * 
 * @param {String} value The value of the reference.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reference} The new reference element.
 */
function Reference(value, parameters) {
    Element.call(this, types.REFERENCE, parameters);
    if (!value) throw new Error('BUG: An invalid reference value was passed to the constructor: ' + value);
    this.value = new URL(value);
    this.setSource(this.toLiteral());
    this.setToComplex();  // references should never be inlined
    return this;
}
Reference.prototype = Object.create(Element.prototype);
Reference.prototype.constructor = Reference;
exports.Reference = Reference;


/**
 * This constructor creates an immutable instance of a reference using the specified
 * source string.
 * 
 * @constructor
 * @param {String} source The source string defining the reference.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reference} The new reference.
 */
Reference.from = function(source, parameters) {
    const value = literals.parseReference(source, parameters);
    const reference = new Reference(value, parameters);
    return reference;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @returns {String} The corresponding literal string representation.
 */
Reference.prototype.toLiteral = function() {
    const value = this.value.toString();
    const source = literals.formatReference(value, this.parameters);
    return source;
};

