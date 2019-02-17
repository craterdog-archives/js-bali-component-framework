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

    describe('Test the range constructors.', function() {

        it('should create an integer range with two endpoints', function() {
            const range = bali.range(2, 5);
            expect(range).to.exist;  // jshint ignore:line
            const size = range.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(4);
            const iterator = range.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            expect(iterator.getNext().toNumber()).to.equal(2);
            expect(iterator.getNext().toNumber()).to.equal(3);
            expect(iterator.getNext().toNumber()).to.equal(4);
            expect(iterator.getNext().toNumber()).to.equal(5);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
        });

        it('should create a symbol range for a list of symbols', function() {
            const list = bali.list([
                '$first',
                '$second',
                '$third',
                '$fourth',
                '$fifth',
                '$sixth',
                '$seventh',
                '$eighth',
                '$nineth'
            ]);
            const parameters = bali.parameters({$collection: list});
            const range = bali.range('$third', '$seventh', parameters);
            expect(range).to.exist;  // jshint ignore:line
            const size = range.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(5);
            expect(range.getFirst().toString()).to.equal('$third');
            expect(range.getItem(3).toString()).to.equal('$fifth');
            expect(range.getLast().toString()).to.equal('$seventh');
            const iterator = range.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            expect(iterator.getNext().toString()).to.equal('$third');
            expect(iterator.getNext().toString()).to.equal('$fourth');
            expect(iterator.getNext().toString()).to.equal('$fifth');
            expect(iterator.getNext().toString()).to.equal('$sixth');
            expect(iterator.getNext().toString()).to.equal('$seventh');
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
        });

    });

    describe('Test the range methods.', function() {

        it('should be able to call the methods on the range', function() {
            const range1 = bali.range(1, 8);
            var size = range1.getSize();
            expect(size).to.equal(8);
            const range2 = bali.range(4, 6);
            size = range2.getSize();
            expect(size).to.equal(3);
            expect(range2.getFirst().toNumber()).to.equal(4);
            expect(range2.getItem(2).toNumber()).to.equal(5);
            expect(range2.getLast().toNumber()).to.equal(6);
            expect(range1.isInRange(2)).to.equal(true);
            expect(range2.isInRange(7)).to.equal(false);
        });

    });

    describe('Test the range iterators.', function() {

        it('should iterate over a range forwards and backwards', function() {
            const range = bali.range(1, 3);
            var index = range.getSize();
            const items = range.toArray();
            var item;
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
            while (index > 0) {
                item = iterator.getPrevious();
                expect(items[--index].isEqualTo(item)).to.equal(true);
            }
            // should be at the first slot in the iterator
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            // iterator through the items in order
            while (index < items.length) {
                item = iterator.getNext();
                expect(items[index++].isEqualTo(item)).to.equal(true);
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
