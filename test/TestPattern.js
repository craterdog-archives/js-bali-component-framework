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
const comparator = bali.comparator(debug);


describe('Bali Nebula™ Component Framework - Pattern', function() {

    describe('Test pattern constructors', function() {

        it('should construct patterns using literals', function() {
            expect(bali.pattern.NONE.toString()).to.equal('none');
            expect(bali.pattern.ANY.toString()).to.equal('any');
        });

        it('should compare patterns for equality', function() {
            expect(comparator.areEqual(bali.pattern(), bali.pattern.NONE)).to.equal(true);
            expect(comparator.areEqual(bali.pattern.NONE, bali.component('none'))).to.equal(true);
            expect(comparator.areEqual(bali.pattern.ANY, bali.component('any'))).to.equal(true);
        });

    });

    describe('Test pattern methods', function() {

        it('should recognize text string patterns', function() {
            expect(bali.pattern.ANY.matches(bali.text('"pretty much anything"'))).to.equal(true);
            expect(bali.component('"bab.*"?').matches(bali.text('"babbling"'))).to.equal(true);
            expect(bali.component('"bab.*"?').matches(bali.text('"bubbling"'))).to.equal(false);
            expect(bali.pattern.NONE.matches(bali.text('"troubling"'))).to.equal(false);
        });

        it('should recognize composite patterns', function() {
            expect(bali.pattern.ANY.matches(bali.list([1, 2, 3]))).to.equal(true);
            expect(bali.component('"\\[\\s*([1-9]\\s*)*\\]"?').matches(bali.list([1, 2, 3]))).to.equal(true);
            expect(bali.pattern.NONE.matches(bali.list([1, 2, 3]))).to.equal(false);
        });

    });

    describe('Test the comparator doesMatch method', function() {

        it('the none pattern should only match the none pattern', function() {
            expect(comparator.doesMatch(bali.pattern(), bali.pattern.NONE)).to.equal(true);
            expect(comparator.doesMatch(bali.pattern('^none$'), bali.pattern.NONE)).to.equal(true);
            expect(comparator.doesMatch(bali.pattern.NONE, bali.pattern.NONE)).to.equal(true);
        });

        it('nothing else should match the none pattern', function() {
            expect(comparator.doesMatch(bali.pattern.ANY, bali.pattern.NONE)).to.equal(false);
            expect(comparator.doesMatch(bali.text('any'), bali.pattern.NONE)).to.equal(false);
            expect(comparator.doesMatch(bali.text('none'), bali.pattern.NONE)).to.equal(false);
            expect(comparator.doesMatch(bali.text('foobar'), bali.pattern.NONE)).to.equal(false);
        });

        it('should match the any pattern', function() {
            expect(comparator.doesMatch(bali.pattern(), bali.pattern.ANY)).to.equal(true);
            expect(comparator.doesMatch(bali.pattern.NONE, bali.pattern.ANY)).to.equal(true);
            expect(comparator.doesMatch(bali.pattern.ANY, bali.pattern.ANY)).to.equal(true);
            expect(comparator.doesMatch(bali.text('any'), bali.pattern.ANY)).to.equal(true);
            expect(comparator.doesMatch(bali.text('none'), bali.pattern.ANY)).to.equal(true);
            expect(comparator.doesMatch(bali.text('foobar'), bali.pattern.ANY)).to.equal(true);
        });

        it('should match matching patterns', function() {
            expect(comparator.doesMatch(bali.text('foobar'), bali.text('foobar'))).to.equal(true);
            expect(comparator.doesMatch(bali.range(1, '..', 5), bali.range(1, '..', 5))).to.equal(true);
            expect(comparator.doesMatch(bali.list(['"foo"', '"bar"', '"baz"']), bali.list([bali.pattern('^"fo+"')]))).to.equal(true);
            expect(comparator.doesMatch(bali.catalog({
                $foo: '"bar"',
                $bar: '"baz"',
                $baz: '"foo"'
            }), bali.catalog({
                $baz: '"foo"',
                $foo: 'any'  // should match (order doesn't matter)
            }))).to.equal(true);
            expect(comparator.doesMatch(bali.catalog({
                $foo: [1, 2, 3],
                $bar: {
                    $alpha: '$a',
                    $omega: 'none',
                    $beta: '$b',
                    $delta: '$d',
                    $theta: 'none'
                }
            }), bali.catalog({
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
            expect(comparator.doesMatch(bali.text('foobar'), bali.text('foobaz'))).to.equal(false);
            expect(comparator.doesMatch(bali.range(1, '..', 5), bali.range(0, '..', 5))).to.equal(false);
            expect(comparator.doesMatch(bali.list(['"foo"', '"bar"', '"baz"']), bali.list([bali.pattern('bo+')]))).to.equal(false);
            expect(comparator.doesMatch(bali.catalog({
                $foo: '"bar"',
                $bar: '"baz"',
                $baz: '"foo"'
            }), bali.catalog({
                $baz: '"foo"',
                $foo: 'none'  // should fail since there is an actual value for that key
            }))).to.equal(false);
            expect(comparator.doesMatch(bali.catalog({
                $foo: [1, 2, 3],
                $bar: {
                    $alpha: '$a',
                    $beta: '$b',
                    $delta: '$d'
                }
            }), bali.catalog({
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
