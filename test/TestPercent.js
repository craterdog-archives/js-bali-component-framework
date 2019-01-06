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
const elements = require('../src/elements');

describe('Bali Component Framework™', function() {

    describe('Test percent constructors', function() {

        it('should construct a default percent of zero', function() {
            const empty = new elements.Percent();
            const number = empty.toNumber();
            expect(number).to.equal(0);
            const string = empty.toString();
            expect(string).to.equal('0%');
        });

        it('should construct a percent of zero', function() {
            const zero = new elements.Percent(0);
            const number = zero.toNumber();
            expect(number).to.equal(0);
            const string = zero.toString();
            expect(string).to.equal('0%');
        });

        it('should construct a percent of 13.25%', function() {
            const decimal = new elements.Percent(13.25);
            const number = decimal.toNumber();
            expect(number).to.equal(0.1325);
            const string = decimal.toString();
            expect(string).to.equal('13.25%');
        });

        it('should construct a percent of -2%', function() {
            const negative = new elements.Percent(-2);
            const number = negative.toNumber();
            expect(number).to.equal(-0.02);
            const string = negative.toString();
            expect(string).to.equal('-2%');
        });

        it('should construct a percent of 50%', function() {
            const fifty = new elements.Percent(50);
            const number = fifty.toNumber();
            expect(number).to.equal(0.5);
            const string = fifty.toString();
            expect(string).to.equal('50%');
        });

        it('should construct a percent of -0.234%', function() {
            const fractional = new elements.Percent(-0.234);
            const number = fractional.toNumber();
            expect(number).to.equal(-0.00234);
            const string = fractional.toString();
            expect(string).to.equal('-0.234%');
        });

        it('should construct a percent of 100%', function() {
            const hundred = new elements.Percent(100);
            const number = hundred.toNumber();
            expect(number).to.equal(1);
            const string = hundred.toString();
            expect(string).to.equal('100%');
        });

        it('should construct a percent of 150%', function() {
            const hundred = new elements.Percent(150);
            const number = hundred.toNumber();
            expect(number).to.equal(1.5);
            const string = hundred.toString();
            expect(string).to.equal('150%');
        });

    });

    describe('Test percent methods', function() {

        it('should return the correct type', function() {
            const type = new elements.Percent(50).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#WCXVKQC0BM03CNBD2JSF8VLVVHJ1A6P4,$version:v1,$digest:none]>');
        });

    });

    describe('Test percent functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(elements.Percent.inverse(new elements.Percent(25)).isEqualTo(new elements.Percent(-25))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(elements.Percent.sum(new elements.Percent(35), new elements.Percent(25)).isEqualTo(new elements.Percent(60))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(elements.Percent.difference(new elements.Percent(35), new elements.Percent(25)).isEqualTo(new elements.Percent(10))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(elements.Percent.scaled(new elements.Percent(10), 5).isEqualTo(new elements.Percent(50))).to.equal(true);
        });

    });

});
