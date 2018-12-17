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
 * This element class captures the state and methods associated with a filter element.
 */
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates a new filter element.
 * 
 * @constructor
 * @param {String} value The value of the filter element.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Filter} The new filter element.
 */
function Filter(value, parameters) {
    Element.call(this, types.FILTER, parameters);
    if (!value) value = 'none';  // default value
    switch (value) {
        case 'none':
        case 'any':
            break;
        default:
            throw new Error('FILTER: An invalid value was passed into the constructor: ' + value);
    }
    if (Filter.NONE && value === 'none') return Filter.NONE;
    if (Filter.ANY && value === 'any') return Filter.ANY;
    this.value = value;
    this.setSource(value);
    return this;
}
Filter.prototype = Object.create(Element.prototype);
Filter.prototype.constructor = Filter;
exports.Filter = Filter;


// common constants
Filter.NONE = new Filter('none');
Filter.ANY = new Filter('any');
