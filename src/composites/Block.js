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
 * This composite class implements a code block component that makes up part of
 * composite instruction clauses.
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new code block component with optional parameters that are
 * used to parameterize its behavior.
 * 
 * @param {Procedure} procedure The procedure that is contained within the code block.
 * @returns {Block} A new code block component.
 */
function Block(procedure) {
    Composite.call(this, types.ASSOCIATION);
    this.procedure = procedure;
    this.complexity += this.procedure.complexity;
    this.complexity += 2;  // account for the '{' '}' delimiters
    return this;
}
Block.prototype = Object.create(Composite.prototype);
Block.prototype.constructor = Block;
exports.Block = Block;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this code block.
 */
Block.prototype.accept = function(visitor) {
    visitor.visitBlock(this);
};


/**
 * This method returns an array containing the procedure for this code block.
 * 
 * @returns {Array} An array containing the procedure for this code block.
 */
Block.prototype.toArray = function() {
    var array = [];
    array.push(this.procedure);
    return array;
};
