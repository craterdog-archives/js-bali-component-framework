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
const utilities = require('../src/utilities');
const elements = require('../src/elements');
const composites = require('../src/composites');
const collections = require('../src/collections');
const Parser = require('../src/utilities/Parser').Parser;
const parser = new Parser(true);
/* global NaN, Infinity */

describe('Bali Component Framework™', function() {

    describe('Test complex constructors', function() {

        it('should construct using literals', function() {
            const rectangular = new composites.Parameters(collections.Catalog.fromSequential({$format: '$rectangular'}));
            const polar = new composites.Parameters(collections.Catalog.fromSequential({$format: '$polar'}));
            expect(elements.Number.fromLiteral('0').toNumber()).to.equal(0);
            expect(elements.Number.fromLiteral('e').toNumber()).to.equal(utilities.precision.E);
            expect(elements.Number.fromLiteral('phi i').getImaginary()).to.equal(utilities.precision.PHI);
            expect(elements.Number.fromLiteral('(3, 4i)', rectangular).getMagnitude()).to.equal(5);
            expect(elements.Number.fromLiteral('(-5 e^~pi i)').getMagnitude()).to.equal(5);
            expect(elements.Number.fromLiteral('(-5 e^~pi i)', polar).getMagnitude()).to.equal(5);
            expect(parser.parseDocument('(3, -4i)($format: $polar)').toLiteral()).to.equal('(5 e^~-0.9272952180016122i)');
            expect(parser.parseDocument('(3, -4i)($format: $rectangular)').toLiteral()).to.equal('(3, -4i)');
        });

        it('should construct and equal zero', function() {
            expect(new elements.Number().toString()).to.equal('0');
            expect(new elements.Number(0).toNumber()).to.equal(0);
        });

        it('should construct and equal five', function() {
            expect(new elements.Number(5).toNumber()).to.equal(5);
            expect(new elements.Number(-5).toNumber()).to.equal(-5);
        });

        it('should construct and equal infinity', function() {
            expect(new elements.Number(Infinity).toNumber()).to.equal(Infinity);
            expect(new elements.Number(-Infinity).toNumber()).to.equal(Infinity);
        });

        it('should construct and equal undefined', function() {
            expect(new elements.Number(NaN).toString()).to.equal('undefined');
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
            expect(new elements.Number(NaN).getReal().toString()).to.equal('NaN');
            expect(new elements.Number(Infinity).getReal()).to.equal(Infinity);
            expect(new elements.Number(0).getReal()).to.equal(0);
            expect(new elements.Number(3, 4).getReal()).to.equal(3);
        });

        it('should perform the getImaginary method correctly', function() {
            expect(new elements.Number(NaN).getImaginary().toString()).to.equal('NaN');
            expect(new elements.Number(Infinity).getImaginary()).to.equal(Infinity);
            expect(new elements.Number(0).getImaginary()).to.equal(0);
            expect(new elements.Number(3, -4).getImaginary()).to.equal(-4);
        });

        it('should perform the getMagnitude method correctly', function() {
            expect(new elements.Number(NaN).getMagnitude().toString()).to.equal('NaN');
            expect(new elements.Number(Infinity).getMagnitude()).to.equal(Infinity);
            expect(new elements.Number(0).getMagnitude()).to.equal(0);
            expect(new elements.Number(3, 4).getMagnitude()).to.equal(5);
        });

        it('should perform the getPhase method correctly', function() {
            expect(new elements.Number(NaN).getPhase()).to.equal(undefined);
            expect(new elements.Number(Infinity).getPhase()).to.equal(undefined);
            expect(new elements.Number(0).getPhase().isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(new elements.Number(-1).getPhase().isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
        });

        it('should return the correct type', function() {
            const type = new elements.Number(0).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#HYPTA0PX51J7K2VQ88NZMH9GDPHR6G0B,$version:v1,$digest:none]>');
        });

    });

    describe('Test complex functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(elements.Number.inverse(new elements.Number(NaN)).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.inverse(new elements.Number(Infinity)).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.inverse(new elements.Number(0)).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.inverse(new elements.Number(3)).isEqualTo(new elements.Number(3, new elements.Angle(utilities.precision.PI)))).to.equal(true);
        });

        it('should perform the reciprocal function correctly', function() {
            expect(elements.Number.reciprocal(new elements.Number(NaN)).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.reciprocal(new elements.Number(Infinity)).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.reciprocal(new elements.Number(0)).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.reciprocal(new elements.Number(2, new elements.Angle(utilities.precision.PI))).isEqualTo(new elements.Number(0.5, new elements.Angle(utilities.precision.PI)))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(elements.Number.conjugate(new elements.Number(NaN)).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.conjugate(new elements.Number(Infinity)).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.conjugate(new elements.Number(0)).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.conjugate(new elements.Number(3, 4)).isEqualTo(new elements.Number(3, -4))).to.equal(true);
        });

        it('should perform the factorial function correctly', function() {
            expect(elements.Number.factorial(new elements.Number(NaN)).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.factorial(new elements.Number(Infinity)).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.factorial(new elements.Number(0)).isEqualTo(new elements.Number(1))).to.equal(true);
            expect(elements.Number.factorial(new elements.Number(20)).isEqualTo(new elements.Number(2432902008176638000))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(elements.Number.sum(new elements.Number(5), new elements.Number(NaN)).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.sum(new elements.Number(5), new elements.Number(Infinity)).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.sum(new elements.Number(-3, 4), new elements.Number(3, -4)).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.sum(new elements.Number(3, 4), new elements.Number(2, -2)).isEqualTo(new elements.Number(5, 2))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(elements.Number.difference(new elements.Number(5), new elements.Number(NaN)).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.difference(new elements.Number(5), new elements.Number(Infinity)).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.difference(new elements.Number(3, 4), new elements.Number(3, 4)).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.difference(new elements.Number(3, 4), new elements.Number(2, -2)).isEqualTo(new elements.Number(1, 6))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(elements.Number.scaled(new elements.Number(5), NaN).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.scaled(new elements.Number(5), Infinity).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.scaled(new elements.Number(5), 0).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.scaled(new elements.Number(0), 5).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.scaled(new elements.Number(3, new elements.Angle(utilities.precision.PI)), -1).isEqualTo(new elements.Number(-3, new elements.Angle(utilities.precision.PI)))).to.equal(true);
        });

        it('should perform the product function correctly', function() {
            expect(elements.Number.product(new elements.Number(5), new elements.Number(NaN)).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.product(new elements.Number(5), new elements.Number(Infinity)).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.product(new elements.Number(0), new elements.Number(3, 4)).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.product(new elements.Number(3, new elements.Angle(2)), new elements.Number(2, new elements.Angle(1))).isEqualTo(new elements.Number(6, new elements.Angle(3)))).to.equal(true);
        });

        it('should perform the quotient function correctly', function() {
            expect(elements.Number.quotient(new elements.Number(5), new elements.Number(NaN)).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.quotient(new elements.Number(5), new elements.Number(Infinity)).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.quotient(new elements.Number(3, 4), new elements.Number(0)).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.quotient(new elements.Number(4, new elements.Angle(2)), new elements.Number(2, new elements.Angle(1))).isEqualTo(new elements.Number(2, new elements.Angle(1)))).to.equal(true);
        });

        it('should perform the remainder function correctly', function() {
            expect(elements.Number.remainder(new elements.Number(5), new elements.Number(NaN)).isEqualTo(new elements.Number(NaN))).to.equal(true);
            expect(elements.Number.remainder(new elements.Number(5), new elements.Number(Infinity)).isEqualTo(new elements.Number(0))).to.equal(true);
            expect(elements.Number.remainder(new elements.Number(5), new elements.Number(0)).isEqualTo(new elements.Number(Infinity))).to.equal(true);
            expect(elements.Number.remainder(new elements.Number(23), new elements.Number(7)).isEqualTo(new elements.Number(2))).to.equal(true);
        });

    });

});

const testValues = [
    new elements.Number(NaN),
    new elements.Number(0),
    new elements.Number(Infinity),
    new elements.Number(),
    new elements.Number(-5),
    new elements.Number(5),
    new elements.Number(1),
    new elements.Number(-1),
    new elements.Number(0, 1),
    new elements.Number(0, -1),
    new elements.Number(1.23E-56, -7.8E90),
    new elements.Number(5, new elements.Angle(utilities.precision.PI))
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
