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

var antlr = require('antlr4');
var grammar = require('../grammar/BaliLanguageParser').BaliLanguageParser;
var handlers = require('../handlers');


/*
 * This module defines functions that can transform a Bali parse tree
 * into its corresponding javascript object, or transform a javascript
 * object into its corresponding Bali parse tree.
 */

var handlerMap = {
    //'any': new handlers.AnyHandler(),
    'array': new handlers.CollectionHandler(),
    'boolean': new handlers.ProbabilityHandler(),
    'number': new handlers.NumberHandler(),
    'object': new handlers.TableHandler(),
    'probability': new handlers.ProbabilityHandler(),
    'string': new handlers.TextHandler(),
    'symbol': new handlers.SymbolHandler()
    //'undefined': new handlers.AnyHandler()
};


// Transformer Methods

exports.documentToJavaScript = function(type, baliDocument) {
    var handler = handlerMap[type];
    var jsObject = handler.toJavaScript(baliDocument);
    return jsObject;
};


exports.javaScriptToDocument = function(type, jsObject) {
    var handler = handlerMap[type];
    var baliDocument = handler.toBali(jsObject);
    return baliDocument;
};


exports.expressionToJavaScript = function(type, baliExpression) {
    var handler = handlerMap[type];
    var baliDocument = baliExpression.document();  // strip off the expression wrapper
    var jsObject = handler.toJavaScript(baliDocument);
    return jsObject;
};


exports.javaScriptToExpression = function(type, jsObject) {
    var baliDocument = exports.javaScriptToDocument(type, jsObject);
    var baliExpression = new antlr.ParserRuleContext();  // HACK: since ExpressionContext() is not exported
    baliExpression = new grammar.DocumentExpressionContext(null, baliExpression);
    baliExpression.addChild(baliDocument);  // add on an expression wrapper
    baliDocument.parentCtx = baliExpression;
    return baliExpression;
};


exports.keyToJavaScript = function(type, baliKey) {
    var handler = handlerMap[type];
    var baliElement = baliKey.element();  // strip off the key wrapper
    var baliLiteral = new grammar.LiteralContext();
    baliLiteral.addChild(baliElement);  // add on a literal wrapper
    baliElement.parentCtx = baliLiteral;
    var baliDocument = new grammar.DocumentContext();
    baliDocument.addChild(baliLiteral);  // add on a document wrapper
    baliLiteral.parentCtx = baliDocument;
    var jsObject = handler.toJavaScript(baliDocument);
    return jsObject;
};


exports.javaScriptToKey = function(type, jsObject) {
    var handler = handlerMap[type];
    var baliDocument = handler.toBali(jsObject);
    var baliLiteral = baliDocument.literal();  // strip off the document wrapper
    var baliElement = baliLiteral.element();  // strip off the literal wrapper
    var baliKey = new grammar.KeyContext();
    baliKey.addChild(baliElement);  // add on a key wrapper
    baliElement.parentCtx = baliKey;
    return baliKey;
};


exports.getJavaScriptType = function(jsObject) {
    var type = typeof jsObject;
    if (type === 'object') {
        if (jsObject) {
            type = jsObject.constructor.name.toLowerCase();
        } else {
            type = 'null';  // addresses infamous null type bug in javascript
        }
    }
    return type;
};

exports.getBaliType = function(baliTree) {
    var type;
    if (baliTree.constructor.name === 'DocumentExpressionContext') {
        // the bali tree is a document expression
        baliTree = baliTree.document();
    }
    if (baliTree.constructor.name === 'DocumentContext') {
        // the bali tree is a document
        baliTree = baliTree.literal();
    }
    // at this point the bali tree must be a literal
    if (baliTree.element()) {
        baliTree = baliTree.element();
        baliTree = baliTree.getChild(0);  // get the actual element
    } else if (baliTree.structure()) {
        baliTree = baliTree.structure();
        baliTree = baliTree.getChild(0);  // get the composite between the brackets []
        baliTree = baliTree.getChild(0);  // get the actual range, collection, or table
    } else {
        baliTree = baliTree.block();
        throw 'Not yet implemented...';
    }
    var nodeType = baliTree.constructor.name;
    switch (nodeType) {
        case 'UndefinedNumberContext':
        case 'InfiniteNumberContext':
        case 'RealNumberContext':
        case 'ImaginaryNumberContext':
        case 'ComplexNumberContext':
            type = 'number';
            break;
        case 'TrueProbabilityContext':
        case 'FalseProbabilityContext':
        case 'FractionalProbabilityContext':
            type = 'probability';
            break;
        case 'InlineTextContext':
        case 'BlockTextContext':
            type = 'string';
            break;
        case 'SymbolContext':
            type = 'symbol';
            break;
        case 'InlineCollectionContext':
        case 'NewlineCollectionContext':
            type = 'array';
            break;
        case 'InlineTableContext':
        case 'NewlineTableContext':
            type = 'object';
            break;
    }
    return type;
};
