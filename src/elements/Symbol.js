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
const agents = require('../agents');
const abstractions = require('../abstractions');
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new symbol element using the specified value.
 *
 * @param {String} value The value of the symbol.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Symbol} The new symbol element.
 */
const Symbol = function(value, parameters, debug) {
    abstractions.String.call(
        this,
        ['/bali/elements/Symbol'],
        [
            '/bali/libraries/Chainable'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/elements/Symbol', '$Symbol', '$value', value, [
            '/javascript/String'
        ]);
    }

    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*(-[0-9]+)?$/g.test(value)) {
        const exception = new Exception({
            $module: '/bali/elements/Symbol',
            $procedure: '$Symbol',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid symbol value was passed to the constructor.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };
    this.isReserved = function() { return value.includes('-'); };

    return this;
};
Symbol.prototype = Object.create(abstractions.String.prototype);
Symbol.prototype.constructor = Symbol;
exports.Symbol = Symbol;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Symbol.prototype.acceptVisitor = function(visitor) {
    visitor.visitSymbol(this);
};


/**
 * This method returns the number of characters in this symbol.
 *
 * @returns {Number} The number of characters in this symbol.
 */
Symbol.prototype.getSize = function() {
    return this.getValue().length;
};


/**
 * This method returns the character at the specified index from this symbol.
 *
 * @param {Number} index The index of the character to be retrieved from this symbol.
 * @returns {String} The character at the specified index.
 */
Symbol.prototype.getItem = function(index) {
    if (this.debug > 1) {
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/elements/Symbol', '$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    index = this.normalizedIndex(index) - 1;  // zero-based indexing for JS
    return this.getValue()[index];
};


/**
 * This method returns a new symbol containing the characters in the specified range.
 *
 * @param {Range} range A range depicting the indices of the first and last characters to be retrieved.
 * @returns {Symbol} A new symbol containing the requested characters.
 */
Symbol.prototype.getItems = function(range) {
    if (this.debug > 1) {
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/elements/Symbol', '$getItems', '$range', range, [
            '/javascript/String',
            '/bali/collections/Range'
        ]);
    }
    range = this.componentize(range);
    var first = range.getFirst();
    if (first === undefined) {
        first = 1;  // first character
    } else {
        first = first.toInteger();
    }
    var last = range.getLast();
    if (last === undefined) {
        last = -1;  // last character
    } else {
        last = last.toInteger();
    }
    first = this.normalizedIndex(first) - 1;  // zero-based indexing for JS
    last = this.normalizedIndex(last);  // slice() is exclusive of last index
    const string = this.getValue().slice(first, last);
    return new Symbol(string, this.getParameters(), this.debug);
};


// CHAINABLE LIBRARY FUNCTIONS

/**
 * This function returns a new symbol string that contains the characters from the second symbol
 * string concatenated onto the end of the first symbol string.
 *
 * @param {Symbol} first The first symbol string to be operated on.
 * @param {Symbol} second The second symbol string to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Symbol} The resulting symbol string.
 */
Symbol.chain = function(first, second, debug) {
    if (debug > 1) {
        const validator = new agents.Validator(debug);
        validator.validateType('/bali/elements/Symbol', '$chain', '$first', first, [
            '/bali/elements/Symbol'
        ]);
        validator.validateType('/bali/elements/Symbol', '$chain', '$second', second, [
            '/bali/elements/Symbol'
        ]);
    }
    const string1 = first.getValue();
    const string2 = second.getValue();
    const string = string1 + string2;
    return new Symbol(string, first.getParameters(), debug);
};

