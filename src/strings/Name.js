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
 * This element class captures the state and methods associated with a
 * name string element.
 */
const moduleName = '/bali/strings/Name';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const collections = require('../collections');


// PUBLIC FUNCTIONS

/**
 * This function creates a new name element using the specified value.
 *
 * @param {Array} value An array containing the identifiers of the name string.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Symbol} The new name string element.
 */
const Name = function(value, parameters, debug) {
    abstractions.String.call(
        this,
        ['/bali/strings/Name'],
        [
            '/bali/libraries/Chainable'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Name', '$value', value, [
            '/javascript/Array'
        ]);
    }

    if (value.length === 0) {
        const exception = new abstractions.Exception({
            $module: '/bali/strings/Name',
            $procedure: '$Name',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: '"A name must contain at least one identifier."'
        }, undefined, this.debug);
        throw exception;
    }

    this.getValue = function() { return value.slice(); };  // make sure it is immutable

    return this;
};
Name.prototype = Object.create(abstractions.String.prototype);
Name.prototype.constructor = Name;
exports.Name = Name;


// PUBLIC METHODS

/**
 * This method returns the number of identifiers that this name string has.
 *
 * @returns {Number} The number of identifiers that this name string has.
 */
Name.prototype.getSize = function() {
    return this.getValue().length;
};


/**
 * This method returns the identifier at the specified index from this name string.
 *
 * @param {Number} index The index of the identifier to be retrieved from this name
 * string.
 * @returns {String} The identifier at the specified index.
 */
Name.prototype.getItem = function(index) {
    if (this.debug > 1) {
        this.validateArgument('$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    index = abstractions.Component.normalizedIndex(this, index) - 1;  // zero-based indexing for JS
    return this.getValue()[index];
};


/**
 * This method returns a new name string containing the identifiers associated with the specified indices.
 *
 * @param {String|Array|Sequential} indices A sequence of indices specifying which items to be retrieved.
 * @returns {Name} A new name string containing the requested identifiers.
 */
Name.prototype.getItems = function(indices) {
    if (this.debug > 1) {
        this.validateArgument('$getItems', '$indices', indices, [
            '/javascript/String',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    var array = [];
    indices = this.componentize(indices);
    const iterator = indices.getIterator();
    while (iterator.hasNext()) {
        var index = iterator.getNext().toInteger();
        index = abstractions.Component.normalizedIndex(this, index);
        const item = this.getItem(index);
        array.push(item);
    }
    return new Name(array, this.getParameters(), this.debug);
};


// CHAINABLE LIBRARY FUNCTIONS

/**
 * This function returns a new name string that contains the bytes from the second name
 * concatenated onto the end of the first name string.
 *
 * @param {Name} first The first name string to be operated on.
 * @param {Name} second The second name string to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Name} The resulting name string.
 */
Name.chain = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$chain', '$first', first, [
            '/bali/strings/Name'
        ]);
        abstractions.Component.validateArgument(moduleName, '$chain', '$second', second, [
            '/bali/strings/Name'
        ]);
    }
    const identifiers1 = first.getValue();
    const identifiers2 = second.getValue();
    const identifiers = identifiers1.concat(identifiers2);
    return new Name(identifiers, first.getParameters(), debug);
};

