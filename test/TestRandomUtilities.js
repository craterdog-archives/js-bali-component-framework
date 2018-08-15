/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

var random = require('../utilities/RandomUtilities');
var mocha = require('mocha');
var expect = require('chai').expect;

describe('Bali Virtual Machine™', function() {

    describe('Test random number utilities', function() {

        it('should test extreme coin tosses', function() {
            expect(random.coinToss(0)).is.false;  // jshint ignore:line
            expect(random.coinToss(1)).is.true;  // jshint ignore:line
        });

        it('should test endpoints of random indexes', function() {
            var gotZero = false;
            var gotTwo = false;
            for (var i = 0; i < 100; i++) {
                var index = random.generateRandomIndex(3);
                expect(index >= 0).is.true;  // jshint ignore:line
                expect(index < 3).is.true;  // jshint ignore:line
                if (index === 0) gotZero = true;
                if (index === 2) gotTwo = true;
            }
            expect(gotZero).is.true;  // jshint ignore:line
            expect(gotTwo).is.true;  // jshint ignore:line
        });

    });

});
