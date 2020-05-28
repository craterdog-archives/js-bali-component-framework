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
 * This abstract class defines the methods that all structure components must support.
 */
const Component = require('./Component').Component;
const Exception = require('../structures/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new structure component with the specified ancestry and interfaces
 * candidate with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize the structure component.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Structure} The new structure component.
 */
const Structure = function(ancestry, interfaces, parameters, debug) {
    Component.call(
        this,
        ancestry.concat('/bali/types/Structure'),
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
 * This method determines whether or not this structure is meaningful.
 *
 * @returns {Boolean} Whether or not this component is meaningful.
 */
Structure.prototype.toBoolean = function() {
    const exception = new Exception({
        $module: '/bali/types/Structure',
        $procedure: '$toBoolean',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns the value of the specified subcomponent for this structure component.
 *
 * @param {Element} element The element that acts as an index or key to the subcomponent
 * to be retrieved.
 * @returns {Component} The subcomponent corresponding to the specified index or key, or
 * undefined if it does not exist.
 */
Structure.prototype.getSubcomponent = function(element) {
    const exception = new Exception({
        $module: '/bali/types/Structure',
        $procedure: '$getSubcomponent',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method sets the value of the specified subcomponent for this structure component.
 *
 * @param {Element} element The element that acts as an index or key to the subcomponent
 * to be retrieved.
 * @param {Component} subcomponent The value of the subcomponent.
 */
Structure.prototype.setSubcomponent = function(element, subcomponent) {
    const exception = new Exception({
        $module: '/bali/types/Structure',
        $procedure: '$setSubcomponent',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};
