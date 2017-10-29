'use strict';

var Binary = require('../src/elements/Binary').Binary;
var security = require('../src/utilities/SecurityUtilities');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(2);
        var empty = new Binary();
        var string = empty.toString();
        test.equal(string, '', "The binary should have been ''.");
        var expected = security.generateRandomBytes(10);
        var binary = new Binary(expected);
        string = binary.toString();
        test.equal(string, expected, "The binary should have been '" + expected + "'.");
        test.done();
    }
});
