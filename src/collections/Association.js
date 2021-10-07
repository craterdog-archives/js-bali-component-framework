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
 * This composite class implements an association between a key and a value. It is used by the
 * catalog class.
 */
const moduleName = '/bali/collections/Association';
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new key-value association.
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
 * @param {Any} key The key of the association.
 * @param {Any} value The value associated with the key.
 * @returns {Association} A new association.
 */
const Association = function(key, value, debug) {
    abstractions.Component.call(
        this,
        [ moduleName ],
        [],
        undefined,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Association', '$key', key, [
            '/javascript/String',
            '/javascript/Boolean',
            '/javascript/Number',
            '/bali/abstractions/Element'
        ]);
        this.validateArgument('$Association', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ]);
    }

    // convert the arguments to components
    key = this.componentize(key);
    value = this.componentize(value);

    // access to this component's attributes is tightly controlled
    this.getKey = function() {
        return key;
    };

    this.getValue = function() {
        return value;
    };

    this.setValue = function(newValue) {
        if (this.debug > 1) {
            this.validateArgument('$setValue', '$newValue', newValue, [
                '/javascript/Undefined',
                '/javascript/String',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        newValue = this.componentize(newValue);
        const oldValue = value;
        value = newValue;
        return oldValue;
    };

    return this;
};
Association.prototype = Object.create(abstractions.Component.prototype);
Association.prototype.constructor = Association;
exports.Association = Association;


// PUBLIC METHODS

/**
 * This method determines whether or not this composite is meaningful.
 *
 * @returns {Boolean} Whether or not this component is meaningful.
 */
Association.prototype.toBoolean = function() {
    const value = this.getValue();
    return value !== undefined && value !== null;
};

