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
var parser = require('../transformers/DocumentParser');
var types = require('../nodes/Types');
var Tree = require('../nodes/Tree').Tree;


// LISTS

/**
 * This function constructs an iterator for the specified list.
 * 
 * @param {Tree} component The list.
 * @returns {Iterator} The new iterator.
 */
exports.iterator = function(component) {
    var structure = component.children[0];
    var list = structure.children[0];
    var iterator = new ListIterator(list);
    return iterator;
};


/**
 * This function retrieves from a list the value associated with the
 * specified index.
 * 
 * @param {Tree} component The list.
 * @param {Number} index The ordinal based index of the desired value.
 * @returns {Component} The value associated with the index.
 */
exports.getValueForIndex = function(component, index) {
    var structure = component.children[0];
    var list = structure.children[0];
    var expressions = list.children;
    if (index < expressions.length) {
        return expressions[index];
    } else {
        return undefined;
    }
};


/**
 * This function sets in a list the value associated with the specified index.
 * 
 * @param {Tree} component The list.
 * @param {Number} index The ordinal based index of the value.
 * @param {Component} value The value to be associated with the index.
 * @returns {Component} The old value associated with the index.
 */
exports.setValueForIndex = function(component, index, value) {
    if (value.constructor.name === 'String') {
        value = parser.parseComponent(value);
    }
    var structure = component.children[0];
    var list = structure.children[0];
    var expressions = list.children;
    var old = expressions[index];
    expressions[index] = value;
    return old;
};


/**
 * This function adds a new value to a list.
 * 
 * @param {Tree} component The list.
 * @param {Component} value The value to be added to the list.
 */
exports.addValue = function(component, value) {
    if (value.constructor.name === 'String') {
        value = parser.parseComponent(value);
    }
    var structure = component.children[0];
    var list = structure.children[0];
    var expressions = list.children;
    expressions.push(value);
};


// ELEMENTS

/**
 * This function returns whether or not the specified object is a
 * tag.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a tag.
 */
exports.isTag = function(object) {
    if (!object) return false;
    try {
        if (object.constructor.name === 'String') {
            object = parser.parseElement(object);
        }
        return object.constructor.name === 'Terminal' && object.type === types.TAG;
    } catch (e) {
        return false;
    }
};


/**
 * This function returns whether or not the specified object is a
 * reference.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a reference.
 */
exports.isReference = function(object) {
    if (!object) return false;
    try {
        var type = object.constructor.name;
        if (type === 'URL') {
            object = '<' + object.toString().replace(/%23/, '#') + '>';
            type = object.constructor.name;
        }
        if (type === 'String') {
            object = parser.parseElement(object);
        }
        return object.constructor.name === 'Terminal' && object.type === types.REFERENCE;
    } catch (e) {
        return false;
    }
};


/**
 * This function returns whether or not the specified object is a
 * version string.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a version string.
 */
exports.isVersion = function(object) {
    if (!object) return false;
    try {
        if (object.constructor.name === 'String') {
            object = parser.parseElement(object);
        }
        return object.constructor.name === 'Terminal' && object.type === types.VERSION;
    } catch (e) {
        return false;
    }
};


// PRIVATE CLASSES

function ListIterator(list) {
    this.expressions = list.children;
    this.index = 0;
    return this;
}
ListIterator.prototype.constructor = ListIterator;


ListIterator.prototype.hasNext = function() {
    return this.index < this.expressions.length;
};


ListIterator.prototype.getNext = function() {
    if (this.index < this.expressions.length) {
        return this.expressions[this.index++];
    } else {
        return undefined;
    }
};
