/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../');
/* global NaN, Infinity */

describe('Bali Component Framework™', function() {

    describe('Test angle constructors', function() {

        it('should construct angles using literals', function() {
            expect(bali.parse('~0').toString()).to.equal('~0');
            expect(bali.parse('~pi').toString()).to.equal('~pi');
            expect(bali.parse('~pi').toDegrees()).to.equal('~180');
            expect(bali.parse('~pi($units: $radians)').toString()).to.equal('~pi($units: $radians)');
            expect(bali.parse('~90($units: $degrees)').toString()).to.equal('~90($units: $degrees)');
            expect(bali.parse('~180($units: $degrees)').toRadians()).to.equal('~pi');
        });

        it('should construct angles that equal zero', function() {
            expect(bali.angle().toBoolean()).to.equal(false);
            expect(bali.angle().toString()).to.equal('~0');
            expect(bali.angle().toNumber()).to.equal(0);
            expect(bali.angle(0).toBoolean()).to.equal(false);
            expect(bali.angle(0).toString()).to.equal('~0');
            expect(bali.angle(0).toNumber()).to.equal(0);
            expect(bali.angle(2 * Math.PI).toBoolean()).to.equal(false);
            expect(bali.angle(2 * Math.PI).toString()).to.equal('~0');
            expect(bali.angle(2 * Math.PI).toNumber()).to.equal(0);
        });

        it('should construct angles that equal 45 degrees', function() {
            expect(bali.angle(45, bali.angle.DEGREES).toBoolean()).to.equal(true);
            expect(bali.angle(45, bali.angle.DEGREES).toString()).to.equal('~45($units: $degrees)');
            expect(bali.angle(45, bali.angle.DEGREES).toNumber()).to.equal(Math.PI/4);
            expect(bali.angle(Math.PI/4).toNumber()).to.equal(Math.PI/4);
            expect(bali.angle(Math.PI/4).toString()).to.equal('~0.7853981633974483');
            expect(bali.angle(Math.PI/4, bali.angle.RADIANS).toString()).to.equal('~0.7853981633974483($units: $radians)');
        });

        it('should construct angles that equal pi', function() {
            expect(bali.angle.PI.toNumber()).to.equal(Math.PI);
            expect(bali.angle(-Math.PI).toNumber()).to.equal(Math.PI);
            expect(bali.angle(180, bali.angle.DEGREES).toNumber()).to.equal(Math.PI);
            expect(bali.angle(-180, bali.angle.DEGREES).toNumber()).to.equal(Math.PI);
            expect(bali.angle(-180, bali.angle.DEGREES).toString()).to.equal('~180($units: $degrees)');
            expect(bali.angle.PI.isEqualTo(bali.angle(180, bali.angle.DEGREES))).to.equal(true);
        });

        it('should throw an exception when constructing an angle with an invalid value', function() {
            expect(
                function() {
                    bali.angle(NaN);
                }
            ).to.throw();
            expect(
                function() {
                    bali.angle(Infinity);
                }
            ).to.throw();
            expect(
                function() {
                    bali.angle(-Infinity);
                }
            ).to.throw();
        });

    });

    describe('Test angle methods', function() {

        it('should generate method results that match the expected values', function() {
            const tests = testValues.length;
            for (var i = 0; i < tests; i++) {
                const angle = testValues[i];
                expect(angle.toString()).to.equal(stringValues[i]);
                expect(angle.toNumber()).to.equal(numericValues[i]);
            }
        });

    });

    describe('Test angle functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(bali.angle.inverse(bali.angle(0)).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.inverse(bali.angle(Math.PI / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(Math.PI / 2)).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.inverse(bali.angle.PI).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(-Math.PI / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(-Math.PI / 2)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(-Math.PI * 3 / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(-Math.PI)).isEqualTo(bali.angle(0))).to.equal(true);
        });

        it('should perform the complement function correctly', function() {
            expect(bali.angle.complement(bali.angle(0)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.complement(bali.angle(Math.PI / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.complement(bali.angle(Math.PI / 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.complement(bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.complement(bali.angle.PI).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.complement(bali.angle(-Math.PI / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.complement(bali.angle(-Math.PI / 2)).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.complement(bali.angle(-Math.PI * 3 / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.complement(bali.angle(-Math.PI)).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
        });

        it('should perform the supplement function correctly', function() {
            expect(bali.angle.supplement(bali.angle(0)).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.supplement(bali.angle(Math.PI / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(Math.PI / 2)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.supplement(bali.angle.PI).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(-Math.PI / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(-Math.PI / 2)).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(-Math.PI * 3 / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(-Math.PI)).isEqualTo(bali.angle(0))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(bali.angle.conjugate(bali.angle(0)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(Math.PI / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(Math.PI / 2)).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle.PI).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(-Math.PI / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(-Math.PI / 2)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(-Math.PI * 3 / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(-Math.PI)).isEqualTo(bali.angle.PI)).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(bali.angle.sum(bali.angle(0), bali.angle(0)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(Math.PI / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(Math.PI / 2)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle.PI).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 5 / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 3 / 2)).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 7 / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(0)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI / 2)).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle.PI).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 5 / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 3 / 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 7 / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 2)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle.PI, bali.angle(0)).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI / 2)).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle.PI, bali.angle.PI).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 5 / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 3 / 2)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 7 / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 2)).isEqualTo(bali.angle.PI)).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(bali.angle.difference(bali.angle(0), bali.angle(0)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(Math.PI / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(Math.PI / 2)).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle.PI).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 5 / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 3 / 2)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 7 / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(0)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI / 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle.PI).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 5 / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 3 / 2)).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 7 / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 2)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle.PI, bali.angle(0)).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI / 4)).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI / 2)).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 3 / 4)).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle.PI, bali.angle.PI).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 5 / 4)).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 3 / 2)).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 7 / 4)).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 2)).isEqualTo(bali.angle.PI)).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(bali.angle.scaled(bali.angle(0), -1).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(Math.PI / 4), -1).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(Math.PI / 2), -1).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(Math.PI * 3 / 4), -1).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle.PI, -1).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI / 4), -1).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI / 2), -1).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI * 3 / 4), -1).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI), -1).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.scaled(bali.angle(0), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(Math.PI / 4), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(Math.PI / 2), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(Math.PI * 3 / 4), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle.PI, 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI / 4), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI / 2), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI * 3 / 4), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(0), 1).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(Math.PI / 4), 1).isEqualTo(bali.angle(Math.PI / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(Math.PI / 2), 1).isEqualTo(bali.angle(Math.PI / 2))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(Math.PI * 3 / 4), 1).isEqualTo(bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle.PI, 1).isEqualTo(bali.angle.PI)).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI / 4), 1).isEqualTo(bali.angle(-Math.PI / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI / 2), 1).isEqualTo(bali.angle(-Math.PI / 2))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI * 3 / 4), 1).isEqualTo(bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-Math.PI), 1).isEqualTo(bali.angle.PI)).to.equal(true);
        });

        it('should run round-trip angle methods', function() {
            const expectedValues = [
                bali.angle.PI,
                bali.angle(Math.PI / 2),
                bali.angle(Math.PI / 3),
                bali.parse('~0.54321'),
                bali.angle(0),
                bali.parse('~-0.54321'),
                bali.angle(-Math.PI),
                bali.angle(-Math.PI / 2),
                bali.angle(-Math.PI / 3)
            ];
            for (var i = 0; i < expectedValues.length; i++) {
                const angle = expectedValues[i];
                const opposite = bali.angle.sine(angle);
                const adjacent = bali.angle.cosine(angle);
                const arctangent = bali.angle.arctangent(opposite, adjacent);
                expect(arctangent.isEqualTo(angle)).to.equal(true);
            }
        });

    });

});


const testValues = [
    bali.angle(-0),
    bali.angle(0),
    bali.angle(),
    bali.angle.PI,
    bali.angle(-Math.PI),
    bali.angle(Math.PI / 4),
    bali.angle(-Math.PI / 4),
    bali.angle(Math.PI / 2),
    bali.angle(-Math.PI / 2),
    bali.angle(Math.PI * 3 / 4),
    bali.angle(-Math.PI * 3 / 4),
    bali.angle(Math.PI * 5 / 4),
    bali.angle(-Math.PI * 5 / 4),
    bali.angle(Math.PI * 7 / 4),
    bali.angle(-Math.PI * 7 / 4),
    bali.angle(2 * Math.PI),
    bali.angle(-2 * Math.PI)
];

const stringValues = [
    '~0',
    '~0',
    '~0',
    '~pi',
    '~pi',
    '~0.7853981633974483',
    '~-0.7853981633974483',
    '~1.5707963267948966',
    '~-1.5707963267948966',
    '~2.356194490192345',
    '~-2.356194490192345',
    '~-2.356194490192345',
    '~2.356194490192345',
    '~-0.785398163397448',
    '~0.785398163397448',
    '~0',
    '~0'
];

const numericValues = [
    0,
    0,
    0,
    Math.PI,
    Math.PI,
    Math.PI / 4,
    -Math.PI / 4,
    Math.PI / 2,
    -Math.PI / 2,
    Math.PI * 3 / 4,
    -Math.PI * 3 / 4,
    -2.356194490192345,
    2.356194490192345,
    -0.785398163397448,
    0.785398163397448,
    0,
    0
];
