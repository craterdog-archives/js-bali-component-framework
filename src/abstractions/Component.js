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
 * This abstract class defines the invariant methods that all components must support. It also
 * defines an exception class that inherits from the abstract component class and is used by
 * all other component classes.
 */


// COMPONENT CLASS

/**
 * This constructor creates a new component with the specified ancestry and interfaces candidate
 * with any optional parameters that are used to parameterize its type.
 *
 * @param {Array} ancestry An array of type names that make up the ancestry for the component.
 * @param {Array} interfaces An array of interface names that are supported by the component.
 * @param {Object} parameters Optional parameters used to parameterize this component.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Component} The new component.
 */
const Component = function(ancestry, interfaces, parameters, debug) {
    ancestry = ancestry || [];
    ancestry = ancestry.concat('/bali/abstractions/Component');
    interfaces = interfaces || [];
    interfaces = interfaces.concat('/bali/interfaces/Reflective');
    parameters = parameters || undefined;  // must be undefined to avoid infinite loop
    this.debug = debug || 0;  // default value

    // Reflective Interface

    this.isComponent = true;

    this.isParameterized = function() {
        return !!this.getParameters();
    };

    this.getParameter = function(key) {
        if (parameters) return parameters.getAttribute(key);
    };

    this.setParameter = function(key, value) {
        parameters = parameters || this.componentize({});
        parameters.setAttribute(key, value);
    };

    this.getParameters = function() {
        return parameters;
    };

    this.setParameters = function(object) {
        if (object) parameters = this.componentize(object);
    };

    this.setParameters(parameters);

    this.isType = function(type) {
        for (const candidate of ancestry) {
            if (candidate === type) return true;
        }
        return false;
    };

    this.getType = function() {
        return ancestry[0];
    };

    this.getAncestry = function() {
        return ancestry;
    };

    this.supportsInterface = function(type) {
        for (const candidate of interfaces) {
            if (candidate === type) return true;
        }
        return false;
    };

    this.getInterfaces = function() {
        return interfaces;
    };

    return this;
};
Component.prototype.constructor = Component;
exports.Component = Component;


// Standard Methods

/**
 * This method returns a boolean value for this component. It allows each component to be used as a
 * boolean in a condition check that determines whether of not the component has a meaningful
 * value. Each component decides what is meaningful. The default response is true.
 *
 * @returns {Boolean} Whether or not this component has a meaningful value.
 */
Component.prototype.toBoolean = function() {
    return true;
};


/**
 * This method returns the unique hash value for this component.
 *
 * @returns {Number} The unique hash value for this component.
 */
Component.prototype.getHash = function() {
    var hash = 0;
    const source = this.toString();
    if (source.length === 0) return hash;
    for (var i = 0; i < source.length; i++) {
        const character = source.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash |= 0;  // truncate to a 32 bit integer
    }
    return hash;
};


/**
 * This method compares the type of an argument value with the allowed types for that
 * argument and throws an exception if it does not match.
 *
 * @param {String} procedureName The name of the procedure being called.
 * @param {String} argumentName The name of the argument being validated.
 * @param {Any} argumentValue The value of the argument being validated.
 * @param {Array} allowedTypes An array of strings representing the allowed types for the argument
 * value.
 */
Component.prototype.validateArgument = function(procedureName, argumentName, argumentValue, allowedTypes) {
    const moduleName = this.getType();
    // we can't use validateArgument() to validate its own arguments so do it manually
    if (typeof procedureName !== 'string' || typeof argumentName !== 'string' || !Array.isArray(allowedTypes)) {
        const exception = Exception({
            $module: this.getType(),
            $procedure: '$validateArgument',
            $exception: '$invalidParameter',
            $moduleName: moduleName,
            $procedureName: procedureName,
            $argumentName: argumentName,
            $argumentValue: argumentValue,
            $allowedTypes: allowedTypes,
            $text: 'An invalid argument was passed as part of the validation attempt.'
        }, undefined, this.debug);
        throw exception;
    }

    // validate the argument
    const actualType = Component.canonicalType(argumentValue);
    if (allowedTypes.indexOf(actualType) > -1) return true;
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
    const exception = new Exception({
        $module: moduleName,
        $procedure: procedureName,
        $argument: argumentName,
        $exception: '$argumentType',
        $allowedTypes: allowedTypes,
        $actualType: actualType,
        $argumentValue: argumentValue,
        $text: 'An invalid argument type was passed to the procedure.'
    }, undefined, this.debug);
    throw exception;
};


/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this component.
 */
Component.prototype.acceptVisitor = function(visitor) {
    visitor.visitComponent(this);
};


// PUBLIC FUNCTIONS

/**
 * This function returns a string containing the canonical name for the type of the specified value.
 *
 * @param {Any} value The value to be evaluated.
 * @param {Number} debug A number in the range 0..3.
 * @returns {String} A string containing the canonical name for the type of the specified value.
 */
Component.canonicalType = function(value, debug) {
    // handle null legacy
    if (value === null) value = undefined;  // null is of type 'object' so undefine it!
    debug = debug || 0;  // default value

    // handle primitive javascript types
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
    if (!value.isComponent) return '/javascript/Object';

    // handle bali component types
    return value.getType();
};


/**
 * This function converts a negative item index into its corresponding positive
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
 * @param {Number} debug A number in the range 0..3.
 * @returns {Number} The normalized [1..N] index.
 */
Component.normalizedIndex = function(sequence, index, debug) {
    debug = debug || 0;  // default value
    const size = sequence.getSize();
    if (index > size || index < -size) {
        const exception = new Exception({
            $module: '/bali/abstractions/Component',
            $procedure: '$normalizeIndex',
            $exception: '$invalidIndex',
            $index: index,
            $range: '' + -size + '..' + size,
            $text: 'The index is out of range.'
        }, undefined, this.debug);
        throw exception;
    }
    if (index < 0) index = index + size + 1;
    return index;
};


// EXCEPTION CLASS

const EOL = '\n';  // This private constant sets the POSIX end of line character


/**
 * This function creates a new Bali exception with the specified attributes.  It must
 * be very careful not to cause additional exceptions to be thrown or an infinite loop
 * may result.
 *
 * @param {Object} attributes An object containing the exception attributes.
 * @param {Object} cause An optional exception that caused this one.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Exception} The new exception.
 */
const Exception = function(attributes, cause, debug) {
    Component.call(
        this,
        ['/bali/abstractions/Exception'],
        [ ],
        { $type: '/bali/abstractions/Exception/v1' },
        debug
    );

    // attempt to process the attributes
    try {
        attributes = attributes || {};
        attributes = this.componentize(attributes);
    } catch (ignore) {
        // something is wrong with the attributes so reset them
        if (this.debug > 0) console.log('Invalid attributes passed to the exception:\n' + ignore);
        attributes = this.componentize({});
    }

    // process the cause if necessary
    cause = cause || undefined;
    if (cause) {
        var trace;
        if (cause.isComponent) {
            // the cause is a bali exception so migrate its trace upward
            trace = cause.getAttribute('$trace');
            if (trace) {
                cause.getAttributes().removeAttribute('$trace');
                trace.insertItem(1, cause);
            } else {
                trace = [];
                trace.push(cause);
            }
            attributes.setAttribute('$trace', trace);
        } else {
            // the cause is a javascript exception, extract the actual stack trace
            try {
                const stack = cause.stack.split(EOL).slice(1);  // remove the first line of the trace
                stack.forEach(function(line, index) {
                    line = line.slice(7);  // remove leading "    at " prefix
                    if (line.length > 80) {
                        line = line.slice(0, 42) + '..' + line.slice(-35);  // shorten line to 80 chars
                    }
                    stack[index] = line;  // replace the formatted line
                }, this);
                attributes.setAttribute('$trace', []);
                trace = attributes.getAttribute('$trace');
                trace.addItem(EOL + stack.join(EOL) + EOL);  // turn the stack trace into a text narrative
            } catch (ignore) {
                // a stack trace is not supported on this platform
                if (this.debug > 0) console.log('Unable to generate a stack trace:\n' + ignore);
            }
        }
    }
    if (this.debug > 0) console.error(this.toString());

    this.getAttributes = function() {
        return attributes;
    };

    this.getAttribute = function(key) {
        return attributes.getAttribute(key);
    };

    return this;
};
Exception.prototype = Object.create(Component.prototype);
Exception.prototype.constructor = Exception;
exports.Exception = Exception;

