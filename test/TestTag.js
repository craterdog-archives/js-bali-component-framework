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
const elements = require('../src/elements');


describe('Bali Component Framework™', function() {

    describe('Test tag constructors', function() {

        it('should construct using literals', function() {
            expect(elements.Tag.fromLiteral('#2H5LSZB3VVJF9J0SJ7ZFC3LVK1K0TCWN').toLiteral()).to.equal('#2H5LSZB3VVJF9J0SJ7ZFC3LVK1K0TCWN');
        });

        it('should generate default random tags with 20 bytes', function() {
            for (var i = 0; i < 10; i++) {
                const random = new elements.Tag();
                expect(random.getNumberOfBytes()).to.equal(20);
                const expected = random.toString();
                const tag = new elements.Tag(expected.slice(1));  // remove the leading '#'
                const result = tag.toString();
                console.log('        ' + result);
                expect(result).to.equal(expected);
            }
        });

        it('should generate a random tag with 15 bytes', function() {
            const random = new elements.Tag(15);
            expect(random.getNumberOfBytes()).to.equal(15);
            const expected = random.toString();
            const tag = new elements.Tag(expected.slice(1));  // remove the leading '#'
            const result = tag.toString();
            expect(result).to.equal(expected);
        });

        it('should generate a predefined tag', function() {
            expected = 'NT5PG2BXZGBGV5JTNPCP2HTM4JP6CS4X';
            const tag = new elements.Tag(expected);
            const result = tag.toString();
            expect(result).to.equal('#' + expected);
        });

        it('should throw an exception for an empty symbol', function() {
            expect(
                function() {
                    const bad = new elements.Tag('This is not a tag!');
                }
            ).to.throw();
        });

    });

    describe('Test tag methods', function() {

        it('should return the correct type', function() {
            const type = new elements.Tag('JT3HJVCQ0A2TLK2D9LLXV1RWY963ZPS2').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#JT3HJVCQ0A2TLK2D9LLXV1RWY963ZPS2,$version:v1,$digest:none]>');
        });

    });

});
