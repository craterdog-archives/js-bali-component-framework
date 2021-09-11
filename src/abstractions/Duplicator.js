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
const utilities = require('../utilities');
const Component = require('./Component').Component;


/**
 * This constructor creates a new duplicator component that can be used to copy components.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the duplicator.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Duplicator} The new duplicator.
 */
const Duplicator = function(ancestry, debug) {
    Component.call(
        this,
        ancestry.concat('/bali/abstractions/Duplicator'),
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
 * This abstract method duplicates the specified component.
 *
 * @param {Component} component The component to be duplicated.
 * @returns {Component} A duplicate component.
 */
Duplicator.prototype.duplicateComponent = function(component) {
    const exception = new utilities.Exception({
        $module: '/bali/abstractions/Duplicator',
        $procedure: '$duplicateComponent',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};

