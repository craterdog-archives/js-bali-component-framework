'use strict';

var elements = require('../src/elements');
var language = require('../src/BaliLanguage');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Binaries': function(test) {
        var testValues = ['', 'Pretend this is a binary string.'];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = new elements.Binary(testValues[i]);
            var baliDocument = language.javaScriptToDocument('binary', jsObject);
            var jsResult = language.documentToJavaScript('binary', baliDocument);
            test.strictEqual(jsResult.toString(), jsObject.toString(), "The round trip conversion didn't match.");
        }
        test.done();
    },
    'Test Booleans': function(test) {
        var testValues = [false, true];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = new elements.Probability(testValues[i]);
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
        var testValues = [0, 0.5, 1];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = new elements.Probability(testValues[i]);
            var baliDocument = language.javaScriptToDocument('probability', jsObject);
            var jsResult = language.documentToJavaScript('probability', baliDocument);
            test.strictEqual(jsResult.toString(), jsObject.toString(), "The round trip conversion didn't match.");
        }
        test.done();
    },
    'Test Symbols': function(test) {
        var testValues = ['f', 'foo', 'foobar'];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = new elements.Symbol(testValues[i]);
            var baliKey = language.javaScriptToKey('symbol', jsObject);
            var jsResult = language.keyToJavaScript('symbol', baliKey);
            test.strictEqual(jsResult.toString(), jsObject.toString(), "The round trip conversion didn't match.");
        }
        test.done();
    },
    'Test Tags': function(test) {
        var testValues = [
            'FC',
            'FKMH',
            '3B5RK',
            'NH8JSKR',
            'QCJYZX49',
            'TFDJFTY23R',
            '6RZ4L37GR0N0',
            'THHHVX7DHPDS2',
            'C6A614V5X3WCHK0',
            'T52KBYZWMYKAQ5ZQ',
            '65BP5QST62JPSF3W6M',
            '3G2G0XSHRMGH58T643D0',
            'N5VJ7462R4FF2KL28YGJP',
            'G10J3CKQD26S1LY5MPYVYAH',
            '27F8F53R2W7NQK60GWZ0SD2M',
            'SG24PG9HXBY4HPQT6YHTD1HZM4',
            'R57A45VN55PTW2CGMLMYBNG5NMXH',
            '0M1XQ65PLKN1VFSS5BB8JQZZWR63K',
            'QWNCJ3CJ7B7Z8G6HBJDR6QA99DRR30H',
            'H18AAZGKGG95KG1KVCR7M5KLD2V256SP',
            'P1JYKSZ3JHG2B1CLDPLYGW3W7N67C101YH',
            'Y12P7K3K9R11D6171A4J38TLJZ8XRQ4K6BX0',
            'YBTJ5RLGNMGLFPTCMM2V689VFT44MS27YWHQ8',
            'GJX67YJSTYX5ZNF8S71C6CJ4GN8N3SF3Q5VFSR8',
            'BVY61JPZN2LLX86F2ABAPN3QPB6ZHL0B5MJ86G61',
            '2ZXGM84GF1X2HFC8PLK1NH738HSH76RGY4WT4BWWF8',
            'CNZD8FRJ5VYMP2YM052C5DA0CGYW9M88VSDS7NGC8TN0',
            'L07VAKLZ0C8N5ZQAXTKFMZGHQF5C8CFQLTWDBLG2RL5MF'
        ];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = new elements.Tag(testValues[i]);
            var baliKey = language.javaScriptToKey('tag', jsObject);
            var jsResult = language.keyToJavaScript('tag', baliKey);
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
    'Test Versions': function(test) {
        var testValues = ['', '1', '2.3', '4.5.6'];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = new elements.Version(testValues[i]);
            var baliKey = language.javaScriptToKey('version', jsObject);
            var jsResult = language.keyToJavaScript('version', baliKey);
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
    },
    'Test Tables': function(test) {
        var testValues = [{}, {foo: 'bar'}, {one: 1, two: 2}, {nested: {alpha: 'a', beta: 'b'}}];
        var tests = testValues.length;
        test.expect(tests);
        for (var i = 0; i < tests; i++) {
            var jsObject = testValues[i];
            var baliExpression = language.javaScriptToExpression('object', jsObject);
            var jsResult = language.expressionToJavaScript('object', baliExpression);
            test.deepEqual(jsResult, jsObject, "The round trip conversion didn't match.");
        }
        test.done();
    }
});
