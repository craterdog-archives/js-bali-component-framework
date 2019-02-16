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

    // the parameters are immutable so the methods are included in the constructor
    const duplicator = new utilities.Duplicator();
    const copy = duplicator.duplicateComponent(collection);

    this.getCollection = function() { return copy; };

    this.toArray = function() {
        const array = copy.toArray();
        return array;
    };
    
    this.acceptVisitor = function(visitor) {
        visitor.visitParameters(this);
    };
    
    this.getSize = function() {
        const size = copy.getSize();
        return size;
    };
    
    this.getParameter = function(key, index) {
        var value;
        index = index || 1;  // default is the first parameter
        if (copy.getTypeId() === utilities.types.CATALOG) {
            value = copy.getValue(key);
        } else {
            value = copy.getItem(index);
        }
        return value;
    };

    this.setParameter = function(key, value, index) {
        index = index || 1;  // default is the first parameter
        if (copy.getTypeId() === utilities.types.CATALOG) {
            copy.setValue(key, value);
        } else {
            copy.setItem(index, value);
        }
    };

    return this;
}
Parameters.prototype = Object.create(abstractions.Composite.prototype);
Parameters.prototype.constructor = Parameters;
exports.Parameters = Parameters;
