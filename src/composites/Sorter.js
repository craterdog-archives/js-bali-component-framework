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
 * This component class implements a sorter that can be used on any collection to sort its
 * items into their natural order.
 */
var types = require('./Types');
var Component = require('./Component').Component;


// PUBLIC FUNCTIONS

/*
 * This sorter class implements a standard merge sort algorithm.  The collection to be sorted
 * is recursively split into two collections each of which are then sorted and then the two
 * collections are merged back into a sorted collection.
 */
function Sorter() {
    Component.call(this, types.SORTER);
    return this;
}
Sorter.prototype = Object.create(Component.prototype);
Sorter.prototype.constructor = Sorter;
exports.Sorter = Sorter;


Sorter.prototype.sortCollection = function(collection) {
    if (collection && collection.getSize() > 1) {
        // convert the collection to an array
        var array = [];
        var iterator = collection.getIterator();
        while (iterator.hasNext()) {
            var item = iterator.getNext();
            array.push(item);
        }

        // sort the array
        array = this.sortArray(array);

        // convert it back to a collection
        collection.removeAll();
        collection.addItems(array);
    }
};


Sorter.prototype.sortArray = function(array) {
    // check to see if the array is already sorted
    var length = array.length;
    if (length < 2) return;

    // split the array into two halves
    var leftLength = Math.floor(length / 2);
    var left = array.slice(0, leftLength);
    var right = array.slice(leftLength, length);

    // sort each half separately
    left = this.sortArray(left);
    right = this.sortArray(right);

    // merge the sorted halves back together
    var result = this.mergeArrays(left, right);
    return result;
};


Sorter.prototype.mergeArrays = function(left, right) {
    var leftIndex = 0;
    var rightIndex = 0;
    var result = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        // still have elements in both halves
        switch (left[leftIndex].comparedTo(right[rightIndex])) {
            case -1:
                // copy the next left element to the result
                result.push(left[leftIndex++]);
                break;
            case 0:
            case 1:
                // copy the next right element to the result
                result.push(right[rightIndex++]);
                break;
        }
    }
    if (leftIndex < left.length) {
        // copy the rest of the left half to the result
        result = result.concat(left.slice(leftIndex));
    } else {
        // copy the rest of the right half to the result
        result = result.concat(right.slice(rightIndex));
    }
    return result;
};
