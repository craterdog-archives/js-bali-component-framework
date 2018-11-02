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

/**
 * This collection class implements a sortable collection containing components that are
 * indexed as items in a list. The indexing is ordinal based (e.g. 1..N) and allows either
 * positive indexes starting at the beginning of the list or negative indexes starting at
 * the end of the list as follows:
 * <pre>
 *        1          2          3            N
 *    [item 1] . [item 2] . [item 3] ... [item N]
 *       -N        -(N-1)     -(N-2)        -1
 * </pre>
 * 
 * The items in the list are maintained in the order in which they were added to the list.
 * But they may be reordered by sorting the list.
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var Collection = require('../abstractions/Collection').Collection;
var Sorter = require('../components/Sorter').Sorter;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new list component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this list. 
 * @returns {List} The new list.
 */
function List(parameters) {
    Collection.call(this, types.LIST, parameters);
    this.array = [];
    this.complexity += 2;  // account for the '[' ']' delimiters
    return this;
}
List.prototype = Object.create(Collection.prototype);
List.prototype.constructor = List;
exports.List = List;


/**
 * This function creates a new list using the specified collection to seed the
 * initial items in the list. The list may be parameterized by specifying optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Array|Object|Collection} collection The collection containing the initial
 * items to be used to seed the new list.
 * @param {Parameters} parameters Optional parameters used to parameterize this list. 
 * @returns {List} The new list.
 */
List.fromCollection = function(collection, parameters) {
    var list = new List(parameters);
    var iterator;
    var type = collection.constructor.name;
    switch (type) {
        case 'Array':
            collection.forEach(function(item) {
                list.addItem(item);
            });
            break;
        case 'List':
        case 'Set':
            iterator = collection.getIterator();
            while (iterator.hasNext()) {
                list.addItem(iterator.getNext());
            }
            break;
        default:
            throw new Error('LIST: A list cannot be initialized using a collection of type: ' + type);
    }
    return list;
};


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this list.
 */
List.prototype.acceptVisitor = function(visitor) {
    visitor.visitList(this);
};


/**
 * This method returns the number of items that are currently in this list.
 * 
 * @returns {Number} The number of items in this list.
 */
List.prototype.getSize = function() {
    var size = this.array.length;
    return size;
};


/**
 * This method returns an array containing the items in this list.
 * 
 * @returns {Array} An array containing the items in this list.
 */
List.prototype.toArray = function() {
    return this.array.slice();  // copy the array
};


/**
 * This method retrieves the item that is associated with the specified index from this list.
 * 
 * @param {Number} index The index of the desired item.
 * @returns {Component} The item at the position in this list.
 */
List.prototype.getItem = function(index) {
    index = this.normalizeIndex(index);
    index--;  // convert to JS zero based indexing
    var item = this.array[index];
    return item;
};


/**
 * This method replaces an existing item in this list with a new one.  The new
 * item replaces the existing item at the specified index.
 *
 * @param {Number} index The index of the existing item.
 * @param {Component} item The new item that will replace the existing one.
 *
 * @returns The existing item that was at the specified index.
 */
List.prototype.setItem = function(index, item) {
    item = Composite.asComponent(item);
    index = this.normalizeIndex(index) - 1;  // convert to JS zero based indexing
    var oldItem = this.array[index];
    this.array[index] = item;
    this.complexity += item.complexity - oldItem.complexity;
    return oldItem;
};


/*
 * This method appends the specified item to this list.
 * 
 * @param {String|Number|Boolean|Component} item The item to be added to this list.
 */
List.prototype.addItem = function(item) {
    item = Composite.asComponent(item);
    this.array.push(item);
    this.complexity += item.complexity;
    if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
};


/**
 * This method inserts the specified item into this list before the item
 * associated with the specified index.
 *
 * @param {Number} index The index of the item before which the new item is to be inserted.
 * @param {Component} item The new item to be inserted into this list.
 */
List.prototype.insertItem = function(index, item) {
    item = Composite.asComponent(item);
    index = this.normalizeIndex(index);
    index--;  // convert to javascript zero based indexing
    this.array.splice(index, 0, item);
    this.complexity += item.complexity;
    if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
};


/**
 * This method removes from this list the item associated with the specified
 * index.
 *
 * @param {Number} index The index of the item to be removed.
 * @returns {Component} The item at the specified index.
 */
List.prototype.removeItem = function(index) {
    index = this.normalizeIndex(index);
    index--;  // convert to javascript zero based indexing
    var oldItem = this.array[index];
    if (oldItem) {
        this.array.splice(index, 1);
        this.complexity -= oldItem.complexity;
        if (this.getSize() > 0) this.complexity -= 2;  // account for the ', ' separator
    }
    return oldItem;
};


/**
 * This method removes from this list the items associated with the specified
 * index range.
 *
 * @param {Number} firstIndex The index of the first item to be removed.
 * @param {Number} lastIndex The index of the last item to be removed.
 * @returns The collection of the items that were removed from this list.
 */
List.prototype.removeItems = function(firstIndex, lastIndex) {
    firstIndex = this.normalizeIndex(firstIndex);
    lastIndex = this.normalizeIndex(lastIndex);
    var removedItems = new List(this.parameters);
    var index = firstIndex;
    while (index <= lastIndex) {
        var removedItem = this.removeItem(index++);
        if (removedItem) removedItems.addItem(removedItem);
    }
    return removedItems;
};


/**
 * This method removes all items from this list.
 */
List.prototype.removeAll = function() {
    var size = this.getSize();
    if (size > 1) this.complexity -= (size - 1) * 2;  // account for all the ', ' separators
    this.array.splice(0);
};


/**
 * This method sorts the items in this list into their natural order as defined
 * by the <code>this.comparedTo(that)</code> method of the items being compared.
 */
List.prototype.sortItems = function() {
    var sorter = new Sorter();
    sorter.sortCollection(this);
};


/**
 * This method reverses the order of the items in this list.
 */
List.prototype.reverseItems = function() {
    this.array.reverse();
};


/**
 * This method shuffles the items in this list using a randomizing algorithm.
 */
List.prototype.shuffleItems = function() {
    var sorter = new Randomizer();
    sorter.sortCollection(this);
};


// PRIVATE CLASSES

/*
 * This class implements a randomizing algorithm.  The list to be randomized
 * is randomly reordered such that the resulting order is relatively random.
 */

function Randomizer() {
    return this;
}
Randomizer.prototype.constructor = Randomizer;


Randomizer.prototype.sortCollection = function(list) {
    if (list && list.getSize() > 1) {
        // convert the list to an array
        var array = [];
        var iterator = list.getIterator();
        while (iterator.hasNext()) {
            var item = iterator.getNext();
            array.push(item);
        }

        // randomize the array
        array = this.randomizeArray(array);

        // convert it back to a list
        list.removeAll();
        list.addItems(array);
    }
};


Randomizer.prototype.randomizeArray = function(array) {
    var size = array.length;
    for (var index = size; index > 1; index--) {
        var randomIndex = Math.floor(Math.random() * index);  // use zero based indexing
        var swap = array[index - 1];
        array[index - 1] = array[randomIndex];
        array[randomIndex] = swap;
    }
    return array;
};
