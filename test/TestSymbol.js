'use strict';

var Symbol = require('../src/elements/Symbol').Symbol;
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(3);
        test.throws(
            function() {
                var empty = new Symbol();
            }
        );
        var symbol = new Symbol('foobar');
        var string = symbol.toString();
        test.equal(string, 'foobar', "The symbol should have been 'foobar'.");
        test.throws(
            function() {
                var bad = new Symbol('White Space');
            }
        );
        test.done();
    }
});
