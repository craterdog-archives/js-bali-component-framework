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
const URL = require('url').URL;
const utilities = require('./src/utilities');
const abstractions = require('./src/abstractions');  // depends on utilities
const elements = require('./src/elements');  // depends on abstractions
const composites = require('./src/composites');  // depends on elements
const collections = require('./src/collections');  // depends on composites
utilities.Parser = require('./src/utilities/Parser').Parser;  // depends on everything (must be last)


// PRIVATE FUNCTIONS

/*                            AVOIDING CIRCULAR DEPENDENCIES
 * This function is used to convert most JavaScript values into their corresponding
 * Bali Nebula™ component values.  It is needed by the Composite and Exception classes and
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
            } else if (value.getTypeId) {
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
abstractions.Composite.prototype.convert = convert;
composites.Exception.prototype.convert = convert;


/*
 * This function compares the type of a parameter value with the allowed types for that
 * parameter and throws an exception if it does not match.
 */
const validateType = function(moduleName, procedureName, parameterName, parameterValue, allowedTypes) {
    const actualType = type(parameterValue);
    if (allowedTypes.indexOf(actualType) > -1) return;
    if (parameterValue && parameterValue.getTypeId) {
        if (allowedTypes.indexOf('/bali/abstractions/Component') > -1) return;
        if (allowedTypes.indexOf('/bali/abstractions/Element') > -1 && parameterValue.isElement()) return;
        if (allowedTypes.indexOf('/bali/abstractions/Composite') > -1 && parameterValue.isComposite()) return;
        if (allowedTypes.indexOf('/bali/abstractions/Collection') > -1 && parameterValue.isCollection()) return;
        if (allowedTypes.indexOf('/bali/interfaces/Logical') > -1 && parameterValue.isLogicial()) return;
        if (allowedTypes.indexOf('/bali/interfaces/Scalable') > -1 && parameterValue.isScalable()) return;
        if (allowedTypes.indexOf('/bali/interfaces/Numerical') > -1 && parameterValue.isNumerical()) return;
        if (allowedTypes.indexOf('/bali/interfaces/Literal') > -1 && parameterValue.isLiteral()) return;
        if (allowedTypes.indexOf('/bali/interfaces/Sequential') > -1 && parameterValue.isSequential()) return;
        if (allowedTypes.indexOf('/bali/interfaces/Chainable') > -1 && parameterValue.isChainable()) return;
        if (allowedTypes.indexOf('/bali/interfaces/Procedural') > -1 && parameterValue.isProcedural()) return;
    }
    throw new composites.Exception({  // must not be exception() to avoid infinite recursion
        $module: moduleName,
        $procedure: procedureName,
        $parameter: parameterName,
        $exception: '$parameterType',
        $expected: allowedTypes,
        $actual: actualType,
        $text: 'An invalid parameter type was passed to the procedure.'
    });
};


/*
 * This function adds the specified items to the specified collection converting the items
 * as needed.
 */
const addItems = function(moduleName, procedureName, collection, items) {
    items = items || undefined;  // normalize nulls to undefined
    if (items) {
        if (Array.isArray(items)) {
            items.forEach(function(item) {
                item = convert(item);
                if (item.isType('$Association')) {
                    item = item.getValue();
                }
                collection.addItem(item);
            });
        } else if (items.isSequential()) {
            const iterator = items.getIterator();
            while (iterator.hasNext()) {
                var item = iterator.getNext();
                item = convert(item);
                if (item.isType('$Association')) {
                    item = item.getValue();
                }
                collection.addItem(item);
            }
        } else if (typeof items === 'object') {
            const keys = Object.keys(items);
            keys.forEach(function(key) {
                collection.addItem(items[key]);
            });
        } else {
            throw new composites.Exception({  // must not be exception() to avoid infinite recursion
                $module: moduleName,
                $procedure: procedureName,
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Array',
                    '/javascript/Object',
                    '/bali/interfaces/Sequential'
                ],
                $actual: '/javascript/' + items.constructor.name,
                $value: items,
                $text: 'An invalid value type was passed to the constructor.'
            });
        }
    }
};


// PUBLIC INTERFACE

/**
 * This function creates an immutable instance of an angle using the specified value.
 * 
 * @param {Number} value The optional value of the angle (default is zero).
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Angle} The new angle element.
 */
const angle = function(value, parameters) {
    validateType('/bali/elements/Angle', '$angle', '$value', value, [
        '/javascript/Undefined',
        '/javascript/Number'
    ]);
    validateType('/bali/elements/Angle', '$angle', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    if (value === value) value = value || 0;  // default value if not NaN and not defined
    if (!isFinite(value)) {
        throw exception({
            $module: '/bali/elements/Angle',
            $procedure: '$angle',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid angle value was passed to the constructor.'
        });
    }
    return new elements.Angle(value, parameters);
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
exports.angle = angle;

/**
 * This function creates a new key-value association.
 * 
 * @param {String|Number|Boolean|Component} key The key of the association.
 * @param {String|Number|Boolean|Component} value The value associated with the key.
 * @returns {Association} A new association.
 */
const association = function(key, value) {
    key = convert(key);
    value = convert(value);
    return new composites.Association(key, value);
};
exports.association = association;

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
 * @returns {Automaton} A new finite state automaton.
 */
const automaton = function(eventTypes, nextStates) {
    validateType('/bali/utilities/Automaton', '$automaton', '$array', eventTypes, [
        '/javascript/Array'
    ]);
    validateType('/bali/utilities/Automaton', '$automaton', '$object', nextStates, [
        '/javascript/Object'
    ]);
    return new utilities.Automaton(eventTypes, nextStates);
};
exports.automaton = automaton;

/**
 * This function creates an immutable instance of a binary string using the specified
 * value.
 * 
 * @param {Buffer} value a buffer containing the bytes for the binary string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Binary} The new binary string.
 */
const binary = function(value, parameters) {
    validateType('/bali/elements/Binary', '$binary', '$value', value, [
        '/javascript/Undefined',
        '/nodejs/Buffer'
    ]);
    validateType('/bali/elements/Binary', '$binary', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    return new elements.Binary(value, parameters);
};
binary.not = elements.Binary.not;
binary.and = elements.Binary.and;
binary.sans = elements.Binary.sans;
binary.or = elements.Binary.or;
binary.xor = elements.Binary.xor;
binary.concatenation = elements.Binary.concatenation;
exports.binary = binary;

/**
 * This function creates a new catalog component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Sequence|Array|Object} associations An optional sequential object containing the
 * items to use to seed this catalog.
 * @param {Parameters} parameters Optional parameters used to parameterize this catalog. 
 * @returns {Catalog} The new catalog.
 */
const catalog = function(associations, parameters) {
    validateType('/bali/collections/Catalog', '$catalog', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.Catalog(parameters);
    var index = 1;
    associations = associations || undefined;  // normalize nulls to undefined
    if (associations) {
        if (Array.isArray(associations)) {
            associations.forEach(function(item) {
                item = convert(item);
                if (item.isType('$Association')) {
                    collection.addItem(item);
                } else {
                    collection.setValue(index++, item);
                }
            });
        } else if (associations.isSequential && associations.isSequential()) {
            const iterator = associations.getIterator();
            while (iterator.hasNext()) {
                var item = iterator.getNext();
                item = convert(item);
                if (item.isType('$Association')) {
                    collection.addItem(item);
                } else {
                    collection.setValue(index++, item);
                }
            }
        } else if (typeof associations === 'object') {
            const keys = Object.keys(associations);
            keys.forEach(function(key) {
                const symbol = (key[0] === '$') ? key : '$' + key;
                collection.setValue(symbol, associations[key]);
            });
        } else {
            throw exception({
                $module: '/bali/collections/Catalog',
                $procedure: '$catalog',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Array',
                    '/javascript/Object',
                    '/bali/interfaces/Sequential'
                ],
                $actual: '/javascript/' + associations.constructor.name,
                $value: associations,
                $text: 'An invalid value type was passed to the constructor.'
            });
        }
    }
    return collection;
};
exports.catalog = catalog;
catalog.concatenation = collections.Catalog.concatenation;
catalog.extraction = collections.Catalog.extraction;

/*
 * This library exports the byte encoding and decoding functions.
 */
exports.codex = utilities.codex;

/**
 * This function duplicates a Bali component by copying each of its attributes
 * recursively.  Since elemental components are immutable, they are not duplicated.
 * 
 * @param {Component} component The component to be duplicated.
 * @returns {Component} The duplicate component.
 */
const duplicate = function(component) {
    validateType('/bali/utilities/Duplicator', '$duplicator', '$component', component, [
        '/bali/abstractions/Component'
    ]);
    const duplicator = new utilities.Duplicator();
    return duplicator.duplicateComponent(component);
};
exports.duplicate = duplicate;

/**
 * This function creates a new duration element using the specified value.
 * 
 * @param {String|Number} value The source string the duration.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Duration} The new duration element.
 */
const duration = function(value, parameters) {
    validateType('/bali/elements/Duration', '$duration', '$value', value, [
        '/javascript/Undefined',
        '/javascript/String',
        '/javascript/Number'
    ]);
    validateType('/bali/elements/Duration', '$duration', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    return new elements.Duration(value, parameters);
};
duration.inverse = elements.Duration.inverse;
duration.sum = elements.Duration.sum;
duration.difference = elements.Duration.difference;
duration.scaled = elements.Duration.scaled;
exports.duration = duration;

/**
 * This function creates a new Bali exception using the attributes defined in the
 * specified JavaScript object.  If the optional cause of the exception is provided
 * it is used to augment the information about the exception.
 * 
 * @param {Object} object A JavaScript object defining the attributes to be associated
 * with the new exception. 
 * @param {Error|Exception} cause The underlying exception that caused this exception.
 * @returns {Exception} The new Bali exception, or the underlying <code>cause</code>
 * if the cause is from the same module as the current exception.
 */
const exception = function(object, cause) {
    validateType('/bali/utilities/Exception', '$exception', '$object', object, [
        '/javascript/Object'
    ]);
    validateType('/bali/utilities/Exception', '$exception', '$cause', cause, [
        '/javascript/Undefined',
        '/javascript/Error',
        '/bali/utilities/Exception'
    ]);
    var error;
    if (cause && cause.constructor.name === 'Exception' &&
        cause.attributes.getValue('$module').toString() === object['$module']) {
        // same module so no need to wrap it
        error = cause;
    } else {
        // wrap the cause in a new exception
        error = new composites.Exception(object, cause);
        if (cause) error.stack = cause.stack;
    }
    return error;
};
exports.exception = exception;

/**
 * This function formats a Bali component into a JavaScript string containing
 * Bali Document Notation™. An optional indentation level may be specified
 * that causes the formatter to indent each line by that many additional
 * levels.  Each level is four spaces.
 * 
 * @param {Component} component The Bali component to be formatted. 
 * @param {Number} indentation An optional number of levels to indent the output.
 * @returns {String} The resulting string containing Bali Document Notation™.
 */
const format = function(component, indentation) {
    validateType('/bali/utilities/Formatter', '$format', '$component', component, [
        '/bali/abstractions/Component'
    ]);
    validateType('/bali/utilities/Formatter', '$format', '$indentation', indentation, [
        '/javascript/Undefined',
        '/javascript/Number'
    ]);
    const formatter = new utilities.Formatter(indentation);
    return formatter.formatComponent(component);
};
exports.format = format;

/**
 * This function returns a Bali iterator that operates on a JavaScript array.
 * 
 * @param {Array} array The JavaScript array to be iterated over. 
 * @returns {Iterator} The resulting Bali iterator.
 */
const iterator = function(array) {
    validateType('/bali/utilities/Iterator', '$iterator', '$array', array, [
        '/javascript/Array'
    ]);
    return new utilities.Iterator(array);
};
exports.iterator = iterator;

/**
 * This function creates a new list component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Object} items An optional JavaScript object containing the items to use
 * to seed this list.
 * @param {Parameters} parameters Optional parameters used to parameterize this list. 
 * @returns {List} The new list.
 */
const list = function(items, parameters) {
    validateType('/bali/collections/List', '$list', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.List(parameters);
    addItems('/bali/collections/List', '$list', collection, items);
    return collection;
};
exports.list = list;
list.concatenation = collections.List.concatenation;

/**
 * This function formats a Bali literal into a JavaScript string containing
 * Bali Document Notation™.
 * 
 * @param {Element} element The Bali element to be formatted. 
 * @returns {String} The resulting string containing Bali Document Notation™.
 */
const literal = function(element) {
    validateType('/bali/utilities/Formatter', '$literal', '$element', element, [
        '/bali/interfaces/Literal'
    ]);
    const formatter = new utilities.Formatter();
    return formatter.formatLiteral(element);
};
exports.literal = literal;

/**
 * This function creates a new moment in time using the specified value and parameters.
 * 
 * @param {String|Number} value The source string value of the moment in time.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Moment} The new moment in time.
 */
const moment = function(value, parameters) {
    validateType('/bali/elements/Moment', '$moment', '$value', value, [
        '/javascript/Undefined',
        '/javascript/String',
        '/javascript/Number'
    ]);
    validateType('/bali/elements/Moment', '$moment', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    return new elements.Moment(value, parameters);
};
moment.duration = elements.Moment.duration;
moment.earlier = elements.Moment.earlier;
moment.later = elements.Moment.later;
exports.moment = moment;

/**
 * This function creates a new name element using the specified value.
 * 
 * @param {Array} value An array containing the name parts for the name string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new name string element.
 */
const name = function(value, parameters) {
    validateType('/bali/elements/Name', '$name', '$value', value, [
        '/javascript/Array'
    ]);
    validateType('/bali/elements/Name', '$name', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    if (!Array.isArray(value) || value.length === 0) {
        throw exception({
            $module: '/bali/elements/Name',
            $procedure: '$name',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid name value was passed to the constructor.'
        });
    }
    return new elements.Name(value, parameters);
};
name.concatenation = elements.Name.concatenation;
exports.name = name;

/**
 * This function creates an immutable instance of a complex number using the specified
 * real and imaginary values.  If the imaginary value is an angle then the complex number
 * is in polar form, otherwise it is in rectangular form.
 * 
 * @param {Number} real The real value of the complex number.
 * @param {Number|Angle} imaginary The imaginary value of the complex number.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Complex} The new complex number.
 */
const number = function(real, imaginary, parameters) {
    validateType('/bali/elements/Number', '$number', '$real', real, [
        '/javascript/Undefined',
        '/javascript/Number'
    ]);
    validateType('/bali/elements/Number', '$number', '$imaginary', imaginary, [
        '/javascript/Undefined',
        '/javascript/Number',
        '/bali/elements/Angle'
    ]);
    validateType('/bali/elements/Number', '$number', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    return new elements.Number(real, imaginary, parameters);
};
exports.number = number;
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
 * @param {Object} object A JavaScript object containing the parameter values.
 * @returns {Parameters} The resulting Bali parameters component.
 */
const parameters = function(object) {
    validateType('/bali/composites/Parameters', '$parameters', '$object', object, [
        '/javascript/Array',
        '/javascript/Object'
    ]);
    if (Array.isArray(object)) {
        object = list(object);
    } else {
        object = catalog(object);
    }
    return new composites.Parameters(object);
};
exports.parameters = parameters;

/**
 * This function parses a JavaScript string containing Bali Document Notation™ and
 * returns the corresponding Bali component. If the <code>debug</code> flag is set,
 * the parser will report possible ambiguities in the input string.
 * 
 * @param {String} document A string containing Bali Document Notation™ to be parsed.
 * @param {Parameters} parameters Optional parameters to be used to parameterize the
 * resulting component.
 * @param {Boolean} debug An optional flag that when set will cause the parser to
 * report possible ambiguities in the input string.
 * @returns {Component} The corresponding Bali component.
 */
const parse = function(document, parameters, debug) {
    validateType('/bali/utilities/Parser', '$parse', '$document', document, [
        '/javascript/String'
    ]);
    validateType('/bali/utilities/Parser', '$parse', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    validateType('/bali/utilities/Parser', '$parse', '$debug', debug, [
        '/javascript/Undefined',
        '/javascript/Boolean'
    ]);
    const parser = new utilities.Parser(debug);
    return parser.parseDocument(document, parameters);
};
exports.parse = parse;

/**
 * This function creates a new pattern element using the specified value.
 * 
 * @param {String|RegExp} value A regular expression for the pattern element.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Pattern} The new pattern element.
 */
const pattern = function(value, parameters) {
    validateType('/bali/elements/Pattern', '$pattern', '$value', value, [
        '/javascript/Undefined',
        '/javascript/String',
        '/javascript/RegExp'
    ]);
    validateType('/bali/elements/Pattern', '$pattern', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    return new elements.Pattern(value, parameters);
};
exports.pattern = pattern;

/**
 * This function creates a new percent element using the specified value.
 * 
 * @param {Number} value The value of the percent.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Percent} The new percent element.
 */
const percent = function(value, parameters) {
    validateType('/bali/elements/Percent', '$percent', '$value', value, [
        '/javascript/Undefined',
        '/javascript/Number'
    ]);
    validateType('/bali/elements/Percent', '$percent', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    return new elements.Percent(value, parameters);
};
percent.inverse = elements.Percent.inverse;
percent.sum = elements.Percent.sum;
percent.difference = elements.Percent.difference;
percent.scaled = elements.Percent.scaled;
exports.percent = percent;

/*
 * This library exports accurate precision arithmetic functions.
 */
exports.precision = utilities.precision;

/**
 * This function creates a new probability element using the specified value.
 * 
 * @param {Number} value The value of the probability.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Probability} The new probability element.
 */
const probability = function(value, parameters) {
    validateType('/bali/elements/Probability', '$probability', '$value', value, [
        '/javascript/Undefined',
        '/javascript/Boolean',
        '/javascript/Number'
    ]);
    validateType('/bali/elements/Probability', '$probability', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    if (value === value) value = value || 0;  // default value if not NaN and not defined
    if (!isFinite(value) || value < 0 || value > 1) {
        throw exception({
            $module: '/bali/elements/Probability',
            $procedure: '$probability',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid probability value was passed to the constructor.'
        });
    }
    return new elements.Probability(value, parameters);
};
probability.not = elements.Probability.not;
probability.and = elements.Probability.and;
probability.sans = elements.Probability.sans;
probability.or = elements.Probability.or;
probability.xor = elements.Probability.xor;
probability.random = elements.Probability.random;
probability.coinToss = elements.Probability.coinToss;
exports.probability = probability;

/**
 * This function creates a new queue component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Object} items An optional JavaScript object containing the items to use
 * to seed this queue.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Queue} The new queue.
 */
const queue = function(items, parameters) {
    validateType('/bali/collections/Queue', '$queue', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.Queue(parameters);
    addItems('/bali/collections/Queue', '$queue', collection, items);
    return collection;
};
exports.queue = queue;

/*
 * This library exports the random number generator functions.
 */
exports.random = utilities.random;

/**
 * This function creates a new range of items with optional parameters that are used
 * to parameterize its type.
 * 
 * @param {Number|Component} first The first item in the range.
 * @param {Number|Component} last The last item in the range.
 * @param {Parameters} parameters Optional parameters used to parameterize this range. 
 * @returns {Range} The new range.
 */
const range = function(first, last, parameters) {
    validateType('/bali/composites/Range', '$range', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    first = convert(first);
    last = convert(last);
    return new composites.Range(first, last, parameters);
};
exports.range = range;

/**
 * This function creates a new reference element using the specified value.
 * 
 * @param {String|URL} value The value of the reference.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reference} The new reference element.
 */
const reference = function(value, parameters) {
    validateType('/bali/elements/Reference', '$reference', '$value', value, [
        '/javascript/String',
        '/nodejs/URL'
    ]);
    validateType('/bali/elements/Reference', '$reference', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    try {
        if (value.constructor.name !== 'URL') {
            value = new URL(value.replace(/\$tag:#/, '$tag:%23'));  // escape the '#'
        }
    } catch (exception) {
        throw exception({
            $module: '/bali/elements/Reference',
            $procedure: '$reference',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid reference value was passed to the constructor.'
        }, exception);
    }
    return new elements.Reference(value, parameters);
};
exports.reference = reference;

/**
 * This function creates a new reserved identifier using the specified value.
 * 
 * @param {String} value The value of the reserved identifier.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Reserved} The new reserved identifier.
 */
const reserved = function(value, parameters) {
    validateType('/bali/elements/Reserved', '$reserved', '$value', value, [
        '/javascript/String'
    ]);
    validateType('/bali/elements/Reserved', '$reserved', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*(-[0-9]+)?$/g.test(value)) {
        throw exception({
            $module: '/bali/elements/Reserved',
            $procedure: '$reserved',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid reserved symbol value was passed to the constructor.'
        });
    }
    return new elements.Reserved(value, parameters);
};
exports.reserved = reserved;

/**
 * This function creates a new set component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Object} items An optional JavaScript object containing the items to use
 * to seed this set.
 * @param {Comparator} comparator An optional comparator used to compare two components
 * for ordering in this set.
 * @param {Parameters} parameters Optional parameters used to parameterize this set. 
 * @returns {Set} The new set.
 */
const set = function(items, comparator, parameters) {
    validateType('/bali/collections/Set', '$set', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.Set(parameters, comparator);
    addItems('/bali/collections/Set', '$set', collection, items);
    return collection;
};
exports.set = set;
set.and = collections.Set.and;
set.sans = collections.Set.sans;
set.or = collections.Set.or;
set.xor = collections.Set.xor;

/**
 * This function creates a new source code component with optional parameters that are
 * used to parameterize its behavior.
 * 
 * @param {Tree} procedure The procedure that is contained within the source code.
 * @param {Parameters} parameters Optional parameters used to parameterize the source code. 
 * @returns {Source} A new source code component.
 */
const source = function(procedure, parameters) {
    validateType('/bali/composites/Source', '$source', '$procedure', procedure, [
        '/bali/composites/Tree'
    ]);
    validateType('/bali/composites/Source', '$source', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    return new composites.Source(procedure, parameters);
};
exports.source = source;

/**
 * This function creates a new stack component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Object} items An optional JavaScript object containing the items to use
 * to seed this stack.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Stack} The new stack.
 */
const stack = function(items, parameters) {
    validateType('/bali/collections/Stack', '$stack', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.Stack(parameters);
    addItems('/bali/collections/Stack', '$stack', collection, items);
    return collection;
};
exports.stack = stack;

/**
 * This function creates a new symbol element using the specified value.
 * 
 * @param {String} value The value of the symbol.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new symbol element.
 */
const symbol = function(value, parameters) {
    validateType('/bali/elements/Symbol', '$symbol', '$value', value, [
        '/javascript/String'
    ]);
    validateType('/bali/elements/Symbol', '$symbol', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    if (!value || !/^[a-zA-Z][0-9a-zA-Z]*$/g.test(value)) {
        throw exception({
            $module: '/bali/elements/Symbol',
            $procedure: '$symbol',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid symbol value was passed to the constructor.'
        });
    }
    return new elements.Symbol(value, parameters);
};
exports.symbol = symbol;

/**
 * This function creates a new tag element using the specified value.
 * 
 * @param {Number|String} value An optional parameter defining the size of a new random
 * tag or the value it should represent.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Tag} The new tag element.
 */
const tag = function(value, parameters) {
    validateType('/bali/elements/Tag', '$tag', '$value', value, [
        '/javascript/Undefined',
        '/javascript/String',
        '/javascript/Number'
    ]);
    validateType('/bali/elements/Tag', '$tag', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    return new elements.Tag(value, parameters);
};
exports.tag = tag;

/**
 * This function creates a new text string element using the specified value.
 * 
 * @param {String} value The optional value of the text string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Text} The new text string.
 */
const text = function(value, parameters) {
    validateType('/bali/elements/Text', '$text', '$value', value, [
        '/javascript/Undefined',
        '/javascript/String'
    ]);
    validateType('/bali/elements/Text', '$text', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    return new elements.Text(value, parameters);
};
text.concatenation = elements.Text.concatenation;
exports.text = text;

/**
 * This function creates a new tree node component.
 * 
 * @param {Number} type The type of the tree node component.
 * @returns {Tree} The new tree node component.
 */
const tree = function(type) {
    validateType('/bali/composites/Tree', '$tree', '$number', type, [
        '/javascript/Number'
    ]);
    return new composites.Tree(type);
};
exports.tree = tree;

/**
 * this function returns a string containing the Bali name for the type of the specified value.
 * 
 * @param {Any} value The value to be evaluated. 
 * @returns {String} A string containing the Bali name for the type of the specified value.
 */
const type = function(value) {
    // handle null legacy
    if (value === null) value = undefined;  // null is of type 'object' so undefine it!

    // handle primitive types
    if (typeof value === 'undefined') return '/javascript/Undefined';
    if (typeof value === 'boolean') return '/javascript/Boolean';
    if (typeof value === 'number') return '/javascript/Number';
    if (typeof value === 'bigint') return '/javascript/BigInt';
    if (typeof value === 'string') return '/javascript/String';
    if (typeof value === 'symbol') return '/javascript/Symbol';
    if (typeof value === 'function') return '/javascript/Function';

    // handle common object types
    if (value instanceof Array) return '/javascript/Array';
    if (value instanceof Date) return '/javascript/Date';
    if (value instanceof Error) return '/javascript/Error';
    if (value instanceof Promise) return '/javascript/Promise';
    if (value instanceof RegExp) return '/javascript/RegExp';
    if (value instanceof Buffer) return '/nodejs/Buffer';
    if (value instanceof URL) return '/nodejs/URL';

    // handle Bali component types
    if (value instanceof elements.Angle) return '/bali/elements/Angle';
    if (value instanceof composites.Association) return '/bali/composites/Association';
    if (value instanceof elements.Binary) return '/bali/elements/Binary';
    if (value instanceof collections.Catalog) return '/bali/collections/Catalog';
    if (value instanceof elements.Duration) return '/bali/elements/Duration';
    if (value instanceof composites.Exception) return '/bali/utilities/Exception';
    if (value instanceof utilities.Iterator) return '/bali/utilities/Iterator';
    if (value instanceof collections.List) return '/bali/collections/List';
    if (value instanceof elements.Moment) return '/bali/elements/Moment';
    if (value instanceof elements.Name) return '/bali/elements/Name';
    if (value instanceof elements.Number) return '/bali/elements/Number';
    if (value instanceof composites.Parameters) return '/bali/composites/Parameters';
    if (value instanceof elements.Pattern) return '/bali/elements/Pattern';
    if (value instanceof elements.Percent) return '/bali/elements/Percent';
    if (value instanceof elements.Probability) return '/bali/elements/Probability';
    if (value instanceof collections.Queue) return '/bali/collections/Queue';
    if (value instanceof composites.Range) return '/bali/composites/Range';
    if (value instanceof elements.Reference) return '/bali/elements/Reference';
    if (value instanceof elements.Reserved) return '/bali/elements/Reserved';
    if (value instanceof collections.Set) return '/bali/collections/Set';
    if (value instanceof composites.Source) return '/bali/composites/Source';
    if (value instanceof collections.Stack) return '/bali/collections/Stack';
    if (value instanceof elements.Symbol) return '/bali/elements/Symbol';
    if (value instanceof elements.Tag) return '/bali/elements/Tag';
    if (value instanceof elements.Text) return '/bali/elements/Text';
    if (value instanceof composites.Tree) return '/bali/composites/Tree';
    if (value instanceof elements.Version) return '/bali/elements/Version';

    // handle anything else
    return '/javascript/' + (value.constructor ? value.constructor.name : 'Unknown');
};
exports.type = type;

/*
 * This library exports the Bali component types.
 */
exports.types = utilities.types;

/**
 * This function creates a new version element using the specified value.
 * 
 * @param {Array} value An optional array containing the version levels for the version string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new version string element.
 */
const version = function(value, parameters) {
    validateType('/bali/elements/Version', '$version', '$value', value, [
        '/javascript/Undefined',
        '/javascript/Array'
    ]);
    validateType('/bali/elements/Version', '$version', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    value = value || [1];  // the default value
    if (value.indexOf(0) >= 0) {
        throw exception({
            $module: '/bali/elements/Version',
            $procedure: '$version',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid version value was passed to the constructor.'
        });
    }
    return new elements.Version(value, parameters);
};
version.nextVersion = elements.Version.nextVersion;
version.validNextVersion = elements.Version.validNextVersion;
exports.version = version;

/*
 * Make the Visitor interface available to subclass from.
 */
exports.visitor = abstractions.Visitor;

/*
 * This section exports constants to the public interface.
 */
angle.PI = parse('~pi');

angle.DEGREES = parameters({$units: '$degrees'});
angle.RADIANS = parameters({$units: '$radians'});

binary.BASE2 = parameters({$encoding: '$base2'});
binary.BASE16 = parameters({$encoding: '$base16'});
binary.BASE32 = parameters({$encoding: '$base32'});
binary.BASE64 = parameters({$encoding: '$base64'});

number.UNDEFINED = parse('undefined');
number.ZERO = parse('0');
number.ONE = parse('1');
number.PHI = parse('phi');
number.E = parse('e');
number.INFINITY = parse('infinity');
number.I = parse('1i');

number.POLAR = parameters({$format: '$polar'});
number.RECTANGULAR = parameters({$format: '$rectangular'});

pattern.ANY = parse('any');
pattern.NONE = parse('none');

probability.FALSE = parse('false');
probability.TRUE = parse('true');
