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
 * boolean element.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Exception = require('../structures/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new boolean element using the specified value.
 *
 * @param {Object} value The value of the boolean.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Bulean} The new boolean element.
 */
const Bulean = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        ['/bali/elements/Bulean'],
        [
            '/bali/interfaces/Logical',
            '/bali/interfaces/Discrete'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Bulean', '$Bulean', '$value', value, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String'
        ]);
    }

    switch (typeof value) {
        case 'undefined':
            value = false;
            break;
        case 'boolean':
            // already a boolean
            break;
        case 'number':
            if (value !== 0 && value !== 1) {
                const exception = new Exception({
                    $module: '/bali/elements/Boolean',
                    $procedure: '$Boolean',
                    $exception: '$invalidParameter',
                    $parameter: value,
                    $text: 'An invalid numeric value was passed to the constructor.'
                });
                if (this.debug > 0) console.error(exception.toString());
                throw exception;
            }
            value = !!value;  // convert number to boolean
            break;
        case 'string':
            if (value !== 'false' && value !== 'true') {
                const exception = new Exception({
                    $module: '/bali/elements/Boolean',
                    $procedure: '$Boolean',
                    $exception: '$invalidParameter',
                    $parameter: value,
                    $text: 'An invalid string value was passed to the constructor.'
                });
                if (this.debug > 0) console.error(exception.toString());
                throw exception;
            }
            if (value !== 'false') value = true;
        default:
            const exception = new Exception({
                $module: '/bali/elements/Boolean',
                $procedure: '$Boolean',
                $exception: '$invalidParameter',
                $parameter: value,
                $text: 'An invalid boolean value was passed to the constructor.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;

};
Bulean.prototype = Object.create(abstractions.Element.prototype);
Bulean.prototype.constructor = Bulean;
exports.Boolean = Bulean;


// PUBLIC METHODS

/**
 * This method returns the value of this boolean.
 *
 * @returns {Boolean} The value of this boolean.
 */
Bulean.prototype.toBoolean = function() {
    return this.getValue();
};


/**
 * This method returns the boolean as an integer equal to zero or one.
 *
 * @returns {Number} The boolean as an integer equal to zero or one.
 */
Bulean.prototype.toInteger = function() {
    if (this.getValue()) return 1;
    return 0;
};


/**
 * This method returns a real number representation of the boolean element.
 *
 * @returns {number} The real number representation of the boolean element.
 */
Bulean.prototype.toReal = function() {
    return this.toInteger();
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Bulean.prototype.acceptVisitor = function(visitor) {
    visitor.visitBoolean(this);
};


// PUBLIC FUNCTIONS

/**
 * This function returns a new boolean that is the logical NOT of the specified
 * boolean.
 *
 * @param {Bulean} value The boolean.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Bulean} The resulting boolean.
 */
Bulean.not = function(value, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Bulean', '$not', '$value', value, [
            '/bali/elements/Bulean'
        ]);
    }
    const result = new Bulean(!value.getValue(), value.getParameters(), debug);
    return result;
};


/**
 * This function returns a new boolean that is the logical AND of the two specified
 * probabilities.
 *
 * @param {Bulean} first The first boolean.
 * @param {Bulean} second The second boolean.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Bulean} The resulting boolean.
 */
Bulean.and = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Bulean', '$and', '$first', first, [
            '/bali/elements/Bulean'
        ]);
        validator.validateType('/bali/elements/Bulean', '$and', '$second', second, [
            '/bali/elements/Bulean'
        ]);
    }
    const value = first.getValue() && second.getValue();
    const result = new Bulean(value, first.getParameters(), debug);
    return result;
};


/**
 * This function returns a new boolean that is the logical SANS of the two specified
 * probabilities.
 *
 * @param {Bulean} first The first boolean.
 * @param {Bulean} second The second boolean.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Bulean} The resulting boolean.
 */
Bulean.sans = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Bulean', '$sans', '$first', first, [
            '/bali/elements/Bulean'
        ]);
        validator.validateType('/bali/elements/Bulean', '$sans', '$second', second, [
            '/bali/elements/Bulean'
        ]);
    }
    const value = first.getValue() && !second.getValue();
    const result = new Bulean(value, first.getParameters(), debug);
    return result;
};


/**
 * This function returns a new boolean that is the logical OR of the two specified
 * probabilities.
 *
 * @param {Bulean} first The first boolean.
 * @param {Bulean} second The second boolean.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Bulean} The resulting boolean.
 */
Bulean.or = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Bulean', '$or', '$first', first, [
            '/bali/elements/Bulean'
        ]);
        validator.validateType('/bali/elements/Bulean', '$or', '$second', second, [
            '/bali/elements/Bulean'
        ]);
    }
    const value = first.getValue() || second.getValue();
    const result = new Bulean(value, first.getParameters(), debug);
    return result;
};


/**
 * This function returns a new boolean that is the logical XOR of the two specified
 * probabilities.
 *
 * @param {Bulean} first The first boolean.
 * @param {Bulean} second The second boolean.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Bulean} The resulting boolean.
 */
Bulean.xor = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Bulean', '$xor', '$first', first, [
            '/bali/elements/Bulean'
        ]);
        validator.validateType('/bali/elements/Bulean', '$xor', '$second', second, [
            '/bali/elements/Bulean'
        ]);
    }
    const value = (first.getValue() && !second.getValue()) || (!first.getValue() && second.getValue());
    const result = new Bulean(value, first.getParameters(), debug);
    return result;
};
