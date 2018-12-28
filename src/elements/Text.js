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
    this.value = value;
    this.setSource(this.value);
    if (this.value.startsWith('"\n')) this.setToComplex();
    return this;
}
Text.prototype = Object.create(Element.prototype);
Text.prototype.constructor = Text;
exports.Text = Text;


/**
 * This method returns the raw javascript string.
 * 
 * @returns {String} The raw javascript string.
 */
Text.prototype.getRawString = function() {
    return this.value.slice(1, -1);  // strip off the double quotes
};
