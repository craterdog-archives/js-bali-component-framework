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
 * This component class implements a comparator that can be used to compare any two items
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
 * This method compares two items for their natural ordering.
 * 
 * @param {Component} firstItem The first item to be compared.
 * @param {Component} secondItem The second item to be compared.
 * @returns {Number} -1 if first < second; 0 if first === second; and 1 if first > second.
 * 
 */
Comparator.prototype.compareItems = function(firstItem, secondItem) {
    return firstItem.comparedTo(secondItem);
};
