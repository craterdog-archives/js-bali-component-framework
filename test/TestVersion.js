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

    describe('Test version constructors', function() {

        it('should generate a default first version string', function() {
            var empty = new elements.Version();
            var string = empty.toString();
            expect(string).to.equal('v1');
        });

        it('should generate an explicit single level version string', function() {
            var major = new elements.Version('v42');
            var string = major.toString();
            expect(string).to.equal('v42');
        });

        it('should generate an explicit two level version string', function() {
            var minor = new elements.Version('v41.6');
            var string = minor.toString();
            expect(string).to.equal('v41.6');
        });

        it('should generate an explicit three level version string', function() {
            var bug = new elements.Version('v2.13.5');
            var string = bug.toString();
            expect(string).to.equal('v2.13.5');
        });

    });

    describe('Test invalid version constructors', function() {

        it('should generate an exception for a missing prefix', function() {
            expect(
                function() {
                    new elements.Version('1');
                }
            ).to.throw();
        });

        it('should generate an exception for a trailing dot', function() {
            expect(
                function() {
                    new elements.Version('v1.');
                }
            ).to.throw();
        });

        it('should generate an exception for a zero version number', function() {
            expect(
                function() {
                    new elements.Version('v0');
                }
            ).to.throw();
        });

        it('should generate an exception for a zero trailing version number', function() {
            expect(
                function() {
                    new elements.Version('v1.0');
                }
            ).to.throw();
        });

        it('should generate an exception for a zero subversion number', function() {
            expect(
                function() {
                    new elements.Version('v1.0.2');
                }
            ).to.throw();
        });

    });

    describe('Test version methods', function() {

        it('should calculate and validate next versions', function() {
            var currentVersion = new elements.Version('v6.2.7');
            var nextVersion = elements.Version.nextVersion(currentVersion, 1);
            expect(nextVersion.toString()).to.equal('v7');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);
            nextVersion = elements.Version.nextVersion(currentVersion, 2);
            expect(nextVersion.toString()).to.equal('v6.3');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);
            nextVersion = elements.Version.nextVersion(currentVersion, 3);
            expect(nextVersion.toString()).to.equal('v6.2.8');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);
            nextVersion = elements.Version.nextVersion(currentVersion, 4);
            expect(nextVersion.toString()).to.equal('v6.2.7.1');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);
            nextVersion = elements.Version.nextVersion(currentVersion);
            expect(nextVersion.toString()).to.equal('v6.2.8');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);

            expect(elements.Version.validNextVersion(currentVersion, currentVersion)).to.equal(false);
            nextVersion = new elements.Version('v7.2.7');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
            nextVersion = new elements.Version('v6.3.7');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
            nextVersion = new elements.Version('v6.2.8.1');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
            nextVersion = new elements.Version('v6.2.7.2');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
            nextVersion = new elements.Version('v6.2.7.1.1');
            expect(elements.Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
        });

        it('should return the correct type', function() {
            var type = new elements.Version('v1.2.3').getType();
            expect(type).to.equal('<bali:[$protocol:v1,$tag:#VVF92PYR76BJRFV932KMG7VHCD0MAS5R,$version:v1,$digest:none]>');
        });

    });

});
