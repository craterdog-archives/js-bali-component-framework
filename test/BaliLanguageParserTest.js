'use strict';

var balilexer  = require('../src/BaliLanguageLexer');
var baliparser  = require('../src/BaliLanguageParser');
//var baliparser  = require('bali-parser');
var testCase  = require('nodeunit').testCase;
var antlr4 = require('antlr4/index');
var fs = require('fs');

module.exports = testCase({
    'Test Elements': function(test) {
        test.expect(1);
        var input = fs.readFileSync('test/elements.bali', 'utf8');
        var chars = new antlr4.InputStream(input);
        var lexer = new balilexer.BaliLanguageLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new baliparser.BaliLanguageParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.document();
        test.notEqual(tree, null);
        test.done();
    },
    'Test Expressions': function(test) {
        test.expect(1);
        var input = fs.readFileSync('test/expressions.bali', 'utf8');
        var chars = new antlr4.InputStream(input);
        var lexer = new balilexer.BaliLanguageLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new baliparser.BaliLanguageParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.document();
        test.notEqual(tree, null);
        test.done();
    },
    'Test Statements': function(test) {
        test.expect(1);
        var input = fs.readFileSync('test/statements.bali', 'utf8');
        var chars = new antlr4.InputStream(input);
        var lexer = new balilexer.BaliLanguageLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new baliparser.BaliLanguageParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.document();
        test.notEqual(tree, null);
        test.done();
    },
    'Test Documents': function(test) {
        test.expect(1);
        var input = fs.readFileSync('test/documents.bali', 'utf8');
        var chars = new antlr4.InputStream(input);
        var lexer = new balilexer.BaliLanguageLexer(chars);
        var tokens  = new antlr4.CommonTokenStream(lexer);
        var parser = new baliparser.BaliLanguageParser(tokens);
        parser.buildParseTrees = true;
        var tree = parser.document();
        test.notEqual(tree, null);
        test.done();
    }
});