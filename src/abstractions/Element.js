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
 * This abstract class defines the methods that all elemental components must support.
 */
const Component = require('./Component').Component;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new elemental component of the specified type with the optional
 * parameters that are used to parameterize its type.
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
Element.prototype.acceptVisitor = function(visitor) {
    visitor.visitElement(this);
};


Element.prototype.setSource = function(source) {
    this.source = source;
    this.complexity += source.length;
};
