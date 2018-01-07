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
 * @returns {ElementVisitor} The new element visitor.
 */
function ElementVisitor() {
    return this;
}
ElementVisitor.prototype.constructor = ElementVisitor;
exports.ElementVisitor = ElementVisitor;


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitAngle = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitAny = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitBinary = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitComplex = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitComposite = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitMoment = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitPercent = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitProbability = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitRange = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitReference = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitSymbol = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitTag = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitText = function(element) {
};


/**
 * This visits the specified element.
 * 
 * @param {object} element The element to be visited.
 */
ElementVisitor.prototype.visitVersion = function(element) {
};
