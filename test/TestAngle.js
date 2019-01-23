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
const utilities = require('../src/utilities');
const elements = require('../src/elements');
const composites = require('../src/composites');
const collections = require('../src/collections');
const Parser = require('../src/utilities/Parser').Parser;
const parser = new Parser(true);
/* global NaN, Infinity */

describe('Bali Component Framework™', function() {

    describe('Test angle constructors', function() {

        it('should construct using literals', function() {
            const degrees = new composites.Parameters(collections.Catalog.fromSequential({$units: '$degrees'}));
            const radians = new composites.Parameters(collections.Catalog.fromSequential({$units: '$radians'}));
            expect(elements.Angle.fromLiteral('~0').toNumber()).to.equal(0);
            expect(elements.Angle.fromLiteral('~-pi').toNumber()).to.equal(utilities.precision.PI);
            expect(elements.Angle.fromLiteral('~pi', radians).toNumber()).to.equal(utilities.precision.PI);
            expect(elements.Angle.fromLiteral('~90', degrees).toNumber()).to.equal(utilities.precision.quotient(utilities.precision.PI, 2));
            expect(parser.parseDocument('~pi($units: $radians)').toNumber()).to.equal(utilities.precision.PI);
            expect(parser.parseDocument('~90($units: $degrees)').toNumber()).to.equal(utilities.precision.quotient(utilities.precision.PI, 2));
        });

        it('should construct and equal zero', function() {
            expect(new elements.Angle().toNumber()).to.equal(0);
            expect(new elements.Angle(0).toNumber()).to.equal(0);
            expect(new elements.Angle(-0).toNumber()).to.equal(0);
            expect(new elements.Angle(2 * utilities.precision.PI).toNumber()).to.equal(0);
        });

        it('should construct and equal pi', function() {
            expect(new elements.Angle(utilities.precision.PI).toNumber()).to.equal(utilities.precision.PI);
            expect(new elements.Angle(-utilities.precision.PI).toNumber()).to.equal(utilities.precision.PI);
        });

        it('should construct and equal pi/2', function() {
            expect(new elements.Angle(utilities.precision.PI / 2).toNumber()).to.equal(utilities.precision.PI / 2);
        });

        it('should default to zero', function() {
            expect(new elements.Angle(NaN).toNumber()).to.equal(0);
            expect(new elements.Angle(Infinity).toNumber()).to.equal(0);
            expect(new elements.Angle(-Infinity).toNumber()).to.equal(0);
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
            const type = new elements.Angle(0).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#8SC89QY4LM68LTGPXYMBR6C0LR324L3P,$version:v1,$digest:none]>');
        });

    });

    describe('Test angle functions', function() {

        it('should perform the inverse function correctly', function() {
            expect(elements.Angle.inverse(new elements.Angle(0)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(-utilities.precision.PI / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(-utilities.precision.PI / 2)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(-utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.inverse(new elements.Angle(-utilities.precision.PI)).isEqualTo(new elements.Angle(0))).to.equal(true);
        });

        it('should perform the complement function correctly', function() {
            expect(elements.Angle.complement(new elements.Angle(0)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(-utilities.precision.PI / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(-utilities.precision.PI / 2)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(-utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.complement(new elements.Angle(-utilities.precision.PI)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
        });

        it('should perform the supplement function correctly', function() {
            expect(elements.Angle.supplement(new elements.Angle(0)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(-utilities.precision.PI / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(-utilities.precision.PI / 2)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(-utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.supplement(new elements.Angle(-utilities.precision.PI)).isEqualTo(new elements.Angle(0))).to.equal(true);
        });

        it('should perform the conjugate function correctly', function() {
            expect(elements.Angle.conjugate(new elements.Angle(0)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(-utilities.precision.PI / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(-utilities.precision.PI / 2)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(-utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.conjugate(new elements.Angle(-utilities.precision.PI)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
        });

        it('should perform the sum function correctly', function() {
            expect(elements.Angle.sum(new elements.Angle(0), new elements.Angle(0)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(0), new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(0), new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(0), new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 5 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 3 / 2)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 7 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 2)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(0)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 5 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 3 / 2)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 7 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 2)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI), new elements.Angle(0)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 5 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 3 / 2)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 7 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.sum(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 2)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
        });

        it('should perform the difference function correctly', function() {
            expect(elements.Angle.difference(new elements.Angle(0), new elements.Angle(0)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(0), new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(0), new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(0), new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 5 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 3 / 2)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 7 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(0), new elements.Angle(utilities.precision.PI * 2)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(0)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 5 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 3 / 2)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 7 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI / 2), new elements.Angle(utilities.precision.PI * 2)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI), new elements.Angle(0)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI / 4)).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI / 2)).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 3 / 4)).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI)).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 5 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 3 / 2)).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 7 / 4)).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.difference(new elements.Angle(utilities.precision.PI), new elements.Angle(utilities.precision.PI * 2)).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
        });

        it('should perform the scaled function correctly', function() {
            expect(elements.Angle.scaled(new elements.Angle(0), -1).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI / 4), -1).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI / 2), -1).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI * 3 / 4), -1).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI), -1).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI / 4), -1).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI / 2), -1).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI * 3 / 4), -1).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI), -1).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(0), 0).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI / 4), 0).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI / 2), 0).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI * 3 / 4), 0).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI), 0).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI / 4), 0).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI / 2), 0).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI * 3 / 4), 0).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI), 0).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(0), 1).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI / 4), 1).isEqualTo(new elements.Angle(utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI / 2), 1).isEqualTo(new elements.Angle(utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI * 3 / 4), 1).isEqualTo(new elements.Angle(utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI), 1).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI / 4), 1).isEqualTo(new elements.Angle(-utilities.precision.PI / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI / 2), 1).isEqualTo(new elements.Angle(-utilities.precision.PI / 2))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI * 3 / 4), 1).isEqualTo(new elements.Angle(-utilities.precision.PI * 3 / 4))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI), 1).isEqualTo(new elements.Angle(utilities.precision.PI))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(0), Infinity).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI / 4), Infinity).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI / 2), Infinity).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI * 3 / 4), Infinity).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(utilities.precision.PI), Infinity).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI / 4), Infinity).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI / 2), Infinity).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI * 3 / 4), Infinity).isEqualTo(new elements.Angle(0))).to.equal(true);
            expect(elements.Angle.scaled(new elements.Angle(-utilities.precision.PI), Infinity).isEqualTo(new elements.Angle(0))).to.equal(true);
        });

        it('should run round-trip angle methods', function() {
            const expectedValues = [
                new elements.Angle(utilities.precision.PI),
                new elements.Angle(utilities.precision.PI / 2),
                new elements.Angle(utilities.precision.PI / 3),
                new elements.Angle('~0.54321'),
                new elements.Angle(0),
                new elements.Angle('~-0.54321'),
                new elements.Angle(-utilities.precision.PI),
                new elements.Angle(-utilities.precision.PI / 2),
                new elements.Angle(-utilities.precision.PI / 3)
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
    new elements.Angle(-0),
    new elements.Angle(0),
    new elements.Angle(),
    new elements.Angle(utilities.precision.PI),
    new elements.Angle(-utilities.precision.PI),
    new elements.Angle(utilities.precision.PI / 4),
    new elements.Angle(-utilities.precision.PI / 4),
    new elements.Angle(utilities.precision.PI / 2),
    new elements.Angle(-utilities.precision.PI / 2),
    new elements.Angle(utilities.precision.PI * 3 / 4),
    new elements.Angle(-utilities.precision.PI * 3 / 4),
    new elements.Angle(utilities.precision.PI * 5 / 4),
    new elements.Angle(-utilities.precision.PI * 5 / 4),
    new elements.Angle(utilities.precision.PI * 7 / 4),
    new elements.Angle(-utilities.precision.PI * 7 / 4),
    new elements.Angle(2 * utilities.precision.PI),
    new elements.Angle(-2 * utilities.precision.PI)
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
    utilities.precision.PI,
    utilities.precision.PI,
    utilities.precision.PI / 4,
    -utilities.precision.PI / 4,
    utilities.precision.PI / 2,
    -utilities.precision.PI / 2,
    utilities.precision.PI * 3 / 4,
    -utilities.precision.PI * 3 / 4,
    -2.356194490192345,
    2.356194490192345,
    -0.785398163397448,
    0.785398163397448,
    0,
    0
];
