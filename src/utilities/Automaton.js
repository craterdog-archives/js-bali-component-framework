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
const utilities = require('../utilities');


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new finite state automaton using the specified event type
 * array and state transition object.
 * <pre>
 * eventTypes:  [  $event1,   $event2, ...   $eventM]
 * nextStates: {
 *     $state1: [undefined,   $state2, ... undefined]
 *     $state2: [  $state3,   $stateN, ...   $state1]
 *                         ...
 *     $stateN: [  $state1, undefined, ...   $state3]
 * }
 * </pre>
 * The first state in the nextStates object is the initial state of the finite state automaton.
 * 
 * @param {Array} eventTypes An array of the possible event types.
 * @param {Object} nextStates An object defining the possible states and allowed transitions
 * between them given specific event types.
 * @returns {Automaton} A new finite state automaton.
 */
function Automaton(eventTypes, nextStates) {
    var currentState;
    const numberOfEventTypes = eventTypes.length;
    var numberOfStates = 0;
    for (const state in nextStates) {
        currentState = currentState || state;
        if (nextStates[state].length !== numberOfEventTypes) {
            throw new utilities.Exception({
                $module: '/bali/utilities/Automaton',
                $procedure: '$Automaton',
                $exception: '$invalidParameter',
                $expected: numberOfEventTypes,
                $actual: nextStates[state].length,
                $text: '"Each next state list must have the same length as the number of event types."'
            });
        }
        numberOfStates++;
    }

    this.getState = function() {
        return currentState;
    };

    this.validateEvent = function(event) {
        const index = eventTypes.indexOf(event);
        if (!nextStates[currentState][index]) {
            throw new utilities.Exception({
                $module: '/bali/utilities/Automaton',
                $procedure: '$validateEvent',
                $exception: '$invalidEvent',
                $event: event,
                $expected: nextStates[state],
                $text: '"Each next state list must have the same length as the number of event types."'
            });
        }
    };

    this.transitionState = function(event) {
        const index = eventTypes.indexOf(event);
        currentState = nextStates[currentState][index];
    };

    return this;
}
Automaton.prototype.constructor = Automaton;
exports.Automaton = Automaton;
