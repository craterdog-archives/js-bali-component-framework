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

describe('Bali Document Notation™', function() {

    describe('Test binary constructors', function() {

        var expected = Buffer.alloc(256);
        for (var i = 0; i < 256; i++) {
            expected[i] = i;
        }

        it('should construct binary values from buffer with no base', function() {
            var binary = new elements.Binary(expected);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(32);
        });

        it('should construct binary values from buffer with specific base', function() {
            var parameters = composites.Parameters.fromCollection({$base: 16});
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
            var parameters = composites.Parameters.fromCollection({$base: 64});
            var binary = new elements.Binary(base64, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(64);
        });

        it('should construct binary values with encoding of base 32', function() {
            var base32 = "'" + codex.base32Encode(expected) + "'";
            var parameters = composites.Parameters.fromCollection({$base: 32});
            var binary = new elements.Binary(base32, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(32);
        });

        it('should construct binary values with encoding of base 16', function() {
            var base16 = "'" + codex.base16Encode(expected) + "'";
            var parameters = composites.Parameters.fromCollection({$base: 16});
            var binary = new elements.Binary(base16, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(16);
        });

        it('should construct binary values with encoding of base 2', function() {
            var base2 = "'" + codex.base2Encode(expected) + "'";
            var parameters = composites.Parameters.fromCollection({$base: 2});
            var binary = new elements.Binary(base2, parameters);
            expect(binary.getBuffer().toString('hex')).to.equal(expected.toString('hex'));
            expect(binary.base).to.equal(2);
        });

        it('should throw and exception when constructing a binary value with an illegal base', function() {
            expect(
                function() {
                    var parameters = composites.Parameters.fromCollection({$base: 25});
                    var bad = new elements.Binary("''", parameters);
                }
            ).to.throw();
        });

    });

});
