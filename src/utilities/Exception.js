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
 * handling within the Bali Nebula™. This class must look like it is a Component class
 * but also inherit from the JavaScript Error class. So it implements all of the methods
 * defined in the Component class.
 */


// PUBLIC FUNCTIONS

/**
 * This function creates a new Bali exception with the specified attributes.  It must
 * be very careful not to cause additional exceptions to be thrown or an infinite loop
 * may result.
 *
 * @param {Object} attributes An object containing the exception attributes.
 * @param {Object} cause An optional exception that caused this one.
 * @returns {Exception} The new exception.
 */
const Exception = function(attributes, cause) {
    if (attributes === null || typeof attributes !== 'object') attributes = {};
    attributes = this.componentize(attributes);
    this.cause = cause || undefined;
    this.message = attributes['$text'] || 'An undefined exception occurred.';
    Error.call(this.message, { cause: this.cause });

    this.getAttributes = function() {
        return attributes;
    };

    // setup the ancestry to look like an Exception is a Component
    const ancestry = [
        '/bali/utilities/Exponent',
        '/bali/abstractions/Component'
    ];
    const interfaces = [
        '/bali/interfaces/Reflective'
    ];

    // save the current error stack if possible
    try {
        this.stack = Error().stack;
    } catch (ignore) {
        // a stack trace is not supported on this platform
    }


    // Reflective Interface

    this.isComponent = true;

    this.isParameterized = function() {
        return !!this.getParameters();
    };

    this.getParameter = function(key) {
        if (parameters) return parameters.getAttribute(key);
    };

    this.setParameter = function(key, value) {
        parameters = parameters || this.componentize({});
        parameters.setAttribute(key, value);
    };

    this.getParameters = function() {
        return parameters;
    };

    this.setParameters = function(object) {
        if (object) parameters = this.componentize(object);
    };

    this.isType = function(type) {
        for (const candidate of ancestry) {
            if (candidate === type) return true;
        }
        return false;
    };

    this.getType = function() {
        return ancestry[0];
    };

    this.getAncestry = function() {
        return ancestry;
    };

    this.supportsInterface = function(type) {
        for (const candidate of interfaces) {
            if (candidate === type) return true;
        }
        return false;
    };

    this.getInterfaces = function() {
        return interfaces;
    };

    return this;
};
Exception.prototype.constructor = Exception;
exports.Exception = Exception;


// Standard Methods

/**
 * This method returns a boolean value for this component. It allows each component to be used as a
 * boolean in a condition check that determines whether of not the component has a meaningful
 * value. Each component decides what is meaningful. The default response is true.
 *
 * @returns {Boolean} Whether or not this component has a meaningful value.
 */
Exception.prototype.toBoolean = function() {
    return true;
};


/**
 * This method returns a string representation of the component. The actual method is defined in the
 * index.js file to avoid circular dependencies.
 *
 * @returns {String} The corresponding string representation.
 */
Exception.prototype.toString = function() {
    const exception = new Exception({
        $module: '/bali/utilities/Exception',
        $procedure: '$toString',
        $exception: '$notDefined',
        $text: 'This method gets attached to this class when the index.js file is loaded.'
    });
    throw exception;
};


/**
 * This method returns the unique hash value for this component.
 *
 * @returns {Number} The unique hash value for this component.
 */
Exception.prototype.getHash = function() {
    var hash = 0;
    const source = this.toString();
    if (source.length === 0) return hash;
    for (var i = 0; i < source.length; i++) {
        const character = source.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash |= 0;  // truncate to a 32 bit integer
    }
    return hash;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this component.
 */
Exception.prototype.acceptVisitor = function(visitor) {
    visitor.visitComponent(this.getAttributes());
};

