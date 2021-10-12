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
 * This composite class implements a procedure that can be assigned as
 * the value of an association.
 */
const moduleName = '/bali/trees/Procedure';
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new procedure with optional parameters that are
 * used to parameterize its behavior.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {Node} code The code that is defined by the procedure.
 * @param {Object} parameters Optional parameters used to parameterize the procedure.
 * @returns {Procedure} A new procedure.
 */
const Procedure = function(code, parameters, debug) {
    abstractions.Component.call(
        this,
        [ moduleName ],
        [
            '/bali/interfaces/Literal'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Procedure', '$code', code, [
            '/bali/trees/Code'
        ]);
    }

    this.getCode = function() { return code; };

    return this;
};
Procedure.prototype = Object.create(abstractions.Component.prototype);
Procedure.prototype.constructor = Procedure;
exports.Procedure = Procedure;


// PUBLIC METHODS

/**
 * This method determines whether or not this procedure is meaningful.
 *
 * @returns {Boolean} Whether or not this procedure is meaningful.
 */
Procedure.prototype.isSignificant = function() {
    return this.getCode().getSize() > 0;
};


/**
 * This method returns the literal string value for this procedure.  The literal does not
 * include any parameterization of the procedure.
 *
 * @returns {String} The literal string value for this procedure.
 */
Procedure.prototype.toLiteral = function() {
    const copy = new this.constructor(this.getCode(), undefined, this.debug);
    return copy.toString();
};

