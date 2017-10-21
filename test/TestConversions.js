'use strict';

var language = require('../src/BaliLanguage');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Numbers': function(test) {
        //var testValues = [-infinity, -1.3E10, -1, 0, 5, 23.7E-12, infinity, NaN];
        var testValues = [-1, 0, 5];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsNumber = testValues[i];
            var baliTree = language.convertToBali(jsNumber);
            var jsResult = language.convertToJavaScript(baliTree);
            test.equal(jsResult, jsNumber, "The round trip conversion didn't match.");
        }
        test.done();
    }
});
