/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
var antlr4 = require('../antlr4/index');


/*
 * This class implements a Bali text string element type.
 */
function Probability(value) {
    this.value = value || 0;
    return this;
}

Probability.prototype.constructor = Probability;

Probability.prototype.asSource = function() {
    // TODO: need to handle block text
    return '"' + this.string + '"';
};

Probability.prototype.asBoolean = function() {
    return this.string === '';
};

Probability.prototype.asString = function() {
    return this.string;
};

Probability.prototype.isEmpty = function() {
    return this.string.length === 0;
};

Probability.prototype.getSize = function() {
    return this.string.length;
};

Probability.prototype.getItem = function(index) {
    return this.string[convertIndex(index)];  // convert to zero based indexing
};

Probability.prototype.getItems = function(start, end) {
    return new Probability(this.string.substring(convertIndex(start), end));  // no need to convert end
};

Probability.prototype.createIterator = function() {
    return new TextIterator(this);
};
