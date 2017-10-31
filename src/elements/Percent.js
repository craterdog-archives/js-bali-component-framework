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


function Percent(value) {

    // constructor generates a percent based on a numeric value
    if (typeof value === 'number') {
        this.value = value;
        return this;
    }

    // constructor generates a percent based on a string value
    if (typeof value === 'string') {
        this.value = Number(value.replace(/%/g, ''));  // strip off the %
        return this;
    }

}
Percent.prototype.constructor = Percent;
exports.Percent = Percent;


Percent.prototype.toString = function () {
    return this.value.toString() + '%';  // append the %
};


Percent.prototype.toNumber = function () {
    return this.value / 100;
};

