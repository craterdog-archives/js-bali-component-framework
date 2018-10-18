/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

/**
 * This collection class implements a sortable collection containing key-value associations.  The
 * implementation is optimized for both inserting new associations and looking up values based on
 * their key.  The implementation also dynamically scales up and down the number of buckets as the
 * number of associations changes over time.
 */
var types = require('../abstractions/Types');
var Composite = require('../abstractions/Composite').Composite;
var SortableCollection = require('../abstractions/SortableCollection').SortableCollection;
var Association = require('./Association').Association;
var List = require('./List').List;


/**
 * The constructor creates a new empty catalog.
 * 
 * @param {Collection} parameters Optional parameters used to parameterize this component. 
 * @returns {Catalog} The new catalog.
 */
function Catalog(parameters) {
    SortableCollection.call(this, types.CATALOG, parameters);
    this.map = {};  // maps key strings to associations
    this.length += 2;  // account for the '[' ']' delimiters
    this.length += 1;  // account for the ':' in the empty catalog
    return this;
}
Catalog.prototype = Object.create(SortableCollection.prototype);
Catalog.prototype.constructor = Catalog;
exports.Catalog = Catalog;


/**
 * This function creates a new catalog using the specified collection to seed the
 * initial associations.
 * 
 * @param {Array|Object|Collection} collection The collection containing the initial
 * associations to be used to seed the new catalog.
 * @param {type} parameters Optional parameters for the catalog type.
 * @returns {Catalog} The resulting catalog.
 */
Catalog.fromCollection = function(collection, parameters) {
    var catalog = new Catalog(parameters);
    var index = 1;
    var iterator;
    var type = collection.constructor.name;
    switch (type) {
        case 'Array':
            collection.forEach(function(item) {
                catalog.setValue(index++, item);
            });
            break;
        case 'List':
        case 'Set':
        case 'Stack':
            iterator = collection.iterator();
            while (iterator.hasNext()) {
                var item = iterator.getNext();
                catalog.setValue(index++, item);
            }
            break;
        case 'Object':
            var keys = Object.keys(collection);
            keys.forEach(function(key) {
                catalog.setValue('$' + key, collection[key]);
            });
            break;
        case 'Catalog':
            iterator = collection.iterator();
            while (iterator.hasNext()) {
                var association = iterator.getNext();
                catalog.setValue(association.key, association.value);
            }
            break;
        default:
            throw new Error('CATALOG: A catalog cannot be initialized using a collection of type: ' + type);
    }
    return catalog;
};


/**
 * This function returns a new catalog that contains the all the associations from
 * both the specified catalogs.
 *
 * @param {Catalog} catalog1 The first catalog whose items are to be concatenated.
 * @param {Catalog} catalog2 The second catalog whose items are to be concatenated.
 * @returns {Catalog} The resulting catalog.
 */
Catalog.concatenation = function(catalog1, catalog2) {
    var result = Catalog.fromCollection(catalog1);
    result.addItems(catalog2);
    return result;
};


/**
 * This function returns a new catalog that contains only the associations with
 * the specified keys.
 *
 * @param {Catalog} catalog The catalog whose items are to be reduced.
 * @param {Collection} keys The collection of keys for the associates to be saved.
 * @returns The resulting catalog.
 */
Catalog.reduction = function(catalog, keys) {
    var result = new Catalog();
    var iterator = keys.iterator();
    while (iterator.hasNext()) {
        var key = iterator.getNext();
        var value = catalog.getValue(key);
        if (value) {
            result.setValue(key, value);
        }
    }
    return result;
};


// PUBLIC METHODS

/**
 * This method returns an empty copy of this catalog.
 * 
 * @returns {Catalog} An empty copy of this catalog.
 */
Catalog.prototype.emptyCopy = function() {
    var copy = new Catalog(this.parameters);
    return copy;
};


/**
 * This method adds the specified association to this catalog. If an association with
 * the same key already exists in this catalog, its value will be replaced with the
 * the value of the specified association. The order of associations will not be
 * affected in this case.
 * 
 * @param {Association} association The association to be added to this catalog. 
 * @returns {Boolean} Whether or not the association was successfully added.
 */
Catalog.prototype.addItem = function(association) {
    var index = association.key.toString();
    var candidate = this.map[index];
    if (candidate) {
        this.length -= candidate.length;
        candidate.setValue(association.value);
    } else {
        this.map[index] = association;
        this.array.push(association);
        if (this.getSize() > 1) this.length += 2;  // account for the ', ' separator
    }
    this.length += association.length;
    return true;
};


/**
 * This method returns whether or not the specified association is contained in the
 * catalog.
 * 
 * @param {Association} association The association to be searched for in this catalog.
 */
Catalog.prototype.containsItem = function(association) {
    var result = false;
    var index = association.key.toString();
    var candidate = this.map[index];
    if (candidate) {
        result = candidate.equalTo(association);
    }
    return result;
};


/**
 * This method removes from this collection the item associated with the specified index.
 *
 * @param {Number} index The index of the item to be removed.
 * @returns {Component} The item at the specified index.
 */
Catalog.prototype.removeItem = function(index) {
    var association = this.array[index];
    if (association) {
        var key = association.key;
        delete this.map[key];
        this.array.splice(index, 1);
        this.length -= association.length;
        if (this.getSize() > 1) this.length -= 2;  // account for the ', ' separator
    }
    return association;
};


/**
 * This method removes all associations from this catalog.
 */
Catalog.prototype.removeAll = function() {
    var size = this.getSize();
    if (size > 1) this.length -= (size - 1) * 2;  // account for all the ', ' separators
    Object.keys(this.map).forEach(function(key) {
        var association = this.map[key];
        this.length -= association.length;
        delete this.map[key];
    }, this);
    this.array.splice(0);
};


/**
 * This function retrieves from a catalog the string value associated with the
 * specified key.
 * 
 * @param {String} key The string form of the key.
 * @returns {Component} The string value associated with the key.
 */
Catalog.prototype.getString = function(key) {
    return this.getValue(key).toString();
};


/**
 * This method returns the value associated with the specified key in this catalog.
 *
 * @param {Component} key The key for the value to be retrieved.
 * @returns {Component} The value associated with the key.
 */
Catalog.prototype.getValue = function(key) {
    var value;
    var index = key.toString();
    var association = this.map[index];
    if (association) value = association.value;
    return value;
};


/**
 * This method associates in this catalog a new value with a key.  If there is already
 * a value associated with the specified key, the new value replaces the old value.
 *
 * @param {Component} key The key for the new value.
 * @param {Component} value The new value to be associated with the key.
 * @returns {Component} The value previously associated with the key.
 */
Catalog.prototype.setValue = function(key, value) {
    key = Composite.asComponent(key);
    value = Composite.asComponent(value);
    var index = key.toString();
    var association = this.map[index];
    var oldValue;
    if (association) {
        oldValue = association.value;
        this.length -= oldValue.length;
        association.setValue(value);
        this.length += value.length;
    } else {
        association = new Association(key, value);
        this.map[index] = association;
        this.array.push(association);
        this.length += association.length;
        if (this.getSize() > 1) this.length += 2;  // account for the ', ' separator
    }
    return oldValue;
};


/**
 * This method removes from this catalog the value associated with a key.  If no value
 * is associated with the specified key then the return value is undefined.
 *
 * @param {Component} key The key for the value to be removed.
 * @returns {Component} The value associated with the key.
 */
Catalog.prototype.removeValue = function(key) {
    var value;
    var index = key.toString();
    var association = this.map[index];
    if (association) {
        delete this.map[index];
        index = this.array.findIndex(function(item) {
            return item.equalTo(association);
        });
        this.array.splice(index, 1);
        this.length -= association.length;
        if (this.getSize() > 0) this.length -= 2;  // account for the ', ' separator
        value = association.value;
    }
    return value;
};


/**
 * This method returns a sortable collection of the keys for the associations in this catalog.
 *
 * @returns {SortableCollection} A sortable collection of the keys for this catalog.
 */
Catalog.prototype.getKeys = function() {
    var keys = new List();
    this.array.forEach(function(association) {
        var key = association.key;
        keys.addItem(key);
    });
    return keys;
};


/**
 * This method returns a sortable collection of the values for the associations in this catalog.
 *
 * @returns {SortableCollection} A sortable collection of the values for this catalog.
 */
Catalog.prototype.getValues = function() {
    var values = new List();
    this.array.forEach(function(association) {
        var value = association.value;
        values.addItem(value);
    });
    return values;
};


/**
 * This method returns the list of associations between keys and values for this catalog.
 *
 * @returns {SortableCollection} A sortable collection of the associations for this catalog.
 */
Catalog.prototype.getAssociations = function() {
    var associations = new List();
    this.array.forEach(function(association) {
        associations.addItem(association);
    });
    return associations;
};
