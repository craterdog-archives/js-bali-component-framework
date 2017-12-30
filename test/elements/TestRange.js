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

var Range = require('../../elements/Range').Range;
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(5);
        test.throws(
            function() {
                var empty = new Range();
            }
        );
        test.throws(
            function() {
                var single = new Range(1);
            }
        );
        test.throws(
            function() {
                var range = new Range(1, 25);
                var string = range.toString();
            }
        );
        var range = new Range(1, 5);
        test.equal(range.firstValue, 1, 'The first value in the range should have been 1.');
        test.equal(range.lastValue, 5, 'The last value in the range should have been 5.');
        test.done();
    }
});
