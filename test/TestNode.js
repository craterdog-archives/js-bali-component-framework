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


describe('Bali Nebula™ Component Framework - Node', function() {

    describe('Test node constructors and methods', function() {

        it('should construct nodes and access children', function() {
            const parent = bali.node('/bali/structures/Block', debug);
            const child = bali.node('/bali/structures/Comment', debug);
            const sibling = bali.node('/bali/structures/Comment', debug);
            expect(parent.isEmpty()).to.equal(true);
            parent.addItem(child);
            expect(parent.getItem(1)).to.equal(child);
            parent.addItem(sibling);
            const children = parent.getItems('1..2');
            expect(children.isEmpty()).to.equal(false);
            expect(children.getSize()).to.equal(2);
        });

    });

});
