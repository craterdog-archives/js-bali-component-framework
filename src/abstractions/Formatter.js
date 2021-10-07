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
 * This abstract class defines the invariant methods that all formatters must support.
 */
const moduleName = '/bali/abstractions/Formatter';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;
const EOL = '\n';  // the POSIX end of line character


/**
 * This constructor creates a new formatter component that can be used to format components.
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
 * @param {Array} ancestry An array of type names that make up the ancestry for the formatter.
 * @returns {Formatter} The new formatter.
 */
const Formatter = function(ancestry, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        [],
        undefined,  // must be undefined to avoid infinite loop
        debug
    );
    return this;
};
Formatter.prototype = Object.create(Component.prototype);
Formatter.prototype.constructor = Formatter;
exports.Formatter = Formatter;


// PUBLIC METHODS

/**
 * This method formats the specified component as a formal source string.
 *
 * @param {Component} component The component to be formatted.
 * @param {Number} indentation The number of levels of indentation that should be inserted
 * to each formatted line at the top level. The default is zero.
 * @returns {String} The formal source string.
 */
Formatter.prototype.asSource = function(component, indentation) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$asSource',
        $exception: '$abstractMethod',
        $text: '"This abstract method must be implemented by each subclass."'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method formats the specified component as a formal document.
 *
 * @param {Component} component The component to be formatted.
 * @param {Number} indentation The number of levels of indentation that should be inserted
 * to each formatted line at the top level. The default is zero.
 * @returns {String} The formal document.
 */
Formatter.prototype.asDocument = function(component, indentation) {
    if (this.debug > 1) {
        this.validateArgument('$asDocument', '$component', component, [
            '/bali/abstractions/Component'
        ]);
        this.validateArgument('$asDocument', '$indentation', indentation, [
            '/javascript/Undefined',
            '/javascript/Number'
        ]);
    }
    return this.asSource(component, indentation) + EOL;
};

