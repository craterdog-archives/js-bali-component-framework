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


describe('Bali Nebula™ Component Framework - Reserved', function() {

    describe('Test reserved symbol constructors', function() {

        it('should construct reserved symbols using literals', function() {
            expect(bali.component('$$foo').toString()).to.equal('$$foo');
            expect(bali.component('$$bar').toString()).to.equal('$$bar');
        });

        it('should throw an exception for an empty reserved symbol', function() {
            expect(
                function() {
                    const empty = bali.reserved();
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.reserved('');
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.component('$$');
                }
            ).to.throw();
        });

        it('should throw an exception for a reserved symbol containing white space', function() {
            expect(
                function() {
                    const bad = bali.reserved(' ');
                }
            ).to.throw();
            expect(
                function() {
                    const bad = bali.reserved('White Space');
                }
            ).to.throw();
        });

    });

    describe('Test reserved symbol methods', function() {

        it('should perform the getIndex(), getItem() and getItems() methods correctly', function() {
            const symbol = bali.component('$$foobar');
            const range = bali.range(3, 5);
            const first = symbol.getItem(3);
            const last = symbol.getItem(5);
            const items = symbol.getItems(range);
            expect(first).to.equal(items.getItem(1));
            expect(last).to.equal(items.getItem(items.getSize()));
            expect(2).to.equal(symbol.getIndex('o'));
        });

    });

});
