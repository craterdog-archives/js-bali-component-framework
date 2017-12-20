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

var Version = require('../../elements/Version').Version;
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(7);
        var empty = new Version();
        var string = empty.toString();
        test.equal(string, '1', "The version string should have been '1'.");
        var major = new Version('42');
        string = major.toString();
        test.equal(string, '42', "The version string should have been '42'.");
        var minor = new Version('41.6');
        string = minor.toString();
        test.equal(string, '41.6', "The version string should have been '41.6'.");
        var bug = new Version('2.13.5');
        string = bug.toString();
        test.equal(string, '2.13.5', "The version string should have been '2.13.5'.");
        test.throws(
            function() {
                new Version('1.');
            }
        );
        test.throws(
            function() {
                new Version('1.0');
            }
        );
        test.throws(
            function() {
                new Version('1.0.2');
            }
        );
        test.done();
    }
});
