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
 * in time element.
 */
var moment = require('moment');
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;

var FORMATS = [
    '<Y>',
    '<Y-MM>',
    '<Y-MM-DD>',
    '<Y-MM-DDTHH>',
    '<Y-MM-DDTHH:mm>',
    '<Y-MM-DDTHH:mm:ss>',
    '<Y-MM-DDTHH:mm:60>',  // HACK:JavaScript doesn't handle leap seconds
    '<Y-MM-DDTHH:mm:ss.SSS>',
    '<Y-MM-DDTHH:mm:60.SSS>'  // HACK:JavaScript doesn't handle leap seconds
];


/**
 * This constructor creates a new moment element.
 * 
 * @param {String} value The value of the moment.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Moment} The new moment element.
 */
function Moment(value, parameters) {
    if (typeof value === 'undefined' || value === null) value = moment().format(FORMATS[7]);  // current moment
    Element.call(this, types.MOMENT, parameters);
    FORMATS.find(function(format) {
        var attempt = moment(value, format, true);  // true means strict mode
        if (attempt.isValid()) {
            this.moment = attempt;
            this.format = format;
            return true;
        } 
        return false;
    }, this);
    if (!this.moment) throw new Error('MOMENT: An invalid value was passed to the constructor: ' + value);
    this.setSource(this.moment.format(this.format));
    return this;
}
Moment.prototype = Object.create(Element.prototype);
Moment.prototype.constructor = Moment;
exports.Moment = Moment;


/**
 * This method compares two moments for ordering.
 * 
 * @param {Moment} that The other moment to be compared with. 
 * @returns {Number} 1 if greater, 0 if equal, and -1 if less.
 */
Moment.prototype.comparedTo = function(that) {
    if (!that) return 1;  // anything is greater than nothing
    if (typeof this !== typeof that) {
        return this.constructor.name.localeCompare(that.constructor.name);
    }
    if (this.moment.isBefore(that.value)) return -1;
    if (this.moment.isAfter(that.value)) return 1;
    return 0;
};
