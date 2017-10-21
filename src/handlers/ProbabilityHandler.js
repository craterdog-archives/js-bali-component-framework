/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var grammar = require('../grammar/BaliLanguageParser');
var language = require('../BaliLanguage');
var Probability = require('../elements/Probability').Probability;



function ProbabilityHandler() {
    return this;
}
ProbabilityHandler.prototype.constructor = ProbabilityHandler;
exports.ProbabilityHandler = ProbabilityHandler;


ProbabilityHandler.prototype.toJavaScript = function(baliTree) {
    if (baliTree.constructor.name === 'TrueProbabilityContext') {
        return true;
    } else if (baliTree.constructor.name === 'FalseProbabilityContext') {
        return false;
    } else {
        var fraction = Number(baliTree.FRACTION().text);
        var probability = new Probability(fraction);
        return probability;
    }
};


ProbabilityHandler.prototype.toBali = function(jsProbability) {
    var probability = jsProbability.toString();
    var baliTree = language.parseElement(probability);
    return baliTree.probability();
};
