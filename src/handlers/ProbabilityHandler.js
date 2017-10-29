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
var Probability = require('../elements/Probability').Probability;


function ProbabilityHandler() {
    return this;
}
ProbabilityHandler.prototype.constructor = ProbabilityHandler;
exports.ProbabilityHandler = ProbabilityHandler;


ProbabilityHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliProbability = baliElement.probability();
    var nodeType = baliProbability.constructor.name;
    var probability;
    switch (nodeType) {
        case 'TrueProbabilityContext':
            probability = 1;
            break;
        case 'FalseProbabilityContext':
            probability = 0;
            break;
        default:
            probability = Number('0' + baliProbability.FRACTION().getText());  // add leading zero before decimal point
    }
    return new Probability(probability);
};


ProbabilityHandler.prototype.toBali = function(jsProbability) {
    var probability = jsProbability.toString();
    switch (probability) {
        case '1':
        case 'true':
            probability = 'true';
            break;
        case '0':
        case 'false':
            probability = 'false';
            break;
        default:
            probability = probability.substring(1);  // strip off leading zero before decimal point
    }
    var baliDocument = language.parseDocument(probability);
    return baliDocument;
};
