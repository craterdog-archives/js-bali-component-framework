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
 * @param {Object} cause An optional exception that caused this one.
 * @returns {Exception} The new exception.
 */
function Exception(attributes, cause) {
    this.stack = Error().stack;
    if (this.stack) this.stack = 'Exception' + this.stack.slice(5);  // replace 'Error' with 'Exception'
    this.attributes = this.convert(attributes);
    this.message = this.attributes.getValue('$message').getValue();
    this.cause = cause;
    return this;
}
Exception.prototype = Object.create(Error.prototype);
Exception.prototype.constructor = Exception;
exports.Exception = Exception;


Exception.prototype.toString = function() {
    var string = 'Exception: The following Bali exception was thrown:\n';
    var cause = this;
    while (cause) {
        string += (cause.attributes || cause) + '\n';
        cause = cause.cause;
    }
    return string;
};
