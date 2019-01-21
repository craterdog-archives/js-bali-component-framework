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


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new Bali exception with the specified attributes.
 * 
 * @constructor
 * @param {Catalog} attributes A catalog containing the exception attributes.
 * @returns {Exception} The new exception.
 */
function Exception(attributes) {
    Error.call(this, 'EXCEPTION: The following Bali exception was thrown: ' + attributes);
    this.attributes = attributes;
    return this;
}
Exception.prototype = Object.create(Error.prototype);
Exception.prototype.constructor = Exception;
exports.Exception = Exception;
