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

    describe('Test symbol constructors', function() {

        it('should construct symbols using literals', function() {
            expect(bali.parse('$foo').toString()).to.equal('$foo');
            expect(bali.parse('$bar').toString()).to.equal('$bar');
        });

        it('should throw an exception for an empty symbol', function() {
            expect(
                function() {
                    const empty = bali.symbol();
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.symbol('');
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.parse('$');
                }
            ).to.throw();
        });

        it('should throw an exception for a symbol containing white space', function() {
            expect(
                function() {
                    const bad = bali.symbol(' ');
                }
            ).to.throw();
            expect(
                function() {
                    const bad = bali.symbol('White Space');
                }
            ).to.throw();
        });

    });

    describe('Test symbol methods', function() {

        it('should return the correct type', function() {
            const type = bali.parse('$foobar').getTypeReference();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#R4N28VY9D39002WL3PSM6ZSXDC6FT730,$version:v1,$digest:none]>');
        });

    });

});
