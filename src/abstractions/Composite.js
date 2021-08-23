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
 * This abstract class defines the methods that all composites must support.
 */
const Component = require('./Component').Component;
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new composite with the specified ancestry and interfaces
 * candidate with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize the composite.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Composite} The new composite.
 */
const Composite = function(ancestry, interfaces, parameters, debug) {
    Component.call(
        this,
        ancestry.concat('/bali/abstractions/Composite'),
        interfaces.concat('/bali/interfaces/Structured'),
        parameters,
        debug
    );
    return this;
};
Composite.prototype = Object.create(Component.prototype);
Composite.prototype.constructor = Composite;
exports.Composite = Composite;


// PUBLIC METHODS

/**
 * This method returns the value of the specified attribute for this composite.
 *
 * @param {Element} key The key for the attribute to be retrieved.
 * @returns {Component} The value of the attribute corresponding to the specified
 * key, or undefined if it does not exist.
 */
Composite.prototype.getAttribute = function(key) {
    const exception = new Exception({
        $module: '/bali/abstractions/Composite',
        $procedure: '$getAttribute',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method sets the value of the specified attribute for this composite.
 *
 * @param {Element} key The key of the attribute to be set.
 * @param {Component} value The value of the attribute.
 */
Composite.prototype.setAttribute = function(key, value) {
    const exception = new Exception({
        $module: '/bali/abstractions/Composite',
        $procedure: '$setAttribute',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};
