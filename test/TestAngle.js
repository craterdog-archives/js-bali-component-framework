/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const debug = 0;
const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../').api(debug);


describe('Bali Nebula™ Component Framework - Angle', function() {

    describe('Test angle constructors', function() {

        it('should construct angles using literals', function() {
            expect(bali.component('~0').toString()).to.equal('~0');
            expect(bali.component('~π').toString()).to.equal('~π');
            expect(bali.component('~π($units: $radians)').toString()).to.equal('~π($units: $radians)');
            expect(bali.component('~90($units: $degrees)').toString()).to.equal('~90($units: $degrees)');
        });

        it('should construct angles that equal zero', function() {
            expect(bali.angle().isSignificant()).to.equal(false);
            expect(bali.angle().toString()).to.equal('~0');
            expect(bali.angle().toReal()).to.equal(0);
            expect(bali.angle().isNegative()).to.equal(false);
            expect(bali.angle(0).isSignificant()).to.equal(false);
            expect(bali.angle(0).toString()).to.equal('~0');
            expect(bali.angle(0).toReal()).to.equal(0);
            expect(bali.angle(0).isNegative()).to.equal(false);
            expect(bali.angle(2 * Math.PI).isSignificant()).to.equal(false);
            expect(bali.angle(2 * Math.PI).toString()).to.equal('~0');
            expect(bali.angle(2 * Math.PI).toReal()).to.equal(0);
            expect(bali.angle(2 * Math.PI).isNegative()).to.equal(false);
        });

        it('should construct angles that equal 45 degrees', function() {
            expect(bali.angle(45, bali.angle.DEGREES).isSignificant()).to.equal(true);
            expect(bali.angle(45, bali.angle.DEGREES).toString()).to.equal('~45($units: $degrees)');
            expect(bali.angle(45, bali.angle.DEGREES).toReal()).to.equal(Math.PI/4);
            expect(bali.angle(45, bali.angle.DEGREES).isNegative()).to.equal(false);
            expect(bali.angle(Math.PI/4).toReal()).to.equal(Math.PI/4);
            expect(bali.angle(Math.PI/4).toString()).to.equal('~0.7853981633974483');
            expect(bali.angle(Math.PI/4, bali.angle.RADIANS).toString()).to.equal('~0.7853981633974483($units: $radians)');
            expect(bali.angle(Math.PI/4, bali.angle.RADIANS).isNegative()).to.equal(false);
        });

        it('should construct angles that equal -45 degrees', function() {
            expect(bali.angle(-45, bali.angle.DEGREES).isSignificant()).to.equal(true);
            expect(bali.angle(-45, bali.angle.DEGREES).toString()).to.equal('~-45($units: $degrees)');
            expect(bali.angle(-45, bali.angle.DEGREES).toReal()).to.equal(-Math.PI/4);
            expect(bali.angle(-45, bali.angle.DEGREES).isNegative()).to.equal(true);
            expect(bali.angle(-Math.PI/4).toReal()).to.equal(-Math.PI/4);
            expect(bali.angle(-Math.PI/4).toString()).to.equal('~-0.7853981633974483');
            expect(bali.angle(-Math.PI/4, bali.angle.RADIANS).toString()).to.equal('~-0.7853981633974483($units: $radians)');
            expect(bali.angle(-Math.PI/4, bali.angle.RADIANS).isNegative()).to.equal(true);
        });

        it('should construct angles that equal π', function() {
            expect(bali.angle.PI.toReal()).to.equal(Math.PI);
            expect(bali.angle.PI.isNegative()).to.equal(false);
            expect(bali.angle(-Math.PI).toReal()).to.equal(Math.PI);
            expect(bali.angle(-Math.PI).isNegative()).to.equal(false);
            expect(bali.angle(180, bali.angle.DEGREES).toReal()).to.equal(Math.PI);
            expect(bali.angle(180, bali.angle.DEGREES).isNegative()).to.equal(false);
            expect(bali.angle(-180, bali.angle.DEGREES).toReal()).to.equal(Math.PI);
            expect(bali.angle(-180, bali.angle.DEGREES).toString()).to.equal('~180($units: $degrees)');
            expect(bali.angle(-180, bali.angle.DEGREES).isNegative()).to.equal(false);
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.angle.PI, bali.angle(180, bali.angle.DEGREES))).to.equal(true);
        });

        it('should throw an exception when constructing an angle with an invalid value', function() {
            expect(
                function() {
                    bali.component('~42($units: $invalid)');
                }
            ).to.throw();
            expect(
                function() {
                    bali.angle(NaN);
                }
            ).to.throw();
            expect(
                function() {
                    bali.angle(Infinity);
                }
            ).to.throw();
            expect(
                function() {
                    bali.angle(-Infinity);
                }
            ).to.throw();
        });

    });

    describe('Test angle methods', function() {

        it('should generate method results that match the expected values', function() {
            const tests = testValues.length;
            for (var i = 0; i < tests; i++) {
                const angle = testValues[i];
                expect(angle.toString()).to.equal(stringValues[i]);
                expect(angle.toReal()).to.equal(numericValues[i]);
                expect(angle.getHash()).to.exist;
            }
        });

    });

    describe('Test angle functions', function() {

        it('should perform the inverse function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.angle.inverse(bali.angle(0)), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.inverse(bali.angle(Math.PI / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.inverse(bali.angle(Math.PI / 2)), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.inverse(bali.angle(Math.PI * 3 / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.inverse(bali.angle.PI), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.inverse(bali.angle(-Math.PI / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.inverse(bali.angle(-Math.PI / 2)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.inverse(bali.angle(-Math.PI * 3 / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.inverse(bali.angle(-Math.PI)), bali.angle(0))).to.equal(true);
        });

        it('should perform the complement function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.angle.complement(bali.angle(0)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.complement(bali.angle(Math.PI / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.complement(bali.angle(Math.PI / 2)), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.complement(bali.angle(Math.PI * 3 / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.complement(bali.angle.PI), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.complement(bali.angle(-Math.PI / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.complement(bali.angle(-Math.PI / 2)), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.complement(bali.angle(-Math.PI * 3 / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.complement(bali.angle(-Math.PI)), bali.angle(-Math.PI / 2))).to.equal(true);
        });

        it('should perform the supplement function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.angle.supplement(bali.angle(0)), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.supplement(bali.angle(Math.PI / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.supplement(bali.angle(Math.PI / 2)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.supplement(bali.angle(Math.PI * 3 / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.supplement(bali.angle.PI), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.supplement(bali.angle(-Math.PI / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.supplement(bali.angle(-Math.PI / 2)), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.supplement(bali.angle(-Math.PI * 3 / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.supplement(bali.angle(-Math.PI)), bali.angle(0))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.angle.conjugate(bali.angle(0)), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.conjugate(bali.angle(Math.PI / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.conjugate(bali.angle(Math.PI / 2)), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.conjugate(bali.angle(Math.PI * 3 / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.conjugate(bali.angle.PI), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.conjugate(bali.angle(-Math.PI / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.conjugate(bali.angle(-Math.PI / 2)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.conjugate(bali.angle(-Math.PI * 3 / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.conjugate(bali.angle(-Math.PI)), bali.angle.PI)).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.angle.sum(bali.angle(0), bali.angle(0)), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(0), bali.angle(Math.PI / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(0), bali.angle(Math.PI / 2)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 3 / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(0), bali.angle.PI), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 5 / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 3 / 2)), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 7 / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(0), bali.angle(Math.PI * 2)), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(0)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI / 2)), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 3 / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle.PI), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 5 / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 3 / 2)), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 7 / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle(Math.PI / 2), bali.angle(Math.PI * 2)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle.PI, bali.angle(0)), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI / 2)), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 3 / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle.PI, bali.angle.PI), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 5 / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 3 / 2)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 7 / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.sum(bali.angle.PI, bali.angle(Math.PI * 2)), bali.angle.PI)).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.angle.difference(bali.angle(0), bali.angle(0)), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(0), bali.angle(Math.PI / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(0), bali.angle(Math.PI / 2)), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 3 / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(0), bali.angle.PI), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 5 / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 3 / 2)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 7 / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(0), bali.angle(Math.PI * 2)), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(0)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI / 2)), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 3 / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle.PI), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 5 / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 3 / 2)), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 7 / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle(Math.PI / 2), bali.angle(Math.PI * 2)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle.PI, bali.angle(0)), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI / 4)), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI / 2)), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 3 / 4)), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle.PI, bali.angle.PI), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 5 / 4)), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 3 / 2)), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 7 / 4)), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.difference(bali.angle.PI, bali.angle(Math.PI * 2)), bali.angle.PI)).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            const comparator = new bali.comparator();
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(0), -1), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(Math.PI / 4), -1), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(Math.PI / 2), -1), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(Math.PI * 3 / 4), -1), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle.PI, -1), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI / 4), -1), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI / 2), -1), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI * 3 / 4), -1), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI), -1), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(0), 0), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(Math.PI / 4), 0), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(Math.PI / 2), 0), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(Math.PI * 3 / 4), 0), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle.PI, 0), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI / 4), 0), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI / 2), 0), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI * 3 / 4), 0), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI), 0), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(0), 1), bali.angle(0))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(Math.PI / 4), 1), bali.angle(Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(Math.PI / 2), 1), bali.angle(Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(Math.PI * 3 / 4), 1), bali.angle(Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle.PI, 1), bali.angle.PI)).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI / 4), 1), bali.angle(-Math.PI / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI / 2), 1), bali.angle(-Math.PI / 2))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI * 3 / 4), 1), bali.angle(-Math.PI * 3 / 4))).to.equal(true);
            expect(comparator.areEqual(bali.angle.scaled(bali.angle(-Math.PI), 1), bali.angle.PI)).to.equal(true);
        });

        it('should run round-trip angle methods', function() {
            const comparator = new bali.comparator();
            const expectedValues = [
                bali.angle.PI,
                bali.angle(Math.PI / 2),
                bali.angle(Math.PI / 3),
                bali.component('~0.54321'),
                bali.angle(0),
                bali.component('~-0.54321'),
                bali.angle(-Math.PI),
                bali.angle(-Math.PI / 2),
                bali.angle(-Math.PI / 3)
            ];
            for (var i = 0; i < expectedValues.length; i++) {
                const angle = expectedValues[i];
                const opposite = bali.angle.sine(angle);
                const adjacent = bali.angle.cosine(angle);
                const arctangent = bali.angle.arctangent(opposite, adjacent);
                expect(comparator.areEqual(arctangent, angle)).to.equal(true);
            }
        });

    });

});


const testValues = [
    bali.angle(-0),
    bali.angle(0),
    bali.angle(),
    bali.angle.PI,
    bali.angle(-Math.PI),
    bali.angle(Math.PI / 4),
    bali.angle(-Math.PI / 4),
    bali.angle(Math.PI / 2),
    bali.angle(-Math.PI / 2),
    bali.angle(Math.PI * 3 / 4),
    bali.angle(-Math.PI * 3 / 4),
    bali.angle(Math.PI * 5 / 4),
    bali.angle(-Math.PI * 5 / 4),
    bali.angle(Math.PI * 7 / 4),
    bali.angle(-Math.PI * 7 / 4),
    bali.angle(2 * Math.PI),
    bali.angle(-2 * Math.PI)
];

const stringValues = [
    '~0',
    '~0',
    '~0',
    '~π',
    '~π',
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
    Math.PI,
    Math.PI,
    Math.PI / 4,
    -Math.PI / 4,
    Math.PI / 2,
    -Math.PI / 2,
    Math.PI * 3 / 4,
    -Math.PI * 3 / 4,
    -2.356194490192345,
    2.356194490192345,
    -0.785398163397448,
    0.785398163397448,
    0,
    0
];
