'use strict';

var fs = require('fs');
var bali = require('../src/BaliLanguage');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Elements': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/elements.bali', 'utf8');
        var tree = bali.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = bali.formatDocument(tree);
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Expressions': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/expressions.bali', 'utf8');
        var tree = bali.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = bali.formatDocument(tree);
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Statements': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/statements.bali', 'utf8');
        var tree = bali.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = bali.formatDocument(tree);
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Documents': function(test) {
        test.expect(2);
        var document = fs.readFileSync('test/documents.bali', 'utf8');
        var tree = bali.parseDocument(document);
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = bali.formatDocument(tree);
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    }
});
