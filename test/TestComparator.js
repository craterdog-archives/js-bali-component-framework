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
const bali = require('../').api();
const comparator = bali.comparator(undefined, debug);

describe('Bali Nebula™ Component Framework - Comparator', function() {

    describe('Test undefined comparisons', function() {

        it('should handle two undefined objects', function() {
            expect(comparator.compareComponents()).to.equal(0);
        });

        it('should handle one undefined object', function() {
            expect(comparator.compareComponents('foobar')).to.equal(1);
            expect(comparator.compareComponents(undefined, 'foobar')).to.equal(-1);
        });

    });

    describe('Test numeric comparisons', function() {
        const angle = bali.angle.PI;
        const number = bali.number(3, 4);
        const percent = bali.percent(25);
        const probability = bali.probability(0.5);

        it('should handle angles', function() {
            expect(comparator.compareComponents(angle, angle)).to.equal(0);
            expect(comparator.compareComponents(angle, number)).to.equal(1);
            expect(comparator.compareComponents(angle, percent)).to.equal(1);
            expect(comparator.compareComponents(angle, probability)).to.equal(1);
        });

        it('should handle numbers', function() {
            expect(comparator.compareComponents(number, angle)).to.equal(-1);
            expect(comparator.compareComponents(number, number)).to.equal(0);
            expect(comparator.compareComponents(number, percent)).to.equal(1);
            expect(comparator.compareComponents(number, probability)).to.equal(1);
        });

        it('should handle percents', function() {
            expect(comparator.compareComponents(percent, angle)).to.equal(-1);
            expect(comparator.compareComponents(percent, number)).to.equal(-1);
            expect(comparator.compareComponents(percent, percent)).to.equal(0);
            expect(comparator.compareComponents(percent, probability)).to.equal(-1);
        });

        it('should handle probabilities', function() {
            expect(comparator.compareComponents(probability, angle)).to.equal(-1);
            expect(comparator.compareComponents(probability, number)).to.equal(-1);
            expect(comparator.compareComponents(probability, percent)).to.equal(1);
            expect(comparator.compareComponents(probability, probability)).to.equal(0);
        });

    });

    describe('Test boolean comparisons', function() {

        it('should handle probabilities', function() {
            const probability = bali.probability(0.5);
            expect(comparator.compareComponents(probability, true)).to.equal(-1);
            expect(comparator.compareComponents(true, probability)).to.equal(1);
            expect(comparator.compareComponents(probability, false)).to.equal(1);
            expect(comparator.compareComponents(false, probability)).to.equal(-1);
        });

    });

    describe('Test string comparisons', function() {

        it('should handle angles', function() {
            const angle = bali.angle.PI;
            expect(comparator.compareComponents(angle, '~π')).to.equal(0);
            expect(comparator.compareComponents('~0', angle)).to.equal(-1);
        });

        it('should handle binaries', function() {
            const binary = bali.binary(Buffer.from([1, 2, 3, 4]));
            expect(comparator.compareComponents(binary, "'0410610'")).to.equal(0);
            expect(comparator.compareComponents("'0410618'", binary)).to.equal(1);
        });

        it('should handle durations', function() {
            const duration = bali.duration('P1W');
            expect(comparator.compareComponents(duration, '~P1D')).to.equal(1);
            expect(comparator.compareComponents('~PT1H', duration)).to.equal(-1);
        });

        it('should handle moments', function() {
            const moment = bali.moment('2020-04-01T13:24:56.789');
            expect(comparator.compareComponents(moment, '<2020-04-01T13:24:56.789>')).to.equal(0);
            expect(comparator.compareComponents('<2020-04-01T13:24:56.790>', moment)).to.equal(1);
        });

        it('should handle names', function() {
            const name = bali.name(['bali', 'collections', 'Set', 'v1']);
            expect(comparator.compareComponents(name, '/bali/collections/Set/v2')).to.equal(-1);
            expect(comparator.compareComponents('/bali/collections/Stack/v1', name)).to.equal(1);
        });

        it('should handle numbers', function() {
            const number = bali.number(3, 4);
            expect(comparator.compareComponents(number, '(3, 4i)')).to.equal(0);
            expect(comparator.compareComponents('(3, 5i)', number)).to.equal(1);
        });

        it('should handle patterns', function() {
            const pattern = bali.pattern();
            expect(comparator.compareComponents(pattern, '"^none$"?')).to.equal(0);
            expect(comparator.compareComponents('any', pattern)).to.equal(-1);
        });

        it('should handle percents', function() {
            const percent = bali.percent(25);
            expect(comparator.compareComponents(percent, '25%')).to.equal(0);
            expect(comparator.compareComponents('5%', percent)).to.equal(-1);
        });

        it('should handle probabilities', function() {
            const probability = bali.probability(0.5);
            expect(comparator.compareComponents(probability, 'false')).to.equal(1);
            expect(comparator.compareComponents('true', probability)).to.equal(1);
        });

        it('should handle ranges', function() {
            const range = bali.range();
            expect(comparator.compareComponents(range, '..0')).to.equal(1);
            expect(comparator.compareComponents('0..', range)).to.equal(1);
        });

        it('should handle references', function() {
            const reference = bali.reference('https://google.com');
            expect(comparator.compareComponents(reference, 'https://amazon.com')).to.equal(1);
            expect(comparator.compareComponents('https://apple.com', reference)).to.equal(-1);
        });

        it('should handle procedures', function() {
            const procedure = bali.component('{ $foo := "bar" }');
            expect(comparator.compareComponents(procedure, '{ }')).to.equal(1);
            expect(comparator.compareComponents('{ break loop }', procedure)).to.equal(-1);
        });

        it('should handle symbols', function() {
            const symbol = bali.symbol('foobar');
            expect(comparator.compareComponents(symbol, '$foobar')).to.equal(0);
            expect(comparator.compareComponents('$foobaz', symbol)).to.equal(1);
        });

        it('should handle tags', function() {
            const tag = bali.tag('34VWNHPBAC8MH89L727W3VGYYVGC7CRK');
            expect(comparator.compareComponents(tag, 'YF79WQV7NTWH4FGA2JW12GVGHYBJWAYG')).to.equal(-1);
            expect(comparator.compareComponents('GC95LWMGL87XQMVG5NNZ4NL31CWYVTXH', tag)).to.equal(1);
        });

        it('should handle text', function() {
            const text = bali.text('foobar');
            expect(comparator.compareComponents(text, 'foobar')).to.equal(0);
            expect(comparator.compareComponents('foobaz', text)).to.equal(1);
        });

        it('should handle versions', function() {
            const version = bali.version([1, 2, 3]);
            expect(comparator.compareComponents(version, 'v1.2')).to.equal(1);
            expect(comparator.compareComponents('v1.2.3.4', version)).to.equal(1);
        });

    });

    describe('Test array comparisons', function() {

        it('should handle numbers', function() {
            const array = [1, 2, 3];
            expect(comparator.compareComponents(array, [1, 3])).to.equal(-1);
            expect(comparator.compareComponents([1, 2, 3, 4], array)).to.equal(1);
        });

        it('should handle strings', function() {
            const array = ['alpha', 'beta', 'gamma'];
            expect(comparator.compareComponents(array, ['alpha', 'delta'])).to.equal(-1);
            expect(comparator.compareComponents(['alpha', 'beta', 'delta', 'gamma'], array)).to.equal(-1);
        });

    });

    describe('Test structure comparisons', function() {

        it('should handle Bali exceptions', function() {
            const bad = bali.exception(bali.catalog({
                $text: 'Something bad happened.'
            }));
            const worse = bali.exception(bali.catalog({
                $text: 'Something worse happened.'
            }));
            expect(comparator.compareComponents(bad, worse)).to.equal(-1);
            expect(comparator.compareComponents(bad, bad)).to.equal(0);
            expect(comparator.compareComponents(worse, bad)).to.equal(1);
        });

        it('should handle procedures', function() {
            const bar = bali.component('{ $foo := "bar" }');
            const baz = bali.component('{ $foo := "baz" }');
            expect(comparator.compareComponents(bar, baz)).to.equal(-1);
            expect(comparator.compareComponents(bar, bar)).to.equal(0);
            expect(comparator.compareComponents(baz, bar)).to.equal(1);
        });

        it('should handle associations', function() {
            const foobar = bali.association('$foo', "bar");
            const foobaz = bali.association('$foo', "baz");
            const footbar = bali.association('$foot', "bar");
            const footbaz = bali.association('$foot', "baz");
            expect(comparator.compareComponents(foobar, foobar)).to.equal(0);
            expect(comparator.compareComponents(foobar, foobaz)).to.equal(-1);
            expect(comparator.compareComponents(foobar, footbar)).to.equal(-1);
            expect(comparator.compareComponents(foobar, footbaz)).to.equal(-1);
            expect(comparator.compareComponents(foobaz, foobar)).to.equal(1);
            expect(comparator.compareComponents(foobaz, footbar)).to.equal(-1);
            expect(comparator.compareComponents(foobaz, footbaz)).to.equal(-1);
            expect(comparator.compareComponents(footbar, foobar)).to.equal(1);
            expect(comparator.compareComponents(footbar, foobaz)).to.equal(1);
            expect(comparator.compareComponents(footbar, footbaz)).to.equal(-1);
            expect(comparator.compareComponents(footbaz, foobar)).to.equal(1);
            expect(comparator.compareComponents(footbaz, foobaz)).to.equal(1);
            expect(comparator.compareComponents(footbaz, footbar)).to.equal(1);
        });

    });

});
