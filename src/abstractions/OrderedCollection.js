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
