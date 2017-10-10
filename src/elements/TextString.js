/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
var Utilities = require('./Utilities');


/*
 * This class implements a Bali text string element type.
 * @param String string The Javascript string to be used as the value.
 */
function TextString(string, isBlock) {
    // TODO: need to handle block text
    this.string = string || '';
    this.isBlock = isBlock || false;
    return this;
}

TextString.prototype.constructor = TextString;

TextString.prototype.asSource = function() {
    // TODO: need to handle block text
    return '"' + this.string + '"';
};

TextString.prototype.asBoolean = function() {
    return this.string === '';
};

TextString.prototype.asString = function() {
    return this.string;
};

TextString.prototype.isEmpty = function() {
    return this.string.length === 0;
};

TextString.prototype.getSize = function() {
    return this.string.length;
};

TextString.prototype.getItem = function(index) {
    return this.string[Utilities.convertIndex(index)];  // convert to zero based indexing
};

TextString.prototype.getItems = function(start, end) {
    return new TextString(this.string.substring(Utilities.convertIndex(start), end));  // no need to convert end
};

TextString.prototype.createIterator = function() {
    return new TextIterator(this);
};


/*
 * This class implements an iterator for the Bali text string element type.
 * @param TextString textString The Bali text string to be iterated over.
 */
function TextIterator(textString) {
    this.textString = textString;
    this.index = 0;
}

TextIterator.prototype.constructor = TextIterator;

TextIterator.prototype.toStart = function() {
    this.index = 0;
};

TextIterator.prototype.toIndex = function(index) {
    this.index = convertIndex(index);
};

TextIterator.prototype.toEnd = function() {
    this.index = this.textString.length();
};

TextIterator.prototype.hasPrevious = function() {
    return this.index > 0;
};

TextIterator.prototype.getPrevious = function() {
    this.index--;  // decrement first for JavaScript zero based indexing
    var character = this.textString[this.index];
    return character;
};

TextIterator.prototype.hasNext = function() {
    return this.index < this.textString.length();
};

TextIterator.prototype.getNext = function() {
    var character = this.textString[this.index];
    this.index++;  // increment after for JavaScript zero based indexing
    return character;
};

