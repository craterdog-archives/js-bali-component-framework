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

        it('should construct patterns using literals', function() {
            expect(bali.NONE.toString()).to.equal('none');
            expect(bali.ANY.toString()).to.equal('any');
        });

        it('should generate a default none pattern', function() {
            expect(bali.pattern().isEqualTo(bali.NONE)).to.equal(true);
            expect(bali.pattern().isMatchedBy(bali.NONE)).to.equal(false);
            expect(bali.pattern().isMatchedBy(bali.ANY)).to.equal(true);
            expect(bali.text('"any"').isMatchedBy(bali.pattern())).to.equal(false);
            expect(bali.text('"none"').isMatchedBy(bali.pattern())).to.equal(false);
            expect(bali.text('"foobar"').isMatchedBy(bali.pattern())).to.equal(false);
        });

        it('should generate an explicit none pattern', function() {
            expect(bali.NONE.isEqualTo(bali.parse('none'))).to.equal(true);
            expect(bali.NONE.isMatchedBy(bali.NONE)).to.equal(false);
            expect(bali.NONE.isMatchedBy(bali.ANY)).to.equal(true);
            expect(bali.text('"any"').isMatchedBy(bali.NONE)).to.equal(false);
            expect(bali.text('"none"').isMatchedBy(bali.NONE)).to.equal(false);
            expect(bali.text('"foobar"').isMatchedBy(bali.NONE)).to.equal(false);
        });

        it('should generate an explicit any pattern', function() {
            expect(bali.ANY.isEqualTo(bali.parse('any'))).to.equal(true);
            expect(bali.ANY.isMatchedBy(bali.NONE)).to.equal(false);
            expect(bali.ANY.isMatchedBy(bali.ANY)).to.equal(true);
            expect(bali.text('"any"').isMatchedBy(bali.ANY)).to.equal(true);
            expect(bali.text('"none"').isMatchedBy(bali.ANY)).to.equal(true);
            expect(bali.text('"foobar"').isMatchedBy(bali.ANY)).to.equal(true);
        });

    });

    describe('Test pattern methods', function() {

        it('should return the correct type', function() {
            const type = bali.pattern().getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#B6W55BXMVG69NR4LZHH28Y12AXZ6AJ6W,$version:v1,$digest:none]>');
        });

        it('should recognize text string patterns', function() {
            expect(bali.ANY.matches(bali.text('"pretty much anything"'))).to.equal(true);
            expect(bali.parse('"bab.*"?').matches(bali.text('"babbling"'))).to.equal(true);
            expect(bali.parse('"bab.*"?').matches(bali.text('"bubbling"'))).to.equal(false);
            expect(bali.NONE.matches(bali.text('"troubling"'))).to.equal(false);
        });

        it('should recognize structure patterns', function() {
            expect(bali.ANY.matches(bali.list([1, 2, 3]))).to.equal(true);
            expect(bali.parse('"\\[([1-9](, )?)*\\]"?').matches(bali.list([1, 2, 3]))).to.equal(true);
            expect(bali.NONE.matches(bali.list([1, 2, 3]))).to.equal(false);
        });

    });

});
