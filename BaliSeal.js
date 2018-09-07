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

/*
 * This class captures the state and methods associated with a Bali notary seal.
 */
var formatter = require('./transformers/DocumentFormatter');
var parser = require('./transformers/DocumentParser');
var types = require('./nodes/Types');


/**
 * This function parses a Bali source string and returns the corresponding
 * notary seal.
 * 
 * @param {String} certificateReference The Bali string representation of the certificate reference.
 * @param {String} digitalSignature The Bali string representation of the digital signature.
 * @returns {BaliSeal} The resulting notary seal.
 */
exports.fromScratch = function(certificateReference, digitalSignature) {
    if (certificateReference.constructor.name === 'String') {
        certificateReference = parser.parseElement(certificateReference);
    }
    if (digitalSignature.constructor.name === 'String') {
        digitalSignature = parser.parseElement(digitalSignature);
    }
    var seal = new BaliSeal();
    seal.certificateReference = certificateReference;
    seal.digitalSignature = digitalSignature;
    return seal;
};


/**
 * This function returns whether or not the specified object is a
 * notary seal.
 * 
 * @param {Object} object The object to be checked.
 * @returns {Boolean} Whether or not the object is a notary seal.
 */
exports.isSeal = function(object) {
    return object && object.constructor.name === 'BaliSeal' &&
            types.isType(object.certificateReference, types.REFERENCE) &&
            types.isType(object.digitalSignature, types.BINARY);
};


/**
 * This constructor returns a new Bali notary seal.
 * 
 * @returns {BaliSeal} The new Bali notary seal.
 */
function BaliSeal() {
    return this;
}
BaliSeal.prototype.constructor = BaliSeal;


/**
 * This method accepts a visitor as part of the visitor pattern.
 * 
 * @param {NodeVisitor} visitor The visitor that wants to visit this notary seal.
 */
BaliSeal.prototype.accept = function(visitor) {
    visitor.visitSeal(this);
};


/**
 * This method returns a Bali string representation of this notary seal.
 * 
 * @param {String} padding Optional padding spaces to be prepended to
 * each line of the output string.
 * @returns {String} The Bali string representation of this notary seal.
 */
BaliSeal.prototype.toSource = function(padding) {
    padding = padding ? padding : '';
    var string = formatter.formatTree(this, padding);
    return string;
};


/**
 * This method returns a string representation of this notary seal.
 * 
 * @returns {String} The string representation of this notary seal.
 */
BaliSeal.prototype.toString = function() {
    var string = formatter.formatTree(this);
    return string;
};
