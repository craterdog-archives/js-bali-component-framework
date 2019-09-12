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

/*
 * This package provides a robust and simple to use interface into the Bali Nebula™
 * component framework.
 */
const EOL = '\n';
const utilities = require('./src/utilities');
const abstractions = require('./src/abstractions');  // depends on utilities
const elements = require('./src/elements');  // depends on abstractions
const composites = require('./src/composites');  // depends on elements
const collections = require('./src/collections');  // depends on composites
utilities.Parser = require('./src/utilities/Parser').Parser;  // depends on everything (must be last)


// PRIVATE FUNCTIONS

/*                            AVOIDING CIRCULAR DEPENDENCIES
 * This function is used to convert most JavaScript values into their corresponding
 * Bali Nebula™ component values.  It is needed by the Component and Exception classes and
 * depends on everything else so it must be injected into them after everything has been
 * imported. Just to be safe, this function does not depend on any functions defined later
 * in this file, even though that should not matter. When possible circular dependencies
 * are involved we can't be too careful!  Also, no exceptions are thrown by this function
 * since the Exception class calls the convert function on its attributes and again we
 * want to avoid circular dependencies.
 */
const convert = function(value, debug) {
    if (value === null) value = undefined;
    debug = debug || 0;
    var component;
    switch (typeof value) {
        case 'undefined':
            component = new elements.Pattern(undefined, undefined, debug);  // none
            break;
        case 'boolean':
            value = value ? 1 : 0;  // convert to probability
            const parameters = new composites.Parameters({$granularity: '$boolean'}, debug);
            component = new elements.Probability(value, parameters, debug);
            break;
        case 'number':  // NOTE: doesn't handle probabilities, they must be parsed as a string
            component = new elements.Number(value, undefined, undefined, debug);
            break;
        case 'string':
            try {
                // first try to parse it as a Bali Document Notation™ string
                const parser = new utilities.Parser(debug);
                component = parser.parseDocument(value);
            } catch (cause) {
                // otherwise convert it to a text element
                component = new elements.Text(value, undefined, debug);
            }
            break;
        case 'object':
            if (Array.isArray(value)) {
                // convert the array to a list
                component = new collections.List(undefined, debug);
                value.forEach(function(item) {
                    component.addItem(item);  // item converted in addItem()
                });
            } else if (value.isComponent) {
                // leave it since it is already a component
                component = value;
            } else {
                // convert the object to a catalog
                component = new collections.Catalog(undefined, debug);
                const keys = Object.keys(value);
                keys.forEach(function(key) {
                    component.setValue(key, value[key]);  // key and value are converted in setValue()
                });
            }
            break;
        default:
            // punt, convert whatever it is to a multi-line text element
            component = new elements.Text('"' + EOL + value + EOL + '"', undefined, debug);
    }
    return component;
};
abstractions.Component.prototype.convert = convert;
composites.Exception.prototype.convert = convert;


// PUBLIC INTERFACE

/**
 * This function returns the public interace for this framework. An optional debug argument may
 * be specified that controls the level of debugging that should be applied when using this
 * interface. The allowed levels are as follows:
 * <pre>
 *   0: no debugging is applied (this is the default value and has the best performance)
 *   1: log any exceptions to console.error before throwing them
 *   2: perform argument validation checks on each call (poor performance)
 *   3: log interesting arguments, states and results to console.log
 * </pre>
 * Note: Each level also includes the actions of each lower level so the performance hit is
 * cumulative.
 * 
 * Each function exposed by the interface also supports an optional debug argument as its last
 * argument. If specified, it will override the value specified for the entire interface.
 * 
 * @param {Number} debug A number in the range [0..3].
 * @returns {Object} An object that implements the component framework interface.
 */
exports.api = function(debug) {
    const defaultLevel = debug || 0;  // default value

    // ANGLE
    const angle = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Angle(value, parameters, debug);
    };
    angle.inverse = function(angle, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.inverse(angle, debug);
    };
    angle.complement = function(angle, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.complement(angle, debug);
    };
    angle.supplement = function(angle, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.supplement(angle, debug);
    };
    angle.conjugate = function(angle, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.conjugate(angle, debug);
    };
    angle.sum = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.sum(first, second, debug);
    };
    angle.difference = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.difference(first, second, debug);
    };
    angle.scaled = function(angle, factor, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.scaled(angle, factor, debug);
    };
    angle.sine = function(angle, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.sine(angle, debug);
    };
    angle.cosine = function(angle, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.cosine(angle, debug);
    };
    angle.tangent = function(angle, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.tangent(angle, debug);
    };
    angle.arcsine = function(ratio, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.arcsine(ratio, debug);
    };
    angle.arccosine = function(ratio, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.arccosine(ratio, debug);
    };
    angle.arctangent = function(opposite, adjacent, debug) {
        debug = debug || defaultLevel;
        return elements.Angle.arctangent(opposite, adjacent, debug);
    };
    
    // ASSOCIATION
    const association = function(key, value, debug) {
        debug = debug || defaultLevel;
        return new composites.Association(key, value, debug);
    };
    
    // AUTOMATON
    const automaton = function(eventTypes, nextStates, debug) {
        debug = debug || defaultLevel;
        return new utilities.Automaton(eventTypes, nextStates, debug);
    };
    
    // BINARY
    const binary = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Binary(value, parameters, debug);
    };
    binary.not = function(binary, debug) {
        debug = debug || defaultLevel;
        return elements.Binary.not(binary, debug);
    };
    binary.and = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Binary.and(first, second, debug);
    };
    binary.sans = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Binary.sans(first, second, debug);
    };
    binary.or = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Binary.or(first, second, debug);
    };
    binary.xor = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Binary.xor(first, second, debug);
    };
    binary.concatenation = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Binary.concatenation(first, second, debug);
    };
    
    // CATALOG
    const catalog = function(associations, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.Catalog(parameters, debug);
        collection.addItems(associations);
        return collection;
    };
    catalog.concatenation = function(first, second, debug) {
        debug = debug || defaultLevel;
        return collections.Catalog.concatenation(first, second, debug);
    };
    catalog.extraction = function(catalog, keys, debug) {
        debug = debug || defaultLevel;
        return collections.Catalog.extraction(catalog, keys, debug);
    };
    
    // CODEX
    const codex = function(indentation, debug) {
        debug = debug || defaultLevel;
        return new utilities.Codex(indentation, debug);
    };
    
    // COMPONENT
    const component = function(document, debug) {
        debug = debug || defaultLevel;
        const parser = new utilities.Parser(debug);
        return parser.parseDocument(document);
    };
    
    // DURATION
    const duration = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Duration(value, parameters, debug);
    };
    duration.inverse = function(duration, debug) {
        debug = debug || defaultLevel;
        return elements.Duration.inverse(duration, debug);
    };
    duration.sum = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Duration.sum(first, second, debug);
    };
    duration.difference = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Duration.difference(first, second, debug);
    };
    duration.scaled = function(duration, factor, debug) {
        debug = debug || defaultLevel;
        return elements.Duration.scaled(duration, factor, debug);
    };
    
    // EXCEPTION
    const exception = function(attributes, cause, debug) {
        debug = debug || defaultLevel;
        var error;
        if (cause && cause.constructor.name === 'Exception' &&
            cause.attributes.getValue('$module').toString() === attributes['$module']) {
            // same module so no need to wrap it
            error = cause;
        } else {
            // wrap the cause in a new exception
            error = new composites.Exception(attributes, cause);
            if (cause) error.stack = cause.stack;
        }
        return error;
    };
    
    // GENERATOR
    const generator = function(debug) {
        debug = debug || defaultLevel;
        return new utilities.Generator(debug);
    };
    
    // ITERATOR
    const iterator = function(array, debug) {
        debug = debug || defaultLevel;
        return new utilities.Iterator(array, debug);
    };
    
    // LIST
    const list = function(items, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.List(parameters, debug);
        collection.addItems(items);
        return collection;
    };
    list.concatenation = function(first, second, debug) {
        debug = debug || defaultLevel;
        return collections.List.concatenation(first, second, debug);
    };
    
    // MOMENT
    const moment = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Moment(value, parameters, debug);
    };
    moment.duration = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Moment.duration(first, second, debug);
    };
    moment.earlier = function(moment, duration, debug) {
        debug = debug || defaultLevel;
        return elements.Moment.earlier(moment, duration, debug);
    };
    moment.later = function(moment, duration, debug) {
        debug = debug || defaultLevel;
        return elements.Moment.later(moment, duration, debug);
    };
    
    // NAME
    const name = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Name(value, parameters, debug);
    };
    name.concatenation = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Name.concatenation(first, second, debug);
    };
    
    // NUMBER
    const number = function(real, imaginary, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Number(real, imaginary, parameters, debug);
    };
    number.conjugate = function(number, debug) {
        debug = debug || defaultLevel;
        return elements.Number.conjugate(number, debug);
    };
    number.difference = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Number.difference(first, second, debug);
    };
    number.exponential = function(base, exponent, debug) {
        debug = debug || defaultLevel;
        return elements.Number.exponential(base, exponent, debug);
    };
    number.factorial = function(number, debug) {
        debug = debug || defaultLevel;
        return elements.Number.factorial(number, debug);
    };
    number.inverse = function(number, debug) {
        debug = debug || defaultLevel;
        return elements.Number.inverse(number, debug);
    };
    number.logarithm = function(base, value, debug) {
        debug = debug || defaultLevel;
        return elements.Number.logarithm(base, value, debug);
    };
    number.product = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Number.product(first, second, debug);
    };
    number.quotient = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Number.quotient(first, second, debug);
    };
    number.reciprocal = function(number, debug) {
        debug = debug || defaultLevel;
        return elements.Number.reciprocal(number, debug);
    };
    number.remainder = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Number.remainder(first, second, debug);
    };
    number.scaled = function(number, factor, debug) {
        debug = debug || defaultLevel;
        return elements.Number.scaled(number, factor, debug);
    };
    number.sum = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Number.sum(first, second, debug);
    };
    
    // PARAMETERS
    const parameters = function(object, debug) {
        debug = debug || defaultLevel;
        return new composites.Parameters(object, debug);
    };
    
    // PATTERN
    const pattern = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Pattern(value, parameters, debug);
    };
    
    // PERCENT
    const percent = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Percent(value, parameters, debug);
    };
    percent.inverse = function(percent, debug) {
        debug = debug || defaultLevel;
        return elements.Percent.inverse(percent, debug);
    };
    percent.sum = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Percent.sum(first, second, debug);
    };
    percent.difference = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Percent.difference(first, second, debug);
    };
    percent.scaled = function(percent, factor, debug) {
        debug = debug || defaultLevel;
        return elements.Percent.scaled(percent, factor, debug);
    };
    
    // PROBABILITY
    const probability = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Probability(value, parameters, debug);
    };
    probability.random = function(debug) {
        debug = debug || defaultLevel;
        return elements.Probability.random(debug);
    };
    probability.not = function(probability, debug) {
        debug = debug || defaultLevel;
        return elements.Probability.not(probability, debug);
    };
    probability.and = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Probability.and(first, second, debug);
    };
    probability.sans = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Probability.sans(first, second, debug);
    };
    probability.or = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Probability.or(first, second, debug);
    };
    probability.xor = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Probability.xor(first, second, debug);
    };
    
    // QUEUE
    const queue = function(items, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.Queue(parameters, debug);
        collection.addItems(items);
        return collection;
    };
    
    // RANGE
    const range = function(first, last, parameters, debug) {
        debug = debug || defaultLevel;
        return new collections.Range(first, last, parameters, debug);
    };
    
    // REFERENCE
    const reference = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Reference(value, parameters, debug);
    };
    
    // SET
    const set = function(items, algorithm, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.Set(parameters, algorithm, debug);
        collection.addItems(items);
        return collection;
    };
    set.and = function(first, second, debug) {
        debug = debug || defaultLevel;
        return collections.Set.and(first, second, debug);
    };
    set.sans = function(first, second, debug) {
        debug = debug || defaultLevel;
        return collections.Set.sans(first, second, debug);
    };
    set.or = function(first, second, debug) {
        debug = debug || defaultLevel;
        return collections.Set.or(first, second, debug);
    };
    set.xor = function(first, second, debug) {
        debug = debug || defaultLevel;
        return collections.Set.xor(first, second, debug);
    };
    
    // STACK
    const stack = function(items, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.Stack(parameters, debug);
        collection.addItems(items);
        return collection;
    };
    
    // SYMBOL
    const symbol = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Symbol(value, parameters, debug);
    };
    
    // TAG
    const tag = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Tag(value, parameters, debug);
    };
    
    // TEXT
    const text = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Text(value, parameters, debug);
    };
    text.concatenation = function(first, second, debug) {
        debug = debug || defaultLevel;
        return elements.Text.concatenation(first, second, debug);
    };
    
    // TYPE
    const type = function(value, debug) {
        debug = debug || defaultLevel;
        const type = new utilities.Validator(debug).getType(value);
        return new elements.Name(type, undefined, debug);
    };
    
    // VALIDATOR
    const validator = function(debug) {
        debug = debug || defaultLevel;
        return new utilities.Validator(debug);
    };
    
    // VERSION
    const version = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Version(value, parameters, debug);
    };
    
    // VISITOR
    const visitor = function() {
        return abstractions.Visitor;
    };
    

    /*
     * This section defines constants for common components
     */
    angle.PI = component('~pi', defaultLevel);
    
    angle.DEGREES = parameters({$units: '$degrees'}, defaultLevel);
    angle.RADIANS = parameters({$units: '$radians'}, defaultLevel);
    
    binary.BASE2 = parameters({$encoding: '$base2'}, defaultLevel);
    binary.BASE16 = parameters({$encoding: '$base16'}, defaultLevel);
    binary.BASE32 = parameters({$encoding: '$base32'}, defaultLevel);
    binary.BASE64 = parameters({$encoding: '$base64'}, defaultLevel);
    
    number.UNDEFINED = component('undefined', defaultLevel);
    number.ZERO = component('0', defaultLevel);
    number.ONE = component('1', defaultLevel);
    number.PHI = component('phi', defaultLevel);
    number.E = component('e', defaultLevel);
    number.INFINITY = component('infinity', defaultLevel);
    number.I = component('1i', defaultLevel);
    
    number.POLAR = parameters({$format: '$polar'}, defaultLevel);
    number.RECTANGULAR = parameters({$format: '$rectangular'}, defaultLevel);
    
    pattern.ANY = component('any', defaultLevel);
    pattern.NONE = component('none', defaultLevel);
    
    probability.FALSE = component('false', defaultLevel);
    probability.TRUE = component('true', defaultLevel);

    return {
        angle: angle,
        association: association,
        automaton: automaton,
        binary: binary,
        catalog: catalog,
        codex: codex,
        component: component,
        duration: duration,
        exception: exception,
        generator: generator,
        iterator: iterator,
        list: list,
        moment: moment,
        name: name,
        number: number,
        parameters: parameters,
        pattern: pattern,
        percent: percent,
        probability: probability,
        queue: queue,
        range: range,
        reference: reference,
        set: set,
        stack: stack,
        symbol: symbol,
        tag: tag,
        text: text,
        type: type,
        validator: validator,
        version: version,
        visitor: visitor
    };
};
