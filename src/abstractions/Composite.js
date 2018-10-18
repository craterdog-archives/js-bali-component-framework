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
 * This abstract class defines the invariant methods that all composite components must support.
 */
var Component = require('./Component').Component;
var formatter = require('../utilities/DocumentFormatter');
var parser = require('../utilities/DocumentParser');


/**
 * The constructor for the Composite class.
 * 
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this composite. 
 * @returns {Composite} The new composite component.
 */
function Composite(type, parameters) {
    Component.call(this, type, parameters);
    return this;
}
Composite.prototype = Object.create(Component.prototype);
Composite.prototype.constructor = Composite;
exports.Composite = Composite;


// PUBLIC METHODS

/**
 * This abstract method returns an array containing the subcomponents in this composite
 * component. It must be implemented by a subclass.
 * 
 * @returns {Array} An array containing the subcomponents in this composite component.
 */
Composite.prototype.toArray = function() {
    throw new Error('COMPOSITE: Abstract method toArray() must be implemented by a concrete subclass.');
};


/**
 * This method compares this composite with another object for equality.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean}
 */
Composite.prototype.equalTo = function(that) {
    if (!that) return false;
    if (this === that) return true;  // same object
    if (this.prototype !== that.prototype) return false;
    var thisArray = this.toArray();
    var thatArray = that.toArray();
    if (thisArray.length !== thatArray.length) return false;
    for (var i = 0; i < thisArray.length; i++) {
        if (!thisArray[i].equalTo(thatArray[i])) return false;
    }
    return true;
};


/**
 * This method compares this composite with another object for natural order.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that
 */
Composite.prototype.compareTo = function(that) {
    if (!that) return 1;  // all composites are greater than null/undefined
    if (this === that) return 0;  // same object
    var result = this.constructor.name.localeCompare(that.constructor.name);
    var thisArray = this.toArray();
    var thatArray = that.toArray();
    var result = 0;
    for (var i = 0; i < thisArray.length && i < thatArray.length; i++) {
        result = thisArray[i].compareTo(thatArray[i]);
        if (result !== 0) return result;
    }
    if (thisArray.length < thatArray.length) {
        return -1;
    } else if (thisArray.length > thatArray.length) {
        return 1;
    } else {
        return 0;
    }
};


/**
 * This method provides the canonical way to export a Bali component as Bali source code.
 * 
 * @param {String} indentation A blank string that will be prepended to each indented line in
 * the source code.
 * @returns {String} The Bali source code for the component.
 */
Composite.prototype.toSource = function(indentation) {
    var source = formatter.formatTree(this, indentation);
    return source;
};


Composite.asComponent = function(value) {
    var component;
    switch (value.constructor.name) {
        case 'String':
            component = parser.parseExpression(value);
            break;
        case 'Boolean':
            // parse it's string value
            component = parser.parseElement(String(value));
            break;
        case 'Number':
            // parse it's uppercase string value to handle exponents correctly
            component = parser.parseElement(String(value).toUpperCase());
            break;
        default:
            // it's already a component, leave it as is
            component = value;
    }
    return component;
};
