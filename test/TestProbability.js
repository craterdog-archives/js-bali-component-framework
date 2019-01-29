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

        it('should construct using literals', function() {
            expect(bali.probability('false').toNumber()).to.equal(0);
            expect(bali.probability('.5').toNumber()).to.equal(0.5);
            expect(bali.probability('true').toNumber()).to.equal(1);
        });

        it('should construct a default probability of zero', function() {
            const empty = bali.probability();
            const number = empty.toNumber();
            expect(number).to.equal(0);
            const string = empty.toString();
            expect(string).to.equal('false');
            expect(empty.toBoolean()).to.be.false;  // jshint ignore:line
        });

        it('should construct a probability of zero', function() {
            const zero = bali.probability(0);
            const number = zero.toNumber();
            expect(number).to.equal(0);
            const string = zero.toString();
            expect(string).to.equal('false');
            expect(zero.toBoolean()).to.be.false;  // jshint ignore:line
            expect(bali.probability.coinToss(zero).toBoolean()).to.equal(false);
        });

        it('should construct a probability of one half', function() {
            const half = bali.probability(0.5);
            const number = half.toNumber();
            expect(number).to.equal(0.5);
            const string = half.toString();
            expect(string).to.equal('.5');
        });

        it('should construct a probability of one', function() {
            const one = bali.probability(1);
            const number = one.toNumber();
            expect(number).to.equal(1);
            const string = one.toString();
            expect(string).to.equal('true');
            expect(one.toBoolean()).to.be.true;  // jshint ignore:line
            expect(bali.probability.coinToss(one).toBoolean()).to.equal(true);
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
            const type = bali.probability(true).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#2YBVYV11HS4CKZ7X8RDJ0RYC7TKKAV2D,$version:v1,$digest:none]>');
        });

    });

    describe('Test probability functions', function() {

        it('should perform the random function correctly', function() {
            for (var i = 0; i < 100; i++) {
                const probability = bali.probability.random();
                expect(probability.value >= 0 && probability.value <= 1).to.equal(true);
            }
        });

        it('should perform the logical NOT function correctly', function() {
            expect(bali.probability.not(bali.probability(false)).isEqualTo(bali.probability(true))).to.equal(true);
            expect(bali.probability.not(bali.probability(true)).isEqualTo(bali.probability(false))).to.equal(true);
            expect(bali.probability.not(bali.probability(0.25)).isEqualTo(bali.probability(0.75))).to.equal(true);
        });

        it('should perform the logical OR function correctly', function() {
            expect(bali.probability.or(bali.probability(false), bali.probability(false)).isEqualTo(bali.probability(false))).to.equal(true);
            expect(bali.probability.or(bali.probability(false), bali.probability(true)).isEqualTo(bali.probability(true))).to.equal(true);
            expect(bali.probability.or(bali.probability(true), bali.probability(false)).isEqualTo(bali.probability(true))).to.equal(true);
            expect(bali.probability.or(bali.probability(true), bali.probability(true)).isEqualTo(bali.probability(true))).to.equal(true);
            expect(bali.probability.or(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.83))).to.equal(true);
        });

        it('should perform the logical AND function correctly', function() {
            expect(bali.probability.and(bali.probability(false), bali.probability(false)).isEqualTo(bali.probability(false))).to.equal(true);
            expect(bali.probability.and(bali.probability(false), bali.probability(true)).isEqualTo(bali.probability(false))).to.equal(true);
            expect(bali.probability.and(bali.probability(true), bali.probability(false)).isEqualTo(bali.probability(false))).to.equal(true);
            expect(bali.probability.and(bali.probability(true), bali.probability(true)).isEqualTo(bali.probability(true))).to.equal(true);
            expect(bali.probability.and(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.25))).to.equal(true);
        });

        it('should perform the logical SANS function correctly', function() {
            expect(bali.probability.sans(bali.probability(false), bali.probability(false)).isEqualTo(bali.probability(false))).to.equal(true);
            expect(bali.probability.sans(bali.probability(false), bali.probability(true)).isEqualTo(bali.probability(false))).to.equal(true);
            expect(bali.probability.sans(bali.probability(true), bali.probability(false)).isEqualTo(bali.probability(true))).to.equal(true);
            expect(bali.probability.sans(bali.probability(true), bali.probability(true)).isEqualTo(bali.probability(false))).to.equal(true);
            expect(bali.probability.sans(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.5))).to.equal(true);
        });

        it('should perform the logical XOR function correctly', function() {
            expect(bali.probability.xor(bali.probability(false), bali.probability(false)).isEqualTo(bali.probability(false))).to.equal(true);
            expect(bali.probability.xor(bali.probability(false), bali.probability(true)).isEqualTo(bali.probability(true))).to.equal(true);
            expect(bali.probability.xor(bali.probability(true), bali.probability(false)).isEqualTo(bali.probability(true))).to.equal(true);
            expect(bali.probability.xor(bali.probability(true), bali.probability(true)).isEqualTo(bali.probability(false))).to.equal(true);
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
