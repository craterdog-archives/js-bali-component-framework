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
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new text string element.
 * 
 * @constructor
 * @param {String} value The value of the text string (embedded in double quotes).
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Text} The new text string.
 */
function Text(value, parameters) {
    Element.call(this, types.TEXT, parameters);
    if (value === undefined || value === null) value = '""';  // default value
    if (!value.startsWith('"')) {
        value = '"' + value + '"';
    }
    this.value = value.slice(1, -1);  // remove double quotes from string value
    this.setSource(value);
    if (value.startsWith('"\n')) this.setToComplex();
    return this;
}
Text.prototype = Object.create(Element.prototype);
Text.prototype.constructor = Text;
exports.Text = Text;


// PUBLIC FUNCTIONS

/**
 * This function returns a new text string that contains the bytes from the second text
 * concatenated onto the end of the first text string.
 *
 * @param {List} text1 The first text string to be operated on.
 * @param {List} text2 The second text string to be operated on.
 * @returns {List} The resulting text string.
 */
Text.concatenation = function(text1, text2) {
    var string1 = text1.value;
    var string2 = text2.value;
    var string = string1 + string2;
    return new Text(string, text1.parameters);
};


// PUBLIC METHODS

/**
 * This method returns whether or not this text string has any characters.
 * 
 * @returns {Boolean} Whether or not this text string has any characters.
 */
Text.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This method returns the number of characters that this text string has.
 * 
 * @returns {Number} The number of characters that this text string has.
 */
Text.prototype.getSize = function() {
    return this.value.length;
};


/**
 * This method returns an object that can be used to iterate over the characters in
 * this text string.
 * @returns {Iterator} An iterator for this text string.
 */
Text.prototype.getIterator = function() {
    var iterator = new TextIterator(this.value);
    return iterator;
};


// PRIVATE CLASSES

function TextIterator(text) {
    this.slot = 0;  // the slot before the first number
    this.size = text.length;  // static so we can cache it here
    this.text = text;
    return this;
}
TextIterator.prototype.constructor = TextIterator;


TextIterator.prototype.toStart = function() {
    this.slot = 0;  // the slot before the first number
};


TextIterator.prototype.toSlot = function(slot) {
    this.slot = slot;
};


TextIterator.prototype.toEnd = function() {
    this.slot = this.size;  // the slot after the last number
};


TextIterator.prototype.hasPrevious = function() {
    return this.slot > 0;
};


TextIterator.prototype.hasNext = function() {
    return this.slot < this.size;
};


TextIterator.prototype.getPrevious = function() {
    if (!this.hasPrevious()) throw new Error('BUG: Unable to retrieve the previous character from an iterator that is at the beginning of a text string.');
    return this.text[--this.slot];
};


TextIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('BUG: Unable to retrieve the next character from an iterator that is at the end of a text string.');
    return this.text[this.slot++];
};
