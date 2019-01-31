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

    describe('Test reserved symbol constructors', function() {

        it('should construct using literals', function() {
            expect(bali.reserved('$$foo').toString()).to.equal('$$foo');
        });

        it('should throw an exception for an empty reserved symbol', function() {
            expect(
                function() {
                    const empty = bali.reserved();
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.reserved('');
                }
            ).to.throw();
        });

        it('should throw an exception for a reserved symbol containing white space', function() {
            expect(
                function() {
                    const bad = bali.reserved(' ');
                }
            ).to.throw();
            expect(
                function() {
                    const bad = bali.reserved('White Space');
                }
            ).to.throw();
        });

        it('should construct a reserved symbol and format the same reserved symbol', function() {
            const reserved = bali.reserved('$$foobar');
            const string = reserved.toString();
            expect(string).to.equal('$$foobar');
            const identifier = reserved.value;
            expect(identifier).to.equal('foobar');
        });

    });

    describe('Test reserved symbol methods', function() {

        it('should return the correct type', function() {
            const type = bali.reserved('$$foobar').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#HKTQFZ328SXYW6Q08CCHW90NQ6FW77KB,$version:v1,$digest:none]>');
        });

    });

});
