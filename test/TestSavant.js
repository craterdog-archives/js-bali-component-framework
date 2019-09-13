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
const Savant = require('../src/utilities/Savant').Savant;
const savant = new Savant(debug);


describe('Bali Nebula™ Component Framework - Savant', function() {

    describe('Test arithmetic operations', function() {

        it('should test addition', function() {
            expect(savant.sum(12.345, 543.21)).to.equal(555.56);
            expect(savant.sum(1.2345e+1, 5.4321e-2)).to.equal(12.399);
            expect(savant.sum(1.23456789e+1, 54.321e-3)).to.equal(12.4);
            expect(savant.sum(0, 0)).to.equal(0);
            expect(savant.sum(0, -0)).to.equal(0);
            expect(savant.sum(0, Infinity)).to.equal(Infinity);
            expect(savant.sum(0, -Infinity)).to.equal(Infinity);
            expect(savant.sum(-0, Infinity)).to.equal(Infinity);
            expect(savant.sum(-0, -Infinity)).to.equal(Infinity);
            expect(savant.sum(Infinity, Infinity)).to.equal(Infinity);
            expect(savant.sum(Infinity, -Infinity)).to.equal(Infinity);
            expect(savant.sum(-Infinity, -Infinity)).to.equal(Infinity);
        });

        it('should test subtraction', function() {
            expect(savant.difference(123.45, 54.321)).to.equal(69.13);
            expect(savant.difference(1.2345e+1, 5.4321e-2)).to.equal(12.291);
            expect(savant.difference(1.23456789e+1, 54.321e-3)).to.equal(12.291358);
            expect(savant.difference(0, 0)).to.equal(0);
            expect(savant.difference(0, -0)).to.equal(0);
            expect(savant.difference(0, Infinity)).to.equal(Infinity);
            expect(savant.difference(0, -Infinity)).to.equal(Infinity);
            expect(savant.difference(-0, 0)).to.equal(0);
            expect(savant.difference(-0, -0)).to.equal(0);
            expect(savant.difference(-0, Infinity)).to.equal(Infinity);
            expect(savant.difference(-0, -Infinity)).to.equal(Infinity);
            expect(savant.difference(Infinity, 0)).to.equal(Infinity);
            expect(savant.difference(Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(savant.difference(Infinity, -Infinity).toString()).to.equal(NaN.toString());
            expect(savant.difference(-Infinity, 0)).to.equal(Infinity);
            expect(savant.difference(-Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(savant.difference(-Infinity, -Infinity).toString()).to.equal(NaN.toString());
        });

        it('should test multiplication', function() {
            expect(savant.product(123.45, 67.8)).to.equal(8.37e+3);
            expect(savant.product(1.2345e+2, 6.789e-9)).to.equal(8.381e-7);
            expect(savant.product(1.2345e+56, 6.7e-23)).to.equal(Infinity);
            expect(savant.product(0, 0)).to.equal(0);
            expect(savant.product(0, -0)).to.equal(0);
            expect(savant.product(0, 1)).to.equal(0);
            expect(savant.product(0, -1)).to.equal(0);
            expect(savant.product(0, Infinity).toString()).to.equal(NaN.toString());
            expect(savant.product(0, -Infinity).toString()).to.equal(NaN.toString());
            expect(savant.product(-0, -0)).to.equal(0);
            expect(savant.product(-0, 1)).to.equal(0);
            expect(savant.product(-0, -1)).to.equal(0);
            expect(savant.product(-0, Infinity).toString()).to.equal(NaN.toString());
            expect(savant.product(-0, -Infinity).toString()).to.equal(NaN.toString());
            expect(savant.product(1, 1)).to.equal(1);
            expect(savant.product(1, -1)).to.equal(-1);
            expect(savant.product(1, Infinity)).to.equal(Infinity);
            expect(savant.product(1, -Infinity)).to.equal(Infinity);
            expect(savant.product(-1, Infinity)).to.equal(Infinity);
            expect(savant.product(-1, -Infinity)).to.equal(Infinity);
            expect(savant.product(Infinity, Infinity)).to.equal(Infinity);
            expect(savant.product(Infinity, -Infinity)).to.equal(Infinity);
            expect(savant.product(-Infinity, -Infinity)).to.equal(Infinity);
        });

        it('should test division', function() {
            expect(savant.quotient(1, 3)).to.equal(0.3333333333333333);
            expect(savant.quotient(123.45, 67.8)).to.equal(1.82);
            expect(savant.quotient(1.2345e+2, 7.8e-9)).to.equal(16000000000);
            expect(savant.quotient(1.2345e+56, 6.789e-23)).to.equal(Infinity);
            expect(savant.quotient(0, 0).toString()).to.equal(NaN.toString());
            expect(savant.quotient(0, -0).toString()).to.equal(NaN.toString());
            expect(savant.quotient(0, 1)).to.equal(0);
            expect(savant.quotient(0, -1)).to.equal(0);
            expect(savant.quotient(0, Infinity)).to.equal(0);
            expect(savant.quotient(0, -Infinity)).to.equal(0);
            expect(savant.quotient(-0, 0).toString()).to.equal(NaN.toString());
            expect(savant.quotient(-0, -0).toString()).to.equal(NaN.toString());
            expect(savant.quotient(-0, 1)).to.equal(0);
            expect(savant.quotient(-0, -1)).to.equal(0);
            expect(savant.quotient(-0, Infinity)).to.equal(0);
            expect(savant.quotient(-0, -Infinity)).to.equal(0);
            expect(savant.quotient(1, 0)).to.equal(Infinity);
            expect(savant.quotient(1, -0)).to.equal(Infinity);
            expect(savant.quotient(1, 1)).to.equal(1);
            expect(savant.quotient(1, -1)).to.equal(-1);
            expect(savant.quotient(1, Infinity)).to.equal(0);
            expect(savant.quotient(1, -Infinity)).to.equal(0);
            expect(savant.quotient(-1, 0)).to.equal(Infinity);
            expect(savant.quotient(-1, -0)).to.equal(Infinity);
            expect(savant.quotient(-1, 1)).to.equal(-1);
            expect(savant.quotient(-1, -1)).to.equal(1);
            expect(savant.quotient(-1, Infinity)).to.equal(0);
            expect(savant.quotient(-1, -Infinity)).to.equal(0);
            expect(savant.quotient(Infinity, 0)).to.equal(Infinity);
            expect(savant.quotient(Infinity, -0)).to.equal(Infinity);
            expect(savant.quotient(Infinity, 1)).to.equal(Infinity);
            expect(savant.quotient(Infinity, -1)).to.equal(Infinity);
            expect(savant.quotient(Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(savant.quotient(Infinity, -Infinity).toString()).to.equal(NaN.toString());
            expect(savant.quotient(-Infinity, 0)).to.equal(Infinity);
            expect(savant.quotient(-Infinity, -0)).to.equal(Infinity);
            expect(savant.quotient(-Infinity, 1)).to.equal(Infinity);
            expect(savant.quotient(-Infinity, -1)).to.equal(Infinity);
            expect(savant.quotient(-Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(savant.quotient(-Infinity, -Infinity).toString()).to.equal(NaN.toString());
        });

        it('should test remainder', function() {
            expect(savant.remainder(1, 3)).to.equal(1);
            expect(savant.remainder(24, 7)).to.equal(3);
            expect(savant.remainder(123.45, 67.8)).to.equal(55.7);
            expect(savant.remainder(1.2345e+2, 7.8e-9)).to.equal(7.2e-9);
            expect(savant.remainder(1.2345e+56, 6.789e-23).toString()).to.equal(NaN.toString());
            expect(savant.remainder(0, 0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(0, -0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(0, 1)).to.equal(0);
            expect(savant.remainder(0, -1)).to.equal(0);
            expect(savant.remainder(0, Infinity)).to.equal(0);
            expect(savant.remainder(0, -Infinity)).to.equal(0);
            expect(savant.remainder(-0, 0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-0, -0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-0, 1)).to.equal(0);
            expect(savant.remainder(-0, -1)).to.equal(0);
            expect(savant.remainder(-0, Infinity)).to.equal(0);
            expect(savant.remainder(-0, -Infinity)).to.equal(0);
            expect(savant.remainder(1, 0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(1, -0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(1, 1)).to.equal(0);
            expect(savant.remainder(1, -1)).to.equal(0);
            expect(savant.remainder(1, Infinity)).to.equal(1);
            expect(savant.remainder(1, -Infinity)).to.equal(1);
            expect(savant.remainder(-1, 0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-1, -0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-1, 1)).to.equal(0);
            expect(savant.remainder(-1, -1)).to.equal(0);
            expect(savant.remainder(-1, Infinity)).to.equal(-1);
            expect(savant.remainder(-1, -Infinity)).to.equal(-1);
            expect(savant.remainder(Infinity, 0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(Infinity, -0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(Infinity, 1).toString()).to.equal(NaN.toString());
            expect(savant.remainder(Infinity, -1).toString()).to.equal(NaN.toString());
            expect(savant.remainder(Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(savant.remainder(Infinity, -Infinity).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-Infinity, 0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-Infinity, -0).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-Infinity, 1).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-Infinity, -1).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-Infinity, Infinity).toString()).to.equal(NaN.toString());
            expect(savant.remainder(-Infinity, -Infinity).toString()).to.equal(NaN.toString());
        });

    });

    describe('Test power operations', function() {

        it('should test exponentiation', function() {
            expect(savant.exponential(1.2345)).to.equal(3.4367);
            expect(savant.exponential(12.345)).to.equal(2.298e+5);
            expect(savant.exponential(123.45)).to.equal(Infinity);
        });

        it('should test logarithms', function() {
            expect(savant.logarithm(3.4367)).to.equal(1.2345);
            expect(savant.logarithm(229800.1)).to.equal(12.345);
            expect(savant.logarithm(4.11e+32)).to.equal(75.096146004318);
            expect(savant.logarithm(Math.E)).to.equal(1);
        });

    });

    describe('Test trigonometric operations', function() {

        it('should test sine', function() {
            expect(savant.sine(0)).to.equal(0);
            expect(savant.sine(Math.PI / 4)).to.equal(0.7071067811865475);
            expect(savant.sine(Math.PI / 2)).to.equal(1);
            expect(savant.sine(Math.PI * 3 / 5)).to.equal(0.9510565162951536);
            expect(savant.sine(Math.PI)).to.equal(0);
            expect(savant.sine(Math.PI * 5 / 3)).to.equal(-0.8660254037844386);
            expect(savant.sine(Math.PI * 3 / 2)).to.equal(-1);
            expect(savant.sine(Math.PI * 2)).to.equal(0);
            expect(savant.sine(-Math.PI / 4)).to.equal(-0.7071067811865475);
            expect(savant.sine(-Math.PI / 2)).to.equal(-1);
            expect(savant.sine(-Math.PI * 3 / 5)).to.equal(-0.9510565162951536);
            expect(savant.sine(-Math.PI)).to.equal(0);
            expect(savant.sine(-Math.PI * 5 / 3)).to.equal(0.8660254037844386);
            expect(savant.sine(-Math.PI * 3 / 2)).to.equal(1);
            expect(savant.sine(-Math.PI * 2)).to.equal(0);
        });

        it('should test cosine', function() {
            expect(savant.cosine(0)).to.equal(1);
            expect(savant.cosine(Math.PI / 4)).to.equal(0.7071067811865476);
            expect(savant.cosine(Math.PI / 2)).to.equal(0);
            expect(savant.cosine(Math.PI * 3 / 5)).to.equal(-0.309016994374947);
            expect(savant.cosine(Math.PI)).to.equal(-1);
            expect(savant.cosine(Math.PI * 5 / 3)).to.equal(0.5);
            expect(savant.cosine(Math.PI * 3 / 2)).to.equal(0);
            expect(savant.cosine(Math.PI * 2)).to.equal(1);
            expect(savant.cosine(-Math.PI / 4)).to.equal(0.7071067811865476);
            expect(savant.cosine(-Math.PI / 2)).to.equal(0);
            expect(savant.cosine(-Math.PI * 3 / 5)).to.equal(-0.309016994374947);
            expect(savant.cosine(-Math.PI)).to.equal(-1);
            expect(savant.cosine(-Math.PI * 5 / 3)).to.equal(0.5);
            expect(savant.cosine(-Math.PI * 3 / 2)).to.equal(0);
            expect(savant.cosine(-Math.PI * 2)).to.equal(1);
        });

        it('should test tangent', function() {
            expect(savant.tangent(0)).to.equal(0);
            expect(savant.tangent(Math.PI / 4)).to.equal(1);
            expect(savant.tangent(Math.PI / 2)).to.equal(Infinity);
            expect(savant.tangent(Math.PI * 3 / 5)).to.equal(-3.07768353717525);
            expect(savant.tangent(Math.PI)).to.equal(0);
            expect(savant.tangent(Math.PI * 5 / 3)).to.equal(-1.73205080756888);
            expect(savant.tangent(Math.PI * 3 / 2)).to.equal(Infinity);
            expect(savant.tangent(Math.PI * 2)).to.equal(0);
            expect(savant.tangent(-0)).to.equal(0);
            expect(savant.tangent(-Math.PI / 4)).to.equal(-1);
            expect(savant.tangent(-Math.PI / 2)).to.equal(Infinity);
            expect(savant.tangent(-Math.PI * 3 / 5)).to.equal(3.07768353717525);
            expect(savant.tangent(-Math.PI)).to.equal(0);
            expect(savant.tangent(-Math.PI * 5 / 3)).to.equal(1.73205080756888);
            expect(savant.tangent(-Math.PI * 3 / 2)).to.equal(Infinity);
            expect(savant.tangent(-Math.PI * 2)).to.equal(0);
        });

    });

    describe('Test inverse trigonometric operations', function() {

        it('should test arcsine', function() {
            expect(savant.arcsine(0)).to.equal(0);
            expect(savant.arcsine(0.54321)).to.equal(0.57426);
            expect(savant.arcsine(1)).to.equal(1.570796326794897);
            expect(savant.arcsine(-0)).to.equal(0);
            expect(savant.arcsine(-0.54321)).to.equal(-0.57426);
            expect(savant.arcsine(-1)).to.equal(-1.570796326794897);
        });

        it('should test arccosine', function() {
            expect(savant.arccosine(0)).to.equal(1.570796326794897);
            expect(savant.arccosine(0.54321)).to.equal(0.99654);
            expect(savant.arccosine(1)).to.equal(0);
            expect(savant.arccosine(-0)).to.equal(1.570796326794897);
            expect(savant.arccosine(-0.54321)).to.equal(2.145);
            expect(savant.arccosine(-1)).to.equal(3.141592653589793);
        });

        it('should test arctangent', function() {
            expect(savant.arctangent(0, 1)).to.equal(0);
            expect(savant.arctangent(-0, 1)).to.equal(0);
            expect(savant.arctangent(1, 1)).to.equal(0.7853981633974483);
            expect(savant.arctangent(1, 0)).to.equal(1.570796326794897);
            expect(savant.arctangent(1, -0)).to.equal(1.570796326794897);
            expect(savant.arctangent(1, -1)).to.equal(2.35619449019234);
            expect(savant.arctangent(0, -1)).to.equal(3.141592653589793);
            expect(savant.arctangent(-0, -1)).to.equal(3.141592653589793);
            expect(savant.arctangent(-1, -1)).to.equal(-2.35619449019234);
            expect(savant.arctangent(-1, 0)).to.equal(-1.570796326794897);
            expect(savant.arctangent(-1, -0)).to.equal(-1.570796326794897);
            expect(savant.arctangent(-1, 1)).to.equal(-0.7853981633974483);
        });

    });

});
