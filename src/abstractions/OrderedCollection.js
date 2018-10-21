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
 * This abstract class defines the methods that all ordered collections must implement.
 * An ordered collection automatically orders its items based on the order defined by the
 <code>this.comparedTo(that)</code> method of the items being compared.
 */
var Collection = require('./Collection').Collection;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new ordered collection of the specified type with the optional
 * parameters that are used to parameterize its type.
 *
 * @param {Number} type The type of ordered collection.
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
 * This function returns a new ordered collection that contains all the items that are in
 * the first ordered collection or the second ordered collection or both.
 *
 * @param {OrderedCollection} collection1 The first ordered collection to be operated on.
 * @param {OrderedCollection} collection2 The second ordered collection to be operated on.
 * @returns {OrderedCollection} The resulting ordered collection.
 */
OrderedCollection.union = function(collection1, collection2) {
    var result = collection1.constructor.fromCollection(collection1, collection1.parameters);
    result.addItems(collection2);
    return result;
};


/**
 * This function returns a new ordered collection that contains the items that are in
 * both the first ordered collection and the second ordered collection.
 *
 * @param {OrderedCollection} collection1 The first ordered collection to be operated on.
 * @param {OrderedCollection} collection2 The second ordered collection to be operated on.
 * @returns {OrderedCollection} The resulting ordered collection.
 */
OrderedCollection.intersection = function(collection1, collection2) {
    var result = collection1.constructor.fromCollection([], collection1.parameters);
    var iterator = collection1.iterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        if (collection2.containsItem(item)) {
            result.addItem(item);
        }
    }
    return result;
};


/**
 * This function returns a new ordered collection that contains the items that are in
 * the first ordered collection but not in the second ordered collection.
 *
 * @param {OrderedCollection} collection1 The first ordered collection to be operated on.
 * @param {OrderedCollection} collection2 The second ordered collection to be operated on.
 * @returns {OrderedCollection} The resulting ordered collection.
 */
OrderedCollection.difference = function(collection1, collection2) {
    var result = collection1.constructor.fromCollection(collection1, collection1.parameters);
    result.removeItems(collection2);
    return result;
};


/**
 * This function returns a new ordered collection that contains all the items that are in
 * the first ordered collection or the second ordered collection but not both.
 *
 * @param {OrderedCollection} collection1 The first ordered collection to be operated on.
 * @param {OrderedCollection} collection2 The second ordered collection to be operated on.
 * @returns {OrderedCollection} The resulting ordered collection.
 */
OrderedCollection.maverick = function(collection1, collection2) {
    var result = collection1.constructor.fromCollection([], collection1.parameters);
    var iterator1 = collection1.iterator();
    var item1;
    var iterator2 = collection2.iterator();
    var item2;
    while (iterator1.hasNext() && iterator2.hasNext()) {
        if (item1 === undefined) item1 = iterator1.getNext();
        if (item2 === undefined) item2 = iterator2.getNext();
        var signum = item1.comparedTo(item2);
        switch (signum) {
            case -1:
                result.addItem(item1);
                item1 = undefined;
                break;
            case 0:
                item1 = undefined;
                item2 = undefined;
                break;
            case 1:
                result.addItem(item2);
                item2 = undefined;
                break;
        }
    }
    while (iterator1.hasNext()) {
        item1 = iterator1.getNext();
        result.addItem(item1);
    }
    while (iterator2.hasNext()) {
        item2 = iterator2.getNext();
        result.addItem(item2);
    }
    return result;
};


// PUBLIC METHODS

/**
 * This abstract method adds the specified item to this ordered collection. It must
 * be implemented by a subclass.
 * 
 * @param {Component} item The item to be added to this ordered collection. 
 * @returns {Boolean} Whether or not the item was successfully added.
 */
OrderedCollection.prototype.addItem = function(item) {
    throw new Error('COLLECTION: Abstract method addItem(item) must be implemented by a concrete subclass.');
};


/**
 * This method adds a list of new items to this ordered collection.
 *
 * @param {Collection} items The list of new items to be added.
 * @returns {Number} The number of items that were actually added to this ordered collection.
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
 * This abstract method removes the specified item from this ordered collection. It must be
 * implemented by a subclass.
 * 
 * @param {Component} item The item to be removed from this collection.
 * @returns {Boolean} Whether or not the item was removed.
 */
OrderedCollection.prototype.removeItem = function(item) {
    throw new Error('COLLECTION: Abstract method removeItem(item) must be implemented by a concrete subclass.');
};


/**
 * This method removes the specified items from this ordered collection.  The number of
 * matching items is returned.
 *
 * @param {Collection} items The list of items to be removed from this ordered collection.
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
