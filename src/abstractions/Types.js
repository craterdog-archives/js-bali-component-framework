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
    CommitClause:                 '#PX8X7F9R63SPPJ43V7Q6B3WA7J40X3SY',
    ComparisonExpression:         '#4BPSTG1VKZ78FZ1Q6BBG3FSQLP485W6A',
    ComplementExpression:         '#ML3LBVVVJ253VAFQ385WF1WGGZL759BP',
    ContinueClause:               '#5QMFG29CD78F647GMTQC5YPS5M1XNB1Q',
    DefaultExpression:            '#6Z2Y2P41ZH33Y42HJGPV0Q8VA3ZFK4K4',
    DereferenceExpression:        '#D9JFAF3C9Z96JTGNY6CX3X2Y1L2VZPMK',
    DiscardClause:                '#CBM7R7YJFMQBZ06QZ7R682V6WPXCM6NF',
    Document:                     '#84N8WSRKX806ZMPWJ7F09VKN87X4N5XJ',
    Duration:                     '#Y6572KBG2SBYSCBHR88KB1GR616LFK8N',
    EvaluateClause:               '#51Z65KR2AR4N2APTFDCPVDZPCNH1T1DA',
    ExponentialExpression:        '#53HF4NHVBS8L1CTN14QKMQRQ616TSW88',
    FactorialExpression:          '#DHXPLJPJ7BZFHDP5CP2N8V3YX09K2NTW',
    Function:                     '#YFZN88KCZVJFCBK9VZ7BSGMRQKDB9XY1',
    FunctionExpression:           '#D64C23JGH8CJFXKDB7D6LA77CB8T5CMM',
    HandleClause:                 '#FXZBVDWT8PSDS98ZAN242DVBKQ41WS73',
    IfClause:                     '#03QKSKTTR5QP2K8MHC34WT4CA8FG8PCX',
    Indices:                      '#5617V7QT7RT4J9WVF8PD9V7DNMKCWQR9',
    InversionExpression:          '#WHSTLK1HZXYVD4TZFHP2B19PRY75J3TL',
    Iterator:                     '#G4YCMDW4XM2CM4J4W5C4NN5B267TT1FQ',
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
    QueueClause:                  '#QLZV5M4GQD14WV2W7A3WV5G486QJFBZ1',
    Range:                        '#S6XRX1KCJD683A2FKC121WZ0A5TYVL9L',
    Reference:                    '#CLP455XN9HV4CM5S6XDWS38SJNT7T5T3',
    ReturnClause:                 '#BYS06PXZA0JZPSPG2NXZKSGJP9H9NRFV',
    SaveClause:                   '#ZZB0JXMS61LQSF09B44BRWBCW6LM9RSV',
    Seal:                         '#4XPJ51CM69RHXMQJZ36XJWQ3M1591C78',
    SelectClause:                 '#AZJ00P3CLMCNWZAG43MSGGFQA46HNPQJ',
    Set:                          '#PB33C4Z89QTKBD8P824JMN83STXZGHY9',
    Source:                       '#S07XBYZN98PWJZSS7NCXLAH86FG78F2C',
    Stack:                        '#Q2BJ8CAR3HW39A5GFC2C2S1JZVX4PSX9',
    Statement:                    '#GTJP6JD40CJ52S0Q0FNZ1N7P5DX3F952',
    Subcomponent:                 '#CPDWB7RR24F6CACZ3R710GDC39BXRLDM',
    SubcomponentExpression:       '#L67PSVRDKAQKTFJ0N578DHKC719S4YKT',
    Symbol:                       '#R4N28VY9D39002WL3PSM6ZSXDC6FT730',
    Tag:                          '#JT3HJVCQ0A2TLK2D9LLXV1RWY963ZPS2',
    Template:                     '#B6W55BXMVG69NR4LZHH28Y12AXZ6AJ6W',
    Text:                         '#YA1HLLYZN3H97SCZ95JX78MZJ6WQ4VBL',
    ThrowClause:                  '#0CB0H5GSZK8NW9MTQ7NSKWPV07P82TR6',
    Variable:                     '#CBZ2CQLQM3JXMQT8P041PXGWW6MWB4J0',
    Version:                      '#VVF92PYR76BJRFV932KMG7VHCD0MAS5R',
    Visitor:                      '#VHT9RL809PSKL6VPDHBMC3AX4MWJNB9N',
    WaitClause:                   '#ANWBB52Q07PRHB4T3R3KP18VFB5M9B4R',
    WhileClause:                  '#D9A2CQGM3RJ6SYBHKM32AN7GM5KZYR9L',
    WithClause:                   '#AGXY4B519SNJFFMDNTQ2DSWZXCBKX596'
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
exports.SOURCE = TYPES.indexOf('Source');
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
exports.VISITOR = TYPES.indexOf('Visitor');
exports.WAIT_CLAUSE = TYPES.indexOf('WaitClause');
exports.WHILE_CLAUSE = TYPES.indexOf('WhileClause');
exports.WITH_CLAUSE = TYPES.indexOf('WithClause');
