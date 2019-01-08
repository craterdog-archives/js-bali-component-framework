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

    describe('Test probability constructors', function() {

        it('should construct using literals', function() {
            expect(elements.Probability.fromLiteral('false').toNumber()).to.equal(0);
            expect(elements.Probability.fromLiteral('.5').toNumber()).to.equal(0.5);
            expect(elements.Probability.fromLiteral('true').toNumber()).to.equal(1);
        });

        it('should construct a default probability of zero', function() {
            const empty = new elements.Probability();
            const number = empty.toNumber();
            expect(number).to.equal(0);
            const string = empty.toString();
            expect(string).to.equal('false');
            expect(empty.toBoolean()).to.be.false;  // jshint ignore:line
        });

        it('should construct a probability of zero', function() {
            const zero = new elements.Probability(0);
            const number = zero.toNumber();
            expect(number).to.equal(0);
            const string = zero.toString();
            expect(string).to.equal('false');
            expect(zero.toBoolean()).to.be.false;  // jshint ignore:line
        });

        it('should construct a probability of one half', function() {
            const half = new elements.Probability(0.5);
            const number = half.toNumber();
            expect(number).to.equal(0.5);
            const string = half.toString();
            expect(string).to.equal('.5');
        });

        it('should construct a probability of one', function() {
            const one = new elements.Probability(1);
            const number = one.toNumber();
            expect(number).to.equal(1);
            const string = one.toString();
            expect(string).to.equal('true');
            expect(one.toBoolean()).to.be.true;  // jshint ignore:line
        });

        it('should throw an exception for negative probabilities', function() {
            expect(
                function() {
                    const negative = new elements.Probability(-1);
                }
            ).to.throw();
        });

        it('should throw an exception for probabilities greater than 1', function() {
            expect(
                function() {
                    const two = new elements.Probability(2);
                }
            ).to.throw();
        });

        it('should average very near 50% for many coin flips', function() {
            const even = new elements.Probability(0.5);
            var heads = 0;
            const tosses = 10000;
            for (var i = 1; i < tosses; i++) {
                if (elements.Probability.coinToss(even)) heads++;
            }
            expect(tosses * 0.485 < heads && heads < tosses * 0.515).to.be.true;  // jshint ignore:line
        });

    });

    describe('Test probability methods', function() {

        it('should return the correct type', function() {
            const type = new elements.Probability(true).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#2YBVYV11HS4CKZ7X8RDJ0RYC7TKKAV2D,$version:v1,$digest:none]>');
        });

    });

    describe('Test probability functions', function() {

        it('should perform the random function correctly', function() {
            for (var i = 0; i < 100; i++) {
                const probability = elements.Probability.random();
                expect(probability.value >= 0 && probability.value <= 1).to.equal(true);
            }
        });

        it('should perform the logical NOT function correctly', function() {
            expect(elements.Probability.not(new elements.Probability(false)).isEqualTo(new elements.Probability(true))).to.equal(true);
            expect(elements.Probability.not(new elements.Probability(true)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.not(new elements.Probability(0.25)).isEqualTo(new elements.Probability(0.75))).to.equal(true);
        });

        it('should perform the logical OR function correctly', function() {
            expect(elements.Probability.or(new elements.Probability(false), new elements.Probability(false)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.or(new elements.Probability(false), new elements.Probability(true)).isEqualTo(new elements.Probability(true))).to.equal(true);
            expect(elements.Probability.or(new elements.Probability(true), new elements.Probability(false)).isEqualTo(new elements.Probability(true))).to.equal(true);
            expect(elements.Probability.or(new elements.Probability(true), new elements.Probability(true)).isEqualTo(new elements.Probability(true))).to.equal(true);
            expect(elements.Probability.or(new elements.Probability(0.75), new elements.Probability(1/3)).isEqualTo(new elements.Probability(0.83))).to.equal(true);
        });

        it('should perform the logical AND function correctly', function() {
            expect(elements.Probability.and(new elements.Probability(false), new elements.Probability(false)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.and(new elements.Probability(false), new elements.Probability(true)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.and(new elements.Probability(true), new elements.Probability(false)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.and(new elements.Probability(true), new elements.Probability(true)).isEqualTo(new elements.Probability(true))).to.equal(true);
            expect(elements.Probability.and(new elements.Probability(0.75), new elements.Probability(1/3)).isEqualTo(new elements.Probability(0.25))).to.equal(true);
        });

        it('should perform the logical SANS function correctly', function() {
            expect(elements.Probability.sans(new elements.Probability(false), new elements.Probability(false)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.sans(new elements.Probability(false), new elements.Probability(true)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.sans(new elements.Probability(true), new elements.Probability(false)).isEqualTo(new elements.Probability(true))).to.equal(true);
            expect(elements.Probability.sans(new elements.Probability(true), new elements.Probability(true)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.sans(new elements.Probability(0.75), new elements.Probability(1/3)).isEqualTo(new elements.Probability(0.5))).to.equal(true);
        });

        it('should perform the logical XOR function correctly', function() {
            expect(elements.Probability.xor(new elements.Probability(false), new elements.Probability(false)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.xor(new elements.Probability(false), new elements.Probability(true)).isEqualTo(new elements.Probability(true))).to.equal(true);
            expect(elements.Probability.xor(new elements.Probability(true), new elements.Probability(false)).isEqualTo(new elements.Probability(true))).to.equal(true);
            expect(elements.Probability.xor(new elements.Probability(true), new elements.Probability(true)).isEqualTo(new elements.Probability(false))).to.equal(true);
            expect(elements.Probability.xor(new elements.Probability(0.75), new elements.Probability(1/3)).isEqualTo(new elements.Probability(0.6))).to.equal(true);
        });

        it("should perform the De Morgan's Laws correctly", function() {
            const A = new elements.Probability(0.75);
            const B = new elements.Probability(1/3);
            expect(elements.Probability.not(elements.Probability.and(A, B)).isEqualTo(elements.Probability.or(elements.Probability.not(A), elements.Probability.not(B)))).to.equal(true);
            expect(elements.Probability.not(elements.Probability.or(A, B)).isEqualTo(elements.Probability.and(elements.Probability.not(A), elements.Probability.not(B)))).to.equal(true);
        });

    });

});
