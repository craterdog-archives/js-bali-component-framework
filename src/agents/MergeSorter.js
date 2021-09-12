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
 * This class implements the methods for a merge sorter agent. It uses a comparator
 * agent to compare each pair of components in a sortable collection.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const CanonicalComparator = require('./CanonicalComparator').CanonicalComparator;


/**
 * This constructor creates a new merge sorter agent that can be used to sort any sortable collection.
 *
 * @param {Comparator} comparator An optional comparator implementing the desired comparison algorithm.
 * @param {Number} debug A number in the range 0..3.
 * sorting. If none is specified, the natural comparator will be used.
 * @returns {Sorter} The new merge sorter agent.
 */
const MergeSorter = function(comparator, debug) {
    abstractions.Sorter.call(
        this,
        ['/bali/agents/MergeSorter'],
        debug
    );

    // private attribute
    comparator = comparator || new CanonicalComparator(debug);

    this.sortCollection = function(collection) {
        if (collection && collection.getSize() > 1) {
            var array = collection.toArray();
            array = sortArray(comparator, array);
            collection.removeAll();
            collection.addItems(array);
        }
    };

    return this;
};
MergeSorter.prototype = Object.create(abstractions.Sorter.prototype);
MergeSorter.prototype.constructor = MergeSorter;
exports.MergeSorter = MergeSorter;


const sortArray = function(comparator, array) {
    // check to see if the array is already sorted
    const length = array.length;
    if (length < 2) return array;

    // split the array into two halves
    const leftLength = Math.floor(length / 2);
    var left = array.slice(0, leftLength);
    var right = array.slice(leftLength, length);

    // sort each half separately
    left = sortArray(comparator, left);
    right = sortArray(comparator, right);

    // merge the sorted halves back together
    const result = mergeArrays(comparator, left, right);
    return result;
};


const mergeArrays = function(comparator, left, right) {
    var leftIndex = 0;
    var rightIndex = 0;
    var result = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        // still have elements in both halves
        const ranking = comparator.ranking(left[leftIndex], right[rightIndex]);
        switch (ranking) {
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

