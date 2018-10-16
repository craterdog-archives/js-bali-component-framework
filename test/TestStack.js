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


describe('Bali Document Notation™', function() {
    var array = ['alpha', 'beta', 'delta', 'epsilon', 'gamma'];

    describe('Test the stack constructors.', function() {

        it('should create an empty stack', function() {
            var stack = new composites.Stack();
            expect(stack).to.exist;  // jshint ignore:line
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            var iterator = stack.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            stack.removeAll();
            var copy = new composites.Stack();
            expect(copy).to.exist;  // jshint ignore:line
            expect(stack.equalTo(copy)).to.equal(true);
            var signum = stack.compareTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create an empty stack with small capacity', function() {
            var stack = new composites.Stack();
            stack.capacity = 1;
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            stack.pushItem('alpha');
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(1);
            expect(function() {stack.pushItem('beta');}).to.throw(Error, 'STACK: Attempted to push an item onto a full stack.');
            var top = stack.popItem();
            expect(top).to.exist;  // jshint ignore:line
            expect(top.toString()).to.equal('alpha');
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from an array', function() {
            var stack = composites.Stack.fromCollection(array);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = stack.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from a list', function() {
            var list = composites.List.fromCollection(array);
            stack = composites.Stack.fromCollection(list);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = stack.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from a set', function() {
            var set = composites.Set.fromCollection(array);
            var stack = composites.Stack.fromCollection(set);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = stack.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a stack from a stack', function() {
            var stack = composites.Stack.fromCollection(array);
            stack = composites.Stack.fromCollection(stack);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = stack.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

    });

    describe('Test the stack methods.', function() {

        it('should be able to push and pop items from a stack', function() {
            var stack = composites.Stack.fromCollection(array);
            var size = stack.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var top = stack.getTop();
            expect(top.toString()).to.equal('gamma');
            var pop = stack.popItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 1);
            top = stack.getTop();
            expect(top.toString()).to.equal('epsilon');
            pop = stack.popItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 2);
            top = stack.getTop();
            expect(top.toString()).to.equal('delta');
            pop = stack.popItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 3);
            top = stack.getTop();
            expect(top.toString()).to.equal('beta');
            pop = stack.popItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 4);
            top = stack.getTop();
            expect(top.toString()).to.equal('alpha');
            pop = stack.popItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(0);
            expect(function() {stack.getTop();}).to.throw(Error, 'STACK: Attempted to access the top item of an empty stack.');
            expect(function() {stack.popItem();}).to.throw(Error, 'STACK: Attempted to pop the top item of an empty stack.');
        });

    });

    describe('Test the stack iterators.', function() {

        it('should iterate over a stack forwards and backwards', function() {
            // REMEMBER: The iterator for a stack iterates through the items in LIFO order
            var stack = new composites.Stack();
            var index;
            var item;
            // place the items on the stack in order
            while (index < array.length) {
                stack.pushItem(array[index++]);
            }
            // iterate through the items from top down
            var iterator = stack.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasPrevious() === false);
            expect(iterator.hasNext() === true);
            // now go through in LIFO order
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
