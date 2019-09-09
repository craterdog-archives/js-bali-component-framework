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
const abstractions = require('../abstractions');
const validate = abstractions.Component.validate;


// PUBLIC FUNCTIONS

/**
 * This function creates a new key-value association.
 * 
 * @param {String|Number|Boolean|Component} key The key of the association.
 * @param {String|Number|Boolean|Component} value The value associated with the key.
 * @returns {Association} A new association.
 */
function Association(key, value, debug) {
    abstractions.Composite.call(this, '$Association', debug);
    if (this.debug > 1) validate('/bali/composites/Association', '$Association', '$key', key, [
        '/javascript/String',
        '/javascript/Boolean',
        '/javascript/Number',
        '/javascript/Array',
        '/javascript/Object',
        '/bali/abstractions/Component'
    ], this.debug);
    if (this.debug > 1) validate('/bali/composites/Association', '$Association', '$value', value, [
        '/javascript/Undefined',
        '/javascript/String',
        '/javascript/Boolean',
        '/javascript/Number',
        '/javascript/Array',
        '/javascript/Object',
        '/bali/abstractions/Component'
    ], this.debug);

    // convert the arguments to components
    key = this.convert(key);
    value = this.convert(value);

    // access to this component's attributes is tightly controlled
    this.getKey = function() {
        return key;
    };

    this.getValue = function() {
        return value;
    };

    this.setValue = function(newValue) {
        if (this.debug > 1) validate('/bali/composites/Association', '$setValue', '$value', value, [
            '/javascript/Undefined',
            '/javascript/String',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ], this.debug);
        newValue = this.convert(newValue);
        const oldValue = value;
        value = newValue;
        return oldValue;
    };

    return this;
}
Association.prototype = Object.create(abstractions.Composite.prototype);
Association.prototype.constructor = Association;
exports.Association = Association;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this association.
 */
Association.prototype.acceptVisitor = function(visitor) {
    visitor.visitAssociation(this);
};
