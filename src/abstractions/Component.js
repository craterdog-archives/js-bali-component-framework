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
 * This abstract class defines the invariant methods that all components must support.
 */
var types = require('./Types');


/**
 * The constructor for the Component class.
 * 
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this component. 
 * @returns {Component} The new component.
 */
function Component(type, parameters) {
    this.type = type;
    this.parameters = parameters;
    this.length = parameters ? parameters.length : 0;  // number of characters in its source code
    return this;
}
Component.prototype.constructor = Component;
exports.Component = Component;


// PUBLIC METHODS

Component.prototype.isSimple = function() {
    return this.length < types.TOO_BIG;
};


/**
 * This method returns a string representation of the component.
 * 
 * @returns {String} The corresponding string representation.
 */
Component.prototype.toString = function() {
    var string = this.toSource();
    return string;
};


/**
 * This method returns the unique hash value for this component.
 * 
 * @returns {Number} The unique hash value for this component.
 */
Component.prototype.getHash = function() {
    var hash = 0;
    var source = this.toSource();
    if (source.length === 0) return hash;
    for (var i = 0; i < source.length; i++) {
        var character = source.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash |= 0;  // truncate to a 32 bit integer
    }
    return hash;
};


/**
 * This method returns whether or not this component is parameterized.
 * 
 * @returns {Boolean} Whether or not this component is parameterized.
 */
Component.prototype.isParameterized = function() {
    return !!this.parameters;
};
