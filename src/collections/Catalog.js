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

    // the map and array are private attributes so methods that use them are defined
    // in the constructor
    const map = {};  // maps key strings to associations
    const array = [];  // maintains the order of the associations

    this.acceptVisitor = function(visitor) {
        visitor.visitCatalog(this);
    };
    
    this.toArray = function() {
        return array.slice();  // copy the array
    };

    this.toObject = function() {
        const object = {};
        const iterator = this.getIterator();
        while (iterator.hasNext()) {
            const association = iterator.getNext();
            object[association.getKey().toString()] = association.getValue();
        }
        return object;
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

    this.getValues = function(keys) {
        const values = new List();
        const iterator = keys.getIterator();
        while (iterator.hasNext()) {
            const key = iterator.getNext();
            const value = this.getValue(key);
            if (value !== undefined) values.addItem(value);
        }
        return values;
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

    this.setValues = function(associations) {
        const iterator = associations.getIterator();
        while (iterator.hasNext()) {
            const association = iterator.getNext();
            this.setValue(association.getKey(), association.getValue());
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

    this.removeValues = function(keys) {
        const values = new List();
        const iterator = keys.getIterator();
        while (iterator.hasNext()) {
            const key = iterator.getNext();
            const value = this.removeValue(key);
            if (value !== undefined) values.addItem(value);
        }
        return values;
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

    this.sortItems = function(sorter) {
        sorter = sorter || new utilities.Sorter();
        sorter.sortCollection(this);
    };
    
    this.deleteAll = function() {
        Object.keys(map).forEach(function(key) {
            const association = map[key];
            delete map[key];
        });
        array.splice(0);
    };

    return this;
}
Catalog.prototype = Object.create(abstractions.Collection.prototype);
Catalog.prototype.constructor = Catalog;
exports.Catalog = Catalog;


// PUBLIC FUNCTIONS

/**
 * This function returns a new catalog that contains the associations from the second catalog
 * concatenated onto the end of the first catalog (except any duplicate keys which are ignored).
 * The parameters for the first catalog are used as the parameters for the resulting catalog.
 *
 * @param {Collection} catalog1 The first catalog to be operated on.
 * @param {Collection} catalog2 The second catalog to be operated on.
 * @returns {Collection} The resulting catalog.
 */
Catalog.concatenation = function(catalog1, catalog2) {
    const result = new Catalog(catalog1.getParameters());
    result.addItems(catalog1);
    result.addItems(catalog2);
    return result;
};


/**
 * This function returns a new catalog that contains only the associations with the
 * specified keys. The parameters for the catalog are maintained in the resulting catalog.
 *
 * @param {Catalog} catalog The catalog whose items are to be reduced.
 * @param {Set} keys The set of keys for the associations to be extracted.
 * @returns The resulting catalog.
 */
Catalog.extraction = function(catalog, keys) {
    const result = new Catalog(catalog.getParameters());
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
