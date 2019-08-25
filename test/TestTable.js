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
    const array = ['"alpha"', '"beta"', '"delta"', '"epsilon"', '"gamma"'];
    const association1 = bali.association(1, '"alpha"');
    const association2 = bali.association(2, '"beta"');
    const association3 = bali.association(3, '"delta"');
    const association4 = bali.association(4, '"epsilon"');
    const association5 = bali.association(5, '"gamma"');

    describe('Test the table constructors.', function() {

        it('should create an empty table', function() {
            const table = bali.table('Empty Table', [1, 2, 3]);
            expect(table).to.exist;  // jshint ignore:line
            const size = table.getSize();
            expect(size).to.exist;  // jshint ignore:line
            expect(size).to.equal(0);
            const iterator = table.getIterator();
            expect(iterator).to.exist;  // jshint ignore:line
            expect(iterator.hasNext() === false);
            expect(iterator.hasPrevious() === false);
            table.deleteAll();
            const copy = table.constructor(table.getParameters());
            expect(copy).to.exist;  // jshint ignore:line
            expect(table.isEqualTo(copy)).to.equal(true);
            const signum = table.comparedTo(copy);
            expect(signum).to.equal(0);
        });

    });

});