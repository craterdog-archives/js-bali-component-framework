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


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new catalog component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this catalog. 
 * @returns {Catalog} The new catalog.
 */
function Catalog(parameters) {
    abstractions.Collection.call(this, utilities.types.CATALOG, parameters);

    // the map and array are private attributes so methods that use them are defined in the constructor
    const map = {};  // maps key strings to associations
    const array = [];  // maintains the order of the associations

    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.getSize = function() {
        return array.length;
    };

    this.getItem = function(index) {
        index = this.normalizeIndex(index) - 1;  // JS uses zero based indexing
        return array[index];
    };

    this.addItem = function(association) {
        const key = association.getKey().toString();
        if (map[key]) return false;
        map[key] = association;
        array.push(association);
        return true;
    };

    this.containsItem = function(association) {
        const key = association.getKey().toString();
        const candidate = map[key];
        if (candidate) return candidate.isEqualTo(association);
        return false;
    };

    this.getValue = function(key) {
        const association = map[key.toString()];
        if (association) return association.getValue();
    };

    this.setValue = function(key, value) {
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

    this.removeValue = function(key) {
        const association = map[key.toString()];
        if (association) {
            delete map[key.toString()];
            const index = array.findIndex(function(item) {
                return item.isEqualTo(association);
            });
            array.splice(index, 1);
            return association.getValue();
        }
    };

    this.clear = function() {
        Object.keys(map).forEach(function(key) {
            const association = map[key];
            delete map[key];
        });
        array.splice(0);
    };

    this.getKeys = function() {
        const keys = new List();
        array.forEach(function(association) {
            const key = association.getKey();
            keys.addItem(key);
        });
        return keys;
    };

    this.reverseItems = function() {
        array.reverse();
    };

    return this;
}
Catalog.prototype = Object.create(abstractions.Collection.prototype);
Catalog.prototype.constructor = Catalog;
exports.Catalog = Catalog;


// PUBLIC METHODS

/**
 * This method returns an object containing the items in this catalog.
 * 
 * @returns {Object} An object containing the items in this catalog.
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
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this catalog.
 */
Catalog.prototype.acceptVisitor = function(visitor) {
    visitor.visitCatalog(this);
};


/**
 * This method retrieves from this catalog the values associated with the specified
 * keys. The values are returned as a list with the values in the same order as the
 * specified keys.
 *
 * @param {Collection} keys The collection of keys for the values to be retrieved.
 * @returns A list of the values that were retrieved from this catalog.
 */
Catalog.prototype.getValues = function(keys) {
    const values = new List();
    const iterator = keys.getIterator();
    while (iterator.hasNext()) {
        const key = iterator.getNext();
        const value = this.getValue(key);
        if (value !== undefined) values.addItem(value);
    }
    return values;
};


/**
 * This method adds to this catalog the associations in the specified catalog.  If there
 * is already a value associated with a specified key, the new value replaces the old value.
 *
 * @param {Catalog} associations A catalog containing the new associations to be added.
 */
Catalog.prototype.setValues = function(associations) {
    const iterator = associations.getIterator();
    while (iterator.hasNext()) {
        const association = iterator.getNext();
        this.setValue(association.getKey(), association.getValue());
    }
};


/**
 * This method removes from this catalog the values associated with the specified
 * keys. The values are returned as a list with the values in the same order as the
 * specified keys.
 *
 * @param {Collection} keys The collection of keys for the values to be removed.
 * @returns A list of the values that were removed from this catalog.
 */
Catalog.prototype.removeValues = function(keys) {
    const values = new List();
    const iterator = keys.getIterator();
    while (iterator.hasNext()) {
        const key = iterator.getNext();
        const value = this.removeValue(key);
        if (value !== undefined) values.addItem(value);
    }
    return values;
};


/**
 * This method sorts the items in this catalog into their natural order as defined
 * by the <code>this.comparedTo(that)</code> method of the keys being compared.
 * 
 * @param {Sorter} sorter An optional sorter to use for sorting the items. If none is
 * specified, the default natural sorter will be used.
 */
Catalog.prototype.sortItems = function(sorter) {
    sorter = sorter || new utilities.Sorter();
    sorter.sortCollection(this);
};


// PUBLIC FUNCTIONS

/**
 * This function returns a new catalog that contains the associations from the second catalog
 * concatenated onto the end of the first catalog (except any duplicate keys which are ignored).
 *
 * @param {Collection} catalog1 The first catalog to be operated on.
 * @param {Collection} catalog2 The second catalog to be operated on.
 * @returns {Collection} The resulting catalog.
 */
Catalog.concatenation = function(catalog1, catalog2) {
    const result = new Catalog();
    result.addItems(catalog1);
    result.addItems(catalog2);
    return result;
};


/**
 * This function returns a new catalog that contains only the associations with
 * the specified keys.
 *
 * @param {Catalog} catalog The catalog whose items are to be reduced.
 * @param {Set} keys The set of keys for the associations to be extracted.
 * @returns The resulting catalog.
 */
Catalog.extraction = function(catalog, keys) {
    const result = new Catalog();
    const iterator = keys.getIterator();
    while (iterator.hasNext()) {
        const key = iterator.getNext();
        const value = catalog.getValue(key);
        if (value) {
            result.setValue(key, value);
        }
    }
    return result;
};
