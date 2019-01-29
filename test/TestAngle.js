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
const bali = require('../');
/* global NaN, Infinity */

describe('Bali Component Framework™', function() {

    describe('Test angle constructors', function() {

        it('should construct using literals', function() {
            expect(bali.angle('~0').toNumber()).to.equal(0);
            expect(bali.angle('~pi').toNumber()).to.equal(bali.utilities.precision.PI);
            expect(bali.angle('~pi', bali.radians).toNumber()).to.equal(bali.utilities.precision.PI);
            expect(bali.angle('~90', bali.degrees).toNumber()).to.equal(bali.utilities.precision.quotient(bali.utilities.precision.PI, 2));
            expect(bali.angle('~pi($units: $radians)').toNumber()).to.equal(bali.utilities.precision.PI);
            expect(bali.angle('~90($units: $degrees)').toNumber()).to.equal(bali.utilities.precision.quotient(bali.utilities.precision.PI, 2));
        });

        it('should construct and equal zero', function() {
            expect(bali.angle().toNumber()).to.equal(0);
            expect(bali.angle(0).toNumber()).to.equal(0);
            expect(bali.angle(-0).toNumber()).to.equal(0);
            expect(bali.angle(2 * bali.utilities.precision.PI).toNumber()).to.equal(0);
        });

        it('should construct and equal pi', function() {
            expect(bali.angle(bali.utilities.precision.PI).toNumber()).to.equal(bali.utilities.precision.PI);
            expect(bali.angle(-bali.utilities.precision.PI).toNumber()).to.equal(bali.utilities.precision.PI);
        });

        it('should construct and equal pi/2', function() {
            expect(bali.angle(bali.utilities.precision.PI / 2).toNumber()).to.equal(bali.utilities.precision.PI / 2);
        });

        it('should default to zero', function() {
            expect(bali.angle(NaN).toNumber()).to.equal(0);
            expect(bali.angle(Infinity).toNumber()).to.equal(0);
            expect(bali.angle(-Infinity).toNumber()).to.equal(0);
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
            const type = bali.angle(0).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#8SC89QY4LM68LTGPXYMBR6C0LR324L3P,$version:v1,$digest:none]>');
        });

    });

    describe('Test angle functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(bali.angle.inverse(bali.angle(0)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(-bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(-bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(-bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.inverse(bali.angle(-bali.utilities.precision.PI)).isEqualTo(bali.angle(0))).to.equal(true);
        });

        it('should perform the complement function correctly', function() {
            expect(bali.angle.complement(bali.angle(0)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.complement(bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.complement(bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.complement(bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.complement(bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.complement(bali.angle(-bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.complement(bali.angle(-bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.complement(bali.angle(-bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.complement(bali.angle(-bali.utilities.precision.PI)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
        });

        it('should perform the supplement function correctly', function() {
            expect(bali.angle.supplement(bali.angle(0)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(-bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(-bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(-bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.supplement(bali.angle(-bali.utilities.precision.PI)).isEqualTo(bali.angle(0))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(bali.angle.conjugate(bali.angle(0)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(-bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(-bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(-bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.conjugate(bali.angle(-bali.utilities.precision.PI)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(bali.angle.sum(bali.angle(0), bali.angle(0)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(bali.utilities.precision.PI * 5 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(bali.utilities.precision.PI * 3 / 2)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(bali.utilities.precision.PI * 7 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(0), bali.angle(bali.utilities.precision.PI * 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI / 2), bali.angle(0)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 5 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 3 / 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 7 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 2)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI), bali.angle(0)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 5 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 3 / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 7 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.sum(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 2)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(bali.angle.difference(bali.angle(0), bali.angle(0)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(bali.utilities.precision.PI * 5 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(bali.utilities.precision.PI * 3 / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(bali.utilities.precision.PI * 7 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(0), bali.angle(bali.utilities.precision.PI * 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI / 2), bali.angle(0)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 5 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 3 / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 7 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI / 2), bali.angle(bali.utilities.precision.PI * 2)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI), bali.angle(0)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI / 2)).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 3 / 4)).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI)).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 5 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 3 / 2)).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 7 / 4)).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.difference(bali.angle(bali.utilities.precision.PI), bali.angle(bali.utilities.precision.PI * 2)).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(bali.angle.scaled(bali.angle(0), -1).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI / 4), -1).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI / 2), -1).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI * 3 / 4), -1).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI), -1).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI / 4), -1).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI / 2), -1).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI * 3 / 4), -1).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI), -1).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(0), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI / 4), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI / 2), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI * 3 / 4), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI / 4), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI / 2), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI * 3 / 4), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI), 0).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(0), 1).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI / 4), 1).isEqualTo(bali.angle(bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI / 2), 1).isEqualTo(bali.angle(bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI * 3 / 4), 1).isEqualTo(bali.angle(bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI), 1).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI / 4), 1).isEqualTo(bali.angle(-bali.utilities.precision.PI / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI / 2), 1).isEqualTo(bali.angle(-bali.utilities.precision.PI / 2))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI * 3 / 4), 1).isEqualTo(bali.angle(-bali.utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI), 1).isEqualTo(bali.angle(bali.utilities.precision.PI))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(0), Infinity).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI / 4), Infinity).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI / 2), Infinity).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI * 3 / 4), Infinity).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(bali.utilities.precision.PI), Infinity).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI / 4), Infinity).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI / 2), Infinity).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI * 3 / 4), Infinity).isEqualTo(bali.angle(0))).to.equal(true);
            expect(bali.angle.scaled(bali.angle(-bali.utilities.precision.PI), Infinity).isEqualTo(bali.angle(0))).to.equal(true);
        });

        it('should run round-trip angle methods', function() {
            const expectedValues = [
                bali.angle(bali.utilities.precision.PI),
                bali.angle(bali.utilities.precision.PI / 2),
                bali.angle(bali.utilities.precision.PI / 3),
                bali.angle('~0.54321'),
                bali.angle(0),
                bali.angle('~-0.54321'),
                bali.angle(-bali.utilities.precision.PI),
                bali.angle(-bali.utilities.precision.PI / 2),
                bali.angle(-bali.utilities.precision.PI / 3)
            ];
            for (var i = 0; i < expectedValues.length; i++) {
                const angle = expectedValues[i];
                const opposite = bali.angle.sine(angle);
                const adjacent = bali.angle.cosine(angle);
                const arctangent = bali.angle.arctangent(opposite, adjacent);
                expect(arctangent.isEqualTo(angle)).to.equal(true);
            }
        });

    });

});


const testValues = [
    bali.angle(-0),
    bali.angle(0),
    bali.angle(),
    bali.angle(bali.utilities.precision.PI),
    bali.angle(-bali.utilities.precision.PI),
    bali.angle(bali.utilities.precision.PI / 4),
    bali.angle(-bali.utilities.precision.PI / 4),
    bali.angle(bali.utilities.precision.PI / 2),
    bali.angle(-bali.utilities.precision.PI / 2),
    bali.angle(bali.utilities.precision.PI * 3 / 4),
    bali.angle(-bali.utilities.precision.PI * 3 / 4),
    bali.angle(bali.utilities.precision.PI * 5 / 4),
    bali.angle(-bali.utilities.precision.PI * 5 / 4),
    bali.angle(bali.utilities.precision.PI * 7 / 4),
    bali.angle(-bali.utilities.precision.PI * 7 / 4),
    bali.angle(2 * bali.utilities.precision.PI),
    bali.angle(-2 * bali.utilities.precision.PI)
];

const stringValues = [
    '~0',
    '~0',
    '~0',
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
    bali.utilities.precision.PI,
    bali.utilities.precision.PI,
    bali.utilities.precision.PI / 4,
    -bali.utilities.precision.PI / 4,
    bali.utilities.precision.PI / 2,
    -bali.utilities.precision.PI / 2,
    bali.utilities.precision.PI * 3 / 4,
    -bali.utilities.precision.PI * 3 / 4,
    -2.356194490192345,
    2.356194490192345,
    -0.785398163397448,
    0.785398163397448,
    0,
    0
];
