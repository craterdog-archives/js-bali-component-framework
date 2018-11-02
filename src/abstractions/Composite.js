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
var Component = require('./Component').Component;
var Iterator = require('../composites/Iterator').Iterator;
var parser = require('../utilities/ComponentParser');


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
 * This function converts a JS primitive type into its corresponding Bali component.
 * NOTE: this function really belongs in the <code>bali.Component</code> class but that
 * would introduce a circular dependency with the parser.
 * 
 * @param {String|Number|Boolean|Component} value The value to be converted (if necessary).
 * @returns {Component} The value as a component.
 */
Composite.asComponent = function(value) {
    var component;
    switch (value.constructor.name) {
        case 'String':
            component = parser.parseExpression(value);
            break;
        case 'Boolean':
            // parse it's string value
            component = parser.parseComponent(String(value));
            break;
        case 'Number':
            // parse it's uppercase string value to handle exponents correctly
            component = parser.parseComponent(String(value).toUpperCase());
            break;
        default:
            // it's already a component, leave it as is
            component = value;
    }
    return component;
};


// PUBLIC METHODS

/**
 * This method compares this composite with another object for equality.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean}
 */
Composite.prototype.isEqualTo = function(that) {
    if (that === undefined || that === null) return false;
    if (this === that) return true;  // same component
    if (this.prototype !== that.prototype) return false;
    var thisArray = this.toArray();
    var thatArray = that.toArray();
    if (thisArray.length !== thatArray.length) return false;
    for (var i = 0; i < thisArray.length; i++) {
        if (!thisArray[i].isEqualTo(thatArray[i])) return false;
    }
    return true;
};


/**
 * This method compares this composite with another object for natural order.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that
 */
Composite.prototype.comparedTo = function(that) {
    if (that === undefined || that === null) return 1;  // all composites are greater than null/undefined
    if (this === that) return 0;  // same component
    var result = this.constructor.name.localeCompare(that.constructor.name);
    if (result !== 0) return result;
    var thisArray = this.toArray();
    var thatArray = that.toArray();
    var result = 0;
    for (var i = 0; i < thisArray.length && i < thatArray.length; i++) {
        result = thisArray[i].comparedTo(thatArray[i]);
        if (result !== 0) return result;
    }
    if (thisArray.length < thatArray.length) {
        return -1;
    } else if (thisArray.length > thatArray.length) {
        return 1;
    } else {
        return 0;
    }
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
    var iterator = new Iterator(this.toArray());
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
    var size = this.getSize();
    if (index > size) index = size;
    if (index < -size) index = -size;
    if (index < 0) index = index + size + 1;
    return index;
};
