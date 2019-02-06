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

        it('should construct reserved symbols using literals', function() {
            expect(bali.parse('$$foo').toString()).to.equal('$$foo');
            expect(bali.parse('$$bar').toString()).to.equal('$$bar');
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
            expect(
                function() {
                    const empty = bali.parse('$$');
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

    });

    describe('Test reserved symbol methods', function() {

        it('should return the correct type', function() {
            const type = bali.parse('$$foobar').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#HKTQFZ328SXYW6Q08CCHW90NQ6FW77KB,$version:v1,$digest:none]>');
        });

    });

});
