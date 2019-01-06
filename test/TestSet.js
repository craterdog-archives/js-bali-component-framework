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
const abstractions = require('../src/abstractions');
const composites = require('../src/composites');
const collections = require('../src/collections');


describe('Bali Component Framework™', function() {
    const array = ['"alpha"', '"beta"', '"delta"', '"epsilon"', '"gamma"'];

    describe('Test the set constructors.', function() {

        it('should create an empty set', function() {
            const set = new collections.Set();
            expect(set).to.exist;  // jshint ignore:line
            const size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            const iterator = set.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            set.removeAll();
            const copy = set.constructor(set.parameters);
            expect(copy).to.exist;  // jshint ignore:line
            expect(set.isEqualTo(copy)).to.equal(true);
            const signum = set.comparedTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create a set from an array', function() {
            const set = collections.Set.from(array);
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = set.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            set.removeAll();
            size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a set from a list', function() {
            const list = collections.List.from(array);
            const set = collections.Set.from(list);
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = set.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            set.removeAll();
            size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a set from a set', function() {
            var set = collections.Set.from(array);
            set = collections.Set.from(set);
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = set.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            set.removeAll();
            size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

    });

    describe('Test the set methods.', function() {

        it('should return the correct primitive type', function() {
            const type = new collections.Set().getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#PB33C4Z89QTKBD8P824JMN83STXZGHY9,$version:v1,$digest:none]>');
        });

        it('should be able to call the Set class methods on the set', function() {
            const set1 = new collections.Set();
            set1.addItem('"alpha"');
            set1.addItem('"beta"');
            set1.addItem('"delta"');
            const set2 = new collections.Set();
            set2.addItem('"epsilon"');
            set2.addItem('"gamma"');
            set1.addItems(set2);
            size = set1.getSize();
            expect(size).to.equal(5);
            expect(set1.containsAll(set2)).to.equal(true);
            expect(set2.containsAll(set1)).to.equal(false);
            expect(set2.containsAny(set1)).to.equal(true);
            const set3 = set1.getItems(new composites.Range(2, 4));
            size = set3.getSize();
            expect(size).to.equal(3);
            expect(set3.containsItem('"epsilon"')).to.equal(true);
            expect(set3.containsItem('"alpha"')).to.equal(false);
            expect(set3.getIndex('"delta"')).to.equal(2);
            set2.addItems(set1);
            size = set2.getSize();
            expect(size).to.equal(5);
            expect(set2.containsAll(set1)).to.equal(true);
            set2.removeItems(set3);
            size = set2.getSize();
            expect(size).to.equal(2);
            expect(set2.containsItem('"delta"')).to.equal(false);
        });

        it('should be able to add and remove items from a set', function() {
            const set = collections.Set.from(array);
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(5);
            expect(set.getItem(2).toString()).to.equal('"beta"');
            expect(set.getIndex('"alpha"')).to.equal(1);
            expect(set.getItem(5).toString()).to.equal('"gamma"');
            expect(set.getIndex('"delta"')).to.equal(3);
            const iterator = set.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            set.removeItem('"beta"');
            set.removeItem('"alpha"');
            size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(3);
            iterator.toStart();
            var index = 2;
            while (iterator.hasNext()) {
                item = iterator.getNext().toString();
                expect(item).to.equal(array[index++]);
            }
        });

        it('should be able to perform set operations on sets', function() {
            const set1 = new collections.Set();
            set1.addItem('"alpha"');
            set1.addItem('"beta"');
            set1.addItem('"delta"');
            const set2 = new collections.Set();
            set2.addItem('"beta"');
            set2.addItem('"delta"');
            set2.addItem('"epsilon"');
            set2.addItem('"gamma"');
            const set3 = new collections.Set();
            set3.addItem('"beta"');
            set3.addItem('"delta"');
            expect(collections.Set.and(set1, set2).isEqualTo(set3)).to.equal(true);
            const set4 = new collections.Set();
            set4.addItem('"alpha"');
            expect(collections.Set.sans(set1, set2).isEqualTo(set4)).to.equal(true);
            const set5 = new collections.Set();
            set5.addItem('"alpha"');
            set5.addItem('"beta"');
            set5.addItem('"delta"');
            set5.addItem('"epsilon"');
            set5.addItem('"gamma"');
            expect(collections.Set.or(set1, set2).isEqualTo(set5)).to.equal(true);
            const set6 = new collections.Set();
            set6.addItem('"alpha"');
            set6.addItem('"epsilon"');
            set6.addItem('"gamma"');
            expect(collections.Set.xor(set1, set2).isEqualTo(set6)).to.equal(true);
        });

    });

    describe('Test the set iterators.', function() {

        it('should iterate over a set forwards and backwards', function() {
            const set = collections.Set.from(array);
            const iterator = set.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            iterator.toEnd();
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            var item;
            while (iterator.hasPrevious()) {
                item = iterator.getPrevious();
            }
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            item = iterator.getNext().toString();
            expect(item).to.equal(array[0]);
            item = iterator.getNext().toString();
            expect(item).to.equal(array[1]);
            item = iterator.getPrevious().toString();
            expect(item).to.equal(array[1]);
            item = iterator.getPrevious().toString();
            expect(item).to.equal(array[0]);
            while (iterator.hasNext()) {
                item = iterator.getNext().toString();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
        });

    });

});
