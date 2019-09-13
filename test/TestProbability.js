/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const debug = 2;
const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../').api(debug);


describe('Bali Nebula™ Component Framework - Probability', function() {

    describe('Test probability constructors', function() {

        it('should construct probabilities using literals', function() {
            expect(bali.component('false').toString()).to.equal('false');
            expect(bali.component('.5').toString()).to.equal('.5');
            expect(bali.component('true').toString()).to.equal('true');
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
            expect(bali.probability.not(bali.probability.FALSE).isEqualTo(bali.probability.TRUE)).to.equal(true);
            expect(bali.probability.not(bali.probability.TRUE).isEqualTo(bali.probability.FALSE)).to.equal(true);
            expect(bali.probability.not(bali.probability(0.25)).isEqualTo(bali.probability(0.75))).to.equal(true);
        });

        it('should perform the logical OR function correctly', function() {
            expect(bali.probability.or(bali.probability.FALSE, bali.probability.FALSE).isEqualTo(bali.probability.FALSE)).to.equal(true);
            expect(bali.probability.or(bali.probability.FALSE, bali.probability.TRUE).isEqualTo(bali.probability.TRUE)).to.equal(true);
            expect(bali.probability.or(bali.probability.TRUE, bali.probability.FALSE).isEqualTo(bali.probability.TRUE)).to.equal(true);
            expect(bali.probability.or(bali.probability.TRUE, bali.probability.TRUE).isEqualTo(bali.probability.TRUE)).to.equal(true);
            expect(bali.probability.or(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.83))).to.equal(true);
        });

        it('should perform the logical AND function correctly', function() {
            expect(bali.probability.and(bali.probability.FALSE, bali.probability.FALSE).isEqualTo(bali.probability.FALSE)).to.equal(true);
            expect(bali.probability.and(bali.probability.FALSE, bali.probability.TRUE).isEqualTo(bali.probability.FALSE)).to.equal(true);
            expect(bali.probability.and(bali.probability.TRUE, bali.probability.FALSE).isEqualTo(bali.probability.FALSE)).to.equal(true);
            expect(bali.probability.and(bali.probability.TRUE, bali.probability.TRUE).isEqualTo(bali.probability.TRUE)).to.equal(true);
            expect(bali.probability.and(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.25))).to.equal(true);
        });

        it('should perform the logical SANS function correctly', function() {
            expect(bali.probability.sans(bali.probability.FALSE, bali.probability.FALSE).isEqualTo(bali.probability.FALSE)).to.equal(true);
            expect(bali.probability.sans(bali.probability.FALSE, bali.probability.TRUE).isEqualTo(bali.probability.FALSE)).to.equal(true);
            expect(bali.probability.sans(bali.probability.TRUE, bali.probability.FALSE).isEqualTo(bali.probability.TRUE)).to.equal(true);
            expect(bali.probability.sans(bali.probability.TRUE, bali.probability.TRUE).isEqualTo(bali.probability.FALSE)).to.equal(true);
            expect(bali.probability.sans(bali.probability(0.75), bali.probability(1/3)).isEqualTo(bali.probability(0.5))).to.equal(true);
        });

        it('should perform the logical XOR function correctly', function() {
            expect(bali.probability.xor(bali.probability.FALSE, bali.probability.FALSE).isEqualTo(bali.probability.FALSE)).to.equal(true);
            expect(bali.probability.xor(bali.probability.FALSE, bali.probability.TRUE).isEqualTo(bali.probability.TRUE)).to.equal(true);
            expect(bali.probability.xor(bali.probability.TRUE, bali.probability.FALSE).isEqualTo(bali.probability.TRUE)).to.equal(true);
            expect(bali.probability.xor(bali.probability.TRUE, bali.probability.TRUE).isEqualTo(bali.probability.FALSE)).to.equal(true);
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
