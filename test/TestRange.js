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
            const size = range.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(Infinity);
            expect(
                function() {
                    range.getIterator(range);
                }
            ).to.throw();
        });

        it('should create an integer range with one endpoint', function() {
            var range = bali.range(0);
            expect(range).to.exist;  // jshint ignore:line
            var size = range.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(Infinity);
            expect(
                function() {
                    range.getIterator(range);
                }
            ).to.throw();

            range = bali.range(undefined, 5);
            expect(range).to.exist;  // jshint ignore:line
            size = range.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(Infinity);
            expect(
                function() {
                    range.getIterator(range);
                }
            ).to.throw();
        });

        it('should create an integer range with two endpoints', function() {
            const range = bali.range(2, 5);
            expect(range).to.exist;  // jshint ignore:line
            const size = range.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(4);
            const iterator = range.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
        });

    });

    describe('Test the range methods', function() {

        it('should be able to call the getFirst() and getLast() methods on the range', function() {
            var range = bali.range(1, 8);
            var size = range.getSize();
            expect(size).to.equal(8);
            var first = range.getFirst();
            expect(first).to.equal(1);
            var last = range.getLast();
            expect(last).to.equal(8);

            range = bali.range(-4, 6);
            size = range.getSize();
            expect(size).to.equal(11);
            first = range.getFirst();
            expect(first).to.equal(-4);
            last = range.getLast();
            expect(last).to.equal(6);
        });

        it('should perform the getItem() and getItems() methods correctly', function() {
            const target = bali.range(4, 13);
            const range = bali.range(2, 5);
            const first = target.getItem(2);
            const last = target.getItem(5);
            const items = target.getItems(range);
            expect(first).to.equal(items.getItem(1));
            expect(last).to.equal(items.getItem(items.getSize()));
        });

    });

    describe('Test the range iterators', function() {

        it('should iterate over a range forwards and backwards', function() {
            const range = bali.range(1, 3);
            var slot = range.getSize();
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
            // iterator through the items in order
            const size = range.getSize();
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
