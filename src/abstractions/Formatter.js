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
const utilities = require('../utilities');
const Component = require('./Component').Component;
const EOL = '\n';  // the POSIX end of line character


/**
 * This constructor creates a new formatter component that can be used to format components.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the formatter.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Formatter} The new formatter.
 */
const Formatter = function(ancestry, debug) {
    Component.call(
        this,
        ancestry.concat('/bali/abstractions/Formatter'),
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
 * This abstract method formats the specified component as a formal source string.
 *
 * @param {Component} component The component to be formatted.
 * @returns {String} The formal source string.
 */
Formatter.prototype.asSource = function(component) {
    const exception = new abstractions.Exception({
        $module: '/bali/abstractions/Formatter',
        $procedure: '$asSource',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method formats the specified component as a formal document.
 *
 * @param {Component} component The component to be formatted.
 * @returns {String} The formal document.
 */
Formatter.prototype.asDocument = function(component) {
    return this.asSource(component) + EOL;
};

