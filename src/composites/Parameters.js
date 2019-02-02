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
    this.collection = new collection.constructor(collection.parameters);
    this.collection.addItems(collection);  // static so copy it
    return this;
}
Parameters.prototype = Object.create(abstractions.Composite.prototype);
Parameters.prototype.constructor = Parameters;
exports.Parameters = Parameters;


// PUBLIC METHODS

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
 * This method returns the parameter value associated with the specified index from
 * the parameter list.
 *
 * @param {Number} index The index for the parameter value.
 * @returns {Component} The parameter value associated with the index.
 */
Parameters.prototype.getParameter = function(index) {
    var parameter = this.collection.getItem(index);
    if (parameter.type === utilities.types.ASSOCIATION) {
        parameter = parameter.value;
    }
    return parameter;
};


/**
 * This method returns the parameter value associated with the specified key or index
 * from the parameter list.
 *
 * @param {String|Component} key The key for the desired parameter value.
 * @param {Number} index The index for the parameter value if no matching key is found.
 * @returns {Component} The parameter value associated with the key (or index).
 */
Parameters.prototype.getValue = function(key, index) {
    var value;
    index = index || 1;  // default is the first parameter
    if (this.collection.type === utilities.types.CATALOG) {
        value = this.collection.getValue(key);
    } else {
        value = this.collection.getItem(index);
    }
    return value;
};
