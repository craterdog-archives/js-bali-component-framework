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


describe('Bali Nebula™ Component Framework - Pattern', function() {

    describe('Test pattern constructors', function() {

        it('should construct patterns using literals', function() {
            expect(bali.pattern.NONE.toString()).to.equal('none');
            expect(bali.pattern.ANY.toString()).to.equal('any');
        });

    });

    describe('Test pattern methods', function() {

        it('should recognize text string patterns', function() {
            expect(bali.pattern.ANY.matchesString('"pretty much anything"')).to.equal(true);
            expect(bali.component('"bab.*"?').matchesString('"babbling"')).to.equal(true);
            expect(bali.component('"bab.*"?').matchesString('"bubbling"')).to.equal(false);
            expect(bali.pattern.NONE.matchesString('"troubling"')).to.equal(false);
            expect(bali.pattern.NONE.matchesString('none')).to.equal(true);
        });

        it('should recognize composite patterns', function() {
            expect(bali.pattern.ANY.getHash()).to.exist;
            expect(bali.pattern.ANY.matchesString(bali.list([1, 2, 3]).toString())).to.equal(true);
            expect(bali.component('"\\[\\s*([1-9]\\s*)*\\]"?').getHash()).to.exist;
            expect(bali.component('"\\[\\s*([1-9]\\s*)*\\]"?').matchesString(bali.list([1, 2, 3]).toString())).to.equal(true);
            expect(bali.pattern.NONE.getHash()).to.exist;
            expect(bali.pattern.NONE.matchesString(bali.list([1, 2, 3]).toString())).to.equal(false);
        });

    });

});
