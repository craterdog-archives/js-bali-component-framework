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


describe('Bali Nebula™ Component Framework - Node', function() {

    describe('Test node constructors and methods', function() {

        it('should construct nodes and access children', function() {
            const parent = bali.node('/bali/trees/Code', debug);
            const child = bali.node('/bali/trees/Comment', debug);
            const sibling = bali.node('/bali/trees/Comment', debug);
            expect(parent.isEmpty()).to.equal(true);
            expect(parent.isSignificant()).to.equal(false);
            expect(parent.getHash()).to.exist;
            expect(parent.getSize()).to.equal(0);
            expect(parent.getIndex('"alpha"')).to.equal(0);
            parent.addItem(child);
            expect(parent.getItem(1)).to.equal(child);
            parent.addItem(sibling);
            const children = parent.getItems('[1..2]');
            expect(children.isEmpty()).to.equal(false);
            expect(children.isSignificant()).to.equal(true);
            expect(children.getHash()).to.exist;
            expect(children.getSize()).to.equal(2);
            expect(parent.getIndex(child)).to.equal(1);
            const iterator = parent.getIterator();
            expect(iterator).to.exist;
            iterator.toSlot(-1);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            iterator.toStart();
            expect(iterator.hasNext()).to.equal(true);
            expect(iterator.hasPrevious()).to.equal(false);
            expect(iterator.getNext()).to.exist;
            expect(iterator.hasNext()).to.equal(true);
            expect(iterator.hasPrevious()).to.equal(true);
            expect(
                function() {
                    bali.source(iterator);
                }
            ).to.throw();
        });

    });

});
