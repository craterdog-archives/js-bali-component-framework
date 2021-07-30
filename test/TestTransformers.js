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
const bali = require('../').api(debug);
const style = 'https://bali-nebula.net/static/styles/BDN.css';


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
            var copy = component.duplicate();
            expect(copy).to.exist;
            var formatted = copy.toBDN() + '\n';  // add POSIX <EOL>
            //await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            const iterator = component.getIterator();
            while (iterator.hasNext()) {
                const association = iterator.getNext();
                const array = association.getValue().toArray();
                for (var i = 0; i < array.length; i++) {
                    const item = array[i];
                    const string = item.toBDN();
                    const element = bali.component(string);
                    expect(element.isEqualTo(item)).to.equal(true);
                }
            }
        });

        it('should parse and format the same expressions', async function() {
            const file = 'test/source/expressions.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate();
            expect(copy).to.exist;
            var formatted = copy.toBDN() + '\n';  // add POSIX <EOL>
            //await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
        });

        it('should parse and format the same activity', async function() {
            const file = 'test/source/statements.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate();
            expect(copy).to.exist;
            var formatted = copy.toBDN() + '\n';  // add POSIX <EOL>
            //await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
        });

        it('should parse and format the same components', async function() {
            const file = 'test/source/components.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate();
            expect(copy).to.exist;
            var formatted = copy.toBDN() + '\n';  // add POSIX <EOL>
            //await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            const html = copy.toHTML(style) + '\n';  // add POSIX <EOL>
            await pfs.writeFile('test/html/components.html', html, 'utf8');
        });

        it('should parse and format the test document', async function() {
            const file = 'test/source/test.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate();
            expect(copy).to.exist;
            var formatted = copy.toBDN() + '\n';  // add POSIX <EOL>
            //await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            const html = copy.toHTML(style) + '\n';  // add POSIX <EOL>
            await pfs.writeFile('test/html/test.html', html, 'utf8');
        });

        it('should parse and format the wiki examples', async function() {
            const file = 'test/source/examples.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate();
            expect(copy).to.exist;
            var formatted = copy.toBDN() + '\n';  // add POSIX <EOL>
            //await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            const html = copy.toHTML(style) + '\n';  // add POSIX <EOL>
            await pfs.writeFile('test/html/examples.html', html, 'utf8');
        });

        it('should parse and format the citation', async function() {
            const file = 'test/source/citation.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate();
            expect(copy).to.exist;
            var formatted = copy.toBDN() + '\n';  // add POSIX <EOL>
            //await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            const html = copy.toHTML(style) + '\n';  // add POSIX <EOL>
            await pfs.writeFile('test/html/citation.html', html, 'utf8');
        });

        it('should parse and format the certificate', async function() {
            const file = 'test/source/certificate.bali';
            console.error('        ' + file);
            const document = await pfs.readFile(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate();
            expect(copy).to.exist;
            var formatted = copy.toBDN() + '\n';  // add POSIX <EOL>
            //await pfs.writeFile(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            const html = copy.toHTML(style) + '\n';  // add POSIX <EOL>
            await pfs.writeFile('test/html/certificate.html', html, 'utf8');
        });

    });

});
