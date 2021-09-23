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


describe('Bali Nebula™ Component Framework - Tag', function() {

    describe('Test tag constructors', function() {

        it('should construct tags using literals', function() {
            expect(bali.component('#2H5LSZB3VVJF9J0SJ7ZFC3LVK1K0TCWN').toString()).to.equal('#2H5LSZB3VVJF9J0SJ7ZFC3LVK1K0TCWN');
            expect(bali.component('#2H5LSZB3VVSJ7ZFC3LVK1K0TCWN').toString()).to.equal('#2H5LSZB3VVSJ7ZFC3LVK1K0TCWN');
        });

        it('should generate default random tags with 20 bytes', function() {
            for (var i = 0; i < 10; i++) {
                const random = bali.tag();
                expect(random.getSize()).to.equal(20);
                const expected = random.toString();
                const tag = bali.component(expected);
                const result = tag.toString();
                console.log('        ' + result);
                expect(result).to.equal(expected);
            }
        });

        it('should generate random tags with variable length bytes', function() {
            for (var i = 5; i < 25; i++) {
                const random = bali.tag(i);
                expect(random.getSize()).to.equal(i);
                const expected = random.toString();
                const tag = bali.component(expected);
                expect(tag.getHash()).to.exist;
                const result = tag.toString();
                console.log('        ' + result);
                expect(result).to.equal(expected);
            }
        });

        it('should generate a predefined tag', function() {
            expected = '#NT5PG2BXZGBGV5JTNPCP2HTM4JP6CS4X';
            const tag = bali.component(expected);
            const result = tag.toString();
            expect(result).to.equal(expected);
        });

        it('should throw an exception for an invalid tag', function() {
            expect(
                function() {
                    const bad = bali.tag('This is not a tag!');
                }
            ).to.throw();
        });

    });

});
