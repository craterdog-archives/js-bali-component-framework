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
    this.map = {};  // maps key strings to associations
    this.array = [];  // maintains the order of the associations
    this.complexity += 2;  // account for the '[' ']' delimiters
    this.complexity += 1;  // account for the ':' in the empty catalog
    return this;
}
Catalog.prototype = Object.create(abstractions.Collection.prototype);
Catalog.prototype.constructor = Catalog;
exports.Catalog = Catalog;


/**
 * This function creates a new catalog using the specified sequential object to seed the
 * initial associations. The list may be parameterized by specifying optional
 * parameters that are used to parameterize its type.
 * 
 * @param {Array|Object|Collection} sequential The sequential object containing the initial
 * associations to be used to seed the new catalog.
 * @param {Parameters} parameters Optional parameters used to parameterize this catalog.
 * @returns {Catalog} The new catalog.
 */
Catalog.fromSequential = function(sequential, parameters) {
    const catalog = new Catalog(parameters);
    var index = 1;
    var iterator;
    if (typeof sequential !== 'object') {
        const type = sequential.constructor.name;
        throw new Error('BUG: A catalog cannot be initialized using an object of type: ' + type);
    }
    switch (sequential.type) {
        case utilities.types.CATALOG:
            iterator = sequential.getIterator();
            while (iterator.hasNext()) {
                const association = iterator.getNext();
                catalog.addItem(association);
            }
            break;
        case utilities.types.LIST:
        case utilities.types.QUEUE:
        case utilities.types.SET:
        case utilities.types.STACK:
            iterator = sequential.getIterator();
            while (iterator.hasNext()) {
                const item = iterator.getNext();
                catalog.setValue(index++, item);
            }
            break;
        default:
            if (Array.isArray(sequential)) {
                sequential.forEach(function(item) {
                    if (item.type === utilities.types.ASSOCIATION) {
                        catalog.addItem(item);
                    } else {
                        catalog.setValue(index++, item);
                    }
                });
            } else {
                const keys = Object.keys(sequential);
                keys.forEach(function(key) {
                    catalog.setValue(key, sequential[key]);
                });
            }
    }
    return catalog;
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
    const result = Catalog.fromSequential(catalog1, catalog1.parameters);
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


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this catalog.
 */
Catalog.prototype.acceptVisitor = function(visitor) {
    visitor.visitCatalog(this);
};


/**
 * This method returns the number of items that are currently in this catalog.
 * 
 * @returns {Number} The number of items in this catalog.
 */
Catalog.prototype.getSize = function() {
    const size = this.array.length;
    return size;
};


/**
 * This method returns an array containing the items in this catalog.
 * 
 * @returns {Array} An array containing the items in this catalog.
 */
Catalog.prototype.toArray = function() {
    return this.array.slice();  // copy the array
};


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
        object[association.key.toString()] = association.value;
    }
    return object;
};


/**
 * This method retrieves the association that is associated with the specified index from
 * this catalog.
 * 
 * @param {Number} index The index of the desired association.
 * @returns {Association} The association at the index in this catalog.
 */
Catalog.prototype.getItem = function(index) {
    index = this.normalizeIndex(index);
    index--;  // convert to JS zero based indexing
    const item = this.array[index];
    return item;
};


/**
 * This method adds the specified association to this catalog. If an association with
 * the same key already exists in this catalog, its value will be replaced with the
 * the value of the specified association. The order of associations will not be
 * affected in this case.
 * 
 * @param {Association} association The association to be added to this catalog. 
 * @returns {Boolean} Whether or not the item was successfully added.
 */
Catalog.prototype.addItem = function(association) {
    const index = association.key.toString();
    if (this.map[index]) {
        // an association with the specified key already exists
        return false;
    }
    // add a new association
    this.map[index] = association;
    this.array.push(association);
    if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
    this.complexity += association.complexity;
    return true;
};


/**
 * This method returns whether or not the specified association is contained in the
 * catalog.
 * 
 * @param {Association} association The association to be searched for in this catalog.
 * @returns {Boolean} Whether or not the catalog contains the specified association.
 */
Catalog.prototype.containsItem = function(association) {
    var result = false;
    const index = association.key.toString();
    const candidate = this.map[index];
    if (candidate) {
        result = candidate.isEqualTo(association);
    }
    return result;
};


/**
 * This method returns the value associated with the specified key in this catalog.
 *
 * @param {String|Number|Boolean|Component} key The key for the desired value.
 * @returns {Component} The value associated with the key.
 */
Catalog.prototype.getValue = function(key) {
    var value;
    const index = key.toString();
    const association = this.map[index];
    if (association) value = association.value;
    return value;
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
 * This method associates in this catalog a new value with a key.  If there is already
 * a value associated with the specified key, the new value replaces the old value.
 *
 * @param {String|Number|Boolean|Component} key The key for the new value.
 * @param {String|Number|Boolean|Component} value The new value to be associated with the key.
 * @returns {Component} The value previously associated with the key.
 */
Catalog.prototype.setValue = function(key, value) {
    key = abstractions.Composite.asComponent(key);
    value = abstractions.Composite.asComponent(value);
    const index = key.toString();
    var association = this.map[index];
    var oldValue;
    if (association) {
        oldValue = association.value;
        this.complexity -= oldValue.complexity;
        association.setValue(value);
        this.complexity += value.complexity;
    } else {
        association = new composites.Association(key, value);
        this.map[index] = association;
        this.array.push(association);
        this.complexity += association.complexity;
        if (this.getSize() > 1) this.complexity += 2;  // account for the ', ' separator
    }
    return oldValue;
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
        this.setValue(association.key, association.value);
    }
};


/**
 * This method removes from this catalog the value associated with a key.  If no value
 * is associated with the specified key then the return value is undefined.
 *
 * @param {String|Number|Boolean|Component} key The key for the value to be removed.
 * @returns {Component} The value that was associated with the key.
 */
Catalog.prototype.removeValue = function(key) {
    var index = key.toString();
    const association = this.map[index];
    if (association) {
        delete this.map[index];
        index = this.array.findIndex(function(item) {
            return item.isEqualTo(association);
        });
        this.array.splice(index, 1);
        this.complexity -= association.complexity;
        if (this.getSize() > 0) this.complexity -= 2;  // account for the ', ' separator
        return association.value;
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
 * This method removes all associations from this catalog.
 */
Catalog.prototype.clear = function() {
    const size = this.getSize();
    if (size > 1) this.complexity -= (size - 1) * 2;  // account for all the ', ' separators
    Object.keys(this.map).forEach(function(key) {
        const association = this.map[key];
        this.complexity -= association.complexity;
        delete this.map[key];
    }, this);
    this.array.splice(0);
};


/**
 * This method returns a list of the keys for the associations in this catalog. The
 * keys are in the same order as the associations in the catalog.
 *
 * @returns {List} A list of the keys for this catalog.
 */
Catalog.prototype.getKeys = function() {
    const keys = new List();
    this.array.forEach(function(association) {
        const key = association.key;
        keys.addItem(key);
    });
    return keys;
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


/**
 * This method reverses the order of the items in this catalog.
 */
Catalog.prototype.reverseItems = function() {
    this.array.reverse();
};
