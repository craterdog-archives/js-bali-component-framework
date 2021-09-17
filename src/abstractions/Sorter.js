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
 * This abstract class defines the invariant methods that all sorters must support.
 */
const moduleName = '/bali/abstractions/Sorter';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;


/**
 * This constructor creates a new sorter component that can be used to sort items in a collection.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the sorter.
 * @param {Comparator} comparator A comparator agent to be used to do pair-wise comparisons of
 * the items being sorted.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Sorter} The new sorter.
 */
const Sorter = function(ancestry, comparator, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        [],
        undefined,  // must be undefined to avoid infinite loop
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Sorter', '$comparator', comparator, [
            '/bali/abstractions/Comparator'
        ]);
    }

    this.getComparator = function() {
        return comparator;
    };

    return this;
};
Sorter.prototype = Object.create(Component.prototype);
Sorter.prototype.constructor = Sorter;
exports.Sorter = Sorter;


/**
 * This method sorts the items in the specified collection.
 * 
 * @param {Sortable} collection The sortable collection to be sorted.
 */
Sorter.prototype.sortCollection = function(collection) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$sortCollection',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    }, undefined, this.debug);
    throw exception;
};

