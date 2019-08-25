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
const abstractions = require('../abstractions');


// PUBLIC FUNCTIONS

/**
 * This constructor creates a new finite state automaton using the specified event type
 * list and state transition catalog.
 * <pre>
 * eventTypes: [  $first, $second, ...   $last]
 * nextStates: [
 *     $state1: [   none, $state2, ...    none]
 *     $state2: [$state3, $stateN, ... $state1]
 *       ...
 *     $stateN: [$state1,    none, ... $state3]
 * ]
 * </pre>
 * The first state in the nextStates catalog is the initial state of the finite state automaton.
 * 
 * @param {List} eventTypes A list of the possible event types.
 * @param {Catalog} nextStates A catalog defining the possible states and allowed transitions
 * between them given specific event types.
 * @returns {State} A new finite state automaton.
 */
function State(eventTypes, nextStates) {
    const numberOfEventTypes = eventTypes.getSize();
    const numberOfStates = nextStates.getSize();
    const states = [];
    const iterator = nextStates.getIterator();
    while (iterator.hasNext()) {
        const association = iterator.getNext();
        states.push(association.getKey());
        if (association.getValue().getSize() !== numberOfEventTypes) {
            throw new utilities.Exception({
                $module: '/bali/composites/State',
                $procedure: '$State',
                $exception: '$invalidParameter',
                $expected: numberOfEventTypes,
                $actual: association.getValue().getSize(),
                $text: '"Each next state list must have the same length as the number of event types."'
            });
        }
    }
    // access to this component's attributes is tightly controlled
    this.getKey = function() { return key; };
    this.getValue = function() { return value; };
    this.setValue = function(newValue) {
        newValue = this.convert(newValue);
        const oldValue = value;
        value = newValue;
        return oldValue;
    };

    return this;
}
State.prototype = Object.create(abstractions.Composite.prototype);
State.prototype.constructor = State;
exports.State = State;


// PUBLIC METHODS

State.prototype.validateTransition = function() {
    return 2;
};
