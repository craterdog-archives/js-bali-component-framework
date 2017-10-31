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
var Percent = require('../elements/Percent').Percent;


function PercentHandler() {
    return this;
}
PercentHandler.prototype.constructor = PercentHandler;
exports.PercentHandler = PercentHandler;


PercentHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliPercent = baliElement.percent();
    var baliReal = baliPercent.real();
    var jsPercent = toRealNumber(baliReal);
    return new Percent(jsPercent);
};


PercentHandler.prototype.toBali = function(jsPercent) {
    var percent = jsPercent.toString();
    var baliDocument = language.parseDocument(percent);
    return baliDocument;
};


// TODO: copied from NumberHandler, needs refactoring
function toRealNumber(real) {
    if (real.constructor.name === 'ConstantRealContext') {
        var constant = real.con.text;
        if (real.sign) {
            constant = '-' + constant;
        }
        return constant;
    } else {
        var string = real.FLOAT().getText();
        var float = Number(string);
        return float;
    }
}