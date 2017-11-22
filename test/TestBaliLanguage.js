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
    'Test Parse Elements': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/elements.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree) + '\n';
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Parse Expressions': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/expressions.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree) + '\n';
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Parse Statements': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/statements.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree) + '\n';
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Parse Documents': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/documents.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree) + '\n';
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Compile If Then Statement': function(test) {
        test.expect(1);
        var block = fs.readFileSync('test/ifThen.bali', 'utf8');
        var tree = language.parseBlock(block);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var asmcode = language.compileBlock(tree);
        console.log('\nASSEMBLY CODE:\n' + asmcode);
        test.done();
    },
    'Test Compile If Else Statement': function(test) {
        test.expect(1);
        var block = fs.readFileSync('test/ifElse.bali', 'utf8');
        var tree = language.parseBlock(block);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var asmcode = language.compileBlock(tree);
        console.log('\nASSEMBLY CODE:\n' + asmcode);
        test.done();
    },
    'Test Compile If Else Finally Statement': function(test) {
        test.expect(1);
        var block = fs.readFileSync('test/ifElseFinally.bali', 'utf8');
        var tree = language.parseBlock(block);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var asmcode = language.compileBlock(tree);
        console.log('\nASSEMBLY CODE:\n' + asmcode);
        test.done();
    },
    'Test Compile If Else If Statement': function(test) {
        test.expect(1);
        var block = fs.readFileSync('test/ifElseIf.bali', 'utf8');
        var tree = language.parseBlock(block);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var asmcode = language.compileBlock(tree);
        console.log('\nASSEMBLY CODE:\n' + asmcode);
        test.done();
    },
    'Test Compile While Loop Statement': function(test) {
        test.expect(1);
        var block = fs.readFileSync('test/whileLoop.bali', 'utf8');
        var tree = language.parseBlock(block);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var asmcode = language.compileBlock(tree);
        console.log('\nASSEMBLY CODE:\n' + asmcode);
        test.done();
    }
});
