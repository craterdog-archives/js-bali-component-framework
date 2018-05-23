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
var language = require('../BaliLanguage');
var mocha = require('mocha');
var expect = require('chai').expect;

describe('Bali Document Language™', function() {

    describe('Test Parser and Formatter', function() {

        it('should parse and format the same elements', function() {
            var file = 'test/source/elements.bali';
            var elements = fs.readFileSync(file, 'utf8');
            expect(elements).to.exist;  // jshint ignore:line
            var tree = language.parseDocument(elements);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = language.formatDocument(tree) + '\n';
            expect(formatted).to.equal(elements);
        });

        it('should parse and format the same expressions', function() {
            var file = 'test/source/expressions.bali';
            var expressions = fs.readFileSync(file, 'utf8');
            expect(expressions).to.exist;  // jshint ignore:line
            var tree = language.parseDocument(expressions);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = language.formatDocument(tree) + '\n';
            expect(formatted).to.equal(expressions);
        });

        it('should parse and format the same statements', function() {
            var file = 'test/source/statements.bali';
            var statements = fs.readFileSync(file, 'utf8');
            expect(statements).to.exist;  // jshint ignore:line
            var tree = language.parseDocument(statements);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = language.formatDocument(tree) + '\n';
            expect(formatted).to.equal(statements);
        });

        it('should parse and format the same documents', function() {
            var file = 'test/source/documents.bali';
            var documents = fs.readFileSync(file, 'utf8');
            expect(documents).to.exist;  // jshint ignore:line
            var tree = language.parseDocument(documents);
            expect(tree).to.exist;  // jshint ignore:line
            var formatted = language.formatDocument(tree) + '\n';
            expect(formatted).to.equal(documents);
        });

    });

});
