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


/**
 * This composite class implements a smart exception class that knows how to format itself
 * as a Bali Document Notation™ string. It provides a consistent way to do exception
 * handling within the Bali Nebula™.
 */


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new Bali exception with the specified attributes.  It must
 * be very careful not to cause additional exceptions to be thrown or an infinite loop
 * may result.
 * 
 * @param {Object} attributes An object containing the exception attributes.
 * @param {Object} cause An optional exception that caused this one.
 * @returns {Exception} The new exception.
 */
function Exception(attributes, cause) {
    // make sure parameters are of the correct types
    attributes = (typeof attributes === 'object') ? attributes : {};
    cause = cause || undefined;

    // save the current error stack if possible
    try {
        this.stack = Error().stack;
        if (this.stack) {
            this.stack = 'Exception' + this.stack.slice(5);  // replace 'Error' with 'Exception'
        }
    } catch (ignore) {
        // a stack trace is not supported on this platform
    }

    // convert the attributes into a catalog
    this.attributes = this.convert(attributes);

    // set the error message and cause
    const text = this.attributes.getValue('$text');
    this.message = text ? text.getValue() : 'An unknown exception occurred.';
    this.cause = cause;

    return this;
}
Exception.prototype = Object.create(Error.prototype);
Exception.prototype.constructor = Exception;
exports.Exception = Exception;


Exception.prototype.toString = function() {
    var string = 'Exception: The following Bali Nebula™ exception was thrown:\n';

    // append each exception in the chain
    var exception = this;
    while (exception) {
        string += (exception.attributes || exception) + '\n';
        exception = exception.cause;
    }

    return string;
};
