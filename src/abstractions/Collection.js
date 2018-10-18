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


/**
 * The constructor for the Collection class.
 * 
 * @param {Number} type The type of component.
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
 * @param {Visitor} visitor The visitor that wants to visit this composite.
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
 * This method returns whether or not this composite component is empty.
 * 
 * @returns {Boolean} Whether or not this composite component is empty.
 */
Collection.prototype.isEmpty = function() {
    return this.getSize() === 0;
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
