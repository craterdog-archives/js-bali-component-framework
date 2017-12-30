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

/*
 * This class defines a mapper that can transform a Bali parse tree
 * into its corresponding javascript object, and vise versa.
 *    Bali Type    JavaScript Type(s)
 *    -----------  --------------------
 *    Any          undefined, bali-language:Any
 *    Array        array
 *    Binary       bali-language:Binary
 *    Document     bali-language:Document
 *    Moment       moment:moment
 *    Number       number, js-big-integer:BigInteger, bali-language:Complex
 *    Percent      bali-language:Percent
 *    Probability  boolean, bali-language:Probability
 *    Range        bali-language:Range
 *    Reference    url:url
 *    Symbol       bali-language:Symbol
 *    Table        object
 *    Tag          bali-language:Tag
 *    Text         string, bali-language:Text
 *    Version      bali-language:Version
 */
var url = require('url');
var moment = require('moment');
var antlr = require('antlr4');
var grammar = require('../grammar').BaliLanguageParser;
var codex = require('../utilities/EncodingUtilities');
var language = require('../BaliLanguage');
var Angle = require('../elements/Angle').Angle;
var Any = require('../elements/Any').Any;
var Binary = require('../elements/Binary').Binary;
var Complex = require('../elements/Complex').Complex;
var Document = require('../elements/Document').Document;
var Integer = require("js-big-integer").BigInteger;
var Percent = require('../elements/Percent').Percent;
var Probability = require('../elements/Probability').Probability;
var Range = require('../elements/Range').Range;
var Symbol = require('../elements/Symbol').Symbol;
var Tag = require('../elements/Tag').Tag;
var Text = require('../elements/Text').Text;
var Version = require('../elements/Version').Version;
/* global NaN, Infinity */


/**
 * This constructor creates a new JavaScript language mapper.
 * 
 * @constructor
 * @returns {LanguageMapper} The new mapper.
 */
function LanguageMapper() {
    return this;
}
LanguageMapper.prototype.constructor = LanguageMapper;
exports.LanguageMapper = LanguageMapper;


/**
 * This function transforms a Bali parse tree node into its corresponding
 * JavaScript object.
 * 
 * @param {DocumentContext} baliNode The Bali parse tree node to be transformed.
 * @returns {object} The corresponding JavaScript object.
 */
LanguageMapper.prototype.baliNodeToJavaScriptObject = function(baliNode) {
    // HACK: unwrap unneeded parse tree layers from the node
    loop: while (true) {
        switch (baliNode.constructor.name) {
            case 'ParametersContext':
            case 'StructureContext':
                baliNode = baliNode.composite();
                break;
            case 'LiteralContext':
            case 'ElementContext':
            case 'CompositeContext':
            case 'ValueContext':
            case 'DocumentExpressionContext':
                baliNode = baliNode.getChild(0);
                break;
            case 'BlockContext':
                throw new Error('MAPPER: Cannot map a block context.');
            default:
                break loop;
        }
    }

    // map the bali node to its corresponding javascript object
    var mapper = new LanguageMapper();
    var handler = mapper.getBaliTypeHandler(baliNode);
    var jsObject = handler.toJavaScript(baliNode);

    return jsObject;
};


/**
 * This function transforms a JavaScript object into its corresponding Bali
 * document.
 * 
 * @param {object} jsObject The JavaScript object to be transformed.
 * @returns {DocumentContext} The corresponding Bali document.
 */
LanguageMapper.prototype.javaScriptObjectToBaliDocument = function(jsObject) {
    var mapper = new LanguageMapper();
    var handler = mapper.getJavaScriptTypeHandler(jsObject);
    var baliNode = handler.toBali(jsObject);
    return baliNode;
};


/**
 * This function returns the handler type of a JavaScript object.
 * 
 * @param {object} jsObject The JavaScript object.
 * @returns {string} The handler type for the object.
 */
LanguageMapper.prototype.getJavaScriptTypeHandler = function(jsObject) {
    var handlerType = typeof jsObject;
    if (handlerType === 'object') {
        if (jsObject) {
            handlerType = jsObject.constructor.name.toLowerCase();
        } else {
            handlerType = 'undefined';  // addresses infamous null type bug in javascript
        }
    }
    var handler = HANDLER_MAP[handlerType];
    return handler;
};


/**
 * This function returns the mapping handler of a Bali parse tree node.
 * 
 * @param {ParserContext} baliNode The Bali parse tree node.
 * @returns {string} The mapping handler for the tree node.
 */
LanguageMapper.prototype.getBaliTypeHandler = function(baliNode) {
    var handlerType;
    var nodeType = baliNode.constructor.name;
    switch (nodeType) {
        case 'NoneAnyContext':
        case 'AnyAnyContext':
            handlerType = 'any';
            break;
        case 'BinaryContext':
            handlerType = 'binary';
            break;
        case 'DocumentContext':
            handlerType = 'document';
            break;
        case 'MomentContext':
            handlerType = 'moment';
            break;
        case 'UndefinedNumberContext':
        case 'InfiniteNumberContext':
        case 'RealNumberContext':
        case 'ImaginaryNumberContext':
        case 'ComplexNumberContext':
            handlerType = 'number';
            break;
        case 'PercentContext':
            handlerType = 'percent';
            break;
        case 'TrueProbabilityContext':
        case 'FalseProbabilityContext':
        case 'FractionalProbabilityContext':
            handlerType = 'probability';
            break;
        case 'InlineTextContext':
        case 'BlockTextContext':
            handlerType = 'text';
            break;
        case 'SymbolContext':
            handlerType = 'symbol';
            break;
        case 'TagContext':
            handlerType = 'tag';
            break;
        case 'ReferenceContext':
            handlerType = 'reference';
            break;
        case 'VersionContext':
            handlerType = 'version';
            break;
        case 'RangeContext':
            handlerType = 'range';
            break;
        case 'InlineArrayContext':
        case 'NewlineArrayContext':
            handlerType = 'array';
            break;
        case 'InlineTableContext':
        case 'NewlineTableContext':
            handlerType = 'table';
            break;
        default:
            throw new Error('MAPPER: An invalid Bali node type was passed: ' + nodeType);
    }
    var handler = HANDLER_MAP[handlerType];
    return handler;
};


// PRIVATE CONSTANTS

var HANDLER_MAP = {
    'any': new AnyHandler(),
    'array': new ArrayHandler(),
    'binary': new BinaryHandler(),
    'boolean': new ProbabilityHandler(),
    'complex': new NumberHandler(),
    'document': new DocumentHandler(),
    'integer': new NumberHandler(),
    'moment': new MomentHandler(),
    'number': new NumberHandler(),
    'object': new TableHandler(),
    'percent': new PercentHandler(),
    'probability': new ProbabilityHandler(),
    'range': new RangeHandler(),
    'reference': new ReferenceHandler(),
    'string': new TextHandler(),
    'symbol': new SymbolHandler(),
    'table': new TableHandler(),
    'tag': new TagHandler(),
    'text': new TextHandler(),
    'undefined': new AnyHandler(),
    'url': new ReferenceHandler(),
    'version': new VersionHandler()
};


// PRIVATE HANDLER CLASSES

function AnyHandler() {
    return this;
}
AnyHandler.prototype.constructor = AnyHandler;


AnyHandler.prototype.toJavaScript = function(baliAny) {
    var nodeType = baliAny.constructor.name;
    var value;
    switch (nodeType) {
        case 'NoneAnyContext':
            value = 'none';
            break;
        case 'AnyAnyContext':
            value = 'any';
            break;
        default:
            throw new Error('ANY: An invalid context type was found: ' + nodeType);
    }
    return new Any(value);
};


AnyHandler.prototype.toBali = function(jsAny) {
    if (!jsAny) jsAny = 'none';
    var baliDocument = language.parseDocument(jsAny);
    return baliDocument;
};


function BinaryHandler() {
    return this;
}
BinaryHandler.prototype.constructor = BinaryHandler;


BinaryHandler.prototype.toJavaScript = function(baliBinary) {
    var binary = baliBinary.BINARY().getText();
    return new Binary(binary, 'autodetect');
};


BinaryHandler.prototype.toBali = function(jsBinary) {
    var baliDocument = language.parseDocument(jsBinary.toString());
    return baliDocument;
};


function ArrayHandler() {
    return this;
}
ArrayHandler.prototype.constructor = ArrayHandler;


ArrayHandler.prototype.toJavaScript = function(baliArray) {
    var jsArray = [];
    var type = baliArray.constructor.name;
    switch (type) {
        case 'InlineArrayContext':
        case 'NewlineArrayContext':
            var values = baliArray.value();
            for (var i = 0; i < values.length; i++) {
                var baliExpression = values[i].expression();
                var mapper = new LanguageMapper();
                var jsObject = mapper.baliNodeToJavaScriptObject(baliExpression);
                jsArray.push(jsObject);
            }
            break;
        default:
            // empty array
    }
    return jsArray;
};


ArrayHandler.prototype.toBali = function(jsArray) {
    var baliDocument = new grammar.DocumentContext();
    var baliLiteral = new grammar.LiteralContext(null, baliDocument);
    baliDocument.addChild(baliLiteral);
    var baliStructure = new grammar.StructureContext(null, baliLiteral);
    baliLiteral.addChild(baliStructure);
    var baliComposite = new grammar.CompositeContext(null, baliStructure);
    baliStructure.addChild(baliComposite);
    var baliArray = new grammar.InlineArrayContext(null, baliComposite);
    baliComposite.addChild(baliArray);
    for (var i = 0; i < jsArray.length; i++) {
        var jsObject = jsArray[i];
        var mapper = new LanguageMapper();
        var baliItem = mapper.javaScriptObjectToBaliDocument(jsObject);
        var baliExpression = new antlr.ParserRuleContext();  // HACK: since ExpressionContext() is not exported
        baliExpression = new grammar.DocumentExpressionContext(null, baliExpression);
        baliExpression.addChild(baliItem);  // add on an expression wrapper
        baliItem.parentCtx = baliExpression;
        var baliValue = new grammar.ValueContext(null, baliArray);
        baliArray.addChild(baliValue);
        baliValue.addChild(baliExpression);
        baliExpression.parentCtx = baliValue;
    }
    return baliDocument;
};


function DocumentHandler() {
    return this;
}
DocumentHandler.prototype.constructor = DocumentHandler;


DocumentHandler.prototype.toJavaScript = function(baliDocument) {
    var mapper = new LanguageMapper();

    // convert the bali literal into a javascript object
    var baliLiteral = baliDocument.literal();
    var jsLiteral = mapper.baliNodeToJavaScriptObject(baliLiteral);

    // convert the bali parameters into a javascript object
    var baliParameters = baliDocument.parameters();
    if (baliParameters) {
        var jsParameters = mapper.baliNodeToJavaScriptObject(baliParameters);
        var jsDocument = new Document(jsLiteral, jsParameters);
        // since there are parameters we must wrap them in a javascript document
        return jsDocument;
    }

    // no parameters so just return the javascript literal
    return jsLiteral;
};


DocumentHandler.prototype.toBali = function(jsObject) {
    var mapper = new LanguageMapper();

    // convert javascript literal into a bali document
    var jsLiteral = jsObject.literal;
    var baliDocument = mapper.javaScriptObjectToBaliDocument(jsLiteral);
    var baliParameters = new grammar.ParametersContext(null, baliDocument);
    baliDocument.addChild(baliParameters);

    // add the javascript parameters into the bali document
    var jsParameters = jsObject.parameters;
    var baliComposite = mapper.javaScriptObjectToBaliDocument(jsParameters).structure().composite();
    baliParameters.addChild(baliComposite);

    return baliDocument;
};


function MomentHandler() {
    return this;
}
MomentHandler.prototype.constructor = MomentHandler;


MomentHandler.prototype.toJavaScript = function(baliMoment) {
    var jsString = baliMoment.MOMENT().getText();
    jsString = jsString.substring(1, jsString.length - 1);  // remove the angle bracket delimiters
    return moment(jsString);
};


MomentHandler.prototype.toBali = function(jsMoment) {
    var jsString = jsMoment.format('YYYY-MM-DDTHH:mm:ss.SSS');
    var baliMoment = '<' + jsString + '>';  // add the angle bracket delimiters
    var baliDocument = language.parseDocument(baliMoment);
    return baliDocument;
};


function NumberHandler() {
    return this;
}
NumberHandler.prototype.constructor = NumberHandler;


NumberHandler.prototype.toJavaScript = function(baliNumber) {
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
            throw new Error('MAPPER: An unexpected Bali node type was encountered as a Bali Number: ' + nodeType);
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
            throw new Error('MAPPER: Unexpected JavaScript number type: ' + type);
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


function PercentHandler() {
    return this;
}
PercentHandler.prototype.constructor = PercentHandler;


PercentHandler.prototype.toJavaScript = function(baliPercent) {
    var baliReal = baliPercent.real();
    var jsPercent = baliRealToJsNumber(baliReal);
    return new Percent(jsPercent);
};


PercentHandler.prototype.toBali = function(jsPercent) {
    var percent = jsPercent.toString();
    var baliDocument = language.parseDocument(percent);
    return baliDocument;
};


function ProbabilityHandler() {
    return this;
}
ProbabilityHandler.prototype.constructor = ProbabilityHandler;


ProbabilityHandler.prototype.toJavaScript = function(baliProbability) {
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
    var baliDocument = language.parseDocument(jsProbability.toString());
    return baliDocument;
};


function ReferenceHandler() {
    return this;
}
ReferenceHandler.prototype.constructor = ReferenceHandler;


ReferenceHandler.prototype.toJavaScript = function(baliReference) {
    var baliResource = baliReference.RESOURCE().getText();
    var jsString = baliResource.substring(1, baliResource.length - 1);  // remove the angle bracket delimiters
    return url.parse(jsString);
};


ReferenceHandler.prototype.toBali = function(jsUrl) {
    var jsString = jsUrl.href;
    var baliReference = '<' + jsString + '>';  // add the angle bracket delimiters
    var baliDocument = language.parseDocument(baliReference);
    return baliDocument;
};


function SymbolHandler() {
    return this;
}
SymbolHandler.prototype.constructor = SymbolHandler;


SymbolHandler.prototype.toJavaScript = function(baliSymbol) {
    var symbol = baliSymbol.SYMBOL().getText();
    return new Symbol(symbol);
};


SymbolHandler.prototype.toBali = function(jsSymbol) {
    var symbol = jsSymbol.toString();
    var baliDocument = language.parseDocument(symbol);
    return baliDocument;
};


function RangeHandler() {
    return this;
}
RangeHandler.prototype.constructor = RangeHandler;


RangeHandler.prototype.toJavaScript = function(baliRange) {
    var first = baliRange.value(0);
    var last = baliRange.value(1);
    var jsRange = new Range(first, last);
    return jsRange;
};


RangeHandler.prototype.toBali = function(jsRange) {
    var baliDocument = new grammar.DocumentContext();
    var baliLiteral = new grammar.LiteralContext(null, baliDocument);
    baliDocument.addChild(baliLiteral);
    var baliStructure = new grammar.StructureContext(null, baliLiteral);
    baliLiteral.addChild(baliStructure);
    var baliComposite = new grammar.CompositeContext(null, baliStructure);
    baliStructure.addChild(baliComposite);
    var baliRange = new grammar.RangeContext(null, baliComposite);
    baliComposite.addChild(baliRange);

    var jsObject = jsRange.firstValue;
    var mapper = new LanguageMapper();
    var baliExpression = mapper.javaScriptToExpression(jsObject);
    var baliValue = new grammar.ValueContext(null, baliRange);
    baliRange.addChild(baliValue);
    baliValue.addChild(baliExpression);
    baliExpression.parentCtx = baliValue;

    jsObject = jsRange.secondValue;
    mapper = new LanguageMapper();
    baliExpression = mapper.javaScriptToExpression(jsObject);
    baliValue = new grammar.ValueContext(null, baliRange);
    baliRange.addChild(baliValue);
    baliValue.addChild(baliExpression);
    baliExpression.parentCtx = baliValue;

    return baliDocument;
};


function TableHandler() {
    return this;
}
TableHandler.prototype.constructor = TableHandler;


TableHandler.prototype.toJavaScript = function(baliTable) {
    var mapper = new LanguageMapper();
    var jsObject = {};
    var type = baliTable.constructor.name;
    switch (type) {
        case 'InlineTableContext':
        case 'NewlineTableContext':
            var associations = baliTable.association();
            for (var i = 0; i < associations.length; i++) {
                var baliAssociation = associations[i];

                // convert the bali key into a javascript string since only strings are
                // allowed as javascript object keys
                var baliKey = baliAssociation.key();
                var jsKey = language.formatDocument(baliKey);

                // convert the bali value into a javascript object
                var baliValue = baliAssociation.value();
                var jsValue = mapper.baliNodeToJavaScriptObject(baliValue);

                // add the key-value pair
                jsObject[jsKey] = jsValue;
            }
            break;
        default:
            // empty table
    }
    return jsObject;
};


TableHandler.prototype.toBali = function(jsObject) {
    var mapper = new LanguageMapper();
    var baliDocument = new grammar.DocumentContext();
    var baliLiteral = new grammar.LiteralContext(null, baliDocument);
    baliDocument.addChild(baliLiteral);
    var baliStructure = new grammar.StructureContext(null, baliLiteral);
    baliLiteral.addChild(baliStructure);
    var baliComposite = new grammar.CompositeContext(null, baliStructure);
    baliStructure.addChild(baliComposite);
    var baliTable = new grammar.InlineTableContext(null, baliComposite);
    baliComposite.addChild(baliTable);
    for (var jsKey in jsObject) {
        var baliAssociation = new grammar.AssociationContext(null, baliTable);
        baliTable.addChild(baliAssociation);

        var baliKey = language.parseKey(jsKey);
        baliAssociation.addChild(baliKey);
        baliKey.parentCtx = baliAssociation;

        var baliValue = new grammar.ValueContext(null, baliAssociation);
        baliAssociation.addChild(baliValue);
        var baliExpression = new grammar.DocumentExpressionContext(null, baliValue);
        baliValue.addChild(baliExpression);
        var jsValue = jsObject[jsKey];
        var baliItem = mapper.javaScriptObjectToBaliDocument(jsValue);
        baliExpression.addChild(baliItem);
        baliItem.parentCtx = baliExpression;
    }
    return baliDocument;
};


function TagHandler() {
    return this;
}
TagHandler.prototype.constructor = TagHandler;


TagHandler.prototype.toJavaScript = function(baliTag) {
    var tag = baliTag.TAG().getText();
    return new Tag(tag);
};


TagHandler.prototype.toBali = function(jsTag) {
    var tag = jsTag.toString();
    var baliDocument = language.parseDocument(tag);
    return baliDocument;
};


function TextHandler() {
    return this;
}
TextHandler.prototype.constructor = TextHandler;


TextHandler.prototype.toJavaScript = function(baliText) {
    var text;
    if (baliText.constructor.name === 'BlockTextContext') {
        text = baliText.TEXT_BLOCK().getText();
    } else {
        text = baliText.TEXT().getText();
        text = text.replace(/\\"/g, '"');  // remove escapes from double quotes
    }
    var jsString = text.substring(1, text.length - 1);  // remove the double quote delimiters
    var jsText = new Text(jsString);
    return jsText;
};


TextHandler.prototype.toBali = function(jsObject) {
    var jsString = jsObject.toString();
    if (jsString.length > 0 && jsString[0] !== '\n') {
        jsString = jsString.replace(/"/g, '\\"');  // escape any double quotes
    }
    var text = '"' + jsString + '"';  // add the double quote delimiters
    var baliDocument = language.parseDocument(text);
    return baliDocument;
};


function VersionHandler() {
    return this;
}
VersionHandler.prototype.constructor = VersionHandler;


VersionHandler.prototype.toJavaScript = function(baliVersion) {
    var version = baliVersion.VERSION().getText().replace(/v/g, '');  // strip off the 'v'
    return new Version(version);
};


VersionHandler.prototype.toBali = function(jsVersion) {
    var version = 'v' + jsVersion.toString();  // prepend a 'v'
    var baliDocument = language.parseDocument(version);
    return baliDocument;
};

