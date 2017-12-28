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
 * This element class captures the state and methods associated with a range of values.
 */
function Range(firstValue, lastValue) {
    this.firstValue = firstValue;
    this.lastValue = lastValue;
    return this;
}
Range.prototype.constructor = Range;
exports.Range = Range;


Range.prototype.toString = function() {
    throw new Error('RANGE: The toString() method is only defined for elemental types.');
};
