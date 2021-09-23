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
 * This class implements a finite state machine. It defines the possible states of the
 * machine and allowed transitions between states given a finite set of possible event
 * types.
 */


// PUBLIC FUNCTIONS

/**
 * This function creates a new finite state machine using the specified event type
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
 * The first state in the nextStates object is the initial state of the finite state machine.
 *
 * @param {Array} eventTypes An array of the possible event types as strings.
 * @param {Object} nextStates An object defining the possible states as strings and allowed
 * transitions between them given specific event types.
 * @param {String} currentState The optional current state of the machine.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Controller} A new finite state machine.
 */
const Controller = function(eventTypes, nextStates, currentState, debug) {
    debug = debug || 0;
    if (!Array.isArray(eventTypes) || typeof nextStates !== 'object') {
        const exception = Error('One of the parameters to the constructor is not the right type.');
        if (debug > 0) console.error(exception);
        throw exception;
    }
    const numberOfEventTypes = eventTypes.length;
    if (numberOfEventTypes === 0 || Object.keys(nextStates).length === 0) {
        const exception = Error('The state machine must have at least one state and one event.');
        if (debug > 0) console.error(exception);
        throw exception;
    }
    for (const event in eventTypes) {
        if (typeof event !== 'string') {
            const exception = Error('Each event must be of type string.');
            if (debug > 0) console.error(exception);
            throw exception;
        }
    }
    for (const state in nextStates) {
        if (typeof state !== 'string') {
            const exception = Error('Each state must be of type string.');
            if (debug > 0) console.error(exception);
            throw exception;
        }
        if (nextStates[state].length !== numberOfEventTypes) {
            const exception = Error('Each next state list must have the same length as the number of event types.');
            if (debug > 0) console.error(exception);
            throw exception;
        }
        nextStates[state].forEach(function(transition) {
            if (transition && Object.keys(nextStates).indexOf(transition) < 0) {
                const exception = Error('A next state was found that is not in the possible states: ' + transition);
                if (debug > 0) console.error(exception);
                throw exception;
            }
        }, this);
    }
    currentState = currentState || Object.keys(nextStates)[0];  // defaults to first state

    this.getState = function() {
        return currentState;
    };

    this.validateEvent = function(event) {
        const index = eventTypes.indexOf(event);
        if (!nextStates[currentState][index]) {
            const exception = Error('The event is not allowed in the current state: ' + event);
            if (this.debug > 0) console.error(exception);
            throw exception;
        }
    };

    this.transitionState = function(event) {
        const index = eventTypes.indexOf(event);
        this.validateEvent(event);
        currentState = nextStates[currentState][index];
        return currentState;
    };

    return this;
};
Controller.prototype.constructor = Controller;
exports.Controller = Controller;
