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
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the sorter.
 * @returns {Sorter} The new sorter.
 */
const Sorter = function(ancestry, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        [],
        undefined,  // must be undefined to avoid infinite loop
        debug
    );
    return this;
};
Sorter.prototype = Object.create(Component.prototype);
Sorter.prototype.constructor = Sorter;
exports.Sorter = Sorter;


/**
 * This method sorts the items in the specified collection.
 * 
 * @param {Sortable} collection The sortable collection to be sorted.
 * @param {Comparator} comparator An optional comparator agent to be used to
 * do pair-wise comparisons of the items being sorted.
 */
Sorter.prototype.sortCollection = function(collection, comparator) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$sortCollection',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};

