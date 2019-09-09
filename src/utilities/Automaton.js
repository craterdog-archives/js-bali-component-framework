/************************************************************************
 * Copyright (c) Crater Dog Technologies(TM).  All Rights Reserved.     *
 ************************************************************************
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.        *
 *                                                                      *
 * This code is free software; you can redistribute it and/or modify it *
 * under the terms of The MIT License (MIT), as published by the Open   *
 * Source Initiative. (See http://opensource.org/licenses/MIT)          *
 ************************************************************************/
'use strict';


/**
 * This class implements a finite state automaton. It defines the possible states of the
 * machine and allowed transitions between states given a finite set of possible event
 * types.
 */
const validate = require('./Validation').validate;
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new finite state automaton using the specified event type
 * array and state transition object.
 * <pre>
 * eventTypes:  ['$event1', '$event2', ... '$eventM']
 * nextStates: {
 *     $state1: [undefined, '$state2', ... undefined]
 *     $state2: ['$state3', '$stateN', ... '$state1']
 *                         ...
 *     $stateN: ['$state1', undefined, ... '$state3']
 * }
 * </pre>
 * The first state in the nextStates object is the initial state of the finite state automaton.
 * 
 * @param {Array} eventTypes An array of the possible event types as strings.
 * @param {Object} nextStates An object defining the possible states as strings and allowed
 * transitions between them given specific event types.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Automaton} A new finite state automaton.
 */
function Automaton(eventTypes, nextStates, debug) {
    if (debug > 1) validate('/bali/utilities/Automaton', '$automaton', '$eventTypes', eventTypes, [
        '/javascript/Array'
    ], debug);
    if (debug > 1) validate('/bali/utilities/Automaton', '$automaton', '$nextStates', nextStates, [
        '/javascript/Object'
    ], debug);
    var currentState;
    if (!Array.isArray(eventTypes) || typeof nextStates !== 'object') {
        const exception = new Exception({
            $module: '/bali/utilities/Automaton',
            $procedure: '$Automaton',
            $exception: '$invalidType',
            $text: 'One of the parameters to the constructor is not the right type.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
    if (eventTypes.length === 0 || Object.keys(nextStates).length === 0) {
        const exception = new Exception({
            $module: '/bali/utilities/Automaton',
            $procedure: '$Automaton',
            $exception: '$noStates',
            $text: 'The state machine must have at least one state and event.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
    const numberOfEventTypes = eventTypes.length;
    eventTypes.forEach(function(event) {
        if (typeof event !== 'string') {
            const exception = new Exception({
                $module: '/bali/utilities/Automaton',
                $procedure: '$Automaton',
                $exception: '$invalidType',
                $event: event,
                $text: 'Each event must be of type string.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
    });
    var numberOfStates = 0;
    for (const state in nextStates) {
        if (typeof state !== 'string') {
            const exception = new Exception({
                $module: '/bali/utilities/Automaton',
                $procedure: '$Automaton',
                $exception: '$invalidType',
                $state: state,
                $text: 'Each state must be of type string.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
        currentState = currentState || state;
        if (nextStates[state].length !== numberOfEventTypes) {
            const exception = new Exception({
                $module: '/bali/utilities/Automaton',
                $procedure: '$Automaton',
                $exception: '$invalidParameter',
                $expected: numberOfEventTypes,
                $actual: nextStates[state].length,
                $text: 'Each next state list must have the same length as the number of event types.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
        nextStates[state].forEach(function(transition) {
            if (transition && Object.keys(nextStates).indexOf(transition) < 0) {
                const exception = new Exception({
                    $module: '/bali/utilities/Automaton',
                    $procedure: '$Automaton',
                    $exception: '$invalidParameter',
                    $expected: Object.keys(nextStates),
                    $actual: transition,
                    $text: 'A next state was found that is not in the possible states.'
                });
                if (this.debug > 0) console.error(exception.toString());
                throw exception;
            }
        });
        numberOfStates++;
    }

    this.getState = function() {
        return currentState;
    };

    this.validateEvent = function(event) {
        const index = eventTypes.indexOf(event);
        if (!nextStates[currentState][index]) {
            const exception = new Exception({
                $module: '/bali/utilities/Automaton',
                $procedure: '$validateEvent',
                $exception: '$invalidEvent',
                $event: event,
                $state: currentState,
                $text: 'The event is not allowed in the current state.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
    };

    this.transitionState = function(event) {
        const index = eventTypes.indexOf(event);
        if (!nextStates[currentState][index]) {
            const exception = new Exception({
                $module: '/bali/utilities/Automaton',
                $procedure: '$transitionState',
                $exception: '$invalidEvent',
                $event: event,
                $state: currentState,
                $text: 'The event is not allowed in the current state.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
        currentState = nextStates[currentState][index];
    };

    return this;
}
Automaton.prototype.constructor = Automaton;
exports.Automaton = Automaton;
