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
 * This structure class implements a procedure that can be assigned as
 * the value of an association.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new procedure with optional parameters that are
 * used to parameterize its behavior.
 *
 * @param {Node} code The code that is defined by the procedure.
 * @param {Object} parameters Optional parameters used to parameterize the procedure.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Procedure} A new procedure.
 */
const Procedure = function(code, parameters, debug) {
    abstractions.Structure.call(
        this,
        ['/bali/structures/Procedure'],
        ['/bali/interfaces/Literal'],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/structures/Procedure', '$Procedure', '$code', code, [
            '/bali/structures/Code'
        ]);
    }

    this.getCode = function() { return code; };

    this.getAttribute = function(key) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/structures/Procedures', '$getAttribute', '$key', key, [
                '/bali/abstractions/Element'
            ]);
        }
        if (key.getValue() === '$code') return this.getCode();
    };

    this.setAttribute = function(key, value) {
        const exception = new Exception({
            $module: '/bali/structures/Procedure',
            $procedure: '$setAttribute',
            $exception: '$readOnly',
            $text: 'The code in a procedure cannot be updated.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    };

    return this;
};
Procedure.prototype = Object.create(abstractions.Structure.prototype);
Procedure.prototype.constructor = Procedure;
exports.Procedure = Procedure;


// PUBLIC METHODS

/**
 * This method determines whether or not this procedure is meaningful.
 *
 * @returns {Boolean} Whether or not this procedure is meaningful.
 */
Procedure.prototype.toBoolean = function() {
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


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this procedure.
 */
Procedure.prototype.acceptVisitor = function(visitor) {
    visitor.visitProcedure(this);
};
