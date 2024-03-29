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
 * This abstract class defines the invariant methods that all elements must support.
 */
const moduleName = '/bali/abstractions/Element';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;


/**
 * This constructor creates a new elemental component with the specified ancestry and interfaces
 * with any optional parameters that are used to parameterize its type.
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
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Element} The new element.
 */
const Element = function(ancestry, interfaces, parameters, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        interfaces.concat('/bali/interfaces/Literal'),
        parameters,
        debug
    );

    this.setParameter = function(key, value) {
        const exception = new Exception({
            $module: moduleName,
            $procedure: '$setParameter',
            $exception: '$immutableElement',
            $key: key,
            $value: value,
            $text: '"All elements are immutable."'
        }, undefined, this.debug);
        throw exception;
    };

    this.setParameters = function(parameters) {
        const exception = new Exception({
            $module: moduleName,
            $procedure: '$setParameters',
            $exception: '$immutableElement',
            $parameters: parameters,
            $text: '"All elements are immutable."'
        }, undefined, this.debug);
        throw exception;
    };

    return this;
};
Element.prototype = Object.create(Component.prototype);
Element.prototype.constructor = Element;
exports.Element = Element;


// PUBLIC METHODS

/**
 * This method returns the raw value of the element as a native Javascript type.
 * Each element decides what type this is.  This method must be implemented by a subclass.
 *
 * @returns {Object} The raw value of the element.
 */
Element.prototype.getValue = function() {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$getValue',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method returns the literal string value for this element.  The literal does not
 * include any parameterization of the element.
 *
 * @returns {String} The literal string value for this element.
 */
Element.prototype.toLiteral = function() {
    const copy = new this.constructor(this.getValue(), undefined, this.debug);
    return copy.toString();
};

