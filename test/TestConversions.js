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
            var baliDocument = language.javaScriptToDocument('boolean', jsObject);
            var jsResult = language.documentToJavaScript('boolean', baliDocument);
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
            var baliExpression = language.javaScriptToExpression('number', jsObject);
            var jsResult = language.expressionToJavaScript('number', baliExpression);
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
            var baliDocument = language.javaScriptToDocument('probability', jsObject);
            var jsResult = language.documentToJavaScript('probability', baliDocument);
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
            var baliKey = language.javaScriptToKey('symbol', jsObject);
            var jsResult = language.keyToJavaScript('symbol', baliKey);
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
            var baliKey = language.javaScriptToKey('string', jsObject);
            var jsResult = language.keyToJavaScript('string', baliKey);
            test.strictEqual(jsResult.toString(), jsObject.toString(), "The round trip conversion didn't match.");
        }
        test.done();
    },
    'Test Collections': function(test) {
        var testValues = [[], [1], ['one', 'two'], [[1, 2, 3], [4, 5]]];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = testValues[i];
            var baliExpression = language.javaScriptToExpression('array', jsObject);
            var jsResult = language.expressionToJavaScript('array', baliExpression);
            test.deepEqual(jsResult, jsObject, "The round trip conversion didn't match.");
        }
        test.done();
    }
});
