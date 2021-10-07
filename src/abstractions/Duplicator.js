/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://openformatted.org/licenses/MIT)          *
 ************************************************************************/
'use strict';

/*
 * This abstract class defines the invariant methods that all duplicators must support.
 */
const moduleName = '/bali/abstractions/Duplicator';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;


/**
 * This constructor creates a new duplicator component that can be used to copy components.
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
 * @param {Array} ancestry An array of type names that make up the ancestry for the duplicator.
 * @returns {Duplicator} The new duplicator.
 */
const Duplicator = function(ancestry, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        [],
        undefined,  // must be undefined to avoid infinite loop
        debug
    );
    return this;
};
Duplicator.prototype = Object.create(Component.prototype);
Duplicator.prototype.constructor = Duplicator;
exports.Duplicator = Duplicator;


// PUBLIC METHODS

/**
 * This method duplicates the specified component.
 *
 * @param {Component} component The component to be duplicated.
 * @returns {Component} A duplicate component.
 */
Duplicator.prototype.duplicateComponent = function(component) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$duplicateComponent',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};

