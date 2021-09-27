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


describe('Bali Nebula™ Component Framework - List', function() {

    const array = ['"alpha"', '"beta"', '"delta"', '"epsilon"', '"gamma"'];

    describe('Test the list constructors', function() {

        it('should create an empty list', function() {
            const list = bali.list();
            expect(list).to.exist;
            const size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(list.isEmpty()).to.equal(true);
            expect(list.toBoolean()).to.equal(false);
            expect(list.getHash()).to.exist;
            const iterator = list.getIterator();
            expect(iterator).to.exist;
            iterator.toSlot(-1);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            iterator.toStart();
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            expect(bali.source(iterator)).to.exist;
            list.removeAll();
            const copy = list.constructor(list.getParameters());
            expect(copy).to.exist;
            const comparator = new bali.comparator();
            expect(comparator.areEqual(list, copy)).to.equal(true);
            const signum = comparator.ranking(list, copy);
            expect(signum).to.equal(0);
        });

        it('should create a list from an array', function() {
            const list = bali.list(array);
            var size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(list.isEmpty()).to.equal(false);
            expect(list.toBoolean()).to.equal(true);
            expect(list.getHash()).to.exist;
            const iterator = list.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            list.removeAll();
            size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(list.toBoolean()).to.equal(false);
        });

        it('should create a list from a list', function() {
            var list = bali.list(array);
            list = bali.list(list);
            var size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            expect(list.toBoolean()).to.equal(true);
            const iterator = list.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            list.removeAll();
            size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(list.toBoolean()).to.equal(false);
        });

        it('should create a list from a set', function() {
            const set = bali.set(array);
            const list = bali.list(set);
            var size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(array.length);
            const iterator = list.getIterator();
            expect(iterator).to.exist;
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            list.removeAll();
            size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(0);
            expect(list.toBoolean()).to.equal(false);
        });

        it('should throw an exception when constructing a list with an invalid type', function() {
            expect(
                function() {
                    bali.component('[](:)');
                }
            ).to.throw();
            expect(
                function() {
                    bali.component('[]($type: /bali/collections/Invalid)');
                }
            ).to.throw();
        });

    });

    describe('Test the list methods', function() {

        it('should be able to call the List class methods on the list', function() {
            const list1 = bali.list();
            list1.addItem('"alpha"');
            list1.addItem('"beta"');
            list1.addItem('"delta"');
            const list2 = bali.list();
            list2.addItem('"epsilon"');
            list2.addItem('"gamma"');
            list1.addItems(list2);
            var size = list1.getSize();
            expect(size).to.equal(5);
            expect(list1.containsAll(list2)).to.equal(true);
            expect(list2.containsAll(list1)).to.equal(false);
            expect(list2.containsAny(list1)).to.equal(true);
            const list3 = list1.getItems(bali.range(2, '..', 4));
            size = list3.getSize();
            expect(size).to.equal(3);
            expect(list3.containsItem('"epsilon"')).to.equal(true);
            expect(list3.containsItem('"alpha"')).to.equal(false);
            expect(list3.getIndex('"delta"')).to.equal(2);
            list2.addItems(list1);
            size = list2.getSize();
            expect(size).to.equal(7);
            expect(list2.toBoolean()).to.equal(true);
            expect(list2.containsAll(list1)).to.equal(true);
            expect(list2.containsItem('zeta')).to.equal(false);
        });

        it('should be able to add and remove items from a list', function() {
            const list = bali.list(array);
            var size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(5);
            expect(list.getItem(2).toString()).to.equal('"beta"');
            expect(list.getIndex('"alpha"')).to.equal(1);
            expect(list.getItem(5).toString()).to.equal('"gamma"');
            expect(list.getIndex('"delta"')).to.equal(3);
            expect(
                function() {
                    list.getItem(-100);
                }
            ).to.throw();
            const iterator = list.getIterator();
            expect(iterator).to.exist;
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            list.removeItem(2);
            size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(4);
            list.removeItems('[2..3]');
            size = list.getSize();
            expect(size).to.exist;
            expect(size).to.equal(2);
            // the iterator should be pointing at a copy of the array so unaffected
            iterator.toStart();
            var index = 0;
            while (iterator.hasNext()) {
                item = iterator.getNext().toString();
                expect(item).to.equal(array[index++]);
            }
        });

        it('should be able to sort and randomize lists', function() {
            const original = [
                '"alpha"',
                '"beta"',
                '"chi"',
                '"delta"',
                '"epsilon"',
                '"eta"',
                '"gamma"',
                '"iota"',
                '"kappa"',
                '"lambda"',
                '"mu"',
                '"nu"',
                '"omega"',
                '"omicron"',
                '"phi"',
                '"pi"',
                '"psi"',
                '"rho"',
                '"sigma"',
                '"tau"',
                '"theta"',
                '"upsilon"',
                '"xi"',
                '"zeta"'
            ];
            const list = bali.list(original);
            const sorted = bali.list(original);
            sorted.shuffleItems();
            const comparator = new bali.comparator();
            expect(comparator.areEqual(sorted, list)).to.equal(false);
            sorted.sortItems();
            expect(comparator.areEqual(sorted, list)).to.equal(true);
        });

        it('should be able to perform list operations on lists', function() {
            const list1 = bali.list();
            list1.addItem('"alpha"');
            list1.addItem('"beta"');
            list1.addItem('"delta"');
            const list2 = bali.list();
            list2.addItem('"epsilon"');
            list2.addItem('"gamma"');
            const list3 = bali.list(array);
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.list.chain(list1, list2), list3)).to.equal(true);
        });

    });

    describe('Test the list iterators', function() {

        it('should iterate over a list forwards and backwards', function() {
            const list = bali.list(array);
            const iterator = list.getIterator();
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
