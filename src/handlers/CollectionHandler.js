/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
var grammar = require('../grammar/BaliLanguageParser').BaliLanguageParser;
var transformation = require('../transformers/Transformation');


function CollectionHandler() {
    return this;
}
CollectionHandler.prototype.constructor = CollectionHandler;
exports.CollectionHandler = CollectionHandler;


CollectionHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliStructure = baliLiteral.structure();
    var baliComposite = baliStructure.composite();
    var baliCollection = baliComposite.collection();
    var jsArray = [];
    var type = baliCollection.constructor.name;
    switch (type) {
        case 'InlineCollectionContext':
        case 'NewlineCollectionContext':
            var expressions = baliCollection.expression();
            for (var i = 0; i < expressions.length; i++) {
                var baliExpression = expressions[i];
                type = transformation.getBaliType(baliExpression);
                jsArray += transformation.expressionToJavaScript(type, baliExpression);
            }
            break;
        default:
            // empty collection
    }
    return jsArray;
};


CollectionHandler.prototype.toBali = function(jsArray) {
    var baliDocument = new grammar.DocumentContext();
    var baliLiteral = new grammar.LiteralContext(null, baliDocument);
    baliDocument.addChild(baliLiteral);
    var baliStructure = new grammar.StructureContext(null, baliLiteral);
    baliLiteral.addChild(baliStructure);
    var baliComposite = new grammar.CompositeContext(null, baliStructure);
    baliStructure.addChild(baliComposite);
    var baliCollection = new grammar.InlineCollectionContext(null, baliComposite);
    baliComposite.addChild(baliCollection);
    for (var i = 0; i < jsArray.length; i++) {
        var jsObject = jsArray[i];
        type = transformation.getJavaScriptType(jsObject);
        var baliExpression = transformation.javaScriptToExpression(type, jsObject);
        baliCollection.addChild(baliExpression);
        baliExpression.parentCtx = baliCollection;
    }
    return baliDocument;
};
