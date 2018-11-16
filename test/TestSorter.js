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
var abstractions = require('../src/abstractions');
var collections = require('../src/collections');


describe('Bali Component Framework™', function() {
    var object = {
        'beta': 1,
        'gamma': 2,
        'delta': 3,
        'alpha': 4,
        'epsilon': 5
    };
    var array = Object.keys(object);
    var set = collections.Set.fromCollection(array);

    describe('Test the sorter on lists.', function() {

        it('should sort an empty list', function() {
            var list = new collections.List();
            list.sortItems();
            expect(list.isEmpty()).to.equal(true);
        });


        it('should sort an out of order list', function() {
            var list = collections.List.fromCollection(array);
            list.sortItems();
            expect(list.toString()).to.equal(set.toString());
        });

    });

    describe('Test the sorter on catalogs.', function() {

        it('should sort an empty catalogs', function() {
            var catalog = new collections.Catalog();
            catalog.sortItems();
            expect(catalog.isEmpty()).to.equal(true);
        });


        it('should sort an out of order catalog', function() {
            var catalog = collections.Catalog.fromCollection(object);
            catalog.sortItems();
            var keys = catalog.getKeys();
            expect(keys.toString()).to.equal(set.toString());
        });

    });

});
