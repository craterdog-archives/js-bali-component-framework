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
 * This module defines type information about the different types of parse tree nodes that
 * are generated when parsing strings containing Bali Document Notation™.
 */


// PRIVATE CONSTANTS

const SYMBOLS = [
    '$Invalid',
    '$Angle',
    '$ArithmeticExpression',
    '$Association',
    '$Binary',
    '$Block',
    '$BreakClause',
    '$Catalog',
    '$CheckoutClause',
    '$CommitClause',
    '$ComparisonExpression',
    '$ComplementExpression',
    '$ConcatenationExpression',
    '$ContinueClause',
    '$DefaultExpression',
    '$DereferenceExpression',
    '$DiscardClause',
    '$Duration',
    '$EvaluateClause',
    '$ExponentialExpression',
    '$FactorialExpression',
    '$Function',
    '$FunctionExpression',
    '$HandleClause',
    '$IfClause',
    '$Indices',
    '$InversionExpression',
    '$List',
    '$LogicalExpression',
    '$MagnitudeExpression',
    '$Message',
    '$MessageExpression',
    '$Moment',
    '$Number',
    '$Parameters',
    '$Pattern',
    '$Percent',
    '$PrecedenceExpression',
    '$Probability',
    '$Procedure',
    '$PublishClause',
    '$Queue',
    '$QueueClause',
    '$Range',
    '$Reference',
    '$Reserved',
    '$ReturnClause',
    '$SaveClause',
    '$SelectClause',
    '$Set',
    '$Source',
    '$Stack',
    '$Statement',
    '$Subcomponent',
    '$SubcomponentExpression',
    '$Symbol',
    '$Tag',
    '$Text',
    '$ThrowClause',
    '$Tree',
    '$Variable',
    '$Version',
    '$WaitClause',
    '$WhileClause',
    '$WithClause'
];


// PUBLIC CONSTANTS

/*
 * These constants define numeric values for each of the types.
 */
exports.ANGLE = SYMBOLS.indexOf('$Angle');
exports.ARITHMETIC_EXPRESSION = SYMBOLS.indexOf('$ArithmeticExpression');
exports.ASSOCIATION = SYMBOLS.indexOf('$Association');
exports.BINARY = SYMBOLS.indexOf('$Binary');
exports.BLOCK = SYMBOLS.indexOf('$Block');
exports.BREAK_CLAUSE = SYMBOLS.indexOf('$BreakClause');
exports.CATALOG = SYMBOLS.indexOf('$Catalog');
exports.CHECKOUT_CLAUSE = SYMBOLS.indexOf('$CheckoutClause');
exports.COMMIT_CLAUSE = SYMBOLS.indexOf('$CommitClause');
exports.COMPARISON_EXPRESSION = SYMBOLS.indexOf('$ComparisonExpression');
exports.COMPLEMENT_EXPRESSION = SYMBOLS.indexOf('$ComplementExpression');
exports.CONCATENATION_EXPRESSION = SYMBOLS.indexOf('$ConcatenationExpression');
exports.CONTINUE_CLAUSE = SYMBOLS.indexOf('$ContinueClause');
exports.DEFAULT_EXPRESSION = SYMBOLS.indexOf('$DefaultExpression');
exports.DEREFERENCE_EXPRESSION = SYMBOLS.indexOf('$DereferenceExpression');
exports.DISCARD_CLAUSE = SYMBOLS.indexOf('$DiscardClause');
exports.DURATION = SYMBOLS.indexOf('$Duration');
exports.EVALUATE_CLAUSE = SYMBOLS.indexOf('$EvaluateClause');
exports.EXPONENTIAL_EXPRESSION = SYMBOLS.indexOf('$ExponentialExpression');
exports.FACTORIAL_EXPRESSION = SYMBOLS.indexOf('$FactorialExpression');
exports.FUNCTION = SYMBOLS.indexOf('$Function');
exports.FUNCTION_EXPRESSION = SYMBOLS.indexOf('$FunctionExpression');
exports.HANDLE_CLAUSE = SYMBOLS.indexOf('$HandleClause');
exports.IF_CLAUSE = SYMBOLS.indexOf('$IfClause');
exports.INDICES = SYMBOLS.indexOf('$Indices');
exports.INVERSION_EXPRESSION = SYMBOLS.indexOf('$InversionExpression');
exports.LIST = SYMBOLS.indexOf('$List');
exports.LOGICAL_EXPRESSION = SYMBOLS.indexOf('$LogicalExpression');
exports.MAGNITUDE_EXPRESSION = SYMBOLS.indexOf('$MagnitudeExpression');
exports.MESSAGE = SYMBOLS.indexOf('$Message');
exports.MESSAGE_EXPRESSION = SYMBOLS.indexOf('$MessageExpression');
exports.MOMENT = SYMBOLS.indexOf('$Moment');
exports.NUMBER = SYMBOLS.indexOf('$Number');
exports.PARAMETERS = SYMBOLS.indexOf('$Parameters');
exports.PATTERN = SYMBOLS.indexOf('$Pattern');
exports.PERCENT = SYMBOLS.indexOf('$Percent');
exports.PRECEDENCE_EXPRESSION = SYMBOLS.indexOf('$PrecedenceExpression');
exports.PROBABILITY = SYMBOLS.indexOf('$Probability');
exports.PROCEDURE = SYMBOLS.indexOf('$Procedure');
exports.PUBLISH_CLAUSE = SYMBOLS.indexOf('$PublishClause');
exports.QUEUE = SYMBOLS.indexOf('$Queue');
exports.QUEUE_CLAUSE = SYMBOLS.indexOf('$QueueClause');
exports.RANGE = SYMBOLS.indexOf('$Range');
exports.REFERENCE = SYMBOLS.indexOf('$Reference');
exports.RESERVED = SYMBOLS.indexOf('$Reserved');
exports.RETURN_CLAUSE = SYMBOLS.indexOf('$ReturnClause');
exports.SAVE_CLAUSE = SYMBOLS.indexOf('$SaveClause');
exports.SELECT_CLAUSE = SYMBOLS.indexOf('$SelectClause');
exports.SET = SYMBOLS.indexOf('$Set');
exports.SOURCE = SYMBOLS.indexOf('$Source');
exports.STACK = SYMBOLS.indexOf('$Stack');
exports.STATEMENT = SYMBOLS.indexOf('$Statement');
exports.SUBCOMPONENT = SYMBOLS.indexOf('$Subcomponent');
exports.SUBCOMPONENT_EXPRESSION = SYMBOLS.indexOf('$SubcomponentExpression');
exports.SYMBOL = SYMBOLS.indexOf('$Symbol');
exports.TAG = SYMBOLS.indexOf('$Tag');
exports.TEXT = SYMBOLS.indexOf('$Text');
exports.THROW_CLAUSE = SYMBOLS.indexOf('$ThrowClause');
exports.TREE = SYMBOLS.indexOf('$Tree');
exports.VARIABLE = SYMBOLS.indexOf('$Variable');
exports.VERSION = SYMBOLS.indexOf('$Version');
exports.WAIT_CLAUSE = SYMBOLS.indexOf('$WaitClause');
exports.WHILE_CLAUSE = SYMBOLS.indexOf('$WhileClause');
exports.WITH_CLAUSE = SYMBOLS.indexOf('$WithClause');


// PUBLIC FUNCTIONS

/**
 * This function determines whether or not the specified type supports logical operations:
 * <pre>
 *  * false
 *  * true
 *  * not
 *  * and
 *  * sans
 *  * or
 *  * xor
 * </pre>
 * 
 * @param {Number} type The type being analyzed.
 * @returns {Boolean} Whether or not the specified type supports logical operations.
 */
exports.isLogical = function(type) {
    switch (type) {
        case exports.BINARY:
        case exports.PROBABILITY:
        case exports.SET:
            return true;
        default:
            return false;
    }
};


/**
 * This function determines whether or not the specified type supports scaling operations:
 * <pre>
 *  * inverse
 *  * sum
 *  * difference
 *  * scaled
 * </pre>
 * 
 * @param {Number} type The type being analyzed.
 * @returns {Boolean} Whether or not the specified type supports scaling operations.
 */
exports.isScalable = function(type) {
    switch (type) {
        case exports.ANGLE:
        case exports.DURATION:
        case exports.NUMBER:
        case exports.PERCENT:
            return true;
        default:
            return false;
    }
};


/**
 * This function determines whether or not the specified type supports numeric operations:
 * <pre>
 *  * inverse
 *  * reciprocal
 *  * conjugate
 *  * factorial
 *  * sum
 *  * difference
 *  * scaled
 *  * product
 *  * quotient
 *  * remainder
 *  * exponential
 *  * logarithm
 * </pre>
 * 
 * @param {Number} type The type being analyzed.
 * @returns {Boolean} Whether or not the specified type supports numeric operations.
 */
exports.isNumerical = function(type) {
    switch (type) {
        case exports.NUMBER:
            return true;
        default:
            return false;
    }
};


/**
 * This function determines whether or not the specified type can be displayed as a literal
 * value.
 * 
 * @param {Number} type The type being analyzed.
 * @returns {Boolean} Whether or not the specified type can be displayed as a literal value.
 */
exports.isLiteral = function(type) {
    switch (type) {
        case exports.ANGLE:
        case exports.BINARY:
        case exports.DURATION:
        case exports.MOMENT:
        case exports.NUMBER:
        case exports.PATTERN:
        case exports.PERCENT:
        case exports.PROBABILITY:
        case exports.REFERENCE:
        case exports.RESERVED:
        case exports.SOURCE:
        case exports.SYMBOL:
        case exports.TAG:
        case exports.TEXT:
        case exports.VERSION:
            return true;
        default:
            return false;
    }
};


/**
 * This function determines whether or not the specified type supports iterator operations:
 * <pre>
 *  * iterator
 * </pre>
 * 
 * @param {Number} type The type being analyzed.
 * @returns {Boolean} Whether or not the specified type supports iterator operations.
 */
exports.isSequential = function(type) {
    switch (type) {
        case exports.BINARY:
        case exports.CATALOG:
        case exports.LIST:
        case exports.PARAMETERS:
        case exports.QUEUE:
        case exports.RANGE:
        case exports.SET:
        case exports.STACK:
        case exports.TEXT:
        case exports.TREE:
        case exports.VERSION:
            return true;
        default:
            return false;
    }
};


/**
 * This function determines whether or not the specified type supports concatenation operations:
 * <pre>
 *  * concatenation
 * </pre>
 * 
 * @param {Number} type The type being analyzed.
 * @returns {Boolean} Whether or not the specified type supports concatenation operations.
 */
exports.isChainable = function(type) {
    switch (type) {
        case exports.BINARY:
        case exports.CATALOG:
        case exports.LIST:
        case exports.TEXT:
            return true;
        default:
            return false;
    }
};


/**
 * This function determines whether or not the specified type is procedural.
 * 
 * @param {Number} type The type being analyzed.
 * @returns {Boolean} Whether or not the specified type is procedural.
 */
exports.isProcedural = function(type) {
    switch (type) {
        case exports.ARITHMETIC_EXPRESSION:
        case exports.BLOCK:
        case exports.BREAK_CLAUSE:
        case exports.CHECKOUT_CLAUSE:
        case exports.COMMIT_CLAUSE:
        case exports.COMPARISON_EXPRESSION:
        case exports.COMPLEMENT_EXPRESSION:
        case exports.CONCATENATION_EXPRESSION:
        case exports.CONTINUE_CLAUSE:
        case exports.DEFAULT_EXPRESSION:
        case exports.DEREFERENCE_EXPRESSION:
        case exports.DISCARD_CLAUSE:
        case exports.EVALUATE_CLAUSE:
        case exports.EXPONENTIAL_EXPRESSION:
        case exports.FACTORIAL_EXPRESSION:
        case exports.FUNCTION:
        case exports.FUNCTION_EXPRESSION:
        case exports.HANDLE_CLAUSE:
        case exports.IF_CLAUSE:
        case exports.INDICES:
        case exports.INVERSION_EXPRESSION:
        case exports.LOGICAL_EXPRESSION:
        case exports.MAGNITUDE_EXPRESSION:
        case exports.MESSAGE:
        case exports.MESSAGE_EXPRESSION:
        case exports.PRECEDENCE_EXPRESSION:
        case exports.PROCEDURE:
        case exports.PUBLISH_CLAUSE:
        case exports.QUEUE_CLAUSE:
        case exports.RETURN_CLAUSE:
        case exports.SAVE_CLAUSE:
        case exports.SELECT_CLAUSE:
        case exports.STATEMENT:
        case exports.SUBCOMPONENT:
        case exports.SUBCOMPONENT_EXPRESSION:
        case exports.THROW_CLAUSE:
        case exports.VARIABLE:
        case exports.WAIT_CLAUSE:
        case exports.WHILE_CLAUSE:
        case exports.WITH_CLAUSE:
            return true;
        default:
            return false;
    }
};


/**
 * This function returns the name of the specified type.
 * 
 * @param {Number} type The type to be looked up.
 * @returns {String} The name of the specified type.
 */
exports.symbolForType = function(type) {
    return SYMBOLS[type];
};


/**
 * This function returns the type associated with the specified symbol.
 * 
 * @param {String|Symbol} symbol The symbol for the type.
 * @returns {Number} The type for the specified symbol.
 */
exports.typeForSymbol = function(symbol) {
    const name = '$' + symbol.getValue();
    return SYMBOLS.indexOf(name);
};
