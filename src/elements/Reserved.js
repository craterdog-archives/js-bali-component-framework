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
 * This element class captures the state and methods associated with a
 * reserved identifier.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new reserved identifier using the specified value.
 *
 * @param {String} value The value of the reserved identifier.
 * @param {Parameters} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Reserved} The new reserved identifier.
 */
const Reserved = function(value, parameters, debug) {
    abstractions.Element.call(this, '$Reserved', parameters, debug);
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Reserved', '$Reserved', '$value', value, [
            '/javascript/String'
        ]);
    }

    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*(-[0-9]+)?$/g.test(value)) {
        const exception = new Exception({
            $module: '/bali/elements/Reserved',
            $procedure: '$Reserved',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid reserved symbol value was passed to the constructor.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;
};
Reserved.prototype = Object.create(abstractions.Element.prototype);
Reserved.prototype.constructor = Reserved;
exports.Reserved = Reserved;


// PUBLIC METHODS

/**
 * This method returns whether or not this component supports the specified interface.
 *
 * @param {String} iface The symbol for the interface in question.
 * @returns {Boolean} Whether or not this component supports the specified interface.
 */
Reserved.prototype.supportsInterface = function(iface) {
    return iface === '$Literal';
};


/**
 * This method returns whether or not this reserved symbol has a meaningful value. Reserved
 * symbols always have a meaningful value.
 *
 * @returns {Boolean} Whether or not this reserved symbol has a meaningful value.
 */
Reserved.prototype.toBoolean = function() {
    return true;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Reserved.prototype.acceptVisitor = function(visitor) {
    visitor.visitReserved(this);
};
