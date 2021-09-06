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


describe('Bali Nebula™ Component Framework - Symbol', function() {

    describe('Test symbol constructors', function() {

        it('should construct symbols using literals', function() {
            expect(bali.component('$foo').toString()).to.equal('$foo');
            expect(bali.component('$bar').toString()).to.equal('$bar');
        });

        it('should throw an exception for an empty symbol', function() {
            expect(
                function() {
                    const empty = bali.symbol();
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.symbol('');
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.component('$');
                }
            ).to.throw();
        });

        it('should throw an exception for a symbol containing white space', function() {
            expect(
                function() {
                    const bad = bali.symbol(' ');
                }
            ).to.throw();
            expect(
                function() {
                    const bad = bali.symbol('White Space');
                }
            ).to.throw();
        });

    });

    describe('Test reserved symbol constructors', function() {

        it('should construct reserved symbols using literals', function() {
            expect(bali.component('$foo-1').toString()).to.equal('$foo-1');
            expect(bali.component('$bar-2').toString()).to.equal('$bar-2');
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
                    const empty = bali.component('$-1');
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

    describe('Test symbol methods', function() {

        it('should perform the getItem() and getItems() methods correctly', function() {
            const symbol = bali.symbol('foobar');
            const range = bali.range(3, '..', 5);
            const first = symbol.getItem(3);
            const last = symbol.getItem(5);
            const items = symbol.getItems(range);
            expect(first).to.equal(items.getItem(1));
            expect(last).to.equal(items.getItem(items.getSize()));
        });

    });

    describe('Test reserved symbol methods', function() {

        it('should perform the getItem() and getItems() methods correctly', function() {
            const symbol = bali.component('$foobar-1');
            expect(symbol.isReserved()).to.equal(true);
            const range = bali.range(3, '..', 5);
            const first = symbol.getItem(3);
            const last = symbol.getItem(5);
            const items = symbol.getItems(range);
            expect(first).to.equal(items.getItem(1));
            expect(last).to.equal(items.getItem(items.getSize()));
        });

    });

    describe('Test symbol functions', function() {

        it('should perform the chaining of two symbol strings', function() {
            const symbol1 = bali.symbol('foo');
            const symbol2 = bali.symbol('bar');
            const symbol3 = bali.symbol.chain(symbol1, symbol2);
            expect(symbol3.toString()).to.equal('$foobar');
        });

    });

});
