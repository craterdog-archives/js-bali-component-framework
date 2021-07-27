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
 * This abstract class defines the methods that all structures must support.
 */
const Component = require('./Component').Component;
const Exception = require('../structures/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new structure with the specified ancestry and interfaces
 * candidate with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize the structure.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Structure} The new structure.
 */
const Structure = function(ancestry, interfaces, parameters, debug) {
    Component.call(
        this,
        ancestry.concat('/bali/abstractions/Structure'),
        interfaces.concat('/bali/interfaces/Composite'),
        parameters,
        debug
    );
    return this;
};
Structure.prototype = Object.create(Component.prototype);
Structure.prototype.constructor = Structure;
exports.Structure = Structure;


// PUBLIC METHODS

/**
 * This method returns the value of the specified attribute for this structure.
 *
 * @param {Element} key The key for the attribute to be retrieved.
 * @returns {Component} The value of the attribute corresponding to the specified
 * key, or undefined if it does not exist.
 */
Structure.prototype.getAttribute = function(key) {
    const exception = new Exception({
        $module: '/bali/abstractions/Structure',
        $procedure: '$getAttribute',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method sets the value of the specified attribute for this structure.
 *
 * @param {Element} key The key of the attribute to be set.
 * @param {Component} value The value of the attribute.
 */
Structure.prototype.setAttribute = function(key, value) {
    const exception = new Exception({
        $module: '/bali/abstractions/Structure',
        $procedure: '$setAttribute',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};
