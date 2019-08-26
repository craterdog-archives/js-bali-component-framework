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

/*
 * This element class captures the state and methods associated with a pattern element.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTOR

/**
 * This constructor creates a new pattern element using the specified value.
 * 
 * @param {String|RegExp} value A regular expression for the pattern element.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Pattern} The new pattern element.
 */
function Pattern(value, parameters) {
    abstractions.Element.call(this, utilities.types.PATTERN, parameters);
    value = value || '^none$';  // the default value matches nothing
    if (typeof value === 'string') value = new RegExp(value);

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
}
Pattern.prototype = Object.create(abstractions.Element.prototype);
Pattern.prototype.constructor = Pattern;
exports.Pattern = Pattern;


// PUBLIC METHODS

/**
 * This method returns whether or not this pattern has a meaningful value. If the value is '^none$'
 * it returns <code>false</code>, otherwise it returns <code>true</code>.
 * 
 * @returns {Boolean} Whether or not this pattern has a meaningful value.
 */
Pattern.prototype.toBoolean = function() {
    return this.getValue().source !== '^none$';
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Pattern.prototype.acceptVisitor = function(visitor) {
    visitor.visitPattern(this);
};


/**
 * This method determines whether or not this pattern is matched by the source string of the
 * specified component.
 * 
 * @param {Component} component The component to be tested.
 * @returns {Boolean} Whether of not this pattern is matched by the source string of the component.
 */
Pattern.prototype.matches = function(component) {
    return this.getValue().test(component.toString());
};
