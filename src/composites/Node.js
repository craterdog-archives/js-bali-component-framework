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
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates a new node component.
 *
 * @param {String} type The type of the node component.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Node} The new node component.
 */
const Node = function(type, debug) {
    abstractions.Composite.call(
        this,
        [type, '/bali/composites/Node'],
        [
            '/bali/interfaces/Sequential'
        ],
        undefined,
        debug
    );

    // the array is a private attribute so methods that use it are defined in the constructor
    const array = [];

    this.toArray = function() {
        return array.slice();  // a copy of the array
    };

    this.getItem = function(index) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/composites/Node', '$getItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        index = this.normalizedIndex(index) - 1;  // JS uses zero based indexing
        return array[index];
    };

    this.getItems = function(range) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/composites/Node', '$getItems', '$range', range, [
                '/javascript/String',
                '/bali/composites/Range'
            ]);
        }
        range = this.componentize(range);
        const items = new Node(this.getType(), this.debug);
        if (range && range.getIterator) {
            const iterator = range.getIterator();
            while (iterator.hasNext()) {
                const index = iterator.getNext();
                const item = this.getItem(index);
                items.addItem(item);
            }
        }
        return items;
    };

    this.addItem = function(item) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/composites/Node', '$addItem', '$item', item, [
                '/bali/abstractions/Component'
            ]);
        }
        item = this.componentize(item, this.debug);
        array.push(item);
    };

    this.setItem = function(index, item) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/composites/Node', '$setItem', '$index', index, [
                '/javascript/Number'
            ]);
            validator.validateType('/bali/composites/Node', '$setItem', '$item', item, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/javascript/Array',
                '/javascript/Object',
                '/bali/abstractions/Component'
            ]);
        }
        index = this.normalizedIndex(index) - 1;  // JS uses zero based indexing
        item = this.componentize(item, this.debug);
        const oldItem = array[index];
        array[index] = item;
        return oldItem;
    };

    this.getAttribute = function(index) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/composites/Node', '$getAttribute', '$index', index, [
                '/bali/elements/Number'
            ]);
        }
        index = index.toInteger();
        return this.getItem(index);
    };

    this.setAttribute = function(index, value) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/composites/Node', '$setAttribute', '$index', index, [
                '/bali/elements/Number'
            ]);
            validator.validateType('/bali/composites/Node', '$setAttribute', '$value', value, [
                '/bali/abstractions/Component'
            ]);
        }
        index = index.toInteger();
        return this.setItem(index, value);
    };

    return this;
};
Node.prototype = Object.create(abstractions.Composite.prototype);
Node.prototype.constructor = Node;
exports.Node = Node;


// PUBLIC METHODS

/**
 * This method returns whether or not this composite contains a meaningful value. If the composite
 * is empty it returns <code>false</code>, otherwise it returns <code>true</code>.
 *
 * @returns {Boolean} Whether or not this composite contains a meaningful value.
 */
Node.prototype.toBoolean = function() {
    return this.getSize() > 0;
};


/**
 * This method returns whether or not this composite contains any items.
 *
 * @returns {Boolean} Whether or not this composite contains any items.
 */
Node.prototype.isEmpty = function() {
    return this.getSize() === 0;
};


/**
 * This method returns the number of items that this composite contains.
 * It must be implemented by a subclass.
 *
 * @returns {Number} The number of items that this composite contains.
 */
Node.prototype.getSize = function() {
    return this.toArray().length;
};


/**
 * This method returns an object that can be used to iterate over the items in
 * this composite.
 * @returns {Iterator} An iterator for this composite.
 */
Node.prototype.getIterator = function() {
    const iterator = new abstractions.Collection.Iterator(this.toArray(), this.getParameters(), this.debug);
    return iterator;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {NodeVisitor} visitor The visitor that wants to visit this node.
 */
Node.prototype.acceptVisitor = function(visitor) {
    // call the visitor method for the specific type of node
    const functionName = 'visit' + this.getType().split('/')[3];  // '/bali/composites/<Type>'
    visitor[functionName](this);
};


/**
 * This method converts negative item indexes into their corresponding positive
 * indexes and then checks to make sure the index is in the range 1..size. NOTE: if the
 * composite is empty then the resulting index will be zero.
 *
 * The mapping between indexes is as follows:
 * <pre>
 * Negative Indexes:   -N      -N + 1     -N + 2     -N + 3   ...   -1
 * Positive Indexes:    1         2          3          4     ...    N
 * </pre>
 *
 * @param {Number} index The index to be normalized -N..N.
 * @returns {Number} The normalized 1..N index.
 */
Node.prototype.normalizedIndex = function(index) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/composites/Node', '$normalizedIndex', '$index', index, [
            '/javascript/Number'
        ]);
    }
    const size = this.getSize();
    if (index > size || index < -size) {
        const exception = new Exception({
            $module: '/bali/composites/Node',
            $procedure: '$normalizedIndex',
            $exception: '$invalidIndex',
            $index: index,
            $range: '' + -size + '..' + size,
            $text: 'The index is out of range.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
    if (index < 0) index = index + size + 1;
    return index;
};

