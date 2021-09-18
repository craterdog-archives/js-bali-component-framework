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
 * This abstract class defines the invariant methods that all parsers must support.
 */
const moduleName = '/bali/abstractions/Parser';
const utilities = require('../utilities');
const Component = require('./Component').Component;
const Exception = require('./Component').Exception;


/**
 * This constructor creates a new parser component that can be used to parse formatted text.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the parser.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Parser} The new parser.
 */
const Parser = function(ancestry, debug) {
    Component.call(
        this,
        ancestry.concat(moduleName),
        [],
        undefined,  // must be undefined to avoid infinite loop
        debug
    );
    return this;
};
Parser.prototype = Object.create(Component.prototype);
Parser.prototype.constructor = Parser;
exports.Parser = Parser;


/**
 * This method parses a Bali Document Notation™ source string and returns the corresponding
 * component.
 *
 * @param {String} source The Bali Document Notation™ source string to be parsed.
 * @returns {Component} The corresponding component.
 */
Parser.prototype.parseSource = function(source) {
    const exception = new Exception({
        $module: moduleName,
        $procedure: '$parseSource',
        $exception: '$abstractMethod',
        $text: 'This abstract method must be implemented by each subclass.'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method parses a Bali Document Notation™ document and returns the corresponding
 * component. A document must end with an EOL character to be POSIX compliant.
 *
 * @param {String} document The Bali Document Notation™ document to be parsed.
 * @returns {Component} The corresponding component.
 */
Parser.prototype.parseDocument = function(document) {
    if (this.debug > 1) {
        this.validateArgument('$parseDocument', '$document', document, [
            '/javascript/String'
        ]);
    }
    return this.parseSource(document.slice(0, -1));  // remove the EOL at the end of the file
};

