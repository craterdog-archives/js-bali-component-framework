/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

/**
 * This collection class implements a sortable list which performs very well for both inserts and
 * indexed lookups of its values.  The implementation dynamically scales up and down the size of
 * the underlying data structures as the number of items changes over time. The indexing
 * is unit based and allows positive indexes starting at the beginning of the list or
 * negative indexes starting at the end of the list as follows:
 * <pre>
 *        1          2          3            N
 *    [item 1] . [item 2] . [item 3] ... [item N]
 *       -N        -(N-1)     -(N-2)        -1
 * </pre>
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var SortableCollection = require('../abstractions/SortableCollection').SortableCollection;


/**
 * The constructor creates a new empty list.
 * 
 * @param {Collection} parameters Optional parameters used to parameterize this component. 
 * @returns {List} The new list.
 */
function List(parameters) {
    SortableCollection.call(this, types.LIST, parameters);
    return this;
}
List.prototype = Object.create(SortableCollection.prototype);
List.prototype.constructor = List;
exports.List = List;


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


/**
 * This function returns a new list that contains the all the items from
 * both the specified lists.
 *
 * @param {List} list1 The first list whose items are to be concatenated.
 * @param {List} list2 The second list whose items are to be concatenated.
 * @returns {List} The resulting list.
 */
List.concatenation = function(list1, list2) {
    var result = List.fromCollection(list1);
    result.addItems(list2);
    return result;
};


// PUBLIC METHODS

/**
 * This method creates an empty copy of this list.
 * 
 * @returns {List} The resulting empty list.
 */
List.prototype.emptyCopy = function() {
    var copy = new List(this.parameters);
    return copy;
};


/*
 * This method appends the specified item to this list.
 * 
 * @param {Component} item The item to be added to this list.
 * @returns {Boolean} Whether or not a new item was added, which it always will have been.
 */
List.prototype.addItem = function(item) {
    item = Composite.asComponent(item);
    this.array.push(item);
    this.length += item.length;
    if (this.getSize() > 1) this.length += 2;  // account for the ', ' separator
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
    item = Composite.asComponent(item);
    index = this.normalizedIndex(index);
    index--;  // convert to javascript zero based indexing
    this.array.splice(index, 0, item);
    this.length += item.length;
    if (this.getSize() > 1) this.length += 2;  // account for the ', ' separator
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
        this.length -= oldItem.length;
        if (this.getSize() > 0) this.length -= 2;  // account for the ', ' separator
    }
    return oldItem;
};


/**
 * This method removes all items from this list.
 */
List.prototype.removeAll = function() {
    var size = this.getSize();
    if (size > 1) this.length -= (size - 1) * 2;  // account for all the ', ' separators
    this.array.splice(0);
};
