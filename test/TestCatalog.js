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


describe('Bali Nebula™ Component Framework - Catalog', function() {

    const array = ['"alpha"', '"beta"', '"delta"', '"epsilon"', '"gamma"'];
    const association1 = bali.association(1, '"alpha"');
    const association2 = bali.association(2, '"beta"');
    const association3 = bali.association(3, '"delta"');
    const association4 = bali.association(4, '"epsilon"');
    const association5 = bali.association(5, '"gamma"');

    describe('Test the catalog constructors', function() {

        it('should create an empty catalog', function() {
            const catalog = bali.catalog();
            expect(catalog).to.exist;  // jshint ignore:line
            const size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            const iterator = catalog.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            catalog.removeAll();
            const copy = catalog.constructor(catalog.getParameters());
            expect(copy).to.exist;  // jshint ignore:line
            expect(catalog.isEqualTo(copy)).to.equal(true);
            const signum = catalog.comparedTo(copy);
            expect(signum).to.equal(0);
        });

        it('should create a catalog from an array', function() {
            const catalog = bali.catalog(array);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            catalog.addItems(array);
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(2 * array.length);
            const iterator = catalog.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('1');
            expect(association.getValue().toString()).to.equal('"alpha"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('2');
            expect(association.getValue().toString()).to.equal('"beta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('3');
            expect(association.getValue().toString()).to.equal('"delta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('4');
            expect(association.getValue().toString()).to.equal('"epsilon"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('5');
            expect(association.getValue().toString()).to.equal('"gamma"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('6');
            expect(association.getValue().toString()).to.equal('"alpha"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('7');
            expect(association.getValue().toString()).to.equal('"beta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('8');
            expect(association.getValue().toString()).to.equal('"delta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('9');
            expect(association.getValue().toString()).to.equal('"epsilon"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('10');
            expect(association.getValue().toString()).to.equal('"gamma"');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a catalog from a list', function() {
            const list = bali.list(array);
            const catalog = bali.catalog(list);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = catalog.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('1');
            expect(association.getValue().toString()).to.equal('"alpha"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('2');
            expect(association.getValue().toString()).to.equal('"beta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('3');
            expect(association.getValue().toString()).to.equal('"delta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('4');
            expect(association.getValue().toString()).to.equal('"epsilon"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('5');
            expect(association.getValue().toString()).to.equal('"gamma"');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a catalog from a set', function() {
            const set = bali.set(array);
            const catalog = bali.catalog(set);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = catalog.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('1');
            expect(association.getValue().toString()).to.equal('"alpha"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('2');
            expect(association.getValue().toString()).to.equal('"beta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('3');
            expect(association.getValue().toString()).to.equal('"delta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('4');
            expect(association.getValue().toString()).to.equal('"epsilon"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('5');
            expect(association.getValue().toString()).to.equal('"gamma"');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a catalog from an object', function() {
            const object = {
                $alpha: '"alpha"',
                $beta: '"beta"',
                $delta: '"delta"',
                $epsilon: '"epsilon"',
                $gamma: '"gamma"'
            };
            const catalog = bali.catalog(object);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(Object.keys(object).length);
            const iterator = catalog.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('$alpha');
            expect(association.getValue().toString()).to.equal('"alpha"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('$beta');
            expect(association.getValue().toString()).to.equal('"beta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('$delta');
            expect(association.getValue().toString()).to.equal('"delta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('$epsilon');
            expect(association.getValue().toString()).to.equal('"epsilon"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('$gamma');
            expect(association.getValue().toString()).to.equal('"gamma"');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should create a catalog from a catalog', function() {
            var catalog = bali.catalog(array);
            catalog = bali.catalog(catalog);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            const iterator = catalog.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            var association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('1');
            expect(association.getValue().toString()).to.equal('"alpha"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('2');
            expect(association.getValue().toString()).to.equal('"beta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('3');
            expect(association.getValue().toString()).to.equal('"delta"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('4');
            expect(association.getValue().toString()).to.equal('"epsilon"');
            association = iterator.getNext();
            expect(association.getKey().toString()).to.equal('5');
            expect(association.getValue().toString()).to.equal('"gamma"');
            expect(iterator.hasNext() === false);
            catalog.removeAll();
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

    });

    describe('Test the catalog methods', function() {

        it('should be able to call the Catalog class methods on the catalog', function() {
            const catalog1 = bali.catalog();
            catalog1.addItem(bali.association(1, '"alpha"'));
            catalog1.addItem(bali.association(2, '"beta"'));
            catalog1.addItem(bali.association(3, '"delta"'));
            const catalog2 = bali.catalog();
            catalog2.addItem(bali.association(4, '"epsilon"'));
            catalog2.addItem(bali.association(5, '"gamma"'));
            catalog1.addItems(catalog2);
            var size = catalog1.getSize();
            expect(size).to.equal(array.length);
            expect(catalog1.containsAll(catalog2)).to.equal(true);
            expect(catalog2.containsAll(catalog1)).to.equal(false);
            expect(catalog2.containsAny(catalog1)).to.equal(true);
            const catalog3 = catalog1.getItems(bali.range(2, 4));
            size = catalog3.getSize();
            expect(size).to.equal(3);
            expect(catalog3.containsItem(association4)).to.equal(true);
            expect(catalog3.containsItem(association1)).to.equal(false);
            expect(catalog3.getIndex(association3)).to.equal(2);
            catalog2.addItems(catalog1);
            size = catalog2.getSize();
            expect(size).to.equal(array.length);
            expect(catalog2.containsAll(catalog1)).to.equal(true);
            catalog2.removeValues(bali.range(2, 3));
            size = catalog2.getSize();
            expect(size).to.equal(3);
            expect(catalog2.containsItem(association3)).to.equal(false);
        });

        it('should be able to add and remove associations from a catalog', function() {
            const list = bali.list(array);
            const catalog = bali.catalog(list);
            var size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(array.length);
            expect(catalog.getItem(2).getValue().toString()).to.equal(association2.getValue().toString());
            expect(catalog.getIndex(association1)).to.equal(1);
            expect(catalog.getItem(5).getValue().toString()).to.equal(association5.getValue().toString());
            expect(catalog.getIndex(association3)).to.equal(3);
            const actual = catalog.getValue(3);
            expect(actual.toString()).to.equal('"delta"');
            const keys = catalog.getKeys();
            size = keys.getSize();
            expect(size).to.equal(array.length);
            const keyIterator = keys.getIterator();
            expect(keyIterator).to.exist;  // jshint ignore:line
            const associationIterator = catalog.getIterator();
            expect(associationIterator).to.exist;  // jshint ignore:line
            var key;
            var value;
            var association;
            var index = 0;
            while (keyIterator.hasNext() && associationIterator.hasNext()) {
                index++;
                key = keyIterator.getNext();
                association = associationIterator.getNext();
                value = association.getValue();
                expect(key.toNumber()).to.equal(index);
                expect(value.toString()).to.equal(array[index - 1]);
                expect(association.getKey().toNumber()).to.equal(index);
                expect(association.getValue().toString()).to.equal(array[index - 1]);
            }
            catalog.removeValue(2);
            catalog.removeValue(1);
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(3);
            // the iterator should be pointing at a copy of the array so unaffected
            associationIterator.toStart();
            index = 0;
            while (associationIterator.hasNext()) {
                association = associationIterator.getNext();
                expect(association.getValue().toString()).to.equal(array[index++]);
            }
            catalog.setValue(1, '"gamma"');
            expect(catalog.getValue(1).toString()).to.equal('"gamma"');
            catalog.setValue(6, '"kappa"');
            expect(catalog.getValue(6).toString()).to.equal('"kappa"');
            catalog.removeAll();
            expect(catalog.getValue(6)).to.equal(undefined);
            size = catalog.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
        });

        it('should be able to perform catalog operations on catalogs', function() {
            const catalog1 = bali.catalog();
            catalog1.addItem(association1);
            catalog1.addItem(association2);
            catalog1.addItem(association3);
            const catalog2 = bali.catalog();
            catalog2.addItem(association4);
            catalog2.addItem(association5);
            const catalog3 = bali.catalog(array);
            const catalog4 = bali.catalog.concatenation(catalog1, catalog2);
            expect(catalog4.isEqualTo(catalog3)).to.equal(true);
        });

    });

    describe('Test the catalog iterators', function() {

        it('should iterate over a catalog forwards and backwards', function() {
            const catalog = bali.catalog(array);
            const iterator = catalog.getIterator();
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
            expect(association.getValue().toString()).to.equal(array[0]);
            association = iterator.getNext();
            expect(association.getValue().toString()).to.equal(array[1]);
            association = iterator.getPrevious();
            expect(association.getValue().toString()).to.equal(array[1]);
            association = iterator.getPrevious();
            expect(association.getValue().toString()).to.equal(array[0]);
            while (iterator.hasNext()) {
                association = iterator.getNext();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
        });

    });

});
