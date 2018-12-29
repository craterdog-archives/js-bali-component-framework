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
    var array = ['alpha', 'beta', 'delta', 'epsilon', 'gamma'];

    describe('Test the list constructors.', function() {

        it('should create an empty list', function() {
            var list = new collections.List();
            expect(list).to.exist;  // jshint ignore:line
            var size = list.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            var iterator = list.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            list.removeAll();
            var copy = list.constructor(list.parameters);
            expect(copy).to.exist;  // jshint ignore:line
            expect(list.isEqualTo(copy)).to.equal(true);
            var signum = list.comparedTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create a list from an array', function() {
            var list = collections.List.from(array);
            var size = list.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = list.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            list.removeAll();
            size = list.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a list from a list', function() {
            var list = collections.List.from(array);
            list = collections.List.from(list);
            var size = list.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = list.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            list.removeAll();
            size = list.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a list from a set', function() {
            var set = collections.Set.from(array);
            var list = collections.List.from(set);
            var size = list.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = list.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            list.removeAll();
            size = list.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

    });

    describe('Test the list methods.', function() {

        it('should return the correct primitive type', function() {
            var type = new collections.List().getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#TRYB04LK9Z1TSABALD7W31K8YFSN1F0F,$version:v1,$digest:none]>');
        });

        it('should be able to call the List class methods on the list', function() {
            var list1 = new collections.List();
            list1.addItem('alpha');
            list1.addItem('beta');
            list1.addItem('delta');
            var list2 = new collections.List();
            list2.addItem('epsilon');
            list2.addItem('gamma');
            list1.addItems(list2);
            size = list1.getSize();
            expect(size).to.equal(5);
            expect(list1.containsAll(list2)).to.equal(true);
            expect(list2.containsAll(list1)).to.equal(false);
            expect(list2.containsAny(list1)).to.equal(true);
            var list3 = list1.getItems(2, 4);
            size = list3.getSize();
            expect(size).to.equal(3);
            expect(list3.containsItem('epsilon')).to.equal(true);
            expect(list3.containsItem('alpha')).to.equal(false);
            expect(list3.getIndex('delta')).to.equal(2);
            list2.addItems(list1);
            size = list2.getSize();
            expect(size).to.equal(7);
            expect(list2.containsAll(list1)).to.equal(true);
            expect(list2.containsItem('zeta')).to.equal(false);
        });

        it('should be able to add and remove items from a list', function() {
            var list = collections.List.from(array);
            var size = list.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(5);
            expect(list.getItem(2).toString()).to.equal('beta');
            expect(list.getIndex('alpha')).to.equal(1);
            expect(list.getItem(5).toString()).to.equal('gamma');
            expect(list.getIndex('delta')).to.equal(3);
            var iterator = list.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            list.removeItem(2);
            list.removeItem(1);
            size = list.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(3);
            // the iterator should be pointing at a copy of the array so unaffected
            iterator.toStart();
            var index = 0;
            while (iterator.hasNext()) {
                item = iterator.getNext().toString();
                expect(item).to.equal(array[index++]);
            }
        });

        it('should be able to sort and randomize lists', function() {
            var original = [
                'alpha',
                'beta',
                'chi',
                'delta',
                'epsilon',
                'eta',
                'gamma',
                'iota',
                'kappa',
                'lambda',
                'mu',
                'nu',
                'omega',
                'omicron',
                'phi',
                'pi',
                'psi',
                'rho',
                'sigma',
                'tau',
                'theta',
                'upsilon',
                'xi',
                'zeta'
            ];
            var list = collections.List.from(original);
            var sorted = collections.List.from(original);
            sorted.shuffleItems();
            expect(sorted.isEqualTo(list)).to.equal(false);  // should fail once every 24! runs on average ;-)
            sorted.sortItems();
            expect(sorted.isEqualTo(list)).to.equal(true);
        });

        it('should be able to perform list operations on lists', function() {
            var list1 = new collections.List();
            list1.addItem('alpha');
            list1.addItem('beta');
            list1.addItem('delta');
            var list2 = new collections.List();
            list2.addItem('epsilon');
            list2.addItem('gamma');
            var list3 = collections.List.from(array);
            expect(collections.List.concatenation(list1, list2).isEqualTo(list3)).to.equal(true);
        });

    });

    describe('Test the list iterators.', function() {

        it('should iterate over a list forwards and backwards', function() {
            var list = collections.List.from(array);
            var iterator = list.getIterator();
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
