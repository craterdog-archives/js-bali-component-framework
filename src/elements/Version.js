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
 * version element.
 */
const types = require('../abstractions/Types');
const Element = require('../abstractions/Element').Element;


// PUBLIC CONSTRUCTORS

/**
 * This constructor creates a new version element.
 * 
 * @param {Array} value An array of version levels for the version number.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new version element.
 */
function Version(value, parameters) {
    Element.call(this, types.VERSION, parameters);
    this.value = value || [1];  // default value is v1
    if (this.value.indexOf(0) >= 0) {
        throw new Error('BUG: An invalid version level was passed to the constructor: ' + value);
    }
    this.setSource(this.toLiteral());
    return this;
}
Version.prototype = Object.create(Element.prototype);
Version.prototype.constructor = Version;
exports.Version = Version;


/**
 * This constructor creates an immutable instance of a version string using the specified
 * literal string.
 * 
 * @constructor
 * @param {String} literal The literal string defining the version string.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Version} The new version string.
 */
Version.fromLiteral = function(literal, parameters) {
    const levels = literal.slice(1).split('.');  // pull out the version level strings
    const value = [];
    levels.forEach(function(level) {
        value.push(Number(level));
    });
    const version = new Version(value, parameters);
    return version;
};


// PUBLIC METHODS

/**
 * This method returns a literal string representation of the component.
 * 
 * @param {Boolean} asCanonical Whether or not the element should be formatted using its
 * default format.
 * @returns {String} The corresponding literal string representation.
 */
Version.prototype.toLiteral = function(asCanonical) {
    const literal = 'v' + this.value.join('.');
    return literal;
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
        return thisType.localeCompare(thatType);
    }

    // compare levels
    const thisLevels = this.value;
    const thatLevels = that.value;
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
 * This method returns whether or not this version string has any levels.
 * 
 * @returns {Boolean} Whether or not this version string has any levels.
 */
Version.prototype.isEmpty = function() {
    return false;  // a version string requires at least one level
};


/**
 * This method returns the number of levels that this version string has.
 * 
 * @returns {Number} The number of levels that this version string has.
 */
Version.prototype.getSize = function() {
    return this.value.length;
};


/**
 * This method returns an object that can be used to iterate over the levels in
 * this version string.
 * @returns {Iterator} An iterator for this version string.
 */
Version.prototype.getIterator = function() {
    const iterator = new VersionIterator(this.value);
    return iterator;
};


// PUBLIC FUNCTIONS

/**
 * This function increments the specified version string at the specified version
 * level, for example:
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
 * @returns {Version} The next version string.
 */
Version.nextVersion = function(currentVersion, level) {
    const levels = currentVersion.value.slice();  // copy the array since we are going to splice it!
    const index = level ? level - 1 : levels.length - 1;  // convert to JS zero based indexing
    if (index < levels.length) {
        levels[index]++;
        levels.splice(index + 1);
    } else {
        levels.push(1);
    }
    const nextVersion = new Version(levels, currentVersion.parameters);
    return nextVersion;
};


/**
 * This function determines whether or not a proposed next version string is valid. In order
 * for the next version to be valid the last level in the next version string must be one
 * more than the corresponding level in the current version string; or it must be '1' and
 * the next version string must have one more level of versions than the current version
 * string, for example:
 * <pre>
 *    current             next
 *     v5.7              v6         (interface/symantic changes)
 *     v5.7              v5.8       (optimization/bug fixes)
 *     v5.7              v5.7.1     (changes being tested)
 * </pre>
 * 
 * @param {Catalog} currentVersion The current version string.
 * @param {Catalog} nextVersion The proposed next version string.
 * @returns {Boolean} Whether or not the proposed next version string is valid.
 */
Version.validNextVersion = function(currentVersion, nextVersion) {
    // extract the version levels
    const currentLevels = currentVersion.value;
    const nextLevels = nextVersion.value;

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

function VersionIterator(levels) {
    this.slot = 0;  // the slot before the first level
    this.size = levels.length;  // static so we can cache it here
    this.levels = levels;
    return this;
}
VersionIterator.prototype.constructor = VersionIterator;


VersionIterator.prototype.toStart = function() {
    this.slot = 0;  // the slot before the first level
};


VersionIterator.prototype.toSlot = function(slot) {
    this.slot = slot;
};


VersionIterator.prototype.toEnd = function() {
    this.slot = this.size;  // the slot after the last level
};


VersionIterator.prototype.hasPrevious = function() {
    return this.slot > 0;
};


VersionIterator.prototype.hasNext = function() {
    return this.slot < this.size;
};


VersionIterator.prototype.getPrevious = function() {
    if (!this.hasPrevious()) throw new Error('BUG: Unable to retrieve the previous level from an iterator that is at the beginning of a version string.');
    return this.levels[--this.slot];
};


VersionIterator.prototype.getNext = function() {
    if (!this.hasNext()) throw new Error('BUG: Unable to retrieve the next level from an iterator that is at the end of a version string.');
    return this.levels[this.slot++];
};
