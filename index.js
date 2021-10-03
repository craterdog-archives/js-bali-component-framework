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
const abstractions = require('./src/abstractions');
const agents = require('./src/agents');
const elements = require('./src/elements');  // depends on agents
const collections = require('./src/collections');
const strings = require('./src/strings');  // depends on collections
const trees = require('./src/trees');
agents.BDNParser = require('./src/agents/BDNParser').BDNParser;  // must be last


// AVOIDING CIRCULAR DEPENDENCIES

/*
 * This function defines the canonical toString() method for all Component classes including
 * the Exception class which attempts to inherit from both Component and Error. The function
 * must be declared and assigned to these classes here instead of in their class definitions
 * to avoid circular dependencies.
 */
const toString = function() {
    const formatter = new agents.BDNFormatter(0, this.debug);
    return formatter.asSource(this);
};
abstractions.Component.prototype.toString = toString;
abstractions.Exception.prototype.toString = toString;


/*
 * This function is used to convert most JavaScript values into their corresponding
 * Bali Nebula™ component values.  It is needed by the Component class and depends on
 * everything else so it must be injected into them after everything has been imported.
 * Just to be safe, this function does not depend on any functions defined later
 * in this file, even though that should not matter. When possible circular dependencies
 * are involved we can't be too careful!  Also, no exceptions are thrown by this function
 * since the Exception class calls the componentize function on its attributes and again
 * we want to avoid circular dependencies.
 */
const componentize = function(value) {
    if (value === null) value = undefined;
    var component;
    switch (typeof value) {
        case 'undefined':
            component = new elements.Pattern(undefined, undefined, this.debug);  // none
            break;
        case 'boolean':
            component = new elements.Boolean(value, undefined, this.debug);
            break;
        case 'number':  // NOTE: doesn't handle probabilities, they must be parsed as a string
            component = new elements.Number([value, undefined], undefined, this.debug);
            break;
        case 'string':
            try {
                // first try to parse it as a Bali Document Notation™ source string
                const parser = new agents.BDNParser();  // don't log parsing exceptions here
                component = parser.parseSource(value);
            } catch (cause) {
                // otherwise convert it to a text element
                component = new strings.Text(value, undefined, this.debug);
            }
            break;
        case 'object':
            if (Array.isArray(value)) {
                // convert the array to a list
                component = new collections.List(undefined, this.debug);
                value.forEach(function(item) {
                    component.addItem(item);  // item converted in addItem()
                });
            } else if (value.isComponent) {
                // leave it since it is already a component
                component = value;
            } else {
                // convert the object to a catalog
                component = new collections.Catalog(undefined, this.debug);
                const keys = Object.keys(value);
                keys.forEach(function(key) {
                    component.setAttribute(key, value[key]);  // key and value are converted in setAttribute()
                });
            }
            break;
        default:
            // punt, convert whatever it is to a multi-line text element
            component = new strings.Text('"' + EOL + value + EOL + '"', undefined, this.debug);
    }
    return component;
};
abstractions.Component.prototype.componentize = componentize;
abstractions.Exception.prototype.componentize = componentize;


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
 * Note: Each level also includes the processing of each lower level so the performance hit is
 * cumulative.
 *
 * Each function exposed by the interface also supports an optional debug argument as its last
 * argument. If specified, it will override the value specified for the entire interface.
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

    // ARE EQUAL
    const areEqual = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        const comparator = new agents.CanonicalComparator(debug);
        return comparator.areEqual(first, second);
    };

    // ASSOCIATION
    const association = function(key, value, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new collections.Association(key, value, debug);
    };

    // BINARY
    const binary = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new strings.Binary(value, parameters, debug);
    };
    binary.not = function(binary, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Binary.not(binary, debug);
    };
    binary.and = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Binary.and(first, second, debug);
    };
    binary.sans = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Binary.sans(first, second, debug);
    };
    binary.or = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Binary.or(first, second, debug);
    };
    binary.xor = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Binary.xor(first, second, debug);
    };
    binary.chain = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Binary.chain(first, second, debug);
    };

    // BOOLEAN
    const boolean = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Boolean(value, parameters, debug);
    };
    boolean.not = function(boolean, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Boolean.not(boolean, debug);
    };
    boolean.and = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Boolean.and(first, second, debug);
    };
    boolean.sans = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Boolean.sans(first, second, debug);
    };
    boolean.or = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Boolean.or(first, second, debug);
    };
    boolean.xor = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Boolean.xor(first, second, debug);
    };

    // CALCULATOR
    const calculator = function(debug) {
        if (debug === undefined) debug = defaultLevel;
        return new utilities.Calculator(debug);
    };

    // CATALOG
    const catalog = function(associations, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.Catalog(parameters, debug);
        if (associations) collection.addItems(associations);
        return collection;
    };
    catalog.chain = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.Catalog.chain(first, second, debug);
    };
    catalog.extraction = function(catalog, keys, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.Catalog.extraction(catalog, keys, debug);
    };

    // COMPARATOR
    const comparator = function(debug) {
        if (debug === undefined) debug = defaultLevel;
        return new agents.CanonicalComparator(debug);
    };

    // COMPONENT
    const component = function(bdn, debug) {
        if (debug === undefined) debug = defaultLevel;
        const parser = new agents.BDNParser(debug);
        if (bdn.slice(-1) === EOL) {
            return parser.parseDocument(bdn);
        }
        return parser.parseSource(bdn);
    };
    component.canonicalType = function(component, debug) {
        if (debug === undefined) debug = defaultLevel;
        return abstractions.Component.canonicalType(component, debug);
    };
    component.normalizedIndex = function(sequence, index, debug) {
        if (debug === undefined) debug = defaultLevel;
        return abstractions.Component.normalizedIndex(sequence, index, debug);
    };
    component.validateArgument = function(moduleName, procedureName, argumentName,
            argumentValue, allowedTypes, debug) {
        if (debug === undefined) debug = defaultLevel;
        return abstractions.Component.validateArgument(moduleName, procedureName,
            argumentName, argumentValue, allowedTypes, debug);
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

    // DOCUMENT
    const document = function(component, debug) {
        if (debug === undefined) debug = defaultLevel;
        const formatter = new agents.BDNFormatter(0, debug);
        return formatter.asDocument(component);
    };

    // DOES MATCH
    const doesMatch = function(component, pattern, debug) {
        if (debug === undefined) debug = defaultLevel;
        const comparator = new agents.CanonicalComparator(debug);
        return comparator.doesMatch(component, pattern);
    };

    // DUPLICATE
    const duplicate = function(component, debug) {
        if (debug === undefined) debug = defaultLevel;
        const duplicator = new agents.DeepDuplicator(debug);
        return duplicator.duplicateComponent(component);
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
        return new abstractions.Exception(attributes, cause, debug);
    };

    // GENERATOR
    const generator = function(debug) {
        if (debug === undefined) debug = defaultLevel;
        return new utilities.Generator(debug);
    };

    // HTML
    const html = function(component, title, style, debug) {
        if (debug === undefined) debug = defaultLevel;
        const formatter = new agents.HTMLFormatter(title, style, debug);
        return formatter.asDocument(component);
    };

    // INSTANCE
    const instance = function(type, attributes, debug) {
        const catalog = new collections.Catalog({
            $type: type,
            $tag: new elements.Tag(),
            $version: 'v1',
            $permissions: '/nebula/permissions/public/v1',
            $previous: 'none'
        }, debug);
        catalog.addItems(attributes);
        return catalog;
    };

    // LIST
    const list = function(items, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.List(parameters, debug);
        if (items) collection.addItems(items);
        return collection;
    };
    list.chain = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.List.chain(first, second, debug);
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
        return new strings.Name(value, parameters, debug);
    };
    name.chain = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Name.chain(first, second, debug);
    };

    // NODE
    const node = function(type, debug) {
        if (debug === undefined) debug = defaultLevel;
        const node = new trees.Node(type, debug);
        return node;
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

    // PERCENTAGE
    const percentage = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Percentage(value, parameters, debug);
    };
    percentage.inverse = function(percentage, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Percentage.inverse(percentage, debug);
    };
    percentage.sum = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Percentage.sum(first, second, debug);
    };
    percentage.difference = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Percentage.difference(first, second, debug);
    };
    percentage.scaled = function(percentage, factor, debug) {
        if (debug === undefined) debug = defaultLevel;
        return elements.Percentage.scaled(percentage, factor, debug);
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
    const procedure = function(code, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new trees.Procedure(code, parameters, debug);
    };

    // QUEUE
    const queue = function(items, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.Queue(parameters, debug);
        if (items) collection.addItems(items);
        return collection;
    };

    // RANGE
    const range = function(first, connector, last, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new collections.Range(first, connector, last, parameters, debug);
    };
    range.effective = function(range, debug) {
        if (debug === undefined) debug = defaultLevel;
        return collections.Range.effective(range, debug);
    };

    // RANKING
    const ranking = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        const comparator = new agents.CanonicalComparator(debug);
        return comparator.ranking(first, second);
    };

    // RESOURCE
    const resource = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Resource(value, parameters, debug);
    };

    // SET
    const set = function(items, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.Set(parameters, debug);
        if (items) collection.addItems(items);
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

    // SORTED
    const sorted = function(collection, comparator, debug) {
        if (debug === undefined) debug = defaultLevel;
        if (comparator === undefined) comparator = new agents.CanonicalComparator(debug);
        const sorter = new agents.MergeSorter(comparator, debug);
        return sorter.sortCollection(collection);
    };

    // SORTER
    const sorter = function(comparator, debug) {
        if (debug === undefined) debug = defaultLevel;
        if (comparator === undefined) comparator = new agents.CanonicalComparator(debug);
        return new agents.MergeSorter(comparator, debug);
    };

    // SOURCE
    const source = function(component, indentation, debug) {
        if (debug === undefined) debug = defaultLevel;
        const formatter = new agents.BDNFormatter(indentation, debug);
        return formatter.asSource(component);
    };

    // STACK
    const stack = function(items, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        const collection = new collections.Stack(parameters, debug);
        if (items) collection.addItems(items);
        return collection;
    };

    // SYMBOL
    const symbol = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new strings.Symbol(value, parameters, debug);
    };
    symbol.chain = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Symbol.chain(first, second, debug);
    };

    // TAG
    const tag = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new elements.Tag(value, parameters, debug);
    };

    // TEXT
    const text = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new strings.Text(value, parameters, debug);
    };
    text.chain = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Text.chain(first, second, debug);
    };

    // VERSION
    const version = function(value, parameters, debug) {
        if (debug === undefined) debug = defaultLevel;
        return new strings.Version(value, parameters, debug);
    };
    version.nextVersion = function(current, level, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Version.nextVersion(current, level, debug);
    };
    version.validNextVersion = function(current, next, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Version.validNextVersion(current, next, debug);
    };
    version.chain = function(first, second, debug) {
        if (debug === undefined) debug = defaultLevel;
        return strings.Version.chain(first, second, debug);
    };


    /*
     * This section defines constants for common components
     */
    angle.PI = component('~π', defaultLevel);
    angle.TAU = component('~τ', defaultLevel);

    angle.DEGREES = {$units: '$degrees'};
    angle.RADIANS = {$units: '$radians'};

    binary.BASE02 = {$encoding: '$base02'};
    binary.BASE16 = {$encoding: '$base16'};
    binary.BASE32 = {$encoding: '$base32'};
    binary.BASE64 = {$encoding: '$base64'};

    boolean.FALSE = boolean(false, undefined, defaultLevel);
    boolean.TRUE = boolean(true, undefined, defaultLevel);

    number.UNDEFINED = component('undefined', defaultLevel);
    number.ZERO = component('0', defaultLevel);
    number.ONE = component('1', defaultLevel);
    number.PHI = component('φ', defaultLevel);
    number.E = component('e', defaultLevel);
    number.INFINITY = component('∞', defaultLevel);
    number.I = component('1i', defaultLevel);

    pattern.ANY = component('any', defaultLevel);
    pattern.NONE = component('none', defaultLevel);

    probability.IMPOSSIBLE = probability(0, undefined, defaultLevel);
    probability.CERTAIN = probability(1, undefined, defaultLevel);

    return {
        // instance constructors
        angle: angle,
        areEqual: areEqual,
        association: association,
        binary: binary,
        boolean: boolean,
        calculator: calculator,
        catalog: catalog,
        comparator: comparator,
        component: component,
        controller: controller,
        configurator: configurator,
        decoder: decoder,
        document: document,
        doesMatch: doesMatch,
        duplicate: duplicate,
        duration: duration,
        exception: exception,
        generator: generator,
        html: html,
        instance: instance,
        list: list,
        moment: moment,
        name: name,
        node: node,
        number: number,
        pattern: pattern,
        percentage: percentage,
        probability: probability,
        procedure: procedure,
        queue: queue,
        range: range,
        ranking: ranking,
        resource: resource,
        set: set,
        sorted: sorted,
        sorter: sorter,
        source: source,
        stack: stack,
        symbol: symbol,
        tag: tag,
        text: text,
        version: version,

        // abstract classes from whence to inherit
        Collection: abstractions.Collection,
        Comparator: abstractions.Comparator,
        Component: abstractions.Component,
        Element: abstractions.Element,
        Iterator: abstractions.Iterator,
        String: abstractions.String,
        Sorter: abstractions.Sorter,
        Visitor: abstractions.Visitor
    };
};

