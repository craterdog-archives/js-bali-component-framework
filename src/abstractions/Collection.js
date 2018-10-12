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


/**
 * The constructor for the Collection class.
 * 
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Collection} The new collection.
 */
function Collection(type, parameters) {
    Composite.call(this, type, parameters);
    this.length += 2;  // account for the '[' ']' delimiters
    return this;
}
Collection.prototype = Object.create(Composite.prototype);
Collection.prototype.constructor = Collection;
exports.Collection = Collection;


// PUBLIC METHODS

/**
 * This abstract method returns an empty copy of this collection. It must be implemented
 * by a subclass.
 * 
 * @returns {Collection} An empty copy of this collection.
 */
Collection.prototype.emptyCopy = function() {
    throw new Error('COLLECTION: Abstract method emptyCopy() must be implemented by a concrete subclass.');
};


/**
 * This abstract method adds the specified item to this collection. It must be implemented
 * by a subclass.
 * 
 * @param {Component} item The item to be added to this collection. 
 * @returns {Boolean} Whether or not the item was successfully added.
 */
Collection.prototype.addItem = function(item) {
    throw new Error('COLLECTION: Abstract method addItem(item) must be implemented by a concrete subclass.');
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
 * This method returns a new collection of items starting with the item at the first index
 * and including the item at the last index.
 * 
 * @param {type} firstIndex The index of the first item to be included.
 * @param {type} lastIndex The index of the last item to be included.
 * @returns {Collection} The new collection containing the requested items.
 */
Collection.prototype.getItems = function(firstIndex, lastIndex) {
    firstIndex = this.normalizedIndex(firstIndex);
    lastIndex = this.normalizedIndex(lastIndex);
    var result = this.emptyCopy();
    var iterator = this.iterator();
    iterator.toSlot(firstIndex - 1);  // the slot before the first item
    var numberOfItems = lastIndex - firstIndex + 1;
    while (numberOfItems > 0) {
        var item = iterator.getNext();
        result.addItem(item);
        numberOfItems--;
    }
    return result;
};


/**
 * This method adds a list of new items to this collection.  The new
 * items will be added in the order they appear in the specified collection.
 *
 * @param {Collection} items The list of new items to be added.
 * @returns {Number} The number of items that were actually added to this collection.
 */
Collection.prototype.addItems = function(items) {
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
