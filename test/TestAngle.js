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

        it('should return the correct type', function() {
            var type = Angle.PI.getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#8SC89QY4LM68LTGPXYMBR6C0LR324L3P,$version:v1,$digest:none]>');
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
                new Angle(0.54321493521763),
                Angle.ZERO,
                new Angle(-0.54321493521763),
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
