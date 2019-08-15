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

// IMPORTS

const URL = require('url').URL;
const utilities = require('./src/utilities');
const abstractions = require('./src/abstractions');  // depends on utilities
const elements = require('./src/elements');  // depends on abstractions
const composites = require('./src/composites');  // depends on elements
const collections = require('./src/collections');  // depends on composites
utilities.Parser = require('./src/utilities/Parser').Parser;  // depends on everything (must be last)


// AVOIDING CIRCULAR DEPENDENCIES

/*
 * The convert method is needed by the bali.Composite and bali.Exception classes and
 * depends on everything else so it must be injected into them after everything has
 * been imported. Just to be safe, this function does not depend on any functions
 * defined later in this file, even though that should not matter. When possible
 * circular dependencies are involved we can't be too careful!
 */
const convert = function(value) {
    if (value === null) value = undefined;
    var component;
    switch (typeof value) {
        case 'undefined':
            component = new elements.Pattern();
            break;
        case 'boolean':
            value = value ? 1 : 0;
            component = new elements.Probability(value);
            break;
        case 'number':
            component = new elements.Number(value);
            break;
        case 'string':
            try {
                const parser = new utilities.Parser();
                component = parser.parseDocument(value);
            } catch (cause) {
                const error = new utilities.Exception({
                    $module: '/bali/abstractions/Component',
                    $procedure: '$convert',
                    $exception: '$parameterValue',
                    $source: new elements.Text(value),
                    $text: new elements.Text('The source string to be converted is not valid.')
                }, cause);
                if (cause) error.stack = cause.stack;
                throw error;
            }
            break;
        case 'object':
            if (Array.isArray(value)) {
                // convert the array to a list
                component = new collections.List();
                value.forEach(function(item) {
                    component.addItem(item);  // item converted in addItem()
                });
            } else if (value.constructor.prototype.acceptVisitor && value.getTypeId()) {
                // leave it since it is already a component
                component = value;
            } else {
                // convert the object to a catalog
                component = new collections.Catalog();
                const keys = Object.keys(value);
                keys.forEach(function(key) {
                    const symbol = (key[0] === '$') ? key : '$' + key;
                    component.setValue(symbol, value[key]);  // symbol and value are converted in setValue()
                });
            }
            break;
        default:
            const invalidType = typeof value;
            invalidType = invalidType.charAt(0).toUpperCase() + invalidType.slice(1);  // capitalize
            throw new utilities.Exception({
                $module: '/bali/abstractions/Component',
                $procedure: '$convert',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Boolean',
                    '/javascript/Number',
                    '/javascript/String',
                    '/javascript/Array',
                    '/javascript/Object'
                ],
                $actual: '/javascript/' + invalidType,
                $text: new elements.Text('Attempted to convert an invalid value type.')
            });
    }
    return component;
};
abstractions.Composite.prototype.convert = convert;
utilities.Exception.prototype.convert = convert;


// PRIVATE FUNCTIONS

const validateType = function(moduleName, procedureName, parameterName, parameterValue, allowedTypes) {
    const actualType = type(parameterValue);
    if (allowedTypes.indexOf(actualType) > -1) return;
    if (parameterValue && parameterValue.getTypeId) {
        const typeId = parameterValue.getTypeId();
        if (allowedTypes.indexOf('/bali/abstractions/Component') > -1) return;
        if (allowedTypes.indexOf('/bali/abstractions/Element') > -1 && !parameterValue.normalizeIndex) return;
        if (allowedTypes.indexOf('/bali/abstractions/Composite') > -1 && parameterValue.normalizeIndex) return;
        if (allowedTypes.indexOf('/bali/abstractions/Collection') > -1 && parameterValue.containsAny) return;
        if (allowedTypes.indexOf('/bali/interfaces/Logical') > -1 && utilities.types.isLogical(typeId)) return;
        if (allowedTypes.indexOf('/bali/interfaces/Scalable') > -1 && utilities.types.isScalable(typeId)) return;
        if (allowedTypes.indexOf('/bali/interfaces/Numeric') > -1 && utilities.types.isNumeric(typeId)) return;
        if (allowedTypes.indexOf('/bali/interfaces/Literal') > -1 && utilities.types.isLiteral(typeId)) return;
        if (allowedTypes.indexOf('/bali/interfaces/Sequential') > -1 && utilities.types.isSequential(typeId)) return;
        if (allowedTypes.indexOf('/bali/interfaces/Chainable') > -1 && utilities.types.isChainable(typeId)) return;
        if (allowedTypes.indexOf('/bali/interfaces/Procedural') > -1 && utilities.types.isProcedural(typeId)) return;
    }
    throw new utilities.Exception({  // must not be exception() to avoid infinite recursion
        $module: moduleName,
        $procedure: procedureName,
        $parameter: parameterName,
        $exception: '$parameterType',
        $expected: allowedTypes,
        $actual: actualType,
        $text: new elements.Text('An invalid parameter type was passed to the procedure.')  // ditto
    });
};

const fillCollection = function(moduleName, procedureName, collection, sequence) {
    sequence = sequence || undefined;  // normalize nulls to undefined
    if (sequence) {
        if (Array.isArray(sequence)) {
            sequence.forEach(function(item) {
                item = convert(item);
                if (item.getTypeId() === utilities.types.ASSOCIATION) {
                    item = item.getValue();
                }
                collection.addItem(item);
            });
        } else if (utilities.types.isSequential(sequence.getTypeId())) {
            const iterator = sequence.getIterator();
            while (iterator.hasNext()) {
                var item = iterator.getNext();
                item = convert(item);
                if (item.getTypeId() === utilities.types.ASSOCIATION) {
                    item = item.getValue();
                }
                collection.addItem(item);
            }
        } else if (typeof sequence === 'object') {
            const keys = Object.keys(sequence);
            keys.forEach(function(key) {
                collection.addItem(sequence[key]);
            });
        } else {
            throw new utilities.Exception({  // must not be exception() to avoid infinite recursion
                $module: moduleName,
                $procedure: procedureName,
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Array',
                    '/javascript/Object',
                    '/bali/interfaces/Sequential'
                ],
                $actual: '/javascript/' + sequence.constructor.name,
                $value: new elements.Text(sequence.toString()),  // ditto
                $text: new elements.Text('An invalid value type was passed to the constructor.')  // ditto
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
 * @param {Object} sequence An optional JavaScript object containing the items to use
 * to seed this catalog.
 * @param {Parameters} parameters Optional parameters used to parameterize this catalog. 
 * @returns {Catalog} The new catalog.
 */
const catalog = function(sequence, parameters) {
    validateType('/bali/collections/Catalog', '$catalog', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.Catalog(parameters);
    var index = 1;
    sequence = sequence || undefined;  // normalize nulls to undefined
    if (sequence) {
        if (Array.isArray(sequence)) {
            sequence.forEach(function(item) {
                item = convert(item);
                if (item.getTypeId() === utilities.types.ASSOCIATION) {
                    collection.addItem(item);
                } else {
                    collection.setValue(index++, item);
                }
            });
        } else if (sequence.getTypeId && utilities.types.isSequential(sequence.getTypeId())) {
            const iterator = sequence.getIterator();
            while (iterator.hasNext()) {
                var item = iterator.getNext();
                item = convert(item);
                if (item.getTypeId() === utilities.types.ASSOCIATION) {
                    collection.addItem(item);
                } else {
                    collection.setValue(index++, item);
                }
            }
        } else if (typeof sequence === 'object') {
            const keys = Object.keys(sequence);
            keys.forEach(function(key) {
                const symbol = (key[0] === '$') ? key : '$' + key;
                collection.setValue(symbol, sequence[key]);
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
                $actual: '/javascript/' + sequence.constructor.name,
                $value: text(sequence.toString()),
                $text: text('An invalid value type was passed to the constructor.')
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
        error = new utilities.Exception(object, cause);
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
 * @param {Object} sequence An optional JavaScript object containing the items to use
 * to seed this list.
 * @param {Parameters} parameters Optional parameters used to parameterize this list. 
 * @returns {List} The new list.
 */
const list = function(sequence, parameters) {
    validateType('/bali/collections/List', '$list', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.List(parameters);
    fillCollection('/bali/collections/List', '$list', collection, sequence);
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
 * @param {Object} sequence An optional JavaScript object containing the items to use
 * to seed this queue.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Queue} The new queue.
 */
const queue = function(sequence, parameters) {
    validateType('/bali/collections/Queue', '$queue', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.Queue(parameters);
    fillCollection('/bali/collections/Queue', '$queue', collection, sequence);
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
        '/javascript/Undefined',
        '/javascript/String',
        '/nodejs/URL'
    ]);
    validateType('/bali/elements/Reference', '$reference', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
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
    return new elements.Reserved(value, parameters);
};
exports.reserved = reserved;

/**
 * This function creates a new set component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Object} sequence An optional JavaScript object containing the items to use
 * to seed this set.
 * @param {Parameters} parameters Optional parameters used to parameterize this set. 
 * @returns {Set} The new set.
 */
const set = function(sequence, parameters) {
    validateType('/bali/collections/Set', '$set', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.Set(parameters);
    fillCollection('/bali/collections/Set', '$set', collection, sequence);
    return collection;
};
exports.set = set;
set.and = collections.Set.and;
set.sans = collections.Set.sans;
set.or = collections.Set.or;
set.xor = collections.Set.xor;

/**
 * This function creates a new stack component with optional parameters that are
 * used to parameterize its type.
 * 
 * @param {Object} sequence An optional JavaScript object containing the items to use
 * to seed this stack.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Stack} The new stack.
 */
const stack = function(sequence, parameters) {
    validateType('/bali/collections/Stack', '$stack', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ]);
    const collection = new collections.Stack(parameters);
    fillCollection('/bali/collections/Stack', '$stack', collection, sequence);
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
    if (value instanceof utilities.Exception) return '/bali/utilities/Exception';
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
    return new elements.Version(value, parameters);
};
version.nextVersion = elements.Version.nextVersion;
version.validNextVersion = elements.Version.validNextVersion;
exports.version = version;

/*
 * Make the Visitor interface available to subclass from.
 */
exports.visitor = utilities.Visitor;

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
