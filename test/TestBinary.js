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
var elements = require('../src/elements');
var composites = require('../src/composites');
var codex = require('../src/utilities/Codex');

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
            var parameters = composites.Parameters.fromCollection({base: 16});
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
            var parameters = composites.Parameters.fromCollection({base: 64});
            var binary = new elements.Binary(base64, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(64);
        });

        it('should construct binary values with encoding of base 32', function() {
            var base32 = "'" + codex.base32Encode(expected) + "'";
            var parameters = composites.Parameters.fromCollection({base: 32});
            var binary = new elements.Binary(base32, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(32);
        });

        it('should construct binary values with encoding of base 16', function() {
            var base16 = "'" + codex.base16Encode(expected) + "'";
            var parameters = composites.Parameters.fromCollection({base: 16});
            var binary = new elements.Binary(base16, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(16);
        });

        it('should construct binary values with encoding of base 2', function() {
            var base2 = "'" + codex.base2Encode(expected) + "'";
            var parameters = composites.Parameters.fromCollection({base: 2});
            var binary = new elements.Binary(base2, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(2);
        });

        it('should throw and exception when constructing a binary value with an illegal base', function() {
            expect(
                function() {
                    var parameters = composites.Parameters.fromCollection({base: 25});
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

        it('should return random binary values of different lengths', function() {
            for (var i = 0; i < 256; i++) {
                expected = elements.Binary.randomBytes(i);
                var binary = new elements.Binary(expected.toString());
                expect(binary.isEqualTo(expected)).to.equal(true);
            }
        });

    });

});
