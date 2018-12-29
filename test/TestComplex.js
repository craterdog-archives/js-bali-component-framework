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
const Angle = require('../src/elements/Angle').Angle;
const elements = require('../src/elements');
/* global NaN, Infinity */

describe('Bali Component Framework™', function() {

    describe('Test complex constructors', function() {

        it('should construct and equal zero', function() {
            expect(new elements.Number().toString()).to.equal(elements.Number.ZERO.toString());
            expect(new elements.Number('0').toNumber()).to.equal(elements.Number.ZERO.toNumber());
        });

        it('should construct and equal five', function() {
            expect(new elements.Number('5').toNumber()).to.equal(5);
            expect(new elements.Number('-5').toNumber()).to.equal(-5);
        });

        it('should construct and equal infinity', function() {
            expect(new elements.Number('infinity').toNumber()).to.equal(elements.Number.INFINITY.toNumber());
        });

        it('should construct and equal undefined', function() {
            expect(new elements.Number('undefined').toString()).to.equal(elements.Number.UNDEFINED.toString());
        });

    });

    describe('Test complex methods', function() {

        it('should generate method results that match the expected values', function() {
            var tests = testValues.length;
            for (var i = 0; i < tests; i++) {
                var complex = testValues[i];
                expect(complex.isUndefined()).to.equal(isUndefinedValues[i]);
                expect(complex.isZero()).to.equal(isZeroValues[i]);
                expect(complex.isInfinite()).to.equal(isInfiniteValues[i]);
                expect(complex.toString()).to.equal(stringValues[i]);
                expect(complex.toRectangular()).to.equal(rectangularValues[i]);
                expect(complex.toPolar()).to.equal(polarValues[i]);
            }
        });

        it('should return the correct type', function() {
            var type = elements.Number.ZERO.getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#HYPTA0PX51J7K2VQ88NZMH9GDPHR6G0B,$version:v1,$digest:none]>');
        });

    });

    describe('Test complex functions', function() {

        it('should perform the real function correctly', function() {
            expect(elements.Number.real(elements.Number.UNDEFINED).toString()).to.equal('NaN');
            expect(elements.Number.real(elements.Number.INFINITY)).to.equal(Infinity);
            expect(elements.Number.real(elements.Number.ZERO)).to.equal(0);
            expect(elements.Number.real(new elements.Number('(3, 4i)'))).to.equal(3);
        });

        it('should perform the imaginary function correctly', function() {
            expect(elements.Number.imaginary(elements.Number.UNDEFINED).toString()).to.equal('NaN');
            expect(elements.Number.imaginary(elements.Number.INFINITY)).to.equal(Infinity);
            expect(elements.Number.imaginary(elements.Number.ZERO)).to.equal(0);
            expect(elements.Number.imaginary(new elements.Number('(3, -4i)'))).to.equal(-4);
        });

        it('should perform the magnitude function correctly', function() {
            expect(elements.Number.magnitude(elements.Number.UNDEFINED).toString()).to.equal('NaN');
            expect(elements.Number.magnitude(elements.Number.INFINITY)).to.equal(Infinity);
            expect(elements.Number.magnitude(elements.Number.ZERO)).to.equal(0);
            expect(elements.Number.magnitude(new elements.Number('(3, 4i)'))).to.equal(5);
        });

        it('should perform the phase function correctly', function() {
            expect(elements.Number.phase(elements.Number.UNDEFINED)).to.equal(undefined);
            expect(elements.Number.phase(elements.Number.INFINITY)).to.equal(undefined);
            expect(elements.Number.phase(elements.Number.ZERO)).to.equal(Angle.ZERO);
            expect(elements.Number.phase(new elements.Number('-1')).isEqualTo(Angle.PI)).to.equal(true);
        });

        it('should perform the inverse function correctly', function() {
            expect(elements.Number.inverse(elements.Number.UNDEFINED)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.inverse(elements.Number.INFINITY)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.inverse(elements.Number.ZERO)).to.equal(elements.Number.ZERO);
            expect(elements.Number.inverse(new elements.Number(3)).isEqualTo(new elements.Number('(3 e^~pi i)'))).to.equal(true);
        });

        it('should perform the reciprocal function correctly', function() {
            expect(elements.Number.reciprocal(elements.Number.UNDEFINED)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.reciprocal(elements.Number.INFINITY)).to.equal(elements.Number.ZERO);
            expect(elements.Number.reciprocal(elements.Number.ZERO)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.reciprocal(new elements.Number('(2 e^~pi i)')).isEqualTo(new elements.Number('(0.5 e^~pi i)'))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(elements.Number.conjugate(elements.Number.UNDEFINED)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.conjugate(elements.Number.INFINITY)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.conjugate(elements.Number.ZERO)).to.equal(elements.Number.ZERO);
            expect(elements.Number.conjugate(new elements.Number('(3, 4i)')).isEqualTo(new elements.Number('(3, -4i)'))).to.equal(true);
        });

        it('should perform the factorial function correctly', function() {
            expect(elements.Number.factorial(elements.Number.UNDEFINED)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.factorial(elements.Number.INFINITY)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.factorial(elements.Number.ZERO).isEqualTo(new elements.Number(1))).to.equal(true);
            expect(elements.Number.factorial(new elements.Number(20)).isEqualTo(new elements.Number(2432902008176638000))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(elements.Number.sum(new elements.Number(5), elements.Number.UNDEFINED)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.sum(new elements.Number(5), elements.Number.INFINITY)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.sum(new elements.Number('(-3, 4i)'), new elements.Number('(3, -4i)'))).to.equal(elements.Number.ZERO);
            expect(elements.Number.sum(new elements.Number('(3, 4i)'), new elements.Number('(2, -2i)')).isEqualTo(new elements.Number('(5, 2i)'))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(elements.Number.difference(new elements.Number(5), elements.Number.UNDEFINED)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.difference(new elements.Number(5), elements.Number.INFINITY)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.difference(new elements.Number('(3, 4i)'), new elements.Number('(3, 4i)'))).to.equal(elements.Number.ZERO);
            expect(elements.Number.difference(new elements.Number('(3, 4i)'), new elements.Number('(2, -2i)')).isEqualTo(new elements.Number('(1, 6i)'))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(elements.Number.scaled(new elements.Number(5), NaN)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.scaled(new elements.Number(5), Infinity)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.scaled(new elements.Number(5), 0)).to.equal(elements.Number.ZERO);
            expect(elements.Number.scaled(elements.Number.ZERO, 5)).to.equal(elements.Number.ZERO);
            expect(elements.Number.scaled(new elements.Number('(3 e^~pi i)'), -1).isEqualTo(new elements.Number('(-3 e^~pi i)'))).to.equal(true);
        });

        it('should perform the product function correctly', function() {
            expect(elements.Number.product(new elements.Number(5), elements.Number.UNDEFINED)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.product(new elements.Number(5), elements.Number.INFINITY)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.product(elements.Number.ZERO, new elements.Number('(3, 4i)'))).to.equal(elements.Number.ZERO);
            expect(elements.Number.product(new elements.Number('(3 e^~2i)'), new elements.Number('(2 e^~1i)')).isEqualTo(new elements.Number('(6 e^~3i)'))).to.equal(true);
        });

        it('should perform the quotient function correctly', function() {
            expect(elements.Number.quotient(new elements.Number(5), elements.Number.UNDEFINED)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.quotient(new elements.Number(5), elements.Number.INFINITY)).to.equal(elements.Number.ZERO);
            expect(elements.Number.quotient(new elements.Number('(3, 4i)'), elements.Number.ZERO)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.quotient(new elements.Number('(4 e^~2i)'), new elements.Number('(2 e^~1i)')).isEqualTo(new elements.Number('(2 e^~1i)'))).to.equal(true);
        });

        it('should perform the remainder function correctly', function() {
            expect(elements.Number.remainder(new elements.Number(5), elements.Number.UNDEFINED)).to.equal(elements.Number.UNDEFINED);
            expect(elements.Number.remainder(new elements.Number(5), elements.Number.INFINITY)).to.equal(elements.Number.ZERO);
            expect(elements.Number.remainder(new elements.Number(5), elements.Number.ZERO)).to.equal(elements.Number.INFINITY);
            expect(elements.Number.remainder(new elements.Number(23), new elements.Number(7)).isEqualTo(new elements.Number(2))).to.equal(true);
        });

    });

});

var testValues = [
    elements.Number.UNDEFINED,
    elements.Number.ZERO,
    elements.Number.INFINITY,
    new elements.Number(),
    new elements.Number('-5'),
    new elements.Number('5'),
    new elements.Number('1'),
    new elements.Number('-1'),
    new elements.Number('1i'),
    new elements.Number('-1i'),
    new elements.Number('(1.23E-56, -7.8E90i)'),
    new elements.Number('(5 e^~3.141592653589793i)')
];
var isUndefinedValues = [
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
var isZeroValues = [
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
var isInfiniteValues = [
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
var realValues = [
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
var imaginaryValues = [
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
var magnitudeValues = [
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
var angleValues = [
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
var stringValues = [
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
    '(5 e^~pi i)'
];
var rectangularValues = [
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
var polarValues = [
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
