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


// Transformer Methods

ObjectTransformer.prototype.addHandler = function(type, handler) {
    this.handlerMap.defineProperty(type, handler);
};

ObjectTransformer.prototype.toObject = function(type, tree) {
    var handler = this.handlerMap[type];
    var object = handler.toObject(tree);
    return object;
};

ObjectTransformer.prototype.toTree = function(object) {
    var type = object.constructor;
    var handler = this.handlerMap[type];
    var tree = handler.toTree(object);
    return tree;
};


