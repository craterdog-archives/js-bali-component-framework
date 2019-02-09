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

    const expected = Buffer.alloc(256);
    for (var i = 0; i < 256; i++) {
        expected[i] = i;
    }

    describe('Test binary constructors', function() {

        it('should construct binary strings using literals', function() {
            expect(bali.parse("'ABC0'").toString()).to.equal("'ABC0'");
            expect(bali.parse("'01101010'($encoding: $base2)").toString()).to.equal("'01101010'($encoding: $base2)");
            expect(bali.parse("'ABC0'($encoding: $base16)").toString()).to.equal("'ABC0'($encoding: $base16)");
            expect(bali.parse("'ABC0'($encoding: $base32)").toString()).to.equal("'ABC0'($encoding: $base32)");
            expect(bali.parse("'gV2qMVdiG7XYRSqV6jg='($encoding: $base64)").toString()).to.equal("'gV2qMVdiG7XYRSqV6jg='($encoding: $base64)");
        });

        it('should construct random binary strings from the number of bytes', function() {
            expect(bali.binary().getSize()).to.equal(0);
            expect(bali.binary(20).getSize()).to.equal(20);
        });

        it('should construct binary strings from a buffer with default encoding', function() {
            const binary = bali.binary(expected);
            expect(binary.getValue().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.toString()).to.equal("'" + bali.codex.base32Encode(expected) + "'");
        });

        it('should construct binary values from a buffer with base 2 encoding', function() {
            const binary = bali.binary(expected, bali.base2);
            expect(binary.toBase2()).to.equal("'" + bali.codex.base2Encode(expected) + "'");
        });

        it('should construct binary values from a buffer with base 16 encoding', function() {
            const binary = bali.binary(expected, bali.base16);
            expect(binary.toBase16()).to.equal("'" + bali.codex.base16Encode(expected) + "'");
        });

        it('should construct binary values from a buffer with base 32 encoding', function() {
            const binary = bali.binary(expected, bali.base32);
            expect(binary.toBase32()).to.equal("'" + bali.codex.base32Encode(expected) + "'");
        });

        it('should construct binary values from a buffer with base 64 encoding', function() {
            const binary = bali.binary(expected, bali.base64);
            expect(binary.toBase64()).to.equal("'" + bali.codex.base64Encode(expected) + "'");
        });

        it('should throw and exception when constructing a binary string with an illegal encoding', function() {
            expect(
                function() {
                    const parameters = bali.parameters({$encoding: '$base25'});
                    const bad = bali.binary(expected, parameters);
                    bad.toString();
                }
            ).to.throw();
        });

    });

    describe('Test binary methods', function() {

        it('should return the correct type', function() {
            const type = bali.binary(expected).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#S858FKVC1YTL20J9M0WQK89MQLS4TK8Z,$version:v1,$digest:none]>');
        });

    });

    describe('Test binary functions', function() {

        it('should perform concatenation of two binary strings', function() {
            const binary1 = bali.binary(bali.random.bytes(40));
            const binary2 = bali.binary(bali.random.bytes(40));
            const binary3 = bali.binary.concatenation(binary1, binary2);
            const string1 = binary1.toString().slice(1, -1).replace(/\s/g, '');
            const string2 = binary2.toString().slice(1, -1).replace(/\s/g, '');
            const string3 = binary3.toString().slice(1, -1).replace(/\s/g, '');
            expect(string3).to.equal(string1 + string2);
        });

        it('should perform the bitwise NOT function correctly', function() {
            for (var i = 0; i < 256; i++) {
                const expected = bali.binary(i);
                expect(bali.binary.not(bali.binary.not(expected)).isEqualTo(expected)).to.equal(true);
            }
        });

        it('should perform the bitwise SANS function correctly', function() {
            for (var i = 0; i < 10; i++) {
                const A = bali.binary(i);
                const B = bali.binary(i);
                const C = bali.binary.sans(A, B);
                const D = bali.binary.sans(B, A);
                expect(bali.binary.or(C, D).isEqualTo(bali.binary.xor(A, B))).to.equal(true);
            }
        });

        it('should perform the bitwise XOR function correctly', function() {
            for (var i = 0; i < 10; i++) {
                const A = bali.binary(i);
                const B = bali.binary(i);
                const C = bali.binary.xor(A, B);
                expect(bali.binary.xor(B, C).isEqualTo(A)).to.equal(true);
                expect(bali.binary.xor(C, A).isEqualTo(B)).to.equal(true);
            }
        });

        it("should perform the De Morgan's Laws correctly", function() {
            for (var i = 0; i < 10; i++) {
                const A = bali.binary(i);
                const B = bali.binary(i);
                expect(bali.binary.not(bali.binary.and(A, B)).isEqualTo(bali.binary.or(bali.binary.not(A), bali.binary.not(B)))).to.equal(true);
                expect(bali.binary.not(bali.binary.or(A, B)).isEqualTo(bali.binary.and(bali.binary.not(A), bali.binary.not(B)))).to.equal(true);
            }
        });

    });

    describe('Test the binary iterators.', function() {

        it('should iterate over a binary string forwards and backwards', function() {
            const binary = bali.binary(bali.random.bytes(4));
            const iterator = binary.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            iterator.toEnd();
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            var byte;
            while (iterator.hasPrevious()) {
                byte = iterator.getPrevious();
            }
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            byte = iterator.getNext();
            expect(byte).to.equal(binary.getValue()[0]);
            byte = iterator.getNext();
            expect(byte).to.equal(binary.getValue()[1]);
            byte = iterator.getPrevious();
            expect(byte).to.equal(binary.getValue()[1]);
            byte = iterator.getPrevious();
            expect(byte).to.equal(binary.getValue()[0]);
            while (iterator.hasNext()) {
                byte = iterator.getNext();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
        });

    });

});
