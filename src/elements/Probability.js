/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/


function Probability(value) {
    this.value = value || 0;
    if (this.value < 0 || this.value > 1) {
        throw "A probability must be in the range [0..1]: " + this.value;
    }
    return this;
}
Probability.prototype.constructor = Probability;
exports.Probability = Probability;


Probability.prototype.toString = function () {
    return this.value.toString();
};


Probability.prototype.toNumber = function () {
    return this.value;
};

