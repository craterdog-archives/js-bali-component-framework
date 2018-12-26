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
 * This class captures the state, methods, and functions associated with an angle element.
 */
var precision = require('../utilities/Precision');
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

    // analyze the value
    if (value === undefined || value === null) value = 0;  // default value
    var type = value.constructor.name;
    switch (type) {
        case 'Number':
            if (!isFinite(value)) value = 0;
            break;
        case 'String':
            if (value === '~pi' || value === '~-pi') {
                value = precision.PI;
            } else {
                value = Number(value.replace(/~/g, ''));  // strip off the ~
            }
            break;
        default:
            throw new Error('BUG: An invalid angle value type was passed to the constructor: ' + type);
    }

    // lock onto pi if appropriate
    value = precision.lockOnAngle(value);

    // normalize the value to the range (-pi..pi]
    var twoPi = precision.product(precision.PI, 2);
    if (value < -twoPi || value > twoPi) {
        value = precision.remainder(value, twoPi);  // make in the range (-2pi..2pi)
    }
    if (value > precision.PI) {
        value = precision.difference(value, twoPi);  // make in the range (-pi..pi]
    } else if (value <= -precision.PI) {
        value = precision.sum(value, twoPi);  // make in the range (-pi..pi]
    }
    if (value === -0) value = 0;  // normalize to positive zero

    // return a constant if available
    if (value === 0 && Angle.ZERO) return Angle.ZERO;
    if (value === precision.PI && Angle.PI) return Angle.PI;

    // cache the canonically formatted source
    this.value = value;
    var source = '~' + Element.numberToSource(value);
    this.setSource(source);

    return this;
}
Angle.prototype = Object.create(Element.prototype);
Angle.prototype.constructor = Angle;
exports.Angle = Angle;


// PUBLIC METHODS

/**
 * This method determines whether or not this angle is equal to another angle.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean} Whether or not this component is equal to another component.
 */
Angle.prototype.isEqualTo = function(that) {
    return this.comparedTo(that) === 0;
};


/**
 * This method compares this angle to another for ordering.
 * 
 * @param {Object} that The other angle to be compared with. 
 * @returns {Number} 1 if greater, 0 if equal, and -1 if less.
 */
Angle.prototype.comparedTo = function(that) {
    if (!that) return 1;  // anything is greater than nothing

    // check the types
    var thisType = this.constructor.name;
    var thatType = that.constructor.name;
    if (thisType !== thatType) {
        return thisType.localeCompare(thatType);
    }

    // the types are the same, check the values
    if (Math.fround(this.value) < Math.fround(that.value)) return -1;
    if (Math.fround(this.value) > Math.fround(that.value)) return 1;

    // they are also equal
    return 0;
};


/**
 * This method returns the numeric value of the angle.
 * 
 * @returns {Number} The numeric value of the angle.
 */
Angle.prototype.toNumber = function() {
    return this.value;
};


// PUBLIC CONSTANTS

Angle.PI = new Angle(precision.PI);
Angle.ZERO = new Angle(0);


// PUBLIC FUNCTIONS

/**
 * This function returns the inverse of an angle.
 * 
 * @param {Angle} angle The angle to be inverted.
 * @returns {Angle} The inverted angle.
 */
Angle.inverse = function(angle) {
    return new Angle(precision.difference(angle.value, precision.PI));
};


/**
 * This function returns the complement of an angle. The complementary angle
 * adds to the specified angle to equal pi/2.
 * 
 * @param {Angle} angle The angle to be complemented.
 * @returns {Angle} The complementary angle.
 */
Angle.complement = function(angle) {
    return new Angle(precision.difference(precision.PI / 2, angle.value));
};


/**
 * This function returns the supplement of an angle. The supplementary angle
 * adds to the specified angle to equal pi.
 * 
 * @param {Angle} angle The angle to be supplemented.
 * @returns {Angle} The supplemental angle.
 */
Angle.supplement = function(angle) {
    return new Angle(precision.difference(precision.PI, angle.value));
};


/**
 * This function returns the conjugate of an angle. The conjugated angle
 * adds to the specified angle to equal 2pi.
 * 
 * @param {Angle} angle The angle to be conjugated angle.
 * @returns {Angle} The conjugated angle.
 */
Angle.conjugate = function(angle) {
    return new Angle(-angle.value);
};


/**
 * This function returns the sum of two angles. The result will be normalized to be in
 * the range (-pi..pi].
 * 
 * @param {Angle} firstAngle The first angle to be summed.
 * @param {Angle} secondAngle The second angle to be summed.
 * @returns {Angle} The normalized sum of the two angles.
 */
Angle.sum = function(firstAngle, secondAngle) {
    return new Angle(precision.sum(firstAngle.value, secondAngle.value));
};


/**
 * This function returns the difference of two angles. The result will be normalized to be in
 * the range (-pi..pi].
 * 
 * @param {Angle} firstAngle The angle to be subtracted from.
 * @param {Angle} secondAngle The angle to subtract from the first angle.
 * @returns {Angle} The normalized difference of the two angles.
 */
Angle.difference = function(firstAngle, secondAngle) {
    return new Angle(precision.difference(firstAngle.value, secondAngle.value));
};


/**
 * This function returns the specified angle scaled to the specified factor. The result
 * will be normalized to be in the range (-pi..pi].
 * 
 * @param {Angle} angle The angle to be scaled.
 * @param {Number} factor The scale factor.
 * @returns {Angle} The normalized scaled angle.
 */
Angle.scale = function(angle, factor) {
    return new Angle(precision.product(angle.value, factor));
};


/**
/**
 * This function returns the sine (opposite/hypotenuse) of an angle.
 * 
 * @param {Angle} angle The angle to be analyzed.
 * @returns {Number} The ratio of the opposite to the hypotenuse for the angle.
 */
Angle.sine = function(angle) {
    return precision.sine(angle.value);
};


/**
 * This function returns the cosine (adjacent/hypotenuse) of an angle.
 * 
 * @param {Angle} angle The angle to be analyzed.
 * @returns {Number} The ratio of the adjacent to the hypotenuse for the angle.
 */
Angle.cosine = function(angle) {
    return precision.cosine(angle.value);
};


/**
 * This function returns the tangent (opposite/adjacent) of an angle.
 * 
 * @param {Angle} angle The angle to be analyzed.
 * @returns {Number} The ratio of the opposite to the adjacent for the angle.
 */
Angle.tangent = function(angle) {
    return precision.tangent(angle.value);
};


/**
 * This function returns the angle for the ratio of the opposite to the hypotenuse for
 * a right triangle.
 * 
 * @param {Number} ratio The ratio of the opposite to the hypotenuse for the triangle. 
 * @returns {Angle} The angle of the triangle.
 */
Angle.arcsine = function(ratio) {
    return new Angle(precision.arcsine(ratio));
};


/**
 * This function returns the angle for the ratio of the adjacent to the hypotenuse for
 * a right triangle.
 * 
 * @param {Number} ratio The ratio of the adjacent to the hypotenuse for the triangle. 
 * @returns {Angle} The angle of the triangle.
 */
Angle.arccosine = function(ratio) {
    return new Angle(precision.arccosine(ratio));
};


/**
 * This function returns the angle for the ratio of the opposite to the adjacent for
 * a right triangle.
 * 
 * @param {Number} opposite The length of the side opposite the angle.
 * @param {Number} adjacent The length of the side adjacent to the angle.
 * @returns {Angle} The angle of the triangle.
 */
Angle.arctangent = function(opposite, adjacent) {
    return new Angle(precision.arctangent(opposite, adjacent));
};
