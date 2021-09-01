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
 * text string element.
 */
const agents = require('../agents');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new text string element using the specified value.
 *
 * @param {String} value The value of the text string.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Text} The new text string.
 */
const Text = function(value, parameters, debug) {
    abstractions.String.call(
        this,
        ['/bali/elements/Text'],
        [
            '/bali/libraries/Chainable'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/elements/Text', '$Text', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String'
        ]);
    }

    value = value || '';  // default value

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
};
Text.prototype = Object.create(abstractions.String.prototype);
Text.prototype.constructor = Text;
exports.Text = Text;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Text.prototype.acceptVisitor = function(visitor) {
    visitor.visitText(this);
};


/**
 * This method returns the number of characters that this text string has.
 *
 * @returns {Number} The number of characters that this text string has.
 */
Text.prototype.getSize = function() {
    return this.getValue().length;
};


/**
 * This method returns the character at the specified index from this text string.
 *
 * @param {Number} index The index of the character to be retrieved from this text string.
 * @returns {String} The character at the specified index.
 */
Text.prototype.getItem = function(index) {
    if (this.debug > 1) {
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/elements/Text', '$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    index = this.normalizedIndex(index) - 1;  // zero-based indexing for JS
    return this.getValue()[index];
};


/**
 * This method returns a new text string containing the characters in the specified range.
 *
 * @param {Range} range A range depicting the indices of the first and last characters to be retrieved.
 * @returns {Text} A new text string containing the requested characters.
 */
Text.prototype.getItems = function(range) {
    if (this.debug > 1) {
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/elements/Text', '$getItems', '$range', range, [
            '/javascript/String',
            '/bali/composites/Range'
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
    return new Text(string, this.getParameters(), this.debug);
};


// CHAINABLE LIBRARY FUNCTIONS

/**
 * This function returns a new text string that contains the characters from the second text
 * concatenated onto the end of the first text string.
 *
 * @param {Text} first The first text string to be operated on.
 * @param {Text} second The second text string to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Text} The resulting text string.
 */
Text.concatenation = function(first, second, debug) {
    if (debug > 1) {
        const validator = new agents.Validator(debug);
        validator.validateType('/bali/elements/Text', '$concatenation', '$first', first, [
            '/bali/elements/Text'
        ]);
        validator.validateType('/bali/elements/Text', '$concatenation', '$second', second, [
            '/bali/elements/Text'
        ]);
    }
    const string1 = first.getValue();
    const string2 = second.getValue();
    const string = string1 + string2;
    return new Text(string, first.getParameters(), debug);
};

