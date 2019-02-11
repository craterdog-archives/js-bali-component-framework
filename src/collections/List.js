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

    // the array is a private attribute so methods that use it are defined in the constructor
    const array = [];

    this.acceptVisitor = function(visitor) {
        visitor.visitList(this);
    };
    
    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.getSize = function() {
        return array.length;
    };
    
    this.getItem = function(index) {
        index = this.normalizeIndex(index) - 1;  // JS uses zero based indexing
        return array[index];
    };
    
    this.setItem = function(index, item) {
        index = this.normalizeIndex(index) - 1;  // JS uses zero based indexing
        item = this.convert(item);
        const oldItem = array[index];
        array[index] = item;
        return oldItem;
    };
    
    this.addItem = function(item) {
        item = this.convert(item);
        array.push(item);
        return true;
    };
    
    this.insertItem = function(index, item) {
        item = this.convert(item);
        index = this.normalizeIndex(index) - 1;  // JS uses zero based indexing
        array.splice(index, 0, item);
    };
    
    this.insertItems = function(index, items) {
        const iterator = items.getIterator();
        while (iterator.hasNext()) {
            const item = iterator.getNext();
            this.insertItem(index++, item);
        }
    };
    
    this.removeItem = function(index) {
        index = this.normalizeIndex(index) - 1;  // JS uses zero based indexing
        const oldItem = array[index];
        if (oldItem) array.splice(index, 1);
        return oldItem;
    };
    
    this.removeItems = function(range) {
        const items = new List(this.getParameters());
        const iterator = range.getIterator();
        while (iterator.hasNext()) {
            const index = iterator.getNext();
            const item = this.removeItem(index);
            items.addItem(item);
        }
        return items;
    };
    
    this.sortItems = function(sorter) {
        sorter = sorter || new utilities.Sorter();
        sorter.sortCollection(this);
    };
    
    this.reverseItems = function() {
        array.reverse();
    };

    this.shuffleItems = function() {
        const size = this.getSize();
        for (var index = size; index > 1; index--) {
            const randomIndex = utilities.random.index(index);  // in range [1..index] ordinal indexing
            const item = this.getItem(index);
            this.setItem(index, this.getItem(randomIndex));
            this.setItem(randomIndex, item);
        }
    };
    
    this.deleteAll = function() {
        array.splice(0);
    };

    return this;
}
List.prototype = Object.create(abstractions.Collection.prototype);
List.prototype.constructor = List;
exports.List = List;


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
    const result = new List();
    result.addItems(list1);
    result.addItems(list2);
    return result;
};
