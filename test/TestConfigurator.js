/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/

const debug = 2;
const mocha = require('mocha');
const expect = require('chai').expect;
const bali = require('../').api();
const configurator = bali.configurator('configuration.txt', 'test/', debug);
const source = "Test configuration...";


describe('Bali Nebula™ Component Framework - Configurator', function() {

    describe('Test configuration life-cycle', function() {

        it('should store a configuration', async function() {
            await configurator.store(source);
        });

        it('should load a configuration', async function() {
            const copy = await configurator.load();
            expect(copy).to.equal(source);
        });

        it('should delete a configuration', async function() {
            await configurator.delete();
            expect(await configurator.load()).to.not.exist;
        });

    });

});
