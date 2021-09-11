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
 * This abstract method formats the specified component into a formal text string.
 *
 * @param {Component} component The component to be formatted.
 * @returns {String} The formal text string.
 */
Formatter.prototype.formatComponent = function(component) {
    const exception = new utilities.Exception({
        $module: '/bali/abstractions/Formatter',
        $procedure: '$formatComponent',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method formats the specified value as a real number consistent with the
 * Bali Document Notation™.
 *
 * @param {Number} value The real number to be formatted.
 * @returns {String} The formatted text string.
 */
Formatter.prototype.formatReal = function(value) {
    var string = Number(value.toPrecision(14)).toString();
    switch (string) {
        case '2.718281828459':
            return 'e';
        case '-2.718281828459':
            return '-e';
        case '3.1415926535898':
            return 'π';
        case '-3.1415926535898':
            return '-π';
        case '1.6180339887499':
            return 'φ';
        case '-1.6180339887499':
            return '-φ';
        case '6.2831853071796':
            return 'τ';
        case '-6.2831853071796':
            return '-τ';
        case 'Infinity':
        case '-Infinity':
            return '∞';
        case '0':
        case '-0':
            return '0';
        case 'NaN':
            return 'undefined';
        default:
            return value.toString().replace(/e\+?/g, 'E');  // convert to canonical exponent format
    }
};


/**
 * This method formats the specified value as an imaginary number consistent with the
 * Bali Document Notation™.
 *
 * @param {Number} value The real number to be formatted.
 * @returns {String} The formatted text string.
 */
Formatter.prototype.formatImaginary = function(value) {
    var literal = formatReal(value);
    switch (literal) {
        case 'undefined':
        case '∞':
            return literal;
        case 'e':
        case '-e':
        case 'π':
        case '-π':
        case 'φ':
        case '-φ':
        case 'τ':
        case '-τ':
            return literal + ' i';  // a space is required for numeric symbols
        default:
            return literal + 'i';
    }
};

