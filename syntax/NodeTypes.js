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

var NODE_TYPES = [
    'invalid',  // ordinal (unit based) indexing for Bali
    'angle',
    'arithmeticExpression',
    'association',
    'binary',
    'block',
    'breakClause',
    'catalog',
    'checkoutClause',
    'code',
    'commitClause',
    'comparisonExpression',
    'complementExpression',
    'component',
    'continueClause',
    'defaultExpression',
    'dereferenceExpression',
    'discardClause',
    'document',
    'duration',
    'evaluateClause',
    'exponentialExpression',
    'factorialExpression',
    'function',
    'functionExpression',
    'handleClause',
    'ifClause',
    'indices',
    'inversionExpression',
    'list',
    'logicalExpression',
    'magnitudeExpression',
    'message',
    'messageExpression',
    'moment',
    'number',
    'parameters',
    'percent',
    'precedenceExpression',
    'probability',
    'procedure',
    'publishClause',
    'queueClause',
    'range',
    'reference',
    'returnClause',
    'saveClause',
    'seal',
    'selectClause',
    'statement',
    'structure',
    'subcomponent',
    'subcomponentExpression',
    'symbol',
    'tag',
    'task',
    'template',
    'text',
    'throwClause',
    'variable',
    'version',
    'waitClause',
    'whileClause',
    'withClause'
];
exports.NODE_TYPES = NODE_TYPES;


exports.ANGLE = NODE_TYPES.indexOf('angle');
exports.ARITHMETIC_EXPRESSION = NODE_TYPES.indexOf('arithmeticExpression');
exports.ASSOCIATION = NODE_TYPES.indexOf('association');
exports.BINARY = NODE_TYPES.indexOf('binary');
exports.BLOCK = NODE_TYPES.indexOf('block');
exports.BREAK_CLAUSE = NODE_TYPES.indexOf('breakClause');
exports.CATALOG = NODE_TYPES.indexOf('catalog');
exports.CHECKOUT_CLAUSE = NODE_TYPES.indexOf('checkoutClause');
exports.CODE = NODE_TYPES.indexOf('code');
exports.COMMIT_CLAUSE = NODE_TYPES.indexOf('commitClause');
exports.COMPARISON_EXPRESSION = NODE_TYPES.indexOf('comparisonExpression');
exports.COMPLEMENT_EXPRESSION = NODE_TYPES.indexOf('complementExpression');
exports.COMPONENT = NODE_TYPES.indexOf('component');
exports.CONTINUE_CLAUSE = NODE_TYPES.indexOf('continueClause');
exports.DEFAULT_EXPRESSION = NODE_TYPES.indexOf('defaultExpression');
exports.DEREFERENCE_EXPRESSION = NODE_TYPES.indexOf('dereferenceExpression');
exports.DISCARD_CLAUSE = NODE_TYPES.indexOf('discardClause');
exports.DOCUMENT = NODE_TYPES.indexOf('document');
exports.DURATION = NODE_TYPES.indexOf('duration');
exports.EVALUATE_CLAUSE = NODE_TYPES.indexOf('evaluateClause');
exports.EXPONENTIAL_EXPRESSION = NODE_TYPES.indexOf('exponentialExpression');
exports.FACTORIAL_EXPRESSION = NODE_TYPES.indexOf('factorialExpression');
exports.FUNCTION = NODE_TYPES.indexOf('function');
exports.FUNCTION_EXPRESSION = NODE_TYPES.indexOf('functionExpression');
exports.HANDLE_CLAUSE = NODE_TYPES.indexOf('handleClause');
exports.IF_CLAUSE = NODE_TYPES.indexOf('ifClause');
exports.INDICES = NODE_TYPES.indexOf('indices');
exports.INVERSION_EXPRESSION = NODE_TYPES.indexOf('inversionExpression');
exports.LIST = NODE_TYPES.indexOf('list');
exports.LOGICAL_EXPRESSION = NODE_TYPES.indexOf('logicalExpression');
exports.MAGNITUDE_EXPRESSION = NODE_TYPES.indexOf('magnitudeExpression');
exports.MESSAGE = NODE_TYPES.indexOf('message');
exports.MESSAGE_EXPRESSION = NODE_TYPES.indexOf('messageExpression');
exports.MOMENT = NODE_TYPES.indexOf('moment');
exports.NUMBER = NODE_TYPES.indexOf('number');
exports.PARAMETERS = NODE_TYPES.indexOf('parameters');
exports.PERCENT = NODE_TYPES.indexOf('percent');
exports.PRECEDENCE_EXPRESSION = NODE_TYPES.indexOf('precedenceExpression');
exports.PROBABILITY = NODE_TYPES.indexOf('probability');
exports.PROCEDURE = NODE_TYPES.indexOf('procedure');
exports.PUBLISH_CLAUSE = NODE_TYPES.indexOf('publishClause');
exports.QUEUE_CLAUSE = NODE_TYPES.indexOf('queueClause');
exports.RANGE = NODE_TYPES.indexOf('range');
exports.REFERENCE = NODE_TYPES.indexOf('reference');
exports.RETURN_CLAUSE = NODE_TYPES.indexOf('returnClause');
exports.SAVE_CLAUSE = NODE_TYPES.indexOf('saveClause');
exports.SEAL = NODE_TYPES.indexOf('seal');
exports.SELECT_CLAUSE = NODE_TYPES.indexOf('selectClause');
exports.STATEMENT = NODE_TYPES.indexOf('statement');
exports.STRUCTURE = NODE_TYPES.indexOf('structure');
exports.SUBCOMPONENT = NODE_TYPES.indexOf('subcomponent');
exports.SUBCOMPONENT_EXPRESSION = NODE_TYPES.indexOf('subcomponentExpression');
exports.SYMBOL = NODE_TYPES.indexOf('symbol');
exports.TAG = NODE_TYPES.indexOf('tag');
exports.TASK = NODE_TYPES.indexOf('task');
exports.TEMPLATE = NODE_TYPES.indexOf('template');
exports.TEXT = NODE_TYPES.indexOf('text');
exports.THROW_CLAUSE = NODE_TYPES.indexOf('throwClause');
exports.VARIABLE = NODE_TYPES.indexOf('variable');
exports.VERSION = NODE_TYPES.indexOf('version');
exports.WAIT_CLAUSE = NODE_TYPES.indexOf('waitClause');
exports.WHILE_CLAUSE = NODE_TYPES.indexOf('whileClause');
exports.WITH_CLAUSE = NODE_TYPES.indexOf('withClause');
