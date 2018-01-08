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
 * This abstract visitor class defines the methods that should be implemented by
 * element visitor classes.
 */


/**
 * This constructor creates a new element visitor.
 * 
 * @returns {ObjectVisitor} The new element visitor.
 */
function ObjectVisitor() {
    return this;
}
ObjectVisitor.prototype.constructor = ObjectVisitor;
exports.ObjectVisitor = ObjectVisitor;


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitAngle = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitAny = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitBinary = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitComplex = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitComposite = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitMoment = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitPercent = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitProbability = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitRange = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitReference = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitSymbol = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitTag = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitText = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ObjectVisitor.prototype.visitVersion = function(element) {
};
