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
const types = require('../types');


// PUBLIC FUNCTIONS

/**
 * This function creates a new pattern element using the specified value.
 *
 * @param {String|RegExp} value A regular expression for the pattern element.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Pattern} The new pattern element.
 */
const Pattern = function(value, parameters, debug) {
    types.Element.call(
        this,
        ['/bali/elements/Pattern'],
        [],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Pattern', '$Pattern', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/RegExp'
        ]);
    }
    value = value || '^none$';  // the default value matches nothing
    if (typeof value === 'string') value = new RegExp(value);

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
};
Pattern.prototype = Object.create(types.Element.prototype);
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
 * This method determines whether or not this pattern is matched by the source string of the
 * specified component.
 *
 * @param {Component} component The component to be tested.
 * @returns {Boolean} Whether of not this pattern is matched by the source string of the component.
 */
Pattern.prototype.matches = function(component) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Pattern', '$matches', '$component', component, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/types/Component'
        ]);
    }
    component = this.componentize(component, this.debug);
    return this.getValue().test(component.toString());
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Pattern.prototype.acceptVisitor = function(visitor) {
    visitor.visitPattern(this);
};
