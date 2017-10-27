'use strict';

var security = require('../src/utilities/SecurityUtilities');
var testCase = require('nodeunit').testCase;

module.exports = testCase({
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
