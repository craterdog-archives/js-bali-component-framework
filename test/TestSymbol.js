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
var Reserved = require('../src/elements/Reserved').Reserved;

describe('Bali Component Framework™', function() {

    describe('Test reserved constructors', function() {

        it('should throw an exception for an empty reserved', function() {
            expect(
                function() {
                    var empty = new Reserved();
                }
            ).to.throw();
            expect(
                function() {
                    var empty = new Reserved('');
                }
            ).to.throw();
        });

        it('should throw an exception for a reserved containing white space', function() {
            expect(
                function() {
                    var bad = new Reserved(' ');
                }
            ).to.throw();
            expect(
                function() {
                    var bad = new Reserved('White Space');
                }
            ).to.throw();
        });

        it('should construct a reserved and format the same reserved', function() {
            var reserved = new Reserved('$_foobar_');
            var string = reserved.toString();
            expect(string).to.equal('$_foobar_');
            var identifier = reserved.getIdentifier();
            expect(identifier).to.equal('_foobar_');
        });

    });

});
