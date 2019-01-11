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
 * This collection class implements a parameter list data structure. The structure is static
 * such that once parameters have been added to it they cannot be reordered or removed.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new parameter catalog or list.
 * 
 * @constructor
 * @param {Collection} collection The collection of parameters. 
 * @returns {Parameters} The new parameter list.
 */
function Parameters(collection) {
    abstractions.Composite.call(this, utilities.types.PARAMETERS);
    this.collection = collection.constructor.fromSequential(collection);  // static so copy it
    this.complexity += collection.complexity;
    return this;
}
Parameters.prototype = Object.create(abstractions.Composite.prototype);
Parameters.prototype.constructor = Parameters;
exports.Parameters = Parameters;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this parameter list.
 */
Parameters.prototype.acceptVisitor = function(visitor) {
    visitor.visitParameters(this);
};


/**
 * This method returns the number of parameters that are currently on the parameter list.
 * 
 * @returns {Number} The number of parameters that are in this list.
 */
Parameters.prototype.getSize = function() {
    const size = this.collection.getSize();
    return size;
};


/**
 * This method returns an array containing the parameters in this list.
 * 
 * @returns {Array} An array containing the parameters in this list.
 */
Parameters.prototype.toArray = function() {
    const array = this.collection.toArray();
    return array;
};


/**
 * This method returns the key for the parameter with the specified index in the
 * parameter list.
 *
 * @param {Number} index The index for the parameter with the desired key.
 * @returns {Component} The key for the parameter associated with the index.
 */
Parameters.prototype.getKey = function(index) {
    var key = this.collection.getItem(index);
    if (this.collection.type === utilities.types.CATALOG) {
        key = key.key;  // the item is an association
    }
    return key;
};


/**
 * This method returns the value associated with the specified key from the parameter list.
 *
 * @param {String|Number|Boolean|Component} key The key (or index) for the desired parameter.
 * @returns {Component} The parameter value associated with the key.
 */
Parameters.prototype.getValue = function(key) {
    var value;
    if (this.collection.type === utilities.types.CATALOG) {
        value = this.collection.getValue(key);
        if (value === undefined) {
            value = this.collection.getItem(key).value;
        }
    } else {
        value = this.collection.getItem(key);
    }
    return value;
};
