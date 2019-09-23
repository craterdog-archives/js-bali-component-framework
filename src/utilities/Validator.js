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
const Exception = require('../composites/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new validator object.
 * 
 * @param {Number} debug A number in the range [0..3].
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
    if (value.isType('$Angle')) return '/bali/elements/Angle';
    if (value.isType('$Association')) return '/bali/composites/Association';
    if (value.isType('$Binary')) return '/bali/elements/Binary';
    if (value.isType('$Catalog')) return '/bali/collections/Catalog';
    if (value.isType('$Duration')) return '/bali/elements/Duration';
    if (value.isType('$Exception')) return '/bali/composites/Exception';
    if (value.isType('$Iterator')) return '/bali/utilities/Iterator';
    if (value.isType('$List')) return '/bali/collections/List';
    if (value.isType('$Moment')) return '/bali/elements/Moment';
    if (value.isType('$Name')) return '/bali/elements/Name';
    if (value.isType('$Number')) return '/bali/elements/Number';
    if (value.isType('$Parameters')) return '/bali/composites/Parameters';
    if (value.isType('$Pattern')) return '/bali/elements/Pattern';
    if (value.isType('$Percent')) return '/bali/elements/Percent';
    if (value.isType('$Probability')) return '/bali/elements/Probability';
    if (value.isType('$Procedure')) return '/bali/composites/Procedure';
    if (value.isType('$Queue')) return '/bali/collections/Queue';
    if (value.isType('$Range')) return '/bali/collections/Range';
    if (value.isType('$Reference')) return '/bali/elements/Reference';
    if (value.isType('$Reserved')) return '/bali/elements/Reserved';
    if (value.isType('$Set')) return '/bali/collections/Set';
    if (value.isType('$Stack')) return '/bali/collections/Stack';
    if (value.isType('$Symbol')) return '/bali/elements/Symbol';
    if (value.isType('$Tag')) return '/bali/elements/Tag';
    if (value.isType('$Text')) return '/bali/elements/Text';
    if (value.supportsInterface('$Procedural')) return '/bali/composites/Tree';
    if (value.isType('$Version')) return '/bali/elements/Version';

    // handle anything else
    return '/javascript/' + (value.constructor ? value.constructor.name : 'Unknown');
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
            $module: '/bali/utilities/Validation',
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
        if (allowedTypes.indexOf('/bali/abstractions/Component') > -1) return;
        if (allowedTypes.indexOf('/bali/abstractions/Element') > -1 && argumentValue.isElement()) return;
        if (allowedTypes.indexOf('/bali/abstractions/Composite') > -1 && argumentValue.isComposite()) return;
        if (allowedTypes.indexOf('/bali/abstractions/Collection') > -1 && argumentValue.isCollection()) return;
        if (allowedTypes.indexOf('/bali/interfaces/Logical') > -1 && argumentValue.supportsInterface('$Logical')) return;
        if (allowedTypes.indexOf('/bali/interfaces/Scalable') > -1 && argumentValue.supportsInterface('$Scalable')) return;
        if (allowedTypes.indexOf('/bali/interfaces/Numerical') > -1 && argumentValue.supportsInterface('$Numerical')) return;
        if (allowedTypes.indexOf('/bali/interfaces/Literal') > -1 && argumentValue.supportsInterface('$Literal')) return;
        if (allowedTypes.indexOf('/bali/interfaces/Sequential') > -1 && argumentValue.supportsInterface('$Sequential')) return;
        if (allowedTypes.indexOf('/bali/interfaces/Chainable') > -1 && argumentValue.supportsInterface('$Chainable')) return;
        if (allowedTypes.indexOf('/bali/interfaces/Procedural') > -1 && argumentValue.supportsInterface('$Procedural')) return;
    }

    // the argument type is invalid
    const exception = new Exception({
        $module: moduleName,
        $procedure: procedureName,
        $argument: argumentName,
        $exception: '$argumentType',
        $expected: allowedTypes,
        $actual: actualType,
        $value: argumentValue,
        $text: 'An invalid argument type was passed to the procedure.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};
