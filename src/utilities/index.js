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

const grammar = require('../grammar');

exports.codex = require('./Codex');
exports.precision = require('./Precision');
exports.random = require('./Random');  // depends on codex
exports.validation = require('./Validation');

exports.Automaton = require('./Automaton').Automaton;
exports.Comparator = require('./Comparator').Comparator;
exports.Duplicator = require('./Duplicator').Duplicator;
exports.Formatter = require('./Formatter').Formatter;
exports.Iterator = require('./Iterator').Iterator;
exports.Sorter = require('./Sorter').Sorter;  // depends on Comparator

// NOTE: Can't include the Parser module since it depends on all components and that
//       would result in serious circular dependencies!
