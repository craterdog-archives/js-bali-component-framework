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
 * This ordered collection class implements an ordered collection of components
 * that does not allow duplicate items. A set automatically orders its items based
 * on the order defined by the <code>this.comparedTo(that)</code> method of the
 * items being compared.
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var OrderedCollection = require('../abstractions/OrderedCollection').OrderedCollection;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new set component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Set} The new set.
 */
function Set(parameters) {
    OrderedCollection.call(this, types.SET, parameters);
    this.complexity += 2;  // account for the '[' ']' delimiters
    return this;
}
Set.prototype = Object.create(OrderedCollection.prototype);
Set.prototype.constructor = Set;
exports.Set = Set;


/**
 * This function creates a new set using the specified collection to seed the
 * initial items in the set. The set may be parameterized by specifying optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Array|Object|Collection} collection The collection containing the initial
 * items to be used to seed the new set.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {List} The new set.
 */
Set.fromCollection = function(collection, parameters) {
    var set = new Set(parameters);
    var iterator;
    var type = collection.constructor.name;
    switch (type) {
        case 'Array':
            collection.forEach(function(item) {
                set.addItem(item);
            });
            break;
        case 'List':
        case 'Set':
        case 'Stack':
            iterator = collection.iterator();
            while (iterator.hasNext()) {
                set.addItem(iterator.getNext());
            }
            break;
        default:
            throw new Error('SET: A set cannot be initialized using a collection of type: ' + type);
    }
    return set;
};


/**
 * This function returns a new set that contains the items that are in
 * both the first set and the second set, eliminating any duplicate items.
 *
 * @param {Set} set1 The first set to be operated on.
 * @param {Set} set2 The second set to be operated on.
 * @returns {Set} The resulting set.
 */
Set.and = function(set1, set2) {
    var result = new Set();
    var iterator = set1.iterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        if (set2.containsItem(item)) {
            result.addItem(item);
        }
    }
    return result;
};


/**
 * This function returns a new set that contains the items that are in
 * the first set but not in the second set.
 *
 * @param {Set} set1 The first set to be operated on.
 * @param {Set} set2 The second set to be operated on.
 * @returns {Set} The resulting set.
 */
Set.sans = function(set1, set2) {
    var result = Set.fromCollection(set1);
    result.removeItems(set2);
    return result;
};


/**
 * This function returns a new set that contains all the items that are in
 * the first set or the second set or both.
 *
 * @param {Set} set1 The first set to be operated on.
 * @param {Set} set2 The second set to be operated on.
 * @returns {Set} The resulting set.
 */
Set.or = function(set1, set2) {
    var result = Set.fromCollection(set1);
    result.addItems(set2);
    return result;
};


/**
 * This function returns a new set that contains all the items that are in
 * the first set or the second set but not both.
 *
 * @param {Set} set1 The first set to be operated on.
 * @param {Set} set2 The second set to be operated on.
 * @returns {Set} The resulting set.
 */
Set.xor = function(set1, set2) {
    var result = new Set();
    var iterator1 = set1.iterator();
    var item1;
    var iterator2 = set2.iterator();
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
 * This method creates an empty copy of this set.
 * 
 * @returns {Set} The resulting empty set.
 */
Set.prototype.emptyCopy = function() {
    var copy = new Set(this.parameters);
    return copy;
};


/**
 * This method attempts to add the specified item to this set. If the item is already
 * in the set this method returns false.
 * 
 * @param {String|Number|Boolean|Component} item The item to be added.
 * @returns {Boolean} Whether or not the item was successfully added.
 */
Set.prototype.addItem = function(item) {
    item = Composite.asComponent(item);
    var result = this.tree.insert(item);
    if (result) {
        this.complexity += item.complexity;
        if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
    }
    return result;
};


/*
 * This method attempts to remove the specified item from this collection. If the set does
 * not contain the item the method returns false.
 * 
 * @param {String|Number|Boolean|Component} item The item to be removed from the collection.
 * @returns {Boolean} Whether or not the item was removed.
 */
Set.prototype.removeItem = function(item) {
    item = Composite.asComponent(item);
    var result = this.tree.remove(item);
    if (result) {
        this.complexity -= item.complexity;
        if (this.getSize() > 0) this.complexity -= 2;  // account for the ', ' separator
    }
    return result;
};


/**
 * This method removes all items from this set.
 */
Set.prototype.removeAll = function() {
    var size = this.getSize();
    if (size > 1) this.complexity -= (size - 1) * 2;  // account for all the ', ' separators
    this.tree.clear();
};
