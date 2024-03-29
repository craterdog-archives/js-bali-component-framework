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
 * This collection class implements a sortable collection containing key-value associations.
 * Multiple values cannot be assigned to the same key, but the same value may be assigned to
 * multiple keys. The key-value associations are maintained in the order in which they were
 * added to the catalog. But they may be reordered by sorting the catalog.
 */
const moduleName = '/bali/collections/Catalog';
const associationModuleName = '/bali/collections/Association';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const agents = require('../agents');
const Association = require('./Association').Association;
const List = require('./List').List;


/**
 * This constructor creates a new catalog component with optional parameters that are
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
 * @param {Object} parameters Optional parameters used to parameterize this catalog.
 * @returns {Catalog} The new catalog.
 */
const Catalog = function(parameters, debug) {
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

    // the map and array are private attributes so methods that use them are defined
    // in the constructor
    const map = {};  // maps key strings to associations
    const array = [];  // maintains the order of the associations

    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.getSize = function() {
        return array.length;
    };

    this.getKeys = function() {
        const keys = new List(undefined, this.debug);
        array.forEach(function(association) {
            const key = association.getKey();
            keys.addItem(key);
        }, this);
        return keys;
    };

    this.getIndex = function(association) {
        if (this.debug > 1) {
            this.validateArgument('$getIndex', '$association', association, [
                associationModuleName
            ]);
        }
        const comparator = new agents.CanonicalComparator(this.debug);
        const index = array.findIndex(function(candidate) {
            return comparator.areEqual(candidate, association);
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

    this.addItem = function(association) {
        if (this.debug > 1) {
            this.validateArgument('$addItem', '$association', association, [
                associationModuleName
            ]);
        }
        if (association) {
            const key = association.getKey().toString();
            if (map[key]) return false;
            map[key] = association;
            array.push(association);
            return true;
        }
        return false;  // nothing was added
    };

    this.addItems = function(associations) {
        if (this.debug > 1) {
            this.validateArgument('$addItems', '$associations', associations, [
                '/javascript/Array',
                '/javascript/Object',
                '/bali/interfaces/Sequential'
            ]);
        }
        var index = array.length + 1;
        associations = associations || undefined;  // normalize nulls to undefined
        if (associations) {
            if (Array.isArray(associations)) {
                associations.forEach(function(item) {
                    item = this.componentize(item);
                    if (item.isType(associationModuleName)) {
                        if (this.addItem(item)) index++;
                    } else {
                        this.setAttribute(index++, item);
                    }
                }, this);
            } else if (associations.isComponent && associations.supportsInterface('/bali/interfaces/Sequential')) {
                const iterator = associations.getIterator();
                while (iterator.hasNext()) {
                    var item = iterator.getNext();
                    item = this.componentize(item);
                    if (item.isType(associationModuleName)) {
                        if (this.addItem(item)) index++;
                    } else {
                        this.setAttribute(index++, item);
                    }
                }
            } else if (typeof associations === 'object') {
                const keys = Object.keys(associations);
                keys.forEach(function(key) {
                    this.setAttribute(key, associations[key]);
                }, this);
            }
        }
        return this;
    };

    this.getAttribute = function(key) {
        if (this.debug > 1) {
            this.validateArgument('$getAttribute', '$key', key, [
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/bali/abstractions/Element'
            ]);
        }
        key = this.componentize(key);
        const association = map[key.toString()];
        if (association) return association.getValue();
    };

    this.getAttributes = function(keys) {
        if (this.debug > 1) {
            this.validateArgument('$getAttributes', '$keys', keys, [
                '/javascript/String',
                '/javascript/Array',
                '/bali/interfaces/Sequential'
            ]);
        }
        const values = new List(undefined, this.debug);
        keys = this.componentize(keys);
        const iterator = keys.getIterator();
        while (iterator.hasNext()) {
            const key = iterator.getNext();
            const value = this.getAttribute(key);
            if (value) values.addItem(value);
        }
        return values;
    };

    this.setAttribute = function(key, value) {
        if (this.debug > 1) {
            this.validateArgument('$setAttribute', '$key', key, [
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/bali/abstractions/Element'
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
        key = this.componentize(key);
        value = this.componentize(value);
        var association = map[key.toString()];
        if (association) {
            const oldValue = association.getValue();
            association.setValue(value);
            return oldValue;
        } else {
            association = new Association(key, value);
            map[key.toString()] = association;
            array.push(association);
        }
        return this;
    };

    this.removeAttribute = function(key) {
        if (this.debug > 1) {
            this.validateArgument('$removeAttribute', '$key', key, [
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/bali/abstractions/Element'
            ]);
        }
        key = this.componentize(key);
        const association = map[key.toString()];
        if (association) {
            delete map[key.toString()];
            const comparator = new agents.CanonicalComparator(this.debug);
            const index = array.findIndex(function(item) {
                return comparator.areEqual(item, association);
            }, this);
            return array.splice(index, 1)[0];  // returns the removed attribute value
        }
    };

    this.removeAttributes = function(keys) {
        if (this.debug > 1) {
            this.validateArgument('$removeAttributes', '$keys', keys, [
                '/javascript/String',
                '/javascript/Array',
                '/bali/interfaces/Sequential'
            ]);
        }
        const attributes = new List(undefined, this.debug);
        keys = this.componentize(keys);
        const iterator = keys.getIterator();
        while (iterator.hasNext()) {
            const key = iterator.getNext();
            const value = this.removeAttribute(key);
            if (value) attributes.addItem(value);
        }
        return attributes;
    };

    this.emptyCollection = function() {
        Object.keys(map).forEach(function(key) {
            delete map[key];
        }, this);
        array.splice(0);
        return this;
    };

    this.reverseItems = function() {
        array.reverse();
        return this;
    };

    return this;
};
Catalog.prototype = Object.create(abstractions.Collection.prototype);
Catalog.prototype.constructor = Catalog;
exports.Catalog = Catalog;


// PUBLIC METHODS

/**
 * This method returns a JavaScript object containing the attributes of this catalog.
 *
 * @returns {Object} The resulting object.
 */
Catalog.prototype.toObject = function() {
    const object = {};
    const iterator = this.getIterator();
    while (iterator.hasNext()) {
        const association = iterator.getNext();
        object[association.getKey().toString()] = association.getValue();
    }
    return object;
};


/**
 * This method sorts the keys in this catalog using the specified sorter and
 * comparator agents.  If no sorter is specified the merge sorter is used.  If no
 * comparator is specified the canonical comparator is used to order the keys in
 * their "natural" order.
 *
 * @param {Sorter} sorter The sorter to be used for sorting.
 * @param {Comparator} comparator The comparator to be used for comparing two keys.
 * @returns {Catalog} The sorted catalog.
 */
Catalog.prototype.sortItems = function(sorter, comparator) {
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


// PUBLIC FUNCTIONS

/**
 * This function returns a new catalog that contains the associations from the second catalog
 * concatenated onto the end of the first catalog (except any duplicate keys which are ignored).
 * The parameters for the first catalog are used as the parameters for the resulting catalog.
 *
 * @param {Collection} first The first catalog to be operated on.
 * @param {Collection} second The second catalog to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Collection} The resulting catalog.
 */
Catalog.chain = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$chain', '$first', first, [
            moduleName
        ]);
        abstractions.Component.validateArgument(moduleName, '$chain', '$second', second, [
            moduleName
        ]);
    }
    const result = new Catalog(first.getParameters(), debug);
    result.addItems(first);
    result.addItems(second);
    return result;
};


// CHAINABLE LIBRARY FUNCTIONS

/**
 * This function returns a new catalog that contains only the associations with the
 * specified keys. The parameters for the catalog are maintained in the resulting catalog.
 *
 * @param {Catalog} catalog The catalog whose items are to be reduced.
 * @param {String|Array|Sequential} keys The sequence of keys for the associations to be extracted.
 * @param {Number} debug A number in the range 0..3.
 * @returns The resulting catalog.
 */
Catalog.extraction = function(catalog, keys, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$extraction', '$catalog', catalog, [
            moduleName
        ]);
        abstractions.Component.validateArgument(moduleName, '$extraction', '$keys', keys, [
            '/javascript/String',
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    const result = new Catalog(catalog.getParameters(), debug);
    keys = catalog.componentize(keys);
    const iterator = keys.getIterator();
    while (iterator.hasNext()) {
        const key = iterator.getNext();
        const value = catalog.getAttribute(key);
        if (value) result.setAttribute(key, value);
    }
    return result;
};
