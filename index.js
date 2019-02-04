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

// UTILITIES
const utilities = require('./src/utilities');
exports.utilities = utilities;

// ABSTRACTIONS
const abstractions = require('./src/abstractions');  // depends on utilities
exports.abstractions = abstractions;


// ELEMENTS
const elements = require('./src/elements');  // depends on abstractions
exports.elements = elements;


// COMPOSITES
const composites = require('./src/composites');  // depends on elements
exports.composites = composites;


// COLLECTIONS
const collections = require('./src/collections');  // depends on composites
exports.collections = collections;


// AVOIDING CIRCULAR DEPENDENCIES

// The parser depends on everything else and must be imported last
utilities.Parser = require('./src/utilities/Parser').Parser;

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
                component = list(value);
            } else if (!(value instanceof abstractions.Component)) {
                component = catalog(value);
            } else {
                // leave it since it is already a component
                component = value;
            }
    }
    return component;
};
abstractions.Component.prototype.convert = convert;
utilities.Exception.prototype.convert = convert;

const fillCollection = function(procedure, collection, sequence) {
    if (sequence) {
        if (Array.isArray(sequence)) {
            sequence.forEach(function(item) {
                item = convert(item);
                if (item.type === utilities.types.ASSOCIATION) {
                    item = item.value;
                }
                collection.addItem(item);
            });
        } else if (utilities.types.isSequential(sequence.type)) {
            const iterator = sequence.getIterator();
            while (iterator.hasNext()) {
                var item = iterator.getNext();
                item = convert(item);
                if (item.type === utilities.types.ASSOCIATION) {
                    item = item.value;
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
                $exception: '$parameterType',
                $procedure: procedure,
                $expected: ['$Collection', '$Object', '$Array'],
                $actual: '$' + sequence.constructor.name,
                $message: '"An invalid value type was passed to the constructor."'
            });
        }
    }
};


// FUNCTIONS

const exception = function(object) {
    const attributes = convert(object);
    return new utilities.Exception(attributes);
};
exports.exception = exception;

const format = function(component, indentation) {
    const formatter = new utilities.Formatter(indentation);
    return formatter.formatComponent(component);
};
exports.format = format;

const parameters = function(object) {
    var collection;
    if (Array.isArray(object)) {
        collection = list(object);
    } else {
        collection = catalog(object);
    }
    return new composites.Parameters(collection);
};
exports.parameters = parameters;

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
                $exception: '$parameterType',
                $procedure: '$angle',
                $expected: ['$Undefined', '$Number'],
                $actual: '$' + value.constructor.name,
                $message: '"An invalid value type was passed to the angle constructor."'
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
                    $exception: '$parameterType',
                    $procedure: '$binary',
                    $expected: ['$Undefined', '$Number', '$Buffer'],
                    $actual: '$' + value.constructor.name,
                    $message: '"An invalid value type was passed to the binary string constructor."'
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
                if (item.type === utilities.types.ASSOCIATION) {
                    collection.addItem(item);
                } else {
                    collection.setValue(index++, item);
                }
            });
        } else if (utilities.types.isSequential(sequence.type)) {
            const iterator = sequence.getIterator();
            while (iterator.hasNext()) {
                var item = iterator.getNext();
                item = convert(item);
                if (item.type === utilities.types.ASSOCIATION) {
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
                $exception: '$parameterType',
                $procedure: '$catalog',
                $expected: ['$Undefined', '$Collection', '$Object', '$Array'],
                $actual: '$' + sequence.constructor.name,
                $message: '"An invalid value type was passed to the constructor."'
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
                $exception: '$parameterType',
                $procedure: '$duration',
                $expected: ['$Undefined', '$Number', '$String'],
                $actual: '$' + value.constructor.name,
                $message: '"An invalid value type was passed to the duration of time constructor."'
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
                $exception: '$parameterType',
                $procedure: '$moment',
                $expected: ['$Undefined', '$Number', '$String'],
                $actual: '$' + value.constructor.name,
                $message: '"An invalid value type was passed to the moment in time constructor."'
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
            if (value2 && typeof value2 !== 'number' && value2.type !== utilities.types.ANGLE) {
                throw exception({
                    $exception: '$parameterType',
                    $procedure: '$number',
                    $expected: ['$Undefined', '$Number', '$Angle'],
                    $actual: '$' + value2.constructor.name,
                    $message: '"An invalid imaginary value type was passed to the complex number constructor."'
                });
            }
            break;
        default:
            throw exception({
                $exception: '$parameterType',
                $procedure: '$number',
                $expected: ['$Undefined', '$Number'],
                $actual: '$' + value1.constructor.name,
                $message: '"An invalid real value type was passed to the complex number constructor."'
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
                    $exception: '$parameterType',
                    $procedure: '$pattern',
                    $expected: ['$Undefined', '$String', '$RegExp'],
                    $actual: '$' + value.constructor.name,
                    $message: '"An invalid value type was passed to the pattern constructor."'
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
                $exception: '$parameterType',
                $procedure: '$percent',
                $expected: ['$Undefined', '$Number'],
                $actual: '$' + value.constructor.name,
                $message: '"An invalid value type was passed to the percent constructor."'
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
                $exception: '$parameterType',
                $procedure: '$probability',
                $expected: ['$Undefined', '$Boolean', '$Number'],
                $actual: '$' + value.constructor.name,
                $message: '"An invalid value type was passed to the probability constructor."'
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
                    $exception: '$parameterType',
                    $procedure: '$reference',
                    $expected: ['$Undefined', '$String', '$URL'],
                    $actual: '$' + value.constructor.name,
                    $message: '"An invalid value type was passed to the reference constructor."'
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
                $exception: '$parameterType',
                $procedure: '$reserved',
                $expected: ['$String'],
                $actual: '$' + value.constructor.name,
                $message: '"An invalid value type was passed to the reserved symbol constructor."'
            });
    }
    return new elements.Reserved(value, parameters);
};
exports.reserved = reserved;

const set = function(sequence, parameters) {
    sequence = sequence || undefined;  // force nulls to undefined
    const collection = new collections.Set(undefined, parameters);
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
                $exception: '$parameterType',
                $procedure: '$symbol',
                $expected: ['$String'],
                $actual: '$' + value.constructor.name,
                $message: '"An invalid value type was passed to the symbol constructor."'
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
                $exception: '$parameterType',
                $procedure: '$tag',
                $expected: ['$Undefined', '$Number', '$String'],
                $actual: '$' + value.constructor.name,
                $message: '"An invalid value type was passed to the tag constructor."'
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
                $exception: '$parameterType',
                $procedure: '$text',
                $expected: ['$Undefined', '$String'],
                $actual: '$' + value.constructor.name,
                $message: '"An invalid value type was passed to the text string constructor."'
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
            $exception: '$parameterType',
            $procedure: '$version',
            $expected: ['$Undefined', '$Array'],
            $actual: '$' + value.constructor.name,
            $message: '"An invalid value type was passed to the version string constructor."'
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
