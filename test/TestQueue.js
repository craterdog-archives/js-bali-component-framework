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


describe('Bali Nebula™ Component Framework - Queue', function() {

    const array = ['"alpha"', '"beta"', '"delta"', '"epsilon"', '"gamma"'];

    describe('Test the queue constructors', function() {

        it('should create an empty queue', function() {
            const queue = bali.queue();
            expect(queue).to.exist;
            const size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(queue.isEmpty()).to.equal(true);
            expect(queue.toBoolean()).to.equal(false);
            expect(queue.getHash()).to.exist;
            const iterator = queue.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            expect(bali.source(iterator)).to.exist;
            queue.removeAll();
            const copy = bali.queue();
            expect(copy).to.exist;
            const comparator = new bali.comparator();
            expect(comparator.areEqual(queue, copy)).to.equal(true);
            const signum = comparator.ranking(queue, copy);
            expect(signum).to.equal(0);
        });

        it('should create an empty queue with small capacity', function() {
            const queue = bali.queue([], {$capacity: 3});
            var size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            queue.addItem('"alpha"');
            size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(1);
            expect(queue.isEmpty()).to.equal(false);
            expect(queue.toBoolean()).to.equal(true);
            expect(queue.headItem().toString()).to.equal('"alpha"');
            queue.addItem('"beta"');
            size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(2);
            expect(queue.headItem().toString()).to.equal('"alpha"');
            queue.addItem('"gamma"');
            size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(3);
            expect(queue.headItem().toString()).to.equal('"alpha"');
            expect(
                function() {
                    queue.addItem('"delta"');
                }
            ).to.throw(bali.Exception);
            var item = queue.removeItem();
            expect(item).to.exist;
            expect(item.toString()).to.equal('"alpha"');
            size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(2);
            item = queue.removeItem();
            expect(item).to.exist;
            expect(item.toString()).to.equal('"beta"');
            size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(1);
            item = queue.removeItem();
            expect(item).to.exist;
            expect(item.toString()).to.equal('"gamma"');
            size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(queue.toBoolean()).to.equal(false);
        });

        it('should create a queue from an array', function() {
            const queue = bali.queue(array);
            var size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(queue.toBoolean()).to.equal(true);
            expect(queue.getHash()).to.exist;
            const iterator = queue.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            queue.removeAll();
            size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(queue.toBoolean()).to.equal(false);
        });

        it('should create a queue from a list', function() {
            const list = bali.list(array);
            queue = bali.queue(list);
            var size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            const iterator = queue.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            queue.removeAll();
            size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(queue.toBoolean()).to.equal(false);
        });

        it('should create a queue from a queue', function() {
            const expected = bali.queue(array);
            const queue = bali.queue(expected);
            var size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            const comparator = new bali.comparator();
            expect(comparator.areEqual(queue, expected)).to.equal(true);
            const iterator = queue.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            queue.removeAll();
            size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(queue.toBoolean()).to.equal(false);
        });

    });

    describe('Test the queue methods', function() {

        it('should be able to add and remove items from a queue', function() {
            const queue = bali.queue(array);
            const size = queue.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(queue.toBoolean()).to.equal(true);
            var first = queue.headItem();
            expect(first.toString()).to.equal('"alpha"');
            var item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 1);
            first = queue.headItem();
            expect(first.toString()).to.equal('"beta"');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 2);
            first = queue.headItem();
            expect(first.toString()).to.equal('"delta"');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 3);
            expect(queue.toString()).to.equal('[\n    "epsilon"\n    "gamma"\n]($type: /bali/collections/Queue/v1)');
            first = queue.headItem();
            expect(first.toString()).to.equal('"epsilon"');
            expect(
                function() {
                    queue.getIndex('"gamma"');
                }
            ).to.throw(bali.Exception);
            expect(
                function() {
                    queue.getItem(1);
                }
            ).to.throw(bali.Exception);
            expect(
                function() {
                    queue.getItems('[1..3]');
                }
            ).to.throw(bali.Exception);
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(size - 4);
            first = queue.headItem();
            expect(first.toString()).to.equal('"gamma"');
            item = queue.removeItem();
            expect(first).to.equal(item);
            expect(queue.getSize()).to.equal(0);
            expect(queue.toBoolean()).to.equal(false);
            first = queue.headItem();
            expect(first).to.equal(undefined);
            item = queue.removeItem();
            expect(item).to.equal(undefined);
        });

    });

    describe('Test the queue iterators', function() {

        it('should iterate over a queue forwards and backwards', function() {
            const queue = bali.queue(array);
            const iterator = queue.getIterator();
            expect(iterator).to.exist;
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
