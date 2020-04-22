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
const utilities = require('../utilities');
const types = require('../types');
const Exception = require('../structures/Exception').Exception;


// PUBLIC FUNCTIONS

/**
 * This function creates a new version element using the specified value.
 *
 * @param {Array} value An array containing the version levels for the version string.
 * @param {Object} parameters Optional parameters used to parameterize this element.
 * @param {Number} debug A number in the range [0..3].
 * @returns {Symbol} The new version string element.
 */
const Version = function(value, parameters, debug) {
    types.Sequence.call(
        this,
        ['/bali/elements/Version'],
        [ ],
        parameters,
        debug
    );
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Version', '$Version', '$value', value, [
            '/javascript/Undefined',
            '/javascript/Array'
        ]);
    }

    value = value || [1];  // the default value
    if (value.indexOf(0) >= 0) {
        const exception = new Exception({
            $module: '/bali/elements/Version',
            $procedure: '$version',
            $exception: '$invalidParameter',
            $parameter: value,
            $text: 'An invalid version value was passed to the constructor.'
        });
        if (this.debug > 0) console.error(exception.toString());
        throw exception;
    }

    // since this element is immutable the value must be read-only
    this.getValue = function() { return value.slice(); };  // return a copy

    return this;
};
Version.prototype = Object.create(types.Sequence.prototype);
Version.prototype.constructor = Version;
exports.Version = Version;


// PUBLIC METHODS

/**
 * This method accepts a visitor as part of the visitor pattern.
 *
 * @param {Visitor} visitor The visitor that wants to visit this element.
 */
Version.prototype.acceptVisitor = function(visitor) {
    visitor.visitVersion(this);
};


/**
 * This method compares two versions for ordering.
 *
 * @param {Version} that The other version to be compared with.
 * @returns {Number} 1 if greater, 0 if equal, and -1 if less.
 */
Version.prototype.comparedTo = function(that) {
    if (!that) return 1;  // anything is greater than nothing

    // compare types
    const thisType = this.constructor.name;
    const thatType = that.constructor.name;
    if (thisType !== thatType) {
        return this.toString().localeCompare(that.toString());
    }

    // compare levels
    const thisLevels = this.getValue();
    const thatLevels = that.getValue();
    var index = 0;
    while (index < thisLevels.length && index < thatLevels.length) {
        if (thisLevels[index] < thatLevels[index]) return -1;
        if (thisLevels[index] > thatLevels[index]) return 1;
        index++;
    }

    // so far they are the same...
    if (thisLevels.length < thatLevels.length) return -1;
    if (thisLevels.length > thatLevels.length) return 1;

    // they are exactly the same version levels
    return 0;
};


/**
 * This method returns the number of levels that this version string has.
 *
 * @returns {Number} The number of levels that this version string has.
 */
Version.prototype.getSize = function() {
    return this.getValue().length;
};


/**
 * This method returns an object that can be used to iterate over the levels in
 * this version string.
 * @returns {Iterator} An iterator for this version string.
 */
Version.prototype.getIterator = function() {
    const iterator = new VersionIterator(this.getValue(), this.getParameters(), this.debug);
    return iterator;
};


/**
 * This method returns the version number from this version string at the specified index.
 *
 * @param {Number} index The index of the version number to be retrieved from this version string.
 * @returns {Number} The version number at the specified index.
 */
Version.prototype.getItem = function(index) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Version', '$getItem', '$index', index, [
            '/javascript/Number'
        ]);
    }
    index = this.normalizedIndex(index) - 1;  // zero-based indexing for JS
    return this.getValue()[index];
};


/**
 * This method returns a new version string containing the version numbers in the specified range.
 *
 * @param {Range} range A range depicting the first and last version numbers to be retrieved.
 * @returns {Version} The new version string containing the requested version numbers.
 */
Version.prototype.getItems = function(range) {
    if (this.debug > 1) {
        const validator = new utilities.Validator(this.debug);
        validator.validateType('/bali/elements/Version', '$getItems', '$range', range, [
            '/bali/elements/Range'
        ]);
    }
    const first = this.normalizedIndex(range.getFirst()) - 1;  // zero-based indexing for JS
    const last = this.normalizedIndex(range.getLast());  // slice() is exclusive of last index
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
 * @param {Number} debug A number in the range [0..3].
 * @returns {Version} The next version string.
 */
Version.nextVersion = function(currentVersion, level, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Version', '$nextVersion', '$level', level, [
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
 * @param {Number} debug A number in the range [0..3].
 * @returns {Boolean} Whether or not the proposed next version string is valid.
 */
Version.validNextVersion = function(currentVersion, nextVersion, debug) {
    if (debug > 1) {
        const validator = new utilities.Validator(debug);
        validator.validateType('/bali/elements/Version', '$validNextVersion', '$nextVersion', nextVersion, [
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


// PRIVATE CLASSES

const VersionIterator = function(levels, parameters, debug) {
    types.Iterator.call(
        this,
        ['/bali/elements/VersionIterator'],
        [],
        parameters,
        debug
    );
    var slot = 0;  // the slot before the first number
    const size = levels.length;  // static so we can cache it here

    this.toStart = function() {
        slot = 0;  // the slot before the first level
    };

    this.toSlot = function(newSlot) {
        slot = newSlot;
    };

    this.toEnd = function() {
        slot = size;  // the slot after the last level
    };

    this.hasPrevious = function() {
        return slot > 0;
    };

    this.hasNext = function() {
        return slot < size;
    };

    this.getPrevious = function() {
        if (!this.hasPrevious()) return;
        return levels[--slot];
    };

    this.getNext = function() {
        if (!this.hasNext()) return;
        return levels[slot++];
    };

    return this;
};
VersionIterator.prototype = Object.create(types.Iterator.prototype);
VersionIterator.prototype.constructor = VersionIterator;
