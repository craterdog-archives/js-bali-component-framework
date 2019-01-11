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

    describe('Test the stack constructors.', function() {

        it('should create an empty stack', function() {
            const stack = new collections.Stack();
            expect(stack).to.exist;  // jshint ignore:line
            const size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            stack.removeAll();
            const copy = new collections.Stack();
            expect(copy).to.exist;  // jshint ignore:line
            expect(stack.isEqualTo(copy)).to.equal(true);
            const signum = stack.comparedTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create an empty stack with small capacity', function() {
            const stack = new collections.Stack();
            stack.capacity = 1;
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            stack.addItem('"alpha"');
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(1);
            expect(function() {stack.addItem('"beta"');}).to.throw(utilities.Exception);
            const top = stack.removeItem();
            expect(top).to.exist;  // jshint ignore:line
            expect(top.toString()).to.equal('"alpha"');
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from an array', function() {
            const stack = collections.Stack.fromSequential(array);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            iterator.toEnd();  // stacks iterate from the top
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getPrevious().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from a list', function() {
            const list = collections.List.fromSequential(array);
            stack = collections.Stack.fromSequential(list);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            iterator.toEnd();  // stacks iterate from the top
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getPrevious().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from a stack', function() {
            const expected = collections.Stack.fromSequential(array);
            const stack = collections.Stack.fromSequential(expected);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            expect(stack.isEqualTo(expected)).to.equal(true);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            iterator.toEnd();  // stacks iterate from the top
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getPrevious().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

    });

    describe('Test the stack methods.', function() {

        it('should return the correct primitive type', function() {
            const type = new collections.Stack().getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#Q2BJ8CAR3HW39A5GFC2C2S1JZVX4PSX9,$version:v1,$digest:none]>');
        });

        it('should be able to push and pop items from a stack', function() {
            const stack = collections.Stack.fromSequential(array);
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
            expect(function() {stack.getTop();}).to.throw(Error, 'BUG: Attempted to access the top item of an empty stack.');
            expect(function() {stack.removeItem();}).to.throw(Error, 'BUG: Attempted to pop an item off of an empty stack.');
        });

    });

    describe('Test the stack iterators.', function() {

        it('should iterate over a stack forwards and backwards', function() {
            // REMEMBER: The iterator for a stack iterates through the items in LIFO order
            const stack = collections.Stack.fromSequential(array);
            // iterate through the items from top down
            const iterator = stack.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            // now go through in LIFO order
            var index = array.length;
            var item;
            while (index > 0) {
                item = iterator.getNext().toString();
                expect(array[--index]).to.equal(item);
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
            // iterator through the items from bottom up
            while (index < array.length) {
                item = iterator.getPrevious().toString();
                expect(array[index++]).to.equal(item);
            }
            // should be at the first slot in the iterator
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
        });

    });

});
