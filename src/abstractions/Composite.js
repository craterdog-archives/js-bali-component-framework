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
 * This abstract class defines the invariant methods that all composite components must support.
 */
var Component = require('./Component').Component;
var formatter = require('../utilities/DocumentFormatter');
var parser = require('../utilities/DocumentParser');
var Iterator = require('../composites/Iterator').Iterator;

/**
 * The constructor for the Composite class.
 * 
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this composite. 
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
 * This method provides the canonical way to export a Bali component as Bali source code.
 * 
 * @param {String} indentation A blank string that will be prepended to each indented line in
 * the source code.
 * @returns {String} The Bali source code for the component.
 */
Composite.prototype.toSource = function(indentation) {
    var source = formatter.formatTree(this, indentation);
    return source;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this composite.
 */
Composite.prototype.accept = function(visitor) {
    visitor.visitCollection(this);
};


/**
 * This method returns whether or not this composite component is empty.
 * 
 * @returns {Boolean} Whether or not this composite component is empty.
 */
Composite.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This abstract method returns the size of this composite component. The size is the number of
 * subcomponents this composite component has. It must be implemented by a subclass.
 * 
 * @returns {Number} The number of subcomponents this component has.
 */
Composite.prototype.getSize = function() {
    throw new Error('COMPOSITE: Abstract method getSize() must be implemented by a concrete subclass.');
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
 * This method returns an object that can be used to iterate over the subcomponents
 * of this composite component.
 * 
 * @returns {Iterator} An iterator for this composite component.
 */
Composite.prototype.iterator = function() {
    var iterator = new Iterator(this.toArray());
    return iterator;
};


/**
 * This method compares this composit component with another object for equality.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean}
 */
Composite.prototype.equalTo = function(that) {
    if (that && this.prototype !== that.prototype) return false;
    if (this.getSize() !== that.getSize()) return false;
    var thisIterator = this.iterator();
    var thatIterator = that.iterator();
    while (thisIterator.hasNext()) {
        var thisItem = thisIterator.getNext();
        var thatItem = thatIterator.getNext();
        if (!thisItem.equalTo(thatItem)) return false;
    }
    return true;
};


/**
 * This method compares this composite component with another object using a
 * NaturalComparator.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that
 */
Composite.prototype.compareTo = function(that) {
    if (that === null) return 1;
    if (this === that) return 0;  // same object
    var result = 0;
    var thisIterator = this.iterator();
    var thatIterator = that.iterator();
    while (thisIterator.hasNext() && thatIterator.hasNext()) {
        var thisItem = thisIterator.getNext();
        var thatItem = thatIterator.getNext();
        result = thisItem.compareTo(thatItem);
        if (result !== 0) break;
    }
    if (result === 0) {
        // same so far, check for different lengths
        if (this.getSize() < that.getSize()) {
            return -1;
        } else if (this.getSize() > that.getSize()) {
            return 1;
        }
    }
    return result;
};


Composite.asComponent = function(value) {
    var component;
    switch (value.constructor.name) {
        case 'String':
            component = parser.parseExpression(value);
            break;
        case 'Boolean':
            // parse it's string value
            component = parser.parseElement(String(value));
            break;
        case 'Number':
            // parse it's uppercase string value to handle exponents correctly
            component = parser.parseElement(String(value).toUpperCase());
            break;
        default:
            // it's already a component, leave it as is
            component = value;
    }
    return component;
};


/**
 * This function converts negative indexes into their corresponding positive indexes and
 * then checks to make sure the index is in the range [1..size]. NOTE: if the collection
 * is empty then the resulting index will be zero.
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
Composite.prototype.normalizedIndex = function(index) {
    var size = this.getSize();
    if (index > size) index = size;
    if (index < -size) index = -size;
    if (index < 0) index = index + size + 1;
    return index;
};

