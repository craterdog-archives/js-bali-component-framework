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

    describe('Test complex number constructors', function() {

        it('should construct numbers using literals', function() {
            expect(bali.parse('0').toString()).to.equal('0');
            expect(bali.parse('e').toString()).to.equal('e');
            expect(bali.parse('phi i').toString()).to.equal('phi i');
            expect(bali.parse('(3, 4i)').toString()).to.equal('(3, 4i)');
            expect(bali.parse('(5 e^~pi i)').toString()).to.equal('-5');
            expect(bali.parse('(-5 e^~pi i)').toString()).to.equal('5');
        });

        it('should construct numbers that equal zero', function() {
            expect(bali.ZERO.toBoolean()).to.equal(false);
            expect(bali.ZERO.toString()).to.equal('0');
            expect(bali.ZERO.toNumber()).to.equal(0);
            expect(bali.number().toBoolean()).to.equal(false);
            expect(bali.number().toString()).to.equal('0');
            expect(bali.number().toNumber()).to.equal(0);
            expect(bali.number(0).toBoolean()).to.equal(false);
            expect(bali.number(0).toString()).to.equal('0');
            expect(bali.number(0).toNumber()).to.equal(0);
        });

        it('should construct real numbers', function() {
            expect(bali.number(42).toBoolean()).to.equal(true);
            expect(bali.number(42).toString()).to.equal('42');
            expect(bali.number(42).toNumber()).to.equal(42);
            expect(bali.number(-1.234).toNumber()).to.equal(-1.234);
            expect(bali.number(1.234E-5).toNumber()).to.equal(1.234E-5);
        });

        it('should construct imaginary numbers', function() {
            expect(bali.number(0, 42).toBoolean()).to.equal(true);
            expect(bali.number(0, 42).toString()).to.equal('42i');
            expect(bali.number(0, 42).toNumber()).to.equal(0);
            expect(bali.number(0, 42).getImaginary()).to.equal(42);
            expect(bali.number(0, -1.234).getImaginary()).to.equal(-1.234);
            expect(bali.number(0, 1.234E-5).getImaginary()).to.equal(1.234E-5);
        });

        it('should construct complex numbers', function() {
            expect(bali.number(3, 4).toBoolean()).to.equal(true);
            expect(bali.number(3, 4).toString()).to.equal('(3, 4i)');
            expect(bali.number(3, 4).toNumber()).to.equal(3);
            expect(bali.number(3, 4, bali.polar).toString()).to.equal('(5 e^~0.9272952180016122i)($format: $polar)');
            expect(bali.number(1, bali.angle(Math.PI/2)).toString()).to.equal('1i');
        });

        it('should construct infinite numbers', function() {
            expect(bali.INFINITY.toBoolean()).to.equal(true);
            expect(bali.INFINITY.toString()).to.equal('infinity');
            expect(bali.INFINITY.toNumber()).to.equal(Infinity);
            expect(bali.number(Infinity).toBoolean()).to.equal(true);
            expect(bali.number(Infinity).toString()).to.equal('infinity');
            expect(bali.number(Infinity).toNumber()).to.equal(Infinity);
            expect(bali.number(-Infinity).toNumber()).to.equal(Infinity);
            expect(bali.number(-Infinity).isEqualTo(bali.INFINITY)).to.equal(true);
        });

        it('should construct undefined numbers', function() {
            expect(bali.UNDEFINED.toBoolean()).to.equal(false);
            expect(bali.UNDEFINED.toString()).to.equal('undefined');
            expect(bali.UNDEFINED.toNumber().toString()).to.equal('NaN');  // NaN !== NaN
            expect(bali.number(NaN).toBoolean()).to.equal(false);
            expect(bali.number(NaN).toString()).to.equal('undefined');
            expect(bali.number(NaN).toNumber().toString()).to.equal('NaN');  // NaN !== NaN
        });

    });

    describe('Test complex number methods', function() {

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
            expect(bali.UNDEFINED.getReal().toString()).to.equal('NaN');
            expect(bali.INFINITY.getReal()).to.equal(Infinity);
            expect(bali.ZERO.getReal()).to.equal(0);
            expect(bali.number(3, 4).getReal()).to.equal(3);
        });

        it('should perform the getImaginary method correctly', function() {
            expect(bali.UNDEFINED.getImaginary().toString()).to.equal('NaN');
            expect(bali.INFINITY.getImaginary()).to.equal(Infinity);
            expect(bali.ZERO.getImaginary()).to.equal(0);
            expect(bali.number(3, -4).getImaginary()).to.equal(-4);
        });

        it('should perform the getMagnitude method correctly', function() {
            expect(bali.UNDEFINED.getMagnitude().toString()).to.equal('NaN');
            expect(bali.INFINITY.getMagnitude()).to.equal(Infinity);
            expect(bali.ZERO.getMagnitude()).to.equal(0);
            expect(bali.number(3, 4).getMagnitude()).to.equal(5);
        });

        it('should perform the getPhase method correctly', function() {
            expect(bali.UNDEFINED.getPhase()).to.equal(undefined);
            expect(bali.INFINITY.getPhase().isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.ZERO.getPhase().isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.number(-1).getPhase().isEqualTo(bali.angle(Math.PI))).to.equal(true);
        });

        it('should return the correct type', function() {
            const type = bali.ZERO.getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#HYPTA0PX51J7K2VQ88NZMH9GDPHR6G0B,$version:v1,$digest:none]>');
        });

    });

    describe('Test complex number functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(bali.number.inverse(bali.UNDEFINED).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.inverse(bali.INFINITY).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.inverse(bali.ZERO).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.inverse(bali.number(3)).isEqualTo(bali.number(3, bali.angle(Math.PI)))).to.equal(true);
        });

        it('should perform the reciprocal function correctly', function() {
            expect(bali.number.reciprocal(bali.UNDEFINED).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.reciprocal(bali.INFINITY).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.reciprocal(bali.ZERO).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.reciprocal(bali.number(2, bali.angle(Math.PI))).isEqualTo(bali.number(0.5, bali.angle(Math.PI)))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(bali.number.conjugate(bali.UNDEFINED).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.conjugate(bali.INFINITY).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.conjugate(bali.ZERO).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.conjugate(bali.number(3, 4)).isEqualTo(bali.number(3, -4))).to.equal(true);
        });

        it('should perform the factorial function correctly', function() {
            expect(bali.number.factorial(bali.UNDEFINED).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.factorial(bali.INFINITY).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.factorial(bali.ZERO).isEqualTo(bali.number(1))).to.equal(true);
            expect(bali.number.factorial(bali.number(20)).isEqualTo(bali.number(2432902008176638000))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(bali.number.sum(bali.number(5), bali.UNDEFINED).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.sum(bali.number(5), bali.INFINITY).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.sum(bali.number(-3, 4), bali.number(3, -4)).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.sum(bali.number(3, 4), bali.number(2, -2)).isEqualTo(bali.number(5, 2))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(bali.number.difference(bali.number(5), bali.UNDEFINED).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.difference(bali.number(5), bali.INFINITY).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.difference(bali.number(3, 4), bali.number(3, 4)).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.difference(bali.number(3, 4), bali.number(2, -2)).isEqualTo(bali.number(1, 6))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(bali.number.scaled(bali.number(5), NaN).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.scaled(bali.number(5), Infinity).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.scaled(bali.number(5), 0).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.scaled(bali.ZERO, 5).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.scaled(bali.number(3, bali.angle(Math.PI)), -1).isEqualTo(bali.number(-3, bali.angle(Math.PI)))).to.equal(true);
        });

        it('should perform the product function correctly', function() {
            expect(bali.number.product(bali.number(5), bali.UNDEFINED).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.product(bali.number(5), bali.INFINITY).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.product(bali.ZERO, bali.number(3, 4)).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.product(bali.number(3, bali.angle(2)), bali.number(2, bali.angle(1))).isEqualTo(bali.number(6, bali.angle(3)))).to.equal(true);
        });

        it('should perform the quotient function correctly', function() {
            expect(bali.number.quotient(bali.number(5), bali.UNDEFINED).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.quotient(bali.number(5), bali.INFINITY).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.quotient(bali.number(3, 4), bali.ZERO).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.quotient(bali.number(4, bali.angle(2)), bali.number(2, bali.angle(1))).isEqualTo(bali.number(2, bali.angle(1)))).to.equal(true);
        });

        it('should perform the remainder function correctly', function() {
            expect(bali.number.remainder(bali.number(5), bali.UNDEFINED).isEqualTo(bali.UNDEFINED)).to.equal(true);
            expect(bali.number.remainder(bali.number(5), bali.INFINITY).isEqualTo(bali.ZERO)).to.equal(true);
            expect(bali.number.remainder(bali.number(5), bali.ZERO).isEqualTo(bali.INFINITY)).to.equal(true);
            expect(bali.number.remainder(bali.number(23), bali.number(7)).isEqualTo(bali.number(2))).to.equal(true);
        });

    });

});

const testValues = [
    bali.UNDEFINED,
    bali.ZERO,
    bali.INFINITY,
    bali.number(),
    bali.number(-5),
    bali.number(5),
    bali.number(1),
    bali.number(-1),
    bali.number(0, 1),
    bali.number(0, -1),
    bali.number(1.23E-56, -7.8E90),
    bali.number(5, bali.angle(Math.PI))
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
