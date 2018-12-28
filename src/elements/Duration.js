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
 * This element class captures the state and methods associated with a time
 * duration element.
 */
const duration = require('moment').duration;
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new duration element.
 * 
 * @param {String} value The value of the duration.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Duration} The new duration element.
 */
function Duration(value, parameters) {
    Element.call(this, types.DURATION, parameters);
    if (value === undefined || value === null) value = '~P0D';  // default value
    this.duration = duration(value.slice(1));  // remove leading '~'
    this.setSource('~' + this.duration.toISOString());  // make it canonical
    return this;
}
Duration.prototype = Object.create(Element.prototype);
Duration.prototype.constructor = Duration;
exports.Duration = Duration;


/**
 * This method returns the number of milliseconds of the duration.
 * 
 * @returns {number} The number of milliseconds of the duration.
 */
Duration.prototype.toNumber = function() {
    return this.duration.asMilliseconds();
};
