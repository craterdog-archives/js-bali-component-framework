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



function NumberHandler() {
    return this;
}
NumberHandler.prototype.constructor = NumberHandler;
exports.NumberHandler = NumberHandler;


NumberHandler.prototype.toJavaScript = function(tree) {
    if (tree instanceof grammar.UndefinedNumberContext) {
        return 'undefined';
    } else if (tree instanceof grammar.InfiniteNumberContext) {
        return 'infinity';
    } else if (tree instanceof grammar.RealNumberContext) {
        var real = tree.real();
        return toRealNumber(real);
    } else if (tree instanceof grammar.ImaginaryNumberContext) {
        var imaginary = tree.imaginary();
        return toImaginarylNumber(imaginary);
    } else {
        var complex = toComplexNumber(tree);
        return complex;
    }
};


NumberHandler.prototype.toBali = function(object) {
    var tree;
    var string = object.toString();
    var chars = new antlr.InputStream(string);
    var lexer = new grammar.BaliLanguageLexer(chars);
    var tokens = new antlr.CommonTokenStream(lexer);
    var parser = new grammar.BaliLanguageParser(tokens);
    parser.buildParseTrees = true;
    tree = parser.number();
    return tree;
};


function toRealNumber(real) {
    if (real instanceof grammar.ConstantRealContext) {
        var constant = real.text;
        if (real.sign) {
            constant = '-' + constant;
        }
        return constant;
    } else {
        var float = Number(real.text);
        return float;
    }
}


function toImaginaryNumber(imaginary) {
    var real = imaginary.real();
    var sign = imaginary.sign;
    var string = '';
    if (real) {
        string += toRealNumber(real);
        if (real.con) {
            string += ' ';
        }
    } else if (sign) {
        string += '-';
    }
    string += 'i';
    return string;
}


function toComplexNumber(tree) {
    var string = '(';
    string += toRealNumber(tree.real());
    var delimiter = tree.del.text;
    string += delimiter;
    if (delimiter === ',') {
        string += " ";
    }
    string += toImaginaryNumber(tree.imaginary());
    string += ')';
    return string;
}
