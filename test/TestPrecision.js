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

const mocha = require('mocha');
const expect = require('chai').expect;
const utilities = require('../src/utilities');


describe('Bali Component Framework™', function() {

    describe('Test arithmetic operations', function() {

        it('should test addition', function() {
            expect(utilities.precision.sum(12.345, 543.21)).to.equal(555.56);
            expect(utilities.precision.sum(1.2345e+1, 5.4321e-2)).to.equal(12.399);
            expect(utilities.precision.sum(1.23456789e+1, 54.321e-3)).to.equal(12.4);
            expect(utilities.precision.sum(0, 0)).to.equal(0);
            expect(utilities.precision.sum(0, -0)).to.equal(0);
            expect(utilities.precision.sum(0, Infinity)).to.equal(Infinity);
            expect(utilities.precision.sum(0, -Infinity)).to.equal(Infinity);
            expect(utilities.precision.sum(-0, Infinity)).to.equal(Infinity);
            expect(utilities.precision.sum(-0, -Infinity)).to.equal(Infinity);
            expect(utilities.precision.sum(Infinity, Infinity)).to.equal(Infinity);
            expect(utilities.precision.sum(Infinity, -Infinity)).to.equal(Infinity);
            expect(utilities.precision.sum(-Infinity, -Infinity)).to.equal(Infinity);
        });

        it('should test subtraction', function() {
            expect(utilities.precision.difference(123.45, 54.321)).to.equal(69.13);
            expect(utilities.precision.difference(1.2345e+1, 5.4321e-2)).to.equal(12.291);
            expect(utilities.precision.difference(1.23456789e+1, 54.321e-3)).to.equal(12.291358);
            expect(utilities.precision.difference(0, 0)).to.equal(0);
            expect(utilities.precision.difference(0, -0)).to.equal(0);
            expect(utilities.precision.difference(0, Infinity)).to.equal(Infinity);
            expect(utilities.precision.difference(0, -Infinity)).to.equal(Infinity);
            expect(utilities.precision.difference(-0, 0)).to.equal(0);
            expect(utilities.precision.difference(-0, -0)).to.equal(0);
            expect(utilities.precision.difference(-0, Infinity)).to.equal(Infinity);
            expect(utilities.precision.difference(-0, -Infinity)).to.equal(Infinity);
            expect(utilities.precision.difference(Infinity, 0)).to.equal(Infinity);
            expect(utilities.precision.difference(Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.difference(Infinity, -Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.difference(-Infinity, 0)).to.equal(Infinity);
            expect(utilities.precision.difference(-Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.difference(-Infinity, -Infinity).toString()).to.equal(NaN.toString());
        });

        it('should test multiplication', function() {
            expect(utilities.precision.product(123.45, 67.8)).to.equal(8.37e+3);
            expect(utilities.precision.product(1.2345e+2, 6.789e-9)).to.equal(8.381e-7);
            expect(utilities.precision.product(1.2345e+56, 6.7e-23)).to.equal(Infinity);
            expect(utilities.precision.product(0, 0)).to.equal(0);
            expect(utilities.precision.product(0, -0)).to.equal(0);
            expect(utilities.precision.product(0, 1)).to.equal(0);
            expect(utilities.precision.product(0, -1)).to.equal(0);
            expect(utilities.precision.product(0, Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.product(0, -Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.product(-0, -0)).to.equal(0);
            expect(utilities.precision.product(-0, 1)).to.equal(0);
            expect(utilities.precision.product(-0, -1)).to.equal(0);
            expect(utilities.precision.product(-0, Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.product(-0, -Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.product(1, 1)).to.equal(1);
            expect(utilities.precision.product(1, -1)).to.equal(-1);
            expect(utilities.precision.product(1, Infinity)).to.equal(Infinity);
            expect(utilities.precision.product(1, -Infinity)).to.equal(Infinity);
            expect(utilities.precision.product(-1, Infinity)).to.equal(Infinity);
            expect(utilities.precision.product(-1, -Infinity)).to.equal(Infinity);
            expect(utilities.precision.product(Infinity, Infinity)).to.equal(Infinity);
            expect(utilities.precision.product(Infinity, -Infinity)).to.equal(Infinity);
            expect(utilities.precision.product(-Infinity, -Infinity)).to.equal(Infinity);
        });

        it('should test division', function() {
            expect(utilities.precision.quotient(1, 3)).to.equal(0.3333333333333333);
            expect(utilities.precision.quotient(123.45, 67.8)).to.equal(1.82);
            expect(utilities.precision.quotient(1.2345e+2, 7.8e-9)).to.equal(16000000000);
            expect(utilities.precision.quotient(1.2345e+56, 6.789e-23)).to.equal(Infinity);
            expect(utilities.precision.quotient(0, 0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.quotient(0, -0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.quotient(0, 1)).to.equal(0);
            expect(utilities.precision.quotient(0, -1)).to.equal(0);
            expect(utilities.precision.quotient(0, Infinity)).to.equal(0);
            expect(utilities.precision.quotient(0, -Infinity)).to.equal(0);
            expect(utilities.precision.quotient(-0, 0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.quotient(-0, -0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.quotient(-0, 1)).to.equal(0);
            expect(utilities.precision.quotient(-0, -1)).to.equal(0);
            expect(utilities.precision.quotient(-0, Infinity)).to.equal(0);
            expect(utilities.precision.quotient(-0, -Infinity)).to.equal(0);
            expect(utilities.precision.quotient(1, 0)).to.equal(Infinity);
            expect(utilities.precision.quotient(1, -0)).to.equal(Infinity);
            expect(utilities.precision.quotient(1, 1)).to.equal(1);
            expect(utilities.precision.quotient(1, -1)).to.equal(-1);
            expect(utilities.precision.quotient(1, Infinity)).to.equal(0);
            expect(utilities.precision.quotient(1, -Infinity)).to.equal(0);
            expect(utilities.precision.quotient(-1, 0)).to.equal(Infinity);
            expect(utilities.precision.quotient(-1, -0)).to.equal(Infinity);
            expect(utilities.precision.quotient(-1, 1)).to.equal(-1);
            expect(utilities.precision.quotient(-1, -1)).to.equal(1);
            expect(utilities.precision.quotient(-1, Infinity)).to.equal(0);
            expect(utilities.precision.quotient(-1, -Infinity)).to.equal(0);
            expect(utilities.precision.quotient(Infinity, 0)).to.equal(Infinity);
            expect(utilities.precision.quotient(Infinity, -0)).to.equal(Infinity);
            expect(utilities.precision.quotient(Infinity, 1)).to.equal(Infinity);
            expect(utilities.precision.quotient(Infinity, -1)).to.equal(Infinity);
            expect(utilities.precision.quotient(Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.quotient(Infinity, -Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.quotient(-Infinity, 0)).to.equal(Infinity);
            expect(utilities.precision.quotient(-Infinity, -0)).to.equal(Infinity);
            expect(utilities.precision.quotient(-Infinity, 1)).to.equal(Infinity);
            expect(utilities.precision.quotient(-Infinity, -1)).to.equal(Infinity);
            expect(utilities.precision.quotient(-Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.quotient(-Infinity, -Infinity).toString()).to.equal(NaN.toString());
        });

        it('should test remainder', function() {
            expect(utilities.precision.remainder(1, 3)).to.equal(1);
            expect(utilities.precision.remainder(24, 7)).to.equal(3);
            expect(utilities.precision.remainder(123.45, 67.8)).to.equal(55.7);
            expect(utilities.precision.remainder(1.2345e+2, 7.8e-9)).to.equal(7.2e-9);
            expect(utilities.precision.remainder(1.2345e+56, 6.789e-23).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(0, 0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(0, -0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(0, 1)).to.equal(0);
            expect(utilities.precision.remainder(0, -1)).to.equal(0);
            expect(utilities.precision.remainder(0, Infinity)).to.equal(0);
            expect(utilities.precision.remainder(0, -Infinity)).to.equal(0);
            expect(utilities.precision.remainder(-0, 0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-0, -0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-0, 1)).to.equal(0);
            expect(utilities.precision.remainder(-0, -1)).to.equal(0);
            expect(utilities.precision.remainder(-0, Infinity)).to.equal(0);
            expect(utilities.precision.remainder(-0, -Infinity)).to.equal(0);
            expect(utilities.precision.remainder(1, 0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(1, -0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(1, 1)).to.equal(0);
            expect(utilities.precision.remainder(1, -1)).to.equal(0);
            expect(utilities.precision.remainder(1, Infinity)).to.equal(1);
            expect(utilities.precision.remainder(1, -Infinity)).to.equal(1);
            expect(utilities.precision.remainder(-1, 0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-1, -0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-1, 1)).to.equal(0);
            expect(utilities.precision.remainder(-1, -1)).to.equal(0);
            expect(utilities.precision.remainder(-1, Infinity)).to.equal(-1);
            expect(utilities.precision.remainder(-1, -Infinity)).to.equal(-1);
            expect(utilities.precision.remainder(Infinity, 0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(Infinity, -0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(Infinity, 1).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(Infinity, -1).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(Infinity, -Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-Infinity, 0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-Infinity, -0).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-Infinity, 1).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-Infinity, -1).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(utilities.precision.remainder(-Infinity, -Infinity).toString()).to.equal(NaN.toString());
        });

    });

    describe('Test power operations', function() {

        it('should test exponentiation', function() {
            expect(utilities.precision.exponential(1.2345)).to.equal(3.4367);
            expect(utilities.precision.exponential(12.345)).to.equal(2.298e+5);
            expect(utilities.precision.exponential(123.45)).to.equal(Infinity);
        });

        it('should test logarithms', function() {
            expect(utilities.precision.logarithm(3.4367)).to.equal(1.2345);
            expect(utilities.precision.logarithm(229800.1)).to.equal(12.345);
            expect(utilities.precision.logarithm(4.11e+32)).to.equal(75.096146004318);
            expect(utilities.precision.logarithm(utilities.precision.E)).to.equal(1);
        });

    });

    describe('Test trigonometric operations', function() {

        it('should test sine', function() {
            expect(utilities.precision.sine(0)).to.equal(0);
            expect(utilities.precision.sine(utilities.precision.PI / 4)).to.equal(0.7071067811865475);
            expect(utilities.precision.sine(utilities.precision.PI / 2)).to.equal(1);
            expect(utilities.precision.sine(utilities.precision.PI * 3 / 5)).to.equal(0.9510565162951536);
            expect(utilities.precision.sine(utilities.precision.PI)).to.equal(0);
            expect(utilities.precision.sine(utilities.precision.PI * 5 / 3)).to.equal(-0.8660254037844386);
            expect(utilities.precision.sine(utilities.precision.PI * 3 / 2)).to.equal(-1);
            expect(utilities.precision.sine(utilities.precision.PI * 2)).to.equal(0);
            expect(utilities.precision.sine(-utilities.precision.PI / 4)).to.equal(-0.7071067811865475);
            expect(utilities.precision.sine(-utilities.precision.PI / 2)).to.equal(-1);
            expect(utilities.precision.sine(-utilities.precision.PI * 3 / 5)).to.equal(-0.9510565162951536);
            expect(utilities.precision.sine(-utilities.precision.PI)).to.equal(0);
            expect(utilities.precision.sine(-utilities.precision.PI * 5 / 3)).to.equal(0.8660254037844386);
            expect(utilities.precision.sine(-utilities.precision.PI * 3 / 2)).to.equal(1);
            expect(utilities.precision.sine(-utilities.precision.PI * 2)).to.equal(0);
        });

        it('should test cosine', function() {
            expect(utilities.precision.cosine(0)).to.equal(1);
            expect(utilities.precision.cosine(utilities.precision.PI / 4)).to.equal(0.7071067811865476);
            expect(utilities.precision.cosine(utilities.precision.PI / 2)).to.equal(0);
            expect(utilities.precision.cosine(utilities.precision.PI * 3 / 5)).to.equal(-0.309016994374947);
            expect(utilities.precision.cosine(utilities.precision.PI)).to.equal(-1);
            expect(utilities.precision.cosine(utilities.precision.PI * 5 / 3)).to.equal(0.5);
            expect(utilities.precision.cosine(utilities.precision.PI * 3 / 2)).to.equal(0);
            expect(utilities.precision.cosine(utilities.precision.PI * 2)).to.equal(1);
            expect(utilities.precision.cosine(-utilities.precision.PI / 4)).to.equal(0.7071067811865476);
            expect(utilities.precision.cosine(-utilities.precision.PI / 2)).to.equal(0);
            expect(utilities.precision.cosine(-utilities.precision.PI * 3 / 5)).to.equal(-0.309016994374947);
            expect(utilities.precision.cosine(-utilities.precision.PI)).to.equal(-1);
            expect(utilities.precision.cosine(-utilities.precision.PI * 5 / 3)).to.equal(0.5);
            expect(utilities.precision.cosine(-utilities.precision.PI * 3 / 2)).to.equal(0);
            expect(utilities.precision.cosine(-utilities.precision.PI * 2)).to.equal(1);
        });

        it('should test tangent', function() {
            expect(utilities.precision.tangent(0)).to.equal(0);
            expect(utilities.precision.tangent(utilities.precision.PI / 4)).to.equal(1);
            expect(utilities.precision.tangent(utilities.precision.PI / 2)).to.equal(Infinity);
            expect(utilities.precision.tangent(utilities.precision.PI * 3 / 5)).to.equal(-3.07768353717525);
            expect(utilities.precision.tangent(utilities.precision.PI)).to.equal(0);
            expect(utilities.precision.tangent(utilities.precision.PI * 5 / 3)).to.equal(-1.73205080756888);
            expect(utilities.precision.tangent(utilities.precision.PI * 3 / 2)).to.equal(Infinity);
            expect(utilities.precision.tangent(utilities.precision.PI * 2)).to.equal(0);
            expect(utilities.precision.tangent(-0)).to.equal(0);
            expect(utilities.precision.tangent(-utilities.precision.PI / 4)).to.equal(-1);
            expect(utilities.precision.tangent(-utilities.precision.PI / 2)).to.equal(Infinity);
            expect(utilities.precision.tangent(-utilities.precision.PI * 3 / 5)).to.equal(3.07768353717525);
            expect(utilities.precision.tangent(-utilities.precision.PI)).to.equal(0);
            expect(utilities.precision.tangent(-utilities.precision.PI * 5 / 3)).to.equal(1.73205080756888);
            expect(utilities.precision.tangent(-utilities.precision.PI * 3 / 2)).to.equal(Infinity);
            expect(utilities.precision.tangent(-utilities.precision.PI * 2)).to.equal(0);
        });

    });

    describe('Test inverse trigonometric operations', function() {

        it('should test arcsine', function() {
            expect(utilities.precision.arcsine(0)).to.equal(0);
            expect(utilities.precision.arcsine(0.54321)).to.equal(0.57426);
            expect(utilities.precision.arcsine(1)).to.equal(1.570796326794897);
            expect(utilities.precision.arcsine(-0)).to.equal(0);
            expect(utilities.precision.arcsine(-0.54321)).to.equal(-0.57426);
            expect(utilities.precision.arcsine(-1)).to.equal(-1.570796326794897);
        });

        it('should test arccosine', function() {
            expect(utilities.precision.arccosine(0)).to.equal(1.570796326794897);
            expect(utilities.precision.arccosine(0.54321)).to.equal(0.99654);
            expect(utilities.precision.arccosine(1)).to.equal(0);
            expect(utilities.precision.arccosine(-0)).to.equal(1.570796326794897);
            expect(utilities.precision.arccosine(-0.54321)).to.equal(2.145);
            expect(utilities.precision.arccosine(-1)).to.equal(3.141592653589793);
        });

        it('should test arctangent', function() {
            expect(utilities.precision.arctangent(0, 1)).to.equal(0);
            expect(utilities.precision.arctangent(-0, 1)).to.equal(0);
            expect(utilities.precision.arctangent(1, 1)).to.equal(0.7853981633974483);
            expect(utilities.precision.arctangent(1, 0)).to.equal(1.570796326794897);
            expect(utilities.precision.arctangent(1, -0)).to.equal(1.570796326794897);
            expect(utilities.precision.arctangent(1, -1)).to.equal(2.35619449019234);
            expect(utilities.precision.arctangent(0, -1)).to.equal(3.141592653589793);
            expect(utilities.precision.arctangent(-0, -1)).to.equal(3.141592653589793);
            expect(utilities.precision.arctangent(-1, -1)).to.equal(-2.35619449019234);
            expect(utilities.precision.arctangent(-1, 0)).to.equal(-1.570796326794897);
            expect(utilities.precision.arctangent(-1, -0)).to.equal(-1.570796326794897);
            expect(utilities.precision.arctangent(-1, 1)).to.equal(-0.7853981633974483);
        });

    });

});
