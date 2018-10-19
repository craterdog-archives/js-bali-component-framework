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
 * This abstract class defines the methods that all Bali components must support.
 */
var types = require('../abstractions/Types');
var formatter = require('../utilities/DocumentFormatter');


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
 * This method returns whether or not this component is parameterized.
 * 
 * @returns {Boolean} Whether or not this component is parameterized.
 */
Component.prototype.isParameterized = function() {
    return !!this.parameters;
};


/**
 * This method determines whether or not the complexity of this component is less than
 * the maximum complexity (IS_COMPLEX) for a simple component.
 * 
 * @returns {Boolean} Whether or not this component is simple.
 */
Component.prototype.isSimple = function() {
    return types.isSimple(this.complexity);
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
    var string = this.toSource();
    return string;
};


/**
 * This method provides the canonical way to export this component as Bali source code.
 * 
 * @param {String} indentation A blank string that will be prepended to each indented line in
 * the source code.
 * @returns {String} The Bali source code for this component.
 */
Component.prototype.toSource = function(indentation) {
    var source = formatter.formatComponent(this, indentation);
    return source;
};


/**
 * This method compares this component with another object for equality. It may be overridden
 * with a more efficient implementation by a subclass.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean}
 */
Component.prototype.equalTo = function(that) {
    if (!that) return false;
    if (this === that) return true;  // same component
    if (this.prototype !== that.prototype) return false;
    return this.toSource() === that.toSource();
};


/**
 * This method compares this component with another object for natural order. It may be
 * overridden with a more efficient implementation by a subclass.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that
 */
Component.prototype.comparedTo = function(that) {
    if (!that) return 1;  // any component is greater than null/undefined
    if (this === that) return 0;  // same component
    var result = this.constructor.name.localeCompare(that.constructor.name);
    if (result !== 0) return result;
    return this.toSource().localeCompare(that.toSource());
};


/**
 * This method returns the unique hash value for this component.
 * 
 * @returns {Number} The unique hash value for this component.
 */
Component.prototype.getHash = function() {
    var hash = 0;
    var source = this.toSource();
    if (source.length === 0) return hash;
    for (var i = 0; i < source.length; i++) {
        var character = source.charCodeAt(i);
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
Component.prototype.accept = function(visitor) {
    throw new Error('COMPONENT: Abstract method accept(visitor) must be implemented by a concrete subclass.');
};
