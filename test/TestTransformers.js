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
var formatter = require('../src/transformers/DocumentFormatter');
var parser = require('../src/transformers/DocumentParser');

describe('Bali Document Notation™', function() {
    var DEBUG = false;  // change to true to check for ambiguities in the grammar

    describe('Test Parser and Formatter', function() {

        it('should parse and format the same elements', function() {
            var file = 'test/source/elements.bali';
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = parser.parseDocument(source, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = formatter.formatTree(tree);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            tree = parser.parseDocument(formatted, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            formatted = formatter.formatTree(tree);
            expect(formatted).to.equal(source);
        });

        it('should parse and format the same expressions', function() {
            var file = 'test/source/expressions.bali';
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = parser.parseDocument(source, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = formatter.formatTree(tree);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            tree = parser.parseDocument(formatted, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            formatted = formatter.formatTree(tree);
            expect(formatted).to.equal(source);
        });

        it('should parse and format the same statements', function() {
            var file = 'test/source/statements.bali';
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = parser.parseDocument(source, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = formatter.formatTree(tree);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            tree = parser.parseDocument(formatted, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            formatted = formatter.formatTree(tree);
            expect(formatted).to.equal(source);
        });

        it('should parse and format the same components', function() {
            var file = 'test/source/components.bali';
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = parser.parseDocument(source, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = formatter.formatTree(tree);
            //fs.writeFileSync(file, formatted, 'utf8');
            expect(formatted).to.equal(source);
            tree = parser.parseDocument(formatted, DEBUG);
            expect(tree).to.exist;  // jshint ignore:line
            formatted = formatter.formatTree(tree);
            expect(formatted).to.equal(source);
        });

    });

});
