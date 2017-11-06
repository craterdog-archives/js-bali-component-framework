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
 * This constructor creates an immutable instance of an angle in radians.
 * 
 * @constructor
 * @param {number} value
 * @returns {Angle}
 */
function Angle(value) {

    // Angle(real): constructor generates a new angle normalized to the range (-pi..pi].
    if (typeof value === 'number') {
        if (!isFinite(value)) {
            throw 'An angle must be a valid number: ' + value;
        }
        var twoPi = 2 * Math.PI;
        if (value <= -Math.PI || value > Math.PI) {
            value %= twoPi;  // make in range (-2pi..2pi)
        }
        if (value > Math.PI) {
            value -= twoPi;  // make in the range (-pi..pi]
        }
        if (value <= -Math.PI) {
            value += twoPi;  // make in the range (-pi..pi]
        }
        if (value === -0) value = 0;
        this.value = value;
        return this;
    }

    throw 'Unsupported constructor called: new Angle(' + value + ')';
}
Angle.prototype.constructor = Angle;
exports.Angle = Angle;


/**
 * This method returns a string version of the angle.
 * 
 * @returns {string}
 */
Angle.prototype.toString = function() {
    return this.value.toString();
};


/**
 * This method returns the numeric value of the angle.
 * 
 * @returns {number}
 */
Angle.prototype.toNumber = function() {
    return this.value;
};


Angle.ZERO = new Angle(0);
Angle.PI = new Angle(Math.PI);


/**
 * This function returns the inverse of an angle.
 * 
 * @param {Angle} angle
 * @returns {Angle}
 */
Angle.inverse = function(angle) {
    var value = angle.value - Math.PI;
    if (value <= -Math.PI || value > Math.PI) value %= Math.PI;
    return new Angle(value);
};


/**
 * This function returns the sine (opposite/hypotenuse) of an angle.
 * 
 * @param {Angle} angle
 * @returns {number}
 */
Angle.sine = function(angle) {
    return Math.sin(angle.value);
};


/**
 * This function returns the cosine (adjacent/hypotenuse) of an angle.
 * 
 * @param {Angle} angle
 * @returns {number}
 */
Angle.cosine = function(angle) {
    return Math.cos(angle.value);
};


/**
 * This function returns an angle that is the arctangent of y/x.
 * 
 * @param {number} ratioOrY
 * @param {number} optionalX
 * @returns {Angle}
 */
Angle.arctangent = function(ratioOrY, optionalX) {
    var angle;
    if (optionalX) {
        var y = ratioOrY;
        var x = optionalX;
        angle = new Angle(Math.atan2(y, x));
    } else {
        var ratio = ratioOrY;
        angle = new Angle(Math.atan(ratio));
    }
    return angle;
};
