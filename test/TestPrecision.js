/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

/* global NaN, Infinity */

var mocha = require('mocha');
var expect = require('chai').expect;
var precision = require('../src/utilities/Precision');

describe('Bali Component Framework™', function() {

    describe('Test arithmetic operations', function() {

        it('should test addition', function() {
            expect(precision.sum(12.345, 543.21)).to.equal(555.56);
            expect(precision.sum(1.2345e+1, 5.4321e-2)).to.equal(12.399);
            expect(precision.sum(1.23456789e+1, 54.321e-3)).to.equal(12.4);
        });

        it('should test subtraction', function() {
            expect(precision.difference(123.45, 54.321)).to.equal(69.13);
            expect(precision.difference(1.2345e+1, 5.4321e-2)).to.equal(12.291);
            expect(precision.difference(1.23456789e+1, 54.321e-3)).to.equal(12.291358);
        });

        it('should test multiplication', function() {
            expect(precision.product(123.45, 67.8)).to.equal(8.37e+3);
            expect(precision.product(1.2345e+56, 6.789e-23)).to.equal(8.381e+33);
            expect(precision.product(1.2345e+56, 6.7e-23)).to.equal(8.3e+33);
        });

        it('should test division', function() {
            expect(precision.quotient(1, 3)).to.equal(0.3333333333333333);
            expect(precision.quotient(123.45, 67.8)).to.equal(1.82);
            expect(precision.quotient(1.2345e+2, 7.8e-9)).to.equal(16000000000);
            expect(precision.quotient(1.2345e+56, 6.789e-23)).to.equal(Infinity);
        });

        it('should test remainder', function() {
            expect(precision.remainder(1, 3)).to.equal(1);
            expect(precision.remainder(24, 7)).to.equal(3);
            expect(precision.remainder(123.45, 67.8)).to.equal(55.7);
            expect(precision.remainder(1.2345e+56, 6.789e-23)).to.equal(2.259e-23);
        });

    });

    describe('Test power operations', function() {

        it('should test exponentiation', function() {
            expect(precision.exponential(1.2345)).to.equal(3.4367);
            expect(precision.exponential(12.345)).to.equal(2.298e+5);
            expect(precision.exponential(123.45)).to.equal(Infinity);
            expect(precision.exponential(12.34, 10)).to.equal(2190000000000);
        });

        it('should test logarithms', function() {
            expect(precision.logarithm(3.4367)).to.equal(1.2345);
            expect(precision.logarithm(229800.1)).to.equal(12.345);
            expect(precision.logarithm(4.11e+53)).to.equal(123.45043295719);
            expect(precision.logarithm(4.11e+53, 10)).to.equal(53.613841821876);
        });

    });

    describe('Test trigonometric operations', function() {

        it('should test sine', function() {
            expect(precision.sine(0)).to.equal(0);
            expect(precision.sine(precision.PI / 4)).to.equal(0.7071067811865475);
            expect(precision.sine(-precision.PI / 2)).to.equal(-1);
            expect(precision.sine(precision.PI)).to.equal(0);
        });

        it('should test cosine', function() {
            expect(precision.cosine(0)).to.equal(1);
            expect(precision.cosine(precision.PI / 4)).to.equal(0.7071067811865476);
            expect(precision.cosine(-precision.PI / 2)).to.equal(0);
            expect(precision.cosine(precision.PI)).to.equal(-1);
        });

        it('should test tangent', function() {
            expect(precision.tangent(0)).to.equal(0);
            expect(precision.tangent(precision.PI / 4)).to.equal(1);
            expect(precision.tangent(-precision.PI / 2)).to.equal(Infinity);
            expect(precision.tangent(precision.PI)).to.equal(0);
        });

    });

    describe('Test inverse trigonometric operations', function() {

        it('should test arcsine', function() {
            expect(precision.arcsine(0)).to.equal(0);
            expect(precision.arcsine(0.5)).to.equal(0.52);
            expect(precision.arcsine(1)).to.equal(1.570796326794897);
            expect(precision.arcsine(-0.5)).to.equal(-0.52);
            expect(precision.arcsine(-1)).to.equal(-1.570796326794897);
        });

        it('should test arccosine', function() {
            expect(precision.arccosine(0)).to.equal(1.570796326794897);
            expect(precision.arccosine(0.5)).to.equal(1);
            expect(precision.arccosine(1)).to.equal(0);
            expect(precision.arccosine(-0.5)).to.equal(2);
            expect(precision.arccosine(-1)).to.equal(precision.PI);
        });

    });

});
