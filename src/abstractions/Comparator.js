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
 * This abstract class defines the invariant methods that all comparators must support.
 */
const moduleName = '/bali/abstractions/Comparator';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;


/**
 * This constructor creates a new comparator object that can be used to compare two objects
 * using any optional parameters that are used to parameterize its type.
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
 * @param {Array} ancestry An array of type names that make up the ancestry for the comparator.
 * @returns {Comparator} The new comparator.
 */
const Comparator = function(ancestry, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        [],
        undefined,  // must be undefined to avoid infinite loop
        debug
    );
    return this;
};
Comparator.prototype = Object.create(Component.prototype);
Comparator.prototype.constructor = Comparator;
exports.Comparator = Comparator;


// PUBLIC METHODS

/**
 * This method determines whether or not two components are equal.
 *
 * @param {Component} firstComponent The first component to be compared.
 * @param {Component} secondComponent The second component to be compared.
 * @returns {Boolean} Whether or not the two components are equal.
 *
 */
Comparator.prototype.areEqual = function(firstComponent, secondComponent) {
    return this.ranking(firstComponent, secondComponent) === 0;
};


/**
 * This method compares two components for their ordering.
 *
 * @param {Component} first The first component to be compared.
 * @param {Component} second The second component to be compared.
 * @returns {Number} -1 if first < second; 0 if first === second; and 1 if first > second.
 *
 */
Comparator.prototype.ranking = function(first, second) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$rank',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method determines whether or not the specified component matches the
 * specified pattern. The pattern may be a bali.pattern element or an composite component
 * containing bali.pattern attributes. In either case, the bali.patterns are evaluated
 * against the string version of the component or its corresponding attribute. If the
 * pattern does not consist of any bali.pattern elements then a strict equality comparison
 * of the attributes listed in the pattern is used for matching. Note, this means that the
 * component may contain additional attributes not found in the pattern component and
 * it still matches.
 *
 * @param {Component} component The component to be tested.
 * @param {Component} pattern The pattern to be used for matching.
 * @returns {Boolean} Whether or not this component matches the pattern.
 */
Comparator.prototype.doesMatch = function(component, pattern) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$doesMatch',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};

