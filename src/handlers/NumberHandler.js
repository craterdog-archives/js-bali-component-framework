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


function NumberHandler() {
    return this;
}
NumberHandler.prototype.constructor = NumberHandler;
exports.NumberHandler = NumberHandler;


NumberHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliNumber = baliElement.number();
    var nodeType = baliNumber.constructor.name;
    switch (nodeType) {
        case 'UndefinedNumberContext':
            return NaN;
        case 'InfiniteNumberContext':
            return Infinity;
        case 'RealNumberContext':
            var real = baliNumber.real();
            return toRealNumber(real);
        case 'ImaginaryNumberContext':
            var imaginary = baliNumber.imaginary();
            return toImaginaryNumber(imaginary);
        default:
            return toComplexNumber(baliNumber);
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

    var baliDocument = language.parseDocument(number);
    return baliDocument;
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
