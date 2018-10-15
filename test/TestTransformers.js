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

describe('Bali Document Notation™', function() {
    var DEBUG = true;  // change to true to check for ambiguities in the grammar

    describe('Test Parser and Formatter', function() {

        it('should parse and format the same elements', function() {
            var file = 'test/source/elements.bali';
            console.error(file);
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = utilities.parser.parseComponent(source, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = utilities.formatter.formatTree(tree);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            tree = utilities.parser.parseComponent(formatted, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            formatted = utilities.formatter.formatTree(tree);
            expect(formatted).to.equal(source);
            var iterator = tree.iterator();
            while (iterator.hasNext()) {
                var association = iterator.getNext();
                var array = association.value.toArray();
                for (var i = 0; i < array.length; i++) {
                    var item = array[i];
                    var string = item.toString();
                    var element = utilities.parser.parseElement(string, true);
                    expect(element.equalTo(item)).to.equal(true);
                }
            }
        });

        it('should parse and format the same expressions', function() {
            var file = 'test/source/expressions.bali';
            console.error(file);
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = utilities.parser.parseComponent(source, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = utilities.formatter.formatTree(tree);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            tree = utilities.parser.parseComponent(formatted, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            formatted = utilities.formatter.formatTree(tree);
            expect(formatted).to.equal(source);
            var iterator = tree.iterator();
            while (iterator.hasNext()) {
                var association = iterator.getNext();
                var array = association.value.toArray();
                for (var i = 0; i < array.length; i++) {
                    var item = array[i];
                    var string = item.toString();
                    var expression = utilities.parser.parseExpression(string, true);
                    expect(expression.equalTo(item)).to.equal(true);
                }
            }
        });

        it('should parse and format the same statements', function() {
            var file = 'test/source/statements.bali';
            console.error(file);
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = utilities.parser.parseComponent(source, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = utilities.formatter.formatTree(tree);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            tree = utilities.parser.parseComponent(formatted, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            formatted = utilities.formatter.formatTree(tree);
            expect(formatted).to.equal(source);
        });

        it('should parse and format the same components', function() {
            var file = 'test/source/components.bali';
            console.error(file);
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = utilities.parser.parseComponent(source, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = utilities.formatter.formatTree(tree);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            tree = utilities.parser.parseComponent(formatted, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            formatted = utilities.formatter.formatTree(tree);
            expect(formatted).to.equal(source);
        });

    });

});
