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
 * This abstract class defines the methods that all composite components must support.
 */
const utilities = require('../utilities');
const Component = require('./Component').Component;


// PUBLIC FUNCTIONS

/**
 * This function creates a new composite component of the specified type with the optional
 * parameters that are used to parameterize its type.
 * 
 * @param {String} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize the composite component. 
 * @param {Number} debug A number in the range [0..3].
 * @returns {Composite} The new composite component.
 */
function Composite(type, parameters, debug) {
    Component.call(this, type, parameters, debug);
    return this;
}
Composite.prototype = Object.create(Component.prototype);
Composite.prototype.constructor = Composite;
exports.Composite = Composite;


// PUBLIC METHODS

/**
 * This method determines whether or not this component is a composite.
 * 
 * @returns {Boolean} Whether or not this component is a composite.
 */
Composite.prototype.isComposite = function() {
    return true;
};


/**
 * This method returns whether or not this composite has a meaningful value. If the composite
 * is empty it returns <code>false</code>, otherwise it returns <code>true</code>.
 * 
 * @returns {Boolean} Whether or not this composite has a meaningful value.
 */
Composite.prototype.toBoolean = function() {
    return true;
};


/**
 * This method converts negative subcomponent indexes into their corresponding positive
 * indexes and then checks to make sure the index is in the range [1..size]. NOTE: if the
 * composite component is empty then the resulting index will be zero.
 *
 * The mapping between indexes is as follows:
 * <pre>
 * Negative Indexes:   -N      -N + 1     -N + 2     -N + 3   ...   -1
 * Positive Indexes:    1         2          3          4     ...    N
 * </pre>
 *
 * @param {Number} index The index to be normalized [-N..N].
 * @param {Number} size The size of the composite (N).
 * @returns {Number} The normalized [1..N] index.
 */
Composite.prototype.normalizeIndex = function(index, size) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/abstractions/Composite', '$normalizeIndex', '$index', index, [
            '/javascript/Number'
        ]);
        validator.validateType('/bali/abstractions/Composite', '$normalizeIndex', '$size', size, [
            '/javascript/Number'
        ]);
    }
    if (index > size) index = size;
    if (index < -size) index = -size;
    if (index < 0) index = index + size + 1;
    return index;
};
