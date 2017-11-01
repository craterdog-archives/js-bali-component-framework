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

var language = require('../BaliLanguage');
var url = require('url');


function ReferenceHandler() {
    return this;
}
ReferenceHandler.prototype.constructor = ReferenceHandler;
exports.ReferenceHandler = ReferenceHandler;


ReferenceHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliReference = baliElement.reference();
    var baliResource = baliReference.RESOURCE().getText();
    var jsString = baliResource.substring(1, baliResource.length - 1);  // remove the angle bracket delimiters
    return url.parse(jsString);
};


ReferenceHandler.prototype.toBali = function(jsUrl) {
    var jsString = jsUrl.href;
    var baliReference = '<' + jsString + '>';  // add the angle bracket delimiters
    var baliDocument = language.parseDocument(baliReference);
    return baliDocument;
};
