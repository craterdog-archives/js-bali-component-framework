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
            expect(Angle.inverse(Angle.ZERO)).to.equal(Angle.PI);
            expect(Angle.inverse(Angle.PI)).to.equal(Angle.ZERO);
            expect(Angle.inverse(new Angle(precision.PI / 2)).isEqualTo(new Angle(-1.570796326794897))).to.equal(true);
        });

        it('should perform the complement function correctly', function() {
        });

        it('should perform the supplement function correctly', function() {
        });

        it('should perform the conjugate function correctly', function() {
        });

        it('should perform the sum function correctly', function() {
        });

        it('should perform the difference function correctly', function() {
        });

        it('should perform the scale function correctly', function() {
        });

        it('should run round-trip angle methods', function() {
            var testValues = [
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
            var expectedValues = [
                Angle.PI,
                new Angle(1.5707963267949),
                new Angle(1.0471975511966),
                new Angle(0.54321),
                Angle.ZERO,
                new Angle(-0.54321),
                new Angle(-precision.PI),
                new Angle(-1.5707963267949),
                new Angle(-1.0471975511966)
            ];
            for (var i = 0; i < testValues.length; i++) {
                var angle = testValues[i];
                var opposite = Angle.sine(angle);
                var adjacent = Angle.cosine(angle);
                var arctangent = Angle.arctangent(opposite, adjacent);
                expect(arctangent.isEqualTo(expectedValues[i])).to.equal(true);
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
