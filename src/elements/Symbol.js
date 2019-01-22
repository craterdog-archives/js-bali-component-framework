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
 * symbol element.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new symbol element.
 * 
 * @param {String} value The value of the symbol.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new symbol element.
 */
function Symbol(value, parameters) {
    abstractions.Element.call(this, utilities.types.SYMBOL, parameters);
    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*$/g.test(value)) {
        throw new Error('BUG: An invalid symbol value was passed to the constructor.');
    }
    this.value = value;
    this.setSource(this.toLiteral(parameters));
    return this;
}
Symbol.prototype = Object.create(abstractions.Element.prototype);
Symbol.prototype.constructor = Symbol;
exports.Symbol = Symbol;


/**
 * This constructor creates an immutable instance of a symbol using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the symbol.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new symbol.
 */
Symbol.fromLiteral = function(literal, parameters) {
    const value = literal.slice(1);  // remove the leading '$'
    const symbol = new Symbol(value, parameters);
    return symbol;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Parameters} parameters Any parameters that are needed for formatting.
 * @returns {String} The corresponding literal string representation.
 */
Symbol.prototype.toLiteral = function(parameters) {
    const literal = '$' + this.value;  // add the leading '$'
    return literal;
};


/**
 * This method returns whether or not this symbol has a meaningful value. Symbols
 * always have a meaningful value.
 * 
 * @returns {Boolean} Whether or not this symbol has a meaningful value.
 */
Symbol.prototype.toBoolean = function() {
    return true;
};

