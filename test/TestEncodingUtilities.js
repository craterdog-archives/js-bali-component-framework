'use strict';

var codex = require('../src/utilities/EncodingUtilities');
var security = require('../src/utilities/SecurityUtilities');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Base2': function(test) {
        test.expect(21);
        for (var i = 0; i < 21; i++) {
            var bytes = security.generateRandomBytes(i);
            var base2 = codex.base2Encode(bytes);
            var decoded = codex.base2Decode(base2);
            test.strictEqual(decoded, bytes, 'The base 2 round trip encoding failed for: ' + base2);
        }
        test.done();
    },
    'Test Base16': function(test) {
        test.expect(81);
        for (var i = 0; i < 81; i++) {
            var bytes = security.generateRandomBytes(i);
            var base16 = codex.base16Encode(bytes);
            var decoded = codex.base16Decode(base16);
            test.strictEqual(decoded, bytes, 'The base 16 round trip encoding failed for: ' + base16);
        }
        test.done();
    },
    'Test Base32': function(test) {
        test.expect(101);
        for (var i = 0; i < 101; i++) {
            var bytes = security.generateRandomBytes(i);
            var base32 = codex.base32Encode(bytes);
            var decoded = codex.base32Decode(base32);
            test.strictEqual(decoded, bytes, 'The base 32 round trip encoding failed for: ' + base32);
        }
        test.done();
    }
});
