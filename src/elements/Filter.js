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
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

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
            value = new RegExp('\u0000');
            break;
        case 'any':
            value = new RegExp('.*');
            break;
        default:
            value = new RegExp(value);
    }
    this.value = value;
    this.setSource(this.toLiteral());
    return this;
}
Filter.prototype = Object.create(Element.prototype);
Filter.prototype.constructor = Filter;
exports.Filter = Filter;


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @returns {String} The corresponding literal string representation.
 */
Filter.prototype.toLiteral = function() {
    const source = this.value.source;
    switch (source) {
        case '\u0000':
            return 'none';
        case '.*':
            return 'any';
        default:
            return '&"' + source + '"';
    }
};

