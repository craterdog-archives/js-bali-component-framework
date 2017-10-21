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
    this.handlerMap = {
        Boolean: new handlers.BooleanHandler(),
        String: new handlers.StringHandler(),
        Number: new handlers.NumberHandler()
    };
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
    type = type.toLowerCase();
    var handler = ObjectTransformer.prototype.handlers[type];
    var object = handler.toJavaScript(baliTree);
    return object;
};


ObjectTransformer.prototype.toBali = function(jsObject) {
    var type;
    if (typeof jsObject === 'object') {
        type = jsObject.constructor.name.toLowerCase();
    } else {
        type = typeof jsObject;
    }
    var handler = this.handlerMap[type];
    var baliTree = handler.toBali(jsObject);
    return baliTree;
};
