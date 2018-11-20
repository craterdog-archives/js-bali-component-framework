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
 * This class captures the state and methods associated with an angle element.
 */
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates an immutable instance of an angle in radians.
 * 
 * @constructor
 * @param {Number|String} value The value of the angle.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Angle} The new angle element.
 */
function Angle(value, parameters) {
    Element.call(this, types.ANGLE, parameters);
    if (value === undefined || value === null) value = 0;  // default value
    var type = value.constructor.name;
    switch (type) {
        case 'Number':
            if (!isFinite(value)) throw new Error('ANGLE: An angle must be a valid number: ' + value);
            break;
        case 'String':
            if (value === '~pi' || value === '~-pi') {
                value = Math.PI;
            } else {
                value = Number(value.replace(/~/g, ''));  // strip off the ~
            }
            break;
        default:
            throw new Error('ANGLE: An invalid value type was passed to the constructor: ' + type);
    }
    var twoPi = 2 * Math.PI;
    if (value <= -Math.PI || value > Math.PI) value %= twoPi;  // make in range (-2pi..2pi)
    if (value > Math.PI) value -= twoPi;  // make in the range (-pi..pi]
    if (value <= -Math.PI) value += twoPi;  // make in the range (-pi..pi]
    if (value === -0) value = 0;  // normalize to positive zero
    if (typeof Angle.ZERO !== 'undefined' && value === 0) return Angle.ZERO;
    if (typeof Angle.PI !== 'undefined' && value === Math.PI) return Angle.PI;
    this.value = value;
    var source = '~' + Element.numberToSource(value);
    source = source.replace(/e\+?/g, 'E');  // convert to Bali exponential format
    this.setSource(source);
    return this;
}
Angle.prototype = Object.create(Element.prototype);
Angle.prototype.constructor = Angle;
exports.Angle = Angle;


/**
 * This method returns the numeric value of the angle.
 * 
 * @returns {Number} The numeric value of the angle.
 */
Angle.prototype.toNumber = function() {
    return this.value;
};


// common constants
Angle.ZERO = new Angle(0);
Angle.PI = new Angle(Math.PI);


/**
 * This function returns the inverse of an angle. The inverse will be normalized to be
 * in the range (-pi..pi].
 * 
 * @param {Angle} angle The angle to be inverted.
 * @returns {Angle} The inverted angle.
 */
Angle.inverse = function(angle) {
    var value = angle.value - Math.PI;
    if (value <= -Math.PI || value > Math.PI) value %= Math.PI;
    return new Angle(value);
};


/**
 * This function returns the sine (opposite/hypotenuse) of an angle.
 * 
 * @param {Angle} angle The angle to be analyzed.
 * @returns {Number} The ratio of the opposite to the hypotenuse for the angle.
 */
Angle.sine = function(angle) {
    return Math.sin(angle.value);
};


/**
 * This function returns the cosine (adjacent/hypotenuse) of an angle.
 * 
 * @param {Angle} angle The angle to be analyzed.
 * @returns {Number} The ratio of the adjacent to the hypotenuse for the angle.
 */
Angle.cosine = function(angle) {
    return Math.cos(angle.value);
};


/**
 * This function returns the tangent (opposite/adjacent) of an angle.
 * 
 * @param {Angle} angle The angle to be analyzed.
 * @returns {Number} The ratio of the opposite to the adjacent for the angle.
 */
Angle.tangent = function(angle) {
    return Math.tan(angle.value);
};


/**
 * This function returns the angle for the ratio of the opposite to the hypotenuse for
 * a triangle.
 * 
 * @param {Number} ratio The ratio of the opposite to the hypotenuse for the triangle. 
 * @returns {Angle} The angle of the triangle.
 */
Angle.arcsine = function(ratio) {
    return Math.asin(ratio);
};


/**
 * This function returns the angle for the ratio of the adjacent to the hypotenuse for
 * a triangle.
 * 
 * @param {Number} ratio The ratio of the adjacent to the hypotenuse for the triangle. 
 * @returns {Angle} The angle of the triangle.
 */
Angle.arccosine = function(ratio) {
    return Math.acos(ratio);
};


/**
 * This function returns the angle for the ratio of the opposite to the adjacent for
 * a triangle.
 * 
 * @param {Number} ratioOrY Either the ratio of the opposite to the adjacent, or the opposite.
 * @param {Number} optionalX The adjacent if the first parameter is not a ratio.
 * @returns {Angle} The angle of the triangle.
 */
Angle.arctangent = function(ratioOrY, optionalX) {
    var angle;
    if (optionalX === undefined || optionalX === null) {
        var ratio = ratioOrY;
        angle = Math.atan(ratio);
        angle = new Angle(angle);
    } else {
        var opposite = ratioOrY;
        var adjacent = optionalX;
        angle = Math.atan2(opposite, adjacent);
        angle = new Angle(angle);
    }
    return angle;
};
