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
const codex = require('../src/utilities/Codex');
const elements = require('../src/elements');
const composites = require('../src/composites');

describe('Bali Component Framework™', function() {

    var expected = Buffer.alloc(256);
    for (var i = 0; i < 256; i++) {
        expected[i] = i;
    }

    describe('Test binary constructors', function() {

        it('should construct binary values from buffer with no base', function() {
            var binary = new elements.Binary(expected);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(32);
        });

        it('should construct binary values from buffer with specific base', function() {
            var parameters = composites.Parameters.from({base: 16});
            var binary = new elements.Binary(expected, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(16);
        });

        it('should construct binary values from string by detecting the base', function() {
            var base32 = "'" + codex.base32Encode(expected) + "'";
            var binary = new elements.Binary(base32);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(32);
        });

        it('should construct binary values with encoding of base 64', function() {
            var base64 = "'" + codex.base64Encode(expected) + "'";
            var parameters = composites.Parameters.from({base: 64});
            var binary = new elements.Binary(base64, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(64);
        });

        it('should construct binary values with encoding of base 32', function() {
            var base32 = "'" + codex.base32Encode(expected) + "'";
            var parameters = composites.Parameters.from({base: 32});
            var binary = new elements.Binary(base32, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(32);
        });

        it('should construct binary values with encoding of base 16', function() {
            var base16 = "'" + codex.base16Encode(expected) + "'";
            var parameters = composites.Parameters.from({base: 16});
            var binary = new elements.Binary(base16, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(16);
        });

        it('should construct binary values with encoding of base 2', function() {
            var base2 = "'" + codex.base2Encode(expected) + "'";
            var parameters = composites.Parameters.from({base: 2});
            var binary = new elements.Binary(base2, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(2);
        });

        it('should throw and exception when constructing a binary value with an illegal base', function() {
            expect(
                function() {
                    var parameters = composites.Parameters.from({base: 25});
                    var bad = new elements.Binary("''", parameters);
                }
            ).to.throw();
        });

    });

    describe('Test binary methods', function() {

        it('should return the correct type', function() {
            var type = new elements.Binary(expected).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#S858FKVC1YTL20J9M0WQK89MQLS4TK8Z,$version:v1,$digest:none]>');
        });

        it('should run round-trip binary methods', function() {
            var binary = new elements.Binary(expected);

            var base2 = new elements.Binary(binary.toBase2());
            expect(base2.getBuffer().toString('hex')).to.equal(binary.getBuffer().toString('hex'));

            var base16 = new elements.Binary(binary.toBase16());
            expect(base16.getBuffer().toString('hex')).to.equal(binary.getBuffer().toString('hex'));

            var base32 = new elements.Binary(binary.toBase32());
            expect(base32.getBuffer().toString('hex')).to.equal(binary.getBuffer().toString('hex'));

            var base64 = new elements.Binary(binary.toBase64());
            expect(base64.getBuffer().toString('hex')).to.equal(binary.getBuffer().toString('hex'));
        });

    });

    describe('Test binary functions', function() {

        it('should perform the bitwise NOT function correctly', function() {
            for (var i = 0; i < 256; i++) {
                expected = elements.Binary.random(i);
                expect(elements.Binary.not(elements.Binary.not(expected)).isEqualTo(expected)).to.equal(true);
                var binary = new elements.Binary(expected.toString());
                expect(binary.isEqualTo(expected)).to.equal(true);
            }
        });

        it('should perform the bitwise SANS function correctly', function() {
            for (var i = 0; i < 10; i++) {
                var A = elements.Binary.random(i);
                var B = elements.Binary.random(i);
                var C = elements.Binary.sans(A, B);
                var D = elements.Binary.sans(B, A);
                expect(elements.Binary.or(C, D).isEqualTo(elements.Binary.xor(A, B))).to.equal(true);
            }
        });

        it('should perform the bitwise XOR function correctly', function() {
            for (var i = 0; i < 10; i++) {
                var A = elements.Binary.random(i);
                var B = elements.Binary.random(i);
                var C = elements.Binary.xor(A, B);
                expect(elements.Binary.xor(B, C).isEqualTo(A)).to.equal(true);
                expect(elements.Binary.xor(C, A).isEqualTo(B)).to.equal(true);
            }
        });

        it("should perform the De Morgan's Laws correctly", function() {
            for (var i = 0; i < 10; i++) {
                var A = elements.Binary.random(i);
                var B = elements.Binary.random(i);
                expect(elements.Binary.not(elements.Binary.and(A, B)).isEqualTo(elements.Binary.or(elements.Binary.not(A), elements.Binary.not(B)))).to.equal(true);
                expect(elements.Binary.not(elements.Binary.or(A, B)).isEqualTo(elements.Binary.and(elements.Binary.not(A), elements.Binary.not(B)))).to.equal(true);
            }
        });

    });

});
