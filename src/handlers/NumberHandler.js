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


function NumberHandler() {
    return this;
}
NumberHandler.prototype.constructor = NumberHandler;
exports.NumberHandler = NumberHandler;


NumberHandler.prototype.toJavaScript = function(baliTree) {
    var nodeType = baliTree.constructor.name;
    switch (nodeType) {
        case 'UndefinedNumberContext':
            return NaN;
        case 'InfiniteNumberContext':
            return Infinity;
        case 'RealNumberContext':
            var real = baliTree.real();
            return toRealNumber(real);
        case 'ImaginaryNumberContext':
            var imaginary = baliTree.imaginary();
            return toImaginarylNumber(imaginary);
        default:
            return toComplexNumber(baliTree);
    }
};


NumberHandler.prototype.toBali = function(jsNumber) {
    var number = jsNumber.toString();
    switch (number) {
        case 'Infinity':
        case '-Infinity':
            number = 'infinity';
            break;
        case 'NaN':
            number = 'undefined';
            break;
        default:
            number = number.replace(/e/, 'E');
    }

    var baliTree = language.parseElement(number);
    return baliTree.number();
};


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
