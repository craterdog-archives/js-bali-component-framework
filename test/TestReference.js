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
const bali = require('../').api(2);


describe('Bali Nebula™ Component Framework - Reference', function() {

    describe('Test reference constructors', function() {

        it('should construct references using literals', function() {
            expect(bali.parse('<https://google.com/>').toString()).to.equal('<https://google.com/>');
            expect(bali.parse('<bali:RKVVW90GXFP44PBTLFLF8ZG8NR425JYMv3.1>').toString()).to.equal('<bali:RKVVW90GXFP44PBTLFLF8ZG8NR425JYMv3.1>');
        });

        it('should throw an exception for an empty reference', function() {
            expect(
                function() {
                    const empty = bali.reference();
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.reference('');
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.parse('<>');
                }
            ).to.throw();
        });

        it('should construct references and format matching references', function() {
            tests.forEach(function(expected) {
                const reference = bali.parse(expected);
                const string = reference.toString();
                expect(string).to.equal(expected);
                const scheme = reference.getScheme();
                const authority = reference.getAuthority();
                const path = reference.getPath();
                const query = reference.getQuery();
                const fragment = reference.getFragment();
                var url = '<' + scheme + ':';
                if (authority) url += '//' + authority;
                if (path) url += path;
                if (query) url += '?' + query;
                if (fragment) url += '#' + fragment;
                url += '>';
                expect(url).to.equal(expected);
            });
        });

    });

});

const tests = [
    '<https://google.com/>',
    '<http://derk:pw@google.com:8080/calendar?format=week&hours=8#today>',
    '<bali:RKVVW90GXFP44PBTLFLF8ZG8NR425JYM>',
    '<bali:RKVVW90GXFP44PBTLFLF8ZG8NR425JYMv3.1>',
    '<bali:/Text?[$protocol:v1,$tag:#K21FK6QD5G0CZ54S773DSTSTC827Q3VS,$version:v1.2.3,$digest:none]>',
    '<bali:/bali/elements/Text?version=6.12.1>',
    '<bali:/abcCorp/reports/2010/Q3>'
];
