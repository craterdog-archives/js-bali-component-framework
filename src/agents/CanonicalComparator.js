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
 * This class implements the methods for a canonical comparator that compares components
 * for their natural ordering.
 */
const utilities = require('../utilities');
const abstractions = require('../abstractions');


/**
 * This constructor creates a new canonical comparator agent that can be used to compare two
 * components for their natural ordering.
 *
 * @param {Number} debug A number in the range 0..3.
 * @returns {Comparator} The new canonical comparator agent.
 */
const CanonicalComparator = function(debug) {
    abstractions.Comparator.call(
        this,
        ['/bali/agents/CanonicalComparator'],
        debug
    );
    return this;
};
CanonicalComparator.prototype = Object.create(abstractions.Comparator.prototype);
CanonicalComparator.prototype.constructor = CanonicalComparator;
exports.CanonicalComparator = CanonicalComparator;


// PUBLIC METHODS

/**
 * This method compares two components for their ordering.
 *
 * @param {Component} first The first component to be compared.
 * @param {Component} second The second component to be compared.
 * @returns {Number} -1 if first < second; 0 if first === second; and 1 if first > second.
 *
 */
CanonicalComparator.prototype.ranking = function(first, second) {

    // handle undefined objects
    if (first === null) first = undefined;  // normalize nulls
    if (second === null) second = undefined;  // normalize nulls
    if (first !== undefined && second === undefined) return 1;  // anything is greater than nothing
    if (first === undefined && second !== undefined) return -1;  // nothing is less than anything
    if (first === undefined && second === undefined) return 0;  // nothing is equal to nothing

    // handle boolean types
    if (typeof first === 'boolean' && typeof second === 'boolean') {
        return Math.sign(Math.fround(first) - Math.fround(second));
    }
    if (first.isComponent && typeof second === 'boolean') {
        return this.ranking(first, this.componentize(second));
    }
    if (typeof first === 'boolean' && second.isComponent) {
        return this.ranking(this.componentize(first), second);
    }

    // handle number types
    if (typeof first === 'number' && typeof second === 'number') {
        if (first.toString() === second.toString()) return 0;  // handle NaN
        return Math.sign(Math.fround(first) - Math.fround(second));
    }
    if (first.isComponent && typeof second === 'number') {
        return this.ranking(first, this.componentize(second));
    }
    if (typeof first === 'number' && second.isComponent) {
        return this.ranking(this.componentize(first), second);
    }

    // handle string types
    if (typeof first === 'string' && typeof second === 'string') {
        return Math.sign(first.localeCompare(second));
    }
    if (first.isComponent && typeof second === 'string') {
        return this.ranking(first, this.componentize(second));
    }
    if (typeof first === 'string' && second.isComponent) {
        return this.ranking(this.componentize(first), second);
    }

    // handle heterogeneous types
    if (first.isComponent && second.isComponent && first.getType() !== second.getType()) {
        return this.ranking(first.getType(), second.getType());
    }
    if (first.constructor.name !== second.constructor.name) {
        return this.ranking(first.constructor.name, second.constructor.name);
    }

    // handle buffers
    if (first.constructor.name === 'Buffer') {
        return Math.sign(Buffer.compare(first, second));
    }

    // handle arrays
    if (Array.isArray(first)) {
        var firstIndex = 0;
        var secondIndex = 0;
        var result = 0;
        while (result === 0 && firstIndex < first.length && secondIndex < second.length) {
            result = this.ranking(first[firstIndex++], second[secondIndex++]);
        }
        if (result !== 0) return result;  // found a difference
        if (firstIndex < first.length) return 1;  // the first is longer than the second
        if (secondIndex < second.length) return -1;  // the second is longer than the first
        return 0;  // they are the same length and all values are equal
    }

    // handle composites
    if (first.isComponent && first.isType('/bali/collections/Association')) {
        var result = this.ranking(first.getKey(), second.getKey());
        if (result === 0) result = this.ranking(first.getValue(), second.getValue());
        return result;
    }
    if (first.isComponent && first.isType('/bali/utilities/Exception')) {
        return this.ranking(first.getAttributes(), second.getAttributes());
    }
    if (first.isComponent && first.isType('/bali/trees/Procedure')) {
        return this.ranking(first.getCode(), second.getCode());
    }
    if (first.isComponent && first.isType('/bali/trees/Node')) {
        // leaf nodes are treated as empty arrays
        return this.ranking(first.toArray(), second.toArray());
    }
    if (first.isComponent && first.isType('/bali/abstractions/Comparator')) {
        return 0;
    }
    if (first.isComponent && first.isType('/bali/abstractions/Sorter')) {
        return this.ranking(first.getComparator(), second.getComparator());
    }
    if (first.isComponent && first.isType('/bali/abstractions/Iterator')) {
        var result = this.ranking(first.getSlot(), second.getSlot());
        if (result === 0) this.ranking(first.getSequence(), second.getSequence());
    }

    // handle ranges
    if (first.getFirst) {
        var result = this.ranking(first.getFirst(), second.getFirst());
        if (result === 0) {
            // compare the first part of the connectors
            if (first.getConnector().startsWith('<') && second.getConnector().startsWith('.')) return 1;
            if (first.getConnector().startsWith('.') && second.getConnector().startsWith('<')) return -1;
            // special case when last element is undefined it means GREATEST possible value
            if (first.getLast() === undefined && second.getLast() !== undefined) return 1;
            if (first.getLast() !== undefined && second.getLast() === undefined) return -1;
            // otherwise, compare the two last elements
            result = this.ranking(first.getLast(), second.getLast());
        }
        if (result === 0) {
            // compare the last part of the connectors
            if (first.getConnector().endsWith('.') && second.getConnector().endsWith('<')) return 1;
            if (first.getConnector().endsWith('<') && second.getConnector().endsWith('.')) return -1;
        }
        return result;
    }

    // handle collections
    if (first.isComponent && first.isType('/bali/abstractions/Collection')) {
        return this.ranking(first.toArray(), second.toArray());
    }

    // handle specific element types
    if (first.isComponent && first.isType('/bali/elements/Number')) {
        var result = this.ranking(first.getReal(), second.getReal());
        if (result === 0) result = this.ranking(first.getImaginary(), second.getImaginary());
        return result;
    }
    if (first.isComponent && (first.isType('/bali/elements/Duration') || first.isType('/bali/elements/Moment'))) {
        // note: can't use Math.fround() on the integer values used to store temporal elements
        return Math.sign(first.getValue() - second.getValue());
    }
    if (first.getReal) {
        return this.ranking(first.getReal(), second.getReal());
    }
    if (first.getValue) {
        return this.ranking(first.getValue(), second.getValue());
    }

    // anything else, compare their string values (handles both JS and Bali types)
    return this.ranking(first.toString(), second.toString());
};


/**
 * This method determines whether or not the specified component matches the specified
 * pattern. The pattern may be a bali.pattern element or a collection component containing
 * bali.pattern attributes. In either case, the bali.patterns are evaluated against the
 * string version of the component or its corresponding attribute. If the pattern does
 * not consist of any bali.pattern elements then a strict equality comparison of the
 * attributes listed in the pattern is used for matching. Note, this means that the
 * component may contain additional attributes not found in the pattern component and
 * it still matches.
 *
 * @param {Component} component The target component for matching.
 * @param {Component} pattern The pattern to be used for matching.
 * @returns {Boolean} Whether or not the component matches the pattern.
 */
CanonicalComparator.prototype.doesMatch = function(component, pattern) {
    /* Case 1
     * If the pattern component is an actual bali.Pattern element then see if it
     * matches the target component.
     */
    if (pattern.isType('/bali/elements/Pattern')) {
        return pattern.matches(component);
    }
    /* Case 2
     * If the pattern component is not an actual bali.Pattern element then the pattern
     * must be the same type as the target component to have a chance of matching.
     */
    if (component.getType() !== pattern.getType()) {
        return false;
    }
    /* Case 3
     * If the pattern component and the target component are both literals then if they are
     * equal they match.
     */
    if (pattern.supportsInterface('/bali/interfaces/Literal')) {
        return this.areEqual(component, pattern);
    }
    /* Case 4
     * If the pattern component is a bali.Association then the pattern key and the target key
     * must be EQUAL and the pattern value must MATCH the target value.
     */
    if (pattern.isType('/bali/collections/Association')) {
        if (!this.areEqual(component.getKey(), pattern.getKey())) return false;  // try the next one
        if (!this.doesMatch(component.getValue(), pattern.getValue())) throw false;  // abort the search
        return true;  // they match
    }
    /* Case 5
     * If the pattern component is sequential then each of its items must match an
     * item in the target component. Note: if the pattern item is an association with a
     * value of 'none' then the target component should not contain an association with
     * that key and a non-'none' value. If the pattern item is an association with a
     * value of 'any' then the target component may or may not have an item with that key.
     */
    if (pattern.supportsInterface('/bali/interfaces/Sequential')) {
        // iterate through a pattern's items
        const patternIterator = pattern.getIterator();
        outer: while (patternIterator.hasNext()) {
            var patternItem = patternIterator.getNext();
            var componentIterator = component.getIterator();
            try { while (componentIterator.hasNext()) {
                var componentItem = componentIterator.getNext();
                if (this.doesMatch(componentItem, patternItem)) continue outer;
            } } catch (e) {
                return false;  // aborted, an association value that should be 'none' wasn't
            }
            if (patternItem.isType('/bali/collections/Association')) {
                var patternValue = patternItem.getValue();
                if (patternValue.isType('/bali/elements/Pattern') && (
                    patternValue.toString() === 'any' ||
                    patternValue.toString() === 'none'
                )) {
                    continue;  // fine, 'any' or 'none' matched no actual value
                }
            }
            return false;  // aborted, we didn't find a matching item
        }
        return true;  // all pattern items matched successfully
    }
    const exception = new utilities.Exception({
        $module: '/bali/abstractions/Component',
        $procedure: '$doesMatch',
        $exception: '$invalidParameter',
        $component: component,
        $parameter: pattern,
        $text: 'An invalid pattern was passed to match.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};

