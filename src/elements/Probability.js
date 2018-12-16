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
var precision = require('../utilities/Precision');
var codex = require('../utilities/Codex');
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates a new probability element.
 * 
 * @param {Number|Boolean|String} value The value of the probability.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Probability} The new probability element.
 */
function Probability(value, parameters) {
    Element.call(this, types.PROBABILITY, parameters);
    if (value === undefined || value === null) value = false;  // default value

    var type = value.constructor.name;
    switch (type) {
        case 'Boolean':
            if (value) {
                value = 1;
            } else {
                value = 0;
            }
            break;
        case 'Number':
            break;
        case 'String':
            if (value === 'true') {
                value = 1;
            } else if (value === 'false') {
                value = 0;
            } else {
                value = Number('0' + value);
            }
            break;
        default:
            throw new Error('PROBABILITY: An invalid value type was passed into the constructor: ' + type);
    }
    if (value < 0 || value > 1) {
        throw new Error('PROBABILITY: A probability must be in the range [0..1]: ' + value);
    }
    if (typeof Probability.FALSE !== 'undefined' && value === 0) return Probability.FALSE;
    if (typeof Probability.TRUE !== 'undefined' && value === 1) return Probability.TRUE;
    this.value = value;
    var source;
    if (value === 1) {
        source = 'true';
    } else if (value === 0) {
        source = 'false';
    } else {
        source = value.toString().substring(1);  // remove the leading '0'
    }
    this.setSource(source);
    return this;

}
Probability.prototype = Object.create(Element.prototype);
Probability.prototype.constructor = Probability;
exports.Probability = Probability;


/**
 * This method returns a boolean representation of the probability element. A
 * coin weighted with the probability is tossed and the boolean outcome is returned.
 * 
 * @returns {number} The boolean representation of the probability element.
 */
Probability.prototype.toBoolean = function() {
    return codex.coinToss(this.value);
};


/**
 * This method returns a numeric representation of the probability element.
 * 
 * @returns {number} The numeric representation of the probability element.
 */
Probability.prototype.toNumber = function() {
    return this.value;
};


// PUBLIC CONSTANTS

Probability.FALSE = new Probability('false');
Probability.TRUE = new Probability('true');


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
Probability.inverse = function(probability) {
    var p = precision.difference(1, probability.value);
    var result = new Probability(p);
    return result;
};


/**
 * This function returns a new probability that is the logical OR of the two specified
 * probabilities. It represents the likelihood that the first probability is true or the
 * second probability is true or both are true. The logical OR is equal to:
 * <pre>
 *    pOR = p1 + p2 - p1 * p2
 * </pre>
 *
 * @param {Probability} probability1 The first probability.
 * @param {Probability} probability2 The second probability.
 * @returns {Probability} The resulting probability.
 */
Probability.union = function(probability1, probability2) {
    var p1 = probability1.value;
    var p2 = probability2.value;
    var p = precision.sum(p1, p2, precision.product(-p1, p2));
    var result = new Probability(p);
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
 * @param {Probability} probability1 The first probability.
 * @param {Probability} probability2 The second probability.
 * @returns {Probability} The resulting probability.
 */
Probability.intersection = function(probability1, probability2) {
    var p1 = probability1.value;
    var p2 = probability2.value;
    var p = precision.product(p1, p2);
    var result = new Probability(p);
    return result;
};


/**
 * This function returns a new probability that is the logical SANS of the two specified
 * probabilities. It represents the likelihood that the first probability is true but the
 * second probability is not. The logical SANS is equal to:
 * <pre>
 *    pSANS = p1 * (1 - p2)
 * </pre>
 *
 * @param {Probability} probability1 The first probability.
 * @param {Probability} probability2 The second probability.
 * @returns {Probability} The resulting probability.
 */
Probability.difference = function(probability1, probability2) {
    var p1 = probability1.value;
    var p2 = probability2.value;
    var p = precision.product(p1, precision.difference(1, p2));
    var result = new Probability(p);
    return result;
};


/**
 * This function returns a new probability that is the logical XOR of the two specified
 * probabilities. It represents the likelihood that the first probability is true or the
 * second probability is true but not both. The logical XOR is equal to:
 * <pre>
 *    pXOR = p1 * (1 - p2) + p2 * (1 - p1)
 *         = p1 + p2 - 2 * (p1 * p2)
 * </pre>
 *
 * @param {Probability} probability1 The first probability.
 * @param {Probability} probability2 The second probability.
 * @returns {Probability} The resulting probability.
 */
Probability.exclusive = function(probability1, probability2) {
    var p1 = probability1.value;
    var p2 = probability2.value;
    var p = precision.sum(p1, p2, precision.product(-2, p1, p2));
    var result = new Probability(p);
    return result;
};

