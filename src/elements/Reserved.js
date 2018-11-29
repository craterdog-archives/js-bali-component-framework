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
 * reserved element.
 */
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates a new reserved element.
 * 
 * @param {String} value The value of the reserved.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reserved} The new reserved element.
 */
function Reserved(value, parameters) {
    Element.call(this, types.RESERVED, parameters);
    if (!value) {
        throw new Error('RESERVED: A reserved cannot be null.');
    }
    if (!/^\$\$[a-zA-Z][0-9a-zA-Z]*(-[0-9]+)?$/g.test(value)) {
        throw new Error("RESERVED: A reserved must begin with '$$' and contain at least one character and cannot contain white space: " + this.value);
    }
    this.value = value;
    this.setSource(value);
    return this;
}
Reserved.prototype = Object.create(Element.prototype);
Reserved.prototype.constructor = Reserved;
exports.Reserved = Reserved;


/**
 * This method returns the identifier part of the reserved element.
 * 
 * @returns {String} The identifier part of the reserved element.
 */
Reserved.prototype.getIdentifier = function() {
    return this.value.substring(1);
};
