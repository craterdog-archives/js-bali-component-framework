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
 * This composite class implements a parameter list data structure. The structure is static
 * such that once parameters have been added to it they cannot be reordered or removed.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new parameter component.
 * 
 * @param {Object|Catalog} parameters An object containing the parameter symbol-value pairs.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Parameters} The new parameter component.
 */
const Parameters = function(parameters, debug) {
    abstractions.Composite.call(this, '$Parameters', undefined, debug);

    // the parameters are immutable so the methods are included in the constructor
    const catalog = this.convert(parameters, this.debug);

    this.getKeys = function() {
        return catalog.getKeys();
    };

    this.getValue = function(key) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/composites/Parameters', '$getParameter', '$key', key, [
                '/javascript/String',
                '/bali/elements/Symbol'
            ]);
        }
        return catalog.getValue(key);
    };

    this.acceptVisitor = function(visitor) {
        visitor.visitParameters(this);
    };
    
    return this;
};
Parameters.prototype = Object.create(abstractions.Composite.prototype);
Parameters.prototype.constructor = Parameters;
exports.Parameters = Parameters;
