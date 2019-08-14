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
const bali = require('../');


describe('Bali Component Framework™', function() {

    describe('Test pattern constructors', function() {

        it('should construct patterns using literals', function() {
            expect(bali.pattern.NONE.toString()).to.equal('none');
            expect(bali.pattern.ANY.toString()).to.equal('any');
        });

        it('should compare patterns for equality', function() {
            expect(bali.pattern().isEqualTo(bali.pattern.NONE)).to.equal(true);
            expect(bali.pattern.NONE.isEqualTo(bali.parse('none'))).to.equal(true);
            expect(bali.pattern.ANY.isEqualTo(bali.parse('any'))).to.equal(true);
        });

    });

    describe('Test pattern methods', function() {

        it('should recognize text string patterns', function() {
            expect(bali.pattern.ANY.matches(bali.text('"pretty much anything"'))).to.equal(true);
            expect(bali.parse('"bab.*"?').matches(bali.text('"babbling"'))).to.equal(true);
            expect(bali.parse('"bab.*"?').matches(bali.text('"bubbling"'))).to.equal(false);
            expect(bali.pattern.NONE.matches(bali.text('"troubling"'))).to.equal(false);
        });

        it('should recognize structure patterns', function() {
            expect(bali.pattern.ANY.matches(bali.list([1, 2, 3]))).to.equal(true);
            expect(bali.parse('"\\[([1-9](, )?)*\\]"?').matches(bali.list([1, 2, 3]))).to.equal(true);
            expect(bali.pattern.NONE.matches(bali.list([1, 2, 3]))).to.equal(false);
        });

    });

    describe('Test the component isMatchedBy method', function() {

        it('the none pattern should only match the none pattern', function() {
            expect(bali.pattern().isMatchedBy(bali.pattern.NONE)).to.equal(true);
            expect(bali.pattern('^none$').isMatchedBy(bali.pattern.NONE)).to.equal(true);
            expect(bali.pattern.NONE.isMatchedBy(bali.pattern.NONE)).to.equal(true);
        });

        it('nothing else should match the none pattern', function() {
            expect(bali.pattern.ANY.isMatchedBy(bali.pattern.NONE)).to.equal(false);
            expect(bali.text('any').isMatchedBy(bali.pattern.NONE)).to.equal(false);
            expect(bali.text('none').isMatchedBy(bali.pattern.NONE)).to.equal(false);
            expect(bali.text('foobar').isMatchedBy(bali.pattern.NONE)).to.equal(false);
        });

        it('should match the any pattern', function() {
            expect(bali.pattern().isMatchedBy(bali.pattern.ANY)).to.equal(true);
            expect(bali.pattern.NONE.isMatchedBy(bali.pattern.ANY)).to.equal(true);
            expect(bali.pattern.ANY.isMatchedBy(bali.pattern.ANY)).to.equal(true);
            expect(bali.text('any').isMatchedBy(bali.pattern.ANY)).to.equal(true);
            expect(bali.text('none').isMatchedBy(bali.pattern.ANY)).to.equal(true);
            expect(bali.text('foobar').isMatchedBy(bali.pattern.ANY)).to.equal(true);
        });

        it('should match matching patterns', function() {
            expect(bali.text('foobar').isMatchedBy(bali.text('foobar'))).to.equal(true);
            expect(bali.range(1, 5).isMatchedBy(bali.range(bali.pattern.ANY, 5))).to.equal(true);
            expect(bali.list(['"foo"', '"bar"', '"baz"']).isMatchedBy(bali.list([bali.pattern('^"fo+"')]))).to.equal(true);
            expect(bali.catalog({
                $foo: '"bar"',
                $bar: '"baz"',
                $baz: '"foo"'
            }).isMatchedBy(bali.catalog({
                $baz: '"foo"',
                $foo: 'any'  // should match (order doesn't matter)
            }))).to.equal(true);
            expect(bali.catalog({
                $foo: [1, 2, 3],
                $bar: {
                    $alpha: '$a',
                    $omega: 'none',
                    $beta: '$b',
                    $delta: '$d',
                    $theta: 'none'
                }
            }).isMatchedBy(bali.catalog({
                $foo: [2],
                $bar: {
                    $delta: '$d',
                    $theta: 'none',  // should match since the actual value is also 'none'
                    $beta: 'any',  // should match (order doesn't matter)
                    $epsilon: 'any',  // should match even if the actual value doesn't exist
                    $omega: 'any',  // should match even if the actual value is 'none'
                    $gamma: 'none'  // should match since there is no actual value for that key
                }
            }))).to.equal(true);
        });

        it('should not match mismatched patterns', function() {
            expect(bali.text('foobar').isMatchedBy(bali.text('foobaz'))).to.equal(false);
            expect(bali.range(1, 5).isMatchedBy(bali.range(bali.pattern.NONE, 5))).to.equal(false);
            expect(bali.list(['"foo"', '"bar"', '"baz"']).isMatchedBy(bali.list([bali.pattern('bo+')]))).to.equal(false);
            expect(bali.catalog({
                $foo: '"bar"',
                $bar: '"baz"',
                $baz: '"foo"'
            }).isMatchedBy(bali.catalog({
                $baz: '"foo"',
                $foo: 'none'  // should fail since there is an actual value for that key
            }))).to.equal(false);
            expect(bali.catalog({
                $foo: [1, 2, 3],
                $bar: {
                    $alpha: '$a',
                    $beta: '$b',
                    $delta: '$d'
                }
            }).isMatchedBy(bali.catalog({
                $foo: [4],
                $bar: {
                    $beta: '$b',
                    $gamma: '$g',  // should fail since there is not actual value for that key
                    $delta: '$d'
                }
            }))).to.equal(false);
        });

    });

});
