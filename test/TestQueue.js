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
var composites = require('../src/composites');
var collections = require('../src/collections');


describe('Bali Component Framework™', function() {
    var array = ['alpha', 'beta', 'delta', 'epsilon', 'gamma'];

    describe('Test the queue constructors.', function() {

        it('should create an empty queue', function() {
            var queue = new collections.Queue();
            expect(queue).to.exist;  // jshint ignore:line
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            var iterator = queue.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            queue.removeAll();
            var copy = new collections.Queue();
            expect(copy).to.exist;  // jshint ignore:line
            expect(queue.isEqualTo(copy)).to.equal(true);
            var signum = queue.comparedTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create an empty queue with small capacity', function() {
            var queue = new collections.Queue();
            queue.capacity = 1;
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            queue.addItem('alpha');
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(1);
            expect(function() {queue.addItem('beta');}).to.throw(Error, 'QUEUE: Attempted to add an item to a full queue.');
            var item = queue.removeItem();
            expect(item).to.exist;  // jshint ignore:line
            expect(item.toString()).to.equal('alpha');
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a queue from an array', function() {
            var queue = collections.Queue.fromCollection(array);
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = queue.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            queue.removeAll();
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a queue from a list', function() {
            var list = collections.List.fromCollection(array);
            queue = collections.Queue.fromCollection(list);
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = queue.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            queue.removeAll();
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a queue from a queue', function() {
            var expected = collections.Queue.fromCollection(array);
            var queue = collections.Queue.fromCollection(expected);
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            expect(queue.isEqualTo(expected)).to.equal(true);
            var iterator = queue.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            queue.removeAll();
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

    });

    describe('Test the queue methods.', function() {

        it('should be able to add and remove items from a queue', function() {
            var queue = collections.Queue.fromCollection(array);
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var first = queue.firstItem();
            expect(first.toString()).to.equal('alpha');
            var item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 1);
            first = queue.firstItem();
            expect(first.toString()).to.equal('beta');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 2);
            first = queue.firstItem();
            expect(first.toString()).to.equal('delta');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 3);
            first = queue.firstItem();
            expect(first.toString()).to.equal('epsilon');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 4);
            first = queue.firstItem();
            expect(first.toString()).to.equal('gamma');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(0);
            expect(function() {queue.firstItem();}).to.throw(Error, 'QUEUE: Attempted to access the first item in an empty queue.');
            expect(function() {queue.removeItem();}).to.throw(Error, 'QUEUE: Attempted to remove an item from an empty queue.');
        });

    });

    describe('Test the queue iterators.', function() {

        it('should iterate over a queue forwards and backwards', function() {
            // REMEMBER: The iterator for a queue iterates through the items in FIFO order
            var queue = collections.Queue.fromCollection(array);
            // iterate through the items from beginning to end
            var iterator = queue.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            // iterator through the items from beginning to end
            var index = 0;
            var item;
            while (index < array.length) {
                item = iterator.getNext().toString();
                expect(array[index++]).to.equal(item);
            }
            // should be at the last slot in the iterator
            expect(iterator.hasPrevious() === true);
            expect(iterator.hasNext() === false);
            // move to the first slot in the iterator
            iterator.toStart();
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            // move back to the last slot in the iterator
            iterator.toEnd();
            expect(iterator.hasPrevious() === true);
            expect(iterator.hasNext() === false);
            // iterator through the items from end to beginning
            index = array.length;
            while (index > 0) {
                item = iterator.getPrevious().toString();
                expect(array[--index]).to.equal(item);
            }
            // should be at the first slot in the iterator
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
        });

    });

});
