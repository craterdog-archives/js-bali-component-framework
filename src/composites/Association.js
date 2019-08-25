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
 * This constructor creates a new key-value association.
 * 
 * @param {String|Number|Boolean|Component} key The key of the association.
 * @param {String|Number|Boolean|Component} value The value associated with the key.
 * @returns {Association} A new association.
 */
function Association(key, value) {
    abstractions.Composite.call(this, utilities.types.ASSOCIATION);
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
 * This method returns an array containing the attributes of this association.
 * 
 * @returns {Array} An array containing the attributes of this association.
 */
Association.prototype.toArray = function() {
    const array = [];
    array.push(this.getKey());
    array.push(this.getValue());
    return array;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this association.
 */
Association.prototype.acceptVisitor = function(visitor) {
    visitor.visitAssociation(this);
};


/**
 * This method returns the number of 
 * 
 * @returns {Number} The number of attributes that make up this composite component.
 */
Association.prototype.getSize = function() {
    return 2;
};
