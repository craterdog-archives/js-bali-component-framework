/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var language = require('../BaliLanguage');
var fs = require('fs');
var mocha = require('mocha');
var expect = require('chai').expect;

describe('Bali Document Language™', function() {

    describe('Test Parser and Formatter', function() {

        it('should print out random tags', function() {
            for (var i = 0; i < 10; i++) {
                console.log('tag: ' + language.tag());
            }
        });

        it('should parse and format the same elements', function() {
            var file = 'test/source/elements.bali';
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = language.parseDocument(source);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = language.formatParseTree(tree);
            expect(formatted).to.equal(source);
        });

        it('should parse and format the same expressions', function() {
            var file = 'test/source/expressions.bali';
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = language.parseDocument(source);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = language.formatParseTree(tree);
            expect(formatted).to.equal(source);
        });

        it('should parse and format the same statements', function() {
            var file = 'test/source/statements.bali';
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = language.parseDocument(source);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = language.formatParseTree(tree);
            expect(formatted).to.equal(source);
        });

        it('should parse and format the same components', function() {
            var file = 'test/source/components.bali';
            var source = fs.readFileSync(file, 'utf8');
            expect(source).to.exist;  // jshint ignore:line
            var tree = language.parseDocument(source);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = language.formatParseTree(tree);
            expect(formatted).to.equal(source);
        });

    });

});
