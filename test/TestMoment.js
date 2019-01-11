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

    describe('Test moment constructors', function() {

        it('should construct using literals', function() {
            expect(elements.Moment.fromLiteral('<2017-12-30T17:38:35.726>').toLiteral()).to.equal('<2017-12-30T17:38:35.726>');
            expect(elements.Moment.fromLiteral('<-10000>').toLiteral()).to.equal('<-10000>');
            // TODO: add tests for parameterized locations
        });

        it('should construct a default moment of zero', function() {
            const time = new elements.Moment();
            const string = time.toString();
            expect(string.length).to.equal(25);
        });

        it('should construct a moment and format the same', function() {
            tests.forEach(function(expected) {
                const time = new elements.Moment(expected);
                const string = time.toString();
                expect(string).to.equal('<' + expected + '>');
            });
        });

    });

    describe('Test moment methods', function() {

        it('should return the correct type', function() {
            const type = new elements.Moment('2018').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#NL3T40GDBZ7BLTJPWKT61YCZZHXBYTBR,$version:v1,$digest:none]>');
        });

    });

});

const tests = [
    '2017-12-30T17:38:35.726',
    '2017-12-30T17:38:35',
    '2017-12-30T17:38',
    '2017-12-30T17',
    '2017-12-30',
    '2017-12',
    '2017',
    '-10000'
];

