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


describe('Bali Nebula™ Component Framework - Percentage', function() {

    describe('Test percentage constructors', function() {

        it('should construct percentages using literals', function() {
            expect(bali.component('0%').toString()).to.equal('0%');
            expect(bali.component('27.4%').toString()).to.equal('27.4%');
            expect(bali.component('-50%').toString()).to.equal('-50%');
        });

        it('should construct percentages that equal zero', function() {
            expect(bali.percentage().toBoolean()).to.equal(false);
            expect(bali.percentage().toReal()).to.equal(0);
            expect(bali.percentage().toString()).to.equal('0%');
            expect(bali.percentage(0).toBoolean()).to.equal(false);
            expect(bali.percentage(0).toReal()).to.equal(0);
            expect(bali.percentage(0).toString()).to.equal('0%');
        });

        it('should construct percentages that equal 13.25%', function() {
            expect(bali.percentage(13.25).toBoolean()).to.equal(true);
            expect(bali.percentage(13.25).toReal()).to.equal(0.1325);
            expect(bali.percentage(13.25).toString()).to.equal('13.25%');
        });

        it('should construct percentages that equal -2%', function() {
            expect(bali.percentage(-2).toBoolean()).to.equal(true);
            expect(bali.percentage(-2).toReal()).to.equal(-0.02);
            expect(bali.percentage(-2).toString()).to.equal('-2%');
        });

        it('should construct percentages that equal 150%', function() {
            expect(bali.percentage(150).toBoolean()).to.equal(true);
            expect(bali.percentage(150).toReal()).to.equal(1.5);
            expect(bali.percentage(150).toString()).to.equal('150%');
        });

    });

    describe('Test percentage functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(bali.percentage.inverse(bali.percentage(25)).isEqualTo(bali.percentage(-25))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(bali.percentage.sum(bali.percentage(35), bali.percentage(25)).isEqualTo(bali.percentage(60))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(bali.percentage.difference(bali.percentage(35), bali.percentage(25)).isEqualTo(bali.percentage(10))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(bali.percentage.scaled(bali.percentage(10), 5).isEqualTo(bali.percentage(50))).to.equal(true);
        });

    });

});
