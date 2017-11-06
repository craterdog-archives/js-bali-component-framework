'use strict';

var Angle = require('../src/elements/Angle').Angle;
var Complex = require('../src/elements/Complex').Complex;
var testCase = require('nodeunit').testCase;

module.exports = testCase({
    'Test Constructor': function(test) {
        test.expect(7);

        test.strictEqual(new Complex(NaN).toString(), Complex.NAN.toString(), "The complex should have been Complex.NAN.");
        test.strictEqual(new Complex(0).toNumber(), Complex.ZERO.toNumber(), "The complex should have been Complex.ZERO.");
        test.strictEqual(new Complex(-0).toNumber(), Complex.ZERO.toNumber(), "The complex should have been Complex.ZERO.");
        test.strictEqual(new Complex(5).toNumber(), 5, "The complex should have been 5.");
        test.strictEqual(new Complex(-5).toNumber(), -5, "The complex should have been -5.");
        test.strictEqual(new Complex(Infinity).toNumber(), Complex.INFINITY.toNumber(), "The complex should have been Complex.INFINITY.");
        test.strictEqual(new Complex(-Infinity).toNumber(), Complex.INFINITY.toNumber(), "The complex should have been Complex.INFINITY.");

        test.done();
    },
    'Test Methods': function(test) {
        var testValues = [
            Complex.NAN,
            Complex.ZERO,
            Complex.INFINITY,
            new Complex(-5),
            new Complex(5),
            new Complex(-3, 4),
            new Complex(-1, 1),
            new Complex(1, new Angle(1)),
            new Complex(5, Angle.PI),
            new Complex('(1.23e-56, -7.8e90i'),
            new Complex('(5 e^3.141592653589793i')
        ];
        var isNanValues = [
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ];
        var isZeroValues = [
            false,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ];
        var isInfiniteValues = [
            false,
            false,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            false,
            false
        ];
        var realValues = [
            NaN,
            0,
            Infinity,
            -5,
            5,
            -3,
            -1,
            0.5403023058681398,
            -5,
            1.23e-56,
            -5
        ];
        var imaginaryValues = [
            NaN,
            0,
            Infinity,
            0,
            0,
            4,
            1,
            0.8414709848078965,
            0,
            -7.8e90,
            0
        ];
        var magnitudeValues = [
            NaN,
            0,
            Infinity,
            5,
            5,
            5,
            1.4142135623730951,
            1,
            5,
            7.8e90,
            5
        ];
        var angleValues = [
            0,
            0,
            0,
            3.141592653589793,
            0,
            2.214297435588181,
            2.356194490192345,
            1,
            3.141592653589793,
            -1.5707963267948966,
            3.141592653589793
        ];
        var stringValues = [
            'NaN',
            '0',
            'Infinity',
            '(-5, 0i)',
            '(5, 0i)',
            '(-3, 4i)',
            '(-1, i)',
            '(0.5403023058681398, 0.8414709848078965i)',
            '(-5, 0i)',
            '(1.23e-56, -7.8e+90i)',
            '(-5, 0i)'
        ];
        var tests = testValues.length;
        test.expect(8 * tests);
        for (var i = 0; i < tests; i++) {
            var complex = testValues[i];
            test.strictEqual(complex.isNaN(), isNanValues[i]);
            test.strictEqual(complex.isZero(), isZeroValues[i]);
            test.strictEqual(complex.isInfinite(), isInfiniteValues[i]);
            test.strictEqual(complex.getRealPart().toString(), realValues[i].toString());
            test.strictEqual(complex.getImaginaryPart().toString(), imaginaryValues[i].toString());
            test.strictEqual(complex.getMagnitude().toString(), magnitudeValues[i].toString());
            test.strictEqual(complex.getAngle().toNumber(), angleValues[i]);
            test.strictEqual(complex.toString(), stringValues[i]);
        }

        test.done();
    }
});
