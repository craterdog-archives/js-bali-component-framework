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
 * This element class captures the state and methods associated with a
 * time element.
 */
var moment = require('moment');
var FORMATS = [
    '<Y>',
    '<Y-MM>',
    '<Y-MM-DD>',
    '<Y-MM-DDTHH>',
    '<Y-MM-DDTHH:mm>',
    '<Y-MM-DDTHH:mm:ss>',
    '<Y-MM-DDTHH:mm:60>',  // HACK:JavaScript doesn't handle leap seconds
    '<Y-MM-DDTHH:mm:ss.SSS>',
    '<Y-MM-DDTHH:mm:60.SSS>',  // HACK:JavaScript doesn't handle leap seconds
    '~Y-MM-DDTHH:mm:ss.SSS',
    '~MM-DDTHH:mm:ss.SSS',
    '~DDTHH:mm:ss.SSS',
    '~HH:mm:ss.SSS',
    '~mm:ss.SSS',
    '~ss.SSS',
    '~ss',
];


/**
 * This constructor creates a new time element.
 * 
 * @param {string} value The value of the time.
 * @returns {Time} The new time element.
 */
function Time(value) {
    if (value) {
        for (var i = 0; i < FORMATS.length; i++) {
            var attempt = moment(value, FORMATS[i], true);  // true means strict mode
            if (attempt.isValid()) {
                this.value = attempt;
                this.format = FORMATS[i];
                break;
            } 
        }
        if (!this.value) throw new Error('MOMENT: An invalid value was passed to the constructor: ' + value);
    } else {
        this.value = moment();  // use the current date and time
        this.format = FORMATS[7];  // full date time format
    }
    return this;
}
Time.prototype.constructor = Time;
exports.Time = Time;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {ObjectVisitor} visitor The visitor that wants to visit this element.
 */
Time.prototype.accept = function(visitor) {
    visitor.visitTime(this);
};


/**
 * This method returns a string representation of the time element.
 * 
 * @returns {string} The string representation of the time element.
 */
Time.prototype.toString = function() {
    return this.value.format(this.format);
};
