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
const decoder = bali.decoder(1);  // indent one level
const generator = bali.generator();


describe('Bali Nebula™ Component Framework - Binary', function() {

    const expected = Buffer.alloc(256);
    for (var i = 0; i < 256; i++) {
        expected[i] = i;
    }

    describe('Test binary constructors', function() {

        it('should construct binary strings using literals', function() {
            expect(bali.component("'ABC0'").toString()).to.equal("'ABC0'");
            expect(bali.component("'01101010'($encoding: $base2)").toString()).to.equal("'01101010'($encoding: $base2)");
            expect(bali.component("'ABC0'($encoding: $base16)").toString()).to.equal("'ABC0'($encoding: $base16)");
            expect(bali.component("'ABC0'($encoding: $base32)").toString()).to.equal("'ABC0'($encoding: $base32)");
            expect(bali.component("'gV2qMVdiG7XYRSqV6jg='($encoding: $base64)").toString()).to.equal("'gV2qMVdiG7XYRSqV6jg='($encoding: $base64)");
        });

        it('should construct an empty binary string', function() {
            expect(bali.binary().getSize()).to.equal(0);
        });

        it('should construct binary strings from a buffer with default encoding', function() {
            const binary = bali.binary(expected);
            expect(binary.getValue().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.toString()).to.equal("'" + decoder.base32Encode(expected) + "'");
        });

        it('should throw and exception when constructing a binary string with an illegal encoding', function() {
            expect(
                function() {
                    const bad = bali.binary(expected, {$encoding: '$base25'});
                    bad.toString();
                }
            ).to.throw();
        });

    });

    describe('Test binary methods', function() {

        it('should perform the getIndex(), getItem() and getItems() methods correctly', function() {
            const buffer = Buffer.from([0x62, 0x64, 0x66, 0x68, 0x69, 0x72, 0x74, 0x75, 0x78, 0x79]);
            const binary = bali.binary(buffer);
            const range = bali.range(3, '..', 5);
            const first = binary.getItem(3);
            const last = binary.getItem(5);
            const items = binary.getItems(range);
            expect(first).to.equal(items.getItem(1));
            expect(last).to.equal(items.getItem(items.getSize()));
            expect(3).to.equal(binary.getIndex(0x66));
        });

    });

    describe('Test binary functions', function() {

        it('should perform concatenation of two binary strings', function() {
            const binary1 = bali.binary(generator.generateBytes(40));
            const binary2 = bali.binary(generator.generateBytes(40));
            const binary3 = bali.binary.concatenation(binary1, binary2);
            const string1 = binary1.toString().slice(1, -1).replace(/\s/g, '');
            const string2 = binary2.toString().slice(1, -1).replace(/\s/g, '');
            const string3 = binary3.toString().slice(1, -1).replace(/\s/g, '');
            expect(string3).to.equal(string1 + string2);
        });

        it('should perform the bitwise NOT function correctly', function() {
            for (var i = 0; i < 256; i++) {
                const expected = bali.binary(generator.generateBytes(i));
                expect(bali.binary.not(bali.binary.not(expected)).isEqualTo(expected)).to.equal(true);
            }
        });

        it('should perform the bitwise SANS function correctly', function() {
            for (var i = 0; i < 10; i++) {
                const A = bali.binary(generator.generateBytes(i));
                const B = bali.binary(generator.generateBytes(i));
                const C = bali.binary.sans(A, B);
                const D = bali.binary.sans(B, A);
                expect(bali.binary.or(C, D).isEqualTo(bali.binary.xor(A, B))).to.equal(true);
            }
        });

        it('should perform the bitwise XOR function correctly', function() {
            for (var i = 0; i < 10; i++) {
                const A = bali.binary(generator.generateBytes(i));
                const B = bali.binary(generator.generateBytes(i));
                const C = bali.binary.xor(A, B);
                expect(bali.binary.xor(B, C).isEqualTo(A)).to.equal(true);
                expect(bali.binary.xor(C, A).isEqualTo(B)).to.equal(true);
            }
        });

        it("should perform the De Morgan's Laws correctly", function() {
            for (var i = 0; i < 10; i++) {
                const A = bali.binary(generator.generateBytes(i));
                const B = bali.binary(generator.generateBytes(i));
                expect(bali.binary.not(bali.binary.and(A, B)).isEqualTo(bali.binary.or(bali.binary.not(A), bali.binary.not(B)))).to.equal(true);
                expect(bali.binary.not(bali.binary.or(A, B)).isEqualTo(bali.binary.and(bali.binary.not(A), bali.binary.not(B)))).to.equal(true);
            }
        });

    });

    describe('Test the binary iterators', function() {

        it('should iterate over a binary string forwards and backwards', function() {
            const binary = bali.binary(generator.generateBytes(4));
            const iterator = binary.getIterator();
            expect(iterator).to.exist;
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
