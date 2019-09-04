/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const fs = require('fs');
const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../');


describe('Bali Nebula™ Component Framework - Transformers', function() {

    const DEBUG = true;

    describe('Test parser and formatter', function() {

        it('should parse and format the same elements', function() {
            const file = 'test/source/elements.bali';
            console.error('        ' + file);
            const document = fs.readFileSync(file, 'utf8');
            expect(document).to.exist;  // jshint ignore:line
            var component = bali.parse(document);
            expect(component).to.exist;  // jshint ignore:line
            var copy = bali.duplicate(component);
            expect(copy).to.exist;  // jshint ignore:line
            var formatted = bali.format(copy) + '\n';  // add POSIX <EOL>
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.parse(formatted);
            expect(component).to.exist;  // jshint ignore:line
            formatted = bali.format(component, -1);  // inline formatting
            component = bali.parse(formatted);
            const iterator = component.getIterator();
            while (iterator.hasNext()) {
                const association = iterator.getNext();
                const array = association.getValue().toArray();
                for (var i = 0; i < array.length; i++) {
                    const item = array[i];
                    const string = bali.format(item);
                    console.log('item: ' + string);
                    const element = bali.parse(string);
                    console.log('element: ' + element);
                    expect(element.isEqualTo(item)).to.equal(true);
                }
            }
        });

        it('should parse and format the same expressions', function() {
            const file = 'test/source/expressions.bali';
            console.error('        ' + file);
            const document = fs.readFileSync(file, 'utf8');
            console.log('document: ' + document);
            expect(document).to.exist;  // jshint ignore:line
            var component = bali.parse(document);
            expect(component).to.exist;  // jshint ignore:line
            var copy = bali.duplicate(component);
            expect(copy).to.exist;  // jshint ignore:line
            var formatted = bali.format(copy) + '\n';  // add POSIX <EOL>
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.parse(formatted);
            expect(component).to.exist;  // jshint ignore:line
            formatted = bali.format(component, -1);  // inline formatting
            component = bali.parse(formatted);
        });

        it('should parse and format the same statements', function() {
            const file = 'test/source/statements.bali';
            console.error('        ' + file);
            const document = fs.readFileSync(file, 'utf8');
            expect(document).to.exist;  // jshint ignore:line
            var component = bali.parse(document);
            expect(component).to.exist;  // jshint ignore:line
            var copy = bali.duplicate(component);
            expect(copy).to.exist;  // jshint ignore:line
            var formatted = bali.format(copy) + '\n';  // add POSIX <EOL>
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.parse(formatted);
            expect(component).to.exist;  // jshint ignore:line
            formatted = bali.format(component, -1);  // inline formatting
            component = bali.parse(formatted);
        });

        it('should parse and format the same components', function() {
            const file = 'test/source/components.bali';
            console.error('        ' + file);
            const document = fs.readFileSync(file, 'utf8');
            expect(document).to.exist;  // jshint ignore:line
            var component = bali.parse(document);
            expect(component).to.exist;  // jshint ignore:line
            var copy = bali.duplicate(component);
            expect(copy).to.exist;  // jshint ignore:line
            var formatted = bali.format(copy) + '\n';  // add POSIX <EOL>
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.parse(formatted);
            expect(component).to.exist;  // jshint ignore:line
            formatted = bali.format(component, -1);  // inline formatting
            component = bali.parse(formatted);
            const iterator = component.getIterator();
            while (iterator.hasNext()) {
                const association = iterator.getNext();
                const array = association.getValue().toArray();
                for (var i = 0; i < array.length; i++) {
                    const item = array[i];
                    const string = bali.format(item);
                    component = bali.parse(string);
                    expect(component.isEqualTo(item)).to.equal(true);
                }
            }
        });

    });

});
