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


function TimeHandler() {
    return this;
}
TimeHandler.prototype.constructor = TimeHandler;
exports.TimeHandler = TimeHandler;


TimeHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliTime = baliElement.time();
    var time = baliTime.TIME().getText();
    var jsString = time.substring(1, time.length - 1);  // remove the angle bracket delimiters
    return moment(jsString);
};


TimeHandler.prototype.toBali = function(jsMoment) {
    var jsString = jsMoment.format('YYYY-MM-DDTHH:mm:ss.SSS');
    var time = '<' + jsString + '>';  // add the angle bracket delimiters
    var baliDocument = language.parseDocument(time);
    return baliDocument;
};
