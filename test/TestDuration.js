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

    describe('Test duration constructors', function() {

        it('should construct using literals', function() {
            expect(bali.duration('~P0D').toNumber()).to.equal(0);
            expect(bali.duration('~P5W').toLiteral()).to.equal('~P35D');
        });

        it('should construct a default duration of zero', function() {
            const duration = bali.duration();
            const string = duration.toLiteral();
            expect(string).to.equal(tests[0]);
        });

        it('should construct a duration of days from weeks', function() {
            const duration = bali.duration('~P5W');
            const string = duration.toLiteral();
            expect(string).to.equal('~P35D');
        });

        it('should construct a duration and format it the same', function() {
            tests.forEach(function(expected) {
                const duration = bali.duration(expected);
                const string = duration.toLiteral();
                expect(string).to.equal(expected);
            });
        });

    });

    describe('Test duration methods', function() {

        it('should return the correct type', function() {
            const type = bali.duration('~P0D').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#Y6572KBG2SBYSCBHR88KB1GR616LFK8N,$version:v1,$digest:none]>');
        });

        it('should compare two durations correctly', function() {
            const days = bali.duration('~P7D');
            const week = bali.duration('~P1W');
            const month = bali.duration('~P1M');
            expect(week.comparedTo(month)).to.equal(-1);
            expect(week.isEqualTo(days)).to.equal(true);
            expect(month.comparedTo(days)).to.equal(1);
        });

    });

    describe('Test duration functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(bali.duration.inverse(bali.duration('~P3D')).isEqualTo(bali.duration('~-P3D'))).to.equal(true);
            expect(bali.duration.inverse(bali.duration('~-P2Y3M6D')).isEqualTo(bali.duration('~P2Y3M6D'))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(bali.duration.sum(bali.duration('~P2Y3M6D'), bali.duration('~P2M4D')).isEqualTo(bali.duration('~P2Y5M10D'))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(bali.duration.difference(bali.duration('~P2Y3M6D'), bali.duration('~P2M4D')).isEqualTo(bali.duration('~P2Y1M2D'))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(bali.duration.scaled(bali.duration('~P6D'), 3).isEqualTo(bali.duration('~P18D'))).to.equal(true);
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

