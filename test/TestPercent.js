/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var mocha = require('mocha');
var expect = require('chai').expect;
var Percent = require('../src/elements/Percent').Percent;

describe('Bali Document Notation™', function() {

    describe('Test percent constructors', function() {

        it('should construct a default percent of zero', function() {
            var empty = new Percent();
            var number = empty.toNumber();
            expect(number).to.equal(0);
            var string = empty.toSource();
            expect(string).to.equal('0%');
        });

        it('should construct a percent of zero', function() {
            var zero = new Percent('0%');
            var number = zero.toNumber();
            expect(number).to.equal(0);
            var string = zero.toSource();
            expect(string).to.equal('0%');
        });

        it('should construct a percent of 13.25%', function() {
            var decimal = new Percent(0.1325);
            var number = decimal.toNumber();
            expect(number).to.equal(0.1325);
            var string = decimal.toSource();
            expect(string).to.equal('13.25%');
        });

        it('should construct a percent of -2%', function() {
            var negative = new Percent(-0.02);
            var number = negative.toNumber();
            expect(number).to.equal(-0.02);
            var string = negative.toSource();
            expect(string).to.equal('-2%');
        });

        it('should construct a percent of 50%', function() {
            var fifty = new Percent('50%');
            var number = fifty.toNumber();
            expect(number).to.equal(0.5);
            var string = fifty.toSource();
            expect(string).to.equal('50%');
        });

        it('should construct a percent of -0.234%', function() {
            var fractional = new Percent('-0.234%');
            var number = fractional.toNumber();
            expect(number).to.equal(-0.00234);
            var string = fractional.toSource();
            expect(string).to.equal('-0.234%');
        });

        it('should construct a percent of 100%', function() {
            var hundred = new Percent('100%');
            var number = hundred.toNumber();
            expect(number).to.equal(1);
            var string = hundred.toSource();
            expect(string).to.equal('100%');
        });

        it('should construct a percent of 150%', function() {
            var hundred = new Percent('150%');
            var number = hundred.toNumber();
            expect(number).to.equal(1.5);
            var string = hundred.toSource();
            expect(string).to.equal('150%');
        });

    });

});
