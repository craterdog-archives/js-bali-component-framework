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


function TableHandler() {
    return this;
}
TableHandler.prototype.constructor = TableHandler;
exports.TableHandler = TableHandler;


TableHandler.prototype.toJavaScript = function(baliDocument) {
    var jsObject = {};
    var baliLiteral = baliDocument.literal();
    var baliStructure = baliLiteral.structure();
    var baliComposite = baliStructure.composite();
    var baliTable = baliComposite.table();
    var type = baliTable.constructor.name;
    switch (type) {
        case 'InlineTableContext':
        case 'NewlineTableContext':
            var associations = baliTable.association();
            for (var i = 0; i < associations.length; i++) {
                var baliAssociation = associations[i];

                // transform the key
                var baliKey = baliAssociation.key();
                type = transformation.getBaliType(baliKey);
                var jsKey = transformation.keyToJavaScript(type, baliKey);

                // transform the value
                var baliExpression = baliAssociation.expression();
                type = transformation.getBaliType(baliExpression);
                var jsValue = transformation.expressionToJavaScript(type, baliExpression);

                // add the key-value pair
                jsObject[jsKey] = jsValue;
            }
            break;
        default:
            // empty table
    }
    return jsObject;
};


TableHandler.prototype.toBali = function(jsObject) {
    var baliDocument = new grammar.DocumentContext();
    var baliLiteral = new grammar.LiteralContext(null, baliDocument);
    baliDocument.addChild(baliLiteral);
    var baliStructure = new grammar.StructureContext(null, baliLiteral);
    baliLiteral.addChild(baliStructure);
    var baliComposite = new grammar.CompositeContext(null, baliStructure);
    baliStructure.addChild(baliComposite);
    var baliTable = new grammar.InlineTableContext(null, baliComposite);
    baliComposite.addChild(baliTable);
    for (var jsKey in jsObject) {
        var jsValue = jsObject[jsKey];
        type = transformation.getJavaScriptType(jsKey);
        var baliKey = transformation.javaScriptToKey(type, jsKey);
        type = transformation.getJavaScriptType(jsValue);
        var baliExpression = transformation.javaScriptToExpression(type, jsValue);
        var baliAssociation = new grammar.AssociationContext(null, baliTable);
        baliAssociation.addChild(baliKey);
        baliKey.parentCtx = baliAssociation;
        baliAssociation.addChild(baliExpression);
        baliExpression.parentCtx = baliAssociation;
        baliTable.addChild(baliAssociation);
        baliAssociation.parentCtx = baliTable;
    }
    return baliDocument;
};
