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


describe('Bali Nebula™ Component Framework - Percent', function() {

    describe('Test percent constructors', function() {

        it('should construct percentages using literals', function() {
            expect(bali.component('0%').toString()).to.equal('0%');
            expect(bali.component('27.4%').toString()).to.equal('27.4%');
            expect(bali.component('-50%').toString()).to.equal('-50%');
        });

        it('should construct percentages that equal zero', function() {
            expect(bali.percent().toBoolean()).to.equal(false);
            expect(bali.percent().toNumber()).to.equal(0);
            expect(bali.percent().toString()).to.equal('0%');
            expect(bali.percent(0).toBoolean()).to.equal(false);
            expect(bali.percent(0).toNumber()).to.equal(0);
            expect(bali.percent(0).toString()).to.equal('0%');
        });

        it('should construct percentages that equal 13.25%', function() {
            expect(bali.percent(13.25).toBoolean()).to.equal(true);
            expect(bali.percent(13.25).toNumber()).to.equal(0.1325);
            expect(bali.percent(13.25).toString()).to.equal('13.25%');
        });

        it('should construct percentages that equal -2%', function() {
            expect(bali.percent(-2).toBoolean()).to.equal(true);
            expect(bali.percent(-2).toNumber()).to.equal(-0.02);
            expect(bali.percent(-2).toString()).to.equal('-2%');
        });

        it('should construct percentages that equal 150%', function() {
            expect(bali.percent(150).toBoolean()).to.equal(true);
            expect(bali.percent(150).toNumber()).to.equal(1.5);
            expect(bali.percent(150).toString()).to.equal('150%');
        });

    });

    describe('Test percentage functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(bali.percent.inverse(bali.percent(25)).isEqualTo(bali.percent(-25))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(bali.percent.sum(bali.percent(35), bali.percent(25)).isEqualTo(bali.percent(60))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(bali.percent.difference(bali.percent(35), bali.percent(25)).isEqualTo(bali.percent(10))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(bali.percent.scaled(bali.percent(10), 5).isEqualTo(bali.percent(50))).to.equal(true);
        });

    });

});
