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
 * This class defines a block of code that can be executed on the Bali Virtual Machine™.
 */
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates a new source code element.
 * 
 * @param {String} source The string value of the source code.
 * @param {Parameters} parameters Optional parameters used to parameterize this source
 * code element. 
 * @returns {Code} The new source code element.
 */
function Code(source, parameters) {
    Element.call(this, types.CODE, parameters);
    this.setSource(source);
    return this;
}
Code.prototype = Object.create(Element.prototype);
Code.prototype.constructor = Code;
exports.Code = Code;
