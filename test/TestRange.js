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
var Range = require('../src/composites/Range').Range;


describe('Bali Document Notation™', function() {

    describe('Test the range constructors.', function() {

        it('should create an integer range with two endpoints', function() {
            var range = Range.fromEndPoints(2, 5);
            expect(range).to.exist;  // jshint ignore:line
            var size = range.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(4);
            var iterator = range.iterator();
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

        it('should create an integer range with one endpoint', function() {
            var range = Range.fromLastItem(5);
            expect(range).to.exist;  // jshint ignore:line
            var size = range.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(5);
            var iterator = range.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            expect(iterator.getNext().toNumber()).to.equal(1);
            expect(iterator.getNext().toNumber()).to.equal(2);
            expect(iterator.getNext().toNumber()).to.equal(3);
            expect(iterator.getNext().toNumber()).to.equal(4);
            expect(iterator.getNext().toNumber()).to.equal(5);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
        });

    });

    describe('Test the range methods.', function() {

        it('should be able to call the Collection class methods on the range', function() {
            var range1 = Range.fromEndPoints(1, 8);
            var size = range1.getSize();
            expect(size).to.equal(8);
            var range2 = Range.fromEndPoints(4, 6);
            size = range2.getSize();
            expect(size).to.equal(3);
            expect(range1.containsAll(range2)).to.equal(true);
            expect(range2.containsAll(range1)).to.equal(false);
            expect(range1.containsAny(range2)).to.equal(true);
            expect(range2.containsAny(range1)).to.equal(true);
            var range3 = range1.getItems(2, 4);
            size = range3.getSize();
            expect(size).to.equal(3);
            expect(range3.containsItem(2)).to.equal(true);
            expect(range3.containsItem(5)).to.equal(false);
            expect(range3.getIndex(3)).to.equal(2);
        });

/*
        it('should be able to perform range operations on ranges', function() {
            var range1 = Range.fromEndPoints(3, 8);
            var range2 = Range.fromEndPoints(7, 16);
            var range3 = Range.fromEndPoints(3, 16);
            expect(Range.concatenation(range1, range2).isEqualTo(range3)).to.equal(true);
        });
*/

    });

    describe('Test the range iterators.', function() {

        it('should iterate over a range forwards and backwards', function() {
            var range = Range.fromEndPoints(1, 3);
            var index = range.getSize();
            var items = range.toArray();
            var item;
            var iterator = range.iterator();
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
