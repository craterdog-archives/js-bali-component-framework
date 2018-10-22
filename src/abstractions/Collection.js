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
 * This abstract class defines the invariant methods that all collections must inherit.
 */
var Composite = require('./Composite').Composite;
var Iterator = require('../composites/Iterator').Iterator;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new collection component of the specified type with the optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Number} type The type of collection.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Collection} The new collection.
 */
function Collection(type, parameters) {
    Composite.call(this, type, parameters);
    this.inBrackets = true;
    return this;
}
Collection.prototype = Object.create(Composite.prototype);
Collection.prototype.constructor = Collection;
exports.Collection = Collection;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this collection.
 */
Collection.prototype.accept = function(visitor) {
    visitor.visitCollection(this);
};


/**
 * This method returns an object that can be used to iterate over the items in
 * this collection.
 * @returns {Iterator} An iterator for this collection.
 */
Collection.prototype.iterator = function() {
    var iterator = new Iterator(this.toArray());
    return iterator;
};
/**
 * This method returns whether or not this collection is empty.
 * 
 * @returns {Boolean} Whether or not this collection is empty.
 */
Collection.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This abstract method returns the number of items that are currently in this collection.
 * It must be implemented by a subclass.
 * 
 * @returns {Number} The number of items that are in this collection.
 */
Collection.prototype.getSize = function() {
    throw new Error('COLLECTION: Abstract method getSize() must be implemented by a concrete subclass.');
};

/**
 * This function converts negative indexes into their corresponding positive indexes and
 * then checks to make sure the index is in the range [1..size]. NOTE: if the collection
 * is empty then the resulting index will be zero.
 *
 * The mapping between indexes is as follows:
 * <pre>
 * Negative Indexes:   -N      -N + 1     -N + 2     -N + 3   ...   -1
 * Positive Indexes:    1         2          3          4     ...    N
 * </pre>
 *
 * @param {Number} index The index to be normalized [-N..N].
 * @returns {Number} The normalized [1..N] index.
 */
Collection.prototype.normalizedIndex = function(index) {
    var size = this.getSize();
    if (index > size) index = size;
    if (index < -size) index = -size;
    if (index < 0) index = index + size + 1;
    return index;
};


/**
 * This method returns the index of the specified item in this collection.
 * NOTE: It is tempting when dealing with a collection that uses an array
 * as an underlying data structure to use the Array.indexOf() method to
 * provide a faster implementation of this method. However, the indexOf()
 * method uses strict equality checks which for items that are objects
 * returns false even when all attributes on each item are the same. Therefore
 * it is better not to override this method in that case.
 * 
 * @param {Object} item The item to be looked up.
 * @returns {Number} The index of the item in this collection.
 */
Collection.prototype.getIndex = function(item) {
    var component = Composite.asComponent(item);
    var index = 0;
    var iterator = this.iterator();
    while (iterator.hasNext()) {
        var candidate = iterator.getNext();
        index++;
        if (component.equalTo(candidate)) return index;
    }
    return 0;  // not found
};


/**
 * This abstract method retrieves the item that is associated with the specified index
 * from this collection. It must be implemented by a subclass.
 * 
 * @param {Number} index The index of the desired item.
 * @returns {Component} The item at the position in this sortable collection.
 */
Collection.prototype.getItem = function(index) {
    throw new Error('COLLECTION: Abstract method getItem(index) must be implemented by a concrete subclass.');
};


/**
 * This method returns a new collection of items starting with the item at the
 * first index and including the item at the last index.
 * 
 * @param {type} firstIndex The index of the first item to be included.
 * @param {type} lastIndex The index of the last item to be included.
 * @returns {OrderedCollection} The new collection containing the requested items.
 */
Collection.prototype.getItems = function(firstIndex, lastIndex) {
    firstIndex = this.normalizedIndex(firstIndex);
    lastIndex = this.normalizedIndex(lastIndex);
    var iterator = this.iterator();
    iterator.toSlot(firstIndex - 1);  // the slot before the first item
    var numberOfItems = lastIndex - firstIndex + 1;
    var array = [];
    while (numberOfItems > 0) {
        var item = iterator.getNext();
        array.push(item);
        numberOfItems--;
    }
    var collection = this.constructor.fromCollection(array);
    return collection;
};


/**
 * This method determines if an item is contained in this collection.
 *
 * @param {Object} item The item to be checked for in this collection.
 * @returns {Boolean} Whether or not the specified item is contained in this collection.
 */
Collection.prototype.containsItem = function(item) {
    var index = this.getIndex(item);
    var result = index > 0;
    return result;
};


/**
 * This method determines whether any of the specified items are contained in
 * this collection.
 *
 * @param {Collection} items The items to be checked for in this collection.
 * @returns {Boolean} Whether or not any of the specified items are contained in this collection.
 */
Collection.prototype.containsAny = function(items) {
    var result = false;
    var iterator = items.iterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        result = this.containsItem(item);
        if (result) break;
    }
    return result;
};


/**
 * This method determines whether all of the specified items are contained in
 * this collection.
 *
 * @param {Collection} items The items to be checked for in this collection.
 * @returns {Boolean} Whether or not all of the specified items are contained in this collection.
 */
Collection.prototype.containsAll = function(items) {
    var result = false;
    var iterator = items.iterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        result = this.containsItem(item);
        if (!result) break;
    }
    return result;
};
