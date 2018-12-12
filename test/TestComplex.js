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
var Complex = require('../src/elements/Complex').Complex;
/* global NaN, Infinity */

describe('Bali Component Framework™', function() {

    describe('Test complex constructors', function() {

        it('should construct and equal zero', function() {
            expect(new Complex().toString()).to.equal(Complex.ZERO.toString());
            expect(new Complex('0').toNumber()).to.equal(Complex.ZERO.toNumber());
        });

        it('should construct and equal five', function() {
            expect(new Complex('5').toNumber()).to.equal(5);
            expect(new Complex('-5').toNumber()).to.equal(-5);
        });

        it('should construct and equal infinity', function() {
            expect(new Complex('infinity').toNumber()).to.equal(Complex.INFINITY.toNumber());
        });

        it('should construct and equal undefined', function() {
            expect(new Complex('undefined').toString()).to.equal(Complex.UNDEFINED.toString());
        });

    });

    describe('Test complex methods', function() {

        it('should generate method results that match the expected values', function() {
            var tests = testValues.length;
            for (var i = 0; i < tests; i++) {
                var complex = testValues[i];
                console.log('complex: ' + complex);
                expect(complex.isUndefined()).to.equal(isUndefinedValues[i]);
                expect(complex.isZero()).to.equal(isZeroValues[i]);
                expect(complex.isInfinite()).to.equal(isInfiniteValues[i]);
                expect(complex.toString()).to.equal(stringValues[i]);
                expect(complex.toRectangular()).to.equal(rectangularValues[i]);
                expect(complex.toPolar()).to.equal(polarValues[i]);
            }
        });

        it('should return the correct type', function() {
            var type = Complex.ZERO.getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#HYPTA0PX51J7K2VQ88NZMH9GDPHR6G0B,$version:v1,$digest:none]>');
        });

    });

    describe('Test complex functions', function() {

        it('should perform the real function correctly', function() {
            expect(Complex.real(Complex.UNDEFINED).toString()).to.equal('NaN');
            expect(Complex.real(Complex.INFINITY)).to.equal(Infinity);
            expect(Complex.real(Complex.ZERO)).to.equal(0);
            expect(Complex.real(new Complex('(3, 4i)'))).to.equal(3);
        });

        it('should perform the imaginary function correctly', function() {
            expect(Complex.imaginary(Complex.UNDEFINED).toString()).to.equal('NaN');
            expect(Complex.imaginary(Complex.INFINITY)).to.equal(Infinity);
            expect(Complex.imaginary(Complex.ZERO)).to.equal(0);
            expect(Complex.imaginary(new Complex('(3, -4i)'))).to.equal(-4);
        });

        it('should perform the magnitude function correctly', function() {
            expect(Complex.magnitude(Complex.UNDEFINED).toString()).to.equal('NaN');
            expect(Complex.magnitude(Complex.INFINITY)).to.equal(Infinity);
            expect(Complex.magnitude(Complex.ZERO)).to.equal(0);
            expect(Complex.magnitude(new Complex('(3, 4i)'))).to.equal(5);
        });

        it('should perform the angle function correctly', function() {
            expect(Complex.angle(Complex.UNDEFINED)).to.equal(undefined);
            expect(Complex.angle(Complex.INFINITY)).to.equal(undefined);
            expect(Complex.angle(Complex.ZERO)).to.equal(Angle.ZERO);
            expect(Complex.angle(new Complex('-1')).isEqualTo(Angle.PI)).to.equal(true);
        });

        it('should perform the inverse function correctly', function() {
            expect(Complex.inverse(Complex.UNDEFINED)).to.equal(Complex.UNDEFINED);
            expect(Complex.inverse(Complex.INFINITY)).to.equal(Complex.INFINITY);
            expect(Complex.inverse(Complex.ZERO)).to.equal(Complex.ZERO);
            expect(Complex.inverse(new Complex(3)).isEqualTo(new Complex('(3 e^~pi i)'))).to.equal(true);
        });

        it('should perform the reciprocal function correctly', function() {
            expect(Complex.reciprocal(Complex.UNDEFINED)).to.equal(Complex.UNDEFINED);
            expect(Complex.reciprocal(Complex.INFINITY)).to.equal(Complex.ZERO);
            expect(Complex.reciprocal(Complex.ZERO)).to.equal(Complex.INFINITY);
            expect(Complex.reciprocal(new Complex('(2 e^~pi i)')).isEqualTo(new Complex('(0.5 e^~pi i)'))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(Complex.conjugate(Complex.UNDEFINED)).to.equal(Complex.UNDEFINED);
            expect(Complex.conjugate(Complex.INFINITY)).to.equal(Complex.INFINITY);
            expect(Complex.conjugate(Complex.ZERO)).to.equal(Complex.ZERO);
            expect(Complex.conjugate(new Complex('(3, 4i)')).isEqualTo(new Complex('(3, -4i)'))).to.equal(true);
        });

        it('should perform the factorial function correctly', function() {
            expect(Complex.factorial(Complex.UNDEFINED)).to.equal(Complex.UNDEFINED);
            expect(Complex.factorial(Complex.INFINITY)).to.equal(Complex.INFINITY);
            expect(Complex.factorial(Complex.ZERO).isEqualTo(new Complex(1))).to.equal(true);
            expect(Complex.factorial(new Complex(20)).isEqualTo(new Complex(2432902008176638000))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(Complex.sum(new Complex(5), Complex.UNDEFINED)).to.equal(Complex.UNDEFINED);
            expect(Complex.sum(new Complex(5), Complex.INFINITY)).to.equal(Complex.INFINITY);
            expect(Complex.sum(new Complex('(-3, 4i)'), new Complex('(3, -4i)'))).to.equal(Complex.ZERO);
            expect(Complex.sum(new Complex('(3, 4i)'), new Complex('(2, -2i)')).isEqualTo(new Complex('(5, 2i)'))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(Complex.difference(new Complex(5), Complex.UNDEFINED)).to.equal(Complex.UNDEFINED);
            expect(Complex.difference(new Complex(5), Complex.INFINITY)).to.equal(Complex.INFINITY);
            expect(Complex.difference(new Complex('(3, 4i)'), new Complex('(3, 4i)'))).to.equal(Complex.ZERO);
            expect(Complex.difference(new Complex('(3, 4i)'), new Complex('(2, -2i)')).isEqualTo(new Complex('(1, 6i)'))).to.equal(true);
        });

        it('should perform the product function correctly', function() {
            expect(Complex.product(new Complex(5), Complex.UNDEFINED)).to.equal(Complex.UNDEFINED);
            expect(Complex.product(new Complex(5), Complex.INFINITY)).to.equal(Complex.INFINITY);
            expect(Complex.product(Complex.ZERO, new Complex('(3, 4i)'))).to.equal(Complex.ZERO);
            expect(Complex.product(new Complex('(3 e^~2i)'), new Complex('(2 e^~1i)')).isEqualTo(new Complex('(6 e^~3i)'))).to.equal(true);
        });

        it('should perform the quotient function correctly', function() {
            expect(Complex.quotient(new Complex(5), Complex.UNDEFINED)).to.equal(Complex.UNDEFINED);
            expect(Complex.quotient(new Complex(5), Complex.INFINITY)).to.equal(Complex.ZERO);
            expect(Complex.quotient(new Complex('(3, 4i)'), Complex.ZERO)).to.equal(Complex.INFINITY);
            expect(Complex.quotient(new Complex('(4 e^~2i)'), new Complex('(2 e^~1i)')).isEqualTo(new Complex('(2 e^~1i)'))).to.equal(true);
        });

        it('should perform the remainder function correctly', function() {
            expect(Complex.remainder(new Complex(5), Complex.UNDEFINED)).to.equal(Complex.UNDEFINED);
            expect(Complex.remainder(new Complex(5), Complex.INFINITY)).to.equal(Complex.ZERO);
            expect(Complex.remainder(new Complex(5), Complex.ZERO)).to.equal(Complex.INFINITY);
            expect(Complex.remainder(new Complex(23), new Complex(7)).isEqualTo(new Complex(2))).to.equal(true);
        });

    });

});

var testValues = [
    Complex.UNDEFINED,
    Complex.ZERO,
    Complex.INFINITY,
    new Complex(),
    new Complex('-5'),
    new Complex('5'),
    new Complex('1'),
    new Complex('-1'),
    new Complex('1i'),
    new Complex('-1i'),
    new Complex('(1.23E-56, -7.8E90i)'),
    new Complex('(5 e^~3.141592653589793i)')
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
    '(1 e^~1.5707963267949i)',
    '(1 e^~-1.5707963267949i)',
    'infinity',
    '(5 e^~pi i)'
];
