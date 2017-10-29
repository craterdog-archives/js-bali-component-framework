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
var Tag = require('../elements/Tag').Tag;


function TagHandler() {
    return this;
}
TagHandler.prototype.constructor = TagHandler;
exports.TagHandler = TagHandler;


TagHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliTag = baliElement.tag();
    var tag = baliTag.TAG().getText().replace(/#/g, '');  // strip off the #
    return new Tag(tag);
};


TagHandler.prototype.toBali = function(jsTag) {
    var tag = '#' + jsTag.toString();  // prepend a #
    var baliDocument = language.parseDocument(tag);
    return baliDocument;
};
