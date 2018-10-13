/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

/**
 * This collection class implements a procedure which is a procedure of statements. The indexing
 * is ordinal based and allows positive indexes starting at the beginning of the procedure or
 * negative indexes starting at the end of the procedure as follows:
 * <pre>
 *          1               2               3                 N
 *    [statement 1] . [statement 2] . [statement 3] ... [statement N]
 *         -N            -(N-1)          -(N-2)              -1
 * </pre>
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;


/**
 * The constructor creates a new empty procedure.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this procedure. 
 * @returns {Procedure} The new procedure.
 */
function Procedure(parameters) {
    Composite.call(this, types.PROCEDURE, parameters);
    this.array = [];
    return this;
}
Procedure.prototype = Object.create(Composite.prototype);
Procedure.prototype.constructor = Procedure;
exports.Procedure = Procedure;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this procedure.
 */
Procedure.prototype.accept = function(visitor) {
    visitor.visitProcedure(this);
};


/**
 * This method returns the number of statements that are currently in the procedure.
 * 
 * @returns {Number} The number of statements in the procedure.
 */
Procedure.prototype.getSize = function() {
    var size = this.array.length;
    return size;
};


/**
 * This method returns an array containing the statements in the procedure.
 * 
 * @returns {Array} An array containing the statements.
 */
Procedure.prototype.toArray = function() {
    var array = this.array.slice();  // copy the array
    return array;
};


/*
 * This method appends the specified statement to the procedure.
 * 
 * @param {Object} statement The statement to be added to the procedure.
 */
Procedure.prototype.addStatement = function(statement) {
    this.array.push(statement);
    this.length += statement.length;
    if (this.getSize() > 1) this.length += 2;  // account for the '; ' separator
};
