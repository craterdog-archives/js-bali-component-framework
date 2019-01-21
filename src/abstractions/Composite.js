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
 * This constructor creates a new composite component of the specified type with the optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize the composite component. 
 * @returns {Composite} The new composite component.
 */
function Composite(type, parameters) {
    Component.call(this, type, parameters);
    return this;
}
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
    return !this.isEmpty();
};


/**
 * This abstract method returns an array containing the subcomponents in this composite
 * component. It must be implemented by a subclass.
 * 
 * @returns {Array} An array containing the subcomponents in this composite component.
 */
Composite.prototype.toArray = function() {
    throw new Error('COMPOSITE: Abstract method toArray() must be implemented by a concrete subclass.');
};


/**
 * This method returns whether or not this composite component has any subcomponents.
 * 
 * @returns {Boolean} Whether or not this composite component has any subcomponents.
 */
Composite.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This abstract method returns the number of subcomponents that this composite component has.
 * It must be implemented by a subclass.
 * 
 * @returns {Number} The number of subcomponents that this composite component has.
 */
Composite.prototype.getSize = function() {
    throw new Error('COMPOSITE: Abstract method getSize() must be implemented by a concrete subclass.');
};


/**
 * This method returns an object that can be used to iterate over the subcomponents in
 * this composite component.
 * @returns {Iterator} An iterator for this composite component.
 */
Composite.prototype.getIterator = function() {
    const iterator = new utilities.Iterator(this.toArray());
    return iterator;
};


/**
 * This function converts negative subcomponent indexes into their corresponding positive
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
    const size = this.getSize();
    if (index > size) index = size;
    if (index < -size) index = -size;
    if (index < 0) index = index + size + 1;
    return index;
};
