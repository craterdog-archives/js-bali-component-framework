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
const Element = require('./Element').Element;


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


/**
 * This function converts a JS primitive type into its corresponding component.
 * NOTE: it's tempting to use the parser in this method but that would introduce a
 * circular dependency since the parser depends on all component classes. Here we
 * restrict the dependency to just the elements which are under a different
 * dependency tree from the composites.  Yes, it is a TOTAL KLUDGE!
 * 
 * @param {String|Number|Boolean|Component} value The value to be converted (if necessary).
 * @returns {Component} The value as a component.
 */
Composite.asComponent = function(value) {
    var component;
    switch (typeof value) {
        case 'string':
            if (value.startsWith('~P')) { // Duration must come before Angle
                component = elements.Duration.fromLiteral(value);
            } else if (value.startsWith('~')) {
                component = elements.Angle.fromLiteral(value);
            } else if (value.startsWith("'")) {
                component = elements.Binary.fromLiteral(value);
            } else if (value.match(/^<-?[1-9]/)) {
                component = elements.Moment.fromLiteral(value);
            } else if (value === 'none' || value === 'any' || value.endsWith('"?')) {
                component = elements.Pattern.fromLiteral(value);
            } else if (value.endsWith('%')) {
                component = elements.Percent.fromLiteral(value);
            } else if (value === 'false' || value === 'true' || value.startsWith('.')) {
                component = elements.Probability.fromLiteral(value);
            } else if (value.startsWith('<')) {
                component = elements.Reference.fromLiteral(value);
            } else if (value.startsWith('$$')) {  // Reserved must come before Symbol
                component = elements.Reserved.fromLiteral(value);
            } else if (value.startsWith('$')) {
                component = elements.Symbol.fromLiteral(value);
            } else if (value.startsWith('#')) {
                component = elements.Tag.fromLiteral(value);
            } else if (value.startsWith('"')) {
                component = elements.Text.fromLiteral(value);
            } else if (value.match(/^v[1-9]/)) {
                component = elements.Version.fromLiteral(value);
            } else {  // must come last
                component = new elements.Text(value);
            }
            break;
        case 'boolean':
            value = value ? 1 : 0;
            component = new elements.Probability(value);
            break;
        case 'number':
            component = new elements.Number(value);
            break;
        default:
            if (value instanceof Component) {
                // leave it since it is already a component
                component = value;
            } else {
                throw new Error('BUG: Only primitive JS types (strings, numbers, and booleans) can be converted to components: ' + value);
        }
    }
    return component;
};


// PUBLIC METHODS

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
 * This abstract method returns an array containing the subcomponents in this composite
 * component. It must be implemented by a subclass.
 * 
 * @returns {Array} An array containing the subcomponents in this composite component.
 */
Composite.prototype.toArray = function() {
    throw new Error('COMPOSITE: Abstract method toArray() must be implemented by a concrete subclass.');
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

const elements = require('../elements');  // circular dependency, must be last!!