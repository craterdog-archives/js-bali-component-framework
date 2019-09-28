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
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new tree node component.
 *
 * @param {String} type The type of the tree node component.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Tree} The new tree node component.
 */
const Tree = function(type, debug) {
    abstractions.Collection.call(
        this,
        [type, '/bali/collections/Tree'],
        ['/bali/interfaces/Procedural'],
        undefined,
        debug
    );

    // the array is a private attribute so methods that use it are defined in the constructor
    const array = [];

    this.toArray = function() {
        return array.slice();  // a copy of the array
    };

    this.getSize = function() {
        return array.length;
    };

    this.getParent = function() { };  // will be reset by parent when added as a child

    this.getItem = function(index) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Tree', '$getItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        index = this.normalizeIndex(index) - 1;  // JS uses zero based indexing
        return array[index];
    };

    this.addItem = function(child) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Tree', '$addItem', '$child', child, [
                '/bali/abstractions/Component'
            ]);
        }
        child = this.componentize(child, this.debug);
        array.push(child);
        child.getParent = function() { return this; };
    };

    return this;
};
Tree.prototype = Object.create(abstractions.Collection.prototype);
Tree.prototype.constructor = Tree;
exports.Tree = Tree;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {NodeVisitor} visitor The visitor that wants to visit this tree node.
 */
Tree.prototype.acceptVisitor = function(visitor) {
    // call the visitor method for the specific type of tree node
    const functionName = 'visit' + this.getType().split('/')[3];  // '/bali/collections/<Type>'
    visitor[functionName](this);
};
