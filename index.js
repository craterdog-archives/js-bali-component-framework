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
const structures = require('./src/structures');  // depends on elements
const collections = require('./src/collections');  // depends on structures
utilities.Parser = require('./src/utilities/Parser').Parser;  // depends on everything (must be last)


// PRIVATE FUNCTIONS

/*                            AVOIDING CIRCULAR DEPENDENCIES
 * This function is used to convert most JavaScript values into their corresponding
 * Bali Nebula™ component values.  It is needed by the Component and Exception classes and
 * depends on everything else so it must be injected into them after everything has been
 * imported. Just to be safe, this function does not depend on any functions defined later
 * in this file, even though that should not matter. When possible circular dependencies
 * are involved we can't be too careful!  Also, no exceptions are thrown by this function
 * since the Exception class calls the componentize function on its attributes and again we
 * want to avoid circular dependencies.
 */
const componentize = function(value, debug) {
    if (value === null) value = undefined;
    if (debug === null || debug === undefined) debug = 0;  // default is off
    var component;
    switch (typeof value) {
        case 'undefined':
            component = new elements.Pattern(undefined, undefined, debug);  // none
            break;
        case 'boolean':
            value = value ? 1 : 0;  // convert to probability
            component = new elements.Probability(value, {$granularity: '$boolean'}, debug);
            break;
        case 'number':  // NOTE: doesn't handle probabilities, they must be parsed as a string
            component = new elements.Number([value, undefined], undefined, debug);
            break;
        case 'string':
            try {
                // first try to parse it as a Bali Document Notation™ string
                const parser = new utilities.Parser(0);  // don't log parsing exceptions here
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
                    component.setAttribute(key, value[key]);  // key and value are converted in setAttribute()
                });
            }
            break;
        default:
            // punt, convert whatever it is to a multi-line text element
            component = new elements.Text('"' + EOL + value + EOL + '"', undefined, debug);
    }
    return component;
};
abstractions.Component.prototype.componentize = componentize;
structures.Exception.prototype.componentize = componentize;


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
 * @param {Boolean|Number} defaultLevel An optional number in the range 0..3 that controls
 * the level of debugging that occurs:
 * <pre>
 *   0 (or false): debugging turned off
 *   1 (or true): log exceptions to console.error
 *   2: perform argument validation and log exceptions to console.error
 *   3: perform argument validation and log exceptions to console.error and debug info to console.log
 * </pre>
 * @returns {Object} An object that implements the component framework interface.
 */
exports.api = function(defaultLevel) {
    if (defaultLevel === null || defaultLevel === undefined) defaultLevel = 0;  // default is off

    // ANGLE
    const angle = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Angle(value, parameters, debug);
    };
    angle.inverse = function(angle, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.inverse(angle, debug);
    };
    angle.complement = function(angle, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.complement(angle, debug);
    };
    angle.supplement = function(angle, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.supplement(angle, debug);
    };
    angle.conjugate = function(angle, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.conjugate(angle, debug);
    };
    angle.sum = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.sum(first, second, debug);
    };
    angle.difference = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.difference(first, second, debug);
    };
    angle.scaled = function(angle, factor, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.scaled(angle, factor, debug);
    };
    angle.sine = function(angle, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.sine(angle, debug);
    };
    angle.cosine = function(angle, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.cosine(angle, debug);
    };
    angle.tangent = function(angle, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.tangent(angle, debug);
    };
    angle.arcsine = function(ratio, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.arcsine(ratio, debug);
    };
    angle.arccosine = function(ratio, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.arccosine(ratio, debug);
    };
    angle.arctangent = function(opposite, adjacent, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Angle.arctangent(opposite, adjacent, debug);
    };

    // ASSOCIATION
    const association = function(key, value, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new structures.Association(key, value, debug);
    };

    // BINARY
    const binary = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Binary(value, parameters, debug);
    };
    binary.not = function(binary, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Binary.not(binary, debug);
    };
    binary.and = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Binary.and(first, second, debug);
    };
    binary.sans = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Binary.sans(first, second, debug);
    };
    binary.or = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Binary.or(first, second, debug);
    };
    binary.xor = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Binary.xor(first, second, debug);
    };
    binary.concatenation = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Binary.concatenation(first, second, debug);
    };

    // CATALOG
    const catalog = function(associations, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.Catalog(parameters, debug);
        collection.addItems(associations);
        return collection;
    };
    catalog.concatenation = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.Catalog.concatenation(first, second, debug);
    };
    catalog.extraction = function(catalog, keys, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.Catalog.extraction(catalog, keys, debug);
    };

    // COMPARATOR
    const comparator = function(algorithm, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new utilities.Comparator(algorithm, debug);
    };

    // COMPONENT
    const component = function(document, debug) {
        if (debug === undefined) debug = defaultLevel;
        const parser = new utilities.Parser(debug);
        return parser.parseDocument(document);
    };

    // CONFIGURATOR
    const configurator = function(filename, directory, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new utilities.Configurator(filename, directory, debug);
    };

    // CONTROLLER
    const controller = function(eventTypes, nextStates, currentState, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new utilities.Controller(eventTypes, nextStates, currentState, debug);
    };

    // DECODER
    const decoder = function(indentation, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new utilities.Decoder(indentation, debug);
    };

    // DURATION
    const duration = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Duration(value, parameters, debug);
    };
    duration.inverse = function(duration, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Duration.inverse(duration, debug);
    };
    duration.sum = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Duration.sum(first, second, debug);
    };
    duration.difference = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Duration.difference(first, second, debug);
    };
    duration.scaled = function(duration, factor, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Duration.scaled(duration, factor, debug);
    };

    // EXCEPTION
    const exception = function(attributes, cause, debug) {
        if (debug === undefined) debug = defaultLevel;
        var error;
        if (cause && cause.isComponent &&
            cause.getAttributes().getAttribute('$module').toString() === attributes['$module']) {
            // same module so no need to wrap it
            error = cause;
        } else {
            // wrap the cause in a new exception
            error = new structures.Exception(attributes, cause);
            if (cause) error.stack = cause.stack;
        }
        return error;
    };

    // GENERATOR
    const generator = function(debug) {
        if (debug === undefined) debug = defaultLevel;
        return new utilities.Generator(debug);
    };

    // INSTANCE
    const instance = function(type, attributes, debug) {
        const catalog = new collections.Catalog({
            $type: type,
            $tag: new elements.Tag(),
            $version: 'v1',
            $permissions: '/bali/permissions/public/v1',
            $previous: 'none'
        }, debug);
        catalog.addItems(attributes);
        return catalog;
    };

    // LIST
    const list = function(items, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.List(parameters, debug);
        collection.addItems(items);
        return collection;
    };
    list.concatenation = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.List.concatenation(first, second, debug);
    };

    // MOMENT
    const moment = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Moment(value, parameters, debug);
    };
    moment.duration = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Moment.duration(first, second, debug);
    };
    moment.earlier = function(moment, duration, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Moment.earlier(moment, duration, debug);
    };
    moment.later = function(moment, duration, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Moment.later(moment, duration, debug);
    };

    // NAME
    const name = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Name(value, parameters, debug);
    };
    name.concatenation = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Name.concatenation(first, second, debug);
    };

    // NUMBER
    const number = function(real, imaginary, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Number([real, imaginary], parameters, debug);
    };
    number.conjugate = function(number, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.conjugate(number, debug);
    };
    number.difference = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.difference(first, second, debug);
    };
    number.exponential = function(base, exponent, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.exponential(base, exponent, debug);
    };
    number.factorial = function(number, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.factorial(number, debug);
    };
    number.inverse = function(number, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.inverse(number, debug);
    };
    number.logarithm = function(base, value, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.logarithm(base, value, debug);
    };
    number.product = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.product(first, second, debug);
    };
    number.quotient = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.quotient(first, second, debug);
    };
    number.reciprocal = function(number, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.reciprocal(number, debug);
    };
    number.remainder = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.remainder(first, second, debug);
    };
    number.scaled = function(number, factor, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.scaled(number, factor, debug);
    };
    number.sum = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Number.sum(first, second, debug);
    };

    // PATTERN
    const pattern = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Pattern(value, parameters, debug);
    };

    // PERCENT
    const percent = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Percent(value, parameters, debug);
    };
    percent.inverse = function(percent, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Percent.inverse(percent, debug);
    };
    percent.sum = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Percent.sum(first, second, debug);
    };
    percent.difference = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Percent.difference(first, second, debug);
    };
    percent.scaled = function(percent, factor, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Percent.scaled(percent, factor, debug);
    };

    // PROBABILITY
    const probability = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Probability(value, parameters, debug);
    };
    probability.random = function(debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Probability.random(debug);
    };
    probability.not = function(probability, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Probability.not(probability, debug);
    };
    probability.and = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Probability.and(first, second, debug);
    };
    probability.sans = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Probability.sans(first, second, debug);
    };
    probability.or = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Probability.or(first, second, debug);
    };
    probability.xor = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Probability.xor(first, second, debug);
    };

    // PROCEDURE
    const procedure = function(statements, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new structures.Procedure(statements, parameters, debug);
    };

    // QUEUE
    const queue = function(items, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.Queue(parameters, debug);
        collection.addItems(items);
        return collection;
    };

    // RANGE
    const range = function(first, last, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Range([first, last], parameters, debug);
    };

    // REFERENCE
    const reference = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Reference(value, parameters, debug);
    };

    // SET
    const set = function(items, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.Set(parameters, debug);
        collection.addItems(items);
        return collection;
    };
    set.and = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.Set.and(first, second, debug);
    };
    set.sans = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.Set.sans(first, second, debug);
    };
    set.or = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.Set.or(first, second, debug);
    };
    set.xor = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.Set.xor(first, second, debug);
    };

    // STACK
    const stack = function(items, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.Stack(parameters, debug);
        collection.addItems(items);
        return collection;
    };

    // SYMBOL
    const symbol = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Symbol(value, parameters, debug);
    };

    // TAG
    const tag = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Tag(value, parameters, debug);
    };

    // TEXT
    const text = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Text(value, parameters, debug);
    };
    text.concatenation = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Text.concatenation(first, second, debug);
    };

    // TREE
    const tree = function(type, children, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.Tree(type, debug);
        collection.addItems(children);
        return collection;
    };

    // TYPE
    const type = function(component, debug) {
        if (debug === undefined) debug = defaultLevel;
        const type = new utilities.Validator(debug).getType(component);
        const value = type.split('/').slice(1);
        return new elements.Name(value, undefined, debug);
    };

    // VALIDATOR
    const validator = function(debug) {
        if (debug === undefined) debug = defaultLevel;
        return new utilities.Validator(debug);
    };

    // VERSION
    const version = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Version(value, parameters, debug);
    };
    version.nextVersion = function(current, level, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Version.nextVersion(current, level, debug);
    };
    version.validNextVersion = function(current, next, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Version.validNextVersion(current, next, debug);
    };

    // VISITOR
    const visitor = function() {
        return abstractions.Visitor;
    };


    /*
     * This section defines constants for common components
     */
    angle.PI = component('~π', defaultLevel);
    angle.TAU = component('~τ', defaultLevel);

    angle.DEGREES = {$units: '$degrees'};
    angle.RADIANS = {$units: '$radians'};

    binary.BASE2 = {$encoding: '$base2'};
    binary.BASE16 = {$encoding: '$base16'};
    binary.BASE32 = {$encoding: '$base32'};
    binary.BASE64 = {$encoding: '$base64'};

    number.UNDEFINED = component('undefined', defaultLevel);
    number.ZERO = component('0', defaultLevel);
    number.ONE = component('1', defaultLevel);
    number.PHI = component('φ', defaultLevel);
    number.E = component('e', defaultLevel);
    number.INFINITY = component('∞', defaultLevel);
    number.I = component('1i', defaultLevel);

    number.POLAR = {$format: '$polar'};
    number.RECTANGULAR = {$format: '$rectangular'};

    pattern.ANY = component('any', defaultLevel);
    pattern.NONE = component('none', defaultLevel);

    probability.FALSE = component('false', defaultLevel);
    probability.TRUE = component('true', defaultLevel);

    return {
        angle: angle,
        association: association,
        binary: binary,
        catalog: catalog,
        component: component,
        comparator: comparator,
        controller: controller,
        configurator: configurator,
        decoder: decoder,
        duration: duration,
        exception: exception,
        generator: generator,
        instance: instance,
        list: list,
        moment: moment,
        name: name,
        number: number,
        pattern: pattern,
        percent: percent,
        probability: probability,
        procedure: procedure,
        queue: queue,
        range: range,
        reference: reference,
        set: set,
        stack: stack,
        symbol: symbol,
        tag: tag,
        text: text,
        tree: tree,
        type: type,
        validator: validator,
        version: version,
        visitor: visitor
    };
};
