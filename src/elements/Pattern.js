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
 * This element class captures the state and methods associated with a pattern element.
 */
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new pattern element.
 * 
 * @constructor
 * @param {String} value The value of the pattern element.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Pattern} The new pattern element.
 */
function Pattern(value, parameters) {
    Element.call(this, types.PATTERN, parameters);
    if (!value) value = 'none';  // default value
    this.value = value;
    this.setSource(this.toLiteral());
    return this;
}
Pattern.prototype = Object.create(Element.prototype);
Pattern.prototype.constructor = Pattern;
exports.Pattern = Pattern;


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @returns {String} The corresponding literal string representation.
 */
Pattern.prototype.toLiteral = function() {
    return this.value;
};

