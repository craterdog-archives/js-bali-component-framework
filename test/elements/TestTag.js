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

var Tag = require('../../elements/Tag').Tag;
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(2);
        var random = new Tag();
        var expected = 'NT5PG2BXZGBGV5JTNPCP2HTM4JP6CS4X';
        var tag = new Tag(expected);
        var result = tag.toString();
        test.equal(result, expected, "The tag should have been '" + expected + "'.");
        test.throws(
            function() {
                var bad = new Tag('This is not a tag!');
            }
        );
        test.done();
    }
});
