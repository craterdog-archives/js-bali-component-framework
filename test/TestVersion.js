/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const debug = 2;
const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../').api(debug);


describe('Bali Nebula™ Component Framework - Version', function() {

    describe('Test version constructors', function() {

        it('should construct version strings using literals', function() {
            expect(bali.component('v1').toString()).to.equal('v1');
            expect(bali.component('v1.2').toString()).to.equal('v1.2');
        });

        it('should generate a default first version string', function() {
            const empty = bali.version();
            const string = empty.toString();
            expect(string).to.equal('v1');
        });

        it('should generate an explicit single level version string', function() {
            const major = bali.version([42]);
            const string = major.toString();
            expect(string).to.equal('v42');
        });

        it('should generate an explicit two level version string', function() {
            const minor = bali.version([41, 6]);
            const string = minor.toString();
            expect(string).to.equal('v41.6');
        });

        it('should generate an explicit three level version string', function() {
            const bug = bali.version([2, 13, 5]);
            const string = bug.toString();
            expect(string).to.equal('v2.13.5');
        });

    });

    describe('Test invalid version constructors', function() {

        it('should generate an exception for a zero version number', function() {
            expect(
                function() {
                    bali.version([0]);
                }
            ).to.throw();
        });

        it('should generate an exception for a zero trailing version number', function() {
            expect(
                function() {
                    bali.version([1, 0]);
                }
            ).to.throw();
        });

        it('should generate an exception for a zero subversion number', function() {
            expect(
                function() {
                    bali.version([1, 0, 2]);
                }
            ).to.throw();
        });

    });

    describe('Test version methods', function() {

        it('should calculate and validate next versions', function() {
            const currentVersion = bali.version([6, 2, 7]);
            var nextVersion = currentVersion.nextVersion(1);
            expect(nextVersion.toString()).to.equal('v7');
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(true);
            nextVersion = currentVersion.nextVersion(2);
            expect(nextVersion.toString()).to.equal('v6.3');
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(true);
            nextVersion = currentVersion.nextVersion(3);
            expect(nextVersion.toString()).to.equal('v6.2.8');
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(true);
            nextVersion = currentVersion.nextVersion(4);
            expect(nextVersion.toString()).to.equal('v6.2.7.1');
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(true);
            nextVersion = currentVersion.nextVersion();
            expect(nextVersion.toString()).to.equal('v6.2.8');
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(true);

            expect(currentVersion.validNextVersion(currentVersion)).to.equal(false);
            nextVersion = bali.version([7, 2, 7]);
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(false);
            nextVersion = bali.version([6, 3, 7]);
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(false);
            nextVersion = bali.version([6, 2, 8, 1]);
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(false);
            nextVersion = bali.version([6, 2, 7, 2]);
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(false);
            nextVersion = bali.version([6, 2, 7, 1, 1]);
            expect(currentVersion.validNextVersion(nextVersion)).to.equal(false);
        });

    });

    describe('Test the version iterators', function() {

        it('should iterate over a version string forwards and backwards', function() {
            const version = bali.version([1, 2, 3]);
            const iterator = version.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            iterator.toEnd();
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === true);
            var number;
            while (iterator.hasPrevious()) {
                number = iterator.getPrevious();
            }
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
            number = iterator.getNext();
            expect(number).to.equal(version.getValue()[0]);
            number = iterator.getNext();
            expect(number).to.equal(version.getValue()[1]);
            number = iterator.getPrevious();
            expect(number).to.equal(version.getValue()[1]);
            number = iterator.getPrevious();
            expect(number).to.equal(version.getValue()[0]);
            while (iterator.hasNext()) {
                number = iterator.getNext();
            }
            iterator.toStart();
            expect(iterator.hasNext() === true);
            expect(iterator.hasPrevious() === false);
        });

    });

});
