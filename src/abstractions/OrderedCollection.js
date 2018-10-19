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
var types = require('./Types');
var Composite = require('./Composite').Composite;
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
    this.tree = new RandomizedTree();
    return this;
}
OrderedCollection.prototype = Object.create(Collection.prototype);
OrderedCollection.prototype.constructor = OrderedCollection;
exports.OrderedCollection = OrderedCollection;


// PUBLIC METHODS

/**
 * This method returns an array containing the items in this collection.
 * 
 * @returns {Array} An array containing the items in this collection.
 */
OrderedCollection.prototype.toArray = function() {
    var array = [];
    var iterator = this.iterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        array.push(item);
    }
    return array;
};


/**
 * This method creates an iterator that can be used to traverse the items in this collection.
 * 
 * @returns {Iterator} An iterator that can be used to traverse the items in this collection.
 */
OrderedCollection.prototype.iterator = function() {
    return new TreeIterator(this.tree);
};


/**
 * This method returns the number of items that are currently in this collection.
 * 
 * @returns {Number} The number of items that are in this collection.
 */
OrderedCollection.prototype.getSize = function() {
    return this.tree.size;
};


/**
 * This method determines the index of the specified item in this collection.
 * 
 * @param {String|Number|Boolean|Component} item The item to be indexed.
 * @returns {Number} The index of the specified item.
 */
OrderedCollection.prototype.getIndex = function(item) {
    item = Composite.asComponent(item);
    var index = this.tree.index(item) + 1;  // convert to Bali ordinal based indexing
    return index;
};


/**
 * This method retrieves the item that is associated with the specified index from this collection.
 * 
 * @param {Number} index The index of the desired item in this collection.
 * @returns {Component} The item in this collection that is associated with the specified index.
 */
OrderedCollection.prototype.getItem = function(index) {
    index = this.normalizedIndex(index) - 1;  // convert to javascript zero based indexing
    var item = this.tree.node(index).value;
    return item;
};


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


// PRIVATE CLASSES

/*
 * The ordered collection class is backed by a binary tree (treap) structure. Therefore,
 * it can be traversed more efficiently using a custom iterator. This class implements a tree iterator.
 */

function TreeIterator(tree) {
    Composite.call(this, types.ITERATOR);
    this.tree = tree;
    this.slot = 0;  // the slot before the first item
    this.previous = undefined;
    this.next = this.tree.minimum(this.tree.root);
    return this;
}
TreeIterator.prototype = Object.create(Composite.prototype);
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
    if (!this.hasPrevious()) throw new Error('ITERATOR: The iterator is at the beginning of the set.');
    var value = this.previous.value;
    this.next = this.previous;
    this.previous = this.tree.predecessor(this.next);
    this.slot--;
    return value;
};


TreeIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('ITERATOR: The iterator is at the end of the set.');
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

function RandomizedTree() {
    this.size = 0;
    return this;
}
RandomizedTree.prototype.constructor = RandomizedTree;


RandomizedTree.prototype.contains = function(value) {
    return this.find(value) !== undefined;
};


RandomizedTree.prototype.index = function(value) {
    var index = 0;
    var candidate = this.minimum(this.root);
    while (candidate && !candidate.value.equalTo(value)) {
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
        switch (candidate.value.comparedTo(value)) {
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
    switch (parent.value.comparedTo(value)) {
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
        switch (candidate.value.comparedTo(value)) {
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
