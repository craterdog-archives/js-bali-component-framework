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
const bali = require('../').api();
const generator = bali.generator();
const decoder = bali.decoder(1, debug);  // indent one level


describe('Bali Nebula™ Component Framework - Decoder', function() {

    describe('Test encoding agents with round-trip conversions', function() {

        it('should convert bytes to integers back again', function() {
            for (var i = 0; i < 100; i++) {
                const expectedBuffer = generator.generateBytes(4);
                const expectedInteger = decoder.bytesToInteger(expectedBuffer);
                const buffer = decoder.integerToBytes(expectedInteger);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const integer = decoder.bytesToInteger(buffer);
                expect(integer).to.equal(expectedInteger);
            }
        });

        it('should convert bytes to base 2 and back again', function() {
            for (var i = 0; i < 21; i++) {
                const expectedBuffer = generator.generateBytes(i);
                const expectedBase02 = decoder.base02Encode(expectedBuffer);
                const buffer = decoder.base02Decode(expectedBase02);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const base02 = decoder.base02Encode(buffer);
                expect(base02).to.equal(expectedBase02);
            }
        });

        it('should convert bytes to base 16 and back again', function() {
            for (var i = 0; i < 81; i++) {
                const expectedBuffer = generator.generateBytes(i);
                const expectedBase16 = decoder.base16Encode(expectedBuffer);
                const buffer = decoder.base16Decode(expectedBase16);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const base16 = decoder.base16Encode(buffer);
                expect(base16).to.equal(expectedBase16);
            }
        });

        it('should convert bytes to base 32 and back again', function() {
            for (var i = 0; i < 101; i++) {
                const expectedBuffer = generator.generateBytes(i);
                const expectedBase32 = decoder.base32Encode(expectedBuffer);
                const buffer = decoder.base32Decode(expectedBase32);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const base32 = decoder.base32Encode(buffer);
                expect(base32).to.equal(expectedBase32);
            }
        });

        it('should convert bytes to base 64 and back again', function() {
            for (var i = 0; i < 121; i++) {
                const expectedBuffer = generator.generateBytes(i);
                const expectedBase64 = decoder.base64Encode(expectedBuffer);
                const buffer = decoder.base64Decode(expectedBase64);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const base64 = decoder.base64Encode(buffer);
                expect(base64).to.equal(expectedBase64);
            }
        });

    });

});
