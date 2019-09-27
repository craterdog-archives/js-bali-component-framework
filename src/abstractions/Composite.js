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
 * This function creates a new composite component with the specified ancestry and interfaces
 * candidate with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize the composite component.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Composite} The new composite component.
 */
const Composite = function(ancestry, interfaces, parameters, debug) {
    Component.call(
        this,
        ancestry.concat('/bali/abstractions/Composite'),
        interfaces,
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
 * This method returns whether or not this composite has a meaningful value. If the composite
 * is empty it returns <code>false</code>, otherwise it returns <code>true</code>.
 *
 * @returns {Boolean} Whether or not this composite has a meaningful value.
 */
Composite.prototype.toBoolean = function() {
    return this.getSize() > 0;
};


/**
 * This abstract method returns the number of subcomponents that this composite component has.
 * It must be implemented by a subclass.
 *
 * @returns {Number} The number of subcomponents that this composite component has.
 */
Composite.prototype.getSize = function() {
    const exception = new Exception({
        $module: '/bali/abstractions/Composite',
        $procedure: '$getSize',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
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
 * @returns {Number} The normalized [1..N] index.
 */
Composite.prototype.normalizeIndex = function(index) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/abstractions/Composite', '$normalizeIndex', '$index', index, [
            '/javascript/Number'
        ]);
    }
    const size = this.getSize();
    if (index > size) index = size;
    if (index < -size) index = -size;
    if (index < 0) index = index + size + 1;
    return index;
};
