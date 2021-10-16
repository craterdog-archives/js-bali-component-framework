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


describe('Bali Nebula™ Component Framework - Moment', function() {

    describe('Test moment in time constructors', function() {

        it('should construct moments in time using literals', function() {
            expect(bali.component('<2017-12-30T17:38:35.726>').toString()).to.equal('<2017-12-30T17:38:35.726>');
            expect(bali.component('<-11000>').toString()).to.equal('<-11000>');
            // TODO: add tests for parameterized locations
        });

        it('should construct current moments in time', function() {
            const time = bali.moment();
            const string = time.toString();
            expect(string.length).to.equal(25);
        });

        it('should construct a moment and format the same', function() {
            tests.forEach(function(expected) {
                const time = bali.component(expected);
                const string = time.toString();
                expect(string).to.equal(expected);
            });
        });

        it('should handle all possible months', function() {
            var month = 0;
            expect(
                function() {
                    const bad = bali.component('<2021-' + ('0' + month++).slice(-2) + '-01>');
                }
            ).to.throw();
            while (month <= 12) {
                bali.component('<2021-' + ('0' + month++).slice(-2) + '-01>');
            }
            expect(
                function() {
                    const bad = bali.component('<2021-' + ('0' + month).slice(-2) + '-01>');
                }
            ).to.throw();
        });

        it('should handle all possible days', function() {
            var day = 0;
            expect(
                function() {
                    const bad = bali.component('<2021-01-' + ('0' + day++).slice(-2) + '>');
                }
            ).to.throw();
            while (day <= 31) {
                bali.component('<2021-01-' + ('0' + day++).slice(-2) + '>');
            }
            expect(
                function() {
                    const bad = bali.component('<2021-01-' + ('0' + day).slice(-2) + '>');
                }
            ).to.throw();
        });

        it('should handle all possible hours', function() {
            var hour = 0;
            while (hour <= 23) {
                bali.component('<2021-01-01T' + ('0' + hour++).slice(-2) + '>');
            }
            expect(
                function() {
                    const bad = bali.component('<2021-01-01T' + ('0' + hour).slice(-2) + '>');
                }
            ).to.throw();
        });

        it('should handle all possible minutes', function() {
            var minute = 0;
            while (minute <= 59) {
                bali.component('<2021-01-01T00:' + ('0' + minute++).slice(-2) + '>');
            }
            expect(
                function() {
                    const bad = bali.component('<2021-01-01T00:' + ('0' + minute).slice(-2) + '>');
                }
            ).to.throw();
        });

        it('should handle all possible seconds', function() {
            var second = 0;
            while (second <= 59) {
                bali.component('<2021-01-01T00:00:' + ('0' + second++).slice(-2) + '>');
            }
            expect(
                function() {
                    const bad = bali.component('<2021-01-01T00:00:' + ('0' + second).slice(-2) + '>');
                }
            ).to.throw();
        });

        it('should handle all possible milliseconds', function() {
            var millisecond = 0;
            while (millisecond <= 999) {
                bali.component('<2021-01-01T00:00:00.' + ('0' + millisecond++).slice(-3) + '>');
            }
        });

    });

    describe('Test moment methods', function() {

        it('should compare two moments correctly', function() {
            const comparator = new bali.comparator();
            const first = bali.component('<2017-12-30T17:38:35>');
            expect(first.getHash()).to.exist;
            const second = bali.component('<2017-12-30T17:38:39>');
            expect(second.getHash()).to.exist;
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.areEqual(first, first)).to.equal(true);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should retrieve millisecond correctly', function() {
            const moment = bali.component('<2020-12-11T10:09:08.076>');
            expect(moment.getMillisecond()).to.equal(76);
        });

        it('should retrieve second correctly', function() {
            const moment = bali.component('<2020-12-11T10:09:08.076>');
            expect(moment.getSecond()).to.equal(8);
        });

        it('should retrieve minute correctly', function() {
            const moment = bali.component('<2020-12-11T10:09:08.076>');
            expect(moment.getMinute()).to.equal(9);
        });

        it('should retrieve hour correctly', function() {
            const moment = bali.component('<2020-12-11T10:09:08.076>');
            expect(moment.getHour()).to.equal(10);
        });

        it('should retrieve day correctly', function() {
            const moment = bali.component('<2020-12-11T10:09:08.076>');
            expect(moment.getDay()).to.equal(11);
        });

        it('should retrieve month correctly', function() {
            const moment = bali.component('<2020-12-11T10:09:08.076>');
            expect(moment.getMonth()).to.equal(12);
        });

        it('should retrieve year correctly', function() {
            const moment = bali.component('<2020-12-11T10:09:08.076>');
            expect(moment.getYear()).to.equal(2020);
        });

    });

    describe('Test moment functions', function() {

        it('should calculate durations correctly', function() {
            const first = bali.component('<2017-12-30T17:38:35>');
            const second = bali.component('<2017-12-30T17:38:39>');
            const duration = bali.moment.duration(second, first);
            const later = bali.moment.later(first, duration);
            const earlier = bali.moment.earlier(later, duration);
            const comparator = new bali.comparator();
            expect(comparator.areEqual(earlier, first)).to.equal(true);
            expect(comparator.areEqual(later, second)).to.equal(true);
        });

    });

});

const tests = [
    '<2017-12-30T17:38:35.726>',
    '<2017-12-30T17:38:35>',
    '<2017-12-30T17:38>',
    '<2017-12-30T17>',
    '<2017-12-30>',
    '<2017-12>',
    '<2017>',
    '<11000>'
];

