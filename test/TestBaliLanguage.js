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
        var document = fs.readFileSync('test/source/elements.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree) + '\n';
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Parse Expressions': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/source/expressions.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree) + '\n';
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Parse Statements': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/source/statements.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree) + '\n';
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Parse Documents': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/source/documents.bali', 'utf8');
        var tree = language.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = language.formatDocument(tree) + '\n';
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Compiler': function(test) {
        var source = [
            'test/source/main',
            'test/source/mainWithFinal',
            'test/source/mainWithExceptions',
            'test/source/mainWithExceptionsAndFinal',
            'test/source/evaluateExpression',
            'test/source/evaluateExpressionWithResult',
            'test/source/ifThen',
            'test/source/ifThenElse',
            'test/source/ifThenElseIf',
            'test/source/ifThenElseIfElse',
            'test/source/selectOption',
            'test/source/selectOptionElse',
            'test/source/whileLoop',
            'test/source/whileLoopWithLabel',
            'test/source/withLoop',
            'test/source/withLoopWithLabel',
            'test/source/withEachLoop',
            'test/source/withEachLoopWithLabel'
        ];
        test.expect(source.length);
        for (var i = 0; i < source.length; i++) {
            var baliFile = source[i] + '.bali';
            var basmFile = source[i] + '.basm';
            var block = fs.readFileSync(baliFile, 'utf8');
            var tree = language.parseBlock(block);
            test.notEqual(tree, null, 'The parser returned a null tree.');
            var asmcode = language.compileBlock(tree);
            fs.writeFileSync(basmFile, asmcode, 'utf8');
            console.log('\n' + basmFile + ':\n' + asmcode);
        }
        test.done();
    }
});
