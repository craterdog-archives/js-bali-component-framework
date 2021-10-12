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
const moduleName = '/bali/elements/Boolean';
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new boolean element using the specified value.
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
 * @param {Object} value The value of the boolean.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Bulean} The new boolean element.
 */
const Bulean = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        [ moduleName ],
        [
            '/bali/libraries/Logical',
            '/bali/interfaces/Discrete'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Boolean', '$value', value, [
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
                const exception = new abstractions.Exception({
                    $module: moduleName,
                    $procedure: '$Boolean',
                    $exception: '$invalidParameter',
                    $parameter: value,
                    $text: '"An invalid numeric value was passed to the constructor."'
                }, undefined, this.debug);
                throw exception;
            }
            value = !!value;  // convert number to boolean
            break;
        case 'string':
            if (value !== 'false' && value !== 'true') {
                const exception = new abstractions.Exception({
                    $module: moduleName,
                    $procedure: '$Boolean',
                    $exception: '$invalidParameter',
                    $parameter: value,
                    $text: '"An invalid string value was passed to the constructor."'
                }, undefined, this.debug);
                throw exception;
            }
            if (value !== 'false') value = true;
        default:
            const exception = new abstractions.Exception({
                $module: moduleName,
                $procedure: '$Boolean',
                $exception: '$invalidParameter',
                $parameter: value,
                $text: '"An invalid boolean value was passed to the constructor."'
            }, undefined, this.debug);
            throw exception;
    }

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


// LOGICAL LIBRARY FUNCTIONS

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
        abstractions.Component.validateArgument(moduleName, '$not', '$value', value, [
            '/bali/elements/Boolean'
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
        abstractions.Component.validateArgument(moduleName, '$and', '$first', first, [
            '/bali/elements/Boolean'
        ]);
        abstractions.Component.validateArgument(moduleName, '$and', '$second', second, [
            '/bali/elements/Boolean'
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
        abstractions.Component.validateArgument(moduleName, '$sans', '$first', first, [
            '/bali/elements/Boolean'
        ]);
        abstractions.Component.validateArgument(moduleName, '$sans', '$second', second, [
            '/bali/elements/Boolean'
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
        abstractions.Component.validateArgument(moduleName, '$or', '$first', first, [
            '/bali/elements/Boolean'
        ]);
        abstractions.Component.validateArgument(moduleName, '$or', '$second', second, [
            '/bali/elements/Boolean'
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
        abstractions.Component.validateArgument(moduleName, '$xor', '$first', first, [
            '/bali/elements/Boolean'
        ]);
        abstractions.Component.validateArgument(moduleName, '$xor', '$second', second, [
            '/bali/elements/Boolean'
        ]);
    }
    const value = (first.getValue() && !second.getValue()) || (!first.getValue() && second.getValue());
    const result = new Bulean(value, first.getParameters(), debug);
    return result;
};

