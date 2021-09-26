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


describe('Bali Nebula™ Component Framework - Name', function() {

    describe('Test name constructors', function() {

        it('should construct name strings using literals', function() {
            expect(bali.component('/foo').toString()).to.equal('/foo');
            expect(bali.component('/foo/bar').toString()).to.equal('/foo/bar');
        });

        it('should generate an explicit single part name string', function() {
            const name = bali.name(['foo']);
            const string = name.toString();
            expect(string).to.equal('/foo');
        });

        it('should generate an explicit two part name string', function() {
            const name = bali.name(['foo', 'bar']);
            const string = name.toString();
            expect(string).to.equal('/foo/bar');
        });

        it('should generate an explicit three part name string', function() {
            const name = bali.name(['foo', 'bar', 'v1.2.3']);
            const string = name.toString();
            expect(string).to.equal('/foo/bar/v1.2.3');
        });

    });

    describe('Test invalid name constructors', function() {

        it('should generate an exception for an empty name', function() {
            expect(
                function() {
                    bali.name();
                }
            ).to.throw();
        });

    });

    describe('Test name methods', function() {

        it('should perform the getItem() and getItems() methods correctly', function() {
            const name = bali.name(['bali', 'collections', 'Set', 'v1']);
            expect(name.getHash()).to.exist;
            const range = bali.range(2, '..', 3);
            const first = name.getItem(2);
            const last = name.getItem(3);
            const items = name.getItems(range);
            expect(first).to.equal(items.getItem(1));
            expect(last).to.equal(items.getItem(items.getSize()));
        });

    });

    describe('Test name functions', function() {

        it('should perform chaining of two name strings', function() {
            const name1 = bali.name(['foo']);
            const name2 = bali.name(['bar', 'v1.2.3']);
            const name3 = bali.name.chain(name1, name2);
            expect(name3.toString()).to.equal('/foo/bar/v1.2.3');
        });

    });

    describe('Test the name iterators', function() {

        it('should iterate over a name string forwards and backwards', function() {
            const name = bali.name(['foo', 'bar', 'v1.2.3']);
            const iterator = name.getIterator();
            expect(iterator).to.exist;
            iterator.toEnd();
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            var part;
            while (iterator.hasPrevious()) {
                part = iterator.getPrevious();
            }
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            part = iterator.getNext();
            expect(part).to.equal(name.getValue()[0]);
            part = iterator.getNext();
            expect(part).to.equal(name.getValue()[1]);
            part = iterator.getPrevious();
            expect(part).to.equal(name.getValue()[1]);
            part = iterator.getPrevious();
            expect(part).to.equal(name.getValue()[0]);
            while (iterator.hasNext()) {
                part = iterator.getNext();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            expect(bali.source(iterator)).to.exist;
        });

    });

});
