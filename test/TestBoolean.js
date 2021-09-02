/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const debug = 0;
const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../').api(debug);


describe('Bali Nebula™ Component Framework - Boolean', function() {

    describe('Test boolean constructors', function() {

        it('should construct booleans using literals', function() {
            expect(bali.component('false').toString()).to.equal('false');
            expect(bali.component('true').toString()).to.equal('true');
        });

        it('should construct booleans that equal zero', function() {
            expect(bali.boolean().toBoolean()).to.equal(false);
            expect(bali.boolean().toInteger()).to.equal(0);
            expect(bali.boolean().toReal()).to.equal(0);
            //expect(bali.boolean().toString()).to.equal('false');
            expect(bali.boolean(false).toBoolean()).to.equal(false);
            expect(bali.boolean(false).toInteger()).to.equal(0);
            expect(bali.boolean(false).toReal()).to.equal(0);
            //expect(bali.boolean(false).toString()).to.equal('false');
            expect(bali.boolean(0).toBoolean()).to.equal(false);
            expect(bali.boolean(0).toInteger()).to.equal(0);
            expect(bali.boolean(0).toReal()).to.equal(0);
            //expect(bali.boolean(0).toString()).to.equal('false');
        });

        it('should construct booleans that equal one', function() {
            expect(bali.boolean(true).toBoolean()).to.equal(true);
            expect(bali.boolean(true).toInteger()).to.equal(1);
            expect(bali.boolean(true).toReal()).to.equal(1);
            //expect(bali.boolean(true).toString()).to.equal('true');
            expect(bali.boolean(1).toBoolean()).to.equal(true);
            expect(bali.boolean(1).toInteger()).to.equal(1);
            expect(bali.boolean(1).toReal()).to.equal(1);
            //expect(bali.boolean(1).toString()).to.equal('true');
        });

        it('should throw an exception for negative booleans', function() {
            expect(
                function() {
                    const negative = bali.boolean(-1);
                }
            ).to.throw();
        });

        it('should throw an exception for booleans greater than 1', function() {
            expect(
                function() {
                    const two = bali.boolean(2);
                }
            ).to.throw();
        });

    });

    describe('Test boolean functions', function() {

        it('should perform the logical NOT function correctly', function() {
            expect(bali.boolean.not(bali.boolean.FALSE).isEqualTo(bali.boolean.TRUE)).to.equal(true);
            expect(bali.boolean.not(bali.boolean.TRUE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
        });

        it('should perform the logical OR function correctly', function() {
            expect(bali.boolean.or(bali.boolean.FALSE, bali.boolean.FALSE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
            expect(bali.boolean.or(bali.boolean.FALSE, bali.boolean.TRUE).isEqualTo(bali.boolean.TRUE)).to.equal(true);
            expect(bali.boolean.or(bali.boolean.TRUE, bali.boolean.FALSE).isEqualTo(bali.boolean.TRUE)).to.equal(true);
            expect(bali.boolean.or(bali.boolean.TRUE, bali.boolean.TRUE).isEqualTo(bali.boolean.TRUE)).to.equal(true);
        });

        it('should perform the logical AND function correctly', function() {
            expect(bali.boolean.and(bali.boolean.FALSE, bali.boolean.FALSE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
            expect(bali.boolean.and(bali.boolean.FALSE, bali.boolean.TRUE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
            expect(bali.boolean.and(bali.boolean.TRUE, bali.boolean.FALSE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
            expect(bali.boolean.and(bali.boolean.TRUE, bali.boolean.TRUE).isEqualTo(bali.boolean.TRUE)).to.equal(true);
        });

        it('should perform the logical SANS function correctly', function() {
            expect(bali.boolean.sans(bali.boolean.FALSE, bali.boolean.FALSE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
            expect(bali.boolean.sans(bali.boolean.FALSE, bali.boolean.TRUE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
            expect(bali.boolean.sans(bali.boolean.TRUE, bali.boolean.FALSE).isEqualTo(bali.boolean.TRUE)).to.equal(true);
            expect(bali.boolean.sans(bali.boolean.TRUE, bali.boolean.TRUE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
        });

        it('should perform the logical XOR function correctly', function() {
            expect(bali.boolean.xor(bali.boolean.FALSE, bali.boolean.FALSE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
            expect(bali.boolean.xor(bali.boolean.FALSE, bali.boolean.TRUE).isEqualTo(bali.boolean.TRUE)).to.equal(true);
            expect(bali.boolean.xor(bali.boolean.TRUE, bali.boolean.FALSE).isEqualTo(bali.boolean.TRUE)).to.equal(true);
            expect(bali.boolean.xor(bali.boolean.TRUE, bali.boolean.TRUE).isEqualTo(bali.boolean.FALSE)).to.equal(true);
        });

        it("should perform the De Morgan's Laws correctly", function() {
            const A = bali.boolean(1);
            const B = bali.boolean(0);
            expect(bali.boolean.not(bali.boolean.and(A, B)).isEqualTo(bali.boolean.or(bali.boolean.not(A), bali.boolean.not(B)))).to.equal(true);
            expect(bali.boolean.not(bali.boolean.or(A, B)).isEqualTo(bali.boolean.and(bali.boolean.not(A), bali.boolean.not(B)))).to.equal(true);
        });

    });

});