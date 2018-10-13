/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

/*
 * This class defines a block of source code that can be executed on the Bali Virtual Machine™.
 */
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates a new source code element.
 * 
 * @param {String} source The string value of the source code.
 * @param {Parameters} parameters Optional parameters used to parameterize this source
 * code element. 
 * @returns {Source} The new source code element.
 */
function Source(source, parameters) {
    Element.call(this, types.SOURCE, parameters);
    this.setSource(source);
    return this;
}
Source.prototype = Object.create(Element.prototype);
Source.prototype.constructor = Source;
exports.Source = Source;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Source.prototype.accept = function(visitor) {
    visitor.visitSource(this);
};

