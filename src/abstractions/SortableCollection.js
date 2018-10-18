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
 * This abstract class defines the invariant methods that all sortable collections must inherit.
 * A sortable collection allows the order of its items to be determined externally.  By
 * default, the items will be placed in the order in which they were added to the collection.
 * Additionally, the items can be sorted in various ways depending on a specified sorting
 * algorithm and comparison function.
 */
var Composite = require('./Composite').Composite;
var Collection = require('./Collection').Collection;


/**
 * The constructor for the SortableCollection class.
 * 
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {SortableCollection} The new sortable collection.
 */
function SortableCollection(type, parameters) {
    Collection.call(this, type, parameters);
    this.array = [];
    return this;
}
SortableCollection.prototype = Object.create(Collection.prototype);
SortableCollection.prototype.constructor = SortableCollection;
exports.SortableCollection = SortableCollection;


// PUBLIC METHODS

/**
 * This method returns the number of items that are currently in this collection.
 * 
 * @returns {Number} The number of items in this collection.
 */
SortableCollection.prototype.getSize = function() {
    var size = this.array.length;
    return size;
};


/**
 * This method returns an array containing the items in this collection.
 * 
 * @returns {Array} An array containing the items in this collection.
 */
SortableCollection.prototype.toArray = function() {
    return this.array.slice();  // copy the array
};


/**
 * This abstract method returns an empty copy of this collection. It must be implemented
 * by a subclass.
 * 
 * @returns {Collection} An empty copy of this collection.
 */
SortableCollection.prototype.emptyCopy = function() {
    throw new Error('COLLECTION: Abstract method emptyCopy() must be implemented by a concrete subclass.');
};


/**
 * This method returns the item in this collection that is specified by the numeric index.
 * 
 * @param {Number} index The index of the desired item.
 * @returns {Component} The item at the position in this collection.
 */
SortableCollection.prototype.getItem = function(index) {
    index = this.normalizedIndex(index);
    index--;  // convert to JS zero based indexing
    var item = this.array[index];
    return item;
};


/**
 * This method replaces an existing item in this collection with a new one.  The new
 * item replaces the existing item at the specified index.
 *
 * @param {Number} index The index of the existing item.
 * @param {Component} item The new item that will replace the existing one.
 *
 * @returns The existing item that was at the specified index.
 */
SortableCollection.prototype.setItem = function(index, item) {
    item = Composite.asComponent(item);
    index = this.normalizedIndex(index) - 1;  // convert to JS zero based indexing
    var oldItem = this.array[index];
    this.array[index] = item;
    this.complexity += item.complexity - oldItem.complexity;
    return oldItem;
};


/**
 * This method returns a new collection of items starting with the item at the first index
 * and including the item at the last index.
 * 
 * @param {type} firstIndex The index of the first item to be included.
 * @param {type} lastIndex The index of the last item to be included.
 * @returns {Collection} The new collection containing the requested items.
 */
SortableCollection.prototype.getItems = function(firstIndex, lastIndex) {
    firstIndex = this.normalizedIndex(firstIndex) - 1;
    lastIndex = this.normalizedIndex(lastIndex) - 1;
    var result = this.emptyCopy();
    for (var i = firstIndex; i <= lastIndex; i++) {
        var item = this.array[i];
        result.addItem(item);
    }
    return result;
};


/**
 * This abstract method adds the specified item to this collection. It must be implemented
 * by a subclass.
 * 
 * @param {Component} item The item to be added to this collection. 
 * @returns {Boolean} Whether or not the item was successfully added.
 */
SortableCollection.prototype.addItem = function(item) {
    throw new Error('COLLECTION: Abstract method addItem(item) must be implemented by a concrete subclass.');
};


/**
 * This method adds a list of new items to this collection.  The new
 * items will be added in the order they appear in the specified collection.
 *
 * @param {Collection} items The list of new items to be added.
 * @returns {Number} The number of items that were actually added to this collection.
 */
SortableCollection.prototype.addItems = function(items) {
    var count = 0;
    var iterator = items.iterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        if (this.addItem(item)) {
            count++;
        }
    }
    return count;
};


/**
 * This abstract method removes from this collection the item associated with the specified
 * index. It must be implemented by a subclass.
 *
 * @param {Number} index The index of the item to be removed.
 * @returns {Component} The item at the specified index.
 */
SortableCollection.prototype.removeItem = function(index) {
    throw new Error('COLLECTION: Abstract method removeItem(index) must be implemented by a concrete subclass.');
};


/**
 * This method removes from this collection the items associated with the specified
 * index range.
 *
 * @param {Number} firstIndex The index of the first item to be removed.
 * @param {Number} lastIndex The index of the last item to be removed.
 * @returns The collection of the items that were removed from this collection.
 */
SortableCollection.prototype.removeItems = function(firstIndex, lastIndex) {
    firstIndex = this.normalizedIndex(firstIndex);
    lastIndex = this.normalizedIndex(lastIndex);
    var removedItems = this.emptyCopy();
    var index = firstIndex;
    while (index <= lastIndex) {
        var removedItem = this.removeItem(index++);
        if (removedItem) removedItems.addItem(removedItem);
    }
    return removedItems;
};


/**
 * This method shuffles the items in this collection using a randomizing algorithm.
 */
SortableCollection.prototype.shuffleItems = function() {
    var sorter = new RandomSorter();
    sorter.sortCollection(this);
};


/**
 * This method sorts the items in this collection.
 */
SortableCollection.prototype.sortItems = function() {
    var sorter = new MergeSorter();
    sorter.sortCollection(this);
};


// PRIVATE HELPER CLASSES

/*
 * This sorter class implements a standard merge sort algorithm.  The collection to be sorted
 * is recursively split into two collections each of which are then sorted and then the two
 * collections are merged back into a sorted collection.
 */

function MergeSorter() {
    return this;
}
MergeSorter.prototype.constructor = MergeSorter;


MergeSorter.prototype.sortCollection = function(collection) {
    if (collection && collection.getSize() > 1) {
        // convert the collection to an array
        var array = [];
        var iterator = collection.iterator();
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


MergeSorter.prototype.sortArray = function(array) {
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


MergeSorter.prototype.mergeArrays = function(left, right) {
    var leftIndex = 0;
    var rightIndex = 0;
    var result = [];
    while (leftIndex < left.length && rightIndex < right.length) {
        // still have elements in both halves
        switch (Composite.compareItems(left[leftIndex], right[rightIndex])) {
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


/**
 * This sorter class implements a randomizing sort algorithm.  The collection to be sorted
 * is randomly reordered such that the resulting order is completely random.
 */

function RandomSorter() {
    return this;
}
RandomSorter.prototype.constructor = RandomSorter;


RandomSorter.prototype.sortCollection = function(collection) {
    if (collection && collection.getSize() > 1) {
        // convert the collection to an array
        var array = [];
        var iterator = collection.iterator();
        while (iterator.hasNext()) {
            var item = iterator.getNext();
            array.push(item);
        }

        // randomize the array
        array = this.randomizeArray(array);

        // convert it back to a collection
        collection.removeAll();
        collection.addItems(array);
    }
};


RandomSorter.prototype.randomizeArray = function(array) {
    var size = array.length;
    for (var index = size; index > 1; index--) {
        var randomIndex = Math.floor(Math.random() * index);  // use zero based indexing
        var swap = array[index - 1];
        array[index - 1] = array[randomIndex];
        array[randomIndex] = swap;
    }
    return array;
};
