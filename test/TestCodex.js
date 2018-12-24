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
var codex = require('../src/utilities/Codex');

describe('Bali Component Framework™', function() {

    describe('Test random number utilities', function() {

        it('should print out random tags in case we need some', function() {
            for (var i = 0; i < 10; i++) {
                console.log('        tag: ' + codex.randomTag());
            }
        });

        it('should test extreme coin tosses', function() {
            expect(codex.coinToss(0)).is.false;  // jshint ignore:line
            expect(codex.coinToss(1)).is.true;  // jshint ignore:line
        });

        it('should test endpoints of random indexes', function() {
            var gotOne = false;
            var gotThree = false;
            for (var i = 0; i < 100; i++) {
                var index = codex.randomIndex(3);
                expect(index >= 1).is.true;  // jshint ignore:line
                expect(index <= 3).is.true;  // jshint ignore:line
                if (index === 1) gotOne = true;
                if (index === 3) gotThree = true;
            }
            expect(gotOne).is.true;  // jshint ignore:line
            expect(gotThree).is.true;  // jshint ignore:line
        });

    });

    describe('Test encoding utilities with round-trip conversions', function() {

        it('should convert bytes to integers back again', function() {
            for (var i = 0; i < 100; i++) {
                var expectedBuffer = codex.randomBytes(4);
                var expectedInteger = codex.bytesToInteger(expectedBuffer);
                buffer = codex.integerToBytes(expectedInteger);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                var integer = codex.bytesToInteger(buffer);
                expect(integer).to.equal(expectedInteger);
            }
        });

        it('should convert bytes to base 2 and back again', function() {
            for (var i = 0; i < 21; i++) {
                var expectedBuffer = codex.randomBytes(i);
                var expectedBase2 = codex.base2Encode(expectedBuffer, '    ');
                var buffer = codex.base2Decode(expectedBase2);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                var base2 = codex.base2Encode(buffer, '    ');
                expect(base2).to.equal(expectedBase2);
            }
        });

        it('should convert bytes to base 16 and back again', function() {
            for (var i = 0; i < 81; i++) {
                var expectedBuffer = codex.randomBytes(i);
                var expectedBase16 = codex.base16Encode(expectedBuffer, '    ');
                var buffer = codex.base16Decode(expectedBase16);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                var base16 = codex.base16Encode(buffer, '    ');
                expect(base16).to.equal(expectedBase16);
            }
        });

        it('should convert bytes to base 32 and back again', function() {
            for (var i = 0; i < 101; i++) {
                var expectedBuffer = codex.randomBytes(i);
                var expectedBase32 = codex.base32Encode(expectedBuffer, '    ');
                var buffer = codex.base32Decode(expectedBase32);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                var base32 = codex.base32Encode(buffer, '    ');
                expect(base32).to.equal(expectedBase32);
            }
        });

        it('should convert bytes to base 64 and back again', function() {
            for (var i = 0; i < 121; i++) {
                var expectedBuffer = codex.randomBytes(i);
                var expectedBase64 = codex.base64Encode(expectedBuffer, '    ');
                var buffer = codex.base64Decode(expectedBase64);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                var base64 = codex.base64Encode(buffer, '    ');
                expect(base64).to.equal(expectedBase64);
            }
        });

    });

});
