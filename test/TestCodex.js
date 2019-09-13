/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const debug = 2;
const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../').api();
const generator = bali.generator();
const codex = bali.codex(1, debug);  // indent one level


describe('Bali Nebula™ Component Framework - Codex', function() {

    describe('Test encoding utilities with round-trip conversions', function() {

        it('should convert bytes to integers back again', function() {
            for (var i = 0; i < 100; i++) {
                const expectedBuffer = generator.generateBytes(4);
                const expectedInteger = codex.bytesToInteger(expectedBuffer);
                const buffer = codex.integerToBytes(expectedInteger);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const integer = codex.bytesToInteger(buffer);
                expect(integer).to.equal(expectedInteger);
            }
        });

        it('should convert bytes to base 2 and back again', function() {
            for (var i = 0; i < 21; i++) {
                const expectedBuffer = generator.generateBytes(i);
                const expectedBase2 = codex.base2Encode(expectedBuffer);
                const buffer = codex.base2Decode(expectedBase2);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const base2 = codex.base2Encode(buffer);
                expect(base2).to.equal(expectedBase2);
            }
        });

        it('should convert bytes to base 16 and back again', function() {
            for (var i = 0; i < 81; i++) {
                const expectedBuffer = generator.generateBytes(i);
                const expectedBase16 = codex.base16Encode(expectedBuffer);
                const buffer = codex.base16Decode(expectedBase16);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const base16 = codex.base16Encode(buffer);
                expect(base16).to.equal(expectedBase16);
            }
        });

        it('should convert bytes to base 32 and back again', function() {
            for (var i = 0; i < 101; i++) {
                const expectedBuffer = generator.generateBytes(i);
                const expectedBase32 = codex.base32Encode(expectedBuffer);
                const buffer = codex.base32Decode(expectedBase32);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const base32 = codex.base32Encode(buffer);
                expect(base32).to.equal(expectedBase32);
            }
        });

        it('should convert bytes to base 64 and back again', function() {
            for (var i = 0; i < 121; i++) {
                const expectedBuffer = generator.generateBytes(i);
                const expectedBase64 = codex.base64Encode(expectedBuffer);
                const buffer = codex.base64Decode(expectedBase64);
                expect(buffer.toString()).to.equal(expectedBuffer.toString());
                const base64 = codex.base64Encode(buffer);
                expect(base64).to.equal(expectedBase64);
            }
        });

    });

});
