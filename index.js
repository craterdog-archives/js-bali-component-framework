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


// BALI GRAMMAR
const grammar = require('./src/grammar');  // depends on antlr4
exports.DocumentLexer = grammar.DocumentLexer;
exports.DocumentListener = grammar.DocumentListener;
exports.DocumentParser = grammar.DocumentParser;
exports.DocumentVisitor = grammar.DocumentVisitor;


// GENERAL UTILITIES
const utilities = require('./src/utilities');  // depends on grammar (by fiat)
exports.codex = utilities.codex;
exports.formatter = new utilities.Formatter();
exports.precision = utilities.precision;
exports.random = utilities.random;
exports.types = utilities.types;


// GENERAL TYPES
exports.Comparator = utilities.Comparator;
exports.Exception = utilities.Exception;
exports.Formatter = utilities.Formatter;
exports.Iterator = utilities.Iterator;
exports.Sorter = utilities.Sorter;
exports.Visitor = utilities.Visitor;


// ABSTRACT TYPES
const abstractions = require('./src/abstractions');  // depends on utilities
exports.Component = abstractions.Component;
exports.Element = abstractions.Element;
exports.Composite = abstractions.Composite;
exports.Collection = abstractions.Collection;


// ELEMENT TYPES
const elements = require('./src/elements');  // depends on abstractions
exports.Angle = elements.Angle;
exports.Binary = elements.Binary;
exports.Duration = elements.Duration;
exports.Moment = elements.Moment;
exports.Number = elements.Number;
exports.Pattern = elements.Pattern;
exports.Percent = elements.Percent;
exports.Probability = elements.Probability;
exports.Reference = elements.Reference;
exports.Reserved = elements.Reserved;
exports.Symbol = elements.Symbol;
exports.Tag = elements.Tag;
exports.Text = elements.Text;
exports.Version = elements.Version;


// COMPOSITE TYPES
const composites = require('./src/composites');  // depends on elements
exports.Association = composites.Association;
exports.Parameters = composites.Parameters;
exports.Range = composites.Range;
exports.Source = composites.Source;
exports.Tree = composites.Tree;


// COLLECTION TYPES
const collections = require('./src/collections');  // depends on composites
exports.Catalog = collections.Catalog;
exports.List = collections.List;
exports.Queue = collections.Stack;
exports.Set = collections.Set;
exports.Stack = collections.Stack;

// BALI PARSER
exports.Parser = require('./src/utilities/Parser').Parser;  // depends on EVERYTHING
exports.parser = new exports.Parser(false);  // depends on Parser


// SHORT CUTS
exports.format = function(component) {
    return exports.formatter.formatComponent(component);
};
exports.parse = function(document) {
    return exports.parser.parseDocument(document);
};


// CONSTANTS
exports.NONE = exports.Pattern.fromLiteral('none');
exports.ANY = exports.Pattern.fromLiteral('any');
exports.FALSE = exports.Probability.fromLiteral('false');
exports.TRUE = exports.Probability.fromLiteral('true');
exports.PI = exports.Angle.fromLiteral('~pi');
exports.E = exports.Number.fromLiteral('e');
exports.PHI = exports.Number.fromLiteral('phi');
exports.ZERO = exports.Number.fromLiteral('0');
exports.ONE = exports.Number.fromLiteral('1');
exports.I = exports.Number.fromLiteral('1i');
exports.UNDEFINED = exports.Number.fromLiteral('undefined');
exports.INFINITY = exports.Number.fromLiteral('infinity');


// PARAMETERS
exports.degrees = new exports.Parameters(exports.parse('[$units: $degrees]'));
exports.radians = new exports.Parameters(exports.parse('[$units: $radians]'));
exports.polar = new exports.Parameters(exports.parse('[$format: $polar]'));
exports.rectangular = new exports.Parameters(exports.parse('[$format: $rectangular]'));
exports.base2 = new exports.Parameters(exports.parse('[$base: 2]'));
exports.base16 = new exports.Parameters(exports.parse('[$base: 16]'));
exports.base32 = new exports.Parameters(exports.parse('[$base: 32]'));
exports.base64 = new exports.Parameters(exports.parse('[$base: 64]'));
