/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var mocha = require('mocha');
var expect = require('chai').expect;
var precision = require('../src/utilities/Precision');
var Angle = require('../src/elements/Angle').Angle;
/* global NaN, Infinity */

describe('Bali Component Framework™', function() {

    describe('Test angle constructors', function() {

        it('should construct and equal zero', function() {
            expect(new Angle().toNumber()).to.equal(Angle.ZERO.toNumber());
            expect(new Angle(0).toNumber()).to.equal(Angle.ZERO.toNumber());
            expect(new Angle(-0).toNumber()).to.equal(Angle.ZERO.toNumber());
            expect(new Angle(2 * precision.PI).toNumber()).to.equal(Angle.ZERO.toNumber());
        });

        it('should construct and equal pi', function() {
            expect(new Angle('~pi').toNumber()).to.equal(Angle.PI.toNumber());
            expect(new Angle('~-pi').toNumber()).to.equal(Angle.PI.toNumber());
            expect(new Angle(precision.PI).toNumber()).to.equal(Angle.PI.toNumber());
            expect(new Angle(-precision.PI).toNumber()).to.equal(Angle.PI.toNumber());
        });

        it('should construct and equal pi/2', function() {
            expect(new Angle(precision.PI / 2).toNumber()).to.equal(precision.PI / 2);
        });

        it('should default to zero', function() {
            expect(new Angle(NaN)).to.equal(Angle.ZERO);
            expect(new Angle(Infinity)).to.equal(Angle.ZERO);
            expect(new Angle(-Infinity)).to.equal(Angle.ZERO);
        });

    });

    describe('Test angle methods', function() {

        it('should generate method results that match the expected values', function() {
            var tests = testValues.length;
            for (var i = 0; i < tests; i++) {
                var angle = testValues[i];
                expect(angle.toString()).to.equal(stringValues[i]);
                expect(angle.toNumber()).to.equal(numericValues[i]);
            }
        });

        it('should return the correct type', function() {
            var type = Angle.PI.getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#8SC89QY4LM68LTGPXYMBR6C0LR324L3P,$version:v1,$digest:none]>');
        });

    });

    describe('Test angle functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(Angle.inverse(Angle.ZERO)).to.equal(Angle.PI);  // should use constant values
            expect(Angle.inverse(new Angle(precision.PI / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.inverse(new Angle(precision.PI / 2)).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.inverse(new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.inverse(Angle.PI)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.inverse(new Angle(-precision.PI / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.inverse(new Angle(-precision.PI / 2)).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.inverse(new Angle(-precision.PI * 3 / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.inverse(new Angle(-precision.PI)).isEqualTo(new Angle(0))).to.equal(true);
        });

        it('should perform the complement function correctly', function() {
            expect(Angle.complement(Angle.ZERO).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.complement(new Angle(precision.PI / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.complement(new Angle(precision.PI / 2)).isEqualTo(Angle.ZERO)).to.equal(true);
            expect(Angle.complement(new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.complement(Angle.PI).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.complement(new Angle(-precision.PI / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.complement(new Angle(-precision.PI / 2)).isEqualTo(Angle.PI)).to.equal(true);
            expect(Angle.complement(new Angle(-precision.PI * 3 / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.complement(new Angle(-precision.PI)).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
        });

        it('should perform the supplement function correctly', function() {
            expect(Angle.supplement(Angle.ZERO)).to.equal(Angle.PI);  // should use constant values
            expect(Angle.supplement(new Angle(precision.PI / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.supplement(new Angle(precision.PI / 2)).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.supplement(new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.supplement(Angle.PI)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.supplement(new Angle(-precision.PI / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.supplement(new Angle(-precision.PI / 2)).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.supplement(new Angle(-precision.PI * 3 / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.supplement(new Angle(-precision.PI)).isEqualTo(Angle.ZERO)).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(Angle.conjugate(Angle.ZERO)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.conjugate(new Angle(precision.PI / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.conjugate(new Angle(precision.PI / 2)).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.conjugate(new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.conjugate(Angle.PI)).to.equal(Angle.PI);  // should use constant values
            expect(Angle.conjugate(new Angle(-precision.PI / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.conjugate(new Angle(-precision.PI / 2)).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.conjugate(new Angle(-precision.PI * 3 / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.conjugate(new Angle(-precision.PI)).isEqualTo(new Angle(precision.PI))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(Angle.sum(Angle.ZERO, Angle.ZERO)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.sum(Angle.ZERO, new Angle(precision.PI / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.sum(Angle.ZERO, new Angle(precision.PI / 2)).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.sum(Angle.ZERO, new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.sum(Angle.ZERO, Angle.PI)).to.equal(Angle.PI);  // should use constant values
            expect(Angle.sum(Angle.ZERO, new Angle(precision.PI * 5 / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.sum(Angle.ZERO, new Angle(precision.PI * 3 / 2)).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.sum(Angle.ZERO, new Angle(precision.PI * 7 / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.sum(Angle.ZERO, new Angle(precision.PI * 2))).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.sum(new Angle(precision.PI / 2), Angle.ZERO).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.sum(new Angle(precision.PI / 2), new Angle(precision.PI / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.sum(new Angle(precision.PI / 2), new Angle(precision.PI / 2)).isEqualTo(Angle.PI)).to.equal(true);
            expect(Angle.sum(new Angle(precision.PI / 2), new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.sum(new Angle(precision.PI / 2), Angle.PI).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.sum(new Angle(precision.PI / 2), new Angle(precision.PI * 5 / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.sum(new Angle(precision.PI / 2), new Angle(precision.PI * 3 / 2)).isEqualTo(Angle.ZERO)).to.equal(true);
            expect(Angle.sum(new Angle(precision.PI / 2), new Angle(precision.PI * 7 / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.sum(new Angle(precision.PI / 2), new Angle(precision.PI * 2)).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.sum(Angle.PI, Angle.ZERO)).to.equal(Angle.PI);  // should use constant values
            expect(Angle.sum(Angle.PI, new Angle(precision.PI / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.sum(Angle.PI, new Angle(precision.PI / 2)).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.sum(Angle.PI, new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.sum(Angle.PI, Angle.PI)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.sum(Angle.PI, new Angle(precision.PI * 5 / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.sum(Angle.PI, new Angle(precision.PI * 3 / 2)).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.sum(Angle.PI, new Angle(precision.PI * 7 / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.sum(Angle.PI, new Angle(precision.PI * 2))).to.equal(Angle.PI);  // should use constant values
        });

        it('should perform the difference function correctly', function() {
            expect(Angle.difference(Angle.ZERO, Angle.ZERO)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.difference(Angle.ZERO, new Angle(precision.PI / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.difference(Angle.ZERO, new Angle(precision.PI / 2)).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.difference(Angle.ZERO, new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.difference(Angle.ZERO, Angle.PI)).to.equal(Angle.PI);  // should use constant values
            expect(Angle.difference(Angle.ZERO, new Angle(precision.PI * 5 / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.difference(Angle.ZERO, new Angle(precision.PI * 3 / 2)).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.difference(Angle.ZERO, new Angle(precision.PI * 7 / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.difference(Angle.ZERO, new Angle(precision.PI * 2))).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.difference(new Angle(precision.PI / 2), Angle.ZERO).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.difference(new Angle(precision.PI / 2), new Angle(precision.PI / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.difference(new Angle(precision.PI / 2), new Angle(precision.PI / 2)).isEqualTo(Angle.ZERO)).to.equal(true);
            expect(Angle.difference(new Angle(precision.PI / 2), new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.difference(new Angle(precision.PI / 2), Angle.PI).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.difference(new Angle(precision.PI / 2), new Angle(precision.PI * 5 / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.difference(new Angle(precision.PI / 2), new Angle(precision.PI * 3 / 2)).isEqualTo(Angle.PI)).to.equal(true);
            expect(Angle.difference(new Angle(precision.PI / 2), new Angle(precision.PI * 7 / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.difference(new Angle(precision.PI / 2), new Angle(precision.PI * 2)).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.difference(Angle.PI, Angle.ZERO)).to.equal(Angle.PI);  // should use constant values
            expect(Angle.difference(Angle.PI, new Angle(precision.PI / 4)).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.difference(Angle.PI, new Angle(precision.PI / 2)).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.difference(Angle.PI, new Angle(precision.PI * 3 / 4)).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.difference(Angle.PI, Angle.PI)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.difference(Angle.PI, new Angle(precision.PI * 5 / 4)).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.difference(Angle.PI, new Angle(precision.PI * 3 / 2)).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.difference(Angle.PI, new Angle(precision.PI * 7 / 4)).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.difference(Angle.PI, new Angle(precision.PI * 2))).to.equal(Angle.PI);  // should use constant values
        });

        it('should perform the scale function correctly', function() {
            expect(Angle.scale(Angle.ZERO, -1)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(precision.PI / 4), -1).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.scale(new Angle(precision.PI / 2), -1).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.scale(new Angle(precision.PI * 3 / 4), -1).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.scale(Angle.PI, -1)).to.equal(Angle.PI);  // should use constant values
            expect(Angle.scale(new Angle(-precision.PI / 4), -1).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.scale(new Angle(-precision.PI / 2), -1).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.scale(new Angle(-precision.PI * 3 / 4), -1).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.scale(new Angle(-precision.PI), -1).isEqualTo(Angle.PI)).to.equal(true);
            expect(Angle.scale(Angle.ZERO, 0)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(precision.PI / 4), 0)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(precision.PI / 2), 0)).to.equal(Angle.ZERO);  // should use constant values)
            expect(Angle.scale(new Angle(precision.PI * 3 / 4), 0)).to.equal(Angle.ZERO);  // should use constant values)
            expect(Angle.scale(Angle.PI, 0)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(-precision.PI / 4), 0)).to.equal(Angle.ZERO);  // should use constant values)
            expect(Angle.scale(new Angle(-precision.PI / 2), 0)).to.equal(Angle.ZERO);  // should use constant values)
            expect(Angle.scale(new Angle(-precision.PI * 3 / 4), 0)).to.equal(Angle.ZERO);  // should use constant values)
            expect(Angle.scale(new Angle(-precision.PI), 0)).to.equal(Angle.ZERO);  // should use constant values)
            expect(Angle.scale(Angle.ZERO, 1)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(precision.PI / 4), 1).isEqualTo(new Angle(precision.PI / 4))).to.equal(true);
            expect(Angle.scale(new Angle(precision.PI / 2), 1).isEqualTo(new Angle(precision.PI / 2))).to.equal(true);
            expect(Angle.scale(new Angle(precision.PI * 3 / 4), 1).isEqualTo(new Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.scale(Angle.PI, 1)).to.equal(Angle.PI);  // should use constant values
            expect(Angle.scale(new Angle(-precision.PI / 4), 1).isEqualTo(new Angle(-precision.PI / 4))).to.equal(true);
            expect(Angle.scale(new Angle(-precision.PI / 2), 1).isEqualTo(new Angle(-precision.PI / 2))).to.equal(true);
            expect(Angle.scale(new Angle(-precision.PI * 3 / 4), 1).isEqualTo(new Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(Angle.scale(new Angle(-precision.PI), 1).isEqualTo(Angle.PI)).to.equal(true);
            expect(Angle.scale(Angle.ZERO, Infinity)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(precision.PI / 4), Infinity)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(precision.PI / 2), Infinity)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(precision.PI * 3 / 4), Infinity)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(Angle.PI, Infinity)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(-precision.PI / 4), Infinity)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(-precision.PI / 2), Infinity)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(-precision.PI * 3 / 4), Infinity)).to.equal(Angle.ZERO);  // should use constant values
            expect(Angle.scale(new Angle(-precision.PI), Infinity)).to.equal(Angle.ZERO);  // should use constant values
        });

        it('should run round-trip angle methods', function() {
            var expectedValues = [
                Angle.PI,
                new Angle(precision.PI / 2),
                new Angle(precision.PI / 3),
                new Angle('~0.54321'),
                Angle.ZERO,
                new Angle('~-0.54321'),
                new Angle(-precision.PI),
                new Angle(-precision.PI / 2),
                new Angle(-precision.PI / 3)
            ];
            for (var i = 0; i < expectedValues.length; i++) {
                var angle = expectedValues[i];
                var opposite = Angle.sine(angle);
                var adjacent = Angle.cosine(angle);
                var arctangent = Angle.arctangent(opposite, adjacent);
                expect(arctangent.isEqualTo(angle)).to.equal(true);
            }
        });

    });

});


var testValues = [
    Angle.ZERO,
    new Angle(-0),
    new Angle(0),
    new Angle('~0'),
    new Angle(),
    Angle.PI,
    new Angle('~pi'),
    new Angle('~-pi'),
    new Angle(precision.PI),
    new Angle(-precision.PI),
    new Angle(precision.PI / 4),
    new Angle(-precision.PI / 4),
    new Angle(precision.PI / 2),
    new Angle(-precision.PI / 2),
    new Angle(precision.PI * 3 / 4),
    new Angle(-precision.PI * 3 / 4),
    new Angle(precision.PI * 5 / 4),
    new Angle(-precision.PI * 5 / 4),
    new Angle(precision.PI * 7 / 4),
    new Angle(-precision.PI * 7 / 4),
    new Angle(2 * precision.PI),
    new Angle(-2 * precision.PI)
];

var stringValues = [
    '~0',
    '~0',
    '~0',
    '~0',
    '~0',
    '~pi',
    '~pi',
    '~pi',
    '~pi',
    '~pi',
    '~0.7853981633974483',
    '~-0.7853981633974483',
    '~1.5707963267948966',
    '~-1.5707963267948966',
    '~2.356194490192345',
    '~-2.356194490192345',
    '~-2.35619449019235',
    '~2.35619449019235',
    '~-0.78539816339745',
    '~0.78539816339745',
    '~0',
    '~0'
];

var numericValues = [
    0,
    0,
    0,
    0,
    0,
    precision.PI,
    precision.PI,
    precision.PI,
    precision.PI,
    precision.PI,
    precision.PI / 4,
    -precision.PI / 4,
    precision.PI / 2,
    -precision.PI / 2,
    precision.PI * 3 / 4,
    -precision.PI * 3 / 4,
    -2.35619449019235,
    2.35619449019235,
    -0.78539816339745,
    0.78539816339745,
    0,
    0
];
