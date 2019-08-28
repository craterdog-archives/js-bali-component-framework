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
 * This collection class implements a tree data structure. Each node in the tree may
 * contain zero or more children. A node with no children is an elemental component.
 * Tree nodes may also be any other type of component including catalogs, lists, sets,
 * stacks, and ranges. Collectively, all of the components including the tree nodes
 * are used to build up the parse trees that result from parsing strings containing
 * Bali Document Notation™.
 */
const abstractions = require('../abstractions');
const Exception = require('./Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new tree node component.
 * 
 * @param {Number} type The type of the tree node component.
 * @returns {Tree} The new tree node component.
 */
function Tree(type) {
    abstractions.Composite.call(this, type);
    if (!this.isProcedural()) {
        throw new Exception({
            $module: '/bali/composites/Tree',
            $procedure: '$Tree',
            $exception: '$invalidParameter',
            $parameter: type,
            $text: 'An invalid tree type was passed to the constructor.'
        });
    }

    // the array is a private attribute so methods that use it are defined in the constructor
    const array = [];

    this.toArray = function() {
        return array.slice(); // copy the array
    };

    this.getSize = function() {
        return array.length;
    };

    this.addChild = function(child) {
        child = this.convert(child);
        array.push(child);
        child.getParent = function() { return this; };
    };

    this.getChild = function(index) {
        index = this.normalizeIndex(index) - 1;  // JS uses zero based indexing
        return array[index];
    };

    this.getParent = function() { };  // will be reset by parent when added as a child

    return this;
}
Tree.prototype = Object.create(abstractions.Composite.prototype);
Tree.prototype.constructor = Tree;
exports.Tree = Tree;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this tree node.
 */
Tree.prototype.acceptVisitor = function(visitor) {
    const functionName = 'visit' + this.getType().slice(1);
    visitor[functionName](this);
};
