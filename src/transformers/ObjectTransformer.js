/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
var handlers = require('../handlers');


/*
 * This class defines a transformer that can transform a Bali parse tree
 * into its corresponding javascript object, or transform a javascript object into
 * its corresponding Bali parse tree.
 */
function ObjectTransformer() {
    return this;
}
ObjectTransformer.prototype.constructor = ObjectTransformer;
ObjectTransformer.prototype.handlers = {
    'boolean': new handlers.ProbabilityHandler(),
    'number': new handlers.NumberHandler(),
    'probability': new handlers.ProbabilityHandler(),
    'string': new handlers.TextHandler(),
    'symbol': new handlers.SymbolHandler(),
    'text': new handlers.TextHandler()
};
exports.ObjectTransformer = ObjectTransformer;


// Transformer Methods

ObjectTransformer.prototype.toJavaScript = function(type, baliTree) {
    var handler = ObjectTransformer.prototype.handlers[type];
    var jsObject = handler.toJavaScript(baliTree);
    return jsObject;
};


ObjectTransformer.prototype.toBali = function(type, jsObject) {
    var handler = ObjectTransformer.prototype.handlers[type];
    var baliTree = handler.toBali(jsObject);
    return baliTree;
};


ObjectTransformer.prototype.getJavaScriptType = function(jsObject) {
    var type;
    if (typeof jsObject === 'object') {
        type = jsObject.constructor.name.toLowerCase();
    } else {
        type = typeof jsObject;
    }
    return type;
};

ObjectTransformer.prototype.getBaliType = function(baliTree) {
    var type;
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
        case 'SymbolContext':
            type = 'symbol';
            break;
        case 'InlineTextContext':
        case 'BlockTextContext':
            type = 'text';
            break;
    }
    return type;
};