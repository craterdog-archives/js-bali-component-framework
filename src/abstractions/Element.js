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
 * This abstract class defines the invariant methods that all elemental components must support.
 */
var Component = require('./Component').Component;


/**
 * The constructor for the Element class.
 * 
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Element} The new element.
 */
function Element(type, parameters) {
    Component.call(this, type, parameters);
    this.source = '';
    return this;
}
Element.prototype = Object.create(Component.prototype);
Element.prototype.constructor = Element;
exports.Element = Element;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Element.prototype.accept = function(visitor) {
    visitor.visitElement(this);
};


Element.prototype.setSource = function(source) {
    this.source = source;
    this.length += source.length;
};


/**
 * This method compares this composit component with another object for equality.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean}
 */
Element.prototype.equalTo = function(that) {
    if (that && this.constructor.name !== that.constructor.name) return false;
    var thisString = this.toSource();
    var thatString = that.toSource();
    return thisString === thatString;
};


/**
 * This method compares this element component with another object using a
 * NaturalComparator.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that
 */
Element.prototype.compareTo = function(that) {
    // everything is greater than null
    if (that === undefined || that === null) return 1;

    // compare types
    var thisType = this.constructor.name;
    var thatType = that.constructor.name;
    if (thisType !== thatType) return thisType.localeCompare(thatType);

    // compare values
    return this.comparedWith(that);
};


/**
 * This method provides the default implementation for element comparison. Concrete
 * subtypes may override this method to provide type specific implementations.
 * 
 * @param {Element} that The other element to be compared with. 
 * @returns {Number} 1 if greater, 0 if equal, and -1 if less.
 */
Element.prototype.comparedWith = function(that) {
    return this.toSource().localeCompare(that.toSource());
};

