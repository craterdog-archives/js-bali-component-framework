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

/**
 * This abstract class defines the methods that all elemental components must support.
 */
const utilities = require('../utilities');
const Component = require('./Component').Component;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new elemental component of the specified type with the optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Element} The new element.
 */
function Element(type, parameters) {
    Component.call(this, type, parameters);
    this.source = '';
    return this;
}
Element.prototype = Object.create(Component.prototype);
Element.prototype.constructor = Element;
exports.Element = Element;


// PUBLIC METHODS

/**
 * This abstract method returns the formatted literal source string for this element.
 * It must be implemented by a subclass.
 * 
 * @param {Parameters} parameters Any parameters that are needed for formatting.
 * @returns {String} The formatted literal source string for this element.
 */
Element.prototype.toLiteral = function(parameters) {
    throw new Error('BUG: The abstract method toLiteral(asCanonical) must be implemented by a concrete subclass.');
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Element.prototype.acceptVisitor = function(visitor) {
    visitor.visitElement(this);
};


Element.prototype.setSource = function(source) {
    this.source = source;
    this.complexity += source.length;
};


// PUBLIC FUNCTIONS

/**
 * This function returns the JS number for a Bali Document Notation™ numeric string.
 * 
 * @param {String} literal The literal string for the number.
 * @returns {Number} The JS number.
 */
Element.literalToNumber = function(literal) {
    switch (literal) {
        case 'e':
            return utilities.precision.E;
        case 'pi':
            return utilities.precision.PI;
        case 'phi':
            return utilities.precision.PHI;
        default:
            return Number(literal);
    }
};


/**
 * This function returns the Bali Document Notation™ representation of a JS number.
 * 
 * @param {Number} number The JS number.
 * @returns {String} The literal string for that number.
 */
Element.numberToLiteral = function(number) {
    var string = Number(number.toPrecision(14)).toString();
    switch (string) {
        case '-2.718281828459':
            return '-e';
        case '2.718281828459':
            return 'e';
        case '-3.1415926535898':
            return '-pi';
        case '3.1415926535898':
            return 'pi';
        case '-1.6180339887499':
            return '-phi';
        case '1.6180339887499':
            return 'phi';
        case 'Infinity':
        case '-Infinity':
            return 'infinity';
        case '-0':
            return '0';
        case 'NaN':
            return 'undefined';
        default:
            return number.toString().replace(/e\+?/g, 'E');  // convert to canonical exponent format
    }
};
