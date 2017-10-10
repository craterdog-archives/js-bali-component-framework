/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var BaliLanguageParser = require('../antlr/BaliLanguageParser');


/*
 * This handler class defines the transforms between the JavaScript String type and
 * the Bali Text type.
 */
function StringHandler() {
    return this;
}

StringHandler.prototype = Object.create(Object.prototype);
StringHandler.prototype.constructor = StringHandler;


// Handler Methods

StringHandler.prototype.toObject = function(tree) {
    var token = tree.TEXT();
    var string = token.getText().slice(1, -1);  // remove the double quote delimiters
    return string;
};


StringHandler.prototype.toTree = function(object) {
    var token = new Token();
    token.setText('"' + object + '"');  // add the double quote delimiters
    token.type = BaliLanguageParser.TEXT;
    var tree = new InlineTextContext();
    tree.addTokenNode(token);
    return tree;
};
