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
exports.types = require('./src/abstractions/Types');
exports.Component = require('./src/abstractions/Component').Component;
exports.Element = require('./src/abstractions/Element').Element;
exports.Composite = require('./src/abstractions/Composite').Composite;
exports.Collection = require('./src/abstractions/Collection').Collection;

// PRIMITIVE ELEMENT TYPES
exports.Angle = require('./src/elements/Angle').Angle;
exports.Binary = require('./src/elements/Binary').Binary;
exports.Complex = require('./src/elements/Complex').Complex;
exports.Duration = require('./src/elements/Duration').Duration;
exports.Identifier = require('./src/elements/Identifier').Identifier;
exports.Moment = require('./src/elements/Moment').Moment;
exports.Percent = require('./src/elements/Percent').Percent;
exports.Probability = require('./src/elements/Probability').Probability;
exports.Reference = require('./src/elements/Reference').Reference;
exports.Symbol = require('./src/elements/Symbol').Symbol;
exports.Tag = require('./src/elements/Tag').Tag;
exports.Template = require('./src/elements/Template').Template;
exports.Text = require('./src/elements/Text').Text;
exports.Version = require('./src/elements/Version').Version;

// PRIMITIVE COMPOSITE TYPES
exports.Association = require('./src/composites/Association').Association;
exports.Block = require('./src/composites/Block').Block;
exports.Source = require('./src/composites/Source').Source;
exports.Procedure = require('./src/composites/Procedure').Procedure;
exports.Parameters = require('./src/composites/Parameters').Parameters;
exports.Range = require('./src/composites/Range').Range;
exports.Tree = require('./src/composites/Tree').Tree;

// COLLECTION TYPES
exports.List = require('./src/collections/List').List;
exports.Catalog = require('./src/collections/Catalog').Catalog;
exports.Queue = require('./src/collections/Queue').Stack;
exports.Set = require('./src/collections/Set').Set;
exports.Stack = require('./src/collections/Stack').Stack;

// GENERAL UTILITIES
exports.Comparator = require('./src/utilities/Comparator').Comparator;
exports.Formatter = require('./src/utilities/Formatter').Formatter;
exports.Iterator = require('./src/utilities/Iterator').Iterator;
exports.Parser = require('./src/utilities/Parser').Parser;
exports.Sorter = require('./src/utilities/Sorter').Sorter;
exports.Visitor = require('./src/utilities/Visitor').Visitor;

exports.codex = require('./src/utilities/Codex');
exports.formatter = new exports.Formatter();
exports.parser = new exports.Parser(false);


