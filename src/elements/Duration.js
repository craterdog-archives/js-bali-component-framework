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
 * duration element.
 */
var duration = require('moment').duration;
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates a new duration element.
 * 
 * @param {String} value The value of the duration.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Duration} The new duration element.
 */
function Duration(value, parameters) {
    Element.call(this, types.DURATION, parameters);
    if (typeof value === 'undefined' || value === null) value = '~P0D';  // default value
    this.duration = duration(value.slice(1));  // remove leading '~'
    this.setSource('~' + this.duration.toISOString());  // make it canonical
    return this;
}
Duration.prototype = Object.create(Element.prototype);
Duration.prototype.constructor = Duration;
exports.Duration = Duration;


/**
 * This method compares two durations for ordering.
 * 
 * @param {Duration} that The other duration to be compared with. 
 * @returns {Number} 1 if greater, 0 if equal, and -1 if less.
 */
Duration.prototype.comparedWith = function(that) {
    var thisMilliseconds = this.duration.asMilliseconds();
    var thatMilliseconds = that.value.asMilliseconds();
    if (thisMilliseconds < thatMilliseconds) return -1;
    if (thisMilliseconds > thatMilliseconds) return 1;
    return 0;
};
