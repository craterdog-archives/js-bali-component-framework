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
const pfs = require('fs').promises;
const style = 'https://bali-nebula.net/static/styles/BDN.css';
const bali = require('../').api(debug);


describe('Bali Nebula™ Component Framework - Transformers', function() {

    const DEBUG = true;

    describe('Test parser and formatter', function() {

        it('should parse and format the same elements', async function() {
            const file = 'test/source/elements.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            const copy = bali.duplicate(component);
            expect(copy).to.exist;
            var formatted = bali.document(copy);
            await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            expect(component.getHash()).to.equal(copy.getHash());
            const iterator = component.getIterator();
            iterator.toSlot(-1);
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            iterator.toStart();
            while (iterator.hasNext()) {
                const association = iterator.getNext();
                const array = association.getValue().toArray();
                for (var i = 0; i < array.length; i++) {
                    const item = array[i];
                    const string = item.toString();
                    const element = bali.component(string);
                    const comparator = new bali.comparator();
                    expect(comparator.areEqual(element, item)).to.equal(true);
                }
            }
            expect(bali.source(iterator)).to.exist;
        });

        it('should parse and format the same expressions', async function() {
            const file = 'test/source/expressions.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            const copy = bali.duplicate(component);
            expect(copy).to.exist;
            var formatted = bali.document(copy);
            await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            expect(component.getHash()).to.equal(copy.getHash());
        });

        it('should parse and format the same code', async function() {
            const file = 'test/source/statements.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            const copy = bali.duplicate(component);
            expect(copy).to.exist;
            var formatted = bali.document(copy);
            await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            expect(component.getHash()).to.equal(copy.getHash());
        });

        it('should parse and format the same components', async function() {
            const file = 'test/source/components.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            const copy = bali.duplicate(component);
            expect(copy).to.exist;
            var formatted = bali.document(copy);
            await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            expect(component.getHash()).to.equal(copy.getHash());
            formatted = bali.html(copy, 'TITLE', style);
            await pfs.writeFile('test/html/components.html', formatted, 'utf8');
        });

        it('should parse and format the same agents', async function() {
            const file = 'test/source/agents.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            const copy = bali.duplicate(component);
            expect(copy).to.exist;
            var formatted = bali.document(copy);
            await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            expect(bali.areEqual(component, copy)).to.equal(true);
            expect(component.getHash()).to.equal(copy.getHash());
            formatted = bali.html(copy, 'TITLE', style);
            await pfs.writeFile('test/html/agents.html', formatted, 'utf8');
        });

        it('should parse and format the test document', async function() {
            const file = 'test/source/test.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            const copy = bali.duplicate(component);
            expect(copy).to.exist;
            var formatted = bali.document(copy);
            await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            expect(bali.areEqual(component, copy)).to.equal(true);
            expect(component.getHash()).to.equal(copy.getHash());
            formatted = bali.html(copy, 'TITLE', style);
            await pfs.writeFile('test/html/test.html', formatted, 'utf8');
        });

        it('should parse and format the wiki examples', async function() {
            const file = 'test/source/examples.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            const copy = bali.duplicate(component);
            expect(copy).to.exist;
            var formatted = bali.document(copy);
            await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            expect(bali.areEqual(component, copy)).to.equal(true);
            expect(component.getHash()).to.equal(copy.getHash());
            formatted = bali.html(copy, 'TITLE', style);
            await pfs.writeFile('test/html/examples.html', formatted, 'utf8');
        });

        it('should parse and format the citation', async function() {
            const file = 'test/source/citation.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            const copy = bali.duplicate(component);
            expect(copy).to.exist;
            var formatted = bali.document(copy);
            await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            expect(bali.areEqual(component, copy)).to.equal(true);
            expect(component.getHash()).to.equal(copy.getHash());
            formatted = bali.html(copy, 'TITLE', style);
            await pfs.writeFile('test/html/citation.html', formatted, 'utf8');
        });

        it('should parse and format the certificate', async function() {
            const file = 'test/source/certificate.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            const copy = bali.duplicate(component);
            expect(copy).to.exist;
            var formatted = bali.document(copy);
            await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            expect(bali.areEqual(component, copy)).to.equal(true);
            expect(component.getHash()).to.equal(copy.getHash());
            formatted = bali.html(copy, 'TITLE', style);
            await pfs.writeFile('test/html/certificate.html', formatted, 'utf8');
        });

    });

});
