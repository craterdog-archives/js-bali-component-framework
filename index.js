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

const angle = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'number':
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$angle',
                $exception: '$parameterType',
                $expected: ['$Undefined', '$Number'],
                $actual: '$' + value.constructor.name,
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

const association = function(key, value) {
    key = convert(key);
    value = convert(value);
    return new composites.Association(key, value);
};
exports.association = association;

const binary = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'number':
            break;
        default:
            if (!(value instanceof Buffer)) {
                throw exception({
                    $module: '$bali',
                    $function: '$binary',
                    $exception: '$parameterType',
                    $expected: ['$Undefined', '$Number', '$Buffer'],
                    $actual: '$' + value.constructor.name,
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
                collection.setValue(key, sequence[key]);
            });
        } else {
            throw exception({
                $module: '$bali',
                $function: '$catalog',
                $exception: '$parameterType',
                $expected: ['$Undefined', '$Collection', '$Object', '$Array'],
                $actual: '$' + sequence.constructor.name,
                $text: '"An invalid value type was passed to the constructor."'
            });
        }
    }
    return collection;
};
exports.catalog = catalog;
catalog.concatenation = collections.Catalog.concatenation;
catalog.extraction = collections.Catalog.extraction;

const duration = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'string':
        case 'undefined':
        case 'number':
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$duration',
                $exception: '$parameterType',
                $expected: ['$Undefined', '$Number', '$String'],
                $actual: '$' + value.constructor.name,
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

const list = function(sequence, parameters) {
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.List(parameters);
    fillCollection('$list', collection, sequence);
    return collection;
};
exports.list = list;
list.concatenation = collections.List.concatenation;

const moment = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'string':
        case 'undefined':
        case 'number':
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$moment',
                $exception: '$parameterType',
                $expected: ['$Undefined', '$Number', '$String'],
                $actual: '$' + value.constructor.name,
                $text: '"An invalid value type was passed to the moment in time constructor."'
            });
    }
    return new elements.Moment(value, parameters);
};
moment.duration = elements.Moment.duration;
moment.earlier = elements.Moment.earlier;
moment.later = elements.Moment.later;
exports.moment = moment;

const number = function(value1, value2, parameters) {
    if (value1 === null) value1 = undefined;  // force the default value
    if (value2 === null) value2 = undefined;  // force the default value
    switch (typeof value1) {
        case 'undefined':
        case 'number':
            if (value2 && typeof value2 !== 'number' && value2.getTypeId() !== utilities.types.ANGLE) {
                throw exception({
                    $module: '$bali',
                    $function: '$number',
                    $exception: '$parameterType',
                    $expected: ['$Undefined', '$Number', '$Angle'],
                    $actual: '$' + value2.constructor.name,
                    $text: '"An invalid imaginary value type was passed to the complex number constructor."'
                });
            }
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$number',
                $exception: '$parameterType',
                $expected: ['$Undefined', '$Number'],
                $actual: '$' + value1.constructor.name,
                $text: '"An invalid real value type was passed to the complex number constructor."'
            });
    }
    return new elements.Number(value1, value2, parameters);
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

const pattern = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'string':
            break;
        default:
            if (!(value instanceof RegExp)) {
                throw exception({
                    $module: '$bali',
                    $function: '$pattern',
                    $exception: '$parameterType',
                    $expected: ['$Undefined', '$String', '$RegExp'],
                    $actual: '$' + value.constructor.name,
                    $text: '"An invalid value type was passed to the pattern constructor."'
                });
            }
    }
    return new elements.Pattern(value, parameters);
};
exports.pattern = pattern;

const percent = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'number':
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$percent',
                $exception: '$parameterType',
                $expected: ['$Undefined', '$Number'],
                $actual: '$' + value.constructor.name,
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

const probability = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'boolean':
        case 'number':
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$probability',
                $exception: '$parameterType',
                $expected: ['$Undefined', '$Boolean', '$Number'],
                $actual: '$' + value.constructor.name,
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

const queue = function(sequence, parameters) {
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.Queue(parameters);
    fillCollection('$queue', collection, sequence);
    return collection;
};
exports.queue = queue;

const range = function(first, last, parameters) {
    first = convert(first);
    last = convert(last);
    return new composites.Range(first, last, parameters);
};
exports.range = range;

const reference = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'string':
            break;
        default:
            if (!(value instanceof URL)) {
                throw exception({
                    $module: '$bali',
                    $function: '$reference',
                    $exception: '$parameterType',
                    $expected: ['$Undefined', '$String', '$URL'],
                    $actual: '$' + value.constructor.name,
                    $text: '"An invalid value type was passed to the reference constructor."'
                });
            }
    }
    return new elements.Reference(value, parameters);
};
exports.reference = reference;

const reserved = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'string':
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$reserved',
                $exception: '$parameterType',
                $expected: ['$String'],
                $actual: '$' + value.constructor.name,
                $text: '"An invalid value type was passed to the reserved symbol constructor."'
            });
    }
    return new elements.Reserved(value, parameters);
};
exports.reserved = reserved;

const set = function(sequence, parameters) {
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.Set(parameters);
    fillCollection('$set', collection, sequence);
    return collection;
};
exports.set = set;
set.and = collections.Set.and;
set.sans = collections.Set.sans;
set.or = collections.Set.or;
set.xor = collections.Set.xor;

const stack = function(sequence, parameters) {
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.Stack(parameters);
    fillCollection('$stack', collection, sequence);
    return collection;
};
exports.stack = stack;

const symbol = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'string':
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$symbol',
                $exception: '$parameterType',
                $expected: ['$String'],
                $actual: '$' + value.constructor.name,
                $text: '"An invalid value type was passed to the symbol constructor."'
            });
    }
    return new elements.Symbol(value, parameters);
};
exports.symbol = symbol;

const tag = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'string':
        case 'number':
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$tag',
                $exception: '$parameterType',
                $expected: ['$Undefined', '$Number', '$String'],
                $actual: '$' + value.constructor.name,
                $text: '"An invalid value type was passed to the tag constructor."'
            });
    }
    return new elements.Tag(value, parameters);
};
exports.tag = tag;

const text = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    switch (typeof value) {
        case 'undefined':
        case 'string':
            break;
        default:
            throw exception({
                $module: '$bali',
                $function: '$text',
                $exception: '$parameterType',
                $expected: ['$Undefined', '$String'],
                $actual: '$' + value.constructor.name,
                $text: '"An invalid value type was passed to the text string constructor."'
            });
    }
    return new elements.Text(value, parameters);
};
text.concatenation = elements.Text.concatenation;
exports.text = text;

const version = function(value, parameters) {
    if (value === null) value = undefined;  // force the default value
    if (value && !Array.isArray(value)) {
        throw exception({
            $module: '$bali',
            $function: '$version',
            $exception: '$parameterType',
            $expected: ['$Undefined', '$Array'],
            $actual: '$' + value.constructor.name,
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

const fillCollection = function(functionName, collection, sequence) {
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
                $module: '$bali',
                $function: functionName,
                $exception: '$parameterType',
                $expected: ['$Collection', '$Object', '$Array'],
                $actual: '$' + sequence.constructor.name,
                $text: '"An invalid value type was passed to the constructor."'
            });
        }
    }
};
