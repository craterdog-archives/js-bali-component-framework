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


/*
 * This module captures the type information about the parse tree nodes.
 */


var TERMINAL_TYPES = [
    'invalid',  // unit based indexing for Bali
    'any',
    'binary',
    'label',
    'name',
    'number',
    'percent',
    'probability',
    'reference',
    'symbol',
    'tag',
    'text',
    'time',
    'variable',
    'version'
];

var TREE_TYPES = [
    'invalid',  // unit based indexing for Bali
    'arithmeticExpression',
    'array',
    'association',
    'block',
    'breakClause',
    'checkoutClause',
    'commitClause',
    'comparisonExpression',
    'complementExpression',
    'component',
    'componentExpression',
    'continueClause',
    'defaultExpression',
    'dereferenceExpression',
    'discardClause',
    'evaluateClause',
    'exponentialExpression',
    'factorialExpression',
    'finishClause',
    'functionExpression',
    'handleClause',
    'ifClause',
    'indices',
    'inversionExpression',
    'invocation',
    'logicalExpression',
    'magnitudeExpression',
    'messageExpression',
    'parameters',
    'precedenceExpression',
    'procedure',
    'publishClause',
    'queueClause',
    'range',
    'returnClause',
    'saveClause',
    'selectClause',
    'statement',
    'structure',
    'table',
    'task',
    'throwClause',
    'waitClause',
    'whileClause',
    'withClause'
];

exports.ANY = TERMINAL_TYPES.indexOf('any');
exports.ARITHMETIC_EXPRESSION = TREE_TYPES.indexOf('arithmeticExpression');
exports.ARRAY = TREE_TYPES.indexOf('array');
exports.ASSOCIATION = TREE_TYPES.indexOf('association');
exports.BINARY = TERMINAL_TYPES.indexOf('binary');
exports.BLOCK = TREE_TYPES.indexOf('block');
exports.BREAK_CLAUSE = TREE_TYPES.indexOf('breakClause');
exports.CHECKOUT_CLAUSE = TREE_TYPES.indexOf('checkoutClause');
exports.COMMIT_CLAUSE = TREE_TYPES.indexOf('commitClause');
exports.COMPARISON_EXPRESSION = TREE_TYPES.indexOf('comparisonExpression');
exports.COMPLEMENT_EXPRESSION = TREE_TYPES.indexOf('complementExpression');
exports.COMPONENT = TREE_TYPES.indexOf('component');
exports.COMPONENT_EXPRESSION = TREE_TYPES.indexOf('componentExpression');
exports.CONTINUE_CLAUSE = TREE_TYPES.indexOf('continueClause');
exports.DEFAULT_EXPRESSION = TREE_TYPES.indexOf('defaultExpression');
exports.DEREFERENCE_EXPRESSION = TREE_TYPES.indexOf('dereferenceExpression');
exports.DISCARD_CLAUSE = TREE_TYPES.indexOf('discardClause');
exports.EVALUATE_CLAUSE = TREE_TYPES.indexOf('evaluateClause');
exports.EXPONENTIAL_EXPRESSION = TREE_TYPES.indexOf('exponentialExpression');
exports.FACTORIAL_EXPRESSION = TREE_TYPES.indexOf('factorialExpression');
exports.FINISH_CLAUSE = TREE_TYPES.indexOf('finishClause');
exports.FUNCTION_EXPRESSION = TREE_TYPES.indexOf('functionExpression');
exports.HANDLE_CLAUSE = TREE_TYPES.indexOf('handleClause');
exports.IF_CLAUSE = TREE_TYPES.indexOf('ifClause');
exports.INDICES = TREE_TYPES.indexOf('indices');
exports.INVERSION_EXPRESSION = TREE_TYPES.indexOf('inversionExpression');
exports.INVOCATION = TREE_TYPES.indexOf('invocation');
exports.LABEL = TERMINAL_TYPES.indexOf('label');
exports.LOGICAL_EXPRESSION = TREE_TYPES.indexOf('logicalExpression');
exports.MAGNITUDE_EXPRESSION = TREE_TYPES.indexOf('magnitudeExpression');
exports.MESSAGE_EXPRESSION = TREE_TYPES.indexOf('messageExpression');
exports.NAME = TERMINAL_TYPES.indexOf('name');
exports.NUMBER = TERMINAL_TYPES.indexOf('number');
exports.PARAMETERS = TREE_TYPES.indexOf('parameters');
exports.PERCENT = TERMINAL_TYPES.indexOf('percent');
exports.PRECEDENCE_EXPRESSION = TREE_TYPES.indexOf('precedenceExpression');
exports.PROBABILITY = TERMINAL_TYPES.indexOf('probability');
exports.PROCEDURE = TREE_TYPES.indexOf('procedure');
exports.PUBLISH_CLAUSE = TREE_TYPES.indexOf('publishClause');
exports.QUEUE_CLAUSE = TREE_TYPES.indexOf('queueClause');
exports.RANGE = TREE_TYPES.indexOf('range');
exports.REFERENCE = TERMINAL_TYPES.indexOf('reference');
exports.RETURN_CLAUSE = TREE_TYPES.indexOf('returnClause');
exports.SAVE_CLAUSE = TREE_TYPES.indexOf('saveClause');
exports.SELECT_CLAUSE = TREE_TYPES.indexOf('selectClause');
exports.STATEMENT = TREE_TYPES.indexOf('statement');
exports.STRUCTURE = TREE_TYPES.indexOf('structure');
exports.SYMBOL = TERMINAL_TYPES.indexOf('symbol');
exports.TABLE = TREE_TYPES.indexOf('table');
exports.TAG = TERMINAL_TYPES.indexOf('tag');
exports.TASK = TREE_TYPES.indexOf('task');
exports.TEXT = TERMINAL_TYPES.indexOf('text');
exports.THROW_CLAUSE = TREE_TYPES.indexOf('throwClause');
exports.TIME = TERMINAL_TYPES.indexOf('time');
exports.VARIABLE = TERMINAL_TYPES.indexOf('variable');
exports.VERSION = TERMINAL_TYPES.indexOf('version');
exports.WAIT_CLAUSE = TREE_TYPES.indexOf('waitClause');
exports.WHILE_CLAUSE = TREE_TYPES.indexOf('whileClause');
exports.WITH_CLAUSE = TREE_TYPES.indexOf('withClause');
