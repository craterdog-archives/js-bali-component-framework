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
 * This element class captures the state and methods associated with a pattern element.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new pattern element.
 * 
 * @constructor
 * @param {RegExp} value A regular expression for the pattern element.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Pattern} The new pattern element.
 */
function Pattern(value, parameters) {
    abstractions.Element.call(this, utilities.types.PATTERN, parameters);
    this.value = value || new RegExp('\u0000');  // default value
    this.setSource(this.toLiteral());
    return this;
}
Pattern.prototype = Object.create(abstractions.Element.prototype);
Pattern.prototype.constructor = Pattern;
exports.Pattern = Pattern;


/**
 * This constructor creates an immutable instance of a text pattern using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the text pattern.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Pattern} The new text pattern.
 */
Pattern.fromLiteral = function(literal, parameters) {
    literal = literal || 'none';
    var value;
    switch (literal) {
        case 'none':
            value = new RegExp('\u0000');  // should never find nulls in text strings
            break;
        case 'any':
            value = new RegExp('.*');  // match anything
            break;
        default:
            value = new RegExp(literal.slice(1, -2));  // remove the delimiters
    }
    const pattern = new Pattern(value, parameters);
    return pattern;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Boolean} asCanonical Whether or not the element should be formatted using its
 * default format.
 * @returns {String} The corresponding literal string representation.
 */
Pattern.prototype.toLiteral = function(asCanonical) {
    var literal;
    switch (this.value.source) {
        case '\u0000':
            literal = 'none';
            break;
        case '.*':
            literal = 'any';
            break;
        default:
            literal = '"' + this.value.source + '"?';  // add the delimiters
    }
    return literal;
};


/**
 * This method determines whether or not this pattern is matched by the source string of the
 * specified component.
 * 
 * @param {Component} component The component to be tested.
 * @returns {Boolean} Whether of not this pattern is matched by the source string of the component.
 */
Pattern.prototype.isMatchedBy = function(component) {
    return this.value.test(component.toString());
};
