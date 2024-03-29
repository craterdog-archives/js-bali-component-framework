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
const moduleName = '/bali/elements/Angle';
const utilities = require('../utilities');
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This function creates an immutable instance of an angle using the specified value.
 *
 * An optional debug argument may be specified that controls the level of debugging that
 * should be applied during execution. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 *
 * @param {Number} value The value of the angle.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @returns {Angle} The new angle element.
 */
const Angle = function(value, parameters, debug) {
    abstractions.Element.call(
        this,
        [ moduleName ],
        [
            '/bali/libraries/Scalable',
            '/bali/libraries/Radial',
            '/bali/interfaces/Polarized',
            '/bali/interfaces/Continuous'
        ],
        parameters,
        debug
    );

    if (this.debug > 1) {
        this.validateArgument('$Angle', '$value', value, [
            '/javascript/Undefined',
            '/javascript/Number'
        ]);
    }

    // check the value
    if (value === value) value = value || 0;  // default value if not NaN and not defined
    if (!isFinite(value)) {
        const exception = new abstractions.Exception({
            $module: moduleName,
            $procedure: '$Angle',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: '"An invalid angle value was passed to the constructor."'
        }, undefined, this.debug);
        throw exception;
    }

    // convert the value if necessary
    this.calculator = new utilities.Calculator(this.debug);
    const units = this.getParameter('$units');
    if (units && units.toString() === '$degrees') {
        // convert degrees to radians
        value = this.calculator.quotient(this.calculator.product(value, Math.PI), 180);
    }

    // lock onto π if appropriate
    value = this.calculator.lockOnAngle(value);

    // normalize the value to the range (-π..π]
    const twoPi = this.calculator.product(Math.PI, 2);
    if (value < -twoPi || value > twoPi) {
        value = this.calculator.remainder(value, twoPi);  // make in the range (-2π..2π)
    }
    if (value > Math.PI) {
        value = this.calculator.difference(value, twoPi);  // make in the range (-π..π]
    } else if (value <= -Math.PI) {
        value = this.calculator.sum(value, twoPi);  // make in the range (-π..π]
    }
    if (value === -0) value = 0;  // normalize to positive zero

    this.getValue = function() { return value; };

    return this;
};
Angle.prototype = Object.create(abstractions.Element.prototype);
Angle.prototype.constructor = Angle;
exports.Angle = Angle;


// PUBLIC METHODS

/**
 * This method returns whether or not this angle has a meaningful value. If the value is zero
 * it returns <code>false</code>, otherwise it returns <code>true</code>.
 *
 * @returns {Boolean} Whether or not this angle has a meaningful value.
 */
Angle.prototype.isSignificant = function() {
    return this.getValue() !== 0;
};


/**
 * This method determines whether or not this angle has a negative value.
 *
 * @returns {Boolean} Whether or not this angle is negative.
 */
Angle.prototype.isNegative = function() {
    return this.getValue() < 0;
};


/**
 * This method returns the real number value of the angle.
 *
 * @returns {Number} The real number value of the angle.
 */
Angle.prototype.toReal = function() {
    return this.getValue();
};


/**
 * This method returns the value of the angle in radians.
 *
 * @returns {Number} The value of the angle in radians.
 */
Angle.prototype.getRadians = function() {
    return this.getValue();
};


/**
 * This method returns the value of the angle in degrees.
 *
 * @returns {Number} The value of the angle in degrees.
 */
Angle.prototype.getDegrees = function() {
    const value = this.calculator.quotient(this.calculator.product(this.getValue(), 180), Math.PI);
    return value;
};


// SCALABLE LIBRARY FUNCTIONS

/**
 * This function returns the inverse of an angle.
 *
 * @param {Angle} angle The angle to be inverted.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The inverted angle.
 */
Angle.inverse = function(angle, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$inverse', '$angle', angle, [
            '/bali/elements/Angle'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return new Angle(calculator.difference(angle.getValue(), Math.PI), angle.getParameters(), debug);
};


/**
 * This function returns the sum of two angles. The result will be normalized to be in
 * the range (-π..π].
 *
 * @param {Angle} first The first angle to be summed.
 * @param {Angle} second The second angle to be summed.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The normalized sum of the two angles.
 */
Angle.sum = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$sum', '$first', first, [
            '/bali/elements/Angle'
        ]);
        abstractions.Component.validateArgument(moduleName, '$sum', '$second', second, [
            '/bali/elements/Angle'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return new Angle(calculator.sum(first.getValue(), second.getValue()), first.getParameters(), debug);
};


/**
 * This function returns the difference of two angles. The result will be normalized to be in
 * the range (-π..π].
 *
 * @param {Angle} first The angle to be subtracted from.
 * @param {Angle} second The angle to subtract from the first angle.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The normalized difference of the two angles.
 */
Angle.difference = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$difference', '$first', first, [
            '/bali/elements/Angle'
        ]);
        abstractions.Component.validateArgument(moduleName, '$difference', '$second', second, [
            '/bali/elements/Angle'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return new Angle(calculator.difference(first.getValue(), second.getValue()), first.getParameters(), debug);
};


/**
 * This function returns the specified angle scaled to the specified factor. The result
 * will be normalized to be in the range (-π..π].
 *
 * @param {Angle} angle The angle to be scaled.
 * @param {Number} factor The scale factor.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The normalized scaled angle.
 */
Angle.scaled = function(angle, factor, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$scaled', '$angle', angle, [
            '/bali/elements/Angle'
        ]);
        abstractions.Component.validateArgument(moduleName, '$scaled', '$factor', factor, [
            '/javascript/Number'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return new Angle(calculator.product(angle.getValue(), factor), angle.getParameters(), debug);
};


// Radial Library Functions

/**
 * This function returns the complement of an angle. The complementary angle
 * adds to the specified angle to equal π/2.
 *
 * @param {Angle} angle The angle to be complemented.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The complementary angle.
 */
Angle.complement = function(angle, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$complement', '$angle', angle, [
            '/bali/elements/Angle'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return new Angle(calculator.difference(Math.PI / 2, angle.getValue()), angle.getParameters(), debug);
};


/**
 * This function returns the supplement of an angle. The supplementary angle
 * adds to the specified angle to equal π.
 *
 * @param {Angle} angle The angle to be supplemented.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The supplemental angle.
 */
Angle.supplement = function(angle, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$supplement', '$angle', angle, [
            '/bali/elements/Angle'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return new Angle(calculator.difference(Math.PI, angle.getValue()), angle.getParameters(), debug);
};


/**
 * This function returns the conjugate of an angle. The conjugated angle
 * adds to the specified angle to equal 2π.
 *
 * @param {Angle} angle The angle to be conjugated angle.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The conjugated angle.
 */
Angle.conjugate = function(angle, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$conjugate', '$angle', angle, [
            '/bali/elements/Angle'
        ]);
    }
    return new Angle(-angle.getValue(), angle.getParameters(), debug);
};


/**
/**
 * This function returns the sine (opposite/hypotenuse) of an angle.
 *
 * @param {Angle} angle The angle to be analyzed.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Number} The ratio of the opposite to the hypotenuse for the angle.
 */
Angle.sine = function(angle, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$sine', '$angle', angle, [
            '/bali/elements/Angle'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return calculator.sine(angle.getValue());
};


/**
 * This function returns the cosine (adjacent/hypotenuse) of an angle.
 *
 * @param {Angle} angle The angle to be analyzed.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Number} The ratio of the adjacent to the hypotenuse for the angle.
 */
Angle.cosine = function(angle, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$cosine', '$angle', angle, [
            '/bali/elements/Angle'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return calculator.cosine(angle.getValue());
};


/**
 * This function returns the tangent (opposite/adjacent) of an angle.
 *
 * @param {Angle} angle The angle to be analyzed.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Number} The ratio of the opposite to the adjacent for the angle.
 */
Angle.tangent = function(angle, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$tangent', '$angle', angle, [
            '/bali/elements/Angle'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return calculator.tangent(angle.getValue());
};


/**
 * This function returns the angle for the ratio of the opposite to the hypotenuse for
 * a right triangle.
 *
 * @param {Number} ratio The ratio of the opposite to the hypotenuse for the triangle.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The angle of the triangle.
 */
Angle.arcsine = function(ratio, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$arcsine', '$ratio', ratio, [
            '/javascript/Number'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return new Angle(calculator.arcsine(ratio), undefined, debug);
};


/**
 * This function returns the angle for the ratio of the adjacent to the hypotenuse for
 * a right triangle.
 *
 * @param {Number} ratio The ratio of the adjacent to the hypotenuse for the triangle.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The angle of the triangle.
 */
Angle.arccosine = function(ratio, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$arccosine', '$ratio', ratio, [
            '/javascript/Number'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return new Angle(calculator.arccosine(ratio), undefined, debug);
};


/**
 * This function returns the angle for the ratio of the opposite to the adjacent for
 * a right triangle.
 *
 * @param {Number} opposite The length of the side opposite the angle.
 * @param {Number} adjacent The length of the side adjacent to the angle.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Angle} The angle of the triangle.
 */
Angle.arctangent = function(opposite, adjacent, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$arctangent', '$opposite', opposite, [
            '/javascript/Number'
        ]);
        abstractions.Component.validateArgument(moduleName, '$arctangent', '$adjacent', adjacent, [
            '/javascript/Number'
        ]);
    }
    const calculator = new utilities.Calculator(debug);
    return new Angle(calculator.arctangent(opposite, adjacent), undefined, debug);
};

