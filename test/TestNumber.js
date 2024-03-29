/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const debug = 0;
const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../').api(debug);


describe('Bali Nebula™ Component Framework - Number', function() {

    describe('Test complex number constructors', function() {

        it('should construct numbers using literals', function() {
            expect(bali.component('0').toString()).to.equal('0');
            expect(bali.component('0').isNegative()).to.equal(false);
            expect(bali.component('e').toString()).to.equal('e');
            expect(bali.component('φ i').toString()).to.equal('φ i');
            expect(bali.component('φ i').isNegative()).to.equal(false);
            expect(bali.component('(3, 4i)').toString()).to.equal('(3, 4i)');
            expect(bali.component('(1 e^~2.3i)').toString()).to.equal('(1 e^~2.3i)');
            expect(bali.component('(5 e^~π i)').toString()).to.equal('-5');
            expect(bali.component('(5 e^~π i)').isNegative()).to.equal(true);
            expect(bali.component('(-5 e^~π i)').toString()).to.equal('5');
            expect(bali.component('(-5 e^~π i)').isNegative()).to.equal(false);
            expect(
                function() {
                    bali.component('42').setParameters({ $answer: 'everything' });
                }
            ).to.throw();
        });

        it('should construct numbers that equal zero', function() {
            expect(bali.number.ZERO.isSignificant()).to.equal(false);
            expect(bali.number.ZERO.toString()).to.equal('0');
            expect(bali.number.ZERO.toInteger()).to.equal(0);
            expect(bali.number.ZERO.toReal()).to.equal(0);
            expect(bali.number().isSignificant()).to.equal(false);
            expect(bali.number().toString()).to.equal('0');
            expect(bali.number().toInteger()).to.equal(0);
            expect(bali.number().toReal()).to.equal(0);
            expect(bali.number(0).isSignificant()).to.equal(false);
            expect(bali.number(0).toString()).to.equal('0');
            expect(bali.number(0).toInteger()).to.equal(0);
            expect(bali.number(0).toReal()).to.equal(0);
        });

        it('should construct real numbers', function() {
            expect(bali.number(42).isSignificant()).to.equal(true);
            expect(bali.number(42).toString()).to.equal('42');
            expect(bali.number(42).toInteger()).to.equal(42);
            expect(bali.number(42).toReal()).to.equal(42);
            expect(bali.number(-1.234).toInteger()).to.equal(-1);
            expect(bali.number(-1.234).toReal()).to.equal(-1.234);
            expect(bali.number(1.234E-5).toInteger()).to.equal(0);
            expect(bali.number(1.234E-5).toReal()).to.equal(1.234E-5);
        });

        it('should construct imaginary numbers', function() {
            expect(bali.number(0, 42).isSignificant()).to.equal(true);
            expect(bali.number(0, 42).toString()).to.equal('42i');
            expect(bali.number(0, 42).toInteger()).to.equal(0);
            expect(bali.number(0, 42).toReal()).to.equal(0);
            expect(bali.number(0, 42).getImaginary()).to.equal(42);
            expect(bali.number(0, -1.234).getImaginary()).to.equal(-1.234);
            expect(bali.number(0, 1.234E-5).getImaginary()).to.equal(1.234E-5);
        });

        it('should construct complex numbers', function() {
            expect(bali.number(3, 4).isSignificant()).to.equal(true);
            expect(bali.number(3, 4).toString()).to.equal('(3, 4i)');
            expect(bali.number(3, 4).toInteger()).to.equal(3);
            expect(bali.number(3, 4).toReal()).to.equal(3);
            expect(bali.number(1, bali.angle(Math.PI/2)).toString()).to.equal('1i');
        });

        it('should construct infinite numbers', function() {
            expect(bali.number.INFINITY.isSignificant()).to.equal(true);
            expect(bali.number.INFINITY.toString()).to.equal('∞');
            expect(bali.number.INFINITY.toInteger()).to.equal(Infinity);
            expect(bali.number.INFINITY.toReal()).to.equal(Infinity);
            expect(bali.number(Infinity).isSignificant()).to.equal(true);
            expect(bali.number(Infinity).toString()).to.equal('∞');
            expect(bali.number(Infinity).toInteger()).to.equal(Infinity);
            expect(bali.number(Infinity).toReal()).to.equal(Infinity);
            expect(bali.number(-Infinity).toInteger()).to.equal(Infinity);
            expect(bali.number(-Infinity).toReal()).to.equal(Infinity);
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number(-Infinity), bali.number.INFINITY)).to.equal(true);
        });

        it('should construct undefined numbers', function() {
            expect(bali.number.UNDEFINED.isSignificant()).to.equal(false);
            expect(bali.number.UNDEFINED.toString()).to.equal('undefined');
            expect(bali.number.UNDEFINED.toInteger().toString()).to.equal('NaN');  // NaN !== NaN
            expect(bali.number.UNDEFINED.toReal().toString()).to.equal('NaN');  // NaN !== NaN
            expect(bali.number(NaN).isSignificant()).to.equal(false);
            expect(bali.number(NaN).toString()).to.equal('undefined');
            expect(bali.number(NaN).toInteger().toString()).to.equal('NaN');  // NaN !== NaN
            expect(bali.number(NaN).toReal().toString()).to.equal('NaN');  // NaN !== NaN
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
                expect(complex.getHash()).to.exist;
            }
        });

        it('should perform the toLiteral method correctly', function() {
            expect(bali.number(3, 4).toString()).to.equal(bali.number(3, 4, {$units: '$radians'}).toLiteral());
        });

        it('should perform the getReal method correctly', function() {
            expect(bali.number.UNDEFINED.getReal().toString()).to.equal('NaN');
            expect(bali.number.INFINITY.getReal()).to.equal(Infinity);
            expect(bali.number.ZERO.getReal()).to.equal(0);
            expect(bali.number(3, 4).getReal()).to.equal(3);
        });

        it('should perform the getImaginary method correctly', function() {
            expect(bali.number.UNDEFINED.getImaginary().toString()).to.equal('NaN');
            expect(bali.number.INFINITY.getImaginary()).to.equal(Infinity);
            expect(bali.number.ZERO.getImaginary()).to.equal(0);
            expect(bali.number(3, -4).getImaginary()).to.equal(-4);
        });

        it('should perform the getMagnitude method correctly', function() {
            expect(bali.number.UNDEFINED.getMagnitude().toString()).to.equal('NaN');
            expect(bali.number.INFINITY.getMagnitude()).to.equal(Infinity);
            expect(bali.number.ZERO.getMagnitude()).to.equal(0);
            expect(bali.number(3, 4).getMagnitude()).to.equal(5);
        });

        it('should perform the getPhase method correctly', function() {
            const comparator = new bali.comparator();
            expect(bali.number.UNDEFINED.getPhase()).to.equal(undefined);
            expect(comparator.areEqual(bali.number.INFINITY.getPhase(), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.number.ZERO.getPhase(), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.number(-1).getPhase(), bali.angle(Math.PI))).to.equal(true);
        });

    });

    describe('Test complex number functions', function() {

        it('should perform the inverse function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.inverse(bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.inverse(bali.number.INFINITY), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.inverse(bali.number.ZERO), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.inverse(bali.number(3)), bali.number(3, bali.angle(Math.PI)))).to.equal(true);
        });

        it('should perform the reciprocal function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.reciprocal(bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.reciprocal(bali.number.INFINITY), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.reciprocal(bali.number.ZERO), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.reciprocal(bali.number(2, bali.angle(Math.PI))), bali.number(0.5, bali.angle(Math.PI)))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.conjugate(bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.conjugate(bali.number.INFINITY), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.conjugate(bali.number.ZERO), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.conjugate(bali.number(3, 4)), bali.number(3, -4))).to.equal(true);
        });

        it('should perform the factorial function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.factorial(bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.factorial(bali.number.INFINITY), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.factorial(bali.number.ZERO), bali.number(1))).to.equal(true);
            expect(comparator.areEqual(bali.number.factorial(bali.number(20)), bali.number(2432902008176638000))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.sum(bali.number(5), bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.sum(bali.number(5), bali.number.INFINITY), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.sum(bali.number(-3, 4), bali.number(3, -4)), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.sum(bali.number(3, 4), bali.number(2, -2)), bali.number(5, 2))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.difference(bali.number(5), bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.difference(bali.number(5), bali.number.INFINITY), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.difference(bali.number(3, 4), bali.number(3, 4)), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.difference(bali.number(3, 4), bali.number(2, -2)), bali.number(1, 6))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.scaled(bali.number(5), NaN), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.scaled(bali.number(5), Infinity), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.scaled(bali.number(5), 0), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.scaled(bali.number.ZERO, 5), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.scaled(bali.number(3, bali.angle(Math.PI)), -1), bali.number(-3, bali.angle(Math.PI)))).to.equal(true);
        });

        it('should perform the product function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.product(bali.number(5), bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.product(bali.number(5), bali.number.INFINITY), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.product(bali.number.ZERO, bali.number(3, 4)), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.product(bali.number(3, bali.angle(2)), bali.number(2, bali.angle(1))), bali.number(6, bali.angle(3)))).to.equal(true);
        });

        it('should perform the quotient function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.quotient(bali.number(5), bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.quotient(bali.number(5), bali.number.INFINITY), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.quotient(bali.number(3, 4), bali.number.ZERO), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.quotient(bali.number(4, bali.angle(2)), bali.number(2, bali.angle(1))), bali.number(2, bali.angle(1)))).to.equal(true);
        });

        it('should perform the remainder function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.remainder(bali.number(5), bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.remainder(bali.number(5), bali.number.INFINITY), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.remainder(bali.number(5), bali.number.ZERO), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.remainder(bali.number(23), bali.number(7)), bali.number(2))).to.equal(true);
        });

        it('should perform the exponential function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.exponential(bali.number(5), bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.exponential(bali.number(5), bali.number.INFINITY), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.exponential(bali.number(5), bali.number.ZERO), bali.number(1))).to.equal(true);
            expect(comparator.areEqual(bali.number.exponential(bali.number(2), bali.number(7)), bali.number(128))).to.equal(true);
            expect(comparator.areEqual(bali.number.exponential(bali.number(0.5), bali.number(0.5)), bali.number(0.7))).to.equal(true);
        });

        it('should perform the logarithm function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.number.logarithm(bali.number(5), bali.number.UNDEFINED), bali.number.UNDEFINED)).to.equal(true);
            expect(comparator.areEqual(bali.number.logarithm(bali.number(5), bali.number.INFINITY), bali.number.INFINITY)).to.equal(true);
            expect(comparator.areEqual(bali.number.logarithm(bali.number(5), bali.number(1)), bali.number.ZERO)).to.equal(true);
            expect(comparator.areEqual(bali.number.logarithm(bali.number(2), bali.number(128)), bali.number(7))).to.equal(true);
            expect(comparator.areEqual(bali.number.logarithm(bali.number(0.5), bali.number(0.7)), bali.number(0.4))).to.equal(true);
        });

    });

});

const testValues = [
    bali.number.UNDEFINED,
    bali.number.ZERO,
    bali.number.INFINITY,
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
    '∞',
    '0',
    '-5',
    '5',
    '1',
    '-1',
    '1i',
    '-1i',
    '∞',
    '-5'
];
const rectangularValues = [
    'undefined',
    '0',
    '∞',
    '0',
    '-5',
    '5',
    '1',
    '-1',
    '1i',
    '-1i',
    '∞',
    '-5'
];
const polarValues = [
    'undefined',
    '0',
    '∞',
    '0',
    '(5 e^~π i)',
    '5',
    '1',
    '(1 e^~π i)',
    '(1 e^~1.570796326794897i)',
    '(1 e^~-1.570796326794897i)',
    '∞',
    '(5 e^~π i)'
];
