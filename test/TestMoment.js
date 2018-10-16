/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var mocha = require('mocha');
var expect = require('chai').expect;
var Moment = require('../src/elements/Moment').Moment;

describe('Bali Document Notation™', function() {

    describe('Test moment constructors', function() {

        it('should construct a default moment of zero', function() {
            var time = new Moment();
            var string = time.toSource();
            expect(string.length).to.equal(25);
        });

        it('should construct a moment and format the same', function() {
            tests.forEach(function(expected) {
                var time = new Moment(expected);
                var string = time.toSource();
                expect(string).to.equal(expected);
            });
        });

    });

});

var tests = [
    '<2017-12-30T17:38:35.726>',
    '<2017-12-30T17:38:35>',
    '<2017-12-30T17:38>',
    '<2017-12-30T17>',
    '<2017-12-30>',
    '<2017-12>',
    '<2017>',
    '<-10000>'
];

