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

// one more than the maximum number of characters that an inline formatted component can have
exports.TOO_BIG = 25;


exports.typeName = function(type) {
    return TYPES[type];
};


exports.typeBySymbol = function(symbol) {
    var name = symbol.toString().slice(1);  // remove the '$'
    return TYPES.indexOf(name);
};


exports.typeByReference = function(reference) {
    var source = reference.toString().slice(6, -1);  // remove the '<bali:' and '>'
    var attributes = source.split(',');  // separate out the attributes
    var tag = attributes[0].split(':')[1];  // remove the value of the tag attribute
};


exports.typeTag = function(type) {
    return TAGS[type];
};


var MAP = {
    Invalid:                      '#JLG6FRDFPCN9QCYD0TBYS7J5DWKH9NJK',
    Angle:                        '#8SC89QY4LM68LTGPXYMBR6C0LR324L3P',
    ArithmeticExpression:         '#G5YBFG0VKKQLMABZ7Z9T1NMPLA87WJHA',
    Association:                  '#MKCH4J7N45P3GV9RC7JA7QBVV2H2PPJB',
    Binary:                       '#S858FKVC1YTL20J9M0WQK89MQLS4TK8Z',
    Block:                        '#HG22FP22HJ2717SAX64B7JNNRDCHG289',
    BreakClause:                  '#PNB84XL3428Y4Z9Y29N11RC6WAWFJNRY',
    Catalog:                      '#4XR1NCZKATC5DPT2WAVQH89Q6Y4BCLP6',
    CheckoutClause:               '#2YWBP7TAKQ72MBL1AA55MP34DG9KGVHH',
    Code:                         '#S07XBYZN98PWJZSS7NCXLAH86FG78F2C',
    CommitClause:                 '#',
    ComparisonExpression:         '#',
    ComplementExpression:         '#',
    ContinueClause:               '#',
    DefaultExpression:            '#',
    DereferenceExpression:        '#',
    DiscardClause:                '#',
    Document:                     '#',
    Duration:                     '#',
    EvaluateClause:               '#',
    ExponentialExpression:        '#',
    FactorialExpression:          '#',
    Function:                     '#',
    FunctionExpression:           '#',
    HandleClause:                 '#',
    IfClause:                     '#',
    Indices:                      '#',
    InversionExpression:          '#',
    Iterator:                     '#',
    List:                         '#',
    LogicalExpression:            '#',
    MagnitudeExpression:          '#',
    Message:                      '#',
    MessageExpression:            '#',
    Moment:                       '#',
    Number:                       '#',
    Parameters:                   '#',
    Percent:                      '#',
    PrecedenceExpression:         '#',
    Probability:                  '#',
    Procedure:                    '#',
    PublishClause:                '#',
    QueueClause:                  '#',
    Range:                        '#',
    Reference:                    '#',
    ReturnClause:                 '#',
    SaveClause:                   '#',
    Seal:                         '#',
    SelectClause:                 '#',
    Set:                          '#',
    Stack:                        '#',
    Statement:                    '#',
    Subcomponent:                 '#',
    SubcomponentExpression:       '#',
    Symbol:                       '#',
    Tag:                          '#',
    Template:                     '#',
    Text:                         '#',
    ThrowClause:                  '#',
    Variable:                     '#',
    Version:                      '#',
    WaitClause:                   '#',
    WhileClause:                  '#',
    WithClause:                   '#'
};

var TYPES = Object.keys(MAP);
var TAGS = Object.values(MAP);

exports.ANGLE = TYPES.indexOf('Angle');
exports.ARITHMETIC_EXPRESSION = TYPES.indexOf('ArithmeticExpression');
exports.ASSOCIATION = TYPES.indexOf('Association');
exports.BINARY = TYPES.indexOf('Binary');
exports.BLOCK = TYPES.indexOf('Block');
exports.BREAK_CLAUSE = TYPES.indexOf('BreakClause');
exports.CATALOG = TYPES.indexOf('Catalog');
exports.CHECKOUT_CLAUSE = TYPES.indexOf('CheckoutClause');
exports.CODE = TYPES.indexOf('Code');
exports.COMMIT_CLAUSE = TYPES.indexOf('CommitClause');
exports.COMPARISON_EXPRESSION = TYPES.indexOf('ComparisonExpression');
exports.COMPLEMENT_EXPRESSION = TYPES.indexOf('ComplementExpression');
exports.CONTINUE_CLAUSE = TYPES.indexOf('ContinueClause');
exports.DEFAULT_EXPRESSION = TYPES.indexOf('DefaultExpression');
exports.DEREFERENCE_EXPRESSION = TYPES.indexOf('DereferenceExpression');
exports.DISCARD_CLAUSE = TYPES.indexOf('DiscardClause');
exports.DOCUMENT = TYPES.indexOf('Document');
exports.DURATION = TYPES.indexOf('Duration');
exports.EVALUATE_CLAUSE = TYPES.indexOf('EvaluateClause');
exports.EXPONENTIAL_EXPRESSION = TYPES.indexOf('ExponentialExpression');
exports.FACTORIAL_EXPRESSION = TYPES.indexOf('FactorialExpression');
exports.FUNCTION = TYPES.indexOf('Function');
exports.FUNCTION_EXPRESSION = TYPES.indexOf('FunctionExpression');
exports.HANDLE_CLAUSE = TYPES.indexOf('HandleClause');
exports.IF_CLAUSE = TYPES.indexOf('IfClause');
exports.INDICES = TYPES.indexOf('Indices');
exports.INVERSION_EXPRESSION = TYPES.indexOf('InversionExpression');
exports.ITERATOR = TYPES.indexOf('Iterator');
exports.LIST = TYPES.indexOf('List');
exports.LOGICAL_EXPRESSION = TYPES.indexOf('LogicalExpression');
exports.MAGNITUDE_EXPRESSION = TYPES.indexOf('MagnitudeExpression');
exports.MESSAGE = TYPES.indexOf('Message');
exports.MESSAGE_EXPRESSION = TYPES.indexOf('MessageExpression');
exports.MOMENT = TYPES.indexOf('Moment');
exports.NUMBER = TYPES.indexOf('Number');
exports.PARAMETERS = TYPES.indexOf('Parameters');
exports.PERCENT = TYPES.indexOf('Percent');
exports.PRECEDENCE_EXPRESSION = TYPES.indexOf('PrecedenceExpression');
exports.PROBABILITY = TYPES.indexOf('Probability');
exports.PROCEDURE = TYPES.indexOf('Procedure');
exports.PUBLISH_CLAUSE = TYPES.indexOf('PublishClause');
exports.QUEUE_CLAUSE = TYPES.indexOf('QueueClause');
exports.RANGE = TYPES.indexOf('Range');
exports.REFERENCE = TYPES.indexOf('Reference');
exports.RETURN_CLAUSE = TYPES.indexOf('ReturnClause');
exports.SAVE_CLAUSE = TYPES.indexOf('SaveClause');
exports.SEAL = TYPES.indexOf('Seal');
exports.SELECT_CLAUSE = TYPES.indexOf('SelectClause');
exports.SET = TYPES.indexOf('Set');
exports.STACK = TYPES.indexOf('Stack');
exports.STATEMENT = TYPES.indexOf('Statement');
exports.SUBCOMPONENT = TYPES.indexOf('Subcomponent');
exports.SUBCOMPONENT_EXPRESSION = TYPES.indexOf('SubcomponentExpression');
exports.SYMBOL = TYPES.indexOf('Symbol');
exports.TAG = TYPES.indexOf('Tag');
exports.TEMPLATE = TYPES.indexOf('Template');
exports.TEXT = TYPES.indexOf('Text');
exports.THROW_CLAUSE = TYPES.indexOf('ThrowClause');
exports.VARIABLE = TYPES.indexOf('Variable');
exports.VERSION = TYPES.indexOf('Version');
exports.WAIT_CLAUSE = TYPES.indexOf('WaitClause');
exports.WHILE_CLAUSE = TYPES.indexOf('WhileClause');
exports.WITH_CLAUSE = TYPES.indexOf('WithClause');
