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
const elements = require('../src/elements');
const collections = require('../src/collections');

describe('Bali Component Framework™', function() {

    describe('Test pattern constructors', function() {

        it('should construct using literals', function() {
            expect(elements.Pattern.fromLiteral('none').toLiteral()).to.equal('none');
            expect(elements.Pattern.fromLiteral('any').toLiteral()).to.equal('any');
        });

        it('should generate a default none pattern', function() {
            expect(new elements.Pattern().isEqualTo(elements.Pattern.fromLiteral('none'))).to.equal(true);
            expect(new elements.Pattern().matches(elements.Pattern.fromLiteral('none'))).to.equal(false);
            expect(new elements.Pattern().matches(elements.Pattern.fromLiteral('any'))).to.equal(true);
            expect(new elements.Text('any').matches(new elements.Pattern())).to.equal(false);
            expect(new elements.Text('none').matches(new elements.Pattern())).to.equal(false);
            expect(new elements.Text('foobar').matches(new elements.Pattern())).to.equal(false);
        });

        it('should generate an explicit none pattern', function() {
            expect(elements.Pattern.fromLiteral('none').isEqualTo(elements.Pattern.fromLiteral('none'))).to.equal(true);
            expect(elements.Pattern.fromLiteral('none').matches(elements.Pattern.fromLiteral('none'))).to.equal(false);
            expect(elements.Pattern.fromLiteral('none').matches(elements.Pattern.fromLiteral('any'))).to.equal(true);
            expect(new elements.Text('any').matches(elements.Pattern.fromLiteral('none'))).to.equal(false);
            expect(new elements.Text('none').matches(elements.Pattern.fromLiteral('none'))).to.equal(false);
            expect(new elements.Text('foobar').matches(elements.Pattern.fromLiteral('none'))).to.equal(false);
        });

        it('should generate an explicit any pattern', function() {
            expect(elements.Pattern.fromLiteral('any').isEqualTo(elements.Pattern.fromLiteral('any'))).to.equal(true);
            expect(elements.Pattern.fromLiteral('any').matches(elements.Pattern.fromLiteral('none'))).to.equal(false);
            expect(elements.Pattern.fromLiteral('any').matches(elements.Pattern.fromLiteral('any'))).to.equal(true);
            expect(new elements.Text('any').matches(elements.Pattern.fromLiteral('any'))).to.equal(true);
            expect(new elements.Text('none').matches(elements.Pattern.fromLiteral('any'))).to.equal(true);
            expect(new elements.Text('foobar').matches(elements.Pattern.fromLiteral('any'))).to.equal(true);
        });

    });

    describe('Test pattern methods', function() {

        it('should return the correct type', function() {
            const type = elements.Pattern.fromLiteral('any').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#B6W55BXMVG69NR4LZHH28Y12AXZ6AJ6W,$version:v1,$digest:none]>');
        });

        it('should recognize text string patterns', function() {
            expect(elements.Pattern.fromLiteral('any').isMatchedBy(new elements.Text('pretty much anything'))).to.equal(true);
            expect(elements.Pattern.fromLiteral('"bab.*"?').isMatchedBy(new elements.Text('babbling'))).to.equal(true);
            expect(elements.Pattern.fromLiteral('"bab.*"?').isMatchedBy(new elements.Text('bubbling'))).to.equal(false);
            expect(elements.Pattern.fromLiteral('none').isMatchedBy(new elements.Text('troubling'))).to.equal(false);
        });

        it('should recognize structure patterns', function() {
            expect(elements.Pattern.fromLiteral('any').isMatchedBy(collections.List.fromSequential([1, 2, 3]))).to.equal(true);
            expect(elements.Pattern.fromLiteral('"\\[([1-9](, )?)*\\]"?').isMatchedBy(collections.List.fromSequential([1, 2, 3]))).to.equal(true);
            expect(elements.Pattern.fromLiteral('none').isMatchedBy(collections.List.fromSequential([1, 2, 3]))).to.equal(false);
        });

    });

});
