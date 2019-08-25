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
 * This class implements a table component. The table consists a list of M column headings,
 * N row headings, and M x N entries in the table each of which is a component.
 * <pre>
 * table: [
 *     "Example Table": [$heading1, $heading2, ... $headingM]
 *     $row1:           [component, component, ... component]
 *     $row2:           [component, component, ... component]
 *                                     ...
 *     $rowN:           [component, component, ... component]
 * ]($type: /bali/composites/Table/v1)
 * </pre>
 * The number of elements in each row list must be equal to the number of column headings.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const composites = require('../composites');
const List = require('./List').List;
const Catalog = require('./Catalog').Catalog;


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new empty table component with the specified table name and
 * column names.
 * 
 * @param {Parameters} parameters Optional parameters used to parameterize this table. 
 * @param {Text|String} tableName The name of the table.
 * @param {List|Array} columnNames A list of the column names.
 * @returns {Table} A new table.
 */
function Table(parameters, tableName, columnNames) {
    parameters = parameters || new composites.Parameters(new Catalog());
    if (!parameters.getParameter('$type')) parameters.setParameter('$type', '/bali/collections/Table/v1');
    abstractions.Collection.call(this, utilities.types.TABLE, parameters);
    tableName = this.convert(tableName);
    columnNames = this.convert(columnNames);

    // the map and array are private attributes so methods that use them are defined
    // in the constructor
    const map = {};  // maps key strings to associations
    const array = [];  // maintains the order of the associations

    this.acceptVisitor = function(visitor) {
        visitor.visitTable(this);
    };
    
    this.toArray = function() {
        const header = new composites.Association(tableName, columnNames);
        return [header].concat(array);  // prepend the header
    };

    this.toObject = function() {
        const object = {};
        object[tableName.toString()] = columnNames;  // prepend the header
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
        const rowName = association.getKey().toString();
        const elements = association.getValue();
        if (elements.getSize() !== columnNames.getSize()) {

            throw new utilities.Exception({
                $module: '/bali/collections/Table',
                $procedure: '$addItem',
                $exception: '$invalidLength',
                $expected: columnNames.getSize(),
                $actual: elements.getSize(),
                $text: '"The number of elements in the new row is different from the number of columns."'
            });
        }
        if (map[rowName]) return false;
        map[rowName] = association;
        array.push(association);
        return true;
    };

    this.containsItem = function(association) {
        const rowName = association.getKey().toString();
        const candidate = map[rowName];
        if (candidate) return candidate.isEqualTo(association);
        return false;
    };

    this.getHeader = function() {
        const header = new composites.Association(tableName, columnNames);
        return header;
    };

    this.addRow = function(rowName, elements) {
        const association = new composites.Association(rowName, elements);
        return this.addItem(association);
    };

    this.removeRow = function(rowName) {
        const association = map[rowName.toString()];
        if (association) {
            delete map[rowName.toString()];
            const index = array.findIndex(function(item) {
                return item.isEqualTo(association);
            });
            array.splice(index, 1);
            return association.getValue();
        }
    };

    this.getValue = function(column, row) {
        const index = columnNames.getIndex(column);
        const value = map[row].getItem(index);
        return value;
    };

    this.setValue = function(column, row, value) {
        const index = columnNames.getIndex(column);
        const oldValue = map[row].setItem(index, value);
        return oldValue;
    };

    this.deleteAll = function() {
        Object.keys(map).forEach(function(key) {
            delete map[key];
        });
        array.splice(0);
    };

    return this;
}
Table.prototype = Object.create(abstractions.Collection.prototype);
Table.prototype.constructor = Table;
exports.Table = Table;
