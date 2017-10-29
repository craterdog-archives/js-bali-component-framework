'use strict';

var Tag = require('../src/elements/Tag').Tag;
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(2);
        var random = new Tag();
        var expected = 'NT5PG2BXZGBGV5JTNPCP2HTM4JP6CS4X';
        var tag = new Tag(expected);
        var result = tag.toString();
        test.equal(result, expected, "The tag should have been '" + expected + "'.");
        test.throws(
            function() {
                var bad = new Tag('This is not a tag!');
            }
        );
        test.done();
    }
});
