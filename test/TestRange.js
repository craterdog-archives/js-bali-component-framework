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


describe('Bali Nebula™ Component Framework - Range', function() {

    describe('Test the range constructors', function() {

        it('should create an integer range with zero endpoints', function() {
            const range = bali.range();
            expect(range).to.exist;  // jshint ignore:line
            const first = range.getFirst();
            expect(first).to.exist;  // jshint ignore:line
            expect(first).to.equal(-Infinity);
            const last = range.getLast();
            expect(last).to.exist;  // jshint ignore:line
            expect(last).to.equal(Infinity);
            expect(
                function() {
                    range.getIterator(range);
                }
            ).to.throw();
        });

        it('should create an integer range with one endpoint', function() {
            var range = bali.range(0);
            expect(range).to.exist;  // jshint ignore:line
            var first = range.getFirst();
            expect(first).to.exist;  // jshint ignore:line
            expect(first).to.equal(0);
            var last = range.getLast();
            expect(last).to.exist;  // jshint ignore:line
            expect(last).to.equal(Infinity);
            expect(
                function() {
                    range.getIterator(range);
                }
            ).to.throw();

            range = bali.range(undefined, 5);
            expect(range).to.exist;  // jshint ignore:line
            first = range.getFirst();
            expect(first).to.exist;  // jshint ignore:line
            expect(first).to.equal(-Infinity);
            last = range.getLast();
            expect(last).to.exist;  // jshint ignore:line
            expect(last).to.equal(5);
            expect(
                function() {
                    range.getIterator(range);
                }
            ).to.throw();
        });

        it('should create an integer range with two endpoints', function() {
            const range = bali.range(2, 5);
            expect(range).to.exist;  // jshint ignore:line
            const first = range.getFirst();
            expect(first).to.exist;  // jshint ignore:line
            expect(first).to.equal(2);
            const last = range.getLast();
            expect(last).to.exist;  // jshint ignore:line
            expect(last).to.equal(5);
            const iterator = range.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
        });

    });

    describe('Test the range comparisons', function() {
        const negative = bali.range(undefined, 0);
        const positive = bali.range(0);
        const infinite = bali.range();
        const finite = bali.range(-2, 2);

        it('should be able to a negative range against the others', function() {
            expect(negative.comparedTo(negative)).to.equal(0);
            expect(negative.comparedTo(positive)).to.equal(-1);
            expect(negative.comparedTo(infinite)).to.equal(-1);
            expect(negative.comparedTo(finite)).to.equal(-1);
        });

        it('should be able to a positive range against the others', function() {
            expect(positive.comparedTo(negative)).to.equal(1);
            expect(positive.comparedTo(positive)).to.equal(0);
            expect(positive.comparedTo(infinite)).to.equal(1);
            expect(positive.comparedTo(finite)).to.equal(1);
        });

        it('should be able to an infinite range against the others', function() {
            expect(infinite.comparedTo(negative)).to.equal(1);
            expect(infinite.comparedTo(positive)).to.equal(-1);
            expect(infinite.comparedTo(infinite)).to.equal(0);
            expect(infinite.comparedTo(finite)).to.equal(-1);
        });

        it('should be able to a finite range against the others', function() {
            expect(finite.comparedTo(negative)).to.equal(1);
            expect(finite.comparedTo(positive)).to.equal(-1);
            expect(finite.comparedTo(infinite)).to.equal(1);
            expect(finite.comparedTo(finite)).to.equal(0);
        });

    });

    describe('Test the range methods', function() {

        it('should be able to call the getFirst() and getLast() methods on the range', function() {
            var range = bali.range(1, 8);
            var first = range.getFirst();
            expect(first).to.equal(1);
            var last = range.getLast();
            expect(last).to.equal(8);

            range = bali.range(-4, 6);
            first = range.getFirst();
            expect(first).to.equal(-4);
            last = range.getLast();
            expect(last).to.equal(6);
        });

    });

    describe('Test the range iterators', function() {

        it('should iterate over a range forwards and backwards', function() {
            const range = bali.range(1, 3);
            var slot = range.getLast() - range.getFirst() + 1;
            const iterator = range.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            // the iterator is at the first slot
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            iterator.toEnd();
            // the iterator is at the last slot
            expect(iterator.hasPrevious() === true);
            expect(iterator.hasNext() === false);
            // iterate through the items in reverse order
            while (slot > 0) {
                const value = iterator.getPrevious();
                expect(slot--).to.equal(value);
            }
            // should be at the first slot in the iterator
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            // iterate through the items in order
            const size = range.getLast() - range.getFirst() + 1;
            while (slot < size) {
                const value = iterator.getNext();
                expect(++slot).to.equal(value);
            }
            // should be at the last slot in the iterator
            expect(iterator.hasPrevious() === true);
            expect(iterator.hasNext() === false);
            iterator.toStart();
            // should be at the first slot in the iterator
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
        });

    });

});
