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
const agents = require('../agents');
const Component = require('./Component').Component;
const Iterator = require('./Iterator').Iterator;
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new collection with the specified ancestry and interfaces
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
        ancestry.concat('/bali/abstractions/Collection'),
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
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this collection.
 */
Collection.prototype.acceptVisitor = function(visitor) {
    visitor.visitCollection(this);
};


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
        $module: '/bali/abstractions/Collection',
        $procedure: '$toArray',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
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
 * This method returns an object that can be used to iterate over the items in
 * this collection.
 * @returns {Iterator} An iterator for this collection.
 */
Collection.prototype.getIterator = function() {
    const iterator = new CollectionIterator(this.toArray(), this.getParameters(), this.debug);
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
        $module: '/bali/abstractions/Collection',
        $procedure: '$addItem',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
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
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/abstractions/Collection', '$addItems', '$items', items, [
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
                if (item.isType('/bali/composites/Association')) {
                    item = item.getValue();
                }
                this.addItem(item);
            }, this);
        } else if (items.supportsInterface('/bali/interfaces/Sequential')) {
            const iterator = items.getIterator();
            while (iterator.hasNext()) {
                var item = iterator.getNext();
                item = this.componentize(item, this.debug);
                if (item.isType('/bali/composites/Association')) {
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
 * This method converts negative item indexes into their corresponding positive
 * indexes and then checks to make sure the index is in the range 1..size. NOTE: if the
 * collection is empty then the resulting index will be zero.
 *
 * The mapping between indexes is as follows:
 * <pre>
 * Negative Indexes:   -N      -N + 1     -N + 2     -N + 3   ...   -1
 * Positive Indexes:    1         2          3          4     ...    N
 * </pre>
 *
 * @param {Number} index The index to be normalized -N..N.
 * @returns {Number} The normalized 1..N index.
 */
Collection.prototype.normalizedIndex = function(index) {
    if (this.debug > 1) {
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/abstractions/Collection', '$normalizedIndex', '$index', index, [
            '/javascript/Number'
        ]);
    }
    const size = this.getSize();
    if (index > size || index < -size) {
        const exception = new Exception({
            $module: '/bali/abstractions/Collection',
            $procedure: '$normalizedIndex',
            $exception: '$invalidIndex',
            $index: index,
            $range: '' + -size + '..' + size,
            $text: 'The index is out of range.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
    if (index < 0) index = index + size + 1;
    return index;
};


/**
 * This method returns the index of the specified item in this collection.
 * NOTE: It is tempting when dealing with a collection that uses an array
 * as an underlying data composite to use the Array.indexOf() method to
 * provide a faster implementation of this method. However, the indexOf()
 * method uses strict equality checks which for items that are objects
 * returns false even when all attributes on each item are the same. Therefore
 * it is better not to override this method in that case.
 *
 * @param {Object} item The item to be looked up.
 * @returns {Number} The index of the item in this collection.
 */
Collection.prototype.getIndex = function(item) {
    if (this.debug > 1) {
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/abstractions/Collection', '$getIndex', '$item', item, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ]);
    }
    var index = 0;
    const iterator = this.getIterator();
    while (iterator.hasNext()) {
        const candidate = iterator.getNext();
        index++;
        if (candidate.isEqualTo(item)) return index;
    }
    return 0;  // not found
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
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/abstractions/Collection', '$getItem', '$index', index, [
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
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/abstractions/Collection', '$getItems', '$range', range, [
            '/javascript/String',
            '/bali/collections/Range'
        ]);
    }
    range = this.componentize(range);
    const items = new this.constructor(this.getParameters(), this.debug);
    if (range && range.getIterator) {
        const iterator = range.getIterator();
        while (iterator.hasNext()) {
            const index = iterator.getNext();
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
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/abstractions/Collection', '$containsItem', '$item', item, [
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
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/abstractions/Collection', '$containsAny', '$items', items, [
            '/javascript/Undefined',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    var result = false;
    if (Array.isArray(items)) {
        items.forEach(function(item) {
            result = this.containsItem(item);
            if (result) return;
        }, this);
    } else if (items && items.getIterator) {
        const iterator = items.getIterator();
        while (iterator.hasNext()) {
            const item = iterator.getNext();
            result = this.containsItem(item);
            if (result) break;
        }
    }
    return result;
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
        const validator = new agents.Validator(this.debug);
        validator.validateType('/bali/abstractions/Collection', '$containsAll', '$items', items, [
            '/javascript/Undefined',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    var result = false;
    if (Array.isArray(items)) {
        items.forEach(function(item) {
            result = this.containsItem(item);
            if (!result) return;
        }, this);
    } else if (items && items.getIterator) {
        const iterator = items.getIterator();
        while (iterator.hasNext()) {
            const item = iterator.getNext();
            result = this.containsItem(item);
            if (!result) break;
        }
    }
    return result;
};


/**
 * This abstract method removes all items that are currently contained in this collection.
 * It must be implemented by a subclass.
 */
Collection.prototype.removeAll = function() {
    const exception = new Exception({
        $module: '/bali/abstractions/Collection',
        $procedure: '$removeAll',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


// PRIVATE CLASSES

const CollectionIterator = function(array, parameters, debug) {
    Iterator.call(
        this,
        ['/bali/collections/CollectionIterator'],
        parameters,
        debug
    );

    // the array and current slot index are private attributes so methods that use them
    // are defined in the constructor
    var slot = 0;  // the slot before the first item

    this.toStart = function() {
        slot = 0;  // the slot before the first item
    };

    this.toSlot = function(newSlot) {
        const size = array.length;
        if (newSlot > size) newSlot = size;
        if (newSlot < -size) newSlot = -size;
        if (newSlot < 0) newSlot = newSlot + size + 1;
        slot = newSlot;
    };

    this.toEnd = function() {
        slot = array.length;  // the slot after the last item
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
Collection.Iterator = CollectionIterator;
