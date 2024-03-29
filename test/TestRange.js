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
const comparator = new bali.comparator();


describe('Bali Nebula™ Component Framework - Range', function() {

    describe('Test the range constructors', function() {

        it('should create an integer range with zero endpoints', function() {
            const range = bali.range();
            expect(range).to.exist;
            const first = range.getFirst();
            expect(first).to.not.exist;
            const last = range.getLast();
            expect(last).to.not.exist;
            const connector = range.getConnector();
            expect(connector).to.exist;
            expect(connector).to.equal('..');
            expect(range.getSize()).to.equal(0);
            expect(range.isEmpty()).to.equal(true);
            expect(range.isSignificant()).to.equal(false);
            expect(range.getHash()).to.exist;
            expect(
                function() {
                    range.getIterator();
                }
            ).to.throw();
        });

        it('should create an integer range with one endpoint', function() {
            var range = bali.range(0);
            expect(range).to.exist;
            var first = range.getFirst();
            expect(first).to.exist;
            expect(first.toInteger()).to.equal(0);
            var last = range.getLast();
            expect(last).to.not.exist;
            expect(
                function() {
                    range.getIterator();
                }
            ).to.throw();

            range = bali.range(undefined, '..', 5);
            expect(range).to.exist;
            first = range.getFirst();
            expect(first).to.not.exist;
            last = range.getLast();
            expect(last).to.exist;
            expect(last.toInteger()).to.equal(5);
            expect(range.getSize()).to.equal(0);
            expect(range.isEmpty()).to.equal(true);
            expect(range.isSignificant()).to.equal(false);
            expect(range.getHash()).to.exist;
            expect(
                function() {
                    range.emptyCollection();
                }
            ).to.throw();
            expect(
                function() {
                    range.getIterator();
                }
            ).to.throw();
        });

        it('should create an integer range with two endpoints', function() {
            const range = bali.range(2, '..', 5);
            expect(range).to.exist;
            const first = range.getFirst();
            expect(first).to.exist;
            expect(first.toInteger()).to.equal(2);
            const last = range.getLast();
            expect(last).to.exist;
            expect(last.toInteger()).to.equal(5);
            expect(range.getSize()).to.equal(4);
            expect(range.getHash()).to.exist;
            expect(
                function() {
                    stack.addItem(6);
                }
            ).to.throw(bali.Exception);
            expect(range.isEmpty()).to.equal(false);
            expect(range.isSignificant()).to.equal(true);
            const iterator = range.getIterator();
            expect(iterator).to.exist;
            iterator.toSlot(-1);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            iterator.toStart();
            expect(bali.source(iterator)).to.exist;
            expect(comparator.ranking(range, bali.range.effective(range, debug))).to.equal(0);
        });

        it('should create an integer range with "<.." connector type', function() {
            const range = bali.range(2, '<..');
            range.setLast(5);
            expect(range).to.exist;
            const first = range.getFirst();
            expect(first).to.exist;
            expect(first.toInteger()).to.equal(2);
            const last = range.getLast();
            expect(last).to.exist;
            expect(last.toInteger()).to.equal(5);
            const connector = range.getConnector();
            expect(connector).to.exist;
            expect(connector).to.equal('<..');
            expect(range.getSize()).to.equal(0);
            expect(range.isEmpty()).to.equal(true);
            expect(range.isSignificant()).to.equal(false);
            expect(range.getHash()).to.exist;
            const iterator = range.getIterator();
            expect(iterator).to.exist;
        });

        it('should create an integer range with "<..<" connector type', function() {
            const range = bali.range(undefined, '<..<', 5);
            range.setFirst(2);
            expect(range).to.exist;
            const first = range.getFirst();
            expect(first).to.exist;
            expect(first.toInteger()).to.equal(2);
            const last = range.getLast();
            expect(last).to.exist;
            expect(last.toInteger()).to.equal(5);
            const connector = range.getConnector();
            expect(connector).to.exist;
            expect(connector).to.equal('<..<');
            expect(range.getSize()).to.equal(0);
            expect(range.isEmpty()).to.equal(true);
            expect(range.isSignificant()).to.equal(false);
            expect(range.getHash()).to.exist;
            const iterator = range.getIterator();
            expect(iterator).to.exist;
        });

        it('should create a unit length integer range with "<..<" connector type', function() {
            const range = bali.range(2, '<..<', 4);
            expect(range).to.exist;
            const first = range.getFirst();
            expect(first).to.exist;
            expect(first.toInteger()).to.equal(2);
            const last = range.getLast();
            expect(last).to.exist;
            expect(last.toInteger()).to.equal(4);
            const connector = range.getConnector();
            expect(connector).to.exist;
            expect(connector).to.equal('<..<');
            expect(range.getSize()).to.equal(1);
            expect(range.isEmpty()).to.equal(false);
            expect(range.isSignificant()).to.equal(true);
            expect(range.getHash()).to.exist;
            const iterator = range.getIterator();
            expect(iterator).to.exist;
            expect(iterator.getNext()).to.exist;
            expect(iterator.hasNext()).to.equal(false);
            expect(comparator.ranking(range, bali.range.effective(range, debug))).to.equal(-1);
            expect(comparator.ranking(bali.range(3, '..', 3), bali.range.effective(range, debug))).to.equal(0);
        });

        it('should create a negative length integer range with "<..<" connector type', function() {
            expect(
                function() {
                    const range = bali.range(2, '<..<', 3);
                }
            ).to.throw();
        });

        it('should create an integer range with "..<" connector type', function() {
            const range = bali.range(2, '..<', 5);
            expect(range).to.exist;
            const first = range.getFirst();
            expect(first).to.exist;
            expect(first.toInteger()).to.equal(2);
            const last = range.getLast();
            expect(last).to.exist;
            expect(last.toInteger()).to.equal(5);
            const connector = range.getConnector();
            expect(connector).to.exist;
            expect(connector).to.equal('..<');
            expect(range.getSize()).to.equal(3);
            expect(range.isEmpty()).to.equal(false);
            expect(range.isSignificant()).to.equal(true);
            expect(range.getHash()).to.exist;
            const iterator = range.getIterator();
            expect(iterator).to.exist;
            expect(comparator.ranking(range, bali.range.effective(range, debug))).to.equal(1);
            expect(comparator.ranking(bali.range(2, '..', 4), bali.range.effective(range, debug))).to.equal(0);
        });

        it('should create an integer range with ".." connector type', function() {
            const range = bali.range(2, '..', 5);
            expect(range).to.exist;
            const first = range.getFirst();
            expect(first).to.exist;
            expect(first.toInteger()).to.equal(2);
            const last = range.getLast();
            expect(last).to.exist;
            expect(last.toInteger()).to.equal(5);
            const connector = range.getConnector();
            expect(connector).to.exist;
            expect(connector).to.equal('..');
            expect(range.getSize()).to.equal(4);
            expect(range.isEmpty()).to.equal(false);
            expect(range.isSignificant()).to.equal(true);
            expect(range.getHash()).to.exist;
            const iterator = range.getIterator();
            expect(iterator).to.exist;
            expect(comparator.ranking(range, bali.range.effective(range, debug))).to.equal(0);
        });

    });

    describe('Test the range comparisons', function() {
        const negative = bali.range(undefined, '..', 0);
        const positive = bali.range(0);
        const infinite = bali.range();
        const finite = bali.range(-2, '..', 2);

        it('should be able to compare a negative range against the others', function() {
            expect(comparator.ranking(negative, negative)).to.equal(0);
            expect(comparator.ranking(negative, positive)).to.equal(-1);
            expect(comparator.ranking(negative, infinite)).to.equal(-1);
            expect(comparator.ranking(negative, finite)).to.equal(-1);
        });

        it('should be able to compare a positive range against the others', function() {
            expect(comparator.ranking(positive, negative)).to.equal(1);
            expect(comparator.ranking(positive, positive)).to.equal(0);
            expect(comparator.ranking(positive, infinite)).to.equal(1);
            expect(comparator.ranking(positive, finite)).to.equal(1);
        });

        it('should be able to compare an infinite range against the others', function() {
            expect(comparator.ranking(infinite, negative)).to.equal(1);
            expect(comparator.ranking(infinite, positive)).to.equal(-1);
            expect(comparator.ranking(infinite, infinite)).to.equal(0);
            expect(comparator.ranking(infinite, finite)).to.equal(-1);
        });

        it('should be able to compare a finite range against the others', function() {
            expect(comparator.ranking(finite, negative)).to.equal(1);
            expect(comparator.ranking(finite, positive)).to.equal(-1);
            expect(comparator.ranking(finite, infinite)).to.equal(1);
            expect(comparator.ranking(finite, finite)).to.equal(0);
        });

    });

    describe('Test the range methods', function() {

        it('should be able to call the getFirst() and getLast() methods on the range', function() {
            var range = bali.range(1, '..', 8);
            var first = range.getFirst();
            expect(first.toInteger()).to.equal(1);
            var last = range.getLast();
            expect(last.toInteger()).to.equal(8);

            range = bali.range(-4, '..', 6);
            first = range.getFirst();
            expect(first.toInteger()).to.equal(-4);
            last = range.getLast();
            expect(last.toInteger()).to.equal(6);

            range = bali.component('[-5..-1]');
            first = range.getFirst();
            expect(first.toInteger()).to.equal(-5);
            last = range.getLast();
            expect(last.toInteger()).to.equal(-1);
        });

        it('should be able to call the range methods on the range', function() {
            const range1 = bali.range(1, '..', 5);
            const range2 = bali.range(3, '..', 5);
            var size = range1.getSize();
            expect(size).to.equal(5);
            expect(range1.containsAll(range2)).to.equal(true);
            expect(range2.containsAll(range1)).to.equal(false);
            expect(range2.containsAny(range1)).to.equal(true);
            const range3 = bali.range(5, '..', 9);
            size = range3.getSize();
            expect(size).to.equal(5);
            expect(range3.containsItem(7)).to.equal(true);
            expect(range3.containsItem(4)).to.equal(false);
            expect(range3.getIndex(6)).to.equal(2);
            expect(range3.getItem(3).toInteger()).to.equal(7);
        });

    });

    describe('Test the range iterators', function() {

        it('should attempt to create iterators', function() {
            var range = bali.range(1, '..', 5);
            range.getIterator();
            range = bali.range('$alpha', '..', '$delta');
            expect(
                function() {
                    range.getIterator();
                }
            ).to.throw();
        });

        it('should iterate over a range forwards and backwards', function() {
            const range = bali.range(1, '..', 3);
            var slot = range.getLast() - range.getFirst() + 1;
            const iterator = range.getIterator();
            expect(iterator).to.exist;
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
                expect(slot--).to.equal(value.toInteger());
            }
            // should be at the first slot in the iterator
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            // iterate through the items in order
            const size = range.getLast() - range.getFirst() + 1;
            while (slot < size) {
                const value = iterator.getNext();
                expect(++slot).to.equal(value.toInteger());
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
