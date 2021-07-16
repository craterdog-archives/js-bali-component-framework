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


describe('Bali Nebula™ Component Framework - Duration', function() {

    describe('Test time duration constructors', function() {

        it('should construct time durations using literals', function() {
            expect(bali.component('~P0D').getValue()).to.equal(0);
            expect(bali.component('~P0D').toBoolean()).to.equal(false);
            expect(bali.component('~P0D').toString()).to.equal('~P0D');
            expect(bali.component('~P3M7DT8H29M54.321S').getValue()).to.equal(8497794321);
            expect(bali.component('~P3M7DT8H29M54.321S').toBoolean()).to.equal(true);
            expect(bali.component('~P3M7DT8H29M54.321S').toString()).to.equal('~P3M7DT8H29M54.321S');
        });

        it('should construct time durations that equal zero', function() {
            expect(bali.duration().getValue()).to.equal(0);
            expect(bali.duration().toBoolean()).to.equal(false);
            expect(bali.duration().toString()).to.equal('~P0D');
            expect(bali.duration(0).getValue()).to.equal(0);
            expect(bali.duration(0).toBoolean()).to.equal(false);
            expect(bali.duration(0).toString()).to.equal('~P0D');
        });

        it('should construct a time duration of days from weeks', function() {
            const duration = bali.component('~P5W');
            const string = duration.toString();
            expect(string).to.equal('~P35D');
        });

        it('should construct a time duration and format it the same', function() {
            tests.forEach(function(expected) {
                const duration = bali.component(expected);
                const string = duration.toString();
                expect(string).to.equal(expected);
            });
        });

    });

    describe('Test time duration methods', function() {

        it('should compare two time durations correctly', function() {
            const days = bali.component('~P7D');
            const week = bali.component('~P1W');
            const month = bali.component('~P1M');
            expect(week.comparedTo(month)).to.equal(-1);
            expect(week.isEqualTo(days)).to.equal(true);
            expect(month.comparedTo(days)).to.equal(1);
        });

        it('should retrieve milliseconds correctly', function() {
            const moment = bali.component('~P10Y9M8DT7H6M5.432S');
            expect(moment.getMilliseconds()).to.equal(432);
        });

        it('should retrieve seconds correctly', function() {
            const moment = bali.component('~P10Y9M8DT7H6M5.432S');
            expect(moment.getSeconds()).to.equal(5);
        });

        it('should retrieve minutes correctly', function() {
            const moment = bali.component('~P10Y9M8DT7H6M5.432S');
            expect(moment.getMinutes()).to.equal(6);
        });

        it('should retrieve hours correctly', function() {
            const moment = bali.component('~P10Y9M8DT7H6M5.432S');
            expect(moment.getHours()).to.equal(7);
        });

        it('should retrieve days correctly', function() {
            const moment = bali.component('~P10Y9M8DT7H6M5.432S');
            expect(moment.getDays()).to.equal(8);
        });

        it('should retrieve weeks correctly', function() {
            const moment = bali.component('~P3W');
            expect(moment.getWeeks()).to.equal(3);
        });

        it('should retrieve months correctly', function() {
            const moment = bali.component('~P10Y9M8DT7H6M5.432S');
            expect(moment.getMonths()).to.equal(9);
        });

        it('should retrieve years correctly', function() {
            const moment = bali.component('~P10Y9M8DT7H6M5.432S');
            expect(moment.getYears()).to.equal(10);
        });

    });

    describe('Test time duration functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(bali.duration.inverse(bali.component('~P3D')).isEqualTo(bali.component('~-P3D'))).to.equal(true);
            expect(bali.duration.inverse(bali.component('~-P2Y3M6D')).isEqualTo(bali.component('~P2Y3M6D'))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(bali.duration.sum(bali.component('~P2Y3M6D'), bali.component('~P2M4D')).isEqualTo(bali.component('~P2Y5M10D'))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(bali.duration.difference(bali.component('~P2Y3M6D'), bali.component('~P2M4D')).isEqualTo(bali.component('~P2Y1M2D'))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(bali.duration.scaled(bali.component('~P6D'), 3).isEqualTo(bali.component('~P18D'))).to.equal(true);
        });

    });

});

const tests = [
    '~P0D',
    '~P12345Y',
    '~P2Y3M7D',
    '~P2Y3M7DT8H',
    '~P2Y3M7DT8H29M',
    '~P2Y3M7DT8H29M54S',
    '~P3M7DT8H29M54.321S',
    '~P7DT8H29M54.321S',
    '~PT8H29M54.321S',
    '~PT29M54.321S',
    '~PT54.321S',
    '~PT54S'
];

