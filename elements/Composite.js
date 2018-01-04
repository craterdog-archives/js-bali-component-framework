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
 * This class captures the state and methods associated with a composite document.
 */


/**
 * This constructor creates a new composite document.
 * 
 * @param {object|array|range} value The value of the composite (range, array, or table).
 * @param {string} type The type of composite context.
 * @returns {Composite} The new composite document.
 */
function Composite(value, type) {
    if (!value) {
        throw new Error('COMPOSITE:  A value for a composite document must be passed to the constructor.');
    }
    this.value = value;
    this.type = type;
    return this;
}
Composite.prototype.constructor = Composite;
exports.Composite = Composite;


Composite.prototype.toString = function() {
    throw new Error('COMPOSITE: The toString() method is only defined for elemental types.');
};
