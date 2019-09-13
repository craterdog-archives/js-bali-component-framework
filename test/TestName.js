/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const debug = 2;
const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../').api(debug);


describe('Bali Nebula™ Component Framework - Name', function() {

    describe('Test name constructors', function() {

        it('should construct name strings using literals', function() {
            expect(bali.component('v1').toString()).to.equal('v1');
            expect(bali.component('v1.2').toString()).to.equal('v1.2');
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

    describe('Test name functions', function() {

        it('should perform concatenation of two name strings', function() {
            const name1 = bali.name(['foo']);
            const name2 = bali.name(['bar', 'v1.2.3']);
            const name3 = bali.name.concatenation(name1, name2);
            expect(name3.toString()).to.equal('/foo/bar/v1.2.3');
        });

    });

    describe('Test the name iterators', function() {

        it('should iterate over a name string forwards and backwards', function() {
            const name = bali.name(['foo', 'bar', 'v1.2.3']);
            const iterator = name.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
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
        });

    });

});
