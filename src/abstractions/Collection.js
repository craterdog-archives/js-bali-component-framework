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
 * This abstract class defines the invariant methods that all collections must support.
 */
const moduleName = '/bali/abstractions/Collection';
const associationModuleName = '/bali/collections/Association';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;
const Iterator = require('./Iterator').Iterator;


/**
 * This constructor creates a new collection with the specified ancestry and interfaces
 * with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the collection.
 * @param {Array} interfaces An array of interface names that are supported by the collection.
 * @param {Object} parameters Optional parameters used to parameterize this collection.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Collection} The new collection.
 */
const Collection = function(ancestry, interfaces, parameters, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        interfaces.concat('/bali/interfaces/Sequential'),
        parameters,
        debug
    );
    return this;
};
Collection.prototype = Object.create(Component.prototype);
Collection.prototype.constructor = Collection;
exports.Collection = Collection;


// PUBLIC METHODS

/**
 * This method returns whether or not this collection contains a meaningful value. If the collection
 * is empty it returns <code>false</code>, otherwise it returns <code>true</code>.
 *
 * @returns {Boolean} Whether or not this collection contains a meaningful value.
 */
Collection.prototype.toBoolean = function() {
    return this.getSize() > 0;
};


/**
 * This abstract method returns an array containing the items in this collection.
 * It must be implemented by a subclass.
 *
 * @returns {Array} An array containing the items in this collection.
 */
Collection.prototype.toArray = function() {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$toArray',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method returns whether or not this collection contains any items.
 *
 * @returns {Boolean} Whether or not this collection contains any items.
 */
Collection.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This method returns the number of items that this collection contains.
 *
 * @returns {Number} The number of items that this collection contains.
 */
Collection.prototype.getSize = function() {
    return this.toArray().length;
};


/**
 * This method returns an agent that can be used to iterate over the items in
 * a collection.
 *
 * @returns {Iterator} An iterator for this collection.
 */
Collection.prototype.getIterator = function() {
    const iterator = new CollectionIterator(this, this.debug);
    return iterator;
};


/**
 * This abstract method adds the specified item to the collection.  It must be implemented by
 * a subclass.
 *
 * @param {Component} item The item to be added.
 * @returns {Boolean} Whether or not the item was successfully added.
 */
Collection.prototype.addItem = function(item) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$addItem',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method adds the specified sequence of items to the collection.
 *
 * @param {Array|Sequential} items The items to be added to this collection.
 * @returns {Number} The number of items that were successfully added to the collection.
 */
Collection.prototype.addItems = function(items) {
    if (this.debug > 1) {
        this.validateArgument('$addItems', '$items', items, [
            '/javascript/Undefined',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    items = items || undefined;  // normalize nulls to undefined
    if (items) {
        if (Array.isArray(items)) {
            items.forEach(function(item) {
                item = this.componentize(item, this.debug);
                if (item.isType(associationModuleName)) {
                    item = item.getValue();
                }
                this.addItem(item);
            }, this);
        } else if (items.supportsInterface('/bali/interfaces/Sequential')) {
            const iterator = items.getIterator();
            while (iterator.hasNext()) {
                var item = iterator.getNext();
                item = this.componentize(item, this.debug);
                if (item.isType(associationModuleName)) {
                    item = item.getValue();
                }
                this.addItem(item);
            }
        } else if (typeof items === 'object') {
            const keys = Object.keys(items);
            keys.forEach(function(key) {
                this.addItem(items[key]);
            }, this);
        }
    }
};


/**
 * This abstract method returns the index of the specified item in this collection.
 *
 * @param {Object} item The item to be looked up.
 * @returns {Number} The index of the item in this collection.
 */
Collection.prototype.getIndex = function(item) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$getIndex',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method retrieves the item that is associated with the specified index
 * from this collection.
 *
 * @param {Number} index The index of the desired item.
 * @returns {Component} The item at the position in this collection.
 */
Collection.prototype.getItem = function(index) {
    if (this.debug > 1) {
        this.validateArgument('$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    const iterator = this.getIterator();
    iterator.toSlot(index);
    return iterator.getPrevious();
};


/**
 * This method returns a new collection containing the items in the specified range.
 *
 * @param {Range} range A range depicting the indices of the first and last items to be retrieved.
 * @returns {Collection} The new collection containing the requested items.
 */
Collection.prototype.getItems = function(range) {
    if (this.debug > 1) {
        this.validateArgument('$getItems', '$range', range, [
            '/javascript/String',
            '/bali/collections/Range'
        ]);
    }
    range = this.componentize(range);
    const items = new this.constructor(this.getParameters(), this.debug);
    if (range && range.getIterator) {
        const iterator = range.getIterator();
        while (iterator.hasNext()) {
            const index = iterator.getNext().toInteger();
            const item = this.getItem(index);
            items.addItem(item);
        }
    }
    return items;
};


/**
 * This method determines if an item is contained in this collection.
 *
 * @param {Object} item The item to be checked for in this collection.
 * @returns {Boolean} Whether or not the specified item is contained in this collection.
 */
Collection.prototype.containsItem = function(item) {
    if (this.debug > 1) {
        this.validateArgument('$containsItem', '$item', item, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ]);
    }
    const index = this.getIndex(item);
    const result = index > 0;
    return result;
};


/**
 * This method determines whether any of the specified items are contained in
 * this collection.
 *
 * @param {Array|Sequential} items The items to be checked for in this collection.
 * @returns {Boolean} Whether or not any of the specified items are contained in this collection.
 */
Collection.prototype.containsAny = function(items) {
    if (this.debug > 1) {
        this.validateArgument('$containsAny', '$items', items, [
            '/javascript/Undefined',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    if (Array.isArray(items)) {
        for (const item of items) {
            if (this.containsItem(item)) return true;
        }
    } else if (items && items.getIterator) {
        const iterator = items.getIterator();
        while (iterator.hasNext()) {
            const item = iterator.getNext();
            if (this.containsItem(item)) return true;
        }
    }
    return false;
};


/**
 * This method determines whether all of the specified items are contained in
 * this collection.
 *
 * @param {Array|Sequential} items The items to be checked for in this collection.
 * @returns {Boolean} Whether or not all of the specified items are contained in this collection.
 */
Collection.prototype.containsAll = function(items) {
    if (this.debug > 1) {
        this.validateArgument('$containsAll', '$items', items, [
            '/javascript/Undefined',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    if (Array.isArray(items)) {
        for (const item of items) {
            if (!this.containsItem(item)) return false;
        }
    } else if (items && items.getIterator) {
        const iterator = items.getIterator();
        while (iterator.hasNext()) {
            const item = iterator.getNext();
            if (!this.containsItem(item)) return false;
        }
    }
    return true;
};


/**
 * This abstract method removes all items that are currently contained in this collection.
 * It must be implemented by a subclass.
 */
Collection.prototype.removeAll = function() {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$removeAll',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This constructor creates a new iterator agent that can be used to iterate over the items
 * in a collection.
 *
 * @param {Collection} collection The collection to be iterated over.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Collection} The new collection iterator agent.
 */
const CollectionIterator = function(collection, debug) {
    Iterator.call(
        this,
        ['/bali/abstractions/CollectionIterator'],
        collection,
        debug
    );

    // private attributes
    const array = collection.toArray();
    const size = array.length;
    var slot = 0;  // the slot before the first item

    this.getSlot = function() {
        return slot;
    };

    this.toSlot = function(newSlot) {
        if (this.debug > 1) {
            this.validateArgument('$toSlot', '$newSlot', newSlot, [
                '/javascript/Number'
            ]);
        }
        if (newSlot > size) newSlot = size;
        if (newSlot < -size) newSlot = -size;
        if (newSlot < 0) newSlot = newSlot + size + 1;
        slot = newSlot;
    };

    this.hasPrevious = function() {
        return slot > 0;
    };

    this.hasNext = function() {
        return slot < array.length;
    };

    this.getPrevious = function() {
        if (!this.hasPrevious()) return;
        return array[--slot];
    };

    this.getNext = function() {
        if (!this.hasNext()) return;
        return array[slot++];
    };

    return this;
};
CollectionIterator.prototype = Object.create(Iterator.prototype);
CollectionIterator.prototype.constructor = CollectionIterator;

