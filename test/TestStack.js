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


describe('Bali Nebula™ Component Framework - Stack', function() {

    const array = ['"alpha"', '"beta"', '"delta"', '"epsilon"', '"gamma"'];

    describe('Test the stack constructors', function() {

        it('should create an empty stack', function() {
            const stack = bali.stack();
            expect(stack).to.exist;
            const size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(stack.isEmpty()).to.equal(true);
            expect(stack.toBoolean()).to.equal(false);
            expect(stack.getHash()).to.exist;
            const iterator = stack.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            expect(bali.source(iterator)).to.exist;
            stack.removeAll();
            const copy = bali.stack();
            expect(copy).to.exist;
            const comparator = new bali.comparator();
            expect(comparator.areEqual(stack, copy)).to.equal(true);
            const signum = comparator.ranking(stack, copy);
            expect(signum).to.equal(0);
        });

        it('should create an empty stack with small capacity', function() {
            const stack = bali.stack([], {$capacity: 1});
            var size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            stack.addItem('"alpha"');
            size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(1);
            expect(stack.isEmpty()).to.equal(false);
            expect(stack.toBoolean()).to.equal(true);
            expect(stack.getHash()).to.exist;
            expect(
                function() {
                    stack.addItem('"beta"');
                }
            ).to.throw(bali.Exception);
            const top = stack.removeItem();
            expect(top).to.exist;
            expect(top.toString()).to.equal('"alpha"');
            size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(stack.toBoolean()).to.equal(false);
        });

        it('should create a stack from an array', function() {
            const stack = bali.stack(array);
            var size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(stack.toBoolean()).to.equal(true);
            expect(stack.getHash()).to.exist;
            const iterator = stack.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(stack.toBoolean()).to.equal(false);
        });

        it('should create a stack from a list', function() {
            const list = bali.list(array);
            stack = bali.stack(list);
            var size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(stack.getHash()).to.exist;
            const iterator = stack.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(stack.toBoolean()).to.equal(false);
        });

        it('should create a stack from a stack', function() {
            const expected = bali.stack(array);
            const stack = bali.stack(expected);
            var size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            const comparator = new bali.comparator();
            expect(comparator.areEqual(stack, expected)).to.equal(true);
            expect(stack.getHash()).to.exist;
            const iterator = stack.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            stack.removeAll();
            size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(stack.toBoolean()).to.equal(false);
        });

    });

    describe('Test the stack methods', function() {

        it('should be able to push and pop items from a stack', function() {
            const stack = bali.stack(array);
            var size = stack.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(
                function() {
                    stack.getIndex('"gamma"');
                }
            ).to.throw(bali.Exception);
            expect(
                function() {
                    stack.getItem(1);
                }
            ).to.throw(bali.Exception);
            expect(
                function() {
                    stack.getItems('[1..3]');
                }
            ).to.throw(bali.Exception);
            var top = stack.topItem();
            expect(top.toString()).to.equal('"gamma"');
            var pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 1);
            top = stack.topItem();
            expect(top.toString()).to.equal('"epsilon"');
            pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 2);
            top = stack.topItem();
            expect(top.toString()).to.equal('"delta"');
            pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 3);
            expect(stack.toString()).to.equal('[\n    "alpha"\n    "beta"\n]($type: /bali/collections/Stack/v1)');
            top = stack.topItem();
            expect(top.toString()).to.equal('"beta"');
            pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(size - 4);
            top = stack.topItem();
            expect(top.toString()).to.equal('"alpha"');
            pop = stack.removeItem();
            expect(top).to.equal(pop);
            expect(stack.getSize()).to.equal(0);
            expect(stack.toBoolean()).to.equal(false);
            expect(
                function() {
                    stack.topItem();
                }
            ).to.throw(bali.Exception);
            expect(
                function() {
                    stack.removeItem();
                }
            ).to.throw(bali.Exception);
        });

    });

    describe('Test the stack iterators', function() {

        it('should iterate over a stack forwards and backwards', function() {
            const stack = bali.stack(array);
            const iterator = stack.getIterator();
            expect(iterator).to.exist;
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
