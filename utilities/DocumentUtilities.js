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
