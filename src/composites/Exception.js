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
 * This composite class implements a smart exception class that knows how to format itself
 * as a Bali Document Notation™ string. It provides a consistent way to do exception
 * handling within the Bali Nebula™. This class must look like it is a Composite component
 * but also inherit from the JavaScript Error class. So it implements all of the methods
 * defined in the Component and Composite classes by delegating to the same methods in its
 * 'attributes' attribute.
 */


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new Bali exception with the specified attributes.  It must
 * be very careful not to cause additional exceptions to be thrown or an infinite loop
 * may result.
 * 
 * @param {Object} attributes An object containing the exception attributes.
 * @param {Object} cause An optional exception that caused this one.
 * @returns {Exception} The new exception.
 */
function Exception(attributes, cause) {

    // mark this as a component
    this.isComponent = true;

    // convert the attributes into a catalog
    if (attributes === null || typeof attributes !== 'object') attributes = {};
    this.attributes = this.convert(attributes);

    // set the error message and cause
    this.message = attributes['$text'] || 'An undefined exception occurred.';
    this.cause = cause || undefined;

    // save the current error stack if possible
    try {
        this.stack = Error().stack;
    } catch (ignore) {
        // a stack trace is not supported on this platform
    }

    this.getType = function() { return '$Exception'; };

    return this;
}
Exception.prototype = Object.create(Error.prototype);
Exception.prototype.constructor = Exception;
Exception.prototype.name = 'Exception';
exports.Exception = Exception;


// PUBLIC METHODS

/**
 * This method returns whether or not this component has the specified type.
 * 
 * @param {String} type The symbol for the type in question. 
 * @returns {Boolean} Whether or not this component has the specified type.
 */
Exception.prototype.isType = function(type) {
    return this.getType() === type;
};


/**
 * This method returns whether or not this component is parameterized.
 * 
 * @returns {Boolean} Whether or not this component is parameterized.
 */
Exception.prototype.isParameterized = function() {
    return false;
};


/**
 * This method returns whether or not this component supports logical operations.
 * <pre>
 *  * false
 *  * true
 *  * not
 *  * and
 *  * sans
 *  * or
 *  * xor
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports logical operations.
 */
Exception.prototype.isLogical = function() {
    return false;
};


/**
 * This method returns whether or not this component supports scaling operations.
 * <pre>
 *  * inverse
 *  * sum
 *  * difference
 *  * scaled
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports scaling operations.
 */
Exception.prototype.isScalable = function() {
    return false;
};


/**
 * This method returns whether or not this component supports numeric operations.
 * <pre>
 *  * inverse
 *  * reciprocal
 *  * conjugate
 *  * factorial
 *  * sum
 *  * difference
 *  * scaled
 *  * product
 *  * quotient
 *  * remainder
 *  * exponential
 *  * logarithm
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports numeric operations.
 */
Exception.prototype.isNumerical = function() {
    return false;
};


/**
 * This function determines whether or not this component can be displayed as a literal
 * value.
 * 
 * @returns {Boolean} Whether or not this component can be displayed as a literal value.
 */
Exception.prototype.isLiteral = function() {
    return false;
};


/**
 * This function determines whether or not this component supports iteration:
 * <pre>
 *  * iterator
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports iteration.
 */
Exception.prototype.isSequential = function() {
    return true;
};


/**
 * This function determines whether or not this component supports concatenation operations:
 * <pre>
 *  * concatenation
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports concatenation operations.
 */
Exception.prototype.isChainable = function() {
    return false;
};


/**
 * This function determines whether or not this component is procedural.
 * 
 * @returns {Boolean} Whether or not this component is procedural.
 */
Exception.prototype.isProcedural = function() {
    return false;
};


/**
 * This function determines whether or not this component is an element.
 * 
 * @returns {Boolean} Whether or not this component is an element.
 */
Exception.prototype.isElement = function() {
    return false;
};


/**
 * This function determines whether or not this component is a composite.
 * 
 * @returns {Boolean} Whether or not this component is a composite.
 */
Exception.prototype.isComposite = function() {
    return true;
};


/**
 * This function determines whether or not this component is a collection.
 * 
 * @returns {Boolean} Whether or not this component is a collection.
 */
Exception.prototype.isCollection = function() {
    return false;
};


/**
 * This abstract method returns a boolean value for this component. It allows each component to be
 * used as a boolean in a condition that determines whether of not the component has a meaningful
 * value. Each component decides what is meaningful.  This method must be implemented by a subclass.
 * 
 * @returns {Boolean} Whether or not this component has a meaningful value.
 */
Exception.prototype.toBoolean = function() {
    return true;
};


/**
 * This method returns a string representation of the component.
 * 
 * @returns {String} The corresponding string representation.
 */
Exception.prototype.toString = function() {
    var string = 'Exception: The following Bali Nebula™ exception was thrown:\n';
    var exception = this;
    while (exception) {
        string += (exception.attributes || exception) + '\n';
        exception = exception.cause;
    }
    return string;
};


/**
 * This method determines whether or not this component is equal to another component.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean} Whether or not this component is equal to another component.
 */
Exception.prototype.isEqualTo = function(that) {
    return this.comparedTo(that) === 0;
};


/**
 * This method compares this component with another object for natural order. It may be
 * overridden with a more efficient implementation by a subclass.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that.
 */
Exception.prototype.comparedTo = function(that) {
    if (that.isComponent && that.getType() === this.getType()) {
        return this.attributes.comparedTo(that.attributes);  // both exceptions
    }
    return this.attributes.comparedTo(that);
};


/**
 * This method determines whether or not the specified pattern matches this component.
 * The pattern may be a bali.pattern element or an composite component containing
 * bali.pattern attributes. In either case, the bali.patterns are evaluated against the
 * string version of the component or its corresponding attribute. If the pattern does
 * not consist of any bali.pattern elements then a strict equality comparison of the
 * attributes listed in the pattern is used for matching. Note, this means that the
 * component may contain additional attributes not found in the pattern component and
 * it still matches.
 * 
 * @param {Component} pattern The pattern to be used for matching.
 * @returns {Boolean} Whether or not this component matches the pattern.
 */
Exception.prototype.isMatchedBy = function(pattern) {
    return this.attributes.isMatchedBy(pattern);
};


/**
 * This method returns the unique hash value for the attributes of this component.
 * 
 * @returns {Number} The unique hash value for the attributes of this component.
 */
Exception.prototype.getHash = function() {
    var hash = 0;
    const source = this.toString();  // include entire exception string not just attributes
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
 * @param {Visitor} visitor The visitor that wants to visit the attributes of this component.
 */
Exception.prototype.acceptVisitor = function(visitor) {
    visitor.visitCatalog(this.attributes);
};


/**
 * This abstract method returns an array containing the subcomponents in this composite
 * component. It must be implemented by a subclass.
 * 
 * @returns {Array} An array containing the subcomponents in this composite component.
 */
Exception.prototype.toArray = function() {
    return this.attributes.toArray();
};


/**
 * This method returns whether or not this composite component has any subcomponents.
 * 
 * @returns {Boolean} Whether or not this composite component has any subcomponents.
 */
Exception.prototype.isEmpty = function() {
    return this.attributes.isEmpty();
};


/**
 * This abstract method returns the number of subcomponents that this composite component has.
 * It must be implemented by a subclass.
 * 
 * @returns {Number} The number of subcomponents that this composite component has.
 */
Exception.prototype.getSize = function() {
    return this.attributes.getSize();
};


/**
 * This method returns an object that can be used to iterate over the subcomponents in
 * this composite component.
 * @returns {Iterator} An iterator for this composite component.
 */
Exception.prototype.getIterator = function() {
    return this.attributes.getIterator();
};
