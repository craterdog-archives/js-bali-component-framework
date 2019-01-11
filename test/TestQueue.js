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
const utilities = require('../src/utilities');
const collections = require('../src/collections');


describe('Bali Component Framework™', function() {
    const array = ['"alpha"', '"beta"', '"delta"', '"epsilon"', '"gamma"'];

    describe('Test the queue constructors.', function() {

        it('should create an empty queue', function() {
            const queue = new collections.Queue();
            expect(queue).to.exist;  // jshint ignore:line
            const size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            const iterator = queue.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            queue.removeAll();
            const copy = new collections.Queue();
            expect(copy).to.exist;  // jshint ignore:line
            expect(queue.isEqualTo(copy)).to.equal(true);
            const signum = queue.comparedTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create an empty queue with small capacity', function() {
            const queue = new collections.Queue();
            queue.capacity = 3;
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            queue.addItem('"alpha"');
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(1);
            expect(queue.getHead().toString()).to.equal('"alpha"');
            queue.addItem('"beta"');
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(2);
            expect(queue.getHead().toString()).to.equal('"alpha"');
            queue.addItem('"gamma"');
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(3);
            expect(queue.getHead().toString()).to.equal('"alpha"');
            expect(function() {queue.addItem('"delta"');}).to.throw(utilities.Exception);
            var item = queue.removeItem();
            expect(item).to.exist;  // jshint ignore:line
            expect(item.toString()).to.equal('"alpha"');
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(2);
            item = queue.removeItem();
            expect(item).to.exist;  // jshint ignore:line
            expect(item.toString()).to.equal('"beta"');
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(1);
            item = queue.removeItem();
            expect(item).to.exist;  // jshint ignore:line
            expect(item.toString()).to.equal('"gamma"');
            size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a queue from an array', function() {
            const queue = collections.Queue.fromSequential(array);
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = queue.getIterator();
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
            const list = collections.List.fromSequential(array);
            queue = collections.Queue.fromSequential(list);
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = queue.getIterator();
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
            const expected = collections.Queue.fromSequential(array);
            const queue = collections.Queue.fromSequential(expected);
            var size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            expect(queue.isEqualTo(expected)).to.equal(true);
            const iterator = queue.getIterator();
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

        it('should return the correct primitive type', function() {
            const type = new collections.Queue().getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#7F20TGXVDQB8DDDB7ZRL989N1PCTLFB4,$version:v1,$digest:none]>');
        });

        it('should be able to add and remove items from a queue', function() {
            const queue = collections.Queue.fromSequential(array);
            const size = queue.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var first = queue.getHead();
            expect(first.toString()).to.equal('"alpha"');
            var item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 1);
            first = queue.getHead();
            expect(first.toString()).to.equal('"beta"');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 2);
            first = queue.getHead();
            expect(first.toString()).to.equal('"delta"');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 3);
            first = queue.getHead();
            expect(first.toString()).to.equal('"epsilon"');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 4);
            first = queue.getHead();
            expect(first.toString()).to.equal('"gamma"');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(0);
            first = queue.getHead();
            expect(first).to.equal(undefined);
            item = queue.removeItem();
            expect(item).to.equal(undefined);
        });

    });

    describe('Test the queue iterators.', function() {

        it('should iterate over a queue forwards and backwards', function() {
            // REMEMBER: The iterator for a queue iterates through the items in FIFO order
            const queue = collections.Queue.fromSequential(array);
            // iterate through the items from beginning to end
            const iterator = queue.getIterator();
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
