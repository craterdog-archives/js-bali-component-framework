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
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new key-value association.
 *
 * @param {String|Number|Boolean|Component} key The key of the association.
 * @param {String|Number|Boolean|Component} value The value associated with the key.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Association} A new association.
 */
const Association = function(key, value, debug) {
    abstractions.Composite.call(
        this,
        ['/bali/composites/Association'],
        [],
        undefined,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/composites/Association', '$Association', '$key', key, [
            '/javascript/String',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ]);
        validator.validateType('/bali/composites/Association', '$Association', '$value', value, [
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
    key = this.componentize(key, this.debug);
    value = this.componentize(value, this.debug);

    // access to this component's attributes is tightly controlled
    this.getKey = function() {
        return key;
    };

    this.getValue = function() {
        return value;
    };

    this.setValue = function(newValue) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/composites/Association', '$setValue', '$value', value, [
                '/javascript/Undefined',
                '/javascript/String',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        newValue = this.componentize(newValue, this.debug);
        const oldValue = value;
        value = newValue;
        return oldValue;
    };

    return this;
};
Association.prototype = Object.create(abstractions.Composite.prototype);
Association.prototype.constructor = Association;
exports.Association = Association;


// PUBLIC METHODS

/**
 * This method returns the number of subcomponents that this composite component has.  An
 * association always has two subcomponents, a key and a value.
 *
 * @returns {Number} The number of subcomponents that this composite component has.
 */
Association.prototype.getSize = function() {
    return 2;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this association.
 */
Association.prototype.acceptVisitor = function(visitor) {
    visitor.visitAssociation(this);
};
