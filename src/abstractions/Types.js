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


// PRIVATE ATTRIBUTES

const PROTOCOL = 'v1';
const VERSION = 'v1';

const MAP = {
    Invalid:                      'Invalid',  // ordinal based indexing
    Angle:                        '#8SC89QY4LM68LTGPXYMBR6C0LR324L3P',
    ArithmeticExpression:         '#G5YBFG0VKKQLMABZ7Z9T1NMPLA87WJHA',
    Association:                  '#MKCH4J7N45P3GV9RC7JA7QBVV2H2PPJB',
    Binary:                       '#S858FKVC1YTL20J9M0WQK89MQLS4TK8Z',
    Block:                        '#HG22FP22HJ2717SAX64B7JNNRDCHG289',
    BreakClause:                  '#PNB84XL3428Y4Z9Y29N11RC6WAWFJNRY',
    Catalog:                      '#4XR1NCZKATC5DPT2WAVQH89Q6Y4BCLP6',
    CheckoutClause:               '#2YWBP7TAKQ72MBL1AA55MP34DG9KGVHH',
    CommitClause:                 '#PX8X7F9R63SPPJ43V7Q6B3WA7J40X3SY',
    ComparisonExpression:         '#4BPSTG1VKZ78FZ1Q6BBG3FSQLP485W6A',
    ComplementExpression:         '#ML3LBVVVJ253VAFQ385WF1WGGZL759BP',
    ConcatenationExpression:      '#5758L981N1NA8390CYQTMALD732RH02P',
    ContinueClause:               '#5QMFG29CD78F647GMTQC5YPS5M1XNB1Q',
    DefaultExpression:            '#6Z2Y2P41ZH33Y42HJGPV0Q8VA3ZFK4K4',
    DereferenceExpression:        '#D9JFAF3C9Z96JTGNY6CX3X2Y1L2VZPMK',
    DiscardClause:                '#CBM7R7YJFMQBZ06QZ7R682V6WPXCM6NF',
    Duration:                     '#Y6572KBG2SBYSCBHR88KB1GR616LFK8N',
    EvaluateClause:               '#51Z65KR2AR4N2APTFDCPVDZPCNH1T1DA',
    ExponentialExpression:        '#53HF4NHVBS8L1CTN14QKMQRQ616TSW88',
    FactorialExpression:          '#DHXPLJPJ7BZFHDP5CP2N8V3YX09K2NTW',
    Filter:                       '#B6W55BXMVG69NR4LZHH28Y12AXZ6AJ6W',
    Function:                     '#YFZN88KCZVJFCBK9VZ7BSGMRQKDB9XY1',
    FunctionExpression:           '#D64C23JGH8CJFXKDB7D6LA77CB8T5CMM',
    HandleClause:                 '#FXZBVDWT8PSDS98ZAN242DVBKQ41WS73',
    IfClause:                     '#03QKSKTTR5QP2K8MHC34WT4CA8FG8PCX',
    Indices:                      '#5617V7QT7RT4J9WVF8PD9V7DNMKCWQR9',
    InversionExpression:          '#WHSTLK1HZXYVD4TZFHP2B19PRY75J3TL',
    List:                         '#TRYB04LK9Z1TSABALD7W31K8YFSN1F0F',
    LogicalExpression:            '#1CJT7XYHXJ83AVSQ5VJC6Q7GVRHWMWSM',
    MagnitudeExpression:          '#R72VZ4YQMXQW1BLKX26LG76C1VGZMLN9',
    Message:                      '#1LLBH0287FD3GV4LVS4GC12S60DR54DZ',
    MessageExpression:            '#ADS6Q0648052HLDC6QTH14ZX1YNQXZFK',
    Moment:                       '#NL3T40GDBZ7BLTJPWKT61YCZZHXBYTBR',
    Number:                       '#HYPTA0PX51J7K2VQ88NZMH9GDPHR6G0B',
    Parameters:                   '#1M4Z05MMH8H4H3BT92LZNBWG4PKZ55L5',
    Percent:                      '#WCXVKQC0BM03CNBD2JSF8VLVVHJ1A6P4',
    PrecedenceExpression:         '#VMTGMRZCWWP90HH38TFM53YTP1YLRH57',
    Probability:                  '#2YBVYV11HS4CKZ7X8RDJ0RYC7TKKAV2D',
    Procedure:                    '#HYH7M0HTRTML8MVWVKFMQN2KP136HG3F',
    PublishClause:                '#PK764JB8N97KRJDSL6JNL2PV9Y9GW6YY',
    Queue:                        '#7F20TGXVDQB8DDDB7ZRL989N1PCTLFB4',
    QueueClause:                  '#QLZV5M4GQD14WV2W7A3WV5G486QJFBZ1',
    Range:                        '#S6XRX1KCJD683A2FKC121WZ0A5TYVL9L',
    Reference:                    '#CLP455XN9HV4CM5S6XDWS38SJNT7T5T3',
    Reserved:                     '#HKTQFZ328SXYW6Q08CCHW90NQ6FW77KB',
    ReturnClause:                 '#BYS06PXZA0JZPSPG2NXZKSGJP9H9NRFV',
    SaveClause:                   '#ZZB0JXMS61LQSF09B44BRWBCW6LM9RSV',
    SelectClause:                 '#AZJ00P3CLMCNWZAG43MSGGFQA46HNPQJ',
    Set:                          '#PB33C4Z89QTKBD8P824JMN83STXZGHY9',
    Source:                       '#S07XBYZN98PWJZSS7NCXLAH86FG78F2C',
    Stack:                        '#Q2BJ8CAR3HW39A5GFC2C2S1JZVX4PSX9',
    Statement:                    '#GTJP6JD40CJ52S0Q0FNZ1N7P5DX3F952',
    Subcomponent:                 '#CPDWB7RR24F6CACZ3R710GDC39BXRLDM',
    SubcomponentExpression:       '#L67PSVRDKAQKTFJ0N578DHKC719S4YKT',
    Symbol:                       '#R4N28VY9D39002WL3PSM6ZSXDC6FT730',
    Tag:                          '#JT3HJVCQ0A2TLK2D9LLXV1RWY963ZPS2',
    Text:                         '#YA1HLLYZN3H97SCZ95JX78MZJ6WQ4VBL',
    ThrowClause:                  '#0CB0H5GSZK8NW9MTQ7NSKWPV07P82TR6',
    Variable:                     '#CBZ2CQLQM3JXMQT8P041PXGWW6MWB4J0',
    Version:                      '#VVF92PYR76BJRFV932KMG7VHCD0MAS5R',
    WaitClause:                   '#ANWBB52Q07PRHB4T3R3KP18VFB5M9B4R',
    WhileClause:                  '#D9A2CQGM3RJ6SYBHKM32AN7GM5KZYR9L',
    WithClause:                   '#AGXY4B519SNJFFMDNTQ2DSWZXCBKX596'
};

const NAMES = Object.keys(MAP);
const TAGS = Object.values(MAP);


// PUBLIC CONSTANTS

/**
 * This constant defines the number of characters allowed in Bali Document Notation™
 * for a component before the source code can no longer be inline (on a single line).
 */
exports.IS_COMPLEX = 25;

/*
 * These constants define numeric values for each of the types.
 */
exports.ANGLE = NAMES.indexOf('Angle');
exports.ARITHMETIC_EXPRESSION = NAMES.indexOf('ArithmeticExpression');
exports.ASSOCIATION = NAMES.indexOf('Association');
exports.BINARY = NAMES.indexOf('Binary');
exports.BLOCK = NAMES.indexOf('Block');
exports.BREAK_CLAUSE = NAMES.indexOf('BreakClause');
exports.CATALOG = NAMES.indexOf('Catalog');
exports.CHECKOUT_CLAUSE = NAMES.indexOf('CheckoutClause');
exports.COMMIT_CLAUSE = NAMES.indexOf('CommitClause');
exports.COMPARISON_EXPRESSION = NAMES.indexOf('ComparisonExpression');
exports.COMPLEMENT_EXPRESSION = NAMES.indexOf('ComplementExpression');
exports.CONCATENATION_EXPRESSION = NAMES.indexOf('ConcatenationExpression');
exports.CONTINUE_CLAUSE = NAMES.indexOf('ContinueClause');
exports.DEFAULT_EXPRESSION = NAMES.indexOf('DefaultExpression');
exports.DEREFERENCE_EXPRESSION = NAMES.indexOf('DereferenceExpression');
exports.DISCARD_CLAUSE = NAMES.indexOf('DiscardClause');
exports.DURATION = NAMES.indexOf('Duration');
exports.EVALUATE_CLAUSE = NAMES.indexOf('EvaluateClause');
exports.EXPONENTIAL_EXPRESSION = NAMES.indexOf('ExponentialExpression');
exports.FACTORIAL_EXPRESSION = NAMES.indexOf('FactorialExpression');
exports.FILTER = NAMES.indexOf('Filter');
exports.FUNCTION = NAMES.indexOf('Function');
exports.FUNCTION_EXPRESSION = NAMES.indexOf('FunctionExpression');
exports.HANDLE_CLAUSE = NAMES.indexOf('HandleClause');
exports.IF_CLAUSE = NAMES.indexOf('IfClause');
exports.INDICES = NAMES.indexOf('Indices');
exports.INVERSION_EXPRESSION = NAMES.indexOf('InversionExpression');
exports.LIST = NAMES.indexOf('List');
exports.LOGICAL_EXPRESSION = NAMES.indexOf('LogicalExpression');
exports.MAGNITUDE_EXPRESSION = NAMES.indexOf('MagnitudeExpression');
exports.MESSAGE = NAMES.indexOf('Message');
exports.MESSAGE_EXPRESSION = NAMES.indexOf('MessageExpression');
exports.MOMENT = NAMES.indexOf('Moment');
exports.NUMBER = NAMES.indexOf('Number');
exports.PARAMETERS = NAMES.indexOf('Parameters');
exports.PERCENT = NAMES.indexOf('Percent');
exports.PRECEDENCE_EXPRESSION = NAMES.indexOf('PrecedenceExpression');
exports.PROBABILITY = NAMES.indexOf('Probability');
exports.PROCEDURE = NAMES.indexOf('Procedure');
exports.PUBLISH_CLAUSE = NAMES.indexOf('PublishClause');
exports.QUEUE = NAMES.indexOf('Queue');
exports.QUEUE_CLAUSE = NAMES.indexOf('QueueClause');
exports.RANGE = NAMES.indexOf('Range');
exports.REFERENCE = NAMES.indexOf('Reference');
exports.RESERVED = NAMES.indexOf('Reserved');
exports.RETURN_CLAUSE = NAMES.indexOf('ReturnClause');
exports.SAVE_CLAUSE = NAMES.indexOf('SaveClause');
exports.SELECT_CLAUSE = NAMES.indexOf('SelectClause');
exports.SET = NAMES.indexOf('Set');
exports.SOURCE = NAMES.indexOf('Source');
exports.STACK = NAMES.indexOf('Stack');
exports.STATEMENT = NAMES.indexOf('Statement');
exports.SUBCOMPONENT = NAMES.indexOf('Subcomponent');
exports.SUBCOMPONENT_EXPRESSION = NAMES.indexOf('SubcomponentExpression');
exports.SYMBOL = NAMES.indexOf('Symbol');
exports.TAG = NAMES.indexOf('Tag');
exports.TEXT = NAMES.indexOf('Text');
exports.THROW_CLAUSE = NAMES.indexOf('ThrowClause');
exports.VARIABLE = NAMES.indexOf('Variable');
exports.VERSION = NAMES.indexOf('Version');
exports.WAIT_CLAUSE = NAMES.indexOf('WaitClause');
exports.WHILE_CLAUSE = NAMES.indexOf('WhileClause');
exports.WITH_CLAUSE = NAMES.indexOf('WithClause');


// PUBLIC FUNCTIONS

/**
 * This function determines whether or not the specified complexity is less than the maximum
 * complexity (IS_COMPLEX) for a simple component.
 * 
 * @param {Number} complexity The complexity in number of source code characters.
 * @returns {Boolean} Whether or not the specified complexity is simple.
 */
exports.isSimple = function(complexity) {
    return complexity < exports.IS_COMPLEX;
};


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
exports.isNumeric = function(type) {
    switch (type) {
        case exports.NUMBER:
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
        case exports.QUEUE:
        case exports.RANGE:
        case exports.SET:
        case exports.STACK:
        case exports.TEXT:
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
exports.isCombinable = function(type) {
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
 * This function returns the name of the specified type.
 * 
 * @param {Number} type The type to be looked up.
 * @returns {String} The name of the specified type.
 */
exports.typeName = function(type) {
    return NAMES[type];
};


/**
 * This function returns the tag for the specified type.
 * 
 * @param {Number} type The type to be looked up.
 * @returns {Tag} The tag associated with the specified type.
 */
exports.typeTag = function(type) {
    return TAGS[type];
};


exports.typeReference = function(type) {
    var tag = TAGS[type];
    var reference = '<bali:[$protocol:' + PROTOCOL + ',$tag:' + tag + ',$version:' + VERSION + ',$digest:none]>';
    return reference;
};


/**
 * This function returns the type associated with the specified symbol.
 * 
 * @param {String|Symbol} symbol The symbol for the type.
 * @returns {Number} The type for the specified symbol.
 */
exports.typeBySymbol = function(symbol) {
    var name = symbol.toString().slice(1);  // remove the '$'
    return NAMES.indexOf(name);
};
