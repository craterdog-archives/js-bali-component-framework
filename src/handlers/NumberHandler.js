/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var language = require('../BaliLanguage');
var grammar = require('../grammar/BaliLanguageParser');



function NumberHandler() {
    return this;
}
NumberHandler.prototype.constructor = NumberHandler;
exports.NumberHandler = NumberHandler;


NumberHandler.prototype.toJavaScript = function(baliTree) {
    if (baliTree instanceof grammar.UndefinedNumberContext) {
        return 'undefined';
    } else if (baliTree instanceof grammar.InfiniteNumberContext) {
        return 'infinity';
    } else if (baliTree instanceof grammar.RealNumberContext) {
        var real = baliTree.real();
        return toRealNumber(real);
    } else if (baliTree instanceof grammar.ImaginaryNumberContext) {
        var imaginary = baliTree.imaginary();
        return toImaginarylNumber(imaginary);
    } else {
        return toComplexNumber(baliTree);
    }
};


NumberHandler.prototype.toBali = function(jsNumber) {
    var number = jsNumber.toString();
    var baliTree = language.parseElement(number);
    return baliTree.number();
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


function toComplexNumber(baliTree) {
    var string = '(';
    string += toRealNumber(baliTree.real());
    var delimiter = baliTree.del.text;
    string += delimiter;
    if (delimiter === ',') {
        string += " ";
    }
    string += toImaginaryNumber(baliTree.imaginary());
    string += ')';
    return string;
}
