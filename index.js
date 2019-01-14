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
