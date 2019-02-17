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
    const array = ['"alpha"', '"beta"', '"delta"', '"epsilon"', '"gamma"'];

    describe('Test the stack constructors.', function() {

        it('should create an empty stack', function() {
            const stack = bali.stack();
            expect(stack).to.exist;  // jshint ignore:line
            const size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            stack.deleteAll();
            const copy = bali.stack();
            expect(copy).to.exist;  // jshint ignore:line
            expect(stack.isEqualTo(copy)).to.equal(true);
            const signum = stack.comparedTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create an empty stack with small capacity', function() {
            const parameters = bali.parameters({$capacity: 1});
            const stack = bali.stack([], parameters);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            stack.addItem('"alpha"');
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(1);
            expect(function() {stack.addItem('"beta"');}).to.throw(bali.Exception);
            const top = stack.removeItem();
            expect(top).to.exist;  // jshint ignore:line
            expect(top.toString()).to.equal('"alpha"');
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from an array', function() {
            const stack = bali.stack(array);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.deleteAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from a list', function() {
            const list = bali.list(array);
            stack = bali.stack(list);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.deleteAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from a stack', function() {
            const expected = bali.stack(array);
            const stack = bali.stack(expected);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            expect(stack.isEqualTo(expected)).to.equal(true);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.deleteAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

    });

    describe('Test the stack methods.', function() {

        it('should be able to push and pop items from a stack', function() {
            const stack = bali.stack(array);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var top = stack.getTop();
            expect(top.toString()).to.equal('"gamma"');
            var pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 1);
            top = stack.getTop();
            expect(top.toString()).to.equal('"epsilon"');
            pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 2);
            top = stack.getTop();
            expect(top.toString()).to.equal('"delta"');
            pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 3);
            expect(stack.toString()).to.equal('["alpha", "beta"]($type: $Stack)');
            top = stack.getTop();
            expect(top.toString()).to.equal('"beta"');
            pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 4);
            top = stack.getTop();
            expect(top.toString()).to.equal('"alpha"');
            pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(0);
            expect(function() {stack.getTop();}).to.throw(Error, 'Attempted to access the top item of an empty stack.');
            expect(function() {stack.removeItem();}).to.throw(Error, 'Attempted to pop an item off of an empty stack.');
        });

    });

    describe('Test the stack iterators.', function() {

        it('should iterate over a stack forwards and backwards', function() {
            const stack = bali.stack(array);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            // iterator through the items from bottom to top
            var index = 0;
            var item;
            while (index > array.length) {
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
            // iterator through the items from top to bottom
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
