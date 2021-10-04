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
 * duplicate items. By default a set orders its items based on the natural ordering
 * of its items.
 */
const moduleName = '/bali/collections/Set';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const agents = require('../agents');


// PUBLIC FUNCTIONS

/**
 * This function creates a new set component with optional parameters that are
 * used to parameterize its type.
 *
 * @param {Object} parameters Optional parameters used to parameterize this set.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Set} The new set.
 */
const Set = function(parameters, debug) {
    abstractions.Collection.call(
        this,
        [ moduleName ],
        ['/bali/libraries/Logical'],
        parameters,
        debug
    );
    if (!this.getParameter('$type')) this.setParameter('$type', '/nebula/collections/Set/v1');

    // private attributes
    const comparator = new agents.CanonicalComparator(this.debug);
    const tree = new RandomizedTree(comparator);

    this.getComparator = function() {
        return comparator;
    };

    this.toArray = function() {
        const array = [];
        var node = minimum(tree.root);
        while (node) {
            array.push(node.value);
            node = successor(node);
        }
        return array;
    };

    this.getSize = function() {
        return tree.size;
    };

    this.getIndex = function(item) {
        if (this.debug > 1) {
            this.validateArgument('$getIndex', '$item', item, [
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
        item = this.componentize(item);
        index = tree.index(item) + 1;  // convert to ordinal based indexing
        return index;
    };

    this.getItem = function(index) {
        if (this.debug > 1) {
            this.validateArgument('$getItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        index = abstractions.Component.normalizedIndex(this,index) - 1;  // convert to javascript zero based indexing
        return tree.node(index).value;
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
        return tree.insert(item);
    };

    this.removeItem = function(item) {
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
        return tree.remove(item);  // returns true if removed
    };

    this.removeItems = function(items) {
        if (this.debug > 1) {
            this.validateArgument('$removeItems', '$items', items, [
                '/javascript/String',
                '/javascript/Array',
                '/bali/interfaces/Sequential'
            ]);
        }
        items = this.componentize(items);
        var count = 0;
        const iterator = items.getIterator();
        while (iterator.hasNext()) {
            const item = iterator.getNext();
            if (this.removeItem(item)) count++;
        }
        return count;  // returns the number of removed items
    };

    this.emptyCollection = function() {
        tree.clear();
    };


    return this;
};
Set.prototype = Object.create(abstractions.Collection.prototype);
Set.prototype.constructor = Set;
exports.Set = Set;


// LOGICAL LIBRARY FUNCTIONS

/**
 * This function returns a new set that is the logical NOT of the specified
 * set. Since this is meaningless this function throws an exception.
 *
 * @param {Set} set The set.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Set} The resulting set.
 */
Set.not = function(set, debug) {
    const exception = new abstractions.Exception({
        $module: moduleName,
        $procedure: '$not',
        $exception: '$meaningless',
        $text: '"The logical NOT of a set is meaningless."'
    }, undefined, debug);
    throw exception;
};


/**
 * This function returns a new set that contains the items that are in
 * both the first set and the second set.
 *
 * @param {Set} first The first set to be operated on.
 * @param {Set} second The second set to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Set} The resulting set.
 */
Set.and = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$and', '$first', first, [
            moduleName,
        ]);
        abstractions.Component.validateArgument(moduleName, '$and', '$second', second, [
            moduleName,
        ]);
    }
    const result = new Set(first.getParameters(), debug);
    const iterator = first.getIterator();
    while (iterator.hasNext()) {
        const item = iterator.getNext();
        if (second.containsItem(item)) {
            result.addItem(item);
        }
    }
    return result;
};


/**
 * This function returns a new set that contains the items that are in
 * the first set but not in the second set.
 *
 * @param {Set} first The first set to be operated on.
 * @param {Set} second The second set to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Set} The resulting set.
 */
Set.sans = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$sans', '$first', first, [
            moduleName,
        ]);
        abstractions.Component.validateArgument(moduleName, '$sans', '$second', second, [
            moduleName,
        ]);
    }
    const result = new Set(first.getParameters(), debug);
    result.addItems(first);
    result.removeItems(second);
    return result;
};


/**
 * This function returns a new set that contains all the items that are in
 * the first set or the second set or both.
 *
 * @param {Set} first The first set to be operated on.
 * @param {Set} second The second set to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Set} The resulting set.
 */
Set.or = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$or', '$first', first, [
            moduleName,
        ]);
        abstractions.Component.validateArgument(moduleName, '$or', '$second', second, [
            moduleName,
        ]);
    }
    const result = new Set(first.getParameters(), debug);
    result.addItems(first);
    result.addItems(second);
    return result;
};


/**
 * This function returns a new set that contains all the items that are in
 * the first set or the second set but not both.
 *
 * @param {Set} first The first set to be operated on.
 * @param {Set} second The second set to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Set} The resulting set.
 */
Set.xor = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$xor', '$first', first, [
            moduleName,
        ]);
        abstractions.Component.validateArgument(moduleName, '$xor', '$second', second, [
            moduleName,
        ]);
    }
    const result = new Set(first.getParameters(), debug);
    const comparator = result.getComparator();
    const iterator1 = first.getIterator();
    var item1;
    const iterator2 = second.getIterator();
    var item2;
    while (iterator1.hasNext() && iterator2.hasNext()) {
        if (item1 === undefined) item1 = iterator1.getNext();
        if (item2 === undefined) item2 = iterator2.getNext();
        const signum = comparator.ranking(item1, item2);
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


// PRIVATE CLASSES

/*
 * This class implements a randomized self balancing binary search tree composite (treap).
 * It maintains an ordering of the values in the tree and provides O(log(n)) search and
 * update performance.
 */

const RandomizedTree = function(comparator) {
    // NOTE: we don't want to make these attributes private because of the performance
    // issues with having each node in the tree have its own local methods.
    this.size = 0;
    this.comparator = comparator;
    return this;
};
RandomizedTree.prototype.constructor = RandomizedTree;


RandomizedTree.prototype.contains = function(value) {
    return this.find(value) !== undefined;
};


RandomizedTree.prototype.index = function(value) {
    var index = 0;
    var candidate = minimum(this.root);
    while (candidate && !this.comparator.areEqual(candidate.value, value)) {
        candidate = successor(candidate);
        index++;
    }
    if (candidate) {
        return index;
    } else {
        return -1;
    }
};


RandomizedTree.prototype.node = function(index) {
    var candidate = minimum(this.root);
    while (index > 0 && index < this.size) {
        candidate = successor(candidate);
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
        switch (this.comparator.ranking(candidate.value, value)) {
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
    const child = { value: value, parent: parent, priority: Math.random()};
    switch (this.comparator.ranking(parent.value, value)) {
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
    const candidate = this.find(value);
    if (candidate) {
        // rotate the candidate down to leaf
        this.rotateDown(candidate);

        // then remove it
        if (candidate.left === undefined) {
            this.replace(candidate, candidate.right);
        } else if (candidate.right === undefined) {
            this.replace(candidate, candidate.left);
        } else {
            const successor = minimum(candidate.right);
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


RandomizedTree.prototype.find = function(value) {
    var candidate = this.root;
    while (candidate && candidate.value) {
        switch (this.comparator.ranking(candidate.value, value)) {
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
    const temporary = node.right;
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
    const temporary = node.left;
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


// PRIVATE FUNCTIONS

const minimum = function(node) {
    while (node && node.left) {
        node = node.left;
    }
    return node;
};


const maximum = function(node) {
    while (node && node.right) {
        node = node.right;
    }
    return node;
};


const predecessor = function(node) {
    if (node.left) {
        // there is a left branch, so the predecessor is the rightmost node of that subtree
        return maximum(node.left);
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


const successor = function(node) {
    if (node.right) {
        // there is a right branch, so the successor is the leftmost node of that subtree
        return minimum(node.right);
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
