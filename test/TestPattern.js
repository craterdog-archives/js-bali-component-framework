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

    describe('Test pattern constructors', function() {

        it('should construct using literals', function() {
            expect(elements.Pattern.fromLiteral('none').toLiteral()).to.equal('none');
            expect(elements.Pattern.fromLiteral('any').toLiteral()).to.equal('any');
        });

        it('should generate a default none pattern', function() {
            expect(new elements.Pattern().isEqualTo(new elements.Pattern('none'))).to.equal(true);
            expect(new elements.Pattern().matches(new elements.Pattern('none'))).to.equal(false);
            expect(new elements.Pattern().matches(new elements.Pattern('any'))).to.equal(true);
            expect(new elements.Text('any').matches(new elements.Pattern())).to.equal(false);
            expect(new elements.Text('none').matches(new elements.Pattern())).to.equal(false);
            expect(new elements.Text('foobar').matches(new elements.Pattern())).to.equal(false);
        });

        it('should generate an explicit none pattern', function() {
            expect(new elements.Pattern('none').isEqualTo(new elements.Pattern('none'))).to.equal(true);
            expect(new elements.Pattern('none').matches(new elements.Pattern('none'))).to.equal(false);
            expect(new elements.Pattern('none').matches(new elements.Pattern('any'))).to.equal(true);
            expect(new elements.Text('any').matches(new elements.Pattern('none'))).to.equal(false);
            expect(new elements.Text('none').matches(new elements.Pattern('none'))).to.equal(false);
            expect(new elements.Text('foobar').matches(new elements.Pattern('none'))).to.equal(false);
        });

        it('should generate an explicit any pattern', function() {
            expect(new elements.Pattern('any').isEqualTo(new elements.Pattern('any'))).to.equal(true);
            expect(new elements.Pattern('any').matches(new elements.Pattern('none'))).to.equal(false);
            expect(new elements.Pattern('any').matches(new elements.Pattern('any'))).to.equal(true);
            expect(new elements.Text('any').matches(new elements.Pattern('any'))).to.equal(true);
            expect(new elements.Text('none').matches(new elements.Pattern('any'))).to.equal(true);
            expect(new elements.Text('foobar').matches(new elements.Pattern('any'))).to.equal(true);
        });

    });

    describe('Test pattern methods', function() {

        it('should return the correct type', function() {
            const type = new elements.Pattern('any').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#B6W55BXMVG69NR4LZHH28Y12AXZ6AJ6W,$version:v1,$digest:none]>');
        });

    });

});
