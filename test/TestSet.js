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


describe('Bali Nebula™ Component Framework - Set', function() {

    const array = ['"alpha"', '"beta"', '"delta"', '"epsilon"', '"gamma"'];

    describe('Test the set constructors', function() {

        it('should create an empty set', function() {
            const set = bali.set();
            expect(set).to.exist;
            const size = set.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(set.isEmpty()).to.equal(true);
            expect(set.toBoolean()).to.equal(false);
            expect(set.getHash()).to.exist;
            const iterator = set.getIterator();
            expect(iterator).to.exist;
            iterator.toSlot(-1);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            iterator.toStart();
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            expect(bali.source(iterator)).to.exist;
            set.removeAll();
            const copy = set.constructor(set.getParameters());
            expect(copy).to.exist;
            const comparator = new bali.comparator();
            expect(comparator.areEqual(set, copy)).to.equal(true);
            const signum = comparator.ranking(set, copy);
            expect(signum).to.equal(0);
        });

        it('should create a set from an array', function() {
            const set = bali.set(array);
            var size = set.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(set.isEmpty()).to.equal(false);
            expect(set.toBoolean()).to.equal(true);
            expect(set.getHash()).to.exist;
            const iterator = set.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            set.removeAll();
            size = set.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(set.toBoolean()).to.equal(false);
        });

        it('should create a set from a list', function() {
            const list = bali.list(array);
            list.shuffleItems();
            const set = bali.set(list);
            var size = set.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(set.toBoolean()).to.equal(true);
            expect(set.getHash()).to.exist;
            const iterator = set.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            set.removeAll();
            size = set.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(set.toBoolean()).to.equal(false);
        });

        it('should create a set from a set', function() {
            var set = bali.set(array);
            set = bali.set(set);
            var size = set.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(set.getHash()).to.exist;
            const iterator = set.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            set.removeAll();
            size = set.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(set.toBoolean()).to.equal(false);
        });

    });

    describe('Test the set methods', function() {

        it('should be able to call the Set class methods on the set', function() {
            const set1 = bali.set();
            set1.addItem('"alpha"');
            set1.addItem('"beta"');
            set1.addItem('"delta"');
            expect(set1.toString()).to.equal('[\n    "alpha"\n    "beta"\n    "delta"\n]($type: /nebula/collections/Set/v1)');
            const set2 = bali.set();
            set2.addItem('"epsilon"');
            set2.addItem('"gamma"');
            set1.addItems(set2);
            size = set1.getSize();
            expect(size).to.equal(5);
            expect(set1.containsAll(set2)).to.equal(true);
            expect(set2.containsAll(set1)).to.equal(false);
            expect(set2.containsAny(set1)).to.equal(true);
            const set3 = set1.getItems(bali.range(2, '..', 4));
            size = set3.getSize();
            expect(size).to.equal(3);
            expect(set3.containsItem('"epsilon"')).to.equal(true);
            expect(set3.containsItem('"alpha"')).to.equal(false);
            expect(set3.getIndex('"delta"')).to.equal(2);
            set2.addItems(set1);
            size = set2.getSize();
            expect(size).to.equal(5);
            expect(set2.containsAll(set1)).to.equal(true);
            expect(set2.removeItems(set3)).to.equal(set3.getSize());
            size = set2.getSize();
            expect(size).to.equal(2);
            expect(set2.toBoolean()).to.equal(true);
            expect(set2.containsItem('"delta"')).to.equal(false);
        });

        it('should be able to add and remove items from a set', function() {
            const set = bali.set(array);
            var size = set.getSize();
            expect(size).to.exist;
            expect(size).to.equal(5);
            expect(set.getItem(2).toString()).to.equal('"beta"');
            expect(set.getIndex('"alpha"')).to.equal(1);
            expect(set.getItem(5).toString()).to.equal('"gamma"');
            expect(set.getIndex('"delta"')).to.equal(3);
            var iterator = set.getIterator();
            expect(iterator).to.exist;
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            expect(set.removeItem('"beta"')).to.exist;
            expect(set.removeItem('"alpha"')).to.exist;
            size = set.getSize();
            expect(size).to.exist;
            expect(size).to.equal(3);
            iterator = set.getIterator();
            var index = 2;
            while (iterator.hasNext()) {
                item = iterator.getNext().toString();
                expect(item).to.equal(array[index++]);
            }
        });

        it('should be able to perform set operations on sets', function() {
            const set1 = bali.set();
            set1.addItem('"alpha"');
            set1.addItem('"beta"');
            set1.addItem('"delta"');
            const set2 = bali.set();
            set2.addItem('"beta"');
            set2.addItem('"delta"');
            set2.addItem('"epsilon"');
            set2.addItem('"gamma"');
            const set3 = bali.set();
            set3.addItem('"beta"');
            set3.addItem('"delta"');
            expect(
                function() {
                    bali.set.not(set1);
                }
            ).to.throw();
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.set.and(set1, set2), set3)).to.equal(true);
            const set4 = bali.set();
            set4.addItem('"alpha"');
            expect(comparator.areEqual(bali.set.sans(set1, set2), set4)).to.equal(true);
            const set5 = bali.set();
            set5.addItem('"alpha"');
            set5.addItem('"beta"');
            set5.addItem('"delta"');
            set5.addItem('"epsilon"');
            set5.addItem('"gamma"');
            expect(comparator.areEqual(bali.set.or(set1, set2), set5)).to.equal(true);
            const set6 = bali.set();
            set6.addItem('"alpha"');
            set6.addItem('"epsilon"');
            set6.addItem('"gamma"');
            expect(comparator.areEqual(bali.set.xor(set1, set2), set6)).to.equal(true);
        });

    });

    describe('Test the set iterators', function() {

        it('should iterate over a set forwards and backwards', function() {
            const set = bali.set(array);
            const iterator = set.getIterator();
            expect(iterator).to.exist;
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
