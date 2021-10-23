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


describe('Bali Nebula™ Component Framework - Text', function() {

    describe('Test text constructors', function() {

        it('should construct text strings using literals', function() {
            expect(bali.component('""').toString()).to.equal('""');
            expect(bali.component('"Hello World!"').toString()).to.equal('"Hello World!"');
        });

        it('should generate a default empty text string', function() {
            const text = bali.text();
            expect(text.getHash()).to.exist;
            const string = text.toString();
            expect(string).to.equal('""');
            const raw = text.getValue();
            expect(raw).to.equal('');
        });

        it('should generate an explicit empty text string', function() {
            const text = bali.text('');
            expect(text.getHash()).to.exist;
            const string = text.toString();
            expect(string).to.equal('""');
            const raw = text.getValue();
            expect(raw).to.equal('');
        });

        it('should generate a specific text block containing quotes', function() {
            const text = bali.text('\nThis is a \"text block\" containing \'quotes\'.\n');
            expect(text.getHash()).to.exist;
            const string = text.toString();
            expect(string).to.equal('"\n    This is a \"text block\" containing \'quotes\'.\n"');
            const raw = text.getValue();
            expect(raw).to.equal('\nThis is a \"text block\" containing \'quotes\'.\n');
        });

    });

    describe('Test text methods', function() {

        it('should perform the getItem() and getItems() methods correctly', function() {
            const text = bali.text('This is text.');
            expect(text.getHash()).to.exist;
            const range = bali.range(3, '..', 9);
            const first = text.getItem(3);
            const last = text.getItem(9);
            const items = text.getItems(range);
            expect(first).to.equal(items.getItem(1));
            expect(last).to.equal(items.getItem(items.getSize()));
        });

    });

    describe('Test text functions', function() {

        it('should perform the chaining of two text strings', function() {
            const text1 = bali.text('Hello ');
            const text2 = bali.text('World!');
            const text3 = bali.text.chain(text1, text2);
            expect(text3.toString()).to.equal('"Hello World!"');
        });

    });

    describe('Test the text iterators', function() {

        it('should iterate over a text string forwards and backwards', function() {
            const text = bali.text('Hello World!');
            const iterator = text.getIterator();
            expect(iterator).to.exist;
            iterator.toSlot(-1);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            iterator.toEnd();
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            var character;
            while (iterator.hasPrevious()) {
                character = iterator.getPrevious();
            }
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            character = iterator.getNext();
            expect(character).to.equal(text.getValue()[0]);
            character = iterator.getNext();
            expect(character).to.equal(text.getValue()[1]);
            character = iterator.getPrevious();
            expect(character).to.equal(text.getValue()[1]);
            character = iterator.getPrevious();
            expect(character).to.equal(text.getValue()[0]);
            while (iterator.hasNext()) {
                character = iterator.getNext();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            expect(bali.source(iterator)).to.exist;
        });

    });

});
