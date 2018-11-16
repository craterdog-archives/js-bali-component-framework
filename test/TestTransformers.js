/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var fs = require('fs');
var mocha = require('mocha');
var expect = require('chai').expect;
var utilities = require('../src/utilities');
var collections = require('../src/collections');

describe('Bali Component Framework™', function() {
    var DEBUG = true;

    describe('Test Parser and Formatter', function() {

        it('should parse and format the same elements', function() {
            var file = 'test/source/elements.bali';
            console.error('        ' + file);
            var source = fs.readFileSync(file, 'utf8').slice(0, -1);  // remove POSIX compliant end of line
            expect(source).to.exist;  // jshint ignore:line
            var component = utilities.parser.parseComponent(source, DEBUG);
            expect(component).to.exist;  // jshint ignore:line
            var formatted = utilities.formatter.formatComponent(component);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            component = utilities.parser.parseComponent(formatted, DEBUG);
            expect(component).to.exist;  // jshint ignore:line
            formatted = utilities.formatter.formatComponent(component);
            expect(formatted).to.equal(source);
            var iterator = component.getIterator();
            while (iterator.hasNext()) {
                var association = iterator.getNext();
                var array = association.value.toArray();
                for (var i = 0; i < array.length; i++) {
                    var item = array[i];
                    var string = item.toString();
                    var element = utilities.parser.parseComponent(string, DEBUG);
                    expect(element.isEqualTo(item)).to.equal(true);
                }
            }
        });

        it('should parse and format the same expressions', function() {
            var file = 'test/source/expressions.bali';
            console.error('        ' + file);
            var source = fs.readFileSync(file, 'utf8').slice(0, -1);  // remove POSIX compliant end of line
            expect(source).to.exist;  // jshint ignore:line
            var component = utilities.parser.parseComponent(source, DEBUG);
            expect(component).to.exist;  // jshint ignore:line
            var formatted = utilities.formatter.formatComponent(component);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            component = utilities.parser.parseComponent(formatted, DEBUG);
            expect(component).to.exist;  // jshint ignore:line
            formatted = utilities.formatter.formatComponent(component);
            expect(formatted).to.equal(source);
            var iterator = component.getIterator();
            while (iterator.hasNext()) {
                var association = iterator.getNext();
                var array = association.value.toArray();
                for (var i = 0; i < array.length; i++) {
                    var item = array[i];
                    var string = item.toString();
                    var expression = utilities.parser.parseExpression(string, DEBUG);
                    expect(expression.isEqualTo(item)).to.equal(true);
                }
            }
        });

        it('should parse and format the same statements', function() {
            var file = 'test/source/statements.bali';
            console.error('        ' + file);
            var source = fs.readFileSync(file, 'utf8').slice(0, -1);  // remove POSIX compliant end of line
            expect(source).to.exist;  // jshint ignore:line
            var component = utilities.parser.parseComponent(source, DEBUG);
            expect(component).to.exist;  // jshint ignore:line
            var formatted = utilities.formatter.formatComponent(component);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            component = utilities.parser.parseComponent(formatted, DEBUG);
            expect(component).to.exist;  // jshint ignore:line
            formatted = utilities.formatter.formatComponent(component);
            expect(formatted).to.equal(source);
        });

        it('should parse and format the same components', function() {
            var file = 'test/source/components.bali';
            console.error('        ' + file);
            var source = fs.readFileSync(file, 'utf8').slice(0, -1);  // remove POSIX compliant end of line
            expect(source).to.exist;  // jshint ignore:line
            var component = utilities.parser.parseComponent(source, DEBUG);
            expect(component).to.exist;  // jshint ignore:line
            var formatted = utilities.formatter.formatComponent(component);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            component = utilities.parser.parseComponent(formatted, DEBUG);
            expect(component).to.exist;  // jshint ignore:line
            formatted = utilities.formatter.formatComponent(component);
            expect(formatted).to.equal(source);
        });

    });

});
