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
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates an immutable instance of an angle using the specified
 * value in radians.
 * 
 * @constructor
 * @param {Number} value The value of the angle in radians.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Angle} The new angle element.
 */
function Angle(value, parameters) {
    abstractions.Element.call(this, utilities.types.ANGLE, parameters);

    // analyze the value
    if (value === undefined || value === null) value = 0;  // default value
    if (!isFinite(value)) value = 0;

    // lock onto pi if appropriate
    value = utilities.precision.lockOnAngle(value);

    // normalize the value to the range (-pi..pi]
    const twoPi = utilities.precision.product(utilities.precision.PI, 2);
    if (value < -twoPi || value > twoPi) {
        value = utilities.precision.remainder(value, twoPi);  // make in the range (-2pi..2pi)
    }
    if (value > utilities.precision.PI) {
        value = utilities.precision.difference(value, twoPi);  // make in the range (-pi..pi]
    } else if (value <= -utilities.precision.PI) {
        value = utilities.precision.sum(value, twoPi);  // make in the range (-pi..pi]
    }
    if (value === -0) value = 0;  // normalize to positive zero
    this.value = value;

    this.setSource(this.toLiteral());
    return this;
}
Angle.prototype = Object.create(abstractions.Element.prototype);
Angle.prototype.constructor = Angle;
exports.Angle = Angle;


/**
 * This constructor creates an immutable instance of an angle using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the angle.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Angle} The new angle.
 */
Angle.fromLiteral = function(literal, parameters) {
    literal = literal.slice(1);  // remove the leading '~'
    var value = abstractions.Element.literalToNumber(literal);
    if (parameters) {
        const units = parameters.getValue('$units');
        if (units && units.toString() === '$degrees') {
            // convert degrees to radians
            value = utilities.precision.quotient(utilities.precision.product(value, utilities.precision.PI), 180);
        }
    }
    const angle = new Angle(value, parameters);
    return angle;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Boolean} asCanonical Whether or not the element should be formatted using its
 * default format.
 * @returns {String} The corresponding literal string representation.
 */
Angle.prototype.toLiteral = function(asCanonical) {
    var value = this.value;
    if (!asCanonical && this.parameters) {
        const units = this.parameters.getValue('$units');
        if (units && units.toString() === '$degrees') {
            // convert radians to degrees
            value = utilities.precision.quotient(utilities.precision.product(value, 180), utilities.precision.PI);
        }
    }
    const literal = '~' + abstractions.Element.numberToLiteral(value);  // add the leading '~'
    return literal;
};


/**
 * This method returns whether or not this angle has a meaningful value. If the value is zero
 * it returns <code>false</code>, otherwise it returns <code>true</code>.
 * 
 * @returns {Boolean} Whether or not this angle has a meaningful value.
 */
Angle.prototype.toBoolean = function() {
    return this.value !== 0;
};


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
    const thisType = this.constructor.name;
    const thatType = that.constructor.name;
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


// PUBLIC FUNCTIONS

/**
 * This function returns the inverse of an angle.
 * 
 * @param {Angle} angle The angle to be inverted.
 * @returns {Angle} The inverted angle.
 */
Angle.inverse = function(angle) {
    return new Angle(utilities.precision.difference(angle.value, utilities.precision.PI), angle.parameters);
};


/**
 * This function returns the complement of an angle. The complementary angle
 * adds to the specified angle to equal pi/2.
 * 
 * @param {Angle} angle The angle to be complemented.
 * @returns {Angle} The complementary angle.
 */
Angle.complement = function(angle) {
    return new Angle(utilities.precision.difference(utilities.precision.PI / 2, angle.value), angle.parameters);
};


/**
 * This function returns the supplement of an angle. The supplementary angle
 * adds to the specified angle to equal pi.
 * 
 * @param {Angle} angle The angle to be supplemented.
 * @returns {Angle} The supplemental angle.
 */
Angle.supplement = function(angle) {
    return new Angle(utilities.precision.difference(utilities.precision.PI, angle.value), angle.parameters);
};


/**
 * This function returns the conjugate of an angle. The conjugated angle
 * adds to the specified angle to equal 2pi.
 * 
 * @param {Angle} angle The angle to be conjugated angle.
 * @returns {Angle} The conjugated angle.
 */
Angle.conjugate = function(angle) {
    return new Angle(-angle.value, angle.parameters);
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
    // TODO: add check to make sure the parameters for both angles are the same
    return new Angle(utilities.precision.sum(firstAngle.value, secondAngle.value), firstAngle.parameters);
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
    // TODO: add check to make sure the parameters for both angles are the same
    return new Angle(utilities.precision.difference(firstAngle.value, secondAngle.value), firstAngle.parameters);
};


/**
 * This function returns the specified angle scaled to the specified factor. The result
 * will be normalized to be in the range (-pi..pi].
 * 
 * @param {Angle} angle The angle to be scaled.
 * @param {Number} factor The scale factor.
 * @returns {Angle} The normalized scaled angle.
 */
Angle.scaled = function(angle, factor) {
    return new Angle(utilities.precision.product(angle.value, factor), angle.parameters);
};


/**
/**
 * This function returns the sine (opposite/hypotenuse) of an angle.
 * 
 * @param {Angle} angle The angle to be analyzed.
 * @returns {Number} The ratio of the opposite to the hypotenuse for the angle.
 */
Angle.sine = function(angle) {
    return utilities.precision.sine(angle.value);
};


/**
 * This function returns the cosine (adjacent/hypotenuse) of an angle.
 * 
 * @param {Angle} angle The angle to be analyzed.
 * @returns {Number} The ratio of the adjacent to the hypotenuse for the angle.
 */
Angle.cosine = function(angle) {
    return utilities.precision.cosine(angle.value);
};


/**
 * This function returns the tangent (opposite/adjacent) of an angle.
 * 
 * @param {Angle} angle The angle to be analyzed.
 * @returns {Number} The ratio of the opposite to the adjacent for the angle.
 */
Angle.tangent = function(angle) {
    return utilities.precision.tangent(angle.value);
};


/**
 * This function returns the angle for the ratio of the opposite to the hypotenuse for
 * a right triangle.
 * 
 * @param {Number} ratio The ratio of the opposite to the hypotenuse for the triangle. 
 * @returns {Angle} The angle of the triangle.
 * @param {Parameters} parameters Optional parameters used to parameterize the resulting angle.
 */
Angle.arcsine = function(ratio, parameters) {
    return new Angle(utilities.precision.arcsine(ratio), parameters);
};


/**
 * This function returns the angle for the ratio of the adjacent to the hypotenuse for
 * a right triangle.
 * 
 * @param {Number} ratio The ratio of the adjacent to the hypotenuse for the triangle. 
 * @returns {Angle} The angle of the triangle.
 * @param {Parameters} parameters Optional parameters used to parameterize the resulting angle.
 */
Angle.arccosine = function(ratio, parameters) {
    return new Angle(utilities.precision.arccosine(ratio), parameters);
};


/**
 * This function returns the angle for the ratio of the opposite to the adjacent for
 * a right triangle.
 * 
 * @param {Number} opposite The length of the side opposite the angle.
 * @param {Number} adjacent The length of the side adjacent to the angle.
 * @param {Parameters} parameters Optional parameters used to parameterize the resulting angle.
 * @returns {Angle} The angle of the triangle.
 */
Angle.arctangent = function(opposite, adjacent, parameters) {
    return new Angle(utilities.precision.arctangent(opposite, adjacent), parameters);
};
