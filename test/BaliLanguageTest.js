'use strict';

var fs = require('fs');
var bali = require('../src/BaliLanguage');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Elements': function(test) {
        console.log('\n.Parsing all the element types...');
        test.expect(2);
        var tree = bali.parseFile('test/elements.bali');
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = bali.formatDocument(tree);
        var document = fs.readFileSync('test/elements.bali', 'utf8');
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Expressions': function(test) {
        console.log('\n.Parsing all the expression types...');
        test.expect(2);
        var tree = bali.parseFile('test/expressions.bali');
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = bali.formatDocument(tree);
        var document = fs.readFileSync('test/expressions.bali', 'utf8');
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Statements': function(test) {
        console.log('\n.Parsing all the statement types...');
        test.expect(2);
        var tree = bali.parseFile('test/statements.bali');
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = bali.formatDocument(tree);
        var document = fs.readFileSync('test/statements.bali', 'utf8');
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    },
    'Test Documents': function(test) {
        console.log('\n.Parsing all the document types...');
        test.expect(2);
        var tree = bali.parseFile('test/documents.bali');
        test.notEqual(tree, null, 'The parser returned a null tree.');
        var formatted = bali.formatDocument(tree);
        var document = fs.readFileSync('test/documents.bali', 'utf8');
        test.strictEqual(formatted, document, 'The formatter returned a different document.');
        test.done();
    }
});
