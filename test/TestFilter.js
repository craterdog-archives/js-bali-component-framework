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

describe('Bali Component Framework™', function() {

    describe('Test filter constructors', function() {

        it('should generate a default none filter', function() {
            expect(new elements.Filter().isEqualTo(new elements.Filter('none'))).to.equal(true);
            expect(new elements.Filter().matches(new elements.Filter('none'))).to.equal(false);
            expect(new elements.Filter().matches(new elements.Filter('any'))).to.equal(true);
            expect(new elements.Text('any').matches(new elements.Filter())).to.equal(false);
            expect(new elements.Text('none').matches(new elements.Filter())).to.equal(false);
            expect(new elements.Text('foobar').matches(new elements.Filter())).to.equal(false);
        });

        it('should generate an explicit none filter', function() {
            expect(new elements.Filter('none').isEqualTo(new elements.Filter('none'))).to.equal(true);
            expect(new elements.Filter('none').matches(new elements.Filter('none'))).to.equal(false);
            expect(new elements.Filter('none').matches(new elements.Filter('any'))).to.equal(true);
            expect(new elements.Text('any').matches(new elements.Filter('none'))).to.equal(false);
            expect(new elements.Text('none').matches(new elements.Filter('none'))).to.equal(false);
            expect(new elements.Text('foobar').matches(new elements.Filter('none'))).to.equal(false);
        });

        it('should generate an explicit any filter', function() {
            expect(new elements.Filter('any').isEqualTo(new elements.Filter('any'))).to.equal(true);
            expect(new elements.Filter('any').matches(new elements.Filter('none'))).to.equal(false);
            expect(new elements.Filter('any').matches(new elements.Filter('any'))).to.equal(true);
            expect(new elements.Text('any').matches(new elements.Filter('any'))).to.equal(true);
            expect(new elements.Text('none').matches(new elements.Filter('any'))).to.equal(true);
            expect(new elements.Text('foobar').matches(new elements.Filter('any'))).to.equal(true);
        });

    });

    describe('Test filter methods', function() {

        it('should return the correct type', function() {
            const type = new elements.Filter('any').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#B6W55BXMVG69NR4LZHH28Y12AXZ6AJ6W,$version:v1,$digest:none]>');
        });

    });

});
