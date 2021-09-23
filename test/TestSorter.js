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
const comparator = bali.comparator();
const sorter = bali.sorter(comparator);


describe('Bali Nebula™ Component Framework - Sorter', function() {

    const object = {
        $beta: 1,
        $gamma: 2,
        $delta: 3,
        $alpha: 4,
        $epsilon: 5
    };
    const array = Object.keys(object);
    array.forEach(function(item, index) {
        this[index] = item;
    }, array);
    const set = bali.set(array);

    describe('Test the sorter on lists', function() {

        it('should sort an empty list', function() {
            const list = bali.list();
            list.sortItems();  // no sorter specified
            expect(list.isEmpty()).to.equal(true);
        });


        it('should sort an out of order list', function() {
            expect(comparator.getHash()).to.exist;
            expect(sorter.getHash()).to.exist;
            const list = bali.list(array);
            list.sortItems(sorter);
            expect(list.toString()).to.equal(bali.list(set).toString());
        });

    });

    describe('Test the sorter on catalogs', function() {

        it('should sort an empty catalogs', function() {
            const catalog = bali.catalog();
            catalog.sortItems(sorter);
            expect(catalog.isEmpty()).to.equal(true);
        });


        it('should sort an out of order catalog', function() {
            const catalog = bali.catalog(object);
            var keys = catalog.getKeys();
            const list = bali.list(array);
            expect(keys.toString()).to.equal(list.toString());
            catalog.sortItems();  // no sorter specified
            list.sortItems();  // no sorter specified
            keys = catalog.getKeys();
            expect(keys.toString()).to.equal(list.toString());
        });

    });

});
