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
var SortableCollection = require('../abstractions/SortableCollection').SortableCollection;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new list component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {List} The new list.
 */
function List(parameters) {
    SortableCollection.call(this, types.LIST, parameters);
    this.array = [];
    this.complexity += 2;  // account for the '[' ']' delimiters
    return this;
}
List.prototype = Object.create(SortableCollection.prototype);
List.prototype.constructor = List;
exports.List = List;


/**
 * This function creates a new list using the specified collection to seed the
 * initial items in the list. The list may be parameterized by specifying optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Array|Object|Collection} collection The collection containing the initial
 * items to be used to seed the new list.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
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
        case 'Stack':
            iterator = collection.iterator();
            while (iterator.hasNext()) {
                list.addItem(iterator.getNext());
            }
            break;
        default:
            throw new Error('LIST: A list cannot be initialized using a collection of type: ' + type);
    }
    return list;
};


// bind to superclass functions
List.concatenation = SortableCollection.concatenation;


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
 * This method returns an array containing the items in this list.
 * 
 * @returns {Array} An array containing the items in this list.
 */
List.prototype.toArray = function() {
    return this.array.slice();  // copy the array
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
 * This method retrieves the item that is associated with the specified index from this collection.
 * 
 * @param {Number} index The index of the desired item.
 * @returns {Component} The item at the position in this list.
 */
List.prototype.getItem = function(index) {
    index = this.normalizedIndex(index);
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
    index = this.normalizedIndex(index) - 1;  // convert to JS zero based indexing
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
    index = this.normalizedIndex(index);
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
    index = this.normalizedIndex(index);
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
 * This method removes all items from this list.
 */
List.prototype.removeAll = function() {
    var size = this.getSize();
    if (size > 1) this.complexity -= (size - 1) * 2;  // account for all the ', ' separators
    this.array.splice(0);
};
