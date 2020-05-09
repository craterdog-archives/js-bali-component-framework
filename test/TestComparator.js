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
const bali = require('../').api();
const comparator = bali.comparator(undefined, debug);

describe('Bali Nebula™ Component Framework - Comparator', function() {

    describe('Test undefined comparisons', function() {

        it('should handle two undefined objects', function() {
            expect(comparator.compareComponents()).to.equal(0);
        });

        it('should handle one undefined object', function() {
            expect(comparator.compareComponents('foobar')).to.equal(1);
            expect(comparator.compareComponents(undefined, 'foobar')).to.equal(-1);
        });

    });

    describe('Test numeric comparisons', function() {
        const angle = bali.angle.PI;
        const number = bali.number(3, 4);
        const percent = bali.percent(25);
        const probability = bali.probability(0.5);

        it('should handle angles', function() {
            expect(comparator.compareComponents(angle, angle)).to.equal(0);
            expect(comparator.compareComponents(angle, number)).to.equal(1);
            expect(comparator.compareComponents(angle, percent)).to.equal(1);
            expect(comparator.compareComponents(angle, probability)).to.equal(1);
        });

        it('should handle numbers', function() {
            expect(comparator.compareComponents(number, angle)).to.equal(-1);
            expect(comparator.compareComponents(number, number)).to.equal(0);
            expect(comparator.compareComponents(number, percent)).to.equal(1);
            expect(comparator.compareComponents(number, probability)).to.equal(1);
        });

        it('should handle percents', function() {
            expect(comparator.compareComponents(percent, angle)).to.equal(-1);
            expect(comparator.compareComponents(percent, number)).to.equal(-1);
            expect(comparator.compareComponents(percent, percent)).to.equal(0);
            expect(comparator.compareComponents(percent, probability)).to.equal(-1);
        });

        it('should handle probabilities', function() {
            expect(comparator.compareComponents(probability, angle)).to.equal(-1);
            expect(comparator.compareComponents(probability, number)).to.equal(-1);
            expect(comparator.compareComponents(probability, percent)).to.equal(1);
            expect(comparator.compareComponents(probability, probability)).to.equal(0);
        });

    });

    describe('Test logical comparisons', function() {

        it('should handle probabilities', function() {
            const probability = bali.probability(0.5);
            expect(comparator.compareComponents(probability, true)).to.equal(-1);
            expect(comparator.compareComponents(true, probability)).to.equal(1);
            expect(comparator.compareComponents(probability, false)).to.equal(1);
            expect(comparator.compareComponents(false, probability)).to.equal(-1);
            expect(comparator.compareComponents(probability, probability)).to.equal(0);
        });

    });

    describe('Test string comparisons', function() {

        it('should handle probabilities', function() {
            const probability = bali.probability(0.5);
            expect(comparator.compareComponents(probability, true)).to.equal(-1);
            expect(comparator.compareComponents(true, probability)).to.equal(1);
            expect(comparator.compareComponents(probability, false)).to.equal(1);
            expect(comparator.compareComponents(false, probability)).to.equal(-1);
            expect(comparator.compareComponents(probability, probability)).to.equal(0);
        });

    });

});
