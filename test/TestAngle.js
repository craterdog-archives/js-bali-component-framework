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
var Angle = require('../src/elements/Angle').Angle;
/* global NaN, Infinity */

describe('Bali Component Framework™', function() {

    describe('Test angle constructors', function() {

        it('should construct and equal zero', function() {
            expect(new Angle().toNumber()).to.equal(Angle.ZERO.toNumber());
            expect(new Angle(0).toNumber()).to.equal(Angle.ZERO.toNumber());
            expect(new Angle(-0).toNumber()).to.equal(Angle.ZERO.toNumber());
            expect(new Angle(2 * Math.PI).toNumber()).to.equal(Angle.ZERO.toNumber());
        });

        it('should construct and equal pi', function() {
            expect(new Angle('~pi').toNumber()).to.equal(Angle.PI.toNumber());
            expect(new Angle('~-pi').toNumber()).to.equal(Angle.PI.toNumber());
            expect(new Angle(Math.PI).toNumber()).to.equal(Angle.PI.toNumber());
            expect(new Angle(-Math.PI).toNumber()).to.equal(Angle.PI.toNumber());
        });

        it('should construct and equal pi/2', function() {
            expect(new Angle(Math.PI / 2).toNumber()).to.equal(Math.PI / 2);
        });

        it('should throw an exception', function() {
            expect(
                function() {
                    new Angle(NaN);
                }
            ).to.throw();
            expect(
                function() {
                    new Angle(Infinity);
                }
            ).to.throw();
            expect(
                function() {
                    new Angle(-Infinity);
                }
            ).to.throw();
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
                new Angle(Math.PI / 2),
                new Angle(Math.PI / 3),
                new Angle('~0.5'),
                Angle.ZERO,
                new Angle('~-0.5'),
                new Angle(-Math.PI),
                new Angle(-Math.PI / 2),
                new Angle(-Math.PI / 3)
            ];
            var expectedValues = [
                Angle.PI,
                new Angle(1.5707963267949),
                new Angle(1.0471975511966),
                new Angle(0.48995732625373),
                Angle.ZERO,
                new Angle(-0.48995732625373),
                new Angle(-Math.PI),
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
