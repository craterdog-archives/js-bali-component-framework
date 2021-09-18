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


// PUBLIC FUNCTIONS

/**
 * This function creates a new catalog component with optional parameters that are
 * used to parameterize its type.
 *
 * @param {Object} parameters Optional parameters used to parameterize this catalog.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Catalog} The new catalog.
 */
const Catalog = function(parameters, debug) {
    const ancestry = [];
    if (parameters) {
        var type;
        if (parameters.isComponent && parameters.isType(moduleName)) {
            type = parameters.getAttribute('$type');
        } else {
            type = parameters['$type'];
        }
        if (type) ancestry.push(type.toString().split('/').slice(0, -1).join('/'));  // remove the version string
    }
    ancestry.push(moduleName);
    abstractions.Collection.call(
        this,
        ancestry,
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
        return false;
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
                    item = this.componentize(item, this.debug);
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
                    item = this.componentize(item, this.debug);
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
        key = this.componentize(key, this.debug);
        const association = map[key.toString()];
        if (association) return association.getValue();
    };

    this.getAttributes = function(keys) {
        if (this.debug > 1) {
            this.validateArgument('$getAttributes', '$keys', keys, [
                '/javascript/Array',
                '/bali/interfaces/Sequential'
            ]);
        }
        const values = new List(undefined, this.debug);
        if (Array.isArray(keys)) {
            keys.forEach(function(key) {
                const value = this.getAttribute(key);
                if (value) values.addItem(value);
            }, this);
        } else if (keys && keys.getIterator) {
            const iterator = keys.getIterator();
            while (iterator.hasNext()) {
                const key = iterator.getNext();
                const value = this.getAttribute(key);
                if (value) values.addItem(value);
            }
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
        key = this.componentize(key, this.debug);
        value = this.componentize(value, this.debug);
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
        key = this.componentize(key, this.debug);
        const association = map[key.toString()];
        if (association) {
            delete map[key.toString()];
            const comparator = new agents.CanonicalComparator(this.debug);
            const index = array.findIndex(function(item) {
                return comparator.areEqual(item, association);
            }, this);
            array.splice(index, 1);
            return true;
        }
        return false;
    };

    this.removeAttributes = function(keys) {
        if (this.debug > 1) {
            this.validateArgument('$removeAttributes', '$keys', keys, [
                '/javascript/Array',
                '/bali/interfaces/Sequential'
            ]);
        }
        const values = new List(undefined, this.debug);
        if (Array.isArray(keys)) {
            keys.forEach(function(key) {
                const value = this.removeAttribute(key);
                if (value) values.addItem(value);
            }, this);
        } else if (keys && keys.getIterator) {
            const iterator = keys.getIterator();
            while (iterator.hasNext()) {
                const key = iterator.getNext();
                const value = this.removeAttribute(key);
                if (value) values.addItem(value);
            }
        }
    };

    this.removeAll = function() {
        Object.keys(map).forEach(function(key) {
            delete map[key];
        }, this);
        array.splice(0);
    };

    this.sortItems = function(sorter) {
        if (this.debug > 1) {
            this.validateArgument('$sortItems', '$sorter', sorter, [
                '/javascript/Undefined',
                '/bali/abstractions/Sorter'
            ]);
        }
        sorter = sorter || new agents.MergeSorter(new agents.CanonicalComparator(this.debug), this.debug);
        sorter.sortCollection(this);
    };

    this.reverseItems = function() {
        array.reverse();
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
 * @param {List} keys The list of keys for the associations to be extracted.
 * @param {Number} debug A number in the range 0..3.
 * @returns The resulting catalog.
 */
Catalog.extraction = function(catalog, keys, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$extraction', '$catalog', catalog, [
            moduleName
        ]);
        abstractions.Component.validateArgument(moduleName, '$extraction', '$keys', keys, [
            '/javascript/Array',
            '/bali/interfaces/Sequential'
        ]);
    }
    const result = new Catalog(catalog.getParameters(), debug);
    if (Array.isArray(keys)) {
        keys.forEach(function(key) {
            const value = catalog.getAttribute(key);
            if (value) result.setAttribute(key, value);
        }, this);
    } else if (keys && keys.getIterator) {
        const iterator = keys.getIterator();
        while (iterator.hasNext()) {
            const key = iterator.getNext();
            const value = catalog.getAttribute(key);
            if (value) result.setAttribute(key, value);
        }
    }
    return result;
};
