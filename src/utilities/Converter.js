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
 * This composite class implements a source code component that can be assigned as
 * the value of an association.
 */
const abstractions = require('../abstractions');
const elements = require('../elements');


// PUBLIC FUNCTIONS

/**
 * This function converts a JS primitive type into its corresponding component.
 * NOTE: it's tempting to use the parser in this method but that would introduce a
 * circular dependency since the parser depends on all component classes. Here we
 * restrict the dependency to just the elements which are under a different
 * dependency tree from the composites.  Yes, it is a TOTAL KLUDGE!
 * 
 * @param {String|Number|Boolean|Component} value The value to be converted (if necessary).
 * @returns {Component} The value as a component.
 */
exports.asComponent = function(value) {
    var component;
    switch (typeof value) {
        case 'string':
            if (value.startsWith('~P')) { // Duration must come before Angle
                component = elements.Duration.fromLiteral(value);
            } else if (value.startsWith('~')) {
                component = elements.Angle.fromLiteral(value);
            } else if (value.startsWith("'")) {
                component = elements.Binary.fromLiteral(value);
            } else if (value.match(/^<-?[1-9]/)) {
                component = elements.Moment.fromLiteral(value);
            } else if (value === 'none' || value === 'any' || value.endsWith('"?')) {
                component = elements.Pattern.fromLiteral(value);
            } else if (value.endsWith('%')) {
                component = elements.Percent.fromLiteral(value);
            } else if (value === 'false' || value === 'true' || value.startsWith('.')) {
                component = elements.Probability.fromLiteral(value);
            } else if (value.startsWith('<')) {
                component = elements.Reference.fromLiteral(value);
            } else if (value.startsWith('$$')) {  // Reserved must come before Symbol
                component = elements.Reserved.fromLiteral(value);
            } else if (value.startsWith('$')) {
                component = elements.Symbol.fromLiteral(value);
            } else if (value.startsWith('#')) {
                component = elements.Tag.fromLiteral(value);
            } else if (value.startsWith('"')) {
                component = elements.Text.fromLiteral(value);
            } else if (value.match(/^v[1-9]/)) {
                component = elements.Version.fromLiteral(value);
            } else {  // must come last
                component = new elements.Text(value);
            }
            break;
        case 'boolean':
            value = value ? 1 : 0;
            component = new elements.Probability(value);
            break;
        case 'number':
            component = new elements.Number(value);
            break;
        default:
            if (value instanceof abstractions.Component) {
                // leave it since it is already a component
                component = value;
            } else {
                throw new Error('BUG: Only primitive JS types (strings, numbers, and booleans) can be converted to components: ' + value);
            }
    }
    return component;
};
