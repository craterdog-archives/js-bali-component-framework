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
const fs = require('fs');
const bali = require('../').api(debug);


describe('Bali Nebula™ Component Framework - Transformers', function() {

    const DEBUG = true;

    describe('Test parser and formatter', function() {

        it('should parse and format the same elements', function() {
            const file = 'test/source/elements.bali';
            console.error('        ' + file);
            const document = fs.readFileSync(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate(component.getParameters());
            expect(copy).to.exist;
            var formatted = copy.format() + '\n';  // add POSIX <EOL>
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            const iterator = component.getIterator();
            while (iterator.hasNext()) {
                const association = iterator.getNext();
                const array = association.getValue().toArray();
                for (var i = 0; i < array.length; i++) {
                    const item = array[i];
                    const string = item.format();
                    const element = bali.component(string);
                    expect(element.isEqualTo(item)).to.equal(true);
                }
            }
        });

        it('should parse and format the same expressions', function() {
            const file = 'test/source/expressions.bali';
            console.error('        ' + file);
            const document = fs.readFileSync(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate(component.getParameters());
            expect(copy).to.exist;
            var formatted = copy.format() + '\n';  // add POSIX <EOL>
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
        });

        it('should parse and format the same statements', function() {
            const file = 'test/source/statements.bali';
            console.error('        ' + file);
            const document = fs.readFileSync(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate(component.getParameters());
            expect(copy).to.exist;
            var formatted = copy.format() + '\n';  // add POSIX <EOL>
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
        });

        it('should parse and format the same components', function() {
            const file = 'test/source/components.bali';
            console.error('        ' + file);
            const document = fs.readFileSync(file, 'utf8');
            expect(document).to.exist;
            var component = bali.component(document);
            expect(component).to.exist;
            var copy = component.duplicate(component.getParameters());
            expect(copy).to.exist;
            var formatted = copy.format() + '\n';  // add POSIX <EOL>
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(document);
            component = bali.component(formatted);
            expect(component).to.exist;
            const iterator = component.getIterator();
            while (iterator.hasNext()) {
                const association = iterator.getNext();
                const array = association.getValue().toArray();
                for (var i = 0; i < array.length; i++) {
                    const item = array[i];
                    const string = item.format();
                    component = bali.component(string);
                    expect(component.isEqualTo(item)).to.equal(true);
                }
            }
        });

        it('should duplicate with different parameters', function() {
            const document = bali.catalog({
                $foo: 'bar'
            }, bali.parameters({
                $bar: 'baz'
            }));
            expect(document).to.exist;
            const parameters = bali.parameters({
                $bar: 'bif'
            });
            const copy = document.duplicate(parameters);
            expect(copy).to.exist;
            expect(copy.getValue('$foo').toString()).to.equal('"bar"');
            expect(copy.getParameters().getValue('$bar').toString()).to.equal('"bif"');
        });

    });

});
