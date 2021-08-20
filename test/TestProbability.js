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


describe('Bali Nebula™ Component Framework - Probability', function() {

    describe('Test probability constructors', function() {

        it('should construct probabilities using literals', function() {
            expect(bali.component('.0').toString()).to.equal('.0');
            expect(bali.component('.5').toString()).to.equal('.5');
            expect(bali.component('1.').toString()).to.equal('1.');
        });

        it('should construct probabilities that equal zero', function() {
            expect(bali.probability().toBoolean()).to.equal(false);
            expect(bali.probability().toInteger()).to.equal(0);
            expect(bali.probability().toReal()).to.equal(0);
            expect(bali.probability().toString()).to.equal('.0');
            expect(bali.probability(false).toBoolean()).to.equal(false);
            expect(bali.probability(false).toInteger()).to.equal(0);
            expect(bali.probability(false).toReal()).to.equal(0);
            expect(bali.probability(false).toString()).to.equal('.0');
            expect(bali.probability(0).toBoolean()).to.equal(false);
            expect(bali.probability(0).toInteger()).to.equal(0);
            expect(bali.probability(0).toReal()).to.equal(0);
            expect(bali.probability(0).toString()).to.equal('.0');
        });

        it('should construct probabilities that equal one half', function() {
            expect(bali.probability(0.5).toBoolean()).to.equal(true);
            expect(bali.probability(0.5).toInteger()).to.equal(1);
            expect(bali.probability(0.5).toReal()).to.equal(0.5);
            expect(bali.probability(0.5).toString()).to.equal('.5');
        });

        it('should construct probabilities that equal one', function() {
            expect(bali.probability(true).toBoolean()).to.equal(true);
            expect(bali.probability(true).toInteger()).to.equal(1);
            expect(bali.probability(true).toReal()).to.equal(1);
            expect(bali.probability(true).toString()).to.equal('1.');
            expect(bali.probability(1).toBoolean()).to.equal(true);
            expect(bali.probability(1).toInteger()).to.equal(1);
            expect(bali.probability(1).toReal()).to.equal(1);
            expect(bali.probability(1).toString()).to.equal('1.');
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

    });

    describe('Test probability functions', function() {

        it('should perform the random function correctly', function() {
            const generator = bali.generator();
            for (var i = 0; i < 100; i++) {
                const probability = bali.probability(generator.generateProbability());
                expect(probability.getValue() >= 0 && probability.getValue() <= 1).to.equal(true);
            }
        });

        it('should perform the logical NOT function correctly', function() {
            expect(bali.probability.not(bali.probability.IMPOSSIBLE).isEqualTo(bali.probability.CERTAIN)).to.equal(true);
            expect(bali.probability.not(bali.probability.CERTAIN).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
            expect(bali.probability.not(bali.probability(0.25)).isEqualTo(bali.probability(0.75))).to.equal(true);
        });

        it('should perform the logical OR function correctly', function() {
            expect(bali.probability.or(bali.probability.IMPOSSIBLE, bali.probability.IMPOSSIBLE).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
            expect(bali.probability.or(bali.probability.IMPOSSIBLE, bali.probability.CERTAIN).isEqualTo(bali.probability.CERTAIN)).to.equal(true);
            expect(bali.probability.or(bali.probability.CERTAIN, bali.probability.IMPOSSIBLE).isEqualTo(bali.probability.CERTAIN)).to.equal(true);
            expect(bali.probability.or(bali.probability.CERTAIN, bali.probability.CERTAIN).isEqualTo(bali.probability.CERTAIN)).to.equal(true);
            expect(bali.probability.or(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.83))).to.equal(true);
        });

        it('should perform the logical AND function correctly', function() {
            expect(bali.probability.and(bali.probability.IMPOSSIBLE, bali.probability.IMPOSSIBLE).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
            expect(bali.probability.and(bali.probability.IMPOSSIBLE, bali.probability.CERTAIN).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
            expect(bali.probability.and(bali.probability.CERTAIN, bali.probability.IMPOSSIBLE).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
            expect(bali.probability.and(bali.probability.CERTAIN, bali.probability.CERTAIN).isEqualTo(bali.probability.CERTAIN)).to.equal(true);
            expect(bali.probability.and(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.25))).to.equal(true);
        });

        it('should perform the logical SANS function correctly', function() {
            expect(bali.probability.sans(bali.probability.IMPOSSIBLE, bali.probability.IMPOSSIBLE).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
            expect(bali.probability.sans(bali.probability.IMPOSSIBLE, bali.probability.CERTAIN).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
            expect(bali.probability.sans(bali.probability.CERTAIN, bali.probability.IMPOSSIBLE).isEqualTo(bali.probability.CERTAIN)).to.equal(true);
            expect(bali.probability.sans(bali.probability.CERTAIN, bali.probability.CERTAIN).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
            expect(bali.probability.sans(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.5))).to.equal(true);
        });

        it('should perform the logical XOR function correctly', function() {
            expect(bali.probability.xor(bali.probability.IMPOSSIBLE, bali.probability.IMPOSSIBLE).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
            expect(bali.probability.xor(bali.probability.IMPOSSIBLE, bali.probability.CERTAIN).isEqualTo(bali.probability.CERTAIN)).to.equal(true);
            expect(bali.probability.xor(bali.probability.CERTAIN, bali.probability.IMPOSSIBLE).isEqualTo(bali.probability.CERTAIN)).to.equal(true);
            expect(bali.probability.xor(bali.probability.CERTAIN, bali.probability.CERTAIN).isEqualTo(bali.probability.IMPOSSIBLE)).to.equal(true);
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
