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
    'binary',
    'duration',
    'function',
    'moment',
    'message',
    'number',
    'percent',
    'probability',
    'reference',
    'symbol',
    'tag',
    'template',
    'text',
    'variable',
    'version'
];

var TREE_TYPES = [
    'invalid',  // unit based indexing for Bali
    'arithmeticExpression',
    'association',
    'block',
    'breakClause',
    'catalog',
    'checkoutClause',
    'commitClause',
    'comparisonExpression',
    'complementExpression',
    'continueClause',
    'defaultExpression',
    'dereferenceExpression',
    'discardClause',
    'document',
    'evaluateClause',
    'exponentialExpression',
    'factorialExpression',
    'functionExpression',
    'handleClause',
    'ifClause',
    'indices',
    'inversionExpression',
    'list',
    'logicalExpression',
    'magnitudeExpression',
    'messageExpression',
    'parameters',
    'precedenceExpression',
    'procedure',
    'publishClause',
    'queueClause',
    'range',
    'recipient',
    'returnClause',
    'saveClause',
    'selectClause',
    'statement',
    'structure',
    'subcomponentExpression',
    'task',
    'throwClause',
    'waitClause',
    'whileClause',
    'withClause'
];

exports.ARITHMETIC_EXPRESSION = TREE_TYPES.indexOf('arithmeticExpression');
exports.ASSOCIATION = TREE_TYPES.indexOf('association');
exports.BINARY = TERMINAL_TYPES.indexOf('binary');
exports.BLOCK = TREE_TYPES.indexOf('block');
exports.BREAK_CLAUSE = TREE_TYPES.indexOf('breakClause');
exports.CATALOG = TREE_TYPES.indexOf('catalog');
exports.CHECKOUT_CLAUSE = TREE_TYPES.indexOf('checkoutClause');
exports.COMMIT_CLAUSE = TREE_TYPES.indexOf('commitClause');
exports.COMPARISON_EXPRESSION = TREE_TYPES.indexOf('comparisonExpression');
exports.COMPLEMENT_EXPRESSION = TREE_TYPES.indexOf('complementExpression');
exports.CONTINUE_CLAUSE = TREE_TYPES.indexOf('continueClause');
exports.DEFAULT_EXPRESSION = TREE_TYPES.indexOf('defaultExpression');
exports.DEREFERENCE_EXPRESSION = TREE_TYPES.indexOf('dereferenceExpression');
exports.DISCARD_CLAUSE = TREE_TYPES.indexOf('discardClause');
exports.DOCUMENT = TERMINAL_TYPES.indexOf('document');
exports.DURATION = TERMINAL_TYPES.indexOf('duration');
exports.EVALUATE_CLAUSE = TREE_TYPES.indexOf('evaluateClause');
exports.EXPONENTIAL_EXPRESSION = TREE_TYPES.indexOf('exponentialExpression');
exports.FACTORIAL_EXPRESSION = TREE_TYPES.indexOf('factorialExpression');
exports.FUNCTION = TERMINAL_TYPES.indexOf('function');
exports.FUNCTION_EXPRESSION = TREE_TYPES.indexOf('functionExpression');
exports.HANDLE_CLAUSE = TREE_TYPES.indexOf('handleClause');
exports.IF_CLAUSE = TREE_TYPES.indexOf('ifClause');
exports.INDICES = TREE_TYPES.indexOf('indices');
exports.INVERSION_EXPRESSION = TREE_TYPES.indexOf('inversionExpression');
exports.LIST = TREE_TYPES.indexOf('list');
exports.LOGICAL_EXPRESSION = TREE_TYPES.indexOf('logicalExpression');
exports.MAGNITUDE_EXPRESSION = TREE_TYPES.indexOf('magnitudeExpression');
exports.MESSAGE = TERMINAL_TYPES.indexOf('message');
exports.MESSAGE_EXPRESSION = TREE_TYPES.indexOf('messageExpression');
exports.MOMENT = TERMINAL_TYPES.indexOf('moment');
exports.NUMBER = TERMINAL_TYPES.indexOf('number');
exports.PARAMETERS = TREE_TYPES.indexOf('parameters');
exports.PERCENT = TERMINAL_TYPES.indexOf('percent');
exports.PRECEDENCE_EXPRESSION = TREE_TYPES.indexOf('precedenceExpression');
exports.PROBABILITY = TERMINAL_TYPES.indexOf('probability');
exports.PROCEDURE = TREE_TYPES.indexOf('procedure');
exports.PUBLISH_CLAUSE = TREE_TYPES.indexOf('publishClause');
exports.QUEUE_CLAUSE = TREE_TYPES.indexOf('queueClause');
exports.RANGE = TREE_TYPES.indexOf('range');
exports.RECIPIENT = TREE_TYPES.indexOf('recipient');
exports.REFERENCE = TERMINAL_TYPES.indexOf('reference');
exports.RETURN_CLAUSE = TREE_TYPES.indexOf('returnClause');
exports.SAVE_CLAUSE = TREE_TYPES.indexOf('saveClause');
exports.SELECT_CLAUSE = TREE_TYPES.indexOf('selectClause');
exports.STATEMENT = TREE_TYPES.indexOf('statement');
exports.STRUCTURE = TREE_TYPES.indexOf('structure');
exports.SUBCOMPONENT_EXPRESSION = TREE_TYPES.indexOf('subcomponentExpression');
exports.SYMBOL = TERMINAL_TYPES.indexOf('symbol');
exports.TAG = TERMINAL_TYPES.indexOf('tag');
exports.TASK = TREE_TYPES.indexOf('task');
exports.TEMPLATE = TERMINAL_TYPES.indexOf('template');
exports.TEXT = TERMINAL_TYPES.indexOf('text');
exports.THROW_CLAUSE = TREE_TYPES.indexOf('throwClause');
exports.VARIABLE = TERMINAL_TYPES.indexOf('variable');
exports.VERSION = TERMINAL_TYPES.indexOf('version');
exports.WAIT_CLAUSE = TREE_TYPES.indexOf('waitClause');
exports.WHILE_CLAUSE = TREE_TYPES.indexOf('whileClause');
exports.WITH_CLAUSE = TREE_TYPES.indexOf('withClause');
