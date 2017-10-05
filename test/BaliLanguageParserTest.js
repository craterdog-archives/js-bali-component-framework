'use strict';

var BaliLanguageLexer  = require('../src/BaliLanguageLexer').BaliLanguageLexer;
var BaliLanguageParser  = require('../src/BaliLanguageParser').BaliLanguageParser;
var BaliLanguageFormatter  = require('../src/BaliLanguageFormatter');
var testCase  = require('nodeunit').testCase;
var antlr4 = require('antlr4/index');
var fs = require('fs');

module.exports = testCase({
    'Test Elements': function(test) {
        console.log('\n.Parsing all the element types...');
        test.expect(2);
        var input = fs.readFileSync('test/elements.bali', 'utf8');
        var chars = new antlr4.InputStream(input);
        var lexer = new BaliLanguageLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new BaliLanguageParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.document();
        test.notEqual(tree, null);
        var formatted = BaliLanguageFormatter.formatDocument(tree);
        console.log(formatted);
        test.deepEqual(chars.toString(), formatted);
        test.done();
    },
    'Test Expressions': function(test) {
        console.log('Parsing all the expression types...');
        test.expect(1);
        var input = fs.readFileSync('test/expressions.bali', 'utf8');
        var chars = new antlr4.InputStream(input);
        var lexer = new BaliLanguageLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new BaliLanguageParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.document();
        test.notEqual(tree, null);
        test.done();
    },
    'Test Statements': function(test) {
        console.log('Parsing all the statement types...');
        test.expect(1);
        var input = fs.readFileSync('test/statements.bali', 'utf8');
        var chars = new antlr4.InputStream(input);
        var lexer = new BaliLanguageLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new BaliLanguageParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.document();
        test.notEqual(tree, null);
        test.done();
    },
    'Test Documents': function(test) {
        console.log('Parsing all the document types...');
        test.expect(1);
        var input = fs.readFileSync('test/documents.bali', 'utf8');
        var chars = new antlr4.InputStream(input);
        var lexer = new BaliLanguageLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new BaliLanguageParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.document();
        test.notEqual(tree, null);
        test.done();
    }
});