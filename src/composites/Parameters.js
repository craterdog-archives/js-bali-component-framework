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
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var collections = require('../collections');


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new parameter catalog or list.
 * 
 * @param {Collection} collection The collection of parameters. 
 * @returns {Parameters} The new parameter list.
 */
function Parameters(collection) {
    Composite.call(this, types.PARAMETERS);
    this.collection = collection;
    this.complexity += collection.complexity;
    return this;
}
Parameters.prototype = Object.create(Composite.prototype);
Parameters.prototype.constructor = Parameters;
exports.Parameters = Parameters;


/**
 * This function creates a new parameter list using the specified collection as the
 * parameter values.
 * 
 * @param {Array|Object|Collection} collection The collection containing the initial
 * parameters to be used to seed the new parameter list.
 * @returns {Parameters} The new parameter list.
 */
Parameters.fromCollection = function(collection) {
    var type = collection.constructor.name;
    switch (type) {
        case 'Array':
        case 'List':
        case 'Queue':
        case 'Set':
        case 'Stack':
            collection = collections.List.fromCollection(collection);
            break;
        case 'Object':
        case 'Catalog':
            collection = collections.Catalog.fromCollection(collection);
            break;
        default:
            throw new Error('BUG: A parameters list cannot be initialized using a collection of type: ' + type);
    }
    var parameters = new Parameters(collection);
    return parameters;
};


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
    var size = this.collection.getSize();
    return size;
};


/**
 * This method returns an array containing the parameters in this list.
 * 
 * @returns {Array} An array containing the parameters in this list.
 */
Parameters.prototype.toArray = function() {
    var array = this.collection.toArray();
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
    if (this.collection.constructor.name === 'Catalog') {
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
    if (this.collection.constructor.name === 'Catalog') {
        value = this.collection.getValue(key);
        if (value === undefined) {
            value = this.collection.getItem(key).value;
        }
    } else {
        value = this.collection.getItem(key);
    }
    return value;
};
