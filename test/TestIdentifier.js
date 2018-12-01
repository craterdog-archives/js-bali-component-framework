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
var types = require('../src/abstractions/Types');
var Identifier = require('../src/elements/Identifier').Identifier;

describe('Bali Component Framework™', function() {

    describe('Test identifier constructors', function() {

        it('should throw an exception for an empty identifier', function() {
            expect(
                function() {
                    var empty = new Identifier(types.VARIABLE);
                }
            ).to.throw();
            expect(
                function() {
                    var empty = new Identifier(types.VARIABLE, '');
                }
            ).to.throw();
        });

        it('should throw an exception for a identifier containing white space', function() {
            expect(
                function() {
                    var bad = new Identifier(types.VARIABLE, ' ');
                }
            ).to.throw();
            expect(
                function() {
                    var bad = new Identifier(types.VARIABLE, 'White Space');
                }
            ).to.throw();
        });

        it('should construct a identifier and format the same identifier', function() {
            var identifier = new Identifier(types.VARIABLE, 'foobar');
            var source = identifier.toString();
            expect(source).to.equal('foobar');
            var string = identifier.toString();
            expect(string).to.equal('foobar');
        });

    });

    describe('Test identifier methods', function() {

        it('should return the correct type', function() {
            var type = new Identifier(types.FUNCTION, 'function').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#YFZN88KCZVJFCBK9VZ7BSGMRQKDB9XY1,$version:v1,$digest:none]>');

            type = new Identifier(types.MESSAGE, 'message').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#1LLBH0287FD3GV4LVS4GC12S60DR54DZ,$version:v1,$digest:none]>');

            type = new Identifier(types.VARIABLE, 'variable').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#CBZ2CQLQM3JXMQT8P041PXGWW6MWB4J0,$version:v1,$digest:none]>');

        });

    });

});
