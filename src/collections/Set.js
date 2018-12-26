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
 * This collection class implements an ordered set of components that does not allow
 * duplicate items. A set automatically orders its items based on the natural order
 * defined by the <code>Comparator</code> class.
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var Collection = require('../abstractions/Collection').Collection;
var Comparator = require('../utilities/Comparator').Comparator;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new set component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this set. 
 * @returns {Set} The new set.
 */
function Set(parameters) {
    Collection.call(this, types.SET, parameters);
    this.tree = new RandomizedTree(new Comparator());
    this.complexity += 2;  // account for the '[' ']' delimiters
    return this;
}
Set.prototype = Object.create(Collection.prototype);
Set.prototype.constructor = Set;
exports.Set = Set;


/**
 * This function creates a new set using the specified collection to seed the
 * initial items in the set. The set may be parameterized by specifying optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Array|Object|Collection} collection The collection containing the initial
 * items to be used to seed the new set.
 * @param {Parameters} parameters Optional parameters used to parameterize this set. 
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
            iterator = collection.getIterator();
            while (iterator.hasNext()) {
                set.addItem(iterator.getNext());
            }
            break;
        default:
            throw new Error('BUG: A set cannot be initialized using a collection of type: ' + type);
    }
    return set;
};


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this set.
 */
Set.prototype.acceptVisitor = function(visitor) {
    visitor.visitSet(this);
};


/**
 * This method returns the number of items that are currently in this set.
 * 
 * @returns {Number} The number of items that are in this set.
 */
Set.prototype.getSize = function() {
    return this.tree.size;
};


/**
 * This method returns an object that can be used to iterate over the items in
 * this set.
 * @returns {Iterator} An iterator for this set.
 */
Set.prototype.getIterator = function() {
    var iterator = new TreeIterator(this.tree);
    return iterator;
};


/**
 * This method returns an array containing the items in this set.
 * 
 * @returns {Array} An array containing the items in this set.
 */
Set.prototype.toArray = function() {
    var array = [];
    var iterator = new TreeIterator(this.tree);
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        array.push(item);
    }
    return array;
};


/**
 * This method determines the index of the specified item in this set.
 * 
 * @param {String|Number|Boolean|Component} item The item to be indexed.
 * @returns {Number} The index of the specified item.
 */
Set.prototype.getIndex = function(item) {
    item = Composite.asComponent(item);
    var index = this.tree.index(item) + 1;  // convert to ordinal based indexing
    return index;
};


/**
 * This method retrieves the item that is associated with the specified index from this set.
 * 
 * @param {Number} index The index of the desired item in this set.
 * @returns {Component} The item in this set that is associated with the specified index.
 */
Set.prototype.getItem = function(index) {
    index = this.normalizeIndex(index) - 1;  // convert to javascript zero based indexing
    var item = this.tree.node(index).value;
    return item;
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
 * This method attempts to remove the specified item from this set. If the set does
 * not contain the item the method returns false.
 * 
 * @param {String|Number|Boolean|Component} item The item to be removed from the set.
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
 * This method removes the specified items from this set.  The number of
 * matching items is returned.
 *
 * @param {Collection} items The collection of items to be removed from this set.
 * @returns {Number} The number of items that were actually removed.
 */
Set.prototype.removeItems = function(items) {
    var count = 0;
    var iterator = items.getIterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        if (this.removeItem(item)) {
            count++;
        }
    }
    return count;
};


/**
 * This method removes all items from this set.
 */
Set.prototype.removeAll = function() {
    var size = this.getSize();
    if (size > 1) this.complexity -= (size - 1) * 2;  // account for all the ', ' separators
    this.tree.clear();
};


// PRIVATE CLASSES

/*
 * The set class is backed by a binary tree (treap) structure. Therefore,
 * it can be traversed more efficiently using a custom iterator. This class implements a tree iterator.
 */

function TreeIterator(tree) {
    this.tree = tree;
    this.slot = 0;  // the slot before the first item
    this.previous = undefined;
    this.next = this.tree.minimum(this.tree.root);
    return this;
}
TreeIterator.prototype.constructor = TreeIterator;


TreeIterator.prototype.toStart = function() {
    this.slot = 0;  // the slot before the first item
    this.previous = undefined;
    this.next = this.tree.minimum(this.tree.root);
};


TreeIterator.prototype.toSlot = function(slot) {
    this.slot = slot;
    this.previous = this.tree.node(slot - 1);  // javascript index of item before the slot
    this.next = this.tree.successor(this.previous);
};


TreeIterator.prototype.toEnd = function() {
    this.slot = this.tree.size;  // the slot after the last item
    this.previous = this.tree.maximum(this.tree.root);
    this.next = undefined;
};


TreeIterator.prototype.hasPrevious = function() {
    return this.slot > 0;
};


TreeIterator.prototype.hasNext = function() {
    return this.slot < this.tree.size;
};


TreeIterator.prototype.getPrevious = function() {
    if (!this.hasPrevious()) throw new Error('BUG: Unable to retrieve the previous item from an iterator that is at the beginning of a set.');
    var value = this.previous.value;
    this.next = this.previous;
    this.previous = this.tree.predecessor(this.next);
    this.slot--;
    return value;
};


TreeIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('BUG: Unable to retrieve the next item from an iterator that is at the end of a set.');
    var value = this.next.value;
    this.previous = this.next;
    this.next = this.tree.successor(this.previous);
    this.slot++;
    return value;
};


/*
 * This class implements a randomized self balancing binary search tree structure (treap).
 * It maintains an ordering of the values in the tree and provides O(log(n)) search and
 * update performance.
 */

function RandomizedTree(comparator) {
    this.size = 0;
    this.comparator = comparator;
    return this;
}
RandomizedTree.prototype.constructor = RandomizedTree;


RandomizedTree.prototype.contains = function(value) {
    return this.find(value) !== undefined;
};


RandomizedTree.prototype.index = function(value) {
    var index = 0;
    var candidate = this.minimum(this.root);
    while (candidate && !this.comparator.componentsAreEqual(candidate.value, value)) {
        candidate = this.successor(candidate);
        index++;
    }
    if (candidate) {
        return index;
    } else {
        return -1;
    }
};


RandomizedTree.prototype.node = function(index) {
    var candidate = this.minimum(this.root);
    while (index > 0 && index < this.size) {
        candidate = this.successor(candidate);
        index--;
    }
    return candidate;
};


RandomizedTree.prototype.insert = function(value) {
    // handle the empty tree case
    if (this.root === undefined) {
        this.root = {value: value, priority: Math.random()};
        this.size++;
        return true;
    }

    // find the parent of the new node
    var parent;
    var candidate = this.root;
    while (candidate && candidate.value) {
        parent = candidate;
        switch (this.comparator.compareComponents(candidate.value, value)) {
            case 1:
                candidate = candidate.left;
                break;
            case 0:
                // the value is already in the tree
                return false;
            case -1:
                candidate = candidate.right;
                break;
        }
    }

    // insert the new node as a child of the parent
    var child = { value: value, parent: parent, priority: Math.random()};
    switch (this.comparator.compareComponents(parent.value, value)) {
        case 1:
            parent.left = child;
            break;
        case 0:
        case -1:
            parent.right = child;
            break;
    }
    this.size++;

    // rebalance the tree by randomized priorities
    while (child !== this.root) {
        parent = child.parent;
        if (parent.priority < child.priority) {
            if (child === parent.left) {
                this.rotateRight(parent);
            } else {
                this.rotateLeft(parent);
            }
        } else {
            break;
        }
    }
    return true;
};


RandomizedTree.prototype.remove = function(value) {
    var candidate = this.find(value);
    if (candidate) {
        // rotate the candidate down to leaf
        this.rotateDown(candidate);

        // then remove it
        if (candidate.left === undefined) {
            this.replace(candidate, candidate.right);
        } else if (candidate.right === undefined) {
            this.replace(candidate, candidate.left);
        } else {
            var successor = this.minimum(candidate.right);
            if (successor.parent !== candidate) {
                this.replace(successor, successor.right);
                successor.right = candidate.right;
                successor.right.parent = successor;
            }
            this.replace(candidate, successor);
            successor.left = candidate.left;
            successor.left.parent = successor;
        }

        // clean up
        candidate.value = undefined;
        candidate.parent = undefined;
        candidate.left = undefined;
        candidate.right = undefined;
        candidate.priority = undefined;
        this.size--;
        return true;
    } else {
        // the value was not found in the tree
        return false;
    }
};


RandomizedTree.prototype.clear = function() {
    this.root = undefined;
    this.size = 0;
};


RandomizedTree.prototype.minimum = function(node) {
    while (node && node.left) {
        node = node.left;
    }
    return node;
};


RandomizedTree.prototype.maximum = function(node) {
    while (node && node.right) {
        node = node.right;
    }
    return node;
};


RandomizedTree.prototype.predecessor = function(node) {
    if (node.left) {
        // there is a left branch, so the predecessor is the rightmost node of that subtree
        return this.maximum(node.left);
    } else {
        // it is the lowest ancestor whose right child is also an ancestor of node
        var current = node;
        var parent = node.parent;
        while (parent && current === parent.left) {
            current = parent;
            parent = parent.parent;
        }
        return parent;
    }
};


RandomizedTree.prototype.successor = function(node) {
    if (node.right) {
        // there is a right branch, so the successor is the leftmost node of that subtree
        return this.minimum(node.right);
    } else {
        // it is the lowest ancestor whose left child is also an ancestor of node
        var current = node;
        var parent = node.parent;
        while (parent && current === parent.right) {
            current = parent;
            parent = parent.parent;
        }
        return parent;
    }
};


RandomizedTree.prototype.find = function(value) {
    var candidate = this.root;
    while (candidate && candidate.value) {
        switch (this.comparator.compareComponents(candidate.value, value)) {
            case -1:
                candidate = candidate.right;
                break;
            case 0:
                return candidate;
            case 1:
                candidate = candidate.left;
                break;
        }
    }
    return candidate;
};

RandomizedTree.prototype.replace = function(old, replacement) {
    if (old.parent === undefined) {
        this.root = replacement;
    } else if (old === old.parent.left) {
        old.parent.left = replacement;
    } else {
        old.parent.right = replacement;
    }
    if (replacement) {
        replacement.parent = old.parent;
    }
};


RandomizedTree.prototype.rotateLeft = function(node) {
    var temporary = node.right;
    temporary.parent = node.parent;

    node.right = temporary.left;
    if (node.right) {
        node.right.parent = node;
    }

    temporary.left = node;
    node.parent = temporary;

    if (temporary.parent) {
        if (node === temporary.parent.left) {
            temporary.parent.left = temporary;
        } else {
            temporary.parent.right = temporary;
        }
    } else {
        this.root = temporary;
    }
};


RandomizedTree.prototype.rotateRight = function(node) {
    var temporary = node.left;
    temporary.parent = node.parent;

    node.left = temporary.right;
    if (node.left) {
        node.left.parent = node;
    }

    temporary.right = node;
    node.parent = temporary;

    if (temporary.parent) {
        if (node === temporary.parent.left) {
            temporary.parent.left = temporary;
        } else {
            temporary.parent.right = temporary;
        }
    } else {
        this.root = temporary;
    }
};


RandomizedTree.prototype.rotateDown = function(node) {
    while (true) {
        if (node.left) {
            var leftHigherPriority = node.right === undefined || node.left.priority >= node.right.priority;
            if (leftHigherPriority) {
                this.rotateRight(node);
            } else {
                this.rotateLeft(node);
            }
        } else if (node.right) {
            this.rotateLeft(node);
        } else {
            break;
        }
    }
};
