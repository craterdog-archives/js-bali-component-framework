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
 * reserved identifier.
 */
const literals = require('../utilities/Literals');
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new reserved identifier.
 * 
 * @param {String} value The value of the reserved identifier.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reserved} The new reserved identifier.
 */
function Reserved(value, parameters) {
    Element.call(this, types.RESERVED, parameters);
    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*(-[0-9]+)?$/g.test(value)) {
        throw new Error('BUG: An invalid reserved identifier string was passed to the constructor: ' + value);
    }
    this.value = value;
    this.setSource(this.toLiteral());
    return this;
}
Reserved.prototype = Object.create(Element.prototype);
Reserved.prototype.constructor = Reserved;
exports.Reserved = Reserved;


/**
 * This constructor creates an immutable instance of a reserved symbol using the specified
 * source string.
 * 
 * @constructor
 * @param {String} source The source string defining the reserved symbol.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reserved} The new reserved symbol.
 */
Reserved.from = function(source, parameters) {
    const value = literals.parseReserved(source, parameters);
    const reserved = new Reserved(value, parameters);
    return reserved;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @returns {String} The corresponding literal string representation.
 */
Reserved.prototype.toLiteral = function() {
    const source = literals.formatReserved(this.value, this.parameters);
    return source;
};

