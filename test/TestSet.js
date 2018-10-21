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

    describe('Test the set constructors.', function() {

        it('should create an empty set', function() {
            var set = new composites.Set();
            expect(set).to.exist;  // jshint ignore:line
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            var iterator = set.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            set.removeAll();
            var copy = set.constructor(set.parameters);
            expect(copy).to.exist;  // jshint ignore:line
            expect(set.equalTo(copy)).to.equal(true);
            var signum = set.comparedTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create a set from an array', function() {
            var set = composites.Set.fromCollection(array);
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = set.iterator();
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
            var list = composites.List.fromCollection(array);
            var set = composites.Set.fromCollection(list);
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = set.iterator();
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
            var set = composites.Set.fromCollection(array);
            set = composites.Set.fromCollection(set);
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = set.iterator();
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

        it('should create a set from a stack', function() {
            var stack = composites.Stack.fromCollection(array);
            var set = composites.Set.fromCollection(stack);
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = set.iterator();
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

        it('should be able to call the Collection class methods on the set', function() {
            var set1 = new composites.Set();
            set1.addItem('alpha');
            set1.addItem('beta');
            set1.addItem('delta');
            var set2 = new composites.Set();
            set2.addItem('epsilon');
            set2.addItem('gamma');
            set1.addItems(set2);
            size = set1.getSize();
            expect(size).to.equal(5);
            expect(set1.containsAll(set2)).to.equal(true);
            expect(set2.containsAll(set1)).to.equal(false);
            expect(set2.containsAny(set1)).to.equal(true);
            var set3 = set1.getItems(2, 4);
            size = set3.getSize();
            expect(size).to.equal(3);
            expect(set3.containsItem('epsilon')).to.equal(true);
            expect(set3.containsItem('alpha')).to.equal(false);
            expect(set3.getIndex('delta')).to.equal(2);
            set2.addItems(set1);
            size = set2.getSize();
            expect(size).to.equal(5);
            expect(set2.containsAll(set1)).to.equal(true);
            set2.removeItems(set3);
            size = set2.getSize();
            expect(size).to.equal(2);
            expect(set2.containsItem('delta')).to.equal(false);
        });

        it('should be able to add and remove items from a set', function() {
            var set = composites.Set.fromCollection(array);
            var size = set.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(5);
            expect(set.getItem(2).toString()).to.equal('beta');
            expect(set.getIndex('alpha')).to.equal(1);
            expect(set.getItem(5).toString()).to.equal('gamma');
            expect(set.getIndex('delta')).to.equal(3);
            var iterator = set.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            array.forEach(function(item) {
                expect(item).to.equal(iterator.getNext().toString());
            });
            set.removeItem('beta');
            set.removeItem('alpha');
            size = set.getSize();
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

        it('should be able to perform set operations on sets', function() {
            var set1 = new composites.Set();
            set1.addItem('alpha');
            set1.addItem('beta');
            set1.addItem('delta');
            var set2 = new composites.Set();
            set2.addItem('beta');
            set2.addItem('delta');
            set2.addItem('epsilon');
            set2.addItem('gamma');
            var set3 = new composites.Set();
            set3.addItem('beta');
            set3.addItem('delta');
            expect(composites.Set.intersection(set1, set2).equalTo(set3)).to.equal(true);
            var set4 = new composites.Set();
            set4.addItem('alpha');
            expect(composites.Set.difference(set1, set2).equalTo(set4)).to.equal(true);
            var set5 = new composites.Set();
            set5.addItem('alpha');
            set5.addItem('beta');
            set5.addItem('delta');
            set5.addItem('epsilon');
            set5.addItem('gamma');
            expect(composites.Set.union(set1, set2).equalTo(set5)).to.equal(true);
            var set6 = new composites.Set();
            set6.addItem('alpha');
            set6.addItem('epsilon');
            set6.addItem('gamma');
            expect(composites.Set.maverick(set1, set2).equalTo(set6)).to.equal(true);
        });

    });

    describe('Test the set iterators.', function() {

        it('should iterate over a set forwards and backwards', function() {
            var set = composites.Set.fromCollection(array);
            var iterator = set.iterator();
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
