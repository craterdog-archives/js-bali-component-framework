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
const random = require('../src/utilities/Random');
const codex = require('../src/utilities/Codex');
const elements = require('../src/elements');
const composites = require('../src/composites');

describe('Bali Component Framework™', function() {

    const expected = Buffer.alloc(256);
    for (var i = 0; i < 256; i++) {
        expected[i] = i;
    }

    describe('Test binary constructors', function() {

        it('should construct binary values from buffer with no base', function() {
            const binary = new elements.Binary(expected);
            expect(binary.value.toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.toLiteral().slice(1, -1)).to.equal(codex.base32Encode(expected));
        });

        it('should construct binary values from buffer with base 2 format', function() {
            const parameters = composites.Parameters.from({base: 2});
            const binary = new elements.Binary(expected, parameters);
            expect(binary.toLiteral().slice(1, -1)).to.equal(codex.base2Encode(expected));
        });

        it('should construct binary values from buffer with base 16 format', function() {
            const parameters = composites.Parameters.from({base: 16});
            const binary = new elements.Binary(expected, parameters);
            expect(binary.toLiteral().slice(1, -1)).to.equal(codex.base16Encode(expected));
        });

        it('should construct binary values from buffer with base 32 format', function() {
            const parameters = composites.Parameters.from({base: 32});
            const binary = new elements.Binary(expected, parameters);
            expect(binary.toLiteral().slice(1, -1)).to.equal(codex.base32Encode(expected));
        });

        it('should construct binary values from buffer with base 64 format', function() {
            const parameters = composites.Parameters.from({base: 64});
            const binary = new elements.Binary(expected, parameters);
            expect(binary.toLiteral().slice(1, -1)).to.equal(codex.base64Encode(expected));
        });

        it('should throw and exception when constructing a binary value with an illegal base', function() {
            expect(
                function() {
                    const parameters = composites.Parameters.from({base: 25});
                    const bad = new elements.Binary(expected, parameters);
                    bad.toLiteral();
                }
            ).to.throw();
        });

    });

    describe('Test binary methods', function() {

        it('should return the correct type', function() {
            const type = new elements.Binary(expected).getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#S858FKVC1YTL20J9M0WQK89MQLS4TK8Z,$version:v1,$digest:none]>');
        });

    });

    describe('Test binary functions', function() {

        it('should perform concatenation of two binary strings', function() {
            const binary1 = new elements.Binary(random.bytes(40));
            const binary2 = new elements.Binary(random.bytes(40));
            const binary3 = elements.Binary.concatenation(binary1, binary2);
            const string1 = binary1.toString().slice(1, -1).replace(/\s/g, '');
            const string2 = binary2.toString().slice(1, -1).replace(/\s/g, '');
            const string3 = binary3.toString().slice(1, -1).replace(/\s/g, '');
            expect(string3).to.equal(string1 + string2);
        });

        it('should perform the bitwise NOT function correctly', function() {
            for (var i = 0; i < 256; i++) {
                const expected = elements.Binary.random(i);
                expect(elements.Binary.not(elements.Binary.not(expected)).isEqualTo(expected)).to.equal(true);
            }
        });

        it('should perform the bitwise SANS function correctly', function() {
            for (var i = 0; i < 10; i++) {
                const A = elements.Binary.random(i);
                const B = elements.Binary.random(i);
                const C = elements.Binary.sans(A, B);
                const D = elements.Binary.sans(B, A);
                expect(elements.Binary.or(C, D).isEqualTo(elements.Binary.xor(A, B))).to.equal(true);
            }
        });

        it('should perform the bitwise XOR function correctly', function() {
            for (var i = 0; i < 10; i++) {
                const A = elements.Binary.random(i);
                const B = elements.Binary.random(i);
                const C = elements.Binary.xor(A, B);
                expect(elements.Binary.xor(B, C).isEqualTo(A)).to.equal(true);
                expect(elements.Binary.xor(C, A).isEqualTo(B)).to.equal(true);
            }
        });

        it("should perform the De Morgan's Laws correctly", function() {
            for (var i = 0; i < 10; i++) {
                const A = elements.Binary.random(i);
                const B = elements.Binary.random(i);
                expect(elements.Binary.not(elements.Binary.and(A, B)).isEqualTo(elements.Binary.or(elements.Binary.not(A), elements.Binary.not(B)))).to.equal(true);
                expect(elements.Binary.not(elements.Binary.or(A, B)).isEqualTo(elements.Binary.and(elements.Binary.not(A), elements.Binary.not(B)))).to.equal(true);
            }
        });

    });

    describe('Test the binary iterators.', function() {

        it('should iterate over a binary string forwards and backwards', function() {
            const binary = new elements.Binary(random.bytes(4));
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
            expect(byte).to.equal(binary.value[0]);
            byte = iterator.getNext();
            expect(byte).to.equal(binary.value[1]);
            byte = iterator.getPrevious();
            expect(byte).to.equal(binary.value[1]);
            byte = iterator.getPrevious();
            expect(byte).to.equal(binary.value[0]);
            while (iterator.hasNext()) {
                byte = iterator.getNext();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
        });

    });

});
