/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const mocha = require('mocha');
const expect = require('chai').expect;
const precision = require('../src/utilities/Precision');
const elements = require('../src/elements');
/* global NaN, Infinity */

describe('Bali Component Framework™', function() {

    describe('Test angle constructors', function() {

        it('should construct and equal zero', function() {
            expect(new elements.Angle().toNumber()).to.equal(elements.Angle.ZERO.toNumber());
            expect(new elements.Angle(0).toNumber()).to.equal(elements.Angle.ZERO.toNumber());
            expect(new elements.Angle(-0).toNumber()).to.equal(elements.Angle.ZERO.toNumber());
            expect(new elements.Angle(2 * precision.PI).toNumber()).to.equal(elements.Angle.ZERO.toNumber());
        });

        it('should construct and equal pi', function() {
            expect(new elements.Angle('~pi').toNumber()).to.equal(elements.Angle.PI.toNumber());
            expect(new elements.Angle('~-pi').toNumber()).to.equal(elements.Angle.PI.toNumber());
            expect(new elements.Angle(precision.PI).toNumber()).to.equal(elements.Angle.PI.toNumber());
            expect(new elements.Angle(-precision.PI).toNumber()).to.equal(elements.Angle.PI.toNumber());
        });

        it('should construct and equal pi/2', function() {
            expect(new elements.Angle(precision.PI / 2).toNumber()).to.equal(precision.PI / 2);
        });

        it('should default to zero', function() {
            expect(new elements.Angle(NaN)).to.equal(elements.Angle.ZERO);
            expect(new elements.Angle(Infinity)).to.equal(elements.Angle.ZERO);
            expect(new elements.Angle(-Infinity)).to.equal(elements.Angle.ZERO);
        });

    });

    describe('Test angle methods', function() {

        it('should generate method results that match the expected values', function() {
            const tests = testValues.length;
            for (var i = 0; i < tests; i++) {
                const angle = testValues[i];
                expect(angle.toString()).to.equal(stringValues[i]);
                expect(angle.toNumber()).to.equal(numericValues[i]);
            }
        });

        it('should return the correct type', function() {
            const type = elements.Angle.PI.getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#8SC89QY4LM68LTGPXYMBR6C0LR324L3P,$version:v1,$digest:none]>');
        });

    });

    describe('Test angle functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(elements.Angle.inverse(elements.Angle.ZERO)).to.equal(elements.Angle.PI);  // should use constant values
            expect(elements.Angle.inverse(new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(precision.PI / 2)).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.inverse(elements.Angle.PI)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.inverse(new elements.Angle(-precision.PI / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(-precision.PI / 2)).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(-precision.PI * 3 / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(-precision.PI)).isEqualTo(new elements.Angle(0))).to.equal(true);
        });

        it('should perform the complement function correctly', function() {
            expect(elements.Angle.complement(elements.Angle.ZERO).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(precision.PI / 2)).isEqualTo(elements.Angle.ZERO)).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.complement(elements.Angle.PI).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(-precision.PI / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(-precision.PI / 2)).isEqualTo(elements.Angle.PI)).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(-precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(-precision.PI)).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
        });

        it('should perform the supplement function correctly', function() {
            expect(elements.Angle.supplement(elements.Angle.ZERO)).to.equal(elements.Angle.PI);  // should use constant values
            expect(elements.Angle.supplement(new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(precision.PI / 2)).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.supplement(elements.Angle.PI)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.supplement(new elements.Angle(-precision.PI / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(-precision.PI / 2)).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(-precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(-precision.PI)).isEqualTo(elements.Angle.ZERO)).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(elements.Angle.conjugate(elements.Angle.ZERO)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.conjugate(new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(precision.PI / 2)).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.conjugate(elements.Angle.PI)).to.equal(elements.Angle.PI);  // should use constant values
            expect(elements.Angle.conjugate(new elements.Angle(-precision.PI / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(-precision.PI / 2)).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(-precision.PI * 3 / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(-precision.PI)).isEqualTo(new elements.Angle(precision.PI))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(elements.Angle.sum(elements.Angle.ZERO, elements.Angle.ZERO)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.sum(elements.Angle.ZERO, new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.ZERO, new elements.Angle(precision.PI / 2)).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.ZERO, new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.ZERO, elements.Angle.PI)).to.equal(elements.Angle.PI);  // should use constant values
            expect(elements.Angle.sum(elements.Angle.ZERO, new elements.Angle(precision.PI * 5 / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.ZERO, new elements.Angle(precision.PI * 3 / 2)).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.ZERO, new elements.Angle(precision.PI * 7 / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.ZERO, new elements.Angle(precision.PI * 2))).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.sum(new elements.Angle(precision.PI / 2), elements.Angle.ZERO).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI / 2)).isEqualTo(elements.Angle.PI)).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(precision.PI / 2), elements.Angle.PI).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 5 / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 3 / 2)).isEqualTo(elements.Angle.ZERO)).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 7 / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 2)).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.PI, elements.Angle.ZERO)).to.equal(elements.Angle.PI);  // should use constant values
            expect(elements.Angle.sum(elements.Angle.PI, new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.PI, new elements.Angle(precision.PI / 2)).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.PI, new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.PI, elements.Angle.PI)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.sum(elements.Angle.PI, new elements.Angle(precision.PI * 5 / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.PI, new elements.Angle(precision.PI * 3 / 2)).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.PI, new elements.Angle(precision.PI * 7 / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(elements.Angle.PI, new elements.Angle(precision.PI * 2))).to.equal(elements.Angle.PI);  // should use constant values
        });

        it('should perform the difference function correctly', function() {
            expect(elements.Angle.difference(elements.Angle.ZERO, elements.Angle.ZERO)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.difference(elements.Angle.ZERO, new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.ZERO, new elements.Angle(precision.PI / 2)).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.ZERO, new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.ZERO, elements.Angle.PI)).to.equal(elements.Angle.PI);  // should use constant values
            expect(elements.Angle.difference(elements.Angle.ZERO, new elements.Angle(precision.PI * 5 / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.ZERO, new elements.Angle(precision.PI * 3 / 2)).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.ZERO, new elements.Angle(precision.PI * 7 / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.ZERO, new elements.Angle(precision.PI * 2))).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.difference(new elements.Angle(precision.PI / 2), elements.Angle.ZERO).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI / 2)).isEqualTo(elements.Angle.ZERO)).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(precision.PI / 2), elements.Angle.PI).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 5 / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 3 / 2)).isEqualTo(elements.Angle.PI)).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 7 / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(precision.PI / 2), new elements.Angle(precision.PI * 2)).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.PI, elements.Angle.ZERO)).to.equal(elements.Angle.PI);  // should use constant values
            expect(elements.Angle.difference(elements.Angle.PI, new elements.Angle(precision.PI / 4)).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.PI, new elements.Angle(precision.PI / 2)).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.PI, new elements.Angle(precision.PI * 3 / 4)).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.PI, elements.Angle.PI)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.difference(elements.Angle.PI, new elements.Angle(precision.PI * 5 / 4)).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.PI, new elements.Angle(precision.PI * 3 / 2)).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.PI, new elements.Angle(precision.PI * 7 / 4)).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(elements.Angle.PI, new elements.Angle(precision.PI * 2))).to.equal(elements.Angle.PI);  // should use constant values
        });

        it('should perform the scaled function correctly', function() {
            expect(elements.Angle.scaled(elements.Angle.ZERO, -1)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(precision.PI / 4), -1).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(precision.PI / 2), -1).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(precision.PI * 3 / 4), -1).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.scaled(elements.Angle.PI, -1)).to.equal(elements.Angle.PI);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI / 4), -1).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI / 2), -1).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI * 3 / 4), -1).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI), -1).isEqualTo(elements.Angle.PI)).to.equal(true);
            expect(elements.Angle.scaled(elements.Angle.ZERO, 0)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(precision.PI / 4), 0)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(precision.PI / 2), 0)).to.equal(elements.Angle.ZERO);  // should use constant values)
            expect(elements.Angle.scaled(new elements.Angle(precision.PI * 3 / 4), 0)).to.equal(elements.Angle.ZERO);  // should use constant values)
            expect(elements.Angle.scaled(elements.Angle.PI, 0)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI / 4), 0)).to.equal(elements.Angle.ZERO);  // should use constant values)
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI / 2), 0)).to.equal(elements.Angle.ZERO);  // should use constant values)
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI * 3 / 4), 0)).to.equal(elements.Angle.ZERO);  // should use constant values)
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI), 0)).to.equal(elements.Angle.ZERO);  // should use constant values)
            expect(elements.Angle.scaled(elements.Angle.ZERO, 1)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(precision.PI / 4), 1).isEqualTo(new elements.Angle(precision.PI / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(precision.PI / 2), 1).isEqualTo(new elements.Angle(precision.PI / 2))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(precision.PI * 3 / 4), 1).isEqualTo(new elements.Angle(precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.scaled(elements.Angle.PI, 1)).to.equal(elements.Angle.PI);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI / 4), 1).isEqualTo(new elements.Angle(-precision.PI / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI / 2), 1).isEqualTo(new elements.Angle(-precision.PI / 2))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI * 3 / 4), 1).isEqualTo(new elements.Angle(-precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI), 1).isEqualTo(elements.Angle.PI)).to.equal(true);
            expect(elements.Angle.scaled(elements.Angle.ZERO, Infinity)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(precision.PI / 4), Infinity)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(precision.PI / 2), Infinity)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(precision.PI * 3 / 4), Infinity)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(elements.Angle.PI, Infinity)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI / 4), Infinity)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI / 2), Infinity)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI * 3 / 4), Infinity)).to.equal(elements.Angle.ZERO);  // should use constant values
            expect(elements.Angle.scaled(new elements.Angle(-precision.PI), Infinity)).to.equal(elements.Angle.ZERO);  // should use constant values
        });

        it('should run round-trip angle methods', function() {
            const expectedValues = [
                elements.Angle.PI,
                new elements.Angle(precision.PI / 2),
                new elements.Angle(precision.PI / 3),
                new elements.Angle('~0.54321'),
                elements.Angle.ZERO,
                new elements.Angle('~-0.54321'),
                new elements.Angle(-precision.PI),
                new elements.Angle(-precision.PI / 2),
                new elements.Angle(-precision.PI / 3)
            ];
            for (var i = 0; i < expectedValues.length; i++) {
                const angle = expectedValues[i];
                const opposite = elements.Angle.sine(angle);
                const adjacent = elements.Angle.cosine(angle);
                const arctangent = elements.Angle.arctangent(opposite, adjacent);
                expect(arctangent.isEqualTo(angle)).to.equal(true);
            }
        });

    });

});


const testValues = [
    elements.Angle.ZERO,
    new elements.Angle(-0),
    new elements.Angle(0),
    new elements.Angle('~0'),
    new elements.Angle(),
    elements.Angle.PI,
    new elements.Angle('~pi'),
    new elements.Angle('~-pi'),
    new elements.Angle(precision.PI),
    new elements.Angle(-precision.PI),
    new elements.Angle(precision.PI / 4),
    new elements.Angle(-precision.PI / 4),
    new elements.Angle(precision.PI / 2),
    new elements.Angle(-precision.PI / 2),
    new elements.Angle(precision.PI * 3 / 4),
    new elements.Angle(-precision.PI * 3 / 4),
    new elements.Angle(precision.PI * 5 / 4),
    new elements.Angle(-precision.PI * 5 / 4),
    new elements.Angle(precision.PI * 7 / 4),
    new elements.Angle(-precision.PI * 7 / 4),
    new elements.Angle(2 * precision.PI),
    new elements.Angle(-2 * precision.PI)
];

const stringValues = [
    '~0',
    '~0',
    '~0',
    '~0',
    '~0',
    '~pi',
    '~pi',
    '~pi',
    '~pi',
    '~pi',
    '~0.7853981633974483',
    '~-0.7853981633974483',
    '~1.5707963267948966',
    '~-1.5707963267948966',
    '~2.356194490192345',
    '~-2.356194490192345',
    '~-2.356194490192345',
    '~2.356194490192345',
    '~-0.785398163397448',
    '~0.785398163397448',
    '~0',
    '~0'
];

const numericValues = [
    0,
    0,
    0,
    0,
    0,
    precision.PI,
    precision.PI,
    precision.PI,
    precision.PI,
    precision.PI,
    precision.PI / 4,
    -precision.PI / 4,
    precision.PI / 2,
    -precision.PI / 2,
    precision.PI * 3 / 4,
    -precision.PI * 3 / 4,
    -2.356194490192345,
    2.356194490192345,
    -0.785398163397448,
    0.785398163397448,
    0,
    0
];
