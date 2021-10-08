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
const moduleName = '/bali/collections/List';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const agents = require('../agents');


/**
 * This constructor creates a new list component with optional parameters that are
 * used to parameterize its type.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {Object} parameters Optional parameters used to parameterize this list.
 * @returns {List} The new list.
 */
const List = function(parameters, debug) {
    abstractions.Collection.call(
        this,
        [ moduleName ],
        [
            '/bali/interfaces/Composite',
            '/bali/interfaces/Sortable',
            '/bali/libraries/Chainable'
        ],
        parameters,
        debug
    );

    // the array is a private attribute so methods that use it are defined in the constructor
    const array = [];

    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.getSize = function() {
        return array.length;
    };

    this.getIndex = function(item) {
        const comparator = new agents.CanonicalComparator(this.debug);
        const index = array.findIndex(function(candidate) {
            return comparator.areEqual(candidate, item);
        }, this);
        return index + 1;  // convert to unit based indexing
    };

    this.getItem = function(index) {
        if (this.debug > 1) {
            this.validateArgument('$getItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        index = abstractions.Component.normalizedIndex(this, index) - 1;  // JS uses zero based indexing
        return array[index];
    };

    this.setItem = function(index, item) {
        if (this.debug > 1) {
            this.validateArgument('$setItem', '$index', index, [
                '/javascript/Number'
            ]);
            this.validateArgument('$setItem', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        index = abstractions.Component.normalizedIndex(this, index) - 1;  // JS uses zero based indexing
        item = this.componentize(item);
        const oldItem = array[index];
        array[index] = item;
        return oldItem;
    };

    this.addItem = function(item) {
        if (this.debug > 1) {
            this.validateArgument('$addItem', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        item = this.componentize(item);
        array.push(item);
        return true;  // always succeeds
    };

    this.insertItem = function(index, item) {
        if (this.debug > 1) {
            this.validateArgument('$insertItem', '$index', index, [
                '/javascript/Number'
            ]);
            this.validateArgument('$insertItem', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        item = this.componentize(item);
        index = abstractions.Component.normalizedIndex(this, index) - 1;  // JS uses zero based indexing
        array.splice(index, 0, item);
        return this;
    };

    this.removeItem = function(index) {
        if (this.debug > 1) {
            this.validateArgument('$removeItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        index = abstractions.Component.normalizedIndex(this, index) - 1;  // JS uses zero based indexing
        return array.splice(index, 1)[0];  // returns the removed item
    };

    this.emptyCollection = function() {
        array.splice(0);
        return this;
    };

    this.reverseItems = function() {
        array.reverse();
        return this;
    };

    return this;
};
List.prototype = Object.create(abstractions.Collection.prototype);
List.prototype.constructor = List;
exports.List = List;


// PUBLIC METHODS

/**
 * This method inserts the specified sequence of items into this list at the
 * specified index.
 *
 * @param {Number} index The index in this list where the first inserted item should go.
 * @param {Sequential} items A sequence of items to be inserted.
 * @returns {List} The updated list.
 */
List.prototype.insertItems = function(index, items) {
    if (this.debug > 1) {
        this.validateArgument('$insertItems', '$index', index, [
            '/javascript/Number'
        ]);
        this.validateArgument('$insertItems', '$items', items, [
            '/javascript/String',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    items = this.componentize(items);
    const iterator = items.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        this.insertItem(index++, item);
    }
    return this;
};


/**
 * This method removes from this list the items associated with the specified sequence of
 * indices.
 *
 * @param {Sequential} indices The sequence of indices for the items to be removed.
 * @returns {List} A list of the removed items.
 */
List.prototype.removeItems = function(indices) {
    if (this.debug > 1) {
        this.validateArgument('$removeItems', '$indices', indices, [
            '/javascript/String',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    indices = this.componentize(indices);
    const items = new List(this.getParameters(), this.debug);
    const iterator = indices.getIterator();
    while (iterator.hasNext()) {
        const index = iterator.getNext().toInteger();
        const item = this.removeItem(index);
        items.addItem(item);
    }
    return items;
};


/**
 * This method sorts the items in this list using the specified sorter and
 * comparator agents.  If no sorter is specified the merge sorter is used.  If no
 * comparator is specified the canonical comparator is used to order the items in
 * their "natural" order.
 *
 * @param {Sorter} sorter The sorter to be used for sorting.
 * @param {Comparator} comparator The comparator to be used for comparing two items.
 * @returns {List} The sorted list.
 */
List.prototype.sortItems = function(sorter, comparator) {
    if (this.debug > 1) {
        this.validateArgument('$sortItems', '$sorter', sorter, [
            '/javascript/Undefined',
            '/bali/abstractions/Sorter'
        ]);
        this.validateArgument('$sortItems', '$comparator', comparator, [
            '/javascript/Undefined',
            '/bali/abstractions/Comparator'
        ]);
    }
    sorter = sorter || new agents.MergeSorter(this.debug);
    return sorter.sortCollection(this, comparator);
};


/**
 * This method randomly shuffles the items in this list.
 *
 * @returns {List} The shuffled list.
 */
List.prototype.shuffleItems = function() {
    const generator = new utilities.Generator(this.debug);
    const size = this.getSize();
    for (var index = size; index > 1; index--) {
        const random = generator.generateIndex(index);  // in range 1..index ordinal indexing
        const item = this.getItem(index);
        this.setItem(index, this.getItem(random));
        this.setItem(random, item);
    }
    return this;
};


/**
 * This method returns the attribute value associated with the specified index.
 *
 * @param {Number} index The index of the attribute value to be returned.
 * @returns {Component} The desired attribute value.
 */
List.prototype.getAttribute = function(index) {
    if (this.debug > 1) {
        this.validateArgument('$getAttribute', '$index', index, [
            '/bali/elements/Number'
        ]);
    }
    index = index.toInteger();
    return this.getItem(index);
};


/**
 * This method sets the attribute value associated with the specified index.
 *
 * @param {Number} index The index of the attribute value to be set.
 * @param {Any} value The new value of the attribute at the specified index.
 * @returns {Component} The previous attribute value.
 */
List.prototype.setAttribute = function(index, value) {
    if (this.debug > 1) {
        this.validateArgument('$setAttribute', '$index', index, [
            '/bali/elements/Number'
        ]);
        this.validateArgument('$setAttribute', '$value', value, [
            '/javascript/Undefined',
            '/javascript/Boolean',
            '/javascript/Number',
            '/javascript/String',
            '/javascript/Array',
            '/javascript/Object',
            '/bali/abstractions/Component'
        ]);
    }
    index = index.toInteger();
    return this.setItem(index, value);
};


// CHAINABLE LIBRARY FUNCTIONS

/**
 * This function returns a new list that contains the items from the second list concatenated
 * onto the end of the first list.
 *
 * @param {List} first The first list to be operated on.
 * @param {List} second The second list to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {List} The resulting list.
 */
List.chain = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$chain', '$first', first, [
            moduleName
        ]);
        abstractions.Component.validateArgument(moduleName, '$chain', '$second', second, [
            moduleName
        ]);
    }
    const result = new List(first.getParameters(), debug);
    result.addItems(first);
    result.addItems(second);
    return result;
};

