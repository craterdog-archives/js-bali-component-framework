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
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const composites = require('../composites');
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
        if (parameters.isComponent && parameters.isType('/bali/collections/Catalog')) {
            type = parameters.getAttribute('$type');
        } else {
            type = parameters['$type'];
        }
        if (type) ancestry.push(type.toString().split('/').slice(0, -1).join('/'));  // remove the version string
    }
    ancestry.push('/bali/collections/Catalog');
    abstractions.Collection.call(
        this,
        ancestry,
        [
            '/bali/interfaces/Structural',
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

    this.getKeys = function() {
        const keys = new List(undefined, this.debug);
        array.forEach(function(association) {
            const key = association.getKey();
            keys.addItem(key);
        }, this);
        return keys;
    };

    this.getItem = function(index) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Catalog', '$getItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        index = this.normalizedIndex(index) - 1;  // JS uses zero based indexing
        return array[index];
    };

    this.addItem = function(association) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Catalog', '$addItem', '$association', association, [
                '/javascript/Undefined',
                '/bali/composites/Association'
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
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Catalog', '$addItems', '$associations', associations, [
                '/javascript/Undefined',
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
                    if (item.isType('/bali/composites/Association')) {
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
                    if (item.isType('/bali/composites/Association')) {
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

    this.containsItem = function(association) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Catalog', '$containsItem', '$association', association, [
                '/javascript/Undefined',
                '/bali/composites/Association'
            ]);
        }
        if (association) {
            const key = association.getKey().toString();
            const candidate = map[key];
            if (candidate) return candidate.isEqualTo(association);
        }
        return false;
    };

    this.getAttribute = function(key) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Catalog', '$getAttribute', '$key', key, [
                '/javascript/Undefined',
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
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Catalog', '$getAttributes', '$keys', keys, [
                '/javascript/Undefined',
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
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Catalog', '$setAttribute', '$key', key, [
                '/javascript/Undefined',
                '/javascript/Boolean',
                '/javascript/Number',
                '/javascript/String',
                '/bali/abstractions/Element'
            ]);
            validator.validateType('/bali/collections/Catalog', '$setAttribute', '$value', value, [
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
            association = new composites.Association(key, value);
            map[key.toString()] = association;
            array.push(association);
        }
    };

    this.removeAttribute = function(key) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Catalog', '$removeAttribute', '$key', key, [
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
        const association = map[key.toString()];
        if (association) {
            delete map[key.toString()];
            const index = array.findIndex(function(item) {
                return item.isEqualTo(association);
            });
            array.splice(index, 1);
            return true;
        }
        return false;
    };

    this.removeAttributes = function(keys) {
        if (this.debug > 1) {
            const validator = new utilities.Validator(this.debug);
            validator.validateType('/bali/collections/Catalog', '$removeAttributes', '$keys', keys, [
                '/javascript/Undefined',
                '/javascript/Array',
                '/bali/composites/Range',
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

    this.sortItems = function(algorithm) {
        const sorter = new utilities.Sorter(algorithm, this.debug);
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
Catalog.concatenation = function(first, second, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/collections/Catalog', '$concatenation', '$first', first, [
            '/bali/collections/Catalog'
        ]);
        validator.validateType('/bali/collections/Catalog', '$concatenation', '$second', second, [
            '/bali/collections/Catalog'
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
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/collections/Catalog', '$extraction', '$catalog', catalog, [
            '/bali/collections/Catalog'
        ]);
        validator.validateType('/bali/collections/Catalog', '$extraction', '$keys', keys, [
            '/javascript/Undefined',
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
