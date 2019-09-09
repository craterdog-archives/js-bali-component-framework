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
const abstractions = require('../abstractions');
const Exception = require('../composites/Exception').Exception;
const validate = abstractions.Component.validate;


// PUBLIC FUNCTIONS

/**
 * This function creates a new symbol element using the specified value.
 * 
 * @param {String} value The value of the symbol.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new symbol element.
 */
function Symbol(value, parameters, debug) {
    abstractions.Element.call(this, '$Symbol', parameters, debug);
    if (this.debug > 1) validate('/bali/elements/Symbol', '$Symbol', '$value', value, [
        '/javascript/String'
    ], this.debug);

    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*$/g.test(value)) {
        throw new Exception({
            $module: '/bali/elements/Symbol',
            $procedure: '$Symbol',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid symbol value was passed to the constructor.'
        });
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
}
Symbol.prototype = Object.create(abstractions.Element.prototype);
Symbol.prototype.constructor = Symbol;
exports.Symbol = Symbol;


// PUBLIC METHODS

/**
 * This method returns whether or not this symbol has a meaningful value. Symbols
 * always have a meaningful value.
 * 
 * @returns {Boolean} Whether or not this symbol has a meaningful value.
 */
Symbol.prototype.toBoolean = function() {
    return true;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Symbol.prototype.acceptVisitor = function(visitor) {
    visitor.visitSymbol(this);
};
