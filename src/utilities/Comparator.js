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
 * This component class implements a comparator that can be used to compare any two components
 * for their natural ordering.
 */
const types = require('./Types');


// PUBLIC CONSTRUCTORS

/**
 * This comparator class implements a natural comparison algorithm using the
 * <code>Component.comparedTo(that)</code> method.
 */
function Comparator() {
    return this;
}
Comparator.prototype.constructor = Comparator;
exports.Comparator = Comparator;


// PUBLIC METHODS

/**
 * This method determines whether or not two components are equal.
 * 
 * @param {Component} firstComponent The first component to be compared.
 * @param {Component} secondComponent The second component to be compared.
 * @returns {Boolean} Whether or not the two components are equal.
 * 
 */
Comparator.prototype.componentsAreEqual = function(firstComponent, secondComponent) {
    return this.compareComponents(firstComponent, secondComponent) === 0;
};


/**
 * This method compares two components for their natural ordering.
 * 
 * @param {Component} firstComponent The first component to be compared.
 * @param {Component} secondComponent The second component to be compared.
 * @returns {Number} -1 if first < second; 0 if first === second; and 1 if first > second.
 * 
 */
Comparator.prototype.compareComponents = function(first, second) {
    // handle undefined components
    if (first && !second) {
        return 1;  // anything is greater than nothing
    }
    if (!first && second) {
        return -1;  // nothing is less than anything
    }
    if (!first && !second) {
        return 0;  // nothing is equal to nothing
    }

    // handle numeric components
    if (typeof first === 'number' && typeof second === 'number') {
        return Math.sign(first - second);
    }
    if (first.constructor.toNumber && typeof second === 'number') {
        return Math.sign(first.toNumber() - second);
    }
    if (typeof first === 'number' && second.toNumber) {
        return Math.sign(first - second.toNumber());
    }

    // handle string components
    if (typeof first === 'string' && typeof second === 'string') {
        return Math.sign(first.localeCompare(second));
    }
    if (types.isLiteral(first.type) && typeof second === 'string') {
        return Math.sign(first.toLiteral(first.parameters).localeCompare(second));
    }
    if (typeof first === 'string' && types.isLiteral(second.type)) {
        return Math.sign(String(first).localeCompare(second.toLiteral(second.parameters)));
    }

    // handle different object types
    var result = first.constructor.name.localeCompare(second.constructor.name);
    if (result !== 0) return result;

    // handle composite components
    if (first.prototype && first.prototype.getIterator && second.prototype && second.prototype.getIterator) {
        const firstIterator = first.getIterator();
        const secondIterator = second.getIterator();
        result = 0;
        while (result === 0 && firstIterator.hasNext() && secondIterator.hasNext()) {
            result = this.compareComponents(firstIterator.getNext(), secondIterator.getNext());
        }
        if (result !== 0) return result;  // found a difference
        if (firstIterator.hasNext()) return 1;  // the first is longer than the second
        if (secondIterator.hasNext()) return -1;  // the second is longer than the first
        return 0;  // they are the same length and all items are equal
    }

    // must be two elemental objects of the same type, compare their string values
    return Math.sign(first.toString().localeCompare(second.toString()));
};
