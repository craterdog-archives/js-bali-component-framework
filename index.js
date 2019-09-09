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
const validateType = abstractions.Component.validate;
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
const convert = function(value) {
    if (value === null) value = undefined;
    var component;
    switch (typeof value) {
        case 'undefined':
            component = new elements.Pattern();  // none
            break;
        case 'boolean':
            value = value ? 1 : 0;  // convert to probability
            component = new elements.Probability(value);
            break;
        case 'number':  // NOTE: doesn't handle probabilities, they must be parsed as a string
            component = new elements.Number(value);
            break;
        case 'string':
            try {
                // first try to parse it as a Bali Document Notation™ string
                const parser = new utilities.Parser();
                component = parser.parseDocument(value);
            } catch (cause) {
                // otherwise convert it to a text element
                component = new elements.Text(value);
            }
            break;
        case 'object':
            if (Array.isArray(value)) {
                // convert the array to a list
                component = new collections.List();
                value.forEach(function(item) {
                    component.addItem(item);  // item converted in addItem()
                });
            } else if (value.isComponent) {
                // leave it since it is already a component
                component = value;
            } else {
                // convert the object to a catalog
                component = new collections.Catalog();
                const keys = Object.keys(value);
                keys.forEach(function(key) {
                    component.setValue(key, value[key]);  // key and value are converted in setValue()
                });
            }
            break;
        default:
            // punt, convert whatever it is to a multi-line text element
            component = new elements.Text('"' + EOL + value + EOL + '"');
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

    /**
     * This function creates an immutable instance of an angle using the specified value.
     * 
     * @param {Number} value The optional value of the angle (default is zero).
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Angle} The new angle element.
     */
    const angle = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Angle(value, parameters, debug);
    };
    angle.inverse = elements.Angle.inverse;
    angle.complement = elements.Angle.complement;
    angle.supplement = elements.Angle.supplement;
    angle.conjugate = elements.Angle.conjugate;
    angle.sum = elements.Angle.sum;
    angle.difference = elements.Angle.difference;
    angle.scaled = elements.Angle.scaled;
    angle.sine = elements.Angle.sine;
    angle.cosine = elements.Angle.cosine;
    angle.tangent = elements.Angle.tangent;
    angle.arcsine = elements.Angle.arcsine;
    angle.arccosine = elements.Angle.arccosine;
    angle.arctangent = elements.Angle.arctangent;
    
    /**
     * This function creates a new key-value association.
     * 
     * @param {String|Number|Boolean|Component} key The key of the association.
     * @param {String|Number|Boolean|Component} value The value associated with the key.
     * @param {Number} debug A number in the range [0..3].
     * @returns {Association} A new association.
     */
    const association = function(key, value, debug) {
        debug = debug || defaultLevel;
        return new composites.Association(key, value, debug);
    };
    
    /**
     * This function creates a new finite state automaton using the specified event type
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
     * @param {Array} eventTypes An array of the possible event types as strings.
     * @param {Object} nextStates An object defining the possible states as strings and allowed
     * transitions between them given specific event types.
     * @param {Number} debug A number in the range [0..3].
     * @returns {Automaton} A new finite state automaton.
     */
    const automaton = function(eventTypes, nextStates, debug) {
        debug = debug || defaultLevel;
        // must check these here since an automaton is a utility rather than a component
        if (debug > 1) validateType('/bali/utilities/Automaton', '$automaton', '$eventTypes', eventTypes, [
            '/javascript/Array'
        ], debug);
        if (debug > 1) validateType('/bali/utilities/Automaton', '$automaton', '$nextStates', nextStates, [
            '/javascript/Object'
        ], debug);
        return new utilities.Automaton(eventTypes, nextStates, debug);
    };
    
    /**
     * This function creates an immutable instance of a binary string using the specified
     * value.
     * 
     * @param {Buffer} value a buffer containing the bytes for the binary string.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Binary} The new binary string.
     */
    const binary = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Binary(value, parameters, debug);
    };
    binary.not = elements.Binary.not;
    binary.and = elements.Binary.and;
    binary.sans = elements.Binary.sans;
    binary.or = elements.Binary.or;
    binary.xor = elements.Binary.xor;
    binary.concatenation = elements.Binary.concatenation;
    
    /**
     * This function creates a new catalog component with optional parameters that are
     * used to parameterize its type.
     * 
     * @param {Sequence|Array|Object} associations An optional sequential object containing the
     * items to use to seed this catalog.
     * @param {Parameters} parameters Optional parameters used to parameterize this catalog. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Catalog} The new catalog.
     */
    const catalog = function(associations, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.Catalog(parameters, debug);
        collection.addItems(associations);
        return collection;
    };
    catalog.concatenation = collections.Catalog.concatenation;
    catalog.extraction = collections.Catalog.extraction;
    
    /**
     * This function duplicates a Bali component by copying each of its attributes
     * recursively.  Since elemental components are immutable, they are not duplicated.
     * 
     * @param {Component} component The component to be duplicated.
     * @param {Parameters} parameters Optional parameters to be associated with the
     * duplicate component. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Component} The duplicate component.
     */
    const duplicate = function(component, parameters, debug) {
        debug = debug || defaultLevel;
        // must check these here since a duplicator is a utility rather than a component
        if (debug > 1) validateType('/bali/utilities/Duplicator', '$duplicator', '$component', component, [
            '/bali/abstractions/Component'
        ], debug);
        const duplicator = new utilities.Duplicator(debug);
        return duplicator.duplicateComponent(component, parameters);
    };
    
    /**
     * This function creates a new duration element using the specified value.
     * 
     * @param {String|Number} value The source string the duration.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Duration} The new duration element.
     */
    const duration = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Duration(value, parameters, debug);
    };
    duration.inverse = elements.Duration.inverse;
    duration.sum = elements.Duration.sum;
    duration.difference = elements.Duration.difference;
    duration.scaled = elements.Duration.scaled;
    
    /**
     * This function creates a new Bali exception using the attributes defined in the
     * specified JavaScript object.  If the optional cause of the exception is provided
     * it is used to augment the information about the exception.
     * 
     * @param {Object} attributes A JavaScript object defining the attributes to be associated
     * with the new exception. 
     * @param {Error|Exception} cause The underlying exception that caused this exception.
     * @param {Number} debug A number in the range [0..3].
     * @returns {Exception} The new Bali exception, or the underlying <code>cause</code>
     * if the cause is from the same module as the current exception.
     */
    const exception = function(attributes, cause, debug) {
        debug = debug || defaultLevel;
        // must check these here since Exception class only "pretends" to inherit from Composite
        if (debug > 1) validateType('/bali/composites/Exception', '$exception', '$attributes', attributes, [
            '/javascript/Object'
        ], debug);
        if (debug > 1) validateType('/bali/composites/Exception', '$exception', '$cause', cause, [
            '/javascript/Undefined',
            '/javascript/Error',
            '/bali/composites/Exception'
        ], debug);
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
    
    /**
     * This function formats a Bali component into a JavaScript string containing
     * Bali Document Notation™. An optional indentation level may be specified
     * that causes the formatter to indent each line by that many additional
     * levels.  Each level is four spaces.
     * 
     * @param {Component} component The Bali component to be formatted. 
     * @param {Number} indentation The number of levels of indentation that should be inserted
     * to each formatted line at the top level. The default is zero.
     * @param {Number} debug A number in the range [0..3].
     * @returns {String} The resulting string containing Bali Document Notation™.
     */
    const format = function(component, indentation, debug) {
        debug = debug || defaultLevel;
        // must check these here since a formatter is a utility rather than a component
        if (debug > 1) validateType('/bali/utilities/Formatter', '$formatComponent', '$component', component, [
            '/bali/abstractions/Component'
        ], debug);
        if (debug > 1) validateType('/bali/utilities/Formatter', '$formatComponent', '$indentation', indentation, [
            '/javascript/Undefined',
            '/javascript/Number'
        ], debug);
        const formatter = new utilities.Formatter(indentation, debug);
        return formatter.formatComponent(component);
    };
    
    /**
     * This function returns a Bali iterator that operates on a JavaScript array.
     * 
     * @param {Array} array The JavaScript array to be iterated over. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Iterator} The resulting Bali iterator.
     */
    const iterator = function(array, debug) {
        debug = debug || defaultLevel;
        if (debug > 1) validateType('/bali/utilities/Iterator', '$iterator', '$array', array, [
            '/javascript/Array'
        ], debug);
        return new utilities.Iterator(array, debug);
    };
    
    /**
     * This function creates a new list component with optional parameters that are
     * used to parameterize its type.
     * 
     * @param {Object} items An optional JavaScript object containing the items to use
     * to seed this list.
     * @param {Parameters} parameters Optional parameters used to parameterize this list. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {List} The new list.
     */
    const list = function(items, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.List(parameters, debug);
        collection.addItems(items);
        return collection;
    };
    list.concatenation = collections.List.concatenation;
    
    /**
     * This function creates a new moment in time using the specified value and parameters.
     * 
     * @param {String|Number} value The source string value of the moment in time.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Moment} The new moment in time.
     */
    const moment = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Moment(value, parameters, debug);
    };
    moment.duration = elements.Moment.duration;
    moment.earlier = elements.Moment.earlier;
    moment.later = elements.Moment.later;
    
    /**
     * This function creates a new name element using the specified value.
     * 
     * @param {Array} value An array containing the name parts for the name string.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Symbol} The new name string element.
     */
    const name = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Name(value, parameters, debug);
    };
    name.concatenation = elements.Name.concatenation;
    
    /**
     * This function creates an immutable instance of a complex number using the specified
     * real and imaginary values.  If the imaginary value is an angle then the complex number
     * is in polar form, otherwise it is in rectangular form.
     * 
     * @param {Number} real The real value of the complex number.
     * @param {Number|Angle} imaginary The imaginary value of the complex number.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Complex} The new complex number.
     */
    const number = function(real, imaginary, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Number(real, imaginary, parameters, debug);
    };
    number.conjugate = elements.Number.conjugate;
    number.difference = elements.Number.difference;
    number.exponential = elements.Number.exponential;
    number.factorial = elements.Number.factorial;
    number.inverse = elements.Number.inverse;
    number.logarithm = elements.Number.logarithm;
    number.product = elements.Number.product;
    number.quotient = elements.Number.quotient;
    number.reciprocal = elements.Number.reciprocal;
    number.remainder = elements.Number.remainder;
    number.scaled = elements.Number.scaled;
    number.sum = elements.Number.sum;
    
    /**
     * This function creates a new Bali parameters component containing the items
     * defined in the specified JavaScript object. If the object is an array, the
     * parameters will be stored as a Bali list containing the parameter values. If
     * the object is an actual object the parameters will be stored as a Bali catalog
     * containing the key-value pair for each parameter.
     * 
     * @param {Object|Catalog} object An object containing the parameter values.
     * @param {Number} debug A number in the range [0..3].
     * @returns {Parameters} The resulting Bali parameters component.
     */
    const parameters = function(object, debug) {
        debug = debug || defaultLevel;
        return new composites.Parameters(object, debug);
    };
    
    /**
     * This function parses a JavaScript string containing Bali Document Notation™ and
     * returns the corresponding Bali component. If the <code>debug</code> flag is set,
     * the parser will report possible ambiguities in the input string.
     * 
     * @param {String} document A string containing Bali Document Notation™ to be parsed.
     * @param {Number} debug A number in the range [0..3].
     * @returns {Component} The corresponding Bali component.
     */
    const parse = function(document, debug) {
        debug = debug || defaultLevel;
        // must check these here since a parser is a utility rather than a component
        if (debug > 1) validateType('/bali/utilities/Parser', '$parse', '$document', document, [
            '/javascript/String'
        ], debug);
        const parser = new utilities.Parser(debug);
        return parser.parseDocument(document);
    };
    
    /**
     * This function creates a new pattern element using the specified value.
     * 
     * @param {String|RegExp} value A regular expression for the pattern element.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Pattern} The new pattern element.
     */
    const pattern = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Pattern(value, parameters, debug);
    };
    
    /**
     * This function creates a new percent element using the specified value.
     * 
     * @param {Number} value The value of the percent.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Percent} The new percent element.
     */
    const percent = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Percent(value, parameters, debug);
    };
    percent.inverse = elements.Percent.inverse;
    percent.sum = elements.Percent.sum;
    percent.difference = elements.Percent.difference;
    percent.scaled = elements.Percent.scaled;
    
    /**
     * This function creates a new probability element using the specified value.
     * 
     * @param {Number} value The value of the probability.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Probability} The new probability element.
     */
    const probability = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Probability(value, parameters, debug);
    };
    probability.not = elements.Probability.not;
    probability.and = elements.Probability.and;
    probability.sans = elements.Probability.sans;
    probability.or = elements.Probability.or;
    probability.xor = elements.Probability.xor;
    probability.random = elements.Probability.random;
    probability.coinToss = elements.Probability.coinToss;
    
    /**
     * This function creates a new procedure component with optional parameters that are
     * used to parameterize its behavior.
     * 
     * @param {Tree} statements The statements that are contained within the procedure.
     * @param {Parameters} parameters Optional parameters used to parameterize the procedure. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Procedure} A new procedure component.
     */
    const procedure = function(statements, parameters, debug) {
        debug = debug || defaultLevel;
        return new composites.Procedure(statements, parameters, debug);
    };
    
    /**
     * This function creates a new queue component with optional parameters that are
     * used to parameterize its type.
     * 
     * @param {Object} items An optional JavaScript object containing the items to use
     * to seed this queue.
     * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Queue} The new queue.
     */
    const queue = function(items, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.Queue(parameters, debug);
        collection.addItems(items);
        return collection;
    };
    
    /**
     * This function creates a new range of items with optional parameters that are used
     * to parameterize its type.
     * 
     * @param {Number|Component} first The first item in the range.
     * @param {Number|Component} last The last item in the range.
     * @param {Parameters} parameters Optional parameters used to parameterize this range. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Range} The new range.
     */
    const range = function(first, last, parameters, debug) {
        debug = debug || defaultLevel;
        return new collections.Range(first, last, parameters, debug);
    };
    
    /**
     * This function creates a new reference element using the specified value.
     * 
     * @param {String|URL} value The value of the reference.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Reference} The new reference element.
     */
    const reference = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Reference(value, parameters, debug);
    };
    
    /**
     * This function creates a new reserved identifier using the specified value.
     * 
     * @param {String} value The value of the reserved identifier.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Reserved} The new reserved identifier.
     */
    const reserved = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Reserved(value, parameters, debug);
    };
    
    /**
     * This function creates a new set component with optional parameters that are
     * used to parameterize its type.
     * 
     * @param {Object} items An optional JavaScript object containing the items to use
     * to seed this set.
     * @param {Comparator} comparator An optional comparator used to compare two components
     * for ordering in this set.
     * @param {Parameters} parameters Optional parameters used to parameterize this set. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Set} The new set.
     */
    const set = function(items, comparator, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.Set(parameters, comparator, debug);
        collection.addItems(items);
        return collection;
    };
    set.and = collections.Set.and;
    set.sans = collections.Set.sans;
    set.or = collections.Set.or;
    set.xor = collections.Set.xor;
    
    /**
     * This function creates a new stack component with optional parameters that are
     * used to parameterize its type.
     * 
     * @param {Object} items An optional JavaScript object containing the items to use
     * to seed this stack.
     * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Stack} The new stack.
     */
    const stack = function(items, parameters, debug) {
        debug = debug || defaultLevel;
        const collection = new collections.Stack(parameters, debug);
        collection.addItems(items);
        return collection;
    };
    
    /**
     * This function creates a new symbol element using the specified value.
     * 
     * @param {String} value The value of the symbol.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Symbol} The new symbol element.
     */
    const symbol = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Symbol(value, parameters, debug);
    };
    
    /**
     * This function creates a new tag element using the specified value.
     * 
     * @param {Number|String} value An optional parameter defining the size of a new random
     * tag or the value it should represent.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Tag} The new tag element.
     */
    const tag = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Tag(value, parameters, debug);
    };
    
    /**
     * This function creates a new text string element using the specified value.
     * 
     * @param {String} value The optional value of the text string.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Text} The new text string.
     */
    const text = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Text(value, parameters, debug);
    };
    text.concatenation = elements.Text.concatenation;
    
    /**
     * This function returns a string containing the Bali name for the type of the specified value.
     * 
     * @param {Any} value The value to be evaluated. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {String} A string containing the Bali name for the type of the specified value.
     */
    const type = function(value, debug) {
        debug = debug || defaultLevel;
        return abstractions.Component.type(value, debug);
    };
    
    /**
     * This function compares the type of a parameter value with the allowed types for that
     * parameter and throws an exception if it does not match.
     * 
     * @param {String} moduleName The name of the module being called.
     * @param {String} procedureName The name of the procedure being called.
     * @param {String} parameterName The name of the parameter being validated.
     * @param {Any} parameterValue The value of the parameter being validated.
     * @param {Array} allowedTypes An array of strings representing the allowed types for the parameter
     * value.
     * @param {Number} debug A number in the range [0..3].
     */
    const validate = function(moduleName, procedureName, parameterName, parameterValue, allowedTypes, debug) {
        debug = debug || defaultLevel;
        // can't use validate to validate its own parameters so do it manually
        if (typeof moduleName === 'string' && typeof procedureName === 'string' &&
            typeof parameterName === 'string' && Array.isArray(allowedTypes)) {
                return validateType(moduleName, procedureName, parameterName, parameterValue, allowedTypes, debug);
        }
        const exception = composites.Exception({
            $module: '/bali/abstractions/Component',
            $procedure: '$validate',
            $exception: '$invalidParameter',
            $moduleName: moduleName,
            $procedureName: procedureName,
            $parameterName: parameterName,
            $parameterValue: parameterValue,
            $allowedTypes: allowedTypes,
            $text: 'An invalid parameter was passed as part of the validation attempt.'
        });
        if (debug > 0) console.error(exception.toString());
        throw exception;
    };
    
    /**
     * This function creates a new version element using the specified value.
     * 
     * @param {Array} value An optional array containing the version levels for the version string.
     * @param {Parameters} parameters Optional parameters used to parameterize this element. 
     * @param {Number} debug A number in the range [0..3].
     * @returns {Symbol} The new version string element.
     */
    const version = function(value, parameters, debug) {
        debug = debug || defaultLevel;
        return new elements.Version(value, parameters, debug);
    };
    version.nextVersion = elements.Version.nextVersion;
    version.validNextVersion = elements.Version.validNextVersion;
    
    /*
     * This section defines constants for common 
     */
    angle.PI = parse('~pi', defaultLevel);
    
    angle.DEGREES = parameters({$units: '$degrees'}, defaultLevel);
    angle.RADIANS = parameters({$units: '$radians'}, defaultLevel);
    
    binary.BASE2 = parameters({$encoding: '$base2'}, defaultLevel);
    binary.BASE16 = parameters({$encoding: '$base16'}, defaultLevel);
    binary.BASE32 = parameters({$encoding: '$base32'}, defaultLevel);
    binary.BASE64 = parameters({$encoding: '$base64'}, defaultLevel);
    
    number.UNDEFINED = parse('undefined', defaultLevel);
    number.ZERO = parse('0', defaultLevel);
    number.ONE = parse('1', defaultLevel);
    number.PHI = parse('phi', defaultLevel);
    number.E = parse('e', defaultLevel);
    number.INFINITY = parse('infinity', defaultLevel);
    number.I = parse('1i', defaultLevel);
    
    number.POLAR = parameters({$format: '$polar'}, defaultLevel);
    number.RECTANGULAR = parameters({$format: '$rectangular'}, defaultLevel);
    
    pattern.ANY = parse('any', defaultLevel);
    pattern.NONE = parse('none', defaultLevel);
    
    probability.FALSE = parse('false', defaultLevel);
    probability.TRUE = parse('true', defaultLevel);


    return {
        angle: angle,
        association: association,
        automaton: automaton,
        binary: binary,
        catalog: catalog,
        codex: utilities.codex,
        duplicate: duplicate,
        duration: duration,
        exception: exception,
        format: format,
        iterator: iterator,
        list: list,
        moment: moment,
        name: name,
        number: number,
        parameters: parameters,
        parse: parse,
        pattern: pattern,
        percent: percent,
        precision: utilities.precision,
        probability: probability,
        procedure: procedure,
        queue: queue,
        random: utilities.random,
        range: range,
        reference: reference,
        reserved: reserved,
        set: set,
        stack: stack,
        symbol: symbol,
        tag: tag,
        text: text,
        type: type,
        validate: validate,
        version: version,
        visitor: abstractions.Visitor
    };
};
