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
 * reference element.
 */
const URL = require('url').URL;
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new reference element.
 * 
 * @param {String} value The value of the reference.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reference} The new reference element.
 */
function Reference(value, parameters) {
    Element.call(this, types.REFERENCE, parameters);
    if (!value) throw new Error('BUG: An invalid reference value was passed to the constructor: ' + value);
    value = value.slice(1, -1);  // remove the angle brackets
    this.value = new URL(value);
    const source = '<' + this.value + '>';  // embed in angle brackets
    this.setSource(source);
    this.setToComplex();  // references should never be inlined
    return this;
}
Reference.prototype = Object.create(Element.prototype);
Reference.prototype.constructor = Reference;
exports.Reference = Reference;
