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


describe('Bali Nebula™ Component Framework - Resource', function() {

    describe('Test resource constructors', function() {

        it('should construct resources using literals', function() {
            expect(bali.component('<https://google.com/>').toString()).to.equal('<https://google.com/>');
            expect(bali.component('<bali:RKVVW90GXFP44PBTLFLF8ZG8NR425JYMv3.1>').toString()).to.equal('<bali:RKVVW90GXFP44PBTLFLF8ZG8NR425JYMv3.1>');
        });

        it('should throw an exception for an empty resource', function() {
            expect(
                function() {
                    const empty = bali.resource();
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.resource('');
                }
            ).to.throw();
            expect(
                function() {
                    const empty = bali.component('<>');
                }
            ).to.throw();
        });

        it('should construct resources and format matching resources', function() {
            tests.forEach(function(expected) {
                const resource = bali.component(expected);
                expect(resource.getHash()).to.exist;
                const string = resource.toString();
                expect(string).to.equal(expected);
                const scheme = resource.getScheme();
                const authority = resource.getAuthority();
                const path = resource.getPath();
                const query = resource.getQuery();
                const fragment = resource.getFragment();
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
