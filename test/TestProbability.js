/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var mocha = require('mocha');
var expect = require('chai').expect;
var Probability = require('../src/elements/Probability').Probability;

describe('Bali Component Framework™', function() {

    describe('Test probability constructors', function() {

        it('should construct a default probability of zero', function() {
            var empty = new Probability();
            var number = empty.toNumber();
            expect(number).to.equal(0);
            var string = empty.toString();
            expect(string).to.equal('false');
            expect(empty.toBoolean()).to.be.false;  // jshint ignore:line
        });

        it('should construct a probability of zero', function() {
            var zero = new Probability(0);
            var number = zero.toNumber();
            expect(number).to.equal(0);
            var string = zero.toString();
            expect(string).to.equal('false');
            expect(zero.toBoolean()).to.be.false;  // jshint ignore:line
        });

        it('should construct a probability of one half', function() {
            var half = new Probability(0.5);
            var number = half.toNumber();
            expect(number).to.equal(0.5);
            var string = half.toString();
            expect(string).to.equal('.5');
        });

        it('should construct a probability of one', function() {
            var one = new Probability(1);
            var number = one.toNumber();
            expect(number).to.equal(1);
            var string = one.toString();
            expect(string).to.equal('true');
            expect(one.toBoolean()).to.be.true;  // jshint ignore:line
        });

        it('should throw an exception for negative probabilities', function() {
            expect(
                function() {
                    var negative = new Probability(-1);
                }
            ).to.throw();
        });

        it('should throw an exception for probabilities greater than 1', function() {
            expect(
                function() {
                    var two = new Probability(2);
                }
            ).to.throw();
        });

/*      // uncomment this test as needed, but it runs slowly ;-)
        it('should average very near 50% for many coin flips', function() {
            var even = new Probability(0.5);
            var heads = 0;
            var tosses = 10000;
            for (var i = 1; i < tosses; i++) {
                if (even.toBoolean()) heads++;
            }
            expect(tosses * 0.485 < heads && heads < tosses * 0.515).to.be.true;  // jshint ignore:line
        );
*/

    });

    describe('Test probability methods', function() {

        it('should return the correct type', function() {
            var type = Probability.TRUE.getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#2YBVYV11HS4CKZ7X8RDJ0RYC7TKKAV2D,$version:v1,$digest:none]>');
        });

    });

    describe('Test probability functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(Probability.inverse(Probability.FALSE)).to.equal(Probability.TRUE);
            expect(Probability.inverse(Probability.TRUE)).to.equal(Probability.FALSE);
            expect(Probability.inverse(new Probability(0.25)).isEqualTo(new Probability(0.75))).to.equal(true);
            expect(Probability.inverse(new Probability('.25')).isEqualTo(new Probability('.75'))).to.equal(true);
        });

        it('should perform the union function correctly', function() {
            expect(Probability.union(Probability.FALSE, Probability.FALSE)).to.equal(Probability.FALSE);
            expect(Probability.union(Probability.FALSE, Probability.TRUE)).to.equal(Probability.TRUE);
            expect(Probability.union(Probability.TRUE, Probability.FALSE)).to.equal(Probability.TRUE);
            expect(Probability.union(Probability.TRUE, Probability.TRUE)).to.equal(Probability.TRUE);
            expect(Probability.union(new Probability(0.75), new Probability(1/3)).isEqualTo(new Probability(0.83))).to.equal(true);
        });

        it('should perform the intersection function correctly', function() {
            expect(Probability.intersection(Probability.FALSE, Probability.FALSE)).to.equal(Probability.FALSE);
            expect(Probability.intersection(Probability.FALSE, Probability.TRUE)).to.equal(Probability.FALSE);
            expect(Probability.intersection(Probability.TRUE, Probability.FALSE)).to.equal(Probability.FALSE);
            expect(Probability.intersection(Probability.TRUE, Probability.TRUE)).to.equal(Probability.TRUE);
            expect(Probability.intersection(new Probability(0.75), new Probability(1/3)).isEqualTo(new Probability(0.25))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(Probability.difference(Probability.FALSE, Probability.FALSE)).to.equal(Probability.FALSE);
            expect(Probability.difference(Probability.FALSE, Probability.TRUE)).to.equal(Probability.FALSE);
            expect(Probability.difference(Probability.TRUE, Probability.FALSE)).to.equal(Probability.TRUE);
            expect(Probability.difference(Probability.TRUE, Probability.TRUE)).to.equal(Probability.FALSE);
            expect(Probability.difference(new Probability(0.75), new Probability(1/3)).isEqualTo(new Probability(0.5))).to.equal(true);
        });

        it('should perform the exclusive function correctly', function() {
            expect(Probability.exclusive(Probability.FALSE, Probability.FALSE)).to.equal(Probability.FALSE);
            expect(Probability.exclusive(Probability.FALSE, Probability.TRUE)).to.equal(Probability.TRUE);
            expect(Probability.exclusive(Probability.TRUE, Probability.FALSE)).to.equal(Probability.TRUE);
            expect(Probability.exclusive(Probability.TRUE, Probability.TRUE)).to.equal(Probability.FALSE);
            expect(Probability.exclusive(new Probability(0.75), new Probability(1/3)).isEqualTo(new Probability(0.6))).to.equal(true);
        });

    });

});
