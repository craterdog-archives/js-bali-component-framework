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

var Moment = require('../../objects/Moment').Moment;
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(9);

        var moment = new Moment();
        var string = moment.toString();
        test.equal(string.length, 25, 'The moment should have been 25 characters long: ' + string);

        var tests = [
            '<2017-12-30T17:38:35.726>',
            '<2017-12-30T17:38:35>',
            '<2017-12-30T17:38>',
            '<2017-12-30T17>',
            '<2017-12-30>',
            '<2017-12>',
            '<2017>',
            '<-10000>'
        ];
        for (var i = 0; i < tests.length; i++) {
            var expected = tests[i];
            moment = new Moment(expected);
            string = moment.toString();
            test.equal(string, expected, "" + (i + 1) + " The moments didn't match.");
        }

        test.done();
    }
});
