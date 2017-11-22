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
 *    Any          undefined
 *    Tag          bali-language:Tag
 *    Symbol       bali-language:Symbol
 *    Moment       bali-language:Moment
 *    Reference    url
 *    Version      bali-language:Version
 *    Text         string
 *    Binary       bali-language:Binary
 *    Probability  bali-language:Probability, boolean
 *    Percent      bali-language:Percent
 *    Number       number, js-big-integer:BigInteger, bali-language:Complex
 */
var url = require('url');
var moment = require('moment');
var antlr = require('antlr4');
var grammar = require('../grammar').BaliLanguageParser;
var codex = require('../utilities/EncodingUtilities');
var language = require('../BaliLanguage');
var Binary = require('../elements/Binary').Binary;
var Integer = require("js-big-integer").BigInteger;
var Angle = require('../elements/Angle').Angle;
var Complex = require('../elements/Complex').Complex;
var Percent = require('../elements/Percent').Percent;
var Probability = require('../elements/Probability').Probability;
var Symbol = require('../elements/Symbol').Symbol;
var Tag = require('../elements/Tag').Tag;
var Version = require('../elements/Version').Version;


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
 * This function transforms a Bali document into its corresponding JavaScript
 * object.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {DocumentContext} baliDocument The Bali document to be transformed.
 * @returns {object} The corresponding JavaScript object.
 */
LanguageMapper.prototype.documentToJavaScript = function(type, baliDocument) {
    var handler = HANDLER_MAP[type];
    var jsObject = handler.toJavaScript(baliDocument);
    return jsObject;
};


/**
 * This function transforms a JavaScript object into its corresponding Bali
 * document.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {object} jsObject The JavaScript object to be transformed.
 * @returns {DocumentContext} The corresponding Bali document.
 */
LanguageMapper.prototype.javaScriptToDocument = function(type, jsObject) {
    var handler = HANDLER_MAP[type];
    var baliDocument = handler.toBali(jsObject);
    return baliDocument;
};


/**
 * This function transforms a Bali expression into its corresponding JavaScript
 * object.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {ExpressionContext} baliExpression The Bali expression to be transformed.
 * @returns {object} The corresponding JavaScript object.
 */
LanguageMapper.prototype.expressionToJavaScript = function(type, baliExpression) {
    var handler = HANDLER_MAP[type];
    var baliDocument = baliExpression.document();  // strip off the expression wrapper
    var jsObject = handler.toJavaScript(baliDocument);
    return jsObject;
};


/**
 * This function transforms a JavaScript object into its corresponding Bali
 * expression.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {object} jsObject The JavaScript object to be transformed.
 * @returns {ExpressionContext} The corresponding Bali expression.
 */
LanguageMapper.prototype.javaScriptToExpression = function(type, jsObject) {
    var baliDocument = this.javaScriptToDocument(type, jsObject);
    var baliExpression = new antlr.ParserRuleContext();  // HACK: since ExpressionContext() is not exported
    baliExpression = new grammar.DocumentExpressionContext(null, baliExpression);
    baliExpression.addChild(baliDocument);  // add on an expression wrapper
    baliDocument.parentCtx = baliExpression;
    return baliExpression;
};


/**
 * This function transforms a Bali association key into its corresponding JavaScript
 * object.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {KeyContext} baliKey The Bali association key to be transformed.
 * @returns {object} The corresponding JavaScript object.
 */
LanguageMapper.prototype.keyToJavaScript = function(type, baliKey) {
    var handler = HANDLER_MAP[type];
    var baliElement = baliKey.element();  // strip off the key wrapper
    var baliLiteral = new grammar.LiteralContext();
    baliLiteral.addChild(baliElement);  // add on a literal wrapper
    baliElement.parentCtx = baliLiteral;
    var baliDocument = new grammar.DocumentContext();
    baliDocument.addChild(baliLiteral);  // add on a document wrapper
    baliLiteral.parentCtx = baliDocument;
    var jsObject = handler.toJavaScript(baliDocument);
    return jsObject;
};


/**
 * This function transforms a JavaScript object into its corresponding Bali
 * association key.
 * 
 * @param {string} type The type of handler to be used for the mapping.
 * @param {object} jsObject The JavaScript object to be transformed.
 * @returns {KeyContext} The corresponding Bali association key.
 */
LanguageMapper.prototype.javaScriptToKey = function(type, jsObject) {
    var handler = HANDLER_MAP[type];
    var baliDocument = handler.toBali(jsObject);
    var baliLiteral = baliDocument.literal();  // strip off the document wrapper
    var baliElement = baliLiteral.element();  // strip off the literal wrapper
    var baliKey = new grammar.KeyContext();
    baliKey.addChild(baliElement);  // add on a key wrapper
    baliElement.parentCtx = baliKey;
    return baliKey;
};


/**
 * This function returns the handler type of a JavaScript object.
 * 
 * @param {object} jsObject The JavaScript object.
 * @returns {string} The handler type for the object.
 */
LanguageMapper.prototype.getJavaScriptType = function(jsObject) {
    var type = typeof jsObject;
    if (type === 'object') {
        if (jsObject) {
            type = jsObject.constructor.name.toLowerCase();
        } else {
            type = 'null';  // addresses infamous null type bug in javascript
        }
    }
    return type;
};


/**
 * This function returns the handler type of a Bali parse tree node.
 * 
 * @param {ParserContext} baliTree The Bali parse tree node.
 * @returns {string} The handler type for the tree node.
 */
LanguageMapper.prototype.getBaliType = function(baliTree) {
    var type;
    if (baliTree.constructor.name === 'DocumentExpressionContext') {
        // the bali tree is a document expression
        baliTree = baliTree.document();
    }
    if (baliTree.constructor.name === 'DocumentContext') {
        // the bali tree is a document
        baliTree = baliTree.literal();
    }
    // at this point the bali tree must be a literal
    if (baliTree.element()) {
        baliTree = baliTree.element();
        baliTree = baliTree.getChild(0);  // get the actual element
    } else if (baliTree.structure()) {
        baliTree = baliTree.structure();
        baliTree = baliTree.getChild(0);  // get the composite between the brackets []
        baliTree = baliTree.getChild(0);  // get the actual range, collection, or table
    } else {
        baliTree = baliTree.block();
        throw new Error('MAPPER: Not yet implemented...');
    }
    var nodeType = baliTree.constructor.name;
    switch (nodeType) {
        case 'BinaryContext':
            type = 'binary';
            break;
        case 'MomentContext':
            type = 'moment';
            break;
        case 'UndefinedNumberContext':
        case 'InfiniteNumberContext':
        case 'RealNumberContext':
        case 'ImaginaryNumberContext':
        case 'ComplexNumberContext':
            type = 'number';
            break;
        case 'PercentContext':
            type = 'percent';
            break;
        case 'TrueProbabilityContext':
        case 'FalseProbabilityContext':
        case 'FractionalProbabilityContext':
            type = 'probability';
            break;
        case 'InlineTextContext':
        case 'BlockTextContext':
            type = 'string';
            break;
        case 'SymbolContext':
            type = 'symbol';
            break;
        case 'TagContext':
            type = 'tag';
            break;
        case 'ReferenceContext':
            type = 'url';
            break;
        case 'VersionContext':
            type = 'version';
            break;
        case 'InlineCollectionContext':
        case 'NewlineCollectionContext':
            type = 'array';
            break;
        case 'InlineTableContext':
        case 'NewlineTableContext':
            type = 'object';
            break;
    }
    return type;
};


// PRIVATE CONSTANTS

var HANDLER_MAP = {
    //'any': new AnyHandler(),
    'array': new CollectionHandler(),
    'binary': new BinaryHandler(),
    'boolean': new ProbabilityHandler(),
    'moment': new MomentHandler(),
    'number': new NumberHandler(),
    'object': new TableHandler(),
    'percent': new PercentHandler(),
    'probability': new ProbabilityHandler(),
    'string': new TextHandler(),
    'symbol': new SymbolHandler(),
    'tag': new TagHandler(),
    'url': new ReferenceHandler(),
    'version': new VersionHandler()
    //'undefined': new AnyHandler()
};


// PRIVATE HANDLER CLASSES

function BinaryHandler() {
    return this;
}
BinaryHandler.prototype.constructor = BinaryHandler;


BinaryHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliBinary = baliElement.binary();
    var binary = baliBinary.BINARY().getText();
    var base64 = binary.substring(1, binary.length - 1);  // remove the single quote delimiters
    var jsString = codex.base64Decode(base64);
    return new Binary(jsString);
};


BinaryHandler.prototype.toBali = function(jsBinary) {
    var base64 = codex.base64Encode(jsBinary.toString());
    var binary = "'" + base64 + "'";  // add the single quote delimiters
    var baliDocument = language.parseDocument(binary);
    return baliDocument;
};


function CollectionHandler() {
    return this;
}
CollectionHandler.prototype.constructor = CollectionHandler;


CollectionHandler.prototype.toJavaScript = function(baliDocument) {
    var jsArray = [];
    var baliLiteral = baliDocument.literal();
    var baliStructure = baliLiteral.structure();
    var baliComposite = baliStructure.composite();
    var baliCollection = baliComposite.collection();
    var type = baliCollection.constructor.name;
    switch (type) {
        case 'InlineCollectionContext':
        case 'NewlineCollectionContext':
            var expressions = baliCollection.expression();
            for (var i = 0; i < expressions.length; i++) {
                var baliExpression = expressions[i];
                var mapper = new LanguageMapper();
                type = mapper.getBaliType(baliExpression);
                var jsObject = mapper.expressionToJavaScript(type, baliExpression);
                jsArray.push(jsObject);
            }
            break;
        default:
            // empty collection
    }
    return jsArray;
};


CollectionHandler.prototype.toBali = function(jsArray) {
    var baliDocument = new grammar.DocumentContext();
    var baliLiteral = new grammar.LiteralContext(null, baliDocument);
    baliDocument.addChild(baliLiteral);
    var baliStructure = new grammar.StructureContext(null, baliLiteral);
    baliLiteral.addChild(baliStructure);
    var baliComposite = new grammar.CompositeContext(null, baliStructure);
    baliStructure.addChild(baliComposite);
    var baliCollection = new grammar.InlineCollectionContext(null, baliComposite);
    baliComposite.addChild(baliCollection);
    for (var i = 0; i < jsArray.length; i++) {
        var jsObject = jsArray[i];
        var mapper = new LanguageMapper();
        var type = mapper.getJavaScriptType(jsObject);
        var baliExpression = mapper.javaScriptToExpression(type, jsObject);
        baliCollection.addChild(baliExpression);
        baliExpression.parentCtx = baliCollection;
    }
    return baliDocument;
};


function MomentHandler() {
    return this;
}
MomentHandler.prototype.constructor = MomentHandler;


MomentHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliMoment = baliElement.moment();
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


PercentHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliPercent = baliElement.percent();
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


function ReferenceHandler() {
    return this;
}
ReferenceHandler.prototype.constructor = ReferenceHandler;


ReferenceHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliReference = baliElement.reference();
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


SymbolHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliSymbol = baliElement.symbol();
    var symbol = baliSymbol.SYMBOL().getText().replace(/\$/g, '');  // strip off the $
    return new Symbol(symbol);
};


SymbolHandler.prototype.toBali = function(jsSymbol) {
    var symbol = '$' + jsSymbol.toString();  // prepend a $
    var baliDocument = language.parseDocument(symbol);
    return baliDocument;
};


function TableHandler() {
    return this;
}
TableHandler.prototype.constructor = TableHandler;


TableHandler.prototype.toJavaScript = function(baliDocument) {
    var jsObject = {};
    var baliLiteral = baliDocument.literal();
    var baliStructure = baliLiteral.structure();
    var baliComposite = baliStructure.composite();
    var baliTable = baliComposite.table();
    var type = baliTable.constructor.name;
    switch (type) {
        case 'InlineTableContext':
        case 'NewlineTableContext':
            var associations = baliTable.association();
            for (var i = 0; i < associations.length; i++) {
                var baliAssociation = associations[i];

                // transform the key
                var baliKey = baliAssociation.key();
                var mapper = new LanguageMapper();
                type = mapper.getBaliType(baliKey);
                var jsKey = mapper.keyToJavaScript(type, baliKey);

                // transform the value
                var baliExpression = baliAssociation.expression();
                type = mapper.getBaliType(baliExpression);
                var jsValue = mapper.expressionToJavaScript(type, baliExpression);

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
        var jsValue = jsObject[jsKey];
        var mapper = new LanguageMapper();
        var type = mapper.getJavaScriptType(jsKey);
        var baliKey = mapper.javaScriptToKey(type, jsKey);
        type = mapper.getJavaScriptType(jsValue);
        var baliExpression = mapper.javaScriptToExpression(type, jsValue);
        var baliAssociation = new grammar.AssociationContext(null, baliTable);
        baliAssociation.addChild(baliKey);
        baliKey.parentCtx = baliAssociation;
        baliAssociation.addChild(baliExpression);
        baliExpression.parentCtx = baliAssociation;
        baliTable.addChild(baliAssociation);
        baliAssociation.parentCtx = baliTable;
    }
    return baliDocument;
};


function TagHandler() {
    return this;
}
TagHandler.prototype.constructor = TagHandler;


TagHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliTag = baliElement.tag();
    var tag = baliTag.TAG().getText().replace(/#/g, '');  // strip off the #
    return new Tag(tag);
};


TagHandler.prototype.toBali = function(jsTag) {
    var tag = '#' + jsTag.toString();  // prepend a #
    var baliDocument = language.parseDocument(tag);
    return baliDocument;
};


function TextHandler() {
    return this;
}
TextHandler.prototype.constructor = TextHandler;


TextHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliText = baliElement.text();
    var text;
    if (baliText.constructor.name === 'BlockTextContext') {
        text = baliText.TEXT_BLOCK().getText();
    } else {
        text = baliText.TEXT().getText();
        text = text.replace(/\\"/g, '"');  // remove escapes from double quotes
    }
    var jsString = text.substring(1, text.length - 1);  // remove the double quote delimiters
    return jsString;
};


TextHandler.prototype.toBali = function(jsString) {
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


VersionHandler.prototype.toJavaScript = function(baliDocument) {
    var baliLiteral = baliDocument.literal();
    var baliElement = baliLiteral.element();
    var baliVersion = baliElement.version();
    var version = baliVersion.VERSION().getText().replace(/v/g, '');  // strip off the 'v'
    return new Version(version);
};


VersionHandler.prototype.toBali = function(jsVersion) {
    var version = 'v' + jsVersion.toString();  // prepend a 'v'
    var baliDocument = language.parseDocument(version);
    return baliDocument;
};

