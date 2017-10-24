/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var language = require('../BaliLanguage');
var grammar = require('../grammar/');
var transformation = require('../transformers/Transformation');


function CollectionHandler() {
    return this;
}
CollectionHandler.prototype.constructor = CollectionHandler;
exports.CollectionHandler = CollectionHandler;


CollectionHandler.prototype.toJavaScript = function(baliTree) {
    var jsArray = [];
    var type = baliTree.constructor.name;
    switch (type) {
        case 'InlineCollectionContext':
        case 'NewlineCollectionContext':
            var expressions = baliTree.expression();
            for (var i = 0; i < expressions.length; i++) {
                var expression = expressions[i];
                type = transformation.getBaliType(expression);
                jsArray += transformation.toJavaScript(type, expression);
            }
            break;
        default:
            // empty collection
    }
    return jsArray;
};


CollectionHandler.prototype.toBali = function(jsArray) {
    var baliTree = new grammar.CollectionContext();
    baliTree = new grammar.InlineCollectionContext(null, baliTree);
    for (var i = 0; i < jsArray.length; i++) {
        var jsObject = jsArray[i];
        type = transformation.getJavaScriptType(jsObject);
        var baliNode = transformation.toBali(type, jsObject);
        baliTree.addChild(baliNode);
        baliNode.parentCtx = baliTree;
    }
};
