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
 * This element class captures the state and methods associated with a
 * version string element.
 */
const moduleName = '/bali/strings/Version';
const utilities = require('../utilities');
const abstractions = require('../abstractions');
const collections = require('../collections');


// PUBLIC FUNCTIONS

/**
 * This function creates a new version element using the specified value.
 *
 * @param {Array} value An array containing the version levels for the version string.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Symbol} The new version string element.
 */
const Version = function(value, parameters, debug) {
    abstractions.String.call(
        this,
        ['/bali/elements/Version'],
        [
            '/bali/libraries/Chainable'
        ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        this.validateArgument('$Version', '$value', value, [
            '/javascript/Undefined',
            '/javascript/Array'
        ]);
    }

    value = value || [1];  // the default value
    if (value.indexOf(0) >= 0) {
        const exception = new abstractions.Exception({
            $module: '/bali/elements/Version',
            $procedure: '$version',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid version value was passed to the constructor.'
        }, undefined, this.debug);
        throw exception;
    }

    this.getValue = function() { return value.slice(); };  // make sure it is immutable

    this.getSize = function() { return value.length; };

    this.getItem = function(index) {
        if (this.debug > 1) {
            this.validateArgument('$getItem', '$index', index, [
                '/javascript/Number'
            ]);
        }
        index = abstractions.Component.normalizedIndex(this, index) - 1;  // zero-based indexing for JS
        return value[index];
    };

    return this;
};
Version.prototype = Object.create(abstractions.String.prototype);
Version.prototype.constructor = Version;
exports.Version = Version;


// PUBLIC METHODS

/**
 * This method returns a new version string containing the version numbers in the specified range.
 *
 * @param {Range} range A range depicting the indices of the first and last version numbers to be retrieved.
 * @returns {Version} A new version string containing the requested version numbers.
 */
Version.prototype.getItems = function(range) {
    if (this.debug > 1) {
        this.validateArgument('$getItems', '$range', range, [
            '/javascript/String',
            '/bali/collections/Range'
        ]);
    }
    range = collections.Range.effective(this.componentize(range), this.debug);
    var first = range.getFirst();
    if (first === undefined) {
        first = 1;  // first level
    } else {
        first = first.toInteger();
    }
    var last = range.getLast();
    if (last === undefined) {
        last = -1;  // last level
    } else {
        last = last.toInteger();
    }
    first = abstractions.Component.normalizedIndex(this, first) - 1;  // zero-based indexing for JS
    last = abstractions.Component.normalizedIndex(this, last);  // slice() is exclusive of last index
    const array = this.getValue().slice(first, last);
    return new Version(array, this.getParameters(), this.debug);
};


/**
 * This function increments the current version string at the specified version level, for example:
 * <pre>
 *            current             next          what likely changed
 * level 1:    v5.7              v6         (interface/symantic changes)
 * level 2:    v5.7              v5.8       (optimization/bug fixes)
 * level 3:    v5.7              v5.7.1     (changes being tested)
 * </pre>
 *
 * If no level is specified the last level in the version string is incremented. If a
 * level that is greater than the current number of levels is specified, a new level
 * with the value '1' is appended to the version string.
 *
 * @param {Version} currentVersion The current version string.
 * @param {Number} level The version level to be incremented. If no level is specified
 * the last level in the version string is incremented.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Version} The next version string.
 */
Version.nextVersion = function(currentVersion, level, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$nextVersion', '$level', level, [
            '/javascript/Undefined',
            '/javascript/Number'
        ]);
    }
    const levels = currentVersion.getValue().slice();  // copy the array since we are going to splice it!
    const index = level ? level - 1 : levels.length - 1;  // convert to JS zero based indexing
    if (index < levels.length) {
        levels[index]++;
        levels.splice(index + 1);
    } else {
        levels.push(1);
    }
    const nextVersion = new Version(levels, currentVersion.getParameters(), debug);
    return nextVersion;
};


/**
 * This method determines whether or not a proposed next version of the current version string is
 * valid. In order for the next version to be valid the last level in the next version string
 * must be one more than the corresponding level in the current version string; or it must be '1'
 * and the next version string must have one more level of versions than the current version
 * string, for example:
 * <pre>
 *    current             next
 *     v5.7              v6         (interface/symantic changes)
 *     v5.7              v5.8       (optimization/bug fixes)
 *     v5.7              v5.7.1     (changes being tested)
 * </pre>
 *
 * @param {Version} currentVersion The current version string.
 * @param {Version} nextVersion The proposed next version string.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Boolean} Whether or not the proposed next version string is valid.
 */
Version.validNextVersion = function(currentVersion, nextVersion, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$validNextVersion', '$nextVersion', nextVersion, [
            '/bali/elements/Version'
        ]);
    }

    // extract the version levels
    const currentLevels = currentVersion.getValue();
    const nextLevels = nextVersion.getValue();

    // walk the lists looking for the first different version levels
    var index = 0;
    while (index < currentLevels.length && index < nextLevels.length) {
        const currentLevel = currentLevels[index];
        const nextLevel = nextLevels[index];
        if (currentLevel === nextLevel) {
            index++;
            continue;
        }
        // the last next version level must be one more than the corresponding current version level
        return (nextLevel === currentLevel + 1 && nextLevels.length === index + 1);
    }
    // check for a next subversion level of one
    return (nextLevels.length === index + 1 && nextLevels[index] === 1);
};


// CHAINABLE LIBRARY FUNCTIONS

/**
 * This function returns a new version string that contains the levels from the second version
 * string concatenated onto the end of the first version string.
 *
 * @param {Version} first The first version string to be operated on.
 * @param {Version} second The second version string to be operated on.
 * @param {Number} debug A number in the range 0..3.
 * @returns {Version} The resulting version string.
 */
Version.chain = function(first, second, debug) {
    if (debug > 1) {
        abstractions.Component.validateArgument(moduleName, '$chain', '$first', first, [
            '/bali/elements/Version'
        ]);
        abstractions.Component.validateArgument(moduleName, '$chain', '$second', second, [
            '/bali/elements/Version'
        ]);
    }
    const levels1 = first.getValue();
    const levels2 = second.getValue();
    const levels = levels1.concat(levels2);
    return new Version(levels, first.getParameters(), debug);
};

