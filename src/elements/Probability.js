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
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Exception = require('../composites/Exception').Exception;
const validate = abstractions.Component.validate;


// PUBLIC FUNCTIONS

/**
 * This function creates a new probability element using the specified value.
 * 
 * @param {Number} value The value of the probability.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Probability} The new probability element.
 */
function Probability(value, parameters, debug) {
    abstractions.Element.call(this, '$Probability', parameters, debug);
    if (this.debug > 1) validate('/bali/elements/Probability', '$Probability', '$value', value, [
        '/javascript/Undefined',
        '/javascript/Boolean',
        '/javascript/Number'
    ], this.debug);

    if (value === value) value = value || 0;  // default value if not NaN and not defined
    if (!isFinite(value) || value < 0 || value > 1) {
        throw new Exception({
            $module: '/bali/elements/Probability',
            $procedure: '$Probability',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid probability value was passed to the constructor.'
        });
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value; };

    return this;

}
Probability.prototype = Object.create(abstractions.Element.prototype);
Probability.prototype.constructor = Probability;
exports.Probability = Probability;


// PUBLIC METHODS

/**
 * This method returns whether or not this component supports logical operations.
 * <pre>
 *  * false
 *  * true
 *  * not
 *  * and
 *  * sans
 *  * or
 *  * xor
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports logical operations.
 */
Probability.prototype.isLogical = function() {
    return true;
};


/**
 * This method returns whether or not this probability is greater or equal to 0.5.
 * 
 * @returns {Boolean} Whether or not this probability is greater or equal to 0.5.
 */
Probability.prototype.toBoolean = function() {
    return this.getValue() >= 0.5;
};


/**
 * This method returns a numeric representation of the probability element.
 * 
 * @returns {number} The numeric representation of the probability element.
 */
Probability.prototype.toNumber = function() {
    return this.getValue();
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Probability.prototype.acceptVisitor = function(visitor) {
    visitor.visitProbability(this);
};


// PUBLIC FUNCTIONS

/**
 * This function returns a new probability that is the logical NOT of the specified
 * probability. It represents the likelihood that the probability is false.
 * The logical NOT is equal to:
 * <pre>
 *    pNOT = 1 - p
 * </pre>
 *
 * @param {Probability} probability The probability.
 * @returns {Probability} The resulting probability.
 */
Probability.not = function(probability, debug) {
    if (debug > 1) validate('/bali/elements/Probability', '$not', '$probability', probability, [
        '/bali/elements/Probability'
    ], debug);
    const p = utilities.precision.difference(1, probability.getValue());
    const result = new Probability(p);
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
 * @returns {Probability} The resulting probability.
 */
Probability.and = function(first, second, debug) {
    if (debug > 1) validate('/bali/elements/Probability', '$and', '$first', first, [
        '/bali/elements/Probability'
    ], debug);
    if (debug > 1) validate('/bali/elements/Probability', '$and', '$second', second, [
        '/bali/elements/Probability'
    ], debug);
    const p1 = first.getValue();
    const p2 = second.getValue();
    const p = utilities.precision.product(p1, p2);
    const result = new Probability(p);
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
 * @returns {Probability} The resulting probability.
 */
Probability.sans = function(first, second, debug) {
    if (debug > 1) validate('/bali/elements/Probability', '$sans', '$first', first, [
        '/bali/elements/Probability'
    ], debug);
    if (debug > 1) validate('/bali/elements/Probability', '$sans', '$second', second, [
        '/bali/elements/Probability'
    ], debug);
    const p1 = first.getValue();
    const p2 = second.getValue();
    const p = utilities.precision.product(p1, utilities.precision.difference(1, p2));
    const result = new Probability(p);
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
 * @returns {Probability} The resulting probability.
 */
Probability.or = function(first, second, debug) {
    if (debug > 1) validate('/bali/elements/Probability', '$or', '$first', first, [
        '/bali/elements/Probability'
    ], debug);
    if (debug > 1) validate('/bali/elements/Probability', '$or', '$second', second, [
        '/bali/elements/Probability'
    ], debug);
    const p1 = first.getValue();
    const p2 = second.getValue();
    const p = utilities.precision.sum(p1, p2, utilities.precision.product(-p1, p2));
    const result = new Probability(p);
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
 * @returns {Probability} The resulting probability.
 */
Probability.xor = function(first, second, debug) {
    if (debug > 1) validate('/bali/elements/Probability', '$xor', '$first', first, [
        '/bali/elements/Probability'
    ], debug);
    if (debug > 1) validate('/bali/elements/Probability', '$xor', '$second', second, [
        '/bali/elements/Probability'
    ], debug);
    const p1 = first.getValue();
    const p2 = second.getValue();
    const p = utilities.precision.sum(p1, p2, utilities.precision.product(-2, p1, p2));
    const result = new Probability(p);
    return result;
};

