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
var random = require('../utilities/RandomUtilities');


/**
 * This constructor creates a new probability element.
 * 
 * @param {number|string} value The value of the probability.
 * @returns {Probability} The new probability element.
 */
function Probability(value) {

    var type = typeof value;
    switch (type) {
        case 'undefined':
            this.value = 0;
            break;
        case 'boolean':
            if (value) {
                this.value = 1;
            } else {
                this.value = 0;
            }
            break;
        case 'number':
            this.value = value;
            break;
        case 'string':
            if (value === 'true') {
                this.value = 1;
            } else if (value === 'false') {
                this.value = 0;
            } else {
                this.value = Number('0' + value);
            }
            break;
        default:
            throw new Error('PROBABILITY: An invalid value type was passed into the constructor: ' + type);
    }
    if (this.value < 0 || this.value > 1) {
        throw new Error('PROBABILITY: A probability must be in the range [0..1]: ' + this.value);
    }
    return this;

}
Probability.prototype.constructor = Probability;
exports.Probability = Probability;


/**
 * This method returns a string representation of the probability element.
 * 
 * @returns {string} The string representation of the probability element.
 */
Probability.prototype.toString = function () {
    if (this.value === 1) return 'true';
    if (this.value === 0) return 'false';
    return this.value.toString().substring(1);  // remove the leading '0'
};


/**
 * This method returns a boolean representation of the probability element. A
 * coin weighted with the probability is tossed and the boolean outcome is returned.
 * 
 * @returns {number} The boolean representation of the probability element.
 */
Probability.prototype.toBoolean = function () {
    return random.coinToss(this.value);
};


/**
 * This method returns a numeric representation of the probability element.
 * 
 * @returns {number} The numeric representation of the probability element.
 */
Probability.prototype.toNumber = function () {
    return this.value;
};

