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
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new reserved identifier.
 * 
 * @param {String} value The value of the reserved identifier.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reserved} The new reserved identifier.
 */
function Reserved(value, parameters) {
    abstractions.Element.call(this, utilities.types.RESERVED, parameters);
    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*(-[0-9]+)?$/g.test(value)) {
        throw new Error('BUG: An invalid reserved identifier string was passed to the constructor: ' + value);
    }
    this.value = value;
    this.setSource(this.toLiteral(parameters));
    return this;
}
Reserved.prototype = Object.create(abstractions.Element.prototype);
Reserved.prototype.constructor = Reserved;
exports.Reserved = Reserved;


/**
 * This constructor creates an immutable instance of a reserved symbol using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the reserved symbol.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reserved} The new reserved symbol.
 */
Reserved.fromLiteral = function(literal, parameters) {
    const value = literal.slice(2);  // remove the leading '$$'
    const reserved = new Reserved(value, parameters);
    return reserved;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Parameters} parameters Any parameters that are needed for formatting.
 * @returns {String} The corresponding literal string representation.
 */
Reserved.prototype.toLiteral = function(parameters) {
    const literal = '$$' + this.value;  // add the leading '$$'
    return literal;
};


/**
 * This method returns whether or not this reserved symbol has a meaningful value. Reserved
 * symbols always have a meaningful value.
 * 
 * @returns {Boolean} Whether or not this reserved symbol has a meaningful value.
 */
Reserved.prototype.toBoolean = function() {
    return true;
};

