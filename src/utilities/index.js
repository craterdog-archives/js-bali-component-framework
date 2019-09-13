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

exports.Validator = require('./Validator').Validator;
exports.Automaton = require('./Automaton').Automaton;  // depends on Validator
exports.Codex = require('./Codex').Codex;  // depends on Validator
exports.Comparator = require('./Comparator').Comparator;
exports.Configuration = require('./Configuration').Configuration;  // depends on Validator
exports.Duplicator = require('./Duplicator').Duplicator;
exports.Formatter = require('./Formatter').Formatter;
exports.Generator = require('./Generator').Generator;  // depends on Codex
exports.Iterator = require('./Iterator').Iterator;  // depends on Validator
exports.Savant = require('./Savant').Savant;
exports.Sorter = require('./Sorter').Sorter;  // depends on Comparator

// NOTE: Can't include the Parser module since it depends on all components and that
//       would result in serious circular dependencies!
