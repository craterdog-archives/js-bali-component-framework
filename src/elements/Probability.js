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
 * probability element.
 */
const moduleName = '/bali/elements/Probability';
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new probability element using the specified value.
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
 * @param {Number} value The value of the probability.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Probability} The new probability element.
 */
const Probability = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        [ moduleName ],
        [
            '/bali/libraries/Logical',
            '/bali/interfaces/Discrete',
            '/bali/interfaces/Continuous'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Probability', '$value', value, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String'
        ]);
    }

    switch (typeof value) {
        case 'undefined':
            value = 0;
            break;
        case 'boolean':
            value = value ? 1 : 0;  // convert boolean to number
            break;
        case 'number':
            if (!isFinite(value) || value < 0 || value > 1) {
                const exception = new abstractions.Exception({
                    $module: moduleName,
                    $procedure: '$Probability',
                    $exception: '$invalidParameter',
                    $parameter: value,
                    $text: '"An invalid numeric value was passed to the constructor."'
                }, undefined, this.debug);
                throw exception;
            }
            // already a number
            break;
        case 'string':
            if (value === '1.') {
                value = 1;
            } else {
                const exception = new abstractions.Exception({
                    $module: moduleName,
                    $procedure: '$Probability',
                    $exception: '$invalidParameter',
                    $parameter: value,
                    $text: '"An invalid string value was passed to the constructor."'
                }, undefined, this.debug);
                throw exception;
            }
            break;
        default:
            const exception = new abstractions.Exception({
                $module: moduleName,
                $procedure: '$Probability',
                $exception: '$invalidParameter',
                $parameter: value,
                $text: '"An invalid probability value was passed to the constructor."'
            }, undefined, this.debug);
            throw exception;
    }

    this.getValue = function() { return value; };

    return this;

};
Probability.prototype = Object.create(abstractions.Element.prototype);
Probability.prototype.constructor = Probability;
exports.Probability = Probability;


// PUBLIC METHODS

/**
 * This method returns whether or not this probability is greater or equal to 0.5.
 *
 * @returns {Boolean} Whether or not this probability is greater or equal to 0.5.
 */
Probability.prototype.isSignificant = function() {
    return this.getValue() >= 0.5;
};


/**
 * This method returns the probability as an integer equal to zero or one.
 *
 * @returns {Number} The probability as an integer equal to zero or one.
 */
Probability.prototype.toInteger = function() {
    return Math.round(this.getValue());
};


/**
 * This method returns a real number representation of the probability element.
 *
 * @returns {number} The real number representation of the probability element.
 */
Probability.prototype.toReal = function() {
    return this.getValue();
};


// PUBLIC FUNCTIONS

/**
 * This function returns a new random probability.
 *
 * @param {Number} debug A number in the range 0..3.
 * @returns {Probability} The resulting random probability.
 */
Probability.random = function(debug) {
    const generator = new utilities.Generator(debug);
    const random = generator.generateProbability();
    const result = new Probability(random, undefined, debug);
    return result;
};


// LOGICAL LIBRARY FUNCTIONS

/**
 * This function returns a new probability that is the logical NOT of the specified
 * probability. It represents the likelihood that the probability is false.
 * The logical NOT is equal to:
 * <pre>
 *    pNOT = 1 - p
 * </pre>
 *
 * @param {Probability} probability The probability.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Probability} The resulting probability.
 */
Probability.not = function(probability, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$not', '$probability', probability, [
            '/bali/elements/Probability'
        ]);
    }
    const calculator = new utilities.Calculator(this.debug);
    const p = calculator.difference(1, probability.getValue());
    const result = new Probability(p, probability.getParameters(), debug);
    return result;
};


/**
 * This function returns a new probability that is the logical AND of the two specified
 * probabilities. It represents the likelihood that the first probability is true and the
 * second probability is true. The logical AND is equal to:
 * <pre>
 *    pAND = p1 * p2
 * </pre>
 *
 * @param {Probability} first The first probability.
 * @param {Probability} second The second probability.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Probability} The resulting probability.
 */
Probability.and = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$and', '$first', first, [
            '/bali/elements/Probability'
        ]);
        abstractions.Component.validateArgument(moduleName, '$and', '$second', second, [
            '/bali/elements/Probability'
        ]);
    }
    const p1 = first.getValue();
    const p2 = second.getValue();
    const calculator = new utilities.Calculator(this.debug);
    const p = calculator.product(p1, p2);
    const result = new Probability(p, first.getParameters(), debug);
    return result;
};


/**
 * This function returns a new probability that is the logical SANS of the two specified
 * probabilities. It represents the likelihood that the first probability is true but the
 * second probability is not. The logical SANS is equal to:
 * <pre>
 *    pSANS = p1 AND NOT p2
 *          = p1 * (1 - p2)
 * </pre>
 *
 * @param {Probability} first The first probability.
 * @param {Probability} second The second probability.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Probability} The resulting probability.
 */
Probability.sans = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$sans', '$first', first, [
            '/bali/elements/Probability'
        ]);
        abstractions.Component.validateArgument(moduleName, '$sans', '$second', second, [
            '/bali/elements/Probability'
        ]);
    }
    const p1 = first.getValue();
    const p2 = second.getValue();
    const calculator = new utilities.Calculator(this.debug);
    const p = calculator.product(p1, calculator.difference(1, p2));
    const result = new Probability(p, first.getParameters(), debug);
    return result;
};


/**
 * This function returns a new probability that is the logical OR of the two specified
 * probabilities. It represents the likelihood that the first probability is true or the
 * second probability is true or both are true. The logical OR is equal to:
 * <pre>
 *    pOR = NOT (NOT p1 AND NOT p2)
 *        = 1 - (1 - p1) * (1 - p2)
 *        = p1 + p2 - p1 * p2
 * </pre>
 *
 * @param {Probability} first The first probability.
 * @param {Probability} second The second probability.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Probability} The resulting probability.
 */
Probability.or = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$or', '$first', first, [
            '/bali/elements/Probability'
        ]);
        abstractions.Component.validateArgument(moduleName, '$or', '$second', second, [
            '/bali/elements/Probability'
        ]);
    }
    const p1 = first.getValue();
    const p2 = second.getValue();
    const calculator = new utilities.Calculator(this.debug);
    const p = calculator.sum(p1, p2, calculator.product(-p1, p2));
    const result = new Probability(p, first.getParameters(), debug);
    return result;
};


/**
 * This function returns a new probability that is the logical XOR of the two specified
 * probabilities. It represents the likelihood that the first probability is true or the
 * second probability is true but not both. The logical XOR is equal to:
 * <pre>
 *    pXOR = (p1 SANS p2) + (p2 SANS p1)
 *         = p1 * (1 - p2) + p2 * (1 - p1)
 *         = p1 + p2 - 2 * (p1 * p2)
 * </pre>
 *
 * @param {Probability} first The first probability.
 * @param {Probability} second The second probability.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Probability} The resulting probability.
 */
Probability.xor = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$xor', '$first', first, [
            '/bali/elements/Probability'
        ]);
        abstractions.Component.validateArgument(moduleName, '$xor', '$second', second, [
            '/bali/elements/Probability'
        ]);
    }
    const p1 = first.getValue();
    const p2 = second.getValue();
    const calculator = new utilities.Calculator(this.debug);
    const p = calculator.sum(p1, p2, calculator.product(-2, p1, p2));
    const result = new Probability(p, first.getParameters(), debug);
    return result;
};
