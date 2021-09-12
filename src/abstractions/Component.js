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
 * This abstract class defines the invariant methods that all components must support.
 */


/**
 * This constructor creates a new component with the specified ancestry and interfaces candidate
 * with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize this component.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Component} The new component.
 */
const Component = function(ancestry, interfaces, parameters, debug) {
    ancestry = ancestry || [];
    ancestry = ancestry.concat('/bali/abstractions/Component');
    interfaces = interfaces || [];
    interfaces = interfaces.concat('/bali/interfaces/Reflective');
    parameters = parameters || undefined;  // must be undefined to avoid infinite loop
    this.debug = debug || 0;  // default value

    // Reflective Interface

    this.isComponent = true;

    this.isParameterized = function() {
        return !!this.getParameters();
    };

    this.getParameter = function(key) {
        if (parameters) return parameters.getAttribute(key);
    };

    this.setParameter = function(key, value) {
        parameters = parameters || this.componentize({});
        parameters.setAttribute(key, value);
    };

    this.getParameters = function() {
        return parameters;
    };

    this.setParameters = function(object) {
        if (object) parameters = this.componentize(object);
    };

    this.setParameters(parameters);

    this.isType = function(type) {
        for (const candidate of ancestry) {
            if (candidate === type) return true;
        }
        return false;
    };

    this.getType = function() {
        return ancestry[0];
    };

    this.getAncestry = function() {
        return ancestry;
    };

    this.supportsInterface = function(type) {
        for (const candidate of interfaces) {
            if (candidate === type) return true;
        }
        return false;
    };

    this.getInterfaces = function() {
        return interfaces;
    };

    return this;
};
Component.prototype.constructor = Component;
exports.Component = Component;


// Standard Methods

/**
 * This method returns a boolean value for this component. It allows each component to be used as a
 * boolean in a condition check that determines whether of not the component has a meaningful
 * value. Each component decides what is meaningful. The default response is true.
 *
 * @returns {Boolean} Whether or not this component has a meaningful value.
 */
Component.prototype.toBoolean = function() {
    return true;
};


/**
 * This method returns a string representation of the component. The actual method is defined in the
 * index.js file to avoid circular dependencies.
 *
 * @returns {String} The corresponding string representation.
 */
Component.prototype.toString = function() {
    const exception = new Exception({
        $module: '/bali/abstractions/Component',
        $procedure: '$toString',
        $exception: '$notDefined',
        $text: 'This method gets attached to this class when the index.js file is loaded.'
    });
    throw exception;
};


/**
 * This method returns the unique hash value for this component.
 *
 * @returns {Number} The unique hash value for this component.
 */
Component.prototype.getHash = function() {
    var hash = 0;
    const source = this.toString();
    if (source.length === 0) return hash;
    for (var i = 0; i < source.length; i++) {
        const character = source.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash |= 0;  // truncate to a 32 bit integer
    }
    return hash;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this component.
 */
Component.prototype.acceptVisitor = function(visitor) {
    visitor.visitComponent(this);
};
