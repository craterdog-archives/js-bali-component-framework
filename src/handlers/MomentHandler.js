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
var moment = require('moment');


function MomentHandler() {
    return this;
}
MomentHandler.prototype.constructor = MomentHandler;
exports.MomentHandler = MomentHandler;


MomentHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliMoment = baliElement.moment();
    var jsString = baliMoment.MOMENT().getText();
    jsString = jsString.substring(1, jsString.length - 1);  // remove the angle bracket delimiters
    return moment(jsString);
};


MomentHandler.prototype.toBali = function(jsMoment) {
    var jsString = jsMoment.format('YYYY-MM-DDTHH:mm:ss.SSS');
    var baliMoment = '<' + jsString + '>';  // add the angle bracket delimiters
    var baliDocument = language.parseDocument(baliMoment);
    return baliDocument;
};
