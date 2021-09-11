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
const agents = require('../agents');


// PUBLIC FUNCTIONS

/**
 * This function creates a new list component with optional parameters that are
 * used to parameterize its type.
 *
 * @param {Object} parameters Optional parameters used to parameterize this list.
 * @param {Number} debug A number in the range 0..3.
 * @returns {List} The new list.
 */
const List = function(parameters, debug) {
    abstractions.Collection.call(
        this,
        ['/bali/collections/List'],
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

    this.getIndex = function(item) {
        var index = 0;
        const comparator = new agents.CanonicalComparator(this.debug);
        array.forEach(function(candidate) {
            index++;
            if (comparator.areEqual(candidate, item)) return index;
        }, this);
        return 0;
    };

    this.getItem = function(index) {
        const validator = new utilities.Validator(this.debug);
        if (this.debug > 1) {
            validator.validateType('/bali/collections/List', '$getItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        index = validator.normalizeIndex(this, index) - 1;  // JS uses zero based indexing
        return array[index];
    };

    this.setItem = function(index, item) {
        const validator = new utilities.Validator(this.debug);
        if (this.debug > 1) {
            validator.validateType('/bali/collections/List', '$setItem', '$index', index, [
                '/javascript/Number'
            ]);
            validator.validateType('/bali/collections/List', '$setItem', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        index = validator.normalizeIndex(this, index) - 1;  // JS uses zero based indexing
        item = this.componentize(item, this.debug);
        const oldItem = array[index];
        array[index] = item;
        return oldItem;
    };

    this.addItem = function(item) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/List', '$addItem', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        item = this.componentize(item, this.debug);
        array.push(item);
        return true;
    };

    this.insertItem = function(index, item) {
        const validator = new utilities.Validator(this.debug);
        if (this.debug > 1) {
            validator.validateType('/bali/collections/List', '$insertItem', '$index', index, [
                '/javascript/Number'
            ]);
            validator.validateType('/bali/collections/List', '$insertItem', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        item = this.componentize(item, this.debug);
        index = validator.normalizeIndex(this, index) - 1;  // JS uses zero based indexing
        array.splice(index, 0, item);
    };

    this.insertItems = function(index, items) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/List', '$insertItems', '$index', index, [
                '/javascript/Number'
            ]);
            validator.validateType('/bali/collections/List', '$insertItems', '$items', items, [
                '/javascript/Undefined',
                '/javascript/Array',
                '/bali/interfaces/Sequential'
            ]);
        }
        if (Array.isArray(items)) {
            items.forEach(function(item) {
                this.insertItem(index++, item);
            }, this);
        } else if (items && items.getIterator) {
            const iterator = items.getIterator();
            while (iterator.hasNext()) {
                const item = iterator.getNext();
                this.insertItem(index++, item);
            }
        }
    };

    this.removeItem = function(index) {
        const validator = new utilities.Validator(this.debug);
        if (this.debug > 1) {
            validator.validateType('/bali/collections/List', '$removeItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        index = validator.normalizeIndex(this, index) - 1;  // JS uses zero based indexing
        array.splice(index, 1);
    };

    this.removeItems = function(range) {
        const validator = new utilities.Validator(this.debug);
        if (this.debug > 1) {
            validator.validateType('/bali/collections/List', '$removeItems', '$range', range, [
                '/javascript/String',
                '/bali/collections/Range'
            ]);
        }
        range = this.componentize(range);
        var first = range.getFirst();
        if (first === undefined) {
            first = 1;  // first character
        } else {
            first = first.toInteger();
        }
        var last = range.getLast();
        if (last === undefined) {
            last = -1;  // last character
        } else {
            last = last.toInteger();
        }
        first = validator.normalizeIndex(this, first) - 1;  // zero-based indexing for JS
        last = validator.normalizeIndex(this, last) - 1;  // zero-based indexing for JS
        array.splice(first, last - first + 1);  // include the last item
    };

    this.removeAll = function() {
        array.splice(0);
    };

    this.sortItems = function(sorter) {
        sorter = sorter || new agents.MergeSorter(new agents.CanonicalComparator(this.debug), this.debug);
        sorter.sortCollection(this);
    };

    this.reverseItems = function() {
        array.reverse();
    };

    this.shuffleItems = function() {
        const generator = new utilities.Generator(this.debug);
        const size = this.getSize();
        for (var index = size; index > 1; index--) {
            const random = generator.generateIndex(index);  // in range 1..index ordinal indexing
            const item = this.getItem(index);
            this.setItem(index, this.getItem(random));
            this.setItem(random, item);
        }
    };

    this.getAttribute = function(index) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/List', '$getAttribute', '$index', index, [
                '/bali/elements/Number'
            ]);
        }
        index = index.toInteger();
        return this.getItem(index);
    };

    this.setAttribute = function(index, value) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/List', '$setAttribute', '$index', index, [
                '/bali/elements/Number'
            ]);
            validator.validateType('/bali/collections/List', '$setAttribute', '$value', value, [
                '/bali/abstractions/Component'
            ]);
        }
        index = index.toInteger();
        return this.setItem(index, value);
    };

    return this;
};
List.prototype = Object.create(abstractions.Collection.prototype);
List.prototype.constructor = List;
exports.List = List;


// PUBLIC FUNCTIONS

/**
 * This method returns an object that can be used to iterate over the items in
 * this list.
 *
 * @returns {Iterator} An iterator for this list.
 */
List.prototype.getIterator = function() {
    const iterator = new agents.ArrayIterator(this.toArray(), this.debug);
    return iterator;
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
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/collections/List', '$chain', '$first', first, [
            '/bali/collections/List'
        ]);
        validator.validateType('/bali/collections/List', '$chain', '$second', second, [
            '/bali/collections/List'
        ]);
    }
    const result = new List(first.getParameters(), debug);
    result.addItems(first);
    result.addItems(second);
    return result;
};
