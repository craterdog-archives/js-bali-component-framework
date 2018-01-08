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

var Any = require('../../objects/Any').Any;
var testCase = require('nodeunit').testCase;
/* global NaN, Infinity */


module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(4);

        test.strictEqual(new Any().toString(), Any.NONE.toString(), "1 The any value should have been Any.NONE.");
        test.strictEqual(new Any('none').toString(), Any.NONE.toString(), "2 The any value should have been Any.NONE.");
        test.strictEqual(new Any('any').toString(), Any.ANY.toString(), "3 The any value should have been Any.ANY.");

        test.throws(
            function() {
                new Any('foobar');
            }
        );

        test.done();
    }
});
