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


describe('Bali Nebula™ Component Framework - Automaton', function() {

    describe('Test the automaton with invalid parameters', function() {

        it('should detect an empty event types array', function() {
            expect(
                function() {
                    bali.automaton([]);
                }
            ).to.throw();
        });

        it('should detect an empty state transitions array', function() {
            expect(
                function() {
                    bali.automaton(['$event1', '$event2'], {
                        $state1: [],
                        $state2: []
                    });
                }
            ).to.throw();
        });

        it('should detect an invalid state in the transitions array', function() {
            expect(
                function() {
                    bali.automaton([ '$event1', '$event2' ], {
                        $state1: ['$state2', undefined],
                        $state2: [undefined, '$state3']
                    });
                }
            ).to.throw();
        });

    });

    describe('Test the automaton with valid parameters', function() {

        it('should run a new automaton correctly', function() {
            const fsa = bali.automaton([ '$event1', '$event2' ], {
                $state1: ['$state2', undefined],
                $state2: [undefined, '$state1']
            });
            expect(fsa.getState()).to.equal('$state1');
            fsa.validateEvent('$event1');
            fsa.transitionState('$event1');
            expect(fsa.getState()).to.equal('$state2');
            fsa.validateEvent('$event2');
            fsa.transitionState('$event2');
            expect(fsa.getState()).to.equal('$state1');
        });

        it('should detect invalid state transitions', function() {
            expect(
                function() {
                    bali.automaton([ '$event1', '$event2' ], {
                        $state1: ['$state2', undefined],
                        $state2: [undefined, '$state1']
                    });
                    fsa.validateEvent('$event2');
                }
            ).to.throw();
            expect(
                function() {
                    bali.automaton([ '$event1', '$event2' ], {
                        $state1: ['$state2', undefined],
                        $state2: [undefined, '$state1']
                    });
                    fsa.transitionState('$event2');
                }
            ).to.throw();
        });

    });

});
