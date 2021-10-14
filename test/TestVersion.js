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


describe('Bali Nebula™ Component Framework - Version', function() {

    describe('Test version constructors', function() {

        it('should construct version strings using literals', function() {
            expect(bali.component('v1').toString()).to.equal('v1');
            expect(bali.component('v1.2').toString()).to.equal('v1.2');
        });

        it('should generate a default first version string', function() {
            const empty = bali.version();
            const string = empty.toString();
            expect(string).to.equal('v1');
        });

        it('should generate an explicit single level version string', function() {
            const major = bali.version([42]);
            const string = major.toString();
            expect(string).to.equal('v42');
        });

        it('should generate an explicit two level version string', function() {
            const minor = bali.version([41, 6]);
            const string = minor.toString();
            expect(string).to.equal('v41.6');
        });

        it('should generate an explicit three level version string', function() {
            const bug = bali.version([2, 13, 5]);
            const string = bug.toString();
            expect(string).to.equal('v2.13.5');
        });

    });

    describe('Test invalid version constructors', function() {

        it('should generate an exception for a zero version number', function() {
            expect(
                function() {
                    bali.version([0]);
                }
            ).to.throw();
        });

        it('should generate an exception for a zero trailing version number', function() {
            expect(
                function() {
                    bali.version([1, 0]);
                }
            ).to.throw();
        });

        it('should generate an exception for a zero subversion number', function() {
            expect(
                function() {
                    bali.version([1, 0, 2]);
                }
            ).to.throw();
        });

    });

    describe('Test the version iterators', function() {

        it('should iterate over a version string forwards and backwards', function() {
            const version = bali.version([1, 2, 3]);
            const iterator = version.getIterator();
            expect(iterator).to.exist;
            iterator.toSlot(-1);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            iterator.toEnd();
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            var number;
            while (iterator.hasPrevious()) {
                number = iterator.getPrevious();
            }
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            number = iterator.getNext();
            expect(number).to.equal(version.getValue()[0]);
            number = iterator.getNext();
            expect(number).to.equal(version.getValue()[1]);
            number = iterator.getPrevious();
            expect(number).to.equal(version.getValue()[1]);
            number = iterator.getPrevious();
            expect(number).to.equal(version.getValue()[0]);
            while (iterator.hasNext()) {
                number = iterator.getNext();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            expect(bali.source(iterator)).to.exist;
        });

    });

    describe('Test version methods', function() {

        it('should perform the getItem() and getItems() methods correctly', function() {
            const version = bali.version([1, 23, 456, 7890]);
            expect(version.getHash()).to.exist;
            const range = bali.range(2, '..', 4);
            const first = version.getItem(2);
            const last = version.getItem(4);
            const items = version.getItems(range);
            expect(first).to.equal(items.getItem(1));
            expect(last).to.equal(items.getItem(items.getSize()));
        });

    });

    describe('Test version functions', function() {

        it('should perform the nextVersion function correctly', function() {
            const comparator = new bali.comparator(this.debug);
            expect(comparator.areEqual(bali.version.nextVersion(bali.version([1])), bali.version([2]))).to.equal(true);
            expect(comparator.areEqual(bali.version.nextVersion(bali.version([1]), 2), bali.version([1, 1]))).to.equal(true);
            expect(comparator.areEqual(bali.version.nextVersion(bali.version([1, 2])), bali.version([1, 3]))).to.equal(true);
            expect(comparator.areEqual(bali.version.nextVersion(bali.version([1, 2]), 2), bali.version([1, 3]))).to.equal(true);
            expect(comparator.areEqual(bali.version.nextVersion(bali.version([1, 2]), 1), bali.version([2]))).to.equal(true);
            expect(comparator.areEqual(bali.version.nextVersion(bali.version([1, 2]), 3), bali.version([1, 2, 1]))).to.equal(true);
        });

        it('should perform the validNext function correctly', function() {
            expect(bali.version.validNext(bali.version([1]), bali.version([2]))).to.equal(true);
            expect(bali.version.validNext(bali.version([1]), bali.version([1, 1]))).to.equal(true);
            expect(bali.version.validNext(bali.version([1, 2]), bali.version([1, 3]))).to.equal(true);
            expect(bali.version.validNext(bali.version([1, 2]), bali.version([1, 3]))).to.equal(true);
            expect(bali.version.validNext(bali.version([1, 2]), bali.version([2]))).to.equal(true);
            expect(bali.version.validNext(bali.version([1, 2]), bali.version([1, 2, 1]))).to.equal(true);
        });

        it('should perform the chaining of two version strings', function() {
            const version1 = bali.version([1, 2]);
            const version2 = bali.version([3, 4]);
            const version3 = bali.version.chain(version1, version2);
            expect(version3.toString()).to.equal('v1.2.3.4');
        });

    });

});
