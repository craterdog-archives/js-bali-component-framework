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
var Collection = require('../abstractions/Collection').Collection;
var Association = require('../composites/Association').Association;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new empty parameter list.
 * 
 * @returns {Parameters} The new parameter list.
 */
function Parameters() {
    Collection.call(this, types.PARAMETERS);
    this.array = [];
    this.complexity += 2;  // account for the '(' ')' delimiters
    return this;
}
Parameters.prototype = Object.create(Collection.prototype);
Parameters.prototype.constructor = Parameters;
exports.Parameters = Parameters;


/**
 * This function creates a new parameter list using the specified collection to seed the
 * initial parameters in the list.
 * 
 * @param {Array|Object|Collection} collection The collection containing the initial
 * parameters to be used to seed the new parameter list.
 * @returns {Parameters} The new parameter list.
 */
Parameters.fromCollection = function(collection) {
    var parameters = new Parameters();
    var iterator;
    var type = collection.constructor.name;
    switch (type) {
        case 'Array':
            collection.forEach(function(parameter, index) {
                parameters.addParameter(index + 1, parameter);  // Bali ordinal based indexing
            });
            break;
        case 'List':
        case 'Set':
        case 'Stack':
            iterator = collection.iterator();
            var index = 1;
            while (iterator.hasNext()) {
                var parameter = iterator.getNext();
                parameters.addParameter(index++, parameter);
            }
            break;
        case 'Object':
            var keys = Object.keys(collection);
            keys.forEach(function(key) {
                var value = collection[key];
                parameters.addParameter(key, value);
            });
            break;
        case 'Catalog':
            iterator = collection.iterator();
            while (iterator.hasNext()) {
                var parameter = iterator.getNext();
                parameters.addParameter(parameter.key, parameter.value);
            }
            break;
        default:
            throw new Error('LIST: A parameters list cannot be initialized using a collection of type: ' + type);
    }
    return parameters;
};


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this parameter list.
 */
Parameters.prototype.accept = function(visitor) {
    visitor.visitParameters(this);
};


/**
 * This method returns an array containing the parameters in this list.
 * 
 * @returns {Array} An array containing the parameters in this list.
 */
Parameters.prototype.toArray = function() {
    var array = this.array.slice();  // copy the array
    return array;
};


/**
 * This method creates an empty copy of this parameters list including any parameters that were
 * used to parameterize its type.
 * 
 * @returns {Parameters} The resulting empty parameters list.
 */
Parameters.prototype.emptyCopy = function() {
    var copy = new Parameters(this.parameters);
    return copy;
};


/**
 * This method returns the number of parameters that are currently on the parameter list.
 * 
 * @returns {Number} The number of parameters that are in this list.
 */
Parameters.prototype.getSize = function() {
    var size = this.array.length;
    return size;
};


/**
 * This method retrieves the item (parameter association) that is associated with the
 * specified index from this parameters list.
 * 
 * @param {Number} index The index of the desired parameter association.
 * @returns {Association} The parameter association at that index.
 */
Parameters.prototype.getItem = function(index) {
    index = this.normalizedIndex(index);
    index--;  // convert to JS zero based indexing
    var association = this.array[index];
    return association;
};


/**
 * This method returns the value associated with the specified key in the parameter list.
 *
 * @param {String|Number|Boolean|Component} key The key for the desired parameter.
 * @returns {Component} The parameter value associated with the key.
 */
Parameters.prototype.getValue = function(key) {
    var association = this.array.find(function(association) {
        return association.key.toString() === key.toString();
    }, this);
    if (association) return association.value;
};


/**
 * This method adds a new parameter to the end of the parameter list.
 *
 * @param {String|Number|Boolean|Component} key The key for the new parameter.
 * @param {String|Number|Boolean|Component} value The new value to be associated with the key.
 */
Parameters.prototype.addParameter = function(key, value) {
    var parameter = new Association(key, value);
    this.array.push(parameter);
    if (this.isList) {
        this.complexity += parameter.value.complexity;
    } else {
        this.complexity += parameter.complexity;
    }
    if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
};
