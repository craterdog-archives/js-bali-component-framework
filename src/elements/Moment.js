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
 * This element class captures the state and methods associated with a moment
 * in time.
 */
const moment = require('moment');
const utilities = require('../utilities');
const abstractions = require('../abstractions');

const FORMATS = [
    'Y',
    'Y-MM',
    'Y-MM-DD',
    'Y-MM-DDTHH',
    'Y-MM-DDTHH:mm',
    'Y-MM-DDTHH:mm:ss',
    'Y-MM-DDTHH:mm:60',  // HACK:JavaScript doesn't handle leap seconds
    'Y-MM-DDTHH:mm:ss.SSS',
    'Y-MM-DDTHH:mm:60.SSS'  // HACK:JavaScript doesn't handle leap seconds
];


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new moment in time.
 * 
 * @param {String} value The ISO compliant value of the date/time.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Moment} The new moment in time.
 */
function Moment(value, parameters) {
    if (value === undefined || value === null) value = moment().format(FORMATS[7]);  // current moment
    abstractions.Element.call(this, utilities.types.MOMENT, parameters);
    FORMATS.find(function(format) {
        const attempt = moment(value, format, true);  // true means strict mode
        if (attempt.isValid()) {
            this.value = attempt;
            this.format = format;
            return true;
        } 
        return false;
    }, this);
    if (!this.value) throw new Error('BUG: An invalid moment value was passed to the constructor: ' + value);
    this.setSource(this.value.format(this.format));
    return this;
}
Moment.prototype = Object.create(abstractions.Element.prototype);
Moment.prototype.constructor = Moment;
exports.Moment = Moment;


/**
 * This constructor creates an immutable instance of a moment in time using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the moment in time.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Moment} The new moment in time.
 */
Moment.fromLiteral = function(literal, parameters) {
    const value = literal.slice(1, -1);  // remove the '<' and '>' delimiters
    // TODO: adjust for timezone offset based on location specified in parameters
    const moment = new Moment(value, parameters);
    return moment;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Boolean} asCanonical Whether or not the element should be formatted using its
 * default format.
 * @returns {String} The corresponding literal string representation.
 */
Moment.prototype.toLiteral = function(asCanonical) {
    const value = this.value.format(this.format);
    const literal = '<' + value + '>';  // add the '<' and '>' delimiters
    return literal;
};


/**
 * This method compares two moments for ordering.
 * 
 * @param {Moment} that The other moment to be compared with. 
 * @returns {Number} 1 if greater, 0 if equal, and -1 if less.
 */
Moment.prototype.comparedTo = function(that) {
    if (!that) return 1;  // anything is greater than nothing
    const thisType = this.constructor.name;
    const thatType = that.constructor.name;
    if (thisType !== thatType) {
        return thisType.localeCompare(thatType);
    }
    if (this.value.isBefore(that.value)) return -1;
    if (this.value.isAfter(that.value)) return 1;
    return 0;
};
