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
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new source code component with optional parameters that are
 * used to parameterize its behavior.
 * 
 * @param {Procedure} procedure The procedure that is contained within the source code.
 * @param {Parameters} parameters Optional parameters used to parameterize the source code. 
 * @returns {Source} A new source code component.
 */
function Source(procedure, parameters) {
    Composite.call(this, types.SOURCE, parameters);
    this.procedure = procedure;
    this.complexity += this.procedure.complexity;
    this.complexity += 2;  // account for the '{' '}' delimiters
    return this;
}
Source.prototype = Object.create(Composite.prototype);
Source.prototype.constructor = Source;
exports.Source = Source;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this source code.
 */
Source.prototype.accept = function(visitor) {
    visitor.visitSource(this);
};


/**
 * This method returns an array containing the procedure for this source code.
 * 
 * @returns {Array} An array containing the procedure for this source code.
 */
Source.prototype.toArray = function() {
    var array = [];
    array.push(this.procedure);
    return array;
};
