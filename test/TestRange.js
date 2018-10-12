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
var Range = require('../src/composites/Range');


describe('Bali Primitive Types™', function() {

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
            expect(iterator.getNext()).to.equal(2);
            expect(iterator.getNext()).to.equal(3);
            expect(iterator.getNext()).to.equal(4);
            expect(iterator.getNext()).to.equal(5);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
        });

        it('should create an integer range with one endpoint', function() {
            var range = Range.fromLastPoint(5);
            expect(range).to.exist;  // jshint ignore:line
            var size = range.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(5);
            var iterator = range.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            expect(iterator.getNext()).to.equal(1);
            expect(iterator.getNext()).to.equal(2);
            expect(iterator.getNext()).to.equal(3);
            expect(iterator.getNext()).to.equal(4);
            expect(iterator.getNext()).to.equal(5);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
        });

        it('should throw exception for non-integer endpoints', function() {
            expect(function() {Range.fromEndPoints('first', 'last');}).to.throw(Error, 'RANGE: The endpoints for a range must be integers.');
        });

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
                expect(items[--index]).to.equal(item);
            }
            // should be at the first slot in the iterator
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            // iterator through the items in order
            while (index < items.length) {
                item = iterator.getNext();
                expect(items[index++]).to.equal(item);
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
