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
var Version = require('../elements/Version').Version;


function VersionHandler() {
    return this;
}
VersionHandler.prototype.constructor = VersionHandler;
exports.VersionHandler = VersionHandler;


VersionHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliVersion = baliElement.version();
    var version = baliVersion.VERSION().getText().replace(/v/g, '');  // strip off the 'v'
    return new Version(version);
};


VersionHandler.prototype.toBali = function(jsVersion) {
    var version = 'v' + jsVersion.toString();  // prepend a 'v'
    var baliDocument = language.parseDocument(version);
    return baliDocument;
};
