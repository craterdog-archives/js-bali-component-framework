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
 * This abstract class defines the methods that all components must support.
 */
const URL = require('url').URL;
const utilities = require('../utilities');
const Exception = require('../composites/Exception').Exception;
const formatter = new utilities.Formatter();
const validate = utilities.validation.validate;


// PUBLIC FUNCTIONS

/**
 * This function creates a new component of the specified type with the optional
 * parameters that are used to parameterize its type.
 * 
 * @param {String} type The type string for the component.
 * @param {Parameters} parameters Optional parameters used to parameterize this component. 
 * @param {Number} debug A number in the range [0..3].
 * @returns {Component} The new component.
 */
function Component(type, parameters, debug) {
    // analyze the arguments
    parameters = parameters || undefined;  // normalize nulls to undefined
    this.debug = debug || 0;  // default value
    if (this.debug > 1) validate('/bali/abstractions/Component', '$Component', '$type', type, [
        '/javascript/String'
    ], this.debug);
    if (this.debug > 1) validate('/bali/abstractions/Component', '$Component', '$parameters', parameters, [
        '/javascript/Undefined',
        '/bali/composites/Parameters'
    ], this.debug);

    this.isComponent = true;
    this.getType = function() { return type; };
    this.getParameters = function() { return parameters; };
    return this;
}
Component.prototype.constructor = Component;
exports.Component = Component;


// PUBLIC METHODS

/**
 * This method returns whether or not this component has the specified type.
 * 
 * @param {String} type The symbol for the type in question. 
 * @returns {Boolean} Whether or not this component has the specified type.
 */
Component.prototype.isType = function(type) {
    return this.getType() === type;
};


/**
 * This method returns whether or not this component is parameterized.
 * 
 * @returns {Boolean} Whether or not this component is parameterized.
 */
Component.prototype.isParameterized = function() {
    return !!this.getParameters();
};


/**
 * This method returns whether or not this component supports logical operations.
 * <pre>
 *  * false
 *  * true
 *  * not
 *  * and
 *  * sans
 *  * or
 *  * xor
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports logical operations.
 */
Component.prototype.isLogical = function() {
    return false;  // default
};


/**
 * This method returns whether or not this component supports scaling operations.
 * <pre>
 *  * inverse
 *  * sum
 *  * difference
 *  * scaled
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports scaling operations.
 */
Component.prototype.isScalable = function() {
    return false;  // default
};


/**
 * This method returns whether or not this component supports numeric operations.
 * <pre>
 *  * inverse
 *  * reciprocal
 *  * conjugate
 *  * factorial
 *  * sum
 *  * difference
 *  * scaled
 *  * product
 *  * quotient
 *  * remainder
 *  * exponential
 *  * logarithm
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports numeric operations.
 */
Component.prototype.isNumerical = function() {
    return false;  // default
};


/**
 * This method determines whether or not this component can be displayed as a literal
 * value.
 * 
 * @returns {Boolean} Whether or not this component can be displayed as a literal value.
 */
Component.prototype.isLiteral = function() {
    return false;  // default
};


/**
 * This method determines whether or not this component supports iteration:
 * <pre>
 *  * iterator
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports iteration.
 */
Component.prototype.isSequential = function() {
    return false;  // default
};


/**
 * This method determines whether or not this component supports concatenation operations:
 * <pre>
 *  * concatenation
 * </pre>
 * 
 * @returns {Boolean} Whether or not this component supports concatenation operations.
 */
Component.prototype.isChainable = function() {
    return false;  // default
};


/**
 * This method determines whether or not this component is procedural.
 * 
 * @returns {Boolean} Whether or not this component is procedural.
 */
Component.prototype.isProcedural = function() {
    switch (this.getType()) {
        case '$Arguments':
        case '$ArithmeticExpression':
        case '$Block':
        case '$BreakClause':
        case '$CheckoutClause':
        case '$CommitClause':
        case '$ComparisonExpression':
        case '$ComplementExpression':
        case '$ConcatenationExpression':
        case '$ContinueClause':
        case '$DefaultExpression':
        case '$DereferenceExpression':
        case '$DiscardClause':
        case '$EvaluateClause':
        case '$ExponentialExpression':
        case '$FactorialExpression':
        case '$Function':
        case '$FunctionExpression':
        case '$HandleClause':
        case '$IfClause':
        case '$Indices':
        case '$InversionExpression':
        case '$LogicalExpression':
        case '$MagnitudeExpression':
        case '$Message':
        case '$MessageExpression':
        case '$PrecedenceExpression':
        case '$PublishClause':
        case '$QueueClause':
        case '$ReturnClause':
        case '$SaveClause':
        case '$SelectClause':
        case '$Statement':
        case '$Statements':
        case '$Subcomponent':
        case '$SubcomponentExpression':
        case '$ThrowClause':
        case '$Variable':
        case '$WaitClause':
        case '$WhileClause':
        case '$WithClause':
            return true;
        default:
            return false;
    }
};


/**
 * This method determines whether or not this component is an element.
 * 
 * @returns {Boolean} Whether or not this component is an element.
 */
Component.prototype.isElement = function() {
    return false;  // default
};


/**
 * This method determines whether or not this component is a composite.
 * 
 * @returns {Boolean} Whether or not this component is a composite.
 */
Component.prototype.isComposite = function() {
    return false;  // default
};


/**
 * This method determines whether or not this component is a collection.
 * 
 * @returns {Boolean} Whether or not this component is a collection.
 */
Component.prototype.isCollection = function() {
    return false;  // default
};


/**
 * This abstract method returns a boolean value for this component. It allows each component to be
 * used as a boolean in a condition that determines whether of not the component has a meaningful
 * value. Each component decides what is meaningful.  This method must be implemented by a subclass.
 * 
 * @returns {Boolean} Whether or not this component has a meaningful value.
 */
Component.prototype.toBoolean = function() {
    const exception = new Exception({
        $module: '/bali/abstractions/Component',
        $procedure: '$toBoolean',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};


/**
 * This method returns a string representation of the component.
 * 
 * @returns {String} The corresponding string representation.
 */
Component.prototype.toString = function() {
    const string = formatter.formatComponent(this);
    return string;
};


/**
 * This method determines whether or not this component is equal to another component.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Boolean} Whether or not this component is equal to another component.
 */
Component.prototype.isEqualTo = function(that) {
    return this.comparedTo(that) === 0;
};


/**
 * This method compares this component with another object for natural order. It may be
 * overridden with a more efficient implementation by a subclass.
 * 
 * @param {Object} that The object that is being compared.
 * @returns {Number} -1 if this < that; 0 if this === that; and 1 if this > that.
 */
Component.prototype.comparedTo = function(that) {
    const comparator = new utilities.Comparator();
    return comparator.compareComponents(this, that);
};


/**
 * This method determines whether or not the specified pattern matches this component.
 * The pattern may be a bali.pattern element or an composite component containing
 * bali.pattern attributes. In either case, the bali.patterns are evaluated against the
 * string version of the component or its corresponding attribute. If the pattern does
 * not consist of any bali.pattern elements then a strict equality comparison of the
 * attributes listed in the pattern is used for matching. Note, this means that the
 * component may contain additional attributes not found in the pattern component and
 * it still matches.
 * 
 * @param {Component} pattern The pattern to be used for matching.
 * @returns {Boolean} Whether or not this component matches the pattern.
 */
Component.prototype.isMatchedBy = function(pattern) {
    /* Case 1
     * If the pattern component is an actual bali.Pattern element then see if it
     * matches this component.
     */
    if (pattern.isType('$Pattern')) {
        return pattern.matches(this);
    }
    /* Case 2
     * If the pattern component is not an actual bali.Pattern element then the pattern
     * must be the same type as this component to have a chance of matching.
     */
    if (this.getType() !== pattern.getType()) {
        return false;
    }
    /* Case 3
     * If the pattern component and this component are both elements then if they are
     * equal they match.
     */
    if (pattern.isLiteral()) {
        return this.isEqualTo(pattern);
    }
    /* Case 4
     * If the pattern component is a bali.Range then its endpoint patterns must match the
     * endpoints of this component.
     */
    if (pattern.isType('$Range')) {
        if (!this.getFirst().isMatchedBy(pattern.getFirst())) return false;
        if (!this.getLast().isMatchedBy(pattern.getLast())) return false;
        return true;
    }
    /* Case 5
     * If the pattern component is a bali.Association then the pattern key and this key
     * must be EQUAL and the pattern value must MATCH this value.
     */
    if (pattern.isType('$Association')) {
        if (!this.getKey().isEqualTo(pattern.getKey())) return false;  // try the next one
        if (!this.getValue().isMatchedBy(pattern.getValue())) throw false;  // abort the search
        return true;  // they match
    }
    /* Case 6
     * If the pattern component is sequential then each of its items must match an
     * item in this component. Note: if the pattern item is an association with a
     * value of 'none' then this component should not contain an association with
     * that key and a non-'none' value. If the pattern item is an association with a
     * value of 'any' then this component may or may not have an item with that key.
     */
    if (pattern.isSequential()) {
        // iterate through a pattern's items
        const patternIterator = pattern.getIterator();
        outer: while (patternIterator.hasNext()) {
            var patternItem = patternIterator.getNext();
            var thisIterator = this.getIterator();
            try { while (thisIterator.hasNext()) {
                var thisItem = thisIterator.getNext();
                if (thisItem.isMatchedBy(patternItem)) continue outer;
            } } catch (e) {
                return false;  // aborted, an association value that should be 'none' wasn't
            }
            if (patternItem.isType('$Association')) {
                var patternValue = patternItem.getValue();
                if (patternValue.isType('$Pattern') && (
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
    const exception = new Exception({
        $module: '/bali/abstractions/Component',
        $procedure: '$isMatchedBy',
        $exception: '$invalidParameter',
        $component: this,
        $parameter: pattern,
        $text: 'An invalid pattern was passed to match.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
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
 * This abstract method accepts a visitor as part of the visitor pattern. It must be
 * implemented by a subclass.
 * 
 * @param {Visitor} visitor The visitor that wants to visit this component.
 */
Component.prototype.acceptVisitor = function(visitor) {
    const exception = new Exception({
        $module: '/bali/abstractions/Component',
        $procedure: '$acceptVisitor',
        $exception: '$abstractMethod',
        $text: 'An abstract method must be implemented by a subclass.'
    });
    if (this.debug > 0) console.error(exception.toString());
    throw exception;
};
