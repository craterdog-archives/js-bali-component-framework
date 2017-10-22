'use strict';

var language = require('../src/BaliLanguage');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Booleans': function(test) {
        var testValues = [false, true];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = testValues[i];
            var baliTree = language.convertToBali('boolean', jsObject);
            var jsResult = language.convertToJavaScript('boolean', baliTree);
            test.strictEqual(jsResult.toString(), jsObject.toString(), "The round trip conversion didn't match.");
        }
        test.done();
    },
    'Test Numbers': function(test) {
        var testValues = [NaN, -1.3e10, -1, 0, 5, 23.7e-12, Infinity];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = testValues[i];
            var baliTree = language.convertToBali('number', jsObject);
            var jsResult = language.convertToJavaScript('number', baliTree);
            test.strictEqual(jsResult.toString(), jsObject.toString(), "The round trip conversion didn't match.");
        }
        test.done();
    },
    'Test Probabilities': function(test) {
        var testValues = [false, 0.5, true];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = testValues[i];
            var baliTree = language.convertToBali('probability', jsObject);
            var jsResult = language.convertToJavaScript('probability', baliTree);
            test.strictEqual(jsResult.toString(), jsObject.toString(), "The round trip conversion didn't match.");
        }
        test.done();
    },
    'Test Symbols': function(test) {
        var testValues = ['$f', '$foo', '$foobar'];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = testValues[i];
            var baliTree = language.convertToBali('symbol', jsObject);
            var jsResult = language.convertToJavaScript('symbol', baliTree);
            test.strictEqual(jsResult.toString(), jsObject.toString(), "The round trip conversion didn't match.");
        }
        test.done();
    },
    'Test Texts': function(test) {
        var testValues = ['', '"', '""', '"Hello World!"', '\nIt\'s a "text block"...\n'];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = testValues[i];
            var baliTree = language.convertToBali('string', jsObject);
            var jsResult = language.convertToJavaScript('string', baliTree);
            test.strictEqual(jsResult.toString(), jsObject.toString(), "The round trip conversion didn't match.");
        }
        test.done();
    }
});
