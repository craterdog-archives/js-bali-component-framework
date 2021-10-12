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
 * This composite class implements a hierarchical composite. Each node in the tree may
 * contain zero or more children. A node with no children is an elemental component.
 * Nodes may also be any other type of component including catalogs, lists, sets,
 * stacks, and ranges. Collectively, all of the components including the nodes are
 * used to build up the parse trees that result from parsing strings containing
 * Bali Document Notation™.
 */
const moduleName = '/bali/trees/Node';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const agents = require('../agents');


// PUBLIC FUNCTIONS

/**
 * This function creates a new node component.
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
 * @param {String} type The type of the node component.
 * @returns {Node} The new node component.
 */
const Node = function(type, debug) {
    abstractions.Component.call(
        this,
        [
            type,
            moduleName
        ],
        [
            '/bali/interfaces/Composite',
            '/bali/interfaces/Sequential'
        ],
        undefined,
        debug
    );

    // private attributes
    const array = [];

    this.isSignificant = function() {
        return array.length > 0;
    };

    this.toArray = function() {
        return array.slice();  // a copy of the array
    };

    this.isEmpty = function() {
        return array.length === 0;
    };

    this.getSize = function() {
        return array.length;
    };

    this.getIterator = function() {
        const iterator = new NodeIterator(this, this.debug);
        return iterator;
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

    this.getItems = function(range) {
        if (this.debug > 1) {
            this.validateArgument('$getItems', '$range', range, [
                '/javascript/String',
                '/bali/collections/Range'
            ]);
        }
        range = this.componentize(range);
        const items = new Node(this.getType(), this.debug);
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

    this.addItem = function(item) {
        if (this.debug > 1) {
            this.validateArgument('$addItem', '$item', item, [
                '/bali/abstractions/Component'
            ]);
        }
        item = this.componentize(item);
        array.push(item);
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

    this.getAttribute = function(index) {
        if (this.debug > 1) {
            this.validateArgument('$getAttribute', '$index', index, [
                '/bali/elements/Number'
            ]);
        }
        index = index.toInteger();
        return this.getItem(index);
    };

    this.setAttribute = function(index, value) {
        if (this.debug > 1) {
            this.validateArgument('$setAttribute', '$index', index, [
                '/bali/elements/Number'
            ]);
            this.validateArgument('$setAttribute', '$value', value, [
                '/bali/abstractions/Component'
            ]);
        }
        index = index.toInteger();
        return this.setItem(index, value);
    };

    return this;
};
Node.prototype = Object.create(abstractions.Component.prototype);
Node.prototype.constructor = Node;
exports.Node = Node;


/**
 * This constructor creates a new iterator agent that can be used to iterate over the items
 * in a tree node.
 *
 * @param {Node} node The tree node to be iterated over.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Iterator} The new node iterator agent.
 */
const NodeIterator = function(node, debug) {
    abstractions.Iterator.call(
        this,
        ['/bali/trees/NodeIterator'],
        node,
        debug
    );

    // private attributes
    const array = node.toArray();
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
NodeIterator.prototype = Object.create(abstractions.Iterator.prototype);
NodeIterator.prototype.constructor = NodeIterator;
exports.NodeIterator = NodeIterator;

