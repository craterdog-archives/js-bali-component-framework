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


describe('Bali Component Framework™', function() {

    describe('Test pattern constructors', function() {

        it('should construct using literals', function() {
            expect(bali.pattern('none').toLiteral()).to.equal('none');
            expect(bali.pattern('any').toLiteral()).to.equal('any');
        });

        it('should generate a default none pattern', function() {
            expect(bali.pattern().isEqualTo(bali.pattern('none'))).to.equal(true);
            expect(bali.pattern().matches(bali.pattern('none'))).to.equal(false);
            expect(bali.pattern().matches(bali.pattern('any'))).to.equal(true);
            expect(bali.text('"any"').matches(bali.pattern())).to.equal(false);
            expect(bali.text('"none"').matches(bali.pattern())).to.equal(false);
            expect(bali.text('"foobar"').matches(bali.pattern())).to.equal(false);
        });

        it('should generate an explicit none pattern', function() {
            expect(bali.pattern('none').isEqualTo(bali.pattern('none'))).to.equal(true);
            expect(bali.pattern('none').matches(bali.pattern('none'))).to.equal(false);
            expect(bali.pattern('none').matches(bali.pattern('any'))).to.equal(true);
            expect(bali.text('"any"').matches(bali.pattern('none'))).to.equal(false);
            expect(bali.text('"none"').matches(bali.pattern('none'))).to.equal(false);
            expect(bali.text('"foobar"').matches(bali.pattern('none'))).to.equal(false);
        });

        it('should generate an explicit any pattern', function() {
            expect(bali.pattern('any').isEqualTo(bali.pattern('any'))).to.equal(true);
            expect(bali.pattern('any').matches(bali.pattern('none'))).to.equal(false);
            expect(bali.pattern('any').matches(bali.pattern('any'))).to.equal(true);
            expect(bali.text('"any"').matches(bali.pattern('any'))).to.equal(true);
            expect(bali.text('"none"').matches(bali.pattern('any'))).to.equal(true);
            expect(bali.text('"foobar"').matches(bali.pattern('any'))).to.equal(true);
        });

    });

    describe('Test pattern methods', function() {

        it('should return the correct type', function() {
            const type = bali.pattern('any').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#B6W55BXMVG69NR4LZHH28Y12AXZ6AJ6W,$version:v1,$digest:none]>');
        });

        it('should recognize text string patterns', function() {
            expect(bali.pattern('any').isMatchedBy(bali.text('"pretty much anything"'))).to.equal(true);
            expect(bali.pattern('"bab.*"?').isMatchedBy(bali.text('"babbling"'))).to.equal(true);
            expect(bali.pattern('"bab.*"?').isMatchedBy(bali.text('"bubbling"'))).to.equal(false);
            expect(bali.pattern('none').isMatchedBy(bali.text('"troubling"'))).to.equal(false);
        });

        it('should recognize structure patterns', function() {
            expect(bali.pattern('any').isMatchedBy(bali.list([1, 2, 3]))).to.equal(true);
            expect(bali.pattern('"\\[([1-9](, )?)*\\]"?').isMatchedBy(bali.list([1, 2, 3]))).to.equal(true);
            expect(bali.pattern('none').isMatchedBy(bali.list([1, 2, 3]))).to.equal(false);
        });

    });

});
