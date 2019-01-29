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

    describe('Test complex constructors', function() {

        it('should construct using literals', function() {
            expect(bali.number('0').toNumber()).to.equal(0);
            expect(bali.number('e').toNumber()).to.equal(bali.utilities.precision.E);
            expect(bali.number('phi i').getImaginary()).to.equal(bali.utilities.precision.PHI);
            expect(bali.number('(3, 4i)', bali.rectangular).getMagnitude()).to.equal(5);
            expect(bali.number('(-5 e^~pi i)').getMagnitude()).to.equal(5);
            expect(bali.number('(-5 e^~pi i)', bali.polar).getMagnitude()).to.equal(5);
            expect(bali.number('(3, -4i)($format: $polar)').toLiteral(bali.polar)).to.equal('(5 e^~-0.9272952180016122i)');
            expect(bali.number('(3, -4i)($format: $rectangular)').toLiteral()).to.equal('(3, -4i)');
        });

        it('should construct and equal zero', function() {
            expect(bali.number().toString()).to.equal('0');
            expect(bali.number(0).toNumber()).to.equal(0);
        });

        it('should construct and equal five', function() {
            expect(bali.number(5).toNumber()).to.equal(5);
            expect(bali.number(-5).toNumber()).to.equal(-5);
        });

        it('should construct and equal infinity', function() {
            expect(bali.number(Infinity).toNumber()).to.equal(Infinity);
            expect(bali.number(-Infinity).toNumber()).to.equal(Infinity);
            expect(bali.number(-Infinity).isEqualTo(bali.number(Infinity))).to.equal(true);
        });

        it('should construct and equal undefined', function() {
            expect(bali.number(NaN).toString()).to.equal('undefined');
        });

    });

    describe('Test complex methods', function() {

        it('should generate method results that match the expected values', function() {
            const tests = testValues.length;
            for (var i = 0; i < tests; i++) {
                const complex = testValues[i];
                expect(complex.isUndefined()).to.equal(isUndefinedValues[i]);
                expect(complex.isZero()).to.equal(isZeroValues[i]);
                expect(complex.isInfinite()).to.equal(isInfiniteValues[i]);
                expect(complex.toString()).to.equal(stringValues[i]);
                expect(complex.toRectangular()).to.equal(rectangularValues[i]);
                expect(complex.toPolar()).to.equal(polarValues[i]);
            }
        });

        it('should perform the getReal method correctly', function() {
            expect(bali.number(NaN).getReal().toString()).to.equal('NaN');
            expect(bali.number(Infinity).getReal()).to.equal(Infinity);
            expect(bali.number(0).getReal()).to.equal(0);
            expect(bali.number(3, 4).getReal()).to.equal(3);
        });

        it('should perform the getImaginary method correctly', function() {
            expect(bali.number(NaN).getImaginary().toString()).to.equal('NaN');
            expect(bali.number(Infinity).getImaginary()).to.equal(Infinity);
            expect(bali.number(0).getImaginary()).to.equal(0);
            expect(bali.number(3, -4).getImaginary()).to.equal(-4);
        });

        it('should perform the getMagnitude method correctly', function() {
            expect(bali.number(NaN).getMagnitude().toString()).to.equal('NaN');
            expect(bali.number(Infinity).getMagnitude()).to.equal(Infinity);
            expect(bali.number(0).getMagnitude()).to.equal(0);
            expect(bali.number(3, 4).getMagnitude()).to.equal(5);
        });

        it('should perform the getPhase method correctly', function() {
            expect(bali.number(NaN).getPhase()).to.equal(undefined);
            expect(bali.number(Infinity).getPhase().isEqualTo(new bali.elements.Angle(0))).to.equal(true);
            expect(bali.number(0).getPhase().isEqualTo(new bali.elements.Angle(0))).to.equal(true);
            expect(bali.number(-1).getPhase().isEqualTo(new bali.elements.Angle(bali.utilities.precision.PI))).to.equal(true);
        });

        it('should return the correct type', function() {
            const type = bali.number(0).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#HYPTA0PX51J7K2VQ88NZMH9GDPHR6G0B,$version:v1,$digest:none]>');
        });

    });

    describe('Test complex functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(bali.number.inverse(bali.number(NaN)).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.inverse(bali.number(Infinity)).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.inverse(bali.number(0)).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.inverse(bali.number(3)).isEqualTo(bali.number(3, new bali.elements.Angle(bali.utilities.precision.PI)))).to.equal(true);
        });

        it('should perform the reciprocal function correctly', function() {
            expect(bali.number.reciprocal(bali.number(NaN)).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.reciprocal(bali.number(Infinity)).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.reciprocal(bali.number(0)).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.reciprocal(bali.number(2, new bali.elements.Angle(bali.utilities.precision.PI))).isEqualTo(bali.number(0.5, new bali.elements.Angle(bali.utilities.precision.PI)))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(bali.number.conjugate(bali.number(NaN)).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.conjugate(bali.number(Infinity)).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.conjugate(bali.number(0)).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.conjugate(bali.number(3, 4)).isEqualTo(bali.number(3, -4))).to.equal(true);
        });

        it('should perform the factorial function correctly', function() {
            expect(bali.number.factorial(bali.number(NaN)).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.factorial(bali.number(Infinity)).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.factorial(bali.number(0)).isEqualTo(bali.number(1))).to.equal(true);
            expect(bali.number.factorial(bali.number(20)).isEqualTo(bali.number(2432902008176638000))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(bali.number.sum(bali.number(5), bali.number(NaN)).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.sum(bali.number(5), bali.number(Infinity)).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.sum(bali.number(-3, 4), bali.number(3, -4)).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.sum(bali.number(3, 4), bali.number(2, -2)).isEqualTo(bali.number(5, 2))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(bali.number.difference(bali.number(5), bali.number(NaN)).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.difference(bali.number(5), bali.number(Infinity)).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.difference(bali.number(3, 4), bali.number(3, 4)).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.difference(bali.number(3, 4), bali.number(2, -2)).isEqualTo(bali.number(1, 6))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(bali.number.scaled(bali.number(5), NaN).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.scaled(bali.number(5), Infinity).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.scaled(bali.number(5), 0).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.scaled(bali.number(0), 5).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.scaled(bali.number(3, new bali.elements.Angle(bali.utilities.precision.PI)), -1).isEqualTo(bali.number(-3, new bali.elements.Angle(bali.utilities.precision.PI)))).to.equal(true);
        });

        it('should perform the product function correctly', function() {
            expect(bali.number.product(bali.number(5), bali.number(NaN)).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.product(bali.number(5), bali.number(Infinity)).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.product(bali.number(0), bali.number(3, 4)).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.product(bali.number(3, new bali.elements.Angle(2)), bali.number(2, new bali.elements.Angle(1))).isEqualTo(bali.number(6, new bali.elements.Angle(3)))).to.equal(true);
        });

        it('should perform the quotient function correctly', function() {
            expect(bali.number.quotient(bali.number(5), bali.number(NaN)).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.quotient(bali.number(5), bali.number(Infinity)).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.quotient(bali.number(3, 4), bali.number(0)).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.quotient(bali.number(4, new bali.elements.Angle(2)), bali.number(2, new bali.elements.Angle(1))).isEqualTo(bali.number(2, new bali.elements.Angle(1)))).to.equal(true);
        });

        it('should perform the remainder function correctly', function() {
            expect(bali.number.remainder(bali.number(5), bali.number(NaN)).isEqualTo(bali.number(NaN))).to.equal(true);
            expect(bali.number.remainder(bali.number(5), bali.number(Infinity)).isEqualTo(bali.number(0))).to.equal(true);
            expect(bali.number.remainder(bali.number(5), bali.number(0)).isEqualTo(bali.number(Infinity))).to.equal(true);
            expect(bali.number.remainder(bali.number(23), bali.number(7)).isEqualTo(bali.number(2))).to.equal(true);
        });

    });

});

const testValues = [
    bali.number(NaN),
    bali.number(0),
    bali.number(Infinity),
    bali.number(),
    bali.number(-5),
    bali.number(5),
    bali.number(1),
    bali.number(-1),
    bali.number(0, 1),
    bali.number(0, -1),
    bali.number(1.23E-56, -7.8E90),
    bali.number(5, new bali.elements.Angle(bali.utilities.precision.PI))
];
const isUndefinedValues = [
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
];
const isZeroValues = [
    false,
    true,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
];
const isInfiniteValues = [
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false
];
const realValues = [
    NaN,
    0,
    Infinity,
    0,
    -5,
    5,
    1,
    -1,
    0,
    0,
    Infinity,
    -5
];
const imaginaryValues = [
    NaN,
    0,
    Infinity,
    0,
    0,
    0,
    0,
    0,
    1,
    -1,
    Infinity,
    0
];
const magnitudeValues = [
    NaN,
    0,
    Infinity,
    0,
    5,
    5,
    1,
    1,
    1,
    1,
    Infinity,
    5
];
const angleValues = [
    0,
    0,
    0,
    0,
    3.1415926535898,
    0,
    0,
    3.1415926535898,
    1.5707963267949,
    -1.5707963267949,
    0,
    3.1415926535898
];
const stringValues = [
    'undefined',
    '0',
    'infinity',
    '0',
    '-5',
    '5',
    '1',
    '-1',
    '1i',
    '-1i',
    'infinity',
    '-5'
];
const rectangularValues = [
    'undefined',
    '0',
    'infinity',
    '0',
    '-5',
    '5',
    '1',
    '-1',
    '1i',
    '-1i',
    'infinity',
    '-5'
];
const polarValues = [
    'undefined',
    '0',
    'infinity',
    '0',
    '(5 e^~pi i)',
    '5',
    '1',
    '(1 e^~pi i)',
    '(1 e^~1.570796326794897i)',
    '(1 e^~-1.570796326794897i)',
    'infinity',
    '(5 e^~pi i)'
];
