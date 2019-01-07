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
const literals = require('../utilities/Literals');
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new symbol element.
 * 
 * @param {String} value The value of the symbol.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new symbol element.
 */
function Symbol(value, parameters) {
    Element.call(this, types.SYMBOL, parameters);
    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*$/g.test(value)) {
        throw new Error('BUG: An invalid symbol value was passed to the constructor.');
    }
    this.value = value;
    this.setSource(this.toLiteral());
    return this;
}
Symbol.prototype = Object.create(Element.prototype);
Symbol.prototype.constructor = Symbol;
exports.Symbol = Symbol;


/**
 * This constructor creates an immutable instance of a symbol using the specified
 * source string.
 * 
 * @constructor
 * @param {String} source The source string defining the symbol.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new symbol.
 */
Symbol.from = function(source, parameters) {
    const value = literals.parseSymbol(source, parameters);
    const symbol = new Symbol(value, parameters);
    return symbol;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @returns {String} The corresponding literal string representation.
 */
Symbol.prototype.toLiteral = function() {
    const source = literals.formatSymbol(this.value, this.parameters);
    return source;
};

