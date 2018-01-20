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

var Type = require('../../elements/Type').Type;
var testCase = require('nodeunit').testCase;
/* global NaN, Infinity */


module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(4);

        test.strictEqual(new Type().toString(), Type.NONE.toString(), "1 The type value should have been Type.NONE.");
        test.strictEqual(new Type('none').toString(), Type.NONE.toString(), "2 The type value should have been Type.NONE.");
        test.strictEqual(new Type('any').toString(), Type.ANY.toString(), "3 The type value should have been Type.ANY.");

        test.throws(
            function() {
                new Type('foobar');
            }
        );

        test.done();
    }
});
