/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const mocha = require('mocha');
const expect = require('chai').expect;
const elements = require('../src/elements');

describe('Bali Component Framework™', function() {

    describe('Test text constructors', function() {

        it('should generate a default empty text string', function() {
            const text = new elements.Text();
            const string = text.toString();
            expect(string).to.equal('""');
            const raw = text.value;
            expect(raw).to.equal('');
        });

        it('should generate an explicit empty text string', function() {
            const text = new elements.Text('""');
            const string = text.toString();
            expect(string).to.equal('""');
            const raw = text.value;
            expect(raw).to.equal('');
        });

        it('should generate from a JS string', function() {
            const text = new elements.Text('This is a javascript string.');
            const string = text.toString();
            expect(string).to.equal('"This is a javascript string."');
            const raw = text.value;
            expect(raw).to.equal('This is a javascript string.');
        });

        it('should generate a specific text string', function() {
            const text = new elements.Text('"This is a text string."');
            const string = text.toString();
            expect(string).to.equal('"This is a text string."');
            const raw = text.value;
            expect(raw).to.equal('This is a text string.');
        });

        it('should generate a specific text bloc containing quotes', function() {
            const text = new elements.Text('"\nThis is a \"text block\" containing \'quotes\'.\n"');
            const string = text.toString();
            expect(string).to.equal('"\nThis is a \"text block\" containing \'quotes\'.\n"');
            const raw = text.value;
            expect(raw).to.equal('\nThis is a \"text block\" containing \'quotes\'.\n');
        });

    });

    describe('Test text methods', function() {

        it('should return the correct type', function() {
            const type = new elements.Text('"Hello World!"').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#YA1HLLYZN3H97SCZ95JX78MZJ6WQ4VBL,$version:v1,$digest:none]>');
        });

    });

    describe('Test text functions', function() {

        it('should perform concatenation of two text strings', function() {
            const text1 = new elements.Text('"Hello "');
            const text2 = new elements.Text('"World!"');
            const text3 = elements.Text.concatenation(text1, text2);
            expect(text3.toString()).to.equal('"Hello World!"');
        });

    });

    describe('Test the text iterators.', function() {

        it('should iterate over a text string forwards and backwards', function() {
            const text = new elements.Text('"Hello World!"');
            const iterator = text.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
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
            expect(character).to.equal(text.value[0]);
            character = iterator.getNext();
            expect(character).to.equal(text.value[1]);
            character = iterator.getPrevious();
            expect(character).to.equal(text.value[1]);
            character = iterator.getPrevious();
            expect(character).to.equal(text.value[0]);
            while (iterator.hasNext()) {
                character = iterator.getNext();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
        });

    });

});
