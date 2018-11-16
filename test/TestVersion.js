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

describe('Bali Component Framework™', function() {

    describe('Test version constructors', function() {

        it('should generate a default first version string', function() {
            var empty = new Version();
            var string = empty.toString();
            expect(string).to.equal('v1');
        });

        it('should generate an explicit single level version string', function() {
            var major = new Version('v42');
            var string = major.toString();
            expect(string).to.equal('v42');
        });

        it('should generate an explicit two level version string', function() {
            var minor = new Version('v41.6');
            var string = minor.toString();
            expect(string).to.equal('v41.6');
        });

        it('should generate an explicit three level version string', function() {
            var bug = new Version('v2.13.5');
            var string = bug.toString();
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

    describe('Test version functions', function() {

        it('should calculate and validate next versions', function() {
            var currentVersion = new Version('v6.2.7');
            var nextVersion = Version.nextVersion(currentVersion, 1);
            expect(nextVersion.toString()).to.equal('v7');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);
            nextVersion = Version.nextVersion(currentVersion, 2);
            expect(nextVersion.toString()).to.equal('v6.3');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);
            nextVersion = Version.nextVersion(currentVersion, 3);
            expect(nextVersion.toString()).to.equal('v6.2.8');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);
            nextVersion = Version.nextVersion(currentVersion, 4);
            expect(nextVersion.toString()).to.equal('v6.2.7.1');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);
            nextVersion = Version.nextVersion(currentVersion);
            expect(nextVersion.toString()).to.equal('v6.2.8');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(true);

            expect(Version.validNextVersion(currentVersion, currentVersion)).to.equal(false);
            nextVersion = new Version('v7.2.7');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
            nextVersion = new Version('v6.3.7');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
            nextVersion = new Version('v6.2.8.1');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
            nextVersion = new Version('v6.2.7.2');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
            nextVersion = new Version('v6.2.7.1.1');
            expect(Version.validNextVersion(currentVersion, nextVersion)).to.equal(false);
        });

    });

});
