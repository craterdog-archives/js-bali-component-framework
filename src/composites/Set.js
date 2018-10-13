/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

/**
 * This collection class implements an ordered collection that does not allow duplicate items.
 * The implementation dynamically scales up and down the size of the underlying data structures as
 * the number items changes over time.
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var OrderedCollection = require('../abstractions/OrderedCollection').OrderedCollection;


/**
 * The constructor creates a new empty set.
 * 
 * @param {Collection} parameters Optional parameters used to parameterize this component. 
 * @returns {Set} The new set.
 */
function Set(parameters) {
    OrderedCollection.call(this, types.SET, parameters);
    this.tree = new RandomizedTree();
    return this;
}
Set.prototype = Object.create(OrderedCollection.prototype);
Set.prototype.constructor = Set;
exports.Set = Set;


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
 * both the first set and the second set.
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
        var signum = item1.compareTo(item2);
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
 * This method returns the number of items that are currently in this set.
 * 
 * @returns {Number}
 */
Set.prototype.getSize = function() {
    return this.tree.size;
};


/**
 * This method returns an array containing the items in this set.
 * 
 * @returns {Array} An array containing the items in this set.
 */
Set.prototype.toArray = function() {
    var array = [];
    var iterator = this.iterator();
    while (iterator.hasNext()) {
        var item = iterator.getNext();
        array.push(item);
    }
    return array;
};


/**
 * This method creates an iterator that can be used to traverse the items in this set.
 * 
 * @returns {Iterator} An iterator that can be used to traverse the items in this set.
 */
Set.prototype.iterator = function() {
    return new SetIterator(this);
};


/**
 * This method retrieves the item that is associated with the specified index from this set.
 * 
 * @param {Number} index The index of the desired item in this set.
 * @returns {Component} The item in this set that is associated with the specified index.
 */
Set.prototype.getItem = function(index) {
    index = this.normalizedIndex(index) - 1;  // convert to javascript zero based indexing
    var item = this.tree.node(index).value;
    return item;
};


/**
 * This method determines the index of the specified item in this set.
 * 
 * @param {Component} item The item to be indexed.
 * @returns {Number} The index of the specified item.
 */
Set.prototype.getIndex = function(item) {
    item = Composite.asComponent(item);
    var index = this.tree.index(item) + 1;  // convert to Bali ordinal based indexing
    return index;
};


/**
 * This method attempts to add the specified item to this set.
 * 
 * @param {Component} item The item to be added.
 * @returns {Boolean} Whether or not the item was successfully added.
 */
Set.prototype.addItem = function(item) {
    item = Composite.asComponent(item);
    var result = this.tree.insert(item);
    if (result) {
        this.length += item.length;
        if (this.getSize() > 1) this.length += 2;  // account for the ', ' separator
    }
    return result;
};


/*
 * This abstract method removes the specified item from this collection. It must be
 * implemented by a subclass.
 * 
 * @param {Component} item The item to be removed from the collection.
 * @returns {Boolean} Whether or not the item was removed.
 */
Set.prototype.removeItem = function(item) {
    item = Composite.asComponent(item);
    var result = this.tree.remove(item);
    if (result) {
        this.length -= item.length;
        if (this.getSize() > 0) this.length -= 2;  // account for the ', ' separator
    }
    return result;
};


/**
 * This method removes all items from this set.
 */
Set.prototype.removeAll = function() {
    var size = this.getSize();
    if (size > 1) this.length -= (size - 1) * 2;  // account for all the ', ' separators
    this.tree.clear();
};


// PRIVATE CLASSES

function SetIterator(set) {
    this.set = set;
    this.slot = 0;  // the slot before the first item
    this.previous = undefined;
    this.next = this.set.tree.minimum(this.set.tree.root);
    return this;
}
SetIterator.prototype.constructor = SetIterator;


SetIterator.prototype.toStart = function() {
    this.slot = 0;  // the slot before the first item
    this.previous = undefined;
    this.next = this.set.tree.minimum(this.set.tree.root);
};


SetIterator.prototype.toSlot = function(slot) {
    this.slot = slot;
    this.previous = this.set.tree.node(slot - 1);  // javascript index of item before the slot
    this.next = this.set.tree.successor(this.previous);
};


SetIterator.prototype.toEnd = function() {
    this.slot = this.set.tree.size;  // the slot after the last item
    this.previous = this.set.tree.maximum(this.set.tree.root);
    this.next = undefined;
};


SetIterator.prototype.hasPrevious = function() {
    return this.slot > 0;
};


SetIterator.prototype.hasNext = function() {
    return this.slot < this.set.tree.size;
};


SetIterator.prototype.getPrevious = function() {
    if (!this.hasPrevious()) throw new Error('ITERATOR: The iterator is at the beginning of the set.');
    var value = this.previous.value;
    this.next = this.previous;
    this.previous = this.set.tree.predecessor(this.next);
    this.slot--;
    return value;
};


SetIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('ITERATOR: The iterator is at the end of the set.');
    var value = this.next.value;
    this.previous = this.next;
    this.next = this.set.tree.successor(this.previous);
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
        switch (candidate.value.compareTo(value)) {
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
    switch (parent.value.compareTo(value)) {
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
        switch (candidate.value.compareTo(value)) {
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
