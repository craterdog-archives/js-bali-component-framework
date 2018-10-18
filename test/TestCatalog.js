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
    var association1 = new composites.Association(1, 'alpha');
    var association2 = new composites.Association(2, 'beta');
    var association3 = new composites.Association(3, 'delta');
    var association4 = new composites.Association(4, 'epsilon');
    var association5 = new composites.Association(5, 'gamma');

    describe('Test the catalog constructors.', function() {

        it('should create an empty catalog', function() {
            var catalog = new composites.Catalog();
            expect(catalog).to.exist;  // jshint ignore:line
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            var iterator = catalog.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            catalog.removeAll();
            var copy = catalog.emptyCopy();
            expect(copy).to.exist;  // jshint ignore:line
            expect(catalog.equalTo(copy)).to.equal(true);
            var signum = catalog.comparedTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create a catalog from an array', function() {
            var catalog = composites.Catalog.fromCollection(array);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = catalog.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.key.toString()).to.equal('1');
            expect(association.value.toString()).to.equal('alpha');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('2');
            expect(association.value.toString()).to.equal('beta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('3');
            expect(association.value.toString()).to.equal('delta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('4');
            expect(association.value.toString()).to.equal('epsilon');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('5');
            expect(association.value.toString()).to.equal('gamma');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a catalog from a list', function() {
            var list = composites.List.fromCollection(array);
            var catalog = composites.Catalog.fromCollection(list);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = catalog.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.key.toString()).to.equal('1');
            expect(association.value.toString()).to.equal('alpha');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('2');
            expect(association.value.toString()).to.equal('beta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('3');
            expect(association.value.toString()).to.equal('delta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('4');
            expect(association.value.toString()).to.equal('epsilon');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('5');
            expect(association.value.toString()).to.equal('gamma');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a catalog from a set', function() {
            var set = composites.Set.fromCollection(array);
            var catalog = composites.Catalog.fromCollection(set);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = catalog.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.key.toString()).to.equal('1');
            expect(association.value.toString()).to.equal('alpha');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('2');
            expect(association.value.toString()).to.equal('beta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('3');
            expect(association.value.toString()).to.equal('delta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('4');
            expect(association.value.toString()).to.equal('epsilon');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('5');
            expect(association.value.toString()).to.equal('gamma');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a catalog from a stack', function() {
            var stack = composites.Stack.fromCollection(array);
            var catalog = composites.Catalog.fromCollection(stack);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = catalog.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.key.toString()).to.equal('1');
            expect(association.value.toString()).to.equal('alpha');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('2');
            expect(association.value.toString()).to.equal('beta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('3');
            expect(association.value.toString()).to.equal('delta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('4');
            expect(association.value.toString()).to.equal('epsilon');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('5');
            expect(association.value.toString()).to.equal('gamma');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a catalog from an object', function() {
            var object = {
                alpha: 'alpha',
                beta: 'beta',
                delta: 'delta',
                epsilon: 'epsilon',
                gamma: 'gamma'
            };
            var catalog = composites.Catalog.fromCollection(object);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(Object.keys(object).length);
            var iterator = catalog.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.key.toString()).to.equal('$alpha');
            expect(association.value.toString()).to.equal('alpha');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('$beta');
            expect(association.value.toString()).to.equal('beta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('$delta');
            expect(association.value.toString()).to.equal('delta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('$epsilon');
            expect(association.value.toString()).to.equal('epsilon');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('$gamma');
            expect(association.value.toString()).to.equal('gamma');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a catalog from a catalog', function() {
            var catalog = composites.Catalog.fromCollection(array);
            catalog = composites.Catalog.fromCollection(catalog);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            var iterator = catalog.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.key.toString()).to.equal('1');
            expect(association.value.toString()).to.equal('alpha');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('2');
            expect(association.value.toString()).to.equal('beta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('3');
            expect(association.value.toString()).to.equal('delta');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('4');
            expect(association.value.toString()).to.equal('epsilon');
            association = iterator.getNext();
            expect(association.key.toString()).to.equal('5');
            expect(association.value.toString()).to.equal('gamma');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

    });

    describe('Test the catalog methods.', function() {

        it('should be able to call the Collection class methods on the catalog', function() {
            var catalog1 = new composites.Catalog();
            catalog1.addItem(new composites.Association(1, 'alpha'));
            catalog1.addItem(new composites.Association(2, 'beta'));
            catalog1.addItem(new composites.Association(3, 'delta'));
            var catalog2 = new composites.Catalog();
            catalog2.addItem(new composites.Association(4, 'epsilon'));
            catalog2.addItem(new composites.Association(5, 'gamma'));
            catalog1.addItems(catalog2);
            size = catalog1.getSize();
            expect(size).to.equal(array.length);
            expect(catalog1.containsAll(catalog2)).to.equal(true);
            expect(catalog2.containsAll(catalog1)).to.equal(false);
            expect(catalog2.containsAny(catalog1)).to.equal(true);
            var catalog3 = catalog1.getItems(2, 4);
            size = catalog3.getSize();
            expect(size).to.equal(3);
            expect(catalog3.containsItem(association4)).to.equal(true);
            expect(catalog3.containsItem(association1)).to.equal(false);
            expect(catalog3.getIndex(association3)).to.equal(2);
            catalog2.addItems(catalog1);
            size = catalog2.getSize();
            expect(size).to.equal(array.length);
            expect(catalog2.containsAll(catalog1)).to.equal(true);
            catalog2.removeItems(2, 3);
            size = catalog2.getSize();
            expect(size).to.equal(3);
            expect(catalog2.containsItem(association3)).to.equal(false);
        });

        it('should be able to add and remove associations from a catalog', function() {
            var list = composites.List.fromCollection(array);
            var catalog = composites.Catalog.fromCollection(list);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            expect(catalog.getItem(2).value.toString()).to.equal(association2.value.toString());
            expect(catalog.getIndex(association1)).to.equal(1);
            expect(catalog.getItem(5).value.toString()).to.equal(association5.value.toString());
            expect(catalog.getIndex(association3)).to.equal(3);
            var actual = catalog.getValue(3);
            expect(actual.toString()).to.equal('delta');
            var keys = catalog.getKeys();
            size = keys.getSize();
            expect(size).to.equal(array.length);
            var keyIterator = keys.iterator();
            expect(keyIterator).to.exist;  // jshint ignore:line
            var values = catalog.getValues();
            size = values.getSize();
            expect(size).to.equal(array.length);
            expect(list.equalTo(values)).to.equal(true);
            var valueIterator = values.iterator();
            expect(valueIterator).to.exist;  // jshint ignore:line
            var associations = catalog.getAssociations();
            size = associations.getSize();
            expect(size).to.equal(array.length);
            expect(catalog.equalTo(associations)).to.equal(true);
            var associationIterator = catalog.iterator();
            expect(associationIterator).to.exist;  // jshint ignore:line
            var key;
            var value;
            var association;
            var index = 0;
            while (keyIterator.hasNext() && valueIterator.hasNext() && associationIterator.hasNext()) {
                index++;
                key = keyIterator.getNext();
                value = valueIterator.getNext();
                association = associationIterator.getNext();
                expect(key.toNumber()).to.equal(index);
                expect(value.toString()).to.equal(array[index - 1]);
                expect(association.key.toNumber()).to.equal(index);
                expect(association.value.toString()).to.equal(array[index - 1]);
            }
            catalog.removeItem(2);
            catalog.removeValue(1);
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(3);
            // the iterator should be pointing at a copy of the array so unaffected
            associationIterator.toStart();
            index = 0;
            while (associationIterator.hasNext()) {
                association = associationIterator.getNext();
                expect(association.value.toString()).to.equal(array[index++]);
            }
            catalog.setValue(1, 'gamma');
            expect(catalog.getValue(1).toString()).to.equal('gamma');
            catalog.setValue(6, 'kappa');
            expect(catalog.getValue(6).toString()).to.equal('kappa');
            catalog.removeAll();
            expect(catalog.getValue(6)).to.equal(undefined);
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should be able to perform catalog operations on catalogs', function() {
            var catalog1 = new composites.Catalog();
            catalog1.addItem(association1);
            catalog1.addItem(association2);
            catalog1.addItem(association3);
            var catalog2 = new composites.Catalog();
            catalog2.addItem(association4);
            catalog2.addItem(association5);
            var catalog3 = composites.Catalog.fromCollection(array);
            var catalog4 = composites.Catalog.concatenation(catalog1, catalog2);
            expect(catalog4.equalTo(catalog3)).to.equal(true);
        });

    });

    describe('Test the catalog iterators.', function() {

        it('should iterate over a catalog forwards and backwards', function() {
            var catalog = composites.Catalog.fromCollection(array);
            var iterator = catalog.iterator();
            expect(iterator).to.exist;  // jshint ignore:line
            iterator.toEnd();
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            var association;
            while (iterator.hasPrevious()) {
                association = iterator.getPrevious();
            }
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            association = iterator.getNext();
            expect(association.value.toString()).to.equal(array[0]);
            association = iterator.getNext();
            expect(association.value.toString()).to.equal(array[1]);
            association = iterator.getPrevious();
            expect(association.value.toString()).to.equal(array[1]);
            association = iterator.getPrevious();
            expect(association.value.toString()).to.equal(array[0]);
            while (iterator.hasNext()) {
                association = iterator.getNext();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
        });

    });

});
