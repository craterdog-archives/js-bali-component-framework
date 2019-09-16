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
const utilities = require('../utilities');
const Component = require('./Component').Component;


// PUBLIC FUNCTIONS

/**
 * This function creates a new elemental component of the specified type with the optional
 * parameters that are used to parameterize its type.
 * 
 * @param {String} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @param {Number} debug A number in the range [0..3].
 * @returns {Element} The new element.
 */
const Element = function(type, parameters, debug) {
    Component.call(this, type, parameters, debug);
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/abstractions/Element', '$Element', '$type', type, [
            '/javascript/String'
        ]);
    }

    return this;
};
Element.prototype = Object.create(Component.prototype);
Element.prototype.constructor = Element;
exports.Element = Element;


// PUBLIC METHODS

/**
 * This method determines whether or not this component can be displayed as a literal
 * value.
 * 
 * @returns {Boolean} Whether or not this component can be displayed as a literal value.
 */
Element.prototype.isLiteral = function() {
    return true;
};


/**
 * This method determines whether or not this component is an element.
 * 
 * @returns {Boolean} Whether or not this component is an element.
 */
Element.prototype.isElement = function() {
    return true;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Element.prototype.acceptVisitor = function(visitor) {
    visitor.visitElement(this);
};

