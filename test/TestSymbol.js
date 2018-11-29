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
var Symbol = require('../src/elements/Symbol').Symbol;

describe('Bali Component Framework™', function() {

    describe('Test symbol constructors', function() {

        it('should throw an exception for an empty symbol', function() {
            expect(
                function() {
                    var empty = new Symbol();
                }
            ).to.throw();
            expect(
                function() {
                    var empty = new Symbol('');
                }
            ).to.throw();
        });

        it('should throw an exception for a symbol containing white space', function() {
            expect(
                function() {
                    var bad = new Symbol(' ');
                }
            ).to.throw();
            expect(
                function() {
                    var bad = new Symbol('White Space');
                }
            ).to.throw();
        });

        it('should construct a symbol and format the same symbol', function() {
            var symbol = new Symbol('$foobar');
            var string = symbol.toString();
            expect(string).to.equal('$foobar');
            var identifier = symbol.getIdentifier();
            expect(identifier).to.equal('foobar');
        });

    });

});
