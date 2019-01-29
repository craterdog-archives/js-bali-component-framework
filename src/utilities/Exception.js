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
 * @param {Object} attributes An object containing the exception attributes.
 * @returns {Exception} The new exception.
 */
function Exception(attributes) {
    this.stack = Error().stack;
    if (this.stack) this.stack = 'Exception' + this.stack.slice(5);  // replace 'Error' with 'Exception'
    this.attributes = this.convert(attributes);
    this.message = 'BALI: The following Bali exception was thrown: ' + this.attributes;
    return this;
}
Exception.prototype = Object.create(Error.prototype);
Exception.prototype.name = 'Exception';
Exception.prototype.constructor = Exception;
exports.Exception = Exception;


Exception.prototype.toString = function() {
    return this.name + ': ' + this.message;
};
