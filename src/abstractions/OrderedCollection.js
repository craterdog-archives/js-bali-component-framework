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
 * This abstract class defines the invariant methods that all ordered collections must inherit.
 * An ordered collection automatically orders its items based on the comparison function
 * implemented by a specified <code>Comparator</code>.  If no comparator is specified, the
 * a natural NaturalComparator is used. Duplicate items may be enabled as well, they are not
 * allowed by default.
 */
var Collection = require('./Collection').Collection;


/**
 * The constructor for the OrderedCollection class.
 *
 * @param {Number} type The type of component.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {OrderedCollection} The new ordered collection.
 */
function OrderedCollection(type, parameters) {
    Collection.call(this, type, parameters);
    return this;
}
OrderedCollection.prototype = Object.create(Collection.prototype);
OrderedCollection.prototype.constructor = OrderedCollection;
exports.OrderedCollection = OrderedCollection;


/**
 * This abstract method returns an empty copy of this collection. It must be implemented
 * by a subclass.
 * 
 * @returns {Collection} An empty copy of this collection.
 */
OrderedCollection.prototype.emptyCopy = function() {
    throw new Error('COLLECTION: Abstract method emptyCopy() must be implemented by a concrete subclass.');
};


/**
 * This method returns a new collection of items starting with the item at the first index
 * and including the item at the last index.
 * 
 * @param {type} firstIndex The index of the first item to be included.
 * @param {type} lastIndex The index of the last item to be included.
 * @returns {Collection} The new collection containing the requested items.
 */
OrderedCollection.prototype.getItems = function(firstIndex, lastIndex) {
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
 * This abstract method adds the specified item to this collection. It must be implemented
 * by a subclass.
 * 
 * @param {Component} item The item to be added to this collection. 
 * @returns {Boolean} Whether or not the item was successfully added.
 */
OrderedCollection.prototype.addItem = function(item) {
    throw new Error('COLLECTION: Abstract method addItem(item) must be implemented by a concrete subclass.');
};


/**
 * This method adds a list of new items to this collection.  The new
 * items will be added in the order they appear in the specified collection.
 *
 * @param {Collection} items The list of new items to be added.
 * @returns {Number} The number of items that were actually added to this collection.
 */
OrderedCollection.prototype.addItems = function(items) {
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


/*
 * This abstract method removes the specified item from this collection. It must be
 * implemented by a subclass.
 * 
 * @param {Component} item The item to be removed from this collection.
 * @returns {Boolean} Whether or not the item was removed.
 */
OrderedCollection.prototype.removeItem = function(item) {
    throw new Error('COLLECTION: Abstract method removeItem(item) must be implemented by a concrete subclass.');
};


/**
 * This method removes the specified items from this collection.  The number of
 * matching items is returned.
 *
 * @param {Collection} items The list of items to be removed from this collection.
 * @returns {Number} The number of items that were actually removed.
 */
OrderedCollection.prototype.removeItems = function(items) {
    var count = 0;
    var iterator = items.iterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        if (this.removeItem(item)) {
            count++;
        }
    }
    return count;
};
