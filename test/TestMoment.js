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

    describe('Test moment constructors', function() {

        it('should construct using literals', function() {
            expect(bali.moment('<2017-12-30T17:38:35.726>').toLiteral()).to.equal('<2017-12-30T17:38:35.726>');
            expect(bali.moment('<-10000>').toLiteral()).to.equal('<-10000>');
            // TODO: add tests for parameterized locations
        });

        it('should construct a default moment of zero', function() {
            const time = bali.moment();
            const string = time.toString();
            expect(string.length).to.equal(25);
        });

        it('should construct a moment and format the same', function() {
            tests.forEach(function(expected) {
                const time = bali.moment(expected);
                const string = time.toString();
                expect(string).to.equal(expected);
            });
        });

    });

    describe('Test moment methods', function() {

        it('should return the correct type', function() {
            const type = bali.moment('<2018>').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#NL3T40GDBZ7BLTJPWKT61YCZZHXBYTBR,$version:v1,$digest:none]>');
        });

        it('should compare two moments correctly', function() {
            const first = bali.moment('<2017-12-30T17:38:35>');
            const second = bali.moment('<2017-12-30T17:38:39>');
            expect(first.comparedTo(second)).to.equal(-1);
            expect(first.isEqualTo(first)).to.equal(true);
            expect(second.comparedTo(first)).to.equal(1);
        });

    });

    describe('Test moment functions', function() {

        it('should calculate durations correctly', function() {
            const first = bali.moment('<2017-12-30T17:38:35>');
            const second = bali.moment('<2017-12-30T17:38:39>');
            const duration = bali.moment.duration(first, second);
            const later = bali.moment.later(first, duration);
            const earlier = bali.moment.earlier(later, duration);
            expect(earlier.isEqualTo(first)).to.equal(true);
            expect(later.isEqualTo(second)).to.equal(true);
        });

    });

});

const tests = [
    '<2017-12-30T17:38:35.726>',
    '<2017-12-30T17:38:35>',
    '<2017-12-30T17:38>',
    '<2017-12-30T17>',
    '<2017-12-30>',
    '<2017-12>',
    '<2017>',
    '<-10000>'
];

