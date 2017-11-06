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

var Integer = require("js-big-integer").BigInteger;
var Angle = require('../elements/Angle').Angle;
var Complex = require('../elements/Complex').Complex;
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
    var baliReal;
    var baliImaginary;
    var nodeType = baliNumber.constructor.name;
    switch (nodeType) {
        case 'UndefinedNumberContext':
            return NaN;
        case 'InfiniteNumberContext':
            return Infinity;
        case 'RealNumberContext':
            baliReal = baliNumber.real();
            return baliRealToJsNumber(baliReal);
        case 'ImaginaryNumberContext':
            baliImaginary = baliNumber.imaginary();
            var jsNumber = baliImaginaryToJsNumber(baliImaginary);
            return new Complex(0, jsNumber);
        case 'ComplexNumberContext':
            baliReal = baliNumber.real();
            var jsReal = baliRealToJsNumber(baliReal);
            baliImaginary = baliNumber.imaginary();
            var jsImaginary = baliImaginaryToJsNumber(baliImaginary);
            var delimiter = baliNumber.del.text;
            if (delimiter === ',') {
                return new Complex(jsReal, jsImaginary);
            } else {
                return new Complex(jsReal, new Angle(jsImaginary));
            }
            break;
            
        default:
            throw 'An unexpected Bali node type was encountered as a Bali Number: ' + nodeType;
    }
};


NumberHandler.prototype.toBali = function(jsNumber) {
    // figure out the type of number
    var type = typeof jsNumber;
    if (type === 'object') {
        type = jsNumber.constructor.name.toLowerCase();
    }

    var string = jsNumber.toString();
    switch (type) {
        case 'number':
            switch (string) {
                case 'Infinity':
                case '-Infinity':
                    string = 'infinity';
                    break;
                case 'NaN':
                    string = 'undefined';
                    break;
                default:
                    // must replace the 'e' in the JS exponent with 'E' for the Bali exponent
                    string = string.replace(/e/g, 'E');
            }
            break;

        case 'biginteger':
            // nothing to do
            break;

        case 'complex':
            // handle special cases
            if (jsNumber.isNaN()) {
                string = 'undefined';
            } else if (jsNumber.isInfinite()) {
                string = 'infinity';
            } else {
                string = jsNumber.toString();
                // must replace the 'e' in the exponents with 'E' but not affect the 'e^'
                string = string.replace(/e([^^])/g, 'E$1');
            }
            break;

        default:
            throw 'Unexpected JavaScript number type: ' + type;
    }

    var baliDocument = language.parseDocument(string);
    return baliDocument;
};


function baliRealToJsNumber(baliReal) {
    var jsNumber;
    if (baliReal.constructor.name === 'ConstantRealContext') {
        var constant = baliReal.con.text;
        switch (constant) {
            case 'e':
                jsNumber = 2.718281828459045;
                break;
            case 'pi':
                jsNumber = 3.141592653589793;
                break;
            case 'phi':
                jsNumber = 1.618033988749895;
                break;
        }
        if (baliReal.sign) {
            jsNumber = -jsNumber;
        }
        return jsNumber;
    } else {
        var string = baliReal.FLOAT().getText();
        jsNumber = Number(string);
        return jsNumber;
    }
}


function baliImaginaryToJsNumber(baliImaginary) {
    var real = baliImaginary.real();
    var sign = baliImaginary.sign;
    var jsNumber = 1;
    if (real) {
        jsNumber = baliRealToJsNumber(real);
    }
    if (sign) {
        jsNumber = -jsNumber;
    }
    return jsNumber;
}
