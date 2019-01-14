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
 * This collection class implements a sortable list containing components that are
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
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const composites = require('../composites');


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new list component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this list. 
 * @returns {List} The new list.
 */
function List(parameters) {
    abstractions.Collection.call(this, utilities.types.LIST, parameters);
    this.array = [];
    this.complexity += 2;  // account for the '[' ']' delimiters
    return this;
}
List.prototype = Object.create(abstractions.Collection.prototype);
List.prototype.constructor = List;
exports.List = List;


/**
 * This function creates a new list using the specified sequential object to seed the
 * initial items in the list. The list may be parameterized by specifying optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Array|Object|Collection} sequential The sequential object containing the initial
 * items to be used to seed the new list.
 * @param {Parameters} parameters Optional parameters used to parameterize this list. 
 * @returns {List} The new list.
 */
List.fromSequential = function(sequential, parameters) {
    const list = new List(parameters);
    var iterator;
    if (typeof sequential !== 'object') {
        const type = sequential.constructor.name;
        throw new Error('BUG: A list cannot be initialized using an object of type: ' + type);
    }
    switch (sequential.type) {
        case utilities.types.CATALOG:
            iterator = sequential.getIterator();
            while (iterator.hasNext()) {
                const association = iterator.getNext();
                list.addItem(association.value);
            }
            break;
        case utilities.types.LIST:
        case utilities.types.QUEUE:
        case utilities.types.SET:
        case utilities.types.STACK:
            iterator = sequential.getIterator();
            while (iterator.hasNext()) {
                list.addItem(iterator.getNext());
            }
            break;
        default:
            if (Array.isArray(sequential)) {
                sequential.forEach(function(item) {
                    list.addItem(item);
                });
            } else {
                const keys = Object.keys(sequential);
                keys.forEach(function(key) {
                    list.addItem(sequential[key]);
                });
            }
    }
    return list;
};


// PUBLIC FUNCTIONS

/**
 * This function returns a new list that contains the items from the second list concatenated
 * onto the end of the first list.
 *
 * @param {List} list1 The first list to be operated on.
 * @param {List} list2 The second list to be operated on.
 * @returns {List} The resulting list.
 */
List.concatenation = function(list1, list2) {
    const result = List.fromSequential(list1, list1.parameters);
    result.addItems(list2);
    return result;
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
    const size = this.array.length;
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
    const item = this.array[index];
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
    item = composites.converter.asElement(item);
    index = this.normalizeIndex(index) - 1;  // convert to JS zero based indexing
    const oldItem = this.array[index];
    this.array[index] = item;
    this.complexity += item.complexity - oldItem.complexity;
    return oldItem;
};


/*
 * This method appends the specified item to this list.
 * 
 * @param {String|Number|Boolean|Component} item The item to be added to this list.
 * @returns {Boolean} Whether or not the item was successfully added.
 */
List.prototype.addItem = function(item) {
    item = composites.converter.asElement(item);
    this.array.push(item);
    this.complexity += item.complexity;
    if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
    return true;
};


/**
 * This method inserts the specified item into this list before the item
 * associated with the specified index.
 *
 * @param {Number} index The index of the item before which the new item is to be inserted.
 * @param {Component} item The new item to be inserted into this list.
 */
List.prototype.insertItem = function(index, item) {
    item = composites.converter.asElement(item);
    index = this.normalizeIndex(index);
    index--;  // convert to javascript zero based indexing
    this.array.splice(index, 0, item);
    this.complexity += item.complexity;
    if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
};


/**
 * This method inserts the specified collection of items into this list before the item
 * associated with the specified index.
 *
 * @param {Number} index The index of the item before which the new items are to be inserted.
 * @param {Collection} items A collection containing the new items to be inserted into this list.
 */
List.prototype.insertItems = function(index, items) {
    const iterator = items.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        this.insertItem(index++, item);
    }
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
    const oldItem = this.array[index];
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
 * @param {Range} range A range depicting the first and last items to be removed.
 * @returns The list of the items that were removed from this list.
 */
List.prototype.removeItems = function(range) {
    const iterator = range.getIterator();
    const array = [];
    while (iterator.hasNext()) {
        const index = iterator.getNext();
        const item = this.removeItem(index);
        array.push(item);
    }
    const items = List.fromSequential(array);
    return items;
};


/**
 * This method removes all items from this list.
 */
List.prototype.clear = function() {
    const size = this.getSize();
    if (size > 1) this.complexity -= (size - 1) * 2;  // account for all the ', ' separators
    this.array.splice(0);
};


/**
 * This method sorts the items in this list into their natural order as defined
 * by the <code>this.comparedTo(that)</code> method of the items being compared.
 * 
 * @param {Sorter} sorter An optional sorter to use for sorting the items. If none is
 * specified, the default natural sorter will be used.
 */
List.prototype.sortItems = function(sorter) {
    sorter = sorter || new utilities.Sorter();
    sorter.sortCollection(this);
};


/**
 * This method reverses the order of the items in this list.
 */
List.prototype.reverseItems = function() {
    this.array.reverse();
};


/**
 * This method shuffles the items in this list using a randomizing algorithm.  It uses ordinal
 * indexing with the modern version of the Fisher-Yates shuffle:
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
 */
List.prototype.shuffleItems = function() {
    const size = this.getSize();
    for (var index = size; index > 1; index--) {
        const randomIndex = utilities.random.index(index);  // in range [1..index] ordinal indexing
        const item = this.getItem(index);
        this.setItem(index, this.getItem(randomIndex));
        this.setItem(randomIndex, item);
    }
};
