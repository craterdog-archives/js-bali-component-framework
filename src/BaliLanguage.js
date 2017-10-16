/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************
 * @type BaliLanguage <https://github.com/craterdog-bali/js-bali-language>
 ************************************************************************/
var antlr = require('antlr4');
var grammar = require('./grammar');
var transformers = require('./transformers');


/*
 * This module provides useful functions for parsing and manipulating documents
 * that are written using the Bali Document Language™. For more information
 * about the Bali language refer to the Reference Guide at:
 * <https://github.com/craterdog-bali/bali-reference-guide/wiki>.
 */


// PUBLIC FUNCTIONS

/*
 * This function parses a text document written using the Bali Document Language™
 * and returns the parse tree. The parse tree can then be used by other functions
 * that do formatting, language transformations, validation, compilation, etc.
 * 
 * @param String document The Bali document to be parsed.
 * @returns antlr.ParserRuleContext The root of the resulting parser tree.
 */
function parseDocument(document) {
    var chars = new antlr.InputStream(document);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.document();
    return tree;
}


/*
 * This function "walks" a parse tree for a Bali document creating a canonically
 * formatted text string containing the corresponding Bali document.
 * 
 * @param antlr.ParseRuleContext tree The parse tree for the desired document.
 * @returns String The formatted Bali source document.
 */
function formatDocument(tree) {
    return formatPaddedDocument(tree, '');
}


/*
 * This function "walks" a parse tree for a Bali document creating a canonically
 * formatted text string containing the corresponding Bali document.
 * 
 * @param antlr.ParseRuleContext tree The parse tree for the desired document.
 * @param String padding The padding string to be used at the beginning of
 *               each line of the formatted string.
 * @returns String The formatted Bali source document.
 */
function formatPaddedDocument(tree, padding) {
    var visitor = new transformers.FormattingVisitor(padding);
    tree.accept(visitor);
    return visitor.buffer + '\n';  // POSIX requires all lines end with a line feed
}


/*
 * This function "walks" a parse tree for a Bali document creating the corresponding
 * javascript object.
 * 
 * @param antlr.ParseRuleContext tree The parse tree to be converted to a javascript object.
 * @returns Object The resulting javascript object.
 */
function convertToObject(tree) {
    var transformer = new transformers.ObjectTransformer();
    var object = transformer.toObject(tree);
    return object;
}


/*
 * This function reflectively converts a javascript object into its corresponding Bali parse tree.
 * 
 * @param Object object The javascript object to be converted into a parse tree for a Bali document.
 * @returns antlr.ParseRuleContext The resulting parse tree for the javascript object.
 */
function convertToTree(object) {
    var transformer = new transformers.ObjectTransformer();
    var tree = transformer.toTree(object);
    return tree;
}


exports.parseDocument = parseDocument;
exports.formatDocument = formatDocument;
exports.formatPaddedDocument = formatPaddedDocument;
exports.convertToObject = convertToObject;
exports.convertToTree = convertToTree;

