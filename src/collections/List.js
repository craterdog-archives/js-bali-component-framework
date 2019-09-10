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
 * This collection class implements a sortable list containing components that are
 * indexed as items in a list. The indexing is ordinal based (e.g. 1..N) and allows either
 * positive indexes starting at the beginning of the list or negative indexes starting at
 * the end of the list as follows:
 * <pre>
 *        1          2          3            N
 *    [item 1] . [item 2] . [item 3] ... [item N]
 *       -N        -(N-1)     -(N-2)        -1
 * </pre>
 * 
 * The items in the list are maintained in the order in which they were added to the list.
 * But they may be reordered by sorting the list.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const composites = require('../composites');
const validate = utilities.validation.validate;


// PUBLIC FUNCTIONS

/**
 * This function creates a new list component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this list. 
 * @param {Number} debug A number in the range [0..3].
 * @returns {List} The new list.
 */
function List(parameters, debug) {
    abstractions.Collection.call(this, '$List', parameters, debug);

    // the array is a private attribute so methods that use it are defined in the constructor
    const array = [];

    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.getSize = function() {
        return array.length;
    };
    
    this.getItem = function(index) {
        if (this.debug > 1) validate('/bali/collections/List', '$getItem', '$index', index, [
            '/javascript/Number'
        ], this.debug);
        index = this.normalizeIndex(index, array.length) - 1;  // JS uses zero based indexing
        return array[index];
    };
    
    this.setItem = function(index, item) {
        if (this.debug > 1) validate('/bali/collections/List', '$setItem', '$index', index, [
            '/javascript/Number'
        ], this.debug);
        if (this.debug > 1) validate('/bali/collections/List', '$setItem', '$item', item, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ], this.debug);
        index = this.normalizeIndex(index, array.length) - 1;  // JS uses zero based indexing
        item = this.convert(item);
        const oldItem = array[index];
        array[index] = item;
        return oldItem;
    };
    
    this.addItem = function(item) {
        if (this.debug > 1) validate('/bali/collections/List', '$addItem', '$item', item, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ], this.debug);
        item = this.convert(item);
        array.push(item);
        return true;
    };
    
    this.addItems = function(items) {
        if (this.debug > 1) validate('/bali/collections/List', '$addItems', '$items', items, [
            '/javascript/Undefined',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ], this.debug);
        var count = 0;
        items = items || undefined;  // normalize nulls to undefined
        if (items) {
            if (Array.isArray(items)) {
                items.forEach(function(item) {
                    item = this.convert(item);
                    if (item.isType('$Association')) {
                        item = item.getValue();
                    }
                    this.addItem(item);
                    count++;
                }, this);
            } else if (items.isSequential()) {
                const iterator = items.getIterator();
                while (iterator.hasNext()) {
                    var item = iterator.getNext();
                    item = this.convert(item);
                    if (item.isType('$Association')) {
                        item = item.getValue();
                    }
                    this.addItem(item);
                    count++;
                }
            } else if (typeof items === 'object') {
                const keys = Object.keys(items);
                keys.forEach(function(key) {
                    this.addItem(items[key]);
                    count++;
                }, this);
            }
        }
        return count;
    },

    this.insertItem = function(index, item) {
        if (this.debug > 1) validate('/bali/collections/List', '$insertItem', '$index', index, [
            '/javascript/Number'
        ], this.debug);
        if (this.debug > 1) validate('/bali/collections/List', '$insertItem', '$item', item, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ], this.debug);
        item = this.convert(item);
        index = this.normalizeIndex(index, array.length) - 1;  // JS uses zero based indexing
        array.splice(index, 0, item);
    };
    
    this.insertItems = function(index, items) {
        if (this.debug > 1) validate('/bali/collections/List', '$insertItems', '$index', index, [
            '/javascript/Number'
        ], this.debug);
        if (this.debug > 1) validate('/bali/collections/List', '$insertItems', '$items', items, [
            '/javascript/Undefined',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ], this.debug);
        if (items && items.getIterator) {
            const iterator = items.getIterator();
            while (iterator.hasNext()) {
                const item = iterator.getNext();
                this.insertItem(index++, item);
            }
        }
    };
    
    this.removeItem = function(index) {
        if (this.debug > 1) validate('/bali/collections/List', '$removeItem', '$index', index, [
            '/javascript/Number'
        ], this.debug);
        index = this.normalizeIndex(index, array.length) - 1;  // JS uses zero based indexing
        const oldItem = array[index];
        if (oldItem) array.splice(index, 1);
        return oldItem;
    };
    
    this.removeItems = function(range) {
        if (this.debug > 1) validate('/bali/collections/List', '$removeItems', '$range', range, [
            '/javascript/Undefined',
            '/bali/collections/Range'
        ], this.debug);
        const items = new List(this.getParameters());
        if (range && range.getIterator) {
            const iterator = range.getIterator();
            while (iterator.hasNext()) {
                const index = iterator.getNext();
                const item = this.removeItem(index);
                items.addItem(item);
            }
        }
        return items;
    };
    
    this.sortItems = function(sorter) {
        sorter = sorter || new utilities.Sorter();
        sorter.sortCollection(this);
    };
    
    this.reverseItems = function() {
        array.reverse();
    };

    this.shuffleItems = function() {
        const generator = new utilities.Generator(this.debug);
        const size = this.getSize();
        for (var index = size; index > 1; index--) {
            const random = generator.index(index);  // in range [1..index] ordinal indexing
            const item = this.getItem(index);
            this.setItem(index, this.getItem(random));
            this.setItem(random, item);
        }
    };
    
    this.deleteAll = function() {
        array.splice(0);
    };

    return this;
}
List.prototype = Object.create(abstractions.Collection.prototype);
List.prototype.constructor = List;
exports.List = List;


// PUBLIC METHODS

/**
 * This function determines whether or not this component supports concatenation operations:
 * <pre>
 *  * concatenation
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports concatenation operations.
 */
List.prototype.isChainable = function() {
    return true;
};


// PUBLIC FUNCTIONS

/**
 * This function returns a new list that contains the items from the second list concatenated
 * onto the end of the first list.
 *
 * @param {List} first The first list to be operated on.
 * @param {List} second The second list to be operated on.
 * @param {Number} debug A number in the range [0..3].
 * @returns {List} The resulting list.
 */
List.concatenation = function(first, second, debug) {
    if (debug > 1) validate('/bali/collections/List', '$concatenation', '$first', first, [
        '/bali/collections/List'
    ], debug);
    if (debug > 1) validate('/bali/collections/List', '$concatenation', '$second', second, [
        '/bali/collections/List'
    ], debug);
    const result = new List(first.getParameters(), debug);
    result.addItems(first);
    result.addItems(second);
    return result;
};
