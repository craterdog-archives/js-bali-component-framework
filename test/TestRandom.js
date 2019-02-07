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

    describe('Test random number utilities', function() {

        it('should test extreme coin tosses', function() {
            for (var i = 0; i < 100; i++) {
                expect(bali.random.coinToss(0)).is.false;  // jshint ignore:line
                expect(bali.random.coinToss(1)).is.true;  // jshint ignore:line
            }
        });

        it('should test endpoints of random indexes', function() {
            var gotOne = false;
            var gotThree = false;
            for (var i = 0; i < 100; i++) {
                const index = bali.random.index(3);
                expect(index >= 1).is.true;  // jshint ignore:line
                expect(index <= 3).is.true;  // jshint ignore:line
                if (index === 1) gotOne = true;
                if (index === 3) gotThree = true;
            }
            expect(gotOne).is.true;  // jshint ignore:line
            expect(gotThree).is.true;  // jshint ignore:line
        });

        it('should test endpoints of random probabilities', function() {
            for (var i = 0; i < 100; i++) {
                const probability = bali.random.probability();
                expect(probability >= 0).is.true;  // jshint ignore:line
                expect(probability <= 1).is.true;  // jshint ignore:line
            }
        });

    });

});
