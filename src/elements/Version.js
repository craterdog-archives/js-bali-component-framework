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
var types = require('../abstractions/Types');
var Element = require('../abstractions/Element').Element;


/**
 * This constructor creates a new version element.
 * 
 * @param {String} value The value of the version.
 * @param {Parameters} parameters Optional parameters used to parameterize this element. 
 * @returns {Symbol} The new version element.
 */
function Version(value, parameters) {
    Element.call(this, types.VERSION, parameters);
    this.value = value ? value : 'v1';  // default value
    if (!/^v([1-9][0-9]*)(\.[1-9][0-9]*)*$/g.test(this.value)) {
        throw new Error('BUG: An invalid version string was passed to the constructor: ' + this.value);
    }
    this.setSource(this.value);
    return this;
}
Version.prototype = Object.create(Element.prototype);
Version.prototype.constructor = Version;
exports.Version = Version;


/**
 * This function increments the specified version number string at the specified version
 * level, for example:
 * <pre>
 *            current             next          what likely changed
 * level 1:    v5.7              v6         (interface/symantic changes)
 * level 2:    v5.7              v5.8       (optimization/bug fixes)
 * level 3:    v5.7              v5.7.1     (changes being tested)
 * </pre>
 * 
 * If no level is specified the last version number in the string is incremented. If a
 * level that is greater than the current number of levels is specified, a new level
 * with the value '1' is appended to the version string.
 * 
 * @param {Version} currentVersion The current version string.
 * @param {Number} level The version level to be incremented. If no level is specified
 * the last version number in the string is incremented.
 * @returns {Version} The next version string.
 */
Version.nextVersion = function(currentVersion, level) {
    var numbers = currentVersion.getNumbers();
    var index = level ? level - 1 : numbers.length - 1;  // convert to JS zero based indexing
    if (index < numbers.length) {
        numbers[index]++;
        numbers.splice(index + 1);
    } else {
        numbers.push(1);
    }
    var nextVersion = new Version('v' + numbers.join('.'), currentVersion.parameters);
    return nextVersion;
};


/**
 * This function determines whether or not a proposed next version string is valid. In order
 * for the next version to be valid the last number in the next version string must be one
 * more than the corresponding number in the current version string; or it must be '1' and
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
    // extract the version numbers
    var currentNumbers = currentVersion.getNumbers();
    var nextNumbers = nextVersion.getNumbers();

    // walk the lists looking for the first different version number
    var index = 0;
    while (index < currentNumbers.length && index < nextNumbers.length) {
        var currentNumber = currentNumbers[index];
        var nextNumber = nextNumbers[index];
        if (currentNumber === nextNumber) {
            index++;
            continue;
        }
        // the last next version number must be one more than the corresponding current version number
        return (nextNumber === currentNumber + 1 && nextNumbers.length === index + 1);
    }
    // check for a next subversion level of one
    return (nextNumbers.length === index + 1 && nextNumbers[index] === 1);
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
    var thisType = this.constructor.name;
    var thatType = that.constructor.name;
    if (thisType !== thatType) {
        return thisType.localeCompare(thatType);
    }

    // compare numbers
    var thisNumbers = this.getNumbers();
    var thatNumbers = that.getNumbers();
    var index = 0;
    while (index < thisNumbers.length && index < thatNumbers.length) {
        if (thisNumbers[index] < thatNumbers[index]) return -1;
        if (thisNumbers[index] > thatNumbers[index]) return 1;
        index++;
    }

    // so far they are the same...
    if (thisNumbers.length < thatNumbers.length) return -1;
    if (thisNumbers.length > thatNumbers.length) return 1;

    // they are exactly the same version numbers
    return 0;
};


/**
 * This method returns the version numbers in an array.
 * 
 * @returns {Array} The version numbers.
 */
Version.prototype.getNumbers = function() {
    var numbers = [];
    var tokens = this.value.slice(1).split('.');
    tokens.forEach(function(token) {
        numbers.push(Number(token));
    });
    return numbers;
};
