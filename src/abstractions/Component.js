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
 * This abstract class defines the methods that all components must support.
 */
const utilities = require('../utilities');
const formatter = new utilities.Formatter();


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new component of the specified type with the optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this component. 
 * @returns {Component} The new component.
 */
function Component(type, parameters) {
    this.getTypeId = function() { return type; };
    this.getParameters = function() { return parameters; };
    return this;
}
Component.prototype.constructor = Component;
exports.Component = Component;


// PUBLIC METHODS

/**
 * This method returns the type of this component as a reference string.
 * 
 * @returns {String} A string containing a type reference for this component.
 */
Component.prototype.getType = function() {
    var reference;
    var type = this.getTypeId();
    if (type === utilities.types.CATALOG && this.isParameterized()) {
        const value = this.getParameters().getParameter('$type');
        const string = formatter.formatLiteral(value);
        if (value && value.getTypeId() === utilities.types.SYMBOL) {
            // the value is a symbol for a system type
            reference = utilities.types.typeBySymbol(string);
        } else {
            // the value is a reference to a user defined type
            reference = string;
        }
    } else {
        // the type is a system type
        reference = utilities.types.typeReference(type);
    }
    return reference;
};


/**
 * This method returns whether or not this component is parameterized.
 * 
 * @returns {Boolean} Whether or not this component is parameterized.
 */
Component.prototype.isParameterized = function() {
    return !!this.getParameters();
};


/**
 * This abstract method returns a boolean value for this component. It allows each component to be
 * used as a boolean in a condition that determines whether of not the component has a meaningful
 * value. Each component decides what is meaningful.  This method must be implemented by a subclass.
 * 
 * @returns {Boolean} Whether or not this component has a meaningful value.
 */
Component.prototype.toBoolean = function() {
    throw new Error('The abstract method toBoolean() must be implemented by a concrete subclass.');
};


/**
 * This method returns a string representation of the component.
 * 
 * @returns {String} The corresponding string representation.
 */
Component.prototype.toString = function() {
    const string = formatter.formatComponent(this);
    return string;
};


/**
 * This method determines whether or not this component is equal to another component.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean} Whether or not this component is equal to another component.
 */
Component.prototype.isEqualTo = function(that) {
    return this.comparedTo(that) === 0;
};


/**
 * This method compares this component with another object for natural order. It may be
 * overridden with a more efficient implementation by a subclass.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that.
 */
Component.prototype.comparedTo = function(that) {
    const comparator = new utilities.Comparator();
    return comparator.compareComponents(this, that);
};


/**
 * This method determines whether or not this component matches the specified pattern.
 * 
 * @param {Component} pattern The pattern to be used for matching.
 * @returns {Boolean} Whether or not this component matches the pattern.
 */
Component.prototype.isMatchedBy = function(pattern) {
    if (pattern.getTypeId() === utilities.types.PATTERN) {
        // handle a pattern component differently from other elements
        return pattern.matches(this);
    } else if (this.getTypeId() !== pattern.getTypeId()) {
        // the component and pattern must be the same type
        return false;
    } else if (utilities.types.isLiteral(pattern)) {
        // elements are tested for equality
        return this.isEqualTo(pattern);
    } else if (pattern.getTypeId() === utilities.types.RANGE) {
        // handle a range component differently from other collections
        if (!this.getFirst().isMatchedBy(pattern.getFirst())) return false;
        if (!this.getLast().isMatchedBy(pattern.getLast())) return false;
        // both endpoints matched
        return true;
    } else if (pattern.getTypeId() === utilities.types.CATALOG) {
        // handle a catalog component differently from other collections
        const keys = pattern.getKeys();
        const iterator = keys.getIterator();
        while (iterator.hasNext()) {
            var key = iterator.getNext();
            var thisValue = this.getValue(key);
            if (thisValue) {
                var patternValue = pattern.getValue(key);
                if (!thisValue.isMatchedBy(patternValue)) return false;
            }
        }
        // all pattern item values matched
        return true;
    } else if (utilities.types.isSequential(pattern)) {
        // iterate through a collection's items
        const thisIterator = this.getIterator();
        const patternIterator = pattern.getIterator();
        while (thisIterator.hasNext() && patternIterator.hasNext()) {
            var thisItem = thisIterator.getNext();
            var patternItem = patternIterator.getNext();
            if (!thisItem.isMatchedBy(patternItem)) return false;
        }
        // all pattern items matched
        return true;
    } else {
        throw new Error('An invalid pattern type was passed to match: ' + pattern);
    }
};


/**
 * This method returns the unique hash value for this component.
 * 
 * @returns {Number} The unique hash value for this component.
 */
Component.prototype.getHash = function() {
    var hash = 0;
    const source = this.toString();
    if (source.length === 0) return hash;
    for (var i = 0; i < source.length; i++) {
        const character = source.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash |= 0;  // truncate to a 32 bit integer
    }
    return hash;
};


/**
 * This abstract method accepts a visitor as part of the visitor pattern. It must be
 * implemented by a subclass.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this component.
 */
Component.prototype.acceptVisitor = function(visitor) {
    throw new Error('The abstract method acceptVisitor(visitor) must be implemented by a concrete subclass.');
};
