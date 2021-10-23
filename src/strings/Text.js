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
const moduleName = '/bali/strings/Text';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const collections = require('../collections');


// PUBLIC FUNCTIONS

/**
 * This function creates a new text string element using the specified value.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {String} value The value of the text string.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Text} The new text string.
 */
const Text = function(value, parameters, debug) {
    abstractions.String.call(
        this,
        ['/bali/strings/Text'],
        [
            '/bali/libraries/Chainable'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Text', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String'
        ]);
    }

    value = value || '';  // default value
    if (value.startsWith('\n')) this.isNarrative = true;

    this.getValue = function() { return value; };

    return this;
};
Text.prototype = Object.create(abstractions.String.prototype);
Text.prototype.constructor = Text;
exports.Text = Text;


// PUBLIC METHODS

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
        this.validateArgument('$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    index = abstractions.Component.normalizedIndex(this, index) - 1;  // zero-based indexing for JS
    return this.getValue()[index];
};


/**
 * This method returns a new text string containing the characters associated with the specified indices.
 *
 * @param {String|Array|Sequential} indices A sequence of indices specifying which items to be retrieved.
 * @returns {Text} A new text string containing the requested characters.
 */
Text.prototype.getItems = function(indices) {
    if (this.debug > 1) {
        this.validateArgument('$getItems', '$indices', indices, [
            '/javascript/String',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    var string = '';
    indices = this.componentize(indices);
    const iterator = indices.getIterator();
    while (iterator.hasNext()) {
        var index = iterator.getNext().toInteger();
        index = abstractions.Component.normalizedIndex(this, index);
        const item = this.getItem(index);
        string += item;
    }
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
Text.chain = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$chain', '$first', first, [
            '/bali/strings/Text'
        ]);
        abstractions.Component.validateArgument(moduleName, '$chain', '$second', second, [
            '/bali/strings/Text'
        ]);
    }
    const string1 = first.getValue();
    const string2 = second.getValue();
    const string = string1 + string2;
    return new Text(string, first.getParameters(), debug);
};

