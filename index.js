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

// ABSTRACT TYPES
var abstractions = require('./src/abstractions');
exports.types = abstractions.types;
exports.Component = abstractions.Component;
exports.Element = abstractions.Element;
exports.Composite = abstractions.Composite;
exports.Collection = abstractions.Collection;

// PRIMITIVE ELEMENT TYPES
var elements = require('./src/elements');
exports.Angle = elements.Angle;
exports.Binary = elements.Binary;
exports.Duration = elements.Duration;
exports.Filter = elements.Filter;
exports.Identifier = elements.Identifier;
exports.Moment = elements.Moment;
exports.Number = elements.Number;
exports.Percent = elements.Percent;
exports.Probability = elements.Probability;
exports.Reference = elements.Reference;
exports.Reserved = elements.Reserved;
exports.Symbol = elements.Symbol;
exports.Tag = elements.Tag;
exports.Text = elements.Text;
exports.Version = elements.Version;

// PRIMITIVE COMPOSITE TYPES
var composites = require('./src/composites');
exports.Association = composites.Association;
exports.Parameters = composites.Parameters;
exports.Range = composites.Range;
exports.Source = composites.Source;
exports.Tree = composites.Tree;

// COLLECTION TYPES
var collections = require('./src/collections');
exports.List = collections.List;
exports.Catalog = collections.Catalog;
exports.Queue = collections.Stack;
exports.Set = collections.Set;
exports.Stack = collections.Stack;

// GENERAL UTILITIES
var utilities = require('./src/utilities');
exports.Comparator = utilities.Comparator;
exports.Exception = utilities.Exception;
exports.Formatter = utilities.Formatter;
exports.Iterator = utilities.Iterator;
exports.Parser = utilities.Parser;
exports.Sorter = utilities.Sorter;
exports.Visitor = utilities.Visitor;
exports.precision = utilities.precision;
exports.codex = utilities.codex;
exports.formatter = new utilities.Formatter();
exports.parser = new utilities.Parser(false);


