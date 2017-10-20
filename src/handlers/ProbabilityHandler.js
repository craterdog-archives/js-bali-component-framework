/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var antlr = require('antlr4');
var grammar = require('../grammar/BaliLanguageParser');
var Probability = require('../elements/Probability').Probability;



function ProbabilityHandler() {
    return this;
}
ProbabilityHandler.prototype.constructor = ProbabilityHandler;
exports.ProbabilityHandler = ProbabilityHandler;


ProbabilityHandler.prototype.toJavaScript = function(tree) {
    if (tree instanceof grammar.TrueProbabilityContext) {
        return true;
    } else if (tree instanceof grammar.FalseProbabilityContext) {
        return false;
    } else {
        var fraction = Number(tree.FRACTION().getText());
        var probability = new Probability(fraction);
        return probability;
    }
};


ProbabilityHandler.prototype.toBali = function(object) {
    var tree;
    var string = object.toString();
    var chars = new antlr.InputStream(string);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    tree = parser.probability();
    return tree;
};
