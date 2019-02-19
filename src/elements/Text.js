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
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTOR

/**
 * This constructor creates a new text string element using the specified value.
 * 
 * @constructor
 * @param {String} value The value of the text string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Text} The new text string.
 */
function Text(value, parameters) {
    abstractions.Element.call(this, utilities.types.TEXT, parameters);
    value = value || '';  // default value

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
}
Text.prototype = Object.create(abstractions.Element.prototype);
Text.prototype.constructor = Text;
exports.Text = Text;


// PUBLIC METHODS

/**
 * This method returns whether or not this text string has a meaningful value. If the text
 * string is empty it returns <code>false</code>, otherwise it returns <code>true</code>.
 * 
 * @returns {Boolean} Whether or not this text string has a meaningful value.
 */
Text.prototype.toBoolean = function() {
    return !this.isEmpty();
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Text.prototype.acceptVisitor = function(visitor) {
    visitor.visitText(this);
};


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
    return this.getValue().length;
};


/**
 * This method returns an object that can be used to iterate over the characters in
 * this text string.
 * @returns {Iterator} An iterator for this text string.
 */
Text.prototype.getIterator = function() {
    const iterator = new TextIterator(this.getValue());
    return iterator;
};


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
    const string1 = text1.getValue();
    const string2 = text2.getValue();
    const string = string1 + string2;
    return new Text(string);
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
    if (!this.hasPrevious()) return;
    return this.text[--this.slot];
};


TextIterator.prototype.getNext = function() {
    if (!this.hasNext()) return;
    return this.text[this.slot++];
};
