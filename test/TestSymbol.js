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

    describe('Test symbol constructors', function() {

        it('should throw an exception for an empty symbol', function() {
            expect(
                function() {
                    const empty = new elements.Symbol();
                }
            ).to.throw();
            expect(
                function() {
                    const empty = new elements.Symbol('');
                }
            ).to.throw();
        });

        it('should throw an exception for a symbol containing white space', function() {
            expect(
                function() {
                    const bad = new elements.Symbol(' ');
                }
            ).to.throw();
            expect(
                function() {
                    const bad = new elements.Symbol('White Space');
                }
            ).to.throw();
        });

        it('should construct a symbol and format the same symbol', function() {
            const symbol = new elements.Symbol('$foobar');
            const string = symbol.toString();
            expect(string).to.equal('$foobar');
            const identifier = symbol.value;
            expect(identifier).to.equal('foobar');
        });

    });

    describe('Test symbol methods', function() {

        it('should return the correct type', function() {
            const type = new elements.Symbol('$foobar').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#R4N28VY9D39002WL3PSM6ZSXDC6FT730,$version:v1,$digest:none]>');
        });

    });

});
