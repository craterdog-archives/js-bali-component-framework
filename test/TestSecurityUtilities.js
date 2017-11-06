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

var security = require('../src/utilities/SecurityUtilities');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Coin Toss': function(test) {
        test.expect(2);
        test.ok(!security.coinToss(0));
        test.ok(security.coinToss(1));
        test.done();
    },
    'Test Random': function(test) {
        test.expect(66);
        for (var i = 0; i < 33; i++) {
            var bytes = security.generateRandomBytes(i);
            var length = bytes.length;
            var expected = i;
            test.strictEqual(length, expected, 'The length of the random string is wrong: ' + length);
            var hash = security.sha512Hash(bytes);
            length = hash.length;
            expected = 105;
            test.strictEqual(length, expected, 'The length of the hash string is wrong: ' + length);
        }
        test.done();
    }
});
