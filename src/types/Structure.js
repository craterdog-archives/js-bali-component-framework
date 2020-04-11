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
const utilities = require('../utilities');
const Component = require('./Component').Component;


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
        interfaces,
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
 * This method returns a boolean value for this structure component.  Structure components
 * always return true.
 *
 * @returns {Boolean} Whether or not this component has a meaningful value.
 */
Structure.prototype.toBoolean = function() {
    return true;
};
