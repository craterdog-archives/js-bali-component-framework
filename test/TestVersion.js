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
var Version = require('../src/elements/Version').Version;

describe('Bali Document Notation™', function() {

    describe('Test version constructors', function() {

        it('should generate a default first version string', function() {
            var empty = new Version();
            var string = empty.toSource();
            expect(string).to.equal('v1');
        });

        it('should generate an explicit single level version string', function() {
            var major = new Version('v42');
            var string = major.toSource();
            expect(string).to.equal('v42');
        });

        it('should generate an explicit two level version string', function() {
            var minor = new Version('v41.6');
            var string = minor.toSource();
            expect(string).to.equal('v41.6');
        });

        it('should generate an explicit three level version string', function() {
            var bug = new Version('v2.13.5');
            var string = bug.toSource();
            expect(string).to.equal('v2.13.5');
        });

    });

    describe('Test invalid version constructors', function() {

        it('should generate an exception for a missing prefix', function() {
            expect(
                function() {
                    new Version('1');
                }
            ).to.throw();
        });

        it('should generate an exception for a trailing dot', function() {
            expect(
                function() {
                    new Version('v1.');
                }
            ).to.throw();
        });

        it('should generate an exception for a zero version number', function() {
            expect(
                function() {
                    new Version('v0');
                }
            ).to.throw();
        });

        it('should generate an exception for a zero trailing version number', function() {
            expect(
                function() {
                    new Version('v1.0');
                }
            ).to.throw();
        });

        it('should generate an exception for a zero subversion number', function() {
            expect(
                function() {
                    new Version('v1.0.2');
                }
            ).to.throw();
        });

    });

});
