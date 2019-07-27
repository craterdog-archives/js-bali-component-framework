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
const URL = require('url').URL;

// IMPORTS

const utilities = require('./src/utilities');
const abstractions = require('./src/abstractions');  // depends on utilities
const elements = require('./src/elements');  // depends on abstractions
const composites = require('./src/composites');  // depends on elements
const collections = require('./src/collections');  // depends on composites
utilities.Parser = require('./src/utilities/Parser').Parser;  // depends on everything (must be last)


// EXPORTS

Object.keys(utilities).forEach(function(key) {
    exports[key] = utilities[key];
});
Object.keys(abstractions).forEach(function(key) {
    exports[key] = abstractions[key];
});
Object.keys(elements).forEach(function(key) {
    exports[key] = elements[key];
});
Object.keys(composites).forEach(function(key) {
    exports[key] = composites[key];
});
Object.keys(collections).forEach(function(key) {
    exports[key] = collections[key];
});


// AVOIDING CIRCULAR DEPENDENCIES

// The convert method is needed by the bali.Component class and depends on everything
// else so it must be injected into it after everything has been imported
const convert = function(value) {
    if (value === null) value = undefined;
    var component;
    switch (typeof value) {
        case 'undefined':
            component = new elements.Pattern();
        case 'boolean':
            value = value ? 1 : 0;
            component = new elements.Probability(value);
            break;
        case 'number':
            component = new elements.Number(value);
            break;
        case 'string':
            component = parse(value);
            break;
        default:
            if (Array.isArray(value)) {
                // convert the array to a list
                component = list(value);
            } else if (value.constructor.prototype.acceptVisitor && value.getTypeId()) {
                // leave it since it is already a component
                component = value;
            } else {
                // convert the object to a catalog
                component = catalog(value);
            }
    }
    return component;
};
abstractions.Component.prototype.convert = convert;
utilities.Exception.prototype.convert = convert;


// FUNCTIONS

/**
 * This function duplicates a Bali component by copying each of its attributes
 * recursively.  Since elemental components are immutable, they are not duplicated.
 * 
 * @param {Component} component The component to be duplicated.
 * @returns {Component} The duplicate component.
 */
const duplicate = function(component) {
    const duplicator = new utilities.Duplicator();
    return duplicator.duplicateComponent(component);
};
exports.duplicate = duplicate;

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
    return new utilities.Iterator(array);
};
exports.iterator = iterator;

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
    if (Array.isArray(object)) {
        object = list(object);
    } else if (!object.getTypeId) {
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
    const parser = new utilities.Parser(debug);
    return parser.parseDocument(document, parameters);
};
exports.parse = parse;


// CONSTANTS

exports.NONE = parse('none');
exports.ANY = parse('any');
exports.FALSE = parse('false');
exports.TRUE = parse('true');
exports.PI = parse('~pi');
exports.E = parse('e');
exports.PHI = parse('phi');
exports.ZERO = parse('0');
exports.ONE = parse('1');
exports.I = parse('1i');
exports.UNDEFINED = parse('undefined');
exports.INFINITY = parse('infinity');


// TYPES

/**
 * This function creates an immutable instance of an angle using the specified value.
 * 
 * @param {Number} value The value of the angle.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Angle} The new angle element.
 */
const angle = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'number':
            break;
        default:
            throw exception({
                $module: '/bali/elements/Angle',
                $procedure: '$Angle',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Number'
                ],
                $actual: '/javascript/' + value.constructor.name,
                $value: text(value.toString()),
                $text: '"An invalid value type was passed to the angle constructor."'
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
 * This function creates an immutable instance of a binary string using the specified
 * value.
 * 
 * @param {Buffer} value a buffer containing the bytes for the binary string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Binary} The new binary string.
 */
const binary = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'number':
            break;
        default:
            if (!(value instanceof Buffer)) {
                throw exception({
                    $module: '/bali/elements/Binary',
                    $procedure: '$Binary',
                    $exception: '$parameterType',
                    $expected: [
                        '/javascript/Undefined',
                        '/javascript/Number',
                        '/nodejs/Buffer'
                    ],
                    $actual: '/javascript/' + value.constructor.name,
                    $value: text(value.toString()),
                    $text: '"An invalid value type was passed to the binary string constructor."'
                });
            }
    }
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
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.Catalog(parameters);
    var index = 1;
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
                $procedure: '$Catalog',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Array',
                    '/javascript/Object',
                    '/bali/interfaces/Sequential'
                ],
                $actual: '/javascript/' + sequence.constructor.name,
                $value: text(sequence.toString()),
                $text: '"An invalid value type was passed to the constructor."'
            });
        }
    }
    return collection;
};
exports.catalog = catalog;
catalog.concatenation = collections.Catalog.concatenation;
catalog.extraction = collections.Catalog.extraction;

/**
 * This function creates a new duration element using the specified value.
 * 
 * @param {String|Number} value The source string the duration.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Duration} The new duration element.
 */
const duration = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'string':
        case 'undefined':
        case 'number':
            break;
        default:
            throw exception({
                $module: '/bali/elements/Duration',
                $procedure: '$Duration',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Number',
                    '/javascript/String'
                ],
                $actual: '/javascript/' + value.constructor.name,
                $value: text(value.toString()),
                $text: '"An invalid value type was passed to the duration of time constructor."'
            });
    }
    return new elements.Duration(value, parameters);
};
duration.inverse = elements.Duration.inverse;
duration.sum = elements.Duration.sum;
duration.difference = elements.Duration.difference;
duration.scaled = elements.Duration.scaled;
exports.duration = duration;

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
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.List(parameters);
    fillCollection('/bali/collections/List', '$List', collection, sequence);
    return collection;
};
exports.list = list;
list.concatenation = collections.List.concatenation;

/**
 * This function creates a new moment in time using the specified value and parameters.
 * 
 * @param {String|Number} value The source string value of the moment in time.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Moment} The new moment in time.
 */
const moment = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'string':
        case 'undefined':
        case 'number':
            break;
        default:
            throw exception({
                $module: '/bali/elements/Moment',
                $procedure: '$Moment',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Number',
                    '/javascript/String'
                ],
                $actual: '/javascript/' + value.constructor.name,
                $value: text(value.toString()),
                $text: '"An invalid value type was passed to the moment in time constructor."'
            });
    }
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
    if (value === null) value = undefined;  // force the default value
    if (value && !Array.isArray(value)) {
        throw exception({
            $module: '/bali/elements/Name',
            $procedure: '$Name',
            $exception: '$parameterType',
            $expected: [
                '/javascript/Array'
            ],
            $actual: '/javascript/' + value.constructor.name,
            $value: text(value.toString()),
            $text: '"An invalid value type was passed to the name string constructor."'
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
    if (real === null) real = undefined;  // force the default value
    if (imaginary === null) imaginary = undefined;  // force the default value
    switch (typeof real) {
        case 'undefined':
        case 'number':
            if (imaginary && typeof imaginary !== 'number' && imaginary.getTypeId() !== utilities.types.ANGLE) {
                throw exception({
                    $module: '/bali/elements/Number',
                    $procedure: '$Number',
                    $exception: '$parameterType',
                    $expected: [
                        '/javascript/Undefined',
                        '/javascript/Number',
                        '/bali/elements/Angle'
                    ],
                    $actual: '/javascript/' + imaginary.constructor.name,
                    $value: text(imaginary.toString()),
                    $text: '"An invalid imaginary value type was passed to the complex number constructor."'
                });
            }
            break;
        default:
            throw exception({
                $module: '/bali/elements/Number',
                $procedure: '$Number',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Number'
                ],
                $actual: '/javascript/' + real.constructor.name,
                $value: text(real.toString()),
                $text: '"An invalid real value type was passed to the complex number constructor."'
            });
    }
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
 * This function creates a new pattern element using the specified value.
 * 
 * @param {String|RegExp} value A regular expression for the pattern element.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Pattern} The new pattern element.
 */
const pattern = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'string':
            break;
        default:
            if (!(value instanceof RegExp)) {
                throw exception({
                    $module: '/bali/elements/Pattern',
                    $procedure: '$Pattern',
                    $exception: '$parameterType',
                    $expected: [
                        '/javascript/Undefined',
                        '/javascript/String',
                        '/javascript/RegExp'
                    ],
                    $actual: '/javascript/' + value.constructor.name,
                    $value: text(value.toString()),
                    $text: '"An invalid value type was passed to the pattern constructor."'
                });
            }
    }
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
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'number':
            break;
        default:
            throw exception({
                $module: '/bali/elements/Percent',
                $procedure: '$Percent',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Number'
                ],
                $actual: '/javascript/' + value.constructor.name,
                $value: text(value.toString()),
                $text: '"An invalid value type was passed to the percent constructor."'
            });
    }
    return new elements.Percent(value, parameters);
};
percent.inverse = elements.Percent.inverse;
percent.sum = elements.Percent.sum;
percent.difference = elements.Percent.difference;
percent.scaled = elements.Percent.scaled;
exports.percent = percent;

/**
 * This function creates a new probability element using the specified value.
 * 
 * @param {Number} value The value of the probability.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Probability} The new probability element.
 */
const probability = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'boolean':
        case 'number':
            break;
        default:
            throw exception({
                $module: '/bali/elements/Probability',
                $procedure: '$Probability',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Boolean',
                    '/javascript/Number'
                ],
                $actual: '/javascript/' + value.constructor.name,
                $value: text(value.toString()),
                $text: '"An invalid value type was passed to the probability constructor."'
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
 * @param {Object} sequence An optional JavaScript object containing the items to use
 * to seed this queue.
 * @param {Parameters} parameters Optional parameters used to parameterize this collection. 
 * @returns {Queue} The new queue.
 */
const queue = function(sequence, parameters) {
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.Queue(parameters);
    fillCollection('/bali/collections/Queue', '$Queue', collection, sequence);
    return collection;
};
exports.queue = queue;

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
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'string':
            break;
        default:
            if (!(value instanceof URL)) {
                throw exception({
                    $module: '/bali/elements/Reference',
                    $procedure: '$Reference',
                    $exception: '$parameterType',
                    $expected: [
                        '/javascript/Undefined',
                        '/javascript/String',
                        '/nodejs/URL'
                    ],
                    $actual: '/javascript/' + value.constructor.name,
                    $value: text(value.toString()),
                    $text: '"An invalid value type was passed to the reference constructor."'
                });
            }
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
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'string':
            break;
        default:
            throw exception({
                $module: '/bali/elements/Reserved',
                $procedure: '$Reserved',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/String'
                ],
                $actual: '/javascript/' + value.constructor.name,
                $value: text(value.toString()),
                $text: '"An invalid value type was passed to the reserved symbol constructor."'
            });
    }
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
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.Set(parameters);
    fillCollection('/bali/collections/Set', '$Set', collection, sequence);
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
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.Stack(parameters);
    fillCollection('/bali/collections/Stack', '$Stack', collection, sequence);
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
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'string':
            break;
        default:
            throw exception({
                $module: '/bali/elements/Symbol',
                $procedure: '$Symbol',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/String'
                ],
                $actual: '/javascript/' + value.constructor.name,
                $value: text(value.toString()),
                $text: '"An invalid value type was passed to the symbol constructor."'
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
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'string':
        case 'number':
            break;
        default:
            throw exception({
                $module: '/bali/elements/Tag',
                $procedure: '$Tag',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/Number',
                    '/javascript/String'
                ],
                $actual: '/javascript/' + value.constructor.name,
                $value: text(value.toString()),
                $text: '"An invalid value type was passed to the tag constructor."'
            });
    }
    return new elements.Tag(value, parameters);
};
exports.tag = tag;

/**
 * This function creates a new text string element using the specified value.
 * 
 * @param {String} value The value of the text string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Text} The new text string.
 */
const text = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'string':
            break;
        default:
            throw exception({
                $module: '/bali/elements/Text',
                $procedure: '$Text',
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Undefined',
                    '/javascript/String'
                ],
                $actual: '/javascript/' + value.constructor.name,
                $value: text(value.toString()),
                $text: '"An invalid value type was passed to the text string constructor."'
            });
    }
    return new elements.Text(value, parameters);
};
text.concatenation = elements.Text.concatenation;
exports.text = text;

/**
 * This function creates a new version element using the specified value.
 * 
 * @param {Array} value An array containing the version levels for the version string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new version string element.
 */
const version = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    if (value && !Array.isArray(value)) {
        throw exception({
            $module: '/bali/elements/Version',
            $procedure: '$Version',
            $exception: '$parameterType',
            $expected: [
                '/javascript/Undefined',
                '/javascript/Array'
            ],
            $actual: '/javascript/' + value.constructor.name,
            $value: text(value.toString()),
            $text: '"An invalid value type was passed to the version string constructor."'
        });
    }
    return new elements.Version(value, parameters);
};
version.nextVersion = elements.Version.nextVersion;
version.validNextVersion = elements.Version.validNextVersion;
exports.version = version;


// PARAMETERS

exports.degrees = parameters({$units: '$degrees'});
exports.radians = parameters({$units: '$radians'});
exports.polar = parameters({$format: '$polar'});
exports.rectangular = parameters({$format: '$rectangular'});
exports.base2 = parameters({$encoding: '$base2'});
exports.base16 = parameters({$encoding: '$base16'});
exports.base32 = parameters({$encoding: '$base32'});
exports.base64 = parameters({$encoding: '$base64'});


// PRIVATE FUNCTIONS

const fillCollection = function(moduleName, procedureName, collection, sequence) {
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
            throw exception({
                $module: moduleName,
                $procedure: procedureName,
                $exception: '$parameterType',
                $expected: [
                    '/javascript/Array',
                    '/javascript/Object',
                    '/bali/interfaces/Sequential'
                ],
                $actual: '/javascript/' + sequence.constructor.name,
                $value: text(sequence.toString()),
                $text: '"An invalid value type was passed to the constructor."'
            });
        }
    }
};
