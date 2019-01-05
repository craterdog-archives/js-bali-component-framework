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
const types = require('../abstractions/Types');
const Comparator = require('../utilities/Comparator').Comparator;
const Formatter = require('../utilities/Formatter').Formatter;


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
    this.type = type;
    this.parameters = parameters;
    this.complexity = parameters ? parameters.complexity : 0;  // number of characters in its source code
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
    var type = this.type;
    if (type === types.CATALOG && this.isParameterized()) {
        type = types.typeBySymbol(this.parameters.getValue(1));
    }
    if (type > 0) {
        // system type
        type = types.typeReference(type);
    } else {
        // user defined type
        type = this.parameters.getValue(1).toString();
    }
    return type;
};


/**
 * This method returns whether or not this component is parameterized.
 * 
 * @returns {Boolean} Whether or not this component is parameterized.
 */
Component.prototype.isParameterized = function() {
    return !!this.parameters;
};


/**
 * This method sets the complexity of this component to be greater than the maximum complexity
 * for a simple component.
 */
Component.prototype.setToComplex = function() {
    this.complexity = types.IS_COMPLEX;
};


/**
 * This method returns a string representation of the component.
 * 
 * @returns {String} The corresponding string representation.
 */
Component.prototype.toString = function() {
    const string = this.toDocument();
    return string;
};


/**
 * This method provides the canonical way to export this component in
 * Bali Document Notation™.
 * 
 * @param {String} indentation A blank string that will be prepended to each indented line in
 * the source code.
 * @returns {String} The source code for this component.
 */
Component.prototype.toDocument = function(indentation) {
    const formatter = new Formatter(indentation);
    const source = formatter.formatComponent(this);
    return source;
};


/**
 * This method determines whether or not this component is equal to another component.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean} Whether or not this component is equal to another component.
 */
Component.prototype.isEqualTo = function(that) {
    const comparator = new Comparator();
    return comparator.componentsAreEqual(this, that);
};


/**
 * This method compares this component with another object for natural order. It may be
 * overridden with a more efficient implementation by a subclass.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that.
 */
Component.prototype.comparedTo = function(that) {
    const comparator = new Comparator();
    return comparator.compareComponents(this, that);
};


/**
 * This method determines whether or not this component matches the specified pattern.
 * 
 * @param {String|Pattern} pattern The pattern to be used for matching.
 * @returns {Boolean} Whether or not this component matches the pattern.
 */
Component.prototype.matches = function(pattern) {
    var regex;
    const type = pattern.constructor.name;
    switch (type) {
        case 'String':
            regex = new RegExp(pattern);
            break;
        case 'Pattern':
            switch (pattern.value) {
                case 'none':
                    regex = new RegExp('\u0000');
                    break;
                case 'any':
                    regex = new RegExp('.*');
                    break;
            }
            break;
        default:
            throw new Error('BUG: An invalid pattern type was passed to match: ' + pattern);
    }
    return regex.test(this.toString());
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
    throw new Error('BUG: The abstract method acceptVisitor(visitor) must be implemented by a concrete subclass.');
};
