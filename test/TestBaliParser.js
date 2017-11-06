/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
'use strict';

var fs = require('fs');
var language = require('../src/BaliLanguage');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Elements': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/elements.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree);
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Expressions': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/expressions.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree);
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Statements': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/statements.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree);
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Documents': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/documents.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree);
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    }
});
