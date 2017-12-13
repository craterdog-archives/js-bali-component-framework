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

var fs = require('fs');
var language = require('../src/BaliLanguage');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Parser and Formatter': function(test) {
        var source = [
            'test/source/elements',
            'test/source/expressions',
            'test/source/statements',
            'test/source/documents'
        ];
        test.expect(source.length * 2);
        for (var i = 0; i < source.length; i++) {
            var file = source[i] + '.bali';
            var document = fs.readFileSync(file, 'utf8');
            var tree = language.parseDocument(document);
            test.notEqual(tree, null, 'The parser returned a null tree.');
            var formatted = language.formatDocument(tree) + '\n';
            test.strictEqual(formatted, document, 'The formatter returned a different document.');
        }
        test.done();
    }
});
