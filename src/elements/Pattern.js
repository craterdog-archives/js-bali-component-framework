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
const moduleName = '/bali/elements/Pattern';
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new pattern element using the specified value.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {String|RegExp} value A regular expression for the pattern element.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Pattern} The new pattern element.
 */
const Pattern = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        [ moduleName ],
        [],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Pattern', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/RegExp'
        ]);
    }
    value = value || '^none$';  // the default value matches nothing
    if (typeof value === 'string') value = new RegExp(value);

    this.getValue = function() { return value; };

    return this;
};
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
 * This method determines whether or not this pattern is matched by the source string of the
 * specified component.
 *
 * @param {Component} component The component to be tested.
 * @returns {Boolean} Whether of not this pattern is matched by the source string of the component.
 */
Pattern.prototype.matches = function(component) {
    if (this.debug > 1) {
        this.validateArgument('$matches', '$component', component, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ]);
    }
    component = this.componentize(component);
    return this.getValue().test(component.toString());
};

