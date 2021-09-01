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
const Validator = require('./Validator').Validator;
const Exception = require('../composites/Exception').Exception;


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
    if (debug > 1) {
        const validator = new Validator(debug);
        validator.validateType('/bali/agents/Controller', '$Controller', '$eventTypes', eventTypes, [
            '/javascript/Array'
        ]);
        validator.validateType('/bali/agents/Controller', '$Controller', '$nextStates', nextStates, [
            '/javascript/Object'
        ]);
        validator.validateType('/bali/agents/Controller', '$Controller', '$currentState', currentState, [
            '/javascript/Undefined',
            '/javascript/String'
        ]);
    }
    if (!Array.isArray(eventTypes) || typeof nextStates !== 'object') {
        const exception = new Exception({
            $module: '/bali/agents/Controller',
            $procedure: '$Controller',
            $exception: '$invalidType',
            $text: 'One of the parameters to the constructor is not the right type.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
    if (eventTypes.length === 0 || Object.keys(nextStates).length === 0) {
        const exception = new Exception({
            $module: '/bali/agents/Controller',
            $procedure: '$Controller',
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
                $module: '/bali/agents/Controller',
                $procedure: '$Controller',
                $exception: '$invalidType',
                $event: event,
                $text: 'Each event must be of type string.'
            });
            if (this.debug > 0) console.error(exception.toString());
            throw exception;
        }
    }, this);
    var numberOfStates = 0;
    for (const state in nextStates) {
        if (typeof state !== 'string') {
            const exception = new Exception({
                $module: '/bali/agents/Controller',
                $procedure: '$Controller',
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
                $module: '/bali/agents/Controller',
                $procedure: '$Controller',
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
                    $module: '/bali/agents/Controller',
                    $procedure: '$Controller',
                    $exception: '$invalidParameter',
                    $expected: Object.keys(nextStates),
                    $actual: transition,
                    $text: 'A next state was found that is not in the possible states.'
                });
                if (this.debug > 0) console.error(exception.toString());
                throw exception;
            }
        }, this);
        numberOfStates++;
    }

    this.getState = function() {
        return currentState;
    };

    this.validateEvent = function(event) {
        const index = eventTypes.indexOf(event);
        if (!nextStates[currentState][index]) {
            const exception = new Exception({
                $module: '/bali/agents/Controller',
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
                $module: '/bali/agents/Controller',
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
        return currentState;
    };

    return this;
};
Controller.prototype.constructor = Controller;
exports.Controller = Controller;
