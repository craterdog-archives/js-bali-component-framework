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
const comparator = bali.comparator(debug);

describe('Bali Nebula™ Component Framework - Comparator', function() {

    describe('Test undefined comparisons', function() {

        it('should handle two undefined objects', function() {
            expect(comparator.ranking()).to.equal(0);
        });

        it('should handle one undefined object', function() {
            expect(comparator.ranking('foobar')).to.equal(1);
            expect(comparator.ranking(undefined, 'foobar')).to.equal(-1);
        });

    });

    describe('Test numeric comparisons', function() {
        const angle = bali.angle.PI;
        const number = bali.number(3, 4);
        const percentage = bali.percentage(25);
        const probability = bali.probability(0.5);
        expect(comparator.getHash()).to.exist;

        it('should handle angles', function() {
            expect(comparator.ranking(angle, angle)).to.equal(0);
            expect(comparator.ranking(angle, number)).to.equal(-1);
            expect(comparator.ranking(angle, percentage)).to.equal(-1);
            expect(comparator.ranking(angle, probability)).to.equal(-1);
        });

        it('should handle numbers', function() {
            expect(comparator.ranking(number, angle)).to.equal(1);
            expect(comparator.ranking(number, number)).to.equal(0);
            expect(comparator.ranking(number, percentage)).to.equal(-1);
            expect(comparator.ranking(number, probability)).to.equal(-1);
        });

        it('should handle percentages', function() {
            expect(comparator.ranking(percentage, angle)).to.equal(1);
            expect(comparator.ranking(percentage, number)).to.equal(1);
            expect(comparator.ranking(percentage, percentage)).to.equal(0);
            expect(comparator.ranking(percentage, probability)).to.equal(-1);
        });

        it('should handle probabilities', function() {
            expect(comparator.ranking(probability, angle)).to.equal(1);
            expect(comparator.ranking(probability, number)).to.equal(1);
            expect(comparator.ranking(probability, percentage)).to.equal(1);
            expect(comparator.ranking(probability, probability)).to.equal(0);
        });

    });

    describe('Test boolean comparisons', function() {

        it('should handle probabilities', function() {
            const probability = bali.probability(0.5);
            expect(comparator.ranking(probability, true)).to.equal(1);
            expect(comparator.ranking(true, probability)).to.equal(-1);
            expect(comparator.ranking(probability, false)).to.equal(1);
            expect(comparator.ranking(false, probability)).to.equal(-1);
        });

    });

    describe('Test string comparisons', function() {

        it('should handle angles', function() {
            const angle = bali.angle.PI;
            expect(comparator.ranking(angle, '~π')).to.equal(0);
            expect(comparator.ranking('~0', angle)).to.equal(-1);
        });

        it('should handle binaries', function() {
            const binary = bali.binary(Buffer.from([1, 2, 3, 4]));
            expect(comparator.ranking(binary, "'0410610'")).to.equal(0);
            expect(comparator.ranking("'0410618'", binary)).to.equal(1);
        });

        it('should handle durations', function() {
            const duration = bali.duration('P1W');
            expect(comparator.ranking(duration, '~P1D')).to.equal(1);
            expect(comparator.ranking('~PT1H', duration)).to.equal(-1);
        });

        it('should handle moments', function() {
            const moment = bali.moment('2020-04-01T13:24:56.789');
            expect(comparator.ranking(moment, '<2020-04-01T13:24:56.789>')).to.equal(0);
            expect(comparator.ranking('<2020-04-01T13:24:56.790>', moment)).to.equal(1);
        });

        it('should handle names', function() {
            const name = bali.name(['bali', 'collections', 'Set', 'v1']);
            expect(comparator.ranking(name, '/nebula/collections/Set/v2')).to.equal(-1);
            expect(comparator.ranking('/nebula/collections/Stack/v1', name)).to.equal(1);
        });

        it('should handle numbers', function() {
            const number = bali.number(3, 4);
            expect(comparator.ranking(number, '(3, 4i)')).to.equal(0);
            expect(comparator.ranking('(3, 5i)', number)).to.equal(1);
        });

        it('should handle patterns', function() {
            const pattern = bali.pattern();
            expect(comparator.ranking(pattern, '"^none$"?')).to.equal(0);
            expect(comparator.ranking('any', pattern)).to.equal(-1);
        });

        it('should handle percentages', function() {
            const percentage = bali.percentage(25);
            expect(comparator.ranking(percentage, '25%')).to.equal(0);
            expect(comparator.ranking('5%', percentage)).to.equal(-1);
        });

        it('should handle probabilities', function() {
            const probability = bali.probability(0.5);
            expect(comparator.ranking(probability, 'false')).to.equal(1);
            expect(comparator.ranking('true', probability)).to.equal(-1);
        });

        it('should handle ranges', function() {
            const range = bali.range();
            expect(comparator.ranking(range, '[..0]')).to.equal(1);
            expect(comparator.ranking('[..0]', range)).to.equal(-1);
            expect(comparator.ranking(range, '[0..]')).to.equal(-1);
            expect(comparator.ranking('[0..]', range)).to.equal(1);
        });

        it('should handle resources', function() {
            const resource = bali.resource('https://google.com');
            expect(comparator.ranking(resource, '<https://amazon.com>')).to.equal(1);
            expect(comparator.ranking('<https://apple.com>', resource)).to.equal(-1);
        });

        it('should handle procedures', function() {
            const procedure = bali.component('{ $foo := "bar" }');
            expect(comparator.ranking(procedure, '{ }')).to.equal(1);
            expect(comparator.ranking('{ break loop }', procedure)).to.equal(-1);
        });

        it('should handle symbols', function() {
            const symbol = bali.symbol('foobar');
            expect(comparator.ranking(symbol, '$foobar')).to.equal(0);
            expect(comparator.ranking('$foobaz', symbol)).to.equal(1);
        });

        it('should handle tags', function() {
            const tag = bali.tag('34VWNHPBAC8MH89L727W3VGYYVGC7CRK');
            expect(comparator.ranking(tag, 'YF79WQV7NTWH4FGA2JW12GVGHYBJWAYG')).to.equal(-1);
            expect(comparator.ranking('GC95LWMGL87XQMVG5NNZ4NL31CWYVTXH', tag)).to.equal(1);
        });

        it('should handle text', function() {
            const text = bali.text('foobar');
            expect(comparator.ranking(text, 'foobar')).to.equal(0);
            expect(comparator.ranking('foobaz', text)).to.equal(1);
        });

        it('should handle versions', function() {
            const version = bali.version([1, 2, 3]);
            expect(comparator.ranking(version, 'v1.2')).to.equal(1);
            expect(comparator.ranking('v1.2.3.4', version)).to.equal(1);
        });

    });

    describe('Test array comparisons', function() {

        it('should handle numbers', function() {
            const array = [1, 2, 3];
            expect(comparator.ranking(array, [1, 3])).to.equal(-1);
            expect(comparator.ranking(array, array)).to.equal(0);
            expect(comparator.ranking([1, 2, 3, 4], array)).to.equal(1);
        });

        it('should handle strings', function() {
            const array = ['alpha', 'beta', 'gamma'];
            expect(comparator.ranking(array, ['alpha', 'delta'])).to.equal(-1);
            expect(comparator.ranking(array, array)).to.equal(0);
            expect(comparator.ranking(['alpha', 'beta', 'delta', 'gamma'], array)).to.equal(-1);
        });

    });

    describe('Test composite comparisons', function() {

        it('should handle Bali exceptions', function() {
            const bad = bali.exception({
                $text: 'Something bad happened.'
            });
            const worse = bali.exception({
                $text: 'Something worse happened.'
            });
            expect(comparator.ranking(bad, worse)).to.equal(-1);
            expect(comparator.ranking(bad, bad)).to.equal(0);
            expect(comparator.ranking(worse, bad)).to.equal(1);
        });

        it('should handle procedures', function() {
            const bar = bali.component('{ $foo := "bar" }');
            const baz = bali.component('{ $foo := "baz" }');
            expect(comparator.ranking(bar, baz)).to.equal(-1);
            expect(comparator.ranking(bar, bar)).to.equal(0);
            expect(comparator.ranking(baz, bar)).to.equal(1);
        });

        it('should handle associations', function() {
            const foobar = bali.association('$foo', "bar");
            const foobaz = bali.association('$foo', "baz");
            const footbar = bali.association('$foot', "bar");
            const footbaz = bali.association('$foot', "baz");
            expect(comparator.ranking(foobar, foobar)).to.equal(0);
            expect(comparator.ranking(foobar, foobaz)).to.equal(-1);
            expect(comparator.ranking(foobar, footbar)).to.equal(-1);
            expect(comparator.ranking(foobar, footbaz)).to.equal(-1);
            expect(comparator.ranking(foobaz, foobar)).to.equal(1);
            expect(comparator.ranking(foobaz, footbar)).to.equal(-1);
            expect(comparator.ranking(foobaz, footbaz)).to.equal(-1);
            expect(comparator.ranking(footbar, foobar)).to.equal(1);
            expect(comparator.ranking(footbar, foobaz)).to.equal(1);
            expect(comparator.ranking(footbar, footbaz)).to.equal(-1);
            expect(comparator.ranking(footbaz, foobar)).to.equal(1);
            expect(comparator.ranking(footbaz, foobaz)).to.equal(1);
            expect(comparator.ranking(footbaz, footbar)).to.equal(1);
        });

    });

    describe('Test collection comparisons', function() {

        it('should handle lists', function() {
            const short = bali.list([1, 2]);
            const medium = bali.list([1, 2, 3]);
            const next = bali.list([1, 2, 4]);
            const long = bali.list([1, 2, 3, 4]);
            expect(comparator.ranking(short, short)).to.equal(0);
            expect(comparator.ranking(short, medium)).to.equal(-1);
            expect(comparator.ranking(short, next)).to.equal(-1);
            expect(comparator.ranking(short, long)).to.equal(-1);
            expect(comparator.ranking(medium, short)).to.equal(1);
            expect(comparator.ranking(medium, next)).to.equal(-1);
            expect(comparator.ranking(medium, long)).to.equal(-1);
            expect(comparator.ranking(next, short)).to.equal(1);
            expect(comparator.ranking(next, medium)).to.equal(1);
            expect(comparator.ranking(next, long)).to.equal(1);
            expect(comparator.ranking(long, short)).to.equal(1);
            expect(comparator.ranking(long, medium)).to.equal(1);
            expect(comparator.ranking(long, next)).to.equal(-1);
        });

        it('should handle catalogs', function() {
            const short = bali.catalog({$alpha: 1, $beta: 2});
            const medium = bali.catalog({$alpha: 1, $beta: 2, $gamma: 3});
            const next = bali.catalog({$alpha: 1, $beta: 2, $gamma: 4});
            const long = bali.catalog({$alpha: 1, $beta: 2, $gamma: 3, $delta: 4});
            expect(comparator.ranking(short, short)).to.equal(0);
            expect(comparator.ranking(short, medium)).to.equal(-1);
            expect(comparator.ranking(short, next)).to.equal(-1);
            expect(comparator.ranking(short, long)).to.equal(-1);
            expect(comparator.ranking(medium, short)).to.equal(1);
            expect(comparator.ranking(medium, next)).to.equal(-1);
            expect(comparator.ranking(medium, long)).to.equal(-1);
            expect(comparator.ranking(next, short)).to.equal(1);
            expect(comparator.ranking(next, medium)).to.equal(1);
            expect(comparator.ranking(next, long)).to.equal(1);
            expect(comparator.ranking(long, short)).to.equal(1);
            expect(comparator.ranking(long, medium)).to.equal(1);
            expect(comparator.ranking(long, next)).to.equal(-1);
        });

    });

    describe('Test element comparisons', function() {

        it('should handle angles', function() {
            const first = bali.angle();
            const second = bali.angle.PI;
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle binaries', function() {
            const first = bali.binary(Buffer.from([1, 2, 3, 4]));
            const second = bali.binary(Buffer.from([1, 2, 4]));
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle durations', function() {
            const first = bali.duration('P1W');
            const second = bali.duration('P1M');
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle moments', function() {
            const first = bali.moment('2020-04-01T13:24:56.789');
            const second = bali.moment('2020-04-01T13:24:56.790');
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle names', function() {
            const first = bali.name(['bali', 'collections', 'Set', 'v2']);
            const second = bali.name(['bali', 'collections', 'Stack', 'v1']);
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle numbers', function() {
            const first = bali.number(3, 4);
            const second = bali.number(3, 5);
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle patterns', function() {
            const first = bali.pattern.ANY;
            const second = bali.pattern.NONE;
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle percentages', function() {
            const first = bali.percentage(25);
            const second = bali.percentage(75);
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle probabilities', function() {
            const first = bali.probability.IMPOSSIBLE;
            const second = bali.probability(0.5);
            const third = bali.probability.CERTAIN;
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
            expect(comparator.ranking(second, second)).to.equal(0);
            expect(comparator.ranking(second, third)).to.equal(-1);
            expect(comparator.ranking(third, second)).to.equal(1);
            expect(comparator.ranking(third, third)).to.equal(0);
            expect(comparator.ranking(third, first)).to.equal(1);
            expect(comparator.ranking(first, third)).to.equal(-1);
        });

        it('should handle ranges', function() {
            const first = bali.range(undefined, '..', 0);
            const second = bali.range();
            const third = bali.range(0);
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
            expect(comparator.ranking(second, second)).to.equal(0);
            expect(comparator.ranking(second, third)).to.equal(-1);
            expect(comparator.ranking(third, second)).to.equal(1);
            expect(comparator.ranking(third, third)).to.equal(0);
            expect(comparator.ranking(third, first)).to.equal(1);
            expect(comparator.ranking(first, third)).to.equal(-1);
        });

        it('should handle resources', function() {
            const first = bali.resource('https://apple.com');
            const second = bali.resource('https://google.com');
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle procedures', function() {
            const first = bali.component('{ $foo := "bar" }');
            const second = bali.component('{ $foo := "baz" }');
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle symbols', function() {
            const first = bali.symbol('foobar');
            const second = bali.symbol('foobaz');
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle tags', function() {
            const first = bali.tag('34VWNHPBAC8MH89L727W3VGYYVGC7CRK');
            const second = bali.tag('LSK9A6TQYW0X5RZTY7TCAWT9R9KFNNTP');
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle text', function() {
            const first = bali.text('foobar');
            const second = bali.text('foobaz');
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
        });

        it('should handle versions', function() {
            const first = bali.version([1, 2]);
            const second = bali.version([1, 3]);
            const third = bali.version([1, 3, 1]);
            expect(comparator.ranking(first, first)).to.equal(0);
            expect(comparator.ranking(first, second)).to.equal(-1);
            expect(comparator.ranking(second, first)).to.equal(1);
            expect(comparator.ranking(second, second)).to.equal(0);
            expect(comparator.ranking(second, third)).to.equal(-1);
            expect(comparator.ranking(third, second)).to.equal(1);
            expect(comparator.ranking(third, third)).to.equal(0);
            expect(comparator.ranking(third, first)).to.equal(1);
            expect(comparator.ranking(first, third)).to.equal(-1);
        });

    });

});
