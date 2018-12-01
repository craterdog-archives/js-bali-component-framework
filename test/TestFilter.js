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
var Filter = require('../src/elements/Filter').Filter;

describe('Bali Component Framework™', function() {

    describe('Test filter constructors', function() {

        it('should generate a default none filter', function() {
            expect(new Filter().toString()).to.equal(Filter.NONE.toString());
        });

        it('should generate an explicit none filter', function() {
            expect(new Filter('none').toString()).to.equal(Filter.NONE.toString());
        });

        it('should generate an explicit any filter', function() {
            expect(new Filter('any').toString()).to.equal(Filter.ANY.toString());
        });

        it('should throw an exception for an invalid filter', function() {
            expect(
                function() {
                    new Filter('foobar');
                }
            ).to.throw();
        });

    });

    describe('Test filter methods', function() {

        it('should return the correct type', function() {
            var type = Filter.ANY.getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#B6W55BXMVG69NR4LZHH28Y12AXZ6AJ6W,$version:v1,$digest:none]>');
        });

    });

});
