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

const utilities = require('../utilities');

exports.Component = require('./Component').Component;
exports.Element = require('./Element').Element;  // depends on Component
exports.Composite = require('./Composite').Composite;  // depends on Component
exports.Collection = require('./Collection').Collection;  // depends on Composite
exports.Visitor = require('./Visitor').Visitor;

