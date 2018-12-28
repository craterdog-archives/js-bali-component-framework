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

        it('should construct a default probability of zero', function() {
            var empty = new elements.Probability();
            var number = empty.toNumber();
            expect(number).to.equal(0);
            var string = empty.toString();
            expect(string).to.equal('false');
            expect(empty.toBoolean()).to.be.false;  // jshint ignore:line
        });

        it('should construct a probability of zero', function() {
            var zero = new elements.Probability(0);
            var number = zero.toNumber();
            expect(number).to.equal(0);
            var string = zero.toString();
            expect(string).to.equal('false');
            expect(zero.toBoolean()).to.be.false;  // jshint ignore:line
        });

        it('should construct a probability of one half', function() {
            var half = new elements.Probability(0.5);
            var number = half.toNumber();
            expect(number).to.equal(0.5);
            var string = half.toString();
            expect(string).to.equal('.5');
        });

        it('should construct a probability of one', function() {
            var one = new elements.Probability(1);
            var number = one.toNumber();
            expect(number).to.equal(1);
            var string = one.toString();
            expect(string).to.equal('true');
            expect(one.toBoolean()).to.be.true;  // jshint ignore:line
        });

        it('should throw an exception for negative probabilities', function() {
            expect(
                function() {
                    var negative = new elements.Probability(-1);
                }
            ).to.throw();
        });

        it('should throw an exception for probabilities greater than 1', function() {
            expect(
                function() {
                    var two = new elements.Probability(2);
                }
            ).to.throw();
        });

        it('should average very near 50% for many coin flips', function() {
            var even = new elements.Probability(0.5);
            var heads = 0;
            var tosses = 10000;
            for (var i = 1; i < tosses; i++) {
                if (even.toBoolean()) heads++;
            }
            expect(tosses * 0.485 < heads && heads < tosses * 0.515).to.be.true;  // jshint ignore:line
        });

    });

    describe('Test probability methods', function() {

        it('should return the correct type', function() {
            var type = elements.Probability.TRUE.getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#2YBVYV11HS4CKZ7X8RDJ0RYC7TKKAV2D,$version:v1,$digest:none]>');
        });

    });

    describe('Test probability functions', function() {

        it('should perform the random function correctly', function() {
            for (var i = 0; i < 100; i++) {
                var probability = elements.Probability.randomProbability();
                expect(probability.value >= 0 && probability.value <= 1).to.equal(true);
            }
        });

        it('should perform the inverse function correctly', function() {
            expect(elements.Probability.inverse(elements.Probability.FALSE)).to.equal(elements.Probability.TRUE);
            expect(elements.Probability.inverse(elements.Probability.TRUE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.inverse(new elements.Probability(0.25)).isEqualTo(new elements.Probability(0.75))).to.equal(true);
            expect(elements.Probability.inverse(new elements.Probability('.25')).isEqualTo(new elements.Probability('.75'))).to.equal(true);
        });

        it('should perform the union function correctly', function() {
            expect(elements.Probability.or(elements.Probability.FALSE, elements.Probability.FALSE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.or(elements.Probability.FALSE, elements.Probability.TRUE)).to.equal(elements.Probability.TRUE);
            expect(elements.Probability.or(elements.Probability.TRUE, elements.Probability.FALSE)).to.equal(elements.Probability.TRUE);
            expect(elements.Probability.or(elements.Probability.TRUE, elements.Probability.TRUE)).to.equal(elements.Probability.TRUE);
            expect(elements.Probability.or(new elements.Probability(0.75), new elements.Probability(1/3)).isEqualTo(new elements.Probability(0.83))).to.equal(true);
        });

        it('should perform the intersection function correctly', function() {
            expect(elements.Probability.and(elements.Probability.FALSE, elements.Probability.FALSE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.and(elements.Probability.FALSE, elements.Probability.TRUE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.and(elements.Probability.TRUE, elements.Probability.FALSE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.and(elements.Probability.TRUE, elements.Probability.TRUE)).to.equal(elements.Probability.TRUE);
            expect(elements.Probability.and(new elements.Probability(0.75), new elements.Probability(1/3)).isEqualTo(new elements.Probability(0.25))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(elements.Probability.sans(elements.Probability.FALSE, elements.Probability.FALSE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.sans(elements.Probability.FALSE, elements.Probability.TRUE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.sans(elements.Probability.TRUE, elements.Probability.FALSE)).to.equal(elements.Probability.TRUE);
            expect(elements.Probability.sans(elements.Probability.TRUE, elements.Probability.TRUE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.sans(new elements.Probability(0.75), new elements.Probability(1/3)).isEqualTo(new elements.Probability(0.5))).to.equal(true);
        });

        it('should perform the exclusive function correctly', function() {
            expect(elements.Probability.xor(elements.Probability.FALSE, elements.Probability.FALSE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.xor(elements.Probability.FALSE, elements.Probability.TRUE)).to.equal(elements.Probability.TRUE);
            expect(elements.Probability.xor(elements.Probability.TRUE, elements.Probability.FALSE)).to.equal(elements.Probability.TRUE);
            expect(elements.Probability.xor(elements.Probability.TRUE, elements.Probability.TRUE)).to.equal(elements.Probability.FALSE);
            expect(elements.Probability.xor(new elements.Probability(0.75), new elements.Probability(1/3)).isEqualTo(new elements.Probability(0.6))).to.equal(true);
        });

    });

});
