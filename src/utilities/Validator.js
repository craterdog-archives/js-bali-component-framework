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
 * This class performs various validation functions on object types and values.
 */
const URL = require('url').URL;
const Exception = require('./Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new validator object.
 *
 * @param {Number} debug A number in the range 0..3.
 * @returns {Validator} The new validator.
 */
const Validator = function(debug) {
    this.debug = debug || 0;
    return this;
};
Validator.prototype.constructor = Validator;
exports.Validator = Validator;


/**
 * This method returns a string containing the Bali name for the type of the specified value.
 *
 * @param {Any} value The value to be evaluated.
 * @returns {String} A string containing the Bali name for the type of the specified value.
 */
Validator.prototype.getType = function(value) {
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
    if (value instanceof Error && !value.isComponent) return '/javascript/Error';
    if (value instanceof Promise) return '/javascript/Promise';
    if (value instanceof RegExp) return '/javascript/RegExp';
    if (value instanceof Buffer) return '/nodejs/Buffer';
    if (value instanceof URL) return '/nodejs/URL';
    if (!value.isComponent) return '/javascript/Object';

    // handle Bali component types
    return value.getType();
};


/**
 * This method compares the type of an argument value with the allowed types for that
 * argument and throws an exception if it does not match.
 *
 * @param {String} moduleName The name of the module being called.
 * @param {String} procedureName The name of the procedure being called.
 * @param {String} argumentName The name of the argument being validated.
 * @param {Any} argumentValue The value of the argument being validated.
 * @param {Array} allowedTypes An array of strings representing the allowed types for the argument
 * value.
 */
Validator.prototype.validateType = function(moduleName, procedureName, argumentName, argumentValue, allowedTypes) {
    // we can't use validate to validate its own arguments so do it manually
    if (typeof moduleName !== 'string' || typeof procedureName !== 'string' ||
        typeof argumentName !== 'string' || !Array.isArray(allowedTypes)) {
        const exception = Exception({
            $module: '/bali/agents/Validator',
            $procedure: '$validate',
            $exception: '$invalidParameter',
            $moduleName: moduleName,
            $procedureName: procedureName,
            $argumentName: argumentName,
            $argumentValue: argumentValue,
            $allowedTypes: allowedTypes,
            $text: 'An invalid argument was passed as part of the validation attempt.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // validate the argument
    const actualType = this.getType(argumentValue);
    if (allowedTypes.indexOf(actualType) > -1) return;
    if (argumentValue && argumentValue.isComponent) {
        for (const allowedType of allowedTypes) {
            if (argumentValue.isType(allowedType)) return true;
        }
        for (const iface of argumentValue.getInterfaces()) {
            if (allowedTypes.indexOf(iface) > -1) return true;
        }
        return false;
    }

    // the argument type is invalid
    const exception = new utilities.Exception({
        $module: moduleName,
        $procedure: procedureName,
        $argument: argumentName,
        $exception: '$argumentType',
        $allowedTypes: allowedTypes,
        $actualType: actualType,
        $argumentValue: argumentValue,
        $text: 'An invalid argument type was passed to the procedure.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method converts a negative item index into its corresponding positive
 * index and checks to make sure the resulting index is in the range [1..size].
 *
 * The mapping between indices is as follows:
 * <pre>
 * Negative Indices:   -N      -N + 1     -N + 2     -N + 3   ...   -1
 * Positive Indices:    1         2          3          4     ...    N
 * </pre>
 *
 * @param {Sequence} sequence The sequence of items being indexed.
 * @param {Number} index The index in the range [-N..N] to be normalized.
 * @returns {Number} The normalized [1..N] index.
 */
Validator.prototype.normalizeIndex = function(sequence, index) {
    const size = sequence.getSize();
    if (index > size || index < -size) {
        const exception = new utilities.Exception({
            $module: '/bali/utilities/Validator',
            $procedure: '$normalizeIndex',
            $exception: '$invalidIndex',
            $index: index,
            $range: '' + -size + '..' + size,
            $text: 'The index is out of range.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }
    if (index < 0) index = index + size + 1;
    return index;
};

