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
 * This element class captures the state and methods associated with an
 * template element.
 */
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates a new template element.
 * 
 * @constructor
 * @param {String} value The value of the template element.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Template} The new template element.
 */
function Template(value, parameters) {
    Element.call(this, types.TEMPLATE, parameters);
    if (!value) value = 'none';  // default value
    switch (value) {
        case 'none':
        case 'any':
            break;
        default:
            throw new Error('TEMPLATE: An invalid value was passed into the constructor: ' + value);
    }
    if (typeof Template.NONE !== 'undefined' && value === 'none') return Template.NONE;
    if (typeof Template.ANY !== 'undefined' && value === 'any') return Template.ANY;
    this.value = value;
    this.setSource(value);
    return this;
}
Template.prototype = Object.create(Element.prototype);
Template.prototype.constructor = Template;
exports.Template = Template;


// common constants
Template.NONE = new Template('none');
Template.ANY = new Template('any');
