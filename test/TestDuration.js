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


describe('Bali Component Framework™', function() {

    describe('Test time duration constructors', function() {

        it('should construct time durations using literals', function() {
            expect(bali.parse('~P0D').toBoolean()).to.equal(false);
            expect(bali.parse('~P0D').toNumber()).to.equal(0);
            expect(bali.parse('~P0D').toString()).to.equal('~P0D');
            expect(bali.parse('~P3M7DT8H29M54.321S').toBoolean()).to.equal(true);
            expect(bali.parse('~P3M7DT8H29M54.321S').toNumber()).to.equal(8497794321);
            expect(bali.parse('~P3M7DT8H29M54.321S').toString()).to.equal('~P3M7DT8H29M54.321S');
        });

        it('should construct time durations that equal zero', function() {
            expect(bali.duration().toBoolean()).to.equal(false);
            expect(bali.duration().toNumber()).to.equal(0);
            expect(bali.duration().toString()).to.equal('~P0D');
            expect(bali.duration(0).toBoolean()).to.equal(false);
            expect(bali.duration(0).toNumber()).to.equal(0);
            expect(bali.duration(0).toString()).to.equal('~P0D');
        });

        it('should construct a time duration of days from weeks', function() {
            const duration = bali.parse('~P5W');
            const string = duration.toString();
            expect(string).to.equal('~P35D');
        });

        it('should construct a time duration and format it the same', function() {
            tests.forEach(function(expected) {
                const duration = bali.parse(expected);
                const string = duration.toString();
                expect(string).to.equal(expected);
            });
        });

    });

    describe('Test time duration methods', function() {

        it('should return the correct type', function() {
            const type = bali.duration().getTypeReference();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#Y6572KBG2SBYSCBHR88KB1GR616LFK8N,$version:v1,$digest:none]>');
        });

        it('should compare two time durations correctly', function() {
            const days = bali.parse('~P7D');
            const week = bali.parse('~P1W');
            const month = bali.parse('~P1M');
            expect(week.comparedTo(month)).to.equal(-1);
            expect(week.isEqualTo(days)).to.equal(true);
            expect(month.comparedTo(days)).to.equal(1);
        });

    });

    describe('Test time duration functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(bali.duration.inverse(bali.parse('~P3D')).isEqualTo(bali.parse('~-P3D'))).to.equal(true);
            expect(bali.duration.inverse(bali.parse('~-P2Y3M6D')).isEqualTo(bali.parse('~P2Y3M6D'))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(bali.duration.sum(bali.parse('~P2Y3M6D'), bali.parse('~P2M4D')).isEqualTo(bali.parse('~P2Y5M10D'))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(bali.duration.difference(bali.parse('~P2Y3M6D'), bali.parse('~P2M4D')).isEqualTo(bali.parse('~P2Y1M2D'))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(bali.duration.scaled(bali.parse('~P6D'), 3).isEqualTo(bali.parse('~P18D'))).to.equal(true);
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

