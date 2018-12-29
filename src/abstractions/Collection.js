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
const Composite = require('./Composite').Composite;


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
Collection.prototype.acceptVisitor = function(visitor) {
    visitor.visitCollection(this);
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
    var iterator = this.getIterator();
    while (iterator.hasNext()) {
        var candidate = iterator.getNext();
        index++;
        if (component.isEqualTo(candidate)) return index;
    }
    return 0;  // not found
};


/**
 * This abstract method retrieves the item that is associated with the specified index
 * from this collection. It must be implemented by a subclass.
 * 
 * @param {Number} index The index of the desired item.
 * @returns {Component} The item at the position in this collection.
 */
Collection.prototype.getItem = function(index) {
    throw new Error('BUG: The abstract method getItem(index) must be implemented by a concrete subclass.');
};


/**
 * This method returns a new collection of items starting with the item at the
 * first index and including the item at the last index.
 * 
 * @param {Number} firstIndex The index of the first item to be included.
 * @param {Number} lastIndex The index of the last item to be included.
 * @returns {Collection} The new collection containing the requested items.
 */
Collection.prototype.getItems = function(firstIndex, lastIndex) {
    firstIndex = this.normalizeIndex(firstIndex);
    lastIndex = this.normalizeIndex(lastIndex);
    var iterator = this.getIterator();
    iterator.toSlot(firstIndex - 1);  // the slot before the first item
    var numberOfItems = lastIndex - firstIndex + 1;
    var array = [];
    while (numberOfItems > 0) {
        var item = iterator.getNext();
        array.push(item);
        numberOfItems--;
    }
    var collection = this.constructor.from(array);
    return collection;
};


/**
 * This abstract method adds the specified item to this collection. It must
 * be implemented by a subclass.
 * 
 * @param {Component} item The item to be added to this collection. 
 * @returns {Boolean} Whether or not the item was successfully added.
 */
Collection.prototype.addItem = function(item) {
    throw new Error('BUG: The abstract method addItem(item) must be implemented by a concrete subclass.');
};


/**
 * This method adds a collection of new items to this collection.
 *
 * @param {Array|Collection} items The collection of new items to be added.
 * @returns {Number} The number of items that were actually added to this collection.
 */
Collection.prototype.addItems = function(items) {
    var count = 0;
    if (items.constructor.name === 'Array') {
        items.forEach(function(item) {
            if (this.addItem(item)) {
                count++;
            }
        }, this);
    } else {
        var iterator = items.getIterator();
        while (iterator.hasNext()) {
            var item = iterator.getNext();
            if (this.addItem(item)) {
                count++;
            }
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
    var iterator = items.getIterator();
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
    var iterator = items.getIterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        result = this.containsItem(item);
        if (!result) break;
    }
    return result;
};


/**
 * This abstract method removes all of the items from this collection. It must
 * be implemented by a subclass.
 */
Collection.prototype.removeAll = function() {
    throw new Error('BUG: The abstract method removeAll() must be implemented by a concrete subclass.');
};

