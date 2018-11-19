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


// PUBLIC FUNCTIONS

/**
 * This comparator class implements a natural comparison algorithm using the
 * <code>Component.comparedTo(that)</code> method.
 */
function Comparator() {
    return this;
}
Comparator.prototype.constructor = Comparator;
exports.Comparator = Comparator;


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
Comparator.prototype.compareComponents = function(firstComponent, secondComponent) {
    if (firstComponent && firstComponent.prototype && firstComponent.prototype.comparedTo) {
        return firstComponent.comparedTo(secondComponent);
    }
    if (typeof firstComponent === 'number' && typeof secondComponent === 'number') {
        return Math.sign(firstComponent - secondComponent);
    }
    if (firstComponent && secondComponent) {
        return Math.sign(firstComponent.toString().localeCompare(secondComponent.toString()));
    }
    if (firstComponent) {
        return 1;  // the second component is undefined or null
    }
    if (secondComponent) {
        return -1;  // the first component is undefined or null
    }
    return 0;  // both components are undefined or null
};
