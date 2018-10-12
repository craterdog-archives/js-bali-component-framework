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
var Identifier = require('../src/elements/Identifier').Identifier;

describe('Bali Primitive Types™', function() {

    describe('Test constant constructors', function() {

        it('should throw an exception for an empty constant', function() {
            expect(
                function() {
                    var empty = new Identifier();
                }
            ).to.throw();
            expect(
                function() {
                    var empty = new Identifier('');
                }
            ).to.throw();
        });

        it('should throw an exception for a constant containing white space', function() {
            expect(
                function() {
                    var bad = new Identifier(' ');
                }
            ).to.throw();
            expect(
                function() {
                    var bad = new Identifier('White Space');
                }
            ).to.throw();
        });

        it('should construct a constant and format the same constant', function() {
            var constant = new Identifier('foobar');
            var string = constant.toSource();
            expect(string).to.equal('foobar');
            var identifier = constant.toString();
            expect(identifier).to.equal('foobar');
        });

    });

});
