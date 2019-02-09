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

    describe('Test probability constructors', function() {

        it('should construct probabilities using literals', function() {
            expect(bali.parse('false').toString()).to.equal('false');
            expect(bali.parse('.5').toString()).to.equal('.5');
            expect(bali.parse('true').toString()).to.equal('true');
        });

        it('should construct probabilities that equal zero', function() {
            expect(bali.probability().toBoolean()).to.equal(false);
            expect(bali.probability().toNumber()).to.equal(0);
            expect(bali.probability().toString()).to.equal('false');
            expect(bali.probability(0).toBoolean()).to.equal(false);
            expect(bali.probability(0).toNumber()).to.equal(0);
            expect(bali.probability(0).toString()).to.equal('false');
        });

        it('should construct probabilities that equal one half', function() {
            expect(bali.probability(0.5).toBoolean()).to.equal(true);
            expect(bali.probability(0.5).toNumber()).to.equal(0.5);
            expect(bali.probability(0.5).toString()).to.equal('.5');
        });

        it('should construct probabilities that equal one', function() {
            expect(bali.probability(1).toBoolean()).to.equal(true);
            expect(bali.probability(1).toNumber()).to.equal(1);
            expect(bali.probability(1).toString()).to.equal('true');
        });

        it('should throw an exception for negative probabilities', function() {
            expect(
                function() {
                    const negative = bali.probability(-1);
                }
            ).to.throw();
        });

        it('should throw an exception for probabilities greater than 1', function() {
            expect(
                function() {
                    const two = bali.probability(2);
                }
            ).to.throw();
        });

        it('should average very near 50% for many coin flips', function() {
            const even = bali.probability(0.5);
            var heads = 0;
            const tosses = 10000;
            for (var i = 1; i < tosses; i++) {
                if (bali.probability.coinToss(even).toBoolean()) heads++;
            }
            expect(tosses * 0.485 < heads && heads < tosses * 0.515).to.be.true;  // jshint ignore:line
        });

    });

    describe('Test probability methods', function() {

        it('should return the correct type', function() {
            const type = bali.probability().getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#2YBVYV11HS4CKZ7X8RDJ0RYC7TKKAV2D,$version:v1,$digest:none]>');
        });

    });

    describe('Test probability functions', function() {

        it('should perform the random function correctly', function() {
            for (var i = 0; i < 100; i++) {
                const probability = bali.probability.random();
                expect(probability.getValue() >= 0 && probability.getValue() <= 1).to.equal(true);
            }
        });

        it('should perform the logical NOT function correctly', function() {
            expect(bali.probability.not(bali.FALSE).isEqualTo(bali.TRUE)).to.equal(true);
            expect(bali.probability.not(bali.TRUE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.not(bali.probability(0.25)).isEqualTo(bali.probability(0.75))).to.equal(true);
        });

        it('should perform the logical OR function correctly', function() {
            expect(bali.probability.or(bali.FALSE, bali.FALSE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.or(bali.FALSE, bali.TRUE).isEqualTo(bali.TRUE)).to.equal(true);
            expect(bali.probability.or(bali.TRUE, bali.FALSE).isEqualTo(bali.TRUE)).to.equal(true);
            expect(bali.probability.or(bali.TRUE, bali.TRUE).isEqualTo(bali.TRUE)).to.equal(true);
            expect(bali.probability.or(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.83))).to.equal(true);
        });

        it('should perform the logical AND function correctly', function() {
            expect(bali.probability.and(bali.FALSE, bali.FALSE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.and(bali.FALSE, bali.TRUE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.and(bali.TRUE, bali.FALSE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.and(bali.TRUE, bali.TRUE).isEqualTo(bali.TRUE)).to.equal(true);
            expect(bali.probability.and(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.25))).to.equal(true);
        });

        it('should perform the logical SANS function correctly', function() {
            expect(bali.probability.sans(bali.FALSE, bali.FALSE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.sans(bali.FALSE, bali.TRUE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.sans(bali.TRUE, bali.FALSE).isEqualTo(bali.TRUE)).to.equal(true);
            expect(bali.probability.sans(bali.TRUE, bali.TRUE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.sans(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.5))).to.equal(true);
        });

        it('should perform the logical XOR function correctly', function() {
            expect(bali.probability.xor(bali.FALSE, bali.FALSE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.xor(bali.FALSE, bali.TRUE).isEqualTo(bali.TRUE)).to.equal(true);
            expect(bali.probability.xor(bali.TRUE, bali.FALSE).isEqualTo(bali.TRUE)).to.equal(true);
            expect(bali.probability.xor(bali.TRUE, bali.TRUE).isEqualTo(bali.FALSE)).to.equal(true);
            expect(bali.probability.xor(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.6))).to.equal(true);
        });

        it("should perform the De Morgan's Laws correctly", function() {
            const A = bali.probability(0.75);
            const B = bali.probability(1/3);
            expect(bali.probability.not(bali.probability.and(A, B)).isEqualTo(bali.probability.or(bali.probability.not(A), bali.probability.not(B)))).to.equal(true);
            expect(bali.probability.not(bali.probability.or(A, B)).isEqualTo(bali.probability.and(bali.probability.not(A), bali.probability.not(B)))).to.equal(true);
        });

    });

});
