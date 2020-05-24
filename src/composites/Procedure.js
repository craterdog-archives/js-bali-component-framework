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
 * This structure class implements a procedure component that can be assigned as
 * the value of an association.
 */
const utilities = require('../utilities');
const types = require('../types');


// PUBLIC FUNCTIONS

/**
 * This function creates a new procedure component with optional parameters that are
 * used to parameterize its behavior.
 *
 * @param {Tree} statements The statements that are contained within the procedure.
 * @param {Object} parameters Optional parameters used to parameterize the procedure.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Procedure} A new procedure component.
 */
const Procedure = function(statements, parameters, debug) {
    types.Component.call(
        this,
        ['/bali/composites/Procedure'],
        [
            '/bali/interfaces/Literal',
            '/bali/interfaces/Composite'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/composites/Procedure', '$Procedure', '$statements', statements, [
            '/bali/composites/Statements'
        ]);
    }

    this.getStatements = function() { return statements; };

    this.getSubcomponent = function(element) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/composites/Procedures', '$getSubcomponent', '$element', element, [
                '/bali/types/Element'
            ]);
        }
        if (element.getValue() === '$statements') return this.getStatements();
    };

    this.setSubcomponent = function(element, subcomponent) {
        const exception = new Exception({
            $module: '/bali/composites/Procedure',
            $procedure: '$setSubcomponent',
            $exception: '$readOnly',
            $text: 'The statements in a procedure cannot be updated.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    };

    return this;
};
Procedure.prototype = Object.create(types.Component.prototype);
Procedure.prototype.constructor = Procedure;
exports.Procedure = Procedure;


// PUBLIC METHODS

/**
 * This method returns the literal string value for this procedure.  The literal does not
 * include any parameterization of the procedure.
 *
 * @returns {String} The literal string value for this procedure.
 */
Procedure.prototype.toLiteral = function() {
    const copy = new this.constructor(this.getStatements(), undefined, this.debug);
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
